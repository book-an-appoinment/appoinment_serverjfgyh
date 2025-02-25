import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  service: z.enum([
    "Financial Service",
    "Task Control",
    "Financial Growth",
    "Capital Investments",
  ]),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  subject: z.string().min(5, "Subject must be at least 5 characters long"),
  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format"),
  time: z
    .string()
    .refine(
      (val) =>
        /^(0?[1-9]|1[0-2]):[0-5][0-9] ?(AM|PM)$/i.test(val) ||
        /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val),
      "Invalid time format (HH:MM AM/PM or HH:MM)"
    ),
  message: z.string().optional(),
});
