/**
 * The sheet view: the shown song as sheet music, scrolling with playback or in lines of measures, over
 * the top of the scene or alone over all of it.
 *
 * It quantizes the transport's shown song with the sheet settings and the tracks' sheet switches,
 * engraves its measures, and follows the transport's time every frame. `sheet-live.ts` marks the
 * cursor, the sounding notes and the learner's notes on what it lays out.
 *
 * Decisions, and what each costs:
 * - A scrolling sheet is one line of every measure, moved so the cursor stays a third of the way in.
 *   Lines of measures fill the width, each measure stretched by the same share, and the line in play
 *   moves to the top. Over the scene, lines show two at a time.
 * - A measure is engraved when its width or its picture is first needed, and kept until the song or a
 *   quantize setting changes. Breaking lines needs every measure's width, so lines engrave the whole
 *   song once with a line-start header and once without.
 * - Only the measures within half a view of the view are in the page. Each is one element holding its
 *   SVG, made when it comes near and dropped once it leaves.
 * - A line opens with the clef and the key signature. A key change writes the key signature, and a
 *   meter change the time signature. The key of each measure comes from `keySections` of the song.
 * - Every treble staff stands above every bass staff, so a file that lists its bass track first still
 *   reads as a grand staff. Staves of one clef keep their track order.
 * - With grand staff on and two staves or more, a brace and a line join the staves at each line start.
 * - The paper's colour is a setting. The ink is dark on a light paper and light on a dark one.
 * - While the sheet is off the view does nothing: no quantizing and no frames.
 * - Alone, the sheet covers the scene, which still draws behind it.
 * - Its name and its hint for no shown track follow the live locale's `player.shell.sheet`.
 *
 * Bounds: a frame scans the measures once, so it is linear in them, and touches the page only when a
 * measure comes into view or leaves it.
 */
import { localize } from "../i18n/live";
import type { TrackSetting } from "../library/track-settings";
import type { Song } from "../midi/song";
import type { SettingId } from "../settings/schema";
import type { SettingsStore } from "../settings/store";
import { type Key, keyAt, keySections } from "../theory/key";
import { el } from "../ui/dom";
import { type EngravedMeasure, engraveMeasure } from "./engrave";
import { round } from "./glyphs";
import { quantize, type QuantizeOptions, type Sheet, type SheetStaff } from "./quantize";
import { type LiveOptions, SheetLive } from "./sheet-live";
import { signatureOf } from "./spelling";
import "./sheet-view.css";

/** Pixels per staff space. */
export const SPACE = 8;
/** The room at each line's start, where the brace stands, in staff spaces. */
const GUTTER = 2.5;
/** The room between two lines, in pixels. */
const LINE_GAP = 2 * SPACE;
/** How far into the view the cursor stays while the sheet scrolls. */
const CURSOR_AT = 1 / 3;
/** A last line this full or more is stretched like the others. */
const FULL_LAST_LINE = 0.75;

/** The settings that change what the quantizer makes. */
const QUANTIZE_SETTINGS: ReadonlySet<string> = new Set<SettingId>(["sheetMinNoteDenom", "hideRestsBelow", "sheetAutoClef", "overrideTimeSignature"]);
/** The settings that change the layout but not the quantized sheet. */
const LAYOUT_SETTINGS: ReadonlySet<string> = new Set<SettingId>(["sheetMeasureScroll", "sheetMeasureNumbers", "enableGrandStaff", "sheetBgColor"]);

/** What the view needs of the settings. A `SettingsStore` is one. */
export type SheetSettings = Pick<SettingsStore, "get" | "subscribe">;

/** What the view needs of the transport. A `Transport` is one. */
export interface SheetTransport {
  readonly shown: Song | undefined;
  readonly time: number;
  readonly speed: number;
  readonly renderOffset: number;
  onShow(listener: () => void): () => void;
}

/** What the view needs of the track settings. A `TrackState` is one. */
export interface SheetTracks {
  readonly tracks: readonly TrackSetting[];
  readonly key: Key | undefined;
  subscribe(listener: () => void): () => void;
}

/** The signs a measure opens with. */
export interface Header {
  clef: boolean;
  keySignature: boolean;
  timeSignature: boolean;
}

/** The quantizer's options from `settings`, with the tracks whose sheet switch is on. */
export function quantizeOptions(settings: Pick<SettingsStore, "get">, tracks: readonly Pick<TrackSetting, "sheet">[]): QuantizeOptions {
  const meter = settings.get("overrideTimeSignature");
  const [numerator = 4, denominator = 4] = meter.split("/").map(Number);
  const hide = settings.get("hideRestsBelow");
  return {
    minimumValue: Number(settings.get("sheetMinNoteDenom")),
    hideRestsBelow: hide === "none" ? null : Number(hide),
    autoClef: settings.get("sheetAutoClef"),
    timeSignature: meter === "auto" ? null : { numerator, denominator },
    tracks: tracks.flatMap((track, index) => (track.sheet ? [index] : [])),
  };
}

/** The signs measure `index` of `sheet` opens with, where `keys` holds each measure's key. */
export function headerOf(sheet: Sheet, keys: readonly (Key | undefined)[], index: number, lineStart: boolean): Header {
  const measure = sheet.measures[index]!;
  const previous = sheet.measures[index - 1];
  const a = signatureOf(keys[index]);
  const b = signatureOf(keys[index - 1]);
  const keyChange = previous !== undefined && (a.alter !== b.alter || a.letters.length !== b.letters.length);
  const meterChange = previous === undefined || previous.numerator !== measure.numerator || previous.denominator !== measure.denominator;
  return { clef: lineStart, keySignature: lineStart || keyChange, timeSignature: meterChange };
}

/**
 * `count` measures broken into lines no wider than `available`, each a list of measure indexes. A line
 * holds one measure at least. `widthOf` gives a measure's width as a line's first or not.
 */
export function breakLines(count: number, widthOf: (index: number, lineStart: boolean) => number, available: number): number[][] {
  const lines: number[][] = [];
  let line: number[] = [];
  let used = 0;
  for (let index = 0; index < count; index++) {
    let width = widthOf(index, line.length === 0);
    if (line.length > 0 && used + width > available) {
      lines.push(line);
      line = [];
      used = 0;
      width = widthOf(index, true);
    }
    line.push(index);
    used += width;
  }
  if (line.length > 0) lines.push(line);
  return lines;
}

/** `staves` with every treble staff above every bass staff, each kept in track order. */
export function trebleFirst(staves: readonly SheetStaff[]): SheetStaff[] {
  return [...staves.filter((staff) => staff.clef === "treble"), ...staves.filter((staff) => staff.clef === "bass")];
}

/** Dark ink for a light `paper`, light ink for a dark one, from its `#rrggbb` start. */
export function inkFor(paper: string): string {
  const channel = (at: number) => parseInt(paper.slice(at, at + 2), 16) / 255;
  const luminance = 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
  return luminance > 0.5 ? "#1c1c1c" : "#ececec";
}

/** One measure's place in the page. */
interface Placed {
  index: number;
  line: number;
  x: number;
  y: number;
  width: number;
  header: Header;
  /** The width it is stretched to, or null for its natural width. */
  stretch: number | null;
  numbered: boolean;
}

/** The sheet music over `stage`, following `transport`. */
export class SheetView {
  readonly element: HTMLElement;
  readonly #page: HTMLElement;
  readonly #braces: HTMLElement;
  readonly #hint: HTMLElement;
  readonly #settings: SheetSettings;
  readonly #transport: SheetTransport;
  readonly #tracks: SheetTracks;
  readonly #held: () => ReadonlySet<number>;
  readonly #live: SheetLive;
  #song: Song | undefined;
  #sheet: Sheet | undefined;
  #keys: (Key | undefined)[] = [];
  #cache = new Map<string, EngravedMeasure>();
  #placed: Placed[] = [];
  #lineTops: number[] = [];
  #lineHeight = 0;
  #laidWidth = -1;
  #inPage = new Map<number, HTMLElement>();
  #frame = 0;
  #dirty = true;
  #sheetTracks = "";

  constructor(settings: SheetSettings, transport: SheetTransport, tracks: SheetTracks, held: () => ReadonlySet<number>) {
    this.#settings = settings;
    this.#transport = transport;
    this.#tracks = tracks;
    this.#held = held;
    // Printed music runs left to right on every page, so the page of measures never mirrors.
    this.#page = el("div", { class: "sheet-page", attrs: { dir: "ltr" } });
    this.#braces = el("div", { class: "sheet-braces" });
    this.#hint = localize(el("p", { class: "sheet-hint" }), (m) => m.player.shell.sheet.empty);
    this.#page.append(this.#braces);
    this.element = el("div", { class: "sheet", attrs: { role: "region" }, children: [this.#page, this.#hint] });
    localize(this.element, (m) => m.player.shell.sheet.label, "aria-label");
    this.#live = new SheetLive(this.#page, this.element);

    settings.subscribe((id) => {
      if (id === "enableSheet" || id === "enableFullSheet") this.#follow();
      else if (QUANTIZE_SETTINGS.has(id)) this.#invalidate();
      else if (LAYOUT_SETTINGS.has(id)) this.#relayout();
    });
    transport.onShow(() => {
      if (transport.shown !== this.#song) this.#invalidate();
    });
    tracks.subscribe(() => {
      if (this.#tracksId() !== this.#sheetTracks) this.#invalidate();
    });
    new ResizeObserver(() => {
      if (this.element.clientWidth !== this.#laidWidth) this.#relayout();
    }).observe(this.element);
    this.#follow();
  }

  /** Whether the sheet shows, over the scene or alone. */
  get mode(): "off" | "band" | "full" {
    if (this.#settings.get("enableFullSheet")) return "full";
    return this.#settings.get("enableSheet") ? "band" : "off";
  }

  /** Shows or hides the sheet as the settings say, and runs frames only while it shows. */
  #follow(): void {
    const mode = this.mode;
    this.element.hidden = mode === "off";
    this.element.dataset.mode = mode;
    cancelAnimationFrame(this.#frame);
    this.#frame = 0;
    if (mode === "off") return;
    this.#relayout();
    const loop = () => {
      this.#draw();
      this.#frame = requestAnimationFrame(loop);
    };
    this.#frame = requestAnimationFrame(loop);
  }

  /** What of the track settings the sheet reads beside the colours: the sheet switches and the key. */
  #tracksId(): string {
    const key = this.#tracks.key;
    return `${this.#tracks.tracks.map((track) => (track.sheet ? 1 : 0)).join("")}:${key ? `${key.tonic}${key.mode}` : ""}`;
  }

  /** Quantizes anew on the next frame. */
  #invalidate(): void {
    this.#dirty = true;
    this.#relayout();
  }

  /** Lays out anew on the next frame. */
  #relayout(): void {
    this.#laidWidth = -1;
  }

  #rebuild(): void {
    this.#dirty = false;
    const song = this.#transport.shown;
    this.#song = song;
    this.#sheetTracks = this.#tracksId();
    this.#cache = new Map();
    if (song === undefined) {
      this.#sheet = undefined;
      this.#keys = [];
    } else {
      const sheet = quantize(song, quantizeOptions(this.#settings, this.#tracks.tracks));
      this.#sheet = { ...sheet, staves: trebleFirst(sheet.staves) };
      const sections = keySections(song, this.#tracks.key);
      this.#keys = this.#sheet.measures.map((measure) => keyAt(sections, measure.tick));
    }
    this.#live.load(this.#sheet);
  }

  #engraved(index: number, header: Header, width: number | null): EngravedMeasure {
    const id = `${index}:${+header.clef}${+header.keySignature}${+header.timeSignature}:${width ?? ""}`;
    let engraved = this.#cache.get(id);
    if (engraved === undefined) {
      engraved = engraveMeasure(this.#sheet!, index, { space: SPACE, key: this.#keys[index], ...header, width });
      this.#cache.set(id, engraved);
    }
    return engraved;
  }

  #layout(): void {
    for (const element of this.#inPage.values()) element.remove();
    this.#inPage = new Map();
    this.#placed = [];
    this.#lineTops = [];
    this.#braces.replaceChildren();
    const paper = this.#settings.get("sheetBgColor");
    this.element.style.background = paper;
    this.element.style.color = inkFor(paper);
    this.#laidWidth = this.element.clientWidth;
    const sheet = this.#sheet;
    const empty = sheet === undefined || sheet.staves.length === 0 || sheet.measures.length === 0;
    this.#hint.hidden = sheet === undefined || sheet.staves.length > 0;
    if (empty) {
      this.element.style.setProperty("--sheet-height", `${4 * LINE_GAP}px`);
      return;
    }
    const scroll = this.#settings.get("sheetMeasureScroll");
    const numbers = this.#settings.get("sheetMeasureNumbers");
    const gutter = GUTTER * SPACE;
    const width = (index: number, lineStart: boolean) => this.#engraved(index, headerOf(sheet, this.#keys, index, lineStart), null).width;
    const available = Math.max(1, this.#laidWidth - gutter - SPACE);
    const lines = scroll ? [sheet.measures.map((_, index) => index)] : breakLines(sheet.measures.length, width, available);
    this.#lineHeight = this.#engraved(0, headerOf(sheet, this.#keys, 0, true), null).height;
    lines.forEach((line, l) => {
      const y = l * (this.#lineHeight + LINE_GAP);
      this.#lineTops.push(y);
      const natural = line.reduce((sum, index, k) => sum + width(index, k === 0), 0);
      const last = l === lines.length - 1;
      const share = scroll || (last && natural < available * FULL_LAST_LINE) ? 1 : available / natural;
      let x = gutter;
      line.forEach((index, k) => {
        const header = headerOf(sheet, this.#keys, index, k === 0);
        const own = width(index, k === 0);
        const stretch = share === 1 ? null : own * share;
        const numbered = numbers === "every" || (numbers === "lineStart" && k === 0);
        this.#placed.push({ index, line: l, x, y, width: stretch ?? own, header, stretch, numbered });
        x += stretch ?? own;
      });
      this.#braces.append(this.#brace(y));
    });
    const shownLines = scroll ? 1 : 2;
    this.element.style.setProperty("--sheet-height", `${round(shownLines * this.#lineHeight + (shownLines - 1) * LINE_GAP)}px`);
    this.#page.classList.toggle("lines", !scroll);
  }

  /** The brace and the line that join the staves at the start of the line at `y`, or an empty element. */
  #brace(y: number): HTMLElement {
    const holder = el("div", { class: "sheet-brace" });
    const staves = this.#engraved(0, headerOf(this.#sheet!, this.#keys, 0, true), null).staves;
    if (!this.#settings.get("enableGrandStaff") || staves.length < 2) return holder;
    const top = staves[0]!.top;
    const bottom = staves.at(-1)!.top + 4 * SPACE;
    const braceBottom = staves[1]!.top + 4 * SPACE;
    const w = SPACE * 1.4;
    const x = GUTTER * SPACE - w - SPACE * 0.4;
    const h = braceBottom - top;
    const p = (px: number, py: number) => `${round(x + px * w)} ${round(top + py * h)}`;
    const brace =
      `M${p(1, 0)}C${p(0.3, 0.03)} ${p(0.75, 0.42)} ${p(0, 0.5)}C${p(0.75, 0.58)} ${p(0.3, 0.97)} ${p(1, 1)}` +
      `C${p(0.55, 0.95)} ${p(0.95, 0.56)} ${p(0.3, 0.5)}C${p(0.95, 0.44)} ${p(0.55, 0.05)} ${p(1, 0)}Z`;
    const lineX = round(GUTTER * SPACE);
    holder.style.transform = `translateY(${round(y)}px)`;
    holder.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" width="${lineX + 1}" height="${round(this.#lineHeight)}" fill="currentColor">` +
      `<path d="${brace}"/><path d="M${lineX} ${round(top)}V${round(bottom)}" stroke="currentColor" stroke-width="${round(0.2 * SPACE)}"/></svg>`;
    return holder;
  }

  /** One frame: the time's place, the scroll, the measures in view, and the live marks. */
  #draw(): void {
    if (this.#dirty) this.#rebuild();
    if (this.#laidWidth !== this.element.clientWidth) this.#layout();
    const song = this.#song;
    if (song === undefined || this.#placed.length === 0) return this.#live.update(undefined, this.#liveOptions());
    const seconds = this.#transport.time - (this.#transport.renderOffset / 1000) * this.#transport.speed;
    const tick = song.tempoMap.secondsToTicks(Math.max(0, seconds));
    const placed = this.#placedAt(tick);
    const engraved = this.#engraved(placed.index, placed.header, placed.stretch);
    const x = placed.x + columnX(engraved, this.#sheet!.measures[placed.index]!, tick);

    const viewW = this.element.clientWidth;
    const viewH = this.element.clientHeight;
    const scroll = !this.#page.classList.contains("lines");
    const left = scroll ? Math.max(0, x - viewW * CURSOR_AT) : 0;
    const top = scroll ? 0 : this.#lineTops[placed.line]!;
    this.#page.style.transform = `translate(${round(-left)}px, ${round(-top)}px)`;
    this.#show(scroll ? [left - viewW / 2, left + viewW * 1.5] : [Infinity, Infinity], scroll ? [Infinity, Infinity] : [top - viewH / 2, top + viewH * 1.5]);

    this.#live.update(
      {
        measure: placed.index,
        tick,
        x,
        y: placed.y,
        element: this.#inPage.get(placed.index),
        engraved,
        key: this.#keys[placed.index],
        space: SPACE,
        held: this.#held(),
        trackColors: this.#tracks.tracks.map((track) => track.color),
      },
      this.#liveOptions(),
    );
  }

  /** The placed measure that holds `tick`: the last that starts at or before it. */
  #placedAt(tick: number): Placed {
    const measures = this.#sheet!.measures;
    let low = 0;
    let high = measures.length - 1;
    while (low < high) {
      const mid = (low + high + 1) >> 1;
      if (measures[mid]!.tick <= tick) low = mid;
      else high = mid - 1;
    }
    return this.#placed[low]!;
  }

  /** Puts in the page the measures within `xs` across or `ys` down, and drops the rest. An infinite pair means no bound. */
  #show(xs: [number, number], ys: [number, number]): void {
    const within = (place: Placed) => {
      const acrossOk = xs[0] === Infinity || (place.x + place.width >= xs[0] && place.x <= xs[1]);
      const downOk = ys[0] === Infinity || (place.y + this.#lineHeight >= ys[0] && place.y <= ys[1]);
      return acrossOk && downOk;
    };
    for (const place of this.#placed) {
      const element = this.#inPage.get(place.index);
      if (!within(place)) {
        if (element) {
          element.remove();
          this.#inPage.delete(place.index);
        }
        continue;
      }
      if (element) continue;
      const engraved = this.#engraved(place.index, place.header, place.stretch);
      const made = el("div", { class: "sheet-measure", attrs: { "data-index": String(place.index) } });
      made.style.transform = `translate(${round(place.x)}px, ${round(place.y)}px)`;
      made.innerHTML = engraved.svg;
      if (place.numbered) made.append(el("span", { class: "sheet-number", text: String(place.index + 1) }));
      this.#page.append(made);
      this.#inPage.set(place.index, made);
    }
  }

  #liveOptions(): LiveOptions {
    const s = this.#settings;
    return {
      cursor: s.get("renderSheetCursor"),
      color: s.get("sheetColorActiveNotes"),
      colorByTrack: s.get("sheetColorByTrack"),
      activeColor: s.get("sheetActiveNotesColor"),
      highlight: s.get("sheetHighlightActiveNotes"),
      highlightColor: s.get("sheetActiveHighlightColor"),
      grow: s.get("sheetActiveGrowEffect"),
      inputNotes: s.get("sheetRenderInputNotes"),
      inputColor: s.get("inputNoteColorWhite"),
      hover: s.get("sheetShowHoverInfo"),
      names: { system: s.get("pitchNotationSystem") },
    };
  }
}

/** The x of `tick` in `engraved`, between the columns around it, or towards the barline after the last. */
export function columnX(engraved: Pick<EngravedMeasure, "columns" | "width">, measure: { tick: number; ticks: number }, tick: number): number {
  const columns = engraved.columns;
  const end = { tick: measure.tick + measure.ticks, x: engraved.width };
  let k = columns.length - 1;
  while (k >= 0 && columns[k]!.tick > tick) k--;
  const from = k >= 0 ? columns[k]! : { tick: measure.tick, x: columns[0]?.x ?? 0 };
  const to = columns[k + 1] ?? end;
  if (to.tick <= from.tick) return from.x;
  const share = Math.min(1, Math.max(0, (tick - from.tick) / (to.tick - from.tick)));
  return from.x + (to.x - from.x) * share;
}
