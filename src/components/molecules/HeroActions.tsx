import React, { type ReactNode } from "react";

export interface HeroActionsProps {
  primary?: ReactNode;
  secondary?: ReactNode;
  className?: string;
}

export const HeroActions = ({
  primary,
  secondary,
  className,
}: HeroActionsProps) => (
  <div
    className={["mt-8 flex justify-center gap-4", className]
      .filter(Boolean)
      .join(" ")}
  >
    {primary}
    {secondary}
  </div>
);
