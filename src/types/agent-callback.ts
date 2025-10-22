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
 */
import {
  AssistantConversationAssistantMessage,
  AssistantConversationConfiguration,
  AssistantConversationDisconnectAction,
  AssistantConversationInterruption,
  AssistantConversationUserMessage,
  AssistantConverstationApiRequestAction,
  AssistantConverstationEndpointAction,
  AssistantConverstationHoldAction,
  AssistantConverstationKnowledgeRetrievalAction,
} from "@/rapida/clients/protos/talk-api_pb";

import { AssistantConversationMessage } from "@/rapida/clients/protos/common_pb";
import { toContentText } from "@/rapida/utils/rapida_content";

export interface ConversationUserMessage
  extends AssistantConversationUserMessage.AsObject {
  messageText?: string;
}

export class ConversationUserMessage {
  constructor(config?: AssistantConversationUserMessage) {
    if (config) {
      Object.assign(this, config.toObject());
      switch (config.getMessageCase()) {
        case AssistantConversationUserMessage.MessageCase.MESSAGE_NOT_SET:
        case AssistantConversationUserMessage.MessageCase.AUDIO:
        case AssistantConversationUserMessage.MessageCase.TEXT:
          this.messageText = config.getText()?.getContent();
      }
    }
  }
}

export interface ConversationAssistantMessage
  extends AssistantConversationAssistantMessage.AsObject {
  messageText?: string;
}

export class ConversationAssistantMessage {
  constructor(config?: AssistantConversationAssistantMessage) {
    if (config) {
      Object.assign(this, config.toObject());
      switch (config.getMessageCase()) {
        case AssistantConversationUserMessage.MessageCase.MESSAGE_NOT_SET:
        case AssistantConversationUserMessage.MessageCase.AUDIO:
        case AssistantConversationUserMessage.MessageCase.TEXT:
          this.messageText = config.getText()?.getContent();
      }
    }
  }
}

export interface ConversationMessage
  extends AssistantConversationMessage.AsObject {
  userMessage?: string;
  systemMessage?: string;
}

export class ConversationMessage {
  constructor(config?: AssistantConversationMessage) {
    if (config) {
      Object.assign(this, config.toObject());
      this.userMessage = toContentText(config.getRequest()?.getContentsList());
      this.systemMessage = toContentText(
        config.getResponse()?.getContentsList()
      );
    }
  }
}

/**
 * Callbacks for agent
 */
export interface AgentCallback {
  // this will be called when assistant get changed // also this will be the first call when assistant connection established
  onConfiguration?: (
    args: AssistantConversationConfiguration.AsObject | undefined
  ) => void;

  // interrupted // // vad // word // there might be two kind of interruption
  onInterrupt?: (
    args: AssistantConversationInterruption.AsObject | undefined
  ) => void;

  // generation
  onAssistantMessage?: (args: ConversationAssistantMessage | undefined) => void;

  // user
  onUserMessage?: (args: ConversationUserMessage | undefined) => void;

  //
  // on complete message
  onMessage?: (arg: ConversationMessage | undefined) => void;

  //
  onAction?: (
    arg?:
      | AssistantConverstationApiRequestAction.AsObject
      | AssistantConverstationKnowledgeRetrievalAction.AsObject
      | AssistantConverstationEndpointAction.AsObject
      | AssistantConverstationHoldAction.AsObject
      | AssistantConversationDisconnectAction.AsObject
  ) => void;
}
