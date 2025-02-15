import { AudioMessagingAction } from "@/rapida/components/actions/messaging/audio-messsaging-action";
import { SimpleMessagingAction } from "@/rapida/components/actions/messaging/simple-messaging-action";
import { Channel } from "@/rapida/types";
import { useInputModeToggleAgent } from "@/rapida/hooks/use-input-mode-toggle-agent";
import { cn } from "@/rapida/styles";
import { FC, HTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEnsureVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import {
  MicVocal,
  PauseCircleIcon,
  PlayCircleIcon,
  StopCircle,
  Text,
} from "lucide-react";
import { useConnectAgent } from "@/rapida/hooks/use-connect-agent";
import { useMicInputToggleAgent } from "@/rapida/hooks/use-mic-input-toggle-agent";
import { useDisconnectAgent } from "@/rapida/hooks/use-disconnect-agent";
import { QuickSuggestion } from "@/rapida/components/text/suggestions";

/**
 *
 */
interface MessageActionProps extends HTMLAttributes<HTMLDivElement> {
  suggestions?: string[];
  placeholder?: string;
}

/**
 *
 * @param param0
 * @returns
 */
export const MessagingAction: FC<MessageActionProps> = ({
  suggestions = [],
  className,
  ...attr
}) => {
  const ctx = useEnsureVoiceAgent();
  const { handleMicInputToggleAgent, isEnable } = useMicInputToggleAgent();

  //   current channel and a way to toggel
  const { handleInputToggle, channel } = useInputModeToggleAgent();
  const { handleConnectAgent, isConnected } = useConnectAgent();
  const { handleDisconnectAgent } = useDisconnectAgent();
  return (
    <div
      className={cn(
        "mx-auto sticky bottom-0 z-10 bg-white dark:bg-gray-950/10"
      )}
    >
      <AnimatePresence>
        <motion.div className="flex justify-between items-end border-b dark:border-gray-800 backdrop-blur-xl px-4 py-2.5">
          <div className="pt-2 h-fit">
            {!isConnected && suggestions && suggestions.length > 0 && (
              <div className="space-y-1.5">
                {suggestions.map((x, idx) => {
                  return (
                    <QuickSuggestion
                      suggestion={x}
                      key={`suggestion-idx-${idx}`}
                      onClick={() => {
                        ctx?.onSendText(x);
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex space-x-1 relative shrink-0">
            {isConnected ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleMicInputToggleAgent(ctx);
                  }}
                  className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                >
                  {isEnable ? (
                    <PauseCircleIcon className="size-3.5 text-yellow-700" />
                  ) : (
                    <PlayCircleIcon className="size-3.5 text-green-700" />
                  )}
                  {isEnable ? "Pause" : "Play"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleDisconnectAgent(ctx);
                  }}
                  className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                >
                  <StopCircle className="size-3.5 text-red-700" />
                  Stop
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleConnectAgent(ctx!);
                  }}
                  type="button"
                  className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border-[0.5px] border-blue-200 bg-white text-primary shadow-sm hover:bg-primary/10 focus:outline-none focus:bg-primary/30 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-primary/40 dark:text-white dark:hover:bg-primary/80 dark:focus:bg-primary/80"
                >
                  Click to start
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleInputToggle(ctx);
                  }}
                  className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-lg border-[0.5px] border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                >
                  {channel === Channel.Text ? (
                    <MicVocal className="size-3.5" />
                  ) : (
                    <Text className="size-3.5" />
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className={cn("bg-white dark:bg-gray-950 flex-grow ", className)}>
        {channel === Channel.Text ? (
          <SimpleMessagingAction {...attr} />
        ) : (
          <AudioMessagingAction {...attr} />
        )}
      </div>
    </div>
  );
};
