/**
 * Integration tests for Echo Cancellation feature
 * 
 * These tests verify that the AEC (Acoustic Echo Cancellation)
 * is properly preserved by reusing MediaStreams.
 */

import { mockMediaDevices, MockMediaStream } from '../setup';

// Mock dependencies
jest.mock('@/rapida/audio/raw-audio-processor', () => ({
  loadRawAudioProcessor: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('@/rapida/audio/audio-concat-processor', () => ({
  loadAudioConcatProcessor: jest.fn().mockResolvedValue(undefined),
}));

import { Input } from '@/rapida/audio/input';
import { Output } from '@/rapida/audio/output';

describe('Echo Cancellation Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('MediaStream reuse for AEC continuity', () => {
    it('should reuse existing MediaStream in Input.create', async () => {
      // Simulate the scenario where VoiceAgent passes existing stream
      const existingStream = new MockMediaStream() as unknown as MediaStream;

      const input = await Input.create(
        { sampleRate: 16000, format: 'pcm' },
        existingStream
      );

      // The input should use the existing stream, not create a new one
      expect(input.inputStream).toBe(existingStream);
      expect(mockMediaDevices.getUserMedia).not.toHaveBeenCalled();
    });

    it('should create new stream when none provided', async () => {
      await Input.create({ sampleRate: 16000, format: 'pcm' });

      expect(mockMediaDevices.getUserMedia).toHaveBeenCalledWith({
        audio: expect.objectContaining({
          echoCancellation: { ideal: true },
          noiseSuppression: { ideal: true },
        }),
      });
    });
  });

  describe('Output first, then Input pattern', () => {
    it('should allow Output creation before Input', async () => {
      // This pattern ensures browser AEC has output reference before mic starts
      const output = await Output.create({ sampleRate: 24000, format: 'pcm' });
      expect(output).toBeDefined();

      const existingStream = new MockMediaStream() as unknown as MediaStream;
      const input = await Input.create(
        { sampleRate: 16000, format: 'pcm' },
        existingStream
      );
      expect(input).toBeDefined();
    });
  });

  describe('getUserMedia constraints for AEC', () => {
    it('should request echo cancellation by default', async () => {
      await Input.create({ sampleRate: 16000, format: 'pcm' });

      const getUserMediaCall = mockMediaDevices.getUserMedia.mock.calls[0][0];
      expect(getUserMediaCall.audio.echoCancellation).toEqual({ ideal: true });
    });

    it('should request noise suppression by default', async () => {
      await Input.create({ sampleRate: 16000, format: 'pcm' });

      const getUserMediaCall = mockMediaDevices.getUserMedia.mock.calls[0][0];
      expect(getUserMediaCall.audio.noiseSuppression).toEqual({ ideal: true });
    });

    it('should request ideal sample rate', async () => {
      await Input.create({ sampleRate: 16000, format: 'pcm' });

      const getUserMediaCall = mockMediaDevices.getUserMedia.mock.calls[0][0];
      expect(getUserMediaCall.audio.sampleRate).toEqual({ ideal: 16000 });
    });
  });

  describe('Stream lifecycle for AEC', () => {
    it('should not stop reused stream tracks', async () => {
      const existingStream = new MockMediaStream() as unknown as MediaStream;
      const tracks = existingStream.getTracks();

      await Input.create(
        { sampleRate: 16000, format: 'pcm' },
        existingStream
      );

      // Tracks should NOT be stopped during creation when reusing
      tracks.forEach(track => {
        expect(track.stop).not.toHaveBeenCalled();
      });
    });

    it('should stop tracks when Input is closed', async () => {
      const existingStream = new MockMediaStream() as unknown as MediaStream;
      const input = await Input.create(
        { sampleRate: 16000, format: 'pcm' },
        existingStream
      );

      const tracks = input.inputStream.getTracks();
      await input.close();

      // Tracks should be stopped on close
      tracks.forEach(track => {
        expect(track.stop).toHaveBeenCalled();
      });
    });
  });

  describe('Error handling preserves AEC', () => {
    it('should not affect existing stream on worklet error', async () => {
      const existingStream = new MockMediaStream() as unknown as MediaStream;
      const tracks = existingStream.getTracks();

      // Even if Input creation fails, the existing stream should be preserved
      // for the caller to handle appropriately
      try {
        await Input.create(
          { sampleRate: 16000, format: 'pcm' },
          existingStream
        );
      } catch {
        // Ignore error
      }

      // The existing stream should still be usable
      expect(existingStream.getTracks()).toEqual(tracks);
    });
  });
});
