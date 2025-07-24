// package: vault_api
// file: vault-api.proto

import * as vault_api_pb from "./vault-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VaultServiceCreateProviderCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.CreateProviderCredentialRequest;
  readonly responseType: typeof vault_api_pb.CreateProviderCredentialResponse;
};

type VaultServiceCreateToolCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.CreateToolCredentialRequest;
  readonly responseType: typeof vault_api_pb.CreateToolCredentialResponse;
};

type VaultServiceDeleteProviderCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.DeleteProviderCredentialRequest;
  readonly responseType: typeof vault_api_pb.DeleteProviderCredentialResponse;
};

type VaultServiceGetAllOrganizationCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.GetAllOrganizationCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetAllOrganizationCredentialResponse;
};

type VaultServiceGetProviderCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.GetProviderCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetProviderCredentialResponse;
};

type VaultServiceGetOauth2VaultCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof vault_api_pb.GetOauth2VaultCredentialRequest;
  readonly responseType: typeof vault_api_pb.GetOauth2VaultCredentialResponse;
};

export class VaultService {
  static readonly serviceName: string;
  static readonly CreateProviderCredential: VaultServiceCreateProviderCredential;
  static readonly CreateToolCredential: VaultServiceCreateToolCredential;
  static readonly DeleteProviderCredential: VaultServiceDeleteProviderCredential;
  static readonly GetAllOrganizationCredential: VaultServiceGetAllOrganizationCredential;
  static readonly GetProviderCredential: VaultServiceGetProviderCredential;
  static readonly GetOauth2VaultCredential: VaultServiceGetOauth2VaultCredential;
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

export class VaultServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createProviderCredential(
    requestMessage: vault_api_pb.CreateProviderCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.CreateProviderCredentialResponse|null) => void
  ): UnaryResponse;
  createProviderCredential(
    requestMessage: vault_api_pb.CreateProviderCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.CreateProviderCredentialResponse|null) => void
  ): UnaryResponse;
  createToolCredential(
    requestMessage: vault_api_pb.CreateToolCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.CreateToolCredentialResponse|null) => void
  ): UnaryResponse;
  createToolCredential(
    requestMessage: vault_api_pb.CreateToolCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.CreateToolCredentialResponse|null) => void
  ): UnaryResponse;
  deleteProviderCredential(
    requestMessage: vault_api_pb.DeleteProviderCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.DeleteProviderCredentialResponse|null) => void
  ): UnaryResponse;
  deleteProviderCredential(
    requestMessage: vault_api_pb.DeleteProviderCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.DeleteProviderCredentialResponse|null) => void
  ): UnaryResponse;
  getAllOrganizationCredential(
    requestMessage: vault_api_pb.GetAllOrganizationCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetAllOrganizationCredentialResponse|null) => void
  ): UnaryResponse;
  getAllOrganizationCredential(
    requestMessage: vault_api_pb.GetAllOrganizationCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetAllOrganizationCredentialResponse|null) => void
  ): UnaryResponse;
  getProviderCredential(
    requestMessage: vault_api_pb.GetProviderCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetProviderCredentialResponse|null) => void
  ): UnaryResponse;
  getProviderCredential(
    requestMessage: vault_api_pb.GetProviderCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetProviderCredentialResponse|null) => void
  ): UnaryResponse;
  getOauth2VaultCredential(
    requestMessage: vault_api_pb.GetOauth2VaultCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetOauth2VaultCredentialResponse|null) => void
  ): UnaryResponse;
  getOauth2VaultCredential(
    requestMessage: vault_api_pb.GetOauth2VaultCredentialRequest,
    callback: (error: ServiceError|null, responseMessage: vault_api_pb.GetOauth2VaultCredentialResponse|null) => void
  ): UnaryResponse;
}

