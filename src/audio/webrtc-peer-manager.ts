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

import { AgentCallback } from "@/rapida/types/agent-callback";

// ============================================================================
// WebRTC Constants
// ============================================================================

const ICE_SERVERS: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];
const ICE_TRANSPORT_POLICY: RTCIceTransportPolicy = "all";
const BUNDLE_POLICY: RTCBundlePolicy = "max-bundle";

/**
 * WebRTCPeerManager — Owns the RTCPeerConnection lifecycle
 *
 * Responsibilities:
 * - Create / close the RTCPeerConnection
 * - Handle SDP offer/answer exchange
 * - Handle ICE candidate exchange
 * - Set codec preferences (prefer Opus)
 * - Track connection state and fire callbacks
 */
export class WebRTCPeerManager {
  private peerConnection: RTCPeerConnection | null = null;
  private _isConnected = false;

  constructor(
    private callbacks: AgentCallback,
    private onICECandidate: (candidate: RTCIceCandidateInit) => void,
    private onRemoteTrack: (stream: MediaStream) => void,
  ) { }

  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------

  /** Create a new RTCPeerConnection */
  setup(): void {
    this.peerConnection = new RTCPeerConnection({
      iceServers: ICE_SERVERS,
      iceTransportPolicy: ICE_TRANSPORT_POLICY,
      bundlePolicy: BUNDLE_POLICY,
    });

    // Remote audio track
    this.peerConnection.ontrack = (event) => {
      this.onRemoteTrack(event.streams[0]);
    };

    // ICE candidates
    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        this.onICECandidate(event.candidate.toJSON());
      }
    };

    // Connection state
    this.peerConnection.onconnectionstatechange = () => {
      const state = this.peerConnection?.connectionState;
      this.callbacks.onConnectionStateChange?.(state as RTCPeerConnectionState);

      if (state === "connected") {
        this._isConnected = true;
        this.callbacks.onConnected?.();
      } else if (state === "disconnected" || state === "failed" || state === "closed") {
        this._isConnected = false;
        this.callbacks.onDisconnected?.();
      }
    };
  }

  /** Close the peer connection */
  close(): void {
    this.peerConnection?.close();
    this.peerConnection = null;
    this._isConnected = false;
  }

  get isConnected(): boolean { return this._isConnected; }
  get connection(): RTCPeerConnection | null { return this.peerConnection; }

  // ---------------------------------------------------------------------------
  // SDP / ICE
  // ---------------------------------------------------------------------------

  /**
   * Apply an SDP offer, optionally attach local track, and create the answer.
   *
   * In text-only mode `localStream` is null — we still complete the WebRTC
   * negotiation (the server always requires it) but set the transceiver to
   * `recvonly` so no microphone is needed.
   */
  async handleOffer(sdp: string, localStream: MediaStream | null): Promise<void> {
    if (!this.peerConnection) this.setup();

    await this.peerConnection!.setRemoteDescription({ type: "offer", sdp });

    const track = localStream?.getAudioTracks()[0];
    const transceivers = this.peerConnection!.getTransceivers();
    const audioTransceiver = transceivers.find(
      t => t.mid !== null && t.receiver.track?.kind === "audio",
    );

    if (track && audioTransceiver) {
      // Audio mode — bidirectional
      audioTransceiver.direction = "sendrecv";
      await audioTransceiver.sender.replaceTrack(track);
      this.setCodecPreferences(audioTransceiver);
    } else if (audioTransceiver) {
      // Text-only mode — receive only (no microphone)
      audioTransceiver.direction = "recvonly";
    }

    // Create and return answer
    const answer = await this.peerConnection!.createAnswer();
    await this.peerConnection!.setLocalDescription(answer);
  }

  /** Get local SDP (answer) after handleOffer was called */
  getLocalSDP(): string | undefined {
    return this.peerConnection?.localDescription?.sdp;
  }

  /** Apply an SDP answer (unusual server flow) */
  async handleAnswer(sdp: string): Promise<void> {
    if (!this.peerConnection) return;
    await this.peerConnection.setRemoteDescription({ type: "answer", sdp });
  }

  /** Add a remote ICE candidate */
  async addICECandidate(candidate: string, sdpMid: string, sdpMLineIndex: number): Promise<void> {
    if (!this.peerConnection) return;
    await this.peerConnection.addIceCandidate({ candidate, sdpMid, sdpMLineIndex });
  }

  /** Replace the audio track on the existing sender */
  async replaceTrack(track: MediaStreamTrack): Promise<void> {
    if (!this.peerConnection) return;
    const sender = this.peerConnection.getSenders().find(s => s.track?.kind === "audio");
    if (sender) await sender.replaceTrack(track);
  }

  /** Enable / disable the audio sender track (for mute) */
  setAudioEnabled(enabled: boolean): void {
    if (!this.peerConnection) return;
    const sender = this.peerConnection.getSenders().find(s => s.track?.kind === "audio");
    if (sender?.track) sender.track.enabled = enabled;
  }

  // ---------------------------------------------------------------------------
  // Codec preferences
  // ---------------------------------------------------------------------------

  private setCodecPreferences(transceiver: RTCRtpTransceiver): void {
    if (!transceiver.setCodecPreferences) return;
    try {
      const capabilities = RTCRtpReceiver.getCapabilities("audio");
      if (!capabilities?.codecs) return;

      const opus = capabilities.codecs.filter(c => c.mimeType.toLowerCase() === "audio/opus");
      const pcmu = capabilities.codecs.filter(c => c.mimeType.toLowerCase() === "audio/pcmu");
      const pcma = capabilities.codecs.filter(c => c.mimeType.toLowerCase() === "audio/pcma");
      const others = capabilities.codecs.filter(c =>
        !["audio/opus", "audio/pcmu", "audio/pcma"].includes(c.mimeType.toLowerCase()),
      );
      transceiver.setCodecPreferences([...opus, ...pcmu, ...pcma, ...others]);
    } catch { }
  }
}
