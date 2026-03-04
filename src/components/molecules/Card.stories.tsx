import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/components/molecules/Card";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  args: {
    title: "Insight sprint",
    description: "Align on user research goals with a simple playbook.",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    image: "/og-image.png",
    imageAlt: "Illustration for share cards",
  },
};
