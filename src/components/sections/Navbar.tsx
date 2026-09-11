"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { site } from "../../../content/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label={site.nav.menuLabel}
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-display text-left">
                {site.brand.name}
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-2 flex flex-col gap-1">
              {site.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-3">
              <Button
                className="w-full"
                nativeButton={false}
                render={
                  <a href={site.nav.ctaHref} onClick={() => setOpen(false)} />
                }
              >
                {site.nav.ctaLabel}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
