// package: observability_api
// file: observability-api.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetAllTelemetryRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetAllTelemetryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTelemetryRequest): GetAllTelemetryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllTelemetryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTelemetryRequest;
  static deserializeBinaryFromReader(message: GetAllTelemetryRequest, reader: jspb.BinaryReader): GetAllTelemetryRequest;
}

export namespace GetAllTelemetryRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    order?: common_pb.Ordering.AsObject,
  }
}

export class ObservabilityLogRecord extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKind(): ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap];
  setKind(value: ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap]): void;

  getLevel(): string;
  setLevel(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getScopeattributesMap(): jspb.Map<string, string>;
  clearScopeattributesMap(): void;
  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  hasOccurredat(): boolean;
  clearOccurredat(): void;
  getOccurredat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContextMap(): jspb.Map<string, string>;
  clearContextMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservabilityLogRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ObservabilityLogRecord): ObservabilityLogRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservabilityLogRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservabilityLogRecord;
  static deserializeBinaryFromReader(message: ObservabilityLogRecord, reader: jspb.BinaryReader): ObservabilityLogRecord;
}

export namespace ObservabilityLogRecord {
  export type AsObject = {
    id: string,
    kind: ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap],
    level: string,
    message: string,
    projectid: string,
    organizationid: string,
    scope: string,
    scopeattributesMap: Array<[string, string]>,
    attributesMap: Array<[string, string]>,
    occurredat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contextMap: Array<[string, string]>,
  }
}

export class ObservabilityEventRecord extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKind(): ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap];
  setKind(value: ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap]): void;

  getEvent(): string;
  setEvent(value: string): void;

  getComponent(): string;
  setComponent(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getScopeattributesMap(): jspb.Map<string, string>;
  clearScopeattributesMap(): void;
  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  hasOccurredat(): boolean;
  clearOccurredat(): void;
  getOccurredat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContextMap(): jspb.Map<string, string>;
  clearContextMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservabilityEventRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ObservabilityEventRecord): ObservabilityEventRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservabilityEventRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservabilityEventRecord;
  static deserializeBinaryFromReader(message: ObservabilityEventRecord, reader: jspb.BinaryReader): ObservabilityEventRecord;
}

export namespace ObservabilityEventRecord {
  export type AsObject = {
    id: string,
    kind: ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap],
    event: string,
    component: string,
    projectid: string,
    organizationid: string,
    scope: string,
    scopeattributesMap: Array<[string, string]>,
    attributesMap: Array<[string, string]>,
    occurredat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contextMap: Array<[string, string]>,
  }
}

export class ObservabilityMetricRecord extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKind(): ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap];
  setKind(value: ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap]): void;

  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getScopeattributesMap(): jspb.Map<string, string>;
  clearScopeattributesMap(): void;
  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  hasOccurredat(): boolean;
  clearOccurredat(): void;
  getOccurredat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContextMap(): jspb.Map<string, string>;
  clearContextMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservabilityMetricRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ObservabilityMetricRecord): ObservabilityMetricRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservabilityMetricRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservabilityMetricRecord;
  static deserializeBinaryFromReader(message: ObservabilityMetricRecord, reader: jspb.BinaryReader): ObservabilityMetricRecord;
}

export namespace ObservabilityMetricRecord {
  export type AsObject = {
    id: string,
    kind: ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap],
    name: string,
    value: string,
    description: string,
    projectid: string,
    organizationid: string,
    scope: string,
    scopeattributesMap: Array<[string, string]>,
    attributesMap: Array<[string, string]>,
    occurredat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contextMap: Array<[string, string]>,
  }
}

export class ObservabilityRecord extends jspb.Message {
  hasLog(): boolean;
  clearLog(): void;
  getLog(): ObservabilityLogRecord | undefined;
  setLog(value?: ObservabilityLogRecord): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): ObservabilityEventRecord | undefined;
  setEvent(value?: ObservabilityEventRecord): void;

  hasMetric(): boolean;
  clearMetric(): void;
  getMetric(): ObservabilityMetricRecord | undefined;
  setMetric(value?: ObservabilityMetricRecord): void;

  getRecordCase(): ObservabilityRecord.RecordCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservabilityRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ObservabilityRecord): ObservabilityRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservabilityRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservabilityRecord;
  static deserializeBinaryFromReader(message: ObservabilityRecord, reader: jspb.BinaryReader): ObservabilityRecord;
}

export namespace ObservabilityRecord {
  export type AsObject = {
    log?: ObservabilityLogRecord.AsObject,
    event?: ObservabilityEventRecord.AsObject,
    metric?: ObservabilityMetricRecord.AsObject,
  }

  export enum RecordCase {
    RECORD_NOT_SET = 0,
    LOG = 1,
    EVENT = 2,
    METRIC = 3,
  }
}

export class GetAllTelemetryResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<ObservabilityRecord>;
  setDataList(value: Array<ObservabilityRecord>): void;
  addData(value?: ObservabilityRecord, index?: number): ObservabilityRecord;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllTelemetryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTelemetryResponse): GetAllTelemetryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllTelemetryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTelemetryResponse;
  static deserializeBinaryFromReader(message: GetAllTelemetryResponse, reader: jspb.BinaryReader): GetAllTelemetryResponse;
}

export namespace GetAllTelemetryResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<ObservabilityRecord.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export interface ObservabilityRecordKindMap {
  OBSERVABILITY_RECORD_KIND_UNSPECIFIED: 0;
  OBSERVABILITY_RECORD_KIND_LOG: 1;
  OBSERVABILITY_RECORD_KIND_EVENT: 2;
  OBSERVABILITY_RECORD_KIND_METRIC: 3;
}

export const ObservabilityRecordKind: ObservabilityRecordKindMap;

