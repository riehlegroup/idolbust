import { useId, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { createConsoleSubmitHandler } from "@/components/utils/interactive-submit";
import type {
  TwoWaySelectionProps,
  TwoWaySelectionSubmission,
} from "./TwoWaySelection.types";

const defaultSubmit =
  createConsoleSubmitHandler<TwoWaySelectionSubmission>("TwoWaySelection");

export const TwoWaySelection = ({
  question,
  leftOption,
  rightOption,
  submitLabel = "Submit choice",
  successMessage = "Thanks. Your selection was logged.",
  onSubmit = defaultSubmit,
  className,
}: TwoWaySelectionProps) => {
  const [selectedSide, setSelectedSide] = useState<"left" | "right" | null>(
    null,
  );
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fieldName = useId();

  const resolvedAnswer =
    selectedSide === "left"
      ? (leftOption.value ?? leftOption.label)
      : selectedSide === "right"
        ? (rightOption.value ?? rightOption.label)
        : "";

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

          if (!resolvedAnswer) {
            setStatus("error");
            setErrorMessage("Please choose one option before submitting.");
            return;
          }

          setIsSubmitting(true);
          try {
            await onSubmit({ answer: resolvedAnswer });
            setStatus("success");
          } catch {
            setStatus("error");
            setErrorMessage("Submission failed. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <p className="text-base font-semibold text-secondary-900">{question}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label
            className={[
              "relative cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium transition-colors",
              selectedSide === "left"
                ? "border-primary-500 bg-primary-50 text-primary-800"
                : "border-secondary-200 text-secondary-800 hover:border-primary-300",
            ].join(" ")}
          >
            <input
              type="radio"
              name={fieldName}
              value="left"
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              checked={selectedSide === "left"}
              onChange={() => setSelectedSide("left")}
            />
            {leftOption.label}
          </label>

          <label
            className={[
              "relative cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium transition-colors",
              selectedSide === "right"
                ? "border-primary-500 bg-primary-50 text-primary-800"
                : "border-secondary-200 text-secondary-800 hover:border-primary-300",
            ].join(" ")}
          >
            <input
              type="radio"
              name={fieldName}
              value="right"
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              checked={selectedSide === "right"}
              onChange={() => setSelectedSide("right")}
            />
            {rightOption.label}
          </label>
        </div>

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
