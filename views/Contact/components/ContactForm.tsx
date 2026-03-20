"use client";

import { useState } from "react";
import { contactSchema } from "@/common/lib/contact-schema";
import { useTranslations } from "@/common/context/translation-context";
import type { ContactFormData } from "@/common/lib/contact-schema";

export function ContactForm() {
  const { t } = useTranslations();
  const schema = contactSchema(t);

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const result = schema.safeParse(form);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;

    setErrors({
      name: fieldErrors.name?.[0],
      email: fieldErrors.email?.[0],
      message: fieldErrors.message?.[0],
    });

    return;
  }

  setErrors({});

  try {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      return;
    }

    setSent(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="card p-7 flex flex-col gap-5">
      <p className="text-sm font-semibold text-foreground">
        {t.contact.form.heading}
      </p>

      <Input
        label={t.contact.form.name}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={t.contact.form.namePlaceholder}
        error={errors.name}
      />

      <Input
        label={t.contact.form.email}
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t.contact.form.emailPlaceholder}
        error={errors.email}
      />

      <Textarea
        label={t.contact.form.message}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={t.contact.form.messagePlaceholder}
        error={errors.message}
      />

      <button
        disabled={loading || sent}
        className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_24px_var(--primary-glow)] disabled:opacity-60"
      >
        {loading
          ? t.contact.form.sending
          : sent
          ? t.contact.form.sent
          : t.contact.form.send}
      </button>
    </form>
  );
}

function Input({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase tracking-widest text-muted-subtle">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-subtle outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--primary-muted)]"
      />

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

function Textarea({
  label,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase tracking-widest text-muted-subtle">
        {label}
      </label>

      <textarea
        {...props}
        rows={4}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-subtle outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--primary-muted)] resize-none"
      />

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}