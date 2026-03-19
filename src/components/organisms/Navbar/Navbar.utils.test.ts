import { describe, expect, it } from "vitest";

import { normalizeNavbarLinks } from "./Navbar.utils";

describe("normalizeNavbarLinks", () => {
  it("returns single item links unchanged", () => {
    const items = normalizeNavbarLinks([{ label: "About", href: "/about" }]);

    expect(items).toEqual([
      {
        type: "single",
        key: "About-/about",
        link: {
          key: "About-/about",
          label: "About",
          href: "/about",
        },
      },
    ]);
  });

  it("adds overview first for grouped links", () => {
    const items = normalizeNavbarLinks([
      {
        label: "Solutions",
        href: "/solutions",
        items: [
          { label: "Discovery", href: "/solutions/discovery" },
          { label: "Synthesis", href: "/solutions/synthesis" },
        ],
      },
    ]);

    expect(items).toEqual([
      {
        type: "group",
        key: "Solutions-/solutions",
        trigger: {
          key: "Solutions-/solutions",
          label: "Solutions",
          href: "/solutions",
        },
        links: [
          {
            key: "Overview-/solutions",
            label: "Overview",
            href: "/solutions",
          },
          {
            key: "Discovery-/solutions/discovery",
            label: "Discovery",
            href: "/solutions/discovery",
          },
          {
            key: "Synthesis-/solutions/synthesis",
            label: "Synthesis",
            href: "/solutions/synthesis",
          },
        ],
      },
    ]);
  });
});
