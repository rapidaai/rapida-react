// package: lead_api
// file: lead-api.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CreateLeadRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getExpectedvolume(): string;
  setExpectedvolume(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLeadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLeadRequest): CreateLeadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLeadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLeadRequest;
  static deserializeBinaryFromReader(message: CreateLeadRequest, reader: jspb.BinaryReader): CreateLeadRequest;
}

export namespace CreateLeadRequest {
  export type AsObject = {
    email: string,
    company: string,
    expectedvolume: string,
  }
}

