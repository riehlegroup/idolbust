export function withBase(path: string): string {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  if (path === "/") {
    return baseUrl;
  }

  return `${baseUrl}${path.replace(/^\//, "")}`;
}
