import Image from "next/image";
import { site } from "../../../content/site";
import { Button } from "@/components/ui/button";
import finalCtaImage from "../../../public/images/final-cta.jpg";

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
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft">
          <Image
            src={finalCtaImage}
            alt={site.finalCta.imageAlt}
            placeholder="blur"
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
