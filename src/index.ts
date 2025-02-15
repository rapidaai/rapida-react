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
import { VoiceAgent } from "@/rapida/types/voice-agent";
import { VoiceAgentContext } from "@/rapida/hooks/use-voice-agent";
import "@/rapida/styles/global-styles";
import {
  BrandIcon,
  UserIcon,
} from "@/rapida/components/text/conversations/icon";
import { MessagingAction } from "@/rapida/components/actions/messaging/messaging-action";
import { ConversationMessages } from "@/rapida/components/text/conversations";
import { useConnectAgent } from "@/rapida/hooks/use-connect-agent";
import { useDisconnectAgent } from "@/rapida/hooks/use-disconnect-agent";
import { useInputModeToggleAgent } from "@/rapida/hooks/use-input-mode-toggle-agent";
import { useMicInputToggleAgent } from "@/rapida/hooks/use-mic-input-toggle-agent";
import { useSpeakerOuputToggleAgent } from "@/rapida/hooks/use-speaker-output-toggle-agent";
import { useSelectInputDeviceAgent } from "@/rapida/hooks/use-select-input-device-agent";
import {
  useMultiband3DSpeakerTrackVolume,
  useMultibandMicrophoneTrackVolume,
} from "@/rapida/hooks/use-multiband-track-volume";
export {
  Channel,
  ConnectionState,
  MediaDeviceFailure,
  ConnectionConfig,
  AgentConfig,
} from "@/rapida/types";

export {
  BrandIcon,
  UserIcon,
  MessagingAction,
  ConversationMessages,

  // context
  VoiceAgent,
  VoiceAgentContext,

  // hooks
  useConnectAgent,
  useDisconnectAgent,
  useInputModeToggleAgent,
  useMicInputToggleAgent,
  useSpeakerOuputToggleAgent,
  useMultiband3DSpeakerTrackVolume,
  useMultibandMicrophoneTrackVolume,
  useSelectInputDeviceAgent,
};
