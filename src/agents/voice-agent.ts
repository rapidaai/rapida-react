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
import { Input } from "@/rapida/audio/input";
import { Output } from "@/rapida/audio/output";
import { WebRTCAudioManager, supportsWebRTCAudioEnhancements } from "@/rapida/audio/webrtc-audio-manager";
import { isAndroidDevice, isIosDevice } from "@/rapida/audio/compatibility";
import { arrayBufferToUint8 } from "@/rapida/audio/audio";
import {
  AgentCallback,
  ConversationAssistantMessage,
  ConversationMessage,
  ConversationUserMessage,
} from "@/rapida/types/agent-callback";
import { ConnectionState } from "@/rapida/types/connection-state";

export class VoiceAgent extends Agent {
  private input: Input | null = null;
  private output: Output | null = null;
  private webrtcAudioManager: WebRTCAudioManager | null = null;
  private preliminaryInputStream: MediaStream | null = null;
  private volume: number = 1;
  private useWebRTCMode: boolean = true;

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
    // Determine if WebRTC mode should be used
    this.useWebRTCMode =
      agentConfig.inputOptions.useWebRTC &&
      supportsWebRTCAudioEnhancements();
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
      this.preliminaryInputStream?.getTracks().forEach((track) => track.stop());

      if (this.useWebRTCMode && this.webrtcAudioManager) {
        await this.webrtcAudioManager.close();
        this.webrtcAudioManager = null;
      } else {
        await this.input?.close();
        await this.output?.close();
      }
    } catch (error) {
      console.error("Error during cleanup:", error);
      // Optionally, you can add more specific error handling or logging here
    }
  };

  private connectDevice = async () => {
    try {
      if (this.useWebRTCMode) {
        // Use WebRTC-enhanced audio manager for better AEC and lower latency
        this.webrtcAudioManager = await WebRTCAudioManager.create(
          this.agentConfig.inputOptions.recorderOption,
          this.agentConfig.outputOptions.playerOption
        );

        // Setup worklet message handlers
        if (this.webrtcAudioManager.inputWorkletNode) {
          this.webrtcAudioManager.inputWorkletNode.port.onmessage = this.onInputWorkletMessage;
        }
        if (this.webrtcAudioManager.outputWorkletNode) {
          this.webrtcAudioManager.outputWorkletNode.port.onmessage = this.onOutputWorkletMessage;
        }

        console.log("WebRTC-enhanced audio mode enabled");
      } else {
        // Fallback to legacy mode
        // Get the MediaStream with AEC enabled - we'll reuse this same stream
        // to preserve the browser's echo cancellation state
        this.preliminaryInputStream = await this.waitForUserMediaPermission();

        // Create Output first, then Input with the existing stream
        // This ensures AEC can correlate output audio with mic input
        this.output = await Output.create(this.agentConfig.outputOptions.playerOption);
        this.input = await Input.create(
          this.agentConfig.inputOptions.recorderOption,
          this.preliminaryInputStream // Reuse the same MediaStream
        );

        this.input.worklet.port.onmessage = this.onInputWorkletMessage;
        this.output.worklet.port.onmessage = this.onOutputWorkletMessage;

        // Don't stop the stream - it's now being used by Input
        this.preliminaryInputStream = null;
      }
    } catch (error) {
      await this.disconnectAudio();
      console.error("Microphone permission error:", error);
    }
  };

  // Helper method to handle media permissions:
  private waitForUserMediaPermission = async (): Promise<MediaStream> => {
    try {
      const sampleRate = this.agentConfig.inputOptions.recorderOption.sampleRate;

      // Chrome needs explicit true values, not just { ideal: true }
      // to properly enable audio processing and reduce noise
      const options: MediaTrackConstraints = isChrome()
        ? {
          sampleRate: { ideal: sampleRate },
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          channelCount: { ideal: 1 },
        }
        : {
          sampleRate: { ideal: sampleRate },
          echoCancellation: { ideal: true },
          noiseSuppression: { ideal: true },
          autoGainControl: { ideal: true },
        };

      return await navigator.mediaDevices.getUserMedia({ audio: options });
    } catch (error) {
      // Handle permission denied or other errors.
      console.error(
        "Permission denied or error while requesting microphone access:",
        error
      );
      throw error; // Propagate the error for further handling by `connectDevice`.
    }
  };

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
   *
   * Sending a message to server contains audio buffer
   * Very optimize version that will handle the request and response wihtout modifying
   * this makes the actual data sent to the server to process
   * @param event
   */
  private onInputWorkletMessage = (event: MessageEvent): void => {
    const rawAudioPcmData = event.data[0];
    if (this.connectionState !== ConnectionState.Connected) {
      console.log("Please call connect first, agent is not connected");
      return;
    }

    if (this.agentConfig.inputOptions.channel == Channel.Audio)
      this.talkingConnection?.write(
        this.createAssistantAudioMessage(
          arrayBufferToUint8(rawAudioPcmData.buffer)
        )
      );
  };

  /**
   *
   * @param param0
   */
  private onOutputWorkletMessage = ({ data }: MessageEvent): void => {
    if (data.type === "process") {
      // this.updateMode(data.finished ? "listening" : "speaking");
    }
  };

  /**
   *
   */
  private interruptAudio = () => {
    if (this.useWebRTCMode && this.webrtcAudioManager) {
      this.webrtcAudioManager.interruptAudio();
    } else {
      this.output?.worklet.port.postMessage({ type: "interrupt" });
      this.output?.gain.gain.exponentialRampToValueAtTime(
        0.0001,
        this.output.context.currentTime + 2
      );
      setTimeout(() => {
        if (this.output) this.output.gain.gain.value = this.volume;
        this.output?.worklet.port.postMessage({ type: "clearInterrupted" });
      }, 2000);
    }
  };

  /**
   *
   * @param duration
   * @returns
   */
  private fadeOutAudio = (duration: number = 2) => {
    if (this.useWebRTCMode && this.webrtcAudioManager) {
      this.webrtcAudioManager.fadeOutAudio(duration);
      return;
    }

    if (!this.output) return;

    // Reset interrupt flag to prevent VAD from clearing audio due to previous WORD interrupt
    this.output.worklet.port.postMessage({ type: "resetInterrupt" });

    const currentTime = this.output.context.currentTime;
    this.output.gain.gain.exponentialRampToValueAtTime(
      0.0001,
      currentTime + duration
    );

    setTimeout(() => {
      if (this.output) this.output.gain.gain.value = this.volume;
    }, duration * 1000);
  };

  /**
   *
   * @param chunk
   */
  private addAudioChunk = (chunk: ArrayBuffer) => {
    if (this.useWebRTCMode && this.webrtcAudioManager) {
      this.webrtcAudioManager.addAudioChunk(chunk);
    } else if (this.output) {
      this.output.gain.gain.value = this.volume;
      this.output.worklet.port.postMessage({ type: "clearInterrupted" });
      this.output.worklet.port.postMessage({
        type: "buffer",
        buffer: chunk,
      });
    }
  };

  /**
   *
   * @returns
   */
  public connect = async () => {
    try {
      if (this.agentConfig.inputOptions.channel == Channel.Audio) {
        await this.connectAudio();
      }
      await this.connectAgent();
    } catch (err) {
      console.error("error while connect " + err);
    }
  };

  /**
   *
   * @param text
   */
  public onSendText = async (text: string) => {
    if (!this.isConnected) await this.connect();
    if (this.agentConfig.inputOptions.channel == Channel.Text) {
      // only send text when you know the channel is text
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

    if (this.useWebRTCMode && this.webrtcAudioManager) {
      // Use WebRTC manager's device switching (more efficient)
      try {
        await this.webrtcAudioManager.setOutputDevice(deviceId);
      } catch (err) {
        console.warn("Failed to set output device via WebRTC, falling back:", err);
        await this.connectDevice();
      }
    } else {
      await this.connectDevice();
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

    if (this.useWebRTCMode && this.webrtcAudioManager) {
      // Use WebRTC manager's device switching (more efficient)
      try {
        await this.webrtcAudioManager.setInputDevice(deviceId);
      } catch (err) {
        console.warn("Failed to set input device via WebRTC, falling back:", err);
        await this.connectDevice();
      }
    } else {
      await this.connectDevice();
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
    const analyser = this.useWebRTCMode
      ? this.webrtcAudioManager?.inputAnalyserNode
      : this.input?.analyser;

    if (analyser) {
      this.inputFrequencyData = new Uint8Array(analyser.frequencyBinCount);
      // Use type assertion to satisfy TypeScript
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
    const analyser = this.useWebRTCMode
      ? this.webrtcAudioManager?.outputAnalyserNode
      : this.output?.analyser;

    if (analyser) {
      this.outputFrequencyData = new Uint8Array(analyser.frequencyBinCount);
      // Use type assertion to satisfy TypeScript
      (analyser.getByteFrequencyData as (array: Uint8Array) => void)(
        this.outputFrequencyData
      );
    }
    return this.outputFrequencyData;
  };

  /**
   * Check if WebRTC audio mode is active
   */
  public get isWebRTCMode(): boolean {
    return this.useWebRTCMode && this.webrtcAudioManager !== null;
  }
}
