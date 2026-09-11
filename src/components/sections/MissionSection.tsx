import Image from "next/image";
import { site } from "../../../content/site";
import portrait from "../../../public/portrait-dr-reynolds.jpg";

export default function MissionSection() {
  return (
    <section
      aria-labelledby="about-heading"
      id={site.mission.id}
      className="scroll-mt-20 border-y bg-card"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <figure className="w-full">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={portrait}
              alt={site.mission.portraitAlt}
              placeholder="blur"
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            {site.brand.name}, {site.brand.credential} — {site.brand.role}{" "}
            in {site.brand.shortLocation}
          </figcaption>
        </figure>
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
