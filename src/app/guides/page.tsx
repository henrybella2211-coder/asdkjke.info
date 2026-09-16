import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import CategoryFilterGrid from "@/components/CategoryFilterGrid";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Every Vapour Notes guide to e-liquid flavour, VG/PG ratios and reading UK vape labels, filterable by category.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: `Guides | ${site.name}`,
    description:
      "Every Vapour Notes guide to e-liquid flavour, VG/PG ratios and reading UK vape labels.",
    url: `${site.url}/guides`,
  },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: site.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guides",
              item: `${site.url}/guides`,
            },
          ],
        }}
      />
      <header className="mb-12 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-citrus">
          The library
        </p>
        <h1 className="font-display text-4xl font-semibold text-plum">
          Guides
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Filter by category, or browse everything. Every guide is written
          fresh for Vapour Notes, in plain English.
        </p>
        <div className="relative mx-auto mt-8 h-48 w-full max-w-3xl overflow-hidden rounded-3xl sm:h-64">
          <Image
            src="/images/eliquid-bottle-and-pod-device.jpg"
            alt="A small e-liquid bottle standing next to a pod vaping device on a flat surface"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </header>
      <CategoryFilterGrid articles={articles} />
    </div>
  );
}
