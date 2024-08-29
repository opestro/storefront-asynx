import { FeeeF } from "feeef/src/feeef/feeef";

export const ff = new FeeeF({
    apiKey: "c43Yfd3bgolijJU3b3bx095vlfTrvnL94baZrd1",
    baseURL: "https://apis.feeef.net/api/v1",
    cache: false,
    // baseURL: "http://localhost:3333/api/v1",
  });


var currentHost: string | null = null;
export function setCurrentHost(url: string) {
    currentHost = url;
}
export function getCurrentHost() {
  if (typeof window === "undefined") {
    return currentHost;
  }
  return window.location.host;
}

export function getCurrentUrl(path: string) {
  return `https://${getCurrentHost()}${path}`;
}