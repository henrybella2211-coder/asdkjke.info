import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

const article = getArticle("how-to-read-an-e-liquid-label-uk")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${site.url}/guides/${article.slug}`,
    type: "article",
  },
};

const faqs = [
  {
    question: "Is 20mg/ml the strongest e-liquid I can buy in the UK?",
    answer:
      "Yes. Under the Tobacco and Related Products Regulations (TRPR), nicotine-containing e-liquid sold in the UK is capped at a maximum strength of 20mg/ml. Anything advertised above that for the UK market is not compliant.",
  },
  {
    question: "What does \"nicotine salt\" mean on a label?",
    answer:
      "Nicotine salt (often shortened to \"nic salt\") is a form of nicotine, usually benzoic acid based, formulated to feel smoother at higher strengths than traditional freebase nicotine. It's a separate detail from the VG/PG ratio and will usually be labelled clearly as \"nic salt\" or \"salt nic\" alongside the strength.",
  },
  {
    question: "Can I buy e-liquid in a bottle bigger than 10ml?",
    answer:
      "Not if it contains nicotine. TRPR limits nicotine-containing e-liquid to 10ml bottles and pre-filled tanks, pods or cartridges to 2ml. Nicotine-free shortfill bases are sold in larger bottles, typically with empty space so nicotine shots can be added up to the legal strength afterwards.",
  },
  {
    question: "Do I need ID to buy e-liquid in the UK?",
    answer:
      "You need to be 18 or over to buy any vaping product in the UK, and retailers can legally ask for ID to confirm your age. Many shops apply a Challenge 25 policy as their own store rule, asking for ID if you look under 25, even though the legal age itself is 18.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <ArticleShell article={article}>
        <p>
          E-liquid packaging in the UK carries more required information
          than most people ever stop to read, and it's genuinely useful once
          you know what you're looking at. A compliant label tells you the
          nicotine strength, the VG/PG ratio, what's actually in the bottle,
          and roughly how fresh it is. Here's what should be there, and why
          it matters.
        </p>

        <h2>What UK law requires on the packaging</h2>
        <p>
          The Tobacco and Related Products Regulations (TRPR) set out what
          nicotine-containing e-liquid packaging has to include before it
          can be legally sold in the UK. A compliant bottle or box should
          show:
        </p>
        <ul>
          <li>
            <strong>Nicotine strength</strong>, in mg/ml, never exceeding
            20mg/ml for nicotine-containing e-liquid.
          </li>
          <li>
            <strong>A nicotine warning</strong>, typically along the lines
            of "This product contains nicotine, which is a highly addictive
            substance."
          </li>
          <li>
            <strong>The VG/PG ratio</strong>, usually shown as a split such
            as 50/50 or 70/30. See{" "}
            <Link href="/guides/vg-pg-explained-flavour-throat-hit">
              our guide to what that ratio actually changes
            </Link>{" "}
            if you're not sure why it matters.
          </li>
          <li>
            <strong>A full ingredients list</strong>, covering the base
            liquid, flavourings and nicotine where present.
          </li>
          <li>
            <strong>A batch number</strong>, allowing a specific production
            run to be traced if there's ever a fault or recall.
          </li>
          <li>
            <strong>Shelf-life or best-before information</strong>, since
            flavour and nicotine content can degrade over time.
          </li>
          <li>
            <strong>Child-resistant and tamper-evident packaging</strong>,
            a legal requirement for anything containing nicotine.
          </li>
          <li>
            <strong>Manufacturer or importer contact details</strong>, so
            the responsible business can be identified.
          </li>
        </ul>
        <p>
          Bottle size is regulated too: nicotine-containing e-liquid must be
          sold in containers no larger than 10ml, and pre-filled pods,
          cartridges or tanks are limited to 2ml. Nicotine-free shortfill
          bottles, often 50ml or 100ml, are sold separately and are usually
          filled with extra headroom so you can add a nicotine shot
          yourself up to the legal strength.
        </p>

        <h2>MHRA notification</h2>
        <p>
          Before any vaping product can be sold in the UK, the manufacturer
          or importer has to notify it to the Medicines and Healthcare
          products Regulatory Agency (MHRA), submitting details of the
          product, its ingredients and emissions testing. This doesn't mean
          the MHRA has tested or approved the product itself, only that it
          has been formally notified and meets the paperwork requirements
          to be sold. The MHRA publishes a public list of notified products,
          which can be a useful way to check whether a product you're
          considering has actually gone through the process.
        </p>

        <h2>Spotting a label that isn't right</h2>
        <p>
          Most e-liquid sold through established UK vape shops and
          well-known online retailers is compliant, but it's still worth
          knowing the warning signs on anything bought from an unfamiliar
          source, a market stall or an overseas website.
        </p>
        <ul>
          <li>No nicotine warning text anywhere on the packaging.</li>
          <li>
            A nicotine strength above 20mg/ml offered for UK sale.
          </li>
          <li>
            A nicotine-containing bottle larger than 10ml, or a pre-filled
            pod larger than 2ml.
          </li>
          <li>
            No batch code, best-before date or manufacturer details
            printed anywhere.
          </li>
          <li>
            Packaging with no child-resistant closure on a
            nicotine-containing product.
          </li>
          <li>
            A single-use disposable device offered as new stock. Disposable
            vapes became illegal to sell in the UK from 1 June 2025, so
            genuinely new disposable stock should no longer be legally
            available; rechargeable and refillable devices remain
            perfectly legal.
          </li>
        </ul>

        <h2>At a glance</h2>
        <table>
          <thead>
            <tr>
              <th>Label element</th>
              <th>What it tells you</th>
              <th>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nicotine strength (mg/ml)</td>
              <td>How much nicotine is in each millilitre</td>
              <td>Helps you match strength to your usual habit</td>
            </tr>
            <tr>
              <td>VG/PG ratio</td>
              <td>Balance of vapour density versus throat hit and flavour</td>
              <td>Affects taste, feel and which device it suits</td>
            </tr>
            <tr>
              <td>Batch number</td>
              <td>Which production run the bottle came from</td>
              <td>Allows tracing if there's ever a recall or fault</td>
            </tr>
            <tr>
              <td>Best-before date</td>
              <td>Roughly how long the liquid stays at its best</td>
              <td>Flavour and nicotine can fade with age</td>
            </tr>
            <tr>
              <td>Child-resistant closure</td>
              <td>Packaging designed to prevent accidental access</td>
              <td>Legally required for nicotine-containing liquid</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <p>
          Reading a label properly takes about thirty seconds once you know
          what to look for, and it's the quickest way to check you're
          buying something genuinely compliant. If the VG/PG figure on the
          front still doesn't mean much to you in practice, our{" "}
          <Link href="/guides/vg-pg-explained-flavour-throat-hit">
            VG and PG explainer
          </Link>{" "}
          covers exactly what that number changes about how a liquid vapes.
        </p>
      </ArticleShell>
    </>
  );
}
