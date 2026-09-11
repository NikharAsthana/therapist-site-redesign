import { site } from "../../../content/site";
import { Button } from "@/components/ui/button";
import MobileMenuLazy from "./MobileMenuLazy";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="leading-tight">
          <span className="font-display block text-lg font-medium tracking-tight">
            {site.brand.name}
          </span>
          <span className="block text-xs tracking-wide text-muted-foreground">
            {site.brand.credential} · {site.brand.shortLocation}
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<a href={site.nav.ctaHref} />}
          >
            {site.nav.ctaLabel}
          </Button>
        </div>

        <MobileMenuLazy />
      </nav>
    </header>
  );
}
