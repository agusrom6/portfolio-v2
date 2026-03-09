'use client'
import { useScrollAnimation } from "@/common/hook/Usescrollanimation";
import { AboutContent } from "./components/AboutContent";
import { AboutImage } from "./components/AboutImage";

export function About() {
   const ref = useScrollAnimation();
  return (
   
      <div  ref={ref} className="scroll-section scroll-mt-20 container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
  
  );
}
