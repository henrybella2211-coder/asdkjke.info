import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

const article = getArticle(
  "shortfills-explained-what-they-are-and-how-to-use-them",
)!;

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

export default function Page() {
  return (
    <ArticleShell article={article}>
      <p>
        Pick up a 50ml or 100ml bottle of e-liquid in a UK vape shop and
        there's a good chance it contains no nicotine at all, despite
        looking every bit like a "proper" bottle of vape juice. That's a
        shortfill, and once you understand why it's built the way it is,
        the whole system makes a lot more sense than it first appears.
      </p>

      <h2>What a shortfill actually is</h2>
      <p>
        A shortfill is a bottle of e-liquid, commonly 50ml or 100ml, sold
        deliberately under-filled relative to the bottle's total capacity.
        A "50ml shortfill" typically means 50ml of liquid inside a 60ml
        bottle, leaving 10ml of empty headroom. That gap isn't a packaging
        mistake or a shortfall, it's there on purpose, sized specifically so
        you can pour in a 10ml nicotine shot afterwards without the bottle
        overflowing. The liquid itself is normally sold at 0mg, with a
        stated VG/PG ratio, and everything else you'd expect on a bottle
        label except a nicotine strength above zero.
      </p>

      <h2>Why shortfills exist</h2>
      <p>
        Shortfills are a direct consequence of UK regulation rather than a
        marketing idea. Under the Tobacco and Related Products Regulations
        (TRPR), nicotine-containing e-liquid can only be sold in containers
        of 10ml or less, a limit confirmed in GOV.UK's guidance on
        e-cigarette regulations for consumer products. That works fine for
        someone who gets through a bottle or two a week, but it's
        impractical for sub-ohm vapers who might go through 50ml or more.
        Manufacturers solved this by selling the base liquid nicotine-free,
        since the 10ml cap only applies once nicotine is added, and pairing
        it with small nicotine shots that stay within the legal limit.
        Buying a large nicotine-free base plus a separate 10ml shot is
        cheaper overall than buying the equivalent volume in multiple 10ml
        nicotine bottles, which is a large part of why shortfills became so
        popular once TRPR came into force.
      </p>

      <h2>How a nicotine shot works</h2>
      <p>
        A nicotine shot is a small, usually flavourless or very lightly
        flavoured 10ml bottle of concentrated nicotine in a VG/PG base,
        typically sold at 18mg/ml, just under the 20mg/ml strength cap that
        applies to any nicotine-containing e-liquid sold in the UK. Poured
        into a shortfill, it dilutes down to a much lower final strength
        because it's spread across a far larger total volume. The shot
        itself is a legally regulated nicotine-containing e-liquid in its
        own right, so it carries its own nicotine warning and
        child-resistant cap, exactly as a 10ml bottle of pre-mixed liquid
        would.
      </p>

      <h2>The maths: working out your final strength</h2>
      <p>
        The calculation is simple once you see it written out. Final
        strength in mg/ml is the total nicotine in the bottle (shot volume
        in ml multiplied by the shot's strength in mg/ml) divided by the
        total volume once everything's combined.
      </p>
      <p>
        Take the most common example: a 50ml shortfill with a single 10ml
        nicotine shot at 18mg/ml.
      </p>
      <ul>
        <li>Total nicotine added: 10ml × 18mg/ml = 180mg</li>
        <li>Total volume once combined: 50ml + 10ml = 60ml</li>
        <li>Final strength: 180mg ÷ 60ml = 3mg/ml</li>
      </ul>
      <p>
        Most shortfill bottles are deliberately sized so this sum lands on
        a clean, standard strength. A 100ml shortfill with two 10ml shots
        works out the same way: 20ml × 18mg/ml = 360mg of nicotine across
        120ml of finished liquid, which is also 3mg/ml. Some shops also sell
        "double shot" 50ml bottles that are actually only filled to 40ml,
        with room for two shots: 20ml × 18mg/ml = 360mg across 60ml, giving
        6mg/ml instead. The bottle size and headroom tell you how many
        shots it's designed for, and it's always worth checking that figure
        before you buy rather than assuming.
      </p>

      <h2>What to check on a shortfill label</h2>
      <ul>
        <li>
          <strong>VG/PG ratio</strong>, fixed by the manufacturer and
          usually leaning toward VG (70/30 is common), since shortfills are
          mostly aimed at sub-ohm tanks. See{" "}
          <Link href="/guides/vg-pg-explained-flavour-throat-hit">
            our VG and PG explainer
          </Link>{" "}
          for how adding a shot shifts that ratio slightly once it's mixed
          in.
        </li>
        <li>
          <strong>How many shots it's designed for.</strong> This is
          usually printed clearly, such as "add one 10ml nic shot" or "add
          up to two 10ml nic shots", and tells you the headroom available.
        </li>
        <li>
          <strong>Batch code and best-before date</strong>, the same
          traceability information any UK-compliant e-liquid should show.
        </li>
        <li>
          <strong>A clear "0mg" or "nicotine-free" statement</strong> on
          the shortfill itself, distinct from the separate nicotine
          warning that will appear on the nic shot bottle once you buy one.
        </li>
        <li>
          <strong>Manufacturer or importer details</strong>, required on
          any e-liquid product regardless of nicotine content.
        </li>
      </ul>
      <p>
        For the full list of everything UK-compliant e-liquid packaging has
        to show, including how nicotine strength and warnings are meant to
        be presented once a shot's been added,{" "}
        <Link href="/guides/how-to-read-an-e-liquid-label-uk">
          our guide to reading a UK e-liquid label
        </Link>{" "}
        goes through it in full.
      </p>

      <h2>A few practical notes</h2>
      <p>
        Once you've added a shot, cap the bottle tightly and give it a
        proper shake, since the nicotine won't distribute evenly on its
        own. Many vapers also let a freshly shotted bottle rest for a day
        or two before using it, sometimes called steeping, which can let
        the flavour settle after the shot's own liquid has been mixed in,
        though this is a personal preference rather than a requirement.
        Only ever add nicotine shots to a shortfill designed to take them;
        pouring one into an already nicotine-containing bottle risks pushing
        the total strength above the legal 20mg/ml cap, and pouring it into
        the wrong volume of liquid will simply give you a strength you
        didn't intend. From 1 October 2026, a new Vaping Products Duty of
        £2.20 per 10ml applies to all vaping liquid sold in the UK,
        including shortfills, nic shots and 0mg liquid, so it's worth
        expecting shortfill and nic shot pricing to shift around that date.
      </p>

      <p>
        Shortfills exist because of a regulatory quirk rather than because
        anyone particularly wanted a bottle with a gap in it, but once
        you've done the sum once, working out your own strength from any
        shortfill and shot combination takes about ten seconds. If you're
        still getting to grips with what the rest of the label is telling
        you beyond the nicotine maths, that's exactly what{" "}
        <Link href="/guides/how-to-read-an-e-liquid-label-uk">
          our label guide
        </Link>{" "}
        is there to help with.
      </p>
    </ArticleShell>
  );
}
