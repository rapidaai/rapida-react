import { AgentLiveTranscript } from "@/rapida/components/live-transcript";
import { useMultibandMicrophoneTrackVolume } from "@/rapida/hooks/use-multiband-track-volume";
import { AgentMultibandAudioVisualizer } from "@/rapida/visualization/agent-multiband-audio-visualizer";
import { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { useMaybeVoiceAgentContext } from "@/rapida/hooks/use-voice-agent";
import { Mic } from "lucide-react";
import { useConnectAgent } from "@/rapida/hooks/use-connect-agent";
import { cn } from "@/rapida/styles";

/**
 *
 */
interface AudioMessagingActionProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

/**
 *
 * @param param0
 * @returns
 */
export const AudioMessagingAction: FC<AudioMessagingActionProps> = ({
  className,
  placeholder,
}) => {
  const { handleConnectAgent, isConnected } = useConnectAgent();
  const localMultibandVolume = useMultibandMicrophoneTrackVolume(5);
  const agentContext = useMaybeVoiceAgentContext();

  return (
    <div className={cn("relative flex items-center p-4 gap-4", className)}>
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, #0af, #00f)",
            "linear-gradient(45deg, #0af, #fa0)",
            "linear-gradient(45deg, #fa0, #f00)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-10 h-10 flex justify-center items-center rounded-full shrink-0"
      >
        {!isConnected ? (
          <button
            onClick={() => {
              handleConnectAgent(agentContext!);
            }}
          >
            <Mic className="size-5 text-white" />
          </button>
        ) : (
          <AgentMultibandAudioVisualizer
            classNames="gap-0.5"
            state="connecting"
            barWidth={3}
            minBarHeight={2}
            maxBarHeight={14}
            accentColor={""}
            accentShade={950}
            frequencies={
              localMultibandVolume.length > 0
                ? localMultibandVolume
                : Array.from({ length: 3 }, () => [0.01])
            }
          />
        )}
      </motion.div>
      <AgentLiveTranscript
        className="text-lg font-normal not-italic"
        placeholder={placeholder}
      />
    </div>
  );
};
