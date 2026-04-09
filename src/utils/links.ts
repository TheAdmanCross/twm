export function withBasePath(url: string, base: string) {
  if (!url.startsWith("/")) {
    return url;
  }

  const normalizedBase = base === "/" ? "" : base.replace(/\/$/, "");
  return `${normalizedBase}${url}`;
}
