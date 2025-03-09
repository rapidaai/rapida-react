/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 *  This module provides functions for managing projects through the ProjectService.
 */
import {
  AssistantMessagingRequest,
  AssistantDefinition,
  AssistantMessagingResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import {
  GetAllConversationMessageRequest,
  GetAllConversationMessageResponse,
  GetAllAssistantConversationResponse,
  GetAllAssistantConversationRequest,
  Metric,
} from "@/rapida/clients/protos/common_pb";
import {
  ClientAuthInfo,
  UserAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import {
  ServiceError,
  BidirectionalStream,
  ResponseStream,
} from "@/rapida/clients/protos/talk-api_pb_service";
import { Criteria, Paginate, Message } from "@/rapida/clients/protos/common_pb";
import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_pb_service";
import {
  CreateConversationMetricResponse,
  CreateConversationMetricRequest,
} from "./protos/talk-api_pb";
import {
  CreateMessageMetricResponse,
  CreateMessageMetricRequest,
} from "./protos/talk-api_pb";
import {
  fromStageStr,
  UndefinedStage,
  AuthenticationStage,
  TranscriptionStage,
  AssistantIdentificationStage,
  QueryFormulationStage,
  InformationRetrievalStage,
  DocumentRetrievalStage,
  ContextAugmentationStage,
  TextGenerationStage,
  OutputEvaluationStage,
} from "@/rapida/utils/rapida_stages";

/**
 *
 * @param stage
 * @returns
 */
export function GetStageMessage(stage: string): string {
  switch (fromStageStr(stage)) {
    case UndefinedStage:
      return "is undefined. Please wait...";
    case AuthenticationStage:
      return "is authenticating...";
    case TranscriptionStage:
      return "is transcribing the audio...";
    case AssistantIdentificationStage:
      return "is identifying the assistant...";
    case QueryFormulationStage:
      return "is formulating the query...";
    case InformationRetrievalStage:
      return "is retrieving information...";
    case DocumentRetrievalStage:
      return "is retrieving documents...";
    case ContextAugmentationStage:
      return "is augmenting the context...";
    case TextGenerationStage:
      return "is generating the text...";
    case OutputEvaluationStage:
      return "is evaluating the output...";
    default:
      return "Unknown stage. Please wait...";
  }
}

/**
 *
 * @param assistantId
 * @param assistantProviderModelId
 * @param message
 * @param authHeader
 * @param cb
 */
export function AssistantMessaging(
  conversationClient: TalkServiceClient,
  assistantId: string,
  assistantProviderModelId: string,
  conversation: {
    message: Message;
    assistantConversationId?: string | null;
  },
  authHeader: ClientAuthInfo | UserAuthInfo
): ResponseStream<AssistantMessagingResponse> {
  const req = new AssistantMessagingRequest();
  const ad = new AssistantDefinition();
  ad.setAssistantid(assistantId);
  ad.setVersion(assistantProviderModelId);
  req.setAssistant(ad);

  if (conversation.assistantConversationId) {
    req.setAssistantconversationid(conversation.assistantConversationId);
  }
  req.setMessage(conversation.message);
  const ctx = WithAuthContext(authHeader);
  return conversationClient.assistantMessaging(req, ctx);
}
/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 */
export function GetAllAssistantConversation(
  conversationClient: TalkServiceClient,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: GetAllAssistantConversationResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllAssistantConversationRequest();
  req.setAssistantid(assistantId);
  const paginate = new Paginate();
  criteria.forEach((x) => {
    let ctr = new Criteria();
    ctr.setKey(x.key);
    ctr.setValue(x.value);
    req.addCriterias(ctr);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);
  conversationClient.getAllAssistantConversation(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param assistantConversationId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 */
export function GetAllAssistantConversationMessage(
  conversationClient: TalkServiceClient,
  assistantId: string,
  assistantConversationId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    uvcr: GetAllConversationMessageResponse | null
  ) => void
) {
  const req = new GetAllConversationMessageRequest();
  req.setAssistantid(assistantId);
  req.setAssistantconversationid(assistantConversationId);
  const paginate = new Paginate();
  criteria.forEach((x) => {
    let ctr = new Criteria();
    ctr.setKey(x.key);
    ctr.setValue(x.value);
    req.addCriterias(ctr);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);
  conversationClient.getAllConversationMessage(
    req,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param authHeader
 * @returns
 */
export function AssistantTalk(
  conversationStreamClient: TalkServiceClient,
  authHeader: UserAuthInfo | ClientAuthInfo
): BidirectionalStream<AssistantMessagingRequest, AssistantMessagingResponse> {
  return conversationStreamClient.assistantTalk(WithAuthContext(authHeader));
}

/**
 *
 * @param conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param assistantConversationMessageId
 * @param cb
 * @param authHeader
 */
export function CreateMessageMetric(
  conversationClient: TalkServiceClient,
  assistantId: string,
  assistantConversationId: string,
  messageId: string,
  metrics: { name: string; value: string; description: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: CreateMessageMetricResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new CreateMessageMetricRequest();
  req.setAssistantid(assistantId);
  req.setAssistantconversationid(assistantConversationId);
  req.setMessageid(messageId);
  for (var mtr of metrics) {
    const _m = new Metric();
    _m.setName(mtr.name);
    _m.setValue(mtr.value);
    _m.setDescription(mtr.description);
    req.addMetrics(_m);
  }
  conversationClient.createMessageMetric(req, WithAuthContext(authHeader), cb);
}

/**
 *
 * @param conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param metrics
 * @param cb
 * @param authHeader
 */
export function CreateConversationMetric(
  conversationClient: TalkServiceClient,
  assistantId: string,
  assistantConversationId: string,
  metrics: { name: string; value: string; description: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: CreateConversationMetricResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new CreateConversationMetricRequest();
  req.setAssistantid(assistantId);
  req.setAssistantconversationid(assistantConversationId);
  for (var mtr of metrics) {
    const _m = new Metric();
    _m.setName(mtr.name);
    _m.setValue(mtr.value);
    _m.setDescription(mtr.description);
    req.addMetrics(_m);
  }
  conversationClient.createConversationMetric(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
