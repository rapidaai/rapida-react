// package: billing_api
// file: billing-api.proto

import * as billing_api_pb from "./billing-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceGetAllPlans = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof billing_api_pb.GetAllPlansRequest;
  readonly responseType: typeof billing_api_pb.GetAllPlansResponse;
};

type BillingServiceGetSubscription = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof billing_api_pb.GetSubscriptionRequest;
  readonly responseType: typeof billing_api_pb.GetSubscriptionResponse;
};

type BillingServiceUpdateSubscription = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof billing_api_pb.UpdateSubscriptionRequest;
  readonly responseType: typeof billing_api_pb.UpdateSubscriptionResponse;
};

export class BillingService {
  static readonly serviceName: string;
  static readonly GetAllPlans: BillingServiceGetAllPlans;
  static readonly GetSubscription: BillingServiceGetSubscription;
  static readonly UpdateSubscription: BillingServiceUpdateSubscription;
}

type ProductUsageServiceCreateProductUsage = {
  readonly methodName: string;
  readonly service: typeof ProductUsageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof billing_api_pb.CreateProductUsageRequest;
  readonly responseType: typeof billing_api_pb.GetProductUsageResponse;
};

type ProductUsageServiceGetProductUsages = {
  readonly methodName: string;
  readonly service: typeof ProductUsageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof billing_api_pb.GetProductUsagesRequest;
  readonly responseType: typeof billing_api_pb.GetUsagesResponse;
};

type ProductUsageServiceGetOrganizationUsages = {
  readonly methodName: string;
  readonly service: typeof ProductUsageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof billing_api_pb.GetOrganizationUsagesRequest;
  readonly responseType: typeof billing_api_pb.GetUsagesResponse;
};

export class ProductUsageService {
  static readonly serviceName: string;
  static readonly CreateProductUsage: ProductUsageServiceCreateProductUsage;
  static readonly GetProductUsages: ProductUsageServiceGetProductUsages;
  static readonly GetOrganizationUsages: ProductUsageServiceGetOrganizationUsages;
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

export class BillingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllPlans(
    requestMessage: billing_api_pb.GetAllPlansRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetAllPlansResponse|null) => void
  ): UnaryResponse;
  getAllPlans(
    requestMessage: billing_api_pb.GetAllPlansRequest,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetAllPlansResponse|null) => void
  ): UnaryResponse;
  getSubscription(
    requestMessage: billing_api_pb.GetSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetSubscriptionResponse|null) => void
  ): UnaryResponse;
  getSubscription(
    requestMessage: billing_api_pb.GetSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateSubscription(
    requestMessage: billing_api_pb.UpdateSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.UpdateSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateSubscription(
    requestMessage: billing_api_pb.UpdateSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.UpdateSubscriptionResponse|null) => void
  ): UnaryResponse;
}

export class ProductUsageServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createProductUsage(
    requestMessage: billing_api_pb.CreateProductUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetProductUsageResponse|null) => void
  ): UnaryResponse;
  createProductUsage(
    requestMessage: billing_api_pb.CreateProductUsageRequest,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetProductUsageResponse|null) => void
  ): UnaryResponse;
  getProductUsages(
    requestMessage: billing_api_pb.GetProductUsagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetUsagesResponse|null) => void
  ): UnaryResponse;
  getProductUsages(
    requestMessage: billing_api_pb.GetProductUsagesRequest,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetUsagesResponse|null) => void
  ): UnaryResponse;
  getOrganizationUsages(
    requestMessage: billing_api_pb.GetOrganizationUsagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetUsagesResponse|null) => void
  ): UnaryResponse;
  getOrganizationUsages(
    requestMessage: billing_api_pb.GetOrganizationUsagesRequest,
    callback: (error: ServiceError|null, responseMessage: billing_api_pb.GetUsagesResponse|null) => void
  ): UnaryResponse;
}

