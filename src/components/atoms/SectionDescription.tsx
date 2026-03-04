import React from "react";

export interface SectionDescriptionProps {
  description: string;
  className?: string;
}

export const SectionDescription = ({
  description,
  className,
}: SectionDescriptionProps) => (
  <p
    className={["mx-auto mt-6 max-w-2xl text-lg text-secondary-600", className]
      .filter(Boolean)
      .join(" ")}
  >
    {description}
  </p>
);
