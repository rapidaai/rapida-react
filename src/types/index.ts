import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_pb_service";
import { AssistantDefinition } from "@/rapida/clients/protos/talk-api_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { ASSISTANT_API } from "@/rapida/configs";
import { ClientAuthInfo, UserAuthInfo } from "@/rapida/clients";
export const DEFAULT_DEVICE_ID = "default";

export enum Channel {
  // text channel for input and output
  Text = "text",

  // audio channel for input and output
  Audio = "audio",
}

export enum ConnectionState {
  // when connection is disconnect or at initial state
  Disconnected = "disconnected",

  // connected voice agent state
  Connected = "connected",
}

export enum MediaDeviceFailure {
  // user rejected permissions
  PermissionDenied = "PermissionDenied",

  // device is not available
  NotFound = "NotFound",

  // device is in use. On Windows, only a single tab may get access to a device at a time.
  DeviceInUse = "DeviceInUse",

  //
  Other = "Other",
}

export interface WebAudioSettings {
  /**
   * Audio context for audio settings
   */
  audioContext: AudioContext;
}

export interface AudioOutputOptions {
  /**
   * deviceId to output audio
   *
   * Only supported on browsers where `setSinkId` is available
   */
  deviceId?: string;
}

export interface AudioCaptureOptions {
  /**
   * specifies whether automatic gain control is preferred and/or required
   */
  autoGainControl?: ConstrainBoolean;

  /**
   * the channel count or range of channel counts which are acceptable and/or required
   */
  channelCount?: ConstrainULong;

  /**
   * A ConstrainDOMString object specifying a device ID or an array of device
   * IDs which are acceptable and/or required.
   */
  deviceId?: ConstrainDOMString;

  /**
   * whether or not echo cancellation is preferred and/or required
   */
  echoCancellation?: ConstrainBoolean;

  /**
   * the latency or range of latencies which are acceptable and/or required.
   */
  latency?: ConstrainDouble;

  /**
   * whether noise suppression is preferred and/or required.
   */
  noiseSuppression?: ConstrainBoolean;

  /**
   * the sample rate or range of sample rates which are acceptable and/or required.
   */
  sampleRate?: ConstrainULong;

  /**
   * sample size or range of sample sizes which are acceptable and/or required.
   */
  sampleSize?: ConstrainULong;
}

export interface Message {
  /**
   * role of the message who had sent it
   */
  role: "system" | "user";

  /**
   * list of sentences in the message
   */
  messages: string[];
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
   * Configuration options or parameters for the agent.
   */
  arguments?: {};

  /**
   * Initializes a new instance of `AgentConfig`.
   *
   * @param id - Unique identifier for the agent.
   * @param version - (Optional) Version number of the agent.
   * @param argument - (Optional) Configuration arguments for the agent.
   */
  constructor(id: string, version?: string, argument?: {}) {
    this.id = id;
    this.version = version;
    this.arguments = argument;
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
}

/**
 * Represents a connection to the TalkService, providing both a conversation client
 * and a streaming client for real-time communication.
 */
export class ConnectionConfig {
  /**
   * gRPC client for handling real-time streaming interactions.
   */
  streamClient: TalkServiceClient;

  /**
   * gRPC client for handling standard conversation requests.
   */
  conversationClient: TalkServiceClient;

  /**
   * Authentication information for the client, supporting both client and user authentication.
   */
  auth: ClientAuthInfo | UserAuthInfo;

  /**
   * Creates a new Connection instance, initializing the conversation and streaming clients.
   *
   * @param auth - Authentication information for the connection.
   * @param endpoint - (Optional) Custom API endpoint for connecting to the TalkService.
   *                   If not provided, it defaults to `ASSISTANT_API`.
   */
  constructor(auth: ClientAuthInfo | UserAuthInfo, endpoint?: string) {
    this.auth = auth;

    // If a custom endpoint is provided, use it to initialize the clients.
    if (endpoint) {
      this.conversationClient = new TalkServiceClient(endpoint);
      this.streamClient = new TalkServiceClient(endpoint, {
        transport: grpc.WebsocketTransport(), // Enables WebSocket transport for real-time communication.
        debug: true, // Enables debugging for troubleshooting.
      });
      return;
    }

    // Default to the ASSISTANT_API endpoint if no custom endpoint is provided.
    this.conversationClient = new TalkServiceClient(ASSISTANT_API);
    this.streamClient = new TalkServiceClient(ASSISTANT_API, {
      transport: grpc.WebsocketTransport(),
      debug: true,
    });
  }
}
