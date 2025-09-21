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
import { observeAgentConnectionState } from "@/rapida/hooks/observables/voice-agent";
import { useMaybeVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { cn } from "@/rapida/styles";
import React, { FC, HTMLAttributes, useState } from "react";

/**
 *
 */
interface ConnectionComponentProps extends HTMLAttributes<HTMLSpanElement> {}

/**
 *
 * @param param0
 * @returns
 */
export const ConnectionComponent: FC<ConnectionComponentProps> = ({
  className,
}) => {
  const agentContext = useMaybeVoiceAgent();
  const [connected, setConnected] = useState<boolean>(false);

  React.useEffect(() => {
    const listener = observeAgentConnectionState(agentContext!).subscribe(
      (x) => {
        setConnected(x.isConnected);
      }
    );
    return () => listener.unsubscribe();
  }, [agentContext]);

  return (
    <span
      className={cn(connected && "text-green-600", "font-medium", className)}
    >
      {connected ? "Connected" : "Disconnected"}
    </span>
  );
};
