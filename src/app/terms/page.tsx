import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: "Terms of use and editorial disclaimer for Vapour Notes.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms & Website Disclaimer" eyebrow="Legal">
      <p>
        These terms cover the use of Vapour Notes. By reading and using this
        website, you accept the points below.
      </p>

      <h2>Informational purpose only</h2>
      <p>
        Vapour Notes is an editorial and informational website. Content is
        provided for general information about e-liquid flavour, VG/PG and
        UK vaping regulation, and should not be treated as medical, legal
        or professional advice. If you need advice on quitting smoking or
        managing a health condition, speak to your GP, a pharmacist or an
        NHS stop smoking service.
      </p>

      <h2>Age restriction: 18+</h2>
      <p>
        This website and its content are intended for adults aged 18 and
        over, specifically existing smokers and vapers, or adults seeking
        factual information about vaping. Nothing on this site is intended
        to encourage anyone under 18, or anyone who has never smoked or
        vaped, to start. See our{" "}
        <Link href="/age-notice">Age Notice</Link> for the full statement.
      </p>

      <h2>No liability for third-party products</h2>
      <p>
        Where we describe or name specific e-liquid brands, flavours or
        devices, this is for illustration and general guidance only. We
        don't endorse or guarantee any particular manufacturer's product,
        and we accept no liability for claims made by third-party
        manufacturers or retailers, or for your experience with any product
        purchased elsewhere.
      </p>

      <h2>Accuracy and regulatory content</h2>
      <p>
        We take care to base regulatory and health-related statements on
        official UK sources such as GOV.UK, the MHRA and the NHS, current
        as of each article's last-updated date shown on the page. Rules can
        change after publication, so always check the current position with
        an official source before relying on anything time-sensitive, such
        as legal nicotine limits or age-of-sale requirements.
      </p>

      <h2>External links</h2>
      <p>
        Some pages link to external websites, including official UK
        regulatory bodies and, occasionally, manufacturer websites where
        naming a specific product is genuinely helpful. We aren't
        responsible for the content, accuracy or availability of external
        sites, and a link doesn't imply endorsement of everything on that
        site.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, design and graphics on Vapour Notes, including the
        flavour wheel graphic, are original to this site unless stated
        otherwise. You're welcome to link to our articles; please don't
        republish our text elsewhere without asking first via our{" "}
        <Link href="/contact">contact page</Link>.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time as the site develops.
        Continued use of the site after changes are published means you
        accept the updated terms.
      </p>
    </LegalShell>
  );
}
