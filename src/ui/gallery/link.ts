/** The gallery's section of the link: inline in a sentence, standalone, external and visited. */
import { el } from "../dom";
import { link } from "../components/link";
import { group, section, specimen, textFor, type Locale, type CompleteLocale } from "./parts";

const MESSAGES = {
  en: {
    link: "Link",
    variants: "Variants",
    states: "States",
    sentenceStart: "Before your first lesson, read the ",
    guide: "beginner's guide",
    sentenceEnd: ". It takes five minutes.",
    browseSongs: "Browse all songs",
    newTab: "Open the songs in a new tab",
    visited: "Back to this page",
  },
  de: {
    link: "Link",
    variants: "Varianten",
    states: "Zustände",
    sentenceStart: "Lies vor deiner ersten Lektion den ",
    guide: "Leitfaden für Einsteiger",
    sentenceEnd: ". Er dauert nur fünf Minuten.",
    browseSongs: "Alle Lieder ansehen",
    newTab: "Lieder in neuem Tab öffnen",
    visited: "Zurück zu dieser Seite",
  },
} satisfies Record<CompleteLocale, Record<string, string>>;

/** The link's section in the gallery. */
export function linkSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const sentence = el("p", {
    children: [t.sentenceStart, link({ label: t.guide, href: "#", variant: "inline" }), t.sentenceEnd],
  });
  return section("link", t.link, [
    group(t.variants, [
      specimen("inline", sentence),
      specimen("standalone", link({ label: t.browseSongs, href: "#", variant: "standalone" })),
    ]),
    group(t.states, [
      specimen("external", link({ label: t.newTab, href: "#", variant: "standalone", external: true })),
      // An empty href is this very page, which the browser has visited, so it shows the visited look.
      specimen("visited", link({ label: t.visited, href: "", variant: "standalone" })),
    ]),
  ]);
}
