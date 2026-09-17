import Link from "next/link";
import FlavourWheel from "@/components/FlavourWheel";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

const flavourFamilies = [
  {
    name: "Fruit",
    colour: "#E8734A",
    blurb:
      "From single-note strawberry to layered tropical mixes. The broadest, most varied family in any UK vape shop.",
  },
  {
    name: "Menthol / Ice",
    colour: "#4FB6A8",
    blurb:
      "Cooling agents like WS-23 sit on top of a base flavour to give a chilled finish, separate from true menthol.",
  },
  {
    name: "Dessert / Bakery",
    colour: "#C98A4B",
    blurb:
      "Custards, pastries and bakes built from vanilla, cream and biscuit notes. Tends to work best on higher-VG mixes.",
  },
  {
    name: "Tobacco",
    colour: "#7A4A2B",
    blurb:
      "Ranges from a plain, dry leaf note through to caramel and RY4-style blends favoured by many ex-smokers.",
  },
  {
    name: "Beverage",
    colour: "#C2478D",
    blurb:
      "Cola, energy drink and coffee-inspired liquids, usually built around a sharper, PG-forward flavour profile.",
  },
];

export default function Home() {
  const [featured, ...rest] = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-citrus">
              Flavour, explained
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-plum sm:text-5xl">
              A closer look at flavour.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
              Vapour Notes is an independent UK guide to how e-liquid flavour
              actually works. We break down flavour families, explain what
              VG and PG are really doing in your bottle, and help you read a
              label properly before you buy, written for adult vapers who
              already vape and want to choose with a bit more confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/guides"
                className="rounded-full bg-plum px-6 py-3 text-sm font-bold text-lilac shadow-md shadow-plum/30 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
              >
                Browse the guides
              </Link>
              <Link
                href="/about"
                className="rounded-full px-2 py-3 text-sm font-bold text-plum underline decoration-citrus decoration-2 underline-offset-4 hover:text-plum-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
              >
                Why we write this
              </Link>
            </div>
          </div>
          <FlavourWheel className="h-56 w-56 justify-self-center sm:h-64 sm:w-64" />
        </div>
      </section>

      {/* Flavour families tile grid */}
      <section className="bg-white/60 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl font-semibold text-plum">
            Flavour families, at a glance
          </h2>
          <p className="mt-2 max-w-2xl text-ink/70">
            Most UK e-liquid falls into one of five broad families. It's a
            useful starting map, even though plenty of bottles blend two or
            three together.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {flavourFamilies.map((family) => (
              <div
                key={family.name}
                className="flex flex-col gap-3 rounded-3xl bg-lilac p-5 shadow-[0_10px_24px_-14px_rgba(91,42,110,0.4)] ring-1 ring-plum/5"
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-10 rounded-full"
                  style={{ backgroundColor: family.colour }}
                />
                <h3 className="font-display text-lg font-semibold text-plum">
                  {family.name}
                </h3>
                <p className="text-sm text-ink/70">{family.blurb}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-plum/70">
            Read the full breakdown in{" "}
            <Link
              href="/guides/how-e-liquid-flavour-works-flavour-families"
              className="font-semibold text-plum underline decoration-citrus decoration-2 underline-offset-4"
            >
              our flavour families guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Latest articles - asymmetric grid */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-plum">
          Latest from the guides
        </h2>
        <p className="mt-2 max-w-2xl text-ink/70">
          Three places to start if you're new here.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="sm:row-span-2">
            <ArticleCard article={featured} size="large" />
          </div>
          <div className="flex flex-col gap-6">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Pull-quote trust strip */}
      <section className="bg-plum py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl font-medium italic leading-snug text-lilac sm:text-3xl">
            &ldquo;Flavour on a vape label is chemistry, not magic. Once you
            know what VG, PG and a flavour family are actually doing, picking
            a bottle you'll enjoy stops being guesswork.&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-citrus">
            The Vapour Notes editorial team
          </p>
        </div>
      </section>
    </>
  );
}
