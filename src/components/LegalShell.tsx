import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

export default function LegalShell({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: `${site.url}`,
            },
          ],
        }}
      />
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-citrus">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl font-semibold text-plum">
        {title}
      </h1>
      <div className="prose-vapour mt-8 max-w-none text-[1.02rem] leading-relaxed text-ink/90">
        {children}
      </div>
    </div>
  );
}
