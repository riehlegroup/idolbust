const baseUrl =
  typeof import.meta !== "undefined" && import.meta.env?.BASE_URL
    ? import.meta.env.BASE_URL
    : "/";

export function withBase(path: string): string {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  const normalizedPath = path.replace(/^\/|\/$/g, "");

  if (!normalizedPath) {
    return normalizedBase;
  }

  return `${normalizedBase}${normalizedPath}`;
}
