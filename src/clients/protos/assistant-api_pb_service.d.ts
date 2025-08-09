// package: assistant_api
// file: assistant-api.proto

import * as assistant_api_pb from "./assistant-api_pb";
import * as common_pb from "./common_pb";
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

type AssistantServiceGetAllAssistantProviderModel = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantProviderModelRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantProviderModelResponse;
};

type AssistantServiceCreateAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceCreateAssistantProviderModel = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantProviderModelRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantProviderModelResponse;
};

type AssistantServiceCreateAssistantKnowledgeConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
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
  readonly requestType: typeof assistant_api_pb.UpdateAssistantVersionRequest;
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

type AssistantServiceGetAllAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllAssistantConversationRequest;
  readonly responseType: typeof common_pb.GetAllAssistantConversationResponse;
};

type AssistantServiceGetAllConversationMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.GetAllConversationMessageRequest;
  readonly responseType: typeof common_pb.GetAllConversationMessageResponse;
};

type AssistantServiceCreateAssistantToolConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantToolConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAllAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantToolRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantToolResponse;
};

type AssistantServiceGetAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantConversationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantConversationResponse;
};

type AssistantServiceDeleteAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.DeleteAssistantRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceGetAssistantWebhookLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantWebhookLogRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantWebhookLogResponse;
};

type AssistantServiceGetAllAssistantWebhookLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantWebhookLogRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantWebhookLogResponse;
};

type AssistantServiceGetAllAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantWebhookRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantWebhookResponse;
};

type AssistantServiceGetAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantWebhookRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantWebhookResponse;
};

type AssistantServiceCreateAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantWebhookRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantWebhookResponse;
};

type AssistantServiceUpdateAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.UpdateAssistantWebhookRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantWebhookResponse;
};

type AssistantServiceDeleteAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.DeleteAssistantWebhookRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantWebhookResponse;
};

type AssistantServiceGetAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantAnalysisRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceUpdateAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.UpdateAssistantAnalysisRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceCreateAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantAnalysisRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceDeleteAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.DeleteAssistantAnalysisRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantAnalysisResponse;
};

type AssistantServiceGetAllAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantAnalysisRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantAnalysisResponse;
};

export class AssistantService {
  static readonly serviceName: string;
  static readonly GetAssistant: AssistantServiceGetAssistant;
  static readonly GetAllAssistant: AssistantServiceGetAllAssistant;
  static readonly GetAllAssistantProviderModel: AssistantServiceGetAllAssistantProviderModel;
  static readonly CreateAssistant: AssistantServiceCreateAssistant;
  static readonly CreateAssistantProviderModel: AssistantServiceCreateAssistantProviderModel;
  static readonly CreateAssistantKnowledgeConfiguration: AssistantServiceCreateAssistantKnowledgeConfiguration;
  static readonly CreateAssistantTag: AssistantServiceCreateAssistantTag;
  static readonly UpdateAssistantVersion: AssistantServiceUpdateAssistantVersion;
  static readonly UpdateAssistantDetail: AssistantServiceUpdateAssistantDetail;
  static readonly GetAllAssistantMessage: AssistantServiceGetAllAssistantMessage;
  static readonly GetAllAssistantConversation: AssistantServiceGetAllAssistantConversation;
  static readonly GetAllConversationMessage: AssistantServiceGetAllConversationMessage;
  static readonly CreateAssistantToolConfiguration: AssistantServiceCreateAssistantToolConfiguration;
  static readonly GetAllAssistantTool: AssistantServiceGetAllAssistantTool;
  static readonly GetAssistantConversation: AssistantServiceGetAssistantConversation;
  static readonly DeleteAssistant: AssistantServiceDeleteAssistant;
  static readonly GetAssistantWebhookLog: AssistantServiceGetAssistantWebhookLog;
  static readonly GetAllAssistantWebhookLog: AssistantServiceGetAllAssistantWebhookLog;
  static readonly GetAllAssistantWebhook: AssistantServiceGetAllAssistantWebhook;
  static readonly GetAssistantWebhook: AssistantServiceGetAssistantWebhook;
  static readonly CreateAssistantWebhook: AssistantServiceCreateAssistantWebhook;
  static readonly UpdateAssistantWebhook: AssistantServiceUpdateAssistantWebhook;
  static readonly DeleteAssistantWebhook: AssistantServiceDeleteAssistantWebhook;
  static readonly GetAssistantAnalysis: AssistantServiceGetAssistantAnalysis;
  static readonly UpdateAssistantAnalysis: AssistantServiceUpdateAssistantAnalysis;
  static readonly CreateAssistantAnalysis: AssistantServiceCreateAssistantAnalysis;
  static readonly DeleteAssistantAnalysis: AssistantServiceDeleteAssistantAnalysis;
  static readonly GetAllAssistantAnalysis: AssistantServiceGetAllAssistantAnalysis;
}

type ToolServiceGetAllTool = {
  readonly methodName: string;
  readonly service: typeof ToolService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllToolRequest;
  readonly responseType: typeof assistant_api_pb.GetAllToolResponse;
};

type ToolServiceGetTool = {
  readonly methodName: string;
  readonly service: typeof ToolService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetToolRequest;
  readonly responseType: typeof assistant_api_pb.GetToolResponse;
};

export class ToolService {
  static readonly serviceName: string;
  static readonly GetAllTool: ToolServiceGetAllTool;
  static readonly GetTool: ToolServiceGetTool;
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
  getAllAssistantProviderModel(
    requestMessage: assistant_api_pb.GetAllAssistantProviderModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantProviderModelResponse|null) => void
  ): UnaryResponse;
  getAllAssistantProviderModel(
    requestMessage: assistant_api_pb.GetAllAssistantProviderModelRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantProviderModelResponse|null) => void
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
  createAssistantProviderModel(
    requestMessage: assistant_api_pb.CreateAssistantProviderModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantProviderModelResponse|null) => void
  ): UnaryResponse;
  createAssistantProviderModel(
    requestMessage: assistant_api_pb.CreateAssistantProviderModelRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantProviderModelResponse|null) => void
  ): UnaryResponse;
  createAssistantKnowledgeConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistantKnowledgeConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
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
    requestMessage: assistant_api_pb.UpdateAssistantVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  updateAssistantVersion(
    requestMessage: assistant_api_pb.UpdateAssistantVersionRequest,
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
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse;
  getAllAssistantConversation(
    requestMessage: common_pb.GetAllAssistantConversationRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.GetAllAssistantConversationResponse|null) => void
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
  createAssistantToolConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantToolConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistantToolConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantToolConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTool(
    requestMessage: assistant_api_pb.GetAllAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantToolResponse|null) => void
  ): UnaryResponse;
  getAllAssistantTool(
    requestMessage: assistant_api_pb.GetAllAssistantToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantToolResponse|null) => void
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
  deleteAssistant(
    requestMessage: assistant_api_pb.DeleteAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  deleteAssistant(
    requestMessage: assistant_api_pb.DeleteAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhookLog(
    requestMessage: assistant_api_pb.GetAssistantWebhookLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhookLog(
    requestMessage: assistant_api_pb.GetAssistantWebhookLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhookLog(
    requestMessage: assistant_api_pb.GetAllAssistantWebhookLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhookLog(
    requestMessage: assistant_api_pb.GetAllAssistantWebhookLogRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantWebhookLogResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhook(
    requestMessage: assistant_api_pb.GetAllAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAllAssistantWebhook(
    requestMessage: assistant_api_pb.GetAllAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhook(
    requestMessage: assistant_api_pb.GetAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAssistantWebhook(
    requestMessage: assistant_api_pb.GetAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  createAssistantWebhook(
    requestMessage: assistant_api_pb.CreateAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  createAssistantWebhook(
    requestMessage: assistant_api_pb.CreateAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  updateAssistantWebhook(
    requestMessage: assistant_api_pb.UpdateAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  updateAssistantWebhook(
    requestMessage: assistant_api_pb.UpdateAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  deleteAssistantWebhook(
    requestMessage: assistant_api_pb.DeleteAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  deleteAssistantWebhook(
    requestMessage: assistant_api_pb.DeleteAssistantWebhookRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantWebhookResponse|null) => void
  ): UnaryResponse;
  getAssistantAnalysis(
    requestMessage: assistant_api_pb.GetAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  getAssistantAnalysis(
    requestMessage: assistant_api_pb.GetAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  updateAssistantAnalysis(
    requestMessage: assistant_api_pb.UpdateAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  updateAssistantAnalysis(
    requestMessage: assistant_api_pb.UpdateAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  createAssistantAnalysis(
    requestMessage: assistant_api_pb.CreateAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  createAssistantAnalysis(
    requestMessage: assistant_api_pb.CreateAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  deleteAssistantAnalysis(
    requestMessage: assistant_api_pb.DeleteAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  deleteAssistantAnalysis(
    requestMessage: assistant_api_pb.DeleteAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  getAllAssistantAnalysis(
    requestMessage: assistant_api_pb.GetAllAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
  getAllAssistantAnalysis(
    requestMessage: assistant_api_pb.GetAllAssistantAnalysisRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantAnalysisResponse|null) => void
  ): UnaryResponse;
}

export class ToolServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllTool(
    requestMessage: assistant_api_pb.GetAllToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllToolResponse|null) => void
  ): UnaryResponse;
  getAllTool(
    requestMessage: assistant_api_pb.GetAllToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllToolResponse|null) => void
  ): UnaryResponse;
  getTool(
    requestMessage: assistant_api_pb.GetToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetToolResponse|null) => void
  ): UnaryResponse;
  getTool(
    requestMessage: assistant_api_pb.GetToolRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetToolResponse|null) => void
  ): UnaryResponse;
}

