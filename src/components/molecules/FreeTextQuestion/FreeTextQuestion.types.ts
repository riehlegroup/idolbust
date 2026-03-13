import type { SubmitHandler } from "@/components/utils/interactive-submit";

export interface FreeTextQuestionSubmission {
  answer: string;
}

export interface FreeTextQuestionProps {
  question: string;
  placeholder?: string;
  submitLabel?: string;
  successMessage?: string;
  minLength?: number;
  rows?: number;
  onSubmit?: SubmitHandler<FreeTextQuestionSubmission>;
  className?: string;
}
