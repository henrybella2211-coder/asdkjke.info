import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies, if any, Vapour Notes uses.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalShell title="Cookie Policy" eyebrow="Legal">
      <p>
        This is a short, honest explanation of cookie use on Vapour Notes,
        rather than boilerplate about categories of cookies we don't
        actually set.
      </p>

      <h2>What this site currently uses</h2>
      <p>
        Vapour Notes does not currently use tracking, advertising or
        analytics cookies. We haven't added any third-party scripts that
        set cookies for measuring visitors, retargeting adverts, or
        building browsing profiles. If you inspect this site's cookies
        today, you should not find any of that kind here.
      </p>

      <h2>Strictly necessary cookies</h2>
      <p>
        Some very basic, strictly necessary cookies may be set by our
        hosting infrastructure purely to make the site function correctly,
        for example to support security or load balancing. These aren't
        used to identify you personally or track your behaviour across
        sites, and under UK cookie rules they don't require a consent
        banner because they're essential to the site working at all.
      </p>

      <h2>If that changes</h2>
      <p>
        Should we introduce analytics or any other cookie-setting
        technology in the future, we will update this page to explain
        exactly what's added and why, and we will only do so in line with
        UK cookie law, which may require a consent mechanism at that point.
        We won't silently start tracking visitors without updating this
        page first.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about cookies on this site, get in touch
        via our <Link href="/contact">contact page</Link>. See also our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for how any
        information you send us directly is handled.
      </p>
    </LegalShell>
  );
}
