import type { SubmitHandler } from "@/components/utils/interactive-submit";
import { useUmamiInteractiveSubmit } from "@/components/utils/use-umami-interactive-submit";

import { FreeTextQuestion } from "./FreeTextQuestion";
import type {
  FreeTextQuestionProps,
  FreeTextQuestionSubmission,
} from "./FreeTextQuestion.types";

export interface TrackedFreeTextQuestionProps extends Omit<
  FreeTextQuestionProps,
  "onSubmit"
> {
  eventName: string;
  answerLengthEventKey?: string;
  answerKey: string;
  onSubmit?: SubmitHandler<FreeTextQuestionSubmission>;
}

export const TrackedFreeTextQuestion = ({
  eventName,
  answerLengthEventKey = "answerLength",
  answerKey,
  onSubmit,
  ...componentProps
}: TrackedFreeTextQuestionProps) => {
  const trackedSubmit = useUmamiInteractiveSubmit<FreeTextQuestionSubmission>({
    eventName,
    component: "free_text_question",
    onSubmit,
    mapEventData: (input) => ({
      [answerLengthEventKey]: input.answer.length,
      [answerKey]: input.answer,
    }),
  });

  return <FreeTextQuestion {...componentProps} onSubmit={trackedSubmit} />;
};
