import type { NavLinkKey } from "@/common/navigation/nav-links";

type Nav = Record<NavLinkKey, string> & {
  openMenu: string;
  closeMenu: string;
};

type Dictionary = {
  nav: Nav;
};

export const dictionary: Record<"en" | "es", Dictionary> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
  },
};