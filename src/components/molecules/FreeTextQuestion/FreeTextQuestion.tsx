import { useId, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { createConsoleSubmitHandler } from "@/components/utils/interactive-submit";
import type {
  FreeTextQuestionProps,
  FreeTextQuestionSubmission,
} from "./FreeTextQuestion.types";

const defaultSubmit =
  createConsoleSubmitHandler<FreeTextQuestionSubmission>("FreeTextQuestion");

export const FreeTextQuestion = ({
  question,
  placeholder = "Share your thoughts...",
  submitLabel = "Submit answer",
  successMessage = "Thanks. Your answer was logged.",
  minLength = 5,
  rows = 4,
  onSubmit = defaultSubmit,
  className,
}: FreeTextQuestionProps) => {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fieldId = useId();

  return (
    <section
      className={[
        "not-prose rounded-xl border border-secondary-200 bg-secondary-50 p-5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setStatus("idle");
          setErrorMessage(null);

          const trimmedAnswer = answer.trim();
          if (trimmedAnswer.length < minLength) {
            setStatus("error");
            setErrorMessage(
              `Please write at least ${minLength} characters before submitting.`,
            );
            return;
          }

          setIsSubmitting(true);
          try {
            await onSubmit({ answer: trimmedAnswer });
            setStatus("success");
            setAnswer("");
          } catch {
            setStatus("error");
            setErrorMessage("Submission failed. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <label
          htmlFor={fieldId}
          className="block text-base font-semibold text-secondary-900"
        >
          {question}
        </label>
        <textarea
          id={fieldId}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="mt-3 w-full rounded-lg border border-secondary-300 bg-white px-3 py-2 text-sm text-secondary-900 placeholder:text-secondary-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
        <Button type="submit" className="mt-3" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : submitLabel}
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
