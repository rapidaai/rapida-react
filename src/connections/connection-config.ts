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
import {
  ASSISTANT_API,
  LOCAL_ASSISTANT_API,
  WEB_API,
  LOCAL_WEB_API,
  ENDPOINT_API,
  LOCAL_ENDPOINT_API,
} from "@/rapida/configs";
import { ClientAuthInfo, getClientInfo, UserAuthInfo } from "@/rapida/clients";
import { ConnectionState } from "./connection-state";
import { AssistantServiceClient } from "@/rapida/clients/protos/assistant-api_pb_service";
import { ProjectServiceClient } from "@/rapida/clients/protos/web-api_pb_service";
import { KnowledgeServiceClient } from "@/rapida/clients/protos/knowledge-api_pb_service";
import { MarketplaceServiceClient } from "@/rapida/clients/protos/marketplace-api_pb_service";
import { DocumentServiceClient } from "@/rapida/clients/protos/document-api_pb_service";
import { VaultServiceClient } from "@/rapida/clients/protos/vault-api_pb_service";
import { EndpointServiceClient } from "@/rapida/clients/protos/endpoint-api_pb_service";
import { AuditLoggingServiceClient } from "@/rapida/clients/protos/audit-logging-api_pb_service";
import { AssistantDeploymentServiceClient } from "@/rapida/clients/protos/assistant-deployment_pb_service";
import { OrganizationServiceClient } from "@/rapida/clients/protos/web-api_pb_service";
import { ConnectServiceClient } from "@/rapida/clients/protos/connect-api_pb_service";
import { ProviderServiceClient } from "@/rapida/clients/protos/provider-api_pb_service";
import { AuthenticationServiceClient } from "@/rapida/clients/protos/web-api_pb_service";
import { DeploymentClient } from "@/rapida/clients/protos/invoker-api_pb_service";

import {
  DEBUGGER_SOURCE,
  REACTSDK_SOURCE,
  WEB_PLUGIN_SOURCE,
} from "../utils/rapida_source";
import {
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_SOURCE_KEY,
} from "@/rapida/utils/rapida_header";

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

export class ConnectionConfig {
  /**
   * an utils for debugger credentials
   * @param param0
   * @returns
   */
  static WithDebugger({
    authorization,
    userId,
    projectId,
  }: {
    authorization: string;
    userId: string;
    projectId: string;
  }): UserAuthInfo {
    return {
      authorization,
      [HEADER_AUTH_ID]: userId,
      [HEADER_PROJECT_ID]: projectId,
      Client: {
        [HEADER_SOURCE_KEY]: DEBUGGER_SOURCE,
      },
    };
  }

  static WithPersonalToken({
    authorization,
    userId,
    projectId,
  }: {
    authorization: string;
    userId: string;
    projectId: string;
  }): UserAuthInfo {
    return {
      authorization,
      [HEADER_AUTH_ID]: userId,
      [HEADER_PROJECT_ID]: projectId,
      Client: {
        [HEADER_SOURCE_KEY]: DEBUGGER_SOURCE,
      },
    };
  }

  /**
   *
   * @param param0
   * @returns
   */
  static WithWebpluginClient({
    apiKey,
    userId,
  }: {
    apiKey: string;
    userId?: string;
  }): ClientAuthInfo {
    return {
      [HEADER_API_KEY]: apiKey,
      [HEADER_AUTH_ID]: userId,
      Client: {
        [HEADER_SOURCE_KEY]: WEB_PLUGIN_SOURCE,
      },
    };
  }
  /**
   *
   * @param param0
   * @returns
   */
  static WithSDK({
    apiKey,
    userId,
  }: {
    apiKey: string;
    userId?: string;
  }): ClientAuthInfo {
    return {
      [HEADER_API_KEY]: apiKey,
      [HEADER_AUTH_ID]: userId,
      Client: {
        [HEADER_SOURCE_KEY]: REACTSDK_SOURCE,
      },
    };
  }

  _endpoint: {
    assistant: string;
    web: string;
    endpoint: string;
  };

  _debug: boolean;

  getClientOptions() {
    return { debug: this._debug };
  }

  constructor(
    endpoint: {
      assistant?: string;
      web?: string;
      endpoint?: string;
    } = {
      assistant: ASSISTANT_API,
      web: WEB_API,
      endpoint: ENDPOINT_API,
    },
    debug: boolean = false
  ) {
    this._endpoint = {
      assistant: endpoint.assistant || ASSISTANT_API,
      web: endpoint.web || WEB_API,
      endpoint: endpoint.endpoint || ENDPOINT_API,
    };
    this._debug = debug;
  }

  get conversationClient(): TalkServiceClient {
    return new TalkServiceClient(this._endpoint.web, this.getClientOptions());
  }

  get assistantClient(): AssistantServiceClient {
    return new AssistantServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get projectClient(): ProjectServiceClient {
    return new ProjectServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get knowledgeClient(): KnowledgeServiceClient {
    return new KnowledgeServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get deploymentClient(): DeploymentClient {
    return new DeploymentClient(this._endpoint.web, this.getClientOptions());
  }

  get marketplaceClient(): MarketplaceServiceClient {
    return new MarketplaceServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get documentClient(): DocumentServiceClient {
    return new DocumentServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get vaultClient(): VaultServiceClient {
    return new VaultServiceClient(this._endpoint.web, this.getClientOptions());
  }

  get endpointClient(): EndpointServiceClient {
    return new EndpointServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get auditLoggingClient(): AuditLoggingServiceClient {
    return new AuditLoggingServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get assistantDeploymentClient(): AssistantDeploymentServiceClient {
    return new AssistantDeploymentServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get organizationClient(): OrganizationServiceClient {
    return new OrganizationServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get connectClient(): ConnectServiceClient {
    return new ConnectServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get providerClient(): ProviderServiceClient {
    return new ProviderServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get authenticationClient(): AuthenticationServiceClient {
    return new AuthenticationServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  withLocal(): this {
    return this.withCustomEndpoint({
      assistant: LOCAL_ASSISTANT_API,
      web: LOCAL_WEB_API,
      endpoint: LOCAL_ENDPOINT_API,
    });
  }

  withCustomEndpoint(
    endpoint: {
      assistant?: string;
      web?: string;
      endpoint?: string;
    } = {
      assistant: ASSISTANT_API,
      web: WEB_API,
      endpoint: ENDPOINT_API,
    },
    debug?: boolean
  ): this {
    this._endpoint = {
      assistant: endpoint.assistant || ASSISTANT_API,
      web: endpoint.web || WEB_API,
      endpoint: endpoint.endpoint || ENDPOINT_API,
    };
    if (debug !== undefined) this._debug = debug;
    return this;
  }
}

/**
 * Represents a connection to the TalkService, providing both a conversation client
 * and a streaming client for real-time communication.
 */
export class AssistantConnectionConfig extends ConnectionConfig {
  private _auth: ClientAuthInfo | UserAuthInfo;
  private _callbacks?: ConnectionCallback;

  constructor(
    auth: ClientAuthInfo | UserAuthInfo,
    endpoint: {
      assistant?: string;
      web?: string;
      endpoint?: string;
    } = {
      assistant: ASSISTANT_API,
      web: WEB_API,
      endpoint: ENDPOINT_API,
    },
    debug: boolean = false
  ) {
    super(endpoint, debug);
    this._auth = auth;
    this._auth.Client = getClientInfo(this._auth.Client);
  }

  get conversationClient(): TalkServiceClient {
    return new TalkServiceClient(
      this._endpoint.assistant,
      this.getClientOptions()
    );
  }

  get assistantClient(): AssistantServiceClient {
    return new AssistantServiceClient(
      this._endpoint.assistant,
      this.getClientOptions()
    );
  }

  get streamClient(): TalkServiceClient {
    return new TalkServiceClient(this._endpoint.assistant, {
      ...this.getClientOptions(),
      transport: grpc.WebsocketTransport(),
    });
  }

  withConnectionCallback(cl: ConnectionCallback): this {
    this._callbacks = cl;
    return this;
  }

  onConnectionChange(connection: ConnectionState) {
    if (connection === ConnectionState.Connected) {
      this._callbacks?.onConnect?.();
    } else {
      this._callbacks?.onDisconnect?.();
    }
  }

  get auth(): ClientAuthInfo | UserAuthInfo {
    return this._auth;
  }

  get callbacks(): ConnectionCallback | undefined {
    return this._callbacks;
  }

  set callbacks(value: ConnectionCallback | undefined) {
    this._callbacks = value;
  }
}
