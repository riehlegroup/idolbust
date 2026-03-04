import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/components/molecules/Card";

const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Insight sprint",
    description: "Align on user research goals with a simple playbook.",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    image: "/og-image.png",
    imageAlt: "Illustration for share cards",
  },
};
