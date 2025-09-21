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

import { useObservableState } from "@/rapida/hooks/use-observable-state";
import * as React from "react";
import { observeAgentInputChannel } from "@/rapida/hooks/observables/voice-agent";
import { Channel } from "@/rapida/types/channel";
import { VoiceAgent } from "@/rapida/agents/voice-agent";

/**
 * Custom hook for toggling input mode (voice/text) for the agent.
 * @returns An object containing toggle handlers and the current input channel.
 */
export function useInputModeToggleAgent(agent: VoiceAgent) {
  const { handleTextToggle, handleVoiceToggle } = React.useMemo(
    () => ({
      handleTextToggle: async () => {
        if (!agent) throw new Error("VoiceAgent instance not available");
        if (agent.inputChannel === Channel.Text) return;
        await agent.setInputChannel(Channel.Text);
      },
      handleVoiceToggle: async () => {
        if (!agent) throw new Error("VoiceAgent instance not available");
        if (agent.inputChannel === Channel.Audio) {
          console.warn("Already in voice mode, ignoring toggle...");
          return;
        }
        await agent.setInputChannel(Channel.Audio);
      },
    }),
    [agent]
  );

  const observable = React.useMemo(
    () => (agent ? observeAgentInputChannel(agent) : undefined),
    [agent]
  );

  // Update initialization of default state and observable subscription
  const { channel } = useObservableState(observable, {
    channel: agent?.inputChannel ?? Channel.Text,
  });

  React.useEffect(() => {
    if (observable && agent) {
      const subscription = observable.subscribe((update) => {
        console.log("Channel updated: ", update.channel); // Debugging log
      });
      return () => subscription.unsubscribe();
    }
    return undefined;
  }, [observable, agent]);

  return { handleTextToggle, handleVoiceToggle, channel };
}
