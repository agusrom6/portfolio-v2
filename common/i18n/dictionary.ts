import type { NavLinkKey } from "@/common/navigation/nav-links";

type Nav = Record<NavLinkKey, string> & {
  openMenu: string;
  closeMenu: string;
};

type Dictionary = {
  nav: Nav;
  hero: {
    available: string;
    greeting: string;
    role: string;
    subtitle: string;
    cta: string;
    cv: string;
    cvPDF: string;
  };
  about: {
    title: string;
    bio: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    live: string;
    code: string;
  };
  experience: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
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
    hero: {
      available: "Available for work",
      greeting: "Hi, I'm",
      role: "Frontend Developer",
      subtitle:
        "I build modern web interfaces with React and Next.js, focusing on   performance, accessibility and user experience.",
      cta: "View projects",
      cv: "Download my resume",
      cvPDF: "/Frontend Developer - Agustina Romer.pdf"
    },
    about: {
      title: "About me",
      bio: "I'm a developer passionate about...",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
      live: "Live demo",
      code: "Code",
    },
    experience: {
      title: "Experience",
    },
    contact: {
      title: "Contact",
      subtitle: "Got a project in mind? Let's talk.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
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
    hero: {
      available: "Disponible para trabajar",
      greeting: "Hola, soy",
      role: "Desarrollador Frontend",
      subtitle:
        " Construyo interfaces web modernas con React y Next.js, centrándome en el rendimiento, la accesibilidad y la experiencia del usuario.",
      cta: "Ver proyectos",
      cv: "Descargar cv",
      cvPDF: "/Frontend Developer - Agustina Romer.pdf"
    },
    about: {
      title: "Sobre mí",
      bio: "Soy un desarrollador apasionado por...",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Proyectos",
      live: "Ver demo",
      code: "Código",
    },
    experience: {
      title: "Experiencia",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tenés un proyecto en mente? Hablemos.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
    },
  },
};
