import type { CSSProperties, ReactElement } from "react";

import type { BrandColorScale, BrandConfig } from "@/data-models/brand";

export interface BrandTokensProps {
  brand: BrandConfig;
}

type CssVarStyle = CSSProperties & Record<string, string>;

const quoteFontFamily = (fontFamily: string): string => {
  const trimmedFontFamily = fontFamily.trim();
  const unquotedFontFamily = trimmedFontFamily.replace(/^['"]+|['"]+$/g, "");

  if (!/\s/.test(unquotedFontFamily)) {
    return unquotedFontFamily;
  }

  return `"${unquotedFontFamily}"`;
};

const formatFontStack = (
  fonts: readonly string[] | undefined,
  fallback: readonly string[],
): string => (fonts ?? fallback).map(quoteFontFamily).join(", ");

const buildColorVars = (
  name: "primary" | "secondary",
  scale: BrandColorScale,
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(scale).map(([shade, value]) => [
      `--color-${name}-${shade}`,
      value,
    ]),
  ) as Record<string, string>;

const typeScaleSamples = [
  { label: "text-xs", className: "text-xs" },
  { label: "text-sm", className: "text-sm" },
  { label: "text-base", className: "text-base" },
  { label: "text-lg", className: "text-lg" },
  { label: "text-xl", className: "text-xl" },
  { label: "text-2xl", className: "text-2xl" },
  { label: "text-3xl", className: "text-3xl" },
  { label: "text-4xl", className: "text-4xl" },
  { label: "text-5xl", className: "text-5xl" },
];

const spacingSamples = [
  { label: "1", className: "w-1" },
  { label: "2", className: "w-2" },
  { label: "3", className: "w-3" },
  { label: "4", className: "w-4" },
  { label: "6", className: "w-6" },
  { label: "8", className: "w-8" },
  { label: "12", className: "w-12" },
  { label: "16", className: "w-16" },
  { label: "24", className: "w-24" },
  { label: "32", className: "w-32" },
];

const formatRgb = (value: string): string => `rgb(${value})`;

export function BrandTokens({ brand }: BrandTokensProps): ReactElement {
  const style: CssVarStyle = {
    ...buildColorVars("primary", brand.theme.primary),
    ...buildColorVars("secondary", brand.theme.secondary),
    "--color-theme": brand.theme.themeColor,
    "--font-sans": formatFontStack(brand.theme.fonts?.sans, [
      "Inter",
      "system-ui",
      "sans-serif",
    ]),
    "--font-mono": formatFontStack(brand.theme.fonts?.mono, [
      "JetBrains Mono",
      "monospace",
    ]),
  };
  const roleMap = new Map(
    brand.designTokens.colors.roles.map((role) => [
      role.name,
      role.description,
    ]),
  );

  const colorSections = [
    {
      name: "Primary",
      role: roleMap.get("primary"),
      scale: brand.theme.primary,
    },
    {
      name: "Secondary",
      role: roleMap.get("secondary"),
      scale: brand.theme.secondary,
    },
  ];

  return (
    <div className="space-y-12 font-sans text-secondary-900" style={style}>
      <section className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500">
            Brand Tokens
          </p>
          <h2 className="text-3xl font-semibold text-secondary-900">
            Color roles
          </h2>
          <p className="text-base text-secondary-600">
            {brand.designTokens.colors.story}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {colorSections.map((section) => (
            <div key={section.name} className="space-y-3">
              <div>
                <p className="text-lg font-semibold text-secondary-900">
                  {section.name}
                </p>
                {section.role && (
                  <p className="text-sm text-secondary-600">{section.role}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {Object.entries(section.scale).map(([shade, value]) => (
                  <div
                    key={`${section.name}-${shade}`}
                    className="rounded-xl border border-secondary-200 bg-white p-3 shadow-sm"
                  >
                    <div
                      className="h-12 w-full rounded-lg"
                      style={{ backgroundColor: formatRgb(value) }}
                    />
                    <div className="mt-2 flex items-center justify-between text-xs text-secondary-600">
                      <span>{shade}</span>
                      <span className="font-mono">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-secondary-900">
            Type scale
          </h2>
          <p className="text-base text-secondary-600">
            {brand.designTokens.typeScale.story}
          </p>
        </div>
        <div className="rounded-2xl border border-secondary-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            {typeScaleSamples.map((sample) => (
              <div
                key={sample.label}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-24 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-400">
                  {sample.label}
                </span>
                <p className={`${sample.className} text-secondary-900`}>
                  Research insights that ship
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-secondary-900">Spacing</h2>
          <p className="text-base text-secondary-600">
            {brand.designTokens.spacing.story}
          </p>
        </div>
        <div className="rounded-2xl border border-secondary-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {spacingSamples.map((sample) => (
              <div key={sample.label} className="space-y-2">
                <div className="flex items-center justify-between text-xs text-secondary-500">
                  <span className="font-semibold uppercase tracking-[0.2em]">
                    {sample.label}
                  </span>
                  <span className="font-mono">w-{sample.label}</span>
                </div>
                <div className="h-2 rounded-full bg-primary-500/80">
                  <div
                    className={`h-2 rounded-full bg-primary-500 ${sample.className}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
