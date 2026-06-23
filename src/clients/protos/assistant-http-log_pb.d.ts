// package: assistant_api
// file: assistant-http-log.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AssistantHTTPLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSourcerefid(): string;
  setSourcerefid(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): google_protobuf_struct_pb.Struct | undefined;
  setRequest(value?: google_protobuf_struct_pb.Struct): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): google_protobuf_struct_pb.Struct | undefined;
  setResponse(value?: google_protobuf_struct_pb.Struct): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getSourceevent(): string;
  setSourceevent(value: string): void;

  getResponsestatus(): string;
  setResponsestatus(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  getRetrycount(): number;
  setRetrycount(value: number): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getContextid(): string;
  setContextid(value: string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantHTTPLog.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantHTTPLog): AssistantHTTPLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantHTTPLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantHTTPLog;
  static deserializeBinaryFromReader(message: AssistantHTTPLog, reader: jspb.BinaryReader): AssistantHTTPLog;
}

export namespace AssistantHTTPLog {
  export type AsObject = {
    id: string,
    sourcerefid: string,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantid: string,
    projectid: string,
    organizationid: string,
    assistantconversationid: string,
    assetprefix: string,
    sourceevent: string,
    responsestatus: string,
    timetaken: string,
    retrycount: number,
    httpmethod: string,
    httpurl: string,
    source: string,
    contextid: string,
    errormessage: string,
  }
}

export class GetAllAssistantHTTPLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): common_pb.Ordering | undefined;
  setOrder(value?: common_pb.Ordering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantHTTPLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantHTTPLogRequest): GetAllAssistantHTTPLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantHTTPLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantHTTPLogRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantHTTPLogRequest, reader: jspb.BinaryReader): GetAllAssistantHTTPLogRequest;
}

export namespace GetAllAssistantHTTPLogRequest {
  export type AsObject = {
    projectid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    order?: common_pb.Ordering.AsObject,
  }
}

export class GetAssistantHTTPLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantHTTPLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantHTTPLogRequest): GetAssistantHTTPLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantHTTPLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantHTTPLogRequest;
  static deserializeBinaryFromReader(message: GetAssistantHTTPLogRequest, reader: jspb.BinaryReader): GetAssistantHTTPLogRequest;
}

export namespace GetAssistantHTTPLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

export class GetAssistantHTTPLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantHTTPLog | undefined;
  setData(value?: AssistantHTTPLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantHTTPLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantHTTPLogResponse): GetAssistantHTTPLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantHTTPLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantHTTPLogResponse;
  static deserializeBinaryFromReader(message: GetAssistantHTTPLogResponse, reader: jspb.BinaryReader): GetAssistantHTTPLogResponse;
}

export namespace GetAssistantHTTPLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantHTTPLog.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantHTTPLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantHTTPLog>;
  setDataList(value: Array<AssistantHTTPLog>): void;
  addData(value?: AssistantHTTPLog, index?: number): AssistantHTTPLog;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantHTTPLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantHTTPLogResponse): GetAllAssistantHTTPLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantHTTPLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantHTTPLogResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantHTTPLogResponse, reader: jspb.BinaryReader): GetAllAssistantHTTPLogResponse;
}

export namespace GetAllAssistantHTTPLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantHTTPLog.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class RetryAssistantHTTPLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryAssistantHTTPLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryAssistantHTTPLogRequest): RetryAssistantHTTPLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetryAssistantHTTPLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryAssistantHTTPLogRequest;
  static deserializeBinaryFromReader(message: RetryAssistantHTTPLogRequest, reader: jspb.BinaryReader): RetryAssistantHTTPLogRequest;
}

export namespace RetryAssistantHTTPLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

