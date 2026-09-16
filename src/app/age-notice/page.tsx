import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Age Notice",
  description: "Vapour Notes is intended for adults aged 18 and over.",
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <LegalShell title="Age Notice" eyebrow="18+ content">
      <p>
        Vapour Notes publishes information about e-liquid flavour, vaping
        hardware and UK vaping regulation. This content is intended for
        adults aged 18 and over: specifically, existing smokers and vapers,
        or other adults seeking factual information about vaping.
      </p>

      <h2>Not intended for under-18s or non-smokers</h2>
      <p>
        Nothing on this site is intended to encourage anyone under the age
        of 18, or any adult who has never smoked or vaped, to start using
        nicotine or vaping products. UK law sets the minimum age to
        purchase vaping and tobacco products at 18, under the Children and
        Young Persons Act, and retailers are entitled to ask for ID to
        confirm your age before selling to you.
      </p>

      <h2>Vaping is not risk-free</h2>
      <p>
        We don't describe vaping as safe or harmless. According to the NHS
        and public health bodies such as OHID (the Office for Health
        Improvement and Disparities), vaping is considered substantially
        less harmful than smoking and can support some smokers in quitting,
        but it is not risk-free and is not recommended for people who have
        never smoked.
      </p>

      <h2>Why this notice exists</h2>
      <p>
        We've chosen to show this notice clearly on every page footer,
        rather than behind a pop-up age gate that blocks access to genuine
        information. We think a visible, honest statement serves readers
        better than a tick-box that's easy to click through without
        reading.
      </p>

      <p>
        If you have any questions about this notice, you can reach us via
        our <Link href="/contact">contact page</Link>.
      </p>
    </LegalShell>
  );
}
