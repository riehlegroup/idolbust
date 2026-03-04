import type { Meta, StoryObj } from "@storybook/react";

import { FeatureGrid } from "@/components/molecules/FeatureGrid";
import type { FeatureItem } from "./FeatureGrid.types";

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

const meta: Meta<typeof FeatureGrid> = {
  title: "Molecules/FeatureGrid",
  component: FeatureGrid,
  args: {
    features,
  },
};

export default meta;

type Story = StoryObj<typeof FeatureGrid>;

export const Default: Story = {};
