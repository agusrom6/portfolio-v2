'use client'
import { SkillCard } from "./Components/SkillCard";
import { useScrollAnimation } from "@/common/hook/Usescrollanimation";
import { useTranslations } from "@/common/context/translation-context";

export const skills = {
  frontend: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Astro" },
  ],
  styling: [
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Responsive Design" },
    { name: "Figma" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "REST APIs" },
  ],
  tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "Vercel" },
    { name: "Vite" },
  ],
};

export function Skills() {
  const ref = useScrollAnimation();
  const {t} = useTranslations();
  return (
    <section
      ref={ref}
      className="scroll-section scroll-mt-20 min-h-[50vh] px-12"
      id="skills"
    >
      <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-12">
        {t.skills.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <SkillCard title={t.skills.frontend} skills={skills.frontend} />
        <SkillCard title={t.skills.backend} skills={skills.backend} />
        <SkillCard title={t.skills.styling} skills={skills.styling} />
        <SkillCard title={t.skills.tools} skills={skills.tools} />
      </div>
    </section>
  );
}