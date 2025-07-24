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
import { agentMessageChangeEventObserver } from "@/rapida/hooks/observables/voice-agent";
import { Message } from "@/rapida/agents/message";
import { useMaybeVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from "react";

/**
 * Props for the Conversation component.
 * @interface ConversationProps
 * @extends HTMLAttributes<HTMLDivElement>
 */
interface ConversationProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A React component used to wrap individual messages.
   * It should accept props of type HTMLAttributes<HTMLLIElement> and a 'message' prop of type Message.
   */
  MessageWrapper: React.ComponentType<
    HTMLAttributes<HTMLLIElement> & { message: Message }
  >;

  /**
   * An optional array of initial messages to populate the conversation.
   */
  intialConversations?: Message[];
}

export const Conversation: FC<ConversationProps> = ({
  className,
  MessageWrapper,
  intialConversations = [],
}) => {
  const [chats, setChats] = useState<Message[]>([]);
  const ctrRef = useRef<HTMLDivElement>(null);
  const [_, setChanged] = useState(false);
  const agentContext = useMaybeVoiceAgent();
  //
  React.useEffect(() => {
    const serverEventListner = agentMessageChangeEventObserver(
      agentContext!
    ).subscribe((agentEvents) => {
      setChats([...intialConversations, ...agentEvents.chats]);
      setChanged((prevChanged) => !prevChanged);
    });

    return () => {
      serverEventListner.unsubscribe();
    };
  }, [agentContext]);

  const scrollTo = (ref) => {
    setTimeout(
      () =>
        ref.current?.scrollIntoView({ inline: "center", behavior: "smooth" }),
      777
    );
  };

  //   on change of message to scroll
  useEffect(() => {
    scrollTo(ctrRef);
  }, [JSON.stringify(chats)]);

  return (
    <ul className={cn(className)}>
      {chats.map((chat, idx) => (
        <MessageWrapper key={`msg-idx-${idx}`} message={chat} />
      ))}
      <li>
        <div ref={ctrRef} />
      </li>
    </ul>
  );
};
