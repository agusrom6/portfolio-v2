import { stats } from "./stats";

export function AboutContent() {
  return (
    <div className="space-y-8">

      <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
        About Me
      </h2>

      <div className="space-y-5 text-muted text-base leading-relaxed">
        <p>
          I’m a frontend developer passionate about building engaging and
          functional digital experiences. With over 3 years of experience
          creating products that users genuinely enjoy, I believe in the
          power of thoughtful design and clean code to solve real problems.
        </p>

        <p>
          When I’m not coding, you’ll usually find me exploring new design
          trends or contributing to open-source projects.
        </p>

        <p>
          I’m always looking for projects that challenge me to grow and
          learn something new.
        </p>
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