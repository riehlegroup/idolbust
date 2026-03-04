import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";

import { HeroActions } from "@/components/molecules/HeroActions";
import { Button } from "@/components/atoms/Button";

const primaryClick = fn();
const secondaryClick = fn();

const meta = {
  title: "Molecules/HeroActions",
  component: HeroActions,
  tags: ["autodocs"],
  args: {
    primary: (
      <Button href="/about" variant="primary" size="lg" onClick={primaryClick}>
        Learn More
      </Button>
    ),
    secondary: (
      <Button href="/blog" variant="outline" size="lg" onClick={secondaryClick}>
        Read Blog
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          "Paired primary and secondary actions used in hero and CTA layouts.",
      },
    },
  },
} satisfies Meta<typeof HeroActions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryActionClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("link", { name: "Learn More" }));
    await expect(primaryClick).toHaveBeenCalled();
  },
};
