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
import { loadRawAudioProcessor } from "./raw-audio-processor";
import { RecorderOptions } from "@/rapida/types/agent-config";

const LIBSAMPLERATE_JS =
  "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js";

export class Input {
  public static async create({
    sampleRate,
    format,
  }: RecorderOptions): Promise<Input> {
    let context: AudioContext | null = null;
    let inputStream: MediaStream | null = null;

    try {
      const options: MediaTrackConstraints = {
        sampleRate: { ideal: sampleRate },
        echoCancellation: { ideal: true },
        noiseSuppression: { ideal: true },
      };

      const supportsSampleRateConstraint =
        navigator.mediaDevices.getSupportedConstraints().sampleRate;

      context = new window.AudioContext(
        supportsSampleRateConstraint ? { sampleRate } : {}
      );
      const analyser = context.createAnalyser();
      if (!supportsSampleRateConstraint) {
        await context.audioWorklet.addModule(LIBSAMPLERATE_JS);
      }
      await loadRawAudioProcessor(context.audioWorklet);
      inputStream = await navigator.mediaDevices.getUserMedia({
        audio: options,
      });

      const source = context.createMediaStreamSource(inputStream);
      const worklet = new AudioWorkletNode(context, "raw-audio-processor");
      worklet.port.postMessage({ type: "setFormat", format, sampleRate });

      source.connect(analyser);
      analyser.connect(worklet);

      await context.resume();

      return new Input(context, analyser, worklet, inputStream);
    } catch (error) {
      inputStream?.getTracks().forEach((track) => track.stop());
      context?.close();
      throw error;
    }
  }

  private constructor(
    public readonly context: AudioContext,
    public readonly analyser: AnalyserNode,
    public readonly worklet: AudioWorkletNode,
    public readonly inputStream: MediaStream
  ) {}

  public async close() {
    this.inputStream.getTracks().forEach((track) => track.stop());
    await this.context.close();
  }

  public setMuted(isMuted: boolean) {
    this.worklet.port.postMessage({ type: "setMuted", isMuted });
  }
}
