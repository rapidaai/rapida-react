import { useInputToggleAgent } from "@/rapida/hooks/useInputToggleAgent";
import { useEnsureVoiceAgent } from "@/rapida/hooks/useVoiceAgent";
import { cn } from "@/styles/media";
import { AudioLines, Send, SendHorizontal } from "lucide-react";
import { FC, HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface SimpleMessagingAcitonProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}
export const SimpleMessagingAction: FC<SimpleMessagingAcitonProps> = ({
  className,
  placeholder,
}) => {
  const ctx = useEnsureVoiceAgent();
  const { handleInputToggle, channel } = useInputToggleAgent();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmitForm = (data) => {
    ctx?.onSendText(data.message);
    reset();
  };

  return (
    <form
      className={cn("relative h-full", className)}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <textarea
        className="resize-none px-2 pt-2 block w-full h-full text-base disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-950 dark:placeholder-gray-500 dark:text-gray-300 border-none outline-none"
        placeholder={placeholder}
        {...register("message", {
          required: "Please write your message.",
        })}
        required
        cols={20}
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit(onSubmitForm)(e);
          }
        }}
      ></textarea>

      <div className="absolute rounded-b-lg bg-white dark:bg-gray-950 right-2 bottom-2 w-fit">
        {isValid ? (
          <button
            type="submit"
            className="inline-flex shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:bg-primary"
          >
            <Send className="shrink-0 size-5" strokeWidth="2" />
          </button>
        ) : (
          <button
            onClick={() => {
              handleInputToggle(ctx);
            }}
            type="button"
            className="inline-flex shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:bg-primary"
          >
            <AudioLines className="shrink-0 size-5" strokeWidth="2.5" />
          </button>
        )}
      </div>
    </form>
  );
};
