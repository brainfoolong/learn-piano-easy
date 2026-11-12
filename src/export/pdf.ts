/**
 * PDF export: the falling notes above a piano, one page per screen of notes, written as a PDF 1.4 file.
 *
 * Decisions, and what each costs:
 * - The writer is ours and tiny. A page holds filled rectangles and lines of text in Helvetica, one of
 *   PDF's standard fonts, so the file embeds no font. Text outside Latin-1 prints as `?`.
 * - Streams are left uncompressed. A file is larger, but the writer needs no deflate code.
 * - Pages are A4 in landscape. Time runs up the page from the piano, as the notes fall in the app.
 *   Each page shows `secondsPerPage` of the song, and a note across a page's edge shows on both pages.
 * - The keys span the visible notes, widened as `fitRange` widens them, so a narrow song fills the page.
 * - A colour's alpha is dropped, because a PDF without transparency groups has none.
 * - Without background colours the page is white paper with grey octave lines, which prints cheaply.
 *   With them, it takes the lane, divider and key colours of the settings.
 * - Each page's heading names the song, its time span and the page, in the live locale's words.
 *
 * Gaps: the pages carry no measure lines, lyrics or chord labels.
 */
import { t } from "../i18n/live";
import type { Song } from "../midi/song";
import { fitRange, layoutKeys } from "../render/key-layout";

/** A colour as red, green and blue, each from 0 to 1. */
export type Rgb = readonly [number, number, number];

/** A filled rectangle with its lower-left corner at `x`, `y`, in points, and an optional outline. */
export interface PdfRect {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Rgb;
  stroke?: Rgb;
}

/** One line of text with its baseline starting at `x`, `y`, in points. */
export interface PdfText {
  x: number;
  y: number;
  size: number;
  text: string;
  fill: Rgb;
}

/** What one page draws, rectangles first and text over them. */
export interface PdfPage {
  rects: PdfRect[];
  texts: PdfText[];
}

/** A4 in landscape, in points. */
export const PAGE = { width: 842, height: 595 } as const;

/** `#rrggbb` or `#rrggbbaa` as an `Rgb`, ignoring the alpha. */
export function rgb(hex: string): Rgb {
  const channel = (at: number) => parseInt(hex.slice(at, at + 2), 16) / 255;
  return [channel(1), channel(3), channel(5)];
}

/** A number in the shortest form PDF reads, to two decimals. */
function num(value: number): string {
  return String(Math.round(value * 100) / 100);
}

/** `text` as a PDF string literal: Latin-1 only, with its brackets and backslashes escaped. */
function literal(text: string): string {
  const safe = [...text].map((c) => (c.charCodeAt(0) < 32 || c.charCodeAt(0) > 255 ? "?" : c)).join("");
  return `(${safe.replace(/[\\()]/g, (c) => `\\${c}`)})`;
}

/** The content stream that draws `page`. */
function content(page: PdfPage): string {
  const ops: string[] = [];
  for (const r of page.rects) {
    ops.push(`${r.fill.map(num).join(" ")} rg`);
    if (r.stroke) ops.push(`${r.stroke.map(num).join(" ")} RG 0.5 w`);
    ops.push(`${num(r.x)} ${num(r.y)} ${num(r.width)} ${num(r.height)} re ${r.stroke ? "B" : "f"}`);
  }
  for (const t of page.texts) {
    ops.push(`${t.fill.map(num).join(" ")} rg BT /F1 ${num(t.size)} Tf ${num(t.x)} ${num(t.y)} Td ${literal(t.text)} Tj ET`);
  }
  return ops.join("\n");
}

/**
 * The bytes of a PDF 1.4 file of `pages`, each `size` in points, titled `title`.
 *
 * Objects 1 to 4 are the catalog, the page tree, the font and the document info. Each page then takes
 * two objects: the page and its content stream. Every character is below 256, so a string's length is
 * its byte count, and the cross-reference table's offsets are string positions.
 */
export function writePdf(pages: readonly PdfPage[], size: { width: number; height: number }, title: string): Uint8Array<ArrayBuffer> {
  const pageIds = pages.map((_, i) => 5 + i * 2);
  const objects: string[] = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    `<< /Title ${literal(title)} /Producer (learn-piano-easy) >>`,
  ];
  for (const [i, page] of pages.entries()) {
    const stream = content(page);
    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${num(size.width)} ${num(size.height)}] /Resources << /Font << /F1 3 0 R >> >> /Contents ${pageIds[i]! + 1} 0 R >>`,
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    );
  }

  let out = "%PDF-1.4\n%\xe2\xe3\xcf\xd3\n";
  const offsets: number[] = [];
  for (const [i, body] of objects.entries()) {
    offsets.push(out.length);
    out += `${i + 1} 0 obj\n${body}\nendobj\n`;
  }
  const xref = out.length;
  out += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets) out += `${String(offset).padStart(10, "0")} 00000 n \n`;
  out += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 4 0 R >>\nstartxref\n${xref}\n%%EOF\n`;

  const bytes = new Uint8Array(out.length);
  for (let i = 0; i < out.length; i++) bytes[i] = out.charCodeAt(i);
  return bytes;
}

/** How each track shows: hidden, or in its colour as `#rrggbbaa`. */
export interface PdfTrack {
  readonly visible: boolean;
  readonly color: string;
}

/** The settings' colours that a page with background colours takes, each as `#rrggbbaa`. */
export interface PdfColors {
  lane: string;
  blackLane: string;
  divider: string;
  whiteKey: string;
  blackKey: string;
}

export interface NotePagesOptions {
  title: string;
  /** How much of the song one page shows, in seconds. */
  secondsPerPage: number;
  /** Whether the page takes the lane and key colours, or is white paper. */
  background: boolean;
  /** Each track's look, by track index. A track without one shows in grey. */
  tracks: readonly PdfTrack[];
  colors: PdfColors;
}

/** The number of pages a song of `duration` seconds takes at `secondsPerPage`, at least one. */
export function pageCount(duration: number, secondsPerPage: number): number {
  return Math.max(1, Math.ceil(duration / secondsPerPage - 1e-9));
}

const MARGIN = 28;
const HEADER = 22;
const PIANO_HEIGHT = 64;
/** A black key's length, as a share of a white key's. */
const BLACK_KEY_LENGTH = 0.62;
/** The gap on each side of a note inside its key's width, in key units. */
const NOTE_INSET = 0.06;

/** `seconds` as `m:ss`, or `m:ss.s` when it has tenths. */
function clock(seconds: number): string {
  const tenths = Math.round(seconds * 10);
  const s = (tenths % 600) / 10;
  return `${Math.floor(tenths / 600)}:${s < 10 ? "0" : ""}${s.toFixed(Number.isInteger(s) ? 0 : 1)}`;
}

/** The pages of `song`'s visible notes, each a screen of `secondsPerPage` above the piano. */
export function notePages(song: Song, options: NotePagesOptions): PdfPage[] {
  const shown = song.notes.filter((n) => options.tracks[n.track]?.visible ?? true);
  const layout = layoutKeys(fitRange(shown));
  const scale = (PAGE.width - 2 * MARGIN) / layout.width;
  const pianoTop = MARGIN + PIANO_HEIGHT;
  const top = PAGE.height - MARGIN - HEADER;
  const perSecond = (top - pianoTop) / options.secondsPerPage;
  const ink: Rgb = options.background ? [0.92, 0.93, 0.96] : [0.1, 0.1, 0.12];
  const count = pageCount(song.duration, options.secondsPerPage);
  const keyX = (x: number) => MARGIN + x * scale;
  const blackKeys = layout.keys.filter((k) => k.black);
  const whiteKeys = layout.keys.filter((k) => !k.black);

  // What every page shares: the lanes, the octave lines and the piano.
  const base: PdfRect[] = [];
  const laneHeight = top - pianoTop;
  if (options.background) {
    const c = options.colors;
    base.push({ x: 0, y: 0, width: PAGE.width, height: PAGE.height, fill: rgb(c.lane) });
    for (const k of blackKeys) base.push({ x: keyX(k.x), y: pianoTop, width: k.width * scale, height: laneHeight, fill: rgb(c.blackLane) });
  }
  const divider = options.background ? rgb(options.colors.divider) : ([0.82, 0.83, 0.86] as Rgb);
  for (const k of whiteKeys) {
    if (k.pitch % 12 === 0) base.push({ x: keyX(k.x) - 0.25, y: pianoTop, width: 0.5, height: laneHeight, fill: divider });
  }
  const white = options.background ? rgb(options.colors.whiteKey) : ([1, 1, 1] as Rgb);
  const black = options.background ? rgb(options.colors.blackKey) : ([0.1, 0.1, 0.1] as Rgb);
  const edge: Rgb = [0.45, 0.45, 0.48];
  for (const k of whiteKeys) base.push({ x: keyX(k.x), y: MARGIN, width: scale, height: PIANO_HEIGHT, fill: white, stroke: edge });
  const blackLength = PIANO_HEIGHT * BLACK_KEY_LENGTH;
  for (const k of blackKeys) {
    base.push({ x: keyX(k.x), y: pianoTop - blackLength, width: k.width * scale, height: blackLength, fill: black, stroke: edge });
  }

  const pages: PdfPage[] = [];
  for (let i = 0; i < count; i++) {
    const from = i * options.secondsPerPage;
    const to = from + options.secondsPerPage;
    const notes: PdfRect[] = [];
    // Black keys' notes go last, so they lie over the wider white keys' notes beside them.
    for (const pass of [false, true]) {
      for (const n of shown) {
        const key = layout.key(n.pitch);
        if (key === undefined || key.black !== pass || n.end <= from || n.start >= to) continue;
        const start = Math.max(n.start, from);
        const end = Math.min(n.end, to);
        const fill = rgb(options.tracks[n.track]?.color ?? "#9e9e9eff");
        const y = pianoTop + (start - from) * perSecond;
        notes.push({ x: keyX(key.x + NOTE_INSET), y, width: (key.width - 2 * NOTE_INSET) * scale, height: Math.max(1, (end - start) * perSecond), fill });
      }
    }
    const heading = t().player.input.pdf.pageHeading(options.title, clock(from), clock(to), i + 1, count);
    pages.push({
      rects: [...base, ...notes],
      texts: [{ x: MARGIN, y: PAGE.height - MARGIN - 12, size: 11, text: heading, fill: ink }],
    });
  }
  return pages;
}

/** The PDF file of `song`'s falling notes, as `notePages` lays them out. */
export function notesPdf(song: Song, options: NotePagesOptions): Uint8Array<ArrayBuffer> {
  return writePdf(notePages(song, options), PAGE, options.title);
}
