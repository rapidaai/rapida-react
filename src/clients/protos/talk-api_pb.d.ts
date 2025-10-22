// package: talk_api
// file: talk-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AssistantConversationConfiguration extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): common_pb.AssistantDefinition | undefined;
  setAssistant(value?: common_pb.AssistantDefinition): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
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
    assistant?: common_pb.AssistantDefinition.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

export class AssistantConversationDisconnectAction extends jspb.Message {
  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationDisconnectAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationDisconnectAction): AssistantConversationDisconnectAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationDisconnectAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationDisconnectAction;
  static deserializeBinaryFromReader(message: AssistantConversationDisconnectAction, reader: jspb.BinaryReader): AssistantConversationDisconnectAction;
}

export namespace AssistantConversationDisconnectAction {
  export type AsObject = {
    reason: string,
  }
}

export class AssistantConverstationHoldAction extends jspb.Message {
  getHoldtime(): number;
  setHoldtime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConverstationHoldAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConverstationHoldAction): AssistantConverstationHoldAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConverstationHoldAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConverstationHoldAction;
  static deserializeBinaryFromReader(message: AssistantConverstationHoldAction, reader: jspb.BinaryReader): AssistantConverstationHoldAction;
}

export namespace AssistantConverstationHoldAction {
  export type AsObject = {
    holdtime: number,
  }
}

export class AssistantConverstationKnowledgeRetrievalAction extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConverstationKnowledgeRetrievalAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConverstationKnowledgeRetrievalAction): AssistantConverstationKnowledgeRetrievalAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConverstationKnowledgeRetrievalAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConverstationKnowledgeRetrievalAction;
  static deserializeBinaryFromReader(message: AssistantConverstationKnowledgeRetrievalAction, reader: jspb.BinaryReader): AssistantConverstationKnowledgeRetrievalAction;
}

export namespace AssistantConverstationKnowledgeRetrievalAction {
  export type AsObject = {
    query: string,
  }
}

export class AssistantConverstationApiRequestAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConverstationApiRequestAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConverstationApiRequestAction): AssistantConverstationApiRequestAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConverstationApiRequestAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConverstationApiRequestAction;
  static deserializeBinaryFromReader(message: AssistantConverstationApiRequestAction, reader: jspb.BinaryReader): AssistantConverstationApiRequestAction;
}

export namespace AssistantConverstationApiRequestAction {
  export type AsObject = {
  }
}

export class AssistantConverstationEndpointAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConverstationEndpointAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConverstationEndpointAction): AssistantConverstationEndpointAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConverstationEndpointAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConverstationEndpointAction;
  static deserializeBinaryFromReader(message: AssistantConverstationEndpointAction, reader: jspb.BinaryReader): AssistantConverstationEndpointAction;
}

export namespace AssistantConverstationEndpointAction {
  export type AsObject = {
  }
}

export class AssistantConversationDeviationAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationDeviationAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationDeviationAction): AssistantConversationDeviationAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationDeviationAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationDeviationAction;
  static deserializeBinaryFromReader(message: AssistantConversationDeviationAction, reader: jspb.BinaryReader): AssistantConversationDeviationAction;
}

export namespace AssistantConversationDeviationAction {
  export type AsObject = {
  }
}

export class AssistantConversationAssistantTransferAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationAssistantTransferAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationAssistantTransferAction): AssistantConversationAssistantTransferAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationAssistantTransferAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationAssistantTransferAction;
  static deserializeBinaryFromReader(message: AssistantConversationAssistantTransferAction, reader: jspb.BinaryReader): AssistantConversationAssistantTransferAction;
}

export namespace AssistantConversationAssistantTransferAction {
  export type AsObject = {
  }
}

export class AssistantConversationPhoneCallTransferAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationPhoneCallTransferAction.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationPhoneCallTransferAction): AssistantConversationPhoneCallTransferAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationPhoneCallTransferAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationPhoneCallTransferAction;
  static deserializeBinaryFromReader(message: AssistantConversationPhoneCallTransferAction, reader: jspb.BinaryReader): AssistantConversationPhoneCallTransferAction;
}

export namespace AssistantConversationPhoneCallTransferAction {
  export type AsObject = {
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

export class AssistantConversationMessageTextContent extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationMessageTextContent.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationMessageTextContent): AssistantConversationMessageTextContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationMessageTextContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationMessageTextContent;
  static deserializeBinaryFromReader(message: AssistantConversationMessageTextContent, reader: jspb.BinaryReader): AssistantConversationMessageTextContent;
}

export namespace AssistantConversationMessageTextContent {
  export type AsObject = {
    content: string,
  }
}

export class AssistantConversationMessageAudioContent extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationMessageAudioContent.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationMessageAudioContent): AssistantConversationMessageAudioContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationMessageAudioContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationMessageAudioContent;
  static deserializeBinaryFromReader(message: AssistantConversationMessageAudioContent, reader: jspb.BinaryReader): AssistantConversationMessageAudioContent;
}

export namespace AssistantConversationMessageAudioContent {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

export class AssistantConversationUserMessage extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AssistantConversationMessageAudioContent | undefined;
  setAudio(value?: AssistantConversationMessageAudioContent): void;

  hasText(): boolean;
  clearText(): void;
  getText(): AssistantConversationMessageTextContent | undefined;
  setText(value?: AssistantConversationMessageTextContent): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessageCase(): AssistantConversationUserMessage.MessageCase;
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
    audio?: AssistantConversationMessageAudioContent.AsObject,
    text?: AssistantConversationMessageTextContent.AsObject,
    id: string,
    completed: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    AUDIO = 10,
    TEXT = 11,
  }
}

export class AssistantConversationAssistantMessage extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AssistantConversationMessageAudioContent | undefined;
  setAudio(value?: AssistantConversationMessageAudioContent): void;

  hasText(): boolean;
  clearText(): void;
  getText(): AssistantConversationMessageTextContent | undefined;
  setText(value?: AssistantConversationMessageTextContent): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessageCase(): AssistantConversationAssistantMessage.MessageCase;
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
    audio?: AssistantConversationMessageAudioContent.AsObject,
    text?: AssistantConversationMessageTextContent.AsObject,
    id: string,
    completed: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    AUDIO = 10,
    TEXT = 11,
  }
}

export class AssistantMessagingRequest extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): AssistantConversationConfiguration | undefined;
  setConfiguration(value?: AssistantConversationConfiguration): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): AssistantConversationUserMessage | undefined;
  setMessage(value?: AssistantConversationUserMessage): void;

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
    configuration?: AssistantConversationConfiguration.AsObject,
    message?: AssistantConversationUserMessage.AsObject,
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

  hasDisconnectaction(): boolean;
  clearDisconnectaction(): void;
  getDisconnectaction(): AssistantConversationDisconnectAction | undefined;
  setDisconnectaction(value?: AssistantConversationDisconnectAction): void;

  hasHoldaction(): boolean;
  clearHoldaction(): void;
  getHoldaction(): AssistantConverstationHoldAction | undefined;
  setHoldaction(value?: AssistantConverstationHoldAction): void;

  hasKnowledgeretrievalaction(): boolean;
  clearKnowledgeretrievalaction(): void;
  getKnowledgeretrievalaction(): AssistantConverstationKnowledgeRetrievalAction | undefined;
  setKnowledgeretrievalaction(value?: AssistantConverstationKnowledgeRetrievalAction): void;

  hasApirequestaction(): boolean;
  clearApirequestaction(): void;
  getApirequestaction(): AssistantConverstationApiRequestAction | undefined;
  setApirequestaction(value?: AssistantConverstationApiRequestAction): void;

  hasEndpointaction(): boolean;
  clearEndpointaction(): void;
  getEndpointaction(): AssistantConverstationEndpointAction | undefined;
  setEndpointaction(value?: AssistantConverstationEndpointAction): void;

  hasDeviationaction(): boolean;
  clearDeviationaction(): void;
  getDeviationaction(): AssistantConversationDeviationAction | undefined;
  setDeviationaction(value?: AssistantConversationDeviationAction): void;

  hasAssistanttransferaction(): boolean;
  clearAssistanttransferaction(): void;
  getAssistanttransferaction(): AssistantConversationAssistantTransferAction | undefined;
  setAssistanttransferaction(value?: AssistantConversationAssistantTransferAction): void;

  hasPhonecalltransferaction(): boolean;
  clearPhonecalltransferaction(): void;
  getPhonecalltransferaction(): AssistantConversationPhoneCallTransferAction | undefined;
  setPhonecalltransferaction(value?: AssistantConversationPhoneCallTransferAction): void;

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
    disconnectaction?: AssistantConversationDisconnectAction.AsObject,
    holdaction?: AssistantConverstationHoldAction.AsObject,
    knowledgeretrievalaction?: AssistantConverstationKnowledgeRetrievalAction.AsObject,
    apirequestaction?: AssistantConverstationApiRequestAction.AsObject,
    endpointaction?: AssistantConverstationEndpointAction.AsObject,
    deviationaction?: AssistantConversationDeviationAction.AsObject,
    assistanttransferaction?: AssistantConversationAssistantTransferAction.AsObject,
    phonecalltransferaction?: AssistantConversationPhoneCallTransferAction.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CONFIGURATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    MESSAGE = 13,
    DISCONNECTACTION = 14,
    HOLDACTION = 15,
    KNOWLEDGERETRIEVALACTION = 16,
    APIREQUESTACTION = 17,
    ENDPOINTACTION = 18,
    DEVIATIONACTION = 19,
    ASSISTANTTRANSFERACTION = 20,
    PHONECALLTRANSFERACTION = 21,
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

