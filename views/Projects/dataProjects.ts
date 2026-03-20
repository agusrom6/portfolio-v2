import {Project} from "@/common/types/project"


export const dataProjects: Project[] = [
  {
    id: 1,
    name: "Infracciones Centro",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "projects/infraccionesCentro.png",
    demoLink: "https://infraccionescentro.com",
  },
  {
    id: 2,
    name: "Urban Café",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    image: "projects/urbanCafe.png",
    codeLink: "https://github.com/agusrom6/UrbanCafe.git",
    demoLink: "https://urban-cafe.vercel.app/",
  },
  {
    id: 3,
    name: "Pokedex",
    stack: ["React", "Tailwind CSS", "REST API"],
    image: "projects/pokedex.png",
    codeLink: "https://github.com/agusrom6/pokedex",
    demoLink: "https://pokedex-pink-eta-26.vercel.app/",
  },
];