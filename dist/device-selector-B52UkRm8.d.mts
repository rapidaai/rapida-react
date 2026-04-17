import * as jspb from 'google-protobuf';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import { grpc } from '@improbable-eng/grpc-web';
import TypedEmitter from 'typed-emitter';
import { FC, HTMLAttributes } from 'react';

declare enum Channel {
    Text = "text",
    Audio = "audio"
}

// package: 
// file: common.proto



declare class FieldSelector extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldSelector.AsObject;
  static toObject(includeInstance: boolean, msg: FieldSelector): FieldSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldSelector;
  static deserializeBinaryFromReader(message: FieldSelector, reader: jspb.BinaryReader): FieldSelector;
}

declare namespace FieldSelector {
  export type AsObject = {
    field: string,
  }
}

declare class AssistantDefinition extends jspb.Message {
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

declare namespace AssistantDefinition {
  export type AsObject = {
    assistantid: string,
    version: string,
  }
}

declare class Criteria extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getLogic(): string;
  setLogic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Criteria.AsObject;
  static toObject(includeInstance: boolean, msg: Criteria): Criteria.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Criteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Criteria;
  static deserializeBinaryFromReader(message: Criteria, reader: jspb.BinaryReader): Criteria;
}

declare namespace Criteria {
  export type AsObject = {
    key: string,
    value: string,
    logic: string,
  }
}

declare class Error$1 extends jspb.Message {
  getErrorcode(): string;
  setErrorcode(value: string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getHumanmessage(): string;
  setHumanmessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error$1.AsObject;
  static toObject(includeInstance: boolean, msg: Error$1): Error$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error$1;
  static deserializeBinaryFromReader(message: Error$1, reader: jspb.BinaryReader): Error$1;
}

declare namespace Error$1 {
  export type AsObject = {
    errorcode: string,
    errormessage: string,
    humanmessage: string,
  }
}

declare class Paginate extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paginate.AsObject;
  static toObject(includeInstance: boolean, msg: Paginate): Paginate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Paginate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paginate;
  static deserializeBinaryFromReader(message: Paginate, reader: jspb.BinaryReader): Paginate;
}

declare namespace Paginate {
  export type AsObject = {
    page: number,
    pagesize: number,
  }
}

declare class Paginated extends jspb.Message {
  getCurrentpage(): number;
  setCurrentpage(value: number): void;

  getTotalitem(): number;
  setTotalitem(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paginated.AsObject;
  static toObject(includeInstance: boolean, msg: Paginated): Paginated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Paginated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paginated;
  static deserializeBinaryFromReader(message: Paginated, reader: jspb.BinaryReader): Paginated;
}

declare namespace Paginated {
  export type AsObject = {
    currentpage: number,
    totalitem: number,
  }
}

declare class Ordering extends jspb.Message {
  getColumn(): string;
  setColumn(value: string): void;

  getOrder(): string;
  setOrder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ordering.AsObject;
  static toObject(includeInstance: boolean, msg: Ordering): Ordering.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ordering, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ordering;
  static deserializeBinaryFromReader(message: Ordering, reader: jspb.BinaryReader): Ordering;
}

declare namespace Ordering {
  export type AsObject = {
    column: string,
    order: string,
  }
}

declare class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

declare namespace User {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    role: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

declare class BaseResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BaseResponse): BaseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseResponse;
  static deserializeBinaryFromReader(message: BaseResponse, reader: jspb.BinaryReader): BaseResponse;
}

declare namespace BaseResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataMap: Array<[string, string]>,
    error?: Error$1.AsObject,
  }
}

declare class Metadata extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

declare namespace Metadata {
  export type AsObject = {
    id: string,
    key: string,
    value: string,
  }
}

declare class Argument extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Argument.AsObject;
  static toObject(includeInstance: boolean, msg: Argument): Argument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Argument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Argument;
  static deserializeBinaryFromReader(message: Argument, reader: jspb.BinaryReader): Argument;
}

declare namespace Argument {
  export type AsObject = {
    id: string,
    name: string,
    value: string,
  }
}

declare class Variable extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasDefaultvalue(): boolean;
  clearDefaultvalue(): void;
  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

declare namespace Variable {
  export type AsObject = {
    id: string,
    name: string,
    type: string,
    defaultvalue: string,
  }
}

declare class Tag extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearTagList(): void;
  getTagList(): Array<string>;
  setTagList(value: Array<string>): void;
  addTag(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

declare namespace Tag {
  export type AsObject = {
    id: string,
    tagList: Array<string>,
  }
}

declare class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getContact(): string;
  setContact(value: string): void;

  getSize(): string;
  setSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

declare namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    industry: string,
    contact: string,
    size: string,
  }
}

declare class Metric extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metric.AsObject;
  static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metric;
  static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
}

declare namespace Metric {
  export type AsObject = {
    name: string,
    value: string,
    description: string,
  }
}

declare class AssistantMessage extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<string>;
  setContentsList(value: Array<string>): void;
  addContents(value: string, index?: number): string;

  clearToolcallsList(): void;
  getToolcallsList(): Array<ToolCall>;
  setToolcallsList(value: Array<ToolCall>): void;
  addToolcalls(value?: ToolCall, index?: number): ToolCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessage): AssistantMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessage;
  static deserializeBinaryFromReader(message: AssistantMessage, reader: jspb.BinaryReader): AssistantMessage;
}

declare namespace AssistantMessage {
  export type AsObject = {
    contentsList: Array<string>,
    toolcallsList: Array<ToolCall.AsObject>,
  }
}

declare class SystemMessage extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SystemMessage): SystemMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemMessage;
  static deserializeBinaryFromReader(message: SystemMessage, reader: jspb.BinaryReader): SystemMessage;
}

declare namespace SystemMessage {
  export type AsObject = {
    content: string,
  }
}

declare class UserMessage extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UserMessage): UserMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMessage;
  static deserializeBinaryFromReader(message: UserMessage, reader: jspb.BinaryReader): UserMessage;
}

declare namespace UserMessage {
  export type AsObject = {
    content: string,
  }
}

declare class ToolMessage extends jspb.Message {
  clearToolsList(): void;
  getToolsList(): Array<ToolMessage.Tool>;
  setToolsList(value: Array<ToolMessage.Tool>): void;
  addTools(value?: ToolMessage.Tool, index?: number): ToolMessage.Tool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ToolMessage): ToolMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolMessage;
  static deserializeBinaryFromReader(message: ToolMessage, reader: jspb.BinaryReader): ToolMessage;
}

declare namespace ToolMessage {
  export type AsObject = {
    toolsList: Array<ToolMessage.Tool.AsObject>,
  }

  export class Tool extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getId(): string;
    setId(value: string): void;

    getContent(): string;
    setContent(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tool.AsObject;
    static toObject(includeInstance: boolean, msg: Tool): Tool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tool;
    static deserializeBinaryFromReader(message: Tool, reader: jspb.BinaryReader): Tool;
  }

  export namespace Tool {
    export type AsObject = {
      name: string,
      id: string,
      content: string,
    }
  }
}

declare class Message$1 extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantMessage | undefined;
  setAssistant(value?: AssistantMessage): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserMessage | undefined;
  setUser(value?: UserMessage): void;

  hasTool(): boolean;
  clearTool(): void;
  getTool(): ToolMessage | undefined;
  setTool(value?: ToolMessage): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): SystemMessage | undefined;
  setSystem(value?: SystemMessage): void;

  getMessageCase(): Message$1.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message$1.AsObject;
  static toObject(includeInstance: boolean, msg: Message$1): Message$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message$1;
  static deserializeBinaryFromReader(message: Message$1, reader: jspb.BinaryReader): Message$1;
}

declare namespace Message$1 {
  export type AsObject = {
    role: string,
    assistant?: AssistantMessage.AsObject,
    user?: UserMessage.AsObject,
    tool?: ToolMessage.AsObject,
    system?: SystemMessage.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ASSISTANT = 10,
    USER = 11,
    TOOL = 12,
    SYSTEM = 13,
  }
}

declare class ToolCall extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasFunction(): boolean;
  clearFunction(): void;
  getFunction(): FunctionCall | undefined;
  setFunction(value?: FunctionCall): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolCall.AsObject;
  static toObject(includeInstance: boolean, msg: ToolCall): ToolCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolCall;
  static deserializeBinaryFromReader(message: ToolCall, reader: jspb.BinaryReader): ToolCall;
}

declare namespace ToolCall {
  export type AsObject = {
    id: string,
    type: string,
    pb_function?: FunctionCall.AsObject,
  }
}

declare class FunctionCall extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getArguments(): string;
  setArguments(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionCall.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionCall;
  static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
}

declare namespace FunctionCall {
  export type AsObject = {
    name: string,
    arguments: string,
  }
}

declare class Knowledge extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getEmbeddingmodelproviderid(): string;
  setEmbeddingmodelproviderid(value: string): void;

  getEmbeddingmodelprovidername(): string;
  setEmbeddingmodelprovidername(value: string): void;

  clearKnowledgeembeddingmodeloptionsList(): void;
  getKnowledgeembeddingmodeloptionsList(): Array<Metadata>;
  setKnowledgeembeddingmodeloptionsList(value: Array<Metadata>): void;
  addKnowledgeembeddingmodeloptions(value?: Metadata, index?: number): Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  hasKnowledgetag(): boolean;
  clearKnowledgetag(): void;
  getKnowledgetag(): Tag | undefined;
  setKnowledgetag(value?: Tag): void;

  getDocumentcount(): number;
  setDocumentcount(value: number): void;

  getTokencount(): number;
  setTokencount(value: number): void;

  getWordcount(): number;
  setWordcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Knowledge.AsObject;
  static toObject(includeInstance: boolean, msg: Knowledge): Knowledge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Knowledge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Knowledge;
  static deserializeBinaryFromReader(message: Knowledge, reader: jspb.BinaryReader): Knowledge;
}

declare namespace Knowledge {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    visibility: string,
    language: string,
    embeddingmodelproviderid: string,
    embeddingmodelprovidername: string,
    knowledgeembeddingmodeloptionsList: Array<Metadata.AsObject>,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    organizationid: string,
    projectid: string,
    organization?: Organization.AsObject,
    knowledgetag?: Tag.AsObject,
    documentcount: number,
    tokencount: number,
    wordcount: number,
  }
}

declare class TextPrompt extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextPrompt): TextPrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextPrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPrompt;
  static deserializeBinaryFromReader(message: TextPrompt, reader: jspb.BinaryReader): TextPrompt;
}

declare namespace TextPrompt {
  export type AsObject = {
    role: string,
    content: string,
  }
}

declare class TextChatCompletePrompt extends jspb.Message {
  clearPromptList(): void;
  getPromptList(): Array<TextPrompt>;
  setPromptList(value: Array<TextPrompt>): void;
  addPrompt(value?: TextPrompt, index?: number): TextPrompt;

  clearPromptvariablesList(): void;
  getPromptvariablesList(): Array<Variable>;
  setPromptvariablesList(value: Array<Variable>): void;
  addPromptvariables(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextChatCompletePrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextChatCompletePrompt): TextChatCompletePrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextChatCompletePrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextChatCompletePrompt;
  static deserializeBinaryFromReader(message: TextChatCompletePrompt, reader: jspb.BinaryReader): TextChatCompletePrompt;
}

declare namespace TextChatCompletePrompt {
  export type AsObject = {
    promptList: Array<TextPrompt.AsObject>,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

declare class AssistantConversationMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

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

  getAssistantprovidermodelid(): string;
  setAssistantprovidermodelid(value: string): void;

  clearMetadataList(): void;
  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): void;
  addMetadata(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationMessage): AssistantConversationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationMessage;
  static deserializeBinaryFromReader(message: AssistantConversationMessage, reader: jspb.BinaryReader): AssistantConversationMessage;
}

declare namespace AssistantConversationMessage {
  export type AsObject = {
    id: string,
    messageid: string,
    assistantconversationid: string,
    role: string,
    body: string,
    source: string,
    metricsList: Array<Metric.AsObject>,
    status: string,
    createdby: string,
    updatedby: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantid: string,
    assistantprovidermodelid: string,
    metadataList: Array<Metadata.AsObject>,
  }
}

declare class AssistantConversationContext extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_struct_pb.Struct | undefined;
  setResult(value?: google_protobuf_struct_pb.Struct): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): google_protobuf_struct_pb.Struct | undefined;
  setQuery(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationContext.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationContext): AssistantConversationContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationContext;
  static deserializeBinaryFromReader(message: AssistantConversationContext, reader: jspb.BinaryReader): AssistantConversationContext;
}

declare namespace AssistantConversationContext {
  export type AsObject = {
    id: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    result?: google_protobuf_struct_pb.Struct.AsObject,
    query?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class AssistantConversationRecording extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantrecordingurl(): string;
  setAssistantrecordingurl(value: string): void;

  getUserrecordingurl(): string;
  setUserrecordingurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationRecording.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationRecording): AssistantConversationRecording.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationRecording, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationRecording;
  static deserializeBinaryFromReader(message: AssistantConversationRecording, reader: jspb.BinaryReader): AssistantConversationRecording;
}

declare namespace AssistantConversationRecording {
  export type AsObject = {
    id: string,
    assistantrecordingurl: string,
    userrecordingurl: string,
  }
}

declare class AssistantConversationTelephonyEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  getEventtype(): string;
  setEventtype(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationTelephonyEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationTelephonyEvent): AssistantConversationTelephonyEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationTelephonyEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationTelephonyEvent;
  static deserializeBinaryFromReader(message: AssistantConversationTelephonyEvent, reader: jspb.BinaryReader): AssistantConversationTelephonyEvent;
}

declare namespace AssistantConversationTelephonyEvent {
  export type AsObject = {
    id: string,
    assistantconversationid: string,
    provider: string,
    eventtype: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class AssistantConversation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  getAssistantprovidermodelid(): string;
  setAssistantprovidermodelid(value: string): void;

  clearAssistantconversationmessageList(): void;
  getAssistantconversationmessageList(): Array<AssistantConversationMessage>;
  setAssistantconversationmessageList(value: Array<AssistantConversationMessage>): void;
  addAssistantconversationmessage(value?: AssistantConversationMessage, index?: number): AssistantConversationMessage;

  getIdentifier(): string;
  setIdentifier(value: string): void;

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

  clearContextsList(): void;
  getContextsList(): Array<AssistantConversationContext>;
  setContextsList(value: Array<AssistantConversationContext>): void;
  addContexts(value?: AssistantConversationContext, index?: number): AssistantConversationContext;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  clearMetadataList(): void;
  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): void;
  addMetadata(value?: Metadata, index?: number): Metadata;

  clearArgumentsList(): void;
  getArgumentsList(): Array<Argument>;
  setArgumentsList(value: Array<Argument>): void;
  addArguments(value?: Argument, index?: number): Argument;

  clearOptionsList(): void;
  getOptionsList(): Array<Metadata>;
  setOptionsList(value: Array<Metadata>): void;
  addOptions(value?: Metadata, index?: number): Metadata;

  getDirection(): string;
  setDirection(value: string): void;

  clearRecordingsList(): void;
  getRecordingsList(): Array<AssistantConversationRecording>;
  setRecordingsList(value: Array<AssistantConversationRecording>): void;
  addRecordings(value?: AssistantConversationRecording, index?: number): AssistantConversationRecording;

  clearTelephonyeventsList(): void;
  getTelephonyeventsList(): Array<AssistantConversationTelephonyEvent>;
  setTelephonyeventsList(value: Array<AssistantConversationTelephonyEvent>): void;
  addTelephonyevents(value?: AssistantConversationTelephonyEvent, index?: number): AssistantConversationTelephonyEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversation.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversation): AssistantConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversation;
  static deserializeBinaryFromReader(message: AssistantConversation, reader: jspb.BinaryReader): AssistantConversation;
}

declare namespace AssistantConversation {
  export type AsObject = {
    id: string,
    userid: string,
    assistantid: string,
    name: string,
    projectid: string,
    organizationid: string,
    source: string,
    createdby: string,
    updatedby: string,
    user?: User.AsObject,
    assistantprovidermodelid: string,
    assistantconversationmessageList: Array<AssistantConversationMessage.AsObject>,
    identifier: string,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contextsList: Array<AssistantConversationContext.AsObject>,
    metricsList: Array<Metric.AsObject>,
    metadataList: Array<Metadata.AsObject>,
    argumentsList: Array<Argument.AsObject>,
    optionsList: Array<Metadata.AsObject>,
    direction: string,
    recordingsList: Array<AssistantConversationRecording.AsObject>,
    telephonyeventsList: Array<AssistantConversationTelephonyEvent.AsObject>,
  }
}

declare class GetAllAssistantConversationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getSource(): SourceMap[keyof SourceMap];
  setSource(value: SourceMap[keyof SourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantConversationRequest): GetAllAssistantConversationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantConversationRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantConversationRequest, reader: jspb.BinaryReader): GetAllAssistantConversationRequest;
}

declare namespace GetAllAssistantConversationRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    source: SourceMap[keyof SourceMap],
  }
}

declare class GetAllAssistantConversationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConversation>;
  setDataList(value: Array<AssistantConversation>): void;
  addData(value?: AssistantConversation, index?: number): AssistantConversation;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantConversationResponse): GetAllAssistantConversationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantConversationResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantConversationResponse, reader: jspb.BinaryReader): GetAllAssistantConversationResponse;
}

declare namespace GetAllAssistantConversationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversation.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetAllConversationMessageRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Ordering | undefined;
  setOrder(value?: Ordering): void;

  getSource(): SourceMap[keyof SourceMap];
  setSource(value: SourceMap[keyof SourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllConversationMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllConversationMessageRequest): GetAllConversationMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllConversationMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllConversationMessageRequest;
  static deserializeBinaryFromReader(message: GetAllConversationMessageRequest, reader: jspb.BinaryReader): GetAllConversationMessageRequest;
}

declare namespace GetAllConversationMessageRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    order?: Ordering.AsObject,
    source: SourceMap[keyof SourceMap],
  }
}

declare class GetAllConversationMessageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConversationMessage>;
  setDataList(value: Array<AssistantConversationMessage>): void;
  addData(value?: AssistantConversationMessage, index?: number): AssistantConversationMessage;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllConversationMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllConversationMessageResponse): GetAllConversationMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllConversationMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllConversationMessageResponse;
  static deserializeBinaryFromReader(message: GetAllConversationMessageResponse, reader: jspb.BinaryReader): GetAllConversationMessageResponse;
}

declare namespace GetAllConversationMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversationMessage.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

interface SourceMap {
  WEB_PLUGIN: 0;
  DEBUGGER: 1;
  SDK: 2;
  PHONE_CALL: 3;
  WHATSAPP: 4;
}

// package: talk_api
// file: talk-api.proto



declare class ConversationToolCall extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToolid(): string;
  setToolid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationToolCall.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationToolCall): ConversationToolCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationToolCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationToolCall;
  static deserializeBinaryFromReader(message: ConversationToolCall, reader: jspb.BinaryReader): ConversationToolCall;
}

declare namespace ConversationToolCall {
  export type AsObject = {
    id: string,
    toolid: string,
    name: string,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class ConversationToolResult extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToolid(): string;
  setToolid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationToolResult.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationToolResult): ConversationToolResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationToolResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationToolResult;
  static deserializeBinaryFromReader(message: ConversationToolResult, reader: jspb.BinaryReader): ConversationToolResult;
}

declare namespace ConversationToolResult {
  export type AsObject = {
    id: string,
    toolid: string,
    name: string,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    success: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class ConversationMetric extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationMetric.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationMetric): ConversationMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationMetric;
  static deserializeBinaryFromReader(message: ConversationMetric, reader: jspb.BinaryReader): ConversationMetric;
}

declare namespace ConversationMetric {
  export type AsObject = {
    assistantconversationid: string,
    metricsList: Array<Metric.AsObject>,
  }
}

declare class ConversationMetadata extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  clearMetadataList(): void;
  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): void;
  addMetadata(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationMetadata): ConversationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationMetadata;
  static deserializeBinaryFromReader(message: ConversationMetadata, reader: jspb.BinaryReader): ConversationMetadata;
}

declare namespace ConversationMetadata {
  export type AsObject = {
    assistantconversationid: string,
    metadataList: Array<Metadata.AsObject>,
  }
}

declare class ConversationDirective extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): ConversationDirective.DirectiveTypeMap[keyof ConversationDirective.DirectiveTypeMap];
  setType(value: ConversationDirective.DirectiveTypeMap[keyof ConversationDirective.DirectiveTypeMap]): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationDirective.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationDirective): ConversationDirective.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationDirective, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationDirective;
  static deserializeBinaryFromReader(message: ConversationDirective, reader: jspb.BinaryReader): ConversationDirective;
}

declare namespace ConversationDirective {
  export type AsObject = {
    id: string,
    type: ConversationDirective.DirectiveTypeMap[keyof ConversationDirective.DirectiveTypeMap],
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface DirectiveTypeMap {
    DIRECTIVE_TYPE_UNSPECIFIED: 0;
    END_CONVERSATION: 1;
    TRANSFER_CONVERSATION: 2;
  }

  export const DirectiveType: DirectiveTypeMap;
}

declare class ConversationError extends jspb.Message {
  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getDetailsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearDetailsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationError.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationError): ConversationError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationError;
  static deserializeBinaryFromReader(message: ConversationError, reader: jspb.BinaryReader): ConversationError;
}

declare namespace ConversationError {
  export type AsObject = {
    assistantconversationid: string,
    message: string,
    detailsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

declare class ConversationEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationEvent): ConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationEvent;
  static deserializeBinaryFromReader(message: ConversationEvent, reader: jspb.BinaryReader): ConversationEvent;
}

declare namespace ConversationEvent {
  export type AsObject = {
    id: string,
    name: string,
    dataMap: Array<[string, string]>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class AudioConfig extends jspb.Message {
  getSamplerate(): number;
  setSamplerate(value: number): void;

  getAudioformat(): AudioConfig.AudioFormatMap[keyof AudioConfig.AudioFormatMap];
  setAudioformat(value: AudioConfig.AudioFormatMap[keyof AudioConfig.AudioFormatMap]): void;

  getChannels(): number;
  setChannels(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

declare namespace AudioConfig {
  export type AsObject = {
    samplerate: number,
    audioformat: AudioConfig.AudioFormatMap[keyof AudioConfig.AudioFormatMap],
    channels: number,
  }

  export interface AudioFormatMap {
    LINEAR16: 0;
    MULAW8: 1;
  }

  export const AudioFormat: AudioFormatMap;
}

declare class TextConfig extends jspb.Message {
  getCharset(): string;
  setCharset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TextConfig): TextConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextConfig;
  static deserializeBinaryFromReader(message: TextConfig, reader: jspb.BinaryReader): TextConfig;
}

declare namespace TextConfig {
  export type AsObject = {
    charset: string,
  }
}

declare class StreamConfig extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): AudioConfig | undefined;
  setAudio(value?: AudioConfig): void;

  hasText(): boolean;
  clearText(): void;
  getText(): TextConfig | undefined;
  setText(value?: TextConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamConfig): StreamConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamConfig;
  static deserializeBinaryFromReader(message: StreamConfig, reader: jspb.BinaryReader): StreamConfig;
}

declare namespace StreamConfig {
  export type AsObject = {
    audio?: AudioConfig.AsObject,
    text?: TextConfig.AsObject,
  }
}

declare class WebIdentity extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: WebIdentity): WebIdentity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebIdentity;
  static deserializeBinaryFromReader(message: WebIdentity, reader: jspb.BinaryReader): WebIdentity;
}

declare namespace WebIdentity {
  export type AsObject = {
    userid: string,
  }
}

declare class PhoneIdentity extends jspb.Message {
  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneIdentity): PhoneIdentity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneIdentity;
  static deserializeBinaryFromReader(message: PhoneIdentity, reader: jspb.BinaryReader): PhoneIdentity;
}

declare namespace PhoneIdentity {
  export type AsObject = {
    phonenumber: string,
  }
}

declare class ConversationInitialization extends jspb.Message {
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

  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  getStreammode(): StreamModeMap[keyof StreamModeMap];
  setStreammode(value: StreamModeMap[keyof StreamModeMap]): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): PhoneIdentity | undefined;
  setPhone(value?: PhoneIdentity): void;

  hasWeb(): boolean;
  clearWeb(): void;
  getWeb(): WebIdentity | undefined;
  setWeb(value?: WebIdentity): void;

  getUseridentityCase(): ConversationInitialization.UseridentityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationInitialization.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationInitialization): ConversationInitialization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationInitialization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationInitialization;
  static deserializeBinaryFromReader(message: ConversationInitialization, reader: jspb.BinaryReader): ConversationInitialization;
}

declare namespace ConversationInitialization {
  export type AsObject = {
    assistantconversationid: string,
    assistant?: AssistantDefinition.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    streammode: StreamModeMap[keyof StreamModeMap],
    phone?: PhoneIdentity.AsObject,
    web?: WebIdentity.AsObject,
  }

  export enum UseridentityCase {
    USERIDENTITY_NOT_SET = 0,
    PHONE = 10,
    WEB = 11,
  }
}

declare class ConversationConfiguration extends jspb.Message {
  getStreammode(): StreamModeMap[keyof StreamModeMap];
  setStreammode(value: StreamModeMap[keyof StreamModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationConfiguration): ConversationConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationConfiguration;
  static deserializeBinaryFromReader(message: ConversationConfiguration, reader: jspb.BinaryReader): ConversationConfiguration;
}

declare namespace ConversationConfiguration {
  export type AsObject = {
    streammode: StreamModeMap[keyof StreamModeMap],
  }
}

declare class ConversationInterruption extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): ConversationInterruption.InterruptionTypeMap[keyof ConversationInterruption.InterruptionTypeMap];
  setType(value: ConversationInterruption.InterruptionTypeMap[keyof ConversationInterruption.InterruptionTypeMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationInterruption.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationInterruption): ConversationInterruption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationInterruption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationInterruption;
  static deserializeBinaryFromReader(message: ConversationInterruption, reader: jspb.BinaryReader): ConversationInterruption;
}

declare namespace ConversationInterruption {
  export type AsObject = {
    id: string,
    type: ConversationInterruption.InterruptionTypeMap[keyof ConversationInterruption.InterruptionTypeMap],
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface InterruptionTypeMap {
    INTERRUPTION_TYPE_UNSPECIFIED: 0;
    INTERRUPTION_TYPE_VAD: 1;
    INTERRUPTION_TYPE_WORD: 2;
  }

  export const InterruptionType: InterruptionTypeMap;
}

declare class ConversationDisconnection extends jspb.Message {
  getType(): ConversationDisconnection.DisconnectionTypeMap[keyof ConversationDisconnection.DisconnectionTypeMap];
  setType(value: ConversationDisconnection.DisconnectionTypeMap[keyof ConversationDisconnection.DisconnectionTypeMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationDisconnection.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationDisconnection): ConversationDisconnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationDisconnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationDisconnection;
  static deserializeBinaryFromReader(message: ConversationDisconnection, reader: jspb.BinaryReader): ConversationDisconnection;
}

declare namespace ConversationDisconnection {
  export type AsObject = {
    type: ConversationDisconnection.DisconnectionTypeMap[keyof ConversationDisconnection.DisconnectionTypeMap],
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface DisconnectionTypeMap {
    DISCONNECTION_TYPE_UNSPECIFIED: 0;
    DISCONNECTION_TYPE_TOOL: 1;
    DISCONNECTION_TYPE_USER: 2;
  }

  export const DisconnectionType: DisconnectionTypeMap;
}

declare class ConversationAssistantMessage$1 extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessageCase(): ConversationAssistantMessage$1.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationAssistantMessage$1.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationAssistantMessage$1): ConversationAssistantMessage$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationAssistantMessage$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationAssistantMessage$1;
  static deserializeBinaryFromReader(message: ConversationAssistantMessage$1, reader: jspb.BinaryReader): ConversationAssistantMessage$1;
}

declare namespace ConversationAssistantMessage$1 {
  export type AsObject = {
    audio: Uint8Array | string,
    text: string,
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

declare class ConversationUserMessage$1 extends jspb.Message {
  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getId(): string;
  setId(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessageCase(): ConversationUserMessage$1.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationUserMessage$1.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationUserMessage$1): ConversationUserMessage$1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationUserMessage$1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationUserMessage$1;
  static deserializeBinaryFromReader(message: ConversationUserMessage$1, reader: jspb.BinaryReader): ConversationUserMessage$1;
}

declare namespace ConversationUserMessage$1 {
  export type AsObject = {
    audio: Uint8Array | string,
    text: string,
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

declare class AssistantTalkRequest extends jspb.Message {
  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): ConversationInitialization | undefined;
  setInitialization(value?: ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): ConversationConfiguration | undefined;
  setConfiguration(value?: ConversationConfiguration): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): ConversationUserMessage$1 | undefined;
  setMessage(value?: ConversationUserMessage$1): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ConversationMetadata | undefined;
  setMetadata(value?: ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): ConversationMetric | undefined;
  setMetric(value?: ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): ConversationDisconnection | undefined;
  setDisconnection(value?: ConversationDisconnection): void;

  getRequestCase(): AssistantTalkRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTalkRequest): AssistantTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTalkRequest;
  static deserializeBinaryFromReader(message: AssistantTalkRequest, reader: jspb.BinaryReader): AssistantTalkRequest;
}

declare namespace AssistantTalkRequest {
  export type AsObject = {
    initialization?: ConversationInitialization.AsObject,
    configuration?: ConversationConfiguration.AsObject,
    message?: ConversationUserMessage$1.AsObject,
    metadata?: ConversationMetadata.AsObject,
    metric?: ConversationMetric.AsObject,
    disconnection?: ConversationDisconnection.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    INITIALIZATION = 1,
    CONFIGURATION = 2,
    MESSAGE = 3,
    METADATA = 4,
    METRIC = 5,
    DISCONNECTION = 6,
  }
}

declare class AssistantTalkResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): ConversationInitialization | undefined;
  setInitialization(value?: ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): ConversationConfiguration | undefined;
  setConfiguration(value?: ConversationConfiguration): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): ConversationInterruption | undefined;
  setInterruption(value?: ConversationInterruption): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): ConversationUserMessage$1 | undefined;
  setUser(value?: ConversationUserMessage$1): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): ConversationAssistantMessage$1 | undefined;
  setAssistant(value?: ConversationAssistantMessage$1): void;

  hasToolcall(): boolean;
  clearToolcall(): void;
  getToolcall(): ConversationToolCall | undefined;
  setToolcall(value?: ConversationToolCall): void;

  hasToolresult(): boolean;
  clearToolresult(): void;
  getToolresult(): ConversationToolResult | undefined;
  setToolresult(value?: ConversationToolResult): void;

  hasDirective(): boolean;
  clearDirective(): void;
  getDirective(): ConversationDirective | undefined;
  setDirective(value?: ConversationDirective): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ConversationMetadata | undefined;
  setMetadata(value?: ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): ConversationMetric | undefined;
  setMetric(value?: ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): ConversationDisconnection | undefined;
  setDisconnection(value?: ConversationDisconnection): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): ConversationEvent | undefined;
  setEvent(value?: ConversationEvent): void;

  hasError(): boolean;
  clearError(): void;
  getError(): ConversationError | undefined;
  setError(value?: ConversationError): void;

  getDataCase(): AssistantTalkResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTalkResponse): AssistantTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTalkResponse;
  static deserializeBinaryFromReader(message: AssistantTalkResponse, reader: jspb.BinaryReader): AssistantTalkResponse;
}

declare namespace AssistantTalkResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    initialization?: ConversationInitialization.AsObject,
    configuration?: ConversationConfiguration.AsObject,
    interruption?: ConversationInterruption.AsObject,
    user?: ConversationUserMessage$1.AsObject,
    assistant?: ConversationAssistantMessage$1.AsObject,
    toolcall?: ConversationToolCall.AsObject,
    toolresult?: ConversationToolResult.AsObject,
    directive?: ConversationDirective.AsObject,
    metadata?: ConversationMetadata.AsObject,
    metric?: ConversationMetric.AsObject,
    disconnection?: ConversationDisconnection.AsObject,
    event?: ConversationEvent.AsObject,
    error?: ConversationError.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INITIALIZATION = 8,
    CONFIGURATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    TOOLCALL = 13,
    TOOLRESULT = 14,
    DIRECTIVE = 16,
    METADATA = 17,
    METRIC = 18,
    DISCONNECTION = 19,
    EVENT = 20,
    ERROR = 15,
  }
}

declare class CreateMessageMetricRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageMetricRequest): CreateMessageMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageMetricRequest;
  static deserializeBinaryFromReader(message: CreateMessageMetricRequest, reader: jspb.BinaryReader): CreateMessageMetricRequest;
}

declare namespace CreateMessageMetricRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    messageid: string,
    metricsList: Array<Metric.AsObject>,
  }
}

declare class CreateMessageMetricResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Metric>;
  setDataList(value: Array<Metric>): void;
  addData(value?: Metric, index?: number): Metric;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageMetricResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageMetricResponse): CreateMessageMetricResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageMetricResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageMetricResponse;
  static deserializeBinaryFromReader(message: CreateMessageMetricResponse, reader: jspb.BinaryReader): CreateMessageMetricResponse;
}

declare namespace CreateMessageMetricResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Metric.AsObject>,
    error?: Error$1.AsObject,
  }
}

declare class CreateConversationMetricRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationMetricRequest): CreateConversationMetricRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConversationMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationMetricRequest;
  static deserializeBinaryFromReader(message: CreateConversationMetricRequest, reader: jspb.BinaryReader): CreateConversationMetricRequest;
}

declare namespace CreateConversationMetricRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    metricsList: Array<Metric.AsObject>,
  }
}

declare class CreateConversationMetricResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Metric>;
  setDataList(value: Array<Metric>): void;
  addData(value?: Metric, index?: number): Metric;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationMetricResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationMetricResponse): CreateConversationMetricResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConversationMetricResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationMetricResponse;
  static deserializeBinaryFromReader(message: CreateConversationMetricResponse, reader: jspb.BinaryReader): CreateConversationMetricResponse;
}

declare namespace CreateConversationMetricResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Metric.AsObject>,
    error?: Error$1.AsObject,
  }
}

declare class CreatePhoneCallRequest extends jspb.Message {
  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantDefinition | undefined;
  setAssistant(value?: AssistantDefinition): void;

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

declare namespace CreatePhoneCallRequest {
  export type AsObject = {
    assistant?: AssistantDefinition.AsObject,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    fromnumber: string,
    tonumber: string,
  }
}

declare class CreatePhoneCallResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantConversation | undefined;
  setData(value?: AssistantConversation): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneCallResponse): CreatePhoneCallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePhoneCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneCallResponse;
  static deserializeBinaryFromReader(message: CreatePhoneCallResponse, reader: jspb.BinaryReader): CreatePhoneCallResponse;
}

declare namespace CreatePhoneCallResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantConversation.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class CreateBulkPhoneCallRequest extends jspb.Message {
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

declare namespace CreateBulkPhoneCallRequest {
  export type AsObject = {
    phonecallsList: Array<CreatePhoneCallRequest.AsObject>,
  }
}

declare class CreateBulkPhoneCallResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConversation>;
  setDataList(value: Array<AssistantConversation>): void;
  addData(value?: AssistantConversation, index?: number): AssistantConversation;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBulkPhoneCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBulkPhoneCallResponse): CreateBulkPhoneCallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBulkPhoneCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBulkPhoneCallResponse;
  static deserializeBinaryFromReader(message: CreateBulkPhoneCallResponse, reader: jspb.BinaryReader): CreateBulkPhoneCallResponse;
}

declare namespace CreateBulkPhoneCallResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversation.AsObject>,
    error?: Error$1.AsObject,
  }
}

interface StreamModeMap {
  STREAM_MODE_UNSPECIFIED: 0;
  STREAM_MODE_TEXT: 1;
  STREAM_MODE_AUDIO: 2;
  STREAM_MODE_BOTH: 3;
}

/**
 * Input options for the agent (microphone/recording settings)
 */
declare class InputOptions {
    /** Enabled channels for input */
    channels: Channel[];
    /** Default input channel */
    channel: Channel;
    /** Input device ID (microphone) */
    device?: string;
    /** ICE servers for WebRTC (STUN/TURN) */
    iceServers?: RTCIceServer[];
    /**
     * Returns a default stream configuration based on the currently selected
     * channel.  This mirrors the protobuf `StreamConfig` type used by the
     * backend so consumers can easily build conversation initialization
     * payloads.
     */
    get defaultInputStreamOption(): StreamConfig;
    constructor(channels: Channel[], channel?: Channel, deviceId?: string, iceServers?: RTCIceServer[]);
}
/**
 * Output options for the agent (speaker/playback settings)
 */
declare class OutputOptions {
    /** Enabled channels for output */
    channels: Channel[];
    /** Default output channel */
    channel: Channel;
    /** Output device ID (speaker) */
    device?: string;
    /**
     * Default stream configuration for output.  Returns a protobuf-style
     * `StreamConfig` instance matching the current channel.
     */
    get defaultOutputStreamOption(): StreamConfig;
    constructor(channels: Channel[], channel?: Channel, deviceId?: string);
}
declare class UserIdentifier {
    /** User identifier type */
    id: string;
    name?: string;
    constructor(id: string, name?: string);
}
/**
 * Represents the configuration settings for an agent.
 * This includes the agent's unique identifier, version, and configurable arguments.
 */
declare class AgentConfig {
    /**
     * Unique identifier for the agent.
     */
    id: string;
    /**
     * (Optional) Version number of the agent.
     */
    version?: string;
    /**
     * arguments for assistant
     */
    arguments?: Map<string, google_protobuf_any_pb.Any>;
    /**
     * options for assistants
     */
    options?: Map<string, google_protobuf_any_pb.Any>;
    /**
     * metadata for assistant request
     */
    metadata?: Map<string, google_protobuf_any_pb.Any>;
    /**
     *
     */
    inputOptions: InputOptions;
    /**
     *
     */
    outputOptions: OutputOptions;
    /**
     * user identifier for conversation
     */
    userIdentifier?: UserIdentifier;
    /**
     * Initializes a new instance of `AgentConfig`.
     *
     * @param id - Unique identifier for the agent.
     * @param version - (Optional) Version number of the agent.
     * @param argument - (Optional) Configuration arguments for the agent.
     */
    constructor(id: string, inputOptions?: InputOptions, outputOptions?: OutputOptions, version?: string, argument?: Map<string, google_protobuf_any_pb.Any>, options?: Map<string, google_protobuf_any_pb.Any>, metadata?: Map<string, google_protobuf_any_pb.Any>, userIdentifier?: UserIdentifier);
    /**
     * Retrieves the assistant definition for this agent.
     *
     * @returns {AssistantDefinition} A configured `AssistantDefinition` instance with the agent's details.
     */
    get definition(): AssistantDefinition;
    /**
     * for adding custom dictionary
     * it allows user to add custom keywords to given agent it will perform correction
     * @param keywords
     */
    addKeywords(keywords: string[]): this;
    /**
     * Want to add other options to override
     * @param k
     * @param otp
     * @returns
     */
    addCustomOption(k: string, otp: google_protobuf_any_pb.Any): this;
    /**
     *
     * @param k
     * @param meta
     * @returns
     */
    addMetadata(k: string, meta: google_protobuf_any_pb.Any): this;
    /**
     *
     * @param k
     * @param value
     * @returns
     */
    addArgument(k: string, value: string): this;
    /**
     * Set the user identifier for the conversation.
     * @param id - Unique user identifier
     * @param name - Optional display name
     * @returns this for chaining
     */
    setUserIdentifier(id: string, name?: string): this;
}

// package: talk_api
// file: talk-api.proto



type TalkServiceAssistantTalk = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof AssistantTalkRequest;
  readonly responseType: typeof AssistantTalkResponse;
};

type TalkServiceGetAllAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantConversationRequest;
  readonly responseType: typeof GetAllAssistantConversationResponse;
};

type TalkServiceGetAllConversationMessage = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllConversationMessageRequest;
  readonly responseType: typeof GetAllConversationMessageResponse;
};

type TalkServiceCreateMessageMetric = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateMessageMetricRequest;
  readonly responseType: typeof CreateMessageMetricResponse;
};

type TalkServiceCreateConversationMetric = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateConversationMetricRequest;
  readonly responseType: typeof CreateConversationMetricResponse;
};

type TalkServiceCreatePhoneCall = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreatePhoneCallRequest;
  readonly responseType: typeof CreatePhoneCallResponse;
};

type TalkServiceCreateBulkPhoneCall = {
  readonly methodName: string;
  readonly service: typeof TalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateBulkPhoneCallRequest;
  readonly responseType: typeof CreateBulkPhoneCallResponse;
};

declare class TalkService {
  static readonly serviceName: string;
  static readonly AssistantTalk: TalkServiceAssistantTalk;
  static readonly GetAllAssistantConversation: TalkServiceGetAllAssistantConversation;
  static readonly GetAllConversationMessage: TalkServiceGetAllConversationMessage;
  static readonly CreateMessageMetric: TalkServiceCreateMessageMetric;
  static readonly CreateConversationMetric: TalkServiceCreateConversationMetric;
  static readonly CreatePhoneCall: TalkServiceCreatePhoneCall;
  static readonly CreateBulkPhoneCall: TalkServiceCreateBulkPhoneCall;
}

type ServiceError$b = { message: string, code: number; metadata: grpc.Metadata }
type Status$1 = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$b {
  cancel(): void;
}
interface BidirectionalStream$1<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream$1<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream$1<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status$1) => void): BidirectionalStream$1<ReqT, ResT>;
  on(type: 'status', handler: (status: Status$1) => void): BidirectionalStream$1<ReqT, ResT>;
}

declare class TalkServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  assistantTalk(metadata?: grpc.Metadata): BidirectionalStream$1<AssistantTalkRequest, AssistantTalkResponse>;
  getAllAssistantConversation(
    requestMessage: GetAllAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$b|null, responseMessage: GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse$b;
  getAllAssistantConversation(
    requestMessage: GetAllAssistantConversationRequest,
    callback: (error: ServiceError$b|null, responseMessage: GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse$b;
  getAllConversationMessage(
    requestMessage: GetAllConversationMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$b|null, responseMessage: GetAllConversationMessageResponse|null) => void
  ): UnaryResponse$b;
  getAllConversationMessage(
    requestMessage: GetAllConversationMessageRequest,
    callback: (error: ServiceError$b|null, responseMessage: GetAllConversationMessageResponse|null) => void
  ): UnaryResponse$b;
  createMessageMetric(
    requestMessage: CreateMessageMetricRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$b|null, responseMessage: CreateMessageMetricResponse|null) => void
  ): UnaryResponse$b;
  createMessageMetric(
    requestMessage: CreateMessageMetricRequest,
    callback: (error: ServiceError$b|null, responseMessage: CreateMessageMetricResponse|null) => void
  ): UnaryResponse$b;
  createConversationMetric(
    requestMessage: CreateConversationMetricRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$b|null, responseMessage: CreateConversationMetricResponse|null) => void
  ): UnaryResponse$b;
  createConversationMetric(
    requestMessage: CreateConversationMetricRequest,
    callback: (error: ServiceError$b|null, responseMessage: CreateConversationMetricResponse|null) => void
  ): UnaryResponse$b;
  createPhoneCall(
    requestMessage: CreatePhoneCallRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$b|null, responseMessage: CreatePhoneCallResponse|null) => void
  ): UnaryResponse$b;
  createPhoneCall(
    requestMessage: CreatePhoneCallRequest,
    callback: (error: ServiceError$b|null, responseMessage: CreatePhoneCallResponse|null) => void
  ): UnaryResponse$b;
  createBulkPhoneCall(
    requestMessage: CreateBulkPhoneCallRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$b|null, responseMessage: CreateBulkPhoneCallResponse|null) => void
  ): UnaryResponse$b;
  createBulkPhoneCall(
    requestMessage: CreateBulkPhoneCallRequest,
    callback: (error: ServiceError$b|null, responseMessage: CreateBulkPhoneCallResponse|null) => void
  ): UnaryResponse$b;
}

declare const HEADER_AUTH_ID = "x-auth-id";
declare const HEADER_PROJECT_ID = "x-project-id";
declare const HEADER_API_KEY = "x-api-key";
declare const HEADER_SOURCE_KEY = "x-client-source";
declare const HEADER_ENVIRONMENT_KEY = "x-rapida-environment";
declare const HEADER_REGION_KEY = "x-rapida-region";
declare const HEADER_USER_AGENT = "x-user-agent";
declare const HEADER_LANGUAGE = "x-language";
declare const HEADER_PLATFORM = "x-platform";
declare const HEADER_SCREEN_WIDTH = "x-screen-width";
declare const HEADER_SCREEN_HEIGHT = "x-screen-height";
declare const HEADER_WINDOW_WIDTH = "x-window-width";
declare const HEADER_WINDOW_HEIGHT = "x-window-height";
declare const HEADER_TIMEZONE = "x-timezone";
declare const HEADER_COLOR_DEPTH = "x-color-depth";
declare const HEADER_DEVICE_MEMORY = "x-device-memory";
declare const HEADER_HARDWARE_CONCURRENCY = "x-hardware-concurrency";
declare const HEADER_CONNECTION_TYPE = "x-connection-type";
declare const HEADER_CONNECTION_EFFECTIVE_TYPE = "x-connection-effective-type";
declare const HEADER_COOKIES_ENABLED = "x-cookies-enabled";
declare const HEADER_DO_NOT_TRACK = "x-do-not-track";
declare const HEADER_REFERRER = "x-referrer";
declare const HEADER_REMOTE_URL = "x-remote-url";
declare const HEADER_LATITUDE = "x-latitude";
declare const HEADER_LONGITUDE = "x-longitude";

type RapidaSource = "web-plugin" | "debugger" | "sdk" | "phone-call" | "whatsapp" | "webrtc";
declare const WEB_PLUGIN_SOURCE: RapidaSource;
declare const DEBUGGER_SOURCE: RapidaSource;
declare const SDK_SOURCE: RapidaSource;
declare const PHONE_CALL_SOURCE: RapidaSource;
declare const WHATSAPP_SOURCE: RapidaSource;
declare const WEBRTC_SOURCE: RapidaSource;
declare function getRapidaSourceValue(source: RapidaSource): string;
declare function fromStr(label: string): RapidaSource;

/**
 * Configures gRPC metadata with platform-specific and environment-specific headers.
 *
 * @param il - The gRPC metadata to configure.
 * @returns The configured gRPC metadata.
 */
declare const WithPlatform: (il: grpc.Metadata) => grpc.Metadata;
/**
 * Configures gRPC metadata with authentication context headers.
 *
 * @param authHeader - A record of authentication headers to add.
 * @returns The configured gRPC metadata with authentication headers.
 */
declare const WithAuthContext: (authHeader?: ClientAuthInfo | UserAuthInfo) => grpc.Metadata;
/**
 * an client information that will help to create an authentication token and header informatioan
 */
interface UserAuthInfo {
    authorization: string;
    [HEADER_AUTH_ID]: string;
    [HEADER_PROJECT_ID]?: string;
    Client?: Partial<ClientInfo>;
}
interface ClientAuthInfo {
    [HEADER_API_KEY]: string;
    [HEADER_AUTH_ID]?: string;
    Client?: Partial<ClientInfo>;
}
interface ClientInfo {
    [HEADER_SOURCE_KEY]?: RapidaSource;
    [HEADER_USER_AGENT]: string;
    [HEADER_LANGUAGE]: string;
    [HEADER_PLATFORM]: string;
    [HEADER_SCREEN_WIDTH]: number;
    [HEADER_SCREEN_HEIGHT]: number;
    [HEADER_WINDOW_WIDTH]: number;
    [HEADER_WINDOW_HEIGHT]: number;
    [HEADER_TIMEZONE]: string;
    [HEADER_COLOR_DEPTH]: number;
    [HEADER_DEVICE_MEMORY]?: number;
    [HEADER_HARDWARE_CONCURRENCY]?: number;
    [HEADER_CONNECTION_TYPE]?: string;
    [HEADER_CONNECTION_EFFECTIVE_TYPE]?: string;
    [HEADER_COOKIES_ENABLED]: boolean;
    [HEADER_DO_NOT_TRACK]?: string | null;
    [HEADER_REFERRER]: string;
    [HEADER_REMOTE_URL]: string;
    [HEADER_LATITUDE]?: number;
    [HEADER_LONGITUDE]?: number;
}
/**
 * Retrieves client information from the browser.
 *
 * This function gathers various details about the client's device and browser,
 * including screen dimensions, user agent, language, platform, and more.
 * It also attempts to get the geolocation if available and permitted.
 *
 * @returns {ClientInfo} A promise that resolves to an object containing client information.
 */
declare const getClientInfo: (additionalInfo?: Partial<ClientInfo>) => ClientInfo;
/**
 * Enhances gRPC metadata with client context information.
 *
 * This function takes an optional gRPC metadata object and enriches it
 * with client information obtained from getClientInfo(). It iterates
 * through the client info and sets each non-undefined value in the
 * metadata object.
 *
 * @param {grpc.Metadata} metadata - Optional gRPC metadata object to enhance.
 * @returns {grpc.Metadata} The enhanced metadata object with client context.
 */
declare const WithClientContext: (metadata?: grpc.Metadata) => grpc.Metadata;

declare enum ConnectionState {
    Disconnected = "disconnected",
    Connecting = "connecting",
    Connected = "connected"
}

// package: assistant_api
// file: assistant-deployment.proto



declare class DeploymentAudioProvider extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAudioprovider(): string;
  setAudioprovider(value: string): void;

  clearAudiooptionsList(): void;
  getAudiooptionsList(): Array<Metadata>;
  setAudiooptionsList(value: Array<Metadata>): void;
  addAudiooptions(value?: Metadata, index?: number): Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  getAudiotype(): string;
  setAudiotype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentAudioProvider.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentAudioProvider): DeploymentAudioProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentAudioProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentAudioProvider;
  static deserializeBinaryFromReader(message: DeploymentAudioProvider, reader: jspb.BinaryReader): DeploymentAudioProvider;
}

declare namespace DeploymentAudioProvider {
  export type AsObject = {
    id: string,
    audioprovider: string,
    audiooptionsList: Array<Metadata.AsObject>,
    status: string,
    audiotype: string,
  }
}

declare class AssistantWebpluginDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  clearSuggestionList(): void;
  getSuggestionList(): Array<string>;
  setSuggestionList(value: Array<string>): void;
  addSuggestion(value: string, index?: number): string;

  getHelpcenterenabled(): boolean;
  setHelpcenterenabled(value: boolean): void;

  getProductcatalogenabled(): boolean;
  setProductcatalogenabled(value: boolean): void;

  getArticlecatalogenabled(): boolean;
  setArticlecatalogenabled(value: boolean): void;

  getUploadfileenabled(): boolean;
  setUploadfileenabled(value: boolean): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebpluginDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebpluginDeployment): AssistantWebpluginDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebpluginDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebpluginDeployment;
  static deserializeBinaryFromReader(message: AssistantWebpluginDeployment, reader: jspb.BinaryReader): AssistantWebpluginDeployment;
}

declare namespace AssistantWebpluginDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    suggestionList: Array<string>,
    helpcenterenabled: boolean,
    productcatalogenabled: boolean,
    articlecatalogenabled: boolean,
    uploadfileenabled: boolean,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

declare class AssistantPhoneDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  getPhoneprovidername(): string;
  setPhoneprovidername(value: string): void;

  clearPhoneoptionsList(): void;
  getPhoneoptionsList(): Array<Metadata>;
  setPhoneoptionsList(value: Array<Metadata>): void;
  addPhoneoptions(value?: Metadata, index?: number): Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantPhoneDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantPhoneDeployment): AssistantPhoneDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantPhoneDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantPhoneDeployment;
  static deserializeBinaryFromReader(message: AssistantPhoneDeployment, reader: jspb.BinaryReader): AssistantPhoneDeployment;
}

declare namespace AssistantPhoneDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    phoneprovidername: string,
    phoneoptionsList: Array<Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

declare class AssistantWhatsappDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  getWhatsappprovidername(): string;
  setWhatsappprovidername(value: string): void;

  clearWhatsappoptionsList(): void;
  getWhatsappoptionsList(): Array<Metadata>;
  setWhatsappoptionsList(value: Array<Metadata>): void;
  addWhatsappoptions(value?: Metadata, index?: number): Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWhatsappDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWhatsappDeployment): AssistantWhatsappDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWhatsappDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWhatsappDeployment;
  static deserializeBinaryFromReader(message: AssistantWhatsappDeployment, reader: jspb.BinaryReader): AssistantWhatsappDeployment;
}

declare namespace AssistantWhatsappDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    whatsappprovidername: string,
    whatsappoptionsList: Array<Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

declare class AssistantDebuggerDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantDebuggerDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantDebuggerDeployment): AssistantDebuggerDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantDebuggerDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantDebuggerDeployment;
  static deserializeBinaryFromReader(message: AssistantDebuggerDeployment, reader: jspb.BinaryReader): AssistantDebuggerDeployment;
}

declare namespace AssistantDebuggerDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

declare class AssistantApiDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasInputaudio(): boolean;
  clearInputaudio(): void;
  getInputaudio(): DeploymentAudioProvider | undefined;
  setInputaudio(value?: DeploymentAudioProvider): void;

  hasOutputaudio(): boolean;
  clearOutputaudio(): void;
  getOutputaudio(): DeploymentAudioProvider | undefined;
  setOutputaudio(value?: DeploymentAudioProvider): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getMaxsessionduration(): string;
  setMaxsessionduration(value: string): void;

  getIdealtimeout(): string;
  setIdealtimeout(value: string): void;

  getIdealtimeoutmessage(): string;
  setIdealtimeoutmessage(value: string): void;

  getIdealtimeoutbackoff(): string;
  setIdealtimeoutbackoff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantApiDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantApiDeployment): AssistantApiDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantApiDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantApiDeployment;
  static deserializeBinaryFromReader(message: AssistantApiDeployment, reader: jspb.BinaryReader): AssistantApiDeployment;
}

declare namespace AssistantApiDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    greeting: string,
    mistake: string,
    inputaudio?: DeploymentAudioProvider.AsObject,
    outputaudio?: DeploymentAudioProvider.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    maxsessionduration: string,
    idealtimeout: string,
    idealtimeoutmessage: string,
    idealtimeoutbackoff: string,
  }
}

declare class CreateAssistantDeploymentRequest extends jspb.Message {
  hasApi(): boolean;
  clearApi(): void;
  getApi(): AssistantApiDeployment | undefined;
  setApi(value?: AssistantApiDeployment): void;

  hasDebugger(): boolean;
  clearDebugger(): void;
  getDebugger(): AssistantDebuggerDeployment | undefined;
  setDebugger(value?: AssistantDebuggerDeployment): void;

  hasWhatsapp(): boolean;
  clearWhatsapp(): void;
  getWhatsapp(): AssistantWhatsappDeployment | undefined;
  setWhatsapp(value?: AssistantWhatsappDeployment): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): AssistantPhoneDeployment | undefined;
  setPhone(value?: AssistantPhoneDeployment): void;

  hasPlugin(): boolean;
  clearPlugin(): void;
  getPlugin(): AssistantWebpluginDeployment | undefined;
  setPlugin(value?: AssistantWebpluginDeployment): void;

  getDeploymentCase(): CreateAssistantDeploymentRequest.DeploymentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantDeploymentRequest): CreateAssistantDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateAssistantDeploymentRequest, reader: jspb.BinaryReader): CreateAssistantDeploymentRequest;
}

declare namespace CreateAssistantDeploymentRequest {
  export type AsObject = {
    api?: AssistantApiDeployment.AsObject,
    pb_debugger?: AssistantDebuggerDeployment.AsObject,
    whatsapp?: AssistantWhatsappDeployment.AsObject,
    phone?: AssistantPhoneDeployment.AsObject,
    plugin?: AssistantWebpluginDeployment.AsObject,
  }

  export enum DeploymentCase {
    DEPLOYMENT_NOT_SET = 0,
    API = 1,
    DEBUGGER = 2,
    WHATSAPP = 3,
    PHONE = 4,
    PLUGIN = 5,
  }
}

declare class GetAssistantApiDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantApiDeployment | undefined;
  setData(value?: AssistantApiDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantApiDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantApiDeploymentResponse): GetAssistantApiDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantApiDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantApiDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantApiDeploymentResponse, reader: jspb.BinaryReader): GetAssistantApiDeploymentResponse;
}

declare namespace GetAssistantApiDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantApiDeployment.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAssistantPhoneDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantPhoneDeployment | undefined;
  setData(value?: AssistantPhoneDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantPhoneDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantPhoneDeploymentResponse): GetAssistantPhoneDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantPhoneDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantPhoneDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantPhoneDeploymentResponse, reader: jspb.BinaryReader): GetAssistantPhoneDeploymentResponse;
}

declare namespace GetAssistantPhoneDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantPhoneDeployment.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAssistantWhatsappDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWhatsappDeployment | undefined;
  setData(value?: AssistantWhatsappDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWhatsappDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWhatsappDeploymentResponse): GetAssistantWhatsappDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWhatsappDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWhatsappDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantWhatsappDeploymentResponse, reader: jspb.BinaryReader): GetAssistantWhatsappDeploymentResponse;
}

declare namespace GetAssistantWhatsappDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWhatsappDeployment.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAssistantDebuggerDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantDebuggerDeployment | undefined;
  setData(value?: AssistantDebuggerDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantDebuggerDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantDebuggerDeploymentResponse): GetAssistantDebuggerDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantDebuggerDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantDebuggerDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantDebuggerDeploymentResponse, reader: jspb.BinaryReader): GetAssistantDebuggerDeploymentResponse;
}

declare namespace GetAssistantDebuggerDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantDebuggerDeployment.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAssistantWebpluginDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWebpluginDeployment | undefined;
  setData(value?: AssistantWebpluginDeployment): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebpluginDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebpluginDeploymentResponse): GetAssistantWebpluginDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebpluginDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebpluginDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAssistantWebpluginDeploymentResponse, reader: jspb.BinaryReader): GetAssistantWebpluginDeploymentResponse;
}

declare namespace GetAssistantWebpluginDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebpluginDeployment.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAssistantDeploymentRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantDeploymentRequest): GetAssistantDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantDeploymentRequest;
  static deserializeBinaryFromReader(message: GetAssistantDeploymentRequest, reader: jspb.BinaryReader): GetAssistantDeploymentRequest;
}

declare namespace GetAssistantDeploymentRequest {
  export type AsObject = {
    assistantid: string,
  }
}

// package: assistant_api
// file: assistant-tool.proto



declare class AssistantTool extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_struct_pb.Struct | undefined;
  setFields(value?: google_protobuf_struct_pb.Struct): void;

  getExecutionmethod(): string;
  setExecutionmethod(value: string): void;

  clearExecutionoptionsList(): void;
  getExecutionoptionsList(): Array<Metadata>;
  setExecutionoptionsList(value: Array<Metadata>): void;
  addExecutionoptions(value?: Metadata, index?: number): Metadata;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTool.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTool): AssistantTool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTool;
  static deserializeBinaryFromReader(message: AssistantTool, reader: jspb.BinaryReader): AssistantTool;
}

declare namespace AssistantTool {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    description: string,
    fields?: google_protobuf_struct_pb.Struct.AsObject,
    executionmethod: string,
    executionoptionsList: Array<Metadata.AsObject>,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class CreateAssistantToolRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_struct_pb.Struct | undefined;
  setFields(value?: google_protobuf_struct_pb.Struct): void;

  getExecutionmethod(): string;
  setExecutionmethod(value: string): void;

  clearExecutionoptionsList(): void;
  getExecutionoptionsList(): Array<Metadata>;
  setExecutionoptionsList(value: Array<Metadata>): void;
  addExecutionoptions(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantToolRequest): CreateAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantToolRequest;
  static deserializeBinaryFromReader(message: CreateAssistantToolRequest, reader: jspb.BinaryReader): CreateAssistantToolRequest;
}

declare namespace CreateAssistantToolRequest {
  export type AsObject = {
    assistantid: string,
    name: string,
    description: string,
    fields?: google_protobuf_struct_pb.Struct.AsObject,
    executionmethod: string,
    executionoptionsList: Array<Metadata.AsObject>,
  }
}

declare class UpdateAssistantToolRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_struct_pb.Struct | undefined;
  setFields(value?: google_protobuf_struct_pb.Struct): void;

  getExecutionmethod(): string;
  setExecutionmethod(value: string): void;

  clearExecutionoptionsList(): void;
  getExecutionoptionsList(): Array<Metadata>;
  setExecutionoptionsList(value: Array<Metadata>): void;
  addExecutionoptions(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantToolRequest): UpdateAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantToolRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantToolRequest, reader: jspb.BinaryReader): UpdateAssistantToolRequest;
}

declare namespace UpdateAssistantToolRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    description: string,
    fields?: google_protobuf_struct_pb.Struct.AsObject,
    executionmethod: string,
    executionoptionsList: Array<Metadata.AsObject>,
  }
}

declare class GetAssistantToolRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolRequest): GetAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolRequest;
  static deserializeBinaryFromReader(message: GetAssistantToolRequest, reader: jspb.BinaryReader): GetAssistantToolRequest;
}

declare namespace GetAssistantToolRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class DeleteAssistantToolRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantToolRequest): DeleteAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantToolRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantToolRequest, reader: jspb.BinaryReader): DeleteAssistantToolRequest;
}

declare namespace DeleteAssistantToolRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class GetAssistantToolResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantTool | undefined;
  setData(value?: AssistantTool): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolResponse): GetAssistantToolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolResponse;
  static deserializeBinaryFromReader(message: GetAssistantToolResponse, reader: jspb.BinaryReader): GetAssistantToolResponse;
}

declare namespace GetAssistantToolResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantTool.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantToolRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolRequest): GetAllAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantToolRequest, reader: jspb.BinaryReader): GetAllAssistantToolRequest;
}

declare namespace GetAllAssistantToolRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllAssistantToolResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantTool>;
  setDataList(value: Array<AssistantTool>): void;
  addData(value?: AssistantTool, index?: number): AssistantTool;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolResponse): GetAllAssistantToolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantToolResponse, reader: jspb.BinaryReader): GetAllAssistantToolResponse;
}

declare namespace GetAllAssistantToolResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantTool.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetAllAssistantToolLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Ordering | undefined;
  setOrder(value?: Ordering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolLogRequest): GetAllAssistantToolLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolLogRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantToolLogRequest, reader: jspb.BinaryReader): GetAllAssistantToolLogRequest;
}

declare namespace GetAllAssistantToolLogRequest {
  export type AsObject = {
    projectid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    order?: Ordering.AsObject,
  }
}

declare class GetAssistantToolLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolLogRequest): GetAssistantToolLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolLogRequest;
  static deserializeBinaryFromReader(message: GetAssistantToolLogRequest, reader: jspb.BinaryReader): GetAssistantToolLogRequest;
}

declare namespace GetAssistantToolLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

declare class GetAssistantToolLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantToolLog | undefined;
  setData(value?: AssistantToolLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantToolLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantToolLogResponse): GetAssistantToolLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantToolLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantToolLogResponse;
  static deserializeBinaryFromReader(message: GetAssistantToolLogResponse, reader: jspb.BinaryReader): GetAssistantToolLogResponse;
}

declare namespace GetAssistantToolLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantToolLog.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantToolLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantToolLog>;
  setDataList(value: Array<AssistantToolLog>): void;
  addData(value?: AssistantToolLog, index?: number): AssistantToolLog;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolLogResponse): GetAllAssistantToolLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolLogResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantToolLogResponse, reader: jspb.BinaryReader): GetAllAssistantToolLogResponse;
}

declare namespace GetAllAssistantToolLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantToolLog.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class AssistantToolLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_protobuf_struct_pb.Struct | undefined;
  setAction(value?: google_protobuf_struct_pb.Struct): void;

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

  getAssistantconversationmessageid(): string;
  setAssistantconversationmessageid(value: string): void;

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  getAssistanttoolname(): string;
  setAssistanttoolname(value: string): void;

  getToolcallid(): string;
  setToolcallid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantToolLog.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantToolLog): AssistantToolLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantToolLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantToolLog;
  static deserializeBinaryFromReader(message: AssistantToolLog, reader: jspb.BinaryReader): AssistantToolLog;
}

declare namespace AssistantToolLog {
  export type AsObject = {
    id: string,
    action?: google_protobuf_struct_pb.Struct.AsObject,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantid: string,
    projectid: string,
    organizationid: string,
    assistantconversationid: string,
    assistantconversationmessageid: string,
    assetprefix: string,
    timetaken: string,
    assistanttoolname: string,
    toolcallid: string,
  }
}

// package: assistant_api
// file: assistant-analysis.proto



declare class AssistantAnalysis extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointversion(): string;
  setEndpointversion(value: string): void;

  getEndpointparametersMap(): jspb.Map<string, string>;
  clearEndpointparametersMap(): void;
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantAnalysis.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantAnalysis): AssistantAnalysis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantAnalysis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantAnalysis;
  static deserializeBinaryFromReader(message: AssistantAnalysis, reader: jspb.BinaryReader): AssistantAnalysis;
}

declare namespace AssistantAnalysis {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    endpointid: string,
    endpointversion: string,
    endpointparametersMap: Array<[string, string]>,
    assistantid: string,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executionpriority: number,
  }
}

declare class CreateAssistantAnalysisRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointversion(): string;
  setEndpointversion(value: string): void;

  getEndpointparametersMap(): jspb.Map<string, string>;
  clearEndpointparametersMap(): void;
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantAnalysisRequest): CreateAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: CreateAssistantAnalysisRequest, reader: jspb.BinaryReader): CreateAssistantAnalysisRequest;
}

declare namespace CreateAssistantAnalysisRequest {
  export type AsObject = {
    name: string,
    description: string,
    endpointid: string,
    endpointversion: string,
    endpointparametersMap: Array<[string, string]>,
    assistantid: string,
    executionpriority: number,
  }
}

declare class UpdateAssistantAnalysisRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointversion(): string;
  setEndpointversion(value: string): void;

  getEndpointparametersMap(): jspb.Map<string, string>;
  clearEndpointparametersMap(): void;
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantAnalysisRequest): UpdateAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantAnalysisRequest, reader: jspb.BinaryReader): UpdateAssistantAnalysisRequest;
}

declare namespace UpdateAssistantAnalysisRequest {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    endpointid: string,
    endpointversion: string,
    endpointparametersMap: Array<[string, string]>,
    assistantid: string,
    executionpriority: number,
  }
}

declare class GetAssistantAnalysisRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantAnalysisRequest): GetAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: GetAssistantAnalysisRequest, reader: jspb.BinaryReader): GetAssistantAnalysisRequest;
}

declare namespace GetAssistantAnalysisRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class DeleteAssistantAnalysisRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantAnalysisRequest): DeleteAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantAnalysisRequest, reader: jspb.BinaryReader): DeleteAssistantAnalysisRequest;
}

declare namespace DeleteAssistantAnalysisRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class GetAssistantAnalysisResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantAnalysis | undefined;
  setData(value?: AssistantAnalysis): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantAnalysisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantAnalysisResponse): GetAssistantAnalysisResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantAnalysisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantAnalysisResponse;
  static deserializeBinaryFromReader(message: GetAssistantAnalysisResponse, reader: jspb.BinaryReader): GetAssistantAnalysisResponse;
}

declare namespace GetAssistantAnalysisResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantAnalysis.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantAnalysisRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantAnalysisRequest): GetAllAssistantAnalysisRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantAnalysisRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantAnalysisRequest, reader: jspb.BinaryReader): GetAllAssistantAnalysisRequest;
}

declare namespace GetAllAssistantAnalysisRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllAssistantAnalysisResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantAnalysis>;
  setDataList(value: Array<AssistantAnalysis>): void;
  addData(value?: AssistantAnalysis, index?: number): AssistantAnalysis;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantAnalysisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantAnalysisResponse): GetAllAssistantAnalysisResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantAnalysisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantAnalysisResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantAnalysisResponse, reader: jspb.BinaryReader): GetAllAssistantAnalysisResponse;
}

declare namespace GetAllAssistantAnalysisResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantAnalysis.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

// package: assistant_api
// file: assistant-webhook.proto



declare class AssistantWebhook extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  getHttpheadersMap(): jspb.Map<string, string>;
  clearHttpheadersMap(): void;
  getHttpbodyMap(): jspb.Map<string, string>;
  clearHttpbodyMap(): void;
  getTimeoutsecond(): number;
  setTimeoutsecond(value: number): void;

  getExecutionpriority(): number;
  setExecutionpriority(value: number): void;

  clearRetrystatuscodesList(): void;
  getRetrystatuscodesList(): Array<string>;
  setRetrystatuscodesList(value: Array<string>): void;
  addRetrystatuscodes(value: string, index?: number): string;

  getRetrycount(): number;
  setRetrycount(value: number): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

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

declare namespace AssistantWebhook {
  export type AsObject = {
    id: string,
    assistanteventsList: Array<string>,
    description: string,
    httpmethod: string,
    httpurl: string,
    httpheadersMap: Array<[string, string]>,
    httpbodyMap: Array<[string, string]>,
    timeoutsecond: number,
    executionpriority: number,
    retrystatuscodesList: Array<string>,
    retrycount: number,
    assistantid: string,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class AssistantWebhookLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getWebhookid(): string;
  setWebhookid(value: string): void;

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

  getEvent(): string;
  setEvent(value: string): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebhookLog.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebhookLog): AssistantWebhookLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebhookLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebhookLog;
  static deserializeBinaryFromReader(message: AssistantWebhookLog, reader: jspb.BinaryReader): AssistantWebhookLog;
}

declare namespace AssistantWebhookLog {
  export type AsObject = {
    id: string,
    webhookid: string,
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
    event: string,
    responsestatus: string,
    timetaken: string,
    retrycount: number,
    httpmethod: string,
    httpurl: string,
  }
}

declare class CreateAssistantWebhookRequest extends jspb.Message {
  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  getHttpheadersMap(): jspb.Map<string, string>;
  clearHttpheadersMap(): void;
  getHttpbodyMap(): jspb.Map<string, string>;
  clearHttpbodyMap(): void;
  getTimeoutsecond(): number;
  setTimeoutsecond(value: number): void;

  clearRetrystatuscodesList(): void;
  getRetrystatuscodesList(): Array<string>;
  setRetrystatuscodesList(value: Array<string>): void;
  addRetrystatuscodes(value: string, index?: number): string;

  getMaxretrycount(): number;
  setMaxretrycount(value: number): void;

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

declare namespace CreateAssistantWebhookRequest {
  export type AsObject = {
    assistanteventsList: Array<string>,
    description: string,
    httpmethod: string,
    httpurl: string,
    httpheadersMap: Array<[string, string]>,
    httpbodyMap: Array<[string, string]>,
    timeoutsecond: number,
    retrystatuscodesList: Array<string>,
    maxretrycount: number,
    assistantid: string,
    executionpriority: number,
  }
}

declare class UpdateAssistantWebhookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAssistanteventsList(): void;
  getAssistanteventsList(): Array<string>;
  setAssistanteventsList(value: Array<string>): void;
  addAssistantevents(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getHttpmethod(): string;
  setHttpmethod(value: string): void;

  getHttpurl(): string;
  setHttpurl(value: string): void;

  getHttpheadersMap(): jspb.Map<string, string>;
  clearHttpheadersMap(): void;
  getHttpbodyMap(): jspb.Map<string, string>;
  clearHttpbodyMap(): void;
  getTimeoutsecond(): number;
  setTimeoutsecond(value: number): void;

  clearRetrystatuscodesList(): void;
  getRetrystatuscodesList(): Array<string>;
  setRetrystatuscodesList(value: Array<string>): void;
  addRetrystatuscodes(value: string, index?: number): string;

  getMaxretrycount(): number;
  setMaxretrycount(value: number): void;

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

declare namespace UpdateAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistanteventsList: Array<string>,
    description: string,
    httpmethod: string,
    httpurl: string,
    httpheadersMap: Array<[string, string]>,
    httpbodyMap: Array<[string, string]>,
    timeoutsecond: number,
    retrystatuscodesList: Array<string>,
    maxretrycount: number,
    assistantid: string,
    executionpriority: number,
  }
}

declare class GetAssistantWebhookRequest extends jspb.Message {
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

declare namespace GetAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class DeleteAssistantWebhookRequest extends jspb.Message {
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

declare namespace DeleteAssistantWebhookRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class GetAssistantWebhookResponse extends jspb.Message {
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
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookResponse): GetAssistantWebhookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookResponse;
  static deserializeBinaryFromReader(message: GetAssistantWebhookResponse, reader: jspb.BinaryReader): GetAssistantWebhookResponse;
}

declare namespace GetAssistantWebhookResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebhook.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantWebhookRequest extends jspb.Message {
  getWebhookid(): string;
  setWebhookid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookRequest): GetAllAssistantWebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookRequest, reader: jspb.BinaryReader): GetAllAssistantWebhookRequest;
}

declare namespace GetAllAssistantWebhookRequest {
  export type AsObject = {
    webhookid: string,
    assistantid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllAssistantWebhookResponse extends jspb.Message {
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
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookResponse): GetAllAssistantWebhookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookResponse, reader: jspb.BinaryReader): GetAllAssistantWebhookResponse;
}

declare namespace GetAllAssistantWebhookResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantWebhook.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetAllAssistantWebhookLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Ordering | undefined;
  setOrder(value?: Ordering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookLogRequest): GetAllAssistantWebhookLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookLogRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookLogRequest, reader: jspb.BinaryReader): GetAllAssistantWebhookLogRequest;
}

declare namespace GetAllAssistantWebhookLogRequest {
  export type AsObject = {
    projectid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    order?: Ordering.AsObject,
  }
}

declare class GetAssistantWebhookLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookLogRequest): GetAssistantWebhookLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookLogRequest;
  static deserializeBinaryFromReader(message: GetAssistantWebhookLogRequest, reader: jspb.BinaryReader): GetAssistantWebhookLogRequest;
}

declare namespace GetAssistantWebhookLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

declare class GetAssistantWebhookLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantWebhookLog | undefined;
  setData(value?: AssistantWebhookLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantWebhookLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantWebhookLogResponse): GetAssistantWebhookLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantWebhookLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantWebhookLogResponse;
  static deserializeBinaryFromReader(message: GetAssistantWebhookLogResponse, reader: jspb.BinaryReader): GetAssistantWebhookLogResponse;
}

declare namespace GetAssistantWebhookLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebhookLog.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantWebhookLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantWebhookLog>;
  setDataList(value: Array<AssistantWebhookLog>): void;
  addData(value?: AssistantWebhookLog, index?: number): AssistantWebhookLog;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantWebhookLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantWebhookLogResponse): GetAllAssistantWebhookLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantWebhookLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantWebhookLogResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantWebhookLogResponse, reader: jspb.BinaryReader): GetAllAssistantWebhookLogResponse;
}

declare namespace GetAllAssistantWebhookLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantWebhookLog.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

// package: assistant_api
// file: assistant-knowledge.proto



declare class AssistantKnowledge extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  hasKnowledge(): boolean;
  clearKnowledge(): void;
  getKnowledge(): Knowledge | undefined;
  setKnowledge(value?: Knowledge): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getRerankermodelproviderid(): string;
  setRerankermodelproviderid(value: string): void;

  getRerankermodelprovidername(): string;
  setRerankermodelprovidername(value: string): void;

  clearAssistantknowledgererankeroptionsList(): void;
  getAssistantknowledgererankeroptionsList(): Array<Metadata>;
  setAssistantknowledgererankeroptionsList(value: Array<Metadata>): void;
  addAssistantknowledgererankeroptions(value?: Metadata, index?: number): Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantKnowledge.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantKnowledge): AssistantKnowledge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantKnowledge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantKnowledge;
  static deserializeBinaryFromReader(message: AssistantKnowledge, reader: jspb.BinaryReader): AssistantKnowledge;
}

declare namespace AssistantKnowledge {
  export type AsObject = {
    id: string,
    knowledgeid: string,
    rerankerenable: boolean,
    topk: number,
    scorethreshold: number,
    knowledge?: Knowledge.AsObject,
    retrievalmethod: string,
    rerankermodelproviderid: string,
    rerankermodelprovidername: string,
    assistantknowledgererankeroptionsList: Array<Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

declare class CreateAssistantKnowledgeRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getRerankermodelproviderid(): string;
  setRerankermodelproviderid(value: string): void;

  getRerankermodelprovidername(): string;
  setRerankermodelprovidername(value: string): void;

  clearAssistantknowledgererankeroptionsList(): void;
  getAssistantknowledgererankeroptionsList(): Array<Metadata>;
  setAssistantknowledgererankeroptionsList(value: Array<Metadata>): void;
  addAssistantknowledgererankeroptions(value?: Metadata, index?: number): Metadata;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantKnowledgeRequest): CreateAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: CreateAssistantKnowledgeRequest, reader: jspb.BinaryReader): CreateAssistantKnowledgeRequest;
}

declare namespace CreateAssistantKnowledgeRequest {
  export type AsObject = {
    knowledgeid: string,
    assistantid: string,
    rerankermodelproviderid: string,
    rerankermodelprovidername: string,
    assistantknowledgererankeroptionsList: Array<Metadata.AsObject>,
    topk: number,
    scorethreshold: number,
    retrievalmethod: string,
    rerankerenable: boolean,
  }
}

declare class UpdateAssistantKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getRerankermodelproviderid(): string;
  setRerankermodelproviderid(value: string): void;

  getRerankermodelprovidername(): string;
  setRerankermodelprovidername(value: string): void;

  clearAssistantknowledgererankeroptionsList(): void;
  getAssistantknowledgererankeroptionsList(): Array<Metadata>;
  setAssistantknowledgererankeroptionsList(value: Array<Metadata>): void;
  addAssistantknowledgererankeroptions(value?: Metadata, index?: number): Metadata;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  getTopk(): number;
  setTopk(value: number): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantKnowledgeRequest): UpdateAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantKnowledgeRequest, reader: jspb.BinaryReader): UpdateAssistantKnowledgeRequest;
}

declare namespace UpdateAssistantKnowledgeRequest {
  export type AsObject = {
    id: string,
    knowledgeid: string,
    assistantid: string,
    rerankermodelproviderid: string,
    rerankermodelprovidername: string,
    assistantknowledgererankeroptionsList: Array<Metadata.AsObject>,
    scorethreshold: number,
    topk: number,
    retrievalmethod: string,
    rerankerenable: boolean,
  }
}

declare class GetAssistantKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantKnowledgeRequest): GetAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetAssistantKnowledgeRequest, reader: jspb.BinaryReader): GetAssistantKnowledgeRequest;
}

declare namespace GetAssistantKnowledgeRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class DeleteAssistantKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantKnowledgeRequest): DeleteAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantKnowledgeRequest, reader: jspb.BinaryReader): DeleteAssistantKnowledgeRequest;
}

declare namespace DeleteAssistantKnowledgeRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class GetAssistantKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantKnowledge | undefined;
  setData(value?: AssistantKnowledge): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantKnowledgeResponse): GetAssistantKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetAssistantKnowledgeResponse, reader: jspb.BinaryReader): GetAssistantKnowledgeResponse;
}

declare namespace GetAssistantKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantKnowledge.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantKnowledgeRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantKnowledgeRequest): GetAllAssistantKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantKnowledgeRequest, reader: jspb.BinaryReader): GetAllAssistantKnowledgeRequest;
}

declare namespace GetAllAssistantKnowledgeRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllAssistantKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantKnowledge>;
  setDataList(value: Array<AssistantKnowledge>): void;
  addData(value?: AssistantKnowledge, index?: number): AssistantKnowledge;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantKnowledgeResponse): GetAllAssistantKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantKnowledgeResponse, reader: jspb.BinaryReader): GetAllAssistantKnowledgeResponse;
}

declare namespace GetAllAssistantKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantKnowledge.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

// package: assistant_api
// file: assistant-provider.proto



declare class UpdateAssistantVersionRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantproviderid(): string;
  setAssistantproviderid(value: string): void;

  getAssistantprovider(): string;
  setAssistantprovider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantVersionRequest): UpdateAssistantVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantVersionRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantVersionRequest, reader: jspb.BinaryReader): UpdateAssistantVersionRequest;
}

declare namespace UpdateAssistantVersionRequest {
  export type AsObject = {
    assistantid: string,
    assistantproviderid: string,
    assistantprovider: string,
  }
}

declare class CreateAssistantProviderRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): CreateAssistantProviderRequest.CreateAssistantProviderModel | undefined;
  setModel(value?: CreateAssistantProviderRequest.CreateAssistantProviderModel): void;

  hasAgentkit(): boolean;
  clearAgentkit(): void;
  getAgentkit(): CreateAssistantProviderRequest.CreateAssistantProviderAgentkit | undefined;
  setAgentkit(value?: CreateAssistantProviderRequest.CreateAssistantProviderAgentkit): void;

  hasWebsocket(): boolean;
  clearWebsocket(): void;
  getWebsocket(): CreateAssistantProviderRequest.CreateAssistantProviderWebsocket | undefined;
  setWebsocket(value?: CreateAssistantProviderRequest.CreateAssistantProviderWebsocket): void;

  getAssistantproviderCase(): CreateAssistantProviderRequest.AssistantproviderCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantProviderRequest): CreateAssistantProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderRequest;
  static deserializeBinaryFromReader(message: CreateAssistantProviderRequest, reader: jspb.BinaryReader): CreateAssistantProviderRequest;
}

declare namespace CreateAssistantProviderRequest {
  export type AsObject = {
    assistantid: string,
    description: string,
    model?: CreateAssistantProviderRequest.CreateAssistantProviderModel.AsObject,
    agentkit?: CreateAssistantProviderRequest.CreateAssistantProviderAgentkit.AsObject,
    websocket?: CreateAssistantProviderRequest.CreateAssistantProviderWebsocket.AsObject,
  }

  export class CreateAssistantProviderModel extends jspb.Message {
    hasTemplate(): boolean;
    clearTemplate(): void;
    getTemplate(): TextChatCompletePrompt | undefined;
    setTemplate(value?: TextChatCompletePrompt): void;

    getModelprovidername(): string;
    setModelprovidername(value: string): void;

    clearAssistantmodeloptionsList(): void;
    getAssistantmodeloptionsList(): Array<Metadata>;
    setAssistantmodeloptionsList(value: Array<Metadata>): void;
    addAssistantmodeloptions(value?: Metadata, index?: number): Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAssistantProviderModel.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAssistantProviderModel): CreateAssistantProviderModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAssistantProviderModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderModel;
    static deserializeBinaryFromReader(message: CreateAssistantProviderModel, reader: jspb.BinaryReader): CreateAssistantProviderModel;
  }

  export namespace CreateAssistantProviderModel {
    export type AsObject = {
      template?: TextChatCompletePrompt.AsObject,
      modelprovidername: string,
      assistantmodeloptionsList: Array<Metadata.AsObject>,
    }
  }

  export class CreateAssistantProviderAgentkit extends jspb.Message {
    getAgentkiturl(): string;
    setAgentkiturl(value: string): void;

    getCertificate(): string;
    setCertificate(value: string): void;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAssistantProviderAgentkit.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAssistantProviderAgentkit): CreateAssistantProviderAgentkit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAssistantProviderAgentkit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderAgentkit;
    static deserializeBinaryFromReader(message: CreateAssistantProviderAgentkit, reader: jspb.BinaryReader): CreateAssistantProviderAgentkit;
  }

  export namespace CreateAssistantProviderAgentkit {
    export type AsObject = {
      agentkiturl: string,
      certificate: string,
      metadataMap: Array<[string, string]>,
    }
  }

  export class CreateAssistantProviderWebsocket extends jspb.Message {
    getWebsocketurl(): string;
    setWebsocketurl(value: string): void;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    getConnectionparametersMap(): jspb.Map<string, string>;
    clearConnectionparametersMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAssistantProviderWebsocket.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAssistantProviderWebsocket): CreateAssistantProviderWebsocket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAssistantProviderWebsocket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderWebsocket;
    static deserializeBinaryFromReader(message: CreateAssistantProviderWebsocket, reader: jspb.BinaryReader): CreateAssistantProviderWebsocket;
  }

  export namespace CreateAssistantProviderWebsocket {
    export type AsObject = {
      websocketurl: string,
      headersMap: Array<[string, string]>,
      connectionparametersMap: Array<[string, string]>,
    }
  }

  export enum AssistantproviderCase {
    ASSISTANTPROVIDER_NOT_SET = 0,
    MODEL = 50,
    AGENTKIT = 51,
    WEBSOCKET = 52,
  }
}

declare class AssistantProviderAgentkit extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssistantid(): number;
  setAssistantid(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getCertificate(): string;
  setCertificate(value: string): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantProviderAgentkit.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderAgentkit): AssistantProviderAgentkit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderAgentkit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderAgentkit;
  static deserializeBinaryFromReader(message: AssistantProviderAgentkit, reader: jspb.BinaryReader): AssistantProviderAgentkit;
}

declare namespace AssistantProviderAgentkit {
  export type AsObject = {
    id: string,
    description: string,
    assistantid: number,
    status: string,
    url: string,
    certificate: string,
    metadataMap: Array<[string, string]>,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class AssistantProviderWebsocket extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssistantid(): number;
  setAssistantid(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;
  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): void;
  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantProviderWebsocket.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderWebsocket): AssistantProviderWebsocket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderWebsocket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderWebsocket;
  static deserializeBinaryFromReader(message: AssistantProviderWebsocket, reader: jspb.BinaryReader): AssistantProviderWebsocket;
}

declare namespace AssistantProviderWebsocket {
  export type AsObject = {
    id: string,
    description: string,
    assistantid: number,
    url: string,
    headersMap: Array<[string, string]>,
    parametersMap: Array<[string, string]>,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class AssistantProviderModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): TextChatCompletePrompt | undefined;
  setTemplate(value?: TextChatCompletePrompt): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssistantid(): number;
  setAssistantid(value: number): void;

  getModelprovidername(): string;
  setModelprovidername(value: string): void;

  clearAssistantmodeloptionsList(): void;
  getAssistantmodeloptionsList(): Array<Metadata>;
  setAssistantmodeloptionsList(value: Array<Metadata>): void;
  addAssistantmodeloptions(value?: Metadata, index?: number): Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantProviderModel.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderModel): AssistantProviderModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderModel;
  static deserializeBinaryFromReader(message: AssistantProviderModel, reader: jspb.BinaryReader): AssistantProviderModel;
}

declare namespace AssistantProviderModel {
  export type AsObject = {
    id: string,
    template?: TextChatCompletePrompt.AsObject,
    description: string,
    assistantid: number,
    modelprovidername: string,
    assistantmodeloptionsList: Array<Metadata.AsObject>,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class GetAllAssistantProviderRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantProviderRequest): GetAllAssistantProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantProviderRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantProviderRequest, reader: jspb.BinaryReader): GetAllAssistantProviderRequest;
}

declare namespace GetAllAssistantProviderRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    assistantid: string,
  }
}

declare class GetAssistantProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasAssistantprovidermodel(): boolean;
  clearAssistantprovidermodel(): void;
  getAssistantprovidermodel(): AssistantProviderModel | undefined;
  setAssistantprovidermodel(value?: AssistantProviderModel): void;

  hasAssistantprovideragentkit(): boolean;
  clearAssistantprovideragentkit(): void;
  getAssistantprovideragentkit(): AssistantProviderAgentkit | undefined;
  setAssistantprovideragentkit(value?: AssistantProviderAgentkit): void;

  hasAssistantproviderwebsocket(): boolean;
  clearAssistantproviderwebsocket(): void;
  getAssistantproviderwebsocket(): AssistantProviderWebsocket | undefined;
  setAssistantproviderwebsocket(value?: AssistantProviderWebsocket): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  getDataCase(): GetAssistantProviderResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantProviderResponse): GetAssistantProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantProviderResponse;
  static deserializeBinaryFromReader(message: GetAssistantProviderResponse, reader: jspb.BinaryReader): GetAssistantProviderResponse;
}

declare namespace GetAssistantProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    assistantprovidermodel?: AssistantProviderModel.AsObject,
    assistantprovideragentkit?: AssistantProviderAgentkit.AsObject,
    assistantproviderwebsocket?: AssistantProviderWebsocket.AsObject,
    error?: Error$1.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    ASSISTANTPROVIDERMODEL = 50,
    ASSISTANTPROVIDERAGENTKIT = 51,
    ASSISTANTPROVIDERWEBSOCKET = 52,
  }
}

declare class GetAllAssistantProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<GetAllAssistantProviderResponse.AssistantProvider>;
  setDataList(value: Array<GetAllAssistantProviderResponse.AssistantProvider>): void;
  addData(value?: GetAllAssistantProviderResponse.AssistantProvider, index?: number): GetAllAssistantProviderResponse.AssistantProvider;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantProviderResponse): GetAllAssistantProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantProviderResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantProviderResponse, reader: jspb.BinaryReader): GetAllAssistantProviderResponse;
}

declare namespace GetAllAssistantProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<GetAllAssistantProviderResponse.AssistantProvider.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }

  export class AssistantProvider extends jspb.Message {
    hasAssistantprovidermodel(): boolean;
    clearAssistantprovidermodel(): void;
    getAssistantprovidermodel(): AssistantProviderModel | undefined;
    setAssistantprovidermodel(value?: AssistantProviderModel): void;

    hasAssistantprovideragentkit(): boolean;
    clearAssistantprovideragentkit(): void;
    getAssistantprovideragentkit(): AssistantProviderAgentkit | undefined;
    setAssistantprovideragentkit(value?: AssistantProviderAgentkit): void;

    hasAssistantproviderwebsocket(): boolean;
    clearAssistantproviderwebsocket(): void;
    getAssistantproviderwebsocket(): AssistantProviderWebsocket | undefined;
    setAssistantproviderwebsocket(value?: AssistantProviderWebsocket): void;

    getAssistantproviderCase(): AssistantProvider.AssistantproviderCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantProvider.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantProvider): AssistantProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantProvider;
    static deserializeBinaryFromReader(message: AssistantProvider, reader: jspb.BinaryReader): AssistantProvider;
  }

  export namespace AssistantProvider {
    export type AsObject = {
      assistantprovidermodel?: AssistantProviderModel.AsObject,
      assistantprovideragentkit?: AssistantProviderAgentkit.AsObject,
      assistantproviderwebsocket?: AssistantProviderWebsocket.AsObject,
    }

    export enum AssistantproviderCase {
      ASSISTANTPROVIDER_NOT_SET = 0,
      ASSISTANTPROVIDERMODEL = 50,
      ASSISTANTPROVIDERAGENTKIT = 51,
      ASSISTANTPROVIDERWEBSOCKET = 52,
    }
  }
}

// package: assistant_api
// file: assistant-api.proto



declare class Assistant extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getAssistantprovider(): string;
  setAssistantprovider(value: string): void;

  getAssistantproviderid(): string;
  setAssistantproviderid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasAssistantprovidermodel(): boolean;
  clearAssistantprovidermodel(): void;
  getAssistantprovidermodel(): AssistantProviderModel | undefined;
  setAssistantprovidermodel(value?: AssistantProviderModel): void;

  hasAssistantprovideragentkit(): boolean;
  clearAssistantprovideragentkit(): void;
  getAssistantprovideragentkit(): AssistantProviderAgentkit | undefined;
  setAssistantprovideragentkit(value?: AssistantProviderAgentkit): void;

  hasAssistantproviderwebsocket(): boolean;
  clearAssistantproviderwebsocket(): void;
  getAssistantproviderwebsocket(): AssistantProviderWebsocket | undefined;
  setAssistantproviderwebsocket(value?: AssistantProviderWebsocket): void;

  hasAssistanttag(): boolean;
  clearAssistanttag(): void;
  getAssistanttag(): Tag | undefined;
  setAssistanttag(value?: Tag): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDebuggerdeployment(): boolean;
  clearDebuggerdeployment(): void;
  getDebuggerdeployment(): AssistantDebuggerDeployment | undefined;
  setDebuggerdeployment(value?: AssistantDebuggerDeployment): void;

  hasPhonedeployment(): boolean;
  clearPhonedeployment(): void;
  getPhonedeployment(): AssistantPhoneDeployment | undefined;
  setPhonedeployment(value?: AssistantPhoneDeployment): void;

  hasWhatsappdeployment(): boolean;
  clearWhatsappdeployment(): void;
  getWhatsappdeployment(): AssistantWhatsappDeployment | undefined;
  setWhatsappdeployment(value?: AssistantWhatsappDeployment): void;

  hasWebplugindeployment(): boolean;
  clearWebplugindeployment(): void;
  getWebplugindeployment(): AssistantWebpluginDeployment | undefined;
  setWebplugindeployment(value?: AssistantWebpluginDeployment): void;

  hasApideployment(): boolean;
  clearApideployment(): void;
  getApideployment(): AssistantApiDeployment | undefined;
  setApideployment(value?: AssistantApiDeployment): void;

  clearAssistantconversationsList(): void;
  getAssistantconversationsList(): Array<AssistantConversation>;
  setAssistantconversationsList(value: Array<AssistantConversation>): void;
  addAssistantconversations(value?: AssistantConversation, index?: number): AssistantConversation;

  clearAssistantwebhooksList(): void;
  getAssistantwebhooksList(): Array<AssistantWebhook>;
  setAssistantwebhooksList(value: Array<AssistantWebhook>): void;
  addAssistantwebhooks(value?: AssistantWebhook, index?: number): AssistantWebhook;

  clearAssistanttoolsList(): void;
  getAssistanttoolsList(): Array<AssistantTool>;
  setAssistanttoolsList(value: Array<AssistantTool>): void;
  addAssistanttools(value?: AssistantTool, index?: number): AssistantTool;

  clearAssistanttelemetryprovidersList(): void;
  getAssistanttelemetryprovidersList(): Array<AssistantTelemetryProvider>;
  setAssistanttelemetryprovidersList(value: Array<AssistantTelemetryProvider>): void;
  addAssistanttelemetryproviders(value?: AssistantTelemetryProvider, index?: number): AssistantTelemetryProvider;

  getToolfillerenabled(): boolean;
  setToolfillerenabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Assistant.AsObject;
  static toObject(includeInstance: boolean, msg: Assistant): Assistant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Assistant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Assistant;
  static deserializeBinaryFromReader(message: Assistant, reader: jspb.BinaryReader): Assistant;
}

declare namespace Assistant {
  export type AsObject = {
    id: string,
    status: string,
    visibility: string,
    source: string,
    sourceidentifier: string,
    projectid: string,
    organizationid: string,
    assistantprovider: string,
    assistantproviderid: string,
    name: string,
    description: string,
    assistantprovidermodel?: AssistantProviderModel.AsObject,
    assistantprovideragentkit?: AssistantProviderAgentkit.AsObject,
    assistantproviderwebsocket?: AssistantProviderWebsocket.AsObject,
    assistanttag?: Tag.AsObject,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    debuggerdeployment?: AssistantDebuggerDeployment.AsObject,
    phonedeployment?: AssistantPhoneDeployment.AsObject,
    whatsappdeployment?: AssistantWhatsappDeployment.AsObject,
    webplugindeployment?: AssistantWebpluginDeployment.AsObject,
    apideployment?: AssistantApiDeployment.AsObject,
    assistantconversationsList: Array<AssistantConversation.AsObject>,
    assistantwebhooksList: Array<AssistantWebhook.AsObject>,
    assistanttoolsList: Array<AssistantTool.AsObject>,
    assistanttelemetryprovidersList: Array<AssistantTelemetryProvider.AsObject>,
    toolfillerenabled: boolean,
  }
}

declare class CreateAssistantRequest extends jspb.Message {
  hasAssistantprovider(): boolean;
  clearAssistantprovider(): void;
  getAssistantprovider(): CreateAssistantProviderRequest | undefined;
  setAssistantprovider(value?: CreateAssistantProviderRequest): void;

  clearAssistantknowledgesList(): void;
  getAssistantknowledgesList(): Array<CreateAssistantKnowledgeRequest>;
  setAssistantknowledgesList(value: Array<CreateAssistantKnowledgeRequest>): void;
  addAssistantknowledges(value?: CreateAssistantKnowledgeRequest, index?: number): CreateAssistantKnowledgeRequest;

  clearAssistanttoolsList(): void;
  getAssistanttoolsList(): Array<CreateAssistantToolRequest>;
  setAssistanttoolsList(value: Array<CreateAssistantToolRequest>): void;
  addAssistanttools(value?: CreateAssistantToolRequest, index?: number): CreateAssistantToolRequest;

  getDescription(): string;
  setDescription(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantRequest): CreateAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantRequest;
  static deserializeBinaryFromReader(message: CreateAssistantRequest, reader: jspb.BinaryReader): CreateAssistantRequest;
}

declare namespace CreateAssistantRequest {
  export type AsObject = {
    assistantprovider?: CreateAssistantProviderRequest.AsObject,
    assistantknowledgesList: Array<CreateAssistantKnowledgeRequest.AsObject>,
    assistanttoolsList: Array<CreateAssistantToolRequest.AsObject>,
    description: string,
    visibility: string,
    language: string,
    source: string,
    sourceidentifier: string,
    tagsList: Array<string>,
    name: string,
  }
}

declare class CreateAssistantTagRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantTagRequest): CreateAssistantTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantTagRequest;
  static deserializeBinaryFromReader(message: CreateAssistantTagRequest, reader: jspb.BinaryReader): CreateAssistantTagRequest;
}

declare namespace CreateAssistantTagRequest {
  export type AsObject = {
    assistantid: string,
    tagsList: Array<string>,
  }
}

declare class GetAssistantRequest extends jspb.Message {
  hasAssistantdefinition(): boolean;
  clearAssistantdefinition(): void;
  getAssistantdefinition(): AssistantDefinition | undefined;
  setAssistantdefinition(value?: AssistantDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantRequest): GetAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantRequest;
  static deserializeBinaryFromReader(message: GetAssistantRequest, reader: jspb.BinaryReader): GetAssistantRequest;
}

declare namespace GetAssistantRequest {
  export type AsObject = {
    assistantdefinition?: AssistantDefinition.AsObject,
  }
}

declare class DeleteAssistantRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantRequest): DeleteAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantRequest, reader: jspb.BinaryReader): DeleteAssistantRequest;
}

declare namespace DeleteAssistantRequest {
  export type AsObject = {
    id: string,
  }
}

declare class GetAssistantResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Assistant | undefined;
  setData(value?: Assistant): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantResponse): GetAssistantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantResponse;
  static deserializeBinaryFromReader(message: GetAssistantResponse, reader: jspb.BinaryReader): GetAssistantResponse;
}

declare namespace GetAssistantResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Assistant.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantRequest): GetAllAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantRequest, reader: jspb.BinaryReader): GetAllAssistantRequest;
}

declare namespace GetAllAssistantRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllAssistantTelemetryRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantDefinition | undefined;
  setAssistant(value?: AssistantDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantTelemetryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantTelemetryRequest): GetAllAssistantTelemetryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantTelemetryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantTelemetryRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantTelemetryRequest, reader: jspb.BinaryReader): GetAllAssistantTelemetryRequest;
}

declare namespace GetAllAssistantTelemetryRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    assistant?: AssistantDefinition.AsObject,
  }
}

declare class TelemetryEvent extends jspb.Message {
  getMessageid(): string;
  setMessageid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryEvent): TelemetryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryEvent;
  static deserializeBinaryFromReader(message: TelemetryEvent, reader: jspb.BinaryReader): TelemetryEvent;
}

declare namespace TelemetryEvent {
  export type AsObject = {
    messageid: string,
    assistantid: string,
    assistantconversationid: string,
    projectid: string,
    organizationid: string,
    name: string,
    dataMap: Array<[string, string]>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class TelemetryMetric extends jspb.Message {
  getContextid(): string;
  setContextid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryMetric.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryMetric): TelemetryMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryMetric;
  static deserializeBinaryFromReader(message: TelemetryMetric, reader: jspb.BinaryReader): TelemetryMetric;
}

declare namespace TelemetryMetric {
  export type AsObject = {
    contextid: string,
    assistantid: string,
    assistantconversationid: string,
    projectid: string,
    organizationid: string,
    scope: string,
    metricsList: Array<Metric.AsObject>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class TelemetryRecord extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): TelemetryEvent | undefined;
  setEvent(value?: TelemetryEvent): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): TelemetryMetric | undefined;
  setMetric(value?: TelemetryMetric): void;

  getRecordCase(): TelemetryRecord.RecordCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryRecord.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryRecord): TelemetryRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryRecord;
  static deserializeBinaryFromReader(message: TelemetryRecord, reader: jspb.BinaryReader): TelemetryRecord;
}

declare namespace TelemetryRecord {
  export type AsObject = {
    event?: TelemetryEvent.AsObject,
    metric?: TelemetryMetric.AsObject,
  }

  export enum RecordCase {
    RECORD_NOT_SET = 0,
    EVENT = 1,
    METRIC = 2,
  }
}

declare class GetAllAssistantTelemetryResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<TelemetryRecord>;
  setDataList(value: Array<TelemetryRecord>): void;
  addData(value?: TelemetryRecord, index?: number): TelemetryRecord;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantTelemetryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantTelemetryResponse): GetAllAssistantTelemetryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantTelemetryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantTelemetryResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantTelemetryResponse, reader: jspb.BinaryReader): GetAllAssistantTelemetryResponse;
}

declare namespace GetAllAssistantTelemetryResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<TelemetryRecord.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class AssistantTelemetryProvider extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getProvidertype(): string;
  setProvidertype(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Metadata>;
  setOptionsList(value: Array<Metadata>): void;
  addOptions(value?: Metadata, index?: number): Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTelemetryProvider.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTelemetryProvider): AssistantTelemetryProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTelemetryProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTelemetryProvider;
  static deserializeBinaryFromReader(message: AssistantTelemetryProvider, reader: jspb.BinaryReader): AssistantTelemetryProvider;
}

declare namespace AssistantTelemetryProvider {
  export type AsObject = {
    id: string,
    assistantid: string,
    projectid: string,
    organizationid: string,
    providertype: string,
    enabled: boolean,
    optionsList: Array<Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class GetAssistantTelemetryProviderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantTelemetryProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantTelemetryProviderRequest): GetAssistantTelemetryProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantTelemetryProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantTelemetryProviderRequest;
  static deserializeBinaryFromReader(message: GetAssistantTelemetryProviderRequest, reader: jspb.BinaryReader): GetAssistantTelemetryProviderRequest;
}

declare namespace GetAssistantTelemetryProviderRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class GetAssistantTelemetryProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantTelemetryProvider | undefined;
  setData(value?: AssistantTelemetryProvider): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantTelemetryProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantTelemetryProviderResponse): GetAssistantTelemetryProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantTelemetryProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantTelemetryProviderResponse;
  static deserializeBinaryFromReader(message: GetAssistantTelemetryProviderResponse, reader: jspb.BinaryReader): GetAssistantTelemetryProviderResponse;
}

declare namespace GetAssistantTelemetryProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantTelemetryProvider.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllAssistantTelemetryProviderRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantTelemetryProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantTelemetryProviderRequest): GetAllAssistantTelemetryProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantTelemetryProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantTelemetryProviderRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantTelemetryProviderRequest, reader: jspb.BinaryReader): GetAllAssistantTelemetryProviderRequest;
}

declare namespace GetAllAssistantTelemetryProviderRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    assistantid: string,
  }
}

declare class GetAllAssistantTelemetryProviderResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantTelemetryProvider>;
  setDataList(value: Array<AssistantTelemetryProvider>): void;
  addData(value?: AssistantTelemetryProvider, index?: number): AssistantTelemetryProvider;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantTelemetryProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantTelemetryProviderResponse): GetAllAssistantTelemetryProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantTelemetryProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantTelemetryProviderResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantTelemetryProviderResponse, reader: jspb.BinaryReader): GetAllAssistantTelemetryProviderResponse;
}

declare namespace GetAllAssistantTelemetryProviderResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantTelemetryProvider.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class CreateAssistantTelemetryProviderRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getProvidertype(): string;
  setProvidertype(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Metadata>;
  setOptionsList(value: Array<Metadata>): void;
  addOptions(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantTelemetryProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantTelemetryProviderRequest): CreateAssistantTelemetryProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantTelemetryProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantTelemetryProviderRequest;
  static deserializeBinaryFromReader(message: CreateAssistantTelemetryProviderRequest, reader: jspb.BinaryReader): CreateAssistantTelemetryProviderRequest;
}

declare namespace CreateAssistantTelemetryProviderRequest {
  export type AsObject = {
    assistantid: string,
    providertype: string,
    enabled: boolean,
    optionsList: Array<Metadata.AsObject>,
  }
}

declare class UpdateAssistantTelemetryProviderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getProvidertype(): string;
  setProvidertype(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Metadata>;
  setOptionsList(value: Array<Metadata>): void;
  addOptions(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantTelemetryProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantTelemetryProviderRequest): UpdateAssistantTelemetryProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantTelemetryProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantTelemetryProviderRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantTelemetryProviderRequest, reader: jspb.BinaryReader): UpdateAssistantTelemetryProviderRequest;
}

declare namespace UpdateAssistantTelemetryProviderRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
    providertype: string,
    enabled: boolean,
    optionsList: Array<Metadata.AsObject>,
  }
}

declare class DeleteAssistantTelemetryProviderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantTelemetryProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantTelemetryProviderRequest): DeleteAssistantTelemetryProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantTelemetryProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantTelemetryProviderRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantTelemetryProviderRequest, reader: jspb.BinaryReader): DeleteAssistantTelemetryProviderRequest;
}

declare namespace DeleteAssistantTelemetryProviderRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

declare class GetAllAssistantResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Assistant>;
  setDataList(value: Array<Assistant>): void;
  addData(value?: Assistant, index?: number): Assistant;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantResponse): GetAllAssistantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantResponse, reader: jspb.BinaryReader): GetAllAssistantResponse;
}

declare namespace GetAllAssistantResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Assistant.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetAllAssistantMessageRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Ordering | undefined;
  setOrder(value?: Ordering): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<FieldSelector>;
  setSelectorsList(value: Array<FieldSelector>): void;
  addSelectors(value?: FieldSelector, index?: number): FieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantMessageRequest): GetAllAssistantMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantMessageRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantMessageRequest, reader: jspb.BinaryReader): GetAllAssistantMessageRequest;
}

declare namespace GetAllAssistantMessageRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    assistantid: string,
    order?: Ordering.AsObject,
    selectorsList: Array<FieldSelector.AsObject>,
  }
}

declare class GetAllAssistantMessageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConversationMessage>;
  setDataList(value: Array<AssistantConversationMessage>): void;
  addData(value?: AssistantConversationMessage, index?: number): AssistantConversationMessage;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantMessageResponse): GetAllAssistantMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantMessageResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantMessageResponse, reader: jspb.BinaryReader): GetAllAssistantMessageResponse;
}

declare namespace GetAllAssistantMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversationMessage.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetAllMessageRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Ordering | undefined;
  setOrder(value?: Ordering): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<FieldSelector>;
  setSelectorsList(value: Array<FieldSelector>): void;
  addSelectors(value?: FieldSelector, index?: number): FieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessageRequest): GetAllMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessageRequest;
  static deserializeBinaryFromReader(message: GetAllMessageRequest, reader: jspb.BinaryReader): GetAllMessageRequest;
}

declare namespace GetAllMessageRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    order?: Ordering.AsObject,
    selectorsList: Array<FieldSelector.AsObject>,
  }
}

declare class GetAllMessageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConversationMessage>;
  setDataList(value: Array<AssistantConversationMessage>): void;
  addData(value?: AssistantConversationMessage, index?: number): AssistantConversationMessage;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessageResponse): GetAllMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessageResponse;
  static deserializeBinaryFromReader(message: GetAllMessageResponse, reader: jspb.BinaryReader): GetAllMessageResponse;
}

declare namespace GetAllMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversationMessage.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class UpdateAssistantDetailRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getToolfillerenabled(): boolean;
  setToolfillerenabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantDetailRequest): UpdateAssistantDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantDetailRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantDetailRequest, reader: jspb.BinaryReader): UpdateAssistantDetailRequest;
}

declare namespace UpdateAssistantDetailRequest {
  export type AsObject = {
    assistantid: string,
    name: string,
    description: string,
    toolfillerenabled: boolean,
  }
}

declare class GetAssistantConversationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getId(): string;
  setId(value: string): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<FieldSelector>;
  setSelectorsList(value: Array<FieldSelector>): void;
  addSelectors(value?: FieldSelector, index?: number): FieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantConversationRequest): GetAssistantConversationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantConversationRequest;
  static deserializeBinaryFromReader(message: GetAssistantConversationRequest, reader: jspb.BinaryReader): GetAssistantConversationRequest;
}

declare namespace GetAssistantConversationRequest {
  export type AsObject = {
    assistantid: string,
    id: string,
    selectorsList: Array<FieldSelector.AsObject>,
  }
}

declare class GetAssistantConversationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantConversation | undefined;
  setData(value?: AssistantConversation): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantConversationResponse): GetAssistantConversationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantConversationResponse;
  static deserializeBinaryFromReader(message: GetAssistantConversationResponse, reader: jspb.BinaryReader): GetAssistantConversationResponse;
}

declare namespace GetAssistantConversationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantConversation.AsObject,
    error?: Error$1.AsObject,
  }
}

// package: assistant_api
// file: assistant-api.proto



type AssistantServiceGetAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantRequest;
  readonly responseType: typeof GetAssistantResponse;
};

type AssistantServiceGetAllAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantRequest;
  readonly responseType: typeof GetAllAssistantResponse;
};

type AssistantServiceCreateAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantRequest;
  readonly responseType: typeof GetAssistantResponse;
};

type AssistantServiceDeleteAssistant = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteAssistantRequest;
  readonly responseType: typeof GetAssistantResponse;
};

type AssistantServiceGetAllAssistantProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantProviderRequest;
  readonly responseType: typeof GetAllAssistantProviderResponse;
};

type AssistantServiceCreateAssistantProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantProviderRequest;
  readonly responseType: typeof GetAssistantProviderResponse;
};

type AssistantServiceCreateAssistantTag = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantTagRequest;
  readonly responseType: typeof GetAssistantResponse;
};

type AssistantServiceUpdateAssistantVersion = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateAssistantVersionRequest;
  readonly responseType: typeof GetAssistantResponse;
};

type AssistantServiceUpdateAssistantDetail = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateAssistantDetailRequest;
  readonly responseType: typeof GetAssistantResponse;
};

type AssistantServiceGetAllAssistantMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantMessageRequest;
  readonly responseType: typeof GetAllAssistantMessageResponse;
};

type AssistantServiceGetAllConversationMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllConversationMessageRequest;
  readonly responseType: typeof GetAllConversationMessageResponse;
};

type AssistantServiceGetAllMessage = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllMessageRequest;
  readonly responseType: typeof GetAllMessageResponse;
};

type AssistantServiceGetAllAssistantTelemetry = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantTelemetryRequest;
  readonly responseType: typeof GetAllAssistantTelemetryResponse;
};

type AssistantServiceGetAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantTelemetryProviderRequest;
  readonly responseType: typeof GetAssistantTelemetryProviderResponse;
};

type AssistantServiceGetAllAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantTelemetryProviderRequest;
  readonly responseType: typeof GetAllAssistantTelemetryProviderResponse;
};

type AssistantServiceCreateAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantTelemetryProviderRequest;
  readonly responseType: typeof GetAssistantTelemetryProviderResponse;
};

type AssistantServiceUpdateAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateAssistantTelemetryProviderRequest;
  readonly responseType: typeof GetAssistantTelemetryProviderResponse;
};

type AssistantServiceDeleteAssistantTelemetryProvider = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteAssistantTelemetryProviderRequest;
  readonly responseType: typeof GetAssistantTelemetryProviderResponse;
};

type AssistantServiceGetAllAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantConversationRequest;
  readonly responseType: typeof GetAllAssistantConversationResponse;
};

type AssistantServiceGetAssistantConversation = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantConversationRequest;
  readonly responseType: typeof GetAssistantConversationResponse;
};

type AssistantServiceGetAssistantWebhookLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantWebhookLogRequest;
  readonly responseType: typeof GetAssistantWebhookLogResponse;
};

type AssistantServiceGetAllAssistantWebhookLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantWebhookLogRequest;
  readonly responseType: typeof GetAllAssistantWebhookLogResponse;
};

type AssistantServiceGetAllAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantWebhookRequest;
  readonly responseType: typeof GetAllAssistantWebhookResponse;
};

type AssistantServiceGetAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantWebhookRequest;
  readonly responseType: typeof GetAssistantWebhookResponse;
};

type AssistantServiceCreateAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantWebhookRequest;
  readonly responseType: typeof GetAssistantWebhookResponse;
};

type AssistantServiceUpdateAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateAssistantWebhookRequest;
  readonly responseType: typeof GetAssistantWebhookResponse;
};

type AssistantServiceDeleteAssistantWebhook = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteAssistantWebhookRequest;
  readonly responseType: typeof GetAssistantWebhookResponse;
};

type AssistantServiceGetAssistantToolLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantToolLogRequest;
  readonly responseType: typeof GetAssistantToolLogResponse;
};

type AssistantServiceGetAllAssistantToolLog = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantToolLogRequest;
  readonly responseType: typeof GetAllAssistantToolLogResponse;
};

type AssistantServiceGetAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantAnalysisRequest;
  readonly responseType: typeof GetAssistantAnalysisResponse;
};

type AssistantServiceUpdateAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateAssistantAnalysisRequest;
  readonly responseType: typeof GetAssistantAnalysisResponse;
};

type AssistantServiceCreateAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantAnalysisRequest;
  readonly responseType: typeof GetAssistantAnalysisResponse;
};

type AssistantServiceDeleteAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteAssistantAnalysisRequest;
  readonly responseType: typeof GetAssistantAnalysisResponse;
};

type AssistantServiceGetAllAssistantAnalysis = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantAnalysisRequest;
  readonly responseType: typeof GetAllAssistantAnalysisResponse;
};

type AssistantServiceCreateAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantToolRequest;
  readonly responseType: typeof GetAssistantToolResponse;
};

type AssistantServiceGetAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantToolRequest;
  readonly responseType: typeof GetAssistantToolResponse;
};

type AssistantServiceGetAllAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantToolRequest;
  readonly responseType: typeof GetAllAssistantToolResponse;
};

type AssistantServiceDeleteAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteAssistantToolRequest;
  readonly responseType: typeof GetAssistantToolResponse;
};

type AssistantServiceUpdateAssistantTool = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateAssistantToolRequest;
  readonly responseType: typeof GetAssistantToolResponse;
};

type AssistantServiceCreateAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantKnowledgeRequest;
  readonly responseType: typeof GetAssistantKnowledgeResponse;
};

type AssistantServiceGetAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantKnowledgeRequest;
  readonly responseType: typeof GetAssistantKnowledgeResponse;
};

type AssistantServiceGetAllAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAssistantKnowledgeRequest;
  readonly responseType: typeof GetAllAssistantKnowledgeResponse;
};

type AssistantServiceDeleteAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteAssistantKnowledgeRequest;
  readonly responseType: typeof GetAssistantKnowledgeResponse;
};

type AssistantServiceUpdateAssistantKnowledge = {
  readonly methodName: string;
  readonly service: typeof AssistantService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateAssistantKnowledgeRequest;
  readonly responseType: typeof GetAssistantKnowledgeResponse;
};

declare class AssistantService {
  static readonly serviceName: string;
  static readonly GetAssistant: AssistantServiceGetAssistant;
  static readonly GetAllAssistant: AssistantServiceGetAllAssistant;
  static readonly CreateAssistant: AssistantServiceCreateAssistant;
  static readonly DeleteAssistant: AssistantServiceDeleteAssistant;
  static readonly GetAllAssistantProvider: AssistantServiceGetAllAssistantProvider;
  static readonly CreateAssistantProvider: AssistantServiceCreateAssistantProvider;
  static readonly CreateAssistantTag: AssistantServiceCreateAssistantTag;
  static readonly UpdateAssistantVersion: AssistantServiceUpdateAssistantVersion;
  static readonly UpdateAssistantDetail: AssistantServiceUpdateAssistantDetail;
  static readonly GetAllAssistantMessage: AssistantServiceGetAllAssistantMessage;
  static readonly GetAllConversationMessage: AssistantServiceGetAllConversationMessage;
  static readonly GetAllMessage: AssistantServiceGetAllMessage;
  static readonly GetAllAssistantTelemetry: AssistantServiceGetAllAssistantTelemetry;
  static readonly GetAssistantTelemetryProvider: AssistantServiceGetAssistantTelemetryProvider;
  static readonly GetAllAssistantTelemetryProvider: AssistantServiceGetAllAssistantTelemetryProvider;
  static readonly CreateAssistantTelemetryProvider: AssistantServiceCreateAssistantTelemetryProvider;
  static readonly UpdateAssistantTelemetryProvider: AssistantServiceUpdateAssistantTelemetryProvider;
  static readonly DeleteAssistantTelemetryProvider: AssistantServiceDeleteAssistantTelemetryProvider;
  static readonly GetAllAssistantConversation: AssistantServiceGetAllAssistantConversation;
  static readonly GetAssistantConversation: AssistantServiceGetAssistantConversation;
  static readonly GetAssistantWebhookLog: AssistantServiceGetAssistantWebhookLog;
  static readonly GetAllAssistantWebhookLog: AssistantServiceGetAllAssistantWebhookLog;
  static readonly GetAllAssistantWebhook: AssistantServiceGetAllAssistantWebhook;
  static readonly GetAssistantWebhook: AssistantServiceGetAssistantWebhook;
  static readonly CreateAssistantWebhook: AssistantServiceCreateAssistantWebhook;
  static readonly UpdateAssistantWebhook: AssistantServiceUpdateAssistantWebhook;
  static readonly DeleteAssistantWebhook: AssistantServiceDeleteAssistantWebhook;
  static readonly GetAssistantToolLog: AssistantServiceGetAssistantToolLog;
  static readonly GetAllAssistantToolLog: AssistantServiceGetAllAssistantToolLog;
  static readonly GetAssistantAnalysis: AssistantServiceGetAssistantAnalysis;
  static readonly UpdateAssistantAnalysis: AssistantServiceUpdateAssistantAnalysis;
  static readonly CreateAssistantAnalysis: AssistantServiceCreateAssistantAnalysis;
  static readonly DeleteAssistantAnalysis: AssistantServiceDeleteAssistantAnalysis;
  static readonly GetAllAssistantAnalysis: AssistantServiceGetAllAssistantAnalysis;
  static readonly CreateAssistantTool: AssistantServiceCreateAssistantTool;
  static readonly GetAssistantTool: AssistantServiceGetAssistantTool;
  static readonly GetAllAssistantTool: AssistantServiceGetAllAssistantTool;
  static readonly DeleteAssistantTool: AssistantServiceDeleteAssistantTool;
  static readonly UpdateAssistantTool: AssistantServiceUpdateAssistantTool;
  static readonly CreateAssistantKnowledge: AssistantServiceCreateAssistantKnowledge;
  static readonly GetAssistantKnowledge: AssistantServiceGetAssistantKnowledge;
  static readonly GetAllAssistantKnowledge: AssistantServiceGetAllAssistantKnowledge;
  static readonly DeleteAssistantKnowledge: AssistantServiceDeleteAssistantKnowledge;
  static readonly UpdateAssistantKnowledge: AssistantServiceUpdateAssistantKnowledge;
}

type ServiceError$a = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$a {
  cancel(): void;
}

declare class AssistantServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAssistant(
    requestMessage: GetAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  getAssistant(
    requestMessage: GetAssistantRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistant(
    requestMessage: GetAllAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistant(
    requestMessage: GetAllAssistantRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantResponse|null) => void
  ): UnaryResponse$a;
  createAssistant(
    requestMessage: CreateAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  createAssistant(
    requestMessage: CreateAssistantRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistant(
    requestMessage: DeleteAssistantRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistant(
    requestMessage: DeleteAssistantRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantProvider(
    requestMessage: GetAllAssistantProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantProviderResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantProvider(
    requestMessage: GetAllAssistantProviderRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantProviderResponse|null) => void
  ): UnaryResponse$a;
  createAssistantProvider(
    requestMessage: CreateAssistantProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantProviderResponse|null) => void
  ): UnaryResponse$a;
  createAssistantProvider(
    requestMessage: CreateAssistantProviderRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantProviderResponse|null) => void
  ): UnaryResponse$a;
  createAssistantTag(
    requestMessage: CreateAssistantTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  createAssistantTag(
    requestMessage: CreateAssistantTagRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantVersion(
    requestMessage: UpdateAssistantVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantVersion(
    requestMessage: UpdateAssistantVersionRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantDetail(
    requestMessage: UpdateAssistantDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantDetail(
    requestMessage: UpdateAssistantDetailRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantMessage(
    requestMessage: GetAllAssistantMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantMessageResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantMessage(
    requestMessage: GetAllAssistantMessageRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantMessageResponse|null) => void
  ): UnaryResponse$a;
  getAllConversationMessage(
    requestMessage: GetAllConversationMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllConversationMessageResponse|null) => void
  ): UnaryResponse$a;
  getAllConversationMessage(
    requestMessage: GetAllConversationMessageRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllConversationMessageResponse|null) => void
  ): UnaryResponse$a;
  getAllMessage(
    requestMessage: GetAllMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllMessageResponse|null) => void
  ): UnaryResponse$a;
  getAllMessage(
    requestMessage: GetAllMessageRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllMessageResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantTelemetry(
    requestMessage: GetAllAssistantTelemetryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantTelemetryResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantTelemetry(
    requestMessage: GetAllAssistantTelemetryRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantTelemetryResponse|null) => void
  ): UnaryResponse$a;
  getAssistantTelemetryProvider(
    requestMessage: GetAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  getAssistantTelemetryProvider(
    requestMessage: GetAssistantTelemetryProviderRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantTelemetryProvider(
    requestMessage: GetAllAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantTelemetryProvider(
    requestMessage: GetAllAssistantTelemetryProviderRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  createAssistantTelemetryProvider(
    requestMessage: CreateAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  createAssistantTelemetryProvider(
    requestMessage: CreateAssistantTelemetryProviderRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantTelemetryProvider(
    requestMessage: UpdateAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantTelemetryProvider(
    requestMessage: UpdateAssistantTelemetryProviderRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantTelemetryProvider(
    requestMessage: DeleteAssistantTelemetryProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantTelemetryProvider(
    requestMessage: DeleteAssistantTelemetryProviderRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantTelemetryProviderResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantConversation(
    requestMessage: GetAllAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantConversation(
    requestMessage: GetAllAssistantConversationRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantConversationResponse|null) => void
  ): UnaryResponse$a;
  getAssistantConversation(
    requestMessage: GetAssistantConversationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantConversationResponse|null) => void
  ): UnaryResponse$a;
  getAssistantConversation(
    requestMessage: GetAssistantConversationRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantConversationResponse|null) => void
  ): UnaryResponse$a;
  getAssistantWebhookLog(
    requestMessage: GetAssistantWebhookLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookLogResponse|null) => void
  ): UnaryResponse$a;
  getAssistantWebhookLog(
    requestMessage: GetAssistantWebhookLogRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookLogResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantWebhookLog(
    requestMessage: GetAllAssistantWebhookLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantWebhookLogResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantWebhookLog(
    requestMessage: GetAllAssistantWebhookLogRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantWebhookLogResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantWebhook(
    requestMessage: GetAllAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantWebhook(
    requestMessage: GetAllAssistantWebhookRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  getAssistantWebhook(
    requestMessage: GetAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  getAssistantWebhook(
    requestMessage: GetAssistantWebhookRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  createAssistantWebhook(
    requestMessage: CreateAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  createAssistantWebhook(
    requestMessage: CreateAssistantWebhookRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantWebhook(
    requestMessage: UpdateAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantWebhook(
    requestMessage: UpdateAssistantWebhookRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantWebhook(
    requestMessage: DeleteAssistantWebhookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantWebhook(
    requestMessage: DeleteAssistantWebhookRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantWebhookResponse|null) => void
  ): UnaryResponse$a;
  getAssistantToolLog(
    requestMessage: GetAssistantToolLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolLogResponse|null) => void
  ): UnaryResponse$a;
  getAssistantToolLog(
    requestMessage: GetAssistantToolLogRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolLogResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantToolLog(
    requestMessage: GetAllAssistantToolLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantToolLogResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantToolLog(
    requestMessage: GetAllAssistantToolLogRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantToolLogResponse|null) => void
  ): UnaryResponse$a;
  getAssistantAnalysis(
    requestMessage: GetAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  getAssistantAnalysis(
    requestMessage: GetAssistantAnalysisRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantAnalysis(
    requestMessage: UpdateAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantAnalysis(
    requestMessage: UpdateAssistantAnalysisRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  createAssistantAnalysis(
    requestMessage: CreateAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  createAssistantAnalysis(
    requestMessage: CreateAssistantAnalysisRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantAnalysis(
    requestMessage: DeleteAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantAnalysis(
    requestMessage: DeleteAssistantAnalysisRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantAnalysis(
    requestMessage: GetAllAssistantAnalysisRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantAnalysis(
    requestMessage: GetAllAssistantAnalysisRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantAnalysisResponse|null) => void
  ): UnaryResponse$a;
  createAssistantTool(
    requestMessage: CreateAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  createAssistantTool(
    requestMessage: CreateAssistantToolRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  getAssistantTool(
    requestMessage: GetAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  getAssistantTool(
    requestMessage: GetAssistantToolRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantTool(
    requestMessage: GetAllAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantTool(
    requestMessage: GetAllAssistantToolRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantTool(
    requestMessage: DeleteAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantTool(
    requestMessage: DeleteAssistantToolRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantTool(
    requestMessage: UpdateAssistantToolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantTool(
    requestMessage: UpdateAssistantToolRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantToolResponse|null) => void
  ): UnaryResponse$a;
  createAssistantKnowledge(
    requestMessage: CreateAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  createAssistantKnowledge(
    requestMessage: CreateAssistantKnowledgeRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  getAssistantKnowledge(
    requestMessage: GetAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  getAssistantKnowledge(
    requestMessage: GetAssistantKnowledgeRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantKnowledge(
    requestMessage: GetAllAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  getAllAssistantKnowledge(
    requestMessage: GetAllAssistantKnowledgeRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAllAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantKnowledge(
    requestMessage: DeleteAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  deleteAssistantKnowledge(
    requestMessage: DeleteAssistantKnowledgeRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantKnowledge(
    requestMessage: UpdateAssistantKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
  updateAssistantKnowledge(
    requestMessage: UpdateAssistantKnowledgeRequest,
    callback: (error: ServiceError$a|null, responseMessage: GetAssistantKnowledgeResponse|null) => void
  ): UnaryResponse$a;
}

// package: web_api
// file: web-api.proto



declare class AuthenticateRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
  static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
}

declare namespace AuthenticateRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

declare class RegisterUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

declare namespace RegisterUserRequest {
  export type AsObject = {
    email: string,
    password: string,
    name: string,
  }
}

declare class Token extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getTokentype(): string;
  setTokentype(value: string): void;

  getIsexpired(): boolean;
  setIsexpired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

declare namespace Token {
  export type AsObject = {
    id: string,
    token: string,
    tokentype: string,
    isexpired: boolean,
  }
}

declare class OrganizationRole extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getOrganizationname(): string;
  setOrganizationname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationRole.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationRole): OrganizationRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationRole;
  static deserializeBinaryFromReader(message: OrganizationRole, reader: jspb.BinaryReader): OrganizationRole;
}

declare namespace OrganizationRole {
  export type AsObject = {
    id: string,
    organizationid: string,
    role: string,
    organizationname: string,
  }
}

declare class ProjectRole extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getProjectname(): string;
  setProjectname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRole.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRole): ProjectRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRole;
  static deserializeBinaryFromReader(message: ProjectRole, reader: jspb.BinaryReader): ProjectRole;
}

declare namespace ProjectRole {
  export type AsObject = {
    id: string,
    projectid: string,
    role: string,
    projectname: string,
  }
}

declare class FeaturePermission extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFeature(): string;
  setFeature(value: string): void;

  getIsenable(): boolean;
  setIsenable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePermission.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePermission): FeaturePermission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeaturePermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePermission;
  static deserializeBinaryFromReader(message: FeaturePermission, reader: jspb.BinaryReader): FeaturePermission;
}

declare namespace FeaturePermission {
  export type AsObject = {
    id: string,
    feature: string,
    isenable: boolean,
  }
}

declare class Authentication extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): Token | undefined;
  setToken(value?: Token): void;

  hasOrganizationrole(): boolean;
  clearOrganizationrole(): void;
  getOrganizationrole(): OrganizationRole | undefined;
  setOrganizationrole(value?: OrganizationRole): void;

  clearProjectrolesList(): void;
  getProjectrolesList(): Array<ProjectRole>;
  setProjectrolesList(value: Array<ProjectRole>): void;
  addProjectroles(value?: ProjectRole, index?: number): ProjectRole;

  clearFeaturepermissionsList(): void;
  getFeaturepermissionsList(): Array<FeaturePermission>;
  setFeaturepermissionsList(value: Array<FeaturePermission>): void;
  addFeaturepermissions(value?: FeaturePermission, index?: number): FeaturePermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authentication.AsObject;
  static toObject(includeInstance: boolean, msg: Authentication): Authentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Authentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authentication;
  static deserializeBinaryFromReader(message: Authentication, reader: jspb.BinaryReader): Authentication;
}

declare namespace Authentication {
  export type AsObject = {
    user?: User.AsObject,
    token?: Token.AsObject,
    organizationrole?: OrganizationRole.AsObject,
    projectrolesList: Array<ProjectRole.AsObject>,
    featurepermissionsList: Array<FeaturePermission.AsObject>,
  }
}

declare class ScopedAuthentication extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getOrganizationid(): number;
  setOrganizationid(value: number): void;

  getProjectid(): number;
  setProjectid(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopedAuthentication.AsObject;
  static toObject(includeInstance: boolean, msg: ScopedAuthentication): ScopedAuthentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScopedAuthentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopedAuthentication;
  static deserializeBinaryFromReader(message: ScopedAuthentication, reader: jspb.BinaryReader): ScopedAuthentication;
}

declare namespace ScopedAuthentication {
  export type AsObject = {
    userid: number,
    organizationid: number,
    projectid: number,
    status: string,
  }
}

declare class AuthenticateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Authentication | undefined;
  setData(value?: Authentication): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateResponse): AuthenticateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateResponse;
  static deserializeBinaryFromReader(message: AuthenticateResponse, reader: jspb.BinaryReader): AuthenticateResponse;
}

declare namespace AuthenticateResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Authentication.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class ForgotPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordRequest): ForgotPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordRequest;
  static deserializeBinaryFromReader(message: ForgotPasswordRequest, reader: jspb.BinaryReader): ForgotPasswordRequest;
}

declare namespace ForgotPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

declare class ForgotPasswordResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordResponse): ForgotPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordResponse;
  static deserializeBinaryFromReader(message: ForgotPasswordResponse, reader: jspb.BinaryReader): ForgotPasswordResponse;
}

declare namespace ForgotPasswordResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: Error$1.AsObject,
  }
}

declare class ChangePasswordRequest extends jspb.Message {
  getOldpassword(): string;
  setOldpassword(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

declare namespace ChangePasswordRequest {
  export type AsObject = {
    oldpassword: string,
    password: string,
  }
}

declare class ChangePasswordResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

declare namespace ChangePasswordResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: Error$1.AsObject,
  }
}

declare class CreatePasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordRequest): CreatePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordRequest;
  static deserializeBinaryFromReader(message: CreatePasswordRequest, reader: jspb.BinaryReader): CreatePasswordRequest;
}

declare namespace CreatePasswordRequest {
  export type AsObject = {
    token: string,
    password: string,
  }
}

declare class CreatePasswordResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordResponse): CreatePasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordResponse;
  static deserializeBinaryFromReader(message: CreatePasswordResponse, reader: jspb.BinaryReader): CreatePasswordResponse;
}

declare namespace CreatePasswordResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: Error$1.AsObject,
  }
}

declare class VerifyTokenRequest extends jspb.Message {
  getTokentype(): string;
  setTokentype(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenRequest): VerifyTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenRequest;
  static deserializeBinaryFromReader(message: VerifyTokenRequest, reader: jspb.BinaryReader): VerifyTokenRequest;
}

declare namespace VerifyTokenRequest {
  export type AsObject = {
    tokentype: string,
    token: string,
  }
}

declare class VerifyTokenResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Token | undefined;
  setData(value?: Token): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenResponse): VerifyTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenResponse;
  static deserializeBinaryFromReader(message: VerifyTokenResponse, reader: jspb.BinaryReader): VerifyTokenResponse;
}

declare namespace VerifyTokenResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Token.AsObject,
  }
}

declare class AuthorizeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeRequest): AuthorizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeRequest;
  static deserializeBinaryFromReader(message: AuthorizeRequest, reader: jspb.BinaryReader): AuthorizeRequest;
}

declare namespace AuthorizeRequest {
  export type AsObject = {
  }
}

declare class ScopeAuthorizeRequest extends jspb.Message {
  getScope(): string;
  setScope(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopeAuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScopeAuthorizeRequest): ScopeAuthorizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScopeAuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopeAuthorizeRequest;
  static deserializeBinaryFromReader(message: ScopeAuthorizeRequest, reader: jspb.BinaryReader): ScopeAuthorizeRequest;
}

declare namespace ScopeAuthorizeRequest {
  export type AsObject = {
    scope: string,
  }
}

declare class ScopedAuthenticationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ScopedAuthentication | undefined;
  setData(value?: ScopedAuthentication): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopedAuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScopedAuthenticationResponse): ScopedAuthenticationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScopedAuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopedAuthenticationResponse;
  static deserializeBinaryFromReader(message: ScopedAuthenticationResponse, reader: jspb.BinaryReader): ScopedAuthenticationResponse;
}

declare namespace ScopedAuthenticationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: ScopedAuthentication.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

declare namespace GetUserRequest {
  export type AsObject = {
  }
}

declare class GetUserResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): User | undefined;
  setData(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

declare namespace GetUserResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: User.AsObject,
  }
}

declare class UpdateUserRequest extends jspb.Message {
  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string;
  setEmail(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

declare namespace UpdateUserRequest {
  export type AsObject = {
    email: string,
    name: string,
  }
}

declare class UpdateUserResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): User | undefined;
  setData(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

declare namespace UpdateUserResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: User.AsObject,
  }
}

declare class SocialAuthenticationRequest extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialAuthenticationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SocialAuthenticationRequest): SocialAuthenticationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialAuthenticationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialAuthenticationRequest;
  static deserializeBinaryFromReader(message: SocialAuthenticationRequest, reader: jspb.BinaryReader): SocialAuthenticationRequest;
}

declare namespace SocialAuthenticationRequest {
  export type AsObject = {
    state: string,
    code: string,
  }
}

declare class GetAllUserRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUserRequest): GetAllUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUserRequest;
  static deserializeBinaryFromReader(message: GetAllUserRequest, reader: jspb.BinaryReader): GetAllUserRequest;
}

declare namespace GetAllUserRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllUserResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<User>;
  setDataList(value: Array<User>): void;
  addData(value?: User, index?: number): User;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUserResponse): GetAllUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUserResponse;
  static deserializeBinaryFromReader(message: GetAllUserResponse, reader: jspb.BinaryReader): GetAllUserResponse;
}

declare namespace GetAllUserResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<User.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class CreateOrganizationRequest extends jspb.Message {
  getOrganizationname(): string;
  setOrganizationname(value: string): void;

  getOrganizationsize(): string;
  setOrganizationsize(value: string): void;

  getOrganizationindustry(): string;
  setOrganizationindustry(value: string): void;

  hasOrganizationcontact(): boolean;
  clearOrganizationcontact(): void;
  getOrganizationcontact(): string;
  setOrganizationcontact(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

declare namespace CreateOrganizationRequest {
  export type AsObject = {
    organizationname: string,
    organizationsize: string,
    organizationindustry: string,
    organizationcontact: string,
  }
}

declare class UpdateOrganizationRequest extends jspb.Message {
  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  hasOrganizationname(): boolean;
  clearOrganizationname(): void;
  getOrganizationname(): string;
  setOrganizationname(value: string): void;

  hasOrganizationindustry(): boolean;
  clearOrganizationindustry(): void;
  getOrganizationindustry(): string;
  setOrganizationindustry(value: string): void;

  hasOrganizationcontact(): boolean;
  clearOrganizationcontact(): void;
  getOrganizationcontact(): string;
  setOrganizationcontact(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

declare namespace UpdateOrganizationRequest {
  export type AsObject = {
    organizationid: string,
    organizationname: string,
    organizationindustry: string,
    organizationcontact: string,
  }
}

declare class GetOrganizationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

declare namespace GetOrganizationRequest {
  export type AsObject = {
  }
}

declare class GetOrganizationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Organization | undefined;
  setData(value?: Organization): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): OrganizationRole | undefined;
  setRole(value?: OrganizationRole): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
  static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

declare namespace GetOrganizationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Organization.AsObject,
    role?: OrganizationRole.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class CreateOrganizationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Organization | undefined;
  setData(value?: Organization): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): OrganizationRole | undefined;
  setRole(value?: OrganizationRole): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

declare namespace CreateOrganizationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Organization.AsObject,
    role?: OrganizationRole.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class UpdateOrganizationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationResponse): UpdateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationResponse, reader: jspb.BinaryReader): UpdateOrganizationResponse;
}

declare namespace UpdateOrganizationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: Error$1.AsObject,
  }
}

declare class UpdateBillingInformationRequest extends jspb.Message {
  getPaymentmethod(): string;
  setPaymentmethod(value: string): void;

  getBillinginterval(): UpdateBillingInformationRequest.BillingIntervalMap[keyof UpdateBillingInformationRequest.BillingIntervalMap];
  setBillinginterval(value: UpdateBillingInformationRequest.BillingIntervalMap[keyof UpdateBillingInformationRequest.BillingIntervalMap]): void;

  getTaxinformation(): string;
  setTaxinformation(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingInformationRequest): UpdateBillingInformationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingInformationRequest;
  static deserializeBinaryFromReader(message: UpdateBillingInformationRequest, reader: jspb.BinaryReader): UpdateBillingInformationRequest;
}

declare namespace UpdateBillingInformationRequest {
  export type AsObject = {
    paymentmethod: string,
    billinginterval: UpdateBillingInformationRequest.BillingIntervalMap[keyof UpdateBillingInformationRequest.BillingIntervalMap],
    taxinformation: string,
    address: string,
    email: string,
  }

  export interface BillingIntervalMap {
    ANNUALLY: 0;
    MONTHLY: 1;
  }

  export const BillingInterval: BillingIntervalMap;
}

declare class Project extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<User>;
  setMembersList(value: Array<User>): void;
  addMembers(value?: User, index?: number): User;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

declare namespace Project {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    membersList: Array<User.AsObject>,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class CreateProjectRequest extends jspb.Message {
  getProjectname(): string;
  setProjectname(value: string): void;

  hasProjectdescription(): boolean;
  clearProjectdescription(): void;
  getProjectdescription(): string;
  setProjectdescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

declare namespace CreateProjectRequest {
  export type AsObject = {
    projectname: string,
    projectdescription: string,
  }
}

declare class CreateProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Project | undefined;
  setData(value?: Project): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectResponse): CreateProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectResponse;
  static deserializeBinaryFromReader(message: CreateProjectResponse, reader: jspb.BinaryReader): CreateProjectResponse;
}

declare namespace CreateProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Project.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class UpdateProjectRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  hasProjectname(): boolean;
  clearProjectname(): void;
  getProjectname(): string;
  setProjectname(value: string): void;

  hasProjectdescription(): boolean;
  clearProjectdescription(): void;
  getProjectdescription(): string;
  setProjectdescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

declare namespace UpdateProjectRequest {
  export type AsObject = {
    projectid: string,
    projectname: string,
    projectdescription: string,
  }
}

declare class UpdateProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Project | undefined;
  setData(value?: Project): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectResponse): UpdateProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectResponse;
  static deserializeBinaryFromReader(message: UpdateProjectResponse, reader: jspb.BinaryReader): UpdateProjectResponse;
}

declare namespace UpdateProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Project.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetProjectRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

declare namespace GetProjectRequest {
  export type AsObject = {
    projectid: string,
  }
}

declare class GetProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Project | undefined;
  setData(value?: Project): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectResponse): GetProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectResponse;
  static deserializeBinaryFromReader(message: GetProjectResponse, reader: jspb.BinaryReader): GetProjectResponse;
}

declare namespace GetProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Project.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllProjectRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectRequest): GetAllProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectRequest;
  static deserializeBinaryFromReader(message: GetAllProjectRequest, reader: jspb.BinaryReader): GetAllProjectRequest;
}

declare namespace GetAllProjectRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Project>;
  setDataList(value: Array<Project>): void;
  addData(value?: Project, index?: number): Project;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectResponse): GetAllProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectResponse;
  static deserializeBinaryFromReader(message: GetAllProjectResponse, reader: jspb.BinaryReader): GetAllProjectResponse;
}

declare namespace GetAllProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Project.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class AddUsersToProjectRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  clearProjectidsList(): void;
  getProjectidsList(): Array<string>;
  setProjectidsList(value: Array<string>): void;
  addProjectids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToProjectRequest): AddUsersToProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUsersToProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToProjectRequest;
  static deserializeBinaryFromReader(message: AddUsersToProjectRequest, reader: jspb.BinaryReader): AddUsersToProjectRequest;
}

declare namespace AddUsersToProjectRequest {
  export type AsObject = {
    email: string,
    role: string,
    projectidsList: Array<string>,
  }
}

declare class ArchiveProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveProjectRequest): ArchiveProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveProjectRequest;
  static deserializeBinaryFromReader(message: ArchiveProjectRequest, reader: jspb.BinaryReader): ArchiveProjectRequest;
}

declare namespace ArchiveProjectRequest {
  export type AsObject = {
    id: string,
  }
}

declare class ArchiveProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getId(): string;
  setId(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveProjectResponse): ArchiveProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveProjectResponse;
  static deserializeBinaryFromReader(message: ArchiveProjectResponse, reader: jspb.BinaryReader): ArchiveProjectResponse;
}

declare namespace ArchiveProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    id: string,
    error?: Error$1.AsObject,
  }
}

declare class AddUsersToProjectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Project>;
  setDataList(value: Array<Project>): void;
  addData(value?: Project, index?: number): Project;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToProjectResponse): AddUsersToProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUsersToProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToProjectResponse;
  static deserializeBinaryFromReader(message: AddUsersToProjectResponse, reader: jspb.BinaryReader): AddUsersToProjectResponse;
}

declare namespace AddUsersToProjectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Project.AsObject>,
    error?: Error$1.AsObject,
  }
}

declare class ProjectCredential extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectCredential.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectCredential): ProjectCredential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectCredential;
  static deserializeBinaryFromReader(message: ProjectCredential, reader: jspb.BinaryReader): ProjectCredential;
}

declare namespace ProjectCredential {
  export type AsObject = {
    id: string,
    projectid: string,
    organizationid: string,
    name: string,
    key: string,
    status: string,
    createdby: string,
    updatedby: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createduser?: User.AsObject,
  }
}

declare class CreateProjectCredentialRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectCredentialRequest): CreateProjectCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectCredentialRequest;
  static deserializeBinaryFromReader(message: CreateProjectCredentialRequest, reader: jspb.BinaryReader): CreateProjectCredentialRequest;
}

declare namespace CreateProjectCredentialRequest {
  export type AsObject = {
    projectid: string,
    name: string,
  }
}

declare class GetAllProjectCredentialRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getProjectid(): string;
  setProjectid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectCredentialRequest): GetAllProjectCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectCredentialRequest;
  static deserializeBinaryFromReader(message: GetAllProjectCredentialRequest, reader: jspb.BinaryReader): GetAllProjectCredentialRequest;
}

declare namespace GetAllProjectCredentialRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    projectid: string,
  }
}

declare class CreateProjectCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ProjectCredential | undefined;
  setData(value?: ProjectCredential): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectCredentialResponse): CreateProjectCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectCredentialResponse;
  static deserializeBinaryFromReader(message: CreateProjectCredentialResponse, reader: jspb.BinaryReader): CreateProjectCredentialResponse;
}

declare namespace CreateProjectCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: ProjectCredential.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllProjectCredentialResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<ProjectCredential>;
  setDataList(value: Array<ProjectCredential>): void;
  addData(value?: ProjectCredential, index?: number): ProjectCredential;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProjectCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProjectCredentialResponse): GetAllProjectCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProjectCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProjectCredentialResponse;
  static deserializeBinaryFromReader(message: GetAllProjectCredentialResponse, reader: jspb.BinaryReader): GetAllProjectCredentialResponse;
}

declare namespace GetAllProjectCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<ProjectCredential.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

// package: web_api
// file: web-api.proto



type AuthenticationServiceAuthenticate = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof AuthenticateRequest;
  readonly responseType: typeof AuthenticateResponse;
};

type AuthenticationServiceRegisterUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof RegisterUserRequest;
  readonly responseType: typeof AuthenticateResponse;
};

type AuthenticationServiceAuthorize = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof AuthorizeRequest;
  readonly responseType: typeof AuthenticateResponse;
};

type AuthenticationServiceScopeAuthorize = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ScopeAuthorizeRequest;
  readonly responseType: typeof ScopedAuthenticationResponse;
};

type AuthenticationServiceVerifyToken = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof VerifyTokenRequest;
  readonly responseType: typeof VerifyTokenResponse;
};

type AuthenticationServiceForgotPassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ForgotPasswordRequest;
  readonly responseType: typeof ForgotPasswordResponse;
};

type AuthenticationServiceCreatePassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreatePasswordRequest;
  readonly responseType: typeof CreatePasswordResponse;
};

type AuthenticationServiceChangePassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ChangePasswordRequest;
  readonly responseType: typeof ChangePasswordResponse;
};

type AuthenticationServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetUserRequest;
  readonly responseType: typeof GetUserResponse;
};

type AuthenticationServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateUserRequest;
  readonly responseType: typeof UpdateUserResponse;
};

type AuthenticationServiceGetAllUser = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllUserRequest;
  readonly responseType: typeof GetAllUserResponse;
};

type AuthenticationServiceLinkedin = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof SocialAuthenticationRequest;
  readonly responseType: typeof AuthenticateResponse;
};

type AuthenticationServiceGoogle = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof SocialAuthenticationRequest;
  readonly responseType: typeof AuthenticateResponse;
};

type AuthenticationServiceGithub = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof SocialAuthenticationRequest;
  readonly responseType: typeof AuthenticateResponse;
};

declare class AuthenticationService {
  static readonly serviceName: string;
  static readonly Authenticate: AuthenticationServiceAuthenticate;
  static readonly RegisterUser: AuthenticationServiceRegisterUser;
  static readonly Authorize: AuthenticationServiceAuthorize;
  static readonly ScopeAuthorize: AuthenticationServiceScopeAuthorize;
  static readonly VerifyToken: AuthenticationServiceVerifyToken;
  static readonly ForgotPassword: AuthenticationServiceForgotPassword;
  static readonly CreatePassword: AuthenticationServiceCreatePassword;
  static readonly ChangePassword: AuthenticationServiceChangePassword;
  static readonly GetUser: AuthenticationServiceGetUser;
  static readonly UpdateUser: AuthenticationServiceUpdateUser;
  static readonly GetAllUser: AuthenticationServiceGetAllUser;
  static readonly Linkedin: AuthenticationServiceLinkedin;
  static readonly Google: AuthenticationServiceGoogle;
  static readonly Github: AuthenticationServiceGithub;
}

type OrganizationServiceCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateOrganizationRequest;
  readonly responseType: typeof CreateOrganizationResponse;
};

type OrganizationServiceGetOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetOrganizationRequest;
  readonly responseType: typeof GetOrganizationResponse;
};

type OrganizationServiceUpdateOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateOrganizationRequest;
  readonly responseType: typeof UpdateOrganizationResponse;
};

type OrganizationServiceUpdateBillingInformation = {
  readonly methodName: string;
  readonly service: typeof OrganizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateBillingInformationRequest;
  readonly responseType: typeof BaseResponse;
};

declare class OrganizationService {
  static readonly serviceName: string;
  static readonly CreateOrganization: OrganizationServiceCreateOrganization;
  static readonly GetOrganization: OrganizationServiceGetOrganization;
  static readonly UpdateOrganization: OrganizationServiceUpdateOrganization;
  static readonly UpdateBillingInformation: OrganizationServiceUpdateBillingInformation;
}

type ProjectServiceCreateProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateProjectRequest;
  readonly responseType: typeof CreateProjectResponse;
};

type ProjectServiceUpdateProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateProjectRequest;
  readonly responseType: typeof UpdateProjectResponse;
};

type ProjectServiceGetProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetProjectRequest;
  readonly responseType: typeof GetProjectResponse;
};

type ProjectServiceGetAllProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllProjectRequest;
  readonly responseType: typeof GetAllProjectResponse;
};

type ProjectServiceAddUsersToProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof AddUsersToProjectRequest;
  readonly responseType: typeof AddUsersToProjectResponse;
};

type ProjectServiceArchiveProject = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ArchiveProjectRequest;
  readonly responseType: typeof ArchiveProjectResponse;
};

type ProjectServiceCreateProjectCredential = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateProjectCredentialRequest;
  readonly responseType: typeof CreateProjectCredentialResponse;
};

type ProjectServiceGetAllProjectCredential = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllProjectCredentialRequest;
  readonly responseType: typeof GetAllProjectCredentialResponse;
};

declare class ProjectService {
  static readonly serviceName: string;
  static readonly CreateProject: ProjectServiceCreateProject;
  static readonly UpdateProject: ProjectServiceUpdateProject;
  static readonly GetProject: ProjectServiceGetProject;
  static readonly GetAllProject: ProjectServiceGetAllProject;
  static readonly AddUsersToProject: ProjectServiceAddUsersToProject;
  static readonly ArchiveProject: ProjectServiceArchiveProject;
  static readonly CreateProjectCredential: ProjectServiceCreateProjectCredential;
  static readonly GetAllProjectCredential: ProjectServiceGetAllProjectCredential;
}

type ServiceError$9 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$9 {
  cancel(): void;
}

declare class AuthenticationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authenticate(
    requestMessage: AuthenticateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  authenticate(
    requestMessage: AuthenticateRequest,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  registerUser(
    requestMessage: RegisterUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  registerUser(
    requestMessage: RegisterUserRequest,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  authorize(
    requestMessage: AuthorizeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  authorize(
    requestMessage: AuthorizeRequest,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  scopeAuthorize(
    requestMessage: ScopeAuthorizeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: ScopedAuthenticationResponse|null) => void
  ): UnaryResponse$9;
  scopeAuthorize(
    requestMessage: ScopeAuthorizeRequest,
    callback: (error: ServiceError$9|null, responseMessage: ScopedAuthenticationResponse|null) => void
  ): UnaryResponse$9;
  verifyToken(
    requestMessage: VerifyTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: VerifyTokenResponse|null) => void
  ): UnaryResponse$9;
  verifyToken(
    requestMessage: VerifyTokenRequest,
    callback: (error: ServiceError$9|null, responseMessage: VerifyTokenResponse|null) => void
  ): UnaryResponse$9;
  forgotPassword(
    requestMessage: ForgotPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: ForgotPasswordResponse|null) => void
  ): UnaryResponse$9;
  forgotPassword(
    requestMessage: ForgotPasswordRequest,
    callback: (error: ServiceError$9|null, responseMessage: ForgotPasswordResponse|null) => void
  ): UnaryResponse$9;
  createPassword(
    requestMessage: CreatePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: CreatePasswordResponse|null) => void
  ): UnaryResponse$9;
  createPassword(
    requestMessage: CreatePasswordRequest,
    callback: (error: ServiceError$9|null, responseMessage: CreatePasswordResponse|null) => void
  ): UnaryResponse$9;
  changePassword(
    requestMessage: ChangePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: ChangePasswordResponse|null) => void
  ): UnaryResponse$9;
  changePassword(
    requestMessage: ChangePasswordRequest,
    callback: (error: ServiceError$9|null, responseMessage: ChangePasswordResponse|null) => void
  ): UnaryResponse$9;
  getUser(
    requestMessage: GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: GetUserResponse|null) => void
  ): UnaryResponse$9;
  getUser(
    requestMessage: GetUserRequest,
    callback: (error: ServiceError$9|null, responseMessage: GetUserResponse|null) => void
  ): UnaryResponse$9;
  updateUser(
    requestMessage: UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: UpdateUserResponse|null) => void
  ): UnaryResponse$9;
  updateUser(
    requestMessage: UpdateUserRequest,
    callback: (error: ServiceError$9|null, responseMessage: UpdateUserResponse|null) => void
  ): UnaryResponse$9;
  getAllUser(
    requestMessage: GetAllUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: GetAllUserResponse|null) => void
  ): UnaryResponse$9;
  getAllUser(
    requestMessage: GetAllUserRequest,
    callback: (error: ServiceError$9|null, responseMessage: GetAllUserResponse|null) => void
  ): UnaryResponse$9;
  linkedin(
    requestMessage: SocialAuthenticationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  linkedin(
    requestMessage: SocialAuthenticationRequest,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  google(
    requestMessage: SocialAuthenticationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  google(
    requestMessage: SocialAuthenticationRequest,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  github(
    requestMessage: SocialAuthenticationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
  github(
    requestMessage: SocialAuthenticationRequest,
    callback: (error: ServiceError$9|null, responseMessage: AuthenticateResponse|null) => void
  ): UnaryResponse$9;
}

declare class OrganizationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createOrganization(
    requestMessage: CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: CreateOrganizationResponse|null) => void
  ): UnaryResponse$9;
  createOrganization(
    requestMessage: CreateOrganizationRequest,
    callback: (error: ServiceError$9|null, responseMessage: CreateOrganizationResponse|null) => void
  ): UnaryResponse$9;
  getOrganization(
    requestMessage: GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: GetOrganizationResponse|null) => void
  ): UnaryResponse$9;
  getOrganization(
    requestMessage: GetOrganizationRequest,
    callback: (error: ServiceError$9|null, responseMessage: GetOrganizationResponse|null) => void
  ): UnaryResponse$9;
  updateOrganization(
    requestMessage: UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: UpdateOrganizationResponse|null) => void
  ): UnaryResponse$9;
  updateOrganization(
    requestMessage: UpdateOrganizationRequest,
    callback: (error: ServiceError$9|null, responseMessage: UpdateOrganizationResponse|null) => void
  ): UnaryResponse$9;
  updateBillingInformation(
    requestMessage: UpdateBillingInformationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$9;
  updateBillingInformation(
    requestMessage: UpdateBillingInformationRequest,
    callback: (error: ServiceError$9|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$9;
}

declare class ProjectServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createProject(
    requestMessage: CreateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: CreateProjectResponse|null) => void
  ): UnaryResponse$9;
  createProject(
    requestMessage: CreateProjectRequest,
    callback: (error: ServiceError$9|null, responseMessage: CreateProjectResponse|null) => void
  ): UnaryResponse$9;
  updateProject(
    requestMessage: UpdateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: UpdateProjectResponse|null) => void
  ): UnaryResponse$9;
  updateProject(
    requestMessage: UpdateProjectRequest,
    callback: (error: ServiceError$9|null, responseMessage: UpdateProjectResponse|null) => void
  ): UnaryResponse$9;
  getProject(
    requestMessage: GetProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: GetProjectResponse|null) => void
  ): UnaryResponse$9;
  getProject(
    requestMessage: GetProjectRequest,
    callback: (error: ServiceError$9|null, responseMessage: GetProjectResponse|null) => void
  ): UnaryResponse$9;
  getAllProject(
    requestMessage: GetAllProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: GetAllProjectResponse|null) => void
  ): UnaryResponse$9;
  getAllProject(
    requestMessage: GetAllProjectRequest,
    callback: (error: ServiceError$9|null, responseMessage: GetAllProjectResponse|null) => void
  ): UnaryResponse$9;
  addUsersToProject(
    requestMessage: AddUsersToProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: AddUsersToProjectResponse|null) => void
  ): UnaryResponse$9;
  addUsersToProject(
    requestMessage: AddUsersToProjectRequest,
    callback: (error: ServiceError$9|null, responseMessage: AddUsersToProjectResponse|null) => void
  ): UnaryResponse$9;
  archiveProject(
    requestMessage: ArchiveProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: ArchiveProjectResponse|null) => void
  ): UnaryResponse$9;
  archiveProject(
    requestMessage: ArchiveProjectRequest,
    callback: (error: ServiceError$9|null, responseMessage: ArchiveProjectResponse|null) => void
  ): UnaryResponse$9;
  createProjectCredential(
    requestMessage: CreateProjectCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: CreateProjectCredentialResponse|null) => void
  ): UnaryResponse$9;
  createProjectCredential(
    requestMessage: CreateProjectCredentialRequest,
    callback: (error: ServiceError$9|null, responseMessage: CreateProjectCredentialResponse|null) => void
  ): UnaryResponse$9;
  getAllProjectCredential(
    requestMessage: GetAllProjectCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$9|null, responseMessage: GetAllProjectCredentialResponse|null) => void
  ): UnaryResponse$9;
  getAllProjectCredential(
    requestMessage: GetAllProjectCredentialRequest,
    callback: (error: ServiceError$9|null, responseMessage: GetAllProjectCredentialResponse|null) => void
  ): UnaryResponse$9;
}

// package: knowledge_api
// file: knowledge-api.proto



declare class CreateKnowledgeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getVisibility(): string;
  setVisibility(value: string): void;

  getEmbeddingmodelprovidername(): string;
  setEmbeddingmodelprovidername(value: string): void;

  clearKnowledgeembeddingmodeloptionsList(): void;
  getKnowledgeembeddingmodeloptionsList(): Array<Metadata>;
  setKnowledgeembeddingmodeloptionsList(value: Array<Metadata>): void;
  addKnowledgeembeddingmodeloptions(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeRequest): CreateKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeRequest, reader: jspb.BinaryReader): CreateKnowledgeRequest;
}

declare namespace CreateKnowledgeRequest {
  export type AsObject = {
    name: string,
    description: string,
    tagsList: Array<string>,
    visibility: string,
    embeddingmodelprovidername: string,
    knowledgeembeddingmodeloptionsList: Array<Metadata.AsObject>,
  }
}

declare class CreateKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Knowledge | undefined;
  setData(value?: Knowledge): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeResponse): CreateKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeResponse;
  static deserializeBinaryFromReader(message: CreateKnowledgeResponse, reader: jspb.BinaryReader): CreateKnowledgeResponse;
}

declare namespace CreateKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Knowledge.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllKnowledgeRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeRequest): GetAllKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeRequest, reader: jspb.BinaryReader): GetAllKnowledgeRequest;
}

declare namespace GetAllKnowledgeRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Knowledge>;
  setDataList(value: Array<Knowledge>): void;
  addData(value?: Knowledge, index?: number): Knowledge;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeResponse): GetAllKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeResponse, reader: jspb.BinaryReader): GetAllKnowledgeResponse;
}

declare namespace GetAllKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Knowledge.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetKnowledgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeRequest): GetKnowledgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeRequest;
  static deserializeBinaryFromReader(message: GetKnowledgeRequest, reader: jspb.BinaryReader): GetKnowledgeRequest;
}

declare namespace GetKnowledgeRequest {
  export type AsObject = {
    id: string,
  }
}

declare class GetKnowledgeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Knowledge | undefined;
  setData(value?: Knowledge): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeResponse): GetKnowledgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeResponse;
  static deserializeBinaryFromReader(message: GetKnowledgeResponse, reader: jspb.BinaryReader): GetKnowledgeResponse;
}

declare namespace GetKnowledgeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Knowledge.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class CreateKnowledgeTagRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeTagRequest): CreateKnowledgeTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeTagRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeTagRequest, reader: jspb.BinaryReader): CreateKnowledgeTagRequest;
}

declare namespace CreateKnowledgeTagRequest {
  export type AsObject = {
    knowledgeid: string,
    tagsList: Array<string>,
  }
}

declare class KnowledgeDocument extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDocumentsource(): boolean;
  clearDocumentsource(): void;
  getDocumentsource(): google_protobuf_struct_pb.Struct | undefined;
  setDocumentsource(value?: google_protobuf_struct_pb.Struct): void;

  getDocumenttype(): string;
  setDocumenttype(value: string): void;

  getDocumentsize(): number;
  setDocumentsize(value: number): void;

  getDocumentpath(): string;
  setDocumentpath(value: string): void;

  getIndexstatus(): string;
  setIndexstatus(value: string): void;

  getRetrievalcount(): number;
  setRetrievalcount(value: number): void;

  getTokencount(): number;
  setTokencount(value: number): void;

  getWordcount(): number;
  setWordcount(value: number): void;

  getDisplaystatus(): string;
  setDisplaystatus(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeDocument.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeDocument): KnowledgeDocument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeDocument;
  static deserializeBinaryFromReader(message: KnowledgeDocument, reader: jspb.BinaryReader): KnowledgeDocument;
}

declare namespace KnowledgeDocument {
  export type AsObject = {
    id: string,
    knowledgeid: string,
    language: string,
    name: string,
    description: string,
    documentsource?: google_protobuf_struct_pb.Struct.AsObject,
    documenttype: string,
    documentsize: number,
    documentpath: string,
    indexstatus: string,
    retrievalcount: number,
    tokencount: number,
    wordcount: number,
    displaystatus: string,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class GetAllKnowledgeDocumentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentRequest): GetAllKnowledgeDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentRequest, reader: jspb.BinaryReader): GetAllKnowledgeDocumentRequest;
}

declare namespace GetAllKnowledgeDocumentRequest {
  export type AsObject = {
    knowledgeid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllKnowledgeDocumentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeDocument>;
  setDataList(value: Array<KnowledgeDocument>): void;
  addData(value?: KnowledgeDocument, index?: number): KnowledgeDocument;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentResponse): GetAllKnowledgeDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentResponse, reader: jspb.BinaryReader): GetAllKnowledgeDocumentResponse;
}

declare namespace GetAllKnowledgeDocumentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeDocument.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class DocumentContent extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getContentformat(): string;
  setContentformat(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): google_protobuf_struct_pb.Struct | undefined;
  setMeta(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentContent.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentContent): DocumentContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentContent;
  static deserializeBinaryFromReader(message: DocumentContent, reader: jspb.BinaryReader): DocumentContent;
}

declare namespace DocumentContent {
  export type AsObject = {
    name: string,
    contenttype: string,
    contentformat: string,
    content: Uint8Array | string,
    meta?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class CreateKnowledgeDocumentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getDocumentsource(): CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap[keyof CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap];
  setDocumentsource(value: CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap[keyof CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap]): void;

  getDatasource(): string;
  setDatasource(value: string): void;

  clearContentsList(): void;
  getContentsList(): Array<DocumentContent>;
  setContentsList(value: Array<DocumentContent>): void;
  addContents(value?: DocumentContent, index?: number): DocumentContent;

  getPreprocess(): CreateKnowledgeDocumentRequest.PRE_PROCESSMap[keyof CreateKnowledgeDocumentRequest.PRE_PROCESSMap];
  setPreprocess(value: CreateKnowledgeDocumentRequest.PRE_PROCESSMap[keyof CreateKnowledgeDocumentRequest.PRE_PROCESSMap]): void;

  getSeparator(): string;
  setSeparator(value: string): void;

  getMaxchunksize(): number;
  setMaxchunksize(value: number): void;

  getChunkoverlap(): number;
  setChunkoverlap(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDocumentstructure(): string;
  setDocumentstructure(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeDocumentRequest): CreateKnowledgeDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeDocumentRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeDocumentRequest, reader: jspb.BinaryReader): CreateKnowledgeDocumentRequest;
}

declare namespace CreateKnowledgeDocumentRequest {
  export type AsObject = {
    knowledgeid: string,
    documentsource: CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap[keyof CreateKnowledgeDocumentRequest.DOCUMENT_SOURCEMap],
    datasource: string,
    contentsList: Array<DocumentContent.AsObject>,
    preprocess: CreateKnowledgeDocumentRequest.PRE_PROCESSMap[keyof CreateKnowledgeDocumentRequest.PRE_PROCESSMap],
    separator: string,
    maxchunksize: number,
    chunkoverlap: number,
    name: string,
    description: string,
    documentstructure: string,
  }

  export interface PRE_PROCESSMap {
    AUTOMATIC: 0;
    CUSTOM: 1;
  }

  export const PRE_PROCESS: PRE_PROCESSMap;

  export interface DOCUMENT_SOURCEMap {
    DOCUMENT_SOURCE_MANUAL: 0;
    DOCUMENT_SOURCE_TOOL: 1;
  }

  export const DOCUMENT_SOURCE: DOCUMENT_SOURCEMap;
}

declare class CreateKnowledgeDocumentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeDocument>;
  setDataList(value: Array<KnowledgeDocument>): void;
  addData(value?: KnowledgeDocument, index?: number): KnowledgeDocument;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeDocumentResponse): CreateKnowledgeDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKnowledgeDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeDocumentResponse;
  static deserializeBinaryFromReader(message: CreateKnowledgeDocumentResponse, reader: jspb.BinaryReader): CreateKnowledgeDocumentResponse;
}

declare namespace CreateKnowledgeDocumentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeDocument.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class KnowledgeDocumentSegment extends jspb.Message {
  getIndex(): string;
  setIndex(value: string): void;

  getDocumentHash(): string;
  setDocumentHash(value: string): void;

  getDocumentId(): string;
  setDocumentId(value: string): void;

  getText(): string;
  setText(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): KnowledgeDocumentSegment.Metadata | undefined;
  setMetadata(value?: KnowledgeDocumentSegment.Metadata): void;

  hasEntities(): boolean;
  clearEntities(): void;
  getEntities(): KnowledgeDocumentSegment.Entities | undefined;
  setEntities(value?: KnowledgeDocumentSegment.Entities): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeDocumentSegment.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeDocumentSegment): KnowledgeDocumentSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeDocumentSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeDocumentSegment;
  static deserializeBinaryFromReader(message: KnowledgeDocumentSegment, reader: jspb.BinaryReader): KnowledgeDocumentSegment;
}

declare namespace KnowledgeDocumentSegment {
  export type AsObject = {
    index: string,
    documentHash: string,
    documentId: string,
    text: string,
    metadata?: KnowledgeDocumentSegment.Metadata.AsObject,
    entities?: KnowledgeDocumentSegment.Entities.AsObject,
  }

  export class Metadata extends jspb.Message {
    getDocumentHash(): string;
    setDocumentHash(value: string): void;

    getDocumentId(): string;
    setDocumentId(value: string): void;

    getKnowledgeDocumentId(): string;
    setKnowledgeDocumentId(value: string): void;

    getKnowledgeId(): string;
    setKnowledgeId(value: string): void;

    getProjectId(): string;
    setProjectId(value: string): void;

    getOrganizationId(): string;
    setOrganizationId(value: string): void;

    getDocumentName(): string;
    setDocumentName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
  }

  export namespace Metadata {
    export type AsObject = {
      documentHash: string,
      documentId: string,
      knowledgeDocumentId: string,
      knowledgeId: string,
      projectId: string,
      organizationId: string,
      documentName: string,
    }
  }

  export class Entities extends jspb.Message {
    clearOrganizationsList(): void;
    getOrganizationsList(): Array<string>;
    setOrganizationsList(value: Array<string>): void;
    addOrganizations(value: string, index?: number): string;

    clearDatesList(): void;
    getDatesList(): Array<string>;
    setDatesList(value: Array<string>): void;
    addDates(value: string, index?: number): string;

    clearProductsList(): void;
    getProductsList(): Array<string>;
    setProductsList(value: Array<string>): void;
    addProducts(value: string, index?: number): string;

    clearEventsList(): void;
    getEventsList(): Array<string>;
    setEventsList(value: Array<string>): void;
    addEvents(value: string, index?: number): string;

    clearPeopleList(): void;
    getPeopleList(): Array<string>;
    setPeopleList(value: Array<string>): void;
    addPeople(value: string, index?: number): string;

    clearTimesList(): void;
    getTimesList(): Array<string>;
    setTimesList(value: Array<string>): void;
    addTimes(value: string, index?: number): string;

    clearQuantitiesList(): void;
    getQuantitiesList(): Array<string>;
    setQuantitiesList(value: Array<string>): void;
    addQuantities(value: string, index?: number): string;

    clearLocationsList(): void;
    getLocationsList(): Array<string>;
    setLocationsList(value: Array<string>): void;
    addLocations(value: string, index?: number): string;

    clearIndustriesList(): void;
    getIndustriesList(): Array<string>;
    setIndustriesList(value: Array<string>): void;
    addIndustries(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entities.AsObject;
    static toObject(includeInstance: boolean, msg: Entities): Entities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entities;
    static deserializeBinaryFromReader(message: Entities, reader: jspb.BinaryReader): Entities;
  }

  export namespace Entities {
    export type AsObject = {
      organizationsList: Array<string>,
      datesList: Array<string>,
      productsList: Array<string>,
      eventsList: Array<string>,
      peopleList: Array<string>,
      timesList: Array<string>,
      quantitiesList: Array<string>,
      locationsList: Array<string>,
      industriesList: Array<string>,
    }
  }
}

declare class GetAllKnowledgeDocumentSegmentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentSegmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentSegmentRequest): GetAllKnowledgeDocumentSegmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentSegmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentSegmentRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentSegmentRequest, reader: jspb.BinaryReader): GetAllKnowledgeDocumentSegmentRequest;
}

declare namespace GetAllKnowledgeDocumentSegmentRequest {
  export type AsObject = {
    knowledgeid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllKnowledgeDocumentSegmentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeDocumentSegment>;
  setDataList(value: Array<KnowledgeDocumentSegment>): void;
  addData(value?: KnowledgeDocumentSegment, index?: number): KnowledgeDocumentSegment;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeDocumentSegmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeDocumentSegmentResponse): GetAllKnowledgeDocumentSegmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeDocumentSegmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeDocumentSegmentResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeDocumentSegmentResponse, reader: jspb.BinaryReader): GetAllKnowledgeDocumentSegmentResponse;
}

declare namespace GetAllKnowledgeDocumentSegmentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeDocumentSegment.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class UpdateKnowledgeDetailRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKnowledgeDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKnowledgeDetailRequest): UpdateKnowledgeDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateKnowledgeDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKnowledgeDetailRequest;
  static deserializeBinaryFromReader(message: UpdateKnowledgeDetailRequest, reader: jspb.BinaryReader): UpdateKnowledgeDetailRequest;
}

declare namespace UpdateKnowledgeDetailRequest {
  export type AsObject = {
    knowledgeid: string,
    name: string,
    description: string,
  }
}

declare class UpdateKnowledgeDocumentSegmentRequest extends jspb.Message {
  clearOrganizationsList(): void;
  getOrganizationsList(): Array<string>;
  setOrganizationsList(value: Array<string>): void;
  addOrganizations(value: string, index?: number): string;

  clearDatesList(): void;
  getDatesList(): Array<string>;
  setDatesList(value: Array<string>): void;
  addDates(value: string, index?: number): string;

  clearProductsList(): void;
  getProductsList(): Array<string>;
  setProductsList(value: Array<string>): void;
  addProducts(value: string, index?: number): string;

  clearEventsList(): void;
  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): void;
  addEvents(value: string, index?: number): string;

  clearPeopleList(): void;
  getPeopleList(): Array<string>;
  setPeopleList(value: Array<string>): void;
  addPeople(value: string, index?: number): string;

  clearTimesList(): void;
  getTimesList(): Array<string>;
  setTimesList(value: Array<string>): void;
  addTimes(value: string, index?: number): string;

  clearQuantitiesList(): void;
  getQuantitiesList(): Array<string>;
  setQuantitiesList(value: Array<string>): void;
  addQuantities(value: string, index?: number): string;

  clearLocationsList(): void;
  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): void;
  addLocations(value: string, index?: number): string;

  clearIndustriesList(): void;
  getIndustriesList(): Array<string>;
  setIndustriesList(value: Array<string>): void;
  addIndustries(value: string, index?: number): string;

  getDocumentname(): string;
  setDocumentname(value: string): void;

  getDocumentid(): string;
  setDocumentid(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKnowledgeDocumentSegmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKnowledgeDocumentSegmentRequest): UpdateKnowledgeDocumentSegmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateKnowledgeDocumentSegmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKnowledgeDocumentSegmentRequest;
  static deserializeBinaryFromReader(message: UpdateKnowledgeDocumentSegmentRequest, reader: jspb.BinaryReader): UpdateKnowledgeDocumentSegmentRequest;
}

declare namespace UpdateKnowledgeDocumentSegmentRequest {
  export type AsObject = {
    organizationsList: Array<string>,
    datesList: Array<string>,
    productsList: Array<string>,
    eventsList: Array<string>,
    peopleList: Array<string>,
    timesList: Array<string>,
    quantitiesList: Array<string>,
    locationsList: Array<string>,
    industriesList: Array<string>,
    documentname: string,
    documentid: string,
    index: string,
  }
}

declare class DeleteKnowledgeDocumentSegmentRequest extends jspb.Message {
  getDocumentid(): string;
  setDocumentid(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKnowledgeDocumentSegmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKnowledgeDocumentSegmentRequest): DeleteKnowledgeDocumentSegmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteKnowledgeDocumentSegmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKnowledgeDocumentSegmentRequest;
  static deserializeBinaryFromReader(message: DeleteKnowledgeDocumentSegmentRequest, reader: jspb.BinaryReader): DeleteKnowledgeDocumentSegmentRequest;
}

declare namespace DeleteKnowledgeDocumentSegmentRequest {
  export type AsObject = {
    documentid: string,
    index: string,
    reason: string,
  }
}

declare class GetAllKnowledgeLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Ordering | undefined;
  setOrder(value?: Ordering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeLogRequest): GetAllKnowledgeLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeLogRequest;
  static deserializeBinaryFromReader(message: GetAllKnowledgeLogRequest, reader: jspb.BinaryReader): GetAllKnowledgeLogRequest;
}

declare namespace GetAllKnowledgeLogRequest {
  export type AsObject = {
    projectid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    order?: Ordering.AsObject,
  }
}

declare class GetKnowledgeLogRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeLogRequest): GetKnowledgeLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeLogRequest;
  static deserializeBinaryFromReader(message: GetKnowledgeLogRequest, reader: jspb.BinaryReader): GetKnowledgeLogRequest;
}

declare namespace GetKnowledgeLogRequest {
  export type AsObject = {
    projectid: string,
    id: string,
  }
}

declare class GetKnowledgeLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): KnowledgeLog | undefined;
  setData(value?: KnowledgeLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeLogResponse): GetKnowledgeLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKnowledgeLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeLogResponse;
  static deserializeBinaryFromReader(message: GetKnowledgeLogResponse, reader: jspb.BinaryReader): GetKnowledgeLogResponse;
}

declare namespace GetKnowledgeLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: KnowledgeLog.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllKnowledgeLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<KnowledgeLog>;
  setDataList(value: Array<KnowledgeLog>): void;
  addData(value?: KnowledgeLog, index?: number): KnowledgeLog;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllKnowledgeLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllKnowledgeLogResponse): GetAllKnowledgeLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllKnowledgeLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllKnowledgeLogResponse;
  static deserializeBinaryFromReader(message: GetAllKnowledgeLogResponse, reader: jspb.BinaryReader): GetAllKnowledgeLogResponse;
}

declare namespace GetAllKnowledgeLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<KnowledgeLog.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class KnowledgeLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_protobuf_struct_pb.Struct | undefined;
  setAction(value?: google_protobuf_struct_pb.Struct): void;

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

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  getDocumentcount(): number;
  setDocumentcount(value: number): void;

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeLog.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeLog): KnowledgeLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnowledgeLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeLog;
  static deserializeBinaryFromReader(message: KnowledgeLog, reader: jspb.BinaryReader): KnowledgeLog;
}

declare namespace KnowledgeLog {
  export type AsObject = {
    id: string,
    action?: google_protobuf_struct_pb.Struct.AsObject,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    knowledgeid: string,
    projectid: string,
    organizationid: string,
    topk: number,
    scorethreshold: number,
    documentcount: number,
    assetprefix: string,
    retrievalmethod: string,
    timetaken: string,
    additionaldataMap: Array<[string, string]>,
  }
}

// package: knowledge_api
// file: knowledge-api.proto



type KnowledgeServiceGetKnowledge = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetKnowledgeRequest;
  readonly responseType: typeof GetKnowledgeResponse;
};

type KnowledgeServiceGetAllKnowledge = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllKnowledgeRequest;
  readonly responseType: typeof GetAllKnowledgeResponse;
};

type KnowledgeServiceCreateKnowledge = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateKnowledgeRequest;
  readonly responseType: typeof CreateKnowledgeResponse;
};

type KnowledgeServiceCreateKnowledgeTag = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateKnowledgeTagRequest;
  readonly responseType: typeof GetKnowledgeResponse;
};

type KnowledgeServiceCreateKnowledgeDocument = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateKnowledgeDocumentRequest;
  readonly responseType: typeof CreateKnowledgeDocumentResponse;
};

type KnowledgeServiceGetAllKnowledgeDocument = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllKnowledgeDocumentRequest;
  readonly responseType: typeof GetAllKnowledgeDocumentResponse;
};

type KnowledgeServiceGetAllKnowledgeDocumentSegment = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllKnowledgeDocumentSegmentRequest;
  readonly responseType: typeof GetAllKnowledgeDocumentSegmentResponse;
};

type KnowledgeServiceUpdateKnowledgeDetail = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateKnowledgeDetailRequest;
  readonly responseType: typeof GetKnowledgeResponse;
};

type KnowledgeServiceUpdateKnowledgeDocumentSegment = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateKnowledgeDocumentSegmentRequest;
  readonly responseType: typeof BaseResponse;
};

type KnowledgeServiceDeleteKnowledgeDocumentSegment = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteKnowledgeDocumentSegmentRequest;
  readonly responseType: typeof BaseResponse;
};

type KnowledgeServiceGetAllKnowledgeLog = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllKnowledgeLogRequest;
  readonly responseType: typeof GetAllKnowledgeLogResponse;
};

type KnowledgeServiceGetKnowledgeLog = {
  readonly methodName: string;
  readonly service: typeof KnowledgeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetKnowledgeLogRequest;
  readonly responseType: typeof GetKnowledgeLogResponse;
};

declare class KnowledgeService {
  static readonly serviceName: string;
  static readonly GetKnowledge: KnowledgeServiceGetKnowledge;
  static readonly GetAllKnowledge: KnowledgeServiceGetAllKnowledge;
  static readonly CreateKnowledge: KnowledgeServiceCreateKnowledge;
  static readonly CreateKnowledgeTag: KnowledgeServiceCreateKnowledgeTag;
  static readonly CreateKnowledgeDocument: KnowledgeServiceCreateKnowledgeDocument;
  static readonly GetAllKnowledgeDocument: KnowledgeServiceGetAllKnowledgeDocument;
  static readonly GetAllKnowledgeDocumentSegment: KnowledgeServiceGetAllKnowledgeDocumentSegment;
  static readonly UpdateKnowledgeDetail: KnowledgeServiceUpdateKnowledgeDetail;
  static readonly UpdateKnowledgeDocumentSegment: KnowledgeServiceUpdateKnowledgeDocumentSegment;
  static readonly DeleteKnowledgeDocumentSegment: KnowledgeServiceDeleteKnowledgeDocumentSegment;
  static readonly GetAllKnowledgeLog: KnowledgeServiceGetAllKnowledgeLog;
  static readonly GetKnowledgeLog: KnowledgeServiceGetKnowledgeLog;
}

type ServiceError$8 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$8 {
  cancel(): void;
}

declare class KnowledgeServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getKnowledge(
    requestMessage: GetKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  getKnowledge(
    requestMessage: GetKnowledgeRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledge(
    requestMessage: GetAllKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledge(
    requestMessage: GetAllKnowledgeRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  createKnowledge(
    requestMessage: CreateKnowledgeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: CreateKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  createKnowledge(
    requestMessage: CreateKnowledgeRequest,
    callback: (error: ServiceError$8|null, responseMessage: CreateKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  createKnowledgeTag(
    requestMessage: CreateKnowledgeTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  createKnowledgeTag(
    requestMessage: CreateKnowledgeTagRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  createKnowledgeDocument(
    requestMessage: CreateKnowledgeDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: CreateKnowledgeDocumentResponse|null) => void
  ): UnaryResponse$8;
  createKnowledgeDocument(
    requestMessage: CreateKnowledgeDocumentRequest,
    callback: (error: ServiceError$8|null, responseMessage: CreateKnowledgeDocumentResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledgeDocument(
    requestMessage: GetAllKnowledgeDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeDocumentResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledgeDocument(
    requestMessage: GetAllKnowledgeDocumentRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeDocumentResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledgeDocumentSegment(
    requestMessage: GetAllKnowledgeDocumentSegmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeDocumentSegmentResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledgeDocumentSegment(
    requestMessage: GetAllKnowledgeDocumentSegmentRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeDocumentSegmentResponse|null) => void
  ): UnaryResponse$8;
  updateKnowledgeDetail(
    requestMessage: UpdateKnowledgeDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  updateKnowledgeDetail(
    requestMessage: UpdateKnowledgeDetailRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeResponse|null) => void
  ): UnaryResponse$8;
  updateKnowledgeDocumentSegment(
    requestMessage: UpdateKnowledgeDocumentSegmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$8;
  updateKnowledgeDocumentSegment(
    requestMessage: UpdateKnowledgeDocumentSegmentRequest,
    callback: (error: ServiceError$8|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$8;
  deleteKnowledgeDocumentSegment(
    requestMessage: DeleteKnowledgeDocumentSegmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$8;
  deleteKnowledgeDocumentSegment(
    requestMessage: DeleteKnowledgeDocumentSegmentRequest,
    callback: (error: ServiceError$8|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledgeLog(
    requestMessage: GetAllKnowledgeLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeLogResponse|null) => void
  ): UnaryResponse$8;
  getAllKnowledgeLog(
    requestMessage: GetAllKnowledgeLogRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetAllKnowledgeLogResponse|null) => void
  ): UnaryResponse$8;
  getKnowledgeLog(
    requestMessage: GetKnowledgeLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeLogResponse|null) => void
  ): UnaryResponse$8;
  getKnowledgeLog(
    requestMessage: GetKnowledgeLogRequest,
    callback: (error: ServiceError$8|null, responseMessage: GetKnowledgeLogResponse|null) => void
  ): UnaryResponse$8;
}

// package: document_api
// file: document-api.proto



declare class IndexKnowledgeDocumentRequest extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  clearKnowledgedocumentidList(): void;
  getKnowledgedocumentidList(): Array<string>;
  setKnowledgedocumentidList(value: Array<string>): void;
  addKnowledgedocumentid(value: string, index?: number): string;

  getIndextype(): string;
  setIndextype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexKnowledgeDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexKnowledgeDocumentRequest): IndexKnowledgeDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexKnowledgeDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexKnowledgeDocumentRequest;
  static deserializeBinaryFromReader(message: IndexKnowledgeDocumentRequest, reader: jspb.BinaryReader): IndexKnowledgeDocumentRequest;
}

declare namespace IndexKnowledgeDocumentRequest {
  export type AsObject = {
    knowledgeid: string,
    knowledgedocumentidList: Array<string>,
    indextype: string,
  }
}

declare class IndexKnowledgeDocumentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexKnowledgeDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexKnowledgeDocumentResponse): IndexKnowledgeDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexKnowledgeDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexKnowledgeDocumentResponse;
  static deserializeBinaryFromReader(message: IndexKnowledgeDocumentResponse, reader: jspb.BinaryReader): IndexKnowledgeDocumentResponse;
}

declare namespace IndexKnowledgeDocumentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
  }
}

// package: document_api
// file: document-api.proto



type DocumentServiceIndexKnowledgeDocument = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof IndexKnowledgeDocumentRequest;
  readonly responseType: typeof IndexKnowledgeDocumentResponse;
};

declare class DocumentService {
  static readonly serviceName: string;
  static readonly IndexKnowledgeDocument: DocumentServiceIndexKnowledgeDocument;
}

type ServiceError$7 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$7 {
  cancel(): void;
}

declare class DocumentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  indexKnowledgeDocument(
    requestMessage: IndexKnowledgeDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$7|null, responseMessage: IndexKnowledgeDocumentResponse|null) => void
  ): UnaryResponse$7;
  indexKnowledgeDocument(
    requestMessage: IndexKnowledgeDocumentRequest,
    callback: (error: ServiceError$7|null, responseMessage: IndexKnowledgeDocumentResponse|null) => void
  ): UnaryResponse$7;
}

// package: vault_api
// file: vault-api.proto



declare class VaultCredential extends jspb.Message {
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

  getProvider(): string;
  setProvider(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

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

declare namespace VaultCredential {
  export type AsObject = {
    id: string,
    name: string,
    value?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    provider: string,
    organizationid: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastuseddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class CreateProviderCredentialRequest extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): google_protobuf_struct_pb.Struct | undefined;
  setCredential(value?: google_protobuf_struct_pb.Struct): void;

  getName(): string;
  setName(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProviderCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProviderCredentialRequest): CreateProviderCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProviderCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProviderCredentialRequest;
  static deserializeBinaryFromReader(message: CreateProviderCredentialRequest, reader: jspb.BinaryReader): CreateProviderCredentialRequest;
}

declare namespace CreateProviderCredentialRequest {
  export type AsObject = {
    credential?: google_protobuf_struct_pb.Struct.AsObject,
    name: string,
    provider: string,
  }
}

declare class DeleteCredentialRequest extends jspb.Message {
  getVaultid(): string;
  setVaultid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCredentialRequest): DeleteCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCredentialRequest;
  static deserializeBinaryFromReader(message: DeleteCredentialRequest, reader: jspb.BinaryReader): DeleteCredentialRequest;
}

declare namespace DeleteCredentialRequest {
  export type AsObject = {
    vaultid: string,
  }
}

declare class GetAllOrganizationCredentialRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllOrganizationCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllOrganizationCredentialRequest): GetAllOrganizationCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllOrganizationCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllOrganizationCredentialRequest;
  static deserializeBinaryFromReader(message: GetAllOrganizationCredentialRequest, reader: jspb.BinaryReader): GetAllOrganizationCredentialRequest;
}

declare namespace GetAllOrganizationCredentialRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllOrganizationCredentialResponse extends jspb.Message {
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
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllOrganizationCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllOrganizationCredentialResponse): GetAllOrganizationCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllOrganizationCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllOrganizationCredentialResponse;
  static deserializeBinaryFromReader(message: GetAllOrganizationCredentialResponse, reader: jspb.BinaryReader): GetAllOrganizationCredentialResponse;
}

declare namespace GetAllOrganizationCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<VaultCredential.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetCredentialResponse extends jspb.Message {
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
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialResponse): GetCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialResponse;
  static deserializeBinaryFromReader(message: GetCredentialResponse, reader: jspb.BinaryReader): GetCredentialResponse;
}

declare namespace GetCredentialResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: VaultCredential.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetCredentialRequest extends jspb.Message {
  getVaultid(): string;
  setVaultid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialRequest): GetCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialRequest;
  static deserializeBinaryFromReader(message: GetCredentialRequest, reader: jspb.BinaryReader): GetCredentialRequest;
}

declare namespace GetCredentialRequest {
  export type AsObject = {
    vaultid: string,
  }
}

// package: vault_api
// file: vault-api.proto



type VaultServiceCreateProviderCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateProviderCredentialRequest;
  readonly responseType: typeof GetCredentialResponse;
};

type VaultServiceGetAllOrganizationCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllOrganizationCredentialRequest;
  readonly responseType: typeof GetAllOrganizationCredentialResponse;
};

type VaultServiceDeleteCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DeleteCredentialRequest;
  readonly responseType: typeof GetCredentialResponse;
};

type VaultServiceGetCredential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetCredentialRequest;
  readonly responseType: typeof GetCredentialResponse;
};

type VaultServiceGetOauth2Credential = {
  readonly methodName: string;
  readonly service: typeof VaultService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetCredentialRequest;
  readonly responseType: typeof GetCredentialResponse;
};

declare class VaultService {
  static readonly serviceName: string;
  static readonly CreateProviderCredential: VaultServiceCreateProviderCredential;
  static readonly GetAllOrganizationCredential: VaultServiceGetAllOrganizationCredential;
  static readonly DeleteCredential: VaultServiceDeleteCredential;
  static readonly GetCredential: VaultServiceGetCredential;
  static readonly GetOauth2Credential: VaultServiceGetOauth2Credential;
}

type ServiceError$6 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$6 {
  cancel(): void;
}

declare class VaultServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createProviderCredential(
    requestMessage: CreateProviderCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
  createProviderCredential(
    requestMessage: CreateProviderCredentialRequest,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
  getAllOrganizationCredential(
    requestMessage: GetAllOrganizationCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$6|null, responseMessage: GetAllOrganizationCredentialResponse|null) => void
  ): UnaryResponse$6;
  getAllOrganizationCredential(
    requestMessage: GetAllOrganizationCredentialRequest,
    callback: (error: ServiceError$6|null, responseMessage: GetAllOrganizationCredentialResponse|null) => void
  ): UnaryResponse$6;
  deleteCredential(
    requestMessage: DeleteCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
  deleteCredential(
    requestMessage: DeleteCredentialRequest,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
  getCredential(
    requestMessage: GetCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
  getCredential(
    requestMessage: GetCredentialRequest,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
  getOauth2Credential(
    requestMessage: GetCredentialRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
  getOauth2Credential(
    requestMessage: GetCredentialRequest,
    callback: (error: ServiceError$6|null, responseMessage: GetCredentialResponse|null) => void
  ): UnaryResponse$6;
}

// package: endpoint_api
// file: endpoint-api.proto



declare class EndpointAttribute extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointAttribute): EndpointAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointAttribute;
  static deserializeBinaryFromReader(message: EndpointAttribute, reader: jspb.BinaryReader): EndpointAttribute;
}

declare namespace EndpointAttribute {
  export type AsObject = {
    source: string,
    sourceidentifier: string,
    visibility: string,
    language: string,
    name: string,
    description: string,
  }
}

declare class EndpointProviderModelAttribute extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  hasChatcompleteprompt(): boolean;
  clearChatcompleteprompt(): void;
  getChatcompleteprompt(): TextChatCompletePrompt | undefined;
  setChatcompleteprompt(value?: TextChatCompletePrompt): void;

  getModelprovidername(): string;
  setModelprovidername(value: string): void;

  clearEndpointmodeloptionsList(): void;
  getEndpointmodeloptionsList(): Array<Metadata>;
  setEndpointmodeloptionsList(value: Array<Metadata>): void;
  addEndpointmodeloptions(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointProviderModelAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointProviderModelAttribute): EndpointProviderModelAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointProviderModelAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointProviderModelAttribute;
  static deserializeBinaryFromReader(message: EndpointProviderModelAttribute, reader: jspb.BinaryReader): EndpointProviderModelAttribute;
}

declare namespace EndpointProviderModelAttribute {
  export type AsObject = {
    description: string,
    chatcompleteprompt?: TextChatCompletePrompt.AsObject,
    modelprovidername: string,
    endpointmodeloptionsList: Array<Metadata.AsObject>,
  }
}

declare class CreateEndpointRequest extends jspb.Message {
  hasEndpointprovidermodelattribute(): boolean;
  clearEndpointprovidermodelattribute(): void;
  getEndpointprovidermodelattribute(): EndpointProviderModelAttribute | undefined;
  setEndpointprovidermodelattribute(value?: EndpointProviderModelAttribute): void;

  hasEndpointattribute(): boolean;
  clearEndpointattribute(): void;
  getEndpointattribute(): EndpointAttribute | undefined;
  setEndpointattribute(value?: EndpointAttribute): void;

  hasRetryconfiguration(): boolean;
  clearRetryconfiguration(): void;
  getRetryconfiguration(): EndpointRetryConfiguration | undefined;
  setRetryconfiguration(value?: EndpointRetryConfiguration): void;

  hasCacheconfiguration(): boolean;
  clearCacheconfiguration(): void;
  getCacheconfiguration(): EndpointCacheConfiguration | undefined;
  setCacheconfiguration(value?: EndpointCacheConfiguration): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointRequest): CreateEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointRequest;
  static deserializeBinaryFromReader(message: CreateEndpointRequest, reader: jspb.BinaryReader): CreateEndpointRequest;
}

declare namespace CreateEndpointRequest {
  export type AsObject = {
    endpointprovidermodelattribute?: EndpointProviderModelAttribute.AsObject,
    endpointattribute?: EndpointAttribute.AsObject,
    retryconfiguration?: EndpointRetryConfiguration.AsObject,
    cacheconfiguration?: EndpointCacheConfiguration.AsObject,
    tagsList: Array<string>,
  }
}

declare class CreateEndpointResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Endpoint | undefined;
  setData(value?: Endpoint): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointResponse): CreateEndpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointResponse;
  static deserializeBinaryFromReader(message: CreateEndpointResponse, reader: jspb.BinaryReader): CreateEndpointResponse;
}

declare namespace CreateEndpointResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Endpoint.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class EndpointProviderModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasChatcompleteprompt(): boolean;
  clearChatcompleteprompt(): void;
  getChatcompleteprompt(): TextChatCompletePrompt | undefined;
  setChatcompleteprompt(value?: TextChatCompletePrompt): void;

  getModelprovidername(): string;
  setModelprovidername(value: string): void;

  clearEndpointmodeloptionsList(): void;
  getEndpointmodeloptionsList(): Array<Metadata>;
  setEndpointmodeloptionsList(value: Array<Metadata>): void;
  addEndpointmodeloptions(value?: Metadata, index?: number): Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointProviderModel.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointProviderModel): EndpointProviderModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointProviderModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointProviderModel;
  static deserializeBinaryFromReader(message: EndpointProviderModel, reader: jspb.BinaryReader): EndpointProviderModel;
}

declare namespace EndpointProviderModel {
  export type AsObject = {
    id: string,
    chatcompleteprompt?: TextChatCompletePrompt.AsObject,
    modelprovidername: string,
    endpointmodeloptionsList: Array<Metadata.AsObject>,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endpointid: string,
    description: string,
  }
}

declare class AggregatedEndpointAnalytics extends jspb.Message {
  getCount(): string;
  setCount(value: string): void;

  getTotalinputcost(): number;
  setTotalinputcost(value: number): void;

  getTotaloutputcost(): number;
  setTotaloutputcost(value: number): void;

  getTotaltoken(): string;
  setTotaltoken(value: string): void;

  getSuccesscount(): string;
  setSuccesscount(value: string): void;

  getErrorcount(): string;
  setErrorcount(value: string): void;

  getP50latency(): number;
  setP50latency(value: number): void;

  getP99latency(): number;
  setP99latency(value: number): void;

  hasLastactivity(): boolean;
  clearLastactivity(): void;
  getLastactivity(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastactivity(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregatedEndpointAnalytics.AsObject;
  static toObject(includeInstance: boolean, msg: AggregatedEndpointAnalytics): AggregatedEndpointAnalytics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregatedEndpointAnalytics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregatedEndpointAnalytics;
  static deserializeBinaryFromReader(message: AggregatedEndpointAnalytics, reader: jspb.BinaryReader): AggregatedEndpointAnalytics;
}

declare namespace AggregatedEndpointAnalytics {
  export type AsObject = {
    count: string,
    totalinputcost: number,
    totaloutputcost: number,
    totaltoken: string,
    successcount: string,
    errorcount: string,
    p50latency: number,
    p99latency: number,
    lastactivity?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class Endpoint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  hasEndpointprovidermodel(): boolean;
  clearEndpointprovidermodel(): void;
  getEndpointprovidermodel(): EndpointProviderModel | undefined;
  setEndpointprovidermodel(value?: EndpointProviderModel): void;

  hasEndpointanalytics(): boolean;
  clearEndpointanalytics(): void;
  getEndpointanalytics(): AggregatedEndpointAnalytics | undefined;
  setEndpointanalytics(value?: AggregatedEndpointAnalytics): void;

  hasEndpointretry(): boolean;
  clearEndpointretry(): void;
  getEndpointretry(): EndpointRetryConfiguration | undefined;
  setEndpointretry(value?: EndpointRetryConfiguration): void;

  hasEndpointcaching(): boolean;
  clearEndpointcaching(): void;
  getEndpointcaching(): EndpointCacheConfiguration | undefined;
  setEndpointcaching(value?: EndpointCacheConfiguration): void;

  hasEndpointtag(): boolean;
  clearEndpointtag(): void;
  getEndpointtag(): Tag | undefined;
  setEndpointtag(value?: Tag): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoint;
  static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

declare namespace Endpoint {
  export type AsObject = {
    id: string,
    status: string,
    visibility: string,
    source: string,
    sourceidentifier: string,
    projectid: string,
    organizationid: string,
    endpointprovidermodelid: string,
    endpointprovidermodel?: EndpointProviderModel.AsObject,
    endpointanalytics?: AggregatedEndpointAnalytics.AsObject,
    endpointretry?: EndpointRetryConfiguration.AsObject,
    endpointcaching?: EndpointCacheConfiguration.AsObject,
    endpointtag?: Tag.AsObject,
    language: string,
    organization?: Organization.AsObject,
    name: string,
    description: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
  }
}

declare class CreateEndpointProviderModelRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  hasEndpointprovidermodelattribute(): boolean;
  clearEndpointprovidermodelattribute(): void;
  getEndpointprovidermodelattribute(): EndpointProviderModelAttribute | undefined;
  setEndpointprovidermodelattribute(value?: EndpointProviderModelAttribute): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointProviderModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointProviderModelRequest): CreateEndpointProviderModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointProviderModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointProviderModelRequest;
  static deserializeBinaryFromReader(message: CreateEndpointProviderModelRequest, reader: jspb.BinaryReader): CreateEndpointProviderModelRequest;
}

declare namespace CreateEndpointProviderModelRequest {
  export type AsObject = {
    endpointid: string,
    endpointprovidermodelattribute?: EndpointProviderModelAttribute.AsObject,
  }
}

declare class CreateEndpointProviderModelResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointProviderModel | undefined;
  setData(value?: EndpointProviderModel): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointProviderModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointProviderModelResponse): CreateEndpointProviderModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointProviderModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointProviderModelResponse;
  static deserializeBinaryFromReader(message: CreateEndpointProviderModelResponse, reader: jspb.BinaryReader): CreateEndpointProviderModelResponse;
}

declare namespace CreateEndpointProviderModelResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointProviderModel.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetEndpointRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasEndpointprovidermodelid(): boolean;
  clearEndpointprovidermodelid(): void;
  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointRequest): GetEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointRequest;
  static deserializeBinaryFromReader(message: GetEndpointRequest, reader: jspb.BinaryReader): GetEndpointRequest;
}

declare namespace GetEndpointRequest {
  export type AsObject = {
    id: string,
    endpointprovidermodelid: string,
  }
}

declare class GetEndpointResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Endpoint | undefined;
  setData(value?: Endpoint): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointResponse): GetEndpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointResponse;
  static deserializeBinaryFromReader(message: GetEndpointResponse, reader: jspb.BinaryReader): GetEndpointResponse;
}

declare namespace GetEndpointResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Endpoint.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class GetAllEndpointRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointRequest): GetAllEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointRequest;
  static deserializeBinaryFromReader(message: GetAllEndpointRequest, reader: jspb.BinaryReader): GetAllEndpointRequest;
}

declare namespace GetAllEndpointRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
  }
}

declare class GetAllEndpointResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Endpoint>;
  setDataList(value: Array<Endpoint>): void;
  addData(value?: Endpoint, index?: number): Endpoint;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointResponse): GetAllEndpointResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointResponse;
  static deserializeBinaryFromReader(message: GetAllEndpointResponse, reader: jspb.BinaryReader): GetAllEndpointResponse;
}

declare namespace GetAllEndpointResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Endpoint.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetAllEndpointProviderModelRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointProviderModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointProviderModelRequest): GetAllEndpointProviderModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointProviderModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointProviderModelRequest;
  static deserializeBinaryFromReader(message: GetAllEndpointProviderModelRequest, reader: jspb.BinaryReader): GetAllEndpointProviderModelRequest;
}

declare namespace GetAllEndpointProviderModelRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    endpointid: string,
  }
}

declare class GetAllEndpointProviderModelResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<EndpointProviderModel>;
  setDataList(value: Array<EndpointProviderModel>): void;
  addData(value?: EndpointProviderModel, index?: number): EndpointProviderModel;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointProviderModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointProviderModelResponse): GetAllEndpointProviderModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointProviderModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointProviderModelResponse;
  static deserializeBinaryFromReader(message: GetAllEndpointProviderModelResponse, reader: jspb.BinaryReader): GetAllEndpointProviderModelResponse;
}

declare namespace GetAllEndpointProviderModelResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<EndpointProviderModel.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class UpdateEndpointVersionRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndpointVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndpointVersionRequest): UpdateEndpointVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndpointVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndpointVersionRequest;
  static deserializeBinaryFromReader(message: UpdateEndpointVersionRequest, reader: jspb.BinaryReader): UpdateEndpointVersionRequest;
}

declare namespace UpdateEndpointVersionRequest {
  export type AsObject = {
    endpointid: string,
    endpointprovidermodelid: string,
  }
}

declare class UpdateEndpointVersionResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Endpoint | undefined;
  setData(value?: Endpoint): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndpointVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndpointVersionResponse): UpdateEndpointVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndpointVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndpointVersionResponse;
  static deserializeBinaryFromReader(message: UpdateEndpointVersionResponse, reader: jspb.BinaryReader): UpdateEndpointVersionResponse;
}

declare namespace UpdateEndpointVersionResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Endpoint.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class EndpointRetryConfiguration extends jspb.Message {
  getRetrytype(): string;
  setRetrytype(value: string): void;

  getMaxattempts(): string;
  setMaxattempts(value: string): void;

  getDelayseconds(): string;
  setDelayseconds(value: string): void;

  getExponentialbackoff(): boolean;
  setExponentialbackoff(value: boolean): void;

  clearRetryablesList(): void;
  getRetryablesList(): Array<string>;
  setRetryablesList(value: Array<string>): void;
  addRetryables(value: string, index?: number): string;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointRetryConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointRetryConfiguration): EndpointRetryConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointRetryConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointRetryConfiguration;
  static deserializeBinaryFromReader(message: EndpointRetryConfiguration, reader: jspb.BinaryReader): EndpointRetryConfiguration;
}

declare namespace EndpointRetryConfiguration {
  export type AsObject = {
    retrytype: string,
    maxattempts: string,
    delayseconds: string,
    exponentialbackoff: boolean,
    retryablesList: Array<string>,
    createdby: string,
    updatedby: string,
  }
}

declare class EndpointCacheConfiguration extends jspb.Message {
  getCachetype(): string;
  setCachetype(value: string): void;

  getExpiryinterval(): string;
  setExpiryinterval(value: string): void;

  getMatchthreshold(): number;
  setMatchthreshold(value: number): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointCacheConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointCacheConfiguration): EndpointCacheConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointCacheConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointCacheConfiguration;
  static deserializeBinaryFromReader(message: EndpointCacheConfiguration, reader: jspb.BinaryReader): EndpointCacheConfiguration;
}

declare namespace EndpointCacheConfiguration {
  export type AsObject = {
    cachetype: string,
    expiryinterval: string,
    matchthreshold: number,
    createdby: string,
    updatedby: string,
  }
}

declare class CreateEndpointRetryConfigurationRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointRetryConfiguration | undefined;
  setData(value?: EndpointRetryConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointRetryConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointRetryConfigurationRequest): CreateEndpointRetryConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointRetryConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointRetryConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateEndpointRetryConfigurationRequest, reader: jspb.BinaryReader): CreateEndpointRetryConfigurationRequest;
}

declare namespace CreateEndpointRetryConfigurationRequest {
  export type AsObject = {
    endpointid: string,
    data?: EndpointRetryConfiguration.AsObject,
  }
}

declare class CreateEndpointRetryConfigurationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointRetryConfiguration | undefined;
  setData(value?: EndpointRetryConfiguration): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointRetryConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointRetryConfigurationResponse): CreateEndpointRetryConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointRetryConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointRetryConfigurationResponse;
  static deserializeBinaryFromReader(message: CreateEndpointRetryConfigurationResponse, reader: jspb.BinaryReader): CreateEndpointRetryConfigurationResponse;
}

declare namespace CreateEndpointRetryConfigurationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointRetryConfiguration.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class CreateEndpointCacheConfigurationRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointCacheConfiguration | undefined;
  setData(value?: EndpointCacheConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointCacheConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointCacheConfigurationRequest): CreateEndpointCacheConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointCacheConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointCacheConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateEndpointCacheConfigurationRequest, reader: jspb.BinaryReader): CreateEndpointCacheConfigurationRequest;
}

declare namespace CreateEndpointCacheConfigurationRequest {
  export type AsObject = {
    endpointid: string,
    data?: EndpointCacheConfiguration.AsObject,
  }
}

declare class CreateEndpointCacheConfigurationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointCacheConfiguration | undefined;
  setData(value?: EndpointCacheConfiguration): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointCacheConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointCacheConfigurationResponse): CreateEndpointCacheConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointCacheConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointCacheConfigurationResponse;
  static deserializeBinaryFromReader(message: CreateEndpointCacheConfigurationResponse, reader: jspb.BinaryReader): CreateEndpointCacheConfigurationResponse;
}

declare namespace CreateEndpointCacheConfigurationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointCacheConfiguration.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class CreateEndpointTagRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEndpointTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEndpointTagRequest): CreateEndpointTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEndpointTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEndpointTagRequest;
  static deserializeBinaryFromReader(message: CreateEndpointTagRequest, reader: jspb.BinaryReader): CreateEndpointTagRequest;
}

declare namespace CreateEndpointTagRequest {
  export type AsObject = {
    endpointid: string,
    tagsList: Array<string>,
  }
}

declare class ForkEndpointRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getEndpointproviderid(): string;
  setEndpointproviderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForkEndpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForkEndpointRequest): ForkEndpointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForkEndpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForkEndpointRequest;
  static deserializeBinaryFromReader(message: ForkEndpointRequest, reader: jspb.BinaryReader): ForkEndpointRequest;
}

declare namespace ForkEndpointRequest {
  export type AsObject = {
    endpointid: string,
    endpointproviderid: string,
  }
}

declare class UpdateEndpointDetailRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndpointDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndpointDetailRequest): UpdateEndpointDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndpointDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndpointDetailRequest;
  static deserializeBinaryFromReader(message: UpdateEndpointDetailRequest, reader: jspb.BinaryReader): UpdateEndpointDetailRequest;
}

declare namespace UpdateEndpointDetailRequest {
  export type AsObject = {
    endpointid: string,
    name: string,
    description: string,
  }
}

declare class EndpointLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getEndpointprovidermodelid(): string;
  setEndpointprovidermodelid(value: string): void;

  getTimetaken(): string;
  setTimetaken(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  clearMetadataList(): void;
  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): void;
  addMetadata(value?: Metadata, index?: number): Metadata;

  clearArgumentsList(): void;
  getArgumentsList(): Array<Argument>;
  setArgumentsList(value: Array<Argument>): void;
  addArguments(value?: Argument, index?: number): Argument;

  clearOptionsList(): void;
  getOptionsList(): Array<Metadata>;
  setOptionsList(value: Array<Metadata>): void;
  addOptions(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointLog.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointLog): EndpointLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointLog;
  static deserializeBinaryFromReader(message: EndpointLog, reader: jspb.BinaryReader): EndpointLog;
}

declare namespace EndpointLog {
  export type AsObject = {
    id: string,
    endpointid: string,
    source: string,
    status: string,
    projectid: string,
    organizationid: string,
    endpointprovidermodelid: string,
    timetaken: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metricsList: Array<Metric.AsObject>,
    metadataList: Array<Metadata.AsObject>,
    argumentsList: Array<Argument.AsObject>,
    optionsList: Array<Metadata.AsObject>,
  }
}

declare class GetAllEndpointLogRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointLogRequest): GetAllEndpointLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointLogRequest;
  static deserializeBinaryFromReader(message: GetAllEndpointLogRequest, reader: jspb.BinaryReader): GetAllEndpointLogRequest;
}

declare namespace GetAllEndpointLogRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    endpointid: string,
  }
}

declare class GetAllEndpointLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<EndpointLog>;
  setDataList(value: Array<EndpointLog>): void;
  addData(value?: EndpointLog, index?: number): EndpointLog;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEndpointLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEndpointLogResponse): GetAllEndpointLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEndpointLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEndpointLogResponse;
  static deserializeBinaryFromReader(message: GetAllEndpointLogResponse, reader: jspb.BinaryReader): GetAllEndpointLogResponse;
}

declare namespace GetAllEndpointLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<EndpointLog.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetEndpointLogRequest extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointLogRequest): GetEndpointLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointLogRequest;
  static deserializeBinaryFromReader(message: GetEndpointLogRequest, reader: jspb.BinaryReader): GetEndpointLogRequest;
}

declare namespace GetEndpointLogRequest {
  export type AsObject = {
    endpointid: string,
    id: string,
  }
}

declare class GetEndpointLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): EndpointLog | undefined;
  setData(value?: EndpointLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndpointLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndpointLogResponse): GetEndpointLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndpointLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndpointLogResponse;
  static deserializeBinaryFromReader(message: GetEndpointLogResponse, reader: jspb.BinaryReader): GetEndpointLogResponse;
}

declare namespace GetEndpointLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: EndpointLog.AsObject,
    error?: Error$1.AsObject,
  }
}

// package: endpoint_api
// file: endpoint-api.proto



type EndpointServiceGetEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetEndpointRequest;
  readonly responseType: typeof GetEndpointResponse;
};

type EndpointServiceGetAllEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllEndpointRequest;
  readonly responseType: typeof GetAllEndpointResponse;
};

type EndpointServiceGetAllEndpointProviderModel = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllEndpointProviderModelRequest;
  readonly responseType: typeof GetAllEndpointProviderModelResponse;
};

type EndpointServiceUpdateEndpointVersion = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateEndpointVersionRequest;
  readonly responseType: typeof UpdateEndpointVersionResponse;
};

type EndpointServiceCreateEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateEndpointRequest;
  readonly responseType: typeof CreateEndpointResponse;
};

type EndpointServiceCreateEndpointProviderModel = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateEndpointProviderModelRequest;
  readonly responseType: typeof CreateEndpointProviderModelResponse;
};

type EndpointServiceCreateEndpointCacheConfiguration = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateEndpointCacheConfigurationRequest;
  readonly responseType: typeof CreateEndpointCacheConfigurationResponse;
};

type EndpointServiceCreateEndpointRetryConfiguration = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateEndpointRetryConfigurationRequest;
  readonly responseType: typeof CreateEndpointRetryConfigurationResponse;
};

type EndpointServiceCreateEndpointTag = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateEndpointTagRequest;
  readonly responseType: typeof GetEndpointResponse;
};

type EndpointServiceForkEndpoint = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ForkEndpointRequest;
  readonly responseType: typeof BaseResponse;
};

type EndpointServiceUpdateEndpointDetail = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateEndpointDetailRequest;
  readonly responseType: typeof GetEndpointResponse;
};

type EndpointServiceGetAllEndpointLog = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllEndpointLogRequest;
  readonly responseType: typeof GetAllEndpointLogResponse;
};

type EndpointServiceGetEndpointLog = {
  readonly methodName: string;
  readonly service: typeof EndpointService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetEndpointLogRequest;
  readonly responseType: typeof GetEndpointLogResponse;
};

declare class EndpointService {
  static readonly serviceName: string;
  static readonly GetEndpoint: EndpointServiceGetEndpoint;
  static readonly GetAllEndpoint: EndpointServiceGetAllEndpoint;
  static readonly GetAllEndpointProviderModel: EndpointServiceGetAllEndpointProviderModel;
  static readonly UpdateEndpointVersion: EndpointServiceUpdateEndpointVersion;
  static readonly CreateEndpoint: EndpointServiceCreateEndpoint;
  static readonly CreateEndpointProviderModel: EndpointServiceCreateEndpointProviderModel;
  static readonly CreateEndpointCacheConfiguration: EndpointServiceCreateEndpointCacheConfiguration;
  static readonly CreateEndpointRetryConfiguration: EndpointServiceCreateEndpointRetryConfiguration;
  static readonly CreateEndpointTag: EndpointServiceCreateEndpointTag;
  static readonly ForkEndpoint: EndpointServiceForkEndpoint;
  static readonly UpdateEndpointDetail: EndpointServiceUpdateEndpointDetail;
  static readonly GetAllEndpointLog: EndpointServiceGetAllEndpointLog;
  static readonly GetEndpointLog: EndpointServiceGetEndpointLog;
}

type ServiceError$5 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$5 {
  cancel(): void;
}

declare class EndpointServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getEndpoint(
    requestMessage: GetEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointResponse|null) => void
  ): UnaryResponse$5;
  getEndpoint(
    requestMessage: GetEndpointRequest,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointResponse|null) => void
  ): UnaryResponse$5;
  getAllEndpoint(
    requestMessage: GetAllEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: GetAllEndpointResponse|null) => void
  ): UnaryResponse$5;
  getAllEndpoint(
    requestMessage: GetAllEndpointRequest,
    callback: (error: ServiceError$5|null, responseMessage: GetAllEndpointResponse|null) => void
  ): UnaryResponse$5;
  getAllEndpointProviderModel(
    requestMessage: GetAllEndpointProviderModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: GetAllEndpointProviderModelResponse|null) => void
  ): UnaryResponse$5;
  getAllEndpointProviderModel(
    requestMessage: GetAllEndpointProviderModelRequest,
    callback: (error: ServiceError$5|null, responseMessage: GetAllEndpointProviderModelResponse|null) => void
  ): UnaryResponse$5;
  updateEndpointVersion(
    requestMessage: UpdateEndpointVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: UpdateEndpointVersionResponse|null) => void
  ): UnaryResponse$5;
  updateEndpointVersion(
    requestMessage: UpdateEndpointVersionRequest,
    callback: (error: ServiceError$5|null, responseMessage: UpdateEndpointVersionResponse|null) => void
  ): UnaryResponse$5;
  createEndpoint(
    requestMessage: CreateEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointResponse|null) => void
  ): UnaryResponse$5;
  createEndpoint(
    requestMessage: CreateEndpointRequest,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointResponse|null) => void
  ): UnaryResponse$5;
  createEndpointProviderModel(
    requestMessage: CreateEndpointProviderModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointProviderModelResponse|null) => void
  ): UnaryResponse$5;
  createEndpointProviderModel(
    requestMessage: CreateEndpointProviderModelRequest,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointProviderModelResponse|null) => void
  ): UnaryResponse$5;
  createEndpointCacheConfiguration(
    requestMessage: CreateEndpointCacheConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointCacheConfigurationResponse|null) => void
  ): UnaryResponse$5;
  createEndpointCacheConfiguration(
    requestMessage: CreateEndpointCacheConfigurationRequest,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointCacheConfigurationResponse|null) => void
  ): UnaryResponse$5;
  createEndpointRetryConfiguration(
    requestMessage: CreateEndpointRetryConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointRetryConfigurationResponse|null) => void
  ): UnaryResponse$5;
  createEndpointRetryConfiguration(
    requestMessage: CreateEndpointRetryConfigurationRequest,
    callback: (error: ServiceError$5|null, responseMessage: CreateEndpointRetryConfigurationResponse|null) => void
  ): UnaryResponse$5;
  createEndpointTag(
    requestMessage: CreateEndpointTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointResponse|null) => void
  ): UnaryResponse$5;
  createEndpointTag(
    requestMessage: CreateEndpointTagRequest,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointResponse|null) => void
  ): UnaryResponse$5;
  forkEndpoint(
    requestMessage: ForkEndpointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$5;
  forkEndpoint(
    requestMessage: ForkEndpointRequest,
    callback: (error: ServiceError$5|null, responseMessage: BaseResponse|null) => void
  ): UnaryResponse$5;
  updateEndpointDetail(
    requestMessage: UpdateEndpointDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointResponse|null) => void
  ): UnaryResponse$5;
  updateEndpointDetail(
    requestMessage: UpdateEndpointDetailRequest,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointResponse|null) => void
  ): UnaryResponse$5;
  getAllEndpointLog(
    requestMessage: GetAllEndpointLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: GetAllEndpointLogResponse|null) => void
  ): UnaryResponse$5;
  getAllEndpointLog(
    requestMessage: GetAllEndpointLogRequest,
    callback: (error: ServiceError$5|null, responseMessage: GetAllEndpointLogResponse|null) => void
  ): UnaryResponse$5;
  getEndpointLog(
    requestMessage: GetEndpointLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointLogResponse|null) => void
  ): UnaryResponse$5;
  getEndpointLog(
    requestMessage: GetEndpointLogRequest,
    callback: (error: ServiceError$5|null, responseMessage: GetEndpointLogResponse|null) => void
  ): UnaryResponse$5;
}

// package: integration_api
// file: audit-logging-api.proto



declare class AuditLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIntegrationname(): string;
  setIntegrationname(value: string): void;

  getAssetprefix(): string;
  setAssetprefix(value: string): void;

  getResponsestatus(): number;
  setResponsestatus(value: number): void;

  getTimetaken(): number;
  setTimetaken(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getCredentialid(): string;
  setCredentialid(value: string): void;

  clearExternalauditmetadatasList(): void;
  getExternalauditmetadatasList(): Array<Metadata>;
  setExternalauditmetadatasList(value: Array<Metadata>): void;
  addExternalauditmetadatas(value?: Metadata, index?: number): Metadata;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): google_protobuf_struct_pb.Struct | undefined;
  setRequest(value?: google_protobuf_struct_pb.Struct): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): google_protobuf_struct_pb.Struct | undefined;
  setResponse(value?: google_protobuf_struct_pb.Struct): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditLog.AsObject;
  static toObject(includeInstance: boolean, msg: AuditLog): AuditLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditLog;
  static deserializeBinaryFromReader(message: AuditLog, reader: jspb.BinaryReader): AuditLog;
}

declare namespace AuditLog {
  export type AsObject = {
    id: string,
    integrationname: string,
    assetprefix: string,
    responsestatus: number,
    timetaken: number,
    status: string,
    projectid: string,
    organizationid: string,
    credentialid: string,
    externalauditmetadatasList: Array<Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    metricsList: Array<Metric.AsObject>,
  }
}

declare class GetAllAuditLogRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAuditLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAuditLogRequest): GetAllAuditLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAuditLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAuditLogRequest;
  static deserializeBinaryFromReader(message: GetAllAuditLogRequest, reader: jspb.BinaryReader): GetAllAuditLogRequest;
}

declare namespace GetAllAuditLogRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    projectid: string,
    organizationid: string,
  }
}

declare class GetAllAuditLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AuditLog>;
  setDataList(value: Array<AuditLog>): void;
  addData(value?: AuditLog, index?: number): AuditLog;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAuditLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAuditLogResponse): GetAllAuditLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAuditLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAuditLogResponse;
  static deserializeBinaryFromReader(message: GetAllAuditLogResponse, reader: jspb.BinaryReader): GetAllAuditLogResponse;
}

declare namespace GetAllAuditLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AuditLog.AsObject>,
    error?: Error$1.AsObject,
    paginated?: Paginated.AsObject,
  }
}

declare class GetAuditLogRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuditLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuditLogRequest): GetAuditLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuditLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuditLogRequest;
  static deserializeBinaryFromReader(message: GetAuditLogRequest, reader: jspb.BinaryReader): GetAuditLogRequest;
}

declare namespace GetAuditLogRequest {
  export type AsObject = {
    id: string,
    projectid: string,
    organizationid: string,
  }
}

declare class GetAuditLogResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AuditLog | undefined;
  setData(value?: AuditLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuditLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuditLogResponse): GetAuditLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuditLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuditLogResponse;
  static deserializeBinaryFromReader(message: GetAuditLogResponse, reader: jspb.BinaryReader): GetAuditLogResponse;
}

declare namespace GetAuditLogResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AuditLog.AsObject,
    error?: Error$1.AsObject,
  }
}

declare class CreateMetadataRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetadataRequest): CreateMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetadataRequest;
  static deserializeBinaryFromReader(message: CreateMetadataRequest, reader: jspb.BinaryReader): CreateMetadataRequest;
}

declare namespace CreateMetadataRequest {
  export type AsObject = {
    id: string,
    additionaldataMap: Array<[string, string]>,
  }
}

declare class CreateMetadataResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AuditLog | undefined;
  setData(value?: AuditLog): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetadataResponse): CreateMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetadataResponse;
  static deserializeBinaryFromReader(message: CreateMetadataResponse, reader: jspb.BinaryReader): CreateMetadataResponse;
}

declare namespace CreateMetadataResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AuditLog.AsObject,
    error?: Error$1.AsObject,
  }
}

// package: integration_api
// file: audit-logging-api.proto



type AuditLoggingServiceGetAllAuditLog = {
  readonly methodName: string;
  readonly service: typeof AuditLoggingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAllAuditLogRequest;
  readonly responseType: typeof GetAllAuditLogResponse;
};

type AuditLoggingServiceGetAuditLog = {
  readonly methodName: string;
  readonly service: typeof AuditLoggingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAuditLogRequest;
  readonly responseType: typeof GetAuditLogResponse;
};

type AuditLoggingServiceCreateMetadata = {
  readonly methodName: string;
  readonly service: typeof AuditLoggingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateMetadataRequest;
  readonly responseType: typeof CreateMetadataResponse;
};

declare class AuditLoggingService {
  static readonly serviceName: string;
  static readonly GetAllAuditLog: AuditLoggingServiceGetAllAuditLog;
  static readonly GetAuditLog: AuditLoggingServiceGetAuditLog;
  static readonly CreateMetadata: AuditLoggingServiceCreateMetadata;
}

type ServiceError$4 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$4 {
  cancel(): void;
}

declare class AuditLoggingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllAuditLog(
    requestMessage: GetAllAuditLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$4|null, responseMessage: GetAllAuditLogResponse|null) => void
  ): UnaryResponse$4;
  getAllAuditLog(
    requestMessage: GetAllAuditLogRequest,
    callback: (error: ServiceError$4|null, responseMessage: GetAllAuditLogResponse|null) => void
  ): UnaryResponse$4;
  getAuditLog(
    requestMessage: GetAuditLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$4|null, responseMessage: GetAuditLogResponse|null) => void
  ): UnaryResponse$4;
  getAuditLog(
    requestMessage: GetAuditLogRequest,
    callback: (error: ServiceError$4|null, responseMessage: GetAuditLogResponse|null) => void
  ): UnaryResponse$4;
  createMetadata(
    requestMessage: CreateMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$4|null, responseMessage: CreateMetadataResponse|null) => void
  ): UnaryResponse$4;
  createMetadata(
    requestMessage: CreateMetadataRequest,
    callback: (error: ServiceError$4|null, responseMessage: CreateMetadataResponse|null) => void
  ): UnaryResponse$4;
}

// package: assistant_api
// file: assistant-deployment.proto



type AssistantDeploymentServiceCreateAssistantApiDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantApiDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantApiDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantApiDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantWebpluginDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantWebpluginDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantWebpluginDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantWebpluginDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantDebuggerDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantDebuggerDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantDebuggerDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantDebuggerDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantWhatsappDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantWhatsappDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantWhatsappDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantWhatsappDeploymentResponse;
};

type AssistantDeploymentServiceCreateAssistantPhoneDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof CreateAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantPhoneDeploymentResponse;
};

type AssistantDeploymentServiceGetAssistantPhoneDeployment = {
  readonly methodName: string;
  readonly service: typeof AssistantDeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetAssistantDeploymentRequest;
  readonly responseType: typeof GetAssistantPhoneDeploymentResponse;
};

declare class AssistantDeploymentService {
  static readonly serviceName: string;
  static readonly CreateAssistantApiDeployment: AssistantDeploymentServiceCreateAssistantApiDeployment;
  static readonly GetAssistantApiDeployment: AssistantDeploymentServiceGetAssistantApiDeployment;
  static readonly CreateAssistantWebpluginDeployment: AssistantDeploymentServiceCreateAssistantWebpluginDeployment;
  static readonly GetAssistantWebpluginDeployment: AssistantDeploymentServiceGetAssistantWebpluginDeployment;
  static readonly CreateAssistantDebuggerDeployment: AssistantDeploymentServiceCreateAssistantDebuggerDeployment;
  static readonly GetAssistantDebuggerDeployment: AssistantDeploymentServiceGetAssistantDebuggerDeployment;
  static readonly CreateAssistantWhatsappDeployment: AssistantDeploymentServiceCreateAssistantWhatsappDeployment;
  static readonly GetAssistantWhatsappDeployment: AssistantDeploymentServiceGetAssistantWhatsappDeployment;
  static readonly CreateAssistantPhoneDeployment: AssistantDeploymentServiceCreateAssistantPhoneDeployment;
  static readonly GetAssistantPhoneDeployment: AssistantDeploymentServiceGetAssistantPhoneDeployment;
}

type ServiceError$3 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$3 {
  cancel(): void;
}

declare class AssistantDeploymentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createAssistantApiDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantApiDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantApiDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantApiDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantApiDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantWebpluginDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantWebpluginDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantWebpluginDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantWebpluginDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWebpluginDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantDebuggerDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantDebuggerDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantDebuggerDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantDebuggerDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantDebuggerDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantWhatsappDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantWhatsappDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantWhatsappDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantWhatsappDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantWhatsappDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantPhoneDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse$3;
  createAssistantPhoneDeployment(
    requestMessage: CreateAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantPhoneDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse$3;
  getAssistantPhoneDeployment(
    requestMessage: GetAssistantDeploymentRequest,
    callback: (error: ServiceError$3|null, responseMessage: GetAssistantPhoneDeploymentResponse|null) => void
  ): UnaryResponse$3;
}

// package: connect_api
// file: connect-api.proto



declare class GeneralConnectRequest extends jspb.Message {
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

declare namespace GeneralConnectRequest {
  export type AsObject = {
    state: string,
    code: string,
    scope: string,
    connect: string,
  }
}

declare class GeneralConnectResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getProvider(): string;
  setProvider(value: string): void;

  getRedirectto(): string;
  setRedirectto(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneralConnectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeneralConnectResponse): GeneralConnectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneralConnectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneralConnectResponse;
  static deserializeBinaryFromReader(message: GeneralConnectResponse, reader: jspb.BinaryReader): GeneralConnectResponse;
}

declare namespace GeneralConnectResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    provider: string,
    redirectto: string,
    error?: Error$1.AsObject,
  }
}

declare class GetConnectorFilesRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getProvider(): string;
  setProvider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectorFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectorFilesRequest): GetConnectorFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectorFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectorFilesRequest;
  static deserializeBinaryFromReader(message: GetConnectorFilesRequest, reader: jspb.BinaryReader): GetConnectorFilesRequest;
}

declare namespace GetConnectorFilesRequest {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    provider: string,
  }
}

declare class GetConnectorFilesResponse extends jspb.Message {
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
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

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

declare namespace GetConnectorFilesResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    paginated?: Paginated.AsObject,
    error?: Error$1.AsObject,
    argsMap: Array<[string, string]>,
  }
}

// package: connect_api
// file: connect-api.proto



type ConnectServiceGeneralConnect = {
  readonly methodName: string;
  readonly service: typeof ConnectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GeneralConnectRequest;
  readonly responseType: typeof GeneralConnectResponse;
};

type ConnectServiceGetConnectorFiles = {
  readonly methodName: string;
  readonly service: typeof ConnectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof GetConnectorFilesRequest;
  readonly responseType: typeof GetConnectorFilesResponse;
};

declare class ConnectService {
  static readonly serviceName: string;
  static readonly GeneralConnect: ConnectServiceGeneralConnect;
  static readonly GetConnectorFiles: ConnectServiceGetConnectorFiles;
}

type ServiceError$2 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$2 {
  cancel(): void;
}

declare class ConnectServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  generalConnect(
    requestMessage: GeneralConnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$2|null, responseMessage: GeneralConnectResponse|null) => void
  ): UnaryResponse$2;
  generalConnect(
    requestMessage: GeneralConnectRequest,
    callback: (error: ServiceError$2|null, responseMessage: GeneralConnectResponse|null) => void
  ): UnaryResponse$2;
  getConnectorFiles(
    requestMessage: GetConnectorFilesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$2|null, responseMessage: GetConnectorFilesResponse|null) => void
  ): UnaryResponse$2;
  getConnectorFiles(
    requestMessage: GetConnectorFilesRequest,
    callback: (error: ServiceError$2|null, responseMessage: GetConnectorFilesResponse|null) => void
  ): UnaryResponse$2;
}

// package: endpoint_api
// file: invoker-api.proto



declare class EndpointDefinition extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointDefinition): EndpointDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointDefinition;
  static deserializeBinaryFromReader(message: EndpointDefinition, reader: jspb.BinaryReader): EndpointDefinition;
}

declare namespace EndpointDefinition {
  export type AsObject = {
    endpointid: string,
    version: string,
  }
}

declare class InvokeRequest extends jspb.Message {
  hasEndpoint(): boolean;
  clearEndpoint(): void;
  getEndpoint(): EndpointDefinition | undefined;
  setEndpoint(value?: EndpointDefinition): void;

  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeRequest): InvokeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeRequest;
  static deserializeBinaryFromReader(message: InvokeRequest, reader: jspb.BinaryReader): InvokeRequest;
}

declare namespace InvokeRequest {
  export type AsObject = {
    endpoint?: EndpointDefinition.AsObject,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

declare class InvokeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<string>;
  setDataList(value: Array<string>): void;
  addData(value: string, index?: number): string;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  getRequestid(): number;
  setRequestid(value: number): void;

  getTimetaken(): number;
  setTimetaken(value: number): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): google_protobuf_struct_pb.Struct | undefined;
  setMeta(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeResponse): InvokeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeResponse;
  static deserializeBinaryFromReader(message: InvokeResponse, reader: jspb.BinaryReader): InvokeResponse;
}

declare namespace InvokeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<string>,
    error?: Error$1.AsObject,
    requestid: number,
    timetaken: number,
    metricsList: Array<Metric.AsObject>,
    meta?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class UpdateRequest extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

declare namespace UpdateRequest {
  export type AsObject = {
    requestid: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

declare class UpdateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

declare namespace UpdateResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: Error$1.AsObject,
  }
}

declare class ProbeRequest extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeRequest): ProbeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeRequest;
  static deserializeBinaryFromReader(message: ProbeRequest, reader: jspb.BinaryReader): ProbeRequest;
}

declare namespace ProbeRequest {
  export type AsObject = {
    requestid: string,
  }
}

declare class ProbeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeResponse): ProbeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeResponse;
  static deserializeBinaryFromReader(message: ProbeResponse, reader: jspb.BinaryReader): ProbeResponse;
}

declare namespace ProbeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: google_protobuf_struct_pb.Struct.AsObject,
    error?: Error$1.AsObject,
  }
}

// package: endpoint_api
// file: invoker-api.proto



type DeploymentInvoke = {
  readonly methodName: string;
  readonly service: typeof Deployment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof InvokeRequest;
  readonly responseType: typeof InvokeResponse;
};

type DeploymentUpdate = {
  readonly methodName: string;
  readonly service: typeof Deployment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof UpdateRequest;
  readonly responseType: typeof UpdateResponse;
};

type DeploymentProbe = {
  readonly methodName: string;
  readonly service: typeof Deployment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ProbeRequest;
  readonly responseType: typeof ProbeResponse;
};

declare class Deployment {
  static readonly serviceName: string;
  static readonly Invoke: DeploymentInvoke;
  static readonly Update: DeploymentUpdate;
  static readonly Probe: DeploymentProbe;
}

type ServiceError$1 = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse$1 {
  cancel(): void;
}

declare class DeploymentClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  invoke(
    requestMessage: InvokeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$1|null, responseMessage: InvokeResponse|null) => void
  ): UnaryResponse$1;
  invoke(
    requestMessage: InvokeRequest,
    callback: (error: ServiceError$1|null, responseMessage: InvokeResponse|null) => void
  ): UnaryResponse$1;
  update(
    requestMessage: UpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$1|null, responseMessage: UpdateResponse|null) => void
  ): UnaryResponse$1;
  update(
    requestMessage: UpdateRequest,
    callback: (error: ServiceError$1|null, responseMessage: UpdateResponse|null) => void
  ): UnaryResponse$1;
  probe(
    requestMessage: ProbeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError$1|null, responseMessage: ProbeResponse|null) => void
  ): UnaryResponse$1;
  probe(
    requestMessage: ProbeRequest,
    callback: (error: ServiceError$1|null, responseMessage: ProbeResponse|null) => void
  ): UnaryResponse$1;
}

// package: notification_api
// file: notification-api.proto



declare class NotificationSetting extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAuthuserid(): number;
  setAuthuserid(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getEventtype(): string;
  setEventtype(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSetting.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSetting): NotificationSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSetting;
  static deserializeBinaryFromReader(message: NotificationSetting, reader: jspb.BinaryReader): NotificationSetting;
}

declare namespace NotificationSetting {
  export type AsObject = {
    id: string,
    authuserid: number,
    channel: string,
    eventtype: string,
    enabled: boolean,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

declare class UpdateNotificationSettingRequest extends jspb.Message {
  clearSettingsList(): void;
  getSettingsList(): Array<NotificationSetting>;
  setSettingsList(value: Array<NotificationSetting>): void;
  addSettings(value?: NotificationSetting, index?: number): NotificationSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationSettingRequest): UpdateNotificationSettingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNotificationSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationSettingRequest;
  static deserializeBinaryFromReader(message: UpdateNotificationSettingRequest, reader: jspb.BinaryReader): UpdateNotificationSettingRequest;
}

declare namespace UpdateNotificationSettingRequest {
  export type AsObject = {
    settingsList: Array<NotificationSetting.AsObject>,
  }
}

declare class GetNotificationSettingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationSettingRequest): GetNotificationSettingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationSettingRequest;
  static deserializeBinaryFromReader(message: GetNotificationSettingRequest, reader: jspb.BinaryReader): GetNotificationSettingRequest;
}

declare namespace GetNotificationSettingRequest {
  export type AsObject = {
  }
}

declare class NotificationSettingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<NotificationSetting>;
  setDataList(value: Array<NotificationSetting>): void;
  addData(value?: NotificationSetting, index?: number): NotificationSetting;

  hasError(): boolean;
  clearError(): void;
  getError(): Error$1 | undefined;
  setError(value?: Error$1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingResponse): NotificationSettingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationSettingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingResponse;
  static deserializeBinaryFromReader(message: NotificationSettingResponse, reader: jspb.BinaryReader): NotificationSettingResponse;
}

declare namespace NotificationSettingResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<NotificationSetting.AsObject>,
    error?: Error$1.AsObject,
  }
}

// package: notification_api
// file: notification-api.proto



type ServiceError = { message: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}

declare class NotificationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  updateNotificationSetting(
    requestMessage: UpdateNotificationSettingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: NotificationSettingResponse|null) => void
  ): UnaryResponse;
  updateNotificationSetting(
    requestMessage: UpdateNotificationSettingRequest,
    callback: (error: ServiceError|null, responseMessage: NotificationSettingResponse|null) => void
  ): UnaryResponse;
  getNotificationSettting(
    requestMessage: GetNotificationSettingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: NotificationSettingResponse|null) => void
  ): UnaryResponse;
  getNotificationSettting(
    requestMessage: GetNotificationSettingRequest,
    callback: (error: ServiceError|null, responseMessage: NotificationSettingResponse|null) => void
  ): UnaryResponse;
}

// package: talk_api
// file: webrtc.proto



declare class ICEServer extends jspb.Message {
  clearUrlsList(): void;
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  addUrls(value: string, index?: number): string;

  getUsername(): string;
  setUsername(value: string): void;

  getCredential(): string;
  setCredential(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICEServer.AsObject;
  static toObject(includeInstance: boolean, msg: ICEServer): ICEServer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ICEServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICEServer;
  static deserializeBinaryFromReader(message: ICEServer, reader: jspb.BinaryReader): ICEServer;
}

declare namespace ICEServer {
  export type AsObject = {
    urlsList: Array<string>,
    username: string,
    credential: string,
  }
}

declare class ICECandidate extends jspb.Message {
  getCandidate(): string;
  setCandidate(value: string): void;

  getSdpmid(): string;
  setSdpmid(value: string): void;

  getSdpmlineindex(): number;
  setSdpmlineindex(value: number): void;

  getUsernamefragment(): string;
  setUsernamefragment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICECandidate.AsObject;
  static toObject(includeInstance: boolean, msg: ICECandidate): ICECandidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ICECandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICECandidate;
  static deserializeBinaryFromReader(message: ICECandidate, reader: jspb.BinaryReader): ICECandidate;
}

declare namespace ICECandidate {
  export type AsObject = {
    candidate: string,
    sdpmid: string,
    sdpmlineindex: number,
    usernamefragment: string,
  }
}

declare class WebRTCSDP extends jspb.Message {
  getType(): WebRTCSDP.SDPTypeMap[keyof WebRTCSDP.SDPTypeMap];
  setType(value: WebRTCSDP.SDPTypeMap[keyof WebRTCSDP.SDPTypeMap]): void;

  getSdp(): string;
  setSdp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRTCSDP.AsObject;
  static toObject(includeInstance: boolean, msg: WebRTCSDP): WebRTCSDP.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebRTCSDP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRTCSDP;
  static deserializeBinaryFromReader(message: WebRTCSDP, reader: jspb.BinaryReader): WebRTCSDP;
}

declare namespace WebRTCSDP {
  export type AsObject = {
    type: WebRTCSDP.SDPTypeMap[keyof WebRTCSDP.SDPTypeMap],
    sdp: string,
  }

  export interface SDPTypeMap {
    SDP_TYPE_UNSPECIFIED: 0;
    OFFER: 1;
    ANSWER: 2;
  }

  export const SDPType: SDPTypeMap;
}

declare class ClientSignaling extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): void;

  hasSdp(): boolean;
  clearSdp(): void;
  getSdp(): WebRTCSDP | undefined;
  setSdp(value?: WebRTCSDP): void;

  hasIcecandidate(): boolean;
  clearIcecandidate(): void;
  getIcecandidate(): ICECandidate | undefined;
  setIcecandidate(value?: ICECandidate): void;

  hasDisconnect(): boolean;
  clearDisconnect(): void;
  getDisconnect(): boolean;
  setDisconnect(value: boolean): void;

  getMessageCase(): ClientSignaling.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientSignaling.AsObject;
  static toObject(includeInstance: boolean, msg: ClientSignaling): ClientSignaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientSignaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientSignaling;
  static deserializeBinaryFromReader(message: ClientSignaling, reader: jspb.BinaryReader): ClientSignaling;
}

declare namespace ClientSignaling {
  export type AsObject = {
    sessionid: string,
    sdp?: WebRTCSDP.AsObject,
    icecandidate?: ICECandidate.AsObject,
    disconnect: boolean,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    SDP = 2,
    ICECANDIDATE = 3,
    DISCONNECT = 4,
  }
}

declare class ServerSignaling extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): WebRTCConfig | undefined;
  setConfig(value?: WebRTCConfig): void;

  hasSdp(): boolean;
  clearSdp(): void;
  getSdp(): WebRTCSDP | undefined;
  setSdp(value?: WebRTCSDP): void;

  hasIcecandidate(): boolean;
  clearIcecandidate(): void;
  getIcecandidate(): ICECandidate | undefined;
  setIcecandidate(value?: ICECandidate): void;

  hasReady(): boolean;
  clearReady(): void;
  getReady(): boolean;
  setReady(value: boolean): void;

  hasClear(): boolean;
  clearClear(): void;
  getClear(): boolean;
  setClear(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  getMessageCase(): ServerSignaling.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerSignaling.AsObject;
  static toObject(includeInstance: boolean, msg: ServerSignaling): ServerSignaling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerSignaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerSignaling;
  static deserializeBinaryFromReader(message: ServerSignaling, reader: jspb.BinaryReader): ServerSignaling;
}

declare namespace ServerSignaling {
  export type AsObject = {
    sessionid: string,
    config?: WebRTCConfig.AsObject,
    sdp?: WebRTCSDP.AsObject,
    icecandidate?: ICECandidate.AsObject,
    ready: boolean,
    clear: boolean,
    error: string,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    CONFIG = 2,
    SDP = 3,
    ICECANDIDATE = 4,
    READY = 5,
    CLEAR = 6,
    ERROR = 7,
  }
}

declare class WebRTCConfig extends jspb.Message {
  clearIceserversList(): void;
  getIceserversList(): Array<ICEServer>;
  setIceserversList(value: Array<ICEServer>): void;
  addIceservers(value?: ICEServer, index?: number): ICEServer;

  getAudiocodec(): string;
  setAudiocodec(value: string): void;

  getSamplerate(): number;
  setSamplerate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRTCConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WebRTCConfig): WebRTCConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebRTCConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRTCConfig;
  static deserializeBinaryFromReader(message: WebRTCConfig, reader: jspb.BinaryReader): WebRTCConfig;
}

declare namespace WebRTCConfig {
  export type AsObject = {
    iceserversList: Array<ICEServer.AsObject>,
    audiocodec: string,
    samplerate: number,
  }
}

declare class WebTalkRequest extends jspb.Message {
  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): ConversationInitialization | undefined;
  setInitialization(value?: ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): ConversationConfiguration | undefined;
  setConfiguration(value?: ConversationConfiguration): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): ConversationUserMessage$1 | undefined;
  setMessage(value?: ConversationUserMessage$1): void;

  hasSignaling(): boolean;
  clearSignaling(): void;
  getSignaling(): ClientSignaling | undefined;
  setSignaling(value?: ClientSignaling): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ConversationMetadata | undefined;
  setMetadata(value?: ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): ConversationMetric | undefined;
  setMetric(value?: ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): ConversationDisconnection | undefined;
  setDisconnection(value?: ConversationDisconnection): void;

  getRequestCase(): WebTalkRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebTalkRequest): WebTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebTalkRequest;
  static deserializeBinaryFromReader(message: WebTalkRequest, reader: jspb.BinaryReader): WebTalkRequest;
}

declare namespace WebTalkRequest {
  export type AsObject = {
    initialization?: ConversationInitialization.AsObject,
    configuration?: ConversationConfiguration.AsObject,
    message?: ConversationUserMessage$1.AsObject,
    signaling?: ClientSignaling.AsObject,
    metadata?: ConversationMetadata.AsObject,
    metric?: ConversationMetric.AsObject,
    disconnection?: ConversationDisconnection.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    INITIALIZATION = 1,
    CONFIGURATION = 2,
    MESSAGE = 3,
    SIGNALING = 4,
    METADATA = 5,
    METRIC = 6,
    DISCONNECTION = 7,
  }
}

declare class WebTalkResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasInitialization(): boolean;
  clearInitialization(): void;
  getInitialization(): ConversationInitialization | undefined;
  setInitialization(value?: ConversationInitialization): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): ConversationConfiguration | undefined;
  setConfiguration(value?: ConversationConfiguration): void;

  hasInterruption(): boolean;
  clearInterruption(): void;
  getInterruption(): ConversationInterruption | undefined;
  setInterruption(value?: ConversationInterruption): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): ConversationUserMessage$1 | undefined;
  setUser(value?: ConversationUserMessage$1): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): ConversationAssistantMessage$1 | undefined;
  setAssistant(value?: ConversationAssistantMessage$1): void;

  hasTool(): boolean;
  clearTool(): void;
  getTool(): ConversationToolCall | undefined;
  setTool(value?: ConversationToolCall): void;

  hasToolresult(): boolean;
  clearToolresult(): void;
  getToolresult(): ConversationToolResult | undefined;
  setToolresult(value?: ConversationToolResult): void;

  hasDirective(): boolean;
  clearDirective(): void;
  getDirective(): ConversationDirective | undefined;
  setDirective(value?: ConversationDirective): void;

  hasError(): boolean;
  clearError(): void;
  getError(): ConversationError | undefined;
  setError(value?: ConversationError): void;

  hasSignaling(): boolean;
  clearSignaling(): void;
  getSignaling(): ServerSignaling | undefined;
  setSignaling(value?: ServerSignaling): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ConversationMetadata | undefined;
  setMetadata(value?: ConversationMetadata): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): ConversationMetric | undefined;
  setMetric(value?: ConversationMetric): void;

  hasDisconnection(): boolean;
  clearDisconnection(): void;
  getDisconnection(): ConversationDisconnection | undefined;
  setDisconnection(value?: ConversationDisconnection): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): ConversationEvent | undefined;
  setEvent(value?: ConversationEvent): void;

  getDataCase(): WebTalkResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebTalkResponse): WebTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebTalkResponse;
  static deserializeBinaryFromReader(message: WebTalkResponse, reader: jspb.BinaryReader): WebTalkResponse;
}

declare namespace WebTalkResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    initialization?: ConversationInitialization.AsObject,
    configuration?: ConversationConfiguration.AsObject,
    interruption?: ConversationInterruption.AsObject,
    user?: ConversationUserMessage$1.AsObject,
    assistant?: ConversationAssistantMessage$1.AsObject,
    tool?: ConversationToolCall.AsObject,
    toolresult?: ConversationToolResult.AsObject,
    directive?: ConversationDirective.AsObject,
    error?: ConversationError.AsObject,
    signaling?: ServerSignaling.AsObject,
    metadata?: ConversationMetadata.AsObject,
    metric?: ConversationMetric.AsObject,
    disconnection?: ConversationDisconnection.AsObject,
    event?: ConversationEvent.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INITIALIZATION = 8,
    CONFIGURATION = 9,
    INTERRUPTION = 10,
    USER = 11,
    ASSISTANT = 12,
    TOOL = 13,
    TOOLRESULT = 14,
    DIRECTIVE = 16,
    ERROR = 15,
    SIGNALING = 17,
    METADATA = 19,
    METRIC = 20,
    DISCONNECTION = 21,
    EVENT = 22,
  }
}

// package: talk_api
// file: webrtc.proto


type Status = { details: string, code: number; metadata: grpc.Metadata }
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

declare class WebRTCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  webTalk(metadata?: grpc.Metadata): BidirectionalStream<WebTalkRequest, WebTalkResponse>;
}

/**
 *
 */
interface ConnectionCallback {
    /**
     *
     * @returns
     */
    onError?: () => void;
    /**
     *
     * @returns
     */
    onConnect?: () => void;
    /**
     *
     * @returns
     */
    onDisconnect?: () => void;
}
declare class ConnectionConfig {
    /**
     * an utils for debugger credentials
     * @param param0
     * @returns
     */
    static WithDebugger({ authorization, userId, projectId, }: {
        authorization: string;
        userId: string;
        projectId: string;
    }): UserAuthInfo;
    /**
     *
     * @param param0
     * @returns
     */
    static WithPersonalToken({ Authorization, AuthId, ProjectId, }: {
        Authorization: string;
        AuthId: string;
        ProjectId: string;
    }): UserAuthInfo;
    /**
     *
     * @param param0
     * @returns
     */
    static WithWebpluginClient({ ApiKey, UserId, }: {
        ApiKey: string;
        UserId?: string;
    }): ClientAuthInfo;
    /**
     *
     * @param param0
     * @returns
     */
    static WithSDK({ ApiKey, UserId, }: {
        ApiKey: string;
        UserId?: string;
    }): ClientAuthInfo;
    endpoint: {
        assistant: string;
        web: string;
        endpoint: string;
    };
    debug: boolean;
    authInfo?: ClientAuthInfo | UserAuthInfo;
    getClientOptions(): {
        debug: boolean;
    };
    /**
     * holding the callback
     */
    callbacks?: ConnectionCallback;
    constructor(endpoint?: {
        assistant?: string;
        web?: string;
        endpoint?: string;
    }, debug?: boolean);
    get conversationClient(): TalkServiceClient;
    get assistantClient(): AssistantServiceClient;
    get notificationClient(): NotificationServiceClient;
    get projectClient(): ProjectServiceClient;
    get knowledgeClient(): KnowledgeServiceClient;
    get deploymentClient(): DeploymentClient;
    get documentClient(): DocumentServiceClient;
    get vaultClient(): VaultServiceClient;
    get endpointClient(): EndpointServiceClient;
    get auditLoggingClient(): AuditLoggingServiceClient;
    get assistantDeploymentClient(): AssistantDeploymentServiceClient;
    get organizationClient(): OrganizationServiceClient;
    get connectClient(): ConnectServiceClient;
    get authenticationClient(): AuthenticationServiceClient;
    get streamClient(): TalkServiceClient;
    get webrtcClient(): WebRTCClient;
    withLocal(): this;
    withAuth(auth: ClientAuthInfo | UserAuthInfo): this;
    get auth(): ClientAuthInfo | UserAuthInfo | undefined;
    /**
     * with default connection config
     * @param auth
     * @returns
     */
    static DefaultConnectionConfig(auth: ClientAuthInfo | UserAuthInfo): ConnectionConfig;
    /**
     *
     * @param endpoint
     * @param debug
     * @returns
     */
    withCustomEndpoint(endpoint?: {
        assistant?: string;
        web?: string;
        endpoint?: string;
    }, debug?: boolean): this;
    /**
     * Configures connection callbacks for the TalkService clients.
     *
     * @param onConnect - A callback function to be executed when a connection is established.
     * @param onDisconnect - A callback function to be executed when the connection is terminated.
     * @param onError - A callback function to be executed when the connection is terminated.
     *
     * @returns - The current instance of `ConnectionConfig` for method chaining.
     *
     * @example
     * ```typescript
     * const connection = new ConnectionConfig(auth);
     * connection.withConnectionCallback(
     *   () => { console.log("Connected to the TalkService"); },
     *   () => { console.log("Disconnected from the TalkService"); }
     * );
     * ```
     */
    withConnectionCallback(cl: ConnectionCallback): this;
    /**
     *
     * @param connection
     * @returns
     */
    onConnectionChange(connection: ConnectionState): void;
}

interface ConversationUserMessage extends ConversationUserMessage$1.AsObject {
    messageText?: string;
}
declare class ConversationUserMessage {
    constructor(config?: ConversationUserMessage$1);
}
interface ConversationAssistantMessage extends ConversationAssistantMessage$1.AsObject {
    messageText?: string;
}
declare class ConversationAssistantMessage {
    constructor(config?: ConversationAssistantMessage$1);
}
/**
 * Callbacks for agent events
 */
interface AgentCallback {
    onInitialization?: (args: ConversationInitialization.AsObject | undefined) => void;
    /** Called when configuration is received (conversation ID, etc.) */
    onConfiguration?: (args: ConversationConfiguration.AsObject | undefined) => void;
    /** Called on interruption */
    onInterrupt?: (args: ConversationInterruption.AsObject | undefined) => void;
    /** Called when assistant message is received */
    onAssistantMessage?: (args: ConversationAssistantMessage | undefined) => void;
    /** Called when user message is received */
    onUserMessage?: (args: ConversationUserMessage | undefined) => void;
    /** Called when directive/action is received */
    onDirective?: (arg?: ConversationDirective.AsObject) => void;
    /** Called when a pipeline conversation event is received (STT, TTS, LLM, session, etc.) */
    onConversationEvent?: (event: ConversationEvent.AsObject) => void;
    /** Called when server-side performance/latency metric data is received */
    onMetric?: (metric: ConversationMetric.AsObject) => void;
    /** Called when connection state changes */
    onConnectionStateChange?: (state: RTCPeerConnectionState) => void;
    /** Called when fully connected */
    onConnected?: () => void;
    /** Called when disconnected */
    onDisconnected?: () => void;
    /** Called when a server-side conversation error is received (with conversation ID and details) */
    onConversationError?: (error: ConversationError.AsObject) => void;
    /** Called on error */
    onError?: (error: Error) => void;
}

declare enum Feedback {
    Helpful = "helpful",
    NotHelpful = "not_helpful",
    Other = "other"
}

/**
 * Defines the structure for callback functions used in voice agent events.
 *
 * This type encapsulates various event handlers that can be triggered during
 * the lifecycle of a voice agent connection. It includes callbacks for:
 *
 * - Connection establishment and termination
 * - Data reception
 * - Active device changes
 * - Mute status changes
 * - Connection state updates
 * - Server-side events
 *
 * These callbacks allow for fine-grained control and monitoring of the voice
 * agent's state and interactions, enabling developers to build responsive
 * and interactive voice-enabled applications.
 */
type AgentEventCallback = {
    onAssistantChangeEvent: (assistant: Assistant) => void;
    onConnectionStateEvent: (state: ConnectionState) => void;
    onInputMediaDeviceChangeEvent: (deviceId: string) => void;
    onOutputMediaDeviceChangeEvent: (deviceId: string) => void;
    onInputChannelChangeEvent: (cnl: Channel) => void;
    onOutputChannelChangeEvent: (cnl: Channel) => void;
    onMuteStateEvent: (isMuted: boolean) => void;
    onConversationEvent: (eventType?: WebTalkResponse.DataCase, event?: ConversationConfiguration | ConversationUserMessage$1 | ConversationAssistantMessage$1 | ConversationInterruption) => void;
    onFeedbackEvent: (type: "conversation" | "message", feedback: Feedback) => void;
    onErrorEvent: (type: "server" | "client", error: string) => void;
};

/**
 *
 */
declare enum MessageRole {
    System = "system",
    User = "user"
}
/**
 *
 */
declare enum MessageStatus {
    /**
     * Pending status for the message
     */
    Pending = "pending",
    /**
     * complete the message
     */
    Complete = "complete"
}
/**
 *
 */
interface Message {
    /**
     * id of the message
     */
    id: string;
    /**
     * role of the message who had sent it
     */
    role: MessageRole;
    /**
     * list of sentences in the message
     */
    messages: string[];
    /**
     * feedback given to the message
     */
    feedback?: Feedback;
    /**
     *time
     */
    time: Date;
    /**
     *
     */
    status: MessageStatus;
}

declare const Agent_base: new () => TypedEmitter<AgentEventCallback>;
/**
 * Base Agent class for interacting with Rapida AI assistants.
 * Manages bidirectional communication, connection states, metrics, and events.
 */
declare class Agent extends Agent_base {
    protected connectionState: ConnectionState;
    private _conversationId?;
    protected agentConfig: AgentConfig;
    protected agentCallbacks: AgentCallback[];
    private readonly _connectionConfig;
    agentMessages: Message[];
    /**
     * Creates a new Agent instance
     * @param connection - Connection configuration
     * @param agentConfig - Agent configuration
     * @param agentCallback - Optional callback handler
     */
    protected constructor(connection: ConnectionConfig, agentConfig: AgentConfig, agentCallback?: AgentCallback);
    /**
     * Current connection state of the agent
     */
    get state(): ConnectionState;
    /**
     * Current conversation ID, if any
     */
    get conversationId(): string | undefined;
    /**
     * Array of messages in the current conversation
     */
    get messages(): Message[];
    /**
     * Whether the agent is currently connected
     */
    get isConnected(): boolean;
    /**
     * this will help user to modify what he wants
     */
    get agentConfiguration(): AgentConfig;
    /**
     * Switches to a different agent during an active conversation.
     * Subclasses override this to send the configuration through their transport.
     *
     * @param config - Configuration for the new agent
     * @throws {Error} If agent is not connected
     */
    switchAgent(_config: AgentConfig): Promise<void>;
    /**
     * Creates metrics for a specific message
     * @param messageId - ID of the message
     * @param metrics - Array of metric objects
     */
    createMessageMetric(messageId: string, metrics: Array<{
        name: string;
        description: string;
        value: string;
    }>): void;
    /**
     * Creates metrics for the entire conversation
     * @param metrics - Array of metric objects
     */
    createConversationMetric(metrics: Array<{
        name: string;
        description: string;
        value: string;
    }>): void;
    /**
     * Emits a typed event
     *
     * @param event - Event name
     * @param args - Event arguments
     * @returns Whether the event had listeners
     */
    emit<E extends keyof AgentEventCallback>(event: E, ...args: Parameters<AgentEventCallback[E]>): boolean;
    /**
     * Initializes the agent by fetching assistant data
     */
    getAssistant(): Promise<GetAssistantResponse>;
    /**
     * Updates connection state and emits events
     */
    private _setAndEmitConnectionState;
    /**
     * Handles conversation ID changes
     */
    protected changeConversation: (assistantConversationId: string) => void;
    /**
     * Disconnects from the assistant.
     * Subclasses should override `disconnect()` to tear down their transport
     * and then call this to update state.
     */
    protected disconnectAgent(): Promise<void>;
    /**
     * Fetches assistant data for a specific agent ID and version
     */
    private _fetchAssistant;
    /**
     * Updates message feedback in the local message store
     */
    private _updateMessageFeedback;
    registerCallback: (agentCallback: AgentCallback) => void;
}

/**
 * WebRTC gRPC Transport Configuration
 */
interface WebRTCGrpcTransportConfig {
    /** Connection configuration with gRPC client */
    connectionConfig: ConnectionConfig;
    /** Agent configuration */
    agentConfig: AgentConfig;
    /** Existing conversation ID to continue */
    conversationId?: string;
}
/**
 * WebRTC Transport with gRPC Signaling — Orchestrator
 *
 * Composes four single-responsibility managers:
 *   - GrpcSignalingManager  → gRPC stream lifecycle & proto message building
 *   - WebRTCPeerManager     → RTCPeerConnection, SDP/ICE, codec prefs
 *   - AudioMediaManager     → local/remote media, devices, mute/volume
 *   - MessageProtocolHandler → incoming response dispatch
 *
 * This class wires the managers together and exposes the public API.
 */
declare class WebRTCGrpcTransport {
    private config;
    private callbacks;
    private signaling;
    private peer;
    private audio;
    private protocol;
    constructor(config: WebRTCGrpcTransportConfig, callbacks?: AgentCallback);
    /**
     * Factory — create and connect a transport.
     * @param textOnly  When true, connects gRPC + signaling only (no microphone).
     */
    static create(config: WebRTCGrpcTransportConfig, callbacks?: AgentCallback, textOnly?: boolean): Promise<WebRTCGrpcTransport>;
    /**
     * Connect the transport.
     *
     * @param textOnly  When true, skip microphone — gRPC + signaling only.
     *
     * Flow:
     * 1. (Audio only) Get local media stream (microphone)
     * 2. Connect gRPC bidirectional stream
     * 3. Send ConversationInitialization
     * 4. Server responds with Signaling (SDP offer, ICE)
     * 5. Client creates peer connection and sends SDP answer
     * 6. Audio flows over WebRTC / text flows over gRPC
     */
    connect(textOnly?: boolean): Promise<void>;
    /**
     * Disconnect audio only (close WebRTC peer) but keep gRPC session alive.
     * This is a transport-layer operation — the session is unaffected.
     */
    disconnectAudioOnly(): Promise<void>;
    /**
     * Reconnect audio — setup local media (microphone).
     * The caller is responsible for sending ConversationConfiguration to the server.
     *
     * This is a transport-layer operation: it only adds the audio transport
     * to an existing session. It does NOT create a new session.
     */
    reconnectAudio(): Promise<void>;
    close(): Promise<void>;
    sendConversationInitialization(): void;
    sendConversationConfiguration(): void;
    sendText(text: string): void;
    interruptAudio(): void;
    resumeAudio(): Promise<void>;
    setMuted(muted: boolean): void;
    getMuted(): boolean;
    setVolume(volume: number): void;
    getVolume(): number;
    setInputDevice(deviceId: string): Promise<void>;
    setOutputDevice(deviceId: string): Promise<void>;
    get inputAnalyserNode(): AnalyserNode | null;
    get outputAnalyserNode(): AnalyserNode | null;
    get mediaStream(): MediaStream | null;
    get remoteMediaStream(): MediaStream | null;
    get context(): AudioContext | null;
    get connected(): boolean;
    get isGrpcConnected(): boolean;
    get isAudioConnected(): boolean;
}
/**
 * Check if the browser supports WebRTC with gRPC signaling
 */
declare function supportsWebRTCGrpcTransport(): boolean;

declare class VoiceAgent extends Agent {
    private webrtcTransport;
    private volume;
    private connectionConfig;
    private _isMuted;
    private _connectPromise;
    private _disconnectRequested;
    private inputFrequencyData?;
    private outputFrequencyData?;
    /**
     * @param options
     */
    constructor(connection: ConnectionConfig, agentConfig: AgentConfig, agentCallback?: AgentCallback);
    /**
     * Build the AgentCallback wiring used by WebRTCGrpcTransport.
     * Both audio-mode and text-only-mode go through the same transport,
     * so we share a single callback object.
     */
    private buildTransportCallbacks;
    /**
     * disconnecting the agent and voice if it is connected.
     * Safe to call while a connection attempt is still in progress —
     * signals the in-flight connect to abort and tears everything down.
     */
    disconnect: () => Promise<void>;
    /**
     * disconnect the audio for the agent
     */
    disconnectAudio: () => Promise<void>;
    /**
     * Fallback to text mode when the audio transport disconnects.
     * The session (gRPC) may still be alive — only the transport changes.
     */
    private switchToTextModeOnDisconnect;
    /**
     * Create the session (gRPC stream + optional audio).
     *
     * The current channel config determines whether audio is included.
     * This is called once per session — after that, use setInputChannel()
     * to add/remove the audio transport without recreating the session.
     */
    private connectDevice;
    /**
     * Handle assistant text from WebRTC - supports streaming with completed flag
     * Similar to original onHandleAssistant for gRPC
     */
    private _handleAssistantText;
    /**
     * Handle user transcription from WebRTC - supports streaming with completed flag
     * Similar to original onHandleUser for gRPC
     */
    private _handleUserTranscription;
    /**
     * Platform-specific audio preparation (mobile delays / iOS device selection).
     * Called automatically by connectDevice() when the channel is Audio.
     */
    private prepareAudioForPlatform;
    /**
     * Interrupt audio playback
     */
    private interruptAudio;
    /**
     * Fade out audio (WebRTC handles audio directly via peer connection)
     * @param duration
     */
    private fadeOutAudio;
    /**
     * Ensure the transport is connected. If not, connect and wait.
     * Safe to call from anywhere — deduplicates concurrent calls.
     */
    private ensureConnected;
    /**
     * Create a session (gRPC stream) with the assistant.
     *
     * The current channel config determines whether audio is included.
     * Once connected, use setInputChannel() to switch transports
     * without creating a new session.
     */
    connect: () => Promise<void>;
    /**
     * Resume audio playback - call this from a user interaction (click/tap)
     * Required by some browsers due to autoplay policies
     */
    resumeAudio: () => Promise<void>;
    /**
     * Send text message to the assistant.
     * Works in both Audio and Text modes — always goes through the transport.
     *
     * @param text
     */
    onSendText: (text: string) => Promise<void>;
    /**
     * Switch to a different agent configuration during an active conversation.
     * Sends a ConversationConfiguration through the transport.
     */
    switchAgent(config: AgentConfig): Promise<void>;
    /**
     * Getting  all the list of deviceid
     * @param kind
     * @param requestPermissions
     * @returns
     */
    static getLocalDevices(kind?: MediaDeviceKind, requestPermissions?: boolean): Promise<MediaDeviceInfo[]>;
    /**
     *  changing the deviceid
     * @param deviceId the device id
     */
    setOutputMediaDevice: (deviceId: string) => Promise<void>;
    /**
     *  Changing media device id
     * @param deviceId
     * @returns
     */
    setInputMediaDevice: (deviceId: string) => Promise<void>;
    get inputMediaDevice(): string | undefined;
    /**
     * Get current mute state
     */
    get isMuted(): boolean;
    /**
     * Mute the microphone
     */
    mute: () => void;
    /**
     * Unmute the microphone
     */
    unmute: () => void;
    /**
     * Toggle mute state
     * @returns The new mute state after toggling
     */
    toggleMute: () => boolean;
    /**
     * Switch input/output channel (Text ↔ Audio).
     *
     * This is a transport-layer change, NOT a state-layer change:
     * - Does NOT create a new session
     * - Does NOT reset conversation state
     * - Only changes input transport (keyboard ↔ microphone)
     *   and output transport (screen ↔ speaker)
     */
    setInputChannel: (input: Channel) => Promise<void>;
    /**
     * to get byte frequency data from input
     * @returns
     */
    getInputByteFrequencyData: () => Uint8Array | undefined;
    /**
     * output byte frequency data
     * @returns
     */
    getOutputByteFrequencyData: () => Uint8Array | undefined;
    /**
     * Check if WebRTC transport is connected
     */
    get isWebRTCConnected(): boolean;
    /** Get the WebRTC transport instance */
    get transport(): WebRTCGrpcTransport | null;
}

interface DeviceSelectorComponentProps extends HTMLAttributes<HTMLDivElement> {
    voiceAgent: VoiceAgent;
}
/**
 *
 * @returns
 */
declare const DeviceSelectorComponent: FC<DeviceSelectorComponentProps>;

export { GetAllAssistantWebhookLogResponse as $, AssistantDebuggerDeployment as A, GetAllMessageResponse as B, ConnectionConfig as C, GetAllConversationMessageResponse as D, CreateAssistantDeploymentRequest as E, Feedback as F, GetUserResponse as G, GetAssistantDebuggerDeploymentResponse as H, IndexKnowledgeDocumentResponse as I, GetAssistantDeploymentRequest as J, GetAssistantApiDeploymentResponse as K, GetAssistantWebpluginDeploymentResponse as L, type Message as M, GetAssistantPhoneDeploymentResponse as N, GetAssistantWhatsappDeploymentResponse as O, GetAllAssistantWebhookResponse as P, GetAssistantWebhookResponse as Q, type RapidaSource as R, GetAllAssistantTelemetryProviderResponse as S, Metadata as T, type UserAuthInfo as U, VoiceAgent as V, GetAssistantTelemetryProviderResponse as W, GetAssistantConversationRequest as X, GetAssistantConversationResponse as Y, GetAllAssistantAnalysisResponse as Z, GetAssistantAnalysisResponse as _, AssistantWebpluginDeployment as a, Metric as a$, GetAssistantWebhookLogResponse as a0, GetAllAssistantToolResponse as a1, GetAssistantToolResponse as a2, GetAllAssistantKnowledgeResponse as a3, GetAssistantKnowledgeResponse as a4, GetAssistantToolLogRequest as a5, GetAssistantToolLogResponse as a6, GetAllAssistantToolLogRequest as a7, GetAllAssistantToolLogResponse as a8, CreateAssistantProviderRequest as a9, CreateConversationMetricRequest as aA, CreateConversationMetricResponse as aB, WebTalkRequest as aC, WebTalkResponse as aD, CreateKnowledgeRequest as aE, CreateKnowledgeResponse as aF, GetKnowledgeResponse as aG, GetAllKnowledgeResponse as aH, DocumentContent as aI, CreateKnowledgeDocumentResponse as aJ, GetAllKnowledgeDocumentResponse as aK, GetAllKnowledgeDocumentSegmentResponse as aL, BaseResponse as aM, GetKnowledgeLogRequest as aN, GetKnowledgeLogResponse as aO, GetAllKnowledgeLogRequest as aP, GetAllKnowledgeLogResponse as aQ, AddUsersToProjectResponse as aR, CreateProjectResponse as aS, UpdateProjectResponse as aT, GetAllProjectResponse as aU, GetProjectResponse as aV, ArchiveProjectResponse as aW, GetAllProjectCredentialResponse as aX, CreateProjectCredentialResponse as aY, Message$1 as aZ, Error$1 as a_, GetAssistantProviderResponse as aa, GetAllAssistantProviderResponse as ab, GetAllAssistantConversationResponse as ac, GetAllAuditLogResponse as ad, GetAuditLogResponse as ae, GetAllEndpointResponse as af, UpdateEndpointVersionResponse as ag, GetAllEndpointProviderModelResponse as ah, GetEndpointResponse as ai, EndpointProviderModelAttribute as aj, CreateEndpointProviderModelResponse as ak, EndpointAttribute as al, CreateEndpointResponse as am, EndpointRetryConfiguration as an, EndpointCacheConfiguration as ao, CreateEndpointRetryConfigurationResponse as ap, CreateEndpointCacheConfigurationResponse as aq, GetAllEndpointLogResponse as ar, GetEndpointLogResponse as as, CreateProviderCredentialRequest as at, GetCredentialResponse as au, GetAllOrganizationCredentialResponse as av, AssistantTalkRequest as aw, AssistantTalkResponse as ax, CreateMessageMetricRequest as ay, CreateMessageMetricResponse as az, AssistantApiDeployment as b, AssistantKnowledge as b$, CreatePhoneCallRequest as b0, CreatePhoneCallResponse as b1, CreateBulkPhoneCallRequest as b2, CreateBulkPhoneCallResponse as b3, GetAllAssistantTelemetryRequest as b4, GetAllAssistantTelemetryResponse as b5, GetNotificationSettingRequest as b6, NotificationSettingResponse as b7, UpdateNotificationSettingRequest as b8, WebRTCGrpcTransport as b9, HEADER_DEVICE_MEMORY as bA, HEADER_HARDWARE_CONCURRENCY as bB, HEADER_CONNECTION_TYPE as bC, HEADER_CONNECTION_EFFECTIVE_TYPE as bD, HEADER_COOKIES_ENABLED as bE, HEADER_DO_NOT_TRACK as bF, HEADER_REFERRER as bG, HEADER_REMOTE_URL as bH, HEADER_LATITUDE as bI, HEADER_LONGITUDE as bJ, WithPlatform as bK, WithAuthContext as bL, getClientInfo as bM, WithClientContext as bN, TelemetryEvent as bO, TelemetryMetric as bP, TelemetryRecord as bQ, EndpointService as bR, EndpointServiceClient as bS, AssistantDeploymentService as bT, AssistantDeploymentServiceClient as bU, ConnectService as bV, ConnectServiceClient as bW, VaultService as bX, VaultServiceClient as bY, Deployment as bZ, DeploymentClient as b_, supportsWebRTCGrpcTransport as ba, type WebRTCGrpcTransportConfig as bb, ConnectionState as bc, Channel as bd, InputOptions as be, OutputOptions as bf, AgentConfig as bg, UserIdentifier as bh, type AgentCallback as bi, MessageRole as bj, MessageStatus as bk, HEADER_ENVIRONMENT_KEY as bl, HEADER_SOURCE_KEY as bm, HEADER_REGION_KEY as bn, HEADER_API_KEY as bo, HEADER_AUTH_ID as bp, HEADER_PROJECT_ID as bq, HEADER_USER_AGENT as br, HEADER_LANGUAGE as bs, HEADER_PLATFORM as bt, HEADER_SCREEN_WIDTH as bu, HEADER_SCREEN_HEIGHT as bv, HEADER_WINDOW_WIDTH as bw, HEADER_WINDOW_HEIGHT as bx, HEADER_TIMEZONE as by, HEADER_COLOR_DEPTH as bz, Assistant as c, Argument as c$, CreateAssistantKnowledgeRequest as c0, UpdateAssistantKnowledgeRequest as c1, GetAssistantKnowledgeRequest as c2, DeleteAssistantKnowledgeRequest as c3, GetAllAssistantKnowledgeRequest as c4, AuditLog as c5, GetAllAuditLogRequest as c6, GetAuditLogRequest as c7, CreateMetadataRequest as c8, CreateMetadataResponse as c9, VerifyTokenRequest as cA, AuthorizeRequest as cB, ScopeAuthorizeRequest as cC, ScopedAuthenticationResponse as cD, GetUserRequest as cE, UpdateUserRequest as cF, SocialAuthenticationRequest as cG, GetAllUserRequest as cH, CreateOrganizationRequest as cI, UpdateOrganizationRequest as cJ, GetOrganizationRequest as cK, UpdateBillingInformationRequest as cL, Project as cM, CreateProjectRequest as cN, UpdateProjectRequest as cO, GetProjectRequest as cP, GetAllProjectRequest as cQ, AddUsersToProjectRequest as cR, ArchiveProjectRequest as cS, ProjectCredential as cT, CreateProjectCredentialRequest as cU, GetAllProjectCredentialRequest as cV, FieldSelector as cW, Paginate as cX, Paginated as cY, Ordering as cZ, User as c_, KnowledgeService as ca, KnowledgeServiceClient as cb, VaultCredential as cc, GetAllOrganizationCredentialRequest as cd, GetCredentialRequest as ce, AssistantAnalysis as cf, CreateAssistantAnalysisRequest as cg, UpdateAssistantAnalysisRequest as ch, GetAssistantAnalysisRequest as ci, DeleteAssistantAnalysisRequest as cj, GetAllAssistantAnalysisRequest as ck, EndpointDefinition as cl, UpdateRequest as cm, UpdateResponse as cn, ProbeRequest as co, ProbeResponse as cp, AuthenticateRequest as cq, RegisterUserRequest as cr, Token as cs, OrganizationRole as ct, ProjectRole as cu, FeaturePermission as cv, Authentication as cw, ScopedAuthentication as cx, ForgotPasswordRequest as cy, CreatePasswordRequest as cz, type ClientAuthInfo as d, AuditLoggingServiceClient as d$, Variable as d0, Tag as d1, Organization as d2, ToolCall as d3, FunctionCall as d4, Knowledge as d5, TextPrompt as d6, TextChatCompletePrompt as d7, AssistantConversationMessage as d8, AssistantConversationContext as d9, EndpointProviderModel as dA, AggregatedEndpointAnalytics as dB, Endpoint as dC, CreateEndpointProviderModelRequest as dD, GetEndpointRequest as dE, GetAllEndpointRequest as dF, GetAllEndpointProviderModelRequest as dG, UpdateEndpointVersionRequest as dH, CreateEndpointRetryConfigurationRequest as dI, CreateEndpointCacheConfigurationRequest as dJ, CreateEndpointTagRequest as dK, ForkEndpointRequest as dL, UpdateEndpointDetailRequest as dM, EndpointLog as dN, GetAllEndpointLogRequest as dO, GetEndpointLogRequest as dP, AssistantTool as dQ, AssistantToolLog as dR, CreateAssistantToolRequest as dS, UpdateAssistantToolRequest as dT, GetAssistantToolRequest as dU, DeleteAssistantToolRequest as dV, GetAllAssistantToolRequest as dW, DeploymentAudioProvider as dX, AssistantPhoneDeployment as dY, AssistantWhatsappDeployment as dZ, AuditLoggingService as d_, AssistantConversation as da, GetAllAssistantConversationRequest as db, GetAllConversationMessageRequest as dc, AssistantConversationRecording as dd, AssistantDefinition as de, AssistantConversationTelephonyEvent as df, AssistantService as dg, AssistantServiceClient as dh, TalkService as di, TalkServiceClient as dj, AssistantWebhook as dk, AssistantWebhookLog as dl, CreateAssistantWebhookRequest as dm, UpdateAssistantWebhookRequest as dn, GetAssistantWebhookRequest as dp, DeleteAssistantWebhookRequest as dq, GetAllAssistantWebhookRequest as dr, GetAllAssistantWebhookLogRequest as ds, GetAssistantWebhookLogRequest as dt, GeneralConnectRequest as du, GetConnectorFilesRequest as dv, DocumentService as dw, DocumentServiceClient as dx, IndexKnowledgeDocumentRequest as dy, CreateEndpointRequest as dz, InvokeRequest as e, GetAllKnowledgeRequest as e0, GetKnowledgeRequest as e1, CreateKnowledgeTagRequest as e2, KnowledgeDocument as e3, GetAllKnowledgeDocumentRequest as e4, CreateKnowledgeDocumentRequest as e5, KnowledgeDocumentSegment as e6, GetAllKnowledgeDocumentSegmentRequest as e7, UpdateKnowledgeDetailRequest as e8, UpdateKnowledgeDocumentSegmentRequest as e9, ConversationConfiguration as eA, ConversationInterruption as eB, ConversationAssistantMessage$1 as eC, ConversationUserMessage$1 as eD, ConversationToolCall as eE, ConversationToolResult as eF, ConversationDirective as eG, ConversationMetric as eH, ConversationEvent as eI, ConversationError as eJ, WEB_PLUGIN_SOURCE as eK, DEBUGGER_SOURCE as eL, SDK_SOURCE as eM, PHONE_CALL_SOURCE as eN, WHATSAPP_SOURCE as eO, WEBRTC_SOURCE as eP, getRapidaSourceValue as eQ, fromStr as eR, DeleteKnowledgeDocumentSegmentRequest as ea, KnowledgeLog as eb, CreateAssistantTagRequest as ec, DeleteAssistantRequest as ed, GetAllAssistantRequest as ee, GetAllAssistantMessageRequest as ef, GetAllMessageRequest as eg, UpdateAssistantDetailRequest as eh, AssistantTelemetryProvider as ei, GetAssistantTelemetryProviderRequest as ej, GetAllAssistantTelemetryProviderRequest as ek, CreateAssistantTelemetryProviderRequest as el, UpdateAssistantTelemetryProviderRequest as em, DeleteAssistantTelemetryProviderRequest as en, AuthenticationService as eo, OrganizationService as ep, ProjectService as eq, AuthenticationServiceClient as er, OrganizationServiceClient as es, ProjectServiceClient as et, DeviceSelectorComponent as eu, NotificationSetting as ev, AssistantProviderModel as ew, AssistantProviderAgentkit as ex, AssistantProviderWebsocket as ey, GetAllAssistantProviderRequest as ez, InvokeResponse as f, AuthenticateResponse as g, VerifyTokenResponse as h, ForgotPasswordResponse as i, CreatePasswordResponse as j, ChangePasswordRequest as k, ChangePasswordResponse as l, UpdateUserResponse as m, GetAllUserResponse as n, GeneralConnectResponse as o, Criteria as p, GetConnectorFilesResponse as q, CreateOrganizationResponse as r, UpdateOrganizationResponse as s, GetOrganizationResponse as t, GetAllAssistantResponse as u, UpdateAssistantVersionRequest as v, GetAssistantResponse as w, GetAssistantRequest as x, CreateAssistantRequest as y, GetAllAssistantMessageResponse as z };
