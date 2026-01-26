/**
 * Tests for Agent base class
 * 
 * Agent provides:
 * - Connection management
 * - Message handling
 * - Event emission
 * - Metrics and feedback
 * - Agent switching
 */

import { EventEmitter } from 'events';

// Mock the protobuf classes
jest.mock('@/rapida/clients/protos/talk-api_pb', () => ({
  AssistantMessagingRequest: jest.fn(),
  AssistantMessagingResponse: {
    DataCase: {
      DATA_NOT_SET: 0,
      INTERRUPTION: 1,
      USER: 2,
      ASSISTANT: 3,
      CONFIGURATION: 4,
      ACTION: 5,
    },
  },
  CreateConversationMetricRequest: jest.fn(),
  CreateMessageMetricRequest: jest.fn(),
}));

jest.mock('@/rapida/clients/protos/common_pb', () => ({
  AssistantDefinition: jest.fn(),
  AudioConfig: {
    AudioFormat: { LINEAR16: 1 },
  },
  StreamConfig: jest.fn().mockImplementation(() => ({
    setAudio: jest.fn(),
  })),
  Metric: jest.fn(),
  AssistantConversationConfiguration: jest.fn(),
  AssistantConversationMessageTextContent: jest.fn().mockImplementation(() => ({
    setContent: jest.fn(),
  })),
  AssistantConversationUserMessage: jest.fn().mockImplementation(() => ({
    setId: jest.fn(),
    setText: jest.fn(),
  })),
  AssistantConversationMessageAudioContent: jest.fn().mockImplementation(() => ({
    setContent: jest.fn(),
  })),
}));

jest.mock('@/rapida/clients/talk', () => ({
  AssistantTalk: jest.fn(),
  CreateConversationMetric: jest.fn().mockResolvedValue({}),
  CreateMessageMetric: jest.fn().mockResolvedValue({}),
}));

jest.mock('@/rapida/clients/assistant', () => ({
  GetAssistant: jest.fn().mockResolvedValue({
    getAssistant: () => ({
      getName: () => 'Test Assistant',
      getId: () => 'assistant-123',
    }),
  }),
}));

jest.mock('@/rapida/types/feedback', () => ({
  getFeedback: jest.fn(),
}));

import { Agent } from '@/rapida/agents/';
import { ConnectionState } from '@/rapida/types/connection-state';
import { AgentEvent } from '@/rapida/types/agent-event';
import { MessageRole, MessageStatus } from '@/rapida/types/message';

// Create a concrete implementation for testing since Agent may be abstract
class TestAgent extends Agent {
  constructor(connection: any, config: any, callback?: any) {
    super(connection, config, callback);
  }

  // Expose protected methods for testing
  public getConnectionState() {
    return this.connectionState;
  }

  public getAgentConfig() {
    return this.agentConfig;
  }
}

describe('Agent', () => {
  let agent: TestAgent;

  const mockConnectionConfig = {
    endpoint: 'https://api.test.com',
  };

  const mockAgentConfig = {
    id: 'test-agent',
    inputOptions: {
      channel: 'audio',
      recorderOption: { sampleRate: 16000, format: 'pcm' },
    },
    outputOptions: {
      channel: 'audio',
      playerOption: { sampleRate: 24000, format: 'pcm' },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    agent = new TestAgent(mockConnectionConfig, mockAgentConfig);
  });

  describe('constructor', () => {
    it('should initialize with correct config', () => {
      expect(agent.getAgentConfig()).toBe(mockAgentConfig);
    });

    it('should initialize with disconnected state', () => {
      expect(agent.state).toBe(ConnectionState.Disconnected);
    });

    it('should accept optional callback', () => {
      const callback = { onUserMessage: jest.fn() };
      const agentWithCallback = new TestAgent(mockConnectionConfig, mockAgentConfig, callback);

      expect(agentWithCallback).toBeInstanceOf(Agent);
    });

    it('should initialize empty messages array', () => {
      expect(agent.messages).toEqual([]);
    });
  });

  describe('state getter', () => {
    it('should return current connection state', () => {
      expect(agent.state).toBe(ConnectionState.Disconnected);
    });
  });

  describe('isConnected getter', () => {
    it('should return false when disconnected', () => {
      expect(agent.isConnected).toBe(false);
    });
  });

  describe('conversationId getter', () => {
    it('should return undefined initially', () => {
      expect(agent.conversationId).toBeUndefined();
    });
  });

  describe('messages getter', () => {
    it('should return copy of messages array', () => {
      const messages = agent.messages;
      expect(messages).toEqual([]);

      // Modifying the returned array should not affect the internal array
      messages.push({ id: 'test', role: MessageRole.User, messages: [], time: new Date(), status: MessageStatus.Complete });
      expect(agent.messages).toEqual([]);
    });
  });

  describe('agentConfiguration getter', () => {
    it('should return agent config', () => {
      expect(agent.agentConfiguration).toBe(mockAgentConfig);
    });
  });

  describe('event emission', () => {
    it('should emit events', () => {
      const listener = jest.fn();
      agent.on(AgentEvent.ConnectionChanged, listener);

      agent.emit(AgentEvent.ConnectionChanged, ConnectionState.Connected);

      expect(listener).toHaveBeenCalledWith(ConnectionState.Connected);
    });

    it('should support multiple listeners', () => {
      const listener1 = jest.fn();
      const listener2 = jest.fn();

      agent.on(AgentEvent.ConnectionChanged, listener1);
      agent.on(AgentEvent.ConnectionChanged, listener2);

      agent.emit(AgentEvent.ConnectionChanged, ConnectionState.Connected);

      expect(listener1).toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
    });

    it('should allow removing listeners', () => {
      const listener = jest.fn();
      agent.on(AgentEvent.ConnectionChanged, listener);
      agent.off(AgentEvent.ConnectionChanged, listener);

      agent.emit(AgentEvent.ConnectionChanged, ConnectionState.Connected);

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('agentMessages', () => {
    it('should store messages', () => {
      const message = {
        id: 'msg-1',
        role: MessageRole.User,
        messages: ['Hello'],
        time: new Date(),
        status: MessageStatus.Complete,
      };

      agent.agentMessages.push(message);

      expect(agent.agentMessages).toHaveLength(1);
      expect(agent.agentMessages[0]).toEqual(message);
    });

    it('should handle multiple messages', () => {
      const userMessage = {
        id: 'msg-1',
        role: MessageRole.User,
        messages: ['Hello'],
        time: new Date(),
        status: MessageStatus.Complete,
      };

      const systemMessage = {
        id: 'msg-2',
        role: MessageRole.System,
        messages: ['Hi there!'],
        time: new Date(),
        status: MessageStatus.Complete,
      };

      agent.agentMessages.push(userMessage);
      agent.agentMessages.push(systemMessage);

      expect(agent.agentMessages).toHaveLength(2);
      expect(agent.agentMessages[0].role).toBe(MessageRole.User);
      expect(agent.agentMessages[1].role).toBe(MessageRole.System);
    });

    it('should handle pending messages', () => {
      const pendingMessage = {
        id: 'msg-pending',
        role: MessageRole.System,
        messages: ['Processing...'],
        time: new Date(),
        status: MessageStatus.Pending,
      };

      agent.agentMessages.push(pendingMessage);

      expect(agent.agentMessages[0].status).toBe(MessageStatus.Pending);
    });
  });
});
