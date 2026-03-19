interface NavbarLinkShape {
  label: string;
  href: string;
  items?: readonly NavbarSubLinkItem[];
}

export type NavbarSubLinkItem = Omit<NavbarLinkShape, "items">;

export interface NavbarLinkItem extends NavbarLinkShape {}

export interface NavbarProps {
  siteName: string;
  links: readonly NavbarLinkItem[];
}
