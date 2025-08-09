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
import { agentMessageChangeEventObserver } from "@/rapida/hooks/observables/voice-agent";
import { useObservableState } from "@/rapida/hooks/use-observable-state";
import { useEnsureVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import React from "react";

/**
 * Custom hook for managing agent connection in a voice system.
 * @returns An object containing the connection handler and connection status.
 */
export function useAgentMessage() {
  // Get the voice agent instance
  const agent = useEnsureVoiceAgent();
  const observable = React.useMemo(
    () => agentMessageChangeEventObserver(agent),
    [agent]
  );

  const { chats } = useObservableState(observable, {
    eventType: undefined,
    chats: agent.messages,
  });
  return { messages: chats };
}
