import Link from "next/link";

export function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="animate-fadeUp delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-border-accent bg-primary-muted px-4 py-1.5 text-sm text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
        Available for work
      </div>

      <h1 className="animate-fadeUp delay-2 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4">
        Hi, I'm <span className="text-gradient">Agustina Romer</span>
      </h1>

      <h2 className="animate-fadeUp delay-3 text-xl sm:text-2xl font-medium text-muted mb-6 tracking-wide">
        Frontend Developer
      </h2>

      <p className="animate-fadeUp delay-4 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
        I build modern web interfaces with React and Next.js, focusing on
        performance, accessibility and user experience.
      </p>

      {/* CTAs */}
      <div className="animate-fadeUp delay-5 mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="#projects"
          className="group relative rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-[--transition-base] hover:bg-primary-hover hover:shadow-[0_0_24px_var(--primary-glow)]"
        >
          View Projects
        </Link>

        <Link
          href="#contact"
          className="rounded-full border border-border-accent bg-primary-muted px-7 py-3 text-sm font-semibold text-primary transition-all duration-[--transition-base] hover:border-[--border-accent-strong] hover:text-primary-hover hover:bg-[rgba(139,92,246,0.12)]"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}