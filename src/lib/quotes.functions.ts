import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  preferredContact: z.enum(["whatsapp", "phone", "email"]),
  service: z.string().trim().min(2).max(120),
  message: z.string().trim().max(2000).default(""),
});

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((input) => quoteSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      preferred_contact: data.preferredContact,
      service: data.service,
      message: data.message,
    });
    if (error) throw new Error("Your request could not be saved. Please try again.");
    return { ok: true };
  });
