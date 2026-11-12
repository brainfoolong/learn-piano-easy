/**
 * The sheet's live marks: the cursor, the sounding notes, the learner's held notes, and a note's name
 * under the pointer. `sheet-view.ts` lays out the measures and hands this each frame's place.
 *
 * Decisions, and what each costs:
 * - A chord sounds from its tick to its end. The quantizer splits every chord at the barline, so only
 *   the measure in play holds sounding chords, and a frame looks at that measure alone.
 * - A sounding chord is found by its group's `data-staff`, `data-voice` and `data-tick`. Marks change
 *   only when the set of sounding chords changes, so a frame mostly touches no element.
 * - A sounding chord takes its track's colour or one colour, may glow, and may grow. The glow is a CSS
 *   drop shadow, so it needs no geometry. A beam is drawn apart from its chords, so it keeps the ink.
 * - The learner's held notes are drawn at the cursor, on the first staff whose clef suits them: treble
 *   from middle C up, bass below. Their SVG is rebuilt only when the held keys or the measure change.
 * - The pointer's chord is named in a tip, from the sheet's own pitches, never from the drawing.
 *
 * Gaps: a held note draws no accidental. The tip names a chord's notes with sharps, whatever the key.
 */
import type { Key } from "../theory/key";
import { type NameStyle, noteName } from "../theory/note-names";
import { el } from "../ui/dom";
import type { EngravedMeasure } from "./engrave";
import { GLYPHS, glyphSvg, HEAD_WIDTH, round } from "./glyphs";
import type { Sheet } from "./quantize";
import { spell, TOP_STEP } from "./spelling";

/** One chord of the sheet, with the time it sounds in ticks. */
export interface LiveChord {
  track: number;
  voice: number;
  tick: number;
  end: number;
  pitches: number[];
}

/** How the marks look, read from the settings each frame. */
export interface LiveOptions {
  cursor: boolean;
  color: boolean;
  colorByTrack: boolean;
  activeColor: string;
  highlight: boolean;
  highlightColor: string;
  grow: boolean;
  inputNotes: boolean;
  inputColor: string;
  hover: boolean;
  names: NameStyle;
}

/** Where the song is in the laid-out sheet, for one frame. */
export interface LivePlace {
  measure: number;
  tick: number;
  /** The cursor's x and its line's top in the page, in pixels. */
  x: number;
  y: number;
  /** The measure's element in the page, or undefined while it is out of view. */
  element: HTMLElement | undefined;
  engraved: EngravedMeasure;
  key: Key | undefined;
  space: number;
  held: ReadonlySet<number>;
  /** Each track's colour, by track index. */
  trackColors: readonly string[];
}

/** The chords of `sheet`, by measure, in staff then voice then time order. */
export function liveChords(sheet: Sheet): LiveChord[][] {
  return sheet.measures.map((_, m) =>
    sheet.staves.flatMap((staff) =>
      (staff.measures[m] ?? []).flatMap((events, voice) =>
        events.flatMap((event) =>
          event.kind === "chord" ? [{ track: staff.track, voice, tick: event.tick, end: event.tick + event.ticks, pitches: event.pitches }] : [],
        ),
      ),
    ),
  );
}

/** The chords of `chords` that sound at `tick`. */
export function soundingAt(chords: readonly LiveChord[], tick: number): LiveChord[] {
  return chords.filter((chord) => chord.tick <= tick && tick < chord.end);
}

/** The marks over one sheet's page. */
export class SheetLive {
  readonly #page: HTMLElement;
  readonly #cursor = el("div", { class: "sheet-cursor" });
  readonly #input = el("div", { class: "sheet-input" });
  readonly #tip = el("div", { class: "sheet-tip", attrs: { role: "tooltip" } });
  #chords: LiveChord[][] = [];
  #marked = new Map<Element, LiveChord>();
  #inputKey = "";
  #options: LiveOptions | undefined;

  /** Marks over `page`, with the tip shown in `host`. */
  constructor(page: HTMLElement, host: HTMLElement) {
    this.#page = page;
    this.#tip.hidden = true;
    page.append(this.#cursor, this.#input);
    host.append(this.#tip);
    host.addEventListener("pointermove", (event) => this.#hover(event, host));
    host.addEventListener("pointerleave", () => (this.#tip.hidden = true));
  }

  /** Takes the chords of a new sheet, and clears every mark. */
  load(sheet: Sheet | undefined): void {
    this.#chords = sheet === undefined ? [] : liveChords(sheet);
    this.#unmarkAll();
    this.#inputKey = "";
    this.#input.replaceChildren();
  }

  /** Marks `place` as `options` say. Undefined hides every mark. */
  update(place: LivePlace | undefined, options: LiveOptions): void {
    this.#options = options;
    this.#page.classList.toggle("grow", options.grow);
    this.#page.classList.toggle("glow", options.highlight);
    this.#page.style.setProperty("--sheet-glow", options.highlightColor);
    this.#cursor.hidden = place === undefined || !options.cursor;
    this.#input.hidden = place === undefined || !options.inputNotes;
    if (place === undefined) return this.#unmarkAll();
    const height = place.engraved.height;
    if (options.cursor) {
      this.#cursor.style.transform = `translate(${round(place.x)}px, ${round(place.y)}px)`;
      this.#cursor.style.height = `${round(height)}px`;
    }
    this.#mark(place, options);
    if (options.inputNotes) this.#drawInput(place, options);
  }

  #mark(place: LivePlace, options: LiveOptions): void {
    const sounding = options.color || options.highlight || options.grow ? soundingAt(this.#chords[place.measure] ?? [], place.tick) : [];
    const next = new Map<Element, LiveChord>();
    for (const chord of sounding) {
      const selector = `g.chord[data-staff="${chord.track}"][data-voice="${chord.voice}"][data-tick="${chord.tick}"]`;
      const group = place.element?.querySelector(selector);
      if (group) next.set(group, chord);
    }
    for (const [group] of this.#marked) if (!next.has(group)) unmark(group);
    for (const [group, chord] of next) {
      const color = !options.color ? "" : options.colorByTrack ? (place.trackColors[chord.track] ?? options.activeColor) : options.activeColor;
      group.classList.add("active");
      (group as SVGElement).style.color = color;
    }
    this.#marked = next;
  }

  #unmarkAll(): void {
    for (const [group] of this.#marked) unmark(group);
    this.#marked = new Map();
  }

  #drawInput(place: LivePlace, options: LiveOptions): void {
    const S = place.space;
    this.#input.style.transform = `translate(${round(place.x - (HEAD_WIDTH * S) / 2)}px, ${round(place.y)}px)`;
    this.#input.style.color = options.inputColor;
    const pitches = [...place.held].sort((a, b) => a - b);
    const key = `${place.measure}:${pitches.join(",")}`;
    if (key === this.#inputKey) return;
    this.#inputKey = key;
    const staves = place.engraved.staves;
    if (pitches.length === 0 || staves.length === 0) return this.#input.replaceChildren();
    const width = HEAD_WIDTH * S;
    const parts: string[] = [];
    for (const pitch of pitches) {
      const staff = staves.find((each) => each.clef === (pitch >= 60 ? "treble" : "bass")) ?? staves[0]!;
      const top = TOP_STEP[staff.clef];
      const step = spell(pitch, place.key).step;
      const yOf = (s: number) => staff.top + ((top - s) / 2) * S;
      parts.push(glyphSvg(GLYPHS.blackHead, 0, yOf(step), S));
      const ledgers: number[] = [];
      for (let s = top + 2; s <= step; s += 2) ledgers.push(s);
      for (let s = top - 10; s >= step; s -= 2) ledgers.push(s);
      for (const s of ledgers) {
        parts.push(`<path d="M${round(-0.4 * S)} ${round(yOf(s))}H${round(width + 0.4 * S)}" stroke="currentColor" stroke-width="${round(0.14 * S)}"/>`);
      }
    }
    const height = round(place.engraved.height);
    this.#input.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" width="${round(width)}" height="${height}" overflow="visible" fill="currentColor">${parts.join("")}</svg>`;
  }

  #hover(event: PointerEvent, host: HTMLElement): void {
    const target = event.target instanceof Element ? event.target : null;
    const group = target?.closest("g.chord");
    const measure = target?.closest<HTMLElement>(".sheet-measure");
    const chord = group && measure ? this.#chordOf(group, Number(measure.dataset.index)) : undefined;
    if (chord === undefined || this.#options?.hover !== true) {
      this.#tip.hidden = true;
      return;
    }
    const names = this.#options.names;
    this.#tip.textContent = chord.pitches
      .slice()
      .reverse()
      .map((pitch) => noteName(pitch, names))
      .join(" ");
    const box = host.getBoundingClientRect();
    this.#tip.style.transform = `translate(${round(event.clientX - box.left + 12)}px, ${round(event.clientY - box.top + 12)}px)`;
    this.#tip.hidden = false;
  }

  #chordOf(group: Element, measure: number): LiveChord | undefined {
    const track = Number(group.getAttribute("data-staff"));
    const voice = Number(group.getAttribute("data-voice"));
    const tick = Number(group.getAttribute("data-tick"));
    return this.#chords[measure]?.find((chord) => chord.track === track && chord.voice === voice && chord.tick === tick);
  }
}

/** Takes the marks off `group`. */
function unmark(group: Element): void {
  group.classList.remove("active");
  (group as SVGElement).style.color = "";
}
