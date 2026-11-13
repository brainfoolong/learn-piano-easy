/**
 * The staff: a few bars of notation, engraved by `src/sheet/engrave.ts`, with notes that can light up.
 *
 * It follows the button's template. It takes typed options, holds no text of its own, and takes the
 * marks that change as a signal. It fills its parent's width, and is no focus stop.
 *
 * - **Lines:** the bars break into lines that fit the staff's width, as the player's sheet breaks
 *   them, and re-break when the width changes. Each line opens with the clef and the key signature,
 *   and the first bar shows the time signature. A full line stretches to the width, and a short last
 *   line keeps its natural width. A bar wider than the staff shrinks to fit.
 * - **First draw:** a new staff is drawn on one line at its natural width, since its observer reports
 *   a frame after it is shown. The first report breaks it into lines, so it never shows empty.
 * - **Marks:** a chord is marked by its tick, `next`, `correct` or `mistake`, like a key of the
 *   keyboard. A marked chord takes its mark's colour, and the rest stays `--c-text`.
 * - **Screen readers:** the staff is an image named by `label`, since notation read aloud note by
 *   note helps nobody. A caller that marks notes says what to play in its own words.
 *
 * Its cost is one engraving of each bar per width, which for a few bars is far below a frame.
 */
import "./staff.css";
import { type EngravedMeasure, engraveMeasure } from "../../sheet/engrave";
import type { Sheet } from "../../sheet/quantize";
import { breakLines } from "../../sheet/sheet-view";
import type { Key } from "../../theory/key";
import { el } from "../dom";
import type { Mark } from "../mark";
import type { Signal } from "../signal";

/** Pixels per staff space. */
export const STAFF_SPACE = 9;

/** A short last line this full or more is stretched like the others. */
const FULL_LAST_LINE = 0.75;

export interface StaffOptions {
  /** The accessible name, which says what the bars hold. */
  label: string;
  /** The sheet the bars come from, as `quantize` makes it. */
  sheet: Sheet;
  /** The key in force, or none for no key signature. */
  key?: Key;
  /** The first bar shown and how many. Every bar of the sheet when absent. */
  bars?: { first: number; count: number };
  /** Each marked chord's mark, by its tick, or a signal of them. */
  marks?: ReadonlyMap<number, Mark> | Signal<ReadonlyMap<number, Mark>>;
}

/** Whether `value` is a signal, not a plain map. */
function isSignal<T>(value: T | Signal<T>): value is Signal<T> {
  return typeof value === "object" && value !== null && "subscribe" in value;
}

/** A staff of `options.bars`, filling its parent's width. */
export function staff(options: StaffOptions): HTMLElement {
  const { sheet, key } = options;
  const first = options.bars?.first ?? 0;
  const count = Math.min(options.bars?.count ?? sheet.measures.length, sheet.measures.length - first);
  // A staff runs left to right on every page, so it never mirrors.
  const node = el("div", { class: "staff", attrs: { role: "img", dir: "ltr", "aria-label": options.label } });

  const engrave = (index: number, lineStart: boolean, width: number | null): EngravedMeasure => {
    const measure = sheet.measures[index]!;
    const previous = sheet.measures[index - 1];
    const meterChange = index === first || previous?.numerator !== measure.numerator || previous?.denominator !== measure.denominator;
    return engraveMeasure(sheet, index, {
      space: STAFF_SPACE,
      key,
      clef: lineStart,
      keySignature: lineStart && key !== undefined,
      timeSignature: meterChange,
      width,
    });
  };

  let marks: ReadonlyMap<number, Mark> = new Map();
  const paintMarks = () => {
    for (const chord of node.querySelectorAll<SVGGElement>("g.chord")) {
      const mark = marks.get(Number(chord.getAttribute("data-tick")));
      if (mark === undefined) chord.removeAttribute("data-mark");
      else chord.setAttribute("data-mark", mark);
    }
  };

  let laidOut = -1;
  const layout = (available: number) => {
    const width = Math.floor(available);
    if (width <= 0 || width === laidOut) return;
    laidOut = width;
    const natural = (offset: number, lineStart: boolean) => engrave(first + offset, lineStart, null).width;
    const lines = breakLines(count, natural, width);
    node.replaceChildren(
      ...lines.map((line, n) => {
        const widths = line.map((offset, k) => natural(offset, k === 0));
        const used = widths.reduce((a, b) => a + b, 0);
        const last = n === lines.length - 1;
        const stretch = used < width && (!last || used >= FULL_LAST_LINE * width) ? width / used : 1;
        return el("div", {
          class: "staff__line",
          children: line.map((offset, k) => {
            const bar = el("div", { class: "staff__bar" });
            bar.innerHTML = engrave(first + offset, k === 0, stretch > 1 ? Math.floor(widths[k]! * stretch) : null).svg;
            return bar;
          }),
        });
      }),
    );
    paintMarks();
  };

  const source = options.marks;
  if (source !== undefined) {
    const apply = (value: ReadonlyMap<number, Mark>) => {
      marks = value;
      paintMarks();
    };
    if (isSignal(source)) {
      apply(source.get());
      source.subscribe(apply);
    } else apply(source);
  }

  // A first draw at the natural width, since the observer reports a frame after the staff is shown.
  layout(Number.POSITIVE_INFINITY);
  new ResizeObserver((entries) => {
    for (const entry of entries) layout(entry.contentRect.width);
  }).observe(node);
  return node;
}
