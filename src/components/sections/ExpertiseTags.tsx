const tags = [
  "Anxiety",
  "Panic attacks",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Overthinking",
  "Sleep difficulties",
  "Chronic stress",
];

export default function ExpertiseTags() {
  return (
    <section aria-labelledby="expertise-heading" className="border-b">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          Areas of expertise
        </p>
        <h2
          id="expertise-heading"
          className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
        >
          Grounded in what you&apos;re actually going through
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <li key={tag}>
              <a
                href="#specialties"
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
