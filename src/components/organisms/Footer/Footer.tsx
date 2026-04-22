import { withBaseIfRelative } from "@/components/utils/with-base";
import type { FooterProps } from "./Footer.types";

export const Footer = ({ siteName, licenseText, links }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary-200 bg-secondary-50 py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-secondary-600 sm:px-6 lg:px-8">
        <p>
          &copy; {currentYear} {siteName} {licenseText}
        </p>
        {!!links?.length && (
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            {links.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <a
                  href={withBaseIfRelative(link.href)}
                  className="transition-colors hover:text-primary-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};
