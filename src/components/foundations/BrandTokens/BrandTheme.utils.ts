import {
  BRAND_COLOR_SHADES,
  type BrandColorScale,
  type BrandColorScaleOverrides,
  type BrandTheme,
  type BrandThemeInput,
} from "./BrandToken.types";

const LIGHT_MIX_BY_SHADE: Partial<
  Record<(typeof BRAND_COLOR_SHADES)[number], number>
> = {
  "50": 0.92,
  "100": 0.84,
  "200": 0.72,
  "300": 0.56,
  "400": 0.32,
};

const DARK_MIX_BY_SHADE: Partial<
  Record<(typeof BRAND_COLOR_SHADES)[number], number>
> = {
  "600": 0.12,
  "700": 0.24,
  "800": 0.38,
  "900": 0.52,
  "950": 0.68,
};

const clampByte = (value: number): number =>
  Math.max(0, Math.min(255, Math.round(value)));

const RGB_OR_HEX_PATTERN =
  /^(?:#?(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6})|\d{1,3}\s+\d{1,3}\s+\d{1,3})$/;

const parseRgbTriplet = (value: string): [number, number, number] => {
  const normalized = value.trim();

  if (!RGB_OR_HEX_PATTERN.test(normalized)) {
    throw new Error(
      `Invalid color value "${value}". Use hex (e.g. #3b82f6) or rgb triplet (e.g. 59 130 246).`,
    );
  }

  if (normalized.includes(" ")) {
    const channels = normalized
      .split(/\s+/)
      .map((token) => clampByte(Number(token)));

    if (channels.length !== 3) {
      throw new Error(
        `Invalid rgb triplet "${value}". Use three channel values like "59 130 246".`,
      );
    }

    const [r, g, b] = channels as [number, number, number];
    return [r, g, b];
  }

  const hex = normalized.replace(/^#/, "");
  const expandedHex =
    hex.length === 3
      ? hex
          .split("")
          .map((character) => `${character}${character}`)
          .join("")
      : hex;

  const r = Number.parseInt(expandedHex.slice(0, 2), 16);
  const g = Number.parseInt(expandedHex.slice(2, 4), 16);
  const b = Number.parseInt(expandedHex.slice(4, 6), 16);

  return [r, g, b];
};

const toRgbTriplet = ([r, g, b]: [number, number, number]): string =>
  `${r} ${g} ${b}`;

const toHex = ([r, g, b]: [number, number, number]): string =>
  `#${[r, g, b]
    .map((channel) => clampByte(channel).toString(16).padStart(2, "0"))
    .join("")}`;

const mixRgb = (
  source: [number, number, number],
  target: [number, number, number],
  amount: number,
): [number, number, number] => {
  return [
    clampByte(source[0] + (target[0] - source[0]) * amount),
    clampByte(source[1] + (target[1] - source[1]) * amount),
    clampByte(source[2] + (target[2] - source[2]) * amount),
  ];
};

const mergeOverrides = (
  scale: BrandColorScale,
  overrides: BrandColorScaleOverrides | undefined,
): BrandColorScale => {
  if (!overrides) {
    return scale;
  }

  const resolvedOverrides = Object.fromEntries(
    Object.entries(overrides).map(([shade, value]) => [
      shade,
      toRgbTriplet(parseRgbTriplet(value)),
    ]),
  );

  return {
    ...scale,
    ...resolvedOverrides,
  } as BrandColorScale;
};

export const generateColorScale = (
  baseColor: string,
  overrides?: BrandColorScaleOverrides,
): BrandColorScale => {
  const baseRgb = parseRgbTriplet(baseColor);

  const generatedScale = Object.fromEntries(
    BRAND_COLOR_SHADES.map((shade) => {
      if (shade === "500") {
        return [shade, toRgbTriplet(baseRgb)];
      }

      const lightMixAmount = LIGHT_MIX_BY_SHADE[shade];
      if (typeof lightMixAmount === "number") {
        return [
          shade,
          toRgbTriplet(mixRgb(baseRgb, [255, 255, 255], lightMixAmount)),
        ];
      }

      const darkMixAmount = DARK_MIX_BY_SHADE[shade] ?? 0;
      return [shade, toRgbTriplet(mixRgb(baseRgb, [0, 0, 0], darkMixAmount))];
    }),
  ) as BrandColorScale;

  return mergeOverrides(generatedScale, overrides);
};

export const resolveBrandTheme = (input: BrandThemeInput): BrandTheme => {
  const primary = generateColorScale(
    input.palette.primary,
    input.overrides?.primary,
  );
  const secondary = generateColorScale(
    input.palette.secondary,
    input.overrides?.secondary,
  );
  const themeColor = input.themeColor ?? toHex(parseRgbTriplet(primary["600"]));

  return {
    primary,
    secondary,
    themeColor,
    fonts: input.fonts,
  };
};
