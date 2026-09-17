import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

const article = getArticle("vg-pg-explained-flavour-throat-hit")!;

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
        Every e-liquid bottle is built on a base of two ingredients before a
        drop of flavouring or nicotine goes anywhere near it: vegetable
        glycerine (VG) and propylene glycol (PG). The ratio between them,
        printed on the label as something like 50/50 or 70/30, has a bigger
        effect on how a vape feels than most people expect. If you've ever
        wondered why the same flavour tastes different in two bottles, or
        why one pod kit feels harsh and another feels smooth, the VG/PG
        ratio is usually the answer.
      </p>

      <h2>What VG and PG actually are</h2>
      <p>
        Vegetable glycerine is a thick, faintly sweet liquid derived from
        plant oils. It's already used widely in food, cosmetics and
        medicine. In e-liquid, VG is the ingredient mainly responsible for
        vapour production: the denser and more visible the cloud, the more
        VG is usually doing the work.
      </p>
      <p>
        Propylene glycol is thinner and almost odourless, also long-used in
        food, asthma inhalers and stage fog machines. In e-liquid, PG is the
        better carrier for flavouring compounds, and it's the ingredient
        mostly responsible for what's known as throat hit, the slight
        peppery catch at the back of the throat that many ex-smokers find
        gives a more cigarette-like sensation.
      </p>

      <h2>Typical ratios on UK shelves</h2>
      <p>
        UK e-liquid is commonly sold in a handful of standard ratios, and
        most bottles state theirs clearly on the front label.
      </p>
      <ul>
        <li>
          <strong>50/50 VG/PG:</strong> an even split, the standard base
          for most nicotine salt bottles and entry-level pod kits.
        </li>
        <li>
          <strong>60/40:</strong> a slightly thicker, VG-leaning option
          still compatible with most pod and MTL devices.
        </li>
        <li>
          <strong>70/30:</strong> a common shortfill ratio for sub-ohm
          tanks, favouring vapour production over sharp flavour and throat
          hit.
        </li>
        <li>
          <strong>Max VG (80% or higher):</strong> used almost exclusively
          in high-wattage sub-ohm setups built for large clouds.
        </li>
      </ul>

      <h2>How the ratio changes flavour</h2>
      <p>
        Because PG carries flavour compounds more efficiently through a
        coil, higher-PG liquids generally taste crisper and closer to the
        bottle's description, particularly with sharper notes like citrus
        or menthol. As the VG proportion increases, flavour tends to come
        across softer and slightly sweeter, since VG itself has a mild
        natural sweetness and mutes some of the sharper top notes. Neither
        is "better" in absolute terms; it's a genuine trade-off between
        clarity of flavour and density of vapour. We go through the flavour
        families themselves, including which tend to suit which ratio, in{" "}
        <Link href="/guides/how-e-liquid-flavour-works-flavour-families">
          our guide to how e-liquid flavour works
        </Link>
        .
      </p>

      <h2>Throat hit, explained properly</h2>
      <p>
        Throat hit is largely down to PG, though nicotine strength plays a
        role too, since nicotine itself adds a degree of throat sensation
        independent of the base ratio. A 50/50 liquid at a moderate nicotine
        strength will generally feel firmer on the throat than a max-VG
        liquid at the same strength. This is one reason nicotine salt
        liquids, which are typically formulated to feel smoother at higher
        nicotine strengths, are so often sold in 50/50 rather than high-VG
        bases: the ratio is chosen to balance out the strength.
      </p>

      <h2>Matching ratio to device</h2>
      <p>
        VG/PG ratio isn't just a taste preference, it also needs to suit
        the hardware. Higher-VG liquid is thicker and takes longer to soak
        into a wicking material, which is fine for a sub-ohm tank designed
        with that in mind, but can cause dry hits or leaking in a
        low-wattage MTL pod built around thinner liquid.
      </p>
      <ul>
        <li>
          <strong>MTL (mouth-to-lung) pod kits and starter devices:</strong>{" "}
          usually paired with 50/50 or 60/40 liquid, which wicks well
          through the narrow airflow and higher-resistance coils these
          devices use.
        </li>
        <li>
          <strong>DTL (direct-to-lung) sub-ohm kits:</strong> built around
          low-resistance coils and open airflow, these are designed for
          70/30 or max-VG liquid, which wicks well at higher wattage and
          produces the dense clouds these devices are made for.
        </li>
      </ul>

      <h2>50/50 versus 70/30 versus max VG</h2>
      <table>
        <thead>
          <tr>
            <th>Ratio</th>
            <th>Throat hit</th>
            <th>Flavour clarity</th>
            <th>Vapour density</th>
            <th>Best suited to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>50/50</td>
            <td>Firm</td>
            <td>Sharp, close to bottle description</td>
            <td>Light</td>
            <td>MTL pod kits, nic salts</td>
          </tr>
          <tr>
            <td>70/30</td>
            <td>Moderate</td>
            <td>Softer, slightly sweeter</td>
            <td>Dense</td>
            <td>Sub-ohm tanks, shortfills</td>
          </tr>
          <tr>
            <td>Max VG</td>
            <td>Mild</td>
            <td>Muted, rounded</td>
            <td>Very dense</td>
            <td>High-wattage cloud setups</td>
          </tr>
        </tbody>
      </table>

      <h2>Shortfills and nicotine shots</h2>
      <p>
        Many UK shoppers meet VG/PG ratios for the first time through
        shortfills: nicotine-free bottles, commonly 50ml or 100ml, sold with
        extra headroom so one or more 10ml nicotine shots can be added
        afterwards. A shortfill's base ratio is fixed by the manufacturer
        before you buy it, typically something like 70/30, and adding a
        nicotine shot (usually mixed at 50/50 or 60/40 itself) shifts the
        final ratio slightly toward PG. It's a small shift on a large
        bottle, so it rarely changes the feel dramatically, but it's worth
        knowing if a shortfill tastes a touch sharper once a nic shot has
        gone in than it did straight from the bottle. For a full walkthrough
        of why shortfills are built this way and the maths for working out
        your final nicotine strength once a shot's been added, see{" "}
        <Link href="/guides/shortfills-explained-what-they-are-and-how-to-use-them">
          our guide to shortfills and nicotine shots
        </Link>
        .
      </p>
      <p>
        Some more experienced vapers mix their own ratios from scratch
        using separate VG and PG bases, flavour concentrates and nicotine
        shots, which allows fine control over the final blend. That's a
        more involved hobby in its own right, with its own safe-handling
        and labelling considerations, and it's outside the scope of this
        guide; most readers will get on perfectly well buying pre-mixed
        liquid at a stated ratio.
      </p>

      <h2>A couple of practical notes</h2>
      <p>
        A small number of people report mild sensitivity to PG, sometimes
        showing as a dry throat, mild cough or slight skin irritation from
        residue. If that sounds familiar, a higher-VG or max-VG liquid is
        usually worth trying instead. On the hardware side, thicker
        high-VG liquid can gunk up a low-wattage MTL coil more quickly than
        the coil is designed for, so it's worth matching liquid to device
        rather than assuming any ratio works in any tank. Coils also
        generally need priming (letting new wicking material fully soak
        through) before use, and that takes a little longer with a
        thicker, high-VG liquid than with a thinner 50/50 mix.
      </p>
      <p>
        The VG/PG ratio is one of the pieces of information UK-compliant
        e-liquid has to display clearly on the bottle. For a full walk
        through everything else that has to appear on a compliant label,
        see{" "}
        <Link href="/guides/how-to-read-an-e-liquid-label-uk">
          how to read an e-liquid label in the UK
        </Link>
        .
      </p>
    </ArticleShell>
  );
}
