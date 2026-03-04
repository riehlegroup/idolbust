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

const meta = {
  title: "Molecules/FeatureGrid",
  component: FeatureGrid,
  tags: ["autodocs"],
  args: {
    features,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Responsive grid for displaying a set of feature titles and descriptions.",
      },
    },
  },
} satisfies Meta<typeof FeatureGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
