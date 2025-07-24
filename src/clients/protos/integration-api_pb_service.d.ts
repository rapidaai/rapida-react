// package: integration_api
// file: integration-api.proto

import * as integration_api_pb from "./integration-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BedrockServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof BedrockService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.EmbeddingRequest;
  readonly responseType: typeof integration_api_pb.EmbeddingResponse;
};

type BedrockServiceChat = {
  readonly methodName: string;
  readonly service: typeof BedrockService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type BedrockServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof BedrockService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class BedrockService {
  static readonly serviceName: string;
  static readonly Embedding: BedrockServiceEmbedding;
  static readonly Chat: BedrockServiceChat;
  static readonly VerifyCredential: BedrockServiceVerifyCredential;
}

type OpenAiServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof OpenAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.EmbeddingRequest;
  readonly responseType: typeof integration_api_pb.EmbeddingResponse;
};

type OpenAiServiceChat = {
  readonly methodName: string;
  readonly service: typeof OpenAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type OpenAiServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof OpenAiService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type OpenAiServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof OpenAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

type OpenAiServiceGetModeration = {
  readonly methodName: string;
  readonly service: typeof OpenAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.GetModerationRequest;
  readonly responseType: typeof integration_api_pb.GetModerationResponse;
};

export class OpenAiService {
  static readonly serviceName: string;
  static readonly Embedding: OpenAiServiceEmbedding;
  static readonly Chat: OpenAiServiceChat;
  static readonly StreamChat: OpenAiServiceStreamChat;
  static readonly VerifyCredential: OpenAiServiceVerifyCredential;
  static readonly GetModeration: OpenAiServiceGetModeration;
}

type AzureServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof AzureService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.EmbeddingRequest;
  readonly responseType: typeof integration_api_pb.EmbeddingResponse;
};

type AzureServiceChat = {
  readonly methodName: string;
  readonly service: typeof AzureService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type AzureServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof AzureService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type AzureServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof AzureService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

type AzureServiceGetModeration = {
  readonly methodName: string;
  readonly service: typeof AzureService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.GetModerationRequest;
  readonly responseType: typeof integration_api_pb.GetModerationResponse;
};

export class AzureService {
  static readonly serviceName: string;
  static readonly Embedding: AzureServiceEmbedding;
  static readonly Chat: AzureServiceChat;
  static readonly StreamChat: AzureServiceStreamChat;
  static readonly VerifyCredential: AzureServiceVerifyCredential;
  static readonly GetModeration: AzureServiceGetModeration;
}

type GoogleServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof GoogleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.EmbeddingRequest;
  readonly responseType: typeof integration_api_pb.EmbeddingResponse;
};

type GoogleServiceChat = {
  readonly methodName: string;
  readonly service: typeof GoogleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type GoogleServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof GoogleService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type GoogleServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof GoogleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class GoogleService {
  static readonly serviceName: string;
  static readonly Embedding: GoogleServiceEmbedding;
  static readonly Chat: GoogleServiceChat;
  static readonly StreamChat: GoogleServiceStreamChat;
  static readonly VerifyCredential: GoogleServiceVerifyCredential;
}

type ReplicateServiceChat = {
  readonly methodName: string;
  readonly service: typeof ReplicateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type ReplicateServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof ReplicateService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type ReplicateServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof ReplicateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class ReplicateService {
  static readonly serviceName: string;
  static readonly Chat: ReplicateServiceChat;
  static readonly StreamChat: ReplicateServiceStreamChat;
  static readonly VerifyCredential: ReplicateServiceVerifyCredential;
}

type AnthropicServiceChat = {
  readonly methodName: string;
  readonly service: typeof AnthropicService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type AnthropicServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof AnthropicService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type AnthropicServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof AnthropicService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class AnthropicService {
  static readonly serviceName: string;
  static readonly Chat: AnthropicServiceChat;
  static readonly StreamChat: AnthropicServiceStreamChat;
  static readonly VerifyCredential: AnthropicServiceVerifyCredential;
}

type CohereServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof CohereService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.EmbeddingRequest;
  readonly responseType: typeof integration_api_pb.EmbeddingResponse;
};

type CohereServiceReranking = {
  readonly methodName: string;
  readonly service: typeof CohereService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.RerankingRequest;
  readonly responseType: typeof integration_api_pb.RerankingResponse;
};

type CohereServiceChat = {
  readonly methodName: string;
  readonly service: typeof CohereService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type CohereServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof CohereService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type CohereServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof CohereService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class CohereService {
  static readonly serviceName: string;
  static readonly Embedding: CohereServiceEmbedding;
  static readonly Reranking: CohereServiceReranking;
  static readonly Chat: CohereServiceChat;
  static readonly StreamChat: CohereServiceStreamChat;
  static readonly VerifyCredential: CohereServiceVerifyCredential;
}

type HuggingfaceServiceChat = {
  readonly methodName: string;
  readonly service: typeof HuggingfaceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type HuggingfaceServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof HuggingfaceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class HuggingfaceService {
  static readonly serviceName: string;
  static readonly Chat: HuggingfaceServiceChat;
  static readonly VerifyCredential: HuggingfaceServiceVerifyCredential;
}

type MistralServiceChat = {
  readonly methodName: string;
  readonly service: typeof MistralService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type MistralServiceStreamChat = {
  readonly methodName: string;
  readonly service: typeof MistralService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type MistralServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof MistralService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class MistralService {
  static readonly serviceName: string;
  static readonly Chat: MistralServiceChat;
  static readonly StreamChat: MistralServiceStreamChat;
  static readonly VerifyCredential: MistralServiceVerifyCredential;
}

type StabilityAiServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof StabilityAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class StabilityAiService {
  static readonly serviceName: string;
  static readonly VerifyCredential: StabilityAiServiceVerifyCredential;
}

type TogetherAiServiceChat = {
  readonly methodName: string;
  readonly service: typeof TogetherAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.ChatRequest;
  readonly responseType: typeof integration_api_pb.ChatResponse;
};

type TogetherAiServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof TogetherAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class TogetherAiService {
  static readonly serviceName: string;
  static readonly Chat: TogetherAiServiceChat;
  static readonly VerifyCredential: TogetherAiServiceVerifyCredential;
}

type DeepInfraServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof DeepInfraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class DeepInfraService {
  static readonly serviceName: string;
  static readonly VerifyCredential: DeepInfraServiceVerifyCredential;
}

type VoyageAiServiceEmbedding = {
  readonly methodName: string;
  readonly service: typeof VoyageAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.EmbeddingRequest;
  readonly responseType: typeof integration_api_pb.EmbeddingResponse;
};

type VoyageAiServiceReranking = {
  readonly methodName: string;
  readonly service: typeof VoyageAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.RerankingRequest;
  readonly responseType: typeof integration_api_pb.RerankingResponse;
};

type VoyageAiServiceVerifyCredential = {
  readonly methodName: string;
  readonly service: typeof VoyageAiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof integration_api_pb.VerifyCredentialRequest;
  readonly responseType: typeof integration_api_pb.VerifyCredentialResponse;
};

export class VoyageAiService {
  static readonly serviceName: string;
  static readonly Embedding: VoyageAiServiceEmbedding;
  static readonly Reranking: VoyageAiServiceReranking;
  static readonly VerifyCredential: VoyageAiServiceVerifyCredential;
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

export class BedrockServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class OpenAiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(requestMessage: integration_api_pb.ChatRequest, metadata?: grpc.Metadata): ResponseStream<integration_api_pb.ChatResponse>;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  getModeration(
    requestMessage: integration_api_pb.GetModerationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.GetModerationResponse|null) => void
  ): UnaryResponse;
  getModeration(
    requestMessage: integration_api_pb.GetModerationRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.GetModerationResponse|null) => void
  ): UnaryResponse;
}

export class AzureServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(requestMessage: integration_api_pb.ChatRequest, metadata?: grpc.Metadata): ResponseStream<integration_api_pb.ChatResponse>;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  getModeration(
    requestMessage: integration_api_pb.GetModerationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.GetModerationResponse|null) => void
  ): UnaryResponse;
  getModeration(
    requestMessage: integration_api_pb.GetModerationRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.GetModerationResponse|null) => void
  ): UnaryResponse;
}

export class GoogleServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(requestMessage: integration_api_pb.ChatRequest, metadata?: grpc.Metadata): ResponseStream<integration_api_pb.ChatResponse>;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class ReplicateServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(requestMessage: integration_api_pb.ChatRequest, metadata?: grpc.Metadata): ResponseStream<integration_api_pb.ChatResponse>;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class AnthropicServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(requestMessage: integration_api_pb.ChatRequest, metadata?: grpc.Metadata): ResponseStream<integration_api_pb.ChatResponse>;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class CohereServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  reranking(
    requestMessage: integration_api_pb.RerankingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.RerankingResponse|null) => void
  ): UnaryResponse;
  reranking(
    requestMessage: integration_api_pb.RerankingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.RerankingResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(requestMessage: integration_api_pb.ChatRequest, metadata?: grpc.Metadata): ResponseStream<integration_api_pb.ChatResponse>;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class HuggingfaceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class MistralServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  streamChat(requestMessage: integration_api_pb.ChatRequest, metadata?: grpc.Metadata): ResponseStream<integration_api_pb.ChatResponse>;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class StabilityAiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class TogetherAiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: integration_api_pb.ChatRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.ChatResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class DeepInfraServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

export class VoyageAiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  embedding(
    requestMessage: integration_api_pb.EmbeddingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.EmbeddingResponse|null) => void
  ): UnaryResponse;
  reranking(
    requestMessage: integration_api_pb.RerankingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.RerankingResponse|null) => void
  ): UnaryResponse;
  reranking(
    requestMessage: integration_api_pb.RerankingRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.RerankingResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
  verifyCredential(
    requestMessage: integration_api_pb.VerifyCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: integration_api_pb.VerifyCredentialResponse|null) => void
  ): UnaryResponse;
}

