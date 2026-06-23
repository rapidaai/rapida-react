// package: assistant_api
// file: assistant-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as assistant_deployment_pb from "./assistant-deployment_pb";
import * as assistant_tool_pb from "./assistant-tool_pb";
import * as assistant_http_log_pb from "./assistant-http-log_pb";
import * as assistant_knowledge_pb from "./assistant-knowledge_pb";
import * as assistant_provider_pb from "./assistant-provider_pb";

export class Assistant extends jspb.Message {
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
  getAssistantprovidermodel(): assistant_provider_pb.AssistantProviderModel | undefined;
  setAssistantprovidermodel(value?: assistant_provider_pb.AssistantProviderModel): void;

  hasAssistantprovideragentkit(): boolean;
  clearAssistantprovideragentkit(): void;
  getAssistantprovideragentkit(): assistant_provider_pb.AssistantProviderAgentkit | undefined;
  setAssistantprovideragentkit(value?: assistant_provider_pb.AssistantProviderAgentkit): void;

  hasAssistantproviderwebsocket(): boolean;
  clearAssistantproviderwebsocket(): void;
  getAssistantproviderwebsocket(): assistant_provider_pb.AssistantProviderWebsocket | undefined;
  setAssistantproviderwebsocket(value?: assistant_provider_pb.AssistantProviderWebsocket): void;

  hasAssistanttag(): boolean;
  clearAssistanttag(): void;
  getAssistanttag(): common_pb.Tag | undefined;
  setAssistanttag(value?: common_pb.Tag): void;

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

  hasDebuggerdeployment(): boolean;
  clearDebuggerdeployment(): void;
  getDebuggerdeployment(): assistant_deployment_pb.AssistantDebuggerDeployment | undefined;
  setDebuggerdeployment(value?: assistant_deployment_pb.AssistantDebuggerDeployment): void;

  hasPhonedeployment(): boolean;
  clearPhonedeployment(): void;
  getPhonedeployment(): assistant_deployment_pb.AssistantPhoneDeployment | undefined;
  setPhonedeployment(value?: assistant_deployment_pb.AssistantPhoneDeployment): void;

  hasWhatsappdeployment(): boolean;
  clearWhatsappdeployment(): void;
  getWhatsappdeployment(): assistant_deployment_pb.AssistantWhatsappDeployment | undefined;
  setWhatsappdeployment(value?: assistant_deployment_pb.AssistantWhatsappDeployment): void;

  hasWebplugindeployment(): boolean;
  clearWebplugindeployment(): void;
  getWebplugindeployment(): assistant_deployment_pb.AssistantWebpluginDeployment | undefined;
  setWebplugindeployment(value?: assistant_deployment_pb.AssistantWebpluginDeployment): void;

  hasApideployment(): boolean;
  clearApideployment(): void;
  getApideployment(): assistant_deployment_pb.AssistantApiDeployment | undefined;
  setApideployment(value?: assistant_deployment_pb.AssistantApiDeployment): void;

  clearAssistantconversationsList(): void;
  getAssistantconversationsList(): Array<common_pb.AssistantConversation>;
  setAssistantconversationsList(value: Array<common_pb.AssistantConversation>): void;
  addAssistantconversations(value?: common_pb.AssistantConversation, index?: number): common_pb.AssistantConversation;

  clearAssistanttoolsList(): void;
  getAssistanttoolsList(): Array<assistant_tool_pb.AssistantTool>;
  setAssistanttoolsList(value: Array<assistant_tool_pb.AssistantTool>): void;
  addAssistanttools(value?: assistant_tool_pb.AssistantTool, index?: number): assistant_tool_pb.AssistantTool;

  clearAssistantconfigurationsList(): void;
  getAssistantconfigurationsList(): Array<AssistantConfiguration>;
  setAssistantconfigurationsList(value: Array<AssistantConfiguration>): void;
  addAssistantconfigurations(value?: AssistantConfiguration, index?: number): AssistantConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Assistant.AsObject;
  static toObject(includeInstance: boolean, msg: Assistant): Assistant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Assistant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Assistant;
  static deserializeBinaryFromReader(message: Assistant, reader: jspb.BinaryReader): Assistant;
}

export namespace Assistant {
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
    assistantprovidermodel?: assistant_provider_pb.AssistantProviderModel.AsObject,
    assistantprovideragentkit?: assistant_provider_pb.AssistantProviderAgentkit.AsObject,
    assistantproviderwebsocket?: assistant_provider_pb.AssistantProviderWebsocket.AsObject,
    assistanttag?: common_pb.Tag.AsObject,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    debuggerdeployment?: assistant_deployment_pb.AssistantDebuggerDeployment.AsObject,
    phonedeployment?: assistant_deployment_pb.AssistantPhoneDeployment.AsObject,
    whatsappdeployment?: assistant_deployment_pb.AssistantWhatsappDeployment.AsObject,
    webplugindeployment?: assistant_deployment_pb.AssistantWebpluginDeployment.AsObject,
    apideployment?: assistant_deployment_pb.AssistantApiDeployment.AsObject,
    assistantconversationsList: Array<common_pb.AssistantConversation.AsObject>,
    assistanttoolsList: Array<assistant_tool_pb.AssistantTool.AsObject>,
    assistantconfigurationsList: Array<AssistantConfiguration.AsObject>,
  }
}

export class CreateAssistantRequest extends jspb.Message {
  hasAssistantprovider(): boolean;
  clearAssistantprovider(): void;
  getAssistantprovider(): assistant_provider_pb.CreateAssistantProviderRequest | undefined;
  setAssistantprovider(value?: assistant_provider_pb.CreateAssistantProviderRequest): void;

  clearAssistantknowledgesList(): void;
  getAssistantknowledgesList(): Array<assistant_knowledge_pb.CreateAssistantKnowledgeRequest>;
  setAssistantknowledgesList(value: Array<assistant_knowledge_pb.CreateAssistantKnowledgeRequest>): void;
  addAssistantknowledges(value?: assistant_knowledge_pb.CreateAssistantKnowledgeRequest, index?: number): assistant_knowledge_pb.CreateAssistantKnowledgeRequest;

  clearAssistanttoolsList(): void;
  getAssistanttoolsList(): Array<assistant_tool_pb.CreateAssistantToolRequest>;
  setAssistanttoolsList(value: Array<assistant_tool_pb.CreateAssistantToolRequest>): void;
  addAssistanttools(value?: assistant_tool_pb.CreateAssistantToolRequest, index?: number): assistant_tool_pb.CreateAssistantToolRequest;

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

export namespace CreateAssistantRequest {
  export type AsObject = {
    assistantprovider?: assistant_provider_pb.CreateAssistantProviderRequest.AsObject,
    assistantknowledgesList: Array<assistant_knowledge_pb.CreateAssistantKnowledgeRequest.AsObject>,
    assistanttoolsList: Array<assistant_tool_pb.CreateAssistantToolRequest.AsObject>,
    description: string,
    visibility: string,
    language: string,
    source: string,
    sourceidentifier: string,
    tagsList: Array<string>,
    name: string,
  }
}

export class CreateAssistantTagRequest extends jspb.Message {
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

export namespace CreateAssistantTagRequest {
  export type AsObject = {
    assistantid: string,
    tagsList: Array<string>,
  }
}

export class GetAssistantRequest extends jspb.Message {
  hasAssistantdefinition(): boolean;
  clearAssistantdefinition(): void;
  getAssistantdefinition(): common_pb.AssistantDefinition | undefined;
  setAssistantdefinition(value?: common_pb.AssistantDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantRequest): GetAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantRequest;
  static deserializeBinaryFromReader(message: GetAssistantRequest, reader: jspb.BinaryReader): GetAssistantRequest;
}

export namespace GetAssistantRequest {
  export type AsObject = {
    assistantdefinition?: common_pb.AssistantDefinition.AsObject,
  }
}

export class DeleteAssistantRequest extends jspb.Message {
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

export namespace DeleteAssistantRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetAssistantResponse extends jspb.Message {
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
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantResponse): GetAssistantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantResponse;
  static deserializeBinaryFromReader(message: GetAssistantResponse, reader: jspb.BinaryReader): GetAssistantResponse;
}

export namespace GetAssistantResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Assistant.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantRequest): GetAllAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantRequest, reader: jspb.BinaryReader): GetAllAssistantRequest;
}

export namespace GetAllAssistantRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class AssistantConfiguration extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getConfigurationtype(): string;
  setConfigurationtype(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConfiguration): AssistantConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConfiguration;
  static deserializeBinaryFromReader(message: AssistantConfiguration, reader: jspb.BinaryReader): AssistantConfiguration;
}

export namespace AssistantConfiguration {
  export type AsObject = {
    id: string,
    assistantid: string,
    projectid: string,
    organizationid: string,
    configurationtype: string,
    provider: string,
    enabled: boolean,
    optionsList: Array<common_pb.Metadata.AsObject>,
    status: string,
    createdby: string,
    updatedby: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAssistantConfigurationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantConfigurationRequest): GetAssistantConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantConfigurationRequest;
  static deserializeBinaryFromReader(message: GetAssistantConfigurationRequest, reader: jspb.BinaryReader): GetAssistantConfigurationRequest;
}

export namespace GetAssistantConfigurationRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class GetAssistantConfigurationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantConfiguration | undefined;
  setData(value?: AssistantConfiguration): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantConfigurationResponse): GetAssistantConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantConfigurationResponse;
  static deserializeBinaryFromReader(message: GetAssistantConfigurationResponse, reader: jspb.BinaryReader): GetAssistantConfigurationResponse;
}

export namespace GetAssistantConfigurationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantConfiguration.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantConfigurationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getConfigurationtype(): string;
  setConfigurationtype(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantConfigurationRequest): GetAllAssistantConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantConfigurationRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantConfigurationRequest, reader: jspb.BinaryReader): GetAllAssistantConfigurationRequest;
}

export namespace GetAllAssistantConfigurationRequest {
  export type AsObject = {
    assistantid: string,
    configurationtype: string,
    provider: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantConfigurationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConfiguration>;
  setDataList(value: Array<AssistantConfiguration>): void;
  addData(value?: AssistantConfiguration, index?: number): AssistantConfiguration;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantConfigurationResponse): GetAllAssistantConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantConfigurationResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantConfigurationResponse, reader: jspb.BinaryReader): GetAllAssistantConfigurationResponse;
}

export namespace GetAllAssistantConfigurationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConfiguration.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class CreateAssistantConfigurationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getConfigurationtype(): string;
  setConfigurationtype(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantConfigurationRequest): CreateAssistantConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateAssistantConfigurationRequest, reader: jspb.BinaryReader): CreateAssistantConfigurationRequest;
}

export namespace CreateAssistantConfigurationRequest {
  export type AsObject = {
    assistantid: string,
    configurationtype: string,
    provider: string,
    enabled: boolean,
    optionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class UpdateAssistantConfigurationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getConfigurationtype(): string;
  setConfigurationtype(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantConfigurationRequest): UpdateAssistantConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantConfigurationRequest, reader: jspb.BinaryReader): UpdateAssistantConfigurationRequest;
}

export namespace UpdateAssistantConfigurationRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
    configurationtype: string,
    provider: string,
    enabled: boolean,
    optionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class DeleteAssistantConfigurationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAssistantConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAssistantConfigurationRequest): DeleteAssistantConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAssistantConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAssistantConfigurationRequest;
  static deserializeBinaryFromReader(message: DeleteAssistantConfigurationRequest, reader: jspb.BinaryReader): DeleteAssistantConfigurationRequest;
}

export namespace DeleteAssistantConfigurationRequest {
  export type AsObject = {
    id: string,
    assistantid: string,
  }
}

export class GetAllAssistantResponse extends jspb.Message {
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
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantResponse): GetAllAssistantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantResponse, reader: jspb.BinaryReader): GetAllAssistantResponse;
}

export namespace GetAllAssistantResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Assistant.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllAssistantMessageRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): common_pb.Ordering | undefined;
  setOrder(value?: common_pb.Ordering): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<common_pb.FieldSelector>;
  setSelectorsList(value: Array<common_pb.FieldSelector>): void;
  addSelectors(value?: common_pb.FieldSelector, index?: number): common_pb.FieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantMessageRequest): GetAllAssistantMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantMessageRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantMessageRequest, reader: jspb.BinaryReader): GetAllAssistantMessageRequest;
}

export namespace GetAllAssistantMessageRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    assistantid: string,
    order?: common_pb.Ordering.AsObject,
    selectorsList: Array<common_pb.FieldSelector.AsObject>,
  }
}

export class GetAllAssistantMessageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.AssistantConversationMessage>;
  setDataList(value: Array<common_pb.AssistantConversationMessage>): void;
  addData(value?: common_pb.AssistantConversationMessage, index?: number): common_pb.AssistantConversationMessage;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantMessageResponse): GetAllAssistantMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantMessageResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantMessageResponse, reader: jspb.BinaryReader): GetAllAssistantMessageResponse;
}

export namespace GetAllAssistantMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.AssistantConversationMessage.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllMessageRequest extends jspb.Message {
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

  clearSelectorsList(): void;
  getSelectorsList(): Array<common_pb.FieldSelector>;
  setSelectorsList(value: Array<common_pb.FieldSelector>): void;
  addSelectors(value?: common_pb.FieldSelector, index?: number): common_pb.FieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessageRequest): GetAllMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessageRequest;
  static deserializeBinaryFromReader(message: GetAllMessageRequest, reader: jspb.BinaryReader): GetAllMessageRequest;
}

export namespace GetAllMessageRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    order?: common_pb.Ordering.AsObject,
    selectorsList: Array<common_pb.FieldSelector.AsObject>,
  }
}

export class GetAllMessageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.AssistantConversationMessage>;
  setDataList(value: Array<common_pb.AssistantConversationMessage>): void;
  addData(value?: common_pb.AssistantConversationMessage, index?: number): common_pb.AssistantConversationMessage;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessageResponse): GetAllMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessageResponse;
  static deserializeBinaryFromReader(message: GetAllMessageResponse, reader: jspb.BinaryReader): GetAllMessageResponse;
}

export namespace GetAllMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.AssistantConversationMessage.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class UpdateAssistantDetailRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantDetailRequest): UpdateAssistantDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantDetailRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantDetailRequest, reader: jspb.BinaryReader): UpdateAssistantDetailRequest;
}

export namespace UpdateAssistantDetailRequest {
  export type AsObject = {
    assistantid: string,
    name: string,
    description: string,
  }
}

export class GetAssistantConversationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getId(): string;
  setId(value: string): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<common_pb.FieldSelector>;
  setSelectorsList(value: Array<common_pb.FieldSelector>): void;
  addSelectors(value?: common_pb.FieldSelector, index?: number): common_pb.FieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantConversationRequest): GetAssistantConversationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantConversationRequest;
  static deserializeBinaryFromReader(message: GetAssistantConversationRequest, reader: jspb.BinaryReader): GetAssistantConversationRequest;
}

export namespace GetAssistantConversationRequest {
  export type AsObject = {
    assistantid: string,
    id: string,
    selectorsList: Array<common_pb.FieldSelector.AsObject>,
  }
}

export class GetAssistantConversationResponse extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetAssistantConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantConversationResponse): GetAssistantConversationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantConversationResponse;
  static deserializeBinaryFromReader(message: GetAssistantConversationResponse, reader: jspb.BinaryReader): GetAssistantConversationResponse;
}

export namespace GetAssistantConversationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: common_pb.AssistantConversation.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

