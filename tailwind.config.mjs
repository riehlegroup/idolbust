import typography from "@tailwindcss/typography";

const shades = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
];

const cssColorScale = (name) =>
  Object.fromEntries(
    shades.map((shade) => [
      shade,
      `rgb(var(--color-${name}-${shade}) / <alpha-value>)`,
    ]),
  );

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: cssColorScale("primary"),
        secondary: cssColorScale("secondary"),
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: theme("colors.secondary.700"),
            a: {
              color: theme("colors.primary.600"),
              "&:hover": {
                color: theme("colors.primary.800"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
