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
 */

import { ConnectionConfig } from "@/rapida/types/connection-config";
import { AgentConfig } from "@/rapida/types/agent-config";
import { AgentCallback } from "@/rapida/types/agent-callback";
import { GrpcSignalingManager } from "./grpc-signaling-manager";
import { WebRTCPeerManager } from "./webrtc-peer-manager";
import { AudioMediaManager } from "./audio-media-manager";
import { MessageProtocolHandler } from "./message-protocol-handler";

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
 * WebRTC Transport with gRPC Signaling — Orchestrator
 *
 * Composes four single-responsibility managers:
 *   - GrpcSignalingManager  → gRPC stream lifecycle & proto message building
 *   - WebRTCPeerManager     → RTCPeerConnection, SDP/ICE, codec prefs
 *   - AudioMediaManager     → local/remote media, devices, mute/volume
 *   - MessageProtocolHandler → incoming response dispatch
 *
 * This class wires the managers together and exposes the public API.
 */
export class WebRTCGrpcTransport {
  private config: WebRTCGrpcTransportConfig;
  private callbacks: AgentCallback;

  // Managers
  private signaling: GrpcSignalingManager;
  private peer: WebRTCPeerManager;
  private audio: AudioMediaManager;
  private protocol: MessageProtocolHandler;

  constructor(config: WebRTCGrpcTransportConfig, callbacks: AgentCallback = {}) {
    this.config = config;
    this.callbacks = callbacks;

    // 1. Audio manager — captures/plays media, manages devices
    this.audio = new AudioMediaManager(config.agentConfig);

    // 2. Peer manager — WebRTC connection, wired to send ICE via signaling
    //    and route remote tracks to audio manager
    this.peer = new WebRTCPeerManager(
      callbacks,
      (candidate) => this.signaling.sendICECandidate(candidate),
      (stream) => this.audio.setupRemoteAudio(stream),
    );

    // 3. Signaling manager — gRPC stream, wired to forward responses to protocol handler
    this.signaling = new GrpcSignalingManager(
      config.connectionConfig,
      config.agentConfig,
      callbacks,
      (response) => this.protocol.handleMessage(response),
      config.conversationId,
    );

    // 4. Protocol handler — dispatches incoming messages to the right manager/callback
    this.protocol = new MessageProtocolHandler(callbacks, this.signaling, this.peer, this.audio);
  }

  // ---------------------------------------------------------------------------
  // Factory
  // ---------------------------------------------------------------------------

  /**
   * Factory — create and connect a transport.
   * @param textOnly  When true, connects gRPC + signaling only (no microphone).
   */
  static async create(
    config: WebRTCGrpcTransportConfig,
    callbacks: AgentCallback = {},
    textOnly: boolean = false,
  ): Promise<WebRTCGrpcTransport> {
    const transport = new WebRTCGrpcTransport(config, callbacks);
    if (textOnly) {
      await transport.connectTextOnly();
    } else {
      await transport.connect();
    }
    return transport;
  }

  // ---------------------------------------------------------------------------
  // Connection lifecycle
  // ---------------------------------------------------------------------------

  /**
   * Connect with full audio (microphone + WebRTC peer + gRPC signaling).
   *
   * Flow:
   * 1. Get local media stream (microphone)
   * 2. Connect gRPC bidirectional stream
   * 3. Send ConversationInitialization
   * 4. Server responds with Signaling (SDP offer, ICE)
   * 5. Create peer connection and send SDP answer
   * 6. Audio flows over WebRTC data channel
   */
  async connect(): Promise<void> {
    try {
      await this.audio.setupLocalMedia();
      await this.signaling.connect();
      this.signaling.sendConversationInitialization();
      console.log("[WebRTCTransport] connected (audio mode)");
    } catch (error) {
      this.callbacks.onError?.(error as Error);
      await this.close();
      throw error;
    }
  }

  /**
   * Connect for text-only mode (gRPC signaling only, no microphone).
   *
   * The server still sends WebRTC Signaling (SDP offers, ICE) even in
   * text mode. We must handle them so the server considers the session
   * properly negotiated. We just skip local media capture.
   *
   * Flow:
   * 1. Connect gRPC bidirectional stream
   * 2. Send ConversationInitialization (stream mode = TEXT)
   * 3. Server sends Signaling → we negotiate WebRTC with no local audio track
   * 4. Text flows over gRPC messages
   */
  async connectTextOnly(): Promise<void> {
    try {
      await this.signaling.connect();
      this.signaling.sendConversationInitialization();
      console.log("[WebRTCTransport] connected (text-only mode)");
    } catch (error) {
      this.callbacks.onError?.(error as Error);
      await this.close();
      throw error;
    }
  }

  /**
   * Disconnect audio only (close WebRTC peer) but keep gRPC stream alive.
   * Used when switching from audio mode to text mode.
   */
  async disconnectAudioOnly(): Promise<void> {
    this.peer.close();
    await this.audio.disconnectAudio();
    console.log("[WebRTCTransport] audio disconnected, gRPC stream kept alive");
  }

  /**
   * Reconnect audio (setup local media and trigger WebRTC negotiation).
   * Used when switching from text mode back to audio mode.
   */
  async reconnectAudio(): Promise<void> {
    if (!this.signaling.isConnected) {
      throw new Error("Cannot reconnect audio: gRPC stream not connected");
    }
    try {
      await this.audio.setupLocalMedia();
      this.signaling.sendConversationConfiguration();
      console.log("[WebRTCTransport] audio reconnection initiated");
    } catch (error) {
      this.callbacks.onError?.(error as Error);
      throw error;
    }
  }

  async close(): Promise<void> {
    const wasConnected = this.peer.isConnected;

    this.signaling.close();
    this.peer.close();
    await this.audio.close();

    if (wasConnected) {
      this.callbacks.onConnectionStateChange?.("closed");
      this.callbacks.onDisconnected?.();
    }
  }

  // ---------------------------------------------------------------------------
  // Messaging (delegated to signaling manager)
  // ---------------------------------------------------------------------------

  sendConversationInitialization(): void { this.signaling.sendConversationInitialization(); }
  sendConversationConfiguration(): void { this.signaling.sendConversationConfiguration(); }
  sendText(text: string): void { this.signaling.sendText(text); }

  // ---------------------------------------------------------------------------
  // Audio controls (delegated to audio & peer managers)
  // ---------------------------------------------------------------------------

  interruptAudio(): void { /* No-op: server-side handles interruption */ }
  resumeAudio(): Promise<void> { return this.audio.resumeAudio(); }

  setMuted(muted: boolean): void {
    this.audio.setMuted(muted);
    this.peer.setAudioEnabled(!muted);
  }
  getMuted(): boolean { return this.audio.getMuted(); }

  setVolume(volume: number): void { this.audio.setVolume(volume); }
  getVolume(): number { return this.audio.getVolume(); }

  async setInputDevice(deviceId: string): Promise<void> {
    await this.audio.setInputDevice(deviceId);
    const newTrack = this.audio.getLocalAudioTrack();
    if (newTrack) await this.peer.replaceTrack(newTrack);
  }

  async setOutputDevice(deviceId: string): Promise<void> {
    await this.audio.setOutputDevice(deviceId);
  }

  // ---------------------------------------------------------------------------
  // Read-only accessors
  // ---------------------------------------------------------------------------

  get inputAnalyserNode(): AnalyserNode | null { return this.audio.inputAnalyserNode; }
  get outputAnalyserNode(): AnalyserNode | null { return this.audio.outputAnalyserNode; }
  get mediaStream(): MediaStream | null { return this.audio.mediaStream; }
  get remoteMediaStream(): MediaStream | null { return this.audio.remoteMediaStream; }
  get context(): AudioContext | null { return this.audio.context; }
  get connected(): boolean { return this.peer.isConnected; }
  get isGrpcConnected(): boolean { return this.signaling.isConnected; }
  get isAudioConnected(): boolean { return this.peer.connection?.connectionState === "connected"; }
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
