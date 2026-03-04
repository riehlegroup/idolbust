import type { Meta, StoryObj } from "@storybook/react";

import { SectionHeading } from "@/components/atoms/SectionHeading";

const meta = {
  title: "Atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  args: {
    title: "What We Offer",
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
