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
  getRapidaSourceValue,
  RAPIDA_APP_SOURCE,
  RapidaSource,
  TYPESCRIPTSDK_SOURCE,
} from "@/rapida/utils/rapida_source";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import moment from "moment";

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

/**
 *
 * @returns
 */
export const isElectron = (): boolean => {
  return window.isElectron != undefined ? window.isElectron : false;
};

export function toDate(timestamp: Timestamp): Date {
  // Extract seconds and nanos from gRPC Timestamp
  const seconds = timestamp.getSeconds();
  const nanos = timestamp.getNanos();

  // Calculate milliseconds since Unix epoch
  // const milliseconds = seconds * 1000 + Math.round(nanos / 1e6);

  // // Create Moment.js object from milliseconds
  // return moment.utc(milliseconds).toDate();

  // // Extract seconds and nanos from the gRPC timestamp
  // const { seconds, nanos } = timestamp;

  // Convert seconds to milliseconds
  const millisecondsFromSeconds = seconds * 1000;

  // Convert nanos to milliseconds
  const millisecondsFromNanos = nanos / 1000000;

  // Combine the two to get the total milliseconds
  const totalMilliseconds = millisecondsFromSeconds + millisecondsFromNanos;

  // Create a new Date object using the total milliseconds (interpreted as UTC)
  const utcDate = new Date(totalMilliseconds);

  // The Date object automatically handles conversion to local time
  return utcDate;
}

export function toHumanReadableDate(timestamp: Timestamp): string {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return toDate(timestamp).toLocaleDateString(
    "en-US",
    options as Intl.DateTimeFormatOptions
  );
}

export function toHumanReadableDateTime(timestamp: Timestamp): string {
  return toDate(timestamp).toUTCString();
}

export function toHumanReadableRelativeTime(timestamp: Timestamp): string {
  return moment(toDate(timestamp).toUTCString()).fromNow();
}
export function daysAgoFromTimestamp(timestamp: Timestamp): number {
  const givenDate = moment(toDate(timestamp).toUTCString());
  const today = moment().utc();
  return today.diff(givenDate, "days");
}
export function toHumanReadableRelativeDay(timestamp: Timestamp): string {
  const daysAgo = daysAgoFromTimestamp(timestamp);
  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo === 1) {
    return "yesterday";
  } else {
    return `${daysAgo} days ago`;
  }
}

export function getTimeFromDate(timestamp: Timestamp): string {
  const hours = toDate(timestamp).getHours().toString().padStart(2, "0");
  const minutes = toDate(timestamp).getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
