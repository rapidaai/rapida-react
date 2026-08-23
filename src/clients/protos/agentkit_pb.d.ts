// package: talk_api
// file: agentkit.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as talk_api_pb from "./talk-api_pb";
import * as observability_api_pb from "./observability-api_pb";

export class TalkInput extends jspb.Message {
  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): talk_api_pb.ConversationInitialization | undefined;
  setInitialization(value?: talk_api_pb.ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): talk_api_pb.ConversationConfiguration | undefined;
  setConfiguration(value?: talk_api_pb.ConversationConfiguration): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): talk_api_pb.ConversationUserMessage | undefined;
  setUser(value?: talk_api_pb.ConversationUserMessage): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): talk_api_pb.ConversationInterruption | undefined;
  setInterruption(value?: talk_api_pb.ConversationInterruption): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): talk_api_pb.ConversationMetadata | undefined;
  setMetadata(value?: talk_api_pb.ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): talk_api_pb.ConversationMetric | undefined;
  setMetric(value?: talk_api_pb.ConversationMetric): void;

  hasToolcall(): boolean;
  clearToolcall(): void;
  getToolcall(): talk_api_pb.ConversationToolCall | undefined;
  setToolcall(value?: talk_api_pb.ConversationToolCall): void;

  hasToolcallresult(): boolean;
  clearToolcallresult(): void;
  getToolcallresult(): talk_api_pb.ConversationToolCallResult | undefined;
  setToolcallresult(value?: talk_api_pb.ConversationToolCallResult): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): talk_api_pb.ConversationAssistantMessage | undefined;
  setAssistant(value?: talk_api_pb.ConversationAssistantMessage): void;

  getRequestCase(): TalkInput.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkInput.AsObject;
  static toObject(includeInstance: boolean, msg: TalkInput): TalkInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkInput;
  static deserializeBinaryFromReader(message: TalkInput, reader: jspb.BinaryReader): TalkInput;
}

export namespace TalkInput {
  export type AsObject = {
    initialization?: talk_api_pb.ConversationInitialization.AsObject,
    configuration?: talk_api_pb.ConversationConfiguration.AsObject,
    user?: talk_api_pb.ConversationUserMessage.AsObject,
    interruption?: talk_api_pb.ConversationInterruption.AsObject,
    metadata?: talk_api_pb.ConversationMetadata.AsObject,
    metric?: talk_api_pb.ConversationMetric.AsObject,
    toolcall?: talk_api_pb.ConversationToolCall.AsObject,
    toolcallresult?: talk_api_pb.ConversationToolCallResult.AsObject,
    assistant?: talk_api_pb.ConversationAssistantMessage.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    INITIALIZATION = 1,
    CONFIGURATION = 2,
    USER = 3,
    INTERRUPTION = 4,
    METADATA = 5,
    METRIC = 6,
    TOOLCALL = 7,
    TOOLCALLRESULT = 8,
    ASSISTANT = 9,
  }
}

export class ConversationControl extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAction(): ConversationControl.ActionMap[keyof ConversationControl.ActionMap];
  setAction(value: ConversationControl.ActionMap[keyof ConversationControl.ActionMap]): void;

  clearTypesList(): void;
  getTypesList(): Array<ConversationControl.TypeMap[keyof ConversationControl.TypeMap]>;
  setTypesList(value: Array<ConversationControl.TypeMap[keyof ConversationControl.TypeMap]>): void;
  addTypes(value: ConversationControl.TypeMap[keyof ConversationControl.TypeMap], index?: number): ConversationControl.TypeMap[keyof ConversationControl.TypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationControl.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationControl): ConversationControl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationControl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationControl;
  static deserializeBinaryFromReader(message: ConversationControl, reader: jspb.BinaryReader): ConversationControl;
}

export namespace ConversationControl {
  export type AsObject = {
    id: string,
    action: ConversationControl.ActionMap[keyof ConversationControl.ActionMap],
    typesList: Array<ConversationControl.TypeMap[keyof ConversationControl.TypeMap]>,
  }

  export interface ActionMap {
    CONTROL_ACTION_UNSPECIFIED: 0;
    CONTROL_ACTION_BLOCK: 1;
    CONTROL_ACTION_UNBLOCK: 2;
  }

  export const Action: ActionMap;

  export interface TypeMap {
    CONTROL_TYPE_UNSPECIFIED: 0;
    CONTROL_TYPE_USER_AUDIO: 1;
    CONTROL_TYPE_USER_TEXT: 2;
    CONTROL_TYPE_BARGE_IN: 3;
  }

  export const Type: TypeMap;
}

export class TalkOutput extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): talk_api_pb.ConversationInitialization | undefined;
  setInitialization(value?: talk_api_pb.ConversationInitialization): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): talk_api_pb.ConversationInterruption | undefined;
  setInterruption(value?: talk_api_pb.ConversationInterruption): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): talk_api_pb.ConversationUserMessage | undefined;
  setUser(value?: talk_api_pb.ConversationUserMessage): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): talk_api_pb.ConversationAssistantMessage | undefined;
  setAssistant(value?: talk_api_pb.ConversationAssistantMessage): void;

  hasToolcall(): boolean;
  clearToolcall(): void;
  getToolcall(): talk_api_pb.ConversationToolCall | undefined;
  setToolcall(value?: talk_api_pb.ConversationToolCall): void;

  hasToolcallresult(): boolean;
  clearToolcallresult(): void;
  getToolcallresult(): talk_api_pb.ConversationToolCallResult | undefined;
  setToolcallresult(value?: talk_api_pb.ConversationToolCallResult): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasObservability(): boolean;
  clearObservability(): void;
  getObservability(): observability_api_pb.ObservabilityRecord | undefined;
  setObservability(value?: observability_api_pb.ObservabilityRecord): void;

  hasControl(): boolean;
  clearControl(): void;
  getControl(): ConversationControl | undefined;
  setControl(value?: ConversationControl): void;

  getDataCase(): TalkOutput.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TalkOutput): TalkOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkOutput;
  static deserializeBinaryFromReader(message: TalkOutput, reader: jspb.BinaryReader): TalkOutput;
}

export namespace TalkOutput {
  export type AsObject = {
    code: number,
    success: boolean,
    initialization?: talk_api_pb.ConversationInitialization.AsObject,
    interruption?: talk_api_pb.ConversationInterruption.AsObject,
    user?: talk_api_pb.ConversationUserMessage.AsObject,
    assistant?: talk_api_pb.ConversationAssistantMessage.AsObject,
    toolcall?: talk_api_pb.ConversationToolCall.AsObject,
    toolcallresult?: talk_api_pb.ConversationToolCallResult.AsObject,
    error?: common_pb.Error.AsObject,
    observability?: observability_api_pb.ObservabilityRecord.AsObject,
    control?: ConversationControl.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INITIALIZATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    TOOLCALL = 13,
    TOOLCALLRESULT = 14,
    ERROR = 15,
    OBSERVABILITY = 16,
    CONTROL = 17,
  }
}

