import { agentConnectionStateObservable } from "@/rapida/hooks/observables/voice-agent";
import { useMaybeVoiceAgentContext } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useState } from "react";

interface ConnectionStatusProps extends HTMLAttributes<HTMLSpanElement> {}
export const ConnectionStatus: FC<ConnectionStatusProps> = ({ className }) => {
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
    <span className={cn(canPlay && "text-green-600", "font-medium", className)}>
      {canPlay ? "Connected" : "Disconnected"}
    </span>
  );
};
