import type { Meta, StoryObj } from "@storybook/react";
// eslint-disable-next-line boundaries/no-unknown
import { BRAND_CONFIG } from "@/pages/_brandConfig";
import { BrandTokens } from "./BrandTokens";

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
