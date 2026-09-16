import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vapour Notes handles data from visitors and contact form messages.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy" eyebrow="Legal">
      <p>
        This policy explains, in plain terms, what happens to any
        information collected when you visit Vapour Notes. It's written to
        reflect what this site actually does, not a generic template.
      </p>

      <h2>Who we are</h2>
      <p>
        Vapour Notes is an independent UK editorial website about e-liquid
        flavour. We are not a shop, and we do not process payments or store
        purchase information, because nothing is sold on this site.
      </p>

      <h2>Information collected automatically</h2>
      <p>
        Like most websites, our hosting provider may automatically log
        basic technical information, such as IP address, browser type and
        pages requested, purely for security and to keep the site running
        reliably. We do not currently run third-party analytics or
        advertising tracking scripts on this site. If that changes in the
        future, this page and our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link> will be updated to
        describe it accurately.
      </p>

      <h2>Information you give us directly</h2>
      <p>
        Our <Link href="/contact">contact page</Link> uses a form that opens
        your own email application with a message pre-filled. When you
        press send from your email client, your name, email address and
        message are sent directly to us as a normal email. We don't store
        or process that submission through this website itself; it becomes
        a regular email in our inbox, kept only for as long as reasonably
        needed to respond to or resolve your query.
      </p>

      <h2>How we use information</h2>
      <p>
        Any information sent to us through the contact form is used solely
        to respond to your message, correct an article, or answer a
        question. We do not sell, rent or share contact information with
        third parties, and we do not use it for marketing.
      </p>

      <h2>Legal basis and your rights</h2>
      <p>
        Under UK GDPR and the Data Protection Act 2018, you have rights
        over personal data held about you, including the right to ask what
        we hold, request a correction, or ask for it to be deleted. Given
        the limited data this site collects, in practice this usually means
        any email correspondence you've sent us. To make a request, use the
        details on our <Link href="/contact">contact page</Link>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy if what the site actually does changes,
        for example if we later add analytics. Any changes will be
        reflected on this page.
      </p>
    </LegalShell>
  );
}
