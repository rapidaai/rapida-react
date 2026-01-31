/**
 * Tests for VoiceAgent class
 * 
 * VoiceAgent extends Agent and handles:
 * - Audio input/output management
 * - MediaStream AEC preservation
 * - Device switching
 * - Channel switching (Audio/Text)
 * - Message handling
 */

import { mockMediaDevices, MockMediaStream } from '../setup';

// Mock WebRTC Transport
const mockWebRTCTransport = {
  close: jest.fn().mockResolvedValue(undefined),
  setMuted: jest.fn(),
  setVolume: jest.fn(),
  setInputDevice: jest.fn().mockResolvedValue(undefined),
  setOutputDevice: jest.fn().mockResolvedValue(undefined),
  inputAnalyser: { frequencyBinCount: 1024, getByteFrequencyData: jest.fn() },
  outputAnalyser: { frequencyBinCount: 1024, getByteFrequencyData: jest.fn() },
};

jest.mock('@/rapida/audio/webrtc-transport', () => ({
  WebRTCTransport: {
    create: jest.fn().mockResolvedValue(mockWebRTCTransport),
  },
  supportsWebRTCTransport: jest.fn().mockReturnValue(true),
}));

jest.mock('@/rapida/audio/compatibility', () => ({
  isAndroidDevice: jest.fn().mockReturnValue(false),
  isIosDevice: jest.fn().mockReturnValue(false),
}));

jest.mock('@/rapida/devices/device-manager', () => ({
  DeviceManager: {
    getInstance: jest.fn().mockReturnValue({
      getDevices: jest.fn().mockResolvedValue([
        { deviceId: 'default', kind: 'audioinput', label: 'Default Mic' },
        { deviceId: 'device1', kind: 'audiooutput', label: 'Speaker' },
      ]),
    }),
  },
}));

// Mock the Agent base class methods
jest.mock('@/rapida/agents/', () => {
  const EventEmitter = require('events').EventEmitter;

  class MockAgent extends EventEmitter {
    protected connectionState = 'disconnected';
    protected agentConfig: any;
    protected agentCallbacks: any[] = [];
    protected talkingConnection: any = null;
    public agentMessages: any[] = [];

    constructor(connection: any, agentConfig: any, agentCallback?: any) {
      super();
      this.agentConfig = agentConfig;
      if (agentCallback) this.agentCallbacks.push(agentCallback);
    }

    get state() { return this.connectionState; }
    get isConnected() { return this.connectionState === 'connected'; }

    connectAgent = jest.fn().mockImplementation(async () => {
      this.connectionState = 'connected';
    });

    disconnectAgent = jest.fn().mockResolvedValue(undefined);
    switchAgent = jest.fn().mockResolvedValue(undefined);
    createAssistantAudioMessage = jest.fn().mockReturnValue({});
    createAssistantTextMessage = jest.fn().mockReturnValue({});
    changeConversation = jest.fn();
  }

  return { Agent: MockAgent };
});

import { VoiceAgent } from '@/rapida/agents/voice-agent';
import { WebRTCTransport } from '@/rapida/audio/webrtc-transport';
import { Channel } from '@/rapida/types/channel';
import { AgentEvent } from '@/rapida/types/agent-event';
import { ConnectionState } from '@/rapida/types/connection-state';

describe('VoiceAgent', () => {
  let voiceAgent: VoiceAgent;

  const mockConnectionConfig = {
    endpoint: {
      assistant: 'https://assistant-01.rapida.ai',
    },
    apiKey: 'test-api-key',
  };

  const mockAgentConfig = {
    id: 'test-assistant-id',
    inputOptions: {
      channel: Channel.Audio,
      recorderOption: {
        sampleRate: 16000,
        format: 'pcm' as const,
        device: undefined,
      },
      webrtcSignalingUrl: 'wss://assistant-01.rapida.ai/v1/talk/webrtc/test-assistant-id',
    },
    outputOptions: {
      channel: Channel.Audio,
      playerOption: {
        sampleRate: 24000,
        format: 'pcm' as const,
        device: undefined,
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    voiceAgent = new VoiceAgent(
      mockConnectionConfig as any,
      mockAgentConfig as any
    );
  });

  afterEach(async () => {
    await voiceAgent.disconnect();
  });

  describe('constructor', () => {
    it('should create VoiceAgent instance', () => {
      expect(voiceAgent).toBeInstanceOf(VoiceAgent);
    });

    it('should accept optional callback', () => {
      const callback = { onUserMessage: jest.fn() };
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        mockAgentConfig as any,
        callback
      );
      expect(agent).toBeInstanceOf(VoiceAgent);
    });
  });

  describe('connect()', () => {
    it('should connect audio when channel is Audio', async () => {
      await voiceAgent.connect();

      expect(WebRTCTransport.create).toHaveBeenCalled();
    });

    it('should not connect audio when channel is Text', async () => {
      const textConfig = {
        ...mockAgentConfig,
        inputOptions: { ...mockAgentConfig.inputOptions, channel: Channel.Text },
      };
      const textAgent = new VoiceAgent(
        mockConnectionConfig as any,
        textConfig as any
      );

      await textAgent.connect();

      // WebRTCTransport should not be created for text channel
      expect(WebRTCTransport.create).not.toHaveBeenCalled();
    });
  });

  describe('disconnect()', () => {
    it('should disconnect agent and audio', async () => {
      await voiceAgent.connect();
      await voiceAgent.disconnect();

      // Verify cleanup was performed
      expect((voiceAgent as any).disconnectAgent).toHaveBeenCalled();
    });
  });

  describe('disconnectAudio()', () => {
    it('should close WebRTC transport', async () => {
      await voiceAgent.connect();
      await voiceAgent.disconnectAudio();

      // WebRTC transport close should be called
      expect(mockWebRTCTransport.close).toHaveBeenCalled();
    });

    it('should handle errors gracefully', async () => {
      // Should not throw even if cleanup fails
      await expect(voiceAgent.disconnectAudio()).resolves.not.toThrow();
    });
  });

  describe('WebRTC Transport', () => {
    it('should create WebRTC transport with correct config', async () => {
      await voiceAgent.connect();

      expect(WebRTCTransport.create).toHaveBeenCalledWith(
        expect.objectContaining({
          signalingUrl: expect.any(String),
          recorderOptions: expect.any(Object),
          playerOptions: expect.any(Object),
        }),
        expect.any(Object) // callbacks
      );
    });

    it('should pass recorder options to WebRTC transport', async () => {
      await voiceAgent.connect();

      expect(WebRTCTransport.create).toHaveBeenCalledWith(
        expect.objectContaining({
          recorderOptions: mockAgentConfig.inputOptions.recorderOption,
        }),
        expect.any(Object)
      );
    });

    it('should pass player options to WebRTC transport', async () => {
      await voiceAgent.connect();

      expect(WebRTCTransport.create).toHaveBeenCalledWith(
        expect.objectContaining({
          playerOptions: mockAgentConfig.outputOptions.playerOption,
        }),
        expect.any(Object)
      );
    });
  });

  describe('setInputMediaDevice()', () => {
    it('should change input device and reconnect', async () => {
      await voiceAgent.connect();

      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.setInputMediaDevice('new-device-id');

      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.InputMediaDeviceChangeEvent,
        'new-device-id'
      );
    });

    it('should not reconnect if device is the same', async () => {
      mockAgentConfig.inputOptions.recorderOption.device = 'same-device';
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        mockAgentConfig as any
      );

      const connectSpy = jest.spyOn(agent as any, 'connectDevice');
      await agent.setInputMediaDevice('same-device');

      expect(connectSpy).not.toHaveBeenCalled();
    });
  });

  describe('setOutputMediaDevice()', () => {
    it('should change output device and reconnect', async () => {
      await voiceAgent.connect();

      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.setOutputMediaDevice('new-output-device');

      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.OutputMediaDeviceChangeEvent,
        'new-output-device'
      );
    });
  });

  describe('setInputChannel()', () => {
    it('should switch from Audio to Text channel', async () => {
      await voiceAgent.connect();

      const emitSpy = jest.spyOn(voiceAgent, 'emit');
      await voiceAgent.setInputChannel(Channel.Text);

      expect(emitSpy).toHaveBeenCalledWith(
        AgentEvent.InputChannelChangeEvent,
        Channel.Text
      );
    });

    it('should handle switching to same channel', async () => {
      // Switching to the same channel should not throw
      await expect(voiceAgent.setInputChannel(Channel.Audio)).resolves.not.toThrow();
    });

    it('should connect audio when switching to Audio channel while connected', async () => {
      // Start with text channel
      const textConfig = {
        ...mockAgentConfig,
        inputOptions: { ...mockAgentConfig.inputOptions, channel: Channel.Text },
      };
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        textConfig as any
      );

      await agent.connect();

      // Reset mock to track new calls
      (WebRTCTransport.create as jest.Mock).mockClear();

      // Now switch to audio
      await agent.setInputChannel(Channel.Audio);

      expect(WebRTCTransport.create).toHaveBeenCalled();
    });
  });

  describe('onSendText()', () => {
    it('should accept text message', async () => {
      const textConfig = {
        ...mockAgentConfig,
        inputOptions: { ...mockAgentConfig.inputOptions, channel: Channel.Text },
      };
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        textConfig as any
      );

      // onSendText should not throw when called
      await expect(agent.onSendText('Hello')).resolves.not.toThrow();
    });
  });

  describe('getLocalDevices()', () => {
    it('should return list of media devices', async () => {
      const devices = await VoiceAgent.getLocalDevices();

      expect(devices).toBeInstanceOf(Array);
      expect(devices.length).toBeGreaterThan(0);
    });

    it('should filter by device kind', async () => {
      await VoiceAgent.getLocalDevices('audioinput');

      // Verify DeviceManager was called with correct kind
      const { DeviceManager } = require('@/rapida/devices/device-manager');
      expect(DeviceManager.getInstance().getDevices).toHaveBeenCalledWith('audioinput', true);
    });
  });

  describe('inputMediaDevice getter', () => {
    it('should return current input device', () => {
      mockAgentConfig.inputOptions.recorderOption.device = 'test-device';
      const agent = new VoiceAgent(
        mockConnectionConfig as any,
        mockAgentConfig as any
      );

      expect(agent.inputMediaDevice).toBe('test-device');
    });
  });

  describe('getInputByteFrequencyData()', () => {
    it('should return undefined when input not connected', () => {
      // Without connection, returns undefined
      const data = voiceAgent.getInputByteFrequencyData();
      expect(data).toBeUndefined();
    });
  });

  describe('getOutputByteFrequencyData()', () => {
    it('should return undefined when output not connected', () => {
      // Without connection, returns undefined
      const data = voiceAgent.getOutputByteFrequencyData();
      expect(data).toBeUndefined();
    });
  });
});
