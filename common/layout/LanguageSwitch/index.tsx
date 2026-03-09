"use client";

import Link from "next/link";
import { useTranslations } from "@/common/context/translation-context";
import { usePathname } from "next/navigation";

export function LanguageSwitch() {
  const pathname = usePathname();
  const { lang } = useTranslations();

  const newLang = lang === "es" ? "en" : "es";

  // Si la ruta ya tiene prefijo /en o /es, lo reemplaza.
  // Si no tiene prefijo (ruta raíz en inglés), agrega /es.
  const newPath = /^\/(en|es)(\/|$)/.test(pathname)
    ? pathname.replace(/^\/(en|es)/, `/${newLang}`)
    : `/${newLang}${pathname}`;

  return (
    <Link
      href={newPath}
      aria-label={`Switch to ${newLang.toUpperCase()}`}
      className="ml-4 flex items-center gap-1 text-sm font-medium transition-colors"
    >
      <span className={lang === "es" ? "text-foreground" : "text-muted"}>ES</span>
      <span className="text-muted opacity-40">|</span>
      <span className={lang === "en" ? "text-foreground" : "text-muted"}>EN</span>
    </Link>
  );
}