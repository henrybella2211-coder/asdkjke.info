import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Vapour Notes editorial team about a correction, question or suggestion.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: `${site.url}/contact`,
            },
          ],
        }}
      />
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-citrus">
        Get in touch
      </p>
      <h1 className="font-display text-4xl font-semibold text-plum">
        Contact us
      </h1>
      <p className="mt-4 text-ink/80">
        Spotted something that needs correcting, or have a question about an
        article? We'd like to hear from you. Vapour Notes is a small,
        independent site with no phone line or office, so email is the only
        way to reach us.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
