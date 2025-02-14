import { agentConnectionStateObservable } from "@/rapida/hooks/observables/voice-agent";
import { useMaybeVoiceAgentContext } from "@/rapida/hooks/useVoiceAgent";
import { cn } from "@/rapida/styles";
import React, { FC, useState } from "react";

export const AgentConnectionStatus: FC = ({}) => {
  const agentContext = useMaybeVoiceAgentContext();
  const [canPlay, setCanPlay] = useState<boolean>(false);

  React.useEffect(() => {
    const listener = agentConnectionStateObservable(agentContext!).subscribe(
      (x) => {
        setCanPlay(x.isConnected);
      }
    );
    return () => listener.unsubscribe();
  }, [agentContext]);

  return (
    <span className={cn(canPlay && "text-green-600", "font-medium")}>
      {canPlay ? "Connected" : "Disconnected"}
    </span>
  );
};
