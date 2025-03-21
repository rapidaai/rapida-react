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
import * as React from "react";
import { useObservableState } from "@/rapida/hooks/use-observable-state";
import { BehaviorSubject } from "rxjs";
import {
  browserMediaDeviceObserver,
  agentInputMediaDeviceChangeObservable,
} from "@/rapida/hooks/observables/voice-agent";
import { useMaybeVoiceAgent } from "@/rapida/hooks/use-voice-agent";
import { VoiceAgent } from "@/rapida/events/voice-agent";

/** @public */
interface UseMediaDeviceSelectProps {
  /**
   * this will call getUserMedia if the permissions are not yet given to enumerate the devices with device labels.
   * in some browsers multiple calls to getUserMedia result in multiple permission prompts.
   * It's generally advised only flip this to true, once a (preview) track has been acquired successfully with the
   * appropriate permissions.
   *
   * @see {@link MediaDeviceMenu}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices | MDN enumerateDevices}
   */
  requestPermissions?: boolean;
  /**
   * this callback gets called if an error is thrown when failing to select a device and also if a user
   * denied permissions, eventhough the `requestPermissions` option is set to `true`.
   * Most commonly this will emit a MediaDeviceError
   */
  onError?: (e: Error) => void;
}

/**
 * The `useMediaDeviceSelect` hook is used to implement the `MediaDeviceSelect` component and
 * returns o.a. the list of devices of a given kind (audioinput or videoinput), the currently active device
 * and a function to set the the active device.
 *
 * @example
 * ```tsx
 * const { devices, activeDeviceId, setActiveMediaDevice } = useMediaDeviceSelect({kind: 'audioinput'});
 * ```
 * @public
 */
export function useSelectInputDeviceAgent({
  requestPermissions,
  onError,
}: UseMediaDeviceSelectProps) {
  const voiceAgentContext = useMaybeVoiceAgent();
  // List of all devices.
  const deviceObserver = React.useMemo(
    () => browserMediaDeviceObserver("audioinput", onError, requestPermissions),
    [requestPermissions, onError]
  );
  const devices = useObservableState(deviceObserver, [] as MediaDeviceInfo[]);
  //
  const [currentDeviceId, setCurrentDeviceId] = React.useState<string>(
    voiceAgentContext?.inputMediaDevice ?? ""
  );
  const { className, activeDeviceObservable, setActiveMediaDevice } =
    React.useMemo(
      () => setupDeviceSelector("audioinput", voiceAgentContext),
      [voiceAgentContext]
    );

  React.useEffect(() => {
    const listener = activeDeviceObservable.subscribe((deviceId) => {
      if (deviceId && deviceId !== currentDeviceId) {
        setCurrentDeviceId(deviceId);
      }
    });
    return () => {
      listener?.unsubscribe();
    };
  }, [activeDeviceObservable]);

  return {
    devices,
    className,
    activeDeviceId: currentDeviceId,
    setActiveMediaDevice,
  };
}

function setupDeviceSelector(_: MediaDeviceKind, agent?: VoiceAgent) {
  const activeDeviceSubject = new BehaviorSubject<string | undefined>(
    undefined
  );

  const activeDeviceObservable = agent
    ? agentInputMediaDeviceChangeObservable(agent)
    : activeDeviceSubject.asObservable();

  const setActiveMediaDevice = async (id: string) => {
    if (agent) {
      await agent.setInputMediaDevice(id);
    } else if (activeDeviceSubject.value !== id) {
      activeDeviceSubject.next(id);
    }
  };
  const className: string = "media-device-select";
  return {
    className,
    activeDeviceObservable,
    setActiveMediaDevice,
  };
}
