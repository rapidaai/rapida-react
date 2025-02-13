import { ArrowUpRight } from "lucide-react";
import { FC } from "react";

export const QuickSuggestion: FC<{
  suggestion: string;
  onClick: () => void;
}> = ({ suggestion, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ms-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-primary text-primary align-middle hover:bg-primary/10 focus:outline-none  text-sm  dark:text-primary dark:border-primary "
    >
      {suggestion}
      <ArrowUpRight className="size-4" />
    </button>
  );
};
