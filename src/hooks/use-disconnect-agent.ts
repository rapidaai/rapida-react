/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 */
import { VoiceAgent } from "@/rapida/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { useObservableState } from "@/rapida/hooks/use-observable-state";
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
