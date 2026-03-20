"use client";
import { useScrollAnimation } from "@/common/hook/Usescrollanimation";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { SocialLinks } from "./components/SocialLinks";
import { useTranslations } from "@/common/context/translation-context";

export function Contact() {
  const ref = useScrollAnimation();
  const { t } = useTranslations();

  return (
    <div ref={ref} className="scroll-section scroll-mt-20 px-12" id="contact">
      <div className="text-center m-8">
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          {t.contact.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
