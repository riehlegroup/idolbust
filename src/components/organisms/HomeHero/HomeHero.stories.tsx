import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";

import { HomeHero } from "@/components/organisms/HomeHero";
import { Button } from "@/components/atoms/Button";

const meta = {
  title: "Organisms/HomeHero",
  component: HomeHero,
  tags: ["autodocs"],
  args: {
    title: "Understanding Your",
    highlight: "User Needs",
    description:
      "Simple website software for research projects that want to understand their user needs through modern methodologies and tools.",
    primaryAction: (
      <Button href="/about" variant="primary" size="lg">
        Learn More
      </Button>
    ),
    secondaryAction: (
      <Button href="/blog" variant="outline" size="lg">
        Read Blog
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          "Hero section with headline, highlighted text, and primary/secondary calls to action.",
      },
    },
  },
} satisfies Meta<typeof HomeHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryActionLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "Learn More" });
    await userEvent.click(link);
    await expect(link).toHaveAttribute("href", "/about");
  },
};
