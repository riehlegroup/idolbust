import { withBase, withBaseIfRelative } from "@/components/utils/with-base";
import {
  normalizeNavbarLinks,
  type NormalizedNavbarItem,
} from "./Navbar.utils";
import type { NavbarProps } from "./Navbar.types";

interface MobileLinkListProps {
  links: readonly NormalizedNavbarItem[];
}

const desktopLinkClassName =
  "inline-flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-secondary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

const mobileLinkClassName =
  "block rounded-lg px-3 py-2 text-base transition-colors hover:bg-secondary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

const desktopDropdownLinkClassName =
  "block rounded-xl px-3 py-2 transition-colors hover:bg-secondary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

const MobileLinkList = ({ links }: MobileLinkListProps) => (
  <ul className="flex flex-col gap-2 text-sm font-medium text-secondary-900">
    {links.map((item) => {
      if (item.type === "single") {
        return (
          <li key={item.key}>
            <a
              href={withBaseIfRelative(item.link.href)}
              className={mobileLinkClassName}
            >
              {item.link.label}
            </a>
          </li>
        );
      }

      return (
        <li key={item.key}>
          <details className="group">
            <summary
              className={`${mobileLinkClassName} flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden`}
            >
              <span>{item.trigger.label}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 10 6"
                className="h-2.5 w-2.5 transition-transform group-open:rotate-180"
              >
                <path
                  d="M1 1L5 5L9 1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <ul className="mt-1 flex flex-col gap-1 border-l border-secondary-200 pl-4">
              {item.links.map((subItem) => (
                <li key={subItem.key}>
                  <a
                    href={withBaseIfRelative(subItem.href)}
                    className={mobileLinkClassName}
                  >
                    {subItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      );
    })}
  </ul>
);

const desktopActionClassNames = [
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  "border border-secondary-300 text-secondary-900 hover:border-primary-300 hover:text-primary-600",
  "bg-primary-600 text-white hover:bg-primary-700",
] as const;

const mobileActionClassNames = [
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  "border border-secondary-300 text-secondary-900 hover:border-primary-300 hover:text-primary-600",
  "bg-primary-600 text-white hover:bg-primary-700",
] as const;

export const Navbar = ({ siteName, links, actions = [] }: NavbarProps) => {
  const normalizedLinks = normalizeNavbarLinks(links);

  return (
    <div className="relative">
      <input
        id="mobile-navigation-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden="true"
        tabIndex={-1}
      />

      <header className="sticky top-0 z-40 border-b border-secondary-200 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href={withBase("/")}
            className="text-xl font-bold text-primary-600 transition-colors hover:text-primary-700"
          >
            {siteName}
          </a>

          <label
            htmlFor="mobile-navigation-toggle"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary-200 text-secondary-900 transition-colors hover:border-primary-300 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:hidden"
            aria-controls="mobile-navigation"
            tabIndex={0}
          >
            <span className="sr-only">Open menu</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </label>

          <ul className="hidden items-center gap-3 text-sm font-medium sm:flex">
            {normalizedLinks.map((item) => {
              if (item.type === "single") {
                return (
                  <li key={item.key}>
                    <a
                      href={withBaseIfRelative(item.link.href)}
                      className={desktopLinkClassName}
                    >
                      {item.link.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.key} className="group relative">
                  <a
                    href={withBaseIfRelative(item.trigger.href)}
                    className={desktopLinkClassName}
                  >
                    <span>{item.trigger.label}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 6"
                      className="h-2.5 w-2.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="pointer-events-none invisible absolute right-0 top-full pt-3 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="min-w-48 rounded-2xl border border-secondary-200 bg-white p-2 text-secondary-900 shadow-lg shadow-secondary-900/10">
                      {item.links.map((subItem) => (
                        <li key={subItem.key}>
                          <a
                            href={withBaseIfRelative(subItem.href)}
                            className={desktopDropdownLinkClassName}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          {!!actions.length && (
            <div className="hidden items-center gap-2 sm:flex">
              {actions.map((action, index) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={withBaseIfRelative(action.href)}
                  className={
                    index === actions.length - 1
                      ? `${desktopActionClassNames[0]} ${desktopActionClassNames[2]}`
                      : `${desktopActionClassNames[0]} ${desktopActionClassNames[1]}`
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <div
        className="pointer-events-none fixed inset-0 z-50 bg-secondary-900/40 opacity-0 transition-opacity duration-200 peer-checked:pointer-events-auto peer-checked:opacity-100 sm:hidden"
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        aria-label="Navigation menu"
        className="fixed right-0 top-0 z-50 flex h-full w-[min(24rem,100vw)] translate-x-full flex-col border-l border-secondary-200 bg-white px-5 py-5 shadow-2xl transition-transform duration-200 peer-checked:translate-x-0 sm:hidden"
      >
        <div className="flex items-center justify-between gap-4 border-b border-secondary-200 pb-4">
          <a
            href={withBase("/")}
            className="text-lg font-bold text-primary-600"
          >
            {siteName}
          </a>
          <label
            htmlFor="mobile-navigation-toggle"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary-200 text-secondary-900 transition-colors hover:border-primary-300 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            tabIndex={0}
          >
            <span className="sr-only">Close menu</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M6 6L18 18M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </label>
        </div>

        <div className="mt-6 overflow-y-auto">
          <MobileLinkList links={normalizedLinks} />

          {!!actions.length && (
            <div className="mt-6 flex flex-col gap-2 border-t border-secondary-200 pt-4">
              {actions.map((action, index) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={withBaseIfRelative(action.href)}
                  className={
                    index === actions.length - 1
                      ? `${mobileActionClassNames[0]} ${mobileActionClassNames[2]}`
                      : `${mobileActionClassNames[0]} ${mobileActionClassNames[1]}`
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
