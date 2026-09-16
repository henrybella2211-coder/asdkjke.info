import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vapour Notes is an independent UK editorial website focused entirely on e-liquid flavour, VG/PG and how to read a vape label.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
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
              name: "About",
              item: `${site.url}/about`,
            },
          ],
        }}
      />
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-citrus">
        About Vapour Notes
      </p>
      <h1 className="font-display text-4xl font-semibold text-plum">
        A closer look at flavour.
      </h1>

      <div className="relative mt-8 h-56 w-full overflow-hidden rounded-3xl sm:h-72">
        <Image
          src="/images/pod-device-with-eliquid-bottle.jpg"
          alt="A compact pod vaping device standing next to a small e-liquid bottle"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose-vapour mt-10 max-w-none text-[1.05rem] leading-relaxed text-ink/90">
        <p>
          Vapour Notes is an independent UK website that focuses on one
          specific corner of vaping: flavour. Rather than covering every
          device on the market, we write about how e-liquid flavour is put
          together, what VG and PG actually do to taste and throat hit, and
          how to read what's printed on a UK e-liquid label before you buy.
        </p>

        <h2>Who this is written for</h2>
        <p>
          Our guides are written for adults who already vape and want to
          understand flavour more confidently, whether that's working out
          why a bottle tastes different from the description, choosing a
          VG/PG ratio that suits a new device, or checking that a product
          is properly labelled. This site is not aimed at, and should not
          be read by, anyone under 18 or anyone who has never smoked or
          vaped.
        </p>

        <h2>How the site is run</h2>
        <p>
          Vapour Notes is written and edited by our UK-based editorial
          team. We are an independent information resource, not a shop:
          we don't sell e-liquid or hardware, and we don't accept payment
          from manufacturers or retailers in exchange for coverage. Details
          of how we research and update articles are set out in full on
          our{" "}
          <Link href="/editorial-policy">editorial policy</Link> page.
        </p>

        <h2>Where our facts come from</h2>
        <p>
          When we state a regulatory or health-related fact, such as the
          UK nicotine strength cap or the rules around disposable vapes, we
          base it on official UK sources including GOV.UK, the MHRA, the
          NHS and Trading Standards guidance, and we try to reference the
          relevant body directly in the text. We're upfront when something
          is our own editorial opinion rather than an established fact.
        </p>

        <h2>Get in touch</h2>
        <p>
          If you've spotted something that needs correcting, or you have a
          question about an article, our{" "}
          <Link href="/contact">contact page</Link> has the best way to
          reach us.
        </p>
      </div>
    </div>
  );
}
