import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

const article = getArticle("menthol-and-ice-e-liquids-explained")!;

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
        "Menthol" and "ice" sit next to each other on almost every UK vape
        shop's flavour wall, and a lot of shoppers assume they're the same
        thing with two different names. They're not. Menthol is a flavour
        in its own right, with a distinct herbal, medicinal character. Ice
        is usually something else entirely: an ordinary fruit or dessert
        flavour with a cooling agent layered on top, giving a chilled finish
        without tasting of mint at all. Knowing the difference makes it much
        easier to pick something you'll actually enjoy.
      </p>

      <h2>True menthol, the original cooling flavour</h2>
      <p>
        Menthol is a naturally occurring compound found in peppermint and
        other mint plants, though the menthol used in e-liquid flavouring is
        usually produced synthetically for consistency. On its own it tastes
        exactly as it smells: sharp, herbal and faintly medicinal, closer to
        a mint sweet or a chest rub than to a cold drink. Menthol e-liquids
        were the natural successor to menthol cigarettes for many ex-smokers,
        and a straight menthol liquid is still the closest a vape gets to
        that specific taste.
      </p>

      <h2>What "ice" flavours are actually doing</h2>
      <p>
        "Ice" variants work differently. Rather than being built around a
        minty flavour note, they rely on a separate class of ingredient
        called a cooling agent, most commonly one called WS-23 (sometimes
        WS-3 is used too). This gets blended into a base flavour that has
        nothing to do with mint, which is how you end up with liquids like
        "watermelon ice" or "blue raspberry ice": the fruit is doing the
        flavour work, and the cooling agent is doing the chill on the
        exhale. We cover where menthol and ice sit among the other UK
        flavour families in{" "}
        <Link href="/guides/how-e-liquid-flavour-works-flavour-families">
          our guide to how e-liquid flavour works
        </Link>
        .
      </p>
      <p>
        A liquid can also combine both: a menthol-ice liquid genuinely does
        taste of mint, with a cooling agent added on top to push the chilled
        sensation further than menthol alone would give it. Reading the
        flavour name carefully is the easiest way to tell what you're
        actually buying, since "menthol", "mint" and "ice" aren't
        interchangeable terms even though shops often group them together.
      </p>

      <h2>Why a cooling agent feels cold without a cold liquid</h2>
      <p>
        Nothing about vaping an ice liquid is actually colder than any other
        vape. What's happening is a sensory trick rather than a temperature
        change. Menthol and cooling agents like WS-23 work by triggering the
        same cold-sensing receptors in your mouth and throat that respond to
        genuinely cold things, most notably one called TRPM8. Your nervous
        system reads that signal as cold, even though the vapour itself is
        at the same temperature it would be from any other flavour. That's
        why the sensation can feel surprisingly strong and long-lasting,
        sometimes lingering well after you've stopped exhaling.
      </p>

      <h2>Why some vapers prefer ice over straight menthol</h2>
      <p>
        For a lot of people, plain menthol is a fairly narrow taste that
        either suits them or doesn't, and it can feel one-note over a full
        day of vaping. Ice variants let you keep the cooling sensation many
        ex-smokers specifically look for while getting a wider, more varied
        flavour underneath it. Someone who finds straight menthol too sharp
        or medicinal might get on far better with a fruit ice, since the
        cooling is present but softened by whatever flavour it's paired
        with. It's a preference rather than an upgrade in either direction;
        plenty of long-term menthol vapers simply prefer the original,
        cleaner mint character.
      </p>

      <h2>How cooling changes the feel of nicotine strength</h2>
      <p>
        This is worth knowing before you try one. Cooling agents don't
        change how much nicotine is actually in a liquid, but they can
        change how that nicotine feels on the way down. The numbing,
        chilled sensation from menthol or an ice additive can mask some of
        the throat harshness that normally makes a higher nicotine strength
        feel obviously strong, so a 20mg/ml ice liquid can feel deceptively
        smooth compared with a non-cooled liquid at the same strength. That
        smoothness is a sensory effect, not a lower dose, and it's worth
        being a little more deliberate about how much you're vaping on a
        cooled liquid rather than judging it purely by feel. If you're not
        sure what strength is printed on your bottle or what it means,{" "}
        <Link href="/guides/how-to-read-an-e-liquid-label-uk">
          our guide to reading a UK e-liquid label
        </Link>{" "}
        covers exactly where to find it and what the legal limits are.
      </p>

      <h2>Trying menthol or ice for the first time</h2>
      <ul>
        <li>
          Start with a fruit or dessert ice rather than straight menthol if
          you're coming from a sweeter flavour, since it eases you into the
          cooling sensation gradually rather than all at once.
        </li>
        <li>
          Expect the cooling effect to build slightly the more you vape in
          one sitting; it isn't unusual for an ice liquid to feel stronger
          on the fifth puff than the first.
        </li>
        <li>
          If a liquid is labelled "extra ice" or "double ice", treat that as
          a genuinely stronger dose of cooling agent rather than marketing
          language, and expect a more intense sensation than a standard ice
          variant.
        </li>
        <li>
          Keep your usual nicotine strength for your first try, rather than
          also changing strength at the same time, so you can judge the
          flavour and cooling on their own terms.
        </li>
        <li>
          If you find any ice or menthol liquid uncomfortably harsh on the
          throat or chest, stop and try a milder variant or a lower
          strength rather than persisting through it.
        </li>
      </ul>

      <h2>Menthol versus ice, at a glance</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Menthol</th>
            <th>Ice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What gives the flavour</td>
            <td>Menthol itself</td>
            <td>A separate base flavour, usually fruit or dessert</td>
          </tr>
          <tr>
            <td>What gives the cooling</td>
            <td>Menthol itself</td>
            <td>A cooling agent such as WS-23, added separately</td>
          </tr>
          <tr>
            <td>Taste character</td>
            <td>Herbal, minty, medicinal</td>
            <td>Tastes of the base flavour, with a chilled finish</td>
          </tr>
          <tr>
            <td>Good starting point for</td>
            <td>Ex-menthol cigarette smokers</td>
            <td>Anyone who wants a cooling finish without a minty taste</td>
          </tr>
        </tbody>
      </table>

      <p>
        There's a live proposal under the Tobacco and Vapes Act 2026 that
        could eventually restrict flavour names to simple, single-word
        descriptions, which would affect branding like "watermelon ice"
        rather than the underlying products themselves. Nothing has changed
        yet at the time of writing, so the flavours described here remain
        legal and widely available, but it's a reasonable thing to expect
        naming conventions to shift over time. Either way, understanding
        what's actually in the bottle matters more than what it's called on
        the label, and it's a habit worth building alongside{" "}
        <Link href="/guides/vg-pg-explained-flavour-throat-hit">
          understanding how VG and PG affect throat hit
        </Link>{" "}
        generally, since a cooled liquid and a high-PG liquid can produce a
        similarly sharp sensation for quite different reasons.
      </p>
    </ArticleShell>
  );
}
