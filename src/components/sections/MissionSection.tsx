export default function MissionSection() {
  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      className="scroll-mt-20 border-y bg-card"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div
          aria-hidden="true"
          className="aspect-[4/3] w-full rounded-2xl border border-dashed border-border bg-secondary shadow-soft"
        />
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            About Dr. Reynolds
          </p>
          <h2
            id="about-heading"
            className="font-display mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            Warm, collaborative therapy for overwhelmed adults
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware — but internally feel exhausted, stuck in overthinking,
            or emotionally on edge. Sessions are structured enough to feel
            supportive, while still leaving space for reflection and depth.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My goal is not just symptom relief, but helping you develop
            insight, resilience, and a stronger relationship with yourself over
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
