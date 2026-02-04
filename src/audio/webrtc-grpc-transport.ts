/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 */

import { ConnectionConfig } from "@/rapida/types/connection-config";
import { AgentConfig } from "@/rapida/types/agent-config";
import {
  AgentCallback,
  ConversationAssistantMessage as AssistantMessageWrapper,
  ConversationUserMessage as UserMessageWrapper,
} from "@/rapida/types/agent-callback";
import { AssistantTalk } from "@/rapida/clients/talk";
import {
  AssistantTalkInput,
  AssistantTalkOutput,
  ConversationConfiguration,
  ConversationUserMessage,
  ConversationAssistantMessage,
  ConversationInterruption,
  ConversationDirective,
  // Clean WebRTC signaling types
  ClientSignaling,
  ServerSignaling,
  WebRTCSDP,
  ICECandidate as ProtoICECandidate,
} from "@/rapida/clients/protos/talk-api_pb";
import { AssistantDefinition } from "@/rapida/clients/protos/common_pb";
import { BidirectionalStream } from "@/rapida/clients/types";
import { isChrome } from "@/rapida/utils";

// ============================================================================
// WebRTC Constants - These are hardcoded as they don't change
// ============================================================================

/** ICE servers for STUN */
const ICE_SERVERS: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];

/** ICE transport policy */
const ICE_TRANSPORT_POLICY: RTCIceTransportPolicy = "all";

/** Bundle policy */
const BUNDLE_POLICY: RTCBundlePolicy = "max-bundle";

/** Audio codec (Opus for best quality) */
const AUDIO_CODEC = "opus";

/** Sample rate for Opus */
const OPUS_SAMPLE_RATE = 48000;

/**
 * WebRTC gRPC Transport Configuration
 */
export interface WebRTCGrpcTransportConfig {
  /** Connection configuration with gRPC client */
  connectionConfig: ConnectionConfig;
  /** Agent configuration */
  agentConfig: AgentConfig;
  /** Existing conversation ID to continue */
  conversationId?: string;
}



/**
 * WebRTC Transport with gRPC Signaling
 *
 * Uses gRPC bidirectional stream for signaling (SDP/ICE exchange)
 * and native WebRTC for audio transport.
 *
 * Benefits:
 * - Unified connection management with existing gRPC infrastructure
 * - No separate WebSocket connection needed
 * - Same authentication/authorization as other gRPC calls
 * - Lower latency audio via WebRTC media tracks
 */
export class WebRTCGrpcTransport {
  private config: WebRTCGrpcTransportConfig;
  private callbacks: AgentCallback;

  // WebRTC components
  private peerConnection: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;

  // gRPC Signaling
  private grpcStream: BidirectionalStream<AssistantTalkInput, AssistantTalkOutput> | null = null;
  private sessionId: string | null = null;
  private conversationId: string | null = null;

  // Audio elements
  private audioElement: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private inputAnalyser: AnalyserNode | null = null;
  private outputAnalyser: AnalyserNode | null = null;

  // State
  private isConnected = false;
  private isMuted = false;
  private volume = 1;

  constructor(config: WebRTCGrpcTransportConfig, callbacks: AgentCallback = {}) {
    this.config = config;
    this.callbacks = callbacks;
  }

  /**
   * Create and connect a WebRTC transport
   */
  static async create(
    config: WebRTCGrpcTransportConfig,
    callbacks: AgentCallback = {}
  ): Promise<WebRTCGrpcTransport> {
    const transport = new WebRTCGrpcTransport(config, callbacks);
    await transport.connect();
    return transport;
  }

  /**
   * Connect to the WebRTC server via gRPC signaling
   * 
   * Flow:
   * 1. Get local media stream (microphone)
   * 2. Connect gRPC bidirectional stream
   * 3. Send ConversationConfiguration with agent setup data
   * 4. Server responds with ConnectionConfiguration (session, offer)
   * 5. Create peer connection and send SDP answer
   * 6. Exchange ICE candidates
   */
  async connect(): Promise<void> {
    try {
      // 1. Get local media stream
      await this.setupLocalMedia();

      // 2. Connect gRPC signaling stream
      await this.connectGrpcSignaling();

      // 3. Send initial ConversationConfiguration with agent data
      await this.sendConversationConfiguration();
      console.log("WebRTC gRPC signaling connected and configuration sent");

    } catch (error) {
      this.callbacks.onError?.(error as Error);
      await this.close();
      throw error;
    }
  }

  /**
   * Setup local media stream with audio constraints
   */
  private async setupLocalMedia(): Promise<void> {
    const constraints = this.getAudioConstraints();
    this.localStream = await navigator.mediaDevices.getUserMedia({ audio: constraints, video: false });

    const track = this.localStream.getAudioTracks()[0];
    if (track) {
      track.enabled = true;

      // Detect and store the actual device being used
      // This is important for showing the correct device in the UI when no device was explicitly selected
      const settings = track.getSettings();
      if (settings.deviceId && !this.config.agentConfig.inputOptions.device) {
        this.config.agentConfig.inputOptions.device = settings.deviceId;
      }
    }

    // Setup audio context for visualization
    this.audioContext = new AudioContext();
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }

    const source = this.audioContext.createMediaStreamSource(this.localStream);
    this.inputAnalyser = this.audioContext.createAnalyser();
    // Use larger FFT size for better frequency resolution, especially for voice
    this.inputAnalyser.fftSize = 1024;
    // Smooth the frequency data slightly for better visualization
    this.inputAnalyser.smoothingTimeConstant = 0.4;
    source.connect(this.inputAnalyser);
  }

  /**
   * Get audio constraints
   */
  private getAudioConstraints(): MediaTrackConstraints {
    const baseConstraints: MediaTrackConstraints = {
      sampleRate: { ideal: OPUS_SAMPLE_RATE },
      channelCount: { ideal: 1 },
      echoCancellation: true,
      noiseSuppression: false,
      autoGainControl: false,
    };

    if (this.config.agentConfig.inputOptions.device) {
      baseConstraints.deviceId = { exact: this.config.agentConfig.inputOptions.device };
    }

    if (isChrome()) {
      return {
        ...baseConstraints,
        // @ts-ignore Chrome-specific
        googEchoCancellation: true,
        // @ts-ignore
        googAutoGainControl: false,
        // @ts-ignore
        googNoiseSuppression: false,
        // @ts-ignore
        googHighpassFilter: false,
      };
    }

    return baseConstraints;
  }

  /**
   * Setup RTCPeerConnection with hardcoded config
   */
  private setupPeerConnection(): void {
    this.peerConnection = new RTCPeerConnection({
      iceServers: ICE_SERVERS,
      iceTransportPolicy: ICE_TRANSPORT_POLICY,
      bundlePolicy: BUNDLE_POLICY,
    });

    // Handle remote audio
    this.peerConnection.ontrack = (event) => {
      this.remoteStream = event.streams[0];
      this.setupRemoteAudio(event.streams[0]);
    };

    // Handle ICE candidates
    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        this.sendICECandidate(event.candidate.toJSON());
      }
    };

    // Handle connection state
    this.peerConnection.onconnectionstatechange = () => {
      const state = this.peerConnection?.connectionState;
      this.callbacks.onConnectionStateChange?.(state as RTCPeerConnectionState);

      if (state === "connected") {
        this.isConnected = true;
        this.callbacks.onConnected?.();
      } else if (state === "disconnected" || state === "failed" || state === "closed") {
        this.isConnected = false;
        this.callbacks.onDisconnected?.();
      }
    };
  }

  /**
   * Setup remote audio playback
   */
  private async setupRemoteAudio(stream: MediaStream): Promise<void> {
    if (this.audioElement?.srcObject === stream) return;

    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.autoplay = true;

      if (this.config.agentConfig.outputOptions.device && "setSinkId" in this.audioElement) {
        try {
          await (this.audioElement as any).setSinkId(this.config.agentConfig.outputOptions.device);
        } catch { }
      }
    }

    this.audioElement.srcObject = stream;
    this.audioElement.volume = this.volume;

    try {
      await this.audioElement.play();
    } catch {
      this.setupUserInteractionHandler();
    }
  }

  /** Set codec preferences to prefer Opus */
  private setCodecPreferences(transceiver: RTCRtpTransceiver): void {
    if (!transceiver.setCodecPreferences) return;

    try {
      const capabilities = RTCRtpReceiver.getCapabilities("audio");
      if (!capabilities?.codecs) return;

      const opus = capabilities.codecs.filter(c => c.mimeType.toLowerCase() === "audio/opus");
      const pcmu = capabilities.codecs.filter(c => c.mimeType.toLowerCase() === "audio/pcmu");
      const pcma = capabilities.codecs.filter(c => c.mimeType.toLowerCase() === "audio/pcma");
      const others = capabilities.codecs.filter(c =>
        !["audio/opus", "audio/pcmu", "audio/pcma"].includes(c.mimeType.toLowerCase())
      );

      transceiver.setCodecPreferences([...opus, ...pcmu, ...pcma, ...others]);
    } catch { }
  }

  /**
   * Setup handler for user interaction to start audio
   */
  private setupUserInteractionHandler(): void {
    const startAudio = async () => {
      try {
        if (this.audioContext?.state === "suspended") await this.audioContext.resume();
        if (this.audioElement?.paused) await this.audioElement.play();
      } catch { }
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };
    document.addEventListener("click", startAudio, { once: true });
    document.addEventListener("touchstart", startAudio, { once: true });
  }

  /**
   * Manually start audio playback
   */
  public async resumeAudio(): Promise<void> {
    if (this.audioContext?.state === "suspended") await this.audioContext.resume();
    if (this.audioElement?.paused) await this.audioElement.play();
  }

  /**
   * Connect gRPC bidirectional stream for signaling
   */
  private connectGrpcSignaling(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.grpcStream = AssistantTalk(this.config.connectionConfig);

        this.grpcStream.on("data", (response: AssistantTalkOutput) => {
          this.handleGrpcMessage(response);
        });

        this.grpcStream.on("end", () => {
          // Server closed the stream - this is a server-side disconnect
          this.isConnected = false;
          this.callbacks.onConnectionStateChange?.("disconnected");
          this.callbacks.onDisconnected?.();
        });

        this.grpcStream.on("status", (status: any) => {
          if (status.code !== 0) {
            // Non-zero status code indicates an error or disconnection
            const errorMessage = status.details || `gRPC status code: ${status.code}`;
            this.callbacks.onError?.(new Error(`gRPC error: ${errorMessage}`));

            // Treat non-zero status as a disconnect from server
            if (this.isConnected) {
              this.isConnected = false;
              this.callbacks.onConnectionStateChange?.("failed");
              this.callbacks.onDisconnected?.();
            }
          }
        });

        // Resolve immediately - connection is established when we can write
        resolve();
      } catch (error) {
        reject(new Error(`gRPC signaling connection failed: ${error}`));
      }
    });
  }

  /**
   * Handle incoming gRPC message
   */
  private async handleGrpcMessage(response: AssistantTalkOutput): Promise<void> {
    // Check for server signaling (using clean proto types)
    if (response.hasSignaling()) {
      const signaling = response.getSignaling();
      if (signaling) {
        await this.handleServerSignaling(signaling);
      }
    }

    // Check for conversation configuration (assistant config acknowledgment)
    if (response.hasConfiguration()) {
      const config = response.getConfiguration();
      if (config) {
        const convId = config.getAssistantconversationid();
        if (convId) {
          this.conversationId = convId;
        }
        this.callbacks.onConfiguration?.(config.toObject());
      }
    }

    // Handle other message types
    if (response.hasAssistant()) {
      const assistant = response.getAssistant();
      if (assistant) {
        const wrapped = new AssistantMessageWrapper(assistant);
        this.callbacks.onAssistantMessage?.(wrapped);
      }
    }

    if (response.hasUser()) {
      const user = response.getUser();
      if (user) {
        const wrapped = new UserMessageWrapper(user);
        this.callbacks.onUserMessage?.(wrapped);
      }
    }

    if (response.hasInterruption()) {
      const interruption = response.getInterruption();
      if (interruption) {
        this.callbacks.onInterrupt?.(interruption.toObject());
      }
    }

    if (response.hasDirective()) {
      const directive = response.getDirective();
      if (directive) {
        this.callbacks.onAction?.(directive.toObject());
      }
    }
  }

  /**
   * Handle ServerSignaling from server using clean proto types.
   * Server sends config, SDP offer, ICE candidates, ready, clear, error.
   */
  private async handleServerSignaling(signaling: ServerSignaling): Promise<void> {
    // Store session ID
    const sessionId = signaling.getSessionid();
    if (sessionId) {
      this.sessionId = sessionId;
    }

    const messageCase = signaling.getMessageCase();

    switch (messageCase) {
      case ServerSignaling.MessageCase.CONFIG:
        // Server sends initial config - setup peer connection
        this.setupPeerConnection();
        break;

      case ServerSignaling.MessageCase.SDP:
        const sdpMsg = signaling.getSdp();
        if (sdpMsg) {
          const sdpType = sdpMsg.getType();
          const sdp = sdpMsg.getSdp();

          if (sdpType === WebRTCSDP.SDPType.OFFER && this.localStream) {
            // Create peer connection if it doesn't exist (e.g., after audio reconnect)
            if (!this.peerConnection) {
              this.setupPeerConnection();
            }

            // Server sent offer - set remote description and send answer
            await this.peerConnection!.setRemoteDescription({ type: "offer", sdp });

            // Attach local audio track
            const track = this.localStream.getAudioTracks()[0];
            if (track) {
              const transceivers = this.peerConnection!.getTransceivers();
              const audioTransceiver = transceivers.find(t =>
                t.mid !== null && t.receiver.track?.kind === "audio"
              );

              if (audioTransceiver) {
                audioTransceiver.direction = "sendrecv";
                await audioTransceiver.sender.replaceTrack(track);
                this.setCodecPreferences(audioTransceiver);
              }
            }

            await this.createAndSendAnswer();
          } else if (sdpType === WebRTCSDP.SDPType.ANSWER && this.peerConnection) {
            // Server sent answer (unusual but handle it)
            await this.peerConnection.setRemoteDescription({ type: "answer", sdp });
          }
        }
        break;

      case ServerSignaling.MessageCase.ICECANDIDATE:
        const ice = signaling.getIcecandidate();
        if (ice && this.peerConnection) {
          await this.peerConnection.addIceCandidate({
            candidate: ice.getCandidate(),
            sdpMid: ice.getSdpmid(),
            sdpMLineIndex: ice.getSdpmlineindex(),
          });
        }
        break;

      case ServerSignaling.MessageCase.READY:
        // WebRTC connection is ready for audio
        if (this.audioContext?.state === "suspended") {
          await this.audioContext.resume();
        }
        if (this.audioElement?.paused) {
          try { await this.audioElement.play(); } catch { }
        }
        break;

      case ServerSignaling.MessageCase.CLEAR:
        // Clear/interrupt signal
        this.callbacks.onInterrupt?.(undefined);
        break;

      case ServerSignaling.MessageCase.ERROR:
        const errorMsg = signaling.getError();
        this.callbacks.onError?.(new Error(errorMsg || "Signaling error"));
        break;
    }
  }

  /**
   * Send ConversationConfiguration with agent setup data
   * Includes conversation ID if available (for mode switch, language change, etc.)
   */
  public sendConversationConfiguration(): void {
    if (!this.grpcStream) return;

    console.log("Sending conversation configuration via gRPC signaling");

    const request = new AssistantTalkInput();
    const config = new ConversationConfiguration();

    // Set assistant definition
    const assistantDef = new AssistantDefinition();
    assistantDef.setAssistantid(this.config.agentConfig.id);
    if (this.config.agentConfig.version) {
      assistantDef.setVersion(this.config.agentConfig.version);
    }
    config.setAssistant(assistantDef);

    // Set conversation ID if continuing existing conversation
    if (this.conversationId) {
      config.setAssistantconversationid(this.conversationId);
    } else if (this.config.conversationId) {
      config.setAssistantconversationid(this.config.conversationId);
    }

    // Set agent arguments
    this.config.agentConfig.arguments?.forEach((v, k) => {
      config.getArgsMap().set(k, v);
    });

    // Set agent options
    this.config.agentConfig.options?.forEach((v, k) => {
      config.getOptionsMap().set(k, v);
    });

    // Set metadata
    this.config.agentConfig.metadata?.forEach((v, k) => {
      config.getMetadataMap().set(k, v);
    });

    // Set input/output stream config
    config.setInputconfig(this.config.agentConfig.inputOptions.defaultInputStreamOption);
    config.setOutputconfig(this.config.agentConfig.outputOptions.defaultOutputStreamOption);

    request.setConfiguration(config);
    this.grpcStream.write(request);
  }

  /**
   * Send SDP answer using ClientSignaling proto type
   */
  private sendWebRTCAnswer(sdp: string): void {
    if (!this.grpcStream) return;

    const request = new AssistantTalkInput();
    const signaling = new ClientSignaling();

    // Set session ID
    if (this.sessionId) {
      signaling.setSessionid(this.sessionId);
    }

    // Set SDP answer
    const sdpMsg = new WebRTCSDP();
    sdpMsg.setType(WebRTCSDP.SDPType.ANSWER);
    sdpMsg.setSdp(sdp);
    signaling.setSdp(sdpMsg);

    request.setSignaling(signaling);
    this.grpcStream.write(request);
  }

  /**
   * Send ICE candidate using ClientSignaling proto type
   */
  private sendICECandidate(candidate: RTCIceCandidateInit): void {
    if (!this.grpcStream) return;

    const request = new AssistantTalkInput();
    const signaling = new ClientSignaling();

    // Set session ID
    if (this.sessionId) {
      signaling.setSessionid(this.sessionId);
    }

    // Set ICE candidate
    const ice = new ProtoICECandidate();
    ice.setCandidate(candidate.candidate || "");
    ice.setSdpmid(candidate.sdpMid || "");
    ice.setSdpmlineindex(candidate.sdpMLineIndex || 0);
    signaling.setIcecandidate(ice);

    request.setSignaling(signaling);
    this.grpcStream.write(request);
  }

  /**
   * Create and send SDP answer
   */
  private async createAndSendAnswer(): Promise<void> {
    if (!this.peerConnection) return;
    const answer = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(answer);
    if (answer.sdp) {
      this.sendWebRTCAnswer(answer.sdp);
    }
  }

  /** Interrupt audio playback */
  interruptAudio(): void {
    // No-op: Server-side handles interruption
  }

  setMuted(muted: boolean): void {
    this.isMuted = muted;

    // Disable/enable the local audio tracks
    this.localStream?.getAudioTracks().forEach(t => {
      t.enabled = !muted;
    });

    // Also mute/unmute the sender in the peer connection to stop sending audio
    if (this.peerConnection) {
      const audioSender = this.peerConnection.getSenders().find(s => s.track?.kind === "audio");
      if (audioSender && audioSender.track) {
        audioSender.track.enabled = !muted;
      }
    }
  }

  getMuted(): boolean {
    return this.isMuted;
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.audioElement) this.audioElement.volume = this.volume;
  }

  getVolume(): number {
    return this.volume;
  }

  /**
   * Send text message via gRPC
   */
  sendText(text: string): void {
    if (!this.grpcStream) return;

    const request = new AssistantTalkInput();
    const userMessage = new ConversationUserMessage();
    userMessage.setText(text);
    userMessage.setId(`msg_${Date.now()}`);
    request.setMessage(userMessage);
    this.grpcStream.write(request);
  }

  get inputAnalyserNode(): AnalyserNode | null { return this.inputAnalyser; }
  get outputAnalyserNode(): AnalyserNode | null { return this.outputAnalyser; }
  get mediaStream(): MediaStream | null { return this.localStream; }
  get remoteMediaStream(): MediaStream | null { return this.remoteStream; }
  get context(): AudioContext | null { return this.audioContext; }
  get connected(): boolean { return this.isConnected; }

  async setInputDevice(deviceId: string): Promise<void> {
    this.config.agentConfig.inputOptions.device = deviceId;
    this.localStream?.getTracks().forEach(t => t.stop());

    this.localStream = await navigator.mediaDevices.getUserMedia({
      audio: this.getAudioConstraints(),
      video: false,
    });

    if (this.peerConnection) {
      const sender = this.peerConnection.getSenders().find(s => s.track?.kind === "audio");
      const newTrack = this.localStream.getAudioTracks()[0];
      if (sender && newTrack) await sender.replaceTrack(newTrack);
    }

    if (this.audioContext && this.inputAnalyser) {
      const source = this.audioContext.createMediaStreamSource(this.localStream);
      source.connect(this.inputAnalyser);
    }
  }

  async setOutputDevice(deviceId: string): Promise<void> {
    this.config.agentConfig.outputOptions.device = deviceId;
    if (this.audioElement && "setSinkId" in this.audioElement) {
      await (this.audioElement as any).setSinkId(deviceId);
    }
  }

  /**
   * Disconnect audio only (close WebRTC peer connection) but keep gRPC stream alive
   * Used when switching from audio mode to text mode
   */
  async disconnectAudioOnly(): Promise<void> {
    // Stop local media tracks
    this.localStream?.getTracks().forEach(t => t.stop());
    this.localStream = null;

    // Close peer connection
    this.peerConnection?.close();
    this.peerConnection = null;

    // Pause audio playback
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.srcObject = null;
      this.audioElement = null;
    }

    // Close audio context
    if (this.audioContext?.state !== "closed") {
      await this.audioContext?.close();
    }
    this.audioContext = null;

    this.isConnected = false;
    this.inputAnalyser = null;
    this.outputAnalyser = null;
    this.remoteStream = null;
    this.sessionId = null;
    // Keep conversationId to continue the same conversation

    console.log("Audio disconnected, gRPC stream kept alive");
  }

  /**
   * Reconnect audio (setup local media and trigger WebRTC negotiation)
   * Used when switching from text mode back to audio mode
   * Requires gRPC stream to be still connected
   */
  async reconnectAudio(): Promise<void> {
    if (!this.grpcStream) {
      throw new Error("Cannot reconnect audio: gRPC stream not connected");
    }

    try {
      // 1. Setup local media again
      await this.setupLocalMedia();

      // 2. Send conversation configuration to trigger new WebRTC negotiation
      // The server will respond with a new SDP offer
      this.sendConversationConfiguration();

      console.log("Audio reconnection initiated via gRPC signaling");
    } catch (error) {
      this.callbacks.onError?.(error as Error);
      throw error;
    }
  }

  /**
   * Check if gRPC stream is still connected
   */
  get isGrpcConnected(): boolean {
    return this.grpcStream !== null;
  }

  /**
   * Check if audio (WebRTC peer connection) is connected
   */
  get isAudioConnected(): boolean {
    return this.peerConnection?.connectionState === "connected";
  }

  async close(): Promise<void> {
    // Track if we were connected before closing
    const wasConnected = this.isConnected;

    // Close gRPC stream
    if (this.grpcStream) {
      try {
        this.grpcStream.end();
      } catch { }
      this.grpcStream = null;
    }

    this.localStream?.getTracks().forEach(t => t.stop());
    this.localStream = null;

    this.peerConnection?.close();
    this.peerConnection = null;

    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.srcObject = null;
      this.audioElement = null;
    }

    if (this.audioContext?.state !== "closed") {
      await this.audioContext?.close();
    }
    this.audioContext = null;

    this.isConnected = false;
    this.inputAnalyser = null;
    this.outputAnalyser = null;
    this.remoteStream = null;
    this.sessionId = null;
    this.conversationId = null;

    // Notify callbacks about disconnection if we were connected
    if (wasConnected) {
      this.callbacks.onConnectionStateChange?.("closed");
      this.callbacks.onDisconnected?.();
    }
  }
}

/**
 * Check if the browser supports WebRTC with gRPC signaling
 */
export function supportsWebRTCGrpcTransport(): boolean {
  return (
    typeof RTCPeerConnection !== "undefined" &&
    typeof navigator.mediaDevices?.getUserMedia === "function"
  );
}
