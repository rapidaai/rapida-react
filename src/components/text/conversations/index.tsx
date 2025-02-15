import {
  BotMessage,
  UserMessage,
} from "@/rapida/components/text/conversations/message";
import { agentEventObserver } from "@/rapida/hooks/observables/voice-agent";
import { Message } from "@/rapida/types";
import { useMaybeVoiceAgentContext } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from "react";

interface ConversationMessagesProps extends HTMLAttributes<HTMLDivElement> {
  brandIcon: React.ComponentType<HTMLAttributes<HTMLDivElement>>;
  userIcon: React.ComponentType<HTMLAttributes<HTMLDivElement>>;
  intialConversations?: Message[];
}
export const ConversationMessages: FC<ConversationMessagesProps> = ({
  brandIcon: BrandIcon,
  userIcon: UserIcon,
  className,
  intialConversations = [],
}) => {
  const [chats, setChats] = useState<Message[]>([]);
  const ctrRef = useRef<HTMLDivElement>(null);
  const [_, setChanged] = useState(false);
  const agentContext = useMaybeVoiceAgentContext();
  //
  React.useEffect(() => {
    const serverEventListner = agentEventObserver(agentContext!).subscribe(
      (agentEvents) => {
        setChats([...intialConversations, ...agentEvents.chats]);
        setChanged((prevChanged) => !prevChanged);
      }
    );
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
  useEffect(() => {
    scrollTo(ctrRef);
  }, [JSON.stringify(chats)]);

  return (
    <div className={cn("mx-auto p-4 h-full", className)}>
      <ul className="mt-16 space-y-5">
        {chats.map((chat, idx) =>
          chat.role === "user" ? (
            <li
              className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4"
              key={`user-${idx}`}
            >
              <div className="grow text-end space-y-3">
                {chat.messages.map((x, idx) => {
                  return (
                    <UserMessage
                      message={x}
                      key={`user-message-segment-id-${idx}`}
                    />
                  );
                })}
              </div>
              <UserIcon />
            </li>
          ) : (
            <li className="flex gap-x-2 sm:gap-x-4" key={`bot-${idx}`}>
              <BrandIcon />
              <div className="flex flex-col gap-2">
                {chat.messages.map((x, idx) => {
                  return (
                    <BotMessage
                      message={x}
                      key={`bot-message-segment-id-${idx}`}
                    />
                  );
                })}
              </div>
            </li>
          )
        )}
        <li>
          <div ref={ctrRef} />
        </li>
      </ul>
    </div>
  );
};
