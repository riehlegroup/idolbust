import type { SubmitHandler } from "@/components/utils/interactive-submit";

export interface TwoWayOption {
  label: string;
  value?: string;
}

export interface TwoWaySelectionSubmission {
  answer: string;
}

export interface TwoWaySelectionProps {
  question: string;
  leftOption: TwoWayOption;
  rightOption: TwoWayOption;
  submitLabel?: string;
  successMessage?: string;
  onSubmit?: SubmitHandler<TwoWaySelectionSubmission>;
  className?: string;
}
