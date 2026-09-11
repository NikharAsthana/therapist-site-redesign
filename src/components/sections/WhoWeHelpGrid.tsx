import Image from "next/image";
import { site } from "../../../content/site";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import whoAnxiety from "../../../public/images/who-anxiety.jpg";
import whoTrauma from "../../../public/images/who-trauma.jpg";
import whoBurnout from "../../../public/images/who-burnout.jpg";

const cardImages = [whoAnxiety, whoTrauma, whoBurnout];

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
          {site.whoWeHelp.items.map((group, index) => (
            <li key={group.title}>
              <Card className="h-full overflow-hidden pt-0 shadow-soft">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={cardImages[index]}
                    alt={group.imageAlt}
                    placeholder="blur"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 28vw"
                    className="h-full w-full object-cover"
                  />
                </div>
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
