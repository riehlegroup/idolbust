import type { PageHeadingProps } from "./PageHeading.types";

export const PageHeading = ({ title, className }: PageHeadingProps) => (
  <h1
    className={["text-4xl font-bold text-secondary-900", className]
      .filter(Boolean)
      .join(" ")}
  >
    {title}
  </h1>
);
