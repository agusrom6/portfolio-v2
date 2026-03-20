"use client";

import { usePathname } from "next/navigation";

export function HtmlWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lang = pathname.startsWith("/es") ? "es" : "en";

  return <html lang={lang}>{children}</html>;
}