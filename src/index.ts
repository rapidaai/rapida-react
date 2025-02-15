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
import { useMicInputToggleAgent } from "./hooks/use-mic-input-toggle-agent";
import { useSpeakerOuputToggleAgent } from "./hooks/use-speaker-output-toggle-agent";
import { useSelectInputDeviceAgent } from "./hooks/use-select-input-device-agent";
import {
  useMultiband3DSpeakerTrackVolume,
  useMultibandMicrophoneTrackVolume,
} from "./hooks/use-multiband-track-volume";
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
