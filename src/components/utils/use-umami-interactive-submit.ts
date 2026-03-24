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
      const payload = {
        ...(component ? { component } : {}),
        ...eventData,
      };
      trackUmamiEvent(`${eventName}_attempted`, payload);

      try {
        if (onSubmit) {
          await onSubmit(input);
        }
        trackUmamiEvent(`${eventName}_submitted`, payload);
      } catch (error) {
        trackUmamiEvent(`${eventName}_failed`, payload);
        throw error;
      }
    },
    [component, eventName, mapEventData, onSubmit],
  );
}
