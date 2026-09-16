import Link from "next/link";
import FlavourDropIcon from "./FlavourDropIcon";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Disclaimer", href: "/terms" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Age Notice", href: "/age-notice" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-lilac">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 pt-14 pb-8 text-center">
        <Link href="/" className="flex items-center gap-2">
          <FlavourDropIcon className="h-6 w-4" />
          <span className="font-display text-xl font-semibold text-plum">
            Vapour Notes
          </span>
        </Link>
        <p className="max-w-md text-sm text-plum/70">
          A closer look at flavour. Independent UK e-liquid flavour education
          for adult vapers.
        </p>

        <div aria-hidden="true" className="flex items-center gap-3 text-plum/30">
          <span className="h-px w-16 bg-plum/20" />
          <FlavourDropIcon className="h-4 w-3" fill="#5B2A6E" />
          <span className="h-px w-16 bg-plum/20" />
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-plum/80">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline decoration-citrus decoration-2 underline-offset-4 hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-plum/60">
          &copy; {new Date().getFullYear()} Vapour Notes. Independent
          editorial content, not affiliated with any e-liquid manufacturer or
          retailer.
        </p>
      </div>

      <div className="w-full bg-plum py-3 text-center text-xs font-semibold tracking-wide text-lilac">
        <p className="mx-auto max-w-3xl px-6">
          18+ ONLY. This website contains information about vaping intended
          for existing adult smokers and vapers. It is not intended to
          encourage anyone under 18, or anyone who has never smoked or vaped,
          to start.{" "}
          <Link href="/age-notice" className="underline underline-offset-2">
            Read our age notice
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
