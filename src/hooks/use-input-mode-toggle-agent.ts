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
import { VoiceAgent } from "@/rapida/agents";
import { useEnsureVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { useObservableState } from "@/rapida/hooks/use-observable-state";
import * as React from "react";
import { agentInputObservable } from "@/rapida/hooks/observables/voice-agent";
import { Channel } from "@/rapida/channels";

export function useInputModeToggleAgent() {
  // ensure that voice agent is initializesd
  const agent = useEnsureVoiceAgent();

  /**
   *
   */
  // observe
  const { _agentInputObservable, handleTextToggle, handleVoiceToggle } =
    React.useMemo(() => toggleInputMode(), []);

  /**
   *
   */
  const observable = React.useMemo(
    () => _agentInputObservable(agent),
    [agent, _agentInputObservable]
  );

  /**
   *
   */
  const { channel } = useObservableState(observable, {
    channel: agent.inputChannel,
  });

  return { handleTextToggle, handleVoiceToggle, channel };
}

/**
 * Toggle input voice agent
 * @returns
 */
function toggleInputMode() {
  const handleTextToggle = async (agent: VoiceAgent) => {
    // toggelling the input from audio to text
    if (agent.isTextInput) {
      return;
    }
    await agent.setInputChannel(Channel.Text);
    return;
  };

  const handleVoiceToggle = async (agent: VoiceAgent) => {
    // toggelling the input from audio to text
    if (agent.isAudioInput) {
      console.warn("already in voice mode, ignore in toggle");
      return;
    }
    await agent.setInputChannel(Channel.Audio);
    return;
  };

  return {
    _agentInputObservable: agentInputObservable,
    handleVoiceToggle,
    handleTextToggle,
  };
}
