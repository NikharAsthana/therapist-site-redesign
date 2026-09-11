const specialties = [
  {
    title: "Anxiety & panic",
    body: "Constant worry, a sense of always bracing for something to go wrong, and panic that arrives out of nowhere. We work with both the racing thoughts and the body tension underneath them.",
  },
  {
    title: "Trauma",
    body: "Single-incident trauma as well as complex, long-standing patterns from childhood, relationships, or chronic stress. Paced carefully, with safety and stabilization leading the way.",
  },
  {
    title: "Burnout & perfectionism",
    body: "Exhaustion, high internal pressure, and disconnection after years of pushing through. Therapy becomes a space to slow down and build more sustainable ways of living and working.",
  },
  {
    title: "Chronic stress & overwhelm",
    body: "Feeling emotionally on edge, stuck in overthinking, or depleted by a fast-paced environment. Practical tools plus depth-oriented work, tailored to your daily reality.",
  },
];

export default function SpecialtiesGrid() {
  return (
    <section
      aria-labelledby="specialties-heading"
      id="specialties"
      className="scroll-mt-20 border-y bg-card"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          Specialties
        </p>
        <h2
          id="specialties-heading"
          className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
        >
          Focused support, shaped around you
        </h2>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_320px]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {specialties.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border bg-background p-6 shadow-soft"
              >
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Learn more →
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <div
            aria-hidden="true"
            className="aspect-[3/4] w-full rounded-2xl border border-dashed border-border bg-secondary shadow-soft lg:sticky lg:top-24"
          />
        </div>
      </div>
    </section>
  );
}
