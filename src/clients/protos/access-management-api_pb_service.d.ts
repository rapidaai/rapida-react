// package: web_api
// file: access-management-api.proto

import * as access_management_api_pb from "./access-management-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AccessManagementServiceListPermissions = {
  readonly methodName: string;
  readonly service: typeof AccessManagementService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof access_management_api_pb.ListPermissionsRequest;
  readonly responseType: typeof access_management_api_pb.ListPermissionsResponse;
};

type AccessManagementServiceListRoles = {
  readonly methodName: string;
  readonly service: typeof AccessManagementService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof access_management_api_pb.ListRolesRequest;
  readonly responseType: typeof access_management_api_pb.ListRolesResponse;
};

type AccessManagementServiceGetRole = {
  readonly methodName: string;
  readonly service: typeof AccessManagementService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof access_management_api_pb.GetRoleRequest;
  readonly responseType: typeof access_management_api_pb.GetRoleResponse;
};

type AccessManagementServiceCreateCustomRole = {
  readonly methodName: string;
  readonly service: typeof AccessManagementService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof access_management_api_pb.CreateCustomRoleRequest;
  readonly responseType: typeof access_management_api_pb.CreateCustomRoleResponse;
};

type AccessManagementServiceUpdateCustomRole = {
  readonly methodName: string;
  readonly service: typeof AccessManagementService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof access_management_api_pb.UpdateCustomRoleRequest;
  readonly responseType: typeof access_management_api_pb.UpdateCustomRoleResponse;
};

type AccessManagementServiceReduceCustomRolePermissions = {
  readonly methodName: string;
  readonly service: typeof AccessManagementService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof access_management_api_pb.ReduceCustomRolePermissionsRequest;
  readonly responseType: typeof access_management_api_pb.ReduceCustomRolePermissionsResponse;
};

type AccessManagementServiceArchiveCustomRole = {
  readonly methodName: string;
  readonly service: typeof AccessManagementService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof access_management_api_pb.ArchiveCustomRoleRequest;
  readonly responseType: typeof access_management_api_pb.ArchiveCustomRoleResponse;
};

export class AccessManagementService {
  static readonly serviceName: string;
  static readonly ListPermissions: AccessManagementServiceListPermissions;
  static readonly ListRoles: AccessManagementServiceListRoles;
  static readonly GetRole: AccessManagementServiceGetRole;
  static readonly CreateCustomRole: AccessManagementServiceCreateCustomRole;
  static readonly UpdateCustomRole: AccessManagementServiceUpdateCustomRole;
  static readonly ReduceCustomRolePermissions: AccessManagementServiceReduceCustomRolePermissions;
  static readonly ArchiveCustomRole: AccessManagementServiceArchiveCustomRole;
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

export class AccessManagementServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listPermissions(
    requestMessage: access_management_api_pb.ListPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ListPermissionsResponse|null) => void
  ): UnaryResponse;
  listPermissions(
    requestMessage: access_management_api_pb.ListPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ListPermissionsResponse|null) => void
  ): UnaryResponse;
  listRoles(
    requestMessage: access_management_api_pb.ListRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ListRolesResponse|null) => void
  ): UnaryResponse;
  listRoles(
    requestMessage: access_management_api_pb.ListRolesRequest,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ListRolesResponse|null) => void
  ): UnaryResponse;
  getRole(
    requestMessage: access_management_api_pb.GetRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.GetRoleResponse|null) => void
  ): UnaryResponse;
  getRole(
    requestMessage: access_management_api_pb.GetRoleRequest,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.GetRoleResponse|null) => void
  ): UnaryResponse;
  createCustomRole(
    requestMessage: access_management_api_pb.CreateCustomRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.CreateCustomRoleResponse|null) => void
  ): UnaryResponse;
  createCustomRole(
    requestMessage: access_management_api_pb.CreateCustomRoleRequest,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.CreateCustomRoleResponse|null) => void
  ): UnaryResponse;
  updateCustomRole(
    requestMessage: access_management_api_pb.UpdateCustomRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.UpdateCustomRoleResponse|null) => void
  ): UnaryResponse;
  updateCustomRole(
    requestMessage: access_management_api_pb.UpdateCustomRoleRequest,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.UpdateCustomRoleResponse|null) => void
  ): UnaryResponse;
  reduceCustomRolePermissions(
    requestMessage: access_management_api_pb.ReduceCustomRolePermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ReduceCustomRolePermissionsResponse|null) => void
  ): UnaryResponse;
  reduceCustomRolePermissions(
    requestMessage: access_management_api_pb.ReduceCustomRolePermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ReduceCustomRolePermissionsResponse|null) => void
  ): UnaryResponse;
  archiveCustomRole(
    requestMessage: access_management_api_pb.ArchiveCustomRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ArchiveCustomRoleResponse|null) => void
  ): UnaryResponse;
  archiveCustomRole(
    requestMessage: access_management_api_pb.ArchiveCustomRoleRequest,
    callback: (error: ServiceError|null, responseMessage: access_management_api_pb.ArchiveCustomRoleResponse|null) => void
  ): UnaryResponse;
}

