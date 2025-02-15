import {
  agentConnectionStateObservable,
  agentEventObserver,
} from "@/rapida/hooks/observables/voice-agent";
import { AgentServerEvent } from "@/rapida/types/agent-event";
import { useMaybeVoiceAgentContext } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useState } from "react";

interface AgentLiveTranscriptProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

export const AgentLiveTranscript: FC<AgentLiveTranscriptProps> = ({
  className,
  placeholder,
}) => {
  const agentContext = useMaybeVoiceAgentContext();
  const [canPlay, setCanPlay] = useState<boolean>(false);
  const [transcript, setTranscript] = useState("");
  const [_, setChanged] = useState(false);

  React.useEffect(() => {
    const listener = agentConnectionStateObservable(agentContext!).subscribe(
      (x) => {
        setCanPlay(x.isConnected);
      }
    );
    return () => listener.unsubscribe();
  }, [agentContext]);

  //
  React.useEffect(() => {
    const serverEventListner = agentEventObserver(agentContext!).subscribe(
      (agentEvents) => {
        if (
          agentEvents?.eventType === AgentServerEvent.RecieveTranscript ||
          agentEvents?.eventType === AgentServerEvent.Complete
        ) {
          setTranscript(agentEvents.transcript);
        }
        setChanged((prevChanged) => !prevChanged);
      }
    );
    return () => {
      serverEventListner.unsubscribe();
    };
  }, [agentContext]);

  return (
    <div
      className={cn(
        "overflow-scroll max-h-[5.5rem]",
        canPlay && "opacity-20",
        transcript && "!opacity-70",
        "text-3xl font-semibold italic opacity-20",
        className
      )}
    >
      {!canPlay ? placeholder : transcript ? transcript : placeholder}
    </div>
  );
};
