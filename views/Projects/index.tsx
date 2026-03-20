"use client";
import { useScrollAnimation } from "@/common/hook/Usescrollanimation";
import { ProjectCard } from "./Cards";
import { dataProjects } from "./dataProjects";
import { useTranslations } from "@/common/context/translation-context";

export function Projects() {
  const ref = useScrollAnimation();
  const { t } = useTranslations();

  return (
    <div ref={ref} className="scroll-section scroll-mt-20 px-12" id="projects">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="animate-fadeUp delay-2 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          {t.projects.title}
        </h2>

        <p className="animate-fadeUp delay-3 text-muted text-base sm:text-lg max-w-lg leading-relaxed">
          {t.projects.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {dataProjects.map((project, i) => (
    <div
      key={project.id}
      className="animate-fadeUp"
      style={{ animationDelay: `${0.1 + i * 0.1}s` }}
    >
      <ProjectCard
        key={project.id}
        project={project}
        description={t.projects.items[i].description}
      />
    </div>
  ))}
</div>
    </div>
  );
}
