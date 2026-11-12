/**
 * The pure judges of the site's layout checks: functions that take measured values and name a flaw.
 *
 * They never touch the page, so a unit test checks each one, and the checker that measures a page in a
 * browser stays thin. `e2e/layout-check.ts` measures a page into a `PageMeasure`, and `judgePage` names
 * every flaw in it. Each flaw is one sentence a person can act on.
 *
 * - Contrast follows WCAG 2's formula: the relative luminance of each colour in sRGB, then
 *   `(lighter + 0.05) / (darker + 0.05)`. Text needs 4.5 to 1, and large text 3 to 1. A colour with
 *   alpha is laid over what is behind it first, so a translucent surface is judged as it shows.
 * - Two boxes overlap when they share more than `EDGE_PX` in both directions, so boxes that only touch
 *   are fine. A text is clipped when it runs more than `EDGE_PX` outside the box that clips it.
 * - A touch target is at least `TOUCH_PX` square, and only a page on a touch screen is judged for it.
 *   A link inline in a sentence is exempt, as WCAG allows.
 * - The layout may shift by at most `SHIFT_LIMIT`, the sum of the browser's layout-shift scores.
 *
 * A text on a background image, such as a gradient, has no single colour behind it. The checker reports
 * its background as unknown, and `judgePage` skips its contrast. A disabled control's text is skipped
 * too, since WCAG asks no contrast of it, and so is a text faded out entirely. A partly faded ancestor
 * fades the text alone in this judgement, not the backgrounds behind it. That is close for a faded
 * text, and only a guess for a faded surface with its own background.
 */

/** A colour as red, green and blue from 0 to 255. */
export type Rgb = readonly [number, number, number];

/** A colour as red, green and blue from 0 to 255, and alpha from 0 to 1. */
export type Rgba = readonly [number, number, number, number];

/** A box on the page in CSS pixels, as `getBoundingClientRect` gives it. */
export interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** How far two boxes may share an edge, or a text may run past its box, before it is a flaw. */
export const EDGE_PX = 1;

/** The least width and height of a touch target. */
export const TOUCH_PX = 44;

/** The most the layout may shift, as the sum of the browser's layout-shift scores. */
export const SHIFT_LIMIT = 0.001;

/** The colour of a hex code with 6 digits, such as `#6d5bff`. */
export function parseHex(hex: string): Rgb {
  const match = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex.trim());
  if (!match) throw new Error(`"${hex}" is no colour of the form #rrggbb.`);
  return [Number.parseInt(match[1]!, 16), Number.parseInt(match[2]!, 16), Number.parseInt(match[3]!, 16)];
}

/**
 * The colour of a computed CSS colour: `rgb()`, `rgba()` or `color(srgb …)`, which is what a browser
 * computes `light-dark()` and `color-mix()` to. Throws on any other form.
 */
export function parseCssColor(css: string): Rgba {
  const text = css.trim();
  const legacy = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)$/i.exec(text);
  if (legacy) return [Number(legacy[1]), Number(legacy[2]), Number(legacy[3]), alpha(legacy[4])];
  const srgb = /^color\(srgb\s+([\d.e-]+)\s+([\d.e-]+)\s+([\d.e-]+)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i.exec(text);
  if (srgb) return [Number(srgb[1]) * 255, Number(srgb[2]) * 255, Number(srgb[3]) * 255, alpha(srgb[4])];
  throw new Error(`"${css}" is no computed colour this check can read.`);
}

/** An alpha written as a number or a percentage, or 1 when it is absent. */
function alpha(text: string | undefined): number {
  if (text === undefined) return 1;
  return text.endsWith("%") ? Number.parseFloat(text) / 100 : Number(text);
}

/** `top` laid over the opaque colour `bottom`. */
export function over(top: Rgba, bottom: Rgb): Rgb {
  const a = top[3];
  return [top[0] * a + bottom[0] * (1 - a), top[1] * a + bottom[1] * (1 - a), top[2] * a + bottom[2] * (1 - a)];
}

/**
 * The opaque colour that shows through a stack of backgrounds, given from the element outwards. Below
 * the last one is the browser's white canvas.
 */
export function backdrop(layers: readonly string[]): Rgb {
  let colour: Rgb = [255, 255, 255];
  for (const layer of [...layers].reverse()) colour = over(parseCssColor(layer), colour);
  return colour;
}

/** The relative luminance of a colour, from 0 for black to 1 for white. */
export function relativeLuminance([r, g, b]: Rgb): number {
  const linear = (channel: number) => {
    const c = channel / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

/** The contrast ratio of two colours, from 1 to 21, in either order. */
export function contrastRatio(a: Rgb, b: Rgb): number {
  const [hi, lo] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

/** The contrast a text needs: 3 to 1 when it is large, at least 24 pixels or 18.66 pixels and bold. */
export function neededContrast(fontSizePx: number, fontWeight: number): number {
  return fontSizePx >= 24 || (fontSizePx >= 18.66 && fontWeight >= 700) ? 3 : 4.5;
}

/** Whether two boxes share more than `EDGE_PX` in both directions. */
export function overlaps(a: Box, b: Box): boolean {
  const across = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
  const down = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
  return across > EDGE_PX && down > EDGE_PX;
}

/** Whether `inner` runs more than `EDGE_PX` outside `outer` on any side. */
export function isClipped(inner: Box, outer: Box): boolean {
  return (
    inner.x < outer.x - EDGE_PX ||
    inner.y < outer.y - EDGE_PX ||
    inner.x + inner.width > outer.x + outer.width + EDGE_PX ||
    inner.y + inner.height > outer.y + outer.height + EDGE_PX
  );
}

/** Whether a touch target is smaller than `TOUCH_PX` in either direction. */
export function isTooSmallToTouch(box: Box): boolean {
  return box.width < TOUCH_PX - 0.5 || box.height < TOUCH_PX - 0.5;
}

/** Something the checker measured, named so a flaw says where it is. */
export interface Named {
  /** A short description of the element, such as `button "Play"`. */
  name: string;
  box: Box;
  /** Whether it flows inline in text, such as a link in a sentence, which WCAG exempts from the touch size. */
  inline?: boolean;
}

/** A text the checker measured. */
export interface MeasuredText extends Named {
  /** The box that clips the text: its nearest ancestor that hides overflow, or the viewport. */
  clip: Box;
  /** Whether the text may end in an ellipsis, which makes its clipping intended. */
  ellipsis: boolean;
  /** Its computed colour. */
  colour: string;
  /** The product of its own opacity and its ancestors', which fades the colour further. */
  opacity: number;
  /** The background colours behind it, from the element outwards, or `null` behind an image. */
  backgrounds: string[] | null;
  fontSizePx: number;
  fontWeight: number;
  /** Whether it sits in a disabled control, which WCAG exempts from contrast. */
  disabled: boolean;
}

/** Everything the checker measures on one page at one width, theme and locale. */
export interface PageMeasure {
  /** The width of the viewport and of the page's content, which is wider when the page scrolls sideways. */
  viewportWidth: number;
  scrollWidth: number;
  /** Whether the page runs on a touch screen, which asks touch-sized targets. */
  touch: boolean;
  /** The interactive elements that sit in no other interactive element. */
  interactive: Named[];
  /** Each element that holds text of its own. */
  texts: MeasuredText[];
  /** The sum of the layout-shift scores since the page started to load. */
  shift: number;
  /** Every error the page threw or logged. */
  errors: string[];
}

/** Every pair of boxes that overlap, each named once. */
export function findOverlaps(items: readonly Named[]): string[] {
  const flaws: string[] = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (overlaps(items[i]!.box, items[j]!.box)) flaws.push(`${items[i]!.name} overlaps ${items[j]!.name}.`);
    }
  }
  return flaws;
}

/** The contrast flaw of one text, or `null` when it meets its ratio or is exempt. */
export function contrastFlaw(text: MeasuredText): string | null {
  if (text.disabled || text.backgrounds === null || text.opacity === 0) return null;
  const back = backdrop(text.backgrounds);
  const [r, g, b, a] = parseCssColor(text.colour);
  const ratio = contrastRatio(over([r, g, b, a * text.opacity], back), back);
  const needed = neededContrast(text.fontSizePx, text.fontWeight);
  if (ratio >= needed) return null;
  return `${text.name} has a contrast of ${ratio.toFixed(2)} to 1, below ${needed} to 1.`;
}

/** Every flaw of a measured page, each as one sentence. */
export function judgePage(page: PageMeasure): string[] {
  const flaws: string[] = [...page.errors.map((error) => `The page logged an error: ${error}`)];
  if (page.scrollWidth > page.viewportWidth + EDGE_PX) {
    flaws.push(`The page scrolls sideways: it is ${page.scrollWidth} pixels wide in a ${page.viewportWidth} pixel viewport.`);
  }
  flaws.push(...findOverlaps(page.interactive));
  if (page.touch) {
    for (const item of page.interactive) {
      if (!item.inline && isTooSmallToTouch(item.box)) {
        flaws.push(`${item.name} is ${Math.round(item.box.width)} by ${Math.round(item.box.height)} pixels, below the touch size of ${TOUCH_PX}.`);
      }
    }
  }
  for (const text of page.texts) {
    if (!text.ellipsis && isClipped(text.box, text.clip)) flaws.push(`${text.name} is clipped by its box.`);
    const flaw = contrastFlaw(text);
    if (flaw !== null) flaws.push(flaw);
  }
  if (page.shift > SHIFT_LIMIT) flaws.push(`The layout shifted by ${page.shift.toFixed(4)}, above ${SHIFT_LIMIT}.`);
  return flaws;
}
