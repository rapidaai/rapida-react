/**
 * Tests for AgentConfig and related types
 */

import { InputOptions, OutputOptions } from '@/rapida/types/agent-config';
import { Channel } from '@/rapida/types/channel';

describe('InputOptions', () => {
  let inputOptions: InputOptions;

  beforeEach(() => {
    inputOptions = new InputOptions([Channel.Audio, Channel.Text]);
  });

  it('should have channels property', () => {
    expect(inputOptions.channels).toBeDefined();
    expect(inputOptions.channels).toContain(Channel.Audio);
  });

  it('should have default channel as Audio', () => {
    expect(inputOptions.channel).toBe(Channel.Audio);
  });

  it('should allow optional device', () => {
    const options = new InputOptions([Channel.Audio], Channel.Audio, 'device-123');
    expect(options.device).toBe('device-123');
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
  let outputOptions: OutputOptions;

  beforeEach(() => {
    outputOptions = new OutputOptions([Channel.Audio, Channel.Text]);
  });

  it('should have channels property', () => {
    expect(outputOptions.channels).toBeDefined();
    expect(outputOptions.channels).toContain(Channel.Audio);
  });

  it('should have default channel as Audio', () => {
    expect(outputOptions.channel).toBe(Channel.Audio);
  });

  it('should allow optional device', () => {
    const options = new OutputOptions([Channel.Audio], Channel.Audio, 'speaker-456');
    expect(options.device).toBe('speaker-456');
  });

  it('should return stream config for audio channel', () => {
    outputOptions.channel = Channel.Audio;

    const streamConfig = outputOptions.defaultOutputStreamOption;

    expect(streamConfig).toBeDefined();
    expect(streamConfig.getAudio()).toBeDefined();
  });
});
