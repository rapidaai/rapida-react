import { VoiceAgent } from "@/rapida/types/voice-agent";
import { VoiceAgentContext } from "@/rapida/hooks/useVoiceAgent";
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
};
