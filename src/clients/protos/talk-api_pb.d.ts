// package: talk_api
// file: talk-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as common_pb from "./common_pb";

export class AssistantMessagingRequest extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): common_pb.AssistantConversationConfiguration | undefined;
  setConfiguration(value?: common_pb.AssistantConversationConfiguration): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): common_pb.AssistantConversationUserMessage | undefined;
  setMessage(value?: common_pb.AssistantConversationUserMessage): void;

  getRequestCase(): AssistantMessagingRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessagingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessagingRequest): AssistantMessagingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessagingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessagingRequest;
  static deserializeBinaryFromReader(message: AssistantMessagingRequest, reader: jspb.BinaryReader): AssistantMessagingRequest;
}

export namespace AssistantMessagingRequest {
  export type AsObject = {
    configuration?: common_pb.AssistantConversationConfiguration.AsObject,
    message?: common_pb.AssistantConversationUserMessage.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    CONFIGURATION = 2,
    MESSAGE = 3,
  }
}

export class AssistantMessagingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): common_pb.AssistantConversationConfiguration | undefined;
  setConfiguration(value?: common_pb.AssistantConversationConfiguration): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): common_pb.AssistantConversationInterruption | undefined;
  setInterruption(value?: common_pb.AssistantConversationInterruption): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): common_pb.AssistantConversationUserMessage | undefined;
  setUser(value?: common_pb.AssistantConversationUserMessage): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): common_pb.AssistantConversationAssistantMessage | undefined;
  setAssistant(value?: common_pb.AssistantConversationAssistantMessage): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): common_pb.AssistantConversationAction | undefined;
  setAction(value?: common_pb.AssistantConversationAction): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  getDataCase(): AssistantMessagingResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessagingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessagingResponse): AssistantMessagingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessagingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessagingResponse;
  static deserializeBinaryFromReader(message: AssistantMessagingResponse, reader: jspb.BinaryReader): AssistantMessagingResponse;
}

export namespace AssistantMessagingResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    configuration?: common_pb.AssistantConversationConfiguration.AsObject,
    interruption?: common_pb.AssistantConversationInterruption.AsObject,
    user?: common_pb.AssistantConversationUserMessage.AsObject,
    assistant?: common_pb.AssistantConversationAssistantMessage.AsObject,
    action?: common_pb.AssistantConversationAction.AsObject,
    error?: common_pb.Error.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CONFIGURATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    ACTION = 14,
    ERROR = 15,
  }
}

export class CreateMessageMetricRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageMetricRequest): CreateMessageMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageMetricRequest;
  static deserializeBinaryFromReader(message: CreateMessageMetricRequest, reader: jspb.BinaryReader): CreateMessageMetricRequest;
}

export namespace CreateMessageMetricRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    messageid: string,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class CreateMessageMetricResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.Metric>;
  setDataList(value: Array<common_pb.Metric>): void;
  addData(value?: common_pb.Metric, index?: number): common_pb.Metric;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageMetricResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageMetricResponse): CreateMessageMetricResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageMetricResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageMetricResponse;
  static deserializeBinaryFromReader(message: CreateMessageMetricResponse, reader: jspb.BinaryReader): CreateMessageMetricResponse;
}

export namespace CreateMessageMetricResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.Metric.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateConversationMetricRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationMetricRequest): CreateConversationMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConversationMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationMetricRequest;
  static deserializeBinaryFromReader(message: CreateConversationMetricRequest, reader: jspb.BinaryReader): CreateConversationMetricRequest;
}

export namespace CreateConversationMetricRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    metricsList: Array<common_pb.Metric.AsObject>,
  }
}

export class CreateConversationMetricResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.Metric>;
  setDataList(value: Array<common_pb.Metric>): void;
  addData(value?: common_pb.Metric, index?: number): common_pb.Metric;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationMetricResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationMetricResponse): CreateConversationMetricResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConversationMetricResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationMetricResponse;
  static deserializeBinaryFromReader(message: CreateConversationMetricResponse, reader: jspb.BinaryReader): CreateConversationMetricResponse;
}

export namespace CreateConversationMetricResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.Metric.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

export class CreatePhoneCallRequest extends jspb.Message {
  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): common_pb.AssistantDefinition | undefined;
  setAssistant(value?: common_pb.AssistantDefinition): void;

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  getFromnumber(): string;
  setFromnumber(value: string): void;

  getTonumber(): string;
  setTonumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneCallRequest): CreatePhoneCallRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneCallRequest;
  static deserializeBinaryFromReader(message: CreatePhoneCallRequest, reader: jspb.BinaryReader): CreatePhoneCallRequest;
}

export namespace CreatePhoneCallRequest {
  export type AsObject = {
    assistant?: common_pb.AssistantDefinition.AsObject,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    fromnumber: string,
    tonumber: string,
  }
}

export class CreatePhoneCallResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): common_pb.AssistantConversation | undefined;
  setData(value?: common_pb.AssistantConversation): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneCallResponse): CreatePhoneCallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePhoneCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneCallResponse;
  static deserializeBinaryFromReader(message: CreatePhoneCallResponse, reader: jspb.BinaryReader): CreatePhoneCallResponse;
}

export namespace CreatePhoneCallResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.AssistantConversation.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateBulkPhoneCallRequest extends jspb.Message {
  clearPhonecallsList(): void;
  getPhonecallsList(): Array<CreatePhoneCallRequest>;
  setPhonecallsList(value: Array<CreatePhoneCallRequest>): void;
  addPhonecalls(value?: CreatePhoneCallRequest, index?: number): CreatePhoneCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBulkPhoneCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBulkPhoneCallRequest): CreateBulkPhoneCallRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBulkPhoneCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBulkPhoneCallRequest;
  static deserializeBinaryFromReader(message: CreateBulkPhoneCallRequest, reader: jspb.BinaryReader): CreateBulkPhoneCallRequest;
}

export namespace CreateBulkPhoneCallRequest {
  export type AsObject = {
    phonecallsList: Array<CreatePhoneCallRequest.AsObject>,
  }
}

export class CreateBulkPhoneCallResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.AssistantConversation>;
  setDataList(value: Array<common_pb.AssistantConversation>): void;
  addData(value?: common_pb.AssistantConversation, index?: number): common_pb.AssistantConversation;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBulkPhoneCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBulkPhoneCallResponse): CreateBulkPhoneCallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBulkPhoneCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBulkPhoneCallResponse;
  static deserializeBinaryFromReader(message: CreateBulkPhoneCallResponse, reader: jspb.BinaryReader): CreateBulkPhoneCallResponse;
}

export namespace CreateBulkPhoneCallResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.AssistantConversation.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

