// package: billing_api
// file: billing-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class BillingPlanQuota extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getResourcetype(): string;
  setResourcetype(value: string): void;

  getQuotalimit(): number;
  setQuotalimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingPlanQuota.AsObject;
  static toObject(includeInstance: boolean, msg: BillingPlanQuota): BillingPlanQuota.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingPlanQuota, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingPlanQuota;
  static deserializeBinaryFromReader(message: BillingPlanQuota, reader: jspb.BinaryReader): BillingPlanQuota;
}

export namespace BillingPlanQuota {
  export type AsObject = {
    id: string,
    resourcetype: string,
    quotalimit: number,
  }
}

export class BillingPlan extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIsdefault(): boolean;
  setIsdefault(value: boolean): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  getSortorder(): number;
  setSortorder(value: number): void;

  getPricemonthly(): number;
  setPricemonthly(value: number): void;

  getPriceyearly(): number;
  setPriceyearly(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getStripeurl(): string;
  setStripeurl(value: string): void;

  clearQuotasList(): void;
  getQuotasList(): Array<BillingPlanQuota>;
  setQuotasList(value: Array<BillingPlanQuota>): void;
  addQuotas(value?: BillingPlanQuota, index?: number): BillingPlanQuota;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingPlan.AsObject;
  static toObject(includeInstance: boolean, msg: BillingPlan): BillingPlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingPlan;
  static deserializeBinaryFromReader(message: BillingPlan, reader: jspb.BinaryReader): BillingPlan;
}

export namespace BillingPlan {
  export type AsObject = {
    id: string,
    name: string,
    slug: string,
    description: string,
    isdefault: boolean,
    isactive: boolean,
    sortorder: number,
    pricemonthly: number,
    priceyearly: number,
    currency: string,
    stripeurl: string,
    quotasList: Array<BillingPlanQuota.AsObject>,
  }
}

export class BillingSubscription extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getBillingplanid(): string;
  setBillingplanid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getBillinginterval(): string;
  setBillinginterval(value: string): void;

  hasCurrentperiodstart(): boolean;
  clearCurrentperiodstart(): void;
  getCurrentperiodstart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCurrentperiodstart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCurrentperiodend(): boolean;
  clearCurrentperiodend(): void;
  getCurrentperiodend(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCurrentperiodend(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): BillingPlan | undefined;
  setPlan(value?: BillingPlan): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSubscription): BillingSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSubscription;
  static deserializeBinaryFromReader(message: BillingSubscription, reader: jspb.BinaryReader): BillingSubscription;
}

export namespace BillingSubscription {
  export type AsObject = {
    id: string,
    organizationid: string,
    billingplanid: string,
    status: string,
    billinginterval: string,
    currentperiodstart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    currentperiodend?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    plan?: BillingPlan.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAllPlansRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllPlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllPlansRequest): GetAllPlansRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllPlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllPlansRequest;
  static deserializeBinaryFromReader(message: GetAllPlansRequest, reader: jspb.BinaryReader): GetAllPlansRequest;
}

export namespace GetAllPlansRequest {
  export type AsObject = {
  }
}

export class GetAllPlansResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<BillingPlan>;
  setDataList(value: Array<BillingPlan>): void;
  addData(value?: BillingPlan, index?: number): BillingPlan;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllPlansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllPlansResponse): GetAllPlansResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllPlansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllPlansResponse;
  static deserializeBinaryFromReader(message: GetAllPlansResponse, reader: jspb.BinaryReader): GetAllPlansResponse;
}

export namespace GetAllPlansResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<BillingPlan.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

export class GetSubscriptionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionRequest): GetSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionRequest, reader: jspb.BinaryReader): GetSubscriptionRequest;
}

export namespace GetSubscriptionRequest {
  export type AsObject = {
  }
}

export class GetSubscriptionResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): BillingSubscription | undefined;
  setData(value?: BillingSubscription): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionResponse): GetSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionResponse;
  static deserializeBinaryFromReader(message: GetSubscriptionResponse, reader: jspb.BinaryReader): GetSubscriptionResponse;
}

export namespace GetSubscriptionResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: BillingSubscription.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class UpdateSubscriptionRequest extends jspb.Message {
  getPlanslug(): string;
  setPlanslug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionRequest): UpdateSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateSubscriptionRequest, reader: jspb.BinaryReader): UpdateSubscriptionRequest;
}

export namespace UpdateSubscriptionRequest {
  export type AsObject = {
    planslug: string,
  }
}

export class UpdateSubscriptionResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): BillingSubscription | undefined;
  setData(value?: BillingSubscription): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionResponse): UpdateSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionResponse;
  static deserializeBinaryFromReader(message: UpdateSubscriptionResponse, reader: jspb.BinaryReader): UpdateSubscriptionResponse;
}

export namespace UpdateSubscriptionResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: BillingSubscription.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

