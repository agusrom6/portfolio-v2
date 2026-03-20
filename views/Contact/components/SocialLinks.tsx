
import { socials } from "@/common/data/social";
import { Download } from "lucide-react";
import { useTranslations } from "@/common/context/translation-context";

export function SocialLinks() {
  const { t , lang } = useTranslations();
  const cvHref =
  lang  === "es"
    ? "/cv/cv-es.pdf"
    : "/cv/cv-en.pdf";
  return (
    <div className="card p-7 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-foreground">
          {t.contact.social.title}
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background text-muted transition-all duration-300 hover:border-border-accent hover:text-primary hover:bg-primary-muted hover:shadow-[0_0_12px_var(--primary-glow)]"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="h-px bg-border" />

      <div>
        <a
          href={cvHref}
          download={lang  === "es" ? "CV-Agustina-Romer.pdf" : "Agustina-Romer-CV.pdf"}
          className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm text-muted transition-all duration-300 hover:border-border-accent hover:text-primary hover:bg-primary-muted hover:shadow-[0_0_12px_var(--primary-glow)]"
        >
          <Download size={16} />
          {t.contact.social.download}
        </a>
      </div>
    </div>
  );
}
