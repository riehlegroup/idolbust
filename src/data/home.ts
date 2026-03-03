import type { Feature, HomePageContent } from "@/data-models/home";

export const HOME_FEATURES = [
  {
    title: "User Research",
    description:
      "Understand your users through surveys, interviews, and behavioral analysis.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Quickly validate ideas with iterative prototyping and user testing.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Make informed decisions backed by quantitative and qualitative data.",
  },
] satisfies readonly Feature[];

export const HOME_PAGE_CONTENT = {
  hero: {
    title: "Understanding Your",
    highlight: "User Needs",
    descriptionSuffix: "through modern methodologies and tools.",
  },
  sections: {
    featuresTitle: "What We Offer",
    callToAction: {
      title: "Ready to get started?",
      description:
        "Join us in building better research tools for understanding user needs.",
      buttonLabel: "About Us",
      buttonHref: "/about",
    },
  },
} satisfies HomePageContent;
