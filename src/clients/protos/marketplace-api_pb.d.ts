// package: marketplace_api
// file: marketplace-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as common_pb from "./common_pb";

export class GetAllDeploymentRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllDeploymentRequest): GetAllDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllDeploymentRequest;
  static deserializeBinaryFromReader(message: GetAllDeploymentRequest, reader: jspb.BinaryReader): GetAllDeploymentRequest;
}

export namespace GetAllDeploymentRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class SearchableDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getType(): string;
  setType(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  clearTagList(): void;
  getTagList(): Array<string>;
  setTagList(value: Array<string>): void;
  addTag(value: string, index?: number): string;

  getLanguage(): string;
  setLanguage(value: string): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): common_pb.Organization | undefined;
  setOrganization(value?: common_pb.Organization): void;

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

  hasAppappearance(): boolean;
  clearAppappearance(): void;
  getAppappearance(): google_protobuf_struct_pb.Struct | undefined;
  setAppappearance(value?: google_protobuf_struct_pb.Struct): void;

  hasWebappearance(): boolean;
  clearWebappearance(): void;
  getWebappearance(): google_protobuf_struct_pb.Struct | undefined;
  setWebappearance(value?: google_protobuf_struct_pb.Struct): void;

  getModelproviderid(): string;
  setModelproviderid(value: string): void;

  getModelprovidername(): string;
  setModelprovidername(value: string): void;

  clearModeloptionsList(): void;
  getModeloptionsList(): Array<common_pb.Metadata>;
  setModeloptionsList(value: Array<common_pb.Metadata>): void;
  addModeloptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchableDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: SearchableDeployment): SearchableDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchableDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchableDeployment;
  static deserializeBinaryFromReader(message: SearchableDeployment, reader: jspb.BinaryReader): SearchableDeployment;
}

export namespace SearchableDeployment {
  export type AsObject = {
    id: string,
    status: string,
    visibility: string,
    type: string,
    projectid: string,
    organizationid: string,
    tagList: Array<string>,
    language: string,
    organization?: common_pb.Organization.AsObject,
    name: string,
    description: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    appappearance?: google_protobuf_struct_pb.Struct.AsObject,
    webappearance?: google_protobuf_struct_pb.Struct.AsObject,
    modelproviderid: string,
    modelprovidername: string,
    modeloptionsList: Array<common_pb.Metadata.AsObject>,
  }
}

export class GetAllDeploymentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<SearchableDeployment>;
  setDataList(value: Array<SearchableDeployment>): void;
  addData(value?: SearchableDeployment, index?: number): SearchableDeployment;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllDeploymentResponse): GetAllDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllDeploymentResponse;
  static deserializeBinaryFromReader(message: GetAllDeploymentResponse, reader: jspb.BinaryReader): GetAllDeploymentResponse;
}

export namespace GetAllDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<SearchableDeployment.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

