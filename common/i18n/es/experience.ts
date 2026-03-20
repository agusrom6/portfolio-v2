type ExperienceItems = Record<number, { role: string; description: string }>;

type Experience = {
  title: string;
  at: string;
  items: ExperienceItems;
};

export const experience: Experience  = {
  title: "Experiencia",
  at: "en",
  items: {
    1: {
      role: "Desarrollor Frontend",

      description:
        "Desarrollo del sitio web estructurando componentes reutilizables e integrando formularios con validación de datos. Optimización de rendimiento y mejora de la experiencia general del usuario.",
    },
    2: {
      role: "Desarrollor Frontend",
      description:
        "Trabajo freelance construyendo landings, autenticación y formularios tipados, priorizando arquitectura clara, escalabilidad y buena experiencia de usuario.",
    },
  },
};
