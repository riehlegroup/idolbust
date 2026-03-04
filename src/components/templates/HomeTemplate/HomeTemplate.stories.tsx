import type { Meta, StoryObj } from "@storybook/react";

import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { BRAND_CONFIG } from "@/data/brand";
import { HOME_FEATURES, HOME_PAGE_CONTENT } from "@/data/home";

const meta: Meta<typeof HomeTemplate> = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  args: {
    brand: BRAND_CONFIG,
    content: HOME_PAGE_CONTENT,
    features: HOME_FEATURES,
  },
};

export default meta;

type Story = StoryObj<typeof HomeTemplate>;

export const Default: Story = {};
