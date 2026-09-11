import Image from "next/image";
import { site } from "../../../content/site";
import { Button } from "@/components/ui/button";
import heroMain from "../../../public/images/hero-main.jpg";
import heroSecondary from "../../../public/images/hero-secondary.jpg";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:py-32">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {site.hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-4 text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {site.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.hero.support}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={site.nav.ctaHref} />}
            >
              {site.hero.primaryCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href={`#${site.mission.id}`} />}
            >
              {site.hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] w-[72%] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src={heroMain}
              alt={site.hero.mainImageAlt}
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 65vw, 33vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 aspect-square w-[52%] overflow-hidden rounded-2xl border-4 border-background shadow-lift">
            <Image
              src={heroSecondary}
              alt={site.hero.secondaryImageAlt}
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 45vw, 23vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
