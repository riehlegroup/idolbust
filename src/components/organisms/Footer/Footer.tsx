import type { FooterProps } from "./Footer.types";

export const Footer = ({ siteName, licenseText }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary-200 bg-secondary-50 py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-secondary-600 sm:px-6 lg:px-8">
        <p>
          &copy; {currentYear} {siteName} {licenseText}
        </p>
      </div>
    </footer>
  );
};
