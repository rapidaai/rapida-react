// package: assistant_api
// file: assistant-webhook.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AssistantWebhook extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): common_pb.User | undefined;
  setCreateduser(value?: common_pb.User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): common_pb.User | undefined;
  setUpdateduser(value?: common_pb.User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebhook.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebhook): AssistantWebhook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebhook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebhook;
  static deserializeBinaryFromReader(message: AssistantWebhook, reader: jspb.BinaryReader): AssistantWebhook;
}

export namespace AssistantWebhook {
  export type AsObject = {
    id: string,
    assistanteventsList: Array<string>,
    description: string,
    provider: string,
    optionsList: Array<common_pb.Metadata.AsObject>,
    executionpriority: number,
    assistantid: string,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

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

export class CreateAssistantWebhookRequest extends jspb.Message {
  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantWebhookRequest): CreateAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: CreateAssistantWebhookRequest, reader: jspb.BinaryReader): CreateAssistantWebhookRequest;
}

export namespace CreateAssistantWebhookRequest {
  export type AsObject = {
    assistanteventsList: Array<string>,
    description: string,
    provider: string,
    optionsList: Array<common_pb.Metadata.AsObject>,
    assistantid: string,
    executionpriority: number,
  }
}

export class UpdateAssistantWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantWebhookRequest): UpdateAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantWebhookRequest, reader: jspb.BinaryReader): UpdateAssistantWebhookRequest;
}

export namespace UpdateAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistanteventsList: Array<string>,
    description: string,
    provider: string,
    optionsList: Array<common_pb.Metadata.AsObject>,
    assistantid: string,
    executionpriority: number,
  }
}

export class GetAssistantWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookRequest): GetAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: GetAssistantWebhookRequest, reader: jspb.BinaryReader): GetAssistantWebhookRequest;
}

export namespace GetAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class DeleteAssistantWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantWebhookRequest): DeleteAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantWebhookRequest, reader: jspb.BinaryReader): DeleteAssistantWebhookRequest;
}

export namespace DeleteAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class GetAssistantWebhookResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWebhook | undefined;
  setData(value?: AssistantWebhook): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookResponse): GetAssistantWebhookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookResponse;
  static deserializeBinaryFromReader(message: GetAssistantWebhookResponse, reader: jspb.BinaryReader): GetAssistantWebhookResponse;
}

export namespace GetAssistantWebhookResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebhook.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantWebhookRequest extends jspb.Message {
  getWebhookid(): string;
  setWebhookid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookRequest): GetAllAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookRequest, reader: jspb.BinaryReader): GetAllAssistantWebhookRequest;
}

export namespace GetAllAssistantWebhookRequest {
  export type AsObject = {
    webhookid: string,
    assistantid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantWebhookResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantWebhook>;
  setDataList(value: Array<AssistantWebhook>): void;
  addData(value?: AssistantWebhook, index?: number): AssistantWebhook;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookResponse): GetAllAssistantWebhookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookResponse, reader: jspb.BinaryReader): GetAllAssistantWebhookResponse;
}

export namespace GetAllAssistantWebhookResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantWebhook.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
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

