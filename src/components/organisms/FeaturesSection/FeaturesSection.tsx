import { SectionHeading } from "@/components/atoms/SectionHeading";
import { FeatureGrid } from "@/components/molecules/FeatureGrid";
import type { FeaturesSectionProps } from "./FeaturesSection.types";

export const FeaturesSection = ({ title, features }: FeaturesSectionProps) => (
  <section className="mx-auto max-w-7xl bg-secondary-50 px-4 py-16 sm:px-6 lg:px-8">
    <SectionHeading title={title} />
    <FeatureGrid features={features} />
  </section>
);
