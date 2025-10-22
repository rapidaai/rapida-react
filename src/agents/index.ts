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

import { AgentConfig } from "@/rapida/types/agent-config";
import { AgentCallback } from "@/rapida/types/agent-callback";
import {
  AssistantConversationConfiguration,
  AssistantConversationMessageTextContent,
  AssistantConversationUserMessage,
  AssistantMessagingRequest,
  AssistantMessagingResponse,
  CreateConversationMetricRequest,
  CreateMessageMetricRequest,
} from "@/rapida/clients/protos/talk-api_pb";
import { ConnectionConfig } from "@/rapida/types/connection-config";
import { ConnectionState } from "@/rapida/types/connection-state";
import { AgentEventCallback } from "@/rapida/types/agent-event-callback";
import { EventEmitter } from "events";
import type TypedEmitter from "typed-emitter";
import { AssistantDefinition, Metric } from "@/rapida/clients/protos/common_pb";
import { Message as LocalMessage, MessageRole } from "@/rapida/types/message";
import { AgentEvent } from "@/rapida/types/agent-event";
import {
  AssistantTalk,
  CreateConversationMetric,
  CreateMessageMetric,
} from "@/rapida/clients/talk";
import { getFeedback } from "@/rapida/types/feedback";
import {
  GetAssistantRequest,
  GetAssistantResponse,
} from "@/rapida/clients/protos/assistant-api_pb";
import { GetAssistant } from "@/rapida/clients/assistant";

import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import { AssistantConversationMessageAudioContent } from "../clients/protos/talk-api_pb";

/**
 * Rapida Agent SDK
 *
 * The Agent class provides a high-level interface for interacting with Rapida AI assistants.
 * It manages bidirectional communication, handles connection states, and provides utilities
 * for metrics, feedback, and dynamic agent switching.
 *
 * Key Features:
 * - Bidirectional streaming communication with assistants
 * - Real-time connection state management
 * - Message and conversation metrics
 * - Dynamic agent switching during conversations
 * - Event-driven architecture with typed events
 *
 * @example
 * ```typescript
 * const agent = new MyAgent(connectionConfig, agentConfig);
 *
 * // Listen for events
 * agent.on(AgentEvent.Initialized, (assistant) => {
 *   console.log('Agent initialized:', assistant.getName());
 * });
 *
 * agent.on(AgentEvent.ConnectionChanged, (state) => {
 *   console.log('Connection state:', state);
 * });
 *
 * // Connect and start conversation
 * await agent.connect();
 *
 * // Switch to a different agent during conversation
 * await agent.switchAgent({
 *   agentId: 'new-agent-id',
 *   version: 'v2.0',
 *   options: new Map([['temperature', createAnyValue('0.7')]])
 * });
 * ```
 */
export class Agent extends (EventEmitter as new () => TypedEmitter<AgentEventCallback>) {
  // Connection and State Management
  protected connectionState: ConnectionState = ConnectionState.Disconnected;

  // conversation id
  private _conversationId?: string;

  // connection
  protected talkingConnection?: any;

  // Agent Configuration
  protected agentConfig: AgentConfig;

  // callbacks can have multiple callback
  protected agentCallbacks: AgentCallback[];

  //
  private readonly _connectionConfig: ConnectionConfig;

  // all the messages
  public agentMessages: LocalMessage[] = [];

  /**
   * Creates a new Agent instance
   *
   * @param connection - Connection configuration for the assistant
   * @param agentConfig - Initial agent configuration
   *
   * @example
   * ```typescript
   * const connectionConfig = new AssistantConnectionConfig({
   *   endpoint: 'https://api.rapida.ai',
   *   auth: { apiKey: 'your-api-key' }
   * });
   *
   * const agentConfig = new AgentConfig({
   *   id: 'assistant-id',
   *   definition: assistantDefinition
   * });
   *
   * const agent = new MyAgent(connectionConfig, agentConfig);
   * ```
   */
  protected constructor(
    connection: ConnectionConfig,
    agentConfig: AgentConfig,
    agentCallback?: AgentCallback
  ) {
    super();
    this.agentConfig = agentConfig;
    this._connectionConfig = connection;
    this.agentCallbacks = [];
    if (agentCallback) this.agentCallbacks.push(agentCallback);
  }

  // Public Getters

  /**
   * Current connection state of the agent
   */
  get state(): ConnectionState {
    return this.connectionState;
  }

  /**
   * Current conversation ID, if any
   */
  get conversationId(): string | undefined {
    return this._conversationId;
  }

  /**
   * Array of messages in the current conversation
   */
  get messages(): LocalMessage[] {
    return [...this.agentMessages]; // Return copy to prevent external modification
  }

  /**
   * Whether the agent is currently connected
   */
  get isConnected(): boolean {
    return this.connectionState === ConnectionState.Connected;
  }

  /**
   * this will help user to modify what he wants
   */
  get agentConfiguration(): AgentConfig {
    return this.agentConfig;
  }
  /**
   * Switches to a different agent during an active conversation
   *
   * This method allows dynamic agent switching without losing conversation context.
   * The new agent will receive the conversation history and continue from where
   * the previous agent left off.
   *
   * @param config - Configuration for the new agent
   * @throws {Error} If agent is not connected or switch fails
   *
   * @example
   * ```typescript
   * // Switch to a specialized agent for technical queries
   * await agent.switchAgent({
   *   agentId: 'technical-support-agent',
   *   version: 'v1.2',
   *   options: new Map([
   *     ['specialization', createAnyValue('technical')],
   *     ['expertise_level', createAnyValue('advanced')]
   *   ])
   * });
   *
   * // Switch to a different language agent
   * await agent.switchAgent({
   *   agentId: 'multilingual-agent',
   *   metadata: new Map([
   *     ['language', createAnyValue('spanish')],
   *     ['region', createAnyValue('es-ES')]
   *   ])
   * });
   * ```
   */
  public async switchAgent(config: AgentConfig): Promise<void> {
    if (!this.isConnected) {
      throw new Error("Cannot switch agent: not connected");
    }

    if (!this.talkingConnection) {
      throw new Error("No active connection available for agent switch");
    }

    // Update agent config
    this.agentConfig = config;

    // Send configuration request to switch agent
    const switchRequest = this._createAssistantConfigureRequest(
      this.agentConfig.definition,
      this.agentConfig.arguments,
      this.agentConfig.metadata,
      this.agentConfig.options
    );

    await this.talkingConnection.write(switchRequest);
  }

  /**
   * Creates metrics for a specific message
   *
   * @param messageId - ID of the message to create metrics for
   * @param metrics - Array of metric objects
   *
   * @example
   * ```typescript
   * agent.createMessageMetric('msg-123', [
   *   {
   *     name: 'user_satisfaction',
   *     description: 'User satisfaction rating',
   *     value: '4.5'
   *   },
   *   {
   *     name: 'response_time',
   *     description: 'Time taken to respond',
   *     value: '1.2'
   *   }
   * ]);
   * ```
   */
  public createMessageMetric(
    messageId: string,
    metrics: Array<{
      name: string;
      description: string;
      value: string;
    }>
  ): void {
    if (!this._conversationId) {
      throw new Error("Cannot create message metric: no active conversation");
    }

    const req = new CreateMessageMetricRequest();
    req.setAssistantid(this.agentConfig.definition.getAssistantid());
    req.setAssistantconversationid(this._conversationId);
    req.setMessageid(messageId);

    for (const mtr of metrics) {
      const _m = new Metric();
      _m.setName(mtr.name);
      _m.setValue(mtr.value);
      _m.setDescription(mtr.description);
      req.addMetrics(_m);
    }

    CreateMessageMetric(this._connectionConfig, req)
      .then(() => {
        const lastMetric = metrics[metrics.length - 1];
        if (!lastMetric) return;
        const feedback = getFeedback(lastMetric.value);
        this._updateMessageFeedback(messageId, feedback);
        this.emit(AgentEvent.FeedbackEvent, "message", feedback);
      })
      .catch((error) => {
        console.error("Failed to create message metric:", error);
      });
  }

  /**
   * Creates metrics for the entire conversation
   *
   * @param metrics - Array of metric objects
   *
   * @example
   * ```typescript
   * agent.createConversationMetric([
   *   {
   *     name: 'conversation_length',
   *     description: 'Total messages in conversation',
   *     value: '15'
   *   },
   *   {
   *     name: 'resolution_status',
   *     description: 'Whether the issue was resolved',
   *     value: 'resolved'
   *   }
   * ]);
   * ```
   */
  public createConversationMetric(
    metrics: Array<{
      name: string;
      description: string;
      value: string;
    }>
  ): void {
    if (!this._conversationId) {
      throw new Error(
        "Cannot create conversation metric: no active conversation"
      );
    }

    const req = new CreateConversationMetricRequest();
    req.setAssistantid(this.agentConfig.definition.getAssistantid());
    req.setAssistantconversationid(this._conversationId);

    for (const mtr of metrics) {
      const _m = new Metric();
      _m.setName(mtr.name);
      _m.setValue(mtr.value);
      _m.setDescription(mtr.description);
      req.addMetrics(_m);
    }

    CreateConversationMetric(this._connectionConfig, req).catch((error) => {
      console.error("Failed to create conversation metric:", error);
    });
  }

  /**
   * Emits a typed event
   *
   * @param event - Event name
   * @param args - Event arguments
   * @returns Whether the event had listeners
   */
  public emit<E extends keyof AgentEventCallback>(
    event: E,
    ...args: Parameters<AgentEventCallback[E]>
  ): boolean {
    return super.emit(event, ...args);
  }

  // Protected Methods

  /**
   * Creates an assistant messaging request with the given role and contents
   *
   * @param role - Message role (user, assistant, system)
   * @param contents - Message contents
   * @returns Configured messaging request
   */
  protected createAssistantTextMessage(
    content: string
  ): AssistantMessagingRequest {
    const request = new AssistantMessagingRequest();
    const userMessage = new AssistantConversationUserMessage();
    const message = new AssistantConversationMessageTextContent();
    message.setContent(content);
    userMessage.setText(message);
    request.setMessage(userMessage);
    return request;
  }

  /**
   *
   * @param content
   * @returns
   */
  protected createAssistantAudioMessage(
    content: Uint8Array | string
  ): AssistantMessagingRequest {
    const request = new AssistantMessagingRequest();
    const userMessage = new AssistantConversationUserMessage();
    const message = new AssistantConversationMessageAudioContent();
    message.setContent(content);
    userMessage.setAudio(message);
    request.setMessage(userMessage);
    return request;
  }

  /**
   * Override this method to handle incoming messages from the assistant
   *
   * @param response - Response from the assistant
   *
   * @example
   * ```typescript
   * protected onReceive(response: AssistantMessagingResponse) {
   *   if (response.hasMessage()) {
   *     console.log('Received message:', response.getMessage()?.getContentsList());
   *   }
   * }
   * ```
   */
  protected onRecieve = async (_: AssistantMessagingResponse) => {
    console.warn(
      "No receive method implemented. Override onReceive() in your Agent subclass."
    );
  };

  // Private Methods

  /**
   * Initializes the agent by fetching assistant data
   */
  public async getAssistant(): Promise<GetAssistantResponse> {
    return this._fetchAssistant(this.agentConfig.id, this.agentConfig.version);
  }

  /**
   * Creates an assistant configuration request
   */
  private _createAssistantConfigureRequest(
    definition: AssistantDefinition,
    args?: Map<string, google_protobuf_any_pb.Any>,
    metadatas?: Map<string, google_protobuf_any_pb.Any>,
    options?: Map<string, google_protobuf_any_pb.Any>
  ): AssistantMessagingRequest {
    const request = new AssistantMessagingRequest();
    const assistantConfiguration = new AssistantConversationConfiguration();

    if (this._conversationId) {
      assistantConfiguration.setAssistantconversationid(this._conversationId);
    }

    assistantConfiguration.setAssistant(definition);

    // Set options
    options?.forEach((v, k) => {
      assistantConfiguration.getOptionsMap().set(k, v);
    });

    // Set metadata
    metadatas?.forEach((v, k) => {
      assistantConfiguration.getMetadataMap().set(k, v);
    });

    // Set arguments
    args?.forEach((v, k) => {
      assistantConfiguration.getArgsMap().set(k, v);
    });

    request.setConfiguration(assistantConfiguration);
    return request;
  }

  /**
   * Updates connection state and emits events
   */
  private _setAndEmitConnectionState(state: ConnectionState): boolean {
    if (state === this.connectionState) {
      return false;
    }

    this.connectionState = state;
    this.emit(AgentEvent.ConnectionStateEvent, this.connectionState);
    this._connectionConfig.onConnectionChange(state);
    return true;
  }

  /**
   * Handles conversation ID changes
   */
  protected changeConversation = (assistantConversationId: string): void => {
    if (this._conversationId) return;
    this._conversationId = assistantConversationId;
  };

  /**
   * Establishes connection to the assistant
   */
  protected async connectAgent(): Promise<void> {
    if (this.connectionState === ConnectionState.Connected) {
      return;
    }
    try {
      this.talkingConnection = AssistantTalk(this._connectionConfig);
      this.talkingConnection.on("data", this.onRecieve);
      this.talkingConnection.on("end", this._onEnd);
      this.talkingConnection.on("status", this._onStatusChange);

      // Send initial configuration
      await this.talkingConnection.write(
        this._createAssistantConfigureRequest(
          this.agentConfig.definition,
          this.agentConfig.arguments,
          this.agentConfig.metadata,
          this.agentConfig.options
        )
      );

      this._setAndEmitConnectionState(ConnectionState.Connected);
    } catch (err) {
      const error = new Error(
        `Failed to connect to talking server: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
      console.error(error.message);
      this.emit(AgentEvent.ErrorEvent, "server", error.message);

      // Return the error for calling code to catch
      return Promise.reject(error);
    }
  }

  /**
   * Disconnects from the assistant
   */
  protected async disconnectAgent(): Promise<void> {
    if (this.connectionState !== ConnectionState.Connected) {
      return;
    }

    try {
      await this.talkingConnection?.end();
    } catch (error) {
      console.error("Error ending talking connection:", error);
    }
  }

  /**
   * Handles connection end events
   */
  private _onEnd = (): void => {
    this._setAndEmitConnectionState(ConnectionState.Disconnected);
  };

  /**
   * Handles connection status changes
   */
  private _onStatusChange = (status: any): void => {
    console.log("Connection status changed:", status);
  };

  /**
   * Fetches assistant data for a specific agent ID and version
   */
  private async _fetchAssistant(
    agentId: string,
    version?: string
  ): Promise<GetAssistantResponse> {
    const req = new GetAssistantRequest();
    const assistantDef = new AssistantDefinition();
    assistantDef.setAssistantid(agentId);
    if (version) {
      assistantDef.setVersion(version);
    }
    req.setAssistantdefinition(assistantDef);
    return GetAssistant(this._connectionConfig, req);
  }

  /**
   * Updates message feedback in the local message store
   */
  private _updateMessageFeedback(messageId: string, feedback: any): void {
    this.agentMessages = this.agentMessages.map((message) => {
      if (message.id === messageId && message.role === MessageRole.System) {
        return { ...message, feedback };
      }
      return message;
    });
  }

  public registerCallback = (agentCallback: AgentCallback) => {
    // adding another callack
    this.agentCallbacks.push(agentCallback);
  };
}
