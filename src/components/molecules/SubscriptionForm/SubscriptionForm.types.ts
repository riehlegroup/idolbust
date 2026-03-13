import type { SubmitHandler } from "@/components/utils/interactive-submit";

export interface SubscriptionFormSubmission {
  email: string;
}

export interface SubscriptionFormProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  successMessage?: string;
  onSubmit?: SubmitHandler<SubscriptionFormSubmission>;
  className?: string;
}
