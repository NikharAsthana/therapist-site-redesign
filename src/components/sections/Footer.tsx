import { site } from "../../../content/site";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-medium tracking-tight">
            {site.brand.name}, {site.brand.credential}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.footer.tagline}
          </p>
          <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
            {site.footer.addressLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < site.footer.addressLines.length - 1 && <br />}
              </span>
            ))}
          </address>
          <p className="mt-2 text-sm text-muted-foreground">
            {site.footer.serviceArea}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase">
            {site.footer.exploreHeading}
          </p>
          <ul className="mt-4 space-y-2.5">
            {site.footer.exploreLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold tracking-[0.14em] uppercase">
            {site.footer.legalHeading}
          </p>
          <ul className="mt-4 space-y-2.5">
            {site.footer.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{site.footer.copyright}</p>
          <p>{site.footer.creditNote}</p>
        </div>
      </div>
    </footer>
  );
}
