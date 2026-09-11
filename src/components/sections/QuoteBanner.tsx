import { site } from "../../../content/site";

export default function QuoteBanner() {
  return (
    <section
      aria-label="A note on therapy"
      className="bg-primary text-primary-foreground"
    >
      <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <blockquote>
          <p className="font-display text-2xl font-medium tracking-tight text-balance sm:text-4xl">
            &ldquo;{site.quote.text}&rdquo;
          </p>
        </blockquote>
        <p className="mt-6 text-sm font-semibold tracking-[0.18em] uppercase opacity-80">
          {site.quote.attribution}
        </p>
      </div>
    </section>
  );
}
