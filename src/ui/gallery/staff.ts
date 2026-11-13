/** The gallery's section of the staff: a melody, both hands, a key signature, and notes marked. */
import type { SongTrack } from "../../midi/song";
import { TempoMap } from "../../midi/tempo-map";
import { quantize, type Sheet } from "../../sheet/quantize";
import { staff } from "../components/staff";
import { el } from "../dom";
import type { Mark } from "../mark";
import { group, section, specimen, textFor, type Locale, type CompleteLocale } from "./parts";

const MESSAGES = {
  en: {
    staff: "Staff",
    bars: "Bars",
    marks: "Marks",
    melody: "Four bars of a melody in C major",
    bothHands: "Four bars for both hands, melody over bass",
    inG: "Two bars in G major",
    marked: "Four bars, with the first notes played and the next one lit",
  },
  de: {
    staff: "Notenzeile",
    bars: "Takte",
    marks: "Markierungen",
    melody: "Vier Takte einer Melodie in C-Dur",
    bothHands: "Vier Takte für beide Hände, Melodie über Bass",
    inG: "Zwei Takte in G-Dur",
    marked: "Vier Takte, die ersten Noten gespielt und die nächste hervorgehoben",
  },
} satisfies Record<CompleteLocale, Record<string, string>>;

/** Ticks per quarter note. */
const TPQ = 480;

/** Our own short tune, as `[pitch, quarters]`, with the bass under it. */
const MELODY: [number, number][] = [
  [60, 1], [64, 1], [67, 1], [64, 1],
  [65, 1], [69, 1], [67, 2],
  [64, 1], [67, 1], [65, 1], [62, 1],
  [60, 4],
];
const BASS: [number, number][] = [
  [48, 4],
  [53, 2], [55, 2],
  [48, 2], [43, 2],
  [48, 4],
];
const IN_G: [number, number][] = [
  [67, 1], [71, 1], [74, 1], [66, 1],
  [67, 2], [62, 2],
];

/** A track playing `notes` back to back. */
function track(index: number, notes: [number, number][]): SongTrack {
  let tick = 0;
  return {
    index,
    name: "",
    program: 0,
    percussion: false,
    channels: [index],
    notes: notes.map(([pitch, quarters]) => {
      const startTick = tick;
      tick += quarters * TPQ;
      return { track: index, channel: index, pitch, velocity: 80, startTick, endTick: tick, start: 0, end: 0 };
    }),
    pedals: [],
  };
}

/** The sheet of `parts`, one track each, in 4/4. */
function sheetOf(...parts: [number, number][][]): Sheet {
  return quantize({ tempoMap: new TempoMap({ kind: "ticks", ticksPerBeat: TPQ }, [], []), tracks: parts.map((notes, i) => track(i, notes)) });
}

/** A staff in a box of a set width, since a staff fills its parent and a specimen sizes to its content. */
function sized(child: HTMLElement, width = "calc(var(--s-12) * 6)"): HTMLElement {
  return el("div", { attrs: { style: `width: ${width}; max-width: 100%` }, children: [child] });
}

/** The staff section in the gallery. */
export function staffSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const melody = sheetOf(MELODY);
  // The first four notes are played, the fourth wrongly, and the fifth comes next.
  const marks = new Map<number, Mark>([
    [0, "correct"],
    [TPQ, "correct"],
    [2 * TPQ, "correct"],
    [3 * TPQ, "mistake"],
    [4 * TPQ, "next"],
  ]);
  return section("staff", t.staff, [
    group(t.bars, [
      specimen("melody", sized(staff({ label: t.melody, sheet: melody }))),
      specimen("both-hands", sized(staff({ label: t.bothHands, sheet: sheetOf(MELODY, BASS) }))),
      specimen("key-signature", sized(staff({ label: t.inG, sheet: sheetOf(IN_G), key: { tonic: 7, mode: "major" } }), "calc(var(--s-12) * 3)")),
    ]),
    group(t.marks, [specimen("marked", sized(staff({ label: t.marked, sheet: melody, marks })))]),
  ]);
}
