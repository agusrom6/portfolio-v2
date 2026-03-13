import { useTranslations } from "@/common/context/translation-context";

export function AboutContent() {
  const { t } = useTranslations();
  const stats = [
    { value: "3+", label: t.about.stats.experience },
    { value: "∞", label: t.about.stats.learning },
  ];
  return (
    <div className="space-y-8">
      <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
        {t.about.title}
      </h2>

      <div className="space-y-5 text-muted text-base leading-relaxed">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>

      <div className="pt-6 flex flex-wrap gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-display text-3xl font-extrabold text-gradient">
              {stat.value}
            </span>

            <span className="text-xs text-muted-subtle uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
