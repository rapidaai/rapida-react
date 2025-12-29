// package: agent_kit
// file: agent-kit.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class ConnectAssistantAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectAssistantAction.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectAssistantAction): ConnectAssistantAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectAssistantAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectAssistantAction;
  static deserializeBinaryFromReader(message: ConnectAssistantAction, reader: jspb.BinaryReader): ConnectAssistantAction;
}

export namespace ConnectAssistantAction {
  export type AsObject = {
  }
}

export class GetAssistantAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantAction.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantAction): GetAssistantAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantAction;
  static deserializeBinaryFromReader(message: GetAssistantAction, reader: jspb.BinaryReader): GetAssistantAction;
}

export namespace GetAssistantAction {
  export type AsObject = {
  }
}

export class ExecuteAssistantAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAssistantAction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAssistantAction): ExecuteAssistantAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAssistantAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAssistantAction;
  static deserializeBinaryFromReader(message: ExecuteAssistantAction, reader: jspb.BinaryReader): ExecuteAssistantAction;
}

export namespace ExecuteAssistantAction {
  export type AsObject = {
  }
}

export class AssistantActionRequest extends jspb.Message {
  hasConnect(): boolean;
  clearConnect(): void;
  getConnect(): ConnectAssistantAction | undefined;
  setConnect(value?: ConnectAssistantAction): void;

  hasGet(): boolean;
  clearGet(): void;
  getGet(): GetAssistantAction | undefined;
  setGet(value?: GetAssistantAction): void;

  hasExecute(): boolean;
  clearExecute(): void;
  getExecute(): ExecuteAssistantAction | undefined;
  setExecute(value?: ExecuteAssistantAction): void;

  getRequestCase(): AssistantActionRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantActionRequest): AssistantActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantActionRequest;
  static deserializeBinaryFromReader(message: AssistantActionRequest, reader: jspb.BinaryReader): AssistantActionRequest;
}

export namespace AssistantActionRequest {
  export type AsObject = {
    connect?: ConnectAssistantAction.AsObject,
    get?: GetAssistantAction.AsObject,
    execute?: ExecuteAssistantAction.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    CONNECT = 1,
    GET = 2,
    EXECUTE = 3,
  }
}

export class AssistantActionResult extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantActionResult.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantActionResult): AssistantActionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantActionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantActionResult;
  static deserializeBinaryFromReader(message: AssistantActionResult, reader: jspb.BinaryReader): AssistantActionResult;
}

export namespace AssistantActionResult {
  export type AsObject = {
    success: boolean,
    data: string,
  }
}

export class AssistantActionResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): AssistantActionResult | undefined;
  setResult(value?: AssistantActionResult): void;

  getDataCase(): AssistantActionResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantActionResponse): AssistantActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantActionResponse;
  static deserializeBinaryFromReader(message: AssistantActionResponse, reader: jspb.BinaryReader): AssistantActionResponse;
}

export namespace AssistantActionResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: common_pb.Error.AsObject,
    result?: AssistantActionResult.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    RESULT = 10,
  }
}

export class AgentTalkRequest extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): common_pb.AssistantConversationConfiguration | undefined;
  setConfiguration(value?: common_pb.AssistantConversationConfiguration): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): common_pb.AssistantConversationUserMessage | undefined;
  setMessage(value?: common_pb.AssistantConversationUserMessage): void;

  getRequestCase(): AgentTalkRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentTalkRequest): AgentTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentTalkRequest;
  static deserializeBinaryFromReader(message: AgentTalkRequest, reader: jspb.BinaryReader): AgentTalkRequest;
}

export namespace AgentTalkRequest {
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

export class AgentTalkResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): common_pb.AssistantConversationInterruption | undefined;
  setInterruption(value?: common_pb.AssistantConversationInterruption): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): common_pb.AssistantConversationAssistantMessage | undefined;
  setAssistant(value?: common_pb.AssistantConversationAssistantMessage): void;

  getDataCase(): AgentTalkResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AgentTalkResponse): AgentTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentTalkResponse;
  static deserializeBinaryFromReader(message: AgentTalkResponse, reader: jspb.BinaryReader): AgentTalkResponse;
}

export namespace AgentTalkResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: common_pb.Error.AsObject,
    interruption?: common_pb.AssistantConversationInterruption.AsObject,
    assistant?: common_pb.AssistantConversationAssistantMessage.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INTERRUPTION = 10,
    ASSISTANT = 12,
  }
}

