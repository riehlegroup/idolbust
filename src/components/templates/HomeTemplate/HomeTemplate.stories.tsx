import type { Meta, StoryObj } from "@storybook/react";

import { HomeTemplate } from "./HomeTemplate";

const meta = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  tags: ["autodocs"],
  args: {
    siteDescription:
      "Simple website software for research projects that want to understand their user needs.",
    content: {
      hero: {
        title: "Research with clarity",
        highlight: "clarity",
        descriptionSuffix: "Built for teams who need honest insights.",
        primaryAction: {
          label: "Get started",
          href: "/start",
        },
        secondaryAction: {
          label: "Learn more",
          href: "/about",
        },
      },
      sections: {
        featuresTitle: "What you get",
        callToAction: {
          title: "Ready to talk?",
          description:
            "Start gathering feedback and share insights with your team.",
          buttonLabel: "Book a session",
          buttonHref: "/contact",
        },
      },
    },
    features: [
      {
        title: "Participant insights",
        description: "Capture trends from interviews and surveys.",
      },
      {
        title: "Shareable summaries",
        description: "Publish updates that keep stakeholders aligned.",
      },
      {
        title: "Iterate faster",
        description: "Turn findings into prioritized next steps.",
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full home page template wiring brand, content, and feature data into the layout.",
      },
    },
  },
} satisfies Meta<typeof HomeTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
