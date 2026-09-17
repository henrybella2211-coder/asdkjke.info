import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

const article = getArticle("how-e-liquid-flavour-works-flavour-families")!;

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
        Take a mouthful of vapour from two bottles labelled the same fruit
        name and you can still get two quite different experiences. That's
        because flavour in e-liquid isn't one ingredient, it's a small
        recipe: flavouring concentrates, a base of VG and PG, and sometimes
        nicotine, all interacting on your tongue and in your nose at once.
        Understanding the basics makes it much easier to predict what you'll
        actually like before you open a bottle.
      </p>

      <h2>What you're tasting, really</h2>
      <p>
        Most of what we call "flavour" is actually aroma. Vapour carries
        scent compounds up into the nasal cavity as you exhale, which is why
        a blocked nose makes vaping (and eating) taste flat. The tongue adds
        sweetness, sourness and a little of the throat hit sensation, but
        the fine detail of "peach" versus "nectarine" is mostly your nose
        doing the work. This is also why flavour can fade the longer you
        vape in one sitting: your nose adapts to a repeated scent quickly,
        a phenomenon sometimes called vaper's tongue.
      </p>

      <h2>The main UK flavour families</h2>
      <p>
        Walk into a UK vape shop or browse an online range and you'll find
        that almost everything sits within a handful of broad families.
        Plenty of liquids blend two together, but it's a useful map for
        working out what you might enjoy.
      </p>

      <h3>Fruit</h3>
      <p>
        The largest and most varied family by far. It ranges from a single,
        clean note like strawberry or apple through to layered mixed-berry
        or tropical blends with five or six fruits in one bottle. Fruit
        liquids tend to sit well on a wide range of VG/PG ratios, which is
        part of why they're such a popular starting point.
      </p>

      <h3>Menthol and ice</h3>
      <p>
        These are often lumped together but they're not quite the same
        thing. True menthol is a flavour note in its own right, with a
        herbal, medicinal quality. "Ice" variants instead usually rely on a
        cooling agent, most commonly WS-23, layered on top of a fruit or
        drink flavour to give a chilled finish without adding a strong
        minty taste. That's how you get liquids like "watermelon ice" that
        taste mostly of watermelon with a cold sensation on the exhale. We
        go into much more detail on how that cooling sensation actually
        works, and how it can be confused with true menthol, in{" "}
        <Link href="/guides/menthol-and-ice-e-liquids-explained">
          our menthol and ice explainer
        </Link>
        .
      </p>

      <h3>Dessert and bakery</h3>
      <p>
        Custards, pastries, biscuits and cream-based liquids fall here.
        These flavours often lean on vanilla, buttery and toasted notes,
        and in our experience they tend to come across better on higher-VG
        mixes, since a thicker base seems to carry the rounder, sweeter
        notes more comfortably. Some dessert liquids also benefit from a
        short steeping period, a few days resting in a cool, dark place
        after opening, to let the flavour mellow.
      </p>

      <h3>Tobacco</h3>
      <p>
        Tobacco-flavoured e-liquid ranges from a plain, dry leaf note
        through to sweeter caramel or RY4-style blends (a classic tobacco
        and caramel combination). Many people who've switched from smoking
        use tobacco liquids as a familiar starting point, though plenty of
        long-term vapers move on to other families once the novelty of
        quitting smoking has settled.
      </p>

      <h3>Beverage</h3>
      <p>
        Cola, energy drink, lemonade and coffee-inspired liquids sit in
        their own family. These are often built to be sharper and more
        PG-forward, since carbonation and citrus top notes tend to come
        through more clearly on a thinner base.
      </p>

      <h2>How flavour meets VG and PG</h2>
      <p>
        Flavouring concentrates dissolve into the VG/PG base rather than
        floating separately in it, and the ratio of that base changes how
        the finished liquid tastes and feels. Propylene glycol (PG) is
        thinner and carries flavour molecules more efficiently, so
        higher-PG liquids often taste crisper and truer to the bottle
        description. Vegetable glycerine (VG) is thicker and naturally a
        little sweet, and in larger proportions it tends to soften or round
        off sharper notes while producing noticeably more vapour. We cover
        this in full, including which ratios suit which devices, in{" "}
        <Link href="/guides/vg-pg-explained-flavour-throat-hit">
          our VG and PG explainer
        </Link>
        .
      </p>
      <p>
        This is also why the same flavour name can taste different between
        two brands or two ratios. A 50/50 lemon sorbet and a 70/30 lemon
        sorbet from the same range are rarely identical experiences, even
        though the flavouring itself hasn't changed.
      </p>

      <h2>Trying new flavours without a drawer full of regrets</h2>
      <p>
        It's easy to end up with a shelf of barely-touched bottles. A few
        habits help avoid that.
      </p>
      <ul>
        <li>
          Start with a small bottle. Many UK shops sell 10ml nicotine
          shortfill bases or short-dated sample sizes specifically so you
          can try before committing to a larger bottle.
        </li>
        <li>
          Try one new flavour at a time. Vaping several unfamiliar liquids
          back to back makes it hard to judge any of them fairly, thanks to
          that nasal adaptation mentioned earlier.
        </li>
        <li>
          Give dessert and bakery liquids a day or two to settle after
          opening if the flavour seems muted at first; some genuinely
          improve with a short rest.
        </li>
        <li>
          Ask in an independent vape shop before buying a full-size bottle.
          Many will let you smell, or in some cases sample, a flavour on
          the spot.
        </li>
        <li>
          Keep a short note of flavours and brands you've liked and
          disliked. It sounds unnecessary until you're standing in front of
          forty bottles trying to remember which mango one you got on with.
        </li>
      </ul>

      <h2>A quick comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Family</th>
            <th>Typical notes</th>
            <th>Good starting point for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fruit</td>
            <td>Bright, sweet, widely varied</td>
            <td>Most new vapers</td>
          </tr>
          <tr>
            <td>Menthol / ice</td>
            <td>Cool finish, often layered on another flavour</td>
            <td>Ex-menthol cigarette smokers</td>
          </tr>
          <tr>
            <td>Dessert / bakery</td>
            <td>Sweet, creamy, vanilla or bakery notes</td>
            <td>Higher-VG sub-ohm setups</td>
          </tr>
          <tr>
            <td>Tobacco</td>
            <td>Dry leaf through to sweet caramel blends</td>
            <td>People recently switched from smoking</td>
          </tr>
          <tr>
            <td>Beverage</td>
            <td>Sharp, often citrus or cola-led</td>
            <td>PG-forward MTL devices</td>
          </tr>
        </tbody>
      </table>

      <p>
        Flavour preference is genuinely personal, and there's no correct
        family to land on. If you want to understand why the same flavour
        can feel completely different from one bottle to the next, the
        VG/PG ratio is usually the next thing worth learning, and once
        you're buying bottles regularly it's worth knowing{" "}
        <Link href="/guides/how-to-read-an-e-liquid-label-uk">
          how to read a UK e-liquid label properly
        </Link>{" "}
        so you know exactly what's in front of you.
      </p>
    </ArticleShell>
  );
}
