import { z } from "zod";
import { site } from "../../content/site";

const v = site.contact.validation;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, v.nameMin),
  email: z
    .string()
    .trim()
    .min(1, v.emailRequired)
    .email(v.emailInvalid),
  phone: z.string().trim().max(30, v.phoneMax).optional(),
  message: z
    .string()
    .trim()
    .min(10, v.messageMin),
});

export type ContactInput = z.infer<typeof contactSchema>;
