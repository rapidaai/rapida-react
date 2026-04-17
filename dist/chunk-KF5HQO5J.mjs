import {
  cn
} from "./chunk-32YFHJN5.mjs";

// src/components/visualization/multiband-audio-visualizer.tsx
import { useEffect, useState, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var MultibandAudioVisualizerComponent = ({
  classNames,
  state,
  barWidth,
  minBarHeight,
  maxBarHeight,
  barColor = "bg-white",
  frequencies
}) => {
  const summedFrequencies = useMemo(() => {
    return frequencies.map((bandFrequencies) => {
      if (!bandFrequencies || bandFrequencies.length === 0) return 0;
      const freqArray = bandFrequencies;
      const sumSquares = freqArray.reduce((acc, val) => acc + val * val, 0);
      const rms = Math.sqrt(sumSquares / freqArray.length);
      return Math.min(1, Math.pow(rms, 0.7) * 1.2);
    });
  }, [frequencies]);
  const [thinkingIndex, setThinkingIndex] = useState(
    Math.floor(summedFrequencies.length / 2)
  );
  const [thinkingDirection, setThinkingDirection] = useState(
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
  const isActive = useMemo(() => {
    return state === "listening" || state === "speaking";
  }, [state]);
  return /* @__PURE__ */ jsx("div", { className: cn(classNames, "flex flex-row items-center"), children: summedFrequencies.map((frequency, index) => {
    const isCenter = index === Math.floor(summedFrequencies.length / 2);
    const minThreshold = 0.05;
    const effectiveFrequency = Math.max(frequency, minThreshold);
    const height = minBarHeight + effectiveFrequency * (maxBarHeight - minBarHeight);
    const scale = isActive && frequency > 0.3 ? 1 + frequency * 0.1 : 1;
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          barColor,
          "rounded-full",
          isCenter && state === "listening" && frequency < 0.1 ? "animate-pulse" : ""
        ),
        style: {
          height: `${height}px`,
          width: `${barWidth}px`,
          transform: `scaleY(${scale})`,
          transition: "height 0.08s ease-out, transform 0.08s ease-out, background-color 0.2s ease-out",
          willChange: "height, transform"
        }
      },
      "frequency-" + index
    );
  }) });
};

export {
  MultibandAudioVisualizerComponent
};
//# sourceMappingURL=chunk-KF5HQO5J.mjs.map