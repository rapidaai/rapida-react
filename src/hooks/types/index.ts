export const DEFAULT_DEVICE_ID = "default";

export enum Channel {
  // text channel for input and output
  Text = "text",

  // audio channel for input and output
  Audio = "audio",
}

export enum ConnectionState {
  // when connection is disconnect or at initial state
  Disconnected = "disconnected",

  // connected voice agent state
  Connected = "connected",
}

export enum MediaDeviceFailure {
  // user rejected permissions
  PermissionDenied = "PermissionDenied",

  // device is not available
  NotFound = "NotFound",

  // device is in use. On Windows, only a single tab may get access to a device at a time.
  DeviceInUse = "DeviceInUse",

  //
  Other = "Other",
}

export interface WebAudioSettings {
  /**
   * Audio context for audio settings
   */
  audioContext: AudioContext;
}

export interface AudioOutputOptions {
  /**
   * deviceId to output audio
   *
   * Only supported on browsers where `setSinkId` is available
   */
  deviceId?: string;
}

export interface AudioCaptureOptions {
  /**
   * specifies whether automatic gain control is preferred and/or required
   */
  autoGainControl?: ConstrainBoolean;

  /**
   * the channel count or range of channel counts which are acceptable and/or required
   */
  channelCount?: ConstrainULong;

  /**
   * A ConstrainDOMString object specifying a device ID or an array of device
   * IDs which are acceptable and/or required.
   */
  deviceId?: ConstrainDOMString;

  /**
   * whether or not echo cancellation is preferred and/or required
   */
  echoCancellation?: ConstrainBoolean;

  /**
   * the latency or range of latencies which are acceptable and/or required.
   */
  latency?: ConstrainDouble;

  /**
   * whether noise suppression is preferred and/or required.
   */
  noiseSuppression?: ConstrainBoolean;

  /**
   * the sample rate or range of sample rates which are acceptable and/or required.
   */
  sampleRate?: ConstrainULong;

  /**
   * sample size or range of sample sizes which are acceptable and/or required.
   */
  sampleSize?: ConstrainULong;
}

export interface Message {
  /**
   * role of the message who had sent it
   */
  role: "system" | "user";

  /**
   * list of sentences in the message
   */
  messages: string[];
}
