"use client";

import { createContext, useContext } from "react";
import { dictionary } from "@/common/i18n/dictionary";
import { usePathname } from "next/navigation";

type Lang = "en" | "es";
type Dict = typeof dictionary.en;

type TranslationContextValue = {
  t: Dict;
  lang: Lang;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

function getLang(pathname: string): Lang {
  if (pathname.startsWith("/es")) return "es";
  return "en";
}

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lang = getLang(pathname);

  return (
    <TranslationContext.Provider value={{ t: dictionary[lang], lang }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslations must be used inside TranslationProvider");
  return ctx;
}