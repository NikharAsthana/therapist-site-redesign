import Image from "next/image";
import { site } from "../../../content/site";
import quoteBg from "../../../public/images/quote-bg.jpg";

export default function QuoteBanner() {
  return (
    <section aria-label="A note on therapy" className="relative overflow-hidden">
      <Image
        src={quoteBg}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-primary/90" />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-16 text-center text-primary-foreground sm:px-8 sm:py-24">
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
