import { Pill } from "@/components/atoms/Pill";
import type { TagListProps } from "./TagList.types";

export const TagList = ({
  tags,
  tone = "neutral",
  size = "xs",
  prefix,
  className,
}: TagListProps) => (
  <div
    className={["flex flex-wrap gap-2", className].filter(Boolean).join(" ")}
  >
    {tags.map((tag) => (
      <Pill key={tag} tone={tone} size={size}>
        {prefix ? `${prefix}${tag}` : tag}
      </Pill>
    ))}
  </div>
);
