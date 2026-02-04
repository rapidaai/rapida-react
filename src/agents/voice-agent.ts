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
import { WebTalkOutput } from "@/rapida/clients/protos/webrtc_pb";
import { AgentEvent } from "@/rapida/types/agent-event";

import {
  ConversationDirective,
  ConversationAssistantMessage as CAMessage,
  ConversationInterruption,
  ConversationUserMessage as CUMessage,
} from "@/rapida/clients/protos/talk-api_pb";
import { toDate } from "@/rapida/utils";
import { MessageRole, MessageStatus } from "@/rapida/types/message";
import { Channel } from "@/rapida/types/channel";
import { AgentConfig } from "@/rapida/types/agent-config";
import { ConnectionConfig } from "@/rapida/types/connection-config";
import { Agent } from "@/rapida/agents/";
import { WebRTCGrpcTransport, supportsWebRTCGrpcTransport } from "@/rapida/audio/webrtc-grpc-transport";
import { isAndroidDevice, isIosDevice } from "@/rapida/audio/compatibility";
import {
  AgentCallback,
  ConversationAssistantMessage,
  ConversationUserMessage,
} from "@/rapida/types/agent-callback";
import { ConnectionState } from "@/rapida/types/connection-state";

export class VoiceAgent extends Agent {
  private webrtcTransport: WebRTCGrpcTransport | null = null;
  private volume: number = 1;
  private connectionConfig: ConnectionConfig;
  private _isMuted: boolean = false;
  private _isConnecting: boolean = false;

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
    } catch {
      // Cleanup errors are non-critical
    }
  };

  /**
   * Switch to text mode when server disconnects
   * This ensures the UI shows the text chat instead of "click to connect"
   */
  private switchToTextModeOnDisconnect = () => {
    if (this.agentConfig.inputOptions.channel === Channel.Audio) {
      this.agentConfig.inputOptions.channel = Channel.Text;
      this.agentConfig.outputOptions.channel = Channel.Text;
      this.emit(AgentEvent.InputChannelChangeEvent, Channel.Text);
    }
  };

  private connectDevice = async () => {
    // Close existing transport before creating new one
    if (this.webrtcTransport) {
      await this.webrtcTransport.close();
      this.webrtcTransport = null;
    }

    try {
      // Use WebRTC transport with gRPC signaling
      // Audio flows through WebRTC peer connection
      // Signaling flows through gRPC bidirectional stream
      this.webrtcTransport = await WebRTCGrpcTransport.create(
        {
          connectionConfig: this.connectionConfig,
          agentConfig: this.agentConfig,
          conversationId: this.conversationId,
        },
        {
          onConnectionStateChange: (state) => {
            if (state === "connected") {
              this.connectionState = ConnectionState.Connected;
              this.emit(AgentEvent.ConnectionStateEvent, ConnectionState.Connected);
            } else if (state === "disconnected" || state === "closed" || state === "failed") {
              this.connectionState = ConnectionState.Disconnected;
              this.emit(AgentEvent.ConnectionStateEvent, ConnectionState.Disconnected);
              // Switch to text mode when server disconnects
              this.switchToTextModeOnDisconnect();
            }
          },
          onConnected: async () => {
            try {
              await this.webrtcTransport?.resumeAudio();
            } catch {
              // Audio resume may fail if autoplay policy blocks it
            }
          },
          onDisconnected: () => {
            // Connection closed - switch to text mode
            this.switchToTextModeOnDisconnect();
          },
          onError: (error) => {
            this.emit(AgentEvent.ErrorEvent, "client", error.message || String(error));
          },
          onAssistantMessage: (message) => {
            if (message?.messageText) {
              this._handleAssistantText(message.messageText, message.id, message.completed ?? true);
            }
          },
          onUserMessage: (message) => {
            if (message?.messageText) {
              this._handleUserTranscription(message.messageText, message.id, message.completed ?? true);
            }
          },
          onInterrupt: () => {
            this.interruptAudio();
          },
          onConfiguration: (config) => {
            if (config?.assistantconversationid) {
              this.changeConversation(String(config.assistantconversationid));
            }
          },
        }
      );

      // After transport is created, emit the device change event so UI can update
      // This handles the case where no device was specified and the default device is used
      if (this.agentConfig.inputOptions.device) {
        this.emit(AgentEvent.InputMediaDeviceChangeEvent, this.agentConfig.inputOptions.device);
      }
    } catch (error) {
      await this.disconnectAudio();
      this.emit(AgentEvent.ErrorEvent, "client", "Microphone permission denied or unavailable");
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
      WebTalkOutput.DataCase.ASSISTANT,
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
      WebTalkOutput.DataCase.USER,
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
        this.agentConfig.inputOptions.device = idealDevice.deviceId;
      }
    }
    await this.connectDevice();
  };

  /**
   * Interrupt audio playback
   */
  private interruptAudio = () => {
    this.webrtcTransport?.interruptAudio();
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
   * Connect to the assistant
   * For Audio channel: Uses WebRTC for both audio and signaling (no gRPC needed)
   * For Text channel: Uses gRPC connection
   */
  public connect = async () => {
    console.log("VoiceAgent: connect called");
    // Guard: prevent concurrent connection attempts
    if (this._isConnecting) {
      return;
    }

    // Guard: already connected
    if (this.connectionState === ConnectionState.Connected) {
      return;
    }

    // Guard: WebRTC transport already exists (connection in progress)
    if (this.agentConfig.inputOptions.channel == Channel.Audio && this.webrtcTransport) {
      return;
    }

    this._isConnecting = true;
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
      this.emit(AgentEvent.ErrorEvent, "client", `Connection failed: ${err}`);
    } finally {
      this._isConnecting = false;
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

    // Try WebRTC transport first (works for both audio mode and text mode with persistent connection)
    if (this.webrtcTransport?.isGrpcConnected) {
      this.webrtcTransport.sendText(text);
    } else if (this.talkingConnection) {
      // Fallback to standalone gRPC connection (text-only mode without WebRTC)
      this.talkingConnection.write(this.createAssistantTextMessage(text));
    } else {
      // No connection available
      this.emit(AgentEvent.ErrorEvent, "client", "No connection available to send text");
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
    if (this.agentConfig.outputOptions.device === deviceId) {
      return;
    }
    this.agentConfig.outputOptions.device = deviceId;

    if (this.webrtcTransport) {
      try {
        await this.webrtcTransport.setOutputDevice(deviceId);
      } catch {
        // Reconnect if device switch fails
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
    if (this.agentConfig.inputOptions.device === deviceId) {
      return;
    }
    this.agentConfig.inputOptions.device = deviceId;

    if (this.webrtcTransport) {
      try {
        await this.webrtcTransport.setInputDevice(deviceId);
      } catch {
        // Reconnect if device switch fails
        await this.connectDevice();
      }
    }
    this.emit(AgentEvent.InputMediaDeviceChangeEvent, deviceId);
  };

  get inputMediaDevice(): string | undefined {
    return this.agentConfig.inputOptions.device;
  }

  /**
   * Get current mute state
   */
  get isMuted(): boolean {
    return this._isMuted;
  }

  /**
   * Mute the microphone
   */
  public mute = (): void => {
    if (this._isMuted) return;
    this._isMuted = true;
    if (this.webrtcTransport) {
      this.webrtcTransport.setMuted(true);
    }
    this.emit(AgentEvent.MuteStateEvent, true);
  };

  /**
   * Unmute the microphone
   */
  public unmute = (): void => {
    if (!this._isMuted) return;
    this._isMuted = false;
    if (this.webrtcTransport) {
      this.webrtcTransport.setMuted(false);
    }
    this.emit(AgentEvent.MuteStateEvent, false);
  };

  /**
   * Toggle mute state
   * @returns The new mute state after toggling
   */
  public toggleMute = (): boolean => {
    if (this._isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
    return this._isMuted;
  };

  /**
   * Set input channel with persistent connection management
   * 
   * Flow:
   * - Text → Audio:
   *   - If not connected: connect (creates WebRTC + gRPC)
   *   - If gRPC connected but no audio: reconnect audio via existing gRPC
   *   - Send conversation config with audio input stream config
   * 
   * - Audio → Text:
   *   - If not connected: connect (creates gRPC for text)
   *   - If audio connected: disconnect just audio, keep gRPC
   *   - Send conversation config without audio input stream config
   */
  public setInputChannel = async (input: Channel) => {
    // If the input channel doesn't change, do nothing
    if (this.agentConfig.inputOptions.channel === input) {
      return;
    }

    // Update the input channel state
    this.agentConfig.inputOptions.channel = input;
    // currently in and out both are sync
    this.agentConfig.outputOptions.channel = input;

    if (input === Channel.Text) {
      // Switching to TEXT mode
      await this.switchToTextMode();
    } else if (input === Channel.Audio) {
      // Switching to AUDIO mode
      await this.switchToAudioMode();
    }

    // Emit input channel change event
    this.emit(AgentEvent.InputChannelChangeEvent, this.agentConfig.inputOptions.channel);
  };

  /**
   * Switch to text mode - disconnect audio but keep gRPC connection
   */
  private switchToTextMode = async () => {
    if (this.webrtcTransport) {
      // Check if gRPC is still connected
      if (this.webrtcTransport.isGrpcConnected) {
        // Disconnect just audio, keep gRPC for text messaging
        await this.webrtcTransport.disconnectAudioOnly();
        // gRPC is still connected, so we can send text via the existing transport
        console.log("Switched to text mode, gRPC connection preserved");
      } else {
        // gRPC was lost, disconnect everything and connect fresh for text
        await this.disconnectAudio();
        await this.connectAgent(true);
      }
    } else {
      // No WebRTC transport exists, ensure we have a text connection
      await this.connectAgent(true);
    }
  };

  /**
   * Switch to audio mode - reconnect audio using existing gRPC or create new connection
   */
  private switchToAudioMode = async () => {
    if (this.webrtcTransport) {
      // Check if gRPC is still connected
      if (this.webrtcTransport.isGrpcConnected) {
        // Check if audio is already connected
        if (!this.webrtcTransport.isAudioConnected) {
          // Reconnect audio via existing gRPC stream
          await this.webrtcTransport.reconnectAudio();
          console.log("Reconnecting audio via existing gRPC connection");
        }
        // If audio already connected, just send updated config
        // (handled by reconnectAudio which calls sendConversationConfiguration)
      } else {
        // gRPC was lost, need to create a new connection
        await this.disconnectAudio();
        await this.connectAudio();
      }
    } else {
      // No WebRTC transport exists, create new connection
      await this.connectAudio();
    }
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
          break;
      }
      this.emit(
        AgentEvent.ConversationEvent,
        WebTalkOutput.DataCase.INTERRUPTION,
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
        WebTalkOutput.DataCase.USER,
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
      switch (systemContent.getMessageCase()) {
        case CAMessage.MessageCase.MESSAGE_NOT_SET:
        case CAMessage.MessageCase.AUDIO:
          // Audio is handled via WebRTC transport, not gRPC
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
        WebTalkOutput.DataCase.ASSISTANT,
        systemContent
      );
    }
  };

  /**
   *  streaming response from the server
   * @param response
   * @returns
   */
  override onReceive = async (response: WebTalkOutput) => {
    switch (response.getDataCase()) {
      case WebTalkOutput.DataCase.DATA_NOT_SET:
        break;
      case WebTalkOutput.DataCase.INTERRUPTION:
        this.onHandleInterruption(response.getInterruption());
        break;
      case WebTalkOutput.DataCase.USER:
        this.onHandleUser(response.getUser());
        break;
      case WebTalkOutput.DataCase.ASSISTANT:
        this.onHandleAssistant(response.getAssistant());
        break;
      case WebTalkOutput.DataCase.CONFIGURATION:
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
  onCallback = async (response: WebTalkOutput) => {
    // check if callback is register then call it off
    for (const agentCallback of this.agentCallbacks) {
      switch (response.getDataCase()) {
        case WebTalkOutput.DataCase.DATA_NOT_SET:
          break;
        case WebTalkOutput.DataCase.DIRECTIVE:
          if (response.getDirective()?.getType() === ConversationDirective.DirectiveType.END_CONVERSATION) {
            await this.disconnect();
          }
          if (agentCallback && agentCallback?.onAction) {
            agentCallback.onAction(response.getDirective()?.toObject());
          }
          break;
        case WebTalkOutput.DataCase.INTERRUPTION:
          if (agentCallback && agentCallback?.onInterrupt) {
            agentCallback.onInterrupt(response.getInterruption()?.toObject());
          }
          break;
        case WebTalkOutput.DataCase.USER:
          if (agentCallback && agentCallback?.onUserMessage) {
            agentCallback.onUserMessage(
              new ConversationUserMessage(response.getUser())
            );
          }
          break;
        case WebTalkOutput.DataCase.ASSISTANT:
          if (agentCallback && agentCallback?.onAssistantMessage) {
            agentCallback.onAssistantMessage(
              new ConversationAssistantMessage(response.getAssistant())
            );
          }
          break;
        case WebTalkOutput.DataCase.CONFIGURATION:
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
  public get transport(): WebRTCGrpcTransport | null {
    return this.webrtcTransport;
  }
}
