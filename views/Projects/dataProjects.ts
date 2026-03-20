export type Project = {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string;
  codeLink?: string;
  demoLink?: string;
};

export const dataProjects: Project[] = [
  {
    id: 1,
    name: "Infracciones Centro",
    description:
      "Corporate landing page built with React and TypeScript, optimized for performance and SEO.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "projects/infraccionesCentro.png",
    demoLink: "https://infraccionescentro.com",
  },
  {
    id: 2,
    name: "Urban Café",
    description:
      "Website for a local café featuring an interactive menu, modern design, and mobile optimization.",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    image: "projects/urbanCafe.png",
    codeLink: "https://github.com/agusrom6/UrbanCafe.git",
    demoLink: "https://urban-cafe.vercel.app/",
  },
  {
    id: 3,
    name: "Pokedex",
    description:
      "Web application that consumes the Pokémon API to display detailed information about each creature.",
    stack: ["React", "Tailwind CSS", "REST API"],
    image: "projects/pokedex.png",
    codeLink: "https://github.com/agusrom6/pokedex",
    demoLink: "https://pokedex-pink-eta-26.vercel.app/",
  },
];