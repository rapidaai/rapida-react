import { VoiceAgent } from "@/rapida/hooks/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/useVoiceAgent";
import { useObservableState } from "@/rapida/hooks/useObservableState";
import * as React from "react";
import { agentConnectionStateObservable } from "@/rapida/hooks/observables/voice-agent";

export function useDisconnectAgent() {
  const agent = useEnsureVoiceAgent();
  const { _agentConnectionStateObservable, handleDisconnectAgent } =
    React.useMemo(() => setupDisconnectAgent(), []);

  const observable = React.useMemo(
    () => _agentConnectionStateObservable(agent),
    [agent, _agentConnectionStateObservable]
  );

  const { isConnected } = useObservableState(observable, {
    isConnected: agent.isConnected,
  });

  return { handleDisconnectAgent, isConnected };
}

function setupDisconnectAgent() {
  const handleDisconnectAgent = async (agent: VoiceAgent) => {
    await agent.disconnect();
  };

  return {
    _agentConnectionStateObservable: agentConnectionStateObservable,
    handleDisconnectAgent,
  };
}
