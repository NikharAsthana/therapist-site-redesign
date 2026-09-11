"use client";

import dynamic from "next/dynamic";

// Below-the-fold interactivity (zod + react-hook-form chain) loads only
// when the browser reaches it — keeps ~100KB off the initial bundle.
// Trade-off: the #contact section renders after hydration, so pre-hydration
// anchor jumps to it wait for JS. The min-height skeleton holds CLS at 0.
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  {
    ssr: false,
    loading: () => (
      <div aria-hidden="true" className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="min-h-[560px] animate-pulse rounded-2xl border bg-card" />
      </div>
    ),
  }
);

export default function ContactSectionLazy() {
  return <ContactSection />;
}
