/**
 * The XP counter: a learner's experience points beside an amber star, counting up when they grow.
 *
 * It follows the button's template, and holds no text of its own. The caller passes the XP as a
 * signal, and a function that wraps the formatted number in its unit, such as "1,250 XP". The number
 * is formatted by `Intl.NumberFormat` in the caller's locale.
 *
 * - **Counting:** a new value counts from the shown one over the reward duration, one animation frame
 *   at a time. With reduced motion it shows the new value at once.
 * - **No shift:** the figures are tabular. A hidden copy of the larger end value sits in the same
 *   cell, so the counter keeps its width while it counts.
 * - **Announcing:** the counting number is hidden from screen readers. A visually hidden copy holds
 *   only the final value, and announces it politely.
 *
 * The number is `--c-text`, because the reward colour fails contrast as text. Only the star is amber.
 * A signal holds a listener for each counter that reads it, so a view makes its own signals.
 */
import "./xp-counter.css";
import { el } from "../dom";
import { icon } from "../icons/icons";
import { durationMs, prefersReducedMotion } from "../motion";
import type { Signal } from "../signal";

export interface XpCounterOptions {
  /** The learner's XP. */
  xp: Signal<number>;
  /** Wraps the formatted number into the text shown, such as "1,250 XP". The number alone when absent. */
  format?: (number: string, xp: number) => string;
  /** The locale that formats the number, the page's own when absent. */
  locale?: string;
}

/** An XP counter that follows its signal, counting up to each new value. */
export function xpCounter(options: XpCounterOptions): HTMLElement {
  const number = new Intl.NumberFormat(options.locale, { maximumFractionDigits: 0 });
  const text = (xp: number) => {
    const formatted = number.format(xp);
    return options.format ? options.format(formatted, xp) : formatted;
  };
  const shown = el("span", { class: "xp-counter__number", attrs: { "aria-hidden": "true" } });
  const sizer = el("span", { class: "xp-counter__sizer", attrs: { "aria-hidden": "true" } });
  const live = el("span", { class: "xp-counter__live", attrs: { "aria-live": "polite", "aria-atomic": "true" } });
  const star = icon("star");
  const node = el("span", {
    class: "xp-counter",
    children: [star, el("span", { class: "xp-counter__cell", children: [sizer, shown] }), live],
  });

  let current = options.xp.get();
  let frame = 0;
  shown.textContent = text(current);
  sizer.textContent = text(current);
  live.textContent = text(current);

  options.xp.subscribe((target) => {
    cancelAnimationFrame(frame);
    live.textContent = text(target);
    const from = current;
    if (prefersReducedMotion() || from === target) {
      current = target;
      shown.textContent = sizer.textContent = text(target);
      return;
    }
    sizer.textContent = text(Math.max(from, target));
    const duration = durationMs("reward");
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      current = t === 1 ? target : Math.round(from + (target - from) * eased);
      shown.textContent = text(current);
      if (t < 1) {
        frame = requestAnimationFrame(step);
        return;
      }
      sizer.textContent = text(target);
    };
    frame = requestAnimationFrame(step);
  });
  return node;
}
