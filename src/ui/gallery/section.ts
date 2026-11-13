/** The gallery's section of the landing page's section: each tone and alignment, with and without an eyebrow. */
import { button } from "../components/button";
import { section as band, type SectionOptions } from "../components/section";
import { el } from "../dom";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    section: "Section",
    tones: "Tones",
    alignment: "Alignment",
    eyebrows: "Eyebrow",
    eyebrow: "Practice",
    heading: "Learn the songs you love",
    lead: "Open any MIDI file, watch its notes fall towards the keys, and play along at your own speed.",
    body: "Every song waits for you, so you never fall behind.",
    start: "Start playing",
  },
  de: {
    section: "Abschnitt",
    tones: "Hintergründe",
    alignment: "Ausrichtung",
    eyebrows: "Dachzeile",
    eyebrow: "Üben",
    heading: "Lerne die Lieder, die du liebst",
    lead: "Öffne eine beliebige MIDI-Datei, sieh die Noten auf die Tasten zufallen und spiele in deinem eigenen Tempo mit.",
    body: "Jedes Lied wartet auf dich, damit du nie zurückfällst.",
    start: "Jetzt spielen",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

/** A section in a box of a set width, since a specimen sizes to its content. */
function sized(options: SectionOptions): HTMLElement {
  return el("div", {
    attrs: { style: "width: calc(var(--s-12) * 5); max-width: 100%" },
    children: [band(options)],
  });
}

const bands = (entries: [string, SectionOptions][]) => entries.map(([state, options]) => specimen(state, sized(options)));

/** The section's section in the gallery. Its headings are `h3`, under the gallery's `h2`. */
export function sectionSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const full = (options: Partial<SectionOptions>, withEyebrow = true): SectionOptions => ({
    level: 3,
    heading: t.heading,
    lead: t.lead,
    body: [el("p", { text: t.body }), button({ label: t.start, variant: "primary", icon: "play" })],
    ...(withEyebrow ? { eyebrow: t.eyebrow } : {}),
    ...options,
  });
  return section("section", t.section, [
    group(
      t.tones,
      bands([
        ["plain", full({ tone: "plain" })],
        ["band", full({ tone: "band" })],
      ]),
    ),
    group(
      t.alignment,
      bands([
        ["start", full({ tone: "band", align: "start" })],
        ["center", full({ tone: "band", align: "center" })],
      ]),
    ),
    group(
      t.eyebrows,
      bands([
        ["with-eyebrow", full({ tone: "band" })],
        ["without-eyebrow", full({ tone: "band" }, false)],
      ]),
    ),
  ]);
}
