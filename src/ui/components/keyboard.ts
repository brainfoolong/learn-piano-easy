/**
 * The keyboard: a 2D piano of any range, drawn as SVG, with marked keys, names, fingers and presses.
 *
 * It follows the button's template. It takes typed options, holds no text of its own, and reports
 * through callbacks. What changes on its own, such as the marks or the keys held, arrives as a signal.
 *
 * - **Where the keys sit:** `layoutKeys` of `src/render/key-layout.ts` places them, as it does for the
 *   3D piano, so a key leans the same way on both. One white key is `WHITE_WIDTH` user units wide.
 *   The SVG fills its parent's width and keeps its aspect, so a wide range has narrow keys.
 * - **Marks:** a key is marked `next`, `correct` or `mistake`. A white key takes a tint of the mark's
 *   colour, and a black key its full colour, so a name on a white key keeps its contrast.
 * - **Names:** none, every C, or every white key. A C shows its octave, and the other keys show none.
 *   A name is written by `nameOf`, and the drawing is `translate="no"`, since a letter is no message.
 * - **Fingers:** a band above the keys shows each finger number in a ring of its key's mark colour.
 *   The band is there whenever `fingers` is given, so a change of fingers moves nothing.
 * - **Reach:** a thin bar in a band under the keys spans the keys the computer keyboard plays. It marks
 *   a span, never a key, so it gives no answer away. The band is there whenever `reach` is given, so the
 *   bar coming and going moves nothing.
 * - **Presses:** a held key sinks and darkens. A key is held when the `pressed` signal holds it, or
 *   while a pointer holds it down. The motion is a `transform`, and it jumps with reduced motion.
 * - **Pointer and touch:** with `onPress` given, each pointer presses the key under it, several at
 *   once, and a pointer that slides moves to the key it reaches. The keyboard then takes every touch,
 *   so the page does not scroll under a playing finger.
 * - **Screen readers:** the drawing is hidden from them. The keyboard is a group named by `label`,
 *   and a polite live text names every marked key with its mark and finger, by `describeMarks` of
 *   `src/ui/mark.ts`.
 *
 * The keys are no focus stops, since a learner plays on a MIDI or a computer keyboard. The pointer is
 * one more way in, never the only one.
 */
import "./keyboard.css";
import { FULL_RANGE, type KeyRange, layoutKeys } from "../../render/key-layout";
import type { KeyNames } from "../../render/piano-keys";
import { noteName } from "../../theory/note-names";
import { el } from "../dom";
import { describeMarks, type Mark } from "../mark";
import type { Signal } from "../signal";

export type { KeyNames };

/** A white key's width, in user units. */
export const WHITE_WIDTH = 24;
/** A white key's length, in user units. */
export const WHITE_LENGTH = 112;
/** A black key's length, in user units. */
export const BLACK_LENGTH = 70;
/** The band of finger numbers above the keys, in user units. */
export const FINGER_BAND = 24;
/** The band under the keys that marks the computer keyboard's reach, in user units. */
export const REACH_BAND = 10;

export interface KeyboardOptions {
  /** The accessible name of the whole keyboard. */
  label: string;
  /** The keys shown, widened to a white key at each end. The full 88 keys when absent. */
  range?: KeyRange;
  /** Each marked key's mark, or a signal of them. */
  marks?: ReadonlyMap<number, Mark> | Signal<ReadonlyMap<number, Mark>>;
  /** What a screen reader calls each mark, such as "Play next". Needed when `marks` is given. */
  markNames?: Readonly<Record<Mark, string>>;
  /** The finger, from 1 to 5, over each key that has one, or a signal of them. */
  fingers?: ReadonlyMap<number, number> | Signal<ReadonlyMap<number, number>>;
  /** What a screen reader says for a finger, such as "finger 1". */
  fingerName?: (finger: number) => string;
  /** Which keys show their name. `none` when absent. */
  names?: KeyNames;
  /** A key's name, `C4` and `F♯4` when absent. */
  nameOf?: (pitch: number) => string;
  /** The keys held from outside, such as a MIDI keyboard's. */
  pressed?: Signal<ReadonlySet<number>>;
  /** The keys the computer keyboard reaches, marked by a bar under them. No bar while it is undefined. */
  reach?: Signal<KeyRange | undefined>;
  /** Called when a pointer presses a key. Without it, the keyboard only shows. */
  onPress?: (pitch: number) => void;
  /** Called when a pointer lets a key go. */
  onRelease?: (pitch: number) => void;
}

/** One key's box, in user units. */
export interface KeyBox {
  pitch: number;
  black: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

/** The keyboard's drawing: its size and every key's box, white keys first, in user units. */
export interface KeyboardGeometry {
  range: KeyRange;
  width: number;
  height: number;
  /** The y where the keys start, below the finger band when there is one. */
  top: number;
  keys: KeyBox[];
}

/** The boxes of the keys of `range`, as `layoutKeys` places them, with room for fingers and the reach if asked. */
export function keyboardGeometry(range: KeyRange = FULL_RANGE, fingers = false, reach = false): KeyboardGeometry {
  const layout = layoutKeys(range);
  const top = fingers ? FINGER_BAND : 0;
  const box = (key: (typeof layout.keys)[number]): KeyBox => ({
    pitch: key.pitch,
    black: key.black,
    x: key.x * WHITE_WIDTH,
    y: top,
    width: key.width * WHITE_WIDTH,
    height: key.black ? BLACK_LENGTH : WHITE_LENGTH,
  });
  // White keys come first, so each black key draws over its neighbours and takes their pointer.
  const keys = [...layout.keys.filter((k) => !k.black), ...layout.keys.filter((k) => k.black)].map(box);
  return { range: layout.range, width: layout.width * WHITE_WIDTH, height: top + WHITE_LENGTH + (reach ? REACH_BAND : 0), top, keys };
}

/** The left edge and width of the shown keys within `reach`, in user units, or undefined when none is shown. */
export function reachSpan(geometry: KeyboardGeometry, reach: KeyRange): { x: number; width: number } | undefined {
  const inside = geometry.keys.filter((box) => box.pitch >= reach.first && box.pitch <= reach.last);
  if (inside.length === 0) return undefined;
  const x = Math.min(...inside.map((box) => box.x));
  return { x, width: Math.max(...inside.map((box) => box.x + box.width)) - x };
}

const SVG = "http://www.w3.org/2000/svg";

/** An SVG element with its attributes. */
function svgEl<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number>): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, String(value));
  return node;
}

/** Calls `apply` with a value now, and again on each change when it is a signal. */
function follow<T>(value: T | Signal<T> | undefined, fallback: T, apply: (value: T) => void): void {
  if (value === undefined) {
    apply(fallback);
    return;
  }
  if (typeof value === "object" && value !== null && "subscribe" in value && "get" in value) {
    const signal = value as Signal<T>;
    apply(signal.get());
    signal.subscribe(apply);
    return;
  }
  apply(value as T);
}

/** Whether `pitch` shows its name under `names`. */
function named(pitch: number, black: boolean, names: KeyNames): boolean {
  if (black || names === "none") return false;
  return names === "white" || pitch % 12 === 0;
}

/** A keyboard of `options.range`, filling its parent's width. */
export function keyboard(options: KeyboardOptions): HTMLElement {
  const hasFingers = options.fingers !== undefined;
  const geometry = keyboardGeometry(options.range, hasFingers, options.reach !== undefined);
  const names = options.names ?? "none";
  const nameOf = options.nameOf ?? ((pitch: number) => noteName(pitch));
  const plainName = options.nameOf ?? ((pitch: number) => noteName(pitch, { octave: pitch % 12 === 0 }));

  const svg = svgEl("svg", {
    class: "keyboard__drawing",
    viewBox: `0 0 ${geometry.width} ${geometry.height}`,
    "aria-hidden": "true",
    translate: "no",
  });
  const keys = new Map<number, SVGGElement>();
  const rings = new Map<number, { ring: SVGGElement; text: SVGTextElement }>();
  for (const box of geometry.keys) {
    const group = svgEl("g", { class: "keyboard__key", "data-pitch": box.pitch, "data-black": String(box.black) });
    group.append(svgEl("rect", { x: box.x, y: box.y, width: box.width, height: box.height, rx: box.black ? 3 : 4 }));
    if (named(box.pitch, box.black, names)) {
      const text = svgEl("text", { class: "keyboard__name", x: box.x + box.width / 2, y: box.y + box.height - 8 });
      text.textContent = plainName(box.pitch);
      group.append(text);
    }
    svg.append(group);
    keys.set(box.pitch, group);
    if (hasFingers) {
      const ring = svgEl("g", { class: "keyboard__finger", "data-pitch": box.pitch, hidden: "" });
      const middle = box.x + box.width / 2;
      ring.append(svgEl("circle", { cx: middle, cy: FINGER_BAND / 2, r: Math.min(10, WHITE_WIDTH / 2 - 1) }));
      const text = svgEl("text", { x: middle, y: FINGER_BAND / 2 });
      ring.append(text);
      svg.append(ring);
      rings.set(box.pitch, { ring, text });
    }
  }

  if (options.reach) {
    const bar = svgEl("rect", { class: "keyboard__reach", y: geometry.top + WHITE_LENGTH + 4, height: REACH_BAND - 6, rx: 2, hidden: "" });
    svg.append(bar);
    follow(options.reach, undefined, (reach) => {
      const span = reach === undefined ? undefined : reachSpan(geometry, reach);
      bar.toggleAttribute("hidden", reach === undefined || span === undefined);
      if (reach === undefined || span === undefined) return;
      bar.setAttribute("x", String(span.x + 2));
      bar.setAttribute("width", String(Math.max(0, span.width - 4)));
      bar.setAttribute("data-first", String(reach.first));
      bar.setAttribute("data-last", String(reach.last));
    });
  }

  const live = el("p", { class: "keyboard__live", attrs: { "aria-live": "polite" } });
  const node = el("div", {
    class: "keyboard",
    attrs: { role: "group", "aria-label": options.label, "data-interactive": String(options.onPress !== undefined) },
    children: [svg, live],
  });

  let marks: ReadonlyMap<number, Mark> = new Map();
  let fingers: ReadonlyMap<number, number> = new Map();
  const describe = () => {
    live.textContent = options.markNames ? describeMarks(marks, options.markNames, nameOf, fingers, options.fingerName) : "";
  };
  follow(options.marks, new Map(), (value) => {
    marks = value;
    for (const [pitch, group] of keys) {
      const mark = value.get(pitch);
      if (mark === undefined) group.removeAttribute("data-mark");
      else group.setAttribute("data-mark", mark);
      const finger = rings.get(pitch);
      if (finger && mark !== undefined) finger.ring.setAttribute("data-mark", mark);
      else finger?.ring.removeAttribute("data-mark");
    }
    describe();
  });
  if (hasFingers) {
    follow(options.fingers, new Map(), (value) => {
      fingers = value;
      for (const [pitch, { ring, text }] of rings) {
        const finger = value.get(pitch);
        ring.toggleAttribute("hidden", finger === undefined);
        text.textContent = finger === undefined ? "" : String(finger);
      }
      describe();
    });
  }

  // A key is held while the outside holds it or a pointer does.
  let outside: ReadonlySet<number> = new Set();
  const byPointer = new Map<number, number>();
  const paint = () => {
    const held = new Set([...outside, ...byPointer.values()]);
    for (const [pitch, group] of keys) group.toggleAttribute("data-pressed", held.has(pitch));
  };
  if (options.pressed) {
    follow(options.pressed, new Set(), (value) => {
      outside = value;
      paint();
    });
  }

  if (options.onPress) listenToPointers(svg, byPointer, options.onPress, options.onRelease, paint);
  return node;
}

/** The pitch of the key at a point of the page, or undefined off the keys. */
function pitchAt(x: number, y: number): number | undefined {
  const key = document.elementFromPoint(x, y)?.closest(".keyboard__key");
  return key ? Number(key.getAttribute("data-pitch")) : undefined;
}

/** Presses and lets go of keys as each pointer goes down on, slides over and leaves `svg`. */
function listenToPointers(
  svg: SVGSVGElement,
  held: Map<number, number>,
  onPress: (pitch: number) => void,
  onRelease: ((pitch: number) => void) | undefined,
  paint: () => void,
): void {
  const release = (pointer: number) => {
    const pitch = held.get(pointer);
    if (pitch === undefined) return;
    held.delete(pointer);
    paint();
    onRelease?.(pitch);
  };
  const press = (pointer: number, pitch: number) => {
    held.set(pointer, pitch);
    paint();
    onPress(pitch);
  };
  // The pointers down, which may slide off the keys and back on.
  const down = new Set<number>();
  svg.addEventListener("pointerdown", (event) => {
    const pitch = pitchAt(event.clientX, event.clientY);
    if (pitch === undefined) return;
    event.preventDefault();
    svg.setPointerCapture(event.pointerId);
    down.add(event.pointerId);
    release(event.pointerId);
    press(event.pointerId, pitch);
  });
  svg.addEventListener("pointermove", (event) => {
    if (!down.has(event.pointerId)) return;
    const pitch = pitchAt(event.clientX, event.clientY);
    if (pitch === held.get(event.pointerId)) return;
    release(event.pointerId);
    if (pitch !== undefined) press(event.pointerId, pitch);
  });
  for (const type of ["pointerup", "pointercancel", "lostpointercapture"] as const) {
    svg.addEventListener(type, (event) => {
      down.delete(event.pointerId);
      release(event.pointerId);
    });
  }
}
