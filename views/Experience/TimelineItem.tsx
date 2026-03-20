"use client";

import { useTranslations } from "@/common/context/translation-context";

type TimelineItemProps = {
  id: number;
  year: string;
  company: string;
  tags: string[];
  index: number;
};

export function TimelineItem({ id, year, company, tags, index }: TimelineItemProps) {
  const { t } = useTranslations();
  const item = t.experience.items[id];

  return (
    <div
      className="group flex items-start gap-6 opacity-0 translate-y-6 animate-fadeUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-sm tracking-wider text-white bg-background shadow-[0_0_0_4px_var(--background-alt),0_0_0_6px_var(--border),0_8px_28px_var(--primary-glow)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_4px_var(--background-alt),0_0_0_6px_var(--primary),0_12px_36px_var(--primary-glow)]">
        {year}
      </div>

      <div className="flex-1 relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 group-hover:border-primary group-hover:shadow--(-card-shadow-hover)">
        <span className="absolute inset-0 pointer-events-none bg-(--gradient-surface)" />

        <h3 className="font-display font-bold text-lg text-foreground mb-1">
          {item.role}
        </h3>

        <p className="text-sm font-medium text-primary mb-3">
          {t.experience.at} {company}
        </p>

        <p className="text-sm text-muted leading-relaxed font-light">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-widest font-medium text-primary bg-primary-muted border border-border-accent rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 