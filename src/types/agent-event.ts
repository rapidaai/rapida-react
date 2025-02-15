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
import { Event } from "@/rapida/clients/protos/common_pb";
import { Channel, ConnectionState } from "@/rapida/types";

export enum AgentEvent {
  /**
   * When the connection to the server has been established
   */
  Connected = "onConnected",
  Disconnected = "onDisconnected",
  ConnectionChanged = "onConnectionChanged",

  /**
   * When input or output devices on the machine have changed.
   */
  InputMediaDeviceChanged = "onInputMediaDeviceChanged",
  OutputMediaDeviceChanged = "onOutputMediaDeviceChanged",

  // when audio muting / unmuting
  AudioInputMuteToggle = "onAudioInputMuteToggle",
  AudioOutputMuteToggle = "onAudioOutputMuteToggle",

  // when user is switching channel
  InputChannelSwitch = "onInputChannelSwitch",
  OutputChannelSwitch = "onOutputChannelSwitch",

  // when server sent something
  ServerEvent = "onServerEvent",

  // when server sent data to client
  DataReceived = "onDataReceived",
}

/**
 * Enum representing various server events related to agent interactions.
 * These events are used to track and manage different stages of a conversation
 * or interaction between an agent and a user.
 */
export enum AgentServerEvent {
  StartConversation = "OnStartConversation",
  Interruption = "OnInterruption",
  Listen = "OnListen",
  Complete = "OnComplete",
  RecieveTranscript = "OnRecieveTranscript",
  Recieve = "OnRecieve",
  SendGeneration = "OnSendGeneration",
  CompleteGeneration = "OnCompleteGeneration",
  CompleteConversation = "OnCompleteConversation",
}

/**
 * Defines the structure for callback functions used in voice agent events.
 *
 * This type encapsulates various event handlers that can be triggered during
 * the lifecycle of a voice agent connection. It includes callbacks for:
 *
 * - Connection establishment and termination
 * - Data reception
 * - Active device changes
 * - Mute status changes
 * - Connection state updates
 * - Server-side events
 *
 * These callbacks allow for fine-grained control and monitoring of the voice
 * agent's state and interactions, enabling developers to build responsive
 * and interactive voice-enabled applications.
 */
export type AgentEventCallback = {
  onConnected: () => void;
  onDisconnected: () => void;
  // on change of connection state
  onConnectionChanged: (state: ConnectionState) => void;

  // on data receive
  // when data is being recieve
  onDataReceived: () => void;

  onInputMediaDeviceChanged: (deviceId: string) => void;
  onOutputMediaDeviceChanged: (deviceId: string) => void;

  // toggling mute
  onAudioInputMuteToggle: (isMuted: boolean) => void;
  onAudioOutputMuteToggle: (isMuted: boolean) => void;

  onInputChannelSwitch: (cnl: Channel) => void;
  onOutputChannelSwitch: (cnl: Channel) => void;

  // when server sent an event to client
  onServerEvent: (eventType: AgentServerEvent, event: Event) => void;
};
