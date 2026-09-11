import Image from "next/image";
import { site } from "../../../content/site";
import office1 from "../../../public/office1.jpeg";
import office2 from "../../../public/office2.jpeg";

const officeImages = [office1, office2];

export default function OurOffice() {
  return (
    <section
      aria-labelledby="office-heading"
      id={site.office.id}
      className="scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {site.office.eyebrow}
          </p>
          <h2
            id="office-heading"
            className="font-display mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            {site.office.heading}
          </h2>
          {site.office.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-4 leading-relaxed text-muted-foreground first:mt-5"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {site.office.images.map((image, index) => (
            <div
              key={image.alt}
              className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft"
            >
              <Image
                src={officeImages[index]}
                alt={image.alt}
                placeholder="blur"
                sizes="(max-width: 768px) 90vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <dl className="mt-10 grid gap-5 sm:grid-cols-3">
          {site.office.notes.map((note) => (
            <div
              key={note.label}
              className="rounded-xl border bg-card p-5 shadow-soft"
            >
              <dt className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
                {note.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {note.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
