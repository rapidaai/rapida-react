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

jest.mock('@/rapida/audio/webrtc-grpc-transport', () => ({
  WebRTCGrpcTransport: {
    create: jest.fn().mockImplementation(async (_config, callbacks) => {
      // Simulate successful connection by calling onConnectionStateChange
      if (callbacks?.onConnectionStateChange) {
        callbacks.onConnectionStateChange('connected');
      }
      return mockWebRTCTransport;
    }),
  },
  supportsWebRTCGrpcTransport: jest.fn().mockReturnValue(true),
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
    createAssistantTextMessage = jest.fn().mockReturnValue({});
    changeConversation = jest.fn();
  }

  return { Agent: MockAgent };
});

import { VoiceAgent } from '@/rapida/agents/voice-agent';
import { WebRTCGrpcTransport } from '@/rapida/audio/webrtc-grpc-transport';
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
      channels: [Channel.Audio, Channel.Text],
      device: undefined as string | undefined,
    },
    outputOptions: {
      channel: Channel.Audio,
      channels: [Channel.Audio, Channel.Text],
      device: undefined as string | undefined,
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

      expect(WebRTCGrpcTransport.create).toHaveBeenCalled();
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

      // WebRTCGrpcTransport should not be created for text channel
      expect(WebRTCGrpcTransport.create).not.toHaveBeenCalled();
    });

    it('should only create one WebRTC transport when connect() is called multiple times concurrently', async () => {
      // Call connect multiple times concurrently (simulates React StrictMode or double-clicks)
      const connectPromises = [
        voiceAgent.connect(),
        voiceAgent.connect(),
        voiceAgent.connect(),
      ];

      await Promise.all(connectPromises);

      // WebRTCGrpcTransport.create should only be called once
      expect(WebRTCGrpcTransport.create).toHaveBeenCalledTimes(1);
    });

    it('should not reconnect if already connected', async () => {
      // First connection
      await voiceAgent.connect();
      expect(WebRTCGrpcTransport.create).toHaveBeenCalledTimes(1);

      // Clear mock to track subsequent calls
      (WebRTCGrpcTransport.create as jest.Mock).mockClear();

      // Try to connect again when already connected
      await voiceAgent.connect();

      // Should not create another transport
      expect(WebRTCGrpcTransport.create).not.toHaveBeenCalled();
    });

    it('should set _isConnecting flag during connection and reset after completion', async () => {
      // Access private field for testing
      expect((voiceAgent as any)._isConnecting).toBe(false);

      const connectPromise = voiceAgent.connect();

      // During connection, flag should be true (can't reliably check this in sync test)

      await connectPromise;

      // After completion, flag should be reset to false
      expect((voiceAgent as any)._isConnecting).toBe(false);
    });

    it('should reset _isConnecting flag even if connection fails', async () => {
      // Make WebRTCGrpcTransport.create throw an error
      (WebRTCGrpcTransport.create as jest.Mock).mockRejectedValueOnce(new Error('Connection failed'));

      await voiceAgent.connect();

      // Flag should be reset even after error
      expect((voiceAgent as any)._isConnecting).toBe(false);
    });

    it('should not create second transport when connect is called after first connect returns but before connected state', async () => {
      // Simulate the race condition:
      // 1. First connect() returns (transport created, config sent)
      // 2. But connectionState is still not Connected (WebRTC handshake in progress)
      // 3. Second connect() is called (e.g., from onSendText auto-connect)

      // First connection - transport created but connection state not yet "connected"
      // (mock doesn't call onConnectionStateChange with 'connected')
      const mockTransportNoConnect = {
        ...mockWebRTCTransport,
      };
      (WebRTCGrpcTransport.create as jest.Mock).mockResolvedValueOnce(mockTransportNoConnect);

      await voiceAgent.connect();
      expect(WebRTCGrpcTransport.create).toHaveBeenCalledTimes(1);

      // connectionState is still not Connected, but webrtcTransport exists
      expect(voiceAgent.isConnected).toBe(false);
      expect((voiceAgent as any).webrtcTransport).not.toBeNull();

      // Clear mock to track subsequent calls
      (WebRTCGrpcTransport.create as jest.Mock).mockClear();

      // Second connect attempt - should be blocked by webrtcTransport guard
      await voiceAgent.connect();

      // Should NOT create another transport
      expect(WebRTCGrpcTransport.create).not.toHaveBeenCalled();
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

      expect(WebRTCGrpcTransport.create).toHaveBeenCalledWith(
        expect.objectContaining({
          connectionConfig: expect.any(Object),
          agentConfig: mockAgentConfig,
        }),
        expect.any(Object) // callbacks
      );
    });

    it('should pass agentConfig to WebRTC transport', async () => {
      await voiceAgent.connect();

      expect(WebRTCGrpcTransport.create).toHaveBeenCalledWith(
        expect.objectContaining({
          agentConfig: mockAgentConfig,
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
      mockAgentConfig.inputOptions.device = 'same-device';
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
      (WebRTCGrpcTransport.create as jest.Mock).mockClear();

      // Now switch to audio
      await agent.setInputChannel(Channel.Audio);

      expect(WebRTCGrpcTransport.create).toHaveBeenCalled();
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
      mockAgentConfig.inputOptions.device = 'test-device';
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
