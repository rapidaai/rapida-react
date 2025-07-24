// package: vault_api
// file: vault-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as common_pb from "./common_pb";

export class VaultCredential extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Struct | undefined;
  setValue(value?: google_protobuf_struct_pb.Struct): void;

  getStatus(): string;
  setStatus(value: string): void;

  getVaultlevel(): string;
  setVaultlevel(value: string): void;

  getVaultlevelid(): string;
  setVaultlevelid(value: string): void;

  getVaulttype(): string;
  setVaulttype(value: string): void;

  getVaulttypeid(): string;
  setVaulttypeid(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastuseddate(): boolean;
  clearLastuseddate(): void;
  getLastuseddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastuseddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VaultCredential.AsObject;
  static toObject(includeInstance: boolean, msg: VaultCredential): VaultCredential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VaultCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VaultCredential;
  static deserializeBinaryFromReader(message: VaultCredential, reader: jspb.BinaryReader): VaultCredential;
}

export namespace VaultCredential {
  export type AsObject = {
    id: string,
    name: string,
    value?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    vaultlevel: string,
    vaultlevelid: string,
    vaulttype: string,
    vaulttypeid: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastuseddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateProviderCredentialRequest extends jspb.Message {
  getProviderid(): string;
  setProviderid(value: string): void;

  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): google_protobuf_struct_pb.Struct | undefined;
  setCredential(value?: google_protobuf_struct_pb.Struct): void;

  getName(): string;
  setName(value: string): void;

  getProvidername(): string;
  setProvidername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProviderCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProviderCredentialRequest): CreateProviderCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProviderCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProviderCredentialRequest;
  static deserializeBinaryFromReader(message: CreateProviderCredentialRequest, reader: jspb.BinaryReader): CreateProviderCredentialRequest;
}

export namespace CreateProviderCredentialRequest {
  export type AsObject = {
    providerid: string,
    credential?: google_protobuf_struct_pb.Struct.AsObject,
    name: string,
    providername: string,
  }
}

export class CreateProviderCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): VaultCredential | undefined;
  setData(value?: VaultCredential): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProviderCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProviderCredentialResponse): CreateProviderCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProviderCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProviderCredentialResponse;
  static deserializeBinaryFromReader(message: CreateProviderCredentialResponse, reader: jspb.BinaryReader): CreateProviderCredentialResponse;
}

export namespace CreateProviderCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: VaultCredential.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateToolCredentialRequest extends jspb.Message {
  getToolid(): string;
  setToolid(value: string): void;

  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): google_protobuf_struct_pb.Struct | undefined;
  setCredential(value?: google_protobuf_struct_pb.Struct): void;

  getName(): string;
  setName(value: string): void;

  getToolname(): string;
  setToolname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateToolCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateToolCredentialRequest): CreateToolCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateToolCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateToolCredentialRequest;
  static deserializeBinaryFromReader(message: CreateToolCredentialRequest, reader: jspb.BinaryReader): CreateToolCredentialRequest;
}

export namespace CreateToolCredentialRequest {
  export type AsObject = {
    toolid: string,
    credential?: google_protobuf_struct_pb.Struct.AsObject,
    name: string,
    toolname: string,
  }
}

export class CreateToolCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): VaultCredential | undefined;
  setData(value?: VaultCredential): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateToolCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateToolCredentialResponse): CreateToolCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateToolCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateToolCredentialResponse;
  static deserializeBinaryFromReader(message: CreateToolCredentialResponse, reader: jspb.BinaryReader): CreateToolCredentialResponse;
}

export namespace CreateToolCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: VaultCredential.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class DeleteProviderCredentialRequest extends jspb.Message {
  getProviderkeyid(): string;
  setProviderkeyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProviderCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProviderCredentialRequest): DeleteProviderCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteProviderCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProviderCredentialRequest;
  static deserializeBinaryFromReader(message: DeleteProviderCredentialRequest, reader: jspb.BinaryReader): DeleteProviderCredentialRequest;
}

export namespace DeleteProviderCredentialRequest {
  export type AsObject = {
    providerkeyid: string,
  }
}

export class DeleteProviderCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getId(): string;
  setId(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProviderCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProviderCredentialResponse): DeleteProviderCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteProviderCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProviderCredentialResponse;
  static deserializeBinaryFromReader(message: DeleteProviderCredentialResponse, reader: jspb.BinaryReader): DeleteProviderCredentialResponse;
}

export namespace DeleteProviderCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    id: string,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllOrganizationCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<VaultCredential>;
  setDataList(value: Array<VaultCredential>): void;
  addData(value?: VaultCredential, index?: number): VaultCredential;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllOrganizationCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllOrganizationCredentialResponse): GetAllOrganizationCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllOrganizationCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllOrganizationCredentialResponse;
  static deserializeBinaryFromReader(message: GetAllOrganizationCredentialResponse, reader: jspb.BinaryReader): GetAllOrganizationCredentialResponse;
}

export namespace GetAllOrganizationCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<VaultCredential.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetProviderCredentialRequest extends jspb.Message {
  getProviderid(): string;
  setProviderid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProviderCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProviderCredentialRequest): GetProviderCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProviderCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProviderCredentialRequest;
  static deserializeBinaryFromReader(message: GetProviderCredentialRequest, reader: jspb.BinaryReader): GetProviderCredentialRequest;
}

export namespace GetProviderCredentialRequest {
  export type AsObject = {
    providerid: string,
    organizationid: string,
  }
}

export class GetProviderCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): VaultCredential | undefined;
  setData(value?: VaultCredential): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProviderCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProviderCredentialResponse): GetProviderCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProviderCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProviderCredentialResponse;
  static deserializeBinaryFromReader(message: GetProviderCredentialResponse, reader: jspb.BinaryReader): GetProviderCredentialResponse;
}

export namespace GetProviderCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: VaultCredential.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllOrganizationCredentialRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllOrganizationCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllOrganizationCredentialRequest): GetAllOrganizationCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllOrganizationCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllOrganizationCredentialRequest;
  static deserializeBinaryFromReader(message: GetAllOrganizationCredentialRequest, reader: jspb.BinaryReader): GetAllOrganizationCredentialRequest;
}

export namespace GetAllOrganizationCredentialRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetOauth2VaultCredentialRequest extends jspb.Message {
  getVaultid(): string;
  setVaultid(value: string): void;

  getProviderid(): string;
  setProviderid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOauth2VaultCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOauth2VaultCredentialRequest): GetOauth2VaultCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOauth2VaultCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOauth2VaultCredentialRequest;
  static deserializeBinaryFromReader(message: GetOauth2VaultCredentialRequest, reader: jspb.BinaryReader): GetOauth2VaultCredentialRequest;
}

export namespace GetOauth2VaultCredentialRequest {
  export type AsObject = {
    vaultid: string,
    providerid: string,
    organizationid: string,
  }
}

export class GetOauth2VaultCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): VaultCredential | undefined;
  setData(value?: VaultCredential): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOauth2VaultCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOauth2VaultCredentialResponse): GetOauth2VaultCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOauth2VaultCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOauth2VaultCredentialResponse;
  static deserializeBinaryFromReader(message: GetOauth2VaultCredentialResponse, reader: jspb.BinaryReader): GetOauth2VaultCredentialResponse;
}

export namespace GetOauth2VaultCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: VaultCredential.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

