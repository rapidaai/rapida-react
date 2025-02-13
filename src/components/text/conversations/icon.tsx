import { cn } from "@/styles/media";
import { ArrowUpRight, CopyIcon } from "lucide-react";
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {}

export const BrandIcon: FC<IconProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "p-1 bg-primary aspect-square w-fit h-fit rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const UserIcon: FC<IconProps> = ({ className, children }) => {
  return (
    <span
      className={cn(
        "shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
};
