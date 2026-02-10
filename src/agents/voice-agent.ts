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
import { WebTalkResponse } from "@/rapida/clients/protos/webrtc_pb";
import { AgentEvent } from "@/rapida/types/agent-event";


import { MessageRole, MessageStatus } from "@/rapida/types/message";
import { Channel } from "@/rapida/types/channel";
import { AgentConfig } from "@/rapida/types/agent-config";
import { ConnectionConfig } from "@/rapida/types/connection-config";
import { Agent } from "@/rapida/agents/";
import { WebRTCGrpcTransport } from "@/rapida/audio/webrtc-grpc-transport";
import { isAndroidDevice, isIosDevice } from "@/rapida/audio/compatibility";
import {
  AgentCallback,
  ConversationAssistantMessage,
  ConversationUserMessage,
} from "@/rapida/types/agent-callback";
import { ConnectionState } from "@/rapida/types/connection-state";
import { ConversationDirective } from "../clients/protos/talk-api_pb";

const LOG_PREFIX = "[Rapida:VoiceAgent]";

export class VoiceAgent extends Agent {
  private webrtcTransport: WebRTCGrpcTransport | null = null;
  private volume: number = 1;
  private connectionConfig: ConnectionConfig;
  private _isMuted: boolean = false;
  private _connectPromise: Promise<void> | null = null;

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

  // ---------------------------------------------------------------------------
  // Shared transport callbacks (used for both audio and text-only modes)
  // ---------------------------------------------------------------------------

  /**
   * Build the AgentCallback wiring used by WebRTCGrpcTransport.
   * Both audio-mode and text-only-mode go through the same transport,
   * so we share a single callback object.
   */
  private buildTransportCallbacks(): AgentCallback {
    return {
      onConnectionStateChange: (state) => {
        console.log(`${LOG_PREFIX} callback -> onConnectionStateChange`, state);
        if (state === "connected") {
          this.connectionState = ConnectionState.Connected;
          this.emit(AgentEvent.ConnectionStateEvent, ConnectionState.Connected);
        } else if (state === "disconnected" || state === "closed" || state === "failed") {
          this.connectionState = ConnectionState.Disconnected;
          this.emit(AgentEvent.ConnectionStateEvent, ConnectionState.Disconnected);
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
        console.log(`${LOG_PREFIX} callback -> onDisconnected`);
        this.switchToTextModeOnDisconnect();
      },
      onError: (error) => {
        console.log(`${LOG_PREFIX} callback -> onError`, error);
        this.emit(AgentEvent.ErrorEvent, "client", error.message || String(error));
      },
      onAssistantMessage: (message) => {
        console.log(`${LOG_PREFIX} callback -> onAssistantMessage`, message);
        if (message)
          this._handleAssistantText(message.messageText, message.id, message.completed ?? true);
      },
      onUserMessage: (message) => {
        console.log(`${LOG_PREFIX} callback -> onUserMessage`, message);
        if (message?.messageText) {
          this._handleUserTranscription(message.messageText, message.id, message.completed ?? true);
        }
      },
      onInterrupt: () => {
        console.log(`${LOG_PREFIX} callback -> onInterrupt`);
        this.interruptAudio();
      },

      onDirective: (directive) => {
        console.log(`${LOG_PREFIX} callback -> onDirective`, directive);
        if (directive && directive.type === ConversationDirective.DirectiveType.END_CONVERSATION) {
          this.disconnect();
        }
      },
      onInitialization: (config) => {
        console.log(`${LOG_PREFIX} callback -> onInitialization`, config);
        if (config?.assistantconversationid) {
          this.changeConversation(String(config.assistantconversationid));
        }
      },
    };
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
   * Fallback to text mode when the audio transport disconnects.
   * The session (gRPC) may still be alive — only the transport changes.
   */
  private switchToTextModeOnDisconnect = () => {
    if (this.agentConfig.inputOptions.channel === Channel.Audio) {
      this.agentConfig.inputOptions.channel = Channel.Text;
      this.agentConfig.outputOptions.channel = Channel.Text;
      this.emit(AgentEvent.InputChannelChangeEvent, Channel.Text);
    }
  };

  /**
   * Create the session (gRPC stream + optional audio).
   *
   * The current channel config determines whether audio is included.
   * This is called once per session — after that, use setInputChannel()
   * to add/remove the audio transport without recreating the session.
   */
  private connectDevice = async () => {
    if (this.webrtcTransport) {
      await this.webrtcTransport.close();
      this.webrtcTransport = null;
    }

    const isAudio = this.agentConfig.inputOptions.channel === Channel.Audio;
    if (isAudio) {
      await this.prepareAudioForPlatform();
    }

    try {
      this.webrtcTransport = await WebRTCGrpcTransport.create(
        {
          connectionConfig: this.connectionConfig,
          agentConfig: this.agentConfig,
          conversationId: this.conversationId,
        },
        this.buildTransportCallbacks(),
        /* textOnly */ !isAudio,
      );

      if (isAudio && this.agentConfig.inputOptions.device) {
        this.emit(AgentEvent.InputMediaDeviceChangeEvent, this.agentConfig.inputOptions.device);
      }
    } catch (error) {
      await this.disconnectAudio();
      this.emit(AgentEvent.ErrorEvent, "client",
        isAudio ? "Microphone permission denied or unavailable" : "Text connection failed",
      );
    }
  };

  /**
   * Handle assistant text from WebRTC - supports streaming with completed flag
   * Similar to original onHandleAssistant for gRPC
   */
  private _handleAssistantText(text?: string, messageId?: string, completed: boolean = true) {
    const id = messageId || `msg_${Date.now()}`;
    const now = new Date();
    console.log(`${LOG_PREFIX} Handling Assistant Text`, text, completed);
    if (completed) {
      // Complete message
      if (this.agentMessages.length > 0) {
        const lastMessage = this.agentMessages[this.agentMessages.length - 1];
        if (
          lastMessage.role === MessageRole.System &&
          lastMessage.status === MessageStatus.Pending
        ) {
          // lastMessage.messages = [text]; // Replace with complete message
          lastMessage.status = MessageStatus.Complete;
          lastMessage.time = now;
        } else {
          // Unexpected case: complete message without pending, create new
          if (text)
            this.agentMessages.push({
              id: id,
              role: MessageRole.System,
              messages: [text],
              time: now,
              status: MessageStatus.Complete,
            });
        }
      } else {
        if (text)
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
          if (text)
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
        if (text)
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
      WebTalkResponse.DataCase.ASSISTANT,
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
      WebTalkResponse.DataCase.USER,
      callbackMessage as any
    );
  }

  /**
   * Platform-specific audio preparation (mobile delays / iOS device selection).
   * Called automatically by connectDevice() when the channel is Audio.
   */
  private prepareAudioForPlatform = async () => {
    if (isAndroidDevice()) {
      await new Promise((resolve) => setTimeout(resolve, 3_000));
    }
    if (isIosDevice()) {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const ideal = devices.find(
        (d) =>
          d.kind === "audioinput" &&
          ["airpod", "headphone", "earphone"].some((kw) =>
            d.label.toLowerCase().includes(kw)
          ),
      );
      if (ideal) this.agentConfig.inputOptions.device = ideal.deviceId;
    }
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
   * Ensure the transport is connected. If not, connect and wait.
   * Safe to call from anywhere — deduplicates concurrent calls.
   */
  private ensureConnected = async () => {
    if (!this.webrtcTransport?.isGrpcConnected) {
      await this.connect();
    }
  };

  /**
   * Create a session (gRPC stream) with the assistant.
   *
   * The current channel config determines whether audio is included.
   * Once connected, use setInputChannel() to switch transports
   * without creating a new session.
   */
  public connect = async () => {
    if (this.webrtcTransport) return;

    if (this._connectPromise) {
      await this._connectPromise;
      return;
    }

    this._connectPromise = (async () => {
      try {
        await this.connectDevice();
      } catch (err) {
        this.emit(AgentEvent.ErrorEvent, "client", `Connection failed: ${err}`);
      } finally {
        this._connectPromise = null;
      }
    })();

    await this._connectPromise;
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
   * Send text message to the assistant.
   * Works in both Audio and Text modes — always goes through the transport.
   *
   * @param text
   */
  public onSendText = async (text: string) => {
    await this.ensureConnected();
    if (this.webrtcTransport?.isGrpcConnected) {
      this.webrtcTransport.sendText(text);
    } else {
      this.emit(AgentEvent.ErrorEvent, "client", "No connection available to send text");
    }
  };

  /**
   * Switch to a different agent configuration during an active conversation.
   * Sends a ConversationConfiguration through the transport.
   */
  public override async switchAgent(config: AgentConfig): Promise<void> {
    if (!this.isConnected) {
      throw new Error("Cannot switch agent: not connected");
    }
    this.agentConfig = config;
    if (this.webrtcTransport?.isGrpcConnected) {
      this.webrtcTransport.sendConversationConfiguration();
    } else {
      throw new Error("No active connection available for agent switch");
    }
  }

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
   * Switch input/output channel (Text ↔ Audio).
   *
   * This is a transport-layer change, NOT a state-layer change:
   * - Does NOT create a new session
   * - Does NOT reset conversation state
   * - Only changes input transport (keyboard ↔ microphone)
   *   and output transport (screen ↔ speaker)
   */
  public setInputChannel = async (input: Channel) => {
    if (this.agentConfig.inputOptions.channel === input) return;

    this.agentConfig.inputOptions.channel = input;
    this.agentConfig.outputOptions.channel = input;

    // Ensure the session exists
    await this.ensureConnected();

    // Add or remove the audio transport
    if (input === Channel.Audio) {
      await this.webrtcTransport?.reconnectAudio();
    } else {
      await this.webrtcTransport?.disconnectAudioOnly();
    }

    // Tell the server which mode we're in
    this.webrtcTransport?.sendConversationConfiguration();

    this.emit(AgentEvent.InputChannelChangeEvent, input);
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
