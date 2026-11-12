/**
 * The app icons: draws the icon of `public/icons/icon.svg` at 192 and 512 pixels, and writes each as a
 * PNG into `public/icons/`.
 *
 * The icon is the site's logo: the `piano` glyph of `src/ui/icons/icons.ts` in the honey's ink, on a
 * round tile of the light theme's honey gradient.
 *
 * Decisions, and what each costs:
 * - The drawing is our own, in code. The tile is a circle, and the glyph is round-capped strokes. Its
 *   arcs are cut into straight pieces at most 6 degrees long, which strays under a fifth of a pixel at
 *   512. A small painter then covers it, and no rasterizer package joins the project. A change to the
 *   SVG needs the same change in the constants below.
 * - The glyph's stroke is 2 units of its 24, a little heavier than the logo's 1.75, so it stays
 *   legible in a 16-pixel browser tab.
 * - Each pixel averages a 4 by 4 grid of samples, which smooths the edges. A 512-pixel icon then takes
 *   about four million samples, well under a second.
 * - The PNG is ours too: 8-bit RGBA, one IDAT chunk, compressed with `node:zlib`. Its pixels are fixed,
 *   but its bytes follow zlib's version, so the test compares the pixels.
 *
 * `bun tools/make-icons.ts`. It needs no network, and the app never runs it.
 */
import { deflateSync } from "node:zlib";
import { join } from "node:path";

import { root } from "./build";

/** The folder the icons are written to. */
export const iconsDir = join(root, "public", "icons");

/** The sizes written, in pixels, each as `icon-<size>.png`. */
export const ICON_SIZES = [192, 512] as const;

/** The side of the icon's drawing, in its own units, as the SVG's view box. */
const UNITS = 128;

/** The samples along each side of a pixel. */
const GRID = 4;

type Rgb = readonly [number, number, number];
type Point = readonly [number, number];
type Segment = readonly [Point, Point];

/** The honey of `--g-brand` in the light theme, top to bottom, and the honey's ink drawn on it. */
const HONEY_TOP: Rgb = [0xff, 0xc9, 0x4f];
const HONEY_BOTTOM: Rgb = [0xf5, 0x9a, 0x14];
const INK: Rgb = [0x2a, 0x1a, 0x00];

/** The glyph's 24-unit box scales by this into the icon's units, as the SVG's `scale`. */
const GLYPH_SCALE = 3.5;
/** Where the glyph's origin sits in the icon, as the SVG's `translate`. */
const GLYPH_AT: Point = [22, 23.75];
/** The glyph's stroke width, in its own units. */
const GLYPH_STROKE = 2;

/**
 * The points of a circular arc around `centre`, from `from` to `to`, without `from`. A `sweep` of 1
 * turns as the SVG's sweep flag 1, and -1 as flag 0. Neighbouring points are at most 6 degrees apart.
 */
function arc(centre: Point, from: Point, to: Point, sweep: 1 | -1): Point[] {
  const [cx, cy] = centre;
  const radius = Math.hypot(from[0] - cx, from[1] - cy);
  const start = Math.atan2(from[1] - cy, from[0] - cx);
  let turn = Math.atan2(to[1] - cy, to[0] - cx) - start;
  if (sweep > 0 && turn < 0) turn += 2 * Math.PI;
  if (sweep < 0 && turn > 0) turn -= 2 * Math.PI;
  const steps = Math.ceil(Math.abs(turn) / (Math.PI / 30));
  const points: Point[] = [];
  for (let i = 1; i < steps; i++) {
    const angle = start + (turn * i) / steps;
    points.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
  }
  points.push(to);
  return points;
}

/** The glyph's body, in its own units: the SVG's first path, its arcs around their centres. */
const BODY: readonly Point[] = [
  [22, 11.5],
  ...arc([18.5, 11.5], [22, 11.5], [18.5, 8], -1),
  ...arc([18.502, 4.48], [18.5, 8], [15.327, 6], 1),
  ...arc([9, 9], [15.327, 6], [2, 9], -1),
  [2, 19],
  ...arc([4, 19], [2, 19], [4, 21], -1),
  [20, 21],
  ...arc([20, 19], [20, 21], [22, 19], -1),
  [22, 11.5],
];

/** The glyph in the icon's units: the body's pieces, the keyboard's top edge and its four key lines. */
const GLYPH: readonly Segment[] = (
  [
    ...BODY.slice(1).map((point, i): Segment => [BODY[i]!, point]),
    [[2, 13], [22, 13]],
    [[6, 13], [6, 17]],
    [[10, 13], [10, 17]],
    [[14, 13], [14, 17]],
    [[18, 13], [18, 17]],
  ] as Segment[]
).map(([a, b]): Segment => [
  [GLYPH_AT[0] + a[0] * GLYPH_SCALE, GLYPH_AT[1] + a[1] * GLYPH_SCALE],
  [GLYPH_AT[0] + b[0] * GLYPH_SCALE, GLYPH_AT[1] + b[1] * GLYPH_SCALE],
]);

/** Half the glyph's stroke, in the icon's units. */
const HALF_STROKE = (GLYPH_STROKE * GLYPH_SCALE) / 2;

/** The glyph's bounds with its stroke, in the icon's units, so most samples skip its segments. */
/** How far past the stroke the bounds reach, in the icon's units: more than half a pixel's diagonal. */
const BOX_MARGIN = HALF_STROKE + 1;

/** The glyph's bounds, in the icon's units. */
const GLYPH_BOX = {
  x0: Math.min(...GLYPH.flat().map((p) => p[0])) - BOX_MARGIN,
  x1: Math.max(...GLYPH.flat().map((p) => p[0])) + BOX_MARGIN,
  y0: Math.min(...GLYPH.flat().map((p) => p[1])) - BOX_MARGIN,
  y1: Math.max(...GLYPH.flat().map((p) => p[1])) + BOX_MARGIN,
};

/**
 * The glyph's segments packed for the painter's inner loop, five numbers each: the start, the run to
 * the end, and the run's squared length. Packed numbers run several times faster than nested arrays.
 */
const PACKED = new Float64Array(
  GLYPH.flatMap(([[ax, ay], [bx, by]]) => [ax, ay, bx - ax, by - ay, (bx - ax) ** 2 + (by - ay) ** 2]),
);

/** Whether `(px, py)` lies on the tile, the circle that fills the icon. */
function onTile(px: number, py: number): boolean {
  const half = UNITS / 2;
  return (px - half) ** 2 + (py - half) ** 2 <= half * half;
}

/**
 * The distance from `(px, py)` to the glyph's centre line, in the icon's units. Outside the glyph's
 * bounds it is `Infinity`, since the true distance there exceeds `BOX_MARGIN` anyway.
 */
function glyphDistance(px: number, py: number): number {
  if (px < GLYPH_BOX.x0 || px > GLYPH_BOX.x1 || py < GLYPH_BOX.y0 || py > GLYPH_BOX.y1) return Infinity;
  let nearest = Infinity;
  for (let i = 0; i < PACKED.length; i += 5) {
    const ox = px - PACKED[i]!;
    const oy = py - PACKED[i + 1]!;
    const dx = PACKED[i + 2]!;
    const dy = PACKED[i + 3]!;
    const t = Math.min(1, Math.max(0, (ox * dx + oy * dy) / PACKED[i + 4]!));
    const ex = ox - t * dx;
    const ey = oy - t * dy;
    nearest = Math.min(nearest, ex * ex + ey * ey);
  }
  return Math.sqrt(nearest);
}

/** The tile's honey at height `py`, the gradient running top to bottom. */
function honeyAt(py: number): Rgb {
  const t = py / UNITS;
  return [0, 1, 2].map((i) => HONEY_TOP[i]! + (HONEY_BOTTOM[i]! - HONEY_TOP[i]!) * t) as unknown as Rgb;
}

/**
 * The icon at `size` pixels a side, as straight RGBA bytes, row by row from the top.
 *
 * A pixel whose centre lies further than half its diagonal from the stroke's edge is wholly ink or
 * wholly honey. Only the pixels along the edge test the glyph at each sample, which keeps a draw fast.
 */
export function drawIcon(size: number): Uint8Array {
  const pixels = new Uint8Array(size * size * 4);
  const scale = UNITS / size;
  const reach = scale * Math.SQRT1_2;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const centre = glyphDistance((col + 0.5) * scale, (row + 0.5) * scale);
      const allInk = centre <= HALF_STROKE - reach;
      const edge = !allInk && centre <= HALF_STROKE + reach;
      // The sum of the colours of the samples on the tile, and their count.
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      for (let sy = 0; sy < GRID; sy++) {
        for (let sx = 0; sx < GRID; sx++) {
          const px = (col + (sx + 0.5) / GRID) * scale;
          const py = (row + (sy + 0.5) / GRID) * scale;
          if (!onTile(px, py)) continue;
          const ink = allInk || (edge && glyphDistance(px, py) <= HALF_STROKE);
          const colour = ink ? INK : honeyAt(py);
          r += colour[0];
          g += colour[1];
          b += colour[2];
          a += 1;
        }
      }
      const at = (row * size + col) * 4;
      const samples = GRID * GRID;
      pixels[at + 3] = Math.round((a / samples) * 255);
      if (a === 0) continue;
      pixels[at] = Math.round(r / a);
      pixels[at + 1] = Math.round(g / a);
      pixels[at + 2] = Math.round(b / a);
    }
  }
  return pixels;
}

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (const byte of bytes) c = CRC_TABLE[(c ^ byte) & 0xff]! ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** One PNG chunk: its length, type, data and CRC. */
function chunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + data.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, data.length);
  out.set(new TextEncoder().encode(type), 4);
  out.set(data, 8);
  view.setUint32(8 + data.length, crc32(out.subarray(4, 8 + data.length)));
  return out;
}

/** The PNG signature, the first eight bytes of every PNG file. */
export const PNG_SIGNATURE = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/** The rows of `pixels` as a PNG's scanlines, each after its filter byte 0. */
export function scanlines(pixels: Uint8Array, size: number): Uint8Array {
  const stride = size * 4;
  const out = new Uint8Array(size * (stride + 1));
  for (let row = 0; row < size; row++) out.set(pixels.subarray(row * stride, (row + 1) * stride), row * (stride + 1) + 1);
  return out;
}

/** `pixels`, straight RGBA at `size` pixels a side, as a PNG file. */
export function encodePng(pixels: Uint8Array, size: number): Uint8Array {
  const header = new Uint8Array(13);
  const view = new DataView(header.buffer);
  view.setUint32(0, size);
  view.setUint32(4, size);
  header.set([8, 6, 0, 0, 0], 8);
  const parts = [
    PNG_SIGNATURE,
    chunk("IHDR", header),
    chunk("IDAT", new Uint8Array(deflateSync(scanlines(pixels, size), { level: 9 }))),
    chunk("IEND", new Uint8Array(0)),
  ];
  const out = new Uint8Array(parts.reduce((sum, part) => sum + part.length, 0));
  let at = 0;
  for (const part of parts) {
    out.set(part, at);
    at += part.length;
  }
  return out;
}

if (import.meta.main) {
  for (const size of ICON_SIZES) {
    const path = join(iconsDir, `icon-${size}.png`);
    const bytes = await Bun.write(path, encodePng(drawIcon(size), size));
    console.log(`Wrote ${path} (${bytes} bytes).`);
  }
}
