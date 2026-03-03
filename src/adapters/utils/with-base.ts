export const SITE_BASE_PATH = import.meta.env.BASE_URL ?? "/";

export function withBase(path: string): string {
  return `${SITE_BASE_PATH}${path}`.replace(/\/+/, "/");
}

export function withBaseIfRelative(path: string): string {
  return path.startsWith("/") ? withBase(path) : path;
}
