export const navLinks = [
  { key: "home", href: "/" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export type NavLinkKey = (typeof navLinks)[number]["key"];