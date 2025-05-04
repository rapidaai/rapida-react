// package: assistant_api
// file: assistant-deployment.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class DeploymentAudioProvider extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProvidername(): string;
  setProvidername(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getProviderid(): string;
  setProviderid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentAudioProvider.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentAudioProvider): DeploymentAudioProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentAudioProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentAudioProvider;
  static deserializeBinaryFromReader(message: DeploymentAudioProvider, reader: jspb.BinaryReader): DeploymentAudioProvider;
}

export namespace DeploymentAudioProvider {
  export type AsObject = {
    id: string,
    providername: string,
    optionsList: Array<common_pb.Metadata.AsObject>,
    providerid: string,
    status: string,
    type: string,
  }
}

export class AssistantDeploymentCapturer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantdeploymentid(): string;
  setAssistantdeploymentid(value: string): void;

  getType(): string;
  setType(value: string): void;

  getProviderid(): string;
  setProviderid(value: string): void;

  getProvidername(): string;
  setProvidername(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<common_pb.Metadata>;
  setOptionsList(value: Array<common_pb.Metadata>): void;
  addOptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantDeploymentCapturer.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantDeploymentCapturer): AssistantDeploymentCapturer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantDeploymentCapturer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantDeploymentCapturer;
  static deserializeBinaryFromReader(message: AssistantDeploymentCapturer, reader: jspb.BinaryReader): AssistantDeploymentCapturer;
}

export namespace AssistantDeploymentCapturer {
  export type AsObject = {
    id: string,
    assistantdeploymentid: string,
    type: string,
    providerid: string,
    providername: string,
    optionsList: Array<common_pb.Metadata.AsObject>,
    status: string,
  }
}

export class AssistantWebpluginDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getTone(): string;
  setTone(value: string): void;

  getExperties(): string;
  setExperties(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasEnding(): boolean;
  clearEnding(): void;
  getEnding(): string;
  setEnding(value: string): void;

  clearInputaudioList(): void;
  getInputaudioList(): Array<DeploymentAudioProvider>;
  setInputaudioList(value: Array<DeploymentAudioProvider>): void;
  addInputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  clearOutputaudioList(): void;
  getOutputaudioList(): Array<DeploymentAudioProvider>;
  setOutputaudioList(value: Array<DeploymentAudioProvider>): void;
  addOutputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  clearCapturersList(): void;
  getCapturersList(): Array<AssistantDeploymentCapturer>;
  setCapturersList(value: Array<AssistantDeploymentCapturer>): void;
  addCapturers(value?: AssistantDeploymentCapturer, index?: number): AssistantDeploymentCapturer;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string;
  setUrl(value: string): void;

  hasRaw(): boolean;
  clearRaw(): void;
  getRaw(): common_pb.Content | undefined;
  setRaw(value?: common_pb.Content): void;

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

  getIconCase(): AssistantWebpluginDeployment.IconCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebpluginDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebpluginDeployment): AssistantWebpluginDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebpluginDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebpluginDeployment;
  static deserializeBinaryFromReader(message: AssistantWebpluginDeployment, reader: jspb.BinaryReader): AssistantWebpluginDeployment;
}

export namespace AssistantWebpluginDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    role: string,
    tone: string,
    experties: string,
    greeting: string,
    mistake: string,
    ending: string,
    inputaudioList: Array<DeploymentAudioProvider.AsObject>,
    outputaudioList: Array<DeploymentAudioProvider.AsObject>,
    capturersList: Array<AssistantDeploymentCapturer.AsObject>,
    url: string,
    raw?: common_pb.Content.AsObject,
    suggestionList: Array<string>,
    helpcenterenabled: boolean,
    productcatalogenabled: boolean,
    articlecatalogenabled: boolean,
    uploadfileenabled: boolean,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }

  export enum IconCase {
    ICON_NOT_SET = 0,
    URL = 15,
    RAW = 16,
  }
}

export class AssistantPhoneDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getTone(): string;
  setTone(value: string): void;

  getExperties(): string;
  setExperties(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasEnding(): boolean;
  clearEnding(): void;
  getEnding(): string;
  setEnding(value: string): void;

  clearInputaudioList(): void;
  getInputaudioList(): Array<DeploymentAudioProvider>;
  setInputaudioList(value: Array<DeploymentAudioProvider>): void;
  addInputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  clearOutputaudioList(): void;
  getOutputaudioList(): Array<DeploymentAudioProvider>;
  setOutputaudioList(value: Array<DeploymentAudioProvider>): void;
  addOutputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  getPhoneprovidername(): string;
  setPhoneprovidername(value: string): void;

  getPhoneproviderid(): string;
  setPhoneproviderid(value: string): void;

  clearPhoneoptionsList(): void;
  getPhoneoptionsList(): Array<common_pb.Metadata>;
  setPhoneoptionsList(value: Array<common_pb.Metadata>): void;
  addPhoneoptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

  clearCapturersList(): void;
  getCapturersList(): Array<AssistantDeploymentCapturer>;
  setCapturersList(value: Array<AssistantDeploymentCapturer>): void;
  addCapturers(value?: AssistantDeploymentCapturer, index?: number): AssistantDeploymentCapturer;

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
  toObject(includeInstance?: boolean): AssistantPhoneDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantPhoneDeployment): AssistantPhoneDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantPhoneDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantPhoneDeployment;
  static deserializeBinaryFromReader(message: AssistantPhoneDeployment, reader: jspb.BinaryReader): AssistantPhoneDeployment;
}

export namespace AssistantPhoneDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    role: string,
    tone: string,
    experties: string,
    greeting: string,
    mistake: string,
    ending: string,
    inputaudioList: Array<DeploymentAudioProvider.AsObject>,
    outputaudioList: Array<DeploymentAudioProvider.AsObject>,
    phoneprovidername: string,
    phoneproviderid: string,
    phoneoptionsList: Array<common_pb.Metadata.AsObject>,
    capturersList: Array<AssistantDeploymentCapturer.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

export class AssistantWhatsappDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getTone(): string;
  setTone(value: string): void;

  getExperties(): string;
  setExperties(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasEnding(): boolean;
  clearEnding(): void;
  getEnding(): string;
  setEnding(value: string): void;

  getWhatsappprovidername(): string;
  setWhatsappprovidername(value: string): void;

  getWhatsappproviderid(): string;
  setWhatsappproviderid(value: string): void;

  clearWhatsappoptionsList(): void;
  getWhatsappoptionsList(): Array<common_pb.Metadata>;
  setWhatsappoptionsList(value: Array<common_pb.Metadata>): void;
  addWhatsappoptions(value?: common_pb.Metadata, index?: number): common_pb.Metadata;

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
  toObject(includeInstance?: boolean): AssistantWhatsappDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWhatsappDeployment): AssistantWhatsappDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWhatsappDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWhatsappDeployment;
  static deserializeBinaryFromReader(message: AssistantWhatsappDeployment, reader: jspb.BinaryReader): AssistantWhatsappDeployment;
}

export namespace AssistantWhatsappDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    role: string,
    tone: string,
    experties: string,
    greeting: string,
    mistake: string,
    ending: string,
    whatsappprovidername: string,
    whatsappproviderid: string,
    whatsappoptionsList: Array<common_pb.Metadata.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

export class AssistantDebuggerDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getTone(): string;
  setTone(value: string): void;

  getExperties(): string;
  setExperties(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasEnding(): boolean;
  clearEnding(): void;
  getEnding(): string;
  setEnding(value: string): void;

  clearInputaudioList(): void;
  getInputaudioList(): Array<DeploymentAudioProvider>;
  setInputaudioList(value: Array<DeploymentAudioProvider>): void;
  addInputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  clearOutputaudioList(): void;
  getOutputaudioList(): Array<DeploymentAudioProvider>;
  setOutputaudioList(value: Array<DeploymentAudioProvider>): void;
  addOutputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  clearCapturersList(): void;
  getCapturersList(): Array<AssistantDeploymentCapturer>;
  setCapturersList(value: Array<AssistantDeploymentCapturer>): void;
  addCapturers(value?: AssistantDeploymentCapturer, index?: number): AssistantDeploymentCapturer;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string;
  setUrl(value: string): void;

  hasRaw(): boolean;
  clearRaw(): void;
  getRaw(): common_pb.Content | undefined;
  setRaw(value?: common_pb.Content): void;

  clearSuggestionList(): void;
  getSuggestionList(): Array<string>;
  setSuggestionList(value: Array<string>): void;
  addSuggestion(value: string, index?: number): string;

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

  getIconCase(): AssistantDebuggerDeployment.IconCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantDebuggerDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantDebuggerDeployment): AssistantDebuggerDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantDebuggerDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantDebuggerDeployment;
  static deserializeBinaryFromReader(message: AssistantDebuggerDeployment, reader: jspb.BinaryReader): AssistantDebuggerDeployment;
}

export namespace AssistantDebuggerDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    role: string,
    tone: string,
    experties: string,
    greeting: string,
    mistake: string,
    ending: string,
    inputaudioList: Array<DeploymentAudioProvider.AsObject>,
    outputaudioList: Array<DeploymentAudioProvider.AsObject>,
    capturersList: Array<AssistantDeploymentCapturer.AsObject>,
    url: string,
    raw?: common_pb.Content.AsObject,
    suggestionList: Array<string>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }

  export enum IconCase {
    ICON_NOT_SET = 0,
    URL = 15,
    RAW = 16,
  }
}

export class AssistantApiDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getTone(): string;
  setTone(value: string): void;

  getExperties(): string;
  setExperties(value: string): void;

  hasGreeting(): boolean;
  clearGreeting(): void;
  getGreeting(): string;
  setGreeting(value: string): void;

  hasMistake(): boolean;
  clearMistake(): void;
  getMistake(): string;
  setMistake(value: string): void;

  hasEnding(): boolean;
  clearEnding(): void;
  getEnding(): string;
  setEnding(value: string): void;

  clearInputaudioList(): void;
  getInputaudioList(): Array<DeploymentAudioProvider>;
  setInputaudioList(value: Array<DeploymentAudioProvider>): void;
  addInputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  clearOutputaudioList(): void;
  getOutputaudioList(): Array<DeploymentAudioProvider>;
  setOutputaudioList(value: Array<DeploymentAudioProvider>): void;
  addOutputaudio(value?: DeploymentAudioProvider, index?: number): DeploymentAudioProvider;

  clearCapturersList(): void;
  getCapturersList(): Array<AssistantDeploymentCapturer>;
  setCapturersList(value: Array<AssistantDeploymentCapturer>): void;
  addCapturers(value?: AssistantDeploymentCapturer, index?: number): AssistantDeploymentCapturer;

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
  toObject(includeInstance?: boolean): AssistantApiDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantApiDeployment): AssistantApiDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantApiDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantApiDeployment;
  static deserializeBinaryFromReader(message: AssistantApiDeployment, reader: jspb.BinaryReader): AssistantApiDeployment;
}

export namespace AssistantApiDeployment {
  export type AsObject = {
    id: string,
    assistantid: string,
    name: string,
    role: string,
    tone: string,
    experties: string,
    greeting: string,
    mistake: string,
    ending: string,
    inputaudioList: Array<DeploymentAudioProvider.AsObject>,
    outputaudioList: Array<DeploymentAudioProvider.AsObject>,
    capturersList: Array<AssistantDeploymentCapturer.AsObject>,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

export class CreateAssistantApiDeploymentRequest extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): AssistantApiDeployment | undefined;
  setDeployment(value?: AssistantApiDeployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantApiDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantApiDeploymentRequest): CreateAssistantApiDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantApiDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantApiDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateAssistantApiDeploymentRequest, reader: jspb.BinaryReader): CreateAssistantApiDeploymentRequest;
}

export namespace CreateAssistantApiDeploymentRequest {
  export type AsObject = {
    deployment?: AssistantApiDeployment.AsObject,
  }
}

export class AssistantApiDeploymentResponse extends jspb.Message {
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
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantApiDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantApiDeploymentResponse): AssistantApiDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantApiDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantApiDeploymentResponse;
  static deserializeBinaryFromReader(message: AssistantApiDeploymentResponse, reader: jspb.BinaryReader): AssistantApiDeploymentResponse;
}

export namespace AssistantApiDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantApiDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateAssistantPhoneDeploymentRequest extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): AssistantPhoneDeployment | undefined;
  setDeployment(value?: AssistantPhoneDeployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantPhoneDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantPhoneDeploymentRequest): CreateAssistantPhoneDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantPhoneDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantPhoneDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateAssistantPhoneDeploymentRequest, reader: jspb.BinaryReader): CreateAssistantPhoneDeploymentRequest;
}

export namespace CreateAssistantPhoneDeploymentRequest {
  export type AsObject = {
    deployment?: AssistantPhoneDeployment.AsObject,
  }
}

export class AssistantPhoneDeploymentResponse extends jspb.Message {
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
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantPhoneDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantPhoneDeploymentResponse): AssistantPhoneDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantPhoneDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantPhoneDeploymentResponse;
  static deserializeBinaryFromReader(message: AssistantPhoneDeploymentResponse, reader: jspb.BinaryReader): AssistantPhoneDeploymentResponse;
}

export namespace AssistantPhoneDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantPhoneDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateAssistantWhatsappDeploymentRequest extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): AssistantWhatsappDeployment | undefined;
  setDeployment(value?: AssistantWhatsappDeployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantWhatsappDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantWhatsappDeploymentRequest): CreateAssistantWhatsappDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantWhatsappDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantWhatsappDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateAssistantWhatsappDeploymentRequest, reader: jspb.BinaryReader): CreateAssistantWhatsappDeploymentRequest;
}

export namespace CreateAssistantWhatsappDeploymentRequest {
  export type AsObject = {
    deployment?: AssistantWhatsappDeployment.AsObject,
  }
}

export class AssistantWhatsappDeploymentResponse extends jspb.Message {
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
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWhatsappDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWhatsappDeploymentResponse): AssistantWhatsappDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWhatsappDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWhatsappDeploymentResponse;
  static deserializeBinaryFromReader(message: AssistantWhatsappDeploymentResponse, reader: jspb.BinaryReader): AssistantWhatsappDeploymentResponse;
}

export namespace AssistantWhatsappDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWhatsappDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateAssistantDebuggerDeploymentRequest extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): AssistantDebuggerDeployment | undefined;
  setDeployment(value?: AssistantDebuggerDeployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantDebuggerDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantDebuggerDeploymentRequest): CreateAssistantDebuggerDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantDebuggerDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantDebuggerDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateAssistantDebuggerDeploymentRequest, reader: jspb.BinaryReader): CreateAssistantDebuggerDeploymentRequest;
}

export namespace CreateAssistantDebuggerDeploymentRequest {
  export type AsObject = {
    deployment?: AssistantDebuggerDeployment.AsObject,
  }
}

export class AssistantDebuggerDeploymentResponse extends jspb.Message {
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
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantDebuggerDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantDebuggerDeploymentResponse): AssistantDebuggerDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantDebuggerDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantDebuggerDeploymentResponse;
  static deserializeBinaryFromReader(message: AssistantDebuggerDeploymentResponse, reader: jspb.BinaryReader): AssistantDebuggerDeploymentResponse;
}

export namespace AssistantDebuggerDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantDebuggerDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateAssistantWebpluginDeploymentRequest extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): AssistantWebpluginDeployment | undefined;
  setDeployment(value?: AssistantWebpluginDeployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantWebpluginDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantWebpluginDeploymentRequest): CreateAssistantWebpluginDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantWebpluginDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantWebpluginDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateAssistantWebpluginDeploymentRequest, reader: jspb.BinaryReader): CreateAssistantWebpluginDeploymentRequest;
}

export namespace CreateAssistantWebpluginDeploymentRequest {
  export type AsObject = {
    deployment?: AssistantWebpluginDeployment.AsObject,
  }
}

export class AssistantWebpluginDeploymentResponse extends jspb.Message {
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
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantWebpluginDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantWebpluginDeploymentResponse): AssistantWebpluginDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantWebpluginDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantWebpluginDeploymentResponse;
  static deserializeBinaryFromReader(message: AssistantWebpluginDeploymentResponse, reader: jspb.BinaryReader): AssistantWebpluginDeploymentResponse;
}

export namespace AssistantWebpluginDeploymentResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantWebpluginDeployment.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAssistantDeploymentRequest extends jspb.Message {
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

export namespace GetAssistantDeploymentRequest {
  export type AsObject = {
    assistantid: string,
  }
}

