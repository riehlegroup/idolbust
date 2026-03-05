import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";

import { Card } from "./Card";

const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Insight sprint",
    description: "Align on user research goals with a simple playbook.",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Compact summary card for features or resources. Supports optional imagery.",
      },
    },
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

export const LinkOverlay: Story = {
  args: {
    href: "/resources/insight-sprint",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("link")).toHaveAttribute(
      "href",
      "/resources/insight-sprint",
    );
  },
};
