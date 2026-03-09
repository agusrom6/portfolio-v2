"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LanguageSwitch } from "../LanguageSwitch";
import { navLinks } from "@/common/navigation/nav-links";
import { useTranslations } from "@/common/context/translation-context";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { t } = useTranslations(); // 👈 desestructurado del nuevo shape { t, lang }

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md shadow-[0_6px_28px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_70%)]"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="flex items-center h-20 px-6 sm:px-10 max-w-5xl mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
            <span className="text-3xl font-black text-gradient leading-none select-none transition-opacity duration-200 group-hover:opacity-80">
              ⦮ ⦯
            </span>
          </Link>

          {/* Desktop links */}
          <div className="ml-auto hidden min-[928px]:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.includes(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-[--transition-base]",
                    isActive
                      ? "text-primary bg-primary-muted"
                      : "text-muted hover:text-foreground hover:bg-primary-muted/50",
                  ].join(" ")}
                >
                  {t.nav[link.key]}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
            <LanguageSwitch />
          </div>

          {/* Mobile button */}
          <button
            onClick={toggleMenu}
            className="ml-auto min-[928px]:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-surface text-primary transition-colors hover:border-border-accent"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            <span className={`absolute transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}>
              <Menu size={18} />
            </span>
            <span className={`absolute transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}>
              <X size={18} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        onClick={closeMenu}
        className={[
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm min-[928px]:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Mobile sidebar */}
      <aside
        className={[
          "fixed left-0 top-20 z-50 min-[928px]:hidden",
          "h-[calc(100dvh-80px)] w-64",
          "bg-surface border-r border-border",
          "flex flex-col p-5 gap-1",
          "transition-transform duration-300 ease-[cubic-bezier(.22,.68,0,1.2)]",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {navLinks.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.includes(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={[
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-[--transition-base]",
                isActive
                  ? "bg-primary-muted border border-border-accent text-primary"
                  : "text-muted hover:bg-primary-muted/50 hover:text-foreground border border-transparent",
              ].join(" ")}
            >
              <span className={`w-1 h-4 rounded-full transition-all ${isActive ? "bg-primary" : "bg-transparent"}`} />
              {t.nav[link.key]}
            </Link>
          );
        })}
        <LanguageSwitch />
      </aside>
    </>
  );
}
