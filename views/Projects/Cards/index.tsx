"use client";

import { LaptopMinimal, Link } from "lucide-react";
import { useTranslations } from "@/common/context/translation-context";
import { Project } from "@/common/types/project";

// interface Project {
//   name: string;
//   description: string;
//   image: string;
//   stack: string[];
//   demoLink?: string;
//   codeLink?: string;
// }

interface ProjectCardProps {
  project: Project;
  description: string;
}

export function ProjectCard({ project, description }: ProjectCardProps) {
  const { t } = useTranslations();

  return (
    <div className="group relative flex flex-col h-full rounded-lg overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-primary hover:shadow-(--card-shadow-hover)">
      <div className="pointer-events-none absolute inset-0 bg-(--gradient-surface) z-0" />

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-surface to-transparent" />
      </div>

      <div className="relative z-10 p-6 pt-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 text-foreground tracking-tight font-display">
          {project.name}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4 font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium uppercase tracking-wider text-primary bg-primary-muted border border-border-accent px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="h-px bg-(--gradient-line) mb-4" />

        <div className="flex items-center gap-5 mt-auto">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
            >
              <LaptopMinimal size={15} />
              <span>{t.projects.live}</span>
            </a>
          )}

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
            >
              <Link size={15} />
              <span>{t.projects.code}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
