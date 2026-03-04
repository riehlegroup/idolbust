import React from "react";

import type { Feature } from "@/data-models/home";
import { Card } from "@/components/molecules/Card";

export interface FeatureGridProps {
  features: readonly Feature[];
  className?: string;
}

export const FeatureGrid = ({ features, className }: FeatureGridProps) => (
  <div
    className={["grid gap-8 md:grid-cols-3", className]
      .filter(Boolean)
      .join(" ")}
  >
    {features.map((feature) => (
      <Card
        key={feature.title}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
);
