import astro from "eslint-plugin-astro";
import boundaries from "eslint-plugin-boundaries";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist/", "node_modules/", ".astro/"],
  },
  ...astro.configs["flat/recommended"],
  {
    plugins: {
      boundaries,
    },
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
      "boundaries/elements": [
        {
          type: "component-utils",
          pattern: "components/utils/*.{ts,tsx,js,jsx}",
          mode: "file",
          capture: ["elementName"],
        },
        {
          type: "foundations",
          pattern: "components/foundations/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "atoms",
          pattern: "components/atoms/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "molecules",
          pattern: "components/molecules/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "organisms",
          pattern: "components/organisms/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "templates",
          pattern: "components/templates/*",
          mode: "folder",
          capture: ["elementName"],
        },
      ],
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      "boundaries/no-unknown": 2,
      "boundaries/element-types": [
        2,
        {
          default: "disallow",
          rules: [
            {
              from: ["atoms"],
              allow: ["atoms", "foundations", "component-utils"],
            },
            {
              from: ["molecules"],
              allow: ["atoms", "molecules", "foundations", "component-utils"],
            },
            {
              from: ["organisms"],
              allow: [
                "atoms",
                "molecules",
                "organisms",
                "foundations",
                "component-utils",
              ],
            },
            {
              from: ["templates"],
              allow: [
                "atoms",
                "molecules",
                "organisms",
                "templates",
                "foundations",
                "component-utils",
              ],
            },
            {
              from: ["foundations"],
              allow: ["foundations", "component-utils"],
            },
            {
              from: ["component-utils"],
              allow: ["component-utils"],
            },
          ],
        },
      ],
    },
  },
];
