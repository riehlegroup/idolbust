export type UmamiEventValue = string | number | boolean | null;

interface UmamiTracker {
  track: (
    eventName: string,
    eventData?: Record<string, UmamiEventValue>,
  ) => Promise<unknown> | unknown;
}

interface UmamiWindow extends Window {
  umami?: UmamiTracker;
}

export function trackUmamiEvent(
  eventName: string,
  eventData?: Record<string, UmamiEventValue>,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const umami = (window as UmamiWindow).umami;
  if (!umami || typeof umami.track !== "function") {
    return;
  }

  void umami.track(eventName, eventData);
}
