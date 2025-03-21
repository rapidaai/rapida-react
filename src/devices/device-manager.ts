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
import { DEFAULT_DEVICE_ID } from "@/rapida/constants";
import { isSafari } from "@/rapida/utils";

export class DeviceManager {
  private static instance?: DeviceManager;

  static mediaDeviceKinds: MediaDeviceKind[] = ["audioinput", "audiooutput"];

  static getInstance(): DeviceManager {
    if (this.instance === undefined) {
      this.instance = new DeviceManager();
    }
    return this.instance;
  }

  static userMediaPromiseMap: Map<MediaDeviceKind, Promise<MediaStream>> =
    new Map();

  async getDevices(
    kind?: MediaDeviceKind,
    requestPermissions: boolean = true
  ): Promise<MediaDeviceInfo[]> {
    if (DeviceManager.userMediaPromiseMap?.size > 0) {
      console.debug("awaiting getUserMedia promise");
      try {
        if (kind) {
          await DeviceManager.userMediaPromiseMap.get(kind);
        } else {
          await Promise.all(DeviceManager.userMediaPromiseMap.values());
        }
      } catch (e: any) {
        console.warn("error waiting for media permissons");
      }
    }
    let devices = await navigator.mediaDevices.enumerateDevices();

    if (
      requestPermissions &&
      // for safari we need to skip this check, as otherwise it will re-acquire user media and fail on iOS https://bugs.webkit.org/show_bug.cgi?id=179363
      !(isSafari() && this.hasDeviceInUse(kind))
    ) {
      const isDummyDeviceOrEmpty =
        devices.filter((d) => d.kind === kind).length === 0 ||
        devices.some((device) => {
          const noLabel = device.label === "";
          const isRelevant = kind ? device.kind === kind : true;
          return noLabel && isRelevant;
        });

      if (isDummyDeviceOrEmpty) {
        const permissionsToAcquire = {
          video: kind !== "audioinput" && kind !== "audiooutput",
        };
        const stream = await navigator.mediaDevices.getUserMedia(
          permissionsToAcquire
        );
        devices = await navigator.mediaDevices.enumerateDevices();
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    }
    if (kind) {
      devices = devices.filter((device) => device.kind === kind);
    }

    return devices;
  }

  async normalizeDeviceId(
    kind: MediaDeviceKind,
    deviceId?: string,
    groupId?: string
  ): Promise<string | undefined> {
    if (deviceId !== DEFAULT_DEVICE_ID) {
      return deviceId;
    }

    // resolve actual device id if it's 'default': Chrome returns it when no
    // device has been chosen
    const devices = await this.getDevices(kind);

    const defaultDevice = devices.find((d) => d.deviceId === DEFAULT_DEVICE_ID);

    if (!defaultDevice) {
      console.warn("could not reliably determine default device");
      return undefined;
    }

    const device = devices.find(
      (d) =>
        d.deviceId !== DEFAULT_DEVICE_ID &&
        d.groupId === (groupId ?? defaultDevice.groupId)
    );

    if (!device) {
      console.warn("could not reliably determine default device");
      return undefined;
    }

    return device?.deviceId;
  }

  private hasDeviceInUse(kind?: MediaDeviceKind): boolean {
    return kind
      ? DeviceManager.userMediaPromiseMap.has(kind)
      : DeviceManager.userMediaPromiseMap.size > 0;
  }
}
