import { VoiceAgent } from "@/rapida/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/useVoiceAgent";
import { useObservableState } from "@/rapida/hooks/useObservableState";
import * as React from "react";
import {
  agentConnectionStateObservable,
  agentInputObservable,
} from "@/rapida/hooks/observables/voice-agent";
import { Channel } from "@/rapida/types";

export function useInputToggleAgent() {
  // ensure that voice agent is initializesd
  const agent = useEnsureVoiceAgent();

  // observe
  const { _agentInputObservable, handleInputToggle } = React.useMemo(
    () => toggleInput(),
    []
  );

  const observable = React.useMemo(
    () => _agentInputObservable(agent),
    [agent, _agentInputObservable]
  );

  const { channel } = useObservableState(observable, {
    channel: agent.inputChannel,
  });

  return { handleInputToggle, channel };
}

/**
 *
 * @returns
 */
function toggleInput() {
  const handleInputToggle = async (agent: VoiceAgent) => {
    // toggelling the input from audio to text
    if (agent.isAudioInput) {
      await agent.setInputChannel(Channel.Text);
      return;
    }
    if (agent.isTextInput) {
      await agent.setInputChannel(Channel.Audio);
    }
  };
  return {
    _agentInputObservable: agentInputObservable,
    handleInputToggle,
  };
}
