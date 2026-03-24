import { useCallback } from "react";

import type { SubmitHandler } from "@/components/utils/interactive-submit";
import {
  trackUmamiEvent,
  type UmamiEventValue,
} from "@/components/utils/umami";

interface UseUmamiInteractiveSubmitOptions<TInput> {
  eventName: string;
  component?: string;
  onSubmit?: SubmitHandler<TInput>;
  mapEventData?: (input: TInput) => Record<string, UmamiEventValue>;
}

export function useUmamiInteractiveSubmit<TInput>({
  eventName,
  component,
  onSubmit,
  mapEventData,
}: UseUmamiInteractiveSubmitOptions<TInput>): SubmitHandler<TInput> {
  return useCallback(
    async (input: TInput) => {
      const eventData = mapEventData?.(input);
      trackUmamiEvent(eventName, {
        ...(component ? { component } : {}),
        action: "submit_attempted",
        ...eventData,
      });

      try {
        if (onSubmit) {
          await onSubmit(input);
        }
        trackUmamiEvent(eventName, {
          ...(component ? { component } : {}),
          action: "submit_succeeded",
          ...eventData,
        });
      } catch (error) {
        trackUmamiEvent(eventName, {
          ...(component ? { component } : {}),
          action: "submit_failed",
          ...eventData,
        });
        throw error;
      }
    },
    [component, eventName, mapEventData, onSubmit],
  );
}
