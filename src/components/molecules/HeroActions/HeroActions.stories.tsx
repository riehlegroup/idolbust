import type { Meta, StoryObj } from "@storybook/react";

import { HeroActions } from "@/components/molecules/HeroActions";
import { Button } from "@/components/atoms/Button";

const meta = {
  title: "Molecules/HeroActions",
  component: HeroActions,
  tags: ["autodocs"],
  args: {
    primary: (
      <Button href="/about" variant="primary" size="lg">
        Learn More
      </Button>
    ),
    secondary: (
      <Button href="/blog" variant="outline" size="lg">
        Read Blog
      </Button>
    ),
  },
} satisfies Meta<typeof HeroActions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
