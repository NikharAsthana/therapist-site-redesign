import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:py-32">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Licensed Clinical Psychologist · Santa Monica, CA
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-4 text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Therapy for anxiety, trauma, and burnout
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            In-person therapy in Santa Monica and secure telehealth across
            California — for adults who feel overwhelmed, stuck in
            overthinking, or emotionally on edge.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
              Book a consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#about" />}
            >
              Learn about my approach
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="aspect-[4/5] w-[72%] rounded-2xl border border-dashed border-border bg-secondary shadow-soft" />
          <div className="absolute right-0 bottom-0 aspect-square w-[52%] rounded-2xl border border-dashed border-border bg-muted shadow-lift" />
        </div>
      </div>
    </section>
  );
}
