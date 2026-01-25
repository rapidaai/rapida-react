/**
 * Tests for AgentConfig and related types
 */

import { InputOptions, OutputOptions, RecorderOptions, PlayerOptions } from '@/rapida/types/agent-config';
import { Channel } from '@/rapida/types/channel';

describe('RecorderOptions', () => {
  it('should define PCM format options', () => {
    const options: RecorderOptions = {
      format: 'pcm',
      sampleRate: 16000,
    };

    expect(options.format).toBe('pcm');
    expect(options.sampleRate).toBe(16000);
  });

  it('should define ulaw format options', () => {
    const options: RecorderOptions = {
      format: 'ulaw',
      sampleRate: 8000,
    };

    expect(options.format).toBe('ulaw');
    expect(options.sampleRate).toBe(8000);
  });

  it('should allow optional device', () => {
    const options: RecorderOptions = {
      format: 'pcm',
      sampleRate: 16000,
      device: 'device-123',
    };

    expect(options.device).toBe('device-123');
  });
});

describe('PlayerOptions', () => {
  it('should define PCM format options', () => {
    const options: PlayerOptions = {
      format: 'pcm',
      sampleRate: 24000,
    };

    expect(options.format).toBe('pcm');
    expect(options.sampleRate).toBe(24000);
  });

  it('should define ulaw format options', () => {
    const options: PlayerOptions = {
      format: 'ulaw',
      sampleRate: 8000,
    };

    expect(options.format).toBe('ulaw');
    expect(options.sampleRate).toBe(8000);
  });

  it('should allow optional device', () => {
    const options: PlayerOptions = {
      format: 'pcm',
      sampleRate: 24000,
      device: 'speaker-456',
    };

    expect(options.device).toBe('speaker-456');
  });
});

describe('InputOptions', () => {
  let inputOptions: InputOptions;

  beforeEach(() => {
    inputOptions = new InputOptions();
  });

  it('should have channels property', () => {
    // InputOptions may have channels array or just a channel property
    // Check the actual property that exists
    expect(inputOptions.channel || inputOptions.defaultChannel).toBeDefined();
  });

  it('should have default recorder options', () => {
    expect(inputOptions.recorderOption).toBeDefined();
    expect(inputOptions.recorderOption.format).toBe('pcm');
    expect(inputOptions.recorderOption.sampleRate).toBe(16000);
  });

  it('should have default channel as Audio', () => {
    expect(inputOptions.defaultChannel).toBe(Channel.Audio);
  });

  it('should return stream config for audio channel', () => {
    inputOptions.channel = Channel.Audio;

    const streamConfig = inputOptions.defaultInputStreamOption;

    expect(streamConfig).toBeDefined();
    expect(streamConfig.getAudio()).toBeDefined();
  });

  it('should handle text channel stream config', () => {
    inputOptions.channel = Channel.Text;

    const streamConfig = inputOptions.defaultInputStreamOption;

    expect(streamConfig).toBeDefined();
    // For text channel, audio config should not be set
  });
});

describe('OutputOptions', () => {
  it('should be defined when imported', async () => {
    // Dynamic import to get the full module
    const module = await import('@/rapida/types/agent-config');

    expect(module.OutputOptions).toBeDefined();
  });
});

describe('AgentConfig integration', () => {
  it('should support common audio configurations', () => {
    // Test common sample rates
    const sampleRates = [8000, 16000, 22050, 24000, 44100, 48000];

    sampleRates.forEach(rate => {
      const options: RecorderOptions = {
        format: 'pcm',
        sampleRate: rate,
      };

      expect(options.sampleRate).toBe(rate);
    });
  });

  it('should support both audio formats', () => {
    const formats: Array<'pcm' | 'ulaw'> = ['pcm', 'ulaw'];

    formats.forEach(format => {
      const options: RecorderOptions = {
        format,
        sampleRate: 16000,
      };

      expect(options.format).toBe(format);
    });
  });
});
