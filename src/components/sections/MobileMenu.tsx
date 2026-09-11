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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
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
  );
}
