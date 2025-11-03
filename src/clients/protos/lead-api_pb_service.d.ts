// package: lead_api
// file: lead-api.proto

import * as lead_api_pb from "./lead-api_pb";
import * as common_pb from "./common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LeadGeneratorServiceCreateLead = {
  readonly methodName: string;
  readonly service: typeof LeadGeneratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lead_api_pb.CreateLeadRequest;
  readonly responseType: typeof common_pb.BaseResponse;
};

export class LeadGeneratorService {
  static readonly serviceName: string;
  static readonly CreateLead: LeadGeneratorServiceCreateLead;
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

export class LeadGeneratorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createLead(
    requestMessage: lead_api_pb.CreateLeadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
  createLead(
    requestMessage: lead_api_pb.CreateLeadRequest,
    callback: (error: ServiceError|null, responseMessage: common_pb.BaseResponse|null) => void
  ): UnaryResponse;
}

