"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { site } from "../../../content/site";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  async function onSubmit(values: ContactInput) {
    setStatus("submitting");
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        setSubmitError(site.contact.submitError);
        setStatus("idle");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setSubmitError(site.contact.submitError);
      setStatus("idle");
    }
  }

  function startOver() {
    setStatus("idle");
    setSubmitError(null);
  }

  return (
    <section
      aria-labelledby="contact-heading"
      id={site.contact.id}
      className="scroll-mt-20 border-y bg-card"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {site.contact.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            {site.contact.heading}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {site.contact.body}
          </p>
          {process.env.NEXT_PUBLIC_SHOW_DEMO_NOTE === "1" && (
            <p className="mt-6 rounded-xl border border-dashed p-4 text-sm leading-relaxed text-muted-foreground">
              {site.contact.disclaimer}
            </p>
          )}
        </div>

        <div className="rounded-2xl border bg-background p-6 shadow-soft sm:p-8">
          {status === "success" ? (
            <div>
              <h3
                ref={successRef}
                tabIndex={-1}
                className="font-display text-2xl font-medium tracking-tight outline-none"
              >
                {site.contact.success.heading}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {site.contact.success.body}
              </p>
              <div className="mt-6">
                <Button variant="outline" onClick={startOver}>
                  {site.contact.success.againLabel}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field>
                  <FieldLabel>
                    <Label htmlFor="contact-name">
                      {site.contact.form.nameLabel}
                    </Label>
                  </FieldLabel>
                  <Input
                    id="contact-name"
                    autoComplete="name"
                    placeholder={site.contact.form.namePlaceholder}
                    aria-invalid={!!errors.name}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    {...register("name")}
                  />
                  <span id="contact-name-error">
                    <FieldError
                      errors={[{ message: errors.name?.message }]}
                    />
                  </span>
                </Field>

                <Field>
                  <FieldLabel>
                    <Label htmlFor="contact-email">
                      {site.contact.form.emailLabel}
                    </Label>
                  </FieldLabel>
                  <Input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder={site.contact.form.emailPlaceholder}
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    {...register("email")}
                  />
                  <span id="contact-email-error">
                    <FieldError
                      errors={[{ message: errors.email?.message }]}
                    />
                  </span>
                </Field>
              </div>

              <div className="mt-5">
                <Field>
                  <FieldLabel>
                    <Label htmlFor="contact-phone">
                      {site.contact.form.phoneLabel}{" "}
                      <span className="font-normal text-muted-foreground">
                        ({site.contact.form.phoneOptionalHint})
                      </span>
                    </Label>
                  </FieldLabel>
                  <Input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={site.contact.form.phonePlaceholder}
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone ? "contact-phone-error" : undefined
                    }
                    {...register("phone")}
                  />
                  <span id="contact-phone-error">
                    <FieldError
                      errors={[{ message: errors.phone?.message }]}
                    />
                  </span>
                </Field>
              </div>

              <div className="mt-5">
                <Field>
                  <FieldLabel>
                    <Label htmlFor="contact-message">
                      {site.contact.form.messageLabel}
                    </Label>
                  </FieldLabel>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    placeholder={site.contact.form.messagePlaceholder}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    {...register("message")}
                  />
                  <span id="contact-message-error">
                    <FieldError
                      errors={[{ message: errors.message?.message }]}
                    />
                  </span>
                </Field>
              </div>

              {submitError && (
                <p role="alert" className="mt-5 text-sm font-medium text-destructive">
                  {submitError}
                </p>
              )}

              <div className="mt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? site.contact.form.submittingLabel
                    : site.contact.form.submitLabel}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
