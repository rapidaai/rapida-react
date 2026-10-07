// package: dashboard_api
// file: dashboard-api.proto

import * as dashboard_api_pb from "./dashboard-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DashboardServiceGetProjectDashboard = {
  readonly methodName: string;
  readonly service: typeof DashboardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dashboard_api_pb.GetProjectDashboardRequest;
  readonly responseType: typeof dashboard_api_pb.GetProjectDashboardResponse;
};

export class DashboardService {
  static readonly serviceName: string;
  static readonly GetProjectDashboard: DashboardServiceGetProjectDashboard;
}

type ProjectDashboardAnalyticsServiceGetProjectDashboardAnalytics = {
  readonly methodName: string;
  readonly service: typeof ProjectDashboardAnalyticsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dashboard_api_pb.GetProjectDashboardAnalyticsRequest;
  readonly responseType: typeof dashboard_api_pb.GetProjectDashboardAnalyticsResponse;
};

export class ProjectDashboardAnalyticsService {
  static readonly serviceName: string;
  static readonly GetProjectDashboardAnalytics: ProjectDashboardAnalyticsServiceGetProjectDashboardAnalytics;
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

export class DashboardServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getProjectDashboard(
    requestMessage: dashboard_api_pb.GetProjectDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dashboard_api_pb.GetProjectDashboardResponse|null) => void
  ): UnaryResponse;
  getProjectDashboard(
    requestMessage: dashboard_api_pb.GetProjectDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: dashboard_api_pb.GetProjectDashboardResponse|null) => void
  ): UnaryResponse;
}

export class ProjectDashboardAnalyticsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getProjectDashboardAnalytics(
    requestMessage: dashboard_api_pb.GetProjectDashboardAnalyticsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dashboard_api_pb.GetProjectDashboardAnalyticsResponse|null) => void
  ): UnaryResponse;
  getProjectDashboardAnalytics(
    requestMessage: dashboard_api_pb.GetProjectDashboardAnalyticsRequest,
    callback: (error: ServiceError|null, responseMessage: dashboard_api_pb.GetProjectDashboardAnalyticsResponse|null) => void
  ): UnaryResponse;
}

