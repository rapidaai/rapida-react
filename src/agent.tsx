import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { useMaybeVoiceAgentContext } from "@/rapida/hooks/useVoiceAgent";
import { agentEventObserver } from "@/rapida/hooks/observables/voice-agent";
import { cn } from "@/styles/media";
import { AgentServerEvent } from "@/rapida/hooks/types/agent-event";
import { TooltipCursor } from "@/rapida/components/tooltip-cursor";
import { RapidaIcon } from "@/rapida/icons/rapida";
import { AgentMultibandAudioVisualizer } from "@/rapida/visualization/agent-multiband-audio-visualizer";
import { useMultibandMicrophoneTrackVolume } from "@/rapida/hooks/useMultibandTrackVolume";
import { useConnectAgent } from "@/rapida/hooks/useConnectAgent";
import { useDisconnectAgent } from "@/rapida/hooks/useDisconnectAgent";
import { useToggleAgent } from "@/rapida/hooks/useToggleAgent";

export function Agent() {
  const agentContext = useMaybeVoiceAgentContext();
  const [speaking, setSpeaking] = useState(false);
  const [change, setChange] = useState(false);

  //
  React.useEffect(() => {
    const serverEventListner = agentEventObserver(agentContext!).subscribe(
      (agentEvents) => {
        if (agentEvents?.eventType === AgentServerEvent.SendGeneration) {
          setSpeaking((speak) => true);
        }

        if (
          agentEvents?.eventType === AgentServerEvent.Complete ||
          agentEvents?.eventType === AgentServerEvent.Recieve ||
          agentEvents?.eventType === AgentServerEvent.Interruption
        ) {
          setSpeaking((speak) => false);
        }
        setChange((prev) => !prev);
      }
    );
    return () => {
      serverEventListner.unsubscribe();
    };
  }, [agentContext]);

  //

  // for handling mute thing
  const { handleToggleAgent, isMuted } = useToggleAgent();
  const { handleDisconnectAgent, isConnected } = useDisconnectAgent();
  const { handleConnectAgent } = useConnectAgent();

  return (
    <>
      <div className="space-y-8">
        <TooltipCursor
          content={isConnected ? "Just talk" : "Click to talk."}
          delay={200}
        >
          <motion.button
            className={cn(
              "relative",
              "shadow-[0px_0px_100px_-15px_#1d40b0]",
              "hover:shadow-[0px_0px_100px_-35px_#1d40b0]",
              "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white from-20% via-55% dark:from-slate-950 via-blue-600/40 dark:via-blue-600/40 to-blue-500 dark:to-blue-500 text-blue-600",
              "rounded-full",
              "w-32 h-32 flex items-center justify-center",
              "mx-auto group relative transition-colors"
            )}
            onClick={async () => {
              await handleConnectAgent(agentContext!);
            }}
          >
            {!isConnected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-9 h-8 mx-auto"
              >
                <motion.path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <motion.path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            )}
            {isConnected && (
              <div className="absolute animate-ping bg-blue-400/5 top-0 bottom-5 right-0 left-0 rounded-full z-0"></div>
            )}
            {isConnected && (
              <div
                className={cn(
                  "listening w-full h-full rounded-full flex justify-center items-center",
                  "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 to-blue-300 text-blue-400",
                  "dark:from-blue-600 dark:to-blue-950 "
                )}
              >
                {speaking ? (
                  <RapidaIcon className="w-12 h-10 mx-auto text-blue-100/60" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-9 mx-auto text-blue-100/80"
                  >
                    <motion.path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <motion.path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                  </svg>
                )}
              </div>
            )}
          </motion.button>
        </TooltipCursor>
        <div className="flex justify-center items-center">
          {isConnected ? (
            <VoiceAgentControlPanel
              isConnected={isConnected}
              isMute={isMuted}
              ontogglemute={() => {
                handleToggleAgent(agentContext!);
              }}
              ondisconnect={() => {
                handleDisconnectAgent(agentContext!);
              }}
              onClick={() => {
                handleDisconnectAgent(agentContext!);
              }}
            />
          ) : (
            <VoiceAgentConnectButton
              onClick={async () => {
                await handleConnectAgent(agentContext!);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

const VoiceAgentConnectButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className={cn(
        "w-fit py-0.5 z-10 px-2 animate-borderRotate [background:linear-gradient(45deg,#ffffff,theme(colors.white)_50%,#ffffff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.blue.500)_86%,_theme(colors.blue.300)_90%,_theme(colors.blue.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent",
        "dark:[background:linear-gradient(45deg,#000000,theme(colors.black)_50%,#000000)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.blue.500)_86%,_theme(colors.blue.300)_90%,_theme(colors.blue.500)_94%,_theme(colors.slate.600/.48))_border-box]"
      )}
      onMouseEnter={(e) => {
        e.preventDefault();
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
      }}
      onClick={props.onClick}
    >
      <span className="px-1 py-1 font-medium text-gray-500 hover:text-blue-600">
        Click to talk.
      </span>
    </motion.button>
  );
};

const VoiceAgentResumeButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.115,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className={cn(
        "w-fit py-0.5 z-10 px-1.5 animate-borderRotate [background:linear-gradient(45deg,#ffffff,theme(colors.white)_50%,#ffffff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.blue.500)_86%,_theme(colors.blue.300)_90%,_theme(colors.blue.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent",
        "dark:[background:linear-gradient(45deg,#000000,theme(colors.black)_50%,#000000)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.blue.500)_86%,_theme(colors.blue.300)_90%,_theme(colors.blue.500)_94%,_theme(colors.slate.600/.48))_border-box]"
      )}
      onMouseEnter={(e) => {
        e.preventDefault();
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
      }}
      onClick={props.onClick}
    >
      <span className="px-1 py-1 font-medium text-gray-500 hover:text-blue-600">
        Click to resume.
      </span>
    </motion.button>
  );
};

const VoiceAgentControlPanel: FC<
  React.HTMLAttributes<HTMLButtonElement> & {
    isConnected: boolean;
    isMute: boolean;
    ontogglemute: () => void;
    ondisconnect: () => void;
  }
> = ({ isConnected, isMute, ontogglemute, ondisconnect, ...props }) => {
  const localMultibandVolume = useMultibandMicrophoneTrackVolume(5);

  if (isMute) return <VoiceAgentResumeButton onClick={ontogglemute} />;
  return (
    <div
      className={cn(
        "py-0.5 z-10 px-1 rounded-full border backdrop-blur-md bg-white/30 dark:bg-white/5 border-gray-300 dark:border-gray-800"
      )}
    >
      <div className="flex items-center justify-center h-full text-gray-800/80 gap-1 w-fit">
        <motion.button
          className="p-1 rounded-full"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.985,
          }}
          onClick={ontogglemute}
        >
          {!isMute ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mx-auto dark:text-slate-600 text-slate-500 hover:text-red-600"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-6 mx-auto dark:text-slate-600 text-slate-500 hover:text-blue-600"
            >
              <line x1="2" x2="22" y1="2" y2="22" />
              <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
              <path d="M5 10v2a7 7 0 0 0 12 5" />
              <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          )}
        </motion.button>
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
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="p-1 rounded-full"
          onClick={ondisconnect}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mx-auto dark:text-red-400/80 text-red-600"
          >
            <circle cx="12" cy="12" r="10" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};
