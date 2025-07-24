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
import { AssistantDefinition } from "@/rapida/clients/protos/talk-api_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import { StringArrayToAny, StringToAny } from "@/rapida/utils/rapida_value";
import { AssistantMessagingResponse } from "../clients/protos/talk-api_pb";
import { AgentServerEvent } from "@/rapida/events/agent-server-event";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import { AssistantConversationMessage } from "@/rapida/clients/protos/common_pb";
import { Channel } from "@/rapida/channels";
import { DEFAULT_DEVICE_ID } from "@/rapida/constants";

/**
 * Callbacks for agent
 */
interface AgentCallback {
  onStart?: (args: google_protobuf_struct_pb.Struct | undefined) => void;
  onComplete?: (args: google_protobuf_struct_pb.Struct | undefined) => void;

  //
  onTranscript?: (args: google_protobuf_struct_pb.Struct | undefined) => void;
  // on interruption
  onInterrupt?: (args: google_protobuf_struct_pb.Struct | undefined) => void;

  // generation
  onGeneration?: (args: google_protobuf_struct_pb.Struct | undefined) => void;
  onCompleteGeneration?: (
    args: google_protobuf_struct_pb.Struct | undefined
  ) => void;

  // conversation callback
  onStartConversation?: (
    args: google_protobuf_struct_pb.Struct | undefined
  ) => void;
  onCompleteConversation?: (
    args: google_protobuf_struct_pb.Struct | undefined
  ) => void;

  // on complete message
  onMessage?: (arg: AssistantConversationMessage | undefined) => void;
}

/**
 *
 */
export interface PlayerOptions {
  format: "pcm" | "ulaw";
  sampleRate: number;
  device?: string;
}

/**
 *
 */
export interface RecorderOptions {
  format: "pcm" | "ulaw";
  sampleRate: number;
  device?: string;
}

/**
 *
 */
export class InputOptions {
  /**
   * enable channels
   */

  channels: Channel[] = [Channel.Audio, Channel.Text];

  /**
   * sample rate for player
   */
  protected recorderOptions: RecorderOptions = {
    format: "pcm",
    sampleRate: 24000,
  };
  get recorderOption(): RecorderOptions {
    return this.recorderOptions;
  }

  /**
   * channel for providing output
   */
  protected channel: Channel = Channel.Audio;
  get defaultChannel(): Channel {
    return this.channel;
  }

  /**
   *
   * @param channels
   * @param channel
   * @param deviceId
   */
  constructor(channels: Channel[], channel?: Channel, deviceId?: string) {
    this.channels = channels;
    if (channel) this.channel = channel;
    if (deviceId) this.recorderOptions.device = deviceId;
  }

  /**
   *
   * @param device
   */
  changeDevice(device: string) {
    this.recorderOption.device = device;
  }
}

export class OutputOptions {
  /**
   * enable channels
   */

  channels: Channel[] = [Channel.Audio, Channel.Text];

  /**
   * sample rate for player
   */
  protected playerOptions: PlayerOptions = {
    format: "pcm",
    sampleRate: 24000,
  };
  get playerOption(): PlayerOptions {
    return this.playerOptions;
  }

  /**
   * channel for providing output
   */
  protected channel: Channel = Channel.Audio;
  get defaultChannel(): Channel {
    return this.channel;
  }

  /**
   *
   * @param channels
   * @param channel
   * @param deviceId
   */
  constructor(channels: Channel[], channel?: Channel, deviceId?: string) {
    this.channels = channels;
    if (channel) this.channel = channel;
    if (deviceId) this.playerOption.device = deviceId;
  }

  /**
   *
   * @param channel
   */
  changeChannel(channel: Channel) {
    this.channel = channel;
  }

  /**
   *
   * @param device
   */
  changeDevice(device: string) {
    this.playerOption.device = device;
  }
}
/**
 * Represents the configuration settings for an agent.
 * This includes the agent's unique identifier, version, and configurable arguments.
 */
export class AgentConfig {
  /**
   * Unique identifier for the agent.
   */
  id: string;

  /**
   * (Optional) Version number of the agent.
   */
  version?: string;

  /**
   * arguments for assistant
   */
  arguments?: Map<string, google_protobuf_any_pb.Any>;

  /**
   * options for assistants
   */
  options?: Map<string, google_protobuf_any_pb.Any>;

  /**
   * metadata for assistant request
   */
  metadata?: Map<string, google_protobuf_any_pb.Any>;

  /**
   * all the agent callback
   */
  callbacks?: AgentCallback;

  /**
   *
   */
  inputOptions: InputOptions;

  /**
   *
   */
  outputOptions: OutputOptions;

  /**
   * Initializes a new instance of `AgentConfig`.
   *
   * @param id - Unique identifier for the agent.
   * @param version - (Optional) Version number of the agent.
   * @param argument - (Optional) Configuration arguments for the agent.
   */
  constructor(
    id: string,
    inputOptions: InputOptions = new InputOptions([
      Channel.Audio,
      Channel.Text,
    ]),
    outputOptions: OutputOptions = new OutputOptions([
      Channel.Audio,
      Channel.Text,
    ]),
    version?: string,
    argument?: Map<string, google_protobuf_any_pb.Any>,
    options?: Map<string, google_protobuf_any_pb.Any>,
    metadata?: Map<string, google_protobuf_any_pb.Any>
  ) {
    this.id = id;
    this.version = version;
    this.arguments = argument;
    this.options = options;
    this.metadata = metadata;
    this.inputOptions = inputOptions;
    this.outputOptions = outputOptions;
  }

  /**
   * Retrieves the assistant definition for this agent.
   *
   * @returns {AssistantDefinition} A configured `AssistantDefinition` instance with the agent's details.
   */
  get definition(): AssistantDefinition {
    const def = new AssistantDefinition();
    def.setAssistantid(this.id); // Sets the agent's unique ID.

    if (this.version) {
      def.setVersion(this.version); // Sets the agent's version if provided.
    }

    return def;
  }

  /**
   * for adding custom dictionary
   * it allows user to add custom keywords to given agent it will perform correction
   * @param keywords
   */
  addKeywords(keywords: string[]): this {
    if (this.options == undefined) this.options = new Map();
    this.options["keywords"] = StringArrayToAny(keywords);
    return this;
  }

  /**
   * Want to add other options to override
   * @param k
   * @param otp
   * @returns
   */
  addCustomOption(k: string, otp: google_protobuf_any_pb.Any): this {
    if (this.options == undefined) this.options = new Map();
    this.options.set(k, otp);
    return this;
  }

  /**
   *
   * @param k
   * @param meta
   * @returns
   */
  addMetadata(k: string, meta: google_protobuf_any_pb.Any): this {
    if (this.metadata == undefined) this.metadata = new Map();
    this.metadata.set(k, meta);
    return this;
  }

  /**
   *
   * @param k
   * @param value
   * @returns
   */
  addArgument(k: string, value: string): this {
    if (this.arguments == undefined) this.arguments = new Map();
    this.arguments?.set(k, StringToAny(value));
    return this;
  }

  /**
   * Sets up callback functions for various events in the agent's conversation lifecycle.
   *
   * @param onStartConversation - Callback function triggered when a conversation starts.
   * @param onInterruption - Callback function triggered when the conversation is interrupted.
   * @param onListen - Callback function triggered when the agent starts listening.
   * @param onComplete - Callback function triggered when a specific action or process is completed.
   * @param onReceiveTranscript - Callback function triggered when a transcript is received.
   * @param onReceive - Callback function triggered when any message is received.
   * @param onSendGeneration - Callback function triggered before sending a generated response.
   * @param onCompleteGeneration - Callback function triggered after completing the generation of a response.
   * @param onCompleteConversation - Callback function triggered when the entire conversation is completed.
   * @returns The current instance of the AgentConfig, allowing for method chaining.
   */
  withAgentCallback(cl: AgentCallback): this {
    this.callbacks = cl;
    return this;
  }

  /**
   *
   * @param response
   * @returns
   */

  //   The TODO suggests two potential approaches:

  // Adding a check to filter out audio chunks
  // Implementing a debounce mechanism
  // These suggestions can guide the team in finding an appropriate solution to optimize the onMessage callback handling.
  onCallback(response: AssistantMessagingResponse): void {
    // check if callback is register then call it off
    switch (response.getDataCase()) {
      case AssistantMessagingResponse.DataCase.DATA_NOT_SET:
        break;
      case AssistantMessagingResponse.DataCase.EVENT:
        if (response.getEvent()) {
          switch (response.getEvent()?.getName()) {
            case AgentServerEvent.Transcript:
              if (this.callbacks && this.callbacks?.onTranscript) {
                this.callbacks.onTranscript(response.getEvent()?.getMeta());
              }
              break;
            case AgentServerEvent.Interruption:
              if (this.callbacks && this.callbacks?.onInterrupt) {
                this.callbacks.onInterrupt(response.getEvent()?.getMeta());
              }
              break;
            case AgentServerEvent.Generation:
              if (this.callbacks && this.callbacks?.onGeneration) {
                this.callbacks.onGeneration(response.getEvent()?.getMeta());
              }
              break;
            case AgentServerEvent.CompleteConversation:
              if (this.callbacks && this.callbacks?.onCompleteConversation) {
                this.callbacks.onCompleteConversation(
                  response.getEvent()?.getMeta()
                );
              }
              break;
            case AgentServerEvent.Complete:
              if (this.callbacks && this.callbacks?.onComplete) {
                this.callbacks.onComplete(response.getEvent()?.getMeta());
              }
              break;
            case AgentServerEvent.CompleteGeneration:
              if (this.callbacks && this.callbacks?.onCompleteGeneration) {
                this.callbacks.onCompleteGeneration(
                  response.getEvent()?.getMeta()
                );
              }
              break;
            case AgentServerEvent.Start:
              if (this.callbacks && this.callbacks?.onStart) {
                this.callbacks.onStart(response.getEvent()?.getMeta());
              }
              break;
            case AgentServerEvent.StartConversation:
              if (this.callbacks && this.callbacks?.onStartConversation) {
                this.callbacks.onStartConversation(
                  response.getEvent()?.getMeta()
                );
              }
              break;
          }
        }
        return;
      case AssistantMessagingResponse.DataCase.MESSAGE:
        if (this.callbacks && this.callbacks?.onMessage) {
          this.callbacks.onMessage(response.getMessage());
        }
        break;
      default:
        break;
    }
  }
}
