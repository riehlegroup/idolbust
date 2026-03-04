import React, { type ReactNode } from "react";

import { HighlightedTitle } from "@/components/atoms/HighlightedTitle";
import { SectionDescription } from "@/components/atoms/SectionDescription";
import { HeroActions } from "@/components/molecules/HeroActions";

export interface HomeHeroProps {
  title: string;
  highlight: string;
  description: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
}

export const HomeHero = ({
  title,
  highlight,
  description,
  primaryAction,
  secondaryAction,
}: HomeHeroProps) => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="text-center">
      <HighlightedTitle title={title} highlight={highlight} />
      <SectionDescription description={description} />
      <HeroActions primary={primaryAction} secondary={secondaryAction} />
    </div>
  </section>
);
