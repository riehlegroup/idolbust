import { Card } from "@/components/molecules/Card";
import type { FeatureGridProps, FeatureItem } from "./FeatureGrid.types";

export const FeatureGrid = ({ features, className }: FeatureGridProps) => (
  <div
    className={["grid gap-8 md:grid-cols-3", className]
      .filter(Boolean)
      .join(" ")}
  >
    {features.map((feature: FeatureItem) => (
      <Card
        key={feature.title}
        title={feature.title}
        description={feature.description}
        href={feature.href}
      />
    ))}
  </div>
);
