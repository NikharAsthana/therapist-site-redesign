import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const groups = [
  {
    title: "Anxiety & panic",
    body: "For adults who feel functional on the outside while quietly struggling with constant worry, tension in the body, or difficulty sleeping.",
  },
  {
    title: "Trauma & painful experiences",
    body: "For single-incident trauma as well as long-standing patterns that affect relationships, confidence, or a sense of safety.",
  },
  {
    title: "Burnout & perfectionism",
    body: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress.",
  },
];

export default function WhoWeHelpGrid() {
  return (
    <section aria-labelledby="who-we-help-heading" id="who-we-help" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          Who I help
        </p>
        <h2
          id="who-we-help-heading"
          className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
        >
          You don&apos;t have to be in crisis to benefit from therapy
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <li key={group.title}>
              <Card className="h-full shadow-soft">
                <div
                  aria-hidden="true"
                  className="mx-6 mt-6 aspect-[16/9] rounded-lg border border-dashed border-border bg-secondary"
                />
                <CardHeader>
                  <CardTitle className="font-display text-xl">
                    {group.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {group.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
