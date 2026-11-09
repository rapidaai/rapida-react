// package: web_api
// file: access-management-api.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PermissionDefinition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getScope(): RoleScopeMap[keyof RoleScopeMap];
  setScope(value: RoleScopeMap[keyof RoleScopeMap]): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionDefinition): PermissionDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionDefinition;
  static deserializeBinaryFromReader(message: PermissionDefinition, reader: jspb.BinaryReader): PermissionDefinition;
}

export namespace PermissionDefinition {
  export type AsObject = {
    id: string,
    key: string,
    scope: RoleScopeMap[keyof RoleScopeMap],
    name: string,
    description: string,
  }
}

export class RoleDefinition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getScope(): RoleScopeMap[keyof RoleScopeMap];
  setScope(value: RoleScopeMap[keyof RoleScopeMap]): void;

  getSubject(): RoleSubjectMap[keyof RoleSubjectMap];
  setSubject(value: RoleSubjectMap[keyof RoleSubjectMap]): void;

  getDefinitiontype(): RoleDefinitionTypeMap[keyof RoleDefinitionTypeMap];
  setDefinitiontype(value: RoleDefinitionTypeMap[keyof RoleDefinitionTypeMap]): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedactor(): boolean;
  clearCreatedactor(): void;
  getCreatedactor(): common_pb.AuditActor | undefined;
  setCreatedactor(value?: common_pb.AuditActor): void;

  hasUpdatedactor(): boolean;
  clearUpdatedactor(): void;
  getUpdatedactor(): common_pb.AuditActor | undefined;
  setUpdatedactor(value?: common_pb.AuditActor): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<PermissionDefinition>;
  setPermissionsList(value: Array<PermissionDefinition>): void;
  addPermissions(value?: PermissionDefinition, index?: number): PermissionDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDefinition): RoleDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDefinition;
  static deserializeBinaryFromReader(message: RoleDefinition, reader: jspb.BinaryReader): RoleDefinition;
}

export namespace RoleDefinition {
  export type AsObject = {
    id: string,
    key: string,
    name: string,
    description: string,
    scope: RoleScopeMap[keyof RoleScopeMap],
    subject: RoleSubjectMap[keyof RoleSubjectMap],
    definitiontype: RoleDefinitionTypeMap[keyof RoleDefinitionTypeMap],
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdactor?: common_pb.AuditActor.AsObject,
    updatedactor?: common_pb.AuditActor.AsObject,
    permissionsList: Array<PermissionDefinition.AsObject>,
  }
}

export class ListPermissionsRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionsRequest): ListPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionsRequest;
  static deserializeBinaryFromReader(message: ListPermissionsRequest, reader: jspb.BinaryReader): ListPermissionsRequest;
}

export namespace ListPermissionsRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class ListPermissionsResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<PermissionDefinition>;
  setPermissionsList(value: Array<PermissionDefinition>): void;
  addPermissions(value?: PermissionDefinition, index?: number): PermissionDefinition;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionsResponse): ListPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionsResponse;
  static deserializeBinaryFromReader(message: ListPermissionsResponse, reader: jspb.BinaryReader): ListPermissionsResponse;
}

export namespace ListPermissionsResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    permissionsList: Array<PermissionDefinition.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class ListRolesRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRolesRequest): ListRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRolesRequest;
  static deserializeBinaryFromReader(message: ListRolesRequest, reader: jspb.BinaryReader): ListRolesRequest;
}

export namespace ListRolesRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class ListRolesResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearRolesList(): void;
  getRolesList(): Array<RoleDefinition>;
  setRolesList(value: Array<RoleDefinition>): void;
  addRoles(value?: RoleDefinition, index?: number): RoleDefinition;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRolesResponse): ListRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRolesResponse;
  static deserializeBinaryFromReader(message: ListRolesResponse, reader: jspb.BinaryReader): ListRolesResponse;
}

export namespace ListRolesResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    rolesList: Array<RoleDefinition.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetRoleRequest extends jspb.Message {
  getRoledefinitionid(): string;
  setRoledefinitionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoleRequest): GetRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoleRequest;
  static deserializeBinaryFromReader(message: GetRoleRequest, reader: jspb.BinaryReader): GetRoleRequest;
}

export namespace GetRoleRequest {
  export type AsObject = {
    roledefinitionid: string,
  }
}

export class GetRoleResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): RoleDefinition | undefined;
  setRole(value?: RoleDefinition): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoleResponse): GetRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoleResponse;
  static deserializeBinaryFromReader(message: GetRoleResponse, reader: jspb.BinaryReader): GetRoleResponse;
}

export namespace GetRoleResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    role?: RoleDefinition.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateCustomRoleRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getScope(): RoleScopeMap[keyof RoleScopeMap];
  setScope(value: RoleScopeMap[keyof RoleScopeMap]): void;

  getSubject(): RoleSubjectMap[keyof RoleSubjectMap];
  setSubject(value: RoleSubjectMap[keyof RoleSubjectMap]): void;

  clearPermissiondefinitionidsList(): void;
  getPermissiondefinitionidsList(): Array<string>;
  setPermissiondefinitionidsList(value: Array<string>): void;
  addPermissiondefinitionids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomRoleRequest): CreateCustomRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomRoleRequest;
  static deserializeBinaryFromReader(message: CreateCustomRoleRequest, reader: jspb.BinaryReader): CreateCustomRoleRequest;
}

export namespace CreateCustomRoleRequest {
  export type AsObject = {
    key: string,
    name: string,
    description: string,
    scope: RoleScopeMap[keyof RoleScopeMap],
    subject: RoleSubjectMap[keyof RoleSubjectMap],
    permissiondefinitionidsList: Array<string>,
  }
}

export class CreateCustomRoleResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): RoleDefinition | undefined;
  setRole(value?: RoleDefinition): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomRoleResponse): CreateCustomRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomRoleResponse;
  static deserializeBinaryFromReader(message: CreateCustomRoleResponse, reader: jspb.BinaryReader): CreateCustomRoleResponse;
}

export namespace CreateCustomRoleResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    role?: RoleDefinition.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class UpdateCustomRoleRequest extends jspb.Message {
  getRoledefinitionid(): string;
  setRoledefinitionid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomRoleRequest): UpdateCustomRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomRoleRequest;
  static deserializeBinaryFromReader(message: UpdateCustomRoleRequest, reader: jspb.BinaryReader): UpdateCustomRoleRequest;
}

export namespace UpdateCustomRoleRequest {
  export type AsObject = {
    roledefinitionid: string,
    name: string,
    description: string,
  }
}

export class UpdateCustomRoleResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): RoleDefinition | undefined;
  setRole(value?: RoleDefinition): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomRoleResponse): UpdateCustomRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomRoleResponse;
  static deserializeBinaryFromReader(message: UpdateCustomRoleResponse, reader: jspb.BinaryReader): UpdateCustomRoleResponse;
}

export namespace UpdateCustomRoleResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    role?: RoleDefinition.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class ReduceCustomRolePermissionsRequest extends jspb.Message {
  getRoledefinitionid(): string;
  setRoledefinitionid(value: string): void;

  clearPermissiondefinitionidsList(): void;
  getPermissiondefinitionidsList(): Array<string>;
  setPermissiondefinitionidsList(value: Array<string>): void;
  addPermissiondefinitionids(value: string, index?: number): string;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReduceCustomRolePermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReduceCustomRolePermissionsRequest): ReduceCustomRolePermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReduceCustomRolePermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReduceCustomRolePermissionsRequest;
  static deserializeBinaryFromReader(message: ReduceCustomRolePermissionsRequest, reader: jspb.BinaryReader): ReduceCustomRolePermissionsRequest;
}

export namespace ReduceCustomRolePermissionsRequest {
  export type AsObject = {
    roledefinitionid: string,
    permissiondefinitionidsList: Array<string>,
    reason: string,
  }
}

export class ReduceCustomRolePermissionsResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): RoleDefinition | undefined;
  setRole(value?: RoleDefinition): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReduceCustomRolePermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReduceCustomRolePermissionsResponse): ReduceCustomRolePermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReduceCustomRolePermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReduceCustomRolePermissionsResponse;
  static deserializeBinaryFromReader(message: ReduceCustomRolePermissionsResponse, reader: jspb.BinaryReader): ReduceCustomRolePermissionsResponse;
}

export namespace ReduceCustomRolePermissionsResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    role?: RoleDefinition.AsObject,
    error?: common_pb.Error.AsObject,
    correlationid: string,
  }
}

export class ArchiveCustomRoleRequest extends jspb.Message {
  getRoledefinitionid(): string;
  setRoledefinitionid(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveCustomRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveCustomRoleRequest): ArchiveCustomRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveCustomRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveCustomRoleRequest;
  static deserializeBinaryFromReader(message: ArchiveCustomRoleRequest, reader: jspb.BinaryReader): ArchiveCustomRoleRequest;
}

export namespace ArchiveCustomRoleRequest {
  export type AsObject = {
    roledefinitionid: string,
    reason: string,
  }
}

export class ArchiveCustomRoleResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getRoledefinitionid(): string;
  setRoledefinitionid(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveCustomRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveCustomRoleResponse): ArchiveCustomRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveCustomRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveCustomRoleResponse;
  static deserializeBinaryFromReader(message: ArchiveCustomRoleResponse, reader: jspb.BinaryReader): ArchiveCustomRoleResponse;
}

export namespace ArchiveCustomRoleResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    roledefinitionid: string,
    error?: common_pb.Error.AsObject,
    correlationid: string,
  }
}

export interface RoleScopeMap {
  ROLE_SCOPE_UNSPECIFIED: 0;
  ROLE_SCOPE_ORGANIZATION: 1;
  ROLE_SCOPE_PROJECT: 2;
}

export const RoleScope: RoleScopeMap;

export interface RoleSubjectMap {
  ROLE_SUBJECT_UNSPECIFIED: 0;
  ROLE_SUBJECT_USER: 1;
  ROLE_SUBJECT_PROJECT_TOKEN: 2;
}

export const RoleSubject: RoleSubjectMap;

export interface RoleDefinitionTypeMap {
  ROLE_DEFINITION_TYPE_UNSPECIFIED: 0;
  ROLE_DEFINITION_TYPE_BUILT_IN: 1;
  ROLE_DEFINITION_TYPE_CUSTOM: 2;
}

export const RoleDefinitionType: RoleDefinitionTypeMap;

