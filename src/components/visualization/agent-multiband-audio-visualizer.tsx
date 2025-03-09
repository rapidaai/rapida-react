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
import { cn } from "@/rapida/styles";
import { useEffect, useState } from "react";

/**
 * @beta
 */
export type AgentState =
  | "disconnected"
  | "connecting"
  | "initializing"
  | "listening"
  | "thinking"
  | "speaking";

type AgentMultibandAudioVisualizerProps = {
  classNames?: string;
  state: AgentState;
  barWidth: number;
  minBarHeight: number;
  maxBarHeight: number;
  barColor?: string;
  frequencies: Float32Array[] | number[][];
};

export const AgentMultibandAudioVisualizer = ({
  classNames,
  state,
  barWidth,
  minBarHeight,
  maxBarHeight,
  barColor = "bg-white",
  frequencies,
}: AgentMultibandAudioVisualizerProps) => {
  const summedFrequencies = frequencies.map((bandFrequencies) => {
    const sum = (bandFrequencies as number[]).reduce((a, b) => a + b, 0);
    return Math.sqrt(sum / bandFrequencies.length);
  });

  const [thinkingIndex, setThinkingIndex] = useState(
    Math.floor(summedFrequencies.length / 2)
  );
  const [thinkingDirection, setThinkingDirection] = useState<"left" | "right">(
    "right"
  );

  useEffect(() => {
    if (state !== "thinking") {
      setThinkingIndex(Math.floor(summedFrequencies.length / 2));
      return;
    }
    const timeout = setTimeout(() => {
      if (thinkingDirection === "right") {
        if (thinkingIndex === summedFrequencies.length - 1) {
          setThinkingDirection("left");
          setThinkingIndex((prev) => prev - 1);
        } else {
          setThinkingIndex((prev) => prev + 1);
        }
      } else {
        if (thinkingIndex === 0) {
          setThinkingDirection("right");
          setThinkingIndex((prev) => prev + 1);
        } else {
          setThinkingIndex((prev) => prev - 1);
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [state, summedFrequencies.length, thinkingDirection, thinkingIndex]);

  return (
    <div className={cn(classNames, "flex flex-row items-center")}>
      {summedFrequencies.map((frequency, index) => {
        const isCenter = index === Math.floor(summedFrequencies.length / 2);
        let transform;

        return (
          <div
            className={cn(
              barColor,
              "rounded-full",
              isCenter && state === "listening" ? "animate-pulse" : ""
            )}
            key={"frequency-" + index}
            style={{
              height:
                minBarHeight + frequency * (maxBarHeight - minBarHeight) + "px",
              width: barWidth + "px",
              transition:
                "background-color 0.35s ease-out, transform 0.25s ease-out",
              transform: transform,
            }}
          ></div>
        );
      })}
    </div>
  );
};
