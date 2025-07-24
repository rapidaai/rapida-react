// package: connect_api
// file: connect-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as common_pb from "./common_pb";

export class KnowledgeConnectRequest extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getConnect(): string;
  setConnect(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeConnectRequest): KnowledgeConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeConnectRequest;
  static deserializeBinaryFromReader(message: KnowledgeConnectRequest, reader: jspb.BinaryReader): KnowledgeConnectRequest;
}

export namespace KnowledgeConnectRequest {
  export type AsObject = {
    state: string,
    code: string,
    scope: string,
    connect: string,
  }
}

export class KnowledgeConnectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getToolid(): string;
  setToolid(value: string): void;

  getRedirectto(): string;
  setRedirectto(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeConnectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeConnectResponse): KnowledgeConnectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeConnectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeConnectResponse;
  static deserializeBinaryFromReader(message: KnowledgeConnectResponse, reader: jspb.BinaryReader): KnowledgeConnectResponse;
}

export namespace KnowledgeConnectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    toolid: string,
    redirectto: string,
    error?: common_pb.Error.AsObject,
  }
}

export class GeneralConnectRequest extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getConnect(): string;
  setConnect(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneralConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneralConnectRequest): GeneralConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneralConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneralConnectRequest;
  static deserializeBinaryFromReader(message: GeneralConnectRequest, reader: jspb.BinaryReader): GeneralConnectRequest;
}

export namespace GeneralConnectRequest {
  export type AsObject = {
    state: string,
    code: string,
    scope: string,
    connect: string,
  }
}

export class GeneralConnectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getToolid(): string;
  setToolid(value: string): void;

  getRedirectto(): string;
  setRedirectto(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneralConnectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeneralConnectResponse): GeneralConnectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneralConnectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneralConnectResponse;
  static deserializeBinaryFromReader(message: GeneralConnectResponse, reader: jspb.BinaryReader): GeneralConnectResponse;
}

export namespace GeneralConnectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    toolid: string,
    redirectto: string,
    error?: common_pb.Error.AsObject,
  }
}

export class ActionConnectRequest extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getConnect(): string;
  setConnect(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionConnectRequest): ActionConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionConnectRequest;
  static deserializeBinaryFromReader(message: ActionConnectRequest, reader: jspb.BinaryReader): ActionConnectRequest;
}

export namespace ActionConnectRequest {
  export type AsObject = {
    state: string,
    code: string,
    scope: string,
    connect: string,
  }
}

export class ActionConnectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getToolid(): string;
  setToolid(value: string): void;

  getRedirectto(): string;
  setRedirectto(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionConnectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActionConnectResponse): ActionConnectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionConnectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionConnectResponse;
  static deserializeBinaryFromReader(message: ActionConnectResponse, reader: jspb.BinaryReader): ActionConnectResponse;
}

export namespace ActionConnectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    toolid: string,
    redirectto: string,
    error?: common_pb.Error.AsObject,
  }
}

export class GetConnectorFilesRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getToolid(): string;
  setToolid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectorFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectorFilesRequest): GetConnectorFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectorFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectorFilesRequest;
  static deserializeBinaryFromReader(message: GetConnectorFilesRequest, reader: jspb.BinaryReader): GetConnectorFilesRequest;
}

export namespace GetConnectorFilesRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    toolid: string,
  }
}

export class GetConnectorFilesResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<google_protobuf_struct_pb.Struct>;
  setDataList(value: Array<google_protobuf_struct_pb.Struct>): void;
  addData(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  getArgsMap(): jspb.Map<string, string>;
  clearArgsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectorFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectorFilesResponse): GetConnectorFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectorFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectorFilesResponse;
  static deserializeBinaryFromReader(message: GetConnectorFilesResponse, reader: jspb.BinaryReader): GetConnectorFilesResponse;
}

export namespace GetConnectorFilesResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    paginated?: common_pb.Paginated.AsObject,
    error?: common_pb.Error.AsObject,
    argsMap: Array<[string, string]>,
  }
}

