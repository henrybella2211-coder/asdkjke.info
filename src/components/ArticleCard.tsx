import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { categoryColours } from "@/lib/articles";

export default function ArticleCard({
  article,
  size = "small",
}: {
  article: Article;
  size?: "large" | "small";
}) {
  const colours = categoryColours[article.category];
  const isLarge = size === "large";

  return (
    <Link
      href={`/guides/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-12px_rgba(91,42,110,0.35)] ring-1 ring-plum/5 transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
    >
      <div className={`relative w-full ${isLarge ? "h-64 sm:h-80" : "h-44"}`}>
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes={isLarge ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 30vw, 100vw"}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span
          className="w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
          style={{ backgroundColor: colours.bg, color: colours.text }}
        >
          {article.category}
        </span>
        <h3
          className={`font-display font-semibold leading-snug text-plum ${
            isLarge ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p className="text-sm text-ink/70 line-clamp-3">{article.excerpt}</p>
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs font-medium text-plum/60">
          <span>{article.readTime}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{article.lastUpdated}</span>
        </div>
      </div>
    </Link>
  );
}
