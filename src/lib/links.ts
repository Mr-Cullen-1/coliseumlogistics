export function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

export function externalLinkProps(href: string): { target: "_blank"; rel: string } | Record<string, never> {
  return isExternalHref(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
