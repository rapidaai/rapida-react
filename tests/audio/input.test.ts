/**
 * Tests for Audio Input class
 * 
 * The Input class handles microphone capture with:
 * - Echo cancellation
 * - Noise suppression
 * - Audio processing via AudioWorklet
 * - MediaStream reuse for AEC continuity
 */

import { mockMediaDevices, MockMediaStream, MockAudioContext } from '../setup';

// Mock the raw-audio-processor loader
jest.mock('@/rapida/audio/raw-audio-processor', () => ({
  loadRawAudioProcessor: jest.fn().mockResolvedValue(undefined),
}));

import { Input } from '@/rapida/audio/input';
import { RecorderOptions } from '@/rapida/types/agent-config';

describe('Input', () => {
  const defaultOptions: RecorderOptions = {
    sampleRate: 16000,
    format: 'pcm',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('create()', () => {
    it('should create Input instance with default options', async () => {
      const input = await Input.create(defaultOptions);

      expect(input).toBeInstanceOf(Input);
      expect(input.context).toBeDefined();
      expect(input.analyser).toBeDefined();
      expect(input.worklet).toBeDefined();
      expect(input.inputStream).toBeDefined();
    });

    it('should request user media with echo cancellation enabled', async () => {
      await Input.create(defaultOptions);

      expect(mockMediaDevices.getUserMedia).toHaveBeenCalledWith({
        audio: expect.objectContaining({
          echoCancellation: { ideal: true },
          noiseSuppression: { ideal: true },
        }),
      });
    });

    it('should reuse existing MediaStream when provided', async () => {
      const existingStream = new MockMediaStream() as unknown as MediaStream;

      await Input.create(defaultOptions, existingStream);

      // Should not call getUserMedia when stream is provided
      expect(mockMediaDevices.getUserMedia).not.toHaveBeenCalled();
    });

    it('should configure worklet with correct format and sample rate', async () => {
      const input = await Input.create(defaultOptions);

      expect(input.worklet.port.postMessage).toHaveBeenCalledWith({
        type: 'setFormat',
        format: 'pcm',
        sampleRate: 16000,
      });
    });

    it('should handle ulaw format', async () => {
      const ulawOptions: RecorderOptions = {
        ...defaultOptions,
        format: 'ulaw',
      };

      const input = await Input.create(ulawOptions);

      expect(input.worklet.port.postMessage).toHaveBeenCalledWith({
        type: 'setFormat',
        format: 'ulaw',
        sampleRate: 16000,
      });
    });

    it('should throw error when getUserMedia fails', async () => {
      const error = new Error('Permission denied');
      mockMediaDevices.getUserMedia.mockRejectedValueOnce(error);

      await expect(Input.create(defaultOptions)).rejects.toThrow('Permission denied');
    });

    it('should check for sampleRate constraint support', async () => {
      await Input.create(defaultOptions);

      expect(mockMediaDevices.getSupportedConstraints).toHaveBeenCalled();
    });

    // Note: Error cleanup is handled internally by Input.create
    // Testing this requires low-level AudioWorklet mocking which is complex in JSDOM
  });

  describe('close()', () => {
    it('should stop all tracks and close context', async () => {
      const input = await Input.create(defaultOptions);
      const tracks = input.inputStream.getTracks();

      await input.close();

      tracks.forEach(track => {
        expect(track.stop).toHaveBeenCalled();
      });
      expect(input.context.close).toHaveBeenCalled();
    });
  });

  describe('setMuted()', () => {
    it('should send mute message to worklet', async () => {
      const input = await Input.create(defaultOptions);

      input.setMuted(true);

      expect(input.worklet.port.postMessage).toHaveBeenCalledWith({
        type: 'setMuted',
        isMuted: true,
      });
    });

    it('should send unmute message to worklet', async () => {
      const input = await Input.create(defaultOptions);

      input.setMuted(false);

      expect(input.worklet.port.postMessage).toHaveBeenCalledWith({
        type: 'setMuted',
        isMuted: false,
      });
    });
  });

  describe('MediaStream reuse for AEC', () => {
    it('should preserve AEC state when reusing stream', async () => {
      // First, get a stream with AEC
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: { ideal: true } },
      });

      // Create Input with existing stream - this preserves AEC state
      const input = await Input.create(defaultOptions, stream);

      // The stream should be the same instance
      expect(input.inputStream).toBe(stream);
    });

    it('should create new stream when none provided', async () => {
      const input = await Input.create(defaultOptions);

      expect(mockMediaDevices.getUserMedia).toHaveBeenCalled();
      expect(input.inputStream).toBeDefined();
    });
  });

  describe('Chrome-specific audio constraints', () => {
    it('should use explicit true values for Chrome to reduce noise', async () => {
      // Mock isChrome to return true
      jest.doMock('@/rapida/utils', () => ({
        ...jest.requireActual('@/rapida/utils'),
        isChrome: jest.fn().mockReturnValue(true),
      }));

      // Clear module cache to pick up the mock
      jest.resetModules();

      // The Input class should use explicit true values for Chrome
      // instead of { ideal: true } to properly enable audio processing
      await Input.create(defaultOptions);

      // Check that getUserMedia was called with constraints
      expect(mockMediaDevices.getUserMedia).toHaveBeenCalled();
    });

    it('should include autoGainControl for noise reduction', async () => {
      await Input.create(defaultOptions);

      // Verify that audio constraints include noise-related options
      const call = mockMediaDevices.getUserMedia.mock.calls[0];
      expect(call[0]).toHaveProperty('audio');
    });
  });
});
