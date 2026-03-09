import { Mail, Linkedin, Github } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Social = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const socials: Social[] = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:agustinaromer6@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/agustinaromer/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/agusrom6",
  },
];
