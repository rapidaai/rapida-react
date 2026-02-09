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
      onInitialization: (config) => {
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

  /**
   * Create or recreate the WebRTCGrpcTransport.
   *
   * @param textOnly  When true, connects gRPC + signaling only (no microphone).
   *                  The server still sends WebRTC signaling even in text mode;
   *                  the transport handles it, we just skip local media.
   */
  private connectDevice = async (textOnly: boolean = false) => {
    // Close existing transport before creating new one
    if (this.webrtcTransport) {
      await this.webrtcTransport.close();
      this.webrtcTransport = null;
    }

    try {
      this.webrtcTransport = await WebRTCGrpcTransport.create(
        {
          connectionConfig: this.connectionConfig,
          agentConfig: this.agentConfig,
          conversationId: this.conversationId,
        },
        this.buildTransportCallbacks(),
        textOnly,
      );

      // After transport is created, emit the device change event so UI can update
      if (!textOnly && this.agentConfig.inputOptions.device) {
        this.emit(AgentEvent.InputMediaDeviceChangeEvent, this.agentConfig.inputOptions.device);
      }
    } catch (error) {
      await this.disconnectAudio();
      if (textOnly) {
        this.emit(AgentEvent.ErrorEvent, "client", "Text connection failed");
      } else {
        this.emit(AgentEvent.ErrorEvent, "client", "Microphone permission denied or unavailable");
      }
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
   * Connect to the assistant.
   *
   * ALL connections go through WebRTCGrpcTransport so that the gRPC
   * signaling (SDP/ICE negotiation) the server always expects is handled
   * properly.
   *
   * - Audio mode → full transport (mic + WebRTC peer + gRPC)
   * - Text mode  → text-only transport (gRPC + signaling, no mic)
   */
  public connect = async () => {
    console.log("[Rapida:VoiceAgent] connect called");

    // Guard: prevent concurrent connection attempts
    if (this._isConnecting) return;

    // Guard: already connected
    if (this.connectionState === ConnectionState.Connected) return;

    // Guard: transport already exists (connection in progress)
    if (this.webrtcTransport) return;

    this._isConnecting = true;
    try {
      if (this.agentConfig.inputOptions.channel === Channel.Audio) {
        await this.connectAudio();
      } else {
        // Text-only — transport handles gRPC + signaling, no microphone
        await this.connectDevice(/* textOnly */ true);
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
   * Send text message to the assistant.
   * Works in both Audio and Text modes — always goes through the transport.
   *
   * @param text
   */
  public onSendText = async (text: string) => {
    if (!this.isConnected) await this.connect();

    if (this.webrtcTransport?.isGrpcConnected) {
      // GrpcSignalingManager guards with ensureInitializationSent()
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
   * Switch to text mode — disconnect audio but keep gRPC connection.
   * If gRPC was lost, create a fresh text-only transport.
   */
  private switchToTextMode = async () => {
    if (this.webrtcTransport?.isGrpcConnected) {
      // Disconnect just audio, keep gRPC for text messaging
      await this.webrtcTransport.disconnectAudioOnly();
      this.webrtcTransport.sendConversationConfiguration();
      console.log("[Rapida:VoiceAgent] switched to text mode, gRPC preserved");
    } else {
      // gRPC was lost or no transport — create fresh text-only transport
      await this.disconnectAudio();
      await this.connectDevice(/* textOnly */ true);
    }
  };

  /**
   * Switch to audio mode - reconnect audio using existing gRPC or create new connection
   */
  private switchToAudioMode = async () => {
    let shouldSendConfig = false;

    if (this.webrtcTransport) {
      // Check if gRPC is still connected
      if (this.webrtcTransport.isGrpcConnected) {
        // Check if audio is already connected
        if (!this.webrtcTransport.isAudioConnected) {
          // Reconnect audio via existing gRPC stream
          await this.webrtcTransport.reconnectAudio();
          console.log("Reconnecting audio via existing gRPC connection");
        } else {
          shouldSendConfig = true;
        }
      } else {
        // gRPC was lost, need to create a new connection
        await this.disconnectAudio();
        await this.connectAudio();
        shouldSendConfig = true;
      }
    } else {
      // No WebRTC transport exists, create new connection
      await this.connectAudio();
      shouldSendConfig = true;
    }

    if (shouldSendConfig) {
      this.webrtcTransport?.sendConversationConfiguration();
    }
  };

  /**
   * Disconnect just audio while keeping gRPC connection
   * Used when switching from audio to text mode
   */
  private disconnectAudioOnly = async () => {
    if (this.webrtcTransport) {
      await this.webrtcTransport.disconnectAudioOnly();
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
