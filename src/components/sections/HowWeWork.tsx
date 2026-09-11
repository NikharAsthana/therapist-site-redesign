import { site } from "../../../content/site";

export default function HowWeWork() {
  return (
    <section
      aria-labelledby="approach-heading"
      id={site.approach.id}
      className="scroll-mt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {site.approach.eyebrow}
          </p>
          <h2
            id="approach-heading"
            className="font-display mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            {site.approach.heading}
          </h2>
          {site.approach.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-4 leading-relaxed text-muted-foreground first:mt-5"
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-6">
            <a
              href={site.approach.linkHref}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {site.approach.linkLabel} →
            </a>
          </p>
        </div>
        <div
          aria-hidden="true"
          className="aspect-[4/3] w-full rounded-2xl border border-dashed border-border bg-secondary shadow-soft"
        />
      </div>
    </section>
  );
}
