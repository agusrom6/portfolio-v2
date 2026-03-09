import { Skill } from "@/common/types/skill";

type SkillCardProps = {
  title: string;
  skills: Skill[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:shadow-(--card-shadow-hover)">
      
      <h3 className="text-lg font-semibold mb-4 text-foreground font-display">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="px-3 py-1 rounded-full text-sm font-medium text-primary bg-primary-muted border border-border-accent transition-colors hover:bg-primary-muted/80"
          >
            {skill.name}
          </li>
        ))}
      </ul>

    </div>
  );
}