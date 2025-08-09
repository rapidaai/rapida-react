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
import {
  AssistantConversationAssistantMessage,
  AssistantConversationInterruption,
  AssistantConversationUserMessage,
  AssistantMessagingResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import { AgentEvent } from "@/rapida/events/agent-event";
import { AgentServerEvent } from "@/rapida/events/agent-server-event";
import {
  toContentText,
  toStreamAudioContent,
  toTextContent,
} from "@/rapida/utils/rapida_content";
import { getStringFromProtoStruct } from "@/rapida/utils/rapida_metadata";
import { toDate } from "@/rapida/utils";
import { MessageRole, MessageStatus } from "@/rapida/agents/message";
import { Channel } from "@/rapida/channels";
import { AgentConfig } from "@/rapida/agents/agent-config";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { Agent } from "@/rapida/agents/";
import { Input } from "@/rapida/audio/input";
import { Output } from "@/rapida/audio/output";
import { isAndroidDevice, isIosDevice } from "@/rapida/audio/compatibility";
import { arrayBufferToUint8 } from "@/rapida/audio/audio";

export class VoiceAgent extends Agent {
  private input: Input | null = null;
  private output: Output | null = null;
  private preliminaryInputStream: MediaStream | null = null;
  private volume: number = 1;

  private inputFrequencyData?: Uint8Array;
  private outputFrequencyData?: Uint8Array;

  public getInputByteFrequencyData = (): Uint8Array | undefined => {
    if (this.input) {
      this.inputFrequencyData = new Uint8Array(
        this.input.analyser.frequencyBinCount
      );
      // Use type assertion to satisfy TypeScript
      (this.input.analyser.getByteFrequencyData as (array: Uint8Array) => void)(
        this.inputFrequencyData
      );
    }
    return this.inputFrequencyData;
  };

  public getOutputByteFrequencyData = (): Uint8Array | undefined => {
    if (this.output) {
      this.outputFrequencyData = new Uint8Array(
        this.output.analyser.frequencyBinCount
      );
      // Use type assertion to satisfy TypeScript
      (
        this.output.analyser.getByteFrequencyData as (array: Uint8Array) => void
      )(this.outputFrequencyData);
    }
    return this.outputFrequencyData;
  };

  /**
   * input media device id
   */
  inputChannel: Channel = Channel.Audio;
  private audioInputPaused: boolean = true;
  outputChannel: Channel = Channel.Audio;
  private audioOutputPaused: boolean = true;

  /**
   * Creates a new Room, the primary construct for a LiveKit session.
   * @param options
   */
  constructor(connection: ConnectionConfig, agentConfig: AgentConfig) {
    super(connection, agentConfig);
    this.outputChannel = this.agentConfig.outputOptions.defaultChannel;
    this.inputChannel = this.agentConfig.inputOptions.defaultChannel;
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
      await this.input?.close();
      await this.output?.close();
    } catch (error) {
      console.error("Error during cleanup:", error);
      // Optionally, you can add more specific error handling or logging here
    }
  };

  private connectDevice = async () => {
    try {
      this.preliminaryInputStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      [this.input, this.output] = await Promise.all([
        Input.create(this.agentConfig.inputOptions.recorderOption),
        Output.create(this.agentConfig.outputOptions.playerOption),
      ]);

      this.input.worklet.port.onmessage = this.onInputWorkletMessage;
      this.output.worklet.port.onmessage = this.onOutputWorkletMessage;

      this.preliminaryInputStream?.getTracks().forEach((track) => track.stop());
      this.preliminaryInputStream = null;
    } catch (error) {
      await this.disconnectAudio();
      console.log(error);
      // throw error;
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
    const maxVolume = event.data[1];
    if (this.inputChannel == Channel.Audio)
      this.talkingConnection?.write(
        this.createAssistantRequest("user", [
          toStreamAudioContent(arrayBufferToUint8(rawAudioPcmData.buffer)),
        ])
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
    this.output?.worklet.port.postMessage({ type: "interrupt" });
    this.output?.gain.gain.exponentialRampToValueAtTime(
      0.0001,
      this.output.context.currentTime + 2
    );
    setTimeout(() => {
      if (this.output) this.output.gain.gain.value = this.volume;
      this.output?.worklet.port.postMessage({ type: "clearInterrupted" });
    }, 2000);
  };

  /**
   *
   * @param duration
   * @returns
   */
  private fadeOutAudio = (duration: number = 2) => {
    if (!this.output) return;

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
    if (this.output) {
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
      if (this.assistant == null) {
        return;
      }
      await this.connectAgent();
      if (this.inputChannel == Channel.Audio) {
        // connecting audio for sending and recieving audio
        await this.connectAudio();
      }
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
    if (this.inputChannel == Channel.Text) {
      // only send text when you know the channel is text
      this.talkingConnection?.write(
        this.createAssistantRequest("user", [toTextContent(text)])
      );
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
    await this.connectDevice();
    this.emit(AgentEvent.OutputMediaDeviceChanged, deviceId);
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
    await this.connectDevice();
    this.emit(AgentEvent.InputMediaDeviceChanged, deviceId);
  };

  get inputMediaDevice(): string | undefined {
    return this.agentConfig.inputOptions.recorderOption.device;
  }

  /**
   *
   * @param input
   * @returns
   */
  public setInputChannel = async (input: Channel) => {
    if (this.inputChannel == input) {
      return;
    }
    if (input == Channel.Audio) {
      await this.connectAudio();
    } else {
      await this.disconnectAudio();
    }
    this.inputChannel = input;
    this.emit(AgentEvent.InputChannelSwitch, this.inputChannel);
  };

  /**
   *
   * @param interruptionData
   */
  private onHandleInterruption = (
    interruptionData: AssistantConversationInterruption | undefined
  ) => {
    if (interruptionData) {
      switch (interruptionData.getType()) {
        case AssistantConversationInterruption.InterruptionType
          .INTERRUPTION_TYPE_UNSPECIFIED:
          console.log("Unspecified interruption type");
          break;
        case AssistantConversationInterruption.InterruptionType
          .INTERRUPTION_TYPE_VAD:
          this.fadeOutAudio();
          break;
        case AssistantConversationInterruption.InterruptionType
          .INTERRUPTION_TYPE_WORD:
          this.interruptAudio();
          break;
        default:
          console.log("Unknown interruption type");
      }
      this.emit(
        AgentEvent.ServerEvent,
        AgentServerEvent.Interruption,
        interruptionData
      );
    }
  };

  private onHandleUser = (
    userContent: AssistantConversationUserMessage | undefined
  ) => {
    if (userContent) {
      const agentTranscript = toContentText(
        userContent.getMessage()?.getContentsList()
      );
      if (agentTranscript) {
        if (this.agentMessages.length > 0) {
          const lastMessage = this.agentMessages[this.agentMessages.length - 1];
          if (
            lastMessage.role === MessageRole.User &&
            lastMessage.status != MessageStatus.Complete
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
      this.emit(
        AgentEvent.ServerEvent,
        AgentServerEvent.Transcript,
        userContent
      );
    }
  };

  private onHandleAssistant = (
    systemContent: AssistantConversationAssistantMessage | undefined
  ) => {
    if (systemContent) {
      const responseContent =
        systemContent?.getMessage()?.getContentsList() || [];
      if (
        responseContent.filter((x) => x.getContenttype() == "text").length > 0
      ) {
        const systemTranscript = toContentText(
          responseContent.filter((x) => x.getContenttype() == "text")
        );
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

      if (
        responseContent.filter((x) => x.getContenttype() == "audio").length > 0
      ) {
        for (const content of responseContent) {
          if (content.getContenttype() === "audio") {
            const audioData = content.getContent_asU8();
            this.addAudioChunk(new Uint8Array(audioData).buffer);
          }
        }
      }
      this.emit(
        AgentEvent.ServerEvent,
        AgentServerEvent.Generation,
        systemContent
      );
    }
  };

  /**
   *
   * @param response
   * @returns
   */
  override onRecieve = async (response: AssistantMessagingResponse) => {
    console.dir(response);
    switch (response.getDataCase()) {
      case AssistantMessagingResponse.DataCase.DATA_NOT_SET:
        break;
      case AssistantMessagingResponse.DataCase.INTERRUPTION:
        this.onHandleInterruption(response.getInterruption());
        break;
      case AssistantMessagingResponse.DataCase.USER:
        this.onHandleUser(response.getUser());
        break;
      case AssistantMessagingResponse.DataCase.ASSISTANT:
        this.onHandleAssistant(response.getAssistant());
        break;
      case AssistantMessagingResponse.DataCase.CONFIGURATION:
        const conversation = response.getConfiguration();
        if (!conversation?.getAssistantconversationid()) return;
        this.onChangeConversation(conversation?.getAssistantconversationid());
        break;
      case AssistantMessagingResponse.DataCase.MESSAGE:
        console.dir(response.toObject());
        break;
      default:
        break;
    }
  };
}
