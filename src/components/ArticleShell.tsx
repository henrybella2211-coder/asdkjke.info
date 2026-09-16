import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { categoryColours } from "@/lib/articles";
import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

export default function ArticleShell({
  article,
  children,
}: {
  article: Article;
  children: React.ReactNode;
}) {
  const colours = categoryColours[article.category];

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guides",
              item: `${site.url}/guides`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: `${site.url}/guides/${article.slug}`,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.lastUpdatedISO,
          dateModified: article.lastUpdatedISO,
          author: {
            "@type": "Organization",
            name: `${site.name} editorial team`,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
          },
          mainEntityOfPage: `${site.url}/guides/${article.slug}`,
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-plum/60">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-plum">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/guides" className="hover:text-plum">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-plum/80" aria-current="page">
            {article.category}
          </li>
        </ol>
      </nav>

      <span
        className="mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
        style={{ backgroundColor: colours.bg, color: colours.text }}
      >
        {article.category}
      </span>

      <h1 className="font-display text-3xl font-semibold leading-tight text-plum sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-medium text-plum/60">
        <span>{article.readTime}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{article.lastUpdated}</span>
      </div>

      <div className="relative mt-8 h-64 w-full overflow-hidden rounded-3xl sm:h-96">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="prose-vapour mt-10 max-w-none text-[1.05rem] leading-relaxed text-ink/90">
        {children}
      </div>
    </article>
  );
}
