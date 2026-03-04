export interface NavbarLinkItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  siteName: string;
  links: readonly NavbarLinkItem[];
}
