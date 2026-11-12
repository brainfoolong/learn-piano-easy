/**
 * The glyphs of the sheet: clefs, noteheads, rests, flags, accidentals and digits, as our own SVG paths.
 *
 * Decisions, and what each costs:
 * - Every glyph is drawn in staff spaces, so one transform scales it to any staff size. Its origin is
 *   the point the engraver places: the left edge of a notehead at its centre line, the line a clef
 *   names, or a rest's left edge on the middle line.
 * - A glyph is a list of parts, each filled or stroked. Strokes keep the hand-drawn paths short, and
 *   cost a little sharpness against a music font's outlines.
 * - A hollow notehead cuts its hole with the even-odd fill rule, so it stays one path.
 * - No music font is read or copied. The shapes follow the common forms of notation only.
 *
 * Bounds: the glyphs are constant strings, built once at load.
 */

/** One path of a glyph: filled, or stroked `stroke` staff spaces wide. */
export interface GlyphPart {
  d: string;
  stroke?: number;
  evenOdd?: boolean;
}

/** A glyph, `width` staff spaces wide from its origin. */
export interface Glyph {
  width: number;
  parts: GlyphPart[];
}

/** A circle path at `cx`, `cy` of radius `r`. */
function circle(cx: number, cy: number, r: number): string {
  return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
}

/** The width of a quarter or half notehead, in staff spaces. */
export const HEAD_WIDTH = 1.18;
/** The width of a whole notehead, in staff spaces. */
export const WHOLE_HEAD_WIDTH = 1.5;

const BLACK_HEAD = "M0.007 0.212A0.62 0.42 -20 1 1 1.173 -0.212A0.62 0.42 -20 1 1 0.007 0.212Z";
const HALF_HOLE = "M0.18 0.287A0.5 0.22 -35 1 1 1 -0.287A0.5 0.22 -35 1 1 0.18 0.287Z";

export const GLYPHS = {
  /** A filled notehead, origin at its left edge on its centre line. */
  blackHead: { width: HEAD_WIDTH, parts: [{ d: BLACK_HEAD }] },
  /** A half note's hollow head. */
  halfHead: { width: HEAD_WIDTH, parts: [{ d: BLACK_HEAD + HALF_HOLE, evenOdd: true }] },
  /** A whole note's wider hollow head. */
  wholeHead: {
    width: WHOLE_HEAD_WIDTH,
    parts: [
      {
        d: "M0 0A0.75 0.46 0 1 1 1.5 0A0.75 0.46 0 1 1 0 0Z" + "M0.55 0.346A0.4 0.25 60 1 1 0.95 -0.346A0.4 0.25 60 1 1 0.55 0.346Z",
        evenOdd: true,
      },
    ],
  },
  /** A treble clef, origin at its left edge on the G line it curls round. */
  treble: {
    width: 2,
    parts: [
      {
        d:
          "M1.05 0.25C0.6 0.3 0.55 -0.5 1.05 -0.55C1.75 -0.6 1.9 0.65 1.1 0.78C0.25 0.92 -0.15 -0.2 0.5 -1" +
          "C0.9 -1.55 1.5 -2.25 1.45 -3.3C1.42 -4.05 1.02 -4.2 0.83 -3.6C0.6 -2.9 0.85 -1 1.1 0.5" +
          "C1.25 1.4 1.35 2 1.1 2.35C0.85 2.65 0.42 2.5 0.45 2.15",
        stroke: 0.16,
      },
      { d: circle(0.66, 2.12, 0.25) },
    ],
  },
  /** A bass clef, origin at its left edge on the F line its dots straddle. */
  bass: {
    width: 2.4,
    parts: [
      { d: "M0.2 0C0.1 -0.85 1 -1.25 1.5 -0.65C2 0 1.65 1.25 0.15 2.25", stroke: 0.2 },
      { d: circle(0.42, 0.05, 0.3) },
      { d: circle(2.15, -0.5, 0.14) + circle(2.15, 0.5, 0.14) },
    ],
  },
  /** A sharp, origin at its left edge on the note's centre line. */
  sharp: {
    width: 1,
    parts: [
      { d: "M0.27 -1.25h0.11v2.45h-0.11ZM0.62 -1.35h0.11v2.45h-0.11Z" },
      { d: "M0.05 -0.3L0.95 -0.58v0.3L0.05 0Z" + "M0.05 0.5L0.95 0.22v0.3L0.05 0.8Z" },
    ],
  },
  /** A flat, origin at its left edge on the note's centre line. */
  flat: {
    width: 0.9,
    parts: [
      { d: "M0.05 -1.8h0.12v2.3h-0.12Z" },
      {
        d: "M0.17 0.5C0.6 0.2 0.95 -0.1 0.8 -0.45C0.62 -0.8 0.3 -0.45 0.17 -0.3V-0.08C0.35 -0.3 0.55 -0.45 0.6 -0.3C0.66 -0.1 0.42 0.15 0.17 0.32Z",
      },
    ],
  },
  /** A natural, origin at its left edge on the note's centre line. */
  natural: {
    width: 0.8,
    parts: [
      { d: "M0.1 -1.3h0.11v1.75h-0.11ZM0.58 -0.45h0.11v1.75h-0.11Z" },
      { d: "M0.1 -0.2L0.69 -0.42v0.26L0.1 0.06Z" + "M0.1 0.38L0.69 0.16v0.26L0.1 0.64Z" },
    ],
  },
  /** An eighth note's flag on an up stem, origin at the stem's tip. A down stem mirrors it. */
  flag: {
    width: 1.1,
    parts: [
      {
        d: "M0 0C0.15 0.9 1.1 1.2 1 2.3C0.95 2.6 0.85 2.8 0.75 2.95C0.95 2.3 0.7 1.6 0 1.2Z",
      },
    ],
  },
  /** An augmentation dot, origin at its left edge. */
  dot: { width: 0.4, parts: [{ d: circle(0.2, 0, 0.18) }] },
} satisfies Record<string, Glyph>;

/** The digits 0 to 9, each two staff spaces tall and centred on its origin's line. */
export const DIGITS: readonly Glyph[] = [
  "M0.55 -1C0 -1 0 1 0.55 1C1.1 1 1.1 -1 0.55 -1Z",
  "M0.3 -0.6L0.62 -1V1M0.3 1H0.95",
  "M0.1 -0.5C0.2 -1.1 1 -1.1 1 -0.45C1 0 0.3 0.4 0.1 1H1",
  "M0.15 -0.75C0.4 -1.1 1 -1 0.95 -0.5C0.9 -0.1 0.5 -0.05 0.45 -0.05C0.9 -0.05 1.05 0.3 0.95 0.6C0.8 1.1 0.25 1.05 0.1 0.75",
  "M0.8 1V-1L0.05 0.4H1.1",
  "M0.95 -1H0.25L0.15 -0.1C0.6 -0.35 1.05 -0.1 1 0.4C0.95 1.05 0.3 1.1 0.1 0.75",
  "M0.9 -0.85C0.6 -1.15 0.1 -0.9 0.1 0.2C0.1 1.1 1 1.1 1 0.4C1 -0.2 0.3 -0.2 0.12 0.25",
  "M0.1 -1H1C0.6 -0.4 0.45 0.2 0.4 1",
  "M0.55 -0.05C0.1 -0.2 0.15 -1 0.55 -1C0.95 -1 1 -0.2 0.55 -0.05C0.05 0.1 0.05 1 0.55 1C1.05 1 1.05 0.1 0.55 -0.05Z",
  "M0.2 0.85C0.5 1.15 1 0.9 1 -0.2C1 -1.1 0.1 -1.1 0.1 -0.4C0.1 0.2 0.8 0.2 0.98 -0.25",
].map((d) => ({ width: 1.2, parts: [{ d, stroke: 0.28 }] }));

const WHOLE_REST: Glyph = { width: 1.2, parts: [{ d: "M0 -1h1.2v0.5h-1.2Z" }] };
const HALF_REST: Glyph = { width: 1.2, parts: [{ d: "M0 -0.5h1.2v0.5h-1.2Z" }] };
const QUARTER_REST: Glyph = {
  width: 1,
  parts: [
    {
      d: "M0.3 -1.5L0.85 -0.75C0.5 -0.4 0.45 -0.1 0.85 0.45C0.45 0.3 0.25 0.6 0.55 1.3C0.1 0.95 0.05 0.35 0.5 0.4L0.1 -0.1C0.5 -0.45 0.55 -0.8 0.3 -1.5Z",
    },
  ],
};

/**
 * The rest of note value `base`, origin at its left edge on the middle line. A whole rest hangs from
 * the line above it, and a half rest sits on it. An eighth or shorter has one hooked dot per flag.
 */
export function restGlyph(base: number): Glyph {
  if (base <= 1) return WHOLE_REST;
  if (base === 2) return HALF_REST;
  if (base === 4) return QUARTER_REST;
  const hooks = Math.round(Math.log2(base)) - 2;
  const lift = Math.floor((hooks - 1) / 2);
  const parts: GlyphPart[] = [];
  for (let k = 0; k < hooks; k++) {
    const x = 0.35 + 0.3 * (hooks - 1 - k);
    const y = -0.5 + k - lift;
    parts.push({ d: circle(x, y, 0.22) });
    parts.push({ d: `M${x} ${y - 0.1}Q${x + 0.35} ${y + 0.1} ${x + 0.6} ${y - 0.25}`, stroke: 0.12 });
  }
  const top = { x: 0.95 + 0.3 * (hooks - 1), y: -0.75 - lift };
  const bottom = { x: top.x - 0.3 * (hooks + 0.6), y: 0.9 + (hooks - 1) - lift };
  parts.push({ d: `M${top.x} ${top.y}L${bottom.x} ${bottom.y}`, stroke: 0.14 });
  return { width: top.x + 0.1, parts };
}

/** `glyph` as SVG, its origin at `x`, `y` pixels, one staff space `scale` pixels, mirrored when `flipY`. */
export function glyphSvg(glyph: Glyph, x: number, y: number, scale: number, flipY = false): string {
  const transform = `translate(${round(x)} ${round(y)}) scale(${round(scale)} ${round(flipY ? -scale : scale)})`;
  const paths = glyph.parts.map((part) => {
    if (part.stroke !== undefined) {
      return `<path d="${part.d}" fill="none" stroke="currentColor" stroke-width="${part.stroke}" stroke-linecap="round"/>`;
    }
    return `<path d="${part.d}"${part.evenOdd ? ' fill-rule="evenodd"' : ""}/>`;
  });
  return `<g transform="${transform}">${paths.join("")}</g>`;
}

/** `value` to two decimals, so the SVG stays short. */
export function round(value: number): number {
  return Math.round(value * 100) / 100;
}
