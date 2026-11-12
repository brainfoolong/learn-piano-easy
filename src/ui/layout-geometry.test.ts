import { expect, test } from "../testing";
import {
  backdrop,
  type Box,
  contrastFlaw,
  contrastRatio,
  findOverlaps,
  isClipped,
  judgePage,
  type MeasuredText,
  type PageMeasure,
  parseCssColor,
  parseHex,
} from "./layout-geometry";

const box = (x: number, y: number, width: number, height: number): Box => ({ x, y, width, height });

/** A dark text on white, at 16 pixels, that meets its contrast and sits inside its box. */
function text(overrides: Partial<MeasuredText> = {}): MeasuredText {
  return {
    name: 'p "Hello"',
    box: box(10, 10, 100, 20),
    clip: box(0, 0, 360, 800),
    ellipsis: false,
    colour: "rgb(26, 29, 41)",
    opacity: 1,
    backgrounds: ["rgb(255, 255, 255)"],
    fontSizePx: 16,
    fontWeight: 400,
    disabled: false,
    ...overrides,
  };
}

test("overlapping_boxes_are_reported", () => {
  const play = { name: 'button "Play"', box: box(0, 0, 100, 44) };
  const pause = { name: 'button "Pause"', box: box(90, 20, 100, 44) };
  const touching = { name: 'button "Stop"', box: box(100, 0, 100, 44) };
  const apart = { name: 'button "Next"', box: box(0, 100, 100, 44) };
  expect(findOverlaps([play, pause])).toEqual(['button "Play" overlaps button "Pause".']);
  // Boxes that only share an edge, or lie apart, are no overlap.
  expect(findOverlaps([play, touching, apart])).toEqual([]);
  // A shared sliver of one pixel is rounding, not an overlap.
  expect(findOverlaps([play, { name: "x", box: box(99, 0, 50, 44) }])).toEqual([]);
});

test("a_box_inside_its_parent_is_not_clipped", () => {
  const parent = box(0, 0, 200, 50);
  expect(isClipped(box(10, 10, 100, 20), parent)).toBe(false);
  expect(isClipped(box(0, 0, 200, 50), parent)).toBe(false);
  expect(isClipped(box(150, 10, 60, 20), parent)).toBe(true);
  expect(isClipped(box(10, 40, 100, 20), parent)).toBe(true);
  expect(isClipped(box(-5, 10, 100, 20), parent)).toBe(true);
  // A text that runs out of its box is a flaw, unless it may end in an ellipsis.
  const page: PageMeasure = {
    viewportWidth: 360,
    scrollWidth: 360,
    touch: false,
    interactive: [],
    texts: [text({ clip: box(0, 0, 60, 40) })],
    shift: 0,
    errors: [],
  };
  expect(judgePage(page)).toEqual(['p "Hello" is clipped by its box.']);
  expect(judgePage({ ...page, texts: [text({ clip: box(0, 0, 60, 40), ellipsis: true })] })).toEqual([]);
});

test("contrast_follows_the_wcag_formula", () => {
  expect(contrastRatio([0, 0, 0], [255, 255, 255])).toBeCloseTo(21, 5);
  expect(contrastRatio([255, 255, 255], [0, 0, 0])).toBeCloseTo(21, 5);
  expect(contrastRatio(parseHex("#6d5bff"), parseHex("#6d5bff"))).toBe(1);
  // #767676 is the lightest grey that meets 4.5 to 1 on white, and #777777 just fails it.
  expect(contrastRatio(parseHex("#767676"), [255, 255, 255])).toBeCloseTo(4.54, 2);
  expect(contrastRatio(parseHex("#777777"), [255, 255, 255])).toBeCloseTo(4.48, 2);
  // A translucent layer is laid over what is behind it before the ratio is taken.
  expect(parseCssColor("rgba(0, 0, 0, 0.5)")).toEqual([0, 0, 0, 0.5]);
  expect(parseCssColor("color(srgb 1 0.5 0 / 50%)")).toEqual([255, 127.5, 0, 0.5]);
  expect(backdrop(["rgba(0, 0, 0, 0)", "rgb(0 0 0 / 0.5)"])).toEqual([127.5, 127.5, 127.5]);
  // Body text needs 4.5 to 1, and large text 3 to 1.
  const grey = "rgb(119, 119, 119)";
  expect(contrastFlaw(text({ colour: grey }))).toBe('p "Hello" has a contrast of 4.48 to 1, below 4.5 to 1.');
  expect(contrastFlaw(text({ colour: grey, fontSizePx: 24 }))).toBeNull();
  expect(contrastFlaw(text({ colour: grey, disabled: true }))).toBeNull();
  expect(contrastFlaw(text({ colour: grey, backgrounds: null }))).toBeNull();
  // A faded ancestor fades the text, so a dark text at half opacity on white fails.
  expect(contrastFlaw(text({ opacity: 0.5 }))).toMatch(/below 4.5 to 1/);
});

test("a_touch_page_reports_small_targets_sideways_scroll_and_shifts", () => {
  const page: PageMeasure = {
    viewportWidth: 360,
    scrollWidth: 380,
    touch: true,
    interactive: [{ name: 'button "Play"', box: box(0, 0, 36, 36) }],
    texts: [],
    shift: 0.02,
    errors: ["boom"],
  };
  expect(judgePage(page)).toEqual([
    "The page logged an error: boom",
    "The page scrolls sideways: it is 380 pixels wide in a 360 pixel viewport.",
    'button "Play" is 36 by 36 pixels, below the touch size of 44.',
    "The layout shifted by 0.0200, above 0.001.",
  ]);
  expect(judgePage({ ...page, touch: false, scrollWidth: 360, shift: 0, errors: [] })).toEqual([]);
  // A link inline in a sentence is exempt from the touch size.
  const link = { name: 'a "terms"', box: box(0, 0, 40, 20), inline: true };
  expect(judgePage({ ...page, interactive: [link], scrollWidth: 360, shift: 0, errors: [] })).toEqual([]);
});
