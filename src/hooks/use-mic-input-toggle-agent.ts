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
import * as React from "react";
import { VoiceAgent } from "@/rapida/types/voice-agent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { useObservableState } from "@/rapida/hooks/use-observable-state";
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
    await agent.toggelAudioInput();
  };
  return {
    _agentAudioInputMuteObservable: agentAudioInputMuteObservable,
    handleMicInputToggleAgent,
  };
}
