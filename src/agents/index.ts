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
import { AgentConfig } from "@/rapida/agents/agent-config";
import {
  AssistantMessagingRequest,
  AssistantMessagingResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import {
  AssistantConnectionConfig,
  ConnectionConfig,
} from "@/rapida/connections/connection-config";
import { ConnectionState } from "@/rapida/connections/connection-state";
import { AgentEventCallback } from "@/rapida/events/agent-event-callback";
import { EventEmitter } from "events";
import type TypedEmitter from "typed-emitter";
import { Content, Message } from "@/rapida/clients/protos/common_pb";
import { Message as LocalMessage, MessageRole } from "@/rapida/agents/message";
import { AgentEvent } from "@/rapida/events/agent-event";
import {
  AssistantTalk,
  CreateConversationMetric,
  CreateMessageMetric,
} from "@/rapida/clients/talk";
import { getFeedback } from "@/rapida/agents/feedback";
import {
  Assistant,
  GetAssistantResponse,
} from "@/rapida/clients/protos/assistant-api_pb";
import { GetAssistant } from "@/rapida/clients/assistant";
import { ServiceError } from "@/rapida/clients/protos/talk-api_pb_service";
import { RapidaSource, SDK_SOURCE } from "@/rapida/utils/rapida_source";
import {
  AgentDeployment,
  GetDeployment,
} from "@/rapida/agents/agent-deployment";
import { HEADER_SOURCE_KEY } from "@/rapida/utils/rapida_header";

//
export class Agent extends (EventEmitter as new () => TypedEmitter<AgentEventCallback>) {
  /**
   * connection state default connection is disconnected
   */
  state: ConnectionState = ConnectionState.Disconnected;

  /**
   * conversation id
   */
  protected agentMessagingId: string | undefined;
  get conversationId(): string | undefined {
    return this.agentMessagingId;
  }
  /**
   *
   * @param assistantConversationId
   * @returns
   */
  protected onChangeConversation = (assistantConversationId: string) => {
    if (this.agentMessagingId) return;
    this.agentMessagingId = assistantConversationId;
  };

  /**
   * an connection for talking client
   * when you are conversing with agent then this client will get used
   * work with bi-driectional request <> response
   */
  // @ts-ignore
  protected talkingConnection: any;

  // as the api takes bytes of array can have text byte ot audio byte
  private rapidaAssistant: Assistant | null = null;
  get assistant(): Assistant | null {
    return this.rapidaAssistant;
  }

  //
  protected agentConfig: AgentConfig;
  protected connectionConfig: AssistantConnectionConfig;

  /**
   *
   */
  protected agentMessages: LocalMessage[];
  get messages(): LocalMessage[] {
    return this.agentMessages;
  }

  /**
   *
   * @param connection
   * @param agentConfig
   * @param onRecieve
   */
  protected constructor(
    connection: AssistantConnectionConfig,
    agentConfig: AgentConfig
  ) {
    super();
    this.agentConfig = agentConfig;
    this.connectionConfig = connection;
    //
    //
    this.agentMessagingId = undefined;
    this.agentMessages = [];

    this.getAssistant()
      .then((data) => {
        this.rapidaAssistant = data;
        this.emit(AgentEvent.Initialized, this.rapidaAssistant);
      })
      .catch((error) => {
        console.error("Failed to initialize assistant:", error);
      });
  }

  public getDeployment(): AgentDeployment | undefined {
    if (this.rapidaAssistant == null) {
      return undefined;
    }
    return GetDeployment(
      this.assistant!,
      this.connectionConfig.auth.Client?.[HEADER_SOURCE_KEY] ?? SDK_SOURCE
    );
  }
  /**
   * Message builder
   * @param role
   * @param contents
   * @returns
   */
  protected createAssistantRequest = (
    role: string,
    contents: Content[]
  ): AssistantMessagingRequest => {
    const request = new AssistantMessagingRequest();
    if (this.agentMessagingId)
      request.setAssistantconversationid(this.agentMessagingId);
    const message = new Message();
    message.setRole(role);
    message.setContentsList(contents);

    request.setAssistant(this.agentConfig.definition);
    request.setMessage(message);

    //
    if (this.agentConfig.options) {
      this.agentConfig.options?.forEach((v, k) => {
        request.getOptionsMap().set(k, v);
      });
    }

    //
    if (this.agentConfig.metadata) {
      this.agentConfig.metadata?.forEach((v, k) => {
        request.getMetadataMap().set(k, v);
      });
    }

    //
    if (this.agentConfig.arguments) {
      this.agentConfig.arguments?.forEach((v, k) => {
        request.getArgsMap().set(k, v);
      });
    }

    return request;
  };

  /**
   * After changing connection emit the connection change event with curent state of connection
   * @param state
   * @returns
   */
  protected setAndEmitConnectionState(state: ConnectionState): boolean {
    if (state === this.state) {
      return false;
    }
    this.state = state;
    this.emit(AgentEvent.ConnectionChanged, this.state);
    this.connectionConfig.onConnectionChange(state);
    return true;
  }

  /**
   *
   * @param messageId
   * @param metrics
   */
  public createMessageMetric(
    messageId: string,
    metrics: {
      name: string;
      description: string;
      value: string;
    }[]
  ) {
    CreateMessageMetric(
      this.connectionConfig,
      this.agentConfig.definition.getAssistantid(),
      this.agentMessagingId!,
      messageId,
      metrics,
      () => {
        //
        const feedback = getFeedback(metrics[metrics.length - 1]?.value);
        this.agentMessages = this.agentMessages.map((message) => {
          if (message.id === messageId && message.role === MessageRole.System) {
            return {
              ...message,
              feedback: feedback,
            };
          }
          return message;
        });
        this.emit(AgentEvent.MessageFeedback, getFeedback(feedback));
      },
      this.connectionConfig.auth
    );
  }

  /**
   *
   * @param metrics
   */
  public createConversationMetric(
    metrics: {
      name: string;
      description: string;
      value: string;
    }[]
  ) {
    CreateConversationMetric(
      this.connectionConfig,
      this.agentConfig.definition.getAssistantid(),
      this.agentMessagingId!,
      metrics,
      () => {
        console.dir("message metric got created");
      },
      this.connectionConfig.auth
    );
  }

  /**
   *
   * @param event
   * @param args
   * @returns
   */
  emit<E extends keyof AgentEventCallback>(
    event: E,
    ...args: Parameters<AgentEventCallback[E]>
  ): boolean {
    return super.emit(event, ...args);
  }

  /**
   *
   */
  get isConnected(): boolean {
    return this.state === ConnectionState.Connected;
  }

  /**
   *
   */
  protected connectAgent = async () => {
    if (this.state === ConnectionState.Connected) {
      return;
    }
    try {
      this.talkingConnection = AssistantTalk(
        this.connectionConfig.streamClient,
        this.connectionConfig.auth
      );
      this.talkingConnection?.on("data", await this.onDataChange);
      this.talkingConnection?.on("end", await this.onEnd);
      this.talkingConnection?.on("status", await this.onStatusChange);
      //
      await this.setAndEmitConnectionState(ConnectionState.Connected);
    } catch (err) {
      console.error("error while creating a connection with talking server");
    }
  };

  protected disconnectAgent = async () => {
    if (this.state !== ConnectionState.Connected) {
      return;
    }
    try {
      await this.talkingConnection?.end();
    } catch (error) {
      // console.error("Error ending talking connection:", error);
    }
  };
  /**
   * call it when end of stream
   */
  private onEnd = async () => {
    await this.setAndEmitConnectionState(ConnectionState.Disconnected);
  };

  // when status change of active connection
  private onStatusChange = async (s) => {
    console.log(s);
  };

  /**
   *
   * @param response
   * @returns
   */
  protected onDataChange = async (response: AssistantMessagingResponse) => {
    if (this.onRecieve) this.onRecieve(response);
    this.agentConfig.onCallback(response);
  };

  /**
   *
   * @returns
   */
  protected getAssistant = async (): Promise<Assistant> => {
    return new Promise((resolve, reject) => {
      GetAssistant(
        this.connectionConfig,
        this.agentConfig.id,
        this.agentConfig.version || null,
        (err: ServiceError | null, response: GetAssistantResponse | null) => {
          if (err) {
            reject(err);
          } else if (response && response.getData()) {
            resolve(response.getData()!);
          } else {
            reject(new Error("No response received"));
          }
        },
        this.connectionConfig.auth
      );
    });
  };
  /**
   *
   * @param response
   */
  onRecieve(_: AssistantMessagingResponse) {
    console.warn("no recieve method registered");
  }
}
