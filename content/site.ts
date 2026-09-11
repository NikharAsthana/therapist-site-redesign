/**
 * Single source of truth for every user-facing string on the site.
 *
 * Each value traces back to `content/source-profile.md` (the only allowed
 * source of facts about Dr. Reynolds). Structural labels (nav items, section
 * eyebrows, button text) are site chrome, not factual claims.
 *
 * Components must import copy from here — no hardcoded site copy in
 * component files. (The `/style-guide` dev route is the documented
 * exception: its prose demonstrates the design system itself.)
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface CopyCard {
  title: string;
  body: string;
}

export interface Specialty extends CopyCard {
  learnMoreLabel: string;
}

export interface SiteContent {
  brand: {
    name: string;
    credential: string;
    role: string;
    shortLocation: string;
  };
  nav: {
    links: NavLink[];
    ctaLabel: string;
    ctaHref: string;
    menuLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    support: string;
    primaryCta: string;
    secondaryCta: string;
  };
  mission: {
    id: string;
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  whoWeHelp: {
    id: string;
    eyebrow: string;
    heading: string;
    items: CopyCard[];
  };
  quote: {
    text: string;
    attribution: string;
  };
  expertise: {
    eyebrow: string;
    heading: string;
    tags: string[];
  };
  approach: {
    id: string;
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    linkLabel: string;
    linkHref: string;
  };
  specialties: {
    id: string;
    eyebrow: string;
    heading: string;
    items: Specialty[];
  };
  finalCta: {
    heading: string;
    body: string;
    ctaLabel: string;
  };
  footer: {
    tagline: string;
    addressLines: string[];
    serviceArea: string;
    exploreHeading: string;
    exploreLinks: NavLink[];
    legalHeading: string;
    legal: NavLink[];
    copyright: string;
    creditNote: string;
  };
  metadata: {
    title: string;
    description: string;
  };
}

export const site: SiteContent = {
  brand: {
    name: "Dr. Maya Reynolds",
    credential: "PsyD",
    role: "Licensed Clinical Psychologist",
    shortLocation: "Santa Monica, CA",
  },
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Specialties", href: "#specialties" },
      { label: "Approach", href: "#approach" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Book a consultation",
    ctaHref: "#contact",
    menuLabel: "Open navigation menu",
  },
  hero: {
    eyebrow: "Licensed Clinical Psychologist · Santa Monica, CA",
    title: "Therapy for anxiety, trauma, and burnout",
    support:
      "In-person therapy in Santa Monica and secure telehealth across California — for adults who feel overwhelmed, stuck in overthinking, or emotionally on edge.",
    primaryCta: "Book a consultation",
    secondaryCta: "Learn about my approach",
  },
  mission: {
    id: "about",
    eyebrow: "About Dr. Reynolds",
    heading: "Warm, collaborative therapy for overwhelmed adults",
    paragraphs: [
      "Many of the people I work with are high-achieving, thoughtful, and self-aware — but internally feel exhausted, stuck in overthinking, or emotionally on edge. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
      "My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.",
    ],
  },
  whoWeHelp: {
    id: "who-we-help",
    eyebrow: "Who I help",
    heading: "You don't have to be in crisis to benefit from therapy",
    items: [
      {
        title: "Anxiety & panic",
        body: "For adults who feel functional on the outside while quietly struggling with constant worry, tension in the body, or difficulty sleeping.",
      },
      {
        title: "Trauma & painful experiences",
        body: "For single-incident trauma as well as long-standing patterns that affect relationships, confidence, or a sense of safety.",
      },
      {
        title: "Burnout & perfectionism",
        body: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress.",
      },
    ],
  },
  quote: {
    text: "Therapy works best when you feel respected, understood, and actively involved in the process.",
    attribution: "Dr. Maya Reynolds, PsyD",
  },
  expertise: {
    eyebrow: "Areas of expertise",
    heading: "Grounded in what you're actually going through",
    tags: [
      "Anxiety",
      "Panic attacks",
      "Trauma",
      "Burnout",
      "Perfectionism",
      "Overthinking",
      "Sleep difficulties",
      "Chronic stress",
    ],
  },
  approach: {
    id: "approach",
    eyebrow: "How we work",
    heading: "Practical tools with room for depth",
    paragraphs: [
      "I integrate evidence-based methods — cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques — to help you understand both the emotional and the physiological sides of what you're experiencing.",
      "Trauma work is paced carefully, with an emphasis on safety and stabilization first, so you feel more regulated in daily life — not just during sessions.",
    ],
    linkLabel: "Explore specialties",
    linkHref: "#specialties",
  },
  specialties: {
    id: "specialties",
    eyebrow: "Specialties",
    heading: "Focused support, shaped around you",
    items: [
      {
        title: "Anxiety & panic",
        body: "Constant worry, a sense of always bracing for something to go wrong, and panic that arrives out of nowhere. We work with both the racing thoughts and the body tension underneath them.",
        learnMoreLabel: "Learn more",
      },
      {
        title: "Trauma",
        body: "Single-incident trauma as well as complex, long-standing patterns from childhood, relationships, or chronic stress. Paced carefully, with safety and stabilization leading the way.",
        learnMoreLabel: "Learn more",
      },
      {
        title: "Burnout & perfectionism",
        body: "Exhaustion, high internal pressure, and disconnection after years of pushing through. Therapy becomes a space to slow down and build more sustainable ways of living and working.",
        learnMoreLabel: "Learn more",
      },
      {
        title: "Chronic stress & overwhelm",
        body: "Feeling emotionally on edge, stuck in overthinking, or depleted by a fast-paced environment. Practical tools plus depth-oriented work, tailored to your daily reality.",
        learnMoreLabel: "Learn more",
      },
    ],
  },
  finalCta: {
    heading:
      "A space to slow down, reconnect, and build something more sustainable",
    body: "If you're looking for practical tools combined with depth-oriented work — with someone who understands fast-paced, high-pressure lives — I may be a good fit.",
    ctaLabel: "Book a consultation",
  },
  footer: {
    tagline:
      "Licensed clinical psychologist offering warm, collaborative therapy for anxiety, trauma, and burnout.",
    addressLines: ["123th Street 45 W", "Santa Monica, CA 90401"],
    serviceArea: "In person in Santa Monica · Telehealth across California",
    exploreHeading: "Explore",
    exploreLinks: [
      { label: "About", href: "#about" },
      { label: "Specialties", href: "#specialties" },
      { label: "Approach", href: "#approach" },
      { label: "Contact", href: "#contact" },
      { label: "Style guide", href: "/style-guide" },
    ],
    legalHeading: "Legal",
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    copyright: "© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.",
    creditNote: "Design engineering exercise — fictional practice.",
  },
  metadata: {
    title: "Dr. Maya Reynolds, PsyD — Therapy in Santa Monica & California",
    description:
      "Licensed clinical psychologist in Santa Monica offering in-person and telehealth therapy across California for anxiety, trauma, panic, and burnout.",
  },
};
