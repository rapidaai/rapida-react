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
import { loadRawAudioProcessor } from "./raw-audio-processor";
import { loadAudioConcatProcessor } from "./audio-concat-processor";
import { isChrome } from "@/rapida/utils";

const LIBSAMPLERATE_JS =
  "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js";

/**
 * WebRTC Audio Manager
 * 
 * Pure WebRTC-based audio capture with browser's native AEC, noise suppression,
 * and auto gain control. Audio data flows through gRPC to backend.
 * 
 * Features:
 * - Native browser echo cancellation via getUserMedia constraints
 * - Shared AudioContext for input/output correlation
 * - AudioWorklet-based processing for low latency
 * - Device selection support for input and output
 */
export class WebRTCAudioManager {
  private audioContext: AudioContext | null = null;
  private inputStream: MediaStream | null = null;

  // Input components
  private inputSource: MediaStreamAudioSourceNode | null = null;
  private inputAnalyser: AnalyserNode | null = null;
  private inputWorklet: AudioWorkletNode | null = null;

  // Output components
  private outputAnalyser: AnalyserNode | null = null;
  private outputWorklet: AudioWorkletNode | null = null;
  private outputGain: GainNode | null = null;
  private outputDestination: MediaStreamAudioDestinationNode | null = null;
  private outputAudioElement: HTMLAudioElement | null = null;

  // Store options for device updates
  private recorderOptions: RecorderOptions | null = null;
  private playerOptions: PlayerOptions | null = null;

  private isInitialized = false;
  private volume: number = 1;

  /**
   * Create WebRTC audio manager with shared context
   */
  public static async create(
    recorderOptions: RecorderOptions,
    playerOptions: PlayerOptions
  ): Promise<WebRTCAudioManager> {
    const manager = new WebRTCAudioManager();
    await manager.initialize(recorderOptions, playerOptions);
    return manager;
  }

  private constructor() { }

  /**
   * Initialize the audio pipeline
   */
  private async initialize(
    recorderOptions: RecorderOptions,
    playerOptions: PlayerOptions
  ): Promise<void> {
    try {
      // Store options for device updates
      this.recorderOptions = recorderOptions;
      this.playerOptions = playerOptions;

      // Use input sample rate for STT quality
      const sampleRate = recorderOptions.sampleRate;

      // Check if browser supports sample rate constraint
      const supportsSampleRateConstraint =
        navigator.mediaDevices.getSupportedConstraints().sampleRate;

      // Create shared AudioContext
      this.audioContext = new AudioContext(
        supportsSampleRateConstraint ? { sampleRate } : {}
      );

      // Load worklet modules
      if (!supportsSampleRateConstraint) {
        await this.audioContext.audioWorklet.addModule(LIBSAMPLERATE_JS);
      }
      await loadRawAudioProcessor(this.audioContext.audioWorklet);
      await loadAudioConcatProcessor(this.audioContext.audioWorklet);

      // Setup input pipeline (microphone capture)
      await this.setupInput(recorderOptions);

      // Setup output pipeline (speaker playback)
      await this.setupOutput(playerOptions);

      await this.audioContext.resume();
      this.isInitialized = true;
    } catch (error) {
      await this.close();
      throw error;
    }
  }

  /**
   * Setup input audio pipeline with WebRTC constraints for AEC
   */
  private async setupInput(recorderOptions: RecorderOptions): Promise<void> {
    if (!this.audioContext) {
      throw new Error("AudioContext not available");
    }

    // Get microphone stream with WebRTC audio processing
    const constraints = this.getAudioConstraints(
      recorderOptions.sampleRate,
      recorderOptions.device
    );

    this.inputStream = await navigator.mediaDevices.getUserMedia({
      audio: constraints,
    });

    // Create audio nodes
    this.inputSource = this.audioContext.createMediaStreamSource(this.inputStream);
    this.inputAnalyser = this.audioContext.createAnalyser();
    this.inputWorklet = new AudioWorkletNode(this.audioContext, "raw-audio-processor");

    // Configure worklet for audio format
    this.inputWorklet.port.postMessage({
      type: "setFormat",
      format: recorderOptions.format,
      sampleRate: recorderOptions.sampleRate,
    });

    // Connect: source -> analyser -> worklet
    this.inputSource.connect(this.inputAnalyser);
    this.inputAnalyser.connect(this.inputWorklet);
  }

  /**
   * Setup output audio pipeline
   */
  private async setupOutput(playerOptions: PlayerOptions): Promise<void> {
    if (!this.audioContext) {
      throw new Error("AudioContext not available");
    }

    // Create audio nodes
    this.outputAnalyser = this.audioContext.createAnalyser();
    this.outputGain = this.audioContext.createGain();
    this.outputWorklet = new AudioWorkletNode(this.audioContext, "audio-concat-processor");

    // Configure worklet for audio format
    this.outputWorklet.port.postMessage({
      type: "setFormat",
      format: playerOptions.format,
    });

    // Create MediaStreamDestination for device selection support
    this.outputDestination = this.audioContext.createMediaStreamDestination();

    // Connect: worklet -> gain -> analyser -> destination
    this.outputWorklet.connect(this.outputGain);
    this.outputGain.connect(this.outputAnalyser);
    this.outputAnalyser.connect(this.outputDestination);

    // Create audio element for playback with device selection
    this.outputAudioElement = new Audio();
    this.outputAudioElement.srcObject = this.outputDestination.stream;
    this.outputAudioElement.autoplay = true;

    // Set output device if specified
    if (playerOptions.device && 'setSinkId' in this.outputAudioElement) {
      try {
        await (this.outputAudioElement as any).setSinkId(playerOptions.device);
      } catch (err) {
        console.warn("Failed to set output device:", err);
      }
    }

    // Start playback
    await this.outputAudioElement.play().catch((err) => {
      console.warn("Audio autoplay blocked, will play on user interaction:", err);
    });
  }

  /**
   * Get optimized audio constraints for WebRTC
   * Enables browser's native AEC, noise suppression, and auto gain control
   */
  private getAudioConstraints(
    sampleRate: number,
    deviceId?: string
  ): MediaTrackConstraints {
    const baseConstraints: MediaTrackConstraints = {
      sampleRate: { ideal: sampleRate },
      channelCount: { ideal: 1 },
    };

    // Add device ID if specified
    if (deviceId) {
      baseConstraints.deviceId = { exact: deviceId };
    }

    if (isChrome()) {
      // Chrome needs explicit true values for audio processing
      return {
        ...baseConstraints,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        // Chrome-specific constraints for better quality
        // @ts-ignore - Chrome-specific constraints
        googEchoCancellation: true,
        // @ts-ignore
        googAutoGainControl: true,
        // @ts-ignore
        googNoiseSuppression: true,
        // @ts-ignore
        googHighpassFilter: true,
      };
    }

    // Default constraints for other browsers
    return {
      ...baseConstraints,
      echoCancellation: { ideal: true },
      noiseSuppression: { ideal: true },
      autoGainControl: { ideal: true },
    };
  }

  /**
   * Get input worklet for audio data callbacks
   */
  get inputWorkletNode(): AudioWorkletNode | null {
    return this.inputWorklet;
  }

  /**
   * Get output worklet for playing audio
   */
  get outputWorkletNode(): AudioWorkletNode | null {
    return this.outputWorklet;
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
   * Get output gain node
   */
  get outputGainNode(): GainNode | null {
    return this.outputGain;
  }

  /**
   * Get the audio context
   */
  get context(): AudioContext | null {
    return this.audioContext;
  }

  /**
   * Get the input media stream
   */
  get mediaStream(): MediaStream | null {
    return this.inputStream;
  }

  /**
   * Set muted state for input
   */
  public setMuted(isMuted: boolean): void {
    this.inputWorklet?.port.postMessage({ type: "setMuted", isMuted });
  }

  /**
   * Set output volume
   */
  public setVolume(volume: number): void {
    this.volume = volume;
    if (this.outputGain) {
      this.outputGain.gain.value = volume;
    }
  }

  /**
   * Add audio chunk to output buffer for playback
   */
  public addAudioChunk(chunk: ArrayBuffer): void {
    if (this.outputWorklet && this.outputGain) {
      this.outputGain.gain.value = this.volume;
      this.outputWorklet.port.postMessage({ type: "clearInterrupted" });
      this.outputWorklet.port.postMessage({
        type: "buffer",
        buffer: chunk,
      });
    }
  }

  /**
   * Interrupt audio playback immediately
   */
  public interruptAudio(): void {
    if (this.outputWorklet && this.outputGain && this.audioContext) {
      this.outputWorklet.port.postMessage({ type: "interrupt" });
      this.outputGain.gain.exponentialRampToValueAtTime(
        0.0001,
        this.audioContext.currentTime + 2
      );
      setTimeout(() => {
        if (this.outputGain) {
          this.outputGain.gain.value = this.volume;
        }
        this.outputWorklet?.port.postMessage({ type: "clearInterrupted" });
      }, 2000);
    }
  }

  /**
   * Fade out audio gradually
   */
  public fadeOutAudio(duration: number = 2): void {
    if (!this.outputGain || !this.audioContext) return;

    this.outputWorklet?.port.postMessage({ type: "resetInterrupt" });

    const currentTime = this.audioContext.currentTime;
    this.outputGain.gain.exponentialRampToValueAtTime(
      0.0001,
      currentTime + duration
    );

    setTimeout(() => {
      if (this.outputGain) {
        this.outputGain.gain.value = this.volume;
      }
    }, duration * 1000);
  }

  /**
   * Check if manager is ready
   */
  public get isReady(): boolean {
    return this.isInitialized;
  }

  /**
   * Update input device (microphone)
   */
  public async setInputDevice(deviceId: string): Promise<void> {
    if (!this.recorderOptions || !this.audioContext) {
      throw new Error("Manager not initialized");
    }

    // Update stored options
    this.recorderOptions.device = deviceId;

    // Stop old input tracks
    this.inputStream?.getTracks().forEach((track) => track.stop());

    // Disconnect old input source
    this.inputSource?.disconnect();

    // Get new microphone stream with device
    const constraints = this.getAudioConstraints(
      this.recorderOptions.sampleRate,
      deviceId
    );

    this.inputStream = await navigator.mediaDevices.getUserMedia({
      audio: constraints,
    });

    // Reconnect input pipeline
    this.inputSource = this.audioContext.createMediaStreamSource(this.inputStream);
    if (this.inputAnalyser) {
      this.inputSource.connect(this.inputAnalyser);
    }
  }

  /**
   * Update output device (speaker)
   */
  public async setOutputDevice(deviceId: string): Promise<void> {
    if (!this.outputAudioElement || !this.playerOptions) {
      throw new Error("Manager not initialized or output device selection not supported");
    }

    if (!('setSinkId' in this.outputAudioElement)) {
      throw new Error("setSinkId not supported in this browser");
    }

    // Update stored options
    this.playerOptions.device = deviceId;

    // Set new output device
    await (this.outputAudioElement as any).setSinkId(deviceId);
  }

  /**
   * Close and cleanup all resources
   */
  public async close(): Promise<void> {
    // Stop input tracks
    this.inputStream?.getTracks().forEach((track) => track.stop());

    // Stop and cleanup audio element
    if (this.outputAudioElement) {
      this.outputAudioElement.pause();
      this.outputAudioElement.srcObject = null;
      this.outputAudioElement = null;
    }

    // Disconnect audio nodes
    this.inputSource?.disconnect();
    this.outputDestination?.disconnect();

    // Close audio context
    await this.audioContext?.close();

    // Clear references
    this.audioContext = null;
    this.inputStream = null;
    this.inputSource = null;
    this.inputAnalyser = null;
    this.inputWorklet = null;
    this.outputAnalyser = null;
    this.outputWorklet = null;
    this.outputGain = null;
    this.outputDestination = null;
    this.recorderOptions = null;
    this.playerOptions = null;
    this.isInitialized = false;
  }
}

/**
 * Feature detection for WebRTC audio
 */
export function supportsWebRTCAudioEnhancements(): boolean {
  return (
    typeof AudioContext !== "undefined" &&
    typeof AudioWorkletNode !== "undefined" &&
    typeof navigator !== "undefined" &&
    typeof navigator.mediaDevices !== "undefined" &&
    typeof navigator.mediaDevices.getUserMedia !== "undefined"
  );
}
