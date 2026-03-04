import type { Meta, StoryObj } from "@storybook/react";

import { SectionHeading } from "@/components/atoms/SectionHeading";

const meta = {
  title: "Atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  args: {
    title: "What We Offer",
  },
  parameters: {
    docs: {
      description: {
        component: "Section title with consistent spacing for page headings.",
      },
    },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
