import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Vapour Notes researches, writes and updates its guides.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <LegalShell title="Editorial Policy" eyebrow="How we work">
      <p>
        This page explains how content on Vapour Notes is put together, so
        readers know what's behind each guide.
      </p>

      <h2>Independence</h2>
      <p>
        Vapour Notes does not accept payment, free products or any other
        incentive from e-liquid manufacturers or retailers in exchange for
        favourable coverage, a mention, or a link. Where a specific brand
        or product is named in a guide, it's because naming it is genuinely
        useful for the reader, not because of any commercial relationship.
      </p>

      <h2>How we research articles</h2>
      <p>
        Factual claims about flavour chemistry, VG/PG behaviour and device
        types are based on how these products are generally understood and
        described across the UK vaping trade. For regulatory and
        health-related claims, such as nicotine strength limits, bottle
        size rules or the disposable vape ban, we refer to official UK
        sources including GOV.UK, the MHRA, the NHS and Trading Standards
        guidance, and we aim to reference the relevant body directly in the
        text rather than simply asserting a rule.
      </p>

      <h2>What we don't do</h2>
      <ul>
        <li>
          We don't claim to have personally lab-tested any e-liquid or
          device.
        </li>
        <li>
          We don't publish invented review scores, star ratings or
          customer testimonials.
        </li>
        <li>
          We don't state vaping is "safe" or "harmless"; where we describe
          it as less harmful than smoking, we attribute that view to public
          health bodies such as the NHS, rather than asserting it as our
          own unqualified claim.
        </li>
      </ul>

      <h2>Keeping articles current</h2>
      <p>
        Each guide shows a visible "last updated" date. When UK vaping
        regulation changes, for example around nicotine strength limits or
        product availability, we aim to review and, where necessary,
        revise affected articles so the last-updated date reflects when
        that check took place.
      </p>

      <h2>Corrections</h2>
      <p>
        If you believe something on Vapour Notes is inaccurate or
        out of date, please tell us via our{" "}
        <Link href="/contact">contact page</Link>. We'll review genuine
        corrections and update the relevant article, along with its
        last-updated date, once we've verified the change.
      </p>
    </LegalShell>
  );
}
