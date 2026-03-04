import type { Meta, StoryObj } from "@storybook/react";

import { BRAND_CONFIG } from "@/data/brand";
import { BrandTokens } from "@/components";

const meta = {
  title: "Foundations/Brand Tokens",
  component: BrandTokens,
  args: {
    brand: BRAND_CONFIG,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Visual reference for brand color roles, Tailwind type scale, and spacing defaults.",
      },
    },
  },
} satisfies Meta<typeof BrandTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
