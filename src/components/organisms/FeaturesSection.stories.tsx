import type { Meta, StoryObj } from "@storybook/react";

import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import type { Feature } from "@/data-models/home";

const features: Feature[] = [
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
