import { useId, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { createConsoleSubmitHandler } from "@/components/utils/interactive-submit";
import type { PollProps, PollSubmission } from "./Poll.types";

const defaultSubmit = createConsoleSubmitHandler<PollSubmission>("Poll");

export const Poll = ({
  question,
  options,
  submitLabel = "Submit vote",
  successMessage = "Thanks. Your vote was logged.",
  onSubmit = defaultSubmit,
  className,
}: PollProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const questionId = useId();

  return (
    <section
      className={[
        "not-prose rounded-xl border border-secondary-200 bg-white p-5",
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

          if (!selectedAnswer) {
            setStatus("error");
            setErrorMessage("Please choose one option before submitting.");
            return;
          }

          setIsSubmitting(true);
          try {
            await onSubmit({ answer: selectedAnswer });
            setStatus("success");
          } catch {
            setStatus("error");
            setErrorMessage("Submission failed. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <fieldset>
          <legend
            id={`${questionId}-legend`}
            className="text-base font-semibold text-secondary-900"
          >
            {question}
          </legend>
          <div
            className="mt-3 space-y-2"
            aria-labelledby={`${questionId}-legend`}
          >
            {options.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-secondary-200 px-3 py-2 hover:border-primary-300"
              >
                <input
                  type="radio"
                  name={questionId}
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(event) => setSelectedAnswer(event.target.value)}
                  className="h-4 w-4 border-secondary-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-secondary-800">{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <Button type="submit" className="mt-4" disabled={isSubmitting}>
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
