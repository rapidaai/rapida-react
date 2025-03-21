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
import {
  agentConnectionStateObservable,
  agentServerEventObserver,
} from "@/rapida/hooks/observables/voice-agent";
import { AgentServerEvent } from "@/rapida/events/agent-server-event";
import { useMaybeVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useState } from "react";

/**
 * agent live transcript props
 */
interface AgentLiveTranscriptProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

/**
 * Agent live audio transcript
 * @param param0
 * @returns
 */
export const AgentLiveTranscript: FC<AgentLiveTranscriptProps> = ({
  className,
  placeholder,
}) => {
  const agentContext = useMaybeVoiceAgent();
  const [connected, setConnected] = useState<boolean>(false);
  const [transcript, setTranscript] = useState("");

  React.useEffect(() => {
    const listener = agentConnectionStateObservable(agentContext!).subscribe(
      (x) => {
        setConnected(x.isConnected);
      }
    );
    return () => listener.unsubscribe();
  }, [agentContext]);

  //
  React.useEffect(() => {
    const serverEventListner = agentServerEventObserver(
      agentContext!
    ).subscribe((agentEvents) => {
      if (
        agentEvents?.eventType === AgentServerEvent.Transcript ||
        agentEvents?.eventType === AgentServerEvent.Complete
      ) {
        setTranscript(agentEvents.transcript);
      }
    });
    return () => {
      serverEventListner.unsubscribe();
    };
  }, [agentContext]);

  return (
    <div className={cn(className)}>
      {!connected ? placeholder : transcript ? transcript : placeholder}
    </div>
  );
};
