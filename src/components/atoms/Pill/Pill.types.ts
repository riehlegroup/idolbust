export type PillTone = "neutral" | "primary";

export interface PillProps {
  children: string;
  tone?: PillTone;
  size?: "xs" | "sm";
  className?: string;
}
