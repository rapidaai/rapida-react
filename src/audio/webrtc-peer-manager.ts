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
    // Close existing connection before creating a new one to prevent leaks
    if (this.peerConnection) {
      try { this.peerConnection.close(); } catch { }
      this.peerConnection = null;
      this._isConnected = false;
    }

    this.peerConnection = new RTCPeerConnection({
      iceServers: ICE_SERVERS,
      iceTransportPolicy: ICE_TRANSPORT_POLICY,
      bundlePolicy: BUNDLE_POLICY,
    });

    // Remote audio track — fallback to wrapping track in stream if server
    // doesn't attach a MediaStream to the track
    this.peerConnection.ontrack = (event) => {
      const stream = event.streams[0] ?? new MediaStream([event.track]);
      this.onRemoteTrack(stream);
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

  /** Close the peer connection and reset state */
  close(): void {
    try {
      if (this.peerConnection) {
        // Detach event handlers BEFORE closing so the "closed" state change
        // does not fire onDisconnected — callers decide whether to propagate
        // the disconnect (e.g. disconnectAudioOnly keeps the session alive).
        this.peerConnection.onconnectionstatechange = null;
        this.peerConnection.ontrack = null;
        this.peerConnection.onicecandidate = null;

        // Stop all sender tracks so the browser releases the microphone
        // indicator. RTCPeerConnection.close() alone does not guarantee
        // that tracks are stopped in every browser.
        this.peerConnection.getSenders().forEach(sender => {
          try { sender.track?.stop(); } catch { /* best-effort */ }
        });
        this.peerConnection.close();
      }
    } catch (error) {
      console.warn("Error closing peer connection", error);
    }
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
    const audioTransceiver = transceivers.find(t => t.receiver.track?.kind === "audio");

    if (!audioTransceiver) {
      console.warn("No audio transceiver found in offer");
      const answer = await this.peerConnection!.createAnswer();
      await this.peerConnection!.setLocalDescription(answer);
      return;
    }

    if (track) {
      // Audio mode — bidirectional
      audioTransceiver.direction = "sendrecv";
      try {
        await audioTransceiver.sender.replaceTrack(track);
      } catch (error) {
        console.error("Failed to replace audio track", error);
      }
      this.setCodecPreferences(audioTransceiver);
    } else {
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
      // Use sender capabilities for send-side codec preference ordering
      const senderCaps = RTCRtpSender.getCapabilities("audio");
      const receiverCaps = RTCRtpReceiver.getCapabilities("audio");
      const codecs = senderCaps?.codecs ?? receiverCaps?.codecs;
      if (!codecs) return;

      const mimeTypeLower = (c: RTCRtpCodec) => c.mimeType.toLowerCase();
      // Prefer Opus with specific parameters for mono voice
      const opus = codecs.filter(c => mimeTypeLower(c) === "audio/opus");
      const others = codecs.filter(c => mimeTypeLower(c) !== "audio/opus");
      transceiver.setCodecPreferences([...opus, ...others]);
    } catch (error) {
      console.warn("Failed to set codec preferences", error);
    }
  }
}
