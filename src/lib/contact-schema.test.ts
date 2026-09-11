import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-schema";

const valid = {
  name: "Jane Rivera",
  email: "jane@example.com",
  phone: "(310) 555-0114",
  message: "I have been feeling overwhelmed lately.",
};

describe("contactSchema", () => {
  it("accepts a complete valid payload", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("accepts a payload without the optional phone", () => {
    const { phone: _omitted, ...rest } = valid;
    void _omitted;
    expect(contactSchema.safeParse(rest).success).toBe(true);
  });

  it("rejects an empty payload", () => {
    const parsed = contactSchema.safeParse({});
    expect(parsed.success).toBe(false);
  });

  it("rejects a short name", () => {
    const parsed = contactSchema.safeParse({ ...valid, name: "J" });
    expect(parsed.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const parsed = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(parsed.success).toBe(false);
  });

  it("rejects a short message", () => {
    const parsed = contactSchema.safeParse({ ...valid, message: "Hi" });
    expect(parsed.success).toBe(false);
  });
});
