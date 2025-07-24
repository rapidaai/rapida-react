// package: integration_api
// file: sendgrid-api.proto

import * as sendgrid_api_pb from "./sendgrid-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SendgridServiceWelcomeEmail = {
  readonly methodName: string;
  readonly service: typeof SendgridService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sendgrid_api_pb.WelcomeEmailRequest;
  readonly responseType: typeof sendgrid_api_pb.WelcomeEmailResponse;
};

type SendgridServiceResetPasswordEmail = {
  readonly methodName: string;
  readonly service: typeof SendgridService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sendgrid_api_pb.ResetPasswordEmailRequest;
  readonly responseType: typeof sendgrid_api_pb.ResetPasswordEmailResponse;
};

type SendgridServiceInviteMemberEmail = {
  readonly methodName: string;
  readonly service: typeof SendgridService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sendgrid_api_pb.InviteMemeberEmailRequest;
  readonly responseType: typeof sendgrid_api_pb.InviteMemeberEmailResponse;
};

export class SendgridService {
  static readonly serviceName: string;
  static readonly WelcomeEmail: SendgridServiceWelcomeEmail;
  static readonly ResetPasswordEmail: SendgridServiceResetPasswordEmail;
  static readonly InviteMemberEmail: SendgridServiceInviteMemberEmail;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class SendgridServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  welcomeEmail(
    requestMessage: sendgrid_api_pb.WelcomeEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sendgrid_api_pb.WelcomeEmailResponse|null) => void
  ): UnaryResponse;
  welcomeEmail(
    requestMessage: sendgrid_api_pb.WelcomeEmailRequest,
    callback: (error: ServiceError|null, responseMessage: sendgrid_api_pb.WelcomeEmailResponse|null) => void
  ): UnaryResponse;
  resetPasswordEmail(
    requestMessage: sendgrid_api_pb.ResetPasswordEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sendgrid_api_pb.ResetPasswordEmailResponse|null) => void
  ): UnaryResponse;
  resetPasswordEmail(
    requestMessage: sendgrid_api_pb.ResetPasswordEmailRequest,
    callback: (error: ServiceError|null, responseMessage: sendgrid_api_pb.ResetPasswordEmailResponse|null) => void
  ): UnaryResponse;
  inviteMemberEmail(
    requestMessage: sendgrid_api_pb.InviteMemeberEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sendgrid_api_pb.InviteMemeberEmailResponse|null) => void
  ): UnaryResponse;
  inviteMemberEmail(
    requestMessage: sendgrid_api_pb.InviteMemeberEmailRequest,
    callback: (error: ServiceError|null, responseMessage: sendgrid_api_pb.InviteMemeberEmailResponse|null) => void
  ): UnaryResponse;
}

