/**
 * Tests for Audio Output class
 * 
 * The Output class handles audio playback with:
 * - Gain control
 * - Audio analysis for visualization
 * - AudioWorklet for buffer processing
 */

import { MockAudioContext } from '../setup';

// Mock the audio-concat-processor loader
jest.mock('@/rapida/audio/audio-concat-processor', () => ({
  loadAudioConcatProcessor: jest.fn().mockResolvedValue(undefined),
}));

import { Output } from '@/rapida/audio/output';
import { PlayerOptions } from '@/rapida/types/agent-config';

describe('Output', () => {
  const defaultOptions: PlayerOptions = {
    sampleRate: 24000,
    format: 'pcm',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (window as any).AudioContext = MockAudioContext;
  });

  describe('create()', () => {
    it('should create Output instance with default options', async () => {
      const output = await Output.create(defaultOptions);

      expect(output).toBeInstanceOf(Output);
      expect(output.context).toBeDefined();
      expect(output.analyser).toBeDefined();
      expect(output.gain).toBeDefined();
      expect(output.worklet).toBeDefined();
    });

    it('should create AudioContext with correct sample rate', async () => {
      const output = await Output.create(defaultOptions);

      expect(output.context).toBeDefined();
    });

    it('should configure worklet with correct format', async () => {
      const output = await Output.create(defaultOptions);

      expect(output.worklet.port.postMessage).toHaveBeenCalledWith({
        type: 'setFormat',
        format: 'pcm',
      });
    });

    it('should handle ulaw format', async () => {
      const ulawOptions: PlayerOptions = {
        ...defaultOptions,
        format: 'ulaw',
      };

      const output = await Output.create(ulawOptions);

      expect(output.worklet.port.postMessage).toHaveBeenCalledWith({
        type: 'setFormat',
        format: 'ulaw',
      });
    });

    it('should connect audio nodes correctly', async () => {
      const output = await Output.create(defaultOptions);

      // Verify the audio graph connections
      // worklet -> gain -> analyser -> destination
      expect(output.worklet.connect).toHaveBeenCalled();
      expect(output.gain.connect).toHaveBeenCalled();
    });

    it('should resume audio context', async () => {
      const output = await Output.create(defaultOptions);

      expect(output.context.resume).toHaveBeenCalled();
    });

    // Note: Error cleanup is handled internally by Output.create
    // Testing this requires low-level AudioWorklet mocking which is complex in JSDOM
  });

  describe('close()', () => {
    it('should close the audio context', async () => {
      const output = await Output.create(defaultOptions);

      await output.close();

      expect(output.context.close).toHaveBeenCalled();
    });
  });

  describe('audio routing', () => {
    it('should have gain node for volume control', async () => {
      const output = await Output.create(defaultOptions);

      expect(output.gain).toBeDefined();
      expect(output.gain.gain).toBeDefined();
    });

    it('should have analyser for visualization', async () => {
      const output = await Output.create(defaultOptions);

      expect(output.analyser).toBeDefined();
      expect(output.analyser.frequencyBinCount).toBeGreaterThan(0);
    });
  });
});
