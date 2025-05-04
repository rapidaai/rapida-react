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
import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_pb_service";
import { grpc } from "@improbable-eng/grpc-web";
import { ASSISTANT_API, LOCAL_ASSISTANT_API } from "@/rapida/configs";
import { ClientAuthInfo, getClientInfo, UserAuthInfo } from "@/rapida/clients";
import { ConnectionState } from "./connection-state";
import { AssistantServiceClient } from "@/rapida/clients/protos/assistant-api_pb_service";
import { HEADER_SOURCE_KEY } from "../utils/rapida_header";
import {
  RAPIDA_APP_SOURCE,
  REACTSDK_SOURCE,
} from "@/rapida/utils/rapida_source";

/**
 *
 */
interface ConnectionCallback {
  /**
   *
   * @returns
   */
  onError?: () => void;

  /**
   *
   * @returns
   */
  onConnect?: () => void;

  /**
   *
   * @returns
   */
  onDisconnect?: () => void;
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
   * gRPC client for assistant apis
   */
  assistantClient: AssistantServiceClient;

  /**
   * Authentication information for the client, supporting both client and user authentication.
   */
  auth: ClientAuthInfo | UserAuthInfo;

  /**
   *
   */
  callbacks?: ConnectionCallback;

  /**
   * Creates a new Connection instance, initializing the conversation and streaming clients.
   *
   * @param auth - Authentication information for the connection.
   * @param endpoint - (Optional) Custom API endpoint for connecting to the TalkService.
   *                   If not provided, it defaults to `ASSISTANT_API`.
   */
  constructor(
    auth: ClientAuthInfo | UserAuthInfo,
    endpoint?: string,
    debug?: boolean
  ) {
    this.auth = auth;
    this.auth.Client = getClientInfo(this.auth.Client);
    // If a custom endpoint is provided, use it to initialize the clients.
    if (endpoint) {
      this.conversationClient = new TalkServiceClient(endpoint, {
        debug: debug ? debug : false,
      });
      this.streamClient = new TalkServiceClient(endpoint, {
        transport: grpc.WebsocketTransport(), // Enables WebSocket transport for real-time communication.
        debug: debug ? debug : false, // Enables debugging for troubleshooting.
      });
      this.assistantClient = new AssistantServiceClient(endpoint, {
        debug: debug ? debug : false,
      });
      return;
    }

    // Default to the ASSISTANT_API endpoint if no custom endpoint is provided.
    this.conversationClient = new TalkServiceClient(ASSISTANT_API, {
      debug: debug ? debug : false,
    });

    this.streamClient = new TalkServiceClient(ASSISTANT_API, {
      transport: grpc.WebsocketTransport(),
      debug: debug ? debug : false,
    });

    this.assistantClient = new AssistantServiceClient(ASSISTANT_API, {
      debug: debug ? debug : false,
    });
  }

  /**
   * Only for testing
   * @returns
   */
  withLocal(): this {
    return this.withCustomEndpoint(LOCAL_ASSISTANT_API);
  }

  /**
   * On premise deployment options
   * @param endpoint
   * @returns
   */
  withCustomEndpoint(endpoint: string, debug?: boolean): this {
    this.conversationClient = new TalkServiceClient(endpoint, {
      debug: debug ? debug : false,
    });
    this.streamClient = new TalkServiceClient(endpoint, {
      transport: grpc.WebsocketTransport(),
      debug: debug ? debug : false,
    });
    this.assistantClient = new AssistantServiceClient(endpoint, {
      debug: debug ? debug : false,
    });
    return this;
  }

  /**
   * Configures connection callbacks for the TalkService clients.
   *
   * @param onConnect - A callback function to be executed when a connection is established.
   * @param onDisconnect - A callback function to be executed when the connection is terminated.
   * @param onError - A callback function to be executed when the connection is terminated.
   *
   * @returns - The current instance of `ConnectionConfig` for method chaining.
   *
   * @example
   * ```typescript
   * const connection = new ConnectionConfig(auth);
   * connection.withConnectionCallback(
   *   () => { console.log("Connected to the TalkService"); },
   *   () => { console.log("Disconnected from the TalkService"); }
   * );
   * ```
   */
  withConnectionCallback(cl: ConnectionCallback): this {
    // Implement connection callback logic here if needed.
    // For example, you can subscribe to events or set up listeners.
    this.callbacks = cl;
    return this;
  }

  //
  onConnectionChange(connection: ConnectionState) {
    if (connection === ConnectionState.Connected) {
      if (this.callbacks && this.callbacks?.onConnect) {
        this.callbacks.onConnect();
      }
      return;
    }
    if (this.callbacks && this.callbacks?.onDisconnect) {
      this.callbacks.onDisconnect();
    }
    return;
  }
}
