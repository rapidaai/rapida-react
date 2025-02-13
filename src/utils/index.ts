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
import { getBrowser } from "@/rapida/utils/rapida_client";
import { RapidaEnvironment } from "@/rapida/utils/rapida_environment";
import {
  DEBUGGER_SOURCE,
  RAPIDA_APP_SOURCE,
  RapidaSource,
} from "@/rapida/utils/rapida_source";

export function isSafari(): boolean {
  return getBrowser()?.name === "Safari";
}

export function isChrome(): boolean {
  return getBrowser()?.name === "Chrome";
}

export function isFirefox(): boolean {
  return getBrowser()?.name === "Firefox";
}

export function isInternetExplorer(): boolean {
  return getBrowser()?.name === "Internet Explorer";
}

export function isEdge(): boolean {
  return getBrowser()?.name === "Edge";
}

export function isMacOs(): boolean {
  return getBrowser()?.os === "macOS";
}

export function isIOS(): boolean {
  return getBrowser()?.os === "iOS";
}

export const GetEnvironment = (): RapidaEnvironment => {
  return process.env.NODE_ENV !== "development"
    ? RapidaEnvironment.PRODUCTION
    : RapidaEnvironment.DEVELOPMENT;
};

/**
 *
 * @returns
 */
export const GetSource = (): RapidaSource => {
  if (isElectron()) return RAPIDA_APP_SOURCE;
  return DEBUGGER_SOURCE;
};

export const isElectron = (): boolean => {
  return window.isElectron;
};
