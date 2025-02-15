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
import type { VoiceAgent } from "@/rapida/types/voice-agent";
import * as React from "react";

/** @public */
export const VoiceAgentContext = React.createContext<VoiceAgent | undefined>(
  undefined
);

/**
 * Ensures that a room is provided via context.
 * If no room is provided, an error is thrown.
 * @public
 */
export function useVoiceAgentContext() {
  const ctx = React.useContext(VoiceAgentContext);
  if (!ctx) {
    throw Error("tried to access agent context outside");
  }
  return ctx;
}

/**
 * Returns the room context if it exists, otherwise undefined.
 * @public
 */
export function useMaybeVoiceAgentContext() {
  return React.useContext(VoiceAgentContext);
}

/**
 * Ensures that a room is provided, either via context or explicitly as a parameter.
 * If no room is provided, an error is thrown.
 * @public
 */
export function useEnsureVoiceAgent(agent?: VoiceAgent) {
  const context = useMaybeVoiceAgentContext();
  const r = agent ?? context;
  if (!r) {
    throw new Error(
      "No agent provided, make sure you are inside a agent context or pass the room explicitly"
    );
  }
  return r;
}
