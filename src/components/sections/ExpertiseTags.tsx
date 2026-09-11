import { site } from "../../../content/site";

export default function ExpertiseTags() {
  return (
    <section aria-labelledby="expertise-heading" className="border-b">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {site.expertise.eyebrow}
        </p>
        <h2
          id="expertise-heading"
          className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
        >
          {site.expertise.heading}
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {site.expertise.tags.map((tag) => (
            <li key={tag}>
              <a
                href={`#${site.specialties.id}`}
                className="inline-block rounded-full border bg-card px-5 py-2.5 text-sm font-medium shadow-soft transition-colors hover:border-primary hover:text-primary"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
