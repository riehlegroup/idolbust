import type { NavbarLinkItem } from "./Navbar.types";

export interface NormalizedNavbarLink {
  key: string;
  label: string;
  href: string;
}

export interface NormalizedNavbarSingleItem {
  type: "single";
  key: string;
  link: NormalizedNavbarLink;
}

export interface NormalizedNavbarGroupItem {
  type: "group";
  key: string;
  trigger: NormalizedNavbarLink;
  links: readonly NormalizedNavbarLink[];
}

export type NormalizedNavbarItem =
  | NormalizedNavbarSingleItem
  | NormalizedNavbarGroupItem;

const buildKey = (label: string, href: string): string => `${label}-${href}`;

const buildLink = (label: string, href: string): NormalizedNavbarLink => ({
  key: buildKey(label, href),
  label,
  href,
});

export const normalizeNavbarLinks = (
  links: readonly NavbarLinkItem[],
): readonly NormalizedNavbarItem[] => {
  return links.map((link) => {
    const trigger = buildLink(link.label, link.href);
    if (!link.items?.length) {
      return {
        type: "single",
        key: trigger.key,
        link: trigger,
      };
    }

    return {
      type: "group",
      key: trigger.key,
      trigger,
      links: [
        buildLink("Overview", link.href),
        ...link.items.map((item) => buildLink(item.label, item.href)),
      ],
    };
  });
};
