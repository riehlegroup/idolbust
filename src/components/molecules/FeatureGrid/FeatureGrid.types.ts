export interface FeatureItem {
  title: string;
  description: string;
  href?: string;
}

export interface FeatureGridProps {
  features: readonly FeatureItem[];
  className?: string;
}
