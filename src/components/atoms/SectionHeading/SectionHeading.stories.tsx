import type { Meta, StoryObj } from "@storybook/react";

import { SectionHeading } from "@/components/atoms/SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "Atoms/SectionHeading",
  component: SectionHeading,
  args: {
    title: "What We Offer",
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {};
