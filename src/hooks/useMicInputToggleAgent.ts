import * as React from "react";
import { VoiceAgent } from "@/rapida/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/useVoiceAgent";
import { useObservableState } from "@/rapida/hooks/useObservableState";
import { agentAudioInputMuteObservable } from "@/rapida/hooks/observables/voice-agent";

/**
 * use mic toggle agent
 * @returns
 */
export function useMicInputToggleAgent() {
  //
  const agent = useEnsureVoiceAgent();

  //
  const { _agentAudioInputMuteObservable, handleMicInputToggleAgent } =
    React.useMemo(() => micInputToggleAgent(), []);

  const observable = React.useMemo(
    () => _agentAudioInputMuteObservable(agent),
    [agent, _agentAudioInputMuteObservable]
  );

  const { isEnable } = useObservableState(observable, {
    isEnable: agent.isAudioInputEnable,
  });

  return { handleMicInputToggleAgent, isEnable };
}

/**
 * For toggleing mic for a given agent
 * @returns
 */
function micInputToggleAgent() {
  const handleMicInputToggleAgent = async (agent: VoiceAgent) => {
    await agent.toggleInputMute();
  };
  return {
    _agentAudioInputMuteObservable: agentAudioInputMuteObservable,
    handleMicInputToggleAgent,
  };
}
