// package: 
// file: common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Criteria extends jspb.Message {
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

export namespace Criteria {
  export type AsObject = {
    key: string,
    value: string,
    logic: string,
  }
}

export class Error extends jspb.Message {
  getErrorcode(): string;
  setErrorcode(value: string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getHumanmessage(): string;
  setHumanmessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    errorcode: string,
    errormessage: string,
    humanmessage: string,
  }
}

export class Paginate extends jspb.Message {
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

export namespace Paginate {
  export type AsObject = {
    page: number,
    pagesize: number,
  }
}

export class Paginated extends jspb.Message {
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

export namespace Paginated {
  export type AsObject = {
    currentpage: number,
    totalitem: number,
  }
}

export class Ordering extends jspb.Message {
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

export namespace Ordering {
  export type AsObject = {
    column: string,
    order: string,
  }
}

export class User extends jspb.Message {
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

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    role: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

export class BaseResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  hasError(): boolean;
  clearError(): void;
  getError(): Error | undefined;
  setError(value?: Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BaseResponse): BaseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseResponse;
  static deserializeBinaryFromReader(message: BaseResponse, reader: jspb.BinaryReader): BaseResponse;
}

export namespace BaseResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataMap: Array<[string, string]>,
    error?: Error.AsObject,
  }
}

export class Metadata extends jspb.Message {
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

export namespace Metadata {
  export type AsObject = {
    id: string,
    key: string,
    value: string,
  }
}

export class Variable extends jspb.Message {
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

  hasIn(): boolean;
  clearIn(): void;
  getIn(): string;
  setIn(value: string): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    id: string,
    name: string,
    type: string,
    defaultvalue: string,
    pb_in: string,
    required: boolean,
    label: string,
  }
}

export class ProviderModelParameter extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProvidermodelvariableid(): string;
  setProvidermodelvariableid(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderModelParameter.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderModelParameter): ProviderModelParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProviderModelParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderModelParameter;
  static deserializeBinaryFromReader(message: ProviderModelParameter, reader: jspb.BinaryReader): ProviderModelParameter;
}

export namespace ProviderModelParameter {
  export type AsObject = {
    id: string,
    providermodelvariableid: string,
    value: string,
  }
}

export class Provider extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getHumanname(): string;
  setHumanname(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  clearConnectconfigurationList(): void;
  getConnectconfigurationList(): Array<Variable>;
  setConnectconfigurationList(value: Array<Variable>): void;
  addConnectconfiguration(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Provider.AsObject;
  static toObject(includeInstance: boolean, msg: Provider): Provider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Provider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Provider;
  static deserializeBinaryFromReader(message: Provider, reader: jspb.BinaryReader): Provider;
}

export namespace Provider {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    humanname: string,
    image: string,
    website: string,
    status: string,
    connectconfigurationList: Array<Variable.AsObject>,
  }
}

export class ProviderModelVariable extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProvidermodelid(): string;
  setProvidermodelid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  getType(): string;
  setType(value: string): void;

  getPlace(): string;
  setPlace(value: string): void;

  clearMetadatasList(): void;
  getMetadatasList(): Array<Metadata>;
  setMetadatasList(value: Array<Metadata>): void;
  addMetadatas(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderModelVariable.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderModelVariable): ProviderModelVariable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProviderModelVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderModelVariable;
  static deserializeBinaryFromReader(message: ProviderModelVariable, reader: jspb.BinaryReader): ProviderModelVariable;
}

export namespace ProviderModelVariable {
  export type AsObject = {
    id: string,
    providermodelid: string,
    key: string,
    name: string,
    description: string,
    defaultvalue: string,
    type: string,
    place: string,
    metadatasList: Array<Metadata.AsObject>,
  }
}

export class ProviderModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getHumanname(): string;
  setHumanname(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): Provider | undefined;
  setProvider(value?: Provider): void;

  clearParametersList(): void;
  getParametersList(): Array<ProviderModelVariable>;
  setParametersList(value: Array<ProviderModelVariable>): void;
  addParameters(value?: ProviderModelVariable, index?: number): ProviderModelVariable;

  clearMetadatasList(): void;
  getMetadatasList(): Array<Metadata>;
  setMetadatasList(value: Array<Metadata>): void;
  addMetadatas(value?: Metadata, index?: number): Metadata;

  getProviderid(): string;
  setProviderid(value: string): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderModel.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderModel): ProviderModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProviderModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderModel;
  static deserializeBinaryFromReader(message: ProviderModel, reader: jspb.BinaryReader): ProviderModel;
}

export namespace ProviderModel {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    humanname: string,
    category: string,
    status: string,
    owner: string,
    provider?: Provider.AsObject,
    parametersList: Array<ProviderModelVariable.AsObject>,
    metadatasList: Array<Metadata.AsObject>,
    providerid: string,
    endpoint: string,
  }
}

export class Tag extends jspb.Message {
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

export namespace Tag {
  export type AsObject = {
    id: string,
    tagList: Array<string>,
  }
}

export class Organization extends jspb.Message {
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

export namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    industry: string,
    contact: string,
    size: string,
  }
}

export class Metric extends jspb.Message {
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

export namespace Metric {
  export type AsObject = {
    name: string,
    value: string,
    description: string,
  }
}

export class Content extends jspb.Message {
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
  toObject(includeInstance?: boolean): Content.AsObject;
  static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Content;
  static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
}

export namespace Content {
  export type AsObject = {
    name: string,
    contenttype: string,
    contentformat: string,
    content: Uint8Array | string,
    meta?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Message extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  clearContentsList(): void;
  getContentsList(): Array<Content>;
  setContentsList(value: Array<Content>): void;
  addContents(value?: Content, index?: number): Content;

  clearToolcallsList(): void;
  getToolcallsList(): Array<ToolCall>;
  setToolcallsList(value: Array<ToolCall>): void;
  addToolcalls(value?: ToolCall, index?: number): ToolCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    role: string,
    contentsList: Array<Content.AsObject>,
    toolcallsList: Array<ToolCall.AsObject>,
  }
}

export class Event extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): google_protobuf_struct_pb.Struct | undefined;
  setMeta(value?: google_protobuf_struct_pb.Struct): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    name: string,
    meta?: google_protobuf_struct_pb.Struct.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ToolCall extends jspb.Message {
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

export namespace ToolCall {
  export type AsObject = {
    id: string,
    type: string,
    pb_function?: FunctionCall.AsObject,
  }
}

export class FunctionCall extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getArguments(): string;
  setArguments(value: string): void;

  hasArgs(): boolean;
  clearArgs(): void;
  getArgs(): google_protobuf_struct_pb.Struct | undefined;
  setArgs(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionCall.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionCall;
  static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
}

export namespace FunctionCall {
  export type AsObject = {
    name: string,
    arguments: string,
    args?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Knowledge extends jspb.Message {
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

  getEmbeddingprovidermodelid(): string;
  setEmbeddingprovidermodelid(value: string): void;

  hasEmbeddingprovidermodel(): boolean;
  clearEmbeddingprovidermodel(): void;
  getEmbeddingprovidermodel(): ProviderModel | undefined;
  setEmbeddingprovidermodel(value?: ProviderModel): void;

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

  getEmbeddingproviderid(): string;
  setEmbeddingproviderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Knowledge.AsObject;
  static toObject(includeInstance: boolean, msg: Knowledge): Knowledge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Knowledge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Knowledge;
  static deserializeBinaryFromReader(message: Knowledge, reader: jspb.BinaryReader): Knowledge;
}

export namespace Knowledge {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    visibility: string,
    language: string,
    embeddingprovidermodelid: string,
    embeddingprovidermodel?: ProviderModel.AsObject,
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
    embeddingproviderid: string,
  }
}

export class AgentPromptTemplate extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getPrompt(): string;
  setPrompt(value: string): void;

  clearPromptvariablesList(): void;
  getPromptvariablesList(): Array<Variable>;
  setPromptvariablesList(value: Array<Variable>): void;
  addPromptvariables(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPromptTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPromptTemplate): AgentPromptTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPromptTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPromptTemplate;
  static deserializeBinaryFromReader(message: AgentPromptTemplate, reader: jspb.BinaryReader): AgentPromptTemplate;
}

export namespace AgentPromptTemplate {
  export type AsObject = {
    type: string,
    prompt: string,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

export class TextPrompt extends jspb.Message {
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

export namespace TextPrompt {
  export type AsObject = {
    role: string,
    content: string,
  }
}

export class FilePrompt extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAccepts(): string;
  setAccepts(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilePrompt.AsObject;
  static toObject(includeInstance: boolean, msg: FilePrompt): FilePrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilePrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilePrompt;
  static deserializeBinaryFromReader(message: FilePrompt, reader: jspb.BinaryReader): FilePrompt;
}

export namespace FilePrompt {
  export type AsObject = {
    name: string,
    accepts: string,
  }
}

export class TextChatCompletePrompt extends jspb.Message {
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

export namespace TextChatCompletePrompt {
  export type AsObject = {
    promptList: Array<TextPrompt.AsObject>,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

export class TextCompletePrompt extends jspb.Message {
  hasPrompt(): boolean;
  clearPrompt(): void;
  getPrompt(): TextPrompt | undefined;
  setPrompt(value?: TextPrompt): void;

  clearPromptvariablesList(): void;
  getPromptvariablesList(): Array<Variable>;
  setPromptvariablesList(value: Array<Variable>): void;
  addPromptvariables(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextCompletePrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextCompletePrompt): TextCompletePrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextCompletePrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextCompletePrompt;
  static deserializeBinaryFromReader(message: TextCompletePrompt, reader: jspb.BinaryReader): TextCompletePrompt;
}

export namespace TextCompletePrompt {
  export type AsObject = {
    prompt?: TextPrompt.AsObject,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

export class TextToImagePrompt extends jspb.Message {
  hasPrompt(): boolean;
  clearPrompt(): void;
  getPrompt(): TextPrompt | undefined;
  setPrompt(value?: TextPrompt): void;

  clearPromptvariablesList(): void;
  getPromptvariablesList(): Array<Variable>;
  setPromptvariablesList(value: Array<Variable>): void;
  addPromptvariables(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextToImagePrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextToImagePrompt): TextToImagePrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextToImagePrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextToImagePrompt;
  static deserializeBinaryFromReader(message: TextToImagePrompt, reader: jspb.BinaryReader): TextToImagePrompt;
}

export namespace TextToImagePrompt {
  export type AsObject = {
    prompt?: TextPrompt.AsObject,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

export class TextToSpeechPrompt extends jspb.Message {
  hasPrompt(): boolean;
  clearPrompt(): void;
  getPrompt(): TextPrompt | undefined;
  setPrompt(value?: TextPrompt): void;

  clearPromptvariablesList(): void;
  getPromptvariablesList(): Array<Variable>;
  setPromptvariablesList(value: Array<Variable>): void;
  addPromptvariables(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextToSpeechPrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextToSpeechPrompt): TextToSpeechPrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextToSpeechPrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextToSpeechPrompt;
  static deserializeBinaryFromReader(message: TextToSpeechPrompt, reader: jspb.BinaryReader): TextToSpeechPrompt;
}

export namespace TextToSpeechPrompt {
  export type AsObject = {
    prompt?: TextPrompt.AsObject,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

export class SpeechToTextPrompt extends jspb.Message {
  hasPrompt(): boolean;
  clearPrompt(): void;
  getPrompt(): FilePrompt | undefined;
  setPrompt(value?: FilePrompt): void;

  clearPromptvariablesList(): void;
  getPromptvariablesList(): Array<Variable>;
  setPromptvariablesList(value: Array<Variable>): void;
  addPromptvariables(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechToTextPrompt.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechToTextPrompt): SpeechToTextPrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechToTextPrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechToTextPrompt;
  static deserializeBinaryFromReader(message: SpeechToTextPrompt, reader: jspb.BinaryReader): SpeechToTextPrompt;
}

export namespace SpeechToTextPrompt {
  export type AsObject = {
    prompt?: FilePrompt.AsObject,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

export class AssistantMessageStage extends jspb.Message {
  getStage(): string;
  setStage(value: string): void;

  getAdditionaldataMap(): jspb.Map<string, string>;
  clearAdditionaldataMap(): void;
  getTimetaken(): number;
  setTimetaken(value: number): void;

  getLifecycleid(): string;
  setLifecycleid(value: string): void;

  hasStarttimestamp(): boolean;
  clearStarttimestamp(): void;
  getStarttimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndtimestamp(): boolean;
  clearEndtimestamp(): void;
  getEndtimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndtimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessageStage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessageStage): AssistantMessageStage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessageStage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessageStage;
  static deserializeBinaryFromReader(message: AssistantMessageStage, reader: jspb.BinaryReader): AssistantMessageStage;
}

export namespace AssistantMessageStage {
  export type AsObject = {
    stage: string,
    additionaldataMap: Array<[string, string]>,
    timetaken: number,
    lifecycleid: string,
    starttimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endtimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantConversationMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): Message | undefined;
  setRequest(value?: Message): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): Message | undefined;
  setResponse(value?: Message): void;

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

  clearSuggestedquestionsList(): void;
  getSuggestedquestionsList(): Array<string>;
  setSuggestedquestionsList(value: Array<string>): void;
  addSuggestedquestions(value: string, index?: number): string;

  clearStagesList(): void;
  getStagesList(): Array<AssistantMessageStage>;
  setStagesList(value: Array<AssistantMessageStage>): void;
  addStages(value?: AssistantMessageStage, index?: number): AssistantMessageStage;

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

export namespace AssistantConversationMessage {
  export type AsObject = {
    id: string,
    messageid: string,
    assistantconversationid: string,
    request?: Message.AsObject,
    response?: Message.AsObject,
    source: string,
    metricsList: Array<Metric.AsObject>,
    status: string,
    createdby: string,
    updatedby: string,
    suggestedquestionsList: Array<string>,
    stagesList: Array<AssistantMessageStage.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantid: string,
    assistantprovidermodelid: string,
    metadataList: Array<Metadata.AsObject>,
  }
}

export class AssistantConversationContext extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getContext(): string;
  setContext(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationContext.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationContext): AssistantConversationContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationContext;
  static deserializeBinaryFromReader(message: AssistantConversationContext, reader: jspb.BinaryReader): AssistantConversationContext;
}

export namespace AssistantConversationContext {
  export type AsObject = {
    id: string,
    context: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AssistantConversation extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversation.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversation): AssistantConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversation;
  static deserializeBinaryFromReader(message: AssistantConversation, reader: jspb.BinaryReader): AssistantConversation;
}

export namespace AssistantConversation {
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
  }
}

export class GetAllAssistantConversationRequest extends jspb.Message {
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

export namespace GetAllAssistantConversationRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    source: SourceMap[keyof SourceMap],
  }
}

export class GetAllAssistantConversationResponse extends jspb.Message {
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
  getError(): Error | undefined;
  setError(value?: Error): void;

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

export namespace GetAllAssistantConversationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversation.AsObject>,
    error?: Error.AsObject,
    paginated?: Paginated.AsObject,
  }
}

export class GetAllConversationMessageRequest extends jspb.Message {
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

export namespace GetAllConversationMessageRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    order?: Ordering.AsObject,
    source: SourceMap[keyof SourceMap],
  }
}

export class GetAllConversationMessageResponse extends jspb.Message {
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
  getError(): Error | undefined;
  setError(value?: Error): void;

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

export namespace GetAllConversationMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversationMessage.AsObject>,
    error?: Error.AsObject,
    paginated?: Paginated.AsObject,
  }
}

export interface SourceMap {
  WEB_PLUGIN: 0;
  RAPIDA_APP: 1;
  PYTHON_SDK: 2;
  NODE_SDK: 3;
  GO_SDK: 4;
  TYPESCRIPT_SDK: 5;
  JAVA_SDK: 6;
  PHP_SDK: 7;
  RUST_SDK: 8;
}

export const Source: SourceMap;

