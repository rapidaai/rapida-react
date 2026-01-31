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

/**
 * ICE Candidate structure matching server format
 */
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
  type: "connect" | "config" | "offer" | "answer" | "ice_candidate" | "disconnect" | "error";
  sdp?: string;
  candidate?: ICECandidateData;
  sessionId?: string;
  error?: string;
  metadata?: {
    ice_servers?: RTCIceServer[];
    audio_codec?: string;
    sample_rate?: number;
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

/**
 * WebRTC Transport Events
 */
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
}

/**
 * WebRTC Transport
 * 
 * Native WebRTC-based audio transport that uses:
 * - WebSocket for signaling (SDP/ICE exchange) only
 * - WebRTC media tracks (SRTP) for actual audio transport
 * 
 * This is more efficient than streaming audio over gRPC because:
 * - Lower latency (direct peer connection)
 * - Built-in encryption (SRTP)
 * - Browser-optimized audio processing
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

  /**
   * Create a new WebRTC transport
   */
  constructor(config: WebRTCTransportConfig, callbacks: WebRTCTransportCallbacks = {}) {
    this.config = {
      ...config,
      iceServers: config.iceServers || [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" },
      ],
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

    this.localStream = await navigator.mediaDevices.getUserMedia({
      audio: constraints,
      video: false,
    });

    // Setup audio context for visualization
    this.audioContext = new AudioContext({
      sampleRate: this.config.recorderOptions.sampleRate,
    });

    const source = this.audioContext.createMediaStreamSource(this.localStream);
    this.inputAnalyser = this.audioContext.createAnalyser();
    this.inputAnalyser.fftSize = 256;
    source.connect(this.inputAnalyser);
  }

  /**
   * Get audio constraints with WebRTC processing enabled
   */
  private getAudioConstraints(): MediaTrackConstraints {
    const { sampleRate, device } = this.config.recorderOptions;

    const baseConstraints: MediaTrackConstraints = {
      sampleRate: { ideal: sampleRate },
      channelCount: { ideal: 1 },
    };

    if (device) {
      baseConstraints.deviceId = { exact: device };
    }

    if (isChrome()) {
      return {
        ...baseConstraints,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        // @ts-ignore Chrome-specific
        googEchoCancellation: true,
        // @ts-ignore
        googAutoGainControl: true,
        // @ts-ignore
        googNoiseSuppression: true,
        // @ts-ignore
        googHighpassFilter: true,
      };
    }

    return {
      ...baseConstraints,
      echoCancellation: { ideal: true },
      noiseSuppression: { ideal: true },
      autoGainControl: { ideal: true },
    };
  }

  /**
   * Setup RTCPeerConnection
   */
  private setupPeerConnection(): void {
    this.peerConnection = new RTCPeerConnection({
      iceServers: this.config.iceServers,
    });

    // Add local tracks to peer connection
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => {
        this.peerConnection!.addTrack(track, this.localStream!);
      });
    }

    // Handle remote tracks (audio from server)
    this.peerConnection.ontrack = (event) => {
      console.log("Remote track received:", event.track.kind);
      this.remoteStream = event.streams[0];
      this.setupRemoteAudio(event.streams[0]);
    };

    // Handle ICE candidates - send to server in expected format
    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        const candidateJson = event.candidate.toJSON();
        this.sendSignalingMessage({
          type: "ice_candidate",
          sessionId: this.sessionId || undefined,
          candidate: {
            candidate: candidateJson.candidate || "",
            sdpMid: candidateJson.sdpMid || "",
            sdpMLineIndex: candidateJson.sdpMLineIndex || 0,
            usernameFragment: candidateJson.usernameFragment || undefined,
          },
        });
      }
    };

    // Handle connection state changes
    this.peerConnection.onconnectionstatechange = () => {
      const state = this.peerConnection?.connectionState;
      console.log("WebRTC connection state:", state);

      this.callbacks.onConnectionStateChange?.(state as RTCPeerConnectionState);

      if (state === "connected") {
        this.isConnected = true;
        this.callbacks.onConnected?.();
      } else if (state === "disconnected" || state === "failed" || state === "closed") {
        this.isConnected = false;
        this.callbacks.onDisconnected?.();
      }
    };

    // Handle ICE connection state
    this.peerConnection.oniceconnectionstatechange = () => {
      console.log("ICE connection state:", this.peerConnection?.iceConnectionState);
    };
  }

  /**
   * Setup remote audio playback
   */
  private setupRemoteAudio(stream: MediaStream): void {
    // Create audio element for playback
    this.audioElement = new Audio();
    this.audioElement.srcObject = stream;
    this.audioElement.autoplay = true;
    this.audioElement.volume = this.volume;

    // Set output device if specified
    if (this.config.playerOptions.device && "setSinkId" in this.audioElement) {
      (this.audioElement as any).setSinkId(this.config.playerOptions.device).catch((err: Error) => {
        console.warn("Failed to set output device:", err);
      });
    }

    // Setup output analyser for visualization
    if (this.audioContext) {
      const source = this.audioContext.createMediaStreamSource(stream);
      this.outputAnalyser = this.audioContext.createAnalyser();
      this.outputAnalyser.fftSize = 256;
      source.connect(this.outputAnalyser);
    }

    // Start playback
    this.audioElement.play().catch((err) => {
      console.warn("Audio autoplay blocked:", err);
    });
  }

  /**
   * Connect WebSocket for signaling
   */
  private connectSignaling(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.signalingSocket = new WebSocket(this.config.signalingUrl);

      this.signalingSocket.onopen = () => {
        console.log("Signaling WebSocket connected");
        resolve();
      };

      this.signalingSocket.onerror = (error) => {
        console.error("Signaling WebSocket error:", error);
        reject(new Error("Failed to connect to signaling server"));
      };

      this.signalingSocket.onclose = () => {
        console.log("Signaling WebSocket closed");
      };

      this.signalingSocket.onmessage = (event) => {
        this.handleSignalingMessage(JSON.parse(event.data));
      };
    });
  }

  /**
   * Handle incoming signaling message
   */
  private async handleSignalingMessage(msg: SignalingMessage): Promise<void> {
    console.log("Received signaling message:", msg.type);

    switch (msg.type) {
      case "config":
        // Server sends config with ICE servers and audio settings
        if (msg.sessionId) {
          this.sessionId = msg.sessionId;
        }
        if (msg.metadata?.ice_servers) {
          // Update ICE servers from server config
          this.config.iceServers = msg.metadata.ice_servers;
        }
        // Setup peer connection with server's ICE config
        this.setupPeerConnection();
        break;

      case "offer":
        // Server sends offer - create and send answer
        if (msg.sdp && this.peerConnection) {
          await this.peerConnection.setRemoteDescription({
            type: "offer",
            sdp: msg.sdp,
          });
          await this.createAndSendAnswer();
        }
        break;

      case "answer":
        // If we sent an offer, handle answer (fallback mode)
        if (msg.sdp && this.peerConnection) {
          await this.peerConnection.setRemoteDescription({
            type: "answer",
            sdp: msg.sdp,
          });
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
        console.log("Server requested disconnect");
        await this.close();
        break;

      case "error":
        console.error("Signaling error:", msg.error);
        this.callbacks.onError?.(new Error(msg.error || "Unknown signaling error"));
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
   * Create and send SDP answer (response to server's offer)
   */
  private async createAndSendAnswer(): Promise<void> {
    if (!this.peerConnection) return;

    const answer = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(answer);

    this.sendSignalingMessage({
      type: "answer",
      sdp: answer.sdp,
      sessionId: this.sessionId || undefined,
    });
  }

  /**
   * Create and send SDP offer (fallback - client as offerer)
   */
  private async createAndSendOffer(): Promise<void> {
    if (!this.peerConnection) return;

    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);

    this.sendSignalingMessage({
      type: "offer",
      sdp: offer.sdp,
      sessionId: this.sessionId || undefined,
    });
  }

  /**
   * Set muted state
   */
  setMuted(muted: boolean): void {
    this.isMuted = muted;
    this.localStream?.getAudioTracks().forEach((track) => {
      track.enabled = !muted;
    });
  }

  /**
   * Get muted state
   */
  getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Set output volume
   */
  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  /**
   * Get output volume
   */
  getVolume(): number {
    return this.volume;
  }

  /**
   * Get input analyser for visualization
   */
  get inputAnalyserNode(): AnalyserNode | null {
    return this.inputAnalyser;
  }

  /**
   * Get output analyser for visualization
   */
  get outputAnalyserNode(): AnalyserNode | null {
    return this.outputAnalyser;
  }

  /**
   * Get local media stream
   */
  get mediaStream(): MediaStream | null {
    return this.localStream;
  }

  /**
   * Get remote media stream
   */
  get remoteMediaStream(): MediaStream | null {
    return this.remoteStream;
  }

  /**
   * Get audio context
   */
  get context(): AudioContext | null {
    return this.audioContext;
  }

  /**
   * Check if connected
   */
  get connected(): boolean {
    return this.isConnected;
  }

  /**
   * Update input device
   */
  async setInputDevice(deviceId: string): Promise<void> {
    this.config.recorderOptions.device = deviceId;

    // Stop old tracks
    this.localStream?.getTracks().forEach((track) => track.stop());

    // Get new stream with device
    const constraints = this.getAudioConstraints();
    this.localStream = await navigator.mediaDevices.getUserMedia({
      audio: constraints,
      video: false,
    });

    // Replace tracks in peer connection
    if (this.peerConnection) {
      const senders = this.peerConnection.getSenders();
      const audioSender = senders.find((s) => s.track?.kind === "audio");
      const newTrack = this.localStream.getAudioTracks()[0];

      if (audioSender && newTrack) {
        await audioSender.replaceTrack(newTrack);
      }
    }

    // Update input analyser
    if (this.audioContext && this.inputAnalyser) {
      const source = this.audioContext.createMediaStreamSource(this.localStream);
      source.connect(this.inputAnalyser);
    }
  }

  /**
   * Update output device
   */
  async setOutputDevice(deviceId: string): Promise<void> {
    this.config.playerOptions.device = deviceId;

    if (this.audioElement && "setSinkId" in this.audioElement) {
      await (this.audioElement as any).setSinkId(deviceId);
    }
  }

  /**
   * Close the transport
   */
  async close(): Promise<void> {
    // Send disconnect message to server
    if (this.signalingSocket?.readyState === WebSocket.OPEN) {
      this.sendSignalingMessage({
        type: "disconnect",
        sessionId: this.sessionId || undefined,
      });
    }

    // Stop local media tracks
    this.localStream?.getTracks().forEach((track) => track.stop());
    this.localStream = null;

    // Close peer connection
    this.peerConnection?.close();
    this.peerConnection = null;

    // Close signaling socket
    this.signalingSocket?.close();
    this.signalingSocket = null;

    // Stop audio playback
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
