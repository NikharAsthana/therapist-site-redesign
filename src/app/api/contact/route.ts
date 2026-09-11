import { contactSchema } from "@/lib/contact-schema";

/**
 * Demo endpoint: validates the payload with the same zod schema as the
 * client and returns a success response WITHOUT sending or storing the
 * message anywhere. To wire a real send-through (e.g. Resend), add the
 * provider call between validation and the success response below.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        error: "Please fix the highlighted fields and try again.",
      },
      { status: 400 }
    );
  }

  return Response.json({ ok: true });
}
