import { VoiceAgent } from "@/rapida/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/useVoiceAgent";
import { useObservableState } from "@/rapida/hooks/useObservableState";
import * as React from "react";
import { agentConnectionStateObservable } from "@/rapida/hooks/observables/voice-agent";

export function useDisconnectAgent() {
  // Ensure a voice agent is available
  const agent = useEnsureVoiceAgent();

  // Set up the disconnect agent and memoize the result
  const { _agentConnectionStateObservable, handleDisconnectAgent } =
    React.useMemo(() => setupDisconnectAgent(), []);

  // Create a memoized observable for the agent's connection state
  const observable = React.useMemo(
    () => _agentConnectionStateObservable(agent),
    [agent, _agentConnectionStateObservable]
  );

  // Use the observable to track the agent's connection state
  const { isConnected } = useObservableState(observable, {
    isConnected: agent.isConnected,
  });

  // Return the disconnect handler and connection status
  return { handleDisconnectAgent, isConnected };
}

/**
 * Handles the disconnection of a VoiceAgent.
 *
 * @param {VoiceAgent} agent - The VoiceAgent to be disconnected.
 * @returns {Promise<void>} A promise that resolves when the agent is disconnected.
 */
function setupDisconnectAgent() {
  const handleDisconnectAgent = async (agent: VoiceAgent) => {
    await agent.disconnect();
  };

  return {
    _agentConnectionStateObservable: agentConnectionStateObservable,
    handleDisconnectAgent,
  };
}
