"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/visualization/multiband-audio-visualizer.tsx
var multiband_audio_visualizer_exports = {};
__export(multiband_audio_visualizer_exports, {
  MultibandAudioVisualizerComponent: () => MultibandAudioVisualizerComponent
});
module.exports = __toCommonJS(multiband_audio_visualizer_exports);

// src/styles/index.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
var sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920
};
var media = Object.keys(sizes).reduce(
  (acc, size) => {
    acc[size] = () => `@media (min-width:${sizes[size]}px)`;
    return acc;
  },
  {}
);
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/visualization/multiband-audio-visualizer.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var MultibandAudioVisualizerComponent = ({
  classNames,
  state,
  barWidth,
  minBarHeight,
  maxBarHeight,
  barColor = "bg-white",
  frequencies
}) => {
  const summedFrequencies = (0, import_react.useMemo)(() => {
    return frequencies.map((bandFrequencies) => {
      if (!bandFrequencies || bandFrequencies.length === 0) return 0;
      const freqArray = bandFrequencies;
      const sumSquares = freqArray.reduce((acc, val) => acc + val * val, 0);
      const rms = Math.sqrt(sumSquares / freqArray.length);
      return Math.min(1, Math.pow(rms, 0.7) * 1.2);
    });
  }, [frequencies]);
  const [thinkingIndex, setThinkingIndex] = (0, import_react.useState)(
    Math.floor(summedFrequencies.length / 2)
  );
  const [thinkingDirection, setThinkingDirection] = (0, import_react.useState)(
    "right"
  );
  (0, import_react.useEffect)(() => {
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
  const isActive = (0, import_react.useMemo)(() => {
    return state === "listening" || state === "speaking";
  }, [state]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn(classNames, "flex flex-row items-center"), children: summedFrequencies.map((frequency, index) => {
    const isCenter = index === Math.floor(summedFrequencies.length / 2);
    const minThreshold = 0.05;
    const effectiveFrequency = Math.max(frequency, minThreshold);
    const height = minBarHeight + effectiveFrequency * (maxBarHeight - minBarHeight);
    const scale = isActive && frequency > 0.3 ? 1 + frequency * 0.1 : 1;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MultibandAudioVisualizerComponent
});
//# sourceMappingURL=multiband-audio-visualizer.js.map