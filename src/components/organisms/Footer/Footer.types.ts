export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterProps {
  siteName: string;
  licenseText: string;
  links?: readonly FooterLinkItem[];
}
