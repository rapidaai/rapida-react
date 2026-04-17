import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * @beta
 */
type AgentState = "disconnected" | "connecting" | "initializing" | "listening" | "thinking" | "speaking";
type MultibandAudioVisualizerComponentProps = {
    classNames?: string;
    state: AgentState;
    barWidth: number;
    minBarHeight: number;
    maxBarHeight: number;
    barColor?: string;
    frequencies: Float32Array[] | number[][];
};
declare const MultibandAudioVisualizerComponent: ({ classNames, state, barWidth, minBarHeight, maxBarHeight, barColor, frequencies, }: MultibandAudioVisualizerComponentProps) => react_jsx_runtime.JSX.Element;

export { type AgentState, MultibandAudioVisualizerComponent };
