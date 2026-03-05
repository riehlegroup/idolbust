import { MetaLine } from "@/components/atoms/MetaLine";
import { Pill } from "@/components/atoms/Pill";
import type { MetaGroupProps } from "./MetaGroup.types";

export const MetaGroup = ({
  category,
  dateIso,
  dateLabel,
  author,
  updatedLabel,
  className,
}: MetaGroupProps) => (
  <div
    className={["flex flex-wrap items-center gap-2", className]
      .filter(Boolean)
      .join(" ")}
  >
    {category && (
      <Pill tone="neutral" size="sm" className="font-medium text-secondary-700">
        {category}
      </Pill>
    )}
    <MetaLine
      dateIso={dateIso}
      dateLabel={dateLabel}
      author={author}
      updatedLabel={updatedLabel}
      className={author || updatedLabel ? "text-secondary-600" : undefined}
    />
  </div>
);
