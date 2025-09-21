import { observeAgentError } from "@/rapida/hooks/observables/voice-agent";
import { useMaybeVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useState } from "react";

interface ErrorComponentProps extends HTMLAttributes<HTMLDivElement> {}

/**
 *
 * @returns
 */
export const ErrorComponent: FC<ErrorComponentProps> = () => {
  const agentContext = useMaybeVoiceAgent();
  const [error, setError] = useState<string>("");

  React.useEffect(() => {
    const listener = observeAgentError(agentContext!).subscribe((x) => {
      setError(x);
    });
    return () => listener.unsubscribe();
  }, [agentContext]);

  return <div className={cn()}>{error}</div>;
};
