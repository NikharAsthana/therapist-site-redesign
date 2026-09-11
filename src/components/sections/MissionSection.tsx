import { site } from "../../../content/site";

export default function MissionSection() {
  return (
    <section
      aria-labelledby="about-heading"
      id={site.mission.id}
      className="scroll-mt-20 border-y bg-card"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div
          aria-hidden="true"
          className="aspect-[4/3] w-full rounded-2xl border border-dashed border-border bg-secondary shadow-soft"
        />
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {site.mission.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="font-display mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            {site.mission.heading}
          </h2>
          {site.mission.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-4 leading-relaxed text-muted-foreground first:mt-5"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
