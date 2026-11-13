/**
 * The landing page's hero: the site's name, one promise, both actions, the mascot, and the player.
 *
 * The hero has two rows. The first sets the text beside the mascot at its piano, who greets the
 * visitor. The second is the player on a panel of its own, with a few words on what it shows.
 * *Start learning* is the primary action and *Just play* the secondary one.
 *
 * The player is a landing box of `src/landing/player-box.ts` that loops `HERO_SONG`. Until a click it
 * is a slowly panning picture of the real player, and the click starts the real one in its place.
 *
 * - **The heading is the site's name,** and a honey stroke underlines its last word.
 * - **The mascot's video plays once as the page shows,** pushing in from the piano to its smiling face.
 *   Its frame holds its room, so the video's arrival moves nothing.
 * - **Silent until clicked.** Browsers allow sound only after a gesture, and a visitor never gets sound
 *   they did not ask for. The box's play button stands beside the player's words, and plays and stops it.
 */
import "./hero.css";
import { messagesOf, type Locale } from "../i18n/locale";
import { RTL_CLOSE, RTL_OPEN } from "../i18n/pseudo";
import type { SettingsStore } from "../settings/store";
import { hrefOf } from "../site/site-bar";
import { buttonLink } from "../ui/components/button";
import { mascot } from "../ui/components/mascot";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import { playerBox } from "./player-box";
import { HERO_RANGE, HERO_SONG } from "./songs";

/**
 * The site's `name` as the hero's heading, with its last word marked for the honey stroke. A name is
 * never translated, so the heading says so to a browser's translator.
 *
 * The marked word is an inline block, which no override crosses. So an `ar-XB` name has its marks
 * repeated around each part, and its span reads right to left. Any other name sits in a span with
 * `dir="auto"`, so a Latin name keeps its word order on a right-to-left page.
 */
function title(name: string): HTMLElement {
  const open = name.startsWith(RTL_OPEN) && name.endsWith(RTL_CLOSE) ? RTL_OPEN : "";
  const close = open === "" ? "" : RTL_CLOSE;
  const core = name.slice(open.length, name.length - close.length);
  const cut = core.lastIndexOf(" ");
  const marked = (part: string) => `${open}${part}${close}`;
  return el("h1", {
    class: "landing-hero__title",
    attrs: { translate: "no" },
    children: [
      el("span", {
        attrs: { dir: open === "" ? "auto" : "rtl" },
        children: [...(cut < 0 ? [] : [marked(core.slice(0, cut)), " "]), el("span", { class: "landing-hero__stroke", text: marked(core.slice(cut + 1)) })],
      }),
    ],
  });
}

/** The hero of the landing page in `locale`. */
export function hero(locale: Locale, settings: SettingsStore): HTMLElement {
  const t = messagesOf(locale).landing.hero;

  const box = playerBox({
    picture: "hero",
    alt: t.piano,
    song: HERO_SONG,
    range: HERO_RANGE,
    site: settings,
    play: t.playSong,
    stop: t.stopSong,
  });

  const text = el("div", {
    class: "landing-hero__text",
    children: [
      el("p", { class: "landing-eyebrow", text: t.eyebrow }),
      title(messagesOf(locale).siteName),
      el("p", { class: "landing-hero__lead", text: t.lead }),
      el("div", {
        class: "landing-hero__actions",
        children: [
          buttonLink({ label: t.start, href: hrefOf("learn", locale), variant: "primary", size: "large", icon: "arrow-right", iconAt: "end" }),
          buttonLink({ label: t.play, href: hrefOf("play", locale), variant: "secondary", size: "large" }),
        ],
      }),
      el("ul", {
        class: "landing-hero__proofs",
        children: t.proofs.map((proof) => el("li", { children: [icon("check"), el("span", { text: proof })] })),
      }),
    ],
  });
  const picture = el("div", {
    class: "landing-hero__picture",
    children: [
      mascot({ pose: "scene", alt: t.mascot }),
      el("p", { class: "landing-hero__greeting", text: t.greeting }),
    ],
  });
  const piano = el("div", {
    class: "landing-hero__piano",
    children: [
      el("div", {
        class: "landing-hero__intro",
        children: [
          el("p", { class: "landing-eyebrow", text: t.demo.eyebrow }),
          el("h2", { class: "landing-hero__demo", text: t.demo.heading }),
          el("p", { class: "landing-hero__about", text: t.demo.text }),
        ],
      }),
      el("div", { class: "landing-hero__stage", children: [box.element] }),
      el("div", {
        class: "landing-hero__controls",
        children: [box.button, el("p", { class: "landing-hero__hint", text: t.hint })],
      }),
    ],
  });
  return el("section", {
    class: "landing-hero",
    children: [el("div", { class: "landing-hero__inner", children: [text, picture, piano] })],
  });
}
