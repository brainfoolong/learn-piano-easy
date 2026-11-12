/**
 * The lyrics: the song's lyric events as one line of text over the scene, with a cursor that bounces
 * from syllable to syllable as each is sung.
 *
 * `lyricLines` breaks the syllables into lines. A syllable that begins with "/" or "\" starts a line,
 * as karaoke files mark it, and one that ends with a carriage return or a line feed ends one. A gap of
 * more than `LINE_GAP` seconds starts a line too, and so does a word once a line holds `LINE_CHARS`
 * characters. A file whose syllables hold no space at all gets one after each, and a trailing hyphen
 * joins two syllables instead.
 *
 * Decisions, and what each costs:
 * - The line is a DOM element over the scene, like the overlays, so its text stays sharp and the
 *   browser's zoom applies to it. It never catches the pointer.
 * - One line shows at a time: the first that has not ended, from `LEAD` seconds before its first
 *   syllable. The syllables before the sung one take the played colour, and the sung one the active.
 * - The cursor lands on each syllable as it starts, and arcs to the next over the time between them.
 *   Without bouncing, it rests on the sung syllable. Each syllable's centre is measured once, when its
 *   line is built, so a frame writes only the cursor's transform and, on a new syllable, the classes.
 * - The colours, the size and the height come from the `lyrics…` settings. A change of size measures
 *   the line again on the next frame.
 *
 * Bounds: one element per syllable of the shown line, and one list entry per lyric of the song.
 */
import type { TimedText } from "../midi/song";
import { el } from "../ui/dom";
import "./lyrics.css";

/** One sung piece of text, from `start` in song seconds. */
export interface Syllable {
  text: string;
  start: number;
}

/** A line of syllables. It shows until `end`, in song seconds. */
export interface LyricLine {
  syllables: Syllable[];
  start: number;
  end: number;
}

/** The longest silence inside a line, in seconds. */
export const LINE_GAP = 3;
/** How many characters a line holds before its next word starts a new one. */
export const LINE_CHARS = 40;
/** How long a line stays after its last syllable starts, in seconds. */
export const LAST_HOLD = 2;
/** How long before its first syllable a line shows, in seconds. */
export const LEAD = 2;

/** The lines of `lyrics`, which are in time order. */
export function lyricLines(lyrics: readonly TimedText[]): LyricLine[] {
  const spaced = lyrics.some((lyric) => /[ \t]/.test(lyric.text));
  const lines: LyricLine[] = [];
  let current: Syllable[] = [];
  let chars = 0;
  const close = () => {
    if (current.length > 0) lines.push({ syllables: current, start: current[0]!.start, end: 0 });
    current = [];
    chars = 0;
  };
  for (const lyric of lyrics) {
    const breakBefore = /^[/\\]/.test(lyric.text);
    const breakAfter = /[\r\n]$/.test(lyric.text);
    let text = lyric.text.replace(/^[/\\]+/, "").replace(/[\r\n]+/g, "");
    if (!spaced && text !== "") text = text.endsWith("-") ? text.slice(0, -1) : `${text} `;
    const previous = current[current.length - 1];
    const startsWord = previous === undefined || /\s$/.test(previous.text) || /^\s/.test(text);
    const gap = previous !== undefined && lyric.seconds - previous.start > LINE_GAP;
    if (breakBefore || gap || (startsWord && chars >= LINE_CHARS)) close();
    if (text.trim() !== "") {
      current.push({ text, start: lyric.seconds });
      chars += text.length;
    }
    if (breakAfter) close();
  }
  close();
  lines.forEach((line, i) => {
    const hold = line.syllables[line.syllables.length - 1]!.start + LAST_HOLD;
    const next = lines[i + 1];
    line.end = next === undefined ? hold : Math.min(hold, next.start);
  });
  return lines;
}

/** The index of the line that shows at `now`, or -1 when none does. */
export function lineAt(lines: readonly LyricLine[], now: number): number {
  let low = 0;
  let high = lines.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (lines[mid]!.end <= now) low = mid + 1;
    else high = mid;
  }
  const line = lines[low];
  return line !== undefined && line.start - LEAD <= now ? low : -1;
}

/**
 * The syllable of `line` sung at `now`, or -1 before the first, and how far, from 0 to 1, the time has
 * gone from its start to the next syllable's start, or to the line's end after the last.
 */
export function syllableAt(line: LyricLine, now: number): { index: number; progress: number } {
  const { syllables } = line;
  let index = -1;
  while (index + 1 < syllables.length && syllables[index + 1]!.start <= now) index++;
  if (index < 0) return { index, progress: 0 };
  const from = syllables[index]!.start;
  const to = syllables[index + 1]?.start ?? line.end;
  return { index, progress: to > from ? Math.min(1, (now - from) / (to - from)) : 1 };
}

export interface LyricsOptions {
  enabled: boolean;
  /** CSS colours. */
  background: string;
  color: string;
  playedColor: string;
  activeColor: string;
  /** In CSS pixels. */
  fontSize: number;
  /** The line's centre, in percent of the scene's height from its top. */
  y: number;
  cursor: boolean;
  bouncing: boolean;
}

export interface Lyrics {
  readonly element: HTMLElement;
  setLyrics(lyrics: readonly TimedText[]): void;
  setOptions(options: LyricsOptions): void;
  /** Shows the line and the cursor of song time `now`, in seconds. */
  update(now: number): void;
  dispose(): void;
}

/** How high the cursor bounces between two syllables, in font heights. */
const BOUNCE = 0.6;

/** The lyrics, added to `container` over the scene, hidden until enabled. */
export function createLyrics(container: HTMLElement): Lyrics {
  const text = el("div", { class: "lyrics-text" });
  const cursor = el("div", { class: "lyrics-cursor" });
  const element = el("div", { class: "lyrics", attrs: { "aria-live": "off" }, children: [cursor, text] });
  element.hidden = true;
  container.append(element);

  let options: LyricsOptions | undefined;
  let lines: LyricLine[] = [];
  /** The shown line's index, its syllable elements and their centres, or -1 for none. */
  let shown = -1;
  let spans: HTMLElement[] = [];
  let centres: number[] = [];
  let sung = -2;
  let measured = false;

  const build = (index: number) => {
    shown = index;
    sung = -2;
    const line = lines[index];
    spans = line ? line.syllables.map((syllable) => el("span", { text: syllable.text })) : [];
    text.replaceChildren(...spans);
    measured = false;
  };

  return {
    element,

    setLyrics(next) {
      lines = lyricLines(next);
      build(-1);
    },

    setOptions(next) {
      options = next;
      element.style.top = `${next.y}%`;
      element.style.fontSize = `${next.fontSize}px`;
      element.style.background = next.background;
      element.style.setProperty("--lyric", next.color);
      element.style.setProperty("--lyric-played", next.playedColor);
      element.style.setProperty("--lyric-active", next.activeColor);
      measured = false;
    },

    update(now) {
      const index = options?.enabled ? lineAt(lines, now) : -1;
      element.hidden = index < 0;
      if (index !== shown) build(index);
      if (index < 0 || !options) return;
      if (!measured) {
        centres = spans.map((span) => span.offsetLeft + span.offsetWidth / 2);
        measured = true;
      }
      const line = lines[index]!;
      const { index: at, progress } = syllableAt(line, now);
      if (at !== sung) {
        spans.forEach((span, i) => (span.className = i < at ? "played" : i === at ? "active" : ""));
        sung = at;
      }
      cursor.hidden = !options.cursor;
      if (!options.cursor) return;
      const from = centres[Math.max(at, 0)] ?? 0;
      const bounce = options.bouncing && at >= 0;
      const to = bounce ? (centres[at + 1] ?? from) : from;
      const x = from + (to - from) * progress;
      const lift = bounce ? Math.sin(Math.PI * progress) * BOUNCE * options.fontSize : 0;
      cursor.style.transform = `translate(${x}px, ${-lift}px)`;
    },

    dispose() {
      element.remove();
    },
  };
}
