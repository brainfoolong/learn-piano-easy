/**
 * Progress: how far a learner is through something, as a bar, a ring or a row of steps.
 *
 * It follows the button's template. It takes typed options, holds no text of its own, and keeps its
 * kind in a `data-` attribute. A value that changes on its own arrives as a signal.
 *
 * - **Bar:** a label, its value as a percentage, and a track that the fill crosses. It fills its
 *   parent's width. The fill moves by `transform` alone, and jumps with reduced motion.
 * - **Ring:** a circle that fills clockwise from the top, with the percentage inside and the label
 *   below. Its arc is an SVG stroke, so it changes without a transition to keep motion to `transform`.
 * - **Steps:** a labelled list of named steps. A done step shows a check, the current one carries
 *   `aria-current`, and the rest wait. A done step's check carries the caller's name for done.
 *   The steps stand in a column, and in a row once their own width allows.
 *
 * A bar and a ring are a `progressbar` from 0 to 100, named by their visible label. Their text is in
 * `--c-text` and `--c-text-soft`, and only the fill takes the brand or success colour. A signal holds a
 * listener for each part that reads it, so a view makes its own signals.
 */
import "./progress.css";
import { el } from "../dom";
import { icon } from "../icons/icons";
import type { Signal } from "../signal";

/** The colour of a fill: the brand by default, or success for what a learner finished. */
export type ProgressTone = "brand" | "success";

export interface ProgressBarOptions {
  /** The visible label, which is also the accessible name. */
  label: string;
  /** How far, from 0 to 1, or a signal of it. A value outside is clamped. */
  value: number | Signal<number>;
  /** The locale that formats the percentage, the page's own when absent. */
  locale?: string;
  /** `brand` when absent. */
  tone?: ProgressTone;
}

export type ProgressRingOptions = ProgressBarOptions;

export interface ProgressStepsOptions {
  /** The visible label of the whole list, which is also its accessible name. */
  label: string;
  /** The name of each step, in order. */
  steps: string[];
  /** How many steps are done, or a signal of it. The step at this index is the current one. */
  done: number | Signal<number>;
  /** The accessible name of a done step's check, such as "Done". */
  doneLabel: string;
  /** The locale that formats each step's number, the page's own when absent. */
  locale?: string;
}

let nextId = 0;

/** A fresh id for a label, so a progress part can name itself by it. */
function labelId(): string {
  nextId += 1;
  return `progress-label-${nextId}`;
}

/** Calls `apply` with a value now, and again on each change when it is a signal. */
function follow(value: number | Signal<number>, apply: (value: number) => void): void {
  if (typeof value === "number") {
    apply(value);
    return;
  }
  apply(value.get());
  value.subscribe(apply);
}

/** A value clamped to the range from 0 to 1, with anything not a number as 0. */
function clamp(value: number): number {
  return Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
}

/** Writes a fraction to a progressbar's ARIA values and returns its percentage as text. */
function setAria(node: HTMLElement, fraction: number, percent: Intl.NumberFormat): string {
  const text = percent.format(fraction);
  node.setAttribute("aria-valuenow", String(Math.round(fraction * 100)));
  node.setAttribute("aria-valuetext", text);
  return text;
}

/** The ARIA attributes a progressbar starts with, named by its label. */
function barAttrs(kind: string, id: string, tone: ProgressTone | undefined): Record<string, string> {
  return {
    role: "progressbar",
    "aria-labelledby": id,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "data-kind": kind,
    "data-tone": tone ?? "brand",
  };
}

/** A progress bar with its label and percentage, filling its parent's width. */
export function progressBar(options: ProgressBarOptions): HTMLElement {
  const id = labelId();
  const percent = new Intl.NumberFormat(options.locale, { style: "percent", maximumFractionDigits: 0 });
  const value = el("span", { class: "progress__value", attrs: { "aria-hidden": "true" } });
  const fill = el("span", { class: "progress__fill" });
  const node = el("div", {
    class: "progress",
    attrs: barAttrs("bar", id, options.tone),
    children: [
      el("div", {
        class: "progress__head",
        children: [el("span", { class: "progress__label", attrs: { id }, text: options.label }), value],
      }),
      el("span", { class: "progress__track", attrs: { "aria-hidden": "true" }, children: [fill] }),
    ],
  });
  follow(options.value, (raw) => {
    const fraction = clamp(raw);
    value.textContent = setAria(node, fraction, percent);
    fill.style.transform = `scaleX(${fraction})`;
  });
  return node;
}

const SVG = "http://www.w3.org/2000/svg";

/** An SVG circle of the ring, with a path length of 100 so its dashes read as percentages. */
function circle(className: string): SVGCircleElement {
  const node = document.createElementNS(SVG, "circle");
  const attrs = { class: className, cx: "20", cy: "20", r: "17", pathLength: "100" };
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  return node;
}

/** A progress ring with its percentage inside and its label below. */
export function progressRing(options: ProgressRingOptions): HTMLElement {
  const id = labelId();
  const percent = new Intl.NumberFormat(options.locale, { style: "percent", maximumFractionDigits: 0 });
  const svg = document.createElementNS(SVG, "svg");
  svg.setAttribute("class", "progress__circle");
  svg.setAttribute("viewBox", "0 0 40 40");
  svg.setAttribute("aria-hidden", "true");
  const arc = circle("progress__arc");
  svg.append(circle("progress__groove"), arc);
  const value = el("span", { class: "progress__value", attrs: { "aria-hidden": "true" } });
  const node = el("div", {
    class: "progress",
    attrs: barAttrs("ring", id, options.tone),
    children: [
      el("div", { class: "progress__dial", children: [svg, value] }),
      el("span", { class: "progress__label", attrs: { id }, text: options.label }),
    ],
  });
  follow(options.value, (raw) => {
    const fraction = clamp(raw);
    value.textContent = setAria(node, fraction, percent);
    arc.setAttribute("stroke-dasharray", `${fraction * 100} 100`);
    arc.toggleAttribute("data-empty", fraction === 0);
  });
  return node;
}

/** A labelled list of steps, each done, current or waiting. */
export function progressSteps(options: ProgressStepsOptions): HTMLElement {
  const id = labelId();
  const number = new Intl.NumberFormat(options.locale);
  const items = options.steps.map((name, index) => {
    const marker = el("span", { class: "progress__marker" });
    const item = el("li", {
      class: "progress__step",
      children: [marker, el("span", { class: "progress__name", text: name })],
    });
    return { item, marker, index };
  });
  const node = el("div", {
    class: "progress",
    attrs: { "data-kind": "steps" },
    children: [
      el("span", { class: "progress__label", attrs: { id }, text: options.label }),
      el("ol", { class: "progress__steps", attrs: { "aria-labelledby": id }, children: items.map(({ item }) => item) }),
    ],
  });
  follow(options.done, (raw) => {
    const done = Number.isFinite(raw) ? Math.round(raw) : 0;
    for (const { item, marker, index } of items) {
      const state = index < done ? "done" : index === done ? "current" : "waiting";
      if (item.dataset.state === state) continue;
      item.dataset.state = state;
      if (state === "current") item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
      marker.replaceChildren(
        state === "done"
          ? icon("check", { label: options.doneLabel })
          : el("span", { attrs: { "aria-hidden": "true" }, text: number.format(index + 1) }),
      );
    }
  });
  return node;
}
