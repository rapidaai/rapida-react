import * as React from "react";
import { VoiceAgent } from "@/rapida/hooks/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/useVoiceAgent";
import { useObservableState } from "@/rapida/hooks/useObservableState";
import { agentConnectionStateObservable } from "@/rapida/hooks/observables/voice-agent";

export function useConnectAgent() {
  const agent = useEnsureVoiceAgent();
  const { _agentConnectionStateObservable, handleConnectAgent } = React.useMemo(
    () => setupConnectAgent(),
    []
  );

  const observable = React.useMemo(
    () => _agentConnectionStateObservable(agent),
    [agent, _agentConnectionStateObservable]
  );

  const { isConnected } = useObservableState(observable, {
    isConnected: agent.isConnected,
  });

  return { handleConnectAgent, isConnected };
}

function setupConnectAgent() {
  const handleConnectAgent = async (agent: VoiceAgent) => {
    await agent.connect();
  };

  return {
    _agentConnectionStateObservable: agentConnectionStateObservable,
    handleConnectAgent,
  };
}
