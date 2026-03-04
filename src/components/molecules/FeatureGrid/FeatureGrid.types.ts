export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureGridProps {
  features: readonly FeatureItem[];
  className?: string;
}
