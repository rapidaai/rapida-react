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
import { DEFAULT_DEVICE_ID } from "@/rapida/constants";
import { AssistantMessagingResponse } from "@/rapida/clients/protos/talk-api_pb";
import { AgentEvent } from "@/rapida/events/agent-event";
import { AgentServerEvent } from "@/rapida/events/agent-server-event";
import { Content } from "@/rapida/clients/protos/common_pb";
import {
  toStreamAudioContent,
  toTextContent,
} from "@/rapida/utils/rapida_content";
import { WavRecorder, WavStreamPlayer } from "@/rapida/wavtools/index.js";
import { getStringFromProtoStruct } from "@/rapida/utils/rapida_metadata";
import { toDate } from "@/rapida/utils";
import { MessageRole, MessageStatus } from "@/rapida/agents/message";
import { Channel } from "@/rapida/channels";
import { AgentConfig } from "@/rapida/agents/agent-config";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { Agent } from "@/rapida/agents/";

export class VoiceAgent extends Agent {
  // input channel for in
  // as the api takes bytes of array can have text byte ot audio byte
  /**
   * input media device id
   */
  inputChannel: Channel = Channel.Audio;
  private audioInputPaused: boolean = true;
  private inputDeviceId: string = DEFAULT_DEVICE_ID;
  get inputMediaDevice(): string {
    return this.inputDeviceId;
  }

  private audioRecorder: WavRecorder;
  get recorder() {
    return this.audioRecorder;
  }

  /**
   * output media device id
   */
  // changing the channel if you want to control the output to text or audio
  private outputChannel: Channel = Channel.Audio;

  // later will impliment mute speaker
  private audioOutputPaused: boolean = true;
  private outputDeviceId: string = DEFAULT_DEVICE_ID;
  get outputMediaDevice(): string {
    return this.outputDeviceId;
  }

  // player one is audio player another is recorder
  private audioPlayer: WavStreamPlayer;
  get player() {
    return this.audioPlayer;
  }

  /**
   * Creates a new Room, the primary construct for a LiveKit session.
   * @param options
   */
  constructor(connection: ConnectionConfig, agentConfig: AgentConfig) {
    super(connection, agentConfig);
    // still work in progress
    this.outputChannel = this.agentConfig.outputOptions.defaultChannel;
    this.inputChannel = this.agentConfig.inputOptions.defaultChannel;

    //
    this.audioPlayer = new WavStreamPlayer(
      this.agentConfig.outputOptions.playerOption
    );
    this.audioRecorder = new WavRecorder(
      this.agentConfig.inputOptions.recorderOption
    );
  }

  async disconnect() {
    await this.disconnectAgent();

    if (this.inputChannel == Channel.Audio) {
      await this.stopRecording();
    }
  }

  connect = async () => {
    try {
      await this.connectAgent();
      const devices = await this.audioRecorder.listDevices();
      if (devices.length === 0) {
        return;
      }
      this.inputDeviceId = devices[0].deviceId;
      this.outputDeviceId = devices[0].deviceId;

      if (this.inputChannel == Channel.Audio) {
        // start recording
        await this.startRecording(true);
      }
    } catch (err) {
      console.error("error while connect " + err);
    }
  };

  /**
   *
   *  Audio recording stop and start function controlling jus when audio will start and stop
   *  doesn't mean connect
   * start the reocrding for audio recorder
   * @param clear
   */
  private startRecording = async (clear: boolean) => {
    if ((await this.audioRecorder.getStatus()) != "recording") {
      await this.audioRecorder.begin(this.inputDeviceId);
    }
    if (clear) {
      await this.audioRecorder.clear();
    }
    //
    await this.audioPlayer.connect();
    //
    await this.audioRecorder.record(async (data) => {
      await this.onSendAudio(data.mono);
    });
  };

  private stopRecording = async () => {
    try {
      if ((await this.audioRecorder.getStatus()) != "recording") {
        return;
      }
      //
      await this.audioPlayer.interrupt();
      //
      await this.audioRecorder.clear();
      await this.audioRecorder.end();
    } catch (err) {
      console.error("error while stoping the recording " + err);
    }
  };

  /**
   *
   * @param text
   */
  onSendText = async (text: string) => {
    if (!this.isConnected) await this.connect();
    if (this.inputChannel == Channel.Text) {
      // only send text when you know the channel is text
      this.talkingConnection?.write(
        this.createAssistantRequest("user", [toTextContent(text)])
      );
    }
  };
  /**
   *
   * @param mono
   */
  private onSendAudio = async (mono: Int16Array) => {
    if (this.inputChannel == Channel.Audio)
      // only send the audio when you know it's audio
      this.talkingConnection?.write(
        this.createAssistantRequest("user", [
          this.createAudioMessage(this.arrayBufferToUint8(mono)),
        ])
      );
  };

  private createAudioMessage(mono: Uint8Array): Content {
    return toStreamAudioContent(mono);
  }

  base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  /**
   *
   * @param float32Array
   * @returns
   */
  floatTo16BitPCM(float32Array) {
    const buffer = new ArrayBuffer(float32Array.length * 2);
    const view = new DataView(buffer);
    let offset = 0;
    for (let i = 0; i < float32Array.length; i++, offset += 2) {
      let s = Math.max(-1, Math.min(1, float32Array[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return buffer;
  }

  /**
   * Converts an ArrayBuffer, Int16Array or Float32Array to a base64 string
   * @param {ArrayBuffer|Int16Array|Float32Array} arrayBuffer
   * @returns {string}
   */
  private arrayBufferToUint8(arrayBuffer) {
    if (arrayBuffer instanceof Float32Array) {
      arrayBuffer = this.floatTo16BitPCM(arrayBuffer);
    } else if (arrayBuffer instanceof Int16Array) {
      arrayBuffer = arrayBuffer.buffer;
    }
    return new Uint8Array(arrayBuffer);
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
    if (this.outputDeviceId === deviceId) {
      return;
    }
    this.outputDeviceId = deviceId;
    this.emit(AgentEvent.OutputMediaDeviceChanged, deviceId);
  };

  /**
   *  Changing media device id
   * @param deviceId
   * @returns
   */
  public setInputMediaDevice = async (deviceId: string) => {
    if (this.inputDeviceId === deviceId) {
      return;
    }
    this.inputDeviceId = deviceId;
    this.emit(AgentEvent.InputMediaDeviceChanged, deviceId);
  };

  /**
   *
   * @param input
   * @returns
   */
  setInputChannel = async (input: Channel) => {
    if (this.inputChannel == input) {
      return;
    }
    if (input == Channel.Audio) {
      await this.startRecording(true);
    } else {
      await this.stopRecording();
    }

    this.inputChannel = input;
    this.emit(AgentEvent.InputChannelSwitch, this.inputChannel);
  };

  /**
   *
   * @param output
   * @returns
   */
  setOutputChannel(output: Channel) {
    if (this.outputChannel == output) {
      return;
    }
    this.outputChannel = output;
    this.emit(AgentEvent.OutputChannelSwitch, this.outputChannel);
  }

  /**
   * Input for the voice agent
   * to check if audio in or text in
   */
  toggelAudioInput = async () => {
    if (this.audioInputPaused) {
      this.audioInputPaused = false;
      if (this.audioRecorder && this.audioRecorder.getStatus() === "paused") {
        await this.startRecording(false);
      }
      this.emit(AgentEvent.AudioInputMuteToggle, this.audioInputPaused);
      return;
    }
    this.audioInputPaused = true;
    await this.audioRecorder.pause();
    this.emit(AgentEvent.AudioInputMuteToggle, this.audioInputPaused);
  };

  get isAudioInput(): boolean {
    return this.inputChannel == Channel.Audio;
  }

  get isAudioInputEnable(): boolean {
    return this.isConnected && this.isAudioInput && !this.audioInputPaused;
  }

  /**
   * if text channel enable
   */
  get isTextInput(): boolean {
    return this.inputChannel == Channel.Text;
  }

  /**
   * output for voice agent
   */
  toggelAudioOutput = async () => {
    if (this.audioOutputPaused) {
      this.audioOutputPaused = false;
      this.emit(AgentEvent.AudioOutputMuteToggle, this.audioOutputPaused);
      return;
    }
    this.audioOutputPaused = true;
    await this.audioPlayer.interrupt();
    await this.emit(AgentEvent.AudioOutputMuteToggle, this.audioOutputPaused);
  };

  /**
   * if ouput audio is enabled
   */
  get isAudioOutput(): boolean {
    return this.outputChannel == Channel.Audio;
  }

  get isAudioOutputEnable(): boolean {
    return this.isConnected && this.isAudioOutput && !this.audioOutputPaused;
  }

  get isTextOutput(): boolean {
    return this.outputChannel == Channel.Text;
  }

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
              await this.audioPlayer.interrupt();
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.Interruption,
                response.getEvent()!
              );
              break;
            case AgentServerEvent.CompleteGeneration:
              if (this.agentMessages.length > 0) {
                const lastMessage =
                  this.agentMessages[this.agentMessages.length - 1];
                if (lastMessage.role === MessageRole.System) {
                  lastMessage.status = MessageStatus.Complete;
                }
              }
              //
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.CompleteGeneration,
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
                  status: MessageStatus.Pending,
                });
              }
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.Generation,
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
            this.audioPlayer.add16BitPCM(
              new Uint8Array(audioData).buffer,
              conversation?.getMessageid()
            );
          }
        }
        break;
      default:
        break;
    }
  };
}
