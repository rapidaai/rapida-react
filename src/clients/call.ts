import { WithAuthContext } from "@/rapida/clients";
import {
  AssistantDefinition,
  CreateBulkPhoneCallRequest,
  CreateBulkPhoneCallResponse,
  CreatePhoneCallRequest,
  CreatePhoneCallResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreatePhoneCall(
  clientCfg: ConnectionConfig,
  assistant: AssistantDefinition,
  toNumber: string,
  fromNumber?: string,
  args?: Map<string, google_protobuf_any_pb.Any>,
  options?: Map<string, google_protobuf_any_pb.Any>,
  metadata?: Map<string, google_protobuf_any_pb.Any>
): Promise<CreatePhoneCallResponse> {
  return new Promise((resolve, reject) => {
    const request = new CreatePhoneCallRequest();
    request.setAssistant(assistant);
    request.setTonumber(toNumber);
    if (fromNumber) {
      request.setFromnumber(fromNumber);
    }
    if (args) {
      args.forEach((value, key) => {
        request.getArgsMap().set(key, value);
      });
    }

    if (options) {
      options.forEach((value, key) => {
        request.getOptionsMap().set(key, value);
      });
    }

    if (metadata) {
      metadata.forEach((value, key) => {
        request.getMetadataMap().set(key, value);
      });
    }
    clientCfg.conversationClient.createPhoneCall(
      request,
      WithAuthContext(clientCfg.auth),
      (err: ServiceError | null, response: CreatePhoneCallResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersionx
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreateBulkPhoneCall(
  clientCfg: ConnectionConfig,
  assistant: AssistantDefinition,
  params: {
    toNumber: string;
    fromNumber?: string;
    args?: Map<string, google_protobuf_any_pb.Any>;
    options?: Map<string, google_protobuf_any_pb.Any>;
    metadata?: Map<string, google_protobuf_any_pb.Any>;
  }[]
): Promise<CreateBulkPhoneCallResponse> {
  return new Promise((resolve, reject) => {
    const _request = new CreateBulkPhoneCallRequest();
    _request.setAssistant(assistant);

    params.map((param) => {
      const request = new CreatePhoneCallRequest();
      request.setAssistant(assistant);
      request.setTonumber(param.toNumber);
      if (param.fromNumber) {
        request.setFromnumber(param.fromNumber);
      }
      if (param.args) {
        param.args.forEach((value, key) => {
          request.getArgsMap().set(key, value);
        });
      }

      if (param.options) {
        param.options.forEach((value, key) => {
          request.getOptionsMap().set(key, value);
        });
      }

      if (param.metadata) {
        param.metadata.forEach((value, key) => {
          request.getMetadataMap().set(key, value);
        });
      }
      _request.addPhonecalls(request);
    });

    clientCfg.conversationClient.createBulkPhoneCall(
      _request,
      WithAuthContext(clientCfg.auth),
      (
        err: ServiceError | null,
        response: CreateBulkPhoneCallResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
