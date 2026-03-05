import type { PillTone } from "@/components/atoms/Pill";

export interface TagListProps {
  tags: readonly string[];
  tone?: PillTone;
  size?: "xs" | "sm";
  prefix?: string;
  className?: string;
}
