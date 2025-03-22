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
import { useState, useEffect, useRef } from "react";
import { useMaybeVoiceAgent } from "@/rapida/hooks/use-voice-agent";

/**
 * The function `useMultibandSpeakerTrackVolume` calculates and updates frequency bands based on audio
 * player data at regular intervals.
 * @param {number} [bands=5] - The `bands` parameter in the `useMultibandSpeakerTrackVolume` function
 * determines the number of frequency bands that the audio signal will be divided into for processing.
 * This parameter allows you to specify how many bands you want to split the frequency spectrum into.
 * @param {number} [loPass=0.1] - The `loPass` parameter in the `useMultibandSpeakerTrackVolume`
 * function represents the lower passband frequency limit. It is used to filter out frequencies below a
 * certain threshold in the audio signal. In the provided code snippet, the `loPass` parameter is set
 * to a default value of
 * @param {number} [hiPass=1.0] - The `hiPass` parameter in the `useMultibandSpeakerTrackVolume`
 * function represents the upper limit frequency value for filtering the audio frequencies. It is used
 * to define the range of frequencies that will be included in the analysis and processing of the audio
 * data. In the provided code snippet, the `
 * @returns The `useMultibandSpeakerTrackVolume` custom hook returns an array of `Float32Array`
 * frequency bands that have been calculated based on the audio frequencies received from the audio
 * player. The number of bands, low-pass and high-pass values are used to divide and normalize the
 * frequencies into the specified bands. The hook continuously updates the frequency bands at an
 * interval of 100ms.
 */

export const useMultibandMicrophoneTrackVolume = (
  bands: number = 5,
  loPass: number = 0.1,
  hiPass: number = 1.0
) => {
  const [frequencyBands, setFrequencyBands] = useState<number[][]>(
    Array(bands)
      .fill([])
      .map(() => Array(32).fill(0))
  );
  const agentContext = useMaybeVoiceAgent();

  useEffect(() => {
    const updateVolume = () => {
      if (!agentContext || agentContext.recorder.getStatus() !== "recording") {
        return;
      }

      const frequencies =
        agentContext.recorder.getFrequencies("frequency")?.values;
      if (!frequencies || frequencies.length === 0) return;

      // Calculate the frequency range we want to analyze
      const startIndex = Math.floor(frequencies.length * loPass);
      const endIndex = Math.floor(frequencies.length * hiPass);
      const usableFrequencies = Array.from(
        frequencies.slice(startIndex, endIndex)
      );

      // Split frequencies into bands
      const samplesPerBand = Math.floor(usableFrequencies.length / bands);
      const bandArrays: number[][] = [];

      for (let bandIndex = 0; bandIndex < bands; bandIndex++) {
        const bandStart = bandIndex * samplesPerBand;
        const bandEnd =
          bandIndex === bands - 1
            ? usableFrequencies.length
            : (bandIndex + 1) * samplesPerBand;

        // Get frequencies for this band and normalize them
        const bandFrequencies = usableFrequencies
          .slice(bandStart, bandEnd)
          .map((amplitude) => {
            // Ensure amplitude is treated as a number
            const numericAmplitude = Number(amplitude);
            // Normalize amplitude to 0-1 range
            return Math.min(1, Math.max(0, numericAmplitude * 4));
          });

        // Ensure we have a consistent number of samples per band
        const resampledBand = resampleArray(bandFrequencies, 32); // 32 samples per band
        bandArrays.push(resampledBand);
      }

      // Apply smoothing to prevent jarring transitions
      setFrequencyBands((prevBands) => {
        if (prevBands.length !== bands) return bandArrays;

        return bandArrays.map((bandFrequencies, bandIndex) => {
          if (!prevBands[bandIndex]) return bandFrequencies;

          const smoothingFactor = 0.7;
          return bandFrequencies.map((freq, i) => {
            const prevValue = prevBands[bandIndex][i] || 0;
            return freq * smoothingFactor + prevValue * (1 - smoothingFactor);
          });
        });
      });
    };

    // Helper function to resample array to desired length
    const resampleArray = (arr: number[], newLength: number): number[] => {
      const result = new Array(newLength);
      const stepSize = arr.length / newLength;

      for (let i = 0; i < newLength; i++) {
        const start = Math.floor(i * stepSize);
        const end = Math.floor((i + 1) * stepSize);
        let sum = 0;

        for (let j = start; j < end; j++) {
          sum += arr[j] || 0;
        }

        result[i] = sum / (end - start);
      }

      return result;
    };

    const interval = setInterval(updateVolume, 100);
    return () => clearInterval(interval);
  }, [agentContext, loPass, hiPass, bands]);

  return frequencyBands;
};

export const useMultibandSpeakerTrackVolume = (
  bands: number = 5,
  loPass: number = 0.1,
  hiPass: number = 1.0
) => {
  const [frequencyBands, setFrequencyBands] = useState<number[][]>(
    Array(bands)
      .fill([])
      .map(() => Array(32).fill(0))
  );
  const agentContext = useMaybeVoiceAgent();

  useEffect(() => {
    const updateVolume = () => {
      if (!agentContext?.player?.analyser) {
        return;
      }

      const frequencies =
        agentContext.player.getFrequencies("frequency")?.values;
      if (!frequencies || frequencies.length === 0) return;

      // Calculate the frequency range we want to analyze
      const startIndex = Math.floor(frequencies.length * loPass);
      const endIndex = Math.floor(frequencies.length * hiPass);
      const usableFrequencies = Array.from(
        frequencies.slice(startIndex, endIndex)
      );

      // Split frequencies into bands
      const samplesPerBand = Math.floor(usableFrequencies.length / bands);
      const bandArrays: number[][] = [];

      for (let bandIndex = 0; bandIndex < bands; bandIndex++) {
        const bandStart = bandIndex * samplesPerBand;
        const bandEnd =
          bandIndex === bands - 1
            ? usableFrequencies.length
            : (bandIndex + 1) * samplesPerBand;

        // Get frequencies for this band and normalize them
        const bandFrequencies = usableFrequencies
          .slice(bandStart, bandEnd)
          .map((amplitude) => {
            // Normalize amplitude to 0-1 range
            const numericAmplitude = Number(amplitude);
            return Math.min(1, Math.max(0, numericAmplitude));
          });

        // Ensure we have a consistent number of samples per band
        const resampledBand = resampleArray(bandFrequencies, 32); // 32 samples per band
        bandArrays.push(resampledBand);
      }

      // Apply smoothing to prevent jarring transitions
      setFrequencyBands((prevBands) => {
        if (prevBands.length !== bands) return bandArrays;

        return bandArrays.map((bandFrequencies, bandIndex) => {
          if (!prevBands[bandIndex]) return bandFrequencies;

          const smoothingFactor = 0.7;
          return bandFrequencies.map((freq, i) => {
            const prevValue = prevBands[bandIndex][i] || 0;
            return freq * smoothingFactor + prevValue * (1 - smoothingFactor);
          });
        });
      });
    };

    // Helper function to resample array to desired length
    const resampleArray = (arr: number[], newLength: number): number[] => {
      const result = new Array(newLength);
      const stepSize = arr.length / newLength;

      for (let i = 0; i < newLength; i++) {
        const start = Math.floor(i * stepSize);
        const end = Math.floor((i + 1) * stepSize);
        let sum = 0;

        for (let j = start; j < end; j++) {
          sum += arr[j] || 0;
        }

        result[i] = sum / (end - start);
      }

      return result;
    };

    const interval = setInterval(updateVolume, 100);
    return () => clearInterval(interval);
  }, [agentContext, loPass, hiPass, bands]);

  return frequencyBands;
};

export const useMultiband3DSpeakerTrackVolume = (
  bands: number = 5,
  loPass: number = 0.1,
  hiPass: number = 1.0
) => {
  const [frequencyBands, setFrequencyBands] = useState<number[][]>(
    Array(bands)
      .fill([])
      .map(() => Array(32).fill(0))
  );
  const [sphericalData, setSphericalData] = useState<{
    xNorm: number;
    yNorm: number;
    zNorm: number;
    elapsedTimeSec: number;
  }>({ xNorm: 0, yNorm: 0, zNorm: 0, elapsedTimeSec: 0 });
  const agentContext = useMaybeVoiceAgent();
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    const updateVolume = () => {
      if (!agentContext?.player?.analyser) {
        return;
      }

      const frequencies =
        agentContext.player.getFrequencies("frequency")?.values;
      if (!frequencies || frequencies.length === 0) return;

      // Calculate the frequency range we want to analyze
      const startIndex = Math.floor(frequencies.length * loPass);
      const endIndex = Math.floor(frequencies.length * hiPass);
      const usableFrequencies = Array.from(
        frequencies.slice(startIndex, endIndex)
      );

      // Split frequencies into bands
      const samplesPerBand = Math.floor(usableFrequencies.length / bands);
      const bandArrays: number[][] = [];

      for (let bandIndex = 0; bandIndex < bands; bandIndex++) {
        const bandStart = bandIndex * samplesPerBand;
        const bandEnd =
          bandIndex === bands - 1
            ? usableFrequencies.length
            : (bandIndex + 1) * samplesPerBand;

        // Get frequencies for this band and normalize them
        const bandFrequencies = usableFrequencies
          .slice(bandStart, bandEnd)
          .map((amplitude) => {
            // Normalize amplitude to 0-1 range
            const numericAmplitude = Number(amplitude);
            return Math.min(1, Math.max(0, numericAmplitude));
          });

        // Ensure we have a consistent number of samples per band
        const resampledBand = resampleArray(bandFrequencies, 32); // 32 samples per band
        bandArrays.push(resampledBand);
      }

      // Apply smoothing to prevent jarring transitions
      setFrequencyBands((prevBands) => {
        if (prevBands.length !== bands) return bandArrays;

        const smoothedBands = bandArrays.map((bandFrequencies, bandIndex) => {
          if (!prevBands[bandIndex]) return bandFrequencies;

          const smoothingFactor = 0.7;
          return bandFrequencies.map((freq, i) => {
            const prevValue = prevBands[bandIndex][i] || 0;
            return freq * smoothingFactor + prevValue * (1 - smoothingFactor);
          });
        });

        // Calculate spherical coordinates
        const xNorm = calculateAverageAmplitude(smoothedBands[0]);
        const yNorm =
          bands > 1 ? calculateAverageAmplitude(smoothedBands[1]) : 0;
        const zNorm =
          bands > 2 ? calculateAverageAmplitude(smoothedBands[2]) : 0;
        const elapsedTimeSec = (Date.now() - startTime.current) / 1000;

        setSphericalData({ xNorm, yNorm, zNorm, elapsedTimeSec });

        return smoothedBands;
      });
    };

    // Helper function to resample array to desired length
    const resampleArray = (arr: number[], newLength: number): number[] => {
      const result = new Array(newLength);
      const stepSize = arr.length / newLength;

      for (let i = 0; i < newLength; i++) {
        const start = Math.floor(i * stepSize);
        const end = Math.floor((i + 1) * stepSize);
        let sum = 0;

        for (let j = start; j < end; j++) {
          sum += arr[j] || 0;
        }

        result[i] = sum / (end - start);
      }

      return result;
    };

    const calculateAverageAmplitude = (band: number[]): number => {
      return band.reduce((sum, amplitude) => sum + amplitude, 0) / band.length;
    };

    const interval = setInterval(updateVolume, 100);
    return () => clearInterval(interval);
  }, [agentContext, loPass, hiPass, bands]);

  return { frequencyBands, ...sphericalData };
};
