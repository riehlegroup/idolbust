import type { Meta, StoryObj } from "@storybook/react";

import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import type { FeatureItem } from "@/components/molecules/FeatureGrid/FeatureGrid.types";

const features: FeatureItem[] = [
  {
    title: "User Research",
    description:
      "Understand your users through surveys, interviews, and behavioral analysis.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Quickly validate ideas with iterative prototyping and testing.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Make informed decisions backed by quantitative and qualitative data.",
  },
];

const meta: Meta<typeof FeaturesSection> = {
  title: "Organisms/FeaturesSection",
  component: FeaturesSection,
  args: {
    title: "What We Offer",
    features,
  },
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {};
