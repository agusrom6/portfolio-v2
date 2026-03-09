import Link from "next/link";
import { socials } from "@/common/data/social";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border overflow-hidden">
      
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-40 rounded-full bg-primary-glow blur-[80px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14 flex flex-col gap-10">
        
        {/* Top */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
          
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <span className="font-display text-2xl font-black text-gradient leading-none">
              ⦮ ⦯
            </span>

            <p className="text-sm text-muted leading-relaxed">
              Frontend developer focused on building modern,
              accessible interfaces with great user experience.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted-subtle mb-1">
              Navigation
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

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-border-accent to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-subtle">
          <p>© {new Date().getFullYear()} Agustina Romer</p>

          <p className="flex items-center gap-1.5">
            Built with
            <span className="text-primary">♥</span>
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}