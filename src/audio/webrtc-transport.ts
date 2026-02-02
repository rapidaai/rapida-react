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

import { RecorderOptions, PlayerOptions } from "@/rapida/types/agent-config";
import { isChrome } from "@/rapida/utils";

// Audio constants matching server configuration
const OPUS_SAMPLE_RATE = 48000;
const DEFAULT_ICE_SERVERS: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];

/** ICE Candidate structure matching server format */
interface ICECandidateData {
  candidate: string;
  sdpMid: string;
  sdpMLineIndex: number;
  usernameFragment?: string;
}

/**
 * Signaling message types for WebRTC negotiation
 * Matches assistant-api WebRTC signaling protocol
 */
interface SignalingMessage {
  type: "connect" | "config" | "offer" | "answer" | "ice_candidate" | "disconnect" | "error" | "content" | "clear" | "audio_ready";
  sdp?: string;
  candidate?: ICECandidateData;
  sessionId?: string;
  error?: string;
  metadata?: {
    ice_servers?: RTCIceServer[];
    audio_codec?: string;
    sample_rate?: number;
    content_type?: string;
    text?: string;
    message_id?: string;
    completed?: boolean;
    conversation_id?: number;
  };
}

/**
 * WebRTC Transport Configuration
 */
export interface WebRTCTransportConfig {
  /** WebSocket signaling endpoint URL */
  signalingUrl: string;
  /** ICE servers for STUN/TURN */
  iceServers?: RTCIceServer[];
  /** Recorder options for input audio */
  recorderOptions: RecorderOptions;
  /** Player options for output audio */
  playerOptions: PlayerOptions;
}

/** WebRTC Transport Events */
export interface WebRTCTransportCallbacks {
  /** Called when connection state changes */
  onConnectionStateChange?: (state: RTCPeerConnectionState) => void;
  /** Called when audio data is received from remote */
  onAudioReceived?: (data: ArrayBuffer) => void;
  /** Called on error */
  onError?: (error: Error) => void;
  /** Called when fully connected */
  onConnected?: () => void;
  /** Called when disconnected */
  onDisconnected?: () => void;
  /** Called when text content is received from assistant */
  onTextReceived?: (text: string, messageId?: string, completed?: boolean) => void;
  /** Called when user transcription is received */
  onUserTranscription?: (text: string, messageId?: string, completed?: boolean) => void;
  /** Called when audio should be cleared (interruption) */
  onClear?: () => void;
  /** Called when configuration is received (conversation ID, etc.) */
  onConfiguration?: (conversationId: number) => void;
}

/** WebRTC connection statistics */
export interface WebRTCStats {
  /** Total packets received */
  packetsReceived: number;
  /** Total packets lost */
  packetsLost: number;
  /** Total packets sent */
  packetsSent: number;
  /** Total bytes received */
  bytesReceived: number;
  /** Total bytes sent */
  bytesSent: number;
  /** Current jitter in seconds */
  jitter: number;
  /** Packet loss rate (0-1) */
  lossRate: number;
}

/**
 * WebRTC Transport
 *
 * Native WebRTC-based audio transport using:
 * - WebSocket for signaling (SDP/ICE exchange)
 * - WebRTC media tracks (SRTP) for audio
 *
 * Benefits over gRPC streaming:
 * - Lower latency (direct peer connection)
 * - Built-in encryption (SRTP)
 * - Browser-optimized audio pipeline
 * - Better NAT traversal via ICE
 */
export class WebRTCTransport {
  private config: WebRTCTransportConfig;
  private callbacks: WebRTCTransportCallbacks;

  // WebRTC components
  private peerConnection: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;

  // Signaling
  private signalingSocket: WebSocket | null = null;
  private sessionId: string | null = null;

  // Audio elements
  private audioElement: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private inputAnalyser: AnalyserNode | null = null;
  private outputAnalyser: AnalyserNode | null = null;

  // State
  private isConnected = false;
  private isMuted = false;
  private volume = 1;
  private statsInterval: ReturnType<typeof setInterval> | null = null;
  private lastPacketsReceived = 0;
  private lastPacketsLost = 0;

  constructor(config: WebRTCTransportConfig, callbacks: WebRTCTransportCallbacks = {}) {
    this.config = {
      ...config,
      iceServers: config.iceServers || DEFAULT_ICE_SERVERS,
    };
    this.callbacks = callbacks;
  }

  /**
   * Create and connect a WebRTC transport
   */
  static async create(
    config: WebRTCTransportConfig,
    callbacks: WebRTCTransportCallbacks = {}
  ): Promise<WebRTCTransport> {
    const transport = new WebRTCTransport(config, callbacks);
    await transport.connect();
    return transport;
  }

  /**
   * Connect to the WebRTC server
   * 
   * Flow (server as offerer):
   * 1. Get local media stream
   * 2. Connect signaling WebSocket
   * 3. Send "connect" message to server
   * 4. Receive "config" with ICE servers
   * 5. Create peer connection with server's ICE servers
   * 6. Receive "offer" from server
   * 7. Create and send "answer"
   */
  async connect(): Promise<void> {
    try {
      // 1. Get local media stream
      await this.setupLocalMedia();

      // 2. Connect signaling WebSocket
      await this.connectSignaling();

      // 3. Send connect message - server will respond with config and offer
      this.sendSignalingMessage({ type: "connect" });

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
    if (track) track.enabled = true;

    // Setup audio context for visualization
    this.audioContext = new AudioContext();
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }

    const source = this.audioContext.createMediaStreamSource(this.localStream);
    this.inputAnalyser = this.audioContext.createAnalyser();
    this.inputAnalyser.fftSize = 256;
    source.connect(this.inputAnalyser);
  }

  /**
   * Get audio constraints - echo cancellation ON, others OFF
   * Testing if noise suppression/auto gain cause clipping
   */
  private getAudioConstraints(): MediaTrackConstraints {
    const { sampleRate, device } = this.config.recorderOptions;

    const baseConstraints: MediaTrackConstraints = {
      sampleRate: { ideal: sampleRate },
      channelCount: { ideal: 1 },
      // Echo cancellation ON to prevent echo
      echoCancellation: true,
      // Keep these OFF to test if they cause clipping
      noiseSuppression: false,
      autoGainControl: false,
    };

    if (device) {
      baseConstraints.deviceId = { exact: device };
    }

    if (isChrome()) {
      return {
        ...baseConstraints,
        // @ts-ignore Chrome-specific
        googEchoCancellation: true,
        // @ts-ignore - keep OFF
        googAutoGainControl: false,
        // @ts-ignore - keep OFF
        googNoiseSuppression: false,
        // @ts-ignore - keep OFF
        googHighpassFilter: false,
      };
    }

    return baseConstraints;
  }

  /**
   * Setup RTCPeerConnection
   */
  private setupPeerConnection(): void {
    this.peerConnection = new RTCPeerConnection({ iceServers: this.config.iceServers });

    // Add local audio track
    if (this.localStream) {
      const track = this.localStream.getAudioTracks()[0];
      if (track) {
        const sender = this.peerConnection.addTrack(track, this.localStream);
        const transceiver = this.peerConnection.getTransceivers().find(t => t.sender === sender);
        if (transceiver) {
          transceiver.direction = "sendrecv";
          this.setCodecPreferences(transceiver);
        }
      }
    }

    // Handle remote audio
    this.peerConnection.ontrack = (event) => {
      this.remoteStream = event.streams[0];
      this.setupRemoteAudio(event.streams[0]);
    };

    // Handle ICE candidates
    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        const c = event.candidate.toJSON();
        this.sendSignalingMessage({
          type: "ice_candidate",
          sessionId: this.sessionId || undefined,
          candidate: {
            candidate: c.candidate || "",
            sdpMid: c.sdpMid || "",
            sdpMLineIndex: c.sdpMLineIndex || 0,
            usernameFragment: c.usernameFragment || undefined,
          },
        });
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
        this.stopStatsMonitoring();
        this.callbacks.onDisconnected?.();
      }
    };
  }

  /**
   * Setup remote audio playback using HTMLAudioElement.
   * Simple and reliable - no AudioContext interference.
   */
  private async setupRemoteAudio(stream: MediaStream): Promise<void> {
    // Skip if already setup with same stream
    if (this.audioElement?.srcObject === stream) return;

    // Create audio element only once
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.autoplay = true;

      // Set output device if specified
      if (this.config.playerOptions.device && "setSinkId" in this.audioElement) {
        try {
          await (this.audioElement as any).setSinkId(this.config.playerOptions.device);
        } catch { }
      }
    }

    // Set stream and volume
    this.audioElement.srcObject = stream;
    this.audioElement.volume = this.volume;

    // Play immediately - fall back to user interaction if autoplay blocked
    try {
      await this.audioElement.play();
    } catch {
      this.setupUserInteractionHandler();
    }
  }

  /** Set codec preferences to prefer Opus (best quality) over G.711 */
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

  /** Start RTP stats monitoring (for debugging only) */
  private startStatsMonitoring(): void {
    this.stopStatsMonitoring();
    this.statsInterval = setInterval(() => this.updateStats(), 5000);
  }

  /** Stop RTP stats monitoring */
  private stopStatsMonitoring(): void {
    if (this.statsInterval) {
      clearInterval(this.statsInterval);
      this.statsInterval = null;
    }
  }

  /** Update internal stats counters (silent, for getStats() API) */
  private async updateStats(): Promise<void> {
    if (!this.peerConnection) return;
    try {
      const stats = await this.peerConnection.getStats();
      stats.forEach((report) => {
        if (report.type === "inbound-rtp" && report.kind === "audio") {
          this.lastPacketsReceived = report.packetsReceived || 0;
          this.lastPacketsLost = report.packetsLost || 0;
        }
      });
    } catch { }
  }

  /**
   * Setup handler for user interaction to start audio (autoplay policy fallback)
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
   * Manually start audio playback (call from user interaction)
   */
  public async resumeAudio(): Promise<void> {
    if (this.audioContext?.state === "suspended") await this.audioContext.resume();
    if (this.audioElement?.paused) await this.audioElement.play();
  }

  /**
   * Connect WebSocket for signaling
   */
  private connectSignaling(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.signalingSocket = new WebSocket(this.config.signalingUrl);

      this.signalingSocket.onopen = () => resolve();
      this.signalingSocket.onerror = () => reject(new Error("Signaling connection failed"));

      this.signalingSocket.onclose = (event) => {
        if (!event.wasClean && this.isConnected) {
          this.callbacks.onError?.(new Error(`WebSocket closed: ${event.reason || "Unknown"}`));
        }
        this.callbacks.onDisconnected?.();
      };

      this.signalingSocket.onmessage = (event) => {
        try {
          this.handleSignalingMessage(JSON.parse(event.data));
        } catch { }
      };
    });
  }

  /**
   * Handle incoming signaling message
   */
  private async handleSignalingMessage(msg: SignalingMessage): Promise<void> {
    switch (msg.type) {
      case "config":
        if (msg.sessionId) this.sessionId = msg.sessionId;
        if (msg.metadata?.ice_servers) this.config.iceServers = msg.metadata.ice_servers;
        if (msg.metadata?.conversation_id) this.callbacks.onConfiguration?.(msg.metadata.conversation_id);
        this.setupPeerConnection();
        break;

      case "offer":
        if (msg.sdp && this.peerConnection) {
          await this.peerConnection.setRemoteDescription({ type: "offer", sdp: msg.sdp });
          await this.createAndSendAnswer();
        }
        break;

      case "answer":
        if (msg.sdp && this.peerConnection) {
          await this.peerConnection.setRemoteDescription({ type: "answer", sdp: msg.sdp });
        }
        break;

      case "ice_candidate":
        if (msg.candidate && this.peerConnection) {
          await this.peerConnection.addIceCandidate({
            candidate: msg.candidate.candidate,
            sdpMid: msg.candidate.sdpMid,
            sdpMLineIndex: msg.candidate.sdpMLineIndex,
          });
        }
        break;

      case "disconnect":
        await this.close();
        break;

      case "error":
        this.callbacks.onError?.(new Error(msg.error || "Signaling error"));
        break;

      case "content":
        const text = msg.metadata?.text || "";
        const completed = msg.metadata?.completed ?? true;
        if (msg.metadata?.content_type === "text") {
          this.callbacks.onTextReceived?.(text, msg.metadata.message_id, completed);
        } else if (msg.metadata?.content_type === "user_text") {
          this.callbacks.onUserTranscription?.(text, msg.metadata.message_id, completed);
        }
        break;

      case "clear":
        this.callbacks.onClear?.();
        break;

      case "audio_ready":
        if (this.audioContext?.state === "suspended") await this.audioContext.resume();
        if (this.audioElement?.paused) {
          try { await this.audioElement.play(); } catch { }
        }
        break;
    }
  }

  /**
   * Send signaling message
   */
  private sendSignalingMessage(msg: SignalingMessage): void {
    if (this.signalingSocket?.readyState === WebSocket.OPEN) {
      this.signalingSocket.send(JSON.stringify(msg));
    }
  }

  /**
   * Create and send SDP answer
   */
  private async createAndSendAnswer(): Promise<void> {
    if (!this.peerConnection) return;
    const answer = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(answer);
    this.sendSignalingMessage({ type: "answer", sdp: answer.sdp, sessionId: this.sessionId || undefined });
  }

  /** Interrupt audio playback - server handles via jitter buffer timing */
  interruptAudio(): void {
    // No-op: Server-side pacing handles interruption gracefully
    // Muting here would cause audio artifacts
  }

  setMuted(muted: boolean): void {
    this.isMuted = muted;
    this.localStream?.getAudioTracks().forEach(t => t.enabled = !muted);
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

  sendText(text: string): void {
    this.sendSignalingMessage({
      type: "content",
      sessionId: this.sessionId || undefined,
      metadata: {
        content_type: "user_text",
        text: text,
        message_id: `msg_${Date.now()}`,
      },
    });
  }

  get inputAnalyserNode(): AnalyserNode | null { return this.inputAnalyser; }
  get outputAnalyserNode(): AnalyserNode | null { return this.outputAnalyser; }
  get mediaStream(): MediaStream | null { return this.localStream; }
  get remoteMediaStream(): MediaStream | null { return this.remoteStream; }
  get context(): AudioContext | null { return this.audioContext; }
  get connected(): boolean { return this.isConnected; }

  async setInputDevice(deviceId: string): Promise<void> {
    this.config.recorderOptions.device = deviceId;
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
    this.config.playerOptions.device = deviceId;
    if (this.audioElement && "setSinkId" in this.audioElement) {
      await (this.audioElement as any).setSinkId(deviceId);
    }
  }

  /** Get current connection statistics */
  async getStats(): Promise<WebRTCStats | null> {
    if (!this.peerConnection) return null;

    const result: WebRTCStats = {
      packetsReceived: 0,
      packetsLost: 0,
      packetsSent: 0,
      bytesReceived: 0,
      bytesSent: 0,
      jitter: 0,
      lossRate: 0,
    };

    try {
      const stats = await this.peerConnection.getStats();
      stats.forEach(r => {
        if (r.type === "inbound-rtp" && r.kind === "audio") {
          result.packetsReceived = r.packetsReceived || 0;
          result.packetsLost = r.packetsLost || 0;
          result.bytesReceived = r.bytesReceived || 0;
          result.jitter = r.jitter || 0;
          if (result.packetsReceived > 0) {
            result.lossRate = result.packetsLost / (result.packetsReceived + result.packetsLost);
          }
        }
        if (r.type === "outbound-rtp" && r.kind === "audio") {
          result.packetsSent = r.packetsSent || 0;
          result.bytesSent = r.bytesSent || 0;
        }
      });
    } catch { }

    return result;
  }

  /** Start periodic stats monitoring (returns cleanup function) */
  startAudioMonitoring(): () => void {
    this.startStatsMonitoring();
    return () => this.stopStatsMonitoring();
  }

  async close(): Promise<void> {
    // Stop stats monitoring
    this.stopStatsMonitoring();

    if (this.signalingSocket?.readyState === WebSocket.OPEN) {
      this.sendSignalingMessage({ type: "disconnect", sessionId: this.sessionId || undefined });
    }

    this.localStream?.getTracks().forEach(t => t.stop());
    this.localStream = null;

    this.peerConnection?.close();
    this.peerConnection = null;

    this.signalingSocket?.close();
    this.signalingSocket = null;

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
  }
}

/**
 * Check if the browser supports native WebRTC
 */
export function supportsWebRTCTransport(): boolean {
  return (
    typeof RTCPeerConnection !== "undefined" &&
    typeof navigator.mediaDevices?.getUserMedia === "function" &&
    typeof WebSocket !== "undefined"
  );
}
