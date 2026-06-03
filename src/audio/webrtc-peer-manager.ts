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

const DEFAULT_ICE_SERVERS: RTCIceServer[] = [
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
  private peerConnectionGeneration = 0;
  private pendingRemoteICECandidates: RTCIceCandidateInit[] = [];

  constructor(
    private callbacks: AgentCallback,
    private onICECandidate: (candidate: RTCIceCandidateInit) => void,
    private onRemoteTrack: (stream: MediaStream) => void,
  ) { }

  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------

  /** Create a new RTCPeerConnection, optionally using server-provided ICE servers */
  setup(iceServers?: RTCIceServer[]): void {
    // Close existing connection before creating a new one to prevent leaks.
    // Detach handlers BEFORE closing so the "closed" state change does not
    // spuriously fire onDisconnected when the peer is simply being replaced.
    if (this.peerConnection) {
      this.peerConnection.onconnectionstatechange = null;
      this.peerConnection.ontrack = null;
      this.peerConnection.onicecandidate = null;
      try { this.peerConnection.close(); } catch { }
      this.peerConnection = null;
      this._isConnected = false;
    }
    this.peerConnectionGeneration += 1;
    this.pendingRemoteICECandidates = [];

    this.peerConnection = new RTCPeerConnection({
      iceServers: iceServers?.length ? iceServers : DEFAULT_ICE_SERVERS,
      iceTransportPolicy: ICE_TRANSPORT_POLICY,
      bundlePolicy: BUNDLE_POLICY,
    });

    // Remote audio track — fallback to wrapping track in stream if server
    // doesn't attach a MediaStream to the track
    this.peerConnection.ontrack = (event) => {
      const stream = event.streams[0] ?? new MediaStream([event.track]);
      this.onRemoteTrack(stream);
    };

    // ICE candidates are NOT sent individually — all candidates are embedded
    // inline in the answer SDP (complete ICE, not trickle ICE). Trickle ICE
    // candidates sent before the server receives the answer SDP cause
    // "InvalidStateError: remote description is not set" on the server.
    // We capture them via waitForIceGathering() instead.
    this.peerConnection.onicecandidate = (_event) => {
      // no-op: candidates are captured via localDescription after gathering
    };

    // Connection state
    this.peerConnection.onconnectionstatechange = () => {
      const state = this.peerConnection?.connectionState;
      this.callbacks.onConnectionStateChange?.(state as RTCPeerConnectionState);

      if (state === "connected") {
        this._isConnected = true;
        this.callbacks.onConnected?.();
      } else if (state === "disconnected") {
        this._isConnected = false;
      } else if (state === "failed" || state === "closed") {
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

        this.peerConnection.close();
      }
    } catch (error) {
      console.warn("Error closing peer connection", error);
    }
    this.peerConnection = null;
    this._isConnected = false;
    this.peerConnectionGeneration += 1;
    this.pendingRemoteICECandidates = [];
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
   *
   * After setLocalDescription we wait for local ICE gathering to complete
   * so that the answer SDP contains all client candidates inline. This pairs
   * with the server sending a complete offer (all server candidates inline).
   * Together they eliminate trickle-ICE timing bugs that cause Safari to fail.
   */
  async handleOffer(sdp: string, localStream: MediaStream | null): Promise<string | null> {
    if (!this.peerConnection) this.setup();
    const peerConnection = this.peerConnection!;
    const offerPeerGeneration = this.peerConnectionGeneration;

    await peerConnection.setRemoteDescription({ type: "offer", sdp });
    if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
      return null;
    }

    const pendingRemoteICECandidates = this.pendingRemoteICECandidates;
    this.pendingRemoteICECandidates = [];
    for (const pendingRemoteICECandidate of pendingRemoteICECandidates) {
      await peerConnection.addIceCandidate(pendingRemoteICECandidate);
      if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
        return null;
      }
    }

    const localAudioTrack = localStream?.getAudioTracks().find(track => track.readyState === "live") ?? null;
    const requiresAudioPublish = localStream !== null;
    if (requiresAudioPublish && !localAudioTrack) {
      throw new Error("[WebRTCPeerManager] Audio mode requires a live local audio track");
    }

    const offeredTransceivers = peerConnection.getTransceivers();
    const audioTransceiver = offeredTransceivers.find(transceiver => transceiver.sender.track?.kind === "audio")
      ?? offeredTransceivers.find(transceiver => transceiver.receiver.track?.kind === "audio")
      // Voice sessions carry one audio m-line; some browsers fill track metadata later.
      ?? (offeredTransceivers.length === 1 ? offeredTransceivers[0] : null);

    if (!audioTransceiver) {
      if (requiresAudioPublish) {
        throw new Error("[WebRTCPeerManager] Audio mode offer has no usable audio transceiver");
      }

      console.warn("[WebRTCPeerManager] No audio transceiver found in offer");
      const answer = await peerConnection.createAnswer();
      if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
        return null;
      }
      await peerConnection.setLocalDescription(answer);
      if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
        return null;
      }
      await this.waitForIceGathering(peerConnection);
      if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
        return null;
      }
      return peerConnection.localDescription?.sdp ?? null;
    }

    if (localAudioTrack) {
      // Audio mode — bidirectional.
      audioTransceiver.direction = "sendrecv";
      if (audioTransceiver.sender.track !== localAudioTrack) {
        try {
          await audioTransceiver.sender.replaceTrack(localAudioTrack);
        } catch (replaceTrackError) {
          audioTransceiver.direction = "recvonly";
          const replaceTrackErrorMessage = replaceTrackError instanceof Error
            ? replaceTrackError.message
            : String(replaceTrackError);
          throw new Error(`[WebRTCPeerManager] Failed to attach local audio track: ${replaceTrackErrorMessage}`);
        }
      }
      this.setCodecPreferences(audioTransceiver);
    } else {
      // Text-only mode — receive only (no microphone)
      audioTransceiver.direction = "recvonly";
    }

    const answer = await peerConnection.createAnswer();
    if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
      return null;
    }
    await peerConnection.setLocalDescription(answer);
    if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
      return null;
    }

    // Wait for local ICE gathering to complete so the answer SDP contains
    // all client candidates inline. Safari handles the complete SDP reliably;
    // it often drops or misorders trickle ICE candidates that arrive as
    // separate addIceCandidate() calls after the offer/answer exchange.
    await this.waitForIceGathering(peerConnection);
    if (this.peerConnection !== peerConnection || this.peerConnectionGeneration !== offerPeerGeneration) {
      return null;
    }
    const answerSdp = peerConnection.localDescription?.sdp ?? null;
    if (!answerSdp) {
      return null;
    }

    if (requiresAudioPublish) {
      let audioMediaSectionFound = false;
      let insideAudioMediaSection = false;
      let negotiatedAudioDirection = "sendrecv";
      let audioMediaHasLocalStream = false;

      for (const answerSdpLine of answerSdp.split(/\r?\n/)) {
        if (answerSdpLine.startsWith("m=")) {
          insideAudioMediaSection = answerSdpLine.startsWith("m=audio ");
          audioMediaSectionFound = audioMediaSectionFound || insideAudioMediaSection;
          continue;
        }
        if (!insideAudioMediaSection) {
          continue;
        }
        if (
          answerSdpLine === "a=sendrecv" ||
          answerSdpLine === "a=sendonly" ||
          answerSdpLine === "a=recvonly" ||
          answerSdpLine === "a=inactive"
        ) {
          negotiatedAudioDirection = answerSdpLine.slice("a=".length);
        }
        if (answerSdpLine.startsWith("a=msid:")) {
          audioMediaHasLocalStream = true;
        }
      }

      if (!audioMediaSectionFound || negotiatedAudioDirection !== "sendrecv" || !audioMediaHasLocalStream) {
        throw new Error(
          `[WebRTCPeerManager] Audio answer did not publish microphone: audio=${audioMediaSectionFound}, direction=${negotiatedAudioDirection}, msid=${audioMediaHasLocalStream}`,
        );
      }
    }

    return answerSdp;
  }

  /**
   * Wait for the RTCPeerConnection's ICE gathering to reach "complete".
   * Resolves immediately if already complete.
   * Times out after 5 seconds to avoid blocking forever if STUN is unreachable.
   */
  private waitForIceGathering(pc: RTCPeerConnection): Promise<void> {
    if (pc.iceGatheringState === "complete") return Promise.resolve();

    return new Promise<void>((resolve) => {
      let isResolved = false;
      let timeout: ReturnType<typeof setTimeout>;
      const resolveOnce = () => {
        if (isResolved) return;
        isResolved = true;
        clearTimeout(timeout);
        pc.removeEventListener("icegatheringstatechange", handler);
        resolve();
      };
      const handler = () => {
        if (pc.iceGatheringState === "complete") {
          resolveOnce();
        }
      };
      timeout = setTimeout(resolveOnce, 5000);

      pc.addEventListener("icegatheringstatechange", handler);
    });
  }

  /** Get local SDP (answer) after handleOffer was called */
  getLocalSDP(): string | undefined {
    return this.peerConnection?.localDescription?.sdp;
  }

  /** Apply an SDP answer (unusual server flow) */
  async handleAnswer(sdp: string): Promise<void> {
    if (!this.peerConnection) return;
    const peerConnection = this.peerConnection;
    await peerConnection.setRemoteDescription({ type: "answer", sdp });
    const pendingRemoteICECandidates = this.pendingRemoteICECandidates;
    this.pendingRemoteICECandidates = [];
    for (const pendingRemoteICECandidate of pendingRemoteICECandidates) {
      await peerConnection.addIceCandidate(pendingRemoteICECandidate);
    }
  }

  /** Add a remote ICE candidate */
  async addICECandidate(candidate: string, sdpMid: string, sdpMLineIndex: number): Promise<void> {
    if (!this.peerConnection) return;
    const remoteICECandidate: RTCIceCandidateInit = { candidate, sdpMid, sdpMLineIndex };
    if (!this.peerConnection.remoteDescription) {
      this.pendingRemoteICECandidates.push(remoteICECandidate);
      return;
    }
    await this.peerConnection.addIceCandidate(remoteICECandidate);
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
