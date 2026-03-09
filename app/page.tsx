import { SectionContainer } from "@/common/layout/SectionContainer";
import { About } from "@/views/About";
import { Contact } from "@/views/Contact";
import Experience from "@/views/Experience";
import { Hero } from "@/views/Hero";
import { Projects } from "@/views/Projects";
import { Skills } from "@/views/Skills";


export default function Home() {
  return (
    <>
      <SectionContainer as="section" glow="center">
        <Hero />
      </SectionContainer>

      <SectionContainer glow="top-left">
        <Experience />
      </SectionContainer>

      <SectionContainer glow="top-right" withTopBorder>
        <Projects />
      </SectionContainer>

      <SectionContainer>
        <Skills/>
      </SectionContainer>

      <SectionContainer>
        <About />
      </SectionContainer>
      <SectionContainer glow="center" withTopBorder>
        <Contact />
      </SectionContainer>
    </>
  );
}
