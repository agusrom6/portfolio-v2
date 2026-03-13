type ExperienceItems = Record<number, { role: string; description: string }>;

type Experience = {
  title: string;
  at: string;
  items: ExperienceItems;
};

export const experience: Experience = {
  title: "Experience",
  at: "at",
  items: {
    1: {
      role: "Frontend Developer",
      description:
        "Website development structuring reusable components and integrating forms with data validation. Performance optimization and improvement of the overall user experience.",
    },
    2: {
      role: "Frontend Developer",
      description:
        "Freelance work building landings, authentication and typed forms, prioritizing clear architecture, scalability and good user experience.",
    },
  },
};
