import * as React from "react";
import { useObservableState } from "@/rapida/hooks/useObservableState";
import { BehaviorSubject } from "rxjs";
import {
  createActiveDeviceObservable,
  createMediaDeviceObserver,
} from "@/rapida/hooks/observables/voice-agent";
import { useMaybeVoiceAgentContext } from "@/rapida/hooks/useVoiceAgent";
import { VoiceAgent } from "@/rapida/hooks/types/voice-agent";

/** @public */
export interface UseMediaDeviceSelectProps {
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
export function useMediaDeviceSelect({
  requestPermissions,
  onError,
}: UseMediaDeviceSelectProps) {
  const voiceAgentContext = useMaybeVoiceAgentContext();
  // List of all devices.
  const deviceObserver = React.useMemo(
    () => createMediaDeviceObserver("audioinput", onError, requestPermissions),
    [requestPermissions, onError]
  );
  const devices = useObservableState(deviceObserver, [] as MediaDeviceInfo[]);
  //
  const [currentDeviceId, setCurrentDeviceId] = React.useState<string>(
    voiceAgentContext?.deviceId ?? ""
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

export function setupDeviceSelector(kind: MediaDeviceKind, agent?: VoiceAgent) {
  const activeDeviceSubject = new BehaviorSubject<string | undefined>(
    undefined
  );

  const activeDeviceObservable = agent
    ? createActiveDeviceObservable(agent)
    : activeDeviceSubject.asObservable();

  const setActiveMediaDevice = async (id: string) => {
    if (agent) {
      await agent.setDeviceId(id);
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
