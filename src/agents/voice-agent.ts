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
import { DeviceManager } from "@/rapida/devices/device-manager";
import { AssistantTalkOutput } from "@/rapida/clients/protos/talk-api_pb";
import { AgentEvent } from "@/rapida/types/agent-event";

import {
  ConversationDirective,
  ConversationAssistantMessage as CAMessage,
  ConversationInterruption,
  ConversationUserMessage as CUMessage,
} from "@/rapida/clients/protos/talk-api_pb";
import { toDate, isChrome } from "@/rapida/utils";
import { MessageRole, MessageStatus } from "@/rapida/types/message";
import { Channel } from "@/rapida/types/channel";
import { AgentConfig } from "@/rapida/types/agent-config";
import { ConnectionConfig } from "@/rapida/types/connection-config";
import { Agent } from "@/rapida/agents/";
import { WebRTCTransport, supportsWebRTCTransport } from "@/rapida/audio/webrtc-transport";
import { isAndroidDevice, isIosDevice } from "@/rapida/audio/compatibility";
import {
  AgentCallback,
  ConversationAssistantMessage,
  ConversationMessage,
  ConversationUserMessage,
} from "@/rapida/types/agent-callback";
import { ConnectionState } from "@/rapida/types/connection-state";

export class VoiceAgent extends Agent {
  private webrtcTransport: WebRTCTransport | null = null;
  private volume: number = 1;
  private connectionConfig: ConnectionConfig;

  private inputFrequencyData?: Uint8Array;
  private outputFrequencyData?: Uint8Array;


  /**
   * @param options
   */
  constructor(
    connection: ConnectionConfig,
    agentConfig: AgentConfig,
    agentCallback?: AgentCallback
  ) {
    super(connection, agentConfig, agentCallback);
    this.connectionConfig = connection;

    // Auto-construct WebRTC signaling URL if not provided
    if (!agentConfig.inputOptions.webrtcSignalingUrl) {
      agentConfig.inputOptions.webrtcSignalingUrl = this.buildWebRTCSignalingUrl(
        connection.endpoint.assistant,
        agentConfig.id
      );
    }

    // Verify WebRTC is supported
    if (!supportsWebRTCTransport()) {
      console.warn("WebRTC transport not supported in this browser");
    }
  }

  /**
   * Build WebRTC signaling URL from assistant API endpoint and assistant ID
   * Converts HTTP(S) URL to WS(S) URL with WebRTC path
   * Includes auth credentials as query parameters (required for WebSocket auth)
   * @param assistantEndpoint - The assistant API endpoint (e.g., "https://assistant-01.rapida.ai")
   * @param assistantId - The assistant ID
   * @returns WebSocket signaling URL (e.g., "wss://assistant-01.rapida.ai/v1/talk/webrtc/{assistantId}?authorization=xxx")
   */
  private buildWebRTCSignalingUrl(assistantEndpoint: string, assistantId: string): string {
    // Convert HTTP(S) to WS(S)
    let wsUrl = assistantEndpoint
      .replace(/^https:\/\//i, "wss://")
      .replace(/^http:\/\//i, "ws://");

    // Remove trailing slash if present
    wsUrl = wsUrl.replace(/\/$/, "");

    // Build base URL with path
    let url = `${wsUrl}/v1/talk/webrtc/${assistantId}`;

    // Add auth credentials as query parameters (browser WebSocket doesn't support custom headers)
    const authInfo = this.connectionConfig.authInfo;
    if (authInfo) {
      const params = new URLSearchParams();

      // Map SDK auth to server expected query params
      // Check for 'authorization' first (UserAuthInfo - debugger/personal token)
      // Then check for 'x-api-key' (ClientAuthInfo - SDK/webplugin)
      if ('authorization' in authInfo && authInfo['authorization']) {
        params.append('authorization', authInfo['authorization'] as string);
      } else if ('x-api-key' in authInfo && authInfo['x-api-key']) {
        params.append('authorization', authInfo['x-api-key'] as string);
      }
      // x-auth-id -> x-auth-id
      if ('x-auth-id' in authInfo && authInfo['x-auth-id']) {
        params.append('x-auth-id', authInfo['x-auth-id'] as string);
      }
      // x-project-id -> x-project-id
      if ('x-project-id' in authInfo && authInfo['x-project-id']) {
        params.append('x-project-id', authInfo['x-project-id'] as string);
      }

      const queryString = params.toString();
      if (queryString) {
        url = `${url}?${queryString}`;
      }
    }

    console.log("[VoiceAgent] WebRTC signaling URL:", url.replace(/authorization=[^&]+/, 'authorization=***'));
    return url;
  }

  /**
   * disconnecting the agent and voice if it is connected
   */
  public disconnect = async () => {
    await this.disconnectAgent();
    await this.disconnectAudio();
  };

  /**
   * disconnect the audio for the agent
   */
  public disconnectAudio = async () => {
    try {
      if (this.webrtcTransport) {
        await this.webrtcTransport.close();
        this.webrtcTransport = null;
      }
    } catch (error) {
      console.error("Error during cleanup:", error);
    }
  };

  private connectDevice = async () => {
    try {
      // Use native WebRTC transport - audio flows through peer connection
      // Text/content also flows through WebRTC signaling
      this.webrtcTransport = await WebRTCTransport.create(
        {
          signalingUrl: this.agentConfig.inputOptions.webrtcSignalingUrl!,
          iceServers: this.agentConfig.inputOptions.iceServers,
          recorderOptions: this.agentConfig.inputOptions.recorderOption,
          playerOptions: this.agentConfig.outputOptions.playerOption,
        },
        {
          onConnectionStateChange: (state) => {
            console.log("WebRTC transport state:", state);
            // Map RTCPeerConnectionState to ConnectionState
            if (state === "connected") {
              this.connectionState = ConnectionState.Connected;
              this.emit(AgentEvent.ConnectionStateEvent, ConnectionState.Connected);
            } else if (state === "disconnected" || state === "closed" || state === "failed") {
              this.connectionState = ConnectionState.Disconnected;
              this.emit(AgentEvent.ConnectionStateEvent, ConnectionState.Disconnected);
            }
          },
          onConnected: async () => {
            console.log("WebRTC transport connected");
            // Proactively resume audio to prevent first audio cutoff
            try {
              await this.webrtcTransport?.resumeAudio();
              console.log("Audio resumed on connection");
            } catch (err) {
              console.warn("Failed to resume audio on connection:", err);
            }
          },
          onDisconnected: () => {
            console.log("WebRTC transport disconnected");
          },
          onError: (error) => {
            console.error("WebRTC transport error:", error);
            this.emit(AgentEvent.ErrorEvent, "client", error.message || String(error));
          },
          onTextReceived: (text, messageId, completed) => {
            // Handle assistant text response
            console.log("Assistant text received:", text, "completed:", completed);
            this._handleAssistantText(text, messageId, completed ?? true);
          },
          onUserTranscription: (text, messageId, completed) => {
            // Handle user speech transcription
            console.log("User transcription:", text, "completed:", completed);
            this._handleUserTranscription(text, messageId, completed ?? true);
          },
          onClear: () => {
            // Handle audio interruption
            console.log("Audio clear/interruption");
            this.interruptAudio();
          },
          onConfiguration: (conversationId) => {
            // Handle configuration with conversation ID
            console.log("Configuration received, conversation ID:", conversationId);
            if (conversationId) {
              this.changeConversation(String(conversationId));
            }
          },
        }
      );

      console.log("WebRTC transport mode enabled - audio via peer connection");
    } catch (error) {
      await this.disconnectAudio();
      console.error("Microphone permission error:", error);
    }
  };

  /**
   * Handle assistant text from WebRTC - supports streaming with completed flag
   * Similar to original onHandleAssistant for gRPC
   */
  private _handleAssistantText(text: string, messageId?: string, completed: boolean = true) {
    const id = messageId || `msg_${Date.now()}`;
    const now = new Date();

    if (completed) {
      // Complete message
      if (this.agentMessages.length > 0) {
        const lastMessage = this.agentMessages[this.agentMessages.length - 1];
        if (
          lastMessage.role === MessageRole.System &&
          lastMessage.status === MessageStatus.Pending
        ) {
          // Update the existing message to complete
          lastMessage.messages = [text]; // Replace with complete message
          lastMessage.status = MessageStatus.Complete;
          lastMessage.time = now;
        } else {
          // Unexpected case: complete message without pending, create new
          this.agentMessages.push({
            id: id,
            role: MessageRole.System,
            messages: [text],
            time: now,
            status: MessageStatus.Complete,
          });
        }
      } else {
        this.agentMessages.push({
          id: id,
          role: MessageRole.System,
          messages: [text],
          time: now,
          status: MessageStatus.Complete,
        });
      }
    } else {
      // Chunk - streaming text
      if (this.agentMessages.length > 0) {
        const lastMessage = this.agentMessages[this.agentMessages.length - 1];
        if (
          lastMessage.role === MessageRole.System &&
          lastMessage.status === MessageStatus.Pending
        ) {
          // Update existing message with new chunk
          lastMessage.messages[0] += text; // Merge strings
          lastMessage.time = now;
        } else {
          // Create new pending message for chunk
          this.agentMessages.push({
            id: id,
            role: MessageRole.System,
            messages: [text],
            time: now,
            status: MessageStatus.Pending,
          });
        }
      } else {
        // Create new pending message for chunk if no messages exist
        this.agentMessages.push({
          id: id,
          role: MessageRole.System,
          messages: [text],
          time: now,
          status: MessageStatus.Pending,
        });
      }
    }

    // Create callback message and notify callbacks
    const callbackMessage = new ConversationAssistantMessage();
    (callbackMessage as any).id = id;
    (callbackMessage as any).text = text;
    (callbackMessage as any).messageText = text;
    (callbackMessage as any).completed = completed;

    // Notify all registered callbacks
    this.agentCallbacks.forEach((cb) => {
      cb.onAssistantMessage?.(callbackMessage);
    });

    // Emit conversation event (cast to any for WebRTC mode compatibility)
    this.emit(
      AgentEvent.ConversationEvent,
      AssistantTalkOutput.DataCase.ASSISTANT,
      callbackMessage as any
    );
  }

  /**
   * Handle user transcription from WebRTC - supports streaming with completed flag
   * Similar to original onHandleUser for gRPC
   */
  private _handleUserTranscription(text: string, messageId?: string, completed: boolean = true) {
    const id = messageId || `msg_${Date.now()}`;
    const now = new Date();

    // Check if we need to update existing message or create new one
    if (this.agentMessages.length > 0) {
      const lastMessage = this.agentMessages[this.agentMessages.length - 1];
      if (
        lastMessage.role === MessageRole.User &&
        lastMessage.id === id
      ) {
        // Update existing message with same ID
        this.agentMessages.pop();
      }
    }

    this.agentMessages.push({
      id: id,
      role: MessageRole.User,
      messages: [text],
      time: now,
      status: completed ? MessageStatus.Complete : MessageStatus.Pending,
    });

    // Create callback message and notify callbacks
    const callbackMessage = new ConversationUserMessage();
    (callbackMessage as any).id = id;
    (callbackMessage as any).text = text;
    (callbackMessage as any).messageText = text;
    (callbackMessage as any).completed = completed;

    // Notify all registered callbacks
    this.agentCallbacks.forEach((cb) => {
      cb.onUserMessage?.(callbackMessage);
    });

    // Emit conversation event (cast to any for WebRTC mode compatibility)
    this.emit(
      AgentEvent.ConversationEvent,
      AssistantTalkOutput.DataCase.USER,
      callbackMessage as any
    );
  }

  /**
   *
   */
  private connectAudio = async () => {
    const delayConfig = {
      default: 0,
      android: 3_000,
      ios: 0,
    };
    let delay = delayConfig.default;
    if (isAndroidDevice()) {
      delay = delayConfig.android ?? delay;
    } else if (isIosDevice()) {
      delay = delayConfig.ios ?? delay;
    }
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    if (isIosDevice()) {
      const availableDevices =
        await window.navigator.mediaDevices.enumerateDevices();
      const idealDevice = availableDevices.find(
        (d) =>
          d.kind === "audioinput" &&
          ["airpod", "headphone", "earphone"].find((keyword) =>
            d.label.toLowerCase().includes(keyword)
          )
      );
      if (idealDevice) {
        this.agentConfig.inputOptions.recorderOption.device =
          idealDevice.deviceId;
      }
    }
    await this.connectDevice();
  };

  /**
   * Interrupt audio playback (WebRTC handles audio directly via peer connection)
   */
  private interruptAudio = () => {
    // Call WebRTC transport's interrupt method for smooth audio cutoff
    if (this.webrtcTransport) {
      this.webrtcTransport.interruptAudio();
    }
    console.log("Audio interrupt requested");
  };

  /**
   * Fade out audio (WebRTC handles audio directly via peer connection)
   * @param duration
   */
  private fadeOutAudio = (duration: number = 2) => {
    // WebRTC transport handles audio via peer connection
    // Volume control can be done via the audio element
    if (this.webrtcTransport) {
      this.webrtcTransport.setVolume(0);
      setTimeout(() => {
        this.webrtcTransport?.setVolume(this.volume);
      }, duration * 1000);
    }
  };

  /**
   * Add audio chunk - not needed for WebRTC (audio flows via peer connection)
   * @param _chunk - Unused in WebRTC mode
   */
  private addAudioChunk = (_chunk: ArrayBuffer) => {
    // WebRTC transport handles audio via peer connection
    // This method is not used in WebRTC mode
  };

  /**
   * Connect to the assistant
   * For Audio channel: Uses WebRTC for both audio and signaling (no gRPC needed)
   * For Text channel: Uses gRPC connection
   */
  public connect = async () => {
    try {
      if (this.agentConfig.inputOptions.channel == Channel.Audio) {
        // WebRTC handles everything - audio via peer connection, text via signaling
        await this.connectAudio();
        // Don't call connectAgent - WebRTC endpoint creates conversation on server
      } else {
        // Text-only mode uses gRPC
        await this.connectAgent();
      }
    } catch (err) {
      console.error("error while connect " + err);
    }
  };

  /**
   * Resume audio playback - call this from a user interaction (click/tap)
   * Required by some browsers due to autoplay policies
   */
  public resumeAudio = async () => {
    if (this.webrtcTransport) {
      await this.webrtcTransport.resumeAudio();
    }
  };

  /**
   * Send text message to the assistant
   * Works in both Audio and Text modes
   * @param text
   */
  public onSendText = async (text: string) => {
    if (!this.isConnected) await this.connect();

    // Add user message to agentMessages immediately
    const messageId = `msg_${Date.now()}`;
    const now = new Date();
    this.agentMessages.push({
      id: messageId,
      role: MessageRole.User,
      messages: [text],
      time: now,
      status: MessageStatus.Complete,
    });

    // Emit conversation event for UI update
    const userMessage = new ConversationUserMessage();
    (userMessage as any).id = messageId;
    (userMessage as any).text = text;
    (userMessage as any).messageText = text;
    this.emit(AgentEvent.ConversationEvent, AssistantTalkOutput.DataCase.USER, userMessage as any);

    if (this.agentConfig.inputOptions.channel == Channel.Audio) {
      // In Audio mode, send text via WebRTC signaling
      if (this.webrtcTransport) {
        this.webrtcTransport.sendText(text);
        console.log("Text sent via WebRTC signaling:", text);
      } else {
        console.warn("WebRTC transport not available for text sending");
      }
    } else {
      // In Text mode, use gRPC connection
      this.talkingConnection?.write(this.createAssistantTextMessage(text));
    }
  };

  /**
   * Getting  all the list of deviceid
   * @param kind
   * @param requestPermissions
   * @returns
   */
  static getLocalDevices(
    kind?: MediaDeviceKind,
    requestPermissions: boolean = true
  ): Promise<MediaDeviceInfo[]> {
    return DeviceManager.getInstance().getDevices(kind, requestPermissions);
  }

  /**
   *  changing the deviceid
   * @param deviceId the device id
   */
  public setOutputMediaDevice = async (deviceId: string) => {
    if (this.agentConfig.outputOptions.playerOption.device === deviceId) {
      return;
    }
    this.agentConfig.outputOptions.playerOption.device = deviceId;

    if (this.webrtcTransport) {
      try {
        await this.webrtcTransport.setOutputDevice(deviceId);
      } catch (err) {
        console.warn("Failed to set output device:", err);
        await this.connectDevice();
      }
    }
    this.emit(AgentEvent.OutputMediaDeviceChangeEvent, deviceId);
  };

  /**
   *  Changing media device id
   * @param deviceId
   * @returns
   */
  public setInputMediaDevice = async (deviceId: string) => {
    if (this.agentConfig.inputOptions.recorderOption.device === deviceId) {
      return;
    }
    console.log("changing the input audio with new device id " + deviceId);
    this.agentConfig.inputOptions.recorderOption.device = deviceId;

    if (this.webrtcTransport) {
      try {
        await this.webrtcTransport.setInputDevice(deviceId);
      } catch (err) {
        console.warn("Failed to set input device:", err);
        await this.connectDevice();
      }
    }
    this.emit(AgentEvent.InputMediaDeviceChangeEvent, deviceId);
  };

  get inputMediaDevice(): string | undefined {
    return this.agentConfig.inputOptions.recorderOption.device;
  }


  public setInputChannel = async (input: Channel) => {
    // If the input channel doesn't change, do nothing
    if (this.agentConfig.inputOptions.channel === input) {
      return;
    }

    // Disconnect current audio if any
    await this.disconnectAudio();

    // Update the input channel state
    this.agentConfig.inputOptions.channel = input;
    // currently in and out both are sync
    this.agentConfig.outputOptions.channel = input;

    // Handle deferred audio setup
    if (input === Channel.Audio) {
      if (this.isConnected) {
        // If already connected, initialize audio immediately
        await this.connectAudio();
        await this.switchAgent(this.agentConfig)
      } else {
        // If not connected, defer audio initialization to the `connect()` method
        console.log("Audio initialization deferred until connect()");
      }
    }

    // Emit input channel change event
    this.emit(AgentEvent.InputChannelChangeEvent, this.agentConfig.inputOptions.channel);
  };

  /**
   *
   * @param interruptionData
   */
  private onHandleInterruption = (
    interruptionData: ConversationInterruption | undefined
  ) => {
    if (interruptionData) {
      switch (interruptionData.getType()) {
        case ConversationInterruption.InterruptionType
          .INTERRUPTION_TYPE_UNSPECIFIED:
          console.log("Unspecified interruption type");
          break;
        case ConversationInterruption.InterruptionType
          .INTERRUPTION_TYPE_VAD:
          this.fadeOutAudio();
          break;
        case ConversationInterruption.InterruptionType
          .INTERRUPTION_TYPE_WORD:
          // when interrupt then mark last message completed
          if (this.agentMessages.length > 0) {
            const lastIndex = this.agentMessages.length - 1;
            this.agentMessages[lastIndex] = {
              ...this.agentMessages[lastIndex],
              status: MessageStatus.Complete,
            };
          }
          this.interruptAudio();
          break;
        default:
          console.log("Unknown interruption type");
      }
      this.emit(
        AgentEvent.ConversationEvent,
        AssistantTalkOutput.DataCase.INTERRUPTION,
        interruptionData
      );
    }
  };


  /**
   * on handle user content
   * @param userContent 
   */
  private onHandleUser = (
    userContent: CUMessage | undefined
  ) => {
    if (userContent) {
      switch (userContent.getMessageCase()) {
        case CUMessage.MessageCase.MESSAGE_NOT_SET:
        case CUMessage.MessageCase.AUDIO:
        case CUMessage.MessageCase.TEXT:
          const agentTranscript = userContent.getText();
          if (agentTranscript) {
            if (this.agentMessages.length > 0) {
              const lastMessage =
                this.agentMessages[this.agentMessages.length - 1];
              if (
                lastMessage.role === MessageRole.User &&
                lastMessage.id === userContent.getId()
              ) {
                this.agentMessages.pop();
              }
            }
            this.agentMessages.push({
              id: userContent.getId(),
              role: MessageRole.User,
              messages: [agentTranscript],
              time: toDate(userContent?.getTime()),
              status: userContent.getCompleted()
                ? MessageStatus.Complete
                : MessageStatus.Pending,
            });
          }
      }

      this.emit(
        AgentEvent.ConversationEvent,
        AssistantTalkOutput.DataCase.USER,
        userContent
      );
    }
  };


  /**
   * on handle assistant content
   * @param systemContent 
   */
  private onHandleAssistant = (
    systemContent: CAMessage | undefined
  ) => {
    if (systemContent) {
      //
      switch (systemContent.getMessageCase()) {
        case CAMessage.MessageCase.MESSAGE_NOT_SET:
        case CAMessage.MessageCase.AUDIO:
          const content = systemContent.getAudio_asU8();
          if (content) {
            this.addAudioChunk(new Uint8Array(content).buffer);
          }
          break;
        case CAMessage.MessageCase.TEXT:
          const systemTranscript = systemContent.getText();
          if (systemTranscript) {
            if (systemContent.getCompleted()) {
              // Complete message
              if (this.agentMessages.length > 0) {
                const lastMessage =
                  this.agentMessages[this.agentMessages.length - 1];
                if (
                  lastMessage.role === MessageRole.System &&
                  lastMessage.status === MessageStatus.Pending
                ) {
                  // Update the existing message to complete
                  lastMessage.messages = [systemTranscript]; // Replace with complete message
                  lastMessage.status = MessageStatus.Complete;
                  lastMessage.time = toDate(systemContent?.getTime());
                } else {
                  // Unexpected case: complete message without pending, create new
                  this.agentMessages.push({
                    id: systemContent.getId(),
                    role: MessageRole.System,
                    messages: [systemTranscript],
                    time: toDate(systemContent?.getTime()),
                    status: MessageStatus.Complete,
                  });
                }
              } else {
                this.agentMessages.push({
                  id: systemContent.getId(),
                  role: MessageRole.System,
                  messages: [systemTranscript],
                  time: toDate(systemContent?.getTime()),
                  status: MessageStatus.Complete,
                });
              }
            } else {
              // Chunk
              if (this.agentMessages.length > 0) {
                const lastMessage =
                  this.agentMessages[this.agentMessages.length - 1];
                if (
                  lastMessage.role === MessageRole.System &&
                  lastMessage.status === MessageStatus.Pending
                ) {
                  // Update existing message with new chunk
                  lastMessage.messages[0] += systemTranscript; // Merge strings
                  lastMessage.time = toDate(systemContent?.getTime());
                } else {
                  // Create new pending message for chunk
                  this.agentMessages.push({
                    id: systemContent.getId(),
                    role: MessageRole.System,
                    messages: [systemTranscript],
                    time: toDate(systemContent?.getTime()),
                    status: MessageStatus.Pending,
                  });
                }
              } else {
                // Create new pending message for chunk if no messages exist
                this.agentMessages.push({
                  id: systemContent.getId(),
                  role: MessageRole.System,
                  messages: [systemTranscript],
                  time: toDate(systemContent?.getTime()),
                  status: MessageStatus.Pending,
                });
              }
            }
          }
      }
      this.emit(
        AgentEvent.ConversationEvent,
        AssistantTalkOutput.DataCase.ASSISTANT,
        systemContent
      );
    }
  };

  /**
   *  streaming response from the server
   * @param response
   * @returns
   */
  override onRecieve = async (response: AssistantTalkOutput) => {
    switch (response.getDataCase()) {
      case AssistantTalkOutput.DataCase.DATA_NOT_SET:
        break;
      case AssistantTalkOutput.DataCase.INTERRUPTION:
        this.onHandleInterruption(response.getInterruption());
        break;
      case AssistantTalkOutput.DataCase.USER:
        this.onHandleUser(response.getUser());
        break;
      case AssistantTalkOutput.DataCase.ASSISTANT:
        this.onHandleAssistant(response.getAssistant());
        break;
      case AssistantTalkOutput.DataCase.CONFIGURATION:
        const conversation = response.getConfiguration();
        if (!conversation?.getAssistantconversationid()) return;
        break;
      default:
        break;
    }
    await this.onCallback(response);
  };

  // Adding a check to filter out audio chunks
  // Implementing a debounce mechanism
  // These suggestions can guide the team in finding an appropriate solution to optimize the onMessage callback handling.
  onCallback = async (response: AssistantTalkOutput) => {
    // check if callback is register then call it off
    for (const agentCallback of this.agentCallbacks) {
      switch (response.getDataCase()) {
        case AssistantTalkOutput.DataCase.DATA_NOT_SET:
          break;
        case AssistantTalkOutput.DataCase.DIRECTIVE:
          if (response.getDirective()?.getType() === ConversationDirective.DirectiveType.END_CONVERSATION) {
            await this.disconnect();
          }
          if (agentCallback && agentCallback?.onAction) {
            agentCallback.onAction(response.getDirective()?.toObject());
          }
          break;
        case AssistantTalkOutput.DataCase.INTERRUPTION:
          if (agentCallback && agentCallback?.onInterrupt) {
            agentCallback.onInterrupt(response.getInterruption()?.toObject());
          }
          break;
        case AssistantTalkOutput.DataCase.USER:
          if (agentCallback && agentCallback?.onUserMessage) {
            agentCallback.onUserMessage(
              new ConversationUserMessage(response.getUser())
            );
          }
          break;
        case AssistantTalkOutput.DataCase.ASSISTANT:
          if (agentCallback && agentCallback?.onAssistantMessage) {
            agentCallback.onAssistantMessage(
              new ConversationAssistantMessage(response.getAssistant())
            );
          }
          break;
        case AssistantTalkOutput.DataCase.CONFIGURATION:
          if (agentCallback && agentCallback?.onConfiguration) {
            agentCallback.onConfiguration(
              response.getConfiguration()?.toObject()
            );
          }
          const cnvId = response
            .getConfiguration()
            ?.getAssistantconversationid();
          if (cnvId) this.changeConversation(cnvId);
          break;

        default:
          break;
      }
    }
  };

  /**
   * to get byte frequency data from input
   * @returns
   */
  public getInputByteFrequencyData = (): Uint8Array | undefined => {
    const analyser = this.webrtcTransport?.inputAnalyserNode;

    if (analyser) {
      this.inputFrequencyData = new Uint8Array(analyser.frequencyBinCount);
      (analyser.getByteFrequencyData as (array: Uint8Array) => void)(
        this.inputFrequencyData
      );
    }
    return this.inputFrequencyData;
  };

  /**
   * output byte frequency data
   * @returns
   */
  public getOutputByteFrequencyData = (): Uint8Array | undefined => {
    const analyser = this.webrtcTransport?.outputAnalyserNode;

    if (analyser) {
      this.outputFrequencyData = new Uint8Array(analyser.frequencyBinCount);
      (analyser.getByteFrequencyData as (array: Uint8Array) => void)(
        this.outputFrequencyData
      );
    }
    return this.outputFrequencyData;
  };

  /**
   * Check if WebRTC transport is connected
   */
  public get isWebRTCConnected(): boolean {
    return this.webrtcTransport?.connected ?? false;
  }

  /** Get the WebRTC transport instance */
  public get transport(): WebRTCTransport | null {
    return this.webrtcTransport;
  }

  /** Get WebRTC connection statistics */
  public async getStats() {
    return this.webrtcTransport?.getStats() ?? null;
  }

  /** Start periodic stats monitoring (returns cleanup function) */
  public startAudioMonitoring(): () => void {
    return this.webrtcTransport?.startAudioMonitoring() ?? (() => { });
  }
}
