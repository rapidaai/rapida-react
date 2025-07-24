// package: provider_api
// file: provider-api.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class GetAllModelProviderRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllModelProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllModelProviderRequest): GetAllModelProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllModelProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllModelProviderRequest;
  static deserializeBinaryFromReader(message: GetAllModelProviderRequest, reader: jspb.BinaryReader): GetAllModelProviderRequest;
}

export namespace GetAllModelProviderRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllModelProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.Provider>;
  setDataList(value: Array<common_pb.Provider>): void;
  addData(value?: common_pb.Provider, index?: number): common_pb.Provider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllModelProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllModelProviderResponse): GetAllModelProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllModelProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllModelProviderResponse;
  static deserializeBinaryFromReader(message: GetAllModelProviderResponse, reader: jspb.BinaryReader): GetAllModelProviderResponse;
}

export namespace GetAllModelProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.Provider.AsObject>,
  }
}

export class ToolProvider extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  clearFeatureList(): void;
  getFeatureList(): Array<string>;
  setFeatureList(value: Array<string>): void;
  addFeature(value: string, index?: number): string;

  getConnectconfigurationMap(): jspb.Map<string, string>;
  clearConnectconfigurationMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolProvider.AsObject;
  static toObject(includeInstance: boolean, msg: ToolProvider): ToolProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolProvider;
  static deserializeBinaryFromReader(message: ToolProvider, reader: jspb.BinaryReader): ToolProvider;
}

export namespace ToolProvider {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    image: string,
    featureList: Array<string>,
    connectconfigurationMap: Array<[string, string]>,
  }
}

export class GetAllToolProviderRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllToolProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllToolProviderRequest): GetAllToolProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllToolProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllToolProviderRequest;
  static deserializeBinaryFromReader(message: GetAllToolProviderRequest, reader: jspb.BinaryReader): GetAllToolProviderRequest;
}

export namespace GetAllToolProviderRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllToolProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<ToolProvider>;
  setDataList(value: Array<ToolProvider>): void;
  addData(value?: ToolProvider, index?: number): ToolProvider;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllToolProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllToolProviderResponse): GetAllToolProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllToolProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllToolProviderResponse;
  static deserializeBinaryFromReader(message: GetAllToolProviderResponse, reader: jspb.BinaryReader): GetAllToolProviderResponse;
}

export namespace GetAllToolProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<ToolProvider.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

