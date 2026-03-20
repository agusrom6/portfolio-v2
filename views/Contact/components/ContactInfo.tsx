
import { useTranslations } from "@/common/context/translation-context";

export function ContactInfo() {
  const { t } = useTranslations();
  const services = [
    t.contact.services.web,
    t.contact.services.consulting,
    t.contact.services.talks,
  ];
  return (
    <div className="card p-7 flex flex-col gap-5">
      <p className="text-sm text-muted leading-relaxed">
        {t.contact.info.text}
      </p>

      <div className="h-px bg-linear-to-r from-violet-700/40 via-violet-500/20 to-transparent" />

      <ul className="flex flex-col gap-2">
        {services.map((service) => (
          <li
            key={service}
            className="flex items-center gap-2.5 text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
