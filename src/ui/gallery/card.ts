/** The gallery's section of the card: every variant, selected, with and without media, as a target and as a wide card. */
import { card, type CardOptions } from "../components/card";
import { el } from "../dom";
import { icon } from "../icons/icons";
import { group, section, specimen, type Locale } from "./parts";

const MESSAGES = {
  en: {
    card: "Card",
    variants: "Variants",
    selected: "Selected",
    withMedia: "With media",
    targets: "As one target",
    widths: "Widths",
    songTitle: "Für Elise",
    songText: "A gentle piece for the right hand, with a short left-hand part at the end.",
    lessonTitle: "Lesson 4: both hands together",
    lessonText: "Play a melody over a steady bass, slowly at first.",
    featuredTitle: "Song of the week",
    featuredText: "Learn a new song this week and earn a rare badge.",
    meta: "12 minutes · Beginner",
    wideTitle: "Practise every day",
    wideText: "Ten minutes a day teach your hands more than one long session a week.",
  },
  de: {
    card: "Karte",
    variants: "Varianten",
    selected: "Ausgewählt",
    withMedia: "Mit Bild",
    targets: "Als ein Ziel",
    widths: "Breiten",
    songTitle: "Für Elise",
    songText: "Ein ruhiges Stück für die rechte Hand, mit einem kurzen Teil für die linke Hand am Schluss.",
    lessonTitle: "Lektion 4: beide Hände zusammen",
    lessonText: "Spiele eine Melodie über einem gleichmäßigen Bass, zuerst langsam.",
    featuredTitle: "Lied der Woche",
    featuredText: "Lerne diese Woche ein neues Lied und verdiene dir ein seltenes Abzeichen.",
    meta: "12 Minuten · Anfänger",
    wideTitle: "Übe jeden Tag",
    wideText: "Zehn Minuten am Tag lehren deine Hände mehr als eine lange Übungsstunde pro Woche.",
  },
} satisfies Record<Locale, Record<string, string>>;

/** A drawing for the media slot: a gradient from iris to teal with a piano in its centre, and no text on it. */
function art(): HTMLElement {
  const glyph = icon("piano", { size: 48 });
  return el("div", {
    attrs: {
      "aria-hidden": "true",
      style: [
        "display: grid",
        "place-items: center",
        "aspect-ratio: 16 / 9",
        "background: linear-gradient(135deg, var(--c-iris-vivid), var(--c-accent-vivid))",
        "color: var(--c-iris-ink)",
      ].join("; "),
    },
    children: [glyph],
  });
}

/** A card in a box of a set width, since a card fills its parent and a specimen sizes to its content. */
function sized(options: CardOptions, wide = false): HTMLElement {
  const width = wide ? "calc(var(--s-12) * 4)" : "calc(var(--s-12) * 2.5)";
  return el("div", { attrs: { style: `width: ${width}; max-width: 100%` }, children: [card(options)] });
}

const cards = (entries: [string, CardOptions, boolean?][]) =>
  entries.map(([state, options, wide]) => specimen(state, sized(options, wide)));

/** The card's section in the gallery. */
export function cardSection(locale: Locale): HTMLElement {
  const t = MESSAGES[locale];
  const meta = () => el("p", { attrs: { style: "color: var(--c-text-soft); font-size: var(--t-sm)" }, text: t.meta });
  return section("card", t.card, [
    group(
      t.variants,
      cards([
        ["plain", { variant: "plain", title: t.songTitle, text: t.songText, titleLevel: 4 }],
        ["interactive", { variant: "interactive", title: t.lessonTitle, text: t.lessonText, href: "#", titleLevel: 4 }],
        ["featured", { variant: "featured", title: t.featuredTitle, text: t.featuredText, titleLevel: 4 }],
      ]),
    ),
    group(
      t.selected,
      cards([
        ["selected", { variant: "plain", title: t.songTitle, text: t.songText, selected: true, titleLevel: 4 }],
        ["selected-target", { title: t.lessonTitle, text: t.lessonText, onClick: () => {}, selected: true, titleLevel: 4 }],
        ["selected-featured", { variant: "featured", title: t.featuredTitle, text: t.featuredText, selected: true, titleLevel: 4 }],
      ]),
    ),
    group(
      t.withMedia,
      cards([
        ["plain-media", { variant: "plain", media: art(), title: t.songTitle, text: t.songText, titleLevel: 4 }],
        [
          "interactive-media",
          { variant: "interactive", media: art(), title: t.lessonTitle, text: t.lessonText, href: "#", titleLevel: 4 },
        ],
        [
          "featured-media",
          { variant: "featured", media: art(), title: t.featuredTitle, text: t.featuredText, titleLevel: 4 },
        ],
      ]),
    ),
    group(
      t.targets,
      cards([
        ["link", { title: t.lessonTitle, text: t.lessonText, body: [meta()], href: "#", titleLevel: 4 }],
        ["button", { title: t.songTitle, text: t.songText, body: [meta()], onClick: () => {}, titleLevel: 4 }],
        [
          "featured-link",
          { variant: "featured", title: t.featuredTitle, text: t.featuredText, href: "#", titleLevel: 4 },
        ],
      ]),
    ),
    group(
      t.widths,
      cards([
        ["narrow", { variant: "plain", title: t.wideTitle, text: t.wideText, titleLevel: 4 }],
        ["wide", { variant: "plain", media: art(), title: t.wideTitle, text: t.wideText, titleLevel: 4 }, true],
      ]),
    ),
  ]);
}
