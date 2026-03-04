import React from "react";

export interface SectionHeadingProps {
  title: string;
  className?: string;
}

export const SectionHeading = ({ title, className }: SectionHeadingProps) => (
  <h2
    className={[
      "mb-12 text-center text-3xl font-bold text-secondary-900",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {title}
  </h2>
);
