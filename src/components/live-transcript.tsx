import {
  agentConnectionStateObservable,
  agentEventObserver,
} from "@/rapida/hooks/observables/voice-agent";
import { AgentServerEvent } from "@/rapida/types/agent-event";
import { useMaybeVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useState } from "react";

/**
 * agent live transcript props
 */
interface AgentLiveTranscriptProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

/**
 * Agent live audio transcript
 * @param param0
 * @returns
 */
export const AgentLiveTranscript: FC<AgentLiveTranscriptProps> = ({
  className,
  placeholder,
}) => {
  const agentContext = useMaybeVoiceAgent();
  const [connected, setConnected] = useState<boolean>(false);
  const [transcript, setTranscript] = useState("");

  React.useEffect(() => {
    const listener = agentConnectionStateObservable(agentContext!).subscribe(
      (x) => {
        setConnected(x.isConnected);
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
      }
    );
    return () => {
      serverEventListner.unsubscribe();
    };
  }, [agentContext]);

  return (
    <div className={cn(className)}>
      {!connected ? placeholder : transcript ? transcript : placeholder}
    </div>
  );
};
