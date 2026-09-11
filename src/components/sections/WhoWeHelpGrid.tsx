import { site } from "../../../content/site";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WhoWeHelpGrid() {
  return (
    <section
      aria-labelledby="who-we-help-heading"
      id={site.whoWeHelp.id}
      className="scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {site.whoWeHelp.eyebrow}
        </p>
        <h2
          id="who-we-help-heading"
          className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
        >
          {site.whoWeHelp.heading}
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.whoWeHelp.items.map((group) => (
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
