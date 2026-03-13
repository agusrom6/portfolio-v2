import { z } from "zod";

export const contactSchema = (t: any) =>
  z.object({
    name: z
      .string()
      .min(1, t.form.errors.nameRequired)
      .max(50),

    email: z
      .string()
      .email(t.form.errors.invalidEmail),

    message: z
      .string()
      .min(5, t.form.errors.messageShort)
      .max(500),
  });

export type ContactFormData = z.infer<ReturnType<typeof contactSchema>>;