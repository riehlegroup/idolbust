import type { SectionDescriptionProps } from "./SectionDescription.types";

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
