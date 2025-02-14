import * as React from "react";
import { VoiceAgent } from "@/rapida/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/useVoiceAgent";
import { useObservableState } from "@/rapida/hooks/useObservableState";
import { agentConnectionStateObservable } from "@/rapida/hooks/observables/voice-agent";

/**
 * Custom hook for managing agent connection in a voice system.
 * @returns An object containing the connection handler and connection status.
 */
export function useConnectAgent() {
  // Get the voice agent instance
  const agent = useEnsureVoiceAgent();

  // Set up the connect agent and memoize the result
  const { _agentConnectionStateObservable, handleConnectAgent } = React.useMemo(
    () => setupConnectAgent(),
    []
  );

  // Create a memoized observable for the agent's connection state
  const observable = React.useMemo(
    () => _agentConnectionStateObservable(agent),
    [agent, _agentConnectionStateObservable]
  );

  // Use the observable to track the agent's connection state
  const { isConnected } = useObservableState(observable, {
    isConnected: agent.isConnected,
  });

  // Return the connection handler and the current connection status
  return { handleConnectAgent, isConnected };
}

/**
 * Sets up the connection for a voice agent.
 *
 * @returns An object containing the agent connection state observable and a function to handle agent connection.
 */
function setupConnectAgent() {
  /**
   * Handles the connection of a voice agent.
   *
   * @param agent - The VoiceAgent to be connected.
   * @returns A promise that resolves when the agent is connected.
   */
  const handleConnectAgent = async (agent: VoiceAgent) => {
    await agent.connect();
  };

  return {
    _agentConnectionStateObservable: agentConnectionStateObservable,
    handleConnectAgent,
  };
}
