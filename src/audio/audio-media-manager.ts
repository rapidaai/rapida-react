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

import { AgentConfig } from "@/rapida/types/agent-config";
import { isChrome } from "@/rapida/utils";

/** Sample rate for Opus */
const OPUS_SAMPLE_RATE = 48000;

/**
 * AudioMediaManager — Owns local/remote media and playback
 *
 * Responsibilities:
 * - Capture local microphone stream (getUserMedia)
 * - Build audio constraints (device selection, Chrome quirks)
 * - Manage AudioContext + AnalyserNodes for visualization
 * - Manage remote audio playback (HTMLAudioElement)
 * - Device switching (input / output)
 * - Mute / volume control
 * - User-interaction handler for autoplay policy
 */
export class AudioMediaManager {
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private _inputAnalyser: AnalyserNode | null = null;
  private _outputAnalyser: AnalyserNode | null = null;
  private isMuted = false;
  private _volume = 1;

  constructor(private agentConfig: AgentConfig) { }

  // ---------------------------------------------------------------------------
  // Local media
  // ---------------------------------------------------------------------------

  /** Capture the local microphone stream */
  async setupLocalMedia(): Promise<void> {
    const constraints = this.getAudioConstraints();
    this.localStream = await navigator.mediaDevices.getUserMedia({ audio: constraints, video: false });

    const track = this.localStream.getAudioTracks()[0];
    if (track) {
      track.enabled = true;

      // Store the actual device being used when none was explicitly selected
      const settings = track.getSettings();
      if (settings.deviceId && !this.agentConfig.inputOptions.device) {
        this.agentConfig.inputOptions.device = settings.deviceId;
      }
    }

    // Audio context for visualization
    this.audioContext = new AudioContext();
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }

    const source = this.audioContext.createMediaStreamSource(this.localStream);
    this._inputAnalyser = this.audioContext.createAnalyser();
    this._inputAnalyser.fftSize = 1024;
    this._inputAnalyser.smoothingTimeConstant = 0.4;
    source.connect(this._inputAnalyser);
  }

  /** Build MediaTrackConstraints for getUserMedia */
  private getAudioConstraints(): MediaTrackConstraints {
    const base: MediaTrackConstraints = {
      sampleRate: { ideal: OPUS_SAMPLE_RATE },
      channelCount: { ideal: 1 },
      echoCancellation: true,
      noiseSuppression: false,
      autoGainControl: false,
    };

    if (this.agentConfig.inputOptions.device) {
      base.deviceId = { exact: this.agentConfig.inputOptions.device };
    }

    if (isChrome()) {
      return {
        ...base,
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
    return base;
  }

  // ---------------------------------------------------------------------------
  // Remote audio playback
  // ---------------------------------------------------------------------------

  /** Attach a remote stream and start playback */
  async setupRemoteAudio(stream: MediaStream): Promise<void> {
    this.remoteStream = stream;
    if (this.audioElement?.srcObject === stream) return;

    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.autoplay = true;

      if (this.agentConfig.outputOptions.device && "setSinkId" in this.audioElement) {
        try {
          await (this.audioElement as any).setSinkId(this.agentConfig.outputOptions.device);
        } catch { }
      }
    }

    this.audioElement.srcObject = stream;
    this.audioElement.volume = this._volume;

    // Setup output analyser for remote audio visualization
    try {
      if (this.audioContext && !this._outputAnalyser) {
        const remoteSource = this.audioContext.createMediaStreamSource(stream);
        this._outputAnalyser = this.audioContext.createAnalyser();
        this._outputAnalyser.fftSize = 1024;
        this._outputAnalyser.smoothingTimeConstant = 0.4;
        remoteSource.connect(this._outputAnalyser);
      }
    } catch (error) {
      console.debug("Failed to setup output analyser", error);
    }

    try {
      await this.audioElement.play();
    } catch {
      this.setupUserInteractionHandler();
    }
  }

  /** Resume audio after user interaction */
  async resumeAudio(): Promise<void> {
    try {
      if (this.audioContext?.state === "suspended") {
        await this.audioContext.resume();
      }
      if (this.audioElement?.paused) {
        await this.audioElement.play();
      }
    } catch (error) {
      console.error("Failed to resume audio", error);
      throw error;
    }
  }

  /** Ensure audio context is running and element is playing (e.g. on READY signal) */
  async ensurePlayback(): Promise<void> {
    try {
      if (this.audioContext?.state === "suspended") {
        await this.audioContext.resume();
      }
      if (this.audioElement?.paused) {
        try {
          await this.audioElement.play();
        } catch (error) {
          console.debug("Autoplay failed, waiting for user interaction", error);
        }
      }
    } catch (error) {
      console.error("Failed to ensure playback", error);
    }
  }



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

  // ---------------------------------------------------------------------------
  // Device switching
  // ---------------------------------------------------------------------------

  /** Switch the input (microphone) device */
  async setInputDevice(deviceId: string): Promise<void> {
    this.agentConfig.inputOptions.device = deviceId;
    this.localStream?.getTracks().forEach(t => t.stop());

    this.localStream = await navigator.mediaDevices.getUserMedia({
      audio: this.getAudioConstraints(),
      video: false,
    });

    // Reconnect analyser (disconnect old source first to avoid leaking audio nodes)
    if (this.audioContext && this._inputAnalyser) {
      this._inputAnalyser.disconnect();
      const source = this.audioContext.createMediaStreamSource(this.localStream);
      this._inputAnalyser = this.audioContext.createAnalyser();
      this._inputAnalyser.fftSize = 1024;
      this._inputAnalyser.smoothingTimeConstant = 0.4;
      source.connect(this._inputAnalyser);
    }
  }

  /** Switch the output (speaker) device */
  async setOutputDevice(deviceId: string): Promise<void> {
    this.agentConfig.outputOptions.device = deviceId;
    if (this.audioElement && "setSinkId" in this.audioElement) {
      await (this.audioElement as any).setSinkId(deviceId);
    }
  }

  // ---------------------------------------------------------------------------
  // Mute / volume
  // ---------------------------------------------------------------------------

  setMuted(muted: boolean): void {
    this.isMuted = muted;
    this.localStream?.getAudioTracks().forEach(t => { t.enabled = !muted; });
  }

  getMuted(): boolean { return this.isMuted; }

  setVolume(volume: number): void {
    this._volume = Math.max(0, Math.min(1, volume));
    if (this.audioElement) this.audioElement.volume = this._volume;
  }

  getVolume(): number { return this._volume; }

  // ---------------------------------------------------------------------------
  // Getters
  // ---------------------------------------------------------------------------

  get inputAnalyserNode(): AnalyserNode | null { return this._inputAnalyser; }
  get outputAnalyserNode(): AnalyserNode | null { return this._outputAnalyser; }
  get mediaStream(): MediaStream | null { return this.localStream; }
  get remoteMediaStream(): MediaStream | null { return this.remoteStream; }
  get context(): AudioContext | null { return this.audioContext; }

  /** Get the new audio track after setInputDevice (caller wires it to peer) */
  getLocalAudioTrack(): MediaStreamTrack | undefined {
    return this.localStream?.getAudioTracks()[0];
  }

  // ---------------------------------------------------------------------------
  // Cleanup
  // ---------------------------------------------------------------------------

  /** Disconnect audio (for text mode) - stops local media but keeps gRPC stream */
  async disconnectAudio(): Promise<void> {
    try {
      this.localStream?.getTracks().forEach(t => t.stop());
      this.localStream = null;

      if (this.audioElement) {
        this.audioElement.pause();
        this.audioElement.srcObject = null;
      }
    } catch (error) {
      console.error("Failed to disconnect audio", error);
    }
  }

  /** Full cleanup - closes audio context and clears all resources */
  async close(): Promise<void> {
    try {
      await this.disconnectAudio();

      // Clean up audio context and analysers
      if (this.audioContext?.state !== "closed") {
        await this.audioContext?.close();
      }
      this.audioContext = null;
      this._inputAnalyser = null;
      this._outputAnalyser = null;
      this.remoteStream = null;
    } catch (error) {
      console.error("Error during audio cleanup", error);
    }
  }
}
