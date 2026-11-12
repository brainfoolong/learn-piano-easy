/**
 * The colour picker: a swatch that opens a popover with hue, saturation, value and alpha, and a hex field.
 *
 * Decisions, and what each costs:
 * - It is our own, with no library. A square picks saturation across and value up, and two strips pick
 *   hue and alpha. The square and strips are CSS gradients, so nothing is drawn to a canvas.
 * - It reads and writes `#rrggbbaa` in lower-case hex, the shape the settings store keeps.
 * - It holds the colour as hue, saturation, value and alpha while open. A grey then keeps the hue the
 *   learner chose, which a round trip through hex would lose. `set` re-reads only a different colour.
 * - It reports on every move of a drag, so the scene follows live. The store then saves on each move,
 *   which costs one small `localStorage` write per frame of the drag.
 * - The square and strips are sliders for a keyboard: the arrows move them in steps, and Escape closes.
 *
 * Bounds: the hex field takes six or eight hex digits, with or without `#`. Anything else snaps back.
 */

import type { Control } from "./controls";
import { el } from "./dom";
import "./color-picker.css";

/** A colour as hue in degrees from 0 to 360, and saturation, value and alpha from 0 to 1. */
export interface Hsva {
  h: number;
  s: number;
  v: number;
  a: number;
}

const HEX = /^#?([0-9a-f]{6}|[0-9a-f]{8})$/i;

/** `text` as a colour, or `null` when it is not six or eight hex digits. */
export function parseHex(text: string): Hsva | null {
  const match = HEX.exec(text.trim());
  if (!match?.[1]) return null;
  const digits = match[1];
  const byte = (i: number) => parseInt(digits.slice(i, i + 2), 16) / 255;
  const [r, g, b] = [byte(0), byte(2), byte(4)];
  const a = digits.length === 8 ? byte(6) : 1;
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  let h = 0;
  if (d > 0) {
    if (max === r) h = 60 * (((g - b) / d) % 6);
    else if (max === g) h = 60 * ((b - r) / d + 2);
    else h = 60 * ((r - g) / d + 4);
    if (h < 0) h += 360;
  }
  return { h, s: max === 0 ? 0 : d / max, v: max, a };
}

/** The red, green and blue of a colour, each from 0 to 1. */
function toRgb({ h, s, v }: Hsva): [number, number, number] {
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
  };
  return [f(5), f(3), f(1)];
}

/** A colour as `#rrggbbaa` in lower-case hex. */
export function formatHex(colour: Hsva): string {
  const hex = (x: number) => Math.round(Math.min(1, Math.max(0, x)) * 255).toString(16).padStart(2, "0");
  const [r, g, b] = toRgb(colour);
  return `#${hex(r)}${hex(g)}${hex(b)}${hex(colour.a)}`;
}

/** Calls `move` with the pointer's place in `area`, each from 0 to 1, while a press drags over it. */
function onDrag(area: HTMLElement, move: (x: number, y: number) => void): void {
  const report = (event: PointerEvent) => {
    const box = area.getBoundingClientRect();
    const x = box.width > 0 ? (event.clientX - box.left) / box.width : 0;
    const y = box.height > 0 ? (event.clientY - box.top) / box.height : 0;
    move(Math.min(1, Math.max(0, x)), Math.min(1, Math.max(0, y)));
  };
  area.addEventListener("pointerdown", (event) => {
    area.setPointerCapture(event.pointerId);
    area.focus();
    report(event);
  });
  area.addEventListener("pointermove", (event) => {
    if (area.hasPointerCapture(event.pointerId)) report(event);
  });
}

/** The change in x and y an arrow key asks for, or `null` for any other key. */
function arrowOf(event: KeyboardEvent): [number, number] | null {
  const step = event.shiftKey ? 0.1 : 0.01;
  switch (event.key) {
    case "ArrowLeft":
      return [-step, 0];
    case "ArrowRight":
      return [step, 0];
    case "ArrowUp":
      return [0, step];
    case "ArrowDown":
      return [0, -step];
    default:
      return null;
  }
}

/** A colour picker for `#rrggbbaa` values, named `name` for a screen reader. */
export function colorPicker(name: string, value: string, onChange: (value: string) => void): Control<string> {
  let colour = parseHex(value) ?? { h: 0, s: 0, v: 0, a: 1 };
  let shown = formatHex(colour);

  const fill = el("span", { class: "swatch-fill" });
  const swatch = el("button", {
    class: "swatch",
    attrs: { type: "button", "aria-label": name, "aria-haspopup": "dialog", "aria-expanded": "false" },
    children: [fill],
    on: { click: () => (popover.hidden ? open() : close()) },
  });

  const slider = (label: string, cls: string, children: Node[]) =>
    el("div", { class: cls, attrs: { role: "slider", tabindex: "0", "aria-label": label }, children });
  const squareThumb = el("div", { class: "picker-thumb" });
  const square = slider("Saturation and brightness", "sv-square", [squareThumb]);
  const hueThumb = el("div", { class: "picker-thumb" });
  const hue = slider("Hue", "hue-strip", [hueThumb]);
  const alphaThumb = el("div", { class: "picker-thumb" });
  const alphaFill = el("div", { class: "alpha-fill" });
  const alpha = slider("Opacity", "alpha-strip", [alphaFill, alphaThumb]);
  const field = el("input", {
    class: "hex",
    attrs: { type: "text", "aria-label": `${name}, hex`, maxlength: "9", spellcheck: "false", "data-control": "text" },
    on: {
      change: () => {
        const parsed = parseHex(field.value);
        if (parsed === null) render();
        else update(parsed);
      },
    },
  });
  const popover = el("div", {
    class: "colour-popover",
    attrs: { role: "dialog", "aria-label": name },
    props: { hidden: true },
    children: [square, hue, alpha, field],
  });

  /** Shows `colour` in every part of the picker. */
  function render(): void {
    const hex = formatHex(colour);
    const opaque = hex.slice(0, 7);
    fill.style.background = hex;
    square.style.background = `hsl(${colour.h} 100% 50%)`;
    squareThumb.style.left = `${colour.s * 100}%`;
    squareThumb.style.top = `${(1 - colour.v) * 100}%`;
    hueThumb.style.left = `${(colour.h / 360) * 100}%`;
    alphaFill.style.background = `linear-gradient(to right, ${opaque}00, ${opaque})`;
    alphaThumb.style.left = `${colour.a * 100}%`;
    square.setAttribute("aria-valuetext", `saturation ${Math.round(colour.s * 100)}%, brightness ${Math.round(colour.v * 100)}%`);
    hue.setAttribute("aria-valuetext", `${Math.round(colour.h)} degrees`);
    alpha.setAttribute("aria-valuetext", `${Math.round(colour.a * 100)}%`);
    field.value = hex;
  }

  /** Takes `next` as the colour, shows it, and reports it when its hex changed. */
  function update(next: Hsva): void {
    colour = next;
    render();
    const hex = formatHex(colour);
    if (hex === shown) return;
    shown = hex;
    onChange(hex);
  }

  const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
  onDrag(square, (x, y) => update({ ...colour, s: x, v: 1 - y }));
  onDrag(hue, (x) => update({ ...colour, h: x * 360 }));
  onDrag(alpha, (x) => update({ ...colour, a: x }));
  square.addEventListener("keydown", (event) => {
    const arrow = arrowOf(event);
    if (arrow === null) return;
    event.preventDefault();
    update({ ...colour, s: clamp01(colour.s + arrow[0]), v: clamp01(colour.v + arrow[1]) });
  });
  hue.addEventListener("keydown", (event) => {
    const arrow = arrowOf(event);
    if (arrow === null) return;
    event.preventDefault();
    update({ ...colour, h: Math.min(360, Math.max(0, colour.h + (arrow[0] + arrow[1]) * 360)) });
  });
  alpha.addEventListener("keydown", (event) => {
    const arrow = arrowOf(event);
    if (arrow === null) return;
    event.preventDefault();
    update({ ...colour, a: clamp01(colour.a + arrow[0] + arrow[1]) });
  });

  const root = el("div", { class: "colour-picker", children: [swatch, popover] });

  const outside = (event: PointerEvent) => {
    if (!root.contains(event.target as Node)) close();
  };
  function open(): void {
    popover.hidden = false;
    swatch.setAttribute("aria-expanded", "true");
    document.addEventListener("pointerdown", outside);
  }
  function close(): void {
    popover.hidden = true;
    swatch.setAttribute("aria-expanded", "false");
    document.removeEventListener("pointerdown", outside);
  }
  popover.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    event.stopPropagation();
    close();
    swatch.focus();
  });

  render();
  return {
    element: root,
    set(next) {
      if (next === shown) return;
      const parsed = parseHex(next);
      if (parsed === null) return;
      colour = parsed;
      shown = formatHex(parsed);
      render();
    },
  };
}
