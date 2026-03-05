import type { Meta, StoryObj } from "@storybook/react";

import { HomeTemplate } from "./HomeTemplate";

const meta = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  tags: ["autodocs"],
  args: {
    brand: {
      identity: {
        siteName: "Idol or Bust",
        tagline: "Simple website software for research projects",
        siteUrl: "https://example.com",
        language: "en",
        locale: "en_US",
        logoPath: "/logo.svg",
        faviconPath: "/favicon.svg",
        appleTouchIconPath: "/apple-touch-icon.png",
        manifestPath: "/site.webmanifest",
        defaultOgImagePath: "/og-image.png",
      },
      organization: {
        name: "Idol or Bust",
        legalName: "Idol or Bust Research Project",
        socialProfiles: ["https://example.com"],
      },
      theme: {
        primary: {
          "50": "239 246 255",
          "100": "219 234 254",
          "200": "191 219 254",
          "300": "147 197 253",
          "400": "96 165 250",
          "500": "59 130 246",
          "600": "37 99 235",
          "700": "29 78 216",
          "800": "30 64 175",
          "900": "30 58 138",
          "950": "23 37 84",
        },
        secondary: {
          "50": "248 250 252",
          "100": "241 245 249",
          "200": "226 232 240",
          "300": "203 213 225",
          "400": "148 163 184",
          "500": "100 116 139",
          "600": "71 85 105",
          "700": "51 65 85",
          "800": "30 41 59",
          "900": "15 23 42",
          "950": "2 6 23",
        },
        themeColor: "#2563eb",
        fonts: {
          sans: ["Inter", "system-ui", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
        },
      },
      links: {
        primaryCtas: [
          { label: "Get started", href: "/start" },
          { label: "Learn more", href: "/about" },
        ],
        appLinks: [],
        social: [],
      },
      seo: {
        titleTemplate: "%s | Idol or Bust",
        defaultDescription:
          "Simple website software for research projects that want to understand their user needs.",
        robots: "index,follow",
        twitterCard: "summary_large_image",
      },
      blog: {
        title: "Idol or Bust Blog",
        description:
          "Latest updates and insights from the Idol or Bust project.",
      },
    },
    content: {
      hero: {
        title: "Research with clarity",
        highlight: "clarity",
        descriptionSuffix: "Built for teams who need honest insights.",
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
