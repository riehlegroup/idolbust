import type { ReactNode } from "react";

export interface HomeHeroProps {
  title: string;
  highlight: string;
  description: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
}
