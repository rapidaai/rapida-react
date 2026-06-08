// package: observability_api
// file: observability-api.proto

import * as observability_api_pb from "./observability-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ObservabilityServiceGetAllTelemetry = {
  readonly methodName: string;
  readonly service: typeof ObservabilityService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof observability_api_pb.GetAllTelemetryRequest;
  readonly responseType: typeof observability_api_pb.GetAllTelemetryResponse;
};

export class ObservabilityService {
  static readonly serviceName: string;
  static readonly GetAllTelemetry: ObservabilityServiceGetAllTelemetry;
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

export class ObservabilityServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllTelemetry(
    requestMessage: observability_api_pb.GetAllTelemetryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: observability_api_pb.GetAllTelemetryResponse|null) => void
  ): UnaryResponse;
  getAllTelemetry(
    requestMessage: observability_api_pb.GetAllTelemetryRequest,
    callback: (error: ServiceError|null, responseMessage: observability_api_pb.GetAllTelemetryResponse|null) => void
  ): UnaryResponse;
}

