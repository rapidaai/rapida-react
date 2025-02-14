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
