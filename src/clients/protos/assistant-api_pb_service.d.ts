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
  readonly responseType: typeof assistant_api_pb.CreateAssistantResponse;
};

type AssistantServiceCreateAssistantProviderModel = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantProviderModelRequest;
  readonly responseType: typeof assistant_api_pb.CreateAssistantProviderModelResponse;
};

type AssistantServiceCreateAssistantKnowledgeConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantResponse;
};

type AssistantServiceCreateAssistantToolConfiguration = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.CreateAssistantToolConfigurationRequest;
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
  readonly responseType: typeof assistant_api_pb.UpdateAssistantVersionResponse;
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

type AssistantServiceGetAssistantSkill = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAssistantSkillRequest;
  readonly responseType: typeof assistant_api_pb.GetAssistantSkillResponse;
};

type AssistantServiceGetAllAssistantSkill = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantSkillRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantSkillResponse;
};

type AssistantServiceGetAllAssistantEmbeddedSkill = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof assistant_api_pb.GetAllAssistantEmbeddedSkillRequest;
  readonly responseType: typeof assistant_api_pb.GetAllAssistantEmbeddedSkillResponse;
};

export class AssistantService {
  static readonly serviceName: string;
  static readonly GetAssistant: AssistantServiceGetAssistant;
  static readonly GetAllAssistant: AssistantServiceGetAllAssistant;
  static readonly GetAllAssistantProviderModel: AssistantServiceGetAllAssistantProviderModel;
  static readonly CreateAssistant: AssistantServiceCreateAssistant;
  static readonly CreateAssistantProviderModel: AssistantServiceCreateAssistantProviderModel;
  static readonly CreateAssistantKnowledgeConfiguration: AssistantServiceCreateAssistantKnowledgeConfiguration;
  static readonly CreateAssistantToolConfiguration: AssistantServiceCreateAssistantToolConfiguration;
  static readonly CreateAssistantTag: AssistantServiceCreateAssistantTag;
  static readonly UpdateAssistantVersion: AssistantServiceUpdateAssistantVersion;
  static readonly UpdateAssistantDetail: AssistantServiceUpdateAssistantDetail;
  static readonly GetAllAssistantMessage: AssistantServiceGetAllAssistantMessage;
  static readonly GetAllAssistantConversation: AssistantServiceGetAllAssistantConversation;
  static readonly GetAllConversationMessage: AssistantServiceGetAllConversationMessage;
  static readonly GetAssistantSkill: AssistantServiceGetAssistantSkill;
  static readonly GetAllAssistantSkill: AssistantServiceGetAllAssistantSkill;
  static readonly GetAllAssistantEmbeddedSkill: AssistantServiceGetAllAssistantEmbeddedSkill;
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
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.CreateAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistant(
    requestMessage: assistant_api_pb.CreateAssistantRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.CreateAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistantProviderModel(
    requestMessage: assistant_api_pb.CreateAssistantProviderModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.CreateAssistantProviderModelResponse|null) => void
  ): UnaryResponse;
  createAssistantProviderModel(
    requestMessage: assistant_api_pb.CreateAssistantProviderModelRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.CreateAssistantProviderModelResponse|null) => void
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
  createAssistantToolConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantToolConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantResponse|null) => void
  ): UnaryResponse;
  createAssistantToolConfiguration(
    requestMessage: assistant_api_pb.CreateAssistantToolConfigurationRequest,
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
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.UpdateAssistantVersionResponse|null) => void
  ): UnaryResponse;
  updateAssistantVersion(
    requestMessage: assistant_api_pb.UpdateAssistantVersionRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.UpdateAssistantVersionResponse|null) => void
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
  getAssistantSkill(
    requestMessage: assistant_api_pb.GetAssistantSkillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantSkillResponse|null) => void
  ): UnaryResponse;
  getAssistantSkill(
    requestMessage: assistant_api_pb.GetAssistantSkillRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAssistantSkillResponse|null) => void
  ): UnaryResponse;
  getAllAssistantSkill(
    requestMessage: assistant_api_pb.GetAllAssistantSkillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantSkillResponse|null) => void
  ): UnaryResponse;
  getAllAssistantSkill(
    requestMessage: assistant_api_pb.GetAllAssistantSkillRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantSkillResponse|null) => void
  ): UnaryResponse;
  getAllAssistantEmbeddedSkill(
    requestMessage: assistant_api_pb.GetAllAssistantEmbeddedSkillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantEmbeddedSkillResponse|null) => void
  ): UnaryResponse;
  getAllAssistantEmbeddedSkill(
    requestMessage: assistant_api_pb.GetAllAssistantEmbeddedSkillRequest,
    callback: (error: ServiceError|null, responseMessage: assistant_api_pb.GetAllAssistantEmbeddedSkillResponse|null) => void
  ): UnaryResponse;
}

