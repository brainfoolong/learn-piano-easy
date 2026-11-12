/**
 * The landing page's band of the two parts: one large card for "Learn Piano" and one for "Just Play
 * Piano", each with a picture of its part, a sentence and its action.
 *
 * The cards sit side by side from 768 pixels and stack below. Learn's action is the primary one, as in
 * the hero. Each card is `plain`, not a target, so its action is a real link of its own.
 *
 * - **The pictures** are screenshots in `public/images/landing/`, which `tools/landing-pictures.ts`
 *   makes. Each part has a light and a dark one, and the stylesheet shows the one of the site's theme.
 *   A `<picture>` would follow only the system's scheme, never the site's own theme switch.
 * - **They load lazily,** so the page's first load leaves them out. A hidden picture never loads.
 * - **Their size is fixed** by their `width` and `height`, so loading one moves nothing.
 * - **A tag** over each picture's corner names its part in two words: honey for Learn, teal for Play.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import { hrefOf } from "../site/site-bar";
import { buttonLink } from "../ui/components/button";
import { card } from "../ui/components/card";
import { section } from "../ui/components/section";
import { el } from "../ui/dom";

/** The pictures' size in pixels, which `tools/landing-pictures.ts` makes them at. */
const PICTURE = { width: 1200, height: 750 };

/** One part's picture in both themes, under the alternative text `alt`, with the part's `tag` over its corner. */
function picture(part: "learn" | "play", alt: string, tag: string): HTMLElement {
  const image = (theme: "light" | "dark") =>
    el("img", {
      class: "landing-ways__image",
      attrs: {
        src: `images/landing/${part}-${theme}.webp`,
        alt,
        width: String(PICTURE.width),
        height: String(PICTURE.height),
        loading: "lazy",
        decoding: "async",
        "data-theme": theme,
      },
    });
  return el("div", {
    class: "landing-ways__picture",
    attrs: { "data-part": part },
    children: [image("light"), image("dark"), el("span", { class: "landing-ways__tag", text: tag })],
  });
}

/** The band of the two parts in `locale`. */
export function twoWays(locale: Locale): HTMLElement {
  const t = messagesOf(locale).landing.twoWays;
  const learn = card({
    title: t.learn.title,
    text: t.learn.text,
    media: picture("learn", t.learn.picture, t.learn.tag),
    body: [buttonLink({ label: t.learn.action, href: hrefOf("learn", locale), variant: "primary", icon: "arrow-right", iconAt: "end" })],
  });
  const play = card({
    title: t.play.title,
    text: t.play.text,
    media: picture("play", t.play.picture, t.play.tag),
    body: [buttonLink({ label: t.play.action, href: hrefOf("play", locale), variant: "secondary" })],
  });
  return section({
    eyebrow: t.eyebrow,
    heading: t.heading,
    lead: t.lead,
    body: [el("div", { class: "landing-ways", children: [learn, play] })],
  });
}
