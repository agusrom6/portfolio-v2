import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  glow?: "top-left" | "top-right" | "center" | "none";
  withTopBorder?: boolean;
};

export function SectionContainer({
  children,
  className = "",
  as: Component = "section",
  glow = "none",
  withTopBorder = false,
}: SectionContainerProps) {
  const glowMap = {
    "top-left":  "before:absolute before:-top-20 before:-left-20 before:w-[400px] before:h-[400px] before:rounded-full before:bg-violet-700/10 before:blur-[100px] before:-z-10",
    "top-right": "before:absolute before:-top-20 before:-right-20 before:w-[400px] before:h-[400px] before:rounded-full before:bg-violet-700/10 before:blur-[100px] before:-z-10",
    "center":    "before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[500px] before:h-[300px] before:rounded-full before:bg-violet-600/10 before:blur-[120px] before:-z-10",
    "none": "",
  };

  return (
    <div
      className={[
        "relative w-full flex justify-center py-16",
        withTopBorder && "border-t border-border",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${glowMap[glow]}`} />

      <Component
        className={`relative w-full max-w-5xl sm:px-10 ${className}`}
      >
        {children}
      </Component>
    </div>
  );
}