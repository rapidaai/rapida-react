import { V as VoiceAgent, F as Feedback, A as AssistantDebuggerDeployment, a as AssistantWebpluginDeployment, b as AssistantApiDeployment, c as Assistant, R as RapidaSource, M as Message, C as ConnectionConfig, d as ClientAuthInfo, U as UserAuthInfo, I as IndexKnowledgeDocumentResponse, e as InvokeRequest, f as InvokeResponse, g as AuthenticateResponse, h as VerifyTokenResponse, i as ForgotPasswordResponse, j as CreatePasswordResponse, k as ChangePasswordRequest, l as ChangePasswordResponse, G as GetUserResponse, m as UpdateUserResponse, n as GetAllUserResponse, o as GeneralConnectResponse, p as Criteria, q as GetConnectorFilesResponse, r as CreateOrganizationResponse, s as UpdateOrganizationResponse, t as GetOrganizationResponse, u as GetAllAssistantResponse, v as UpdateAssistantVersionRequest, w as GetAssistantResponse, x as GetAssistantRequest, y as CreateAssistantRequest, z as GetAllAssistantMessageResponse, B as GetAllMessageResponse, D as GetAllConversationMessageResponse, E as CreateAssistantDeploymentRequest, H as GetAssistantDebuggerDeploymentResponse, J as GetAssistantDeploymentRequest, K as GetAssistantApiDeploymentResponse, L as GetAssistantWebpluginDeploymentResponse, N as GetAssistantPhoneDeploymentResponse, O as GetAssistantWhatsappDeploymentResponse, P as GetAllAssistantWebhookResponse, Q as GetAssistantWebhookResponse, S as GetAllAssistantTelemetryProviderResponse, T as Metadata, W as GetAssistantTelemetryProviderResponse, X as GetAssistantConversationRequest, Y as GetAssistantConversationResponse, Z as GetAllAssistantAnalysisResponse, _ as GetAssistantAnalysisResponse, $ as GetAllAssistantWebhookLogResponse, a0 as GetAssistantWebhookLogResponse, a1 as GetAllAssistantToolResponse, a2 as GetAssistantToolResponse, a3 as GetAllAssistantKnowledgeResponse, a4 as GetAssistantKnowledgeResponse, a5 as GetAssistantToolLogRequest, a6 as GetAssistantToolLogResponse, a7 as GetAllAssistantToolLogRequest, a8 as GetAllAssistantToolLogResponse, a9 as CreateAssistantProviderRequest, aa as GetAssistantProviderResponse, ab as GetAllAssistantProviderResponse, ac as GetAllAssistantConversationResponse, ad as GetAllAuditLogResponse, ae as GetAuditLogResponse, af as GetAllEndpointResponse, ag as UpdateEndpointVersionResponse, ah as GetAllEndpointProviderModelResponse, ai as GetEndpointResponse, aj as EndpointProviderModelAttribute, ak as CreateEndpointProviderModelResponse, al as EndpointAttribute, am as CreateEndpointResponse, an as EndpointRetryConfiguration, ao as EndpointCacheConfiguration, ap as CreateEndpointRetryConfigurationResponse, aq as CreateEndpointCacheConfigurationResponse, ar as GetAllEndpointLogResponse, as as GetEndpointLogResponse, at as CreateProviderCredentialRequest, au as GetCredentialResponse, av as GetAllOrganizationCredentialResponse, aw as AssistantTalkRequest, ax as AssistantTalkResponse, ay as CreateMessageMetricRequest, az as CreateMessageMetricResponse, aA as CreateConversationMetricRequest, aB as CreateConversationMetricResponse, aC as WebTalkRequest, aD as WebTalkResponse, aE as CreateKnowledgeRequest, aF as CreateKnowledgeResponse, aG as GetKnowledgeResponse, aH as GetAllKnowledgeResponse, aI as DocumentContent, aJ as CreateKnowledgeDocumentResponse, aK as GetAllKnowledgeDocumentResponse, aL as GetAllKnowledgeDocumentSegmentResponse, aM as BaseResponse, aN as GetKnowledgeLogRequest, aO as GetKnowledgeLogResponse, aP as GetAllKnowledgeLogRequest, aQ as GetAllKnowledgeLogResponse, aR as AddUsersToProjectResponse, aS as CreateProjectResponse, aT as UpdateProjectResponse, aU as GetAllProjectResponse, aV as GetProjectResponse, aW as ArchiveProjectResponse, aX as GetAllProjectCredentialResponse, aY as CreateProjectCredentialResponse, aZ as Message$1, a_ as Error$1, a$ as Metric, b0 as CreatePhoneCallRequest, b1 as CreatePhoneCallResponse, b2 as CreateBulkPhoneCallRequest, b3 as CreateBulkPhoneCallResponse, b4 as GetAllAssistantTelemetryRequest, b5 as GetAllAssistantTelemetryResponse, b6 as GetNotificationSettingRequest, b7 as NotificationSettingResponse, b8 as UpdateNotificationSettingRequest } from './device-selector-B52UkRm8.mjs';
export { cR as AddUsersToProjectRequest, bi as AgentCallback, bg as AgentConfig, dB as AggregatedEndpointAnalytics, cS as ArchiveProjectRequest, c$ as Argument, cf as AssistantAnalysis, da as AssistantConversation, d9 as AssistantConversationContext, d8 as AssistantConversationMessage, dd as AssistantConversationRecording, df as AssistantConversationTelephonyEvent, de as AssistantDefinition, bT as AssistantDeploymentService, bU as AssistantDeploymentServiceClient, b$ as AssistantKnowledge, dY as AssistantPhoneDeployment, ex as AssistantProviderAgentkit, ew as AssistantProviderModel, ey as AssistantProviderWebsocket, dg as AssistantService, dh as AssistantServiceClient, ei as AssistantTelemetryProvider, dQ as AssistantTool, dR as AssistantToolLog, dk as AssistantWebhook, dl as AssistantWebhookLog, dZ as AssistantWhatsappDeployment, c5 as AuditLog, d_ as AuditLoggingService, d$ as AuditLoggingServiceClient, cq as AuthenticateRequest, cw as Authentication, eo as AuthenticationService, er as AuthenticationServiceClient, cB as AuthorizeRequest, bd as Channel, bV as ConnectService, bW as ConnectServiceClient, bc as ConnectionState, eC as ConversationAssistantMessage, eA as ConversationConfiguration, eG as ConversationDirective, eJ as ConversationError, eI as ConversationEvent, eB as ConversationInterruption, eH as ConversationMetric, eE as ConversationToolCall, eF as ConversationToolResult, eD as ConversationUserMessage, cg as CreateAssistantAnalysisRequest, c0 as CreateAssistantKnowledgeRequest, ec as CreateAssistantTagRequest, el as CreateAssistantTelemetryProviderRequest, dS as CreateAssistantToolRequest, dm as CreateAssistantWebhookRequest, dJ as CreateEndpointCacheConfigurationRequest, dD as CreateEndpointProviderModelRequest, dz as CreateEndpointRequest, dI as CreateEndpointRetryConfigurationRequest, dK as CreateEndpointTagRequest, e5 as CreateKnowledgeDocumentRequest, e2 as CreateKnowledgeTagRequest, c8 as CreateMetadataRequest, c9 as CreateMetadataResponse, cI as CreateOrganizationRequest, cz as CreatePasswordRequest, cU as CreateProjectCredentialRequest, cN as CreateProjectRequest, eL as DEBUGGER_SOURCE, cj as DeleteAssistantAnalysisRequest, c3 as DeleteAssistantKnowledgeRequest, ed as DeleteAssistantRequest, en as DeleteAssistantTelemetryProviderRequest, dV as DeleteAssistantToolRequest, dq as DeleteAssistantWebhookRequest, ea as DeleteKnowledgeDocumentSegmentRequest, bZ as Deployment, dX as DeploymentAudioProvider, b_ as DeploymentClient, eu as DeviceSelectorComponent, dw as DocumentService, dx as DocumentServiceClient, dC as Endpoint, cl as EndpointDefinition, dN as EndpointLog, dA as EndpointProviderModel, bR as EndpointService, bS as EndpointServiceClient, cv as FeaturePermission, cW as FieldSelector, cy as ForgotPasswordRequest, dL as ForkEndpointRequest, d4 as FunctionCall, du as GeneralConnectRequest, ck as GetAllAssistantAnalysisRequest, db as GetAllAssistantConversationRequest, c4 as GetAllAssistantKnowledgeRequest, ef as GetAllAssistantMessageRequest, ez as GetAllAssistantProviderRequest, ee as GetAllAssistantRequest, ek as GetAllAssistantTelemetryProviderRequest, dW as GetAllAssistantToolRequest, ds as GetAllAssistantWebhookLogRequest, dr as GetAllAssistantWebhookRequest, c6 as GetAllAuditLogRequest, dc as GetAllConversationMessageRequest, dO as GetAllEndpointLogRequest, dG as GetAllEndpointProviderModelRequest, dF as GetAllEndpointRequest, e4 as GetAllKnowledgeDocumentRequest, e7 as GetAllKnowledgeDocumentSegmentRequest, e0 as GetAllKnowledgeRequest, eg as GetAllMessageRequest, cd as GetAllOrganizationCredentialRequest, cV as GetAllProjectCredentialRequest, cQ as GetAllProjectRequest, cH as GetAllUserRequest, ci as GetAssistantAnalysisRequest, c2 as GetAssistantKnowledgeRequest, ej as GetAssistantTelemetryProviderRequest, dU as GetAssistantToolRequest, dt as GetAssistantWebhookLogRequest, dp as GetAssistantWebhookRequest, c7 as GetAuditLogRequest, dv as GetConnectorFilesRequest, ce as GetCredentialRequest, dP as GetEndpointLogRequest, dE as GetEndpointRequest, e1 as GetKnowledgeRequest, cK as GetOrganizationRequest, cP as GetProjectRequest, cE as GetUserRequest, bo as HEADER_API_KEY, bp as HEADER_AUTH_ID, bz as HEADER_COLOR_DEPTH, bD as HEADER_CONNECTION_EFFECTIVE_TYPE, bC as HEADER_CONNECTION_TYPE, bE as HEADER_COOKIES_ENABLED, bA as HEADER_DEVICE_MEMORY, bF as HEADER_DO_NOT_TRACK, bl as HEADER_ENVIRONMENT_KEY, bB as HEADER_HARDWARE_CONCURRENCY, bs as HEADER_LANGUAGE, bI as HEADER_LATITUDE, bJ as HEADER_LONGITUDE, bt as HEADER_PLATFORM, bq as HEADER_PROJECT_ID, bG as HEADER_REFERRER, bn as HEADER_REGION_KEY, bH as HEADER_REMOTE_URL, bv as HEADER_SCREEN_HEIGHT, bu as HEADER_SCREEN_WIDTH, bm as HEADER_SOURCE_KEY, by as HEADER_TIMEZONE, br as HEADER_USER_AGENT, bx as HEADER_WINDOW_HEIGHT, bw as HEADER_WINDOW_WIDTH, dy as IndexKnowledgeDocumentRequest, be as InputOptions, d5 as Knowledge, e3 as KnowledgeDocument, e6 as KnowledgeDocumentSegment, eb as KnowledgeLog, ca as KnowledgeService, cb as KnowledgeServiceClient, bj as MessageRole, bk as MessageStatus, ev as NotificationSetting, cZ as Ordering, d2 as Organization, ct as OrganizationRole, ep as OrganizationService, es as OrganizationServiceClient, bf as OutputOptions, eN as PHONE_CALL_SOURCE, cX as Paginate, cY as Paginated, co as ProbeRequest, cp as ProbeResponse, cM as Project, cT as ProjectCredential, cu as ProjectRole, eq as ProjectService, et as ProjectServiceClient, cr as RegisterUserRequest, eM as SDK_SOURCE, cC as ScopeAuthorizeRequest, cx as ScopedAuthentication, cD as ScopedAuthenticationResponse, cG as SocialAuthenticationRequest, d1 as Tag, di as TalkService, dj as TalkServiceClient, bO as TelemetryEvent, bP as TelemetryMetric, bQ as TelemetryRecord, d7 as TextChatCompletePrompt, d6 as TextPrompt, cs as Token, d3 as ToolCall, ch as UpdateAssistantAnalysisRequest, eh as UpdateAssistantDetailRequest, c1 as UpdateAssistantKnowledgeRequest, em as UpdateAssistantTelemetryProviderRequest, dT as UpdateAssistantToolRequest, dn as UpdateAssistantWebhookRequest, cL as UpdateBillingInformationRequest, dM as UpdateEndpointDetailRequest, dH as UpdateEndpointVersionRequest, e8 as UpdateKnowledgeDetailRequest, e9 as UpdateKnowledgeDocumentSegmentRequest, cJ as UpdateOrganizationRequest, cO as UpdateProjectRequest, cm as UpdateRequest, cn as UpdateResponse, cF as UpdateUserRequest, c_ as User, bh as UserIdentifier, d0 as Variable, cc as VaultCredential, bX as VaultService, bY as VaultServiceClient, cA as VerifyTokenRequest, eP as WEBRTC_SOURCE, eK as WEB_PLUGIN_SOURCE, eO as WHATSAPP_SOURCE, b9 as WebRTCGrpcTransport, bb as WebRTCGrpcTransportConfig, bL as WithAuthContext, bN as WithClientContext, bK as WithPlatform, eR as fromStr, bM as getClientInfo, eQ as getRapidaSourceValue, ba as supportsWebRTCGrpcTransport } from './device-selector-B52UkRm8.mjs';
import * as jspb from 'google-protobuf';
import { Map } from 'google-protobuf';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import { Any } from 'google-protobuf/google/protobuf/any_pb';
import { grpc } from '@improbable-eng/grpc-web';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
export { MultibandAudioVisualizerComponent } from './components/visualization/multiband-audio-visualizer.mjs';
import { Observable } from 'rxjs';
import 'google-protobuf/google/protobuf/timestamp_pb';
import 'typed-emitter';
import 'react';
import 'react/jsx-runtime';

declare function isIosDevice(): boolean;
declare function isAndroidDevice(): boolean;
declare function isWindowsDevice(): boolean;
/**
 * Check if the current browser/OS combination has known audio issues.
 * This can be used to provide appropriate warnings or fallbacks.
 */
declare function hasKnownAudioIssues(): {
    hasIssues: boolean;
    issues: string[];
};
/**
 * Get recommended audio settings for the current platform.
 */
declare function getRecommendedAudioSettings(): {
    sampleRate: number;
    channelCount: number;
    echoCancellation: boolean;
    noiseSuppression: boolean;
    autoGainControl: boolean;
};

declare function isWindows(): boolean;
declare function isLinux(): boolean;
/**
 * Check if setSinkId is supported by the browser.
 * This is required for audio output device selection.
 * Firefox on Windows and some older browsers don't support it.
 */
declare function isSinkIdSupported(): boolean;
/**
 * Check if the browser has full WebRTC audio support.
 * Some browsers have partial support that can cause issues.
 */
declare function hasFullWebRTCAudioSupport(): boolean;

/**
 * Custom hook for managing agent connection in a voice system.
 * @returns An object containing the connection handler and connection status.
 */
declare function useMessageFeedback(agent: VoiceAgent): {
    handleMessageFeedback: (messageId: string, name: string, description: string, value: string) => Promise<void>;
    handleHelpfulnessFeedback: (messageId: string, value: Feedback) => Promise<void>;
};

/**
 * Custom hook for managing agent connection in a voice system.
 * @returns An object containing the connection handler and connection status.
 */
declare function useConversationFeedback(agent: VoiceAgent): {
    handleHelpfulnessFeedback: (value: Feedback) => Promise<void>;
    handleConversationFeedback: (name: string, description: string, value: string) => Promise<void>;
};

/**
 * Custom hook for managing agent connection in a voice system.
 * @returns An object containing the connection handler and connection status.
 */
declare function useConnectAgent(agent: VoiceAgent): {
    handleConnectAgent: () => Promise<void>;
    handleDisconnectAgent: () => Promise<void>;
    isConnected: boolean;
    isConnecting: boolean;
};

/**
 * Custom hook for toggling input mode (voice/text) for the agent.
 * @returns An object containing toggle handlers and the current input channel.
 */
declare function useInputModeToggleAgent(agent: VoiceAgent): {
    handleTextToggle: () => Promise<void>;
    handleVoiceToggle: () => Promise<void>;
    channel: any;
};

/** @public */
interface UseMediaDeviceSelectProps {
    /**
     * this will call getUserMedia if the permissions are not yet given to enumerate the devices with device labels.
     * in some browsers multiple calls to getUserMedia result in multiple permission prompts.
     * It's generally advised only flip this to true, once a (preview) track has been acquired successfully with the
     * appropriate permissions.
     *
     * @see {@link MediaDeviceMenu}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices | MDN enumerateDevices}
     */
    requestPermissions?: boolean;
    /**
     * this callback gets called if an error is thrown when failing to select a device and also if a user
     * denied permissions, eventhough the `requestPermissions` option is set to `true`.
     * Most commonly this will emit a MediaDeviceError
     */
    onError?: (e: Error) => void;
    /**
     * voice agent
     */
    voiceAgent: VoiceAgent;
}
/**
 * The `useMediaDeviceSelect` hook is used to implement the `MediaDeviceSelect` component and
 * returns o.a. the list of devices of a given kind (audioinput or videoinput), the currently active device
 * and a function to set the the active device.
 *
 * @example
 * ```tsx
 * const { devices, activeDeviceId, setActiveMediaDevice } = useMediaDeviceSelect({kind: 'audioinput'});
 * ```
 * @public
 */
declare function useSelectInputDeviceAgent({ voiceAgent, requestPermissions, onError, }: UseMediaDeviceSelectProps): {
    devices: MediaDeviceInfo[];
    className: string;
    activeDeviceId: string;
    setActiveMediaDevice: (id: string) => Promise<void>;
};

/**
 * Custom hook for managing microphone mute state in a voice agent.
 * @param agent The VoiceAgent instance
 * @returns An object containing mute handlers and the current mute state.
 */
declare function useMuteAgent(agent: VoiceAgent): {
    handleMute: () => void;
    handleUnmute: () => void;
    handleToggleMute: () => boolean;
    isMuted: boolean;
};

declare enum MediaDeviceFailure {
    PermissionDenied = "PermissionDenied",
    NotFound = "NotFound",
    DeviceInUse = "DeviceInUse",
    Other = "Other"
}

/**
 * The function `useMultibandSpeakerTrackVolume` calculates and updates frequency bands based on audio
 * player data at regular intervals.
 * @param {number} [bands=5] - The `bands` parameter in the `useMultibandSpeakerTrackVolume` function
 * determines the number of frequency bands that the audio signal will be divided into for processing.
 * This parameter allows you to specify how many bands you want to split the frequency spectrum into.
 * @param {number} [loPass=0.1] - The `loPass` parameter in the `useMultibandSpeakerTrackVolume`
 * function represents the lower passband frequency limit. It is used to filter out frequencies below a
 * certain threshold in the audio signal. In the provided code snippet, the `loPass` parameter is set
 * to a default value of
 * @param {number} [hiPass=1.0] - The `hiPass` parameter in the `useMultibandSpeakerTrackVolume`
 * function represents the upper limit frequency value for filtering the audio frequencies. It is used
 * to define the range of frequencies that will be included in the analysis and processing of the audio
 * data. In the provided code snippet, the `
 * @returns The `useMultibandSpeakerTrackVolume` custom hook returns an array of `Float32Array`
 * frequency bands that have been calculated based on the audio frequencies received from the audio
 * player. The number of bands, low-pass and high-pass values are used to divide and normalize the
 * frequencies into the specified bands. The hook continuously updates the frequency bands at an
 * interval of 100ms.
 */
declare const useMultibandMicrophoneTrackVolume: (agentContext: VoiceAgent, bands?: number, loPass?: number, hiPass?: number) => number[][];
declare const useMultiband3DSpeakerTrackVolume: (agentContext: VoiceAgent, bands?: number, loPass?: number, hiPass?: number) => {
    xNorm: number;
    yNorm: number;
    zNorm: number;
    elapsedTimeSec: number;
    frequencyBands: number[][];
};

declare function StringArrayToAny(values: string[]): Any;
declare function StringToAny(value: string): Any;
declare function AnyToString(anyValue: Any): string;
declare function FloatToAny(value: number): Any;
declare function AnyToFloat(anyValue: Any): number;
declare function Int32ToAny(value: number): Any;
declare function AnyToInt32(anyValue: Any): number;
declare function BoolToAny(value: boolean): Any;
declare function AnyToBool(anyValue: Any): boolean;
declare function BytesToAny(value: Uint8Array): Any;
declare function JSONToAny(value: object): Any;
declare function AnyToJSON(anyValue: Any): object;
declare function MapToObject(protoMap: Map<string, google_protobuf_any_pb.Any>): Record<string, any>;

type AgentDeployment = {
    type: "debugger";
    deployment: AssistantDebuggerDeployment;
    inAudio: boolean;
    outAudio: boolean;
} | {
    type: "web-plugin";
    deployment: AssistantWebpluginDeployment;
    inAudio: boolean;
    outAudio: boolean;
} | {
    type: "api";
    deployment: AssistantApiDeployment;
    inAudio: boolean;
    outAudio: boolean;
};
declare const GetDeployment: (assistant: Assistant, source: RapidaSource) => AgentDeployment | undefined;

/**
 * Custom hook for managing agent messages in a voice system.
 * @returns An object containing the agent messages.
 */
declare function useAgentMessages(agent: VoiceAgent): {
    messages: Message[];
};

type ServiceError = {
    message: string;
    code: number;
    metadata: grpc.Metadata;
};
type Status = {
    details: string;
    code: number;
    metadata: grpc.Metadata;
};
interface UnaryResponse {
    cancel(): void;
}
interface ResponseStream<T> {
    cancel(): void;
    on(type: "data", handler: (message: T) => void): ResponseStream<T>;
    on(type: "end", handler: (status?: Status) => void): ResponseStream<T>;
    on(type: "status", handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
    write(message: T): RequestStream<T>;
    end(): void;
    cancel(): void;
    on(type: "end", handler: (status?: Status) => void): RequestStream<T>;
    on(type: "status", handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
    write(message: ReqT): BidirectionalStream<ReqT, ResT>;
    end(): void;
    cancel(): void;
    on(type: "data", handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
    on(type: "end", handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
    on(type: "status", handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

/**
 * Index a document for knowledge
 *
 * @param knowledgeId - The ID of the knowledge id
 * @param knowledgeDocumentIds - A list of documents
 * @param indexType - an index type
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 */
declare function IndexKnowledgeDocument(client: ConnectionConfig, knowledgeId: string, knowledgeDocumentIds: string[], indexType: string, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: IndexKnowledgeDocumentResponse | null) => void): undefined;

/**
 * Invoke an endpoint with specified parameters.
 *
 * @param endpointId - The ID of the endpoint to invoke.
 * @param endpointProviderModelId - The provider model ID of the endpoint.
 * @param parameters - A map of parameters to pass to the endpoint.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @param metadata - Optional metadata to include in the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function Invoke(clientCfg: ConnectionConfig, request: InvokeRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<InvokeResponse>;

/**
 * Authenticate a user with email and password.
 *
 * @param email - The email address of the user.
 * @param password - The password of the user.
 * @param cb - Callback function to handle the response.
 */
declare function AuthenticateUser(config: ConnectionConfig, email: string, password: string, cb: (err: ServiceError | null, auth: AuthenticateResponse | null) => void): undefined;
/**
 * Authorize or reauthorize the user with headers.
 *
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 */
declare function AuthorizeUser(config: ConnectionConfig, cb: (err: ServiceError | null, org: AuthenticateResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Register a new user with email, password, and name.
 *
 * @param email - The email address of the user.
 * @param password - The password for the new user.
 * @param name - The name of the new user.
 * @param cb - Callback function to handle the response.
 */
declare function RegisterUser(config: ConnectionConfig, email: string, password: string, name: string, cb: (err: ServiceError | null, user: AuthenticateResponse | null) => void): undefined;
/**
 * Verify a token for authentication or authorization.
 *
 * @param token - The token to verify.
 * @param tokenType - The type of the token.
 * @param cb - Callback function to handle the response.
 */
declare function VerifyToken(config: ConnectionConfig, token: string, tokenType: string, cb: (err: ServiceError | null, tokenResponse: VerifyTokenResponse | null) => void): undefined;
/**
 * Request a password reset for a user.
 *
 * @param email - The email address of the user.
 * @param cb - Callback function to handle the response.
 */
declare function ForgotPassword(config: ConnectionConfig, email: string, cb: (err: ServiceError | null, fpr: ForgotPasswordResponse | null) => void): undefined;
/**
 * Create a new password after a password reset link.
 *
 * @param token - The token received for password reset.
 * @param password - The new password.
 * @param cb - Callback function to handle the response.
 */
declare function CreatePassword(config: ConnectionConfig, token: string, password: string, cb: (err: ServiceError | null, fpr: CreatePasswordResponse | null) => void): undefined;
/**
 * Retrieve user information with authorization headers.
 *
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 */
declare function GetUser(config: ConnectionConfig, cb: (err: ServiceError | null, gur: GetUserResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Update user information with optional name and authorization headers.
 *
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @param name - Optional new name for the user.
 */
declare function UpdateUser(config: ConnectionConfig, cb: (err: ServiceError | null, uur: UpdateUserResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo, name?: string): undefined;
/**
 * Retrieve all users with pagination and criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of users per page.
 * @param criteria - List of criteria to filter users.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 */
declare function GetAllUser(config: ConnectionConfig, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, uur: GetAllUserResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Social authentication with Google.
 *
 * @param cb - Callback function to handle the response.
 * @param state - Optional state parameter for the authentication request.
 * @param code - Optional code parameter for the authentication request.
 */
declare function Google(config: ConnectionConfig, cb: (err: ServiceError | null, uur: AuthenticateResponse | null) => void, state?: string, code?: string): undefined;
/**
 * Social authentication with LinkedIn.
 *
 * @param cb - Callback function to handle the response.
 * @param state - Optional state parameter for the authentication request.
 * @param code - Optional code parameter for the authentication request.
 */
declare function Linkedin(config: ConnectionConfig, cb: (err: ServiceError | null, uur: AuthenticateResponse | null) => void, state?: string, code?: string): undefined;
/**
 * Social authentication with GitHub.
 *
 * @param cb - Callback function to handle the response.
 * @param state - Optional state parameter for the authentication request.
 * @param code - Optional code parameter for the authentication request.
 */
declare function Github(config: ConnectionConfig, cb: (err: ServiceError | null, uur: AuthenticateResponse | null) => void, state?: string, code?: string): undefined;
/**
 *
 * @param clientCfg
 * @param request
 * @param auth
 * @returns
 */
declare function ChangePassword(clientCfg: ConnectionConfig, request: ChangePasswordRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<ChangePasswordResponse>;

/**
 * Establish a general connection.
 *
 * @param connect - The connection identifier.
 * @param code - The authorization code.
 * @param state - The state parameter.
 * @param scope - The requested scope.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GeneralConnect(config: ConnectionConfig, connect: string, code: string, state: string, scope: string, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: GeneralConnectResponse | null) => void): undefined;
/**
 * Retrieve files associated with a connector based on specified criteria.
 *
 * @param toolId - The ID of the tool (connector) to retrieve files from.
 * @param criterias - List of criteria to filter the files.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetConnectorFiles(config: ConnectionConfig, provider: string, criterias: Criteria[], authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: GetConnectorFilesResponse | null) => void): undefined;

/**
 * Create a new organization.
 *
 * @param name - The name of the organization.
 * @param size - The size of the organization.
 * @param industry - The industry the organization operates in.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function CreateOrganization(connectionConfig: ConnectionConfig, name: string, size: string, industry: string, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: CreateOrganizationResponse | null) => void): undefined;
/**
 * Update an existing organization.
 *
 * @param organizationId - The ID of the organization to update.
 * @param authHeader - Authentication headers for the request.
 * @param organizationName - Optional new name for the organization.
 * @param organizationIndustry - Optional new industry for the organization.
 * @param organizationContact - Optional new contact for the organization.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function UpdateOrganization(connectionConfig: ConnectionConfig, organizationId: string, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: UpdateOrganizationResponse | null) => void, organizationName?: string, organizationIndustry?: string, organizationContact?: string): undefined;
/**
 * Retrieve details of an organization.
 *
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetOrganization(connectionConfig: ConnectionConfig, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: GetOrganizationResponse | null) => void): undefined;

/**
 * Retrieve all assistants with pagination and filtering criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of assistants per page.
 * @param criteria - List of criteria to filter assistants.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAllAssistant(connectionConfig: ConnectionConfig, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Update the version of an assistant.
 *
 * @param assistantId - The ID of the assistant to update.
 * @param assistantProviderModelId - The ID of the assistant provider model.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function UpdateAssistantVersion(connectionConfig: ConnectionConfig, req: UpdateAssistantVersionRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantResponse>;
/**
 * Retrieve all assistant provider models with pagination and filtering criteria.
 *
 * @param assistantId - The ID of the assistant.
 * @param page - The page number for pagination.
 * @param pageSize - The number of provider models per page.
 * @param criteria - List of criteria to filter provider models.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAllAssistantProvider(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantProviderResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieve details of a specific assistant.
 *
 * @param assistantId - The ID of the assistant to retrieve.
 * @param assistantProviderModelId - Optional ID of the assistant provider model.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAssistant(connectionConfig: ConnectionConfig, req: GetAssistantRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantResponse>;
/**
 *
 * @param connectionConfig
 * @param req
 * @param authHeader
 * @returns
 */
declare function CreateAssistantProvider(connectionConfig: ConnectionConfig, req: CreateAssistantProviderRequest, authHeader?: UserAuthInfo | ClientAuthInfo): Promise<GetAssistantProviderResponse>;
/**
 *
 * @param connectionConfig
 * @param req
 * @param authHeader
 * @returns
 */
declare function CreateAssistant(connectionConfig: ConnectionConfig, req: CreateAssistantRequest, authHeader: UserAuthInfo): Promise<GetAssistantResponse>;
/**
 * Create tags for an assistant.
 *
 * @param assistantId - The ID of the assistant.
 * @param tags - List of tags to add.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function CreateAssistantTag(connectionConfig: ConnectionConfig, assistantId: string, tags: string[], cb: (err: ServiceError | null, response: GetAssistantResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 * Update details of an existing assistant.
 *
 * @param assistantId - The ID of the assistant to update.
 * @param name - The new name for the assistant.
 * @param description - The new description for the assistant.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function UpdateAssistantDetail(connectionConfig: ConnectionConfig, assistantId: string, name: string, description: string, toolFillerEnabled: boolean, cb: (err: ServiceError | null, response: GetAssistantResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAssistantMessages(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], selectors: ("metadata" | "metric" | "stage" | "request" | "response")[], cb: (err: ServiceError | null, response: GetAllAssistantMessageResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param page
 * @param pageSize
 * @param criteria
 * @param selectors
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetMessages(connectionConfig: ConnectionConfig, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], selectors: ("metadata" | "metric" | "stage" | "request" | "response")[], cb: (err: ServiceError | null, response: GetAllMessageResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieves all assistant sessions based on the provided criteria.
 *
 * @param assistantId - The unique identifier of the assistant.
 * @param page - The page number for pagination.
 * @param pageSize - The number of records per page.
 * @param criteria - An array of key-value pairs to filter the assistant sessions.
 * @param cb - A callback function that will be invoked with the result or error.
 * @param authHeader - The authentication header for the request.
 *
 * @returns {void}
 *
 * @callback cb
 * @param {ServiceError | null} err - The error object if an error occurred, otherwise null.
 * @param {GetAllAssistantConversationResponse | null} uvcr - The response object containing the assistant sessions.
 */
declare function GetAllAssistantConversation(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], cb: (err: ServiceError | null, uvcr: GetAllAssistantConversationResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): void;
/**
 *
 * @param assistantId
 * @param assistantConversationId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 */
declare function GetAllAssistantConversationMessage(connectionConfig: ConnectionConfig, assistantId: string, assistantConversationId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, uvcr: GetAllConversationMessageResponse | null) => void): void;
/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function CreateAssistantDebuggerDeployment(clientCfg: ConnectionConfig, request: CreateAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantDebuggerDeploymentResponse>;
/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAssistantDebuggerDeployment(connectionConfig: ConnectionConfig, request: GetAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantDebuggerDeploymentResponse>;
declare function CreateAssistantApiDeployment(clientCfg: ConnectionConfig, request: CreateAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantApiDeploymentResponse>;
declare function GetAssistantApiDeployment(clientCfg: ConnectionConfig, req: GetAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantApiDeploymentResponse>;
declare function CreateAssistantWebpluginDeployment(clientCfg: ConnectionConfig, request: CreateAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantWebpluginDeploymentResponse>;
declare function GetAssistantWebpluginDeployment(clientCfg: ConnectionConfig, req: GetAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantWebpluginDeploymentResponse>;
declare function CreateAssistantPhoneDeployment(clientCfg: ConnectionConfig, request: CreateAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantPhoneDeploymentResponse>;
declare function GetAssistantPhoneDeployment(clientCfg: ConnectionConfig, req: GetAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantPhoneDeploymentResponse>;
declare function CreateAssistantWhatsappDeployment(clientCfg: ConnectionConfig, request: CreateAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantWhatsappDeploymentResponse>;
declare function GetAssistantWhatsappDeployment(clientCfg: ConnectionConfig, req: GetAssistantDeploymentRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantWhatsappDeploymentResponse>;
declare function GetAllAssistantWebhook(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantWebhookResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param method
 * @param endpoint
 * @param headers
 * @param parameters
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param priority
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function CreateWebhook(connectionConfig: ConnectionConfig, assistantId: string, method: string, endpoint: string, headers: {
    key: string;
    value: string;
}[], parameters: {
    key: string;
    value: string;
}[], events: string[], retryOnStatus: string[], maxRetries: number, timeout: number, priority: number, cb: (err: ServiceError | null, response: GetAssistantWebhookResponse | null) => void, authHeader: UserAuthInfo, description?: string): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function UpdateWebhook(connectionConfig: ConnectionConfig, assistantId: string, webhookId: string, method: string, endpoint: string, headers: {
    key: string;
    value: string;
}[], parameters: {
    key: string;
    value: string;
}[], events: string[], retryOnStatus: string[], maxRetries: number, timeout: number, priority: number, cb: (err: ServiceError | null, response: GetAssistantWebhookResponse | null) => void, authHeader: UserAuthInfo, description?: string): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAssistantWebhook(connectionConfig: ConnectionConfig, assistantId: string, webhookId: string, cb: (err: ServiceError | null, response: GetAssistantWebhookResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function DeleteAssistantWebhook(connectionConfig: ConnectionConfig, assistantId: string, webhookId: string, cb: (err: ServiceError | null, response: GetAssistantWebhookResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAllAssistantTelemetryProvider(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantTelemetryProviderResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
declare function CreateAssistantTelemetryProvider(connectionConfig: ConnectionConfig, assistantId: string, providerType: string, enabled: boolean, options: Metadata[], cb: (err: ServiceError | null, response: GetAssistantTelemetryProviderResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
declare function UpdateAssistantTelemetryProvider(connectionConfig: ConnectionConfig, assistantId: string, telemetryProviderId: string, providerType: string, enabled: boolean, options: Metadata[], cb: (err: ServiceError | null, response: GetAssistantTelemetryProviderResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
declare function GetAssistantTelemetryProvider(connectionConfig: ConnectionConfig, assistantId: string, telemetryProviderId: string, cb: (err: ServiceError | null, response: GetAssistantTelemetryProviderResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
declare function DeleteAssistantTelemetryProvider(connectionConfig: ConnectionConfig, assistantId: string, telemetryProviderId: string, cb: (err: ServiceError | null, response: GetAssistantTelemetryProviderResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAssistantConversation(connectionConfig: ConnectionConfig, req: GetAssistantConversationRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantConversationResponse>;
/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function DeleteAssistant(connectionConfig: ConnectionConfig, assistantId: string, cb: (err: ServiceError | null, response: GetAssistantResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAllAssistantAnalysis(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantAnalysisResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param name
 * @param endpointid
 * @param endpointversion
 * @param executionpriority
 * @param parameters
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function CreateAnalysis(connectionConfig: ConnectionConfig, assistantId: string, name: string, endpointid: string, endpointversion: string, executionpriority: number, parameters: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAssistantAnalysisResponse | null) => void, authHeader: UserAuthInfo, description?: string): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function UpdateAnalysis(connectionConfig: ConnectionConfig, assistantId: string, AnalysisId: string, name: string, endpointid: string, endpointversion: string, executionpriority: number, parameters: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAssistantAnalysisResponse | null) => void, authHeader: UserAuthInfo, description?: string): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAssistantAnalysis(connectionConfig: ConnectionConfig, assistantId: string, AnalysisId: string, cb: (err: ServiceError | null, response: GetAssistantAnalysisResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param AnalysisId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function DeleteAssistantAnalysis(connectionConfig: ConnectionConfig, assistantId: string, AnalysisId: string, cb: (err: ServiceError | null, response: GetAssistantAnalysisResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAllWebhookLog(connectionConfig: ConnectionConfig, projectId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantWebhookLogResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param organizationId
 * @param projectId
 * @param webhookLogId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetWebhookLog(connectionConfig: ConnectionConfig, projectId: string, webhookLogId: string, cb: (err: ServiceError | null, response: GetAssistantWebhookLogResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAllAssistantTool(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantToolResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param name
 * @param endpointid
 * @param endpointversion
 * @param executionpriority
 * @param parameters
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function CreateAssistantTool(connectionConfig: ConnectionConfig, assistantId: string, name: string, description: string, fields: {}, executionMethod: string, executionOptions: Metadata[], cb: (err: ServiceError | null, response: GetAssistantToolResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function UpdateAssistantTool(connectionConfig: ConnectionConfig, assistantId: string, assistantToolId: string, name: string, description: string, fields: {}, executionMethod: string, executionOptions: Metadata[], cb: (err: ServiceError | null, response: GetAssistantToolResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAssistantTool(connectionConfig: ConnectionConfig, assistantId: string, ToolId: string, cb: (err: ServiceError | null, response: GetAssistantToolResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param ToolId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function DeleteAssistantTool(connectionConfig: ConnectionConfig, assistantId: string, ToolId: string, cb: (err: ServiceError | null, response: GetAssistantToolResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAllAssistantKnowledge(connectionConfig: ConnectionConfig, assistantId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllAssistantKnowledgeResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param name
 * @param endpointid
 * @param endpointversion
 * @param executionpriority
 * @param parameters
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function CreateAssistantKnowledge(connectionConfig: ConnectionConfig, assistantId: string, knowledgeId: string, config: {
    searchMethod: "semantic" | "fullText" | "hybrid" | "invertedIndex";
    rerankingEnable: boolean;
    rerankerModelProvider?: string;
    rerankerModelProviderId?: string;
    rerankerModelOptions?: Metadata[];
    topK: number;
    scoreThreshold: number;
}, cb: (err: ServiceError | null, response: GetAssistantKnowledgeResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
declare function UpdateAssistantKnowledge(connectionConfig: ConnectionConfig, id: string, assistantId: string, knowledgeId: string, config: {
    searchMethod: "semantic" | "fullText" | "hybrid" | "invertedIndex";
    rerankingEnable: boolean;
    rerankerModelProvider?: string;
    rerankerModelProviderId?: string;
    rerankerModelOptions?: Metadata[];
    topK: number;
    scoreThreshold: number;
}, cb: (err: ServiceError | null, response: GetAssistantKnowledgeResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param webhookId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAssistantKnowledge(connectionConfig: ConnectionConfig, assistantId: string, ToolId: string, cb: (err: ServiceError | null, response: GetAssistantKnowledgeResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param assistantId
 * @param ToolId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function DeleteAssistantKnowledge(connectionConfig: ConnectionConfig, assistantId: string, knowledgeId: string, cb: (err: ServiceError | null, response: GetAssistantKnowledgeResponse | null) => void, authHeader: UserAuthInfo): undefined;
/**
 *
 * @param clientCfg
 * @param request
 * @returns
 */
declare function GetAssistantToolLog(clientCfg: ConnectionConfig, request: GetAssistantToolLogRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAssistantToolLogResponse>;
/**
 *
 * @param clientCfg
 * @param request
 * @returns
 */
declare function GetAllAssistantToolLog(clientCfg: ConnectionConfig, request: GetAllAssistantToolLogRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAllAssistantToolLogResponse>;

/**
 * Retrieve a paginated list of audit logs with filtering criteria.
 *
 * @param projectId - The ID of the project for which to retrieve audit logs.
 * @param page - The page number for pagination.
 * @param pageSize - The number of logs per page.
 * @param criteria - List of criteria to filter the audit logs.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetActivities(connectionConfig: ConnectionConfig, projectId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], cb: (err: ServiceError | null, response: GetAllAuditLogResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieve a specific audit log entry by its ID.
 *
 * @param projectId - The ID of the project associated with the audit log.
 * @param auditId - The ID of the audit log entry to retrieve.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetActivity(connectionConfig: ConnectionConfig, projectId: string, auditId: string, cb: (err: ServiceError | null, response: GetAuditLogResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;

/**
 * Retrieve all endpoints based on pagination and filtering criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of results per page.
 * @param criteria - List of filtering criteria.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function GetAllEndpoint(config: ConnectionConfig, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], cb: (err: ServiceError | null, response: GetAllEndpointResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Update the version of an endpoint.
 *
 * @param endpointId - The ID of the endpoint to update.
 * @param endpointProviderModelId - The ID of the endpoint provider model.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function UpdateEndpointVersion(config: ConnectionConfig, endpointId: string, endpointProviderModelId: string, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: UpdateEndpointVersionResponse | null) => void): undefined;
/**
 * Retrieve all endpoint provider models for a specific endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param page - The page number for pagination.
 * @param pageSize - The number of results per page.
 * @param criteria - List of filtering criteria.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function GetAllEndpointProviderModel(config: ConnectionConfig, endpointId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllEndpointProviderModelResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieve details of a specific endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param endpointProviderModelId - Optional ID of the endpoint provider model.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function GetEndpoint(config: ConnectionConfig, endpointId: string, endpointProviderModelId: string | null, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: GetEndpointResponse | null) => void): undefined;
/**
 * Create a new endpoint provider model.
 *
 * @param endpointId - The ID of the endpoint.
 * @param endpointProviderModel - The provider model attributes.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function CreateEndpointProviderModel(config: ConnectionConfig, endpointId: string, endpointProviderModel: EndpointProviderModelAttribute, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: CreateEndpointProviderModelResponse | null) => void): undefined;
/**
 * Create a new endpoint with specified configurations.
 *
 * @param endpointProviderModel - The provider model attributes.
 * @param endpointAttributes - The attributes of the endpoint.
 * @param retryConfig - Optional retry configuration.
 * @param cacheConfig - Optional cache configuration.
 * @param tags - List of tags to associate with the endpoint.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function CreateEndpoint(config: ConnectionConfig, endpointProviderModel: EndpointProviderModelAttribute, endpointAttributes: EndpointAttribute, tags: string[], authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: CreateEndpointResponse | null) => void, retryConfig?: EndpointRetryConfiguration, cacheConfig?: EndpointCacheConfiguration): undefined;
/**
 * Add tags to an existing endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param tags - List of tags to add.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function CreateEndpointTag(config: ConnectionConfig, endpointId: string, tags: string[], authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: GetEndpointResponse | null) => void): undefined;
/**
 * Update the details of an endpoint.
 *
 * @param endpointId - The ID of the endpoint to update.
 * @param name - The new name for the endpoint.
 * @param description - The new description for the endpoint.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function UpdateEndpointDetail(config: ConnectionConfig, endpointId: string, name: string, description: string, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: GetEndpointResponse | null) => void): undefined;
/**
 * Create a retry configuration for an endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param retryType - The type of retry configuration.
 * @param maxAttempts - The maximum number of retry attempts.
 * @param delaySeconds - The delay between retry attempts in seconds.
 * @param exponentialBackoff - Whether to use exponential backoff.
 * @param retryables - List of error codes that should trigger a retry.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function CreateEndpointRetryConfiguration(config: ConnectionConfig, endpointId: string, retryType: string, maxAttempts: string, delaySeconds: string, exponentialBackoff: boolean, retryables: string[], authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: CreateEndpointRetryConfigurationResponse | null) => void): undefined;
/**
 * Create a cache configuration for an endpoint.
 *
 * @param endpointId - The ID of the endpoint.
 * @param cacheType - The type of cache configuration.
 * @param expiryInterval - The cache expiry interval.
 * @param matchThreshold - The threshold for cache match.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 
 */
declare function CreateEndpointCacheConfiguration(config: ConnectionConfig, endpointId: string, cacheType: string, expiryInterval: string, matchThreshold: number, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: CreateEndpointCacheConfigurationResponse | null) => void): undefined;
/**
 *
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetAllEndpointLog(config: ConnectionConfig, endpointId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], cb: (err: ServiceError | null, response: GetAllEndpointLogResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param organizationId
 * @param projectId
 * @param logId
 * @param cb
 * @param authHeader
 * @returns
 */
declare function GetEndpointLog(config: ConnectionConfig, endpointId: string, logId: string, cb: (err: ServiceError | null, response: GetEndpointLogResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;

/**
 *
 * @param providerId
 * @param providerKey
 * @param keyName
 * @param cb
 */
declare function CreateProviderKey(connectionConfig: ConnectionConfig, req: CreateProviderCredentialRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<GetCredentialResponse>;
/**
 *
 * @param providerKeyId
 * @param providerId
 * @param providerKey
 * @param keyName
 * @param cb
 */
declare function DeleteProviderKey(connectionConfig: ConnectionConfig, providerKeyId: string, cb: (err: ServiceError | null, dpr: GetCredentialResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): void;
/**
 *
 * @param cb
 */
declare function GetAllOrganizationCredential(connectionConfig: ConnectionConfig, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], cb: (err: ServiceError | null, pcs: GetAllOrganizationCredentialResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): void;

/**
 *
 * @param authHeader
 * @returns
 */
declare function AssistantTalk(connectionConfig: ConnectionConfig, authHeader?: UserAuthInfo | ClientAuthInfo): BidirectionalStream<AssistantTalkRequest, AssistantTalkResponse>;
/**
 *
 * @param conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param assistantConversationMessageId
 * @param cb
 * @param authHeader
 */
declare function CreateMessageMetric(connectionConfig: ConnectionConfig, req: CreateMessageMetricRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<CreateMessageMetricResponse>;
/**
 *
 * @param conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param metrics
 * @param cb
 * @param authHeader
 */
declare function CreateConversationMetric(connectionConfig: ConnectionConfig, req: CreateConversationMetricRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<CreateConversationMetricResponse>;

declare function WebTalk(connectionConfig: ConnectionConfig, authHeader?: UserAuthInfo | ClientAuthInfo): BidirectionalStream<WebTalkRequest, WebTalkResponse>;

declare enum RapidaDocumentSource {
    MANUAL = "manual",
    TOOL = "tool"
}
declare enum RapidaDocumentPreProcessing {
    AUTOMATIC = "automatic",
    CUSTOM = "custom"
}
declare enum RapidaDocumentType {
    UNSTRUCTURE = "unstructure",
    STRUCTURE_PRODUCT = "structure.product",
    STRUCTURE_ARTICLE = "structure.article",
    STRUCTURE_QNA = "structure.qna"
}

/**
 * Creates a new knowledge entry.
 *
 * @param providerModelId - The ID of the provider model.
 * @param providerId - The ID of the provider.
 * @param name - The name of the knowledge.
 * @param description - A description of the knowledge.
 * @param tags - A list of tags associated with the knowledge.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function CreateKnowledge(connectionConfig: ConnectionConfig, req: CreateKnowledgeRequest, authHeader?: UserAuthInfo | ClientAuthInfo): Promise<CreateKnowledgeResponse>;
/**
 * Retrieves a knowledge base by ID.
 *
 * @param knowledgeBaseId - The ID of the knowledge base to retrieve.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetKnowledgeBase(config: ConnectionConfig, knowledgeBaseId: string, cb: (err: ServiceError | null, response: GetKnowledgeResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieves all knowledge bases with pagination and filtering.
 *
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAllKnowledgeBases(config: ConnectionConfig, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
    logic: string;
}[], cb: (err: ServiceError | null, response: GetAllKnowledgeResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Creates a new knowledge document.
 *
 * @param knowledgeId - The ID of the knowledge to associate the document with.
 * @param documentSource - The source of the document.
 * @param datasource - The data source for the document.
 * @param preProcessor - The pre-processing method to use.
 * @param DocumentContents - An array of DocumentContent to include in the document.
 * @param separator - The separator used in custom processing.
 * @param maxchunksize - The maximum chunk size for document processing.
 * @param chunkoverlap - The overlap between chunks.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function CreateKnowledgeDocument(config: ConnectionConfig, knowledgeId: string, documentSource: RapidaDocumentSource, datasource: string, documentType: RapidaDocumentType, preProcessor: RapidaDocumentPreProcessing, DocumentContents: Array<DocumentContent>, separator: string, maxchunksize: number, chunkoverlap: number, cb: (err: ServiceError | null, response: CreateKnowledgeDocumentResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieves all documents associated with a knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base.
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAllKnowledgeDocument(config: ConnectionConfig, knowledgeId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllKnowledgeDocumentResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieves all segments of documents associated with a knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base.
 * @param page - The page number to retrieve.
 * @param pageSize - The number of items per page.
 * @param criteria - A list of criteria for filtering results.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAllKnowledgeDocumentSegment(config: ConnectionConfig, knowledgeId: string, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllKnowledgeDocumentSegmentResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Adds tags to a knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base to tag.
 * @param tags - A list of tags to add.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function CreateKnowledgeTag(config: ConnectionConfig, knowledgeId: string, tags: string[], cb: (err: ServiceError | null, response: GetKnowledgeResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Updates details of an existing knowledge base.
 *
 * @param knowledgeId - The ID of the knowledge base to update.
 * @param name - The new name of the knowledge base.
 * @param description - The new description of the knowledge base.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function UpdateKnowledgeDetail(config: ConnectionConfig, knowledgeId: string, name: string, description: string, cb: (err: ServiceError | null, response: GetKnowledgeResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param documentId
 * @param index
 * @param reason
 * @param cb
 * @param authHeader
 * @returns
 */
declare function DeleteKnowledgeDocumentSegment(config: ConnectionConfig, documentId: string, index: string, reason: string, cb: (err: ServiceError | null, response: BaseResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param documentId
 * @param index
 * @param organizationsList
 * @param datesList
 * @param productsList
 * @param eventsList
 * @param peopleList
 * @param timesList
 * @param quantitiesList
 * @param locationsList
 * @param industriesList
 * @param documentName
 * @param cb
 * @param authHeader
 * @returns
 */
declare function UpdateKnowledgeDocumentSegment(config: ConnectionConfig, documentId: string, index: string, organizationsList: string[], datesList: string[], productsList: string[], eventsList: string[], peopleList: string[], timesList: string[], quantitiesList: string[], locationsList: string[], industriesList: string[], documentName: string, cb: (err: ServiceError | null, response: BaseResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 *
 * @param clientCfg
 * @param request
 * @returns
 */
declare function GetKnowledgeLog(clientCfg: ConnectionConfig, request: GetKnowledgeLogRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetKnowledgeLogResponse>;
/**
 *
 * @param clientCfg
 * @param request
 * @returns
 */
declare function GetAllKnowledgeLog(clientCfg: ConnectionConfig, request: GetAllKnowledgeLogRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAllKnowledgeLogResponse>;

/**
 * Adds users to a project with specified roles.
 *
 * @param email - The email address of the user to add.
 * @param role - The role to assign to the user.
 * @param projectIds - List of project IDs to which the user will be added.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function AddUsersToProject(connectionConfig: ConnectionConfig, email: string, role: string, projectIds: string[], cb: (err: ServiceError | null, response: AddUsersToProjectResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Creates a new project with the specified details.
 *
 * @param projectName - The name of the project to create.
 * @param projectDescription - The description of the project.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function CreateProject(connectionConfig: ConnectionConfig, projectName: string, projectDescription: string, authHeader: ClientAuthInfo | UserAuthInfo, cb: (err: ServiceError | null, response: CreateProjectResponse | null) => void): undefined;
/**
 * Updates an existing project with the given details.
 *
 * @param projectId - The ID of the project to update.
 * @param projectName - The new name for the project (optional).
 * @param projectDescription - The new description for the project (optional).
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function UpdateProject(connectionConfig: ConnectionConfig, projectId: string, cb: (err: ServiceError | null, response: UpdateProjectResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo, projectName?: string, projectDescription?: string): undefined;
/**
 * Retrieves a paginated list of all projects based on specified criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of projects per page.
 * @param criteria - List of criteria to filter the projects.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAllProject(connectionConfig: ConnectionConfig, page: number, pageSize: number, criteria: {
    key: string;
    value: string;
}[], cb: (err: ServiceError | null, response: GetAllProjectResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieves the details of a specific project by ID.
 *
 * @param projectId - The ID of the project to retrieve.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetProject(connectionConfig: ConnectionConfig, projectId: string, cb: (err: ServiceError | null, response: GetProjectResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Archives a project, effectively deleting it.
 *
 * @param projectId - The ID of the project to archive.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function DeleteProject(connectionConfig: ConnectionConfig, projectId: string, cb: (err: ServiceError | null, response: ArchiveProjectResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Retrieves all credentials associated with a specific project.
 *
 * @param projectId - The ID of the project for which to retrieve credentials.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function GetAllProjectCredential(connectionConfig: ConnectionConfig, projectId: string, cb: (err: ServiceError | null, response: GetAllProjectCredentialResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;
/**
 * Creates a new credential for a specific project.
 *
 * @param projectId - The ID of the project for which to create a credential.
 * @param name - The name of the new credential.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
declare function CreateProjectCredential(connectionConfig: ConnectionConfig, projectId: string, name: string, cb: (err: ServiceError | null, response: CreateProjectCredentialResponse | null) => void, authHeader: ClientAuthInfo | UserAuthInfo): undefined;

// package: integration_api
// file: integration-api.proto



declare class Credential extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Struct | undefined;
  setValue(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credential.AsObject;
  static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credential;
  static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
}

declare namespace Credential {
  export type AsObject = {
    id: string,
    value?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class ToolDefinition extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  hasFunctiondefinition(): boolean;
  clearFunctiondefinition(): void;
  getFunctiondefinition(): FunctionDefinition | undefined;
  setFunctiondefinition(value?: FunctionDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ToolDefinition): ToolDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolDefinition;
  static deserializeBinaryFromReader(message: ToolDefinition, reader: jspb.BinaryReader): ToolDefinition;
}

declare namespace ToolDefinition {
  export type AsObject = {
    type: string,
    functiondefinition?: FunctionDefinition.AsObject,
  }
}

declare class FunctionDefinition extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): FunctionParameter | undefined;
  setParameters(value?: FunctionParameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionDefinition): FunctionDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionDefinition;
  static deserializeBinaryFromReader(message: FunctionDefinition, reader: jspb.BinaryReader): FunctionDefinition;
}

declare namespace FunctionDefinition {
  export type AsObject = {
    name: string,
    description: string,
    parameters?: FunctionParameter.AsObject,
  }
}

declare class FunctionParameter extends jspb.Message {
  clearRequiredList(): void;
  getRequiredList(): Array<string>;
  setRequiredList(value: Array<string>): void;
  addRequired(value: string, index?: number): string;

  getType(): string;
  setType(value: string): void;

  getPropertiesMap(): jspb.Map<string, FunctionParameterProperty>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionParameter.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionParameter): FunctionParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionParameter;
  static deserializeBinaryFromReader(message: FunctionParameter, reader: jspb.BinaryReader): FunctionParameter;
}

declare namespace FunctionParameter {
  export type AsObject = {
    requiredList: Array<string>,
    type: string,
    propertiesMap: Array<[string, FunctionParameterProperty.AsObject]>,
  }
}

declare class FunctionParameterProperty extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearEnumList(): void;
  getEnumList(): Array<string>;
  setEnumList(value: Array<string>): void;
  addEnum(value: string, index?: number): string;

  hasItems(): boolean;
  clearItems(): void;
  getItems(): FunctionParameter | undefined;
  setItems(value?: FunctionParameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionParameterProperty.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionParameterProperty): FunctionParameterProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionParameterProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionParameterProperty;
  static deserializeBinaryFromReader(message: FunctionParameterProperty, reader: jspb.BinaryReader): FunctionParameterProperty;
}

declare namespace FunctionParameterProperty {
  export type AsObject = {
    type: string,
    description: string,
    enumList: Array<string>,
    items?: FunctionParameter.AsObject,
  }
}

declare class Embedding extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  clearEmbeddingList(): void;
  getEmbeddingList(): Array<number>;
  setEmbeddingList(value: Array<number>): void;
  addEmbedding(value: number, index?: number): number;

  getBase64(): string;
  setBase64(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Embedding.AsObject;
  static toObject(includeInstance: boolean, msg: Embedding): Embedding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Embedding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Embedding;
  static deserializeBinaryFromReader(message: Embedding, reader: jspb.BinaryReader): Embedding;
}

declare namespace Embedding {
  export type AsObject = {
    index: number,
    embeddingList: Array<number>,
    base64: string,
  }
}

declare class EmbeddingRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getContentMap(): jspb.Map<number, string>;
  clearContentMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  getProvidername(): string;
  setProvidername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbeddingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmbeddingRequest): EmbeddingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbeddingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbeddingRequest;
  static deserializeBinaryFromReader(message: EmbeddingRequest, reader: jspb.BinaryReader): EmbeddingRequest;
}

declare namespace EmbeddingRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    contentMap: Array<[number, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    additionaldataMap: Array<[string, string]>,
    providername: string,
  }
}

declare class EmbeddingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Embedding>;
  setDataList(value: Array<Embedding>): void;
  addData(value?: Embedding, index?: number): Embedding;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbeddingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmbeddingResponse): EmbeddingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbeddingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbeddingResponse;
  static deserializeBinaryFromReader(message: EmbeddingResponse, reader: jspb.BinaryReader): EmbeddingResponse;
}

declare namespace EmbeddingResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    dataList: Array<Embedding.AsObject>,
    error?: Error$1.AsObject,
    metricsList: Array<Metric.AsObject>,
  }
}

declare class Reranking extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  getRelevancescore(): number;
  setRelevancescore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reranking.AsObject;
  static toObject(includeInstance: boolean, msg: Reranking): Reranking.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reranking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reranking;
  static deserializeBinaryFromReader(message: Reranking, reader: jspb.BinaryReader): Reranking;
}

declare namespace Reranking {
  export type AsObject = {
    index: number,
    content: string,
    relevancescore: number,
  }
}

declare class RerankingRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getQuery(): string;
  setQuery(value: string): void;

  getContentMap(): jspb.Map<number, string>;
  clearContentMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  getProvidername(): string;
  setProvidername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RerankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RerankingRequest): RerankingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RerankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RerankingRequest;
  static deserializeBinaryFromReader(message: RerankingRequest, reader: jspb.BinaryReader): RerankingRequest;
}

declare namespace RerankingRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    query: string,
    contentMap: Array<[number, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    additionaldataMap: Array<[string, string]>,
    providername: string,
  }
}

declare class RerankingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Reranking>;
  setDataList(value: Array<Reranking>): void;
  addData(value?: Reranking, index?: number): Reranking;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RerankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RerankingResponse): RerankingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RerankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RerankingResponse;
  static deserializeBinaryFromReader(message: RerankingResponse, reader: jspb.BinaryReader): RerankingResponse;
}

declare namespace RerankingResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    dataList: Array<Reranking.AsObject>,
    error?: Error$1.AsObject,
    metricsList: Array<Metric.AsObject>,
  }
}

declare class ChatResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): string;
  setRequestid(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Message$1 | undefined;
  setData(value?: Message$1): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  getFinishreason(): string;
  setFinishreason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatResponse;
  static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

declare namespace ChatResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: string,
    data?: Message$1.AsObject,
    error?: Error$1.AsObject,
    metricsList: Array<Metric.AsObject>,
    finishreason: string,
  }
}

declare class ChatRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getRequestid(): string;
  setRequestid(value: string): void;

  clearConversationsList(): void;
  getConversationsList(): Array<Message$1>;
  setConversationsList(value: Array<Message$1>): void;
  addConversations(value?: Message$1, index?: number): Message$1;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  clearTooldefinitionsList(): void;
  getTooldefinitionsList(): Array<ToolDefinition>;
  setTooldefinitionsList(value: Array<ToolDefinition>): void;
  addTooldefinitions(value?: ToolDefinition, index?: number): ToolDefinition;

  getProvidername(): string;
  setProvidername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

declare namespace ChatRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    requestid: string,
    conversationsList: Array<Message$1.AsObject>,
    additionaldataMap: Array<[string, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    tooldefinitionsList: Array<ToolDefinition.AsObject>,
    providername: string,
  }
}

declare class VerifyCredentialRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getProvidername(): string;
  setProvidername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyCredentialRequest): VerifyCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyCredentialRequest;
  static deserializeBinaryFromReader(message: VerifyCredentialRequest, reader: jspb.BinaryReader): VerifyCredentialRequest;
}

declare namespace VerifyCredentialRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    providername: string,
  }
}

declare class VerifyCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): string;
  setResponse(value: string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyCredentialResponse): VerifyCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyCredentialResponse;
  static deserializeBinaryFromReader(message: VerifyCredentialResponse, reader: jspb.BinaryReader): VerifyCredentialResponse;
}

declare namespace VerifyCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    response: string,
    errormessage: string,
  }
}

declare class Moderation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Moderation.AsObject;
  static toObject(includeInstance: boolean, msg: Moderation): Moderation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Moderation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Moderation;
  static deserializeBinaryFromReader(message: Moderation, reader: jspb.BinaryReader): Moderation;
}

declare namespace Moderation {
  export type AsObject = {
    name: string,
    value: string,
  }
}

declare class GetModerationRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getModel(): string;
  setModel(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  getModelparametersMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearModelparametersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModerationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModerationRequest): GetModerationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModerationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModerationRequest;
  static deserializeBinaryFromReader(message: GetModerationRequest, reader: jspb.BinaryReader): GetModerationRequest;
}

declare namespace GetModerationRequest {
  export type AsObject = {
    credential?: Credential.AsObject,
    model: string,
    version: string,
    content: string,
    additionaldataMap: Array<[string, string]>,
    modelparametersMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

declare class GetModerationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Moderation>;
  setDataList(value: Array<Moderation>): void;
  addData(value?: Moderation, index?: number): Moderation;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModerationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModerationResponse): GetModerationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModerationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModerationResponse;
  static deserializeBinaryFromReader(message: GetModerationResponse, reader: jspb.BinaryReader): GetModerationResponse;
}

declare namespace GetModerationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    requestid: number,
    dataList: Array<Moderation.AsObject>,
    error?: Error$1.AsObject,
    metricsList: Array<Metric.AsObject>,
  }
}

// package: integration_api
// file: integration-api.proto



type UnifiedProviderServiceChat = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ChatRequest;
  readonly responseType: typeof ChatResponse;
};

type UnifiedProviderServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof ChatRequest;
  readonly responseType: typeof ChatResponse;
};

type UnifiedProviderServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof EmbeddingRequest;
  readonly responseType: typeof EmbeddingResponse;
};

type UnifiedProviderServiceReranking = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof RerankingRequest;
  readonly responseType: typeof RerankingResponse;
};

type UnifiedProviderServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof UnifiedProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof VerifyCredentialRequest;
  readonly responseType: typeof VerifyCredentialResponse;
};

declare class UnifiedProviderService {
  static readonly serviceName: string;
  static readonly Chat: UnifiedProviderServiceChat;
  static readonly StreamChat: UnifiedProviderServiceStreamChat;
  static readonly Embedding: UnifiedProviderServiceEmbedding;
  static readonly Reranking: UnifiedProviderServiceReranking;
  static readonly VerifyCredential: UnifiedProviderServiceVerifyCredential;
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
declare function CreatePhoneCall(clientCfg: ConnectionConfig, request: CreatePhoneCallRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<CreatePhoneCallResponse>;
/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersionx
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
declare function CreateBulkPhoneCall(clientCfg: ConnectionConfig, request: CreateBulkPhoneCallRequest, authHeader?: ClientAuthInfo | UserAuthInfo): Promise<CreateBulkPhoneCallResponse>;

declare enum AgentEvent {
    ConnectionStateEvent = "onConnectionStateEvent",
    InputMediaDeviceChangeEvent = "onInputMediaDeviceChangeEvent",
    OutputMediaDeviceChangeEvent = "onOutputMediaDeviceChangeEvent",
    InputChannelChangeEvent = "onInputChannelChangeEvent",
    OutputChannelChangeEvent = "onOutputChannelChangeEvent",
    MuteStateEvent = "onMuteStateEvent",
    ConversationEvent = "onConversationEvent",
    FeedbackEvent = "onFeedbackEvent",
    ErrorEvent = "onErrorEvent"
}

/**
 * Utility function to observe a specific agent event.
 * @param agent The voice agent instance.
 * @param event The agent event to observe.
 * @returns Observable emitting the event arguments.
 */
declare function agentEventSelector(agent: VoiceAgent, events: AgentEvent | AgentEvent[]): Observable<any>;

/**
 *
 * @param clientCfg
 * @param request
 * @param auth
 * @returns
 */
declare function GetAllAssistantTelemetry(clientCfg: ConnectionConfig, request: GetAllAssistantTelemetryRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<GetAllAssistantTelemetryResponse>;

/**
 *
 * @param clientCfg
 * @param request
 * @param auth
 * @returns
 */
declare function UpdateNotificationSetting(clientCfg: ConnectionConfig, request: UpdateNotificationSettingRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<NotificationSettingResponse>;
/**
 *
 * @param clientCfg
 * @param request
 * @param auth
 * @returns
 */
declare function GetNotificationSetting(clientCfg: ConnectionConfig, request: GetNotificationSettingRequest, auth?: ClientAuthInfo | UserAuthInfo): Promise<NotificationSettingResponse>;

export { AddUsersToProject, AddUsersToProjectResponse, type AgentDeployment, AgentEvent, AnyToBool, AnyToFloat, AnyToInt32, AnyToJSON, AnyToString, ArchiveProjectResponse, Assistant, AssistantApiDeployment, AssistantDebuggerDeployment, AssistantTalk, AssistantTalkRequest, AssistantTalkResponse, AssistantWebpluginDeployment, AuthenticateResponse, AuthenticateUser, AuthorizeUser, BaseResponse, type BidirectionalStream, BoolToAny, BytesToAny, ChangePassword, ChangePasswordRequest, ChangePasswordResponse, ChatRequest, ChatResponse, ConnectionConfig, CreateAnalysis, CreateAssistant, CreateAssistantApiDeployment, CreateAssistantDebuggerDeployment, CreateAssistantDeploymentRequest, CreateAssistantKnowledge, CreateAssistantPhoneDeployment, CreateAssistantProvider, CreateAssistantProviderRequest, CreateAssistantRequest, CreateAssistantTag, CreateAssistantTelemetryProvider, CreateAssistantTool, CreateAssistantWebpluginDeployment, CreateAssistantWhatsappDeployment, CreateBulkPhoneCall, CreateBulkPhoneCallRequest, CreateBulkPhoneCallResponse, CreateConversationMetric, CreateConversationMetricRequest, CreateConversationMetricResponse, CreateEndpoint, CreateEndpointCacheConfiguration, CreateEndpointCacheConfigurationResponse, CreateEndpointProviderModel, CreateEndpointProviderModelResponse, CreateEndpointResponse, CreateEndpointRetryConfiguration, CreateEndpointRetryConfigurationResponse, CreateEndpointTag, CreateKnowledge, CreateKnowledgeDocument, CreateKnowledgeDocumentResponse, CreateKnowledgeRequest, CreateKnowledgeResponse, CreateKnowledgeTag, CreateMessageMetric, CreateMessageMetricRequest, CreateMessageMetricResponse, CreateOrganization, CreateOrganizationResponse, CreatePassword, CreatePasswordResponse, CreatePhoneCall, CreatePhoneCallRequest, CreatePhoneCallResponse, CreateProject, CreateProjectCredential, CreateProjectCredentialResponse, CreateProjectResponse, CreateProviderCredentialRequest, CreateProviderKey, CreateWebhook, Credential, Criteria, DeleteAssistant, DeleteAssistantAnalysis, DeleteAssistantKnowledge, DeleteAssistantTelemetryProvider, DeleteAssistantTool, DeleteAssistantWebhook, DeleteKnowledgeDocumentSegment, DeleteProject, DeleteProviderKey, DocumentContent, Embedding, EmbeddingRequest, EmbeddingResponse, EndpointAttribute, EndpointCacheConfiguration, EndpointProviderModelAttribute, EndpointRetryConfiguration, Error$1 as Error, Feedback, FloatToAny, ForgotPassword, ForgotPasswordResponse, FunctionDefinition, FunctionParameter, FunctionParameterProperty, GeneralConnect, GeneralConnectResponse, GetActivities, GetActivity, GetAllAssistant, GetAllAssistantAnalysis, GetAllAssistantAnalysisResponse, GetAllAssistantConversation, GetAllAssistantConversationMessage, GetAllAssistantConversationResponse, GetAllAssistantKnowledge, GetAllAssistantKnowledgeResponse, GetAllAssistantMessageResponse, GetAllAssistantProvider, GetAllAssistantProviderResponse, GetAllAssistantResponse, GetAllAssistantTelemetry, GetAllAssistantTelemetryProvider, GetAllAssistantTelemetryProviderResponse, GetAllAssistantTelemetryRequest, GetAllAssistantTelemetryResponse, GetAllAssistantTool, GetAllAssistantToolLog, GetAllAssistantToolLogRequest, GetAllAssistantToolLogResponse, GetAllAssistantToolResponse, GetAllAssistantWebhook, GetAllAssistantWebhookLogResponse, GetAllAssistantWebhookResponse, GetAllAuditLogResponse, GetAllConversationMessageResponse, GetAllEndpoint, GetAllEndpointLog, GetAllEndpointLogResponse, GetAllEndpointProviderModel, GetAllEndpointProviderModelResponse, GetAllEndpointResponse, GetAllKnowledgeBases, GetAllKnowledgeDocument, GetAllKnowledgeDocumentResponse, GetAllKnowledgeDocumentSegment, GetAllKnowledgeDocumentSegmentResponse, GetAllKnowledgeLog, GetAllKnowledgeLogRequest, GetAllKnowledgeLogResponse, GetAllKnowledgeResponse, GetAllMessageResponse, GetAllOrganizationCredential, GetAllOrganizationCredentialResponse, GetAllProject, GetAllProjectCredential, GetAllProjectCredentialResponse, GetAllProjectResponse, GetAllUser, GetAllUserResponse, GetAllWebhookLog, GetAssistant, GetAssistantAnalysis, GetAssistantAnalysisResponse, GetAssistantApiDeployment, GetAssistantApiDeploymentResponse, GetAssistantConversation, GetAssistantConversationRequest, GetAssistantConversationResponse, GetAssistantDebuggerDeployment, GetAssistantDebuggerDeploymentResponse, GetAssistantDeploymentRequest, GetAssistantKnowledge, GetAssistantKnowledgeResponse, GetAssistantMessages, GetAssistantPhoneDeployment, GetAssistantPhoneDeploymentResponse, GetAssistantProviderResponse, GetAssistantRequest, GetAssistantResponse, GetAssistantTelemetryProvider, GetAssistantTelemetryProviderResponse, GetAssistantTool, GetAssistantToolLog, GetAssistantToolLogRequest, GetAssistantToolLogResponse, GetAssistantToolResponse, GetAssistantWebhook, GetAssistantWebhookLogResponse, GetAssistantWebhookResponse, GetAssistantWebpluginDeployment, GetAssistantWebpluginDeploymentResponse, GetAssistantWhatsappDeployment, GetAssistantWhatsappDeploymentResponse, GetAuditLogResponse, GetConnectorFiles, GetConnectorFilesResponse, GetCredentialResponse, GetDeployment, GetEndpoint, GetEndpointLog, GetEndpointLogResponse, GetEndpointResponse, GetKnowledgeBase, GetKnowledgeLog, GetKnowledgeLogRequest, GetKnowledgeLogResponse, GetKnowledgeResponse, GetMessages, GetModerationRequest, GetModerationResponse, GetNotificationSetting, GetNotificationSettingRequest, GetOrganization, GetOrganizationResponse, GetProject, GetProjectResponse, GetUser, GetUserResponse, GetWebhookLog, Github, Google, IndexKnowledgeDocument, IndexKnowledgeDocumentResponse, Int32ToAny, Invoke, InvokeRequest, InvokeResponse, JSONToAny, Linkedin, MapToObject, MediaDeviceFailure, Message, Metadata, Metric, Moderation, NotificationSettingResponse, Message$1 as ProtoMessage, RapidaSource, RegisterUser, type RequestStream, Reranking, RerankingRequest, RerankingResponse, type ResponseStream, type ServiceError, type Status, StringArrayToAny, StringToAny, ToolDefinition, type UnaryResponse, UnifiedProviderService, UpdateAnalysis, UpdateAssistantDetail, UpdateAssistantKnowledge, UpdateAssistantTelemetryProvider, UpdateAssistantTool, UpdateAssistantVersion, UpdateAssistantVersionRequest, UpdateEndpointDetail, UpdateEndpointVersion, UpdateEndpointVersionResponse, UpdateKnowledgeDetail, UpdateKnowledgeDocumentSegment, UpdateNotificationSetting, UpdateNotificationSettingRequest, UpdateOrganization, UpdateOrganizationResponse, UpdateProject, UpdateProjectResponse, UpdateUser, UpdateUserResponse, UpdateWebhook, VerifyCredentialRequest, VerifyCredentialResponse, VerifyToken, VerifyTokenResponse, VoiceAgent, WebTalk, WebTalkRequest, WebTalkResponse, agentEventSelector, getRecommendedAudioSettings, hasFullWebRTCAudioSupport, hasKnownAudioIssues, isAndroidDevice, isIosDevice, isLinux, isSinkIdSupported, isWindows, isWindowsDevice, useAgentMessages, useConnectAgent, useConversationFeedback, useInputModeToggleAgent, useMessageFeedback, useMultiband3DSpeakerTrackVolume, useMultibandMicrophoneTrackVolume, useMuteAgent, useSelectInputDeviceAgent };
