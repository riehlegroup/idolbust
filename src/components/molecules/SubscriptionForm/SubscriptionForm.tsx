import { useId, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { createConsoleSubmitHandler } from "@/components/utils/interactive-submit";
import type {
  SubscriptionFormProps,
  SubscriptionFormSubmission,
} from "./SubscriptionForm.types";

const defaultSubmit =
  createConsoleSubmitHandler<SubscriptionFormSubmission>("SubscriptionForm");

export const SubscriptionForm = ({
  title = "Subscribe for research updates",
  description = "Get short monthly updates about what we are learning from users.",
  placeholder = "you@example.org",
  buttonLabel = "Subscribe",
  successMessage = "Thanks. Your subscription request was logged.",
  onSubmit = defaultSubmit,
  className,
}: SubscriptionFormProps) => {
  const emailInputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <section
      className={[
        "not-prose rounded-xl border border-secondary-200 bg-secondary-50 p-5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h3 className="text-lg font-semibold text-secondary-900">{title}</h3>
      <p className="mt-2 text-sm text-secondary-700">{description}</p>

      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        onSubmit={async (event) => {
          event.preventDefault();
          setStatus("idle");
          setErrorMessage(null);

          const trimmedEmail = email.trim();
          if (!trimmedEmail) {
            setStatus("error");
            setErrorMessage("Please provide an email address.");
            return;
          }

          setIsSubmitting(true);
          try {
            await onSubmit({ email: trimmedEmail });
            setStatus("success");
            setEmail("");
          } catch {
            setStatus("error");
            setErrorMessage("Submission failed. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <label className="sr-only" htmlFor={emailInputId}>
          Email address
        </label>
        <input
          id={emailInputId}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={placeholder}
          autoComplete="email"
          className="w-full rounded-lg border border-secondary-300 bg-white px-3 py-2 text-sm text-secondary-900 placeholder:text-secondary-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
          required
        />
        <Button type="submit" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? "Submitting..." : buttonLabel}
        </Button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-sm text-primary-700">{successMessage}</p>
      )}
      {status === "error" && errorMessage && (
        <p className="mt-3 text-sm text-red-700">{errorMessage}</p>
      )}
    </section>
  );
};
