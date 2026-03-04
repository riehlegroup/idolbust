import React from "react";

export interface HighlightedTitleProps {
  title: string;
  highlight: string;
  className?: string;
  highlightClassName?: string;
}

export const HighlightedTitle = ({
  title,
  highlight,
  className,
  highlightClassName,
}: HighlightedTitleProps) => (
  <h1
    className={[
      "text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {title}{" "}
    <span
      className={["text-primary-600", highlightClassName]
        .filter(Boolean)
        .join(" ")}
    >
      {highlight}
    </span>
  </h1>
);
