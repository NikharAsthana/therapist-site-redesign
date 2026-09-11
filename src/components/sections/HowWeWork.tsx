export default function HowWeWork() {
  return (
    <section
      aria-labelledby="approach-heading"
      id="approach"
      className="scroll-mt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            How we work
          </p>
          <h2
            id="approach-heading"
            className="font-display mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            Practical tools with room for depth
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I integrate evidence-based methods — cognitive-behavioral therapy
            (CBT), EMDR, mindfulness-based practices, and body-oriented
            techniques — to help you understand both the emotional and the
            physiological sides of what you&apos;re experiencing.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trauma work is paced carefully, with an emphasis on safety and
            stabilization first, so you feel more regulated in daily life — not
            just during sessions.
          </p>
          <p className="mt-6">
            <a
              href="#specialties"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Explore specialties →
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
