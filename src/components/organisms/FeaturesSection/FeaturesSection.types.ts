import type { FeatureItem } from "@/components/molecules/FeatureGrid/FeatureGrid.types";

export interface FeaturesSectionProps {
  title: string;
  features: readonly FeatureItem[];
}
