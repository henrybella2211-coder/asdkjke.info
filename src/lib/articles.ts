export type FlavourCategory =
  | "Flavour Families"
  | "VG & PG"
  | "Buying & Labels";

export const categories: FlavourCategory[] = [
  "Flavour Families",
  "VG & PG",
  "Buying & Labels",
];

export const categoryColours: Record<
  FlavourCategory,
  { bg: string; text: string }
> = {
  "Flavour Families": { bg: "#FCEBD2", text: "#8A4B12" },
  "VG & PG": { bg: "#DFF3EF", text: "#1F6E60" },
  "Buying & Labels": { bg: "#F3E1EE", text: "#7A2A63" },
};

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: FlavourCategory;
  readTime: string;
  lastUpdated: string;
  lastUpdatedISO: string;
  image: string;
  imageAlt: string;
}

export const articles: Article[] = [
  {
    slug: "how-e-liquid-flavour-works-flavour-families",
    title:
      "How e-liquid flavour actually works: a beginner's guide to flavour families",
    excerpt:
      "What's really going on when you taste a vape, the main UK flavour families explained, and how to try new flavours without a drawer full of regrets.",
    category: "Flavour Families",
    readTime: "8 min read",
    lastUpdated: "Last updated 10 September 2026",
    lastUpdatedISO: "2026-09-10",
    image: "/images/sliced-citrus-fruits-board.jpg",
    imageAlt:
      "Assorted sliced citrus fruits including lemon, lime and orange arranged on a wooden chopping board",
  },
  {
    slug: "vg-pg-explained-flavour-throat-hit",
    title: "VG and PG explained: how the ratio changes flavour and throat hit",
    excerpt:
      "Vegetable glycerine and propylene glycol do very different jobs in a bottle of e-liquid. Here's how the ratio on the label affects what you actually taste and feel.",
    category: "VG & PG",
    readTime: "9 min read",
    lastUpdated: "Last updated 12 September 2026",
    lastUpdatedISO: "2026-09-12",
    image: "/images/vaper-silhouette-cloud-sunset.jpg",
    imageAlt:
      "Silhouette of a person exhaling a dense cloud of vapour outdoors at dusk",
  },
  {
    slug: "how-to-read-an-e-liquid-label-uk",
    title: "How to read an e-liquid label in the UK",
    excerpt:
      "Nicotine strength, VG/PG ratio, batch codes and warning text: a plain walkthrough of what UK-compliant e-liquid packaging has to show, and how to spot the real thing.",
    category: "Buying & Labels",
    readTime: "9 min read",
    lastUpdated: "Last updated 15 September 2026",
    lastUpdatedISO: "2026-09-15",
    image: "/images/eliquid-bottles-shelf-range.jpg",
    imageAlt:
      "A shelf lined with a range of small e-liquid bottles of varying colours",
  },
  {
    slug: "menthol-and-ice-e-liquids-explained",
    title: "Menthol and ice e-liquids explained",
    excerpt:
      "Menthol and \"ice\" get lumped together on shelves, but they're not the same flavour. How cooling agents actually work, why some vapers prefer them, and how to try one for the first time.",
    category: "Flavour Families",
    readTime: "8 min read",
    lastUpdated: "Last updated 16 September 2026",
    lastUpdatedISO: "2026-09-16",
    image: "/images/clear-ice-cubes-close-up.jpg",
    imageAlt:
      "Close-up of clear ice cubes stacked together with light reflecting off their surfaces",
  },
  {
    slug: "shortfills-explained-what-they-are-and-how-to-use-them",
    title: "Shortfills explained: what they are and how to use them",
    excerpt:
      "Why a 50ml bottle of e-liquid is often sold with no nicotine in it, what a nicotine shot actually does to it, and the simple maths for reaching the strength you want.",
    category: "Buying & Labels",
    readTime: "8 min read",
    lastUpdated: "Last updated 18 September 2026",
    lastUpdatedISO: "2026-09-18",
    image: "/images/large-eliquid-bottles-held.jpg",
    imageAlt:
      "A hand holding four large capped e-liquid bottles with colourful fruit-flavour labels",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
