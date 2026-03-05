import type { Meta, StoryObj } from "@storybook/react";

import { ResourcesRelatedList } from "./ResourcesRelatedList";

const meta = {
  title: "Organisms/ResourcesRelatedList",
  component: ResourcesRelatedList,
  args: {
    title: "Related resources",
    resources: [
      { title: "Synthesis workshop checklist", href: "/resources/synthesis/" },
      {
        title: "Participant recruitment guide",
        href: "/resources/recruitment/",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          "Related resources list with heading and linked items for resource detail pages.",
      },
    },
  },
} satisfies Meta<typeof ResourcesRelatedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: {
    resources: [
      { title: "Remote research facilitation", href: "/resources/remote/" },
    ],
  },
};
