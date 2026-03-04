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
          type: "data",
          pattern: "src/data/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "data-files",
          pattern: "src/data/*.{ts,tsx,js,jsx}",
          mode: "file",
          capture: ["elementName"],
        },
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
          type: "data-models",
          pattern: "src/data-models/*",
          mode: "folder",
          capture: ["elementName"],
        },
        {
          type: "data-models-files",
          pattern: "src/data-models/*.{ts,tsx,js,jsx}",
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
                "data-models",
                "data",
                "components-index",
                "data-files",
                "data-models-files",
              ],
            },
            {
              from: ["molecules"],
              allow: [
                "atoms",
                "molecules",
                "foundations",
                "component-utils",
                "data-models",
                "data",
                "components-index",
                "data-files",
                "data-models-files",
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
                "data-models",
                "data",
                "components-index",
                "data-files",
                "data-models-files",
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
                "data-models",
                "data",
                "components-index",
                "data-files",
                "data-models-files",
              ],
            },
            {
              from: ["foundations"],
              allow: [
                "foundations",
                "component-utils",
                "data-models",
                "data",
                "components-index",
                "data-files",
                "data-models-files",
              ],
            },
            {
              from: ["component-utils"],
              allow: [
                "component-utils",
                "data-models",
                "data",
                "components-index",
                "data-files",
                "data-models-files",
              ],
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
              from: ["data-models"],
              allow: ["data-models"],
            },
            {
              from: ["data-models-files"],
              allow: ["data-models", "data-models-files"],
            },
            {
              from: ["data"],
              allow: ["data", "data-models"],
            },
            {
              from: ["data-files"],
              allow: ["data", "data-models", "data-files", "data-models-files"],
            },
            {
              from: ["pages"],
              allow: [
                "pages",
                "templates",
                "organisms",
                "molecules",
                "atoms",
                "foundations",
                "component-utils",
                "components-index",
                "data",
                "data-models",
                "astro-pages",
                "data-files",
                "data-models-files",
              ],
            },
            {
              from: ["astro-pages"],
              allow: [
                "astro-pages",
                "pages",
                "templates",
                "organisms",
                "molecules",
                "atoms",
                "foundations",
                "component-utils",
                "components-index",
                "data",
                "data-models",
                "data-files",
                "data-models-files",
              ],
            },
          ],
        },
      ],
    },
  },
];
