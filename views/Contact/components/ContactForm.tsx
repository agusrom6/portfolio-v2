"use client";

import { useState } from "react";
import { contactSchema } from "@/common/lib/contact-schema";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        name: fieldErrors.name?.[0] || "",
        email: fieldErrors.email?.[0] || "",
        message: fieldErrors.message?.[0] || "",
      });

      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-7 flex flex-col gap-5">
      <p className="text-sm font-semibold text-foreground">
        Send me a message
      </p>

      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="John Doe"
        error={errors.name}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="hello@example.com"
        error={errors.email}
      />

      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell me about your project..."
        error={errors.message}
      />

      <button
        disabled={loading || sent}
        className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_24px_var(--primary-glow)] disabled:opacity-60"
      >
        {loading ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
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

      {error && (
        <span className="text-xs text-red-400">
          {error}
        </span>
      )}
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

      {error && (
        <span className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}