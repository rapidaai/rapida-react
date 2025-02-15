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
import { EventEmitter } from "events";
import type TypedEmitter from "typed-emitter";
import {
  AgentConfig,
  Channel,
  ConnectionConfig,
  ConnectionState,
  DEFAULT_DEVICE_ID,
} from "@/rapida/types";
import { AssistantTalk } from "@/rapida/clients/talk";
import { BidirectionalStream } from "@/rapida/clients/protos/talk-api_pb_service";
import {
  AssistantMessagingRequest,
  AssistantMessagingResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import { AgentEvent, AgentEventCallback } from "@/rapida/types/agent-event";
import { Content, Event, Message } from "@/rapida/clients/protos/common_pb";
import { Message as LocalMessage } from "@/rapida/types";
import {
  toStreamAudioContent,
  toTextContent,
} from "@/rapida/utils/rapida_content";
import { WavRecorder, WavStreamPlayer } from "@/rapida/wavtools/index.js";
import { AgentServerEvent } from "@/rapida/types/agent-event";
import { getStringFromProtoStruct } from "@/rapida/utils/rapida_metadata";

export class VoiceAgent extends (EventEmitter as new () => TypedEmitter<AgentEventCallback>) {
  // connection state default connection is disconnected
  state: ConnectionState = ConnectionState.Disconnected;

  // input channel for in
  // as the api takes bytes of array can have text byte ot audio byte
  inputChannel: Channel = Channel.Audio;

  /**
   * input media device id
   */
  private inputDeviceId: string = DEFAULT_DEVICE_ID;
  get inputMediaDevice(): string {
    return this.inputDeviceId;
  }

  private audioInputPaused: boolean = true;

  // changing the channel if you want to control the output to text or audio
  private outputChannel: Channel = Channel.Audio;
  /**
   * output media device id
   */
  private outputDeviceId: string = DEFAULT_DEVICE_ID;
  get outputMediaDevice(): string {
    return this.outputDeviceId;
  }
  // later will impliment mute speaker
  private audioOutputPaused: boolean = true;

  // player one is audio player another is recorder
  private audioPlayer: WavStreamPlayer;
  get player() {
    return this.audioPlayer;
  }

  private audioRecorder: WavRecorder;
  get recorder() {
    return this.audioRecorder;
  }

  //
  /**
   *
   */
  private agentEvents: Event[];
  get events(): Event[] {
    return this.agentEvents;
  }

  /**
   *
   */
  private agentMessages: LocalMessage[];
  get messages(): LocalMessage[] {
    return this.agentMessages;
  }

  /**
   *
   */
  private agentTranscript: string = "";
  get transcript(): string {
    return this.agentTranscript;
  }

  private agentMessagingId: string | undefined;

  private connection:
    | BidirectionalStream<AssistantMessagingRequest, AssistantMessagingResponse>
    | undefined;

  private agentConfig: AgentConfig;
  private connectionConfig: ConnectionConfig;
  /**
   * Creates a new Room, the primary construct for a LiveKit session.
   * @param options
   */
  constructor(connection: ConnectionConfig, agentConfig: AgentConfig) {
    super();
    this.agentConfig = agentConfig;
    this.connectionConfig = connection;
    //

    //
    this.audioPlayer = new WavStreamPlayer({ sampleRate: 24000 });
    this.audioRecorder = new WavRecorder({ sampleRate: 24000 });
    this.agentMessagingId = undefined;
    this.agentEvents = [];
    this.agentMessages = [];
    this.agentTranscript = "";
  }

  async disconnect() {
    if (this.state !== ConnectionState.Connected) {
      return;
    }

    // toggel audio
    await this.toggelAudioOutput();
    await this.toggelAudioInput();

    // cleanup
    await this.audioRecorder.clear();
    await this.audioRecorder.end();
    await this.audioRecorder.quit();
    await this.audioPlayer.interrupt();

    //
    this.connection?.end();
  }

  async connect() {
    if (this.state === ConnectionState.Connected) {
      return;
    }
    try {
      const devices = await this.audioRecorder.listDevices();
      // console.dir(devices);
      // need to show all the device and pick one
      if (devices.length === 0) {
        return;
      }
      // having same input and output device for now but later it may change
      this.inputDeviceId = devices[0].deviceId;
      this.outputDeviceId = devices[0].deviceId;

      //
      // this.outputDeviceId
      await this.audioPlayer.connect();
      await this.audioRecorder.begin(this.inputDeviceId);
      //
      this.connection = AssistantTalk(
        this.connectionConfig.streamClient,
        this.connectionConfig.auth
      );
      this.connection?.on("data", await this.onDataChange);
      this.connection?.on("end", await this.onEnd);
      this.connection?.on("status", this.onStatusChange);

      //starting recording
      await this.startRecording(true);
      await this.setAndEmitConnectionState(ConnectionState.Connected);

      // enable both input and output
      await this.toggelAudioInput();
      await this.toggelAudioOutput();
    } catch (err) {
      console.error("error while connect " + err);
      // throw err;
    }
  }

  /**
   * start the reocrding for audio recorder
   * @param clear
   */
  private startRecording = async (clear: boolean) => {
    if (clear) {
      await this.audioRecorder.clear();
    }
    await this.audioRecorder.record(async (data) => {
      await this.onSendAudio(data.mono);
    });
  };

  /**
   * Message builder
   * @param role
   * @param contents
   * @returns
   */
  private createAssistantRequest = (
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

  onSendText = async (text: string) => {
    await this.connect();
    this.connection?.write(
      this.createAssistantRequest("user", [toTextContent(text)])
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
   *
   * @param mono
   */
  private onSendAudio = async (mono: Int16Array) => {
    this.connection?.write(
      this.createAssistantRequest("user", [
        this.createAudioMessage(this.arrayBufferToUint8(mono)),
      ])
    );
  };

  /**
   *
   * @param assistantConversationId
   * @returns
   */
  private onChangeConversation = (assistantConversationId: string) => {
    if (this.agentMessagingId) return;
    this.agentMessagingId = assistantConversationId;
  };

  /**
   *
   * @param response
   * @returns
   */
  private onDataChange = async (response: AssistantMessagingResponse) => {
    switch (response.getDataCase()) {
      case AssistantMessagingResponse.DataCase.DATA_NOT_SET:
        break;
      case AssistantMessagingResponse.DataCase.EVENT:
        if (response.getEvent()) {
          switch (response.getEvent()?.getName()) {
            case AgentServerEvent.RecieveTranscript:
              const agentTranscript = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "text"
              );
              if (agentTranscript) this.agentTranscript = agentTranscript;
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.RecieveTranscript,
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
            case AgentServerEvent.SendGeneration:
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.SendGeneration,
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
              const agentMessage = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "text"
              );

              if (agentMessage)
                this.agentMessages.push({
                  role: "system",
                  messages: [agentMessage],
                });
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.CompleteGeneration,
                response.getEvent()!
              );
              break;
            case AgentServerEvent.Recieve:
              const userMessage = getStringFromProtoStruct(
                response.getEvent()?.getMeta(),
                "text"
              );
              if (userMessage)
                this.agentMessages.push({
                  role: "user",
                  messages: [userMessage],
                });
              this.emit(
                AgentEvent.ServerEvent,
                AgentServerEvent.Recieve,
                response.getEvent()!
              );
              break;
          }
          this.agentEvents.push(response.getEvent()!);
          // ;
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
   * After changing connection emit the connection change event with curent state of connection
   * @param state
   * @returns
   */
  private setAndEmitConnectionState(state: ConnectionState): boolean {
    if (state === this.state) {
      return false;
    }
    this.state = state;
    this.emit(AgentEvent.ConnectionChanged, this.state);
    return true;
  }

  /**
   *
   * @param input
   * @returns
   */
  setInputChannel(input: Channel) {
    if (this.inputChannel == input) {
      return;
    }
    this.inputChannel = input;
    this.emit(AgentEvent.InputChannelSwitch, this.inputChannel);
  }

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

  // /** @internal */
  emit<E extends keyof AgentEventCallback>(
    event: E,
    ...args: Parameters<AgentEventCallback[E]>
  ): boolean {
    return super.emit(event, ...args);
  }

  get isConnected(): boolean {
    return this.state === ConnectionState.Connected;
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
      // if already paused then start recording
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
}
