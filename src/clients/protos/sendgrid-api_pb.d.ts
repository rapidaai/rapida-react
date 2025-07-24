// package: integration_api
// file: sendgrid-api.proto

import * as jspb from "google-protobuf";

export class Contact extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contact.AsObject;
  static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contact;
  static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
  export type AsObject = {
    email: string,
    name: string,
  }
}

export class WelcomeEmailRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): Contact | undefined;
  setTo(value?: Contact): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WelcomeEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WelcomeEmailRequest): WelcomeEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WelcomeEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WelcomeEmailRequest;
  static deserializeBinaryFromReader(message: WelcomeEmailRequest, reader: jspb.BinaryReader): WelcomeEmailRequest;
}

export namespace WelcomeEmailRequest {
  export type AsObject = {
    userid: number,
    to?: Contact.AsObject,
  }
}

export class WelcomeEmailResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WelcomeEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WelcomeEmailResponse): WelcomeEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WelcomeEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WelcomeEmailResponse;
  static deserializeBinaryFromReader(message: WelcomeEmailResponse, reader: jspb.BinaryReader): WelcomeEmailResponse;
}

export namespace WelcomeEmailResponse {
  export type AsObject = {
    code: number,
    success: boolean,
  }
}

export class ResetPasswordEmailRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): Contact | undefined;
  setTo(value?: Contact): void;

  getResetpasswordlink(): string;
  setResetpasswordlink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordEmailRequest): ResetPasswordEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetPasswordEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordEmailRequest;
  static deserializeBinaryFromReader(message: ResetPasswordEmailRequest, reader: jspb.BinaryReader): ResetPasswordEmailRequest;
}

export namespace ResetPasswordEmailRequest {
  export type AsObject = {
    userid: number,
    to?: Contact.AsObject,
    resetpasswordlink: string,
  }
}

export class ResetPasswordEmailResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordEmailResponse): ResetPasswordEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetPasswordEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordEmailResponse;
  static deserializeBinaryFromReader(message: ResetPasswordEmailResponse, reader: jspb.BinaryReader): ResetPasswordEmailResponse;
}

export namespace ResetPasswordEmailResponse {
  export type AsObject = {
    code: number,
    success: boolean,
  }
}

export class InviteMemeberEmailRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): Contact | undefined;
  setTo(value?: Contact): void;

  getOrganizationname(): string;
  setOrganizationname(value: string): void;

  getProjectname(): string;
  setProjectname(value: string): void;

  getInvitername(): string;
  setInvitername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteMemeberEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteMemeberEmailRequest): InviteMemeberEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteMemeberEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteMemeberEmailRequest;
  static deserializeBinaryFromReader(message: InviteMemeberEmailRequest, reader: jspb.BinaryReader): InviteMemeberEmailRequest;
}

export namespace InviteMemeberEmailRequest {
  export type AsObject = {
    userid: number,
    to?: Contact.AsObject,
    organizationname: string,
    projectname: string,
    invitername: string,
  }
}

export class InviteMemeberEmailResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteMemeberEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteMemeberEmailResponse): InviteMemeberEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteMemeberEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteMemeberEmailResponse;
  static deserializeBinaryFromReader(message: InviteMemeberEmailResponse, reader: jspb.BinaryReader): InviteMemeberEmailResponse;
}

export namespace InviteMemeberEmailResponse {
  export type AsObject = {
    code: number,
    success: boolean,
  }
}

