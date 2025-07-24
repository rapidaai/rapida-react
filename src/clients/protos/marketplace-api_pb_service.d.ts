// package: marketplace_api
// file: marketplace-api.proto

import * as marketplace_api_pb from "./marketplace-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MarketplaceServiceGetAllDeployment = {
  readonly methodName: string;
  readonly service: typeof MarketplaceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof marketplace_api_pb.GetAllDeploymentRequest;
  readonly responseType: typeof marketplace_api_pb.GetAllDeploymentResponse;
};

export class MarketplaceService {
  static readonly serviceName: string;
  static readonly GetAllDeployment: MarketplaceServiceGetAllDeployment;
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

export class MarketplaceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllDeployment(
    requestMessage: marketplace_api_pb.GetAllDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: marketplace_api_pb.GetAllDeploymentResponse|null) => void
  ): UnaryResponse;
  getAllDeployment(
    requestMessage: marketplace_api_pb.GetAllDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: marketplace_api_pb.GetAllDeploymentResponse|null) => void
  ): UnaryResponse;
}

