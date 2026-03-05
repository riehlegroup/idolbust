import type { Meta, StoryObj } from "@storybook/react";

import { Pill } from "@/components/atoms/Pill";

const meta = {
  title: "Atoms/Pill",
  component: Pill,
  tags: ["autodocs"],
  args: {
    children: "Research",
    tone: "neutral",
    size: "xs",
  },
  parameters: {
    docs: {
      description: {
        component: "Rounded label for tags and categories.",
      },
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Primary: Story = {
  args: {
    tone: "primary",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Updated",
  },
};
