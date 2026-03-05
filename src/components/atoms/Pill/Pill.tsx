import type { PillProps } from "./Pill.types";

const toneClasses: Record<NonNullable<PillProps["tone"]>, string> = {
  neutral: "bg-secondary-100 text-secondary-600",
  primary: "bg-primary-50 text-primary-700",
};

const sizeClasses: Record<NonNullable<PillProps["size"]>, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1 text-sm",
};

export const Pill = ({
  children,
  tone = "neutral",
  size = "xs",
  className,
}: PillProps) => (
  <span
    className={["rounded-full", toneClasses[tone], sizeClasses[size], className]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </span>
);
