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
