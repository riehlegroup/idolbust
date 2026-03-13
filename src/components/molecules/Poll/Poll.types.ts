import type { SubmitHandler } from "@/components/utils/interactive-submit";

export interface PollSubmission {
  answer: string;
}

export interface PollProps {
  question: string;
  options: readonly string[];
  submitLabel?: string;
  successMessage?: string;
  onSubmit?: SubmitHandler<PollSubmission>;
  className?: string;
}
