import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SheetDemo from "./sheet-demo";

const textPairs: {
  name: string;
  fg: string;
  bg: string;
  ratio: string;
  grade: string;
  use: string;
}[] = [
  {
    name: "Ink on linen",
    fg: "#1E2A26",
    bg: "#FAF7F2",
    ratio: "13.89 : 1",
    grade: "AAA",
    use: "Body copy, headings on page background",
  },
  {
    name: "Pine on linen",
    fg: "#2D4A3E",
    bg: "#FAF7F2",
    ratio: "9.10 : 1",
    grade: "AAA",
    use: "Headings, links, eyebrow labels",
  },
  {
    name: "Linen on pine",
    fg: "#FAF7F2",
    bg: "#2D4A3E",
    ratio: "9.10 : 1",
    grade: "AAA",
    use: "Primary button text, quote banner",
  },
  {
    name: "Muted on linen",
    fg: "#5A6E66",
    bg: "#FAF7F2",
    ratio: "5.10 : 1",
    grade: "AA",
    use: "Secondary text, captions",
  },
  {
    name: "Clay on linen",
    fg: "#8A4E33",
    bg: "#FAF7F2",
    ratio: "6.11 : 1",
    grade: "AA",
    use: "Accent text, small highlights",
  },
  {
    name: "White on clay",
    fg: "#FFFFFF",
    bg: "#8A4E33",
    ratio: "6.53 : 1",
    grade: "AA",
    use: "Accent button text",
  },
];

const decorativeOnly: { name: string; hex: string; ratio: string }[] = [
  { name: "Raw clay", hex: "#C17C5B", ratio: "3.12 : 1 on linen" },
  { name: "Sage", hex: "#7A9B8A", ratio: "~2.9 : 1 on linen" },
];

function Section({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-8">
      <h2
        id={id}
        className="font-display text-2xl font-medium tracking-tight text-balance sm:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{lede}</p>
      <div className="mt-6">{children}</div>
      <Separator className="mt-12" />
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
        Design system · Phase 1
      </p>
      <h1 className="font-display mt-3 max-w-2xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
        Style guide
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Every color, type style, and component state on this site comes from
        the tokens below. Nothing here is one-off: components only reference
        these values.
      </p>
      <p className="mt-4 text-sm">
        <Link href="/" className="font-medium text-primary underline-offset-4 hover:underline">
          ← Back to home
        </Link>
      </p>

      <div className="mt-10 space-y-12">
        <Section
          id="color"
          title="Color"
          lede="Calming, non-clinical, never startup-blue. Deep pine for stability and growth, warm linen for safety and natural light, fired clay for human warmth. Ratios were computed, not guessed."
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {textPairs.map((pair) => (
              <li
                key={pair.name}
                className="overflow-hidden rounded-xl border bg-card shadow-soft"
              >
                <div
                  className="flex h-24 items-end justify-between p-3 text-sm font-semibold"
                  style={{ backgroundColor: pair.bg, color: pair.fg }}
                >
                  <span>Aa</span>
                  <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs text-black">
                    {pair.grade}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-medium">{pair.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {pair.fg} on {pair.bg} · {pair.ratio}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pair.use}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-dashed p-4">
            <p className="font-medium">Decorative only — never body text</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {decorativeOnly.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="size-4 rounded-full border"
                    style={{ backgroundColor: c.hex }}
                  />
                  {c.name} · {c.hex} · {c.ratio} (fails AA)
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="type"
          title="Typography"
          lede="Fraunces, a warm serif, for headings — editorial and human. Source Sans 3, a humanist sans, for body — highly legible at small sizes. Both are variable fonts, self-hosted via next/font (SIL Open Font License 1.1, zero requests to Google in production)."
        >
          <div className="space-y-6 rounded-xl border bg-card p-6 shadow-soft sm:p-8">
            <div>
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                Display / Fraunces · H1 · 2.5rem → 3.75rem
              </p>
              <p className="font-display mt-2 text-4xl font-medium tracking-tight text-balance sm:text-5xl">
                A calm space to work through anxiety
              </p>
            </div>
            <Separator />
            <div>
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                Display / Fraunces · H2 · 2rem → 2.75rem
              </p>
              <p className="font-display mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
                Therapy that respects both insight and practical tools
              </p>
            </div>
            <Separator />
            <div>
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                Sans / Source Sans 3 · Body · 1.0625rem / 1.75
              </p>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed">
                Sessions are structured enough to feel supportive, while still
                leaving space for reflection and depth.
              </p>
            </div>
            <Separator />
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
              <p className="text-sm text-muted-foreground">
                Small / 0.875rem — captions, metadata
              </p>
              <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                Eyebrow / caps — section labels
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="buttons"
          title="Buttons"
          lede="Pill-shaped and low-contrast: pine fills for the primary action, sand for secondary, clay reserved for rare accent moments. Focus rings are always visible for keyboard users."
        >
          <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-card p-6 shadow-soft">
            <Button>Book a consultation</Button>
            <Button variant="secondary">Learn about my approach</Button>
            <Button variant="outline">Read FAQs</Button>
            <Button variant="ghost">Ghost action</Button>
            <Button variant="link">Learn more →</Button>
            <Button size="lg">Large primary</Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Tab through the buttons above: every one shows a 2px pine
            focus-visible ring with a 3px offset.
          </p>
        </Section>

        <Section
          id="cards"
          title="Cards"
          lede="White cards on linen with soft, low-contrast shadows — the pattern behind the Who-we-help grid and Specialties grid in Phase 2."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-display">Anxiety & overthinking</CardTitle>
                <CardDescription>
                  For high-achieving adults who feel exhausted underneath.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Constant worry, tension in the body, difficulty sleeping, or
                  a sense of always bracing for something to go wrong.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">
                  Learn more →
                </Button>
              </CardFooter>
            </Card>
            <Card className="shadow-lift">
              <CardHeader>
                <CardTitle className="font-display">Trauma & burnout</CardTitle>
                <CardDescription>
                  Paced carefully, with safety and stabilization first.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Single-incident trauma as well as long-standing patterns —
                  plus professional burnout and high internal pressure.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">
                  Learn more →
                </Button>
              </CardFooter>
            </Card>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Left: <code className="font-mono text-[0.85em]">shadow-soft</code> (default).
            Right: <code className="font-mono text-[0.85em]">shadow-lift</code> (hover / emphasis).
          </p>
        </Section>

        <Section
          id="accordion"
          title="Accordion"
          lede="The FAQ pattern for Phase 2 — keyboard-navigable with visible focus states."
        >
          <Accordion className="rounded-xl border bg-card px-5 shadow-soft">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you offer telehealth?</AccordionTrigger>
              <AccordionContent>
                Yes — in-person sessions in Santa Monica and secure telehealth
                across California.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What methods do you use?</AccordionTrigger>
              <AccordionContent>
                CBT, EMDR, mindfulness-based practices, and body-oriented
                techniques, paced collaboratively.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section
          id="form"
          title="Form fields"
          lede="Field, label, and input primitives bound to react-hook-form + zod in Phase 6. Shown here as a non-functional preview — error and success states arrive with the contact form."
        >
          <div className="max-w-md rounded-xl border bg-card p-6 shadow-soft">
            <Field>
              <FieldLabel>
                <Label htmlFor="sg-name">Full name</Label>
              </FieldLabel>
              <Input id="sg-name" placeholder="Jane Rivera" />
              <FieldDescription>
                Preview only — validation arrives in Phase 6.
              </FieldDescription>
            </Field>
          </div>
        </Section>

        <Section
          id="sheet"
          title="Sheet (mobile menu)"
          lede="The slide-over panel behind the mobile navigation in Phase 2. Try it — focus is trapped while open and returns to the trigger on close."
        >
          <div className="rounded-xl border bg-card p-6 shadow-soft">
            <SheetDemo />
          </div>
        </Section>

        <Section
          id="shape"
          title="Radius, shadow & spacing"
          lede="Soft geometry throughout: no sharp clinical corners, no harsh startup shadows. Section rhythm is py-16 mobile → py-24 tablet → py-32 desktop."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border bg-card p-5 shadow-soft">
              <p className="font-mono text-xs text-muted-foreground">radius</p>
              <div className="mt-3 flex items-end gap-3">
                <span className="flex size-12 items-center justify-center rounded-sm bg-secondary text-xs">sm</span>
                <span className="flex size-12 items-center justify-center rounded-md bg-secondary text-xs">md</span>
                <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-xs">lg</span>
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-xs">xl</span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-xs">2xl</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                sm 0.5 → 2xl 2rem. Buttons use pill (full).
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <p className="font-mono text-xs text-muted-foreground">shadow</p>
              <div className="mt-3 space-y-3">
                <div className="rounded-lg bg-card p-3 text-sm shadow-soft">
                  soft — default cards
                </div>
                <div className="rounded-lg bg-card p-3 text-sm shadow-lift">
                  lift — hover / emphasis
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <p className="font-mono text-xs text-muted-foreground">spacing</p>
              <div className="mt-3 flex items-end gap-2" aria-hidden="true">
                <span className="w-6 bg-primary/20" style={{ height: 16 }} />
                <span className="w-6 bg-primary/30" style={{ height: 32 }} />
                <span className="w-6 bg-primary/50" style={{ height: 48 }} />
                <span className="w-6 bg-primary" style={{ height: 64 }} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                4pt base scale. Gaps 4 → 6 → 8; sections 16 → 24 → 32.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
