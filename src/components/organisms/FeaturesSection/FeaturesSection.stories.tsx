import type { Meta, StoryObj } from "@storybook/react";

import { FeaturesSection } from "./FeaturesSection";
import type { FeatureItem } from "../../molecules/FeatureGrid/FeatureGrid.types";

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

const meta = {
  title: "Organisms/FeaturesSection",
  component: FeaturesSection,
  tags: ["autodocs"],
  args: {
    title: "What We Offer",
    features,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Section layout that pairs a heading with a grid of feature summaries.",
      },
    },
  },
} satisfies Meta<typeof FeaturesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
