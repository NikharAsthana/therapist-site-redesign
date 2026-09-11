import { site } from "../../../content/site";
import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-heading">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:py-32">
        <div>
          <h2
            id="cta-heading"
            className="font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            {site.finalCta.heading}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            {site.finalCta.body}
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={site.nav.ctaHref} />}
            >
              {site.finalCta.ctaLabel}
            </Button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="aspect-[4/3] w-full rounded-2xl border border-dashed border-border bg-secondary shadow-soft"
        />
      </div>
    </section>
  );
}
