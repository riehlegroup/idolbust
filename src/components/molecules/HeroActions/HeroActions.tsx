import type { HeroActionsProps } from "@/components/molecules/HeroActions/HeroActions.types";

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
