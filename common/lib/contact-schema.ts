import { z } from "zod";

export const contactSchemaBase = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormData = z.infer<typeof contactSchemaBase>;

export const contactSchema = (t: any) => {
  const form = t?.contact?.form;

  return z.object({
    name: z.string().min(2, {
      message:
        form?.nameError || "Name must be at least 2 characters",
    }),

    email: z
      .string()
      .nonempty({
        message:
          form?.emailRequired || "Email is required",
      })
      .email({
        message:
          form?.emailError || "Invalid email address",
      }),

    message: z.string().min(10, {
      message:
        form?.messageError ||
        "Message must be at least 10 characters",
    }),
  });
};