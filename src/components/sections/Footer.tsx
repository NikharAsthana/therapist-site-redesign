const nav = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
  { label: "Style guide", href: "/style-guide" },
];

const legal = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-medium tracking-tight">
            Dr. Maya Reynolds, PsyD
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Licensed clinical psychologist offering warm, collaborative
            therapy for anxiety, trauma, and burnout.
          </p>
          <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </address>
          <p className="mt-2 text-sm text-muted-foreground">
            In person in Santa Monica · Telehealth across California
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
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
            Legal
          </p>
          <ul className="mt-4 space-y-2.5">
            {legal.map((item) => (
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
          <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <p>Design engineering exercise — fictional practice.</p>
        </div>
      </div>
    </footer>
  );
}
