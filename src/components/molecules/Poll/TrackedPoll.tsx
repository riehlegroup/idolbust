import type { SubmitHandler } from "@/components/utils/interactive-submit";
import { useUmamiInteractiveSubmit } from "@/components/utils/use-umami-interactive-submit";

import { Poll } from "./Poll";
import type { PollProps, PollSubmission } from "./Poll.types";

export interface TrackedPollProps extends Omit<PollProps, "onSubmit"> {
  eventName: string;
  optionEventKey?: string;
  onSubmit?: SubmitHandler<PollSubmission>;
}

export const TrackedPoll = ({
  eventName,
  optionEventKey = "option",
  onSubmit,
  ...pollProps
}: TrackedPollProps) => {
  const trackedSubmit = useUmamiInteractiveSubmit<PollSubmission>({
    eventName,
    component: "poll",
    onSubmit,
    mapEventData: (input) => ({
      [optionEventKey]: input.answer,
    }),
  });

  return <Poll {...pollProps} onSubmit={trackedSubmit} />;
};
