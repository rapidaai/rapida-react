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
import { isChrome, isEdge, isWindows, isFirefox, isSinkIdSupported } from "@/rapida/utils";

/** Sample rate for Opus */
const OPUS_SAMPLE_RATE = 48000;

/**
 * Get the appropriate AudioContext class for the current browser.
 * Handles vendor-prefixed versions for older browsers.
 */
function getAudioContextClass(): typeof AudioContext | null {
  if (typeof window === "undefined") return null;
  return (window as any).AudioContext || (window as any).webkitAudioContext || null;
}

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

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({ audio: constraints, video: false });
    } catch (error: any) {
      // On Windows, some browsers may fail with specific constraints
      // Try with simplified constraints as fallback
      if (isWindows() && error?.name === "OverconstrainedError") {
        console.warn("[AudioMediaManager] Retrying with simplified audio constraints for Windows");
        this.localStream = await navigator.mediaDevices.getUserMedia({
          audio: this.getSimplifiedAudioConstraints(),
          video: false,
        });
      } else {
        throw error;
      }
    }

    const track = this.localStream.getAudioTracks()[0];
    if (track) {
      track.enabled = true;

      // Store the actual device being used when none was explicitly selected
      const settings = track.getSettings();
      if (settings.deviceId && !this.agentConfig.inputOptions.device) {
        this.agentConfig.inputOptions.device = settings.deviceId;
      }
    }

    // Audio context for visualization - use vendor-prefixed version if needed
    await this.setupAudioContext();

    if (this.audioContext && this.localStream) {
      const source = this.audioContext.createMediaStreamSource(this.localStream);
      this._inputAnalyser = this.audioContext.createAnalyser();
      this._inputAnalyser.fftSize = 1024;
      this._inputAnalyser.smoothingTimeConstant = 0.4;
      source.connect(this._inputAnalyser);
    }
  }

  /**
   * Setup AudioContext with proper handling for different browsers.
   * Windows browsers (especially Edge) may need special handling.
   */
  private async setupAudioContext(): Promise<void> {
    const AudioContextClass = getAudioContextClass();
    if (!AudioContextClass) {
      console.warn("[AudioMediaManager] AudioContext not available in this browser");
      return;
    }

    try {
      // Create AudioContext with explicit sample rate for Windows compatibility
      const options: AudioContextOptions = {};

      // On Windows, specify sample rate explicitly to avoid potential issues
      if (isWindows()) {
        options.sampleRate = OPUS_SAMPLE_RATE;
      }

      this.audioContext = new AudioContextClass(options);

      // Handle suspended state (common due to autoplay policies)
      if (this.audioContext.state === "suspended") {
        try {
          await this.audioContext.resume();
        } catch (resumeError) {
          console.debug("[AudioMediaManager] Initial AudioContext resume failed, will retry on user interaction", resumeError);
        }
      }
    } catch (error) {
      console.error("[AudioMediaManager] Failed to create AudioContext:", error);
      // Don't throw - audio context is optional (for visualization)
      this.audioContext = null;
    }
  }

  /** Simplified audio constraints for Windows fallback */
  private getSimplifiedAudioConstraints(): MediaTrackConstraints {
    const base: MediaTrackConstraints = {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    };

    if (this.agentConfig.inputOptions.device) {
      // Use 'ideal' instead of 'exact' for better Windows compatibility
      base.deviceId = { ideal: this.agentConfig.inputOptions.device };
    }

    return base;
  }

  /** Build MediaTrackConstraints for getUserMedia */
  private getAudioConstraints(): MediaTrackConstraints {
    const base: MediaTrackConstraints = {
      sampleRate: { ideal: OPUS_SAMPLE_RATE },
      channelCount: { ideal: 1 },
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    };

    if (this.agentConfig.inputOptions.device) {
      // On Windows, use 'ideal' instead of 'exact' for better compatibility
      // as some drivers may not support exact device selection
      if (isWindows()) {
        base.deviceId = { ideal: this.agentConfig.inputOptions.device };
      } else {
        base.deviceId = { exact: this.agentConfig.inputOptions.device };
      }
    }

    // Chrome and Edge (Chromium-based) support additional constraints
    if (isChrome() || isEdge()) {
      return {
        ...base,
        // @ts-ignore Chrome/Edge-specific
        googEchoCancellation: true,
        // @ts-ignore
        googAutoGainControl: true,
        // @ts-ignore
        googNoiseSuppression: true,
        // @ts-ignore
        googHighpassFilter: true,
      };
    }

    // Firefox on Windows may need different handling
    if (isFirefox() && isWindows()) {
      // Firefox doesn't support sampleRate constraint well on Windows
      delete base.sampleRate;
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
      this.audioElement = this.createAudioElement();
      await this.setOutputDeviceOnElement(this.audioElement, this.agentConfig.outputOptions.device);
    }

    this.audioElement.srcObject = stream;
    this.audioElement.volume = this._volume;

    // Setup output analyser for remote audio visualization
    await this.setupOutputAnalyser(stream);

    // Start playback
    await this.startPlayback();
  }

  /**
   * Create and configure the audio element for playback.
   * Handles Windows-specific settings.
   */
  private createAudioElement(): HTMLAudioElement {
    const audio = new Audio();
    audio.autoplay = true;

    // On Windows, ensure proper audio handling
    if (isWindows()) {
      // Prevent potential audio glitches on Windows
      audio.preservesPitch = false;

      // Add event listeners for Windows-specific audio issues
      audio.addEventListener("stalled", () => {
        console.debug("[AudioMediaManager] Audio stalled, attempting recovery");
        this.recoverAudioPlayback();
      });

      audio.addEventListener("waiting", () => {
        console.debug("[AudioMediaManager] Audio waiting for data");
      });
    }

    return audio;
  }

  /**
   * Set the output device on an audio element.
   * Handles browsers that don't support setSinkId.
   */
  private async setOutputDeviceOnElement(element: HTMLAudioElement, deviceId?: string): Promise<void> {
    if (!deviceId) return;

    if (!isSinkIdSupported()) {
      console.warn("[AudioMediaManager] setSinkId not supported in this browser - using default output device");
      return;
    }

    try {
      await (element as any).setSinkId(deviceId);
    } catch (error: any) {
      if (error?.name === "NotFoundError") {
        console.warn(`[AudioMediaManager] Output device ${deviceId} not found, using default`);
      } else if (error?.name === "NotAllowedError") {
        console.warn("[AudioMediaManager] Permission denied for output device selection");
      } else {
        console.warn("[AudioMediaManager] Failed to set output device:", error);
      }
      // Don't throw - fallback to default device
    }
  }

  /**
   * Setup output analyser for remote audio visualization.
   */
  private async setupOutputAnalyser(stream: MediaStream): Promise<void> {
    try {
      // Ensure AudioContext exists for visualization
      if (!this.audioContext) {
        await this.setupAudioContext();
      }

      if (this.audioContext && !this._outputAnalyser) {
        const remoteSource = this.audioContext.createMediaStreamSource(stream);
        this._outputAnalyser = this.audioContext.createAnalyser();
        this._outputAnalyser.fftSize = 1024;
        this._outputAnalyser.smoothingTimeConstant = 0.4;
        remoteSource.connect(this._outputAnalyser);
      }
    } catch (error) {
      console.debug("[AudioMediaManager] Failed to setup output analyser", error);
      // Non-critical - visualization won't work but audio will still play
    }
  }

  /**
   * Start audio playback with proper error handling.
   */
  private async startPlayback(): Promise<void> {
    if (!this.audioElement) return;

    try {
      await this.audioElement.play();
    } catch (error: any) {
      if (error?.name === "NotAllowedError") {
        // Autoplay blocked - setup user interaction handler
        console.debug("[AudioMediaManager] Autoplay blocked, waiting for user interaction");
        this.setupUserInteractionHandler();
      } else {
        console.error("[AudioMediaManager] Failed to start playback:", error);
        this.setupUserInteractionHandler();
      }
    }
  }

  /**
   * Attempt to recover audio playback after a stall (common on Windows).
   */
  private async recoverAudioPlayback(): Promise<void> {
    if (!this.audioElement || !this.remoteStream) return;

    try {
      // Reconnect the stream
      this.audioElement.srcObject = null;
      this.audioElement.srcObject = this.remoteStream;
      await this.audioElement.play();
    } catch (error) {
      console.debug("[AudioMediaManager] Audio recovery failed:", error);
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

  /**
   * Interrupt audio output — immediately silence stale assistant audio.
   *
   * The server clears its output buffer and stops sending new frames,
   * but frames already in the WebRTC jitter buffer / audio pipeline will
   * keep playing for a noticeable moment.  By briefly pausing the
   * HTMLAudioElement we flush the browser's internal audio buffer so the
   * user hears silence right away instead of trailing assistant speech.
   */
  async interruptPlayback(): Promise<void> {
    if (!this.audioElement) return;

    try {
      // Pause playback to flush the browser's internal audio buffer.
      this.audioElement.pause();

      // Detach and re-attach the stream to discard any buffered frames.
      const stream = this.audioElement.srcObject;
      this.audioElement.srcObject = null;
      this.audioElement.srcObject = stream;

      // Resume immediately — new frames from the server (post-interruption)
      // will play as soon as they arrive.
      await this.audioElement.play();
    } catch (error) {
      // play() may throw NotAllowedError if autoplay policy blocks it;
      // non-fatal since the next server audio will trigger playback anyway.
      console.debug("[AudioMediaManager] interruptPlayback recovery play failed", error);
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

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: this.getAudioConstraints(),
        video: false,
      });
    } catch (error: any) {
      // On Windows, retry with simplified constraints if device selection fails
      if (isWindows() && (error?.name === "OverconstrainedError" || error?.name === "NotFoundError")) {
        console.warn("[AudioMediaManager] Device selection failed, retrying with simplified constraints");
        this.localStream = await navigator.mediaDevices.getUserMedia({
          audio: this.getSimplifiedAudioConstraints(),
          video: false,
        });
      } else {
        throw error;
      }
    }

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

    if (!this.audioElement) return;

    await this.setOutputDeviceOnElement(this.audioElement, deviceId);
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
      // Stop all microphone tracks so the browser releases the mic indicator
      this.localStream?.getTracks().forEach(t => t.stop());
      this.localStream = null;

      // Close the AudioContext that holds a MediaStreamSource reference to the
      // microphone.  Without this, browsers (especially Chrome) keep the mic
      // indicator active even after tracks have been stopped.
      if (this.audioContext && this.audioContext.state !== "closed") {
        await this.audioContext.close();
      }
      this.audioContext = null;
      this._inputAnalyser = null;
      this._outputAnalyser = null;

      if (this.audioElement) {
        this.audioElement.pause();
        this.audioElement.srcObject = null;
      }

      this.remoteStream = null;
    } catch (error) {
      console.error("Failed to disconnect audio", error);
    }
  }

  /** Full cleanup - closes audio context and clears all resources */
  async close(): Promise<void> {
    try {
      // disconnectAudio() already handles AudioContext, analysers, and remoteStream
      await this.disconnectAudio();
    } catch (error) {
      console.error("Error during audio cleanup", error);
    }
  }
}
