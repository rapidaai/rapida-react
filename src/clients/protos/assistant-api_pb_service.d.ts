// package: assistant_api
// file: assistant-api.proto

import * as assistant_api_pb from "./assistant-api_pb";
import * as common_pb from "./common_pb";
import * as assistant_tool_pb from "./assistant-tool_pb";
import * as assistant_http_log_pb from "./assistant-http-log_pb";
import * as assistant_knowledge_pb from "./assistant-knowledge_pb";
import * as assistant_provider_pb from "./assistant-provider_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AssistantServiceGetAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAllAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantResponse;
};

type AssistantServiceCreateAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceDeleteAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.DeleteAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAllAssistantProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_provider_pb.GetAllAssistantProviderRequest;
  readonly responseType: typeof assistant_provider_pb.GetAllAssistantProviderResponse;
};

type AssistantServiceCreateAssistantProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_provider_pb.CreateAssistantProviderRequest;
  readonly responseType: typeof assistant_provider_pb.GetAssistantProviderResponse;
};

type AssistantServiceCreateAssistantTag = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantTagRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceUpdateAssistantVersion = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_provider_pb.UpdateAssistantVersionRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceUpdateAssistantDetail = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.UpdateAssistantDetailRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAllAssistantMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantMessageRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantMessageResponse;
};

type AssistantServiceGetAllConversationMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllConversationMessageRequest;
  readonly responseType: typeof common_pb.GetAllConversationMessageResponse;
};

type AssistantServiceGetAllMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllMessageRequest;
  readonly responseType: typeof assistant_api_pb.GetAllMessageResponse;
};

type AssistantServiceGetAssistantConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantConfigurationResponse;
};

type AssistantServiceGetAllAssistantConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantConfigurationResponse;
};

type AssistantServiceCreateAssistantConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantConfigurationResponse;
};

type AssistantServiceUpdateAssistantConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.UpdateAssistantConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantConfigurationResponse;
};

type AssistantServiceDeleteAssistantConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.DeleteAssistantConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantConfigurationResponse;
};

type AssistantServiceGetAllAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllAssistantConversationRequest;
  readonly responseType: typeof common_pb.GetAllAssistantConversationResponse;
};

type AssistantServiceGetAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantConversationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantConversationResponse;
};

type AssistantServiceGetAssistantHTTPLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_http_log_pb.GetAssistantHTTPLogRequest;
  readonly responseType: typeof assistant_http_log_pb.GetAssistantHTTPLogResponse;
};

type AssistantServiceGetAllAssistantHTTPLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_http_log_pb.GetAllAssistantHTTPLogRequest;
  readonly responseType: typeof assistant_http_log_pb.GetAllAssistantHTTPLogResponse;
};

type AssistantServiceRetryAssistantHTTPLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_http_log_pb.RetryAssistantHTTPLogRequest;
  readonly responseType: typeof assistant_http_log_pb.GetAssistantHTTPLogResponse;
};

type AssistantServiceGetAssistantToolLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAssistantToolLogRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolLogResponse;
};

type AssistantServiceGetAllAssistantToolLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAllAssistantToolLogRequest;
  readonly responseType: typeof assistant_tool_pb.GetAllAssistantToolLogResponse;
};

type AssistantServiceCreateAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.CreateAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceGetAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceGetAllAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.GetAllAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAllAssistantToolResponse;
};

type AssistantServiceDeleteAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.DeleteAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceUpdateAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_tool_pb.UpdateAssistantToolRequest;
  readonly responseType: typeof assistant_tool_pb.GetAssistantToolResponse;
};

type AssistantServiceCreateAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.CreateAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

type AssistantServiceGetAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.GetAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

type AssistantServiceGetAllAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.GetAllAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAllAssistantKnowledgeResponse;
};

type AssistantServiceDeleteAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.DeleteAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

type AssistantServiceUpdateAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_knowledge_pb.UpdateAssistantKnowledgeRequest;
  readonly responseType: typeof assistant_knowledge_pb.GetAssistantKnowledgeResponse;
};

export class AssistantService {
  static readonly serviceName: string;
  static readonly GetAssistant: AssistantServiceGetAssistant;
  static readonly GetAllAssistant: AssistantServiceGetAllAssistant;
  static readonly CreateAssistant: AssistantServiceCreateAssistant;
  static readonly DeleteAssistant: AssistantServiceDeleteAssistant;
  static readonly GetAllAssistantProvider: AssistantServiceGetAllAssistantProvider;
  static readonly CreateAssistantProvider: AssistantServiceCreateAssistantProvider;
  static readonly CreateAssistantTag: AssistantServiceCreateAssistantTag;
  static readonly UpdateAssistantVersion: AssistantServiceUpdateAssistantVersion;
  static readonly UpdateAssistantDetail: AssistantServiceUpdateAssistantDetail;
  static readonly GetAllAssistantMessage: AssistantServiceGetAllAssistantMessage;
  static readonly GetAllConversationMessage: AssistantServiceGetAllConversationMessage;
  static readonly GetAllMessage: AssistantServiceGetAllMessage;
  static readonly GetAssistantConfiguration: AssistantServiceGetAssistantConfiguration;
  static readonly GetAllAssistantConfiguration: AssistantServiceGetAllAssistantConfiguration;
  static readonly CreateAssistantConfiguration: AssistantServiceCreateAssistantConfiguration;
  static readonly UpdateAssistantConfiguration: AssistantServiceUpdateAssistantConfiguration;
  static readonly DeleteAssistantConfiguration: AssistantServiceDeleteAssistantConfiguration;
  static readonly GetAllAssistantConversation: AssistantServiceGetAllAssistantConversation;
  static readonly GetAssistantConversation: AssistantServiceGetAssistantConversation;
  static readonly GetAssistantHTTPLog: AssistantServiceGetAssistantHTTPLog;
  static readonly GetAllAssistantHTTPLog: AssistantServiceGetAllAssistantHTTPLog;
  static readonly RetryAssistantHTTPLog: AssistantServiceRetryAssistantHTTPLog;
  static readonly GetAssistantToolLog: AssistantServiceGetAssistantToolLog;
  static readonly GetAllAssistantToolLog: AssistantServiceGetAllAssistantToolLog;
  static readonly CreateAssistantTool: AssistantServiceCreateAssistantTool;
  static readonly GetAssistantTool: AssistantServiceGetAssistantTool;
  static readonly GetAllAssistantTool: AssistantServiceGetAllAssistantTool;
  static readonly DeleteAssistantTool: AssistantServiceDeleteAssistantTool;
  static readonly UpdateAssistantTool: AssistantServiceUpdateAssistantTool;
  static readonly CreateAssistantKnowledge: AssistantServiceCreateAssistantKnowledge;
  static readonly GetAssistantKnowledge: AssistantServiceGetAssistantKnowledge;
  static readonly GetAllAssistantKnowledge: AssistantServiceGetAllAssistantKnowledge;
  static readonly DeleteAssistantKnowledge: AssistantServiceDeleteAssistantKnowledge;
  static readonly UpdateAssistantKnowledge: AssistantServiceUpdateAssistantKnowledge;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AssistantServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAssistant(
    requestMessage: assistant_api_pb.GetAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAssistant(
    requestMessage: assistant_api_pb.GetAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistant(
    requestMessage: assistant_api_pb.GetAllAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistant(
    requestMessage: assistant_api_pb.GetAllAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistant(
    requestMessage: assistant_api_pb.CreateAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistant(
    requestMessage: assistant_api_pb.CreateAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  deleteAssistant(
    requestMessage: assistant_api_pb.DeleteAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  deleteAssistant(
    requestMessage: assistant_api_pb.DeleteAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistantProvider(
    requestMessage: assistant_provider_pb.GetAllAssistantProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAllAssistantProviderResponse|null) => void
  ): UnaryResponse;
  getAllAssistantProvider(
    requestMessage: assistant_provider_pb.GetAllAssistantProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAllAssistantProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantProvider(
    requestMessage: assistant_provider_pb.CreateAssistantProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAssistantProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantProvider(
    requestMessage: assistant_provider_pb.CreateAssistantProviderRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_provider_pb.GetAssistantProviderResponse|null) => void
  ): UnaryResponse;
  createAssistantTag(
    requestMessage: assistant_api_pb.CreateAssistantTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistantTag(
    requestMessage: assistant_api_pb.CreateAssistantTagRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantVersion(
    requestMessage: assistant_provider_pb.UpdateAssistantVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantVersion(
    requestMessage: assistant_provider_pb.UpdateAssistantVersionRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantDetail(
    requestMessage: assistant_api_pb.UpdateAssistantDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantDetail(
    requestMessage: assistant_api_pb.UpdateAssistantDetailRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistantMessage(
    requestMessage: assistant_api_pb.GetAllAssistantMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantMessageResponse|null) => void
  ): UnaryResponse;
  getAllAssistantMessage(
    requestMessage: assistant_api_pb.GetAllAssistantMessageRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantMessageResponse|null) => void
  ): UnaryResponse;
  getAllConversationMessage(
    requestMessage: common_pb.GetAllConversationMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllConversationMessageResponse|null) => void
  ): UnaryResponse;
  getAllConversationMessage(
    requestMessage: common_pb.GetAllConversationMessageRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllConversationMessageResponse|null) => void
  ): UnaryResponse;
  getAllMessage(
    requestMessage: assistant_api_pb.GetAllMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllMessageResponse|null) => void
  ): UnaryResponse;
  getAllMessage(
    requestMessage: assistant_api_pb.GetAllMessageRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllMessageResponse|null) => void
  ): UnaryResponse;
  getAssistantConfiguration(
    requestMessage: assistant_api_pb.GetAssistantConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  getAssistantConfiguration(
    requestMessage: assistant_api_pb.GetAssistantConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConfiguration(
    requestMessage: assistant_api_pb.GetAllAssistantConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConfiguration(
    requestMessage: assistant_api_pb.GetAllAssistantConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  createAssistantConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  createAssistantConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  updateAssistantConfiguration(
    requestMessage: assistant_api_pb.UpdateAssistantConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  updateAssistantConfiguration(
    requestMessage: assistant_api_pb.UpdateAssistantConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteAssistantConfiguration(
    requestMessage: assistant_api_pb.DeleteAssistantConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteAssistantConfiguration(
    requestMessage: assistant_api_pb.DeleteAssistantConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConfigurationResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAssistantConversation(
    requestMessage: assistant_api_pb.GetAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAssistantConversation(
    requestMessage: assistant_api_pb.GetAssistantConversationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAssistantHTTPLog(
    requestMessage: assistant_http_log_pb.GetAssistantHTTPLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_http_log_pb.GetAssistantHTTPLogResponse|null) => void
  ): UnaryResponse;
  getAssistantHTTPLog(
    requestMessage: assistant_http_log_pb.GetAssistantHTTPLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_http_log_pb.GetAssistantHTTPLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantHTTPLog(
    requestMessage: assistant_http_log_pb.GetAllAssistantHTTPLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_http_log_pb.GetAllAssistantHTTPLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantHTTPLog(
    requestMessage: assistant_http_log_pb.GetAllAssistantHTTPLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_http_log_pb.GetAllAssistantHTTPLogResponse|null) => void
  ): UnaryResponse;
  retryAssistantHTTPLog(
    requestMessage: assistant_http_log_pb.RetryAssistantHTTPLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_http_log_pb.GetAssistantHTTPLogResponse|null) => void
  ): UnaryResponse;
  retryAssistantHTTPLog(
    requestMessage: assistant_http_log_pb.RetryAssistantHTTPLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_http_log_pb.GetAssistantHTTPLogResponse|null) => void
  ): UnaryResponse;
  getAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAssistantToolLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  getAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAssistantToolLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAllAssistantToolLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantToolLog(
    requestMessage: assistant_tool_pb.GetAllAssistantToolLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolLogResponse|null) => void
  ): UnaryResponse;
  createAssistantTool(
    requestMessage: assistant_tool_pb.CreateAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  createAssistantTool(
    requestMessage: assistant_tool_pb.CreateAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAssistantTool(
    requestMessage: assistant_tool_pb.GetAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAssistantTool(
    requestMessage: assistant_tool_pb.GetAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTool(
    requestMessage: assistant_tool_pb.GetAllAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTool(
    requestMessage: assistant_tool_pb.GetAllAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAllAssistantToolResponse|null) => void
  ): UnaryResponse;
  deleteAssistantTool(
    requestMessage: assistant_tool_pb.DeleteAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  deleteAssistantTool(
    requestMessage: assistant_tool_pb.DeleteAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  updateAssistantTool(
    requestMessage: assistant_tool_pb.UpdateAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  updateAssistantTool(
    requestMessage: assistant_tool_pb.UpdateAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_tool_pb.GetAssistantToolResponse|null) => void
  ): UnaryResponse;
  createAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.CreateAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  createAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.CreateAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAllAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  getAllAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAllAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  deleteAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.DeleteAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  deleteAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.DeleteAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  updateAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.UpdateAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
  updateAssistantKnowledge(
    requestMessage: assistant_knowledge_pb.UpdateAssistantKnowledgeRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_knowledge_pb.GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse;
}

