import type { SubmitHandler } from "@/components/utils/interactive-submit";
import { useUmamiInteractiveSubmit } from "@/components/utils/use-umami-interactive-submit";

import { TwoWaySelection } from "./TwoWaySelection";
import type {
  TwoWaySelectionProps,
  TwoWaySelectionSubmission,
} from "./TwoWaySelection.types";

export interface TrackedTwoWaySelectionProps extends Omit<
  TwoWaySelectionProps,
  "onSubmit"
> {
  eventName: string;
  optionEventKey?: string;
  onSubmit?: SubmitHandler<TwoWaySelectionSubmission>;
}

export const TrackedTwoWaySelection = ({
  eventName,
  optionEventKey = "option",
  onSubmit,
  ...componentProps
}: TrackedTwoWaySelectionProps) => {
  const trackedSubmit = useUmamiInteractiveSubmit<TwoWaySelectionSubmission>({
    eventName,
    component: "two_way_selection",
    onSubmit,
    mapEventData: (input) => ({
      [optionEventKey]: input.answer,
    }),
  });

  return <TwoWaySelection {...componentProps} onSubmit={trackedSubmit} />;
};
