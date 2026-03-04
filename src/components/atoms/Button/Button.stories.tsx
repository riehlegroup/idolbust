import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/atoms/Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Get started",
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const AsLink: Story = {
  args: {
    href: "https://example.com",
    children: "Visit example",
  },
};
