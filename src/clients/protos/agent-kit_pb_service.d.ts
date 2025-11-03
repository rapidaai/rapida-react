// package: agent_kit
// file: agent-kit.proto

import * as agent_kit_pb from "./agent-kit_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AgentActionAction = {
  readonly methodName: string;
  readonly service: typeof AgentAction;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof agent_kit_pb.AssistantActionRequest;
  readonly responseType: typeof agent_kit_pb.AssistantActionResponse;
};

export class AgentAction {
  static readonly serviceName: string;
  static readonly Action: AgentActionAction;
}

type AgentTalkTalk = {
  readonly methodName: string;
  readonly service: typeof AgentTalk;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof agent_kit_pb.AgentTalkRequest;
  readonly responseType: typeof agent_kit_pb.AgentTalkResponse;
};

export class AgentTalk {
  static readonly serviceName: string;
  static readonly Talk: AgentTalkTalk;
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

export class AgentActionClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  action(metadata?: grpc.Metadata): BidirectionalStream<agent_kit_pb.AssistantActionRequest, agent_kit_pb.AssistantActionResponse>;
}

export class AgentTalkClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  talk(metadata?: grpc.Metadata): BidirectionalStream<agent_kit_pb.AgentTalkRequest, agent_kit_pb.AgentTalkResponse>;
}

