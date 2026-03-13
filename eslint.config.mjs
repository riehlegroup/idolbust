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
          type: "pages",
          pattern: "src/pages/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "astro-pages",
          pattern: "src/pages/*.{astro,mdx}",
          mode: "file",
          capture: ["elementName"],
        },
        {
          type: "page-config",
          pattern: "src/pages/_*.{ts,tsx,js,jsx}",
          mode: "file",
          capture: ["elementName"],
        },
        {
          type: "component-utils",
          pattern: "src/components/utils/*.{ts,tsx,js,jsx}",
          mode: "file",
          capture: ["elementName"],
        },
        {
          type: "components-index",
          pattern: "src/components/index.ts",
          mode: "file",
          capture: ["elementName"],
        },
        {
          type: "foundations",
          pattern: "src/components/foundations/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "atoms",
          pattern: "src/components/atoms/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "molecules",
          pattern: "src/components/molecules/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "organisms",
          pattern: "src/components/organisms/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "templates",
          pattern: "src/components/templates/*",
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
              allow: [
                "atoms",
                "foundations",
                "component-utils",
                "components-index",
                "page-config",
              ],
            },
            {
              from: ["molecules"],
              allow: [
                "atoms",
                "molecules",
                "foundations",
                "component-utils",
                "components-index",
                "page-config",
              ],
            },
            {
              from: ["organisms"],
              allow: [
                "atoms",
                "molecules",
                "organisms",
                "foundations",
                "component-utils",
                "components-index",
                "page-config",
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
                "components-index",
                "page-config",
              ],
            },
            {
              from: ["foundations"],
              allow: [
                "foundations",
                "component-utils",
                "components-index",
                "page-config",
              ],
            },
            {
              from: ["component-utils"],
              allow: ["component-utils", "components-index", "page-config"],
            },
            {
              from: ["components-index"],
              allow: [
                "components-index",
                "atoms",
                "molecules",
                "organisms",
                "templates",
                "foundations",
              ],
            },
            {
              from: ["page-config"],
              allow: ["page-config", "foundations"],
            },
            {
              from: ["pages"],
              allow: [
                "pages",
                "page-config",
                "templates",
                "organisms",
                "molecules",
                "atoms",
                "foundations",
                "component-utils",
                "components-index",
                "astro-pages",
              ],
            },
            {
              from: ["astro-pages"],
              allow: [
                "astro-pages",
                "pages",
                "page-config",
                "templates",
                "organisms",
                "molecules",
                "atoms",
                "foundations",
                "component-utils",
                "components-index",
              ],
            },
          ],
        },
      ],
    },
  },
];
