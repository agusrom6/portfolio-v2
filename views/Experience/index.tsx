"use client";

import { useScrollAnimation } from "@/common/hook/Usescrollanimation";
import { experiences } from "./experiences";
import { TimelineItem } from "./TimelineItem";
import { useTranslations } from "@/common/context/translation-context";

export default function Experience() {
  const { t } = useTranslations();
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="w-full max-w-3xl mx-auto px-6 scroll-section scroll-mt-20"
    >
      <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-16 relative">
        {t.experience.title}
        <span className="absolute left-0 -bottom-3 w-16 h-0.5 rounded bg-(--gradient-primary)" />
      </h2>

      <div className="relative flex flex-col gap-12">
        <span className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-line opacity-40" />

        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
}
