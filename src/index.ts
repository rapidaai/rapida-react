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
export { VoiceAgent } from "@/rapida/agents/voice-agent";
export { VoiceAgentContext } from "@/rapida/hooks/use-voice-agent";
export { Conversation } from "@/rapida/components/text/conversations";
export { AgentMultibandAudioVisualizer } from "./components/visualization/agent-multiband-audio-visualizer";
export { AgentLiveTranscript } from "./components/live-transcript";

// all hooks
export { useMessageFeedback } from "./hooks/use-message-feedback";
export { useConversationFeedback } from "./hooks/use-conversation-feedback";
export { useConnectAgent } from "@/rapida/hooks/use-connect-agent";
export { useInputModeToggleAgent } from "@/rapida/hooks/use-input-mode-toggle-agent";
export { useSpeakerOuputToggleAgent } from "@/rapida/hooks/use-speaker-output-toggle-agent";
export { useSelectInputDeviceAgent } from "@/rapida/hooks/use-select-input-device-agent";
export { ConnectionState } from "./connections/connection-state";
export { Channel } from "./channels/index";
export { MediaDeviceFailure } from "./devices/device-failure";
export {
  InputOptions,
  OutputOptions,
  AgentConfig,
} from "./agents/agent-config";
export { Message, MessageRole, MessageStatus } from "./agents/message";
export { Feedback } from "./agents/feedback";
export {
  useEnsureVoiceAgent,
  useMaybeVoiceAgent,
} from "./hooks/use-voice-agent";
export {
  useMultiband3DSpeakerTrackVolume,
  useMultibandMicrophoneTrackVolume,
} from "@/rapida/hooks/use-multiband-track-volume";
export { ConnectionConfig } from "./connections/connection-config";
