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
 * Provides enhanced echo cancellation and lower latency by using:
 * 1. RTCPeerConnection loopback - Triggers browser's best AEC algorithm
 * 2. Shared AudioContext - Better correlation between input/output for AEC
 * 3. Insertable Streams (when available) - Lower processing latency
 * 
 * Audio still flows through gRPC - this only enhances browser-side capture/playback
 */
export class WebRTCAudioManager {
  private audioContext: AudioContext | null = null;
  private peerConnection: RTCPeerConnection | null = null;
  private loopbackConnection: RTCPeerConnection | null = null;
  private inputStream: MediaStream | null = null;
  private processedStream: MediaStream | null = null;

  // Input components
  private inputAnalyser: AnalyserNode | null = null;
  private inputWorklet: AudioWorkletNode | null = null;

  // Output components
  private outputAnalyser: AnalyserNode | null = null;
  private outputWorklet: AudioWorkletNode | null = null;
  private outputGain: GainNode | null = null;

  private isInitialized = false;
  private volume: number = 1;

  /**
   * Create WebRTC-enhanced audio manager with shared context
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
   * Initialize the WebRTC audio pipeline
   */
  private async initialize(
    recorderOptions: RecorderOptions,
    playerOptions: PlayerOptions
  ): Promise<void> {
    try {
      // Use shared sample rate (prefer input rate for STT quality)
      const sampleRate = recorderOptions.sampleRate;

      // Create shared AudioContext for better AEC correlation
      const supportsSampleRateConstraint =
        navigator.mediaDevices.getSupportedConstraints().sampleRate;

      this.audioContext = new AudioContext(
        supportsSampleRateConstraint ? { sampleRate } : {}
      );

      // Load worklet modules
      if (!supportsSampleRateConstraint) {
        await this.audioContext.audioWorklet.addModule(LIBSAMPLERATE_JS);
      }
      await loadRawAudioProcessor(this.audioContext.audioWorklet);
      await loadAudioConcatProcessor(this.audioContext.audioWorklet);

      // Setup WebRTC loopback for enhanced AEC
      await this.setupWebRTCLoopback(recorderOptions);

      // Setup input pipeline
      await this.setupInput(recorderOptions);

      // Setup output pipeline
      await this.setupOutput(playerOptions);

      await this.audioContext.resume();
      this.isInitialized = true;
    } catch (error) {
      await this.close();
      throw error;
    }
  }

  /**
   * Setup WebRTC peer connection loopback
   * This tricks the browser into using its full AEC pipeline
   */
  private async setupWebRTCLoopback(recorderOptions: RecorderOptions): Promise<void> {
    // Get raw microphone stream first
    const constraints = this.getAudioConstraints(recorderOptions.sampleRate);
    this.inputStream = await navigator.mediaDevices.getUserMedia({
      audio: constraints,
    });

    // Create peer connections for loopback
    this.peerConnection = new RTCPeerConnection({
      iceServers: [], // No ICE needed for loopback
    });
    this.loopbackConnection = new RTCPeerConnection({
      iceServers: [],
    });

    // Connect ICE candidates between peers
    this.peerConnection.onicecandidate = (e) => {
      if (e.candidate) {
        this.loopbackConnection?.addIceCandidate(e.candidate);
      }
    };
    this.loopbackConnection.onicecandidate = (e) => {
      if (e.candidate) {
        this.peerConnection?.addIceCandidate(e.candidate);
      }
    };

    // Setup processed stream receiver
    this.loopbackConnection.ontrack = (e) => {
      this.processedStream = e.streams[0];
    };

    // Add input track to peer connection
    this.inputStream.getTracks().forEach((track) => {
      this.peerConnection?.addTrack(track, this.inputStream!);
    });

    // Create and exchange SDP
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    await this.loopbackConnection.setRemoteDescription(offer);

    const answer = await this.loopbackConnection.createAnswer();
    await this.loopbackConnection.setLocalDescription(answer);
    await this.peerConnection.setRemoteDescription(answer);

    // Wait for processed stream to be ready
    await this.waitForProcessedStream();
  }

  /**
   * Wait for the loopback stream to be available
   */
  private waitForProcessedStream(): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("Timeout waiting for WebRTC loopback stream"));
      }, 5000);

      const check = () => {
        if (this.processedStream && this.processedStream.active) {
          clearTimeout(timeout);
          resolve();
        } else {
          setTimeout(check, 50);
        }
      };
      check();
    });
  }

  /**
   * Setup input audio pipeline using processed WebRTC stream
   */
  private async setupInput(recorderOptions: RecorderOptions): Promise<void> {
    if (!this.audioContext || !this.processedStream) {
      throw new Error("AudioContext or processed stream not available");
    }

    // Use the WebRTC-processed stream (has better AEC)
    const source = this.audioContext.createMediaStreamSource(this.processedStream);

    this.inputAnalyser = this.audioContext.createAnalyser();
    this.inputWorklet = new AudioWorkletNode(this.audioContext, "raw-audio-processor");

    // Configure worklet
    this.inputWorklet.port.postMessage({
      type: "setFormat",
      format: recorderOptions.format,
      sampleRate: recorderOptions.sampleRate,
    });

    // Connect: source -> analyser -> worklet
    source.connect(this.inputAnalyser);
    this.inputAnalyser.connect(this.inputWorklet);
  }

  /**
   * Setup output audio pipeline
   */
  private async setupOutput(playerOptions: PlayerOptions): Promise<void> {
    if (!this.audioContext) {
      throw new Error("AudioContext not available");
    }

    this.outputAnalyser = this.audioContext.createAnalyser();
    this.outputGain = this.audioContext.createGain();
    this.outputWorklet = new AudioWorkletNode(this.audioContext, "audio-concat-processor");

    // Configure worklet
    this.outputWorklet.port.postMessage({
      type: "setFormat",
      format: playerOptions.format,
    });

    // Connect: worklet -> gain -> analyser -> destination
    this.outputWorklet.connect(this.outputGain);
    this.outputGain.connect(this.outputAnalyser);
    this.outputAnalyser.connect(this.audioContext.destination);
  }

  /**
   * Get optimized audio constraints
   */
  private getAudioConstraints(sampleRate: number): MediaTrackConstraints {
    const baseConstraints: MediaTrackConstraints = {
      sampleRate: { ideal: sampleRate },
      channelCount: { ideal: 1 },
    };

    if (isChrome()) {
      return {
        ...baseConstraints,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        // Chrome-specific: Advanced constraints for better quality
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
   * Set muted state
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
   * Add audio chunk to output buffer
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
   * Interrupt audio playback
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
   * Fade out audio
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
   * Close and cleanup all resources
   */
  public async close(): Promise<void> {
    // Stop input tracks
    this.inputStream?.getTracks().forEach((track) => track.stop());
    this.processedStream?.getTracks().forEach((track) => track.stop());

    // Close peer connections
    this.peerConnection?.close();
    this.loopbackConnection?.close();

    // Close audio context
    await this.audioContext?.close();

    // Clear references
    this.audioContext = null;
    this.peerConnection = null;
    this.loopbackConnection = null;
    this.inputStream = null;
    this.processedStream = null;
    this.inputAnalyser = null;
    this.inputWorklet = null;
    this.outputAnalyser = null;
    this.outputWorklet = null;
    this.outputGain = null;
    this.isInitialized = false;
  }
}

/**
 * Feature detection for WebRTC audio enhancements
 */
export function supportsWebRTCAudioEnhancements(): boolean {
  return (
    typeof RTCPeerConnection !== "undefined" &&
    typeof AudioContext !== "undefined" &&
    typeof AudioWorkletNode !== "undefined"
  );
}
