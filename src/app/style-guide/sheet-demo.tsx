"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open navigation preview
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-display">
            Mobile navigation preview
          </SheetTitle>
          <SheetDescription>
            The mobile menu uses this slide-over panel. Focus is trapped while
            open and returns to the trigger on close.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
