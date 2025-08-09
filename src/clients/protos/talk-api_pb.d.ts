// package: talk_api
// file: talk-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AssistantDefinition extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantDefinition): AssistantDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantDefinition;
  static deserializeBinaryFromReader(message: AssistantDefinition, reader: jspb.BinaryReader): AssistantDefinition;
}

export namespace AssistantDefinition {
  export type AsObject = {
    assistantid: string,
    version: string,
  }
}

export class AssistantMessagingRequest extends jspb.Message {
  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantDefinition | undefined;
  setAssistant(value?: AssistantDefinition): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): common_pb.Message | undefined;
  setMessage(value?: common_pb.Message): void;

  hasAssistantconversationid(): boolean;
  clearAssistantconversationid(): void;
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getSource(): common_pb.SourceMap[keyof common_pb.SourceMap];
  setSource(value: common_pb.SourceMap[keyof common_pb.SourceMap]): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
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
    assistant?: AssistantDefinition.AsObject,
    message?: common_pb.Message.AsObject,
    assistantconversationid: string,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    source: common_pb.SourceMap[keyof common_pb.SourceMap],
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

export class AssistantConversationConfiguration extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantDefinition | undefined;
  setAssistant(value?: AssistantDefinition): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationConfiguration): AssistantConversationConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationConfiguration;
  static deserializeBinaryFromReader(message: AssistantConversationConfiguration, reader: jspb.BinaryReader): AssistantConversationConfiguration;
}

export namespace AssistantConversationConfiguration {
  export type AsObject = {
    assistantconversationid: string,
    assistant?: AssistantDefinition.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantConversationInterruption extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): AssistantConversationInterruption.InterruptionTypeMap[keyof AssistantConversationInterruption.InterruptionTypeMap];
  setType(value: AssistantConversationInterruption.InterruptionTypeMap[keyof AssistantConversationInterruption.InterruptionTypeMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationInterruption.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationInterruption): AssistantConversationInterruption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationInterruption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationInterruption;
  static deserializeBinaryFromReader(message: AssistantConversationInterruption, reader: jspb.BinaryReader): AssistantConversationInterruption;
}

export namespace AssistantConversationInterruption {
  export type AsObject = {
    id: string,
    type: AssistantConversationInterruption.InterruptionTypeMap[keyof AssistantConversationInterruption.InterruptionTypeMap],
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface InterruptionTypeMap {
    INTERRUPTION_TYPE_UNSPECIFIED: 0;
    INTERRUPTION_TYPE_VAD: 1;
    INTERRUPTION_TYPE_WORD: 2;
  }

  export const InterruptionType: InterruptionTypeMap;
}

export class AssistantConversationUserMessage extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): common_pb.Message | undefined;
  setMessage(value?: common_pb.Message): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationUserMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationUserMessage): AssistantConversationUserMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationUserMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationUserMessage;
  static deserializeBinaryFromReader(message: AssistantConversationUserMessage, reader: jspb.BinaryReader): AssistantConversationUserMessage;
}

export namespace AssistantConversationUserMessage {
  export type AsObject = {
    message?: common_pb.Message.AsObject,
    id: string,
    completed: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantConversationAssistantMessage extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): common_pb.Message | undefined;
  setMessage(value?: common_pb.Message): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationAssistantMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationAssistantMessage): AssistantConversationAssistantMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationAssistantMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationAssistantMessage;
  static deserializeBinaryFromReader(message: AssistantConversationAssistantMessage, reader: jspb.BinaryReader): AssistantConversationAssistantMessage;
}

export namespace AssistantConversationAssistantMessage {
  export type AsObject = {
    message?: common_pb.Message.AsObject,
    id: string,
    completed: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantMessagingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): AssistantConversationConfiguration | undefined;
  setConfiguration(value?: AssistantConversationConfiguration): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): AssistantConversationInterruption | undefined;
  setInterruption(value?: AssistantConversationInterruption): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): AssistantConversationUserMessage | undefined;
  setUser(value?: AssistantConversationUserMessage): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantConversationAssistantMessage | undefined;
  setAssistant(value?: AssistantConversationAssistantMessage): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): common_pb.AssistantConversationMessage | undefined;
  setMessage(value?: common_pb.AssistantConversationMessage): void;

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
    error?: common_pb.Error.AsObject,
    configuration?: AssistantConversationConfiguration.AsObject,
    interruption?: AssistantConversationInterruption.AsObject,
    user?: AssistantConversationUserMessage.AsObject,
    assistant?: AssistantConversationAssistantMessage.AsObject,
    message?: common_pb.AssistantConversationMessage.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CONFIGURATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    MESSAGE = 13,
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

export class InitiateAssistantTalkParameter extends jspb.Message {
  getItemsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearItemsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateAssistantTalkParameter.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateAssistantTalkParameter): InitiateAssistantTalkParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateAssistantTalkParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateAssistantTalkParameter;
  static deserializeBinaryFromReader(message: InitiateAssistantTalkParameter, reader: jspb.BinaryReader): InitiateAssistantTalkParameter;
}

export namespace InitiateAssistantTalkParameter {
  export type AsObject = {
    itemsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

export class InitiateAssistantTalkRequest extends jspb.Message {
  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantDefinition | undefined;
  setAssistant(value?: AssistantDefinition): void;

  getSource(): common_pb.SourceMap[keyof common_pb.SourceMap];
  setSource(value: common_pb.SourceMap[keyof common_pb.SourceMap]): void;

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  hasParams(): boolean;
  clearParams(): void;
  getParams(): InitiateAssistantTalkParameter | undefined;
  setParams(value?: InitiateAssistantTalkParameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateAssistantTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateAssistantTalkRequest): InitiateAssistantTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateAssistantTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateAssistantTalkRequest;
  static deserializeBinaryFromReader(message: InitiateAssistantTalkRequest, reader: jspb.BinaryReader): InitiateAssistantTalkRequest;
}

export namespace InitiateAssistantTalkRequest {
  export type AsObject = {
    assistant?: AssistantDefinition.AsObject,
    source: common_pb.SourceMap[keyof common_pb.SourceMap],
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    params?: InitiateAssistantTalkParameter.AsObject,
  }
}

export class InitiateAssistantTalkResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): InitiateAssistantTalkParameter | undefined;
  setData(value?: InitiateAssistantTalkParameter): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateAssistantTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateAssistantTalkResponse): InitiateAssistantTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateAssistantTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateAssistantTalkResponse;
  static deserializeBinaryFromReader(message: InitiateAssistantTalkResponse, reader: jspb.BinaryReader): InitiateAssistantTalkResponse;
}

export namespace InitiateAssistantTalkResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: InitiateAssistantTalkParameter.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class InitiateBulkAssistantTalkRequest extends jspb.Message {
  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantDefinition | undefined;
  setAssistant(value?: AssistantDefinition): void;

  getSource(): common_pb.SourceMap[keyof common_pb.SourceMap];
  setSource(value: common_pb.SourceMap[keyof common_pb.SourceMap]): void;

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  clearParamsList(): void;
  getParamsList(): Array<InitiateAssistantTalkParameter>;
  setParamsList(value: Array<InitiateAssistantTalkParameter>): void;
  addParams(value?: InitiateAssistantTalkParameter, index?: number): InitiateAssistantTalkParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateBulkAssistantTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateBulkAssistantTalkRequest): InitiateBulkAssistantTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateBulkAssistantTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateBulkAssistantTalkRequest;
  static deserializeBinaryFromReader(message: InitiateBulkAssistantTalkRequest, reader: jspb.BinaryReader): InitiateBulkAssistantTalkRequest;
}

export namespace InitiateBulkAssistantTalkRequest {
  export type AsObject = {
    assistant?: AssistantDefinition.AsObject,
    source: common_pb.SourceMap[keyof common_pb.SourceMap],
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    paramsList: Array<InitiateAssistantTalkParameter.AsObject>,
  }
}

export class InitiateBulkAssistantTalkResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<InitiateAssistantTalkParameter>;
  setDataList(value: Array<InitiateAssistantTalkParameter>): void;
  addData(value?: InitiateAssistantTalkParameter, index?: number): InitiateAssistantTalkParameter;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateBulkAssistantTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateBulkAssistantTalkResponse): InitiateBulkAssistantTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateBulkAssistantTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateBulkAssistantTalkResponse;
  static deserializeBinaryFromReader(message: InitiateBulkAssistantTalkResponse, reader: jspb.BinaryReader): InitiateBulkAssistantTalkResponse;
}

export namespace InitiateBulkAssistantTalkResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<InitiateAssistantTalkParameter.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

