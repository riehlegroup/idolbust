import type { Preview } from "@storybook/react";

import "@/styles/global.css";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "error",
    },
    layout: "padded",
    backgrounds: {
      default: "Light",
      values: [
        { name: "Light", value: "#f8fafc" },
        { name: "Dark", value: "#0f172a" },
        { name: "Brand", value: "#e0e7ff" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Foundations",
          "Atoms",
          "Molecules",
          "Organisms",
          "Templates",
          "Pages",
        ],
      },
    },
  },
};

export default preview;
