"use client";

import dynamic from "next/dynamic";

// The mobile menu (Base UI dialog + floating-ui, ~100KB parsed) is only
// needed when the hamburger opens, so it loads after hydration. The
// skeleton holds layout so CLS stays 0.
const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
  loading: () => (
    <span
      aria-hidden="true"
      className="inline-block size-8 rounded-lg border border-border md:hidden"
    />
  ),
});

export default function MobileMenuLazy() {
  return <MobileMenu />;
}
