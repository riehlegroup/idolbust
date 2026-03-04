import { withBase } from "@/components/utils/with-base";
import type { NavbarProps } from "./Navbar.types";

export const Navbar = ({ siteName, links }: NavbarProps) => (
  <header className="sticky top-0 z-50 border-b border-secondary-200 bg-white/80 backdrop-blur-sm">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a
        href={withBase("/")}
        className="text-xl font-bold text-primary-600 hover:text-primary-700"
      >
        {siteName}
      </a>
      <ul className="flex items-center gap-6 text-sm font-medium">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <a href={withBase(link.href)} className="hover:text-primary-600">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
