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
import { AssistantMessagingResponse } from "@/rapida/clients/protos/talk-api_pb";
import { AgentEvent } from "@/rapida/events/agent-event";
import { AgentServerEvent } from "@/rapida/events/agent-server-event";
import {
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
  private fadeOutAudio = () => {
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
   * @param response
   * @returns
   */
  override onRecieve = async (response: AssistantMessagingResponse) => {
    switch (response.getDataCase()) {
      case AssistantMessagingResponse.DataCase.DATA_NOT_SET:
        break;
      case AssistantMessagingResponse.DataCase.EVENT:
        if (response.getEvent()) {
          switch (response.getEvent()?.getName()) {
            case AgentServerEvent.Transcript:
              const agentTranscript = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "text"
              );
              if (agentTranscript) {
                this.agentTranscript = agentTranscript;
                if (this.agentMessages.length > 0) {
                  const lastMessage =
                    this.agentMessages[this.agentMessages.length - 1];
                  if (lastMessage.role === MessageRole.User) {
                    this.agentMessages.pop();
                  }
                }
                this.agentMessages.push({
                  id: "unknown-message",
                  role: MessageRole.User,
                  messages: [agentTranscript],
                  time: toDate(response.getEvent()?.getTime()),
                  status: MessageStatus.Pending,
                });
              }
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.Transcript,
                response.getEvent()!
              );
              break;
            case AgentServerEvent.Interruption:
              this.agentTranscript = "";
              // await this.audioPlayer.interrupt();
              this.fadeOutAudio();

              //
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.Interruption,
                response.getEvent()!
              );
              break;

            case AgentServerEvent.CompleteConversation:
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.CompleteConversation,
                response.getEvent()!
              );
              await this.disconnect();
              break;
            case AgentServerEvent.Complete:
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.Complete,
                response.getEvent()!
              );
              break;
            case AgentServerEvent.CompleteGeneration:
            case AgentServerEvent.Generation:
              // generation started mark the previous message of user to complete
              if (this.agentMessages.length > 0) {
                const lastMessage =
                  this.agentMessages[this.agentMessages.length - 1];
                if (lastMessage.role === MessageRole.User) {
                  lastMessage.status = MessageStatus.Complete;
                }
              }
              //
              const msgid = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "messageid"
              );
              const agentMessage = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "text"
              );
              if (agentMessage) {
                this.agentMessages = this.agentMessages.filter(
                  (msg) => msg.id !== msgid || msg.role !== MessageRole.System
                );
                this.agentMessages.push({
                  id: msgid!,
                  role: MessageRole.System,
                  messages: [agentMessage],
                  time: toDate(response.getEvent()?.getTime()),
                  status:
                    response.getEvent()?.getName() ==
                    AgentServerEvent.CompleteGeneration
                      ? MessageStatus.Complete
                      : MessageStatus.Pending,
                });
              }
              this.emit(
                AgentEvent.ServerEvent,
                response.getEvent()?.getName() ==
                  AgentServerEvent.CompleteGeneration
                  ? AgentServerEvent.CompleteGeneration
                  : AgentServerEvent.Generation,
                response.getEvent()!
              );
              break;
            case AgentServerEvent.Start:
              //
              if (this.agentMessages.length > 0) {
                const lastMessage =
                  this.agentMessages[this.agentMessages.length - 1];
                if (lastMessage && lastMessage.role === MessageRole.User) {
                  this.agentMessages.pop();
                }
              }

              const userMessage = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "text"
              );
              const messageid = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "messageid"
              );
              if (userMessage) {
                this.agentMessages = this.agentMessages.filter(
                  (msg) => msg.id !== messageid || msg.role !== MessageRole.User
                );
                this.agentMessages.push({
                  id: messageid!,
                  role: MessageRole.User,
                  messages: [userMessage],
                  time: toDate(response.getEvent()?.getTime()),
                  status: MessageStatus.Complete,
                });
              }
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.Start,
                response.getEvent()!
              );
              break;
          }
          this.agentEvents.push(response.getEvent()!);
        }
        return;
      case AssistantMessagingResponse.DataCase.MESSAGE:
        const conversation = response.getMessage();
        if (
          !conversation?.getAssistantconversationid() ||
          !conversation?.getMessageid()
        )
          return;
        this.onChangeConversation(conversation?.getAssistantconversationid());
        const responseContent =
          conversation.getResponse()?.getContentsList() || [];
        for (const content of responseContent) {
          if (content.getContenttype() === "audio") {
            const audioData = content.getContent_asU8();
            this.addAudioChunk(new Uint8Array(audioData).buffer);
          }
        }
        break;
      default:
        break;
    }
  };
}
