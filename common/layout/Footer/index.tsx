"use client";
import Link from "next/link";
import { socials } from "@/common/data/social";
import { useTranslations } from "@/common/context/translation-context";

export function Footer() {
  const { t } = useTranslations();

  const navLinks = [
    { label: t.footer.navigation.home, href: "/" },
    { label: t.footer.navigation.projects, href: "#projects" },
    { label: t.footer.navigation.contact, href: "#contact" },
  ];
  return (
    <footer className="relative w-full border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-40 rounded-full bg-primary-glow blur-[80px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14 flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-xs">
            <span className="font-display text-2xl font-black text-gradient leading-none">
              ⦮ ⦯
            </span>

            <p className="text-sm text-muted leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted-subtle mb-1">
              {t.footer.navigation.title}
            </p>

            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted transition-colors duration-300 hover:text-primary w-fit"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-muted-subtle">
              Social
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-md border border-border text-muted transition-all duration-300 hover:text-primary hover:border-border-accent hover:bg-primary-muted"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-border-accent to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-subtle">
          <p>© {new Date().getFullYear()} Agustina Romer</p>

          <p className="flex items-center gap-1.5">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
