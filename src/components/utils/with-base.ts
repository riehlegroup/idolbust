const baseUrl =
  typeof import.meta !== "undefined" && import.meta.env?.BASE_URL
    ? import.meta.env.BASE_URL
    : "/";

function isExternalOrProtocolUrl(path: string): boolean {
  return /^(?:[a-zA-Z][a-zA-Z\d+.-]*:|\/\/)/.test(path);
}

export function withBase(path: string): string {
  if (isExternalOrProtocolUrl(path)) {
    return path;
  }

  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  const normalizedPath = path.replace(/^\/|\/$/g, "");

  if (!normalizedPath) {
    return normalizedBase;
  }

  return `${normalizedBase}${normalizedPath}`;
}

export function withBaseIfRelative(path: string): string {
  return path.startsWith("/") && !isExternalOrProtocolUrl(path)
    ? withBase(path)
    : path;
}
