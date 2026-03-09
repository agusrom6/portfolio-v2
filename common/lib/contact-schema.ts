import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name too short")
    .max(50),

  email: z
    .string()
    .email("Invalid email"),

  message: z
    .string()
    .min(5, "Message too short")
    .max(500),
});

export type ContactFormData = z.infer<typeof contactSchema>;