// package: dashboard_api
// file: dashboard-api.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetProjectDashboardRequest extends jspb.Message {
  hasFromdate(): boolean;
  clearFromdate(): void;
  getFromdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTodate(): boolean;
  clearTodate(): void;
  getTodate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTodate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAssistantlimit(): boolean;
  clearAssistantlimit(): void;
  getAssistantlimit(): number;
  setAssistantlimit(value: number): void;

  hasRecentfailurelimit(): boolean;
  clearRecentfailurelimit(): void;
  getRecentfailurelimit(): number;
  setRecentfailurelimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectDashboardRequest): GetProjectDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectDashboardRequest;
  static deserializeBinaryFromReader(message: GetProjectDashboardRequest, reader: jspb.BinaryReader): GetProjectDashboardRequest;
}

export namespace GetProjectDashboardRequest {
  export type AsObject = {
    fromdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    todate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantlimit: number,
    recentfailurelimit: number,
  }
}

export class GetProjectDashboardResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ProjectDashboard | undefined;
  setData(value?: ProjectDashboard): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectDashboardResponse): GetProjectDashboardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectDashboardResponse;
  static deserializeBinaryFromReader(message: GetProjectDashboardResponse, reader: jspb.BinaryReader): GetProjectDashboardResponse;
}

export namespace GetProjectDashboardResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: ProjectDashboard.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetProjectDashboardAnalyticsRequest extends jspb.Message {
  hasFromdate(): boolean;
  clearFromdate(): void;
  getFromdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTodate(): boolean;
  clearTodate(): void;
  getTodate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTodate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasComparisonfromdate(): boolean;
  clearComparisonfromdate(): void;
  getComparisonfromdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setComparisonfromdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasComparisontodate(): boolean;
  clearComparisontodate(): void;
  getComparisontodate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setComparisontodate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAssistantlimit(): number;
  setAssistantlimit(value: number): void;

  getRecentfailurelimit(): number;
  setRecentfailurelimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectDashboardAnalyticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectDashboardAnalyticsRequest): GetProjectDashboardAnalyticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectDashboardAnalyticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectDashboardAnalyticsRequest;
  static deserializeBinaryFromReader(message: GetProjectDashboardAnalyticsRequest, reader: jspb.BinaryReader): GetProjectDashboardAnalyticsRequest;
}

export namespace GetProjectDashboardAnalyticsRequest {
  export type AsObject = {
    fromdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    todate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comparisonfromdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comparisontodate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantlimit: number,
    recentfailurelimit: number,
  }
}

export class GetProjectDashboardAnalyticsResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ProjectDashboardAnalytics | undefined;
  setData(value?: ProjectDashboardAnalytics): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectDashboardAnalyticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectDashboardAnalyticsResponse): GetProjectDashboardAnalyticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectDashboardAnalyticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectDashboardAnalyticsResponse;
  static deserializeBinaryFromReader(message: GetProjectDashboardAnalyticsResponse, reader: jspb.BinaryReader): GetProjectDashboardAnalyticsResponse;
}

export namespace GetProjectDashboardAnalyticsResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: ProjectDashboardAnalytics.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class ProjectDashboard extends jspb.Message {
  hasGeneratedat(): boolean;
  clearGeneratedat(): void;
  getGeneratedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGeneratedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): DashboardPeriod | undefined;
  setPeriod(value?: DashboardPeriod): void;

  hasAnalytics(): boolean;
  clearAnalytics(): void;
  getAnalytics(): DashboardAnalyticsSection | undefined;
  setAnalytics(value?: DashboardAnalyticsSection): void;

  hasUsage(): boolean;
  clearUsage(): void;
  getUsage(): DashboardUsageSection | undefined;
  setUsage(value?: DashboardUsageSection): void;

  getPartial(): boolean;
  setPartial(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectDashboard): ProjectDashboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectDashboard;
  static deserializeBinaryFromReader(message: ProjectDashboard, reader: jspb.BinaryReader): ProjectDashboard;
}

export namespace ProjectDashboard {
  export type AsObject = {
    generatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    period?: DashboardPeriod.AsObject,
    analytics?: DashboardAnalyticsSection.AsObject,
    usage?: DashboardUsageSection.AsObject,
    partial: boolean,
  }
}

export class DashboardPeriod extends jspb.Message {
  hasFromdate(): boolean;
  clearFromdate(): void;
  getFromdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTodate(): boolean;
  clearTodate(): void;
  getTodate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTodate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasComparisonfromdate(): boolean;
  clearComparisonfromdate(): void;
  getComparisonfromdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setComparisonfromdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasComparisontodate(): boolean;
  clearComparisontodate(): void;
  getComparisontodate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setComparisontodate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardPeriod): DashboardPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardPeriod;
  static deserializeBinaryFromReader(message: DashboardPeriod, reader: jspb.BinaryReader): DashboardPeriod;
}

export namespace DashboardPeriod {
  export type AsObject = {
    fromdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    todate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comparisonfromdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comparisontodate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DashboardAnalyticsSection extends jspb.Message {
  getState(): DashboardSectionStateMap[keyof DashboardSectionStateMap];
  setState(value: DashboardSectionStateMap[keyof DashboardSectionStateMap]): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ProjectDashboardAnalytics | undefined;
  setData(value?: ProjectDashboardAnalytics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardAnalyticsSection.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardAnalyticsSection): DashboardAnalyticsSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardAnalyticsSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardAnalyticsSection;
  static deserializeBinaryFromReader(message: DashboardAnalyticsSection, reader: jspb.BinaryReader): DashboardAnalyticsSection;
}

export namespace DashboardAnalyticsSection {
  export type AsObject = {
    state: DashboardSectionStateMap[keyof DashboardSectionStateMap],
    data?: ProjectDashboardAnalytics.AsObject,
  }
}

export class DashboardUsageSection extends jspb.Message {
  getState(): DashboardSectionStateMap[keyof DashboardSectionStateMap];
  setState(value: DashboardSectionStateMap[keyof DashboardSectionStateMap]): void;

  clearComponentsList(): void;
  getComponentsList(): Array<DashboardComponentUsage>;
  setComponentsList(value: Array<DashboardComponentUsage>): void;
  addComponents(value?: DashboardComponentUsage, index?: number): DashboardComponentUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardUsageSection.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardUsageSection): DashboardUsageSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardUsageSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardUsageSection;
  static deserializeBinaryFromReader(message: DashboardUsageSection, reader: jspb.BinaryReader): DashboardUsageSection;
}

export namespace DashboardUsageSection {
  export type AsObject = {
    state: DashboardSectionStateMap[keyof DashboardSectionStateMap],
    componentsList: Array<DashboardComponentUsage.AsObject>,
  }
}

export class ProjectDashboardAnalytics extends jspb.Message {
  hasProjectstate(): boolean;
  clearProjectstate(): void;
  getProjectstate(): DashboardProjectState | undefined;
  setProjectstate(value?: DashboardProjectState): void;

  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): DashboardSummary | undefined;
  setSummary(value?: DashboardSummary): void;

  clearActivityList(): void;
  getActivityList(): Array<DashboardActivityBucket>;
  setActivityList(value: Array<DashboardActivityBucket>): void;
  addActivity(value?: DashboardActivityBucket, index?: number): DashboardActivityBucket;

  hasHealth(): boolean;
  clearHealth(): void;
  getHealth(): DashboardHealth | undefined;
  setHealth(value?: DashboardHealth): void;

  clearAssistantsList(): void;
  getAssistantsList(): Array<DashboardAssistant>;
  setAssistantsList(value: Array<DashboardAssistant>): void;
  addAssistants(value?: DashboardAssistant, index?: number): DashboardAssistant;

  clearRecentfailuresList(): void;
  getRecentfailuresList(): Array<DashboardRecentFailure>;
  setRecentfailuresList(value: Array<DashboardRecentFailure>): void;
  addRecentfailures(value?: DashboardRecentFailure, index?: number): DashboardRecentFailure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectDashboardAnalytics.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectDashboardAnalytics): ProjectDashboardAnalytics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectDashboardAnalytics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectDashboardAnalytics;
  static deserializeBinaryFromReader(message: ProjectDashboardAnalytics, reader: jspb.BinaryReader): ProjectDashboardAnalytics;
}

export namespace ProjectDashboardAnalytics {
  export type AsObject = {
    projectstate?: DashboardProjectState.AsObject,
    summary?: DashboardSummary.AsObject,
    activityList: Array<DashboardActivityBucket.AsObject>,
    health?: DashboardHealth.AsObject,
    assistantsList: Array<DashboardAssistant.AsObject>,
    recentfailuresList: Array<DashboardRecentFailure.AsObject>,
  }
}

export class DashboardProjectState extends jspb.Message {
  getAssistantcount(): number;
  setAssistantcount(value: number): void;

  getHasassistants(): boolean;
  setHasassistants(value: boolean): void;

  getHasactivity(): boolean;
  setHasactivity(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardProjectState.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardProjectState): DashboardProjectState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardProjectState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardProjectState;
  static deserializeBinaryFromReader(message: DashboardProjectState, reader: jspb.BinaryReader): DashboardProjectState;
}

export namespace DashboardProjectState {
  export type AsObject = {
    assistantcount: number,
    hasassistants: boolean,
    hasactivity: boolean,
  }
}

export class DashboardSummary extends jspb.Message {
  hasSessions(): boolean;
  clearSessions(): void;
  getSessions(): DashboardCountComparison | undefined;
  setSessions(value?: DashboardCountComparison): void;

  hasSuccessrate(): boolean;
  clearSuccessrate(): void;
  getSuccessrate(): DashboardRateComparison | undefined;
  setSuccessrate(value?: DashboardRateComparison): void;

  hasResponselatency(): boolean;
  clearResponselatency(): void;
  getResponselatency(): DashboardLatencyComparison | undefined;
  setResponselatency(value?: DashboardLatencyComparison): void;

  hasFailedsessions(): boolean;
  clearFailedsessions(): void;
  getFailedsessions(): DashboardFailedComparison | undefined;
  setFailedsessions(value?: DashboardFailedComparison): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardSummary.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardSummary): DashboardSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardSummary;
  static deserializeBinaryFromReader(message: DashboardSummary, reader: jspb.BinaryReader): DashboardSummary;
}

export namespace DashboardSummary {
  export type AsObject = {
    sessions?: DashboardCountComparison.AsObject,
    successrate?: DashboardRateComparison.AsObject,
    responselatency?: DashboardLatencyComparison.AsObject,
    failedsessions?: DashboardFailedComparison.AsObject,
  }
}

export class DashboardCountComparison extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getPreviousvalue(): number;
  setPreviousvalue(value: number): void;

  hasChangepercent(): boolean;
  clearChangepercent(): void;
  getChangepercent(): number;
  setChangepercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardCountComparison.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardCountComparison): DashboardCountComparison.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardCountComparison, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardCountComparison;
  static deserializeBinaryFromReader(message: DashboardCountComparison, reader: jspb.BinaryReader): DashboardCountComparison;
}

export namespace DashboardCountComparison {
  export type AsObject = {
    value: number,
    previousvalue: number,
    changepercent: number,
  }
}

export class DashboardRateComparison extends jspb.Message {
  hasValuepercent(): boolean;
  clearValuepercent(): void;
  getValuepercent(): number;
  setValuepercent(value: number): void;

  hasPreviousvaluepercent(): boolean;
  clearPreviousvaluepercent(): void;
  getPreviousvaluepercent(): number;
  setPreviousvaluepercent(value: number): void;

  hasChangepoints(): boolean;
  clearChangepoints(): void;
  getChangepoints(): number;
  setChangepoints(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardRateComparison.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardRateComparison): DashboardRateComparison.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardRateComparison, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardRateComparison;
  static deserializeBinaryFromReader(message: DashboardRateComparison, reader: jspb.BinaryReader): DashboardRateComparison;
}

export namespace DashboardRateComparison {
  export type AsObject = {
    valuepercent: number,
    previousvaluepercent: number,
    changepoints: number,
  }
}

export class DashboardLatencyComparison extends jspb.Message {
  hasValuems(): boolean;
  clearValuems(): void;
  getValuems(): number;
  setValuems(value: number): void;

  hasPreviousvaluems(): boolean;
  clearPreviousvaluems(): void;
  getPreviousvaluems(): number;
  setPreviousvaluems(value: number): void;

  hasChangems(): boolean;
  clearChangems(): void;
  getChangems(): number;
  setChangems(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardLatencyComparison.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardLatencyComparison): DashboardLatencyComparison.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardLatencyComparison, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardLatencyComparison;
  static deserializeBinaryFromReader(message: DashboardLatencyComparison, reader: jspb.BinaryReader): DashboardLatencyComparison;
}

export namespace DashboardLatencyComparison {
  export type AsObject = {
    valuems: number,
    previousvaluems: number,
    changems: number,
  }
}

export class DashboardFailedComparison extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getPreviousvalue(): number;
  setPreviousvalue(value: number): void;

  hasSharepercent(): boolean;
  clearSharepercent(): void;
  getSharepercent(): number;
  setSharepercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardFailedComparison.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardFailedComparison): DashboardFailedComparison.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardFailedComparison, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardFailedComparison;
  static deserializeBinaryFromReader(message: DashboardFailedComparison, reader: jspb.BinaryReader): DashboardFailedComparison;
}

export namespace DashboardFailedComparison {
  export type AsObject = {
    value: number,
    previousvalue: number,
    sharepercent: number,
  }
}

export class DashboardActivityBucket extends jspb.Message {
  hasFromdate(): boolean;
  clearFromdate(): void;
  getFromdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTodate(): boolean;
  clearTodate(): void;
  getTodate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTodate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSessions(): number;
  setSessions(value: number): void;

  getFailedsessions(): number;
  setFailedsessions(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardActivityBucket.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardActivityBucket): DashboardActivityBucket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardActivityBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardActivityBucket;
  static deserializeBinaryFromReader(message: DashboardActivityBucket, reader: jspb.BinaryReader): DashboardActivityBucket;
}

export namespace DashboardActivityBucket {
  export type AsObject = {
    fromdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    todate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sessions: number,
    failedsessions: number,
  }
}

export class DashboardHealth extends jspb.Message {
  getFailedsessions(): number;
  setFailedsessions(value: number): void;

  getSlowsessions(): number;
  setSlowsessions(value: number): void;

  getSlowsessionthresholdms(): number;
  setSlowsessionthresholdms(value: number): void;

  getHealthyassistants(): number;
  setHealthyassistants(value: number): void;

  getWatchassistants(): number;
  setWatchassistants(value: number): void;

  getNeedsattentionassistants(): number;
  setNeedsattentionassistants(value: number): void;

  getNodataassistants(): number;
  setNodataassistants(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardHealth.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardHealth): DashboardHealth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardHealth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardHealth;
  static deserializeBinaryFromReader(message: DashboardHealth, reader: jspb.BinaryReader): DashboardHealth;
}

export namespace DashboardHealth {
  export type AsObject = {
    failedsessions: number,
    slowsessions: number,
    slowsessionthresholdms: number,
    healthyassistants: number,
    watchassistants: number,
    needsattentionassistants: number,
    nodataassistants: number,
  }
}

export class DashboardAssistant extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSessions(): number;
  setSessions(value: number): void;

  hasSuccessratepercent(): boolean;
  clearSuccessratepercent(): void;
  getSuccessratepercent(): number;
  setSuccessratepercent(value: number): void;

  hasResponselatencyms(): boolean;
  clearResponselatencyms(): void;
  getResponselatencyms(): number;
  setResponselatencyms(value: number): void;

  getConversationdurationms(): number;
  setConversationdurationms(value: number): void;

  hasLastactivityat(): boolean;
  clearLastactivityat(): void;
  getLastactivityat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastactivityat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHealth(): DashboardAssistantHealthMap[keyof DashboardAssistantHealthMap];
  setHealth(value: DashboardAssistantHealthMap[keyof DashboardAssistantHealthMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardAssistant.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardAssistant): DashboardAssistant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardAssistant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardAssistant;
  static deserializeBinaryFromReader(message: DashboardAssistant, reader: jspb.BinaryReader): DashboardAssistant;
}

export namespace DashboardAssistant {
  export type AsObject = {
    assistantid: string,
    name: string,
    sessions: number,
    successratepercent: number,
    responselatencyms: number,
    conversationdurationms: number,
    lastactivityat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    health: DashboardAssistantHealthMap[keyof DashboardAssistantHealthMap],
  }
}

export class DashboardComponentUsage extends jspb.Message {
  getComponent(): DashboardUsageComponentMap[keyof DashboardUsageComponentMap];
  setComponent(value: DashboardUsageComponentMap[keyof DashboardUsageComponentMap]): void;

  getDurationms(): number;
  setDurationms(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardComponentUsage.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardComponentUsage): DashboardComponentUsage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardComponentUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardComponentUsage;
  static deserializeBinaryFromReader(message: DashboardComponentUsage, reader: jspb.BinaryReader): DashboardComponentUsage;
}

export namespace DashboardComponentUsage {
  export type AsObject = {
    component: DashboardUsageComponentMap[keyof DashboardUsageComponentMap],
    durationms: number,
  }
}

export class DashboardRecentFailure extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantname(): string;
  setAssistantname(value: string): void;

  hasOccurredat(): boolean;
  clearOccurredat(): void;
  getOccurredat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getChannel(): string;
  setChannel(value: string): void;

  getDurationms(): number;
  setDurationms(value: number): void;

  getFailurecode(): DashboardFailureCodeMap[keyof DashboardFailureCodeMap];
  setFailurecode(value: DashboardFailureCodeMap[keyof DashboardFailureCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardRecentFailure.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardRecentFailure): DashboardRecentFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardRecentFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardRecentFailure;
  static deserializeBinaryFromReader(message: DashboardRecentFailure, reader: jspb.BinaryReader): DashboardRecentFailure;
}

export namespace DashboardRecentFailure {
  export type AsObject = {
    conversationid: string,
    assistantid: string,
    assistantname: string,
    occurredat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    channel: string,
    durationms: number,
    failurecode: DashboardFailureCodeMap[keyof DashboardFailureCodeMap],
  }
}

export interface DashboardSectionStateMap {
  DASHBOARD_SECTION_STATE_UNSPECIFIED: 0;
  DASHBOARD_SECTION_STATE_READY: 1;
  DASHBOARD_SECTION_STATE_EMPTY: 2;
  DASHBOARD_SECTION_STATE_UNAVAILABLE: 3;
}

export const DashboardSectionState: DashboardSectionStateMap;

export interface DashboardAssistantHealthMap {
  DASHBOARD_ASSISTANT_HEALTH_UNSPECIFIED: 0;
  DASHBOARD_ASSISTANT_HEALTH_HEALTHY: 1;
  DASHBOARD_ASSISTANT_HEALTH_WATCH: 2;
  DASHBOARD_ASSISTANT_HEALTH_NEEDS_ATTENTION: 3;
  DASHBOARD_ASSISTANT_HEALTH_NO_DATA: 4;
}

export const DashboardAssistantHealth: DashboardAssistantHealthMap;

export interface DashboardUsageComponentMap {
  DASHBOARD_USAGE_COMPONENT_UNSPECIFIED: 0;
  DASHBOARD_USAGE_COMPONENT_STT: 1;
  DASHBOARD_USAGE_COMPONENT_TTS: 2;
  DASHBOARD_USAGE_COMPONENT_LLM: 3;
  DASHBOARD_USAGE_COMPONENT_VAD: 4;
  DASHBOARD_USAGE_COMPONENT_EOS: 5;
  DASHBOARD_USAGE_COMPONENT_DENOISING: 6;
}

export const DashboardUsageComponent: DashboardUsageComponentMap;

export interface DashboardFailureCodeMap {
  DASHBOARD_FAILURE_CODE_UNSPECIFIED: 0;
  DASHBOARD_FAILURE_CODE_AUTHENTICATION: 1;
  DASHBOARD_FAILURE_CODE_CONFIGURATION: 2;
  DASHBOARD_FAILURE_CODE_PROVIDER: 3;
  DASHBOARD_FAILURE_CODE_NETWORK: 4;
  DASHBOARD_FAILURE_CODE_CANCELLED: 5;
  DASHBOARD_FAILURE_CODE_NO_ANSWER: 6;
  DASHBOARD_FAILURE_CODE_REJECTED: 7;
  DASHBOARD_FAILURE_CODE_UNKNOWN: 8;
}

export const DashboardFailureCode: DashboardFailureCodeMap;

