/**
 * The piano view: the player's 3D piano alone, framed for a page, with marks, names, fingers and a reach.
 *
 * A lesson step, the setup check and the gallery show their keys through it. It takes the options the
 * 2D keyboard took, holds no text but its fallback, and reports a pointer's presses through callbacks.
 *
 * Decisions, and what each costs:
 * - **One piano.** It frames `createPiano` of `src/render/piano.ts`, lit by `src/render/lights.ts`, so a
 *   learner sees the player's piano. It has no notes, lanes, glow, particles, fog or settings store, so
 *   it holds one renderer, one camera rig and one piano.
 * - **The camera is the rig's flat preset** of `src/render/cameras.ts`, as the landing page's players
 *   use it. It looks straight down without perspective, the keys span the box from edge to edge, and it
 *   ignores drags. A key's top face is then a rectangle on screen, so the key map is plain maths. The
 *   cost is that the case's cheeks fall outside the picture, and the keys show no depth.
 * - **The height follows the width.** The view sets its CSS `aspect-ratio` to the frame's, so the page
 *   lays it out before a frame draws and nothing shifts. A `ResizeObserver` sizes the canvas to the box.
 *   The rig keeps the keys' width and the piano's front edge, so a box of another shape shows more or
 *   less above the keys, and a key never stretches. `flatView` says where the frame then sits.
 * - **The frame** runs from the felt behind the keys to the front rail under them. With `fingers` given
 *   it adds a band above the felt, and the band stays while the option does.
 * - **Reconfigured, never rebuilt.** `show` takes new options and drops the last ones' subscriptions. A
 *   new range lays the piano out again and reframes the camera in the same WebGL context.
 * - **A mark tints its key** through the piano's incoming tint, in the token colour `MARK_TOKENS` names,
 *   by the share `MARK_STRENGTH` gives it. That share is far above the player's, so each mark reads in
 *   both themes. The colours are read from the page's CSS at the next frame, and again when the site's
 *   theme or the colour scheme changes. A held key presses in the player's input colours, over any tint.
 * - **Names** are the player's key labels, from `keyNameText` or from `nameOf`: `c` names every C and
 *   `white` every white key, with the octave on C only. **A finger** is a digit in a ring of its key's
 *   mark colour, in the band above the keys: a white key's in the row nearer the keys, a black key's in
 *   the row behind it, so two neighbours never overlap. **The reach** is a thin bar on the front rail,
 *   under the white keys' front edge. A name and the reach sit within the piano's own frame, so their
 *   coming and going moves nothing.
 * - **The pointer** plays through `src/input/pointer-piano.ts` and the piano's `keyAt`, by the player's
 *   rules. With `onPress` given, the canvas takes every touch, so the page does not scroll under a hand.
 * - **A frame draws only when the picture can differ:** an option, a held key, a resize, a theme change,
 *   or a key's spring or flash. A still view costs no render. The pixel ratio is capped at 2.
 * - **The key map** is an `aria-hidden` layer of one empty span per key, over its key's top face. It is
 *   the test seam: each span carries `data-pitch` and mirrors `data-mark`, `data-held` and `data-finger`.
 *   A span's place is a share of the frame, set on a new range. A resize moves only the layer. The view
 *   carries the range as `data-first` and `data-last`. While the bar shows, it carries the whole reach
 *   as `data-reach-first` and `data-reach-last`, even where the bar stops at the shown keys' edge.
 * - **Screen readers** hear a group named by `label`, and a polite live text naming each marked key.
 * - **Without WebGL** the view shows the catalog's `ui.pianoKeys.noWebgl` where the canvas would be. The
 *   key map, its attributes and the live text still follow the options.
 *
 * Bounds: one WebGL context per view until `dispose`. A page holds about 16, so a page shows few views.
 * The ring sprites number the most fingers shown at once.
 */
import "./piano-keys.css";
import {
  BoxGeometry,
  CanvasTexture,
  Color,
  Group,
  Mesh,
  MeshBasicMaterial,
  Raycaster,
  Scene,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
} from "three";

import { localize } from "../i18n/live";
import { attachPointerPiano } from "../input/pointer-piano";
import { createCameraRig } from "./cameras";
import { defaults } from "../settings/schema";
import { noteName } from "../theory/note-names";
import { el } from "../ui/dom";
import { describeMarks, type Mark, MARKS } from "../ui/mark";
import type { Signal } from "../ui/signal";
import { KEY_LABEL_HEIGHT, KEY_NAME_INSET, keyNameText } from "./key-labels";
import { FULL_RANGE, isBlack, type KeyLayout, type KeyRange, layoutKeys } from "./key-layout";
import { createLabelLayer } from "./labels";
import { pianoLights } from "./lights";
import { createPiano } from "./piano";
import { BLACK_KEY_LENGTH, WHITE_KEY_LENGTH } from "./piano-geometry";

/** Which keys carry their name. */
export type KeyNames = "none" | "c" | "white";

export interface PianoKeysOptions {
  /** The accessible name of the whole piano. */
  label: string;
  /** The keys shown, widened to a white key at each end. The full 88 keys when absent. */
  range?: KeyRange;
  /** Each marked key's mark, or a signal of them. */
  marks?: ReadonlyMap<number, Mark> | Signal<ReadonlyMap<number, Mark>>;
  /** What a screen reader calls each mark, such as "Play next". Needed when `marks` is given. */
  markNames?: Readonly<Record<Mark, string>>;
  /** The finger, from 1 to 5, on each key that has one, or a signal of them. */
  fingers?: ReadonlyMap<number, number> | Signal<ReadonlyMap<number, number>>;
  /** What a screen reader says for a finger, such as "finger 1". */
  fingerName?: (finger: number) => string;
  /** Which keys show their name. `none` when absent. */
  names?: KeyNames;
  /** A key's name, `C4` and `F♯4` when absent. */
  nameOf?: (pitch: number) => string;
  /** The keys held from outside, such as a MIDI keyboard's. */
  pressed?: Signal<ReadonlySet<number>>;
  /** The keys the computer keyboard reaches, marked by a bar in front of them. No bar while it is undefined. */
  reach?: Signal<KeyRange | undefined>;
  /** Called when a pointer presses a key. Without it, the piano only shows. */
  onPress?: (pitch: number) => void;
  /** Called when a pointer lets a key go. */
  onRelease?: (pitch: number) => void;
}

/** A piano view, which a page shows with options again and again, and frees once. */
export interface PianoKeys {
  /** The view's box, which fills its parent's width. */
  readonly element: HTMLElement;
  /** Shows the keys as `options` say, in place of the last options. */
  show(options: PianoKeysOptions): void;
  /** Frees the WebGL context and every listener, lets go every key a pointer holds, and removes `element`. */
  dispose(): void;
}

/**
 * The CSS token whose colour each mark takes. A right key takes the vivid green, which fills shapes,
 * since the light theme's text green is too dark to read as green on a key.
 */
export const MARK_TOKENS: Readonly<Record<Mark, string>> = { next: "--c-brand", correct: "--c-success-vivid", mistake: "--c-mistake" };

/** How much of its colour each mark gives its key. A weak tint reads as grey on a white key. */
export const MARK_STRENGTH: Readonly<Record<Mark, number>> = { next: 0.75, correct: 0.8, mistake: 0.85 };

/** Each mark's colour, as `read` gives the colour of a CSS token. */
export function markColors(read: (token: string) => string): Record<Mark, string> {
  const colors = {} as Record<Mark, string>;
  for (const mark of MARKS) colors[mark] = read(MARK_TOKENS[mark]);
  return colors;
}

/**
 * A rectangle the camera sees from straight above, in world units: x to the right, and y up the screen.
 * Up the screen is away from the player, so y is -z.
 */
export interface Frame {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

/** How far behind the keys' back edge the frame starts, so the felt shows. */
const FELT_ROOM = 0.35;
/** How far past the white keys' front edge the frame ends, so the front rail shows under them. */
const RAIL_ROOM = 0.6;
/** A finger ring's size, and the gap before each row of rings, in world units. */
const RING_SIZE = 0.62;
const RING_GAP = 0.08;
/** The band above the felt that holds the rings: a row for the white keys, and a row behind it for the black. */
const FINGER_ROOM = 2 * (RING_SIZE + RING_GAP);

/** The frame round the keys of `layout`, from the felt to the front rail, with the finger band when `fingers` holds. */
export function frameOf(layout: KeyLayout, fingers: boolean): Frame {
  return {
    left: -layout.width / 2,
    right: layout.width / 2,
    top: FELT_ROOM + (fingers ? FINGER_ROOM : 0),
    bottom: -(WHITE_KEY_LENGTH + RAIL_ROOM),
  };
}

/** A share of a frame, from its top left corner, as fractions of its width and height. */
export interface Share {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * What the rig's flat camera shows of `frame` in a box of `aspect`, its width over its height. The camera
 * keeps the frame's width and its bottom edge, so a box of another shape shows more or less above it.
 * Returns that view and where `frame` sits inside it, so the key map can follow.
 */
export function flatView(frame: Frame, aspect: number): { view: Frame; inset: Share } {
  const width = frame.right - frame.left;
  const height = frame.top - frame.bottom;
  if (!(aspect > 0)) return { view: frame, inset: { left: 0, top: 0, width: 1, height: 1 } };
  const shown = width / aspect;
  const view = { ...frame, top: frame.bottom + shown };
  return { view, inset: { left: 0, top: (view.top - frame.top) / shown, width: 1, height: height / shown } };
}

/** One key's span in the key map: its key's top face, as a share of the frame. */
export interface KeySpan extends Share {
  pitch: number;
  black: boolean;
}

/** The span of each key of `layout` over its top face, seen from straight above within `frame`. */
export function keySpans(layout: KeyLayout, frame: Frame): KeySpan[] {
  const width = frame.right - frame.left;
  const height = frame.top - frame.bottom;
  return layout.keys.map((rect) => {
    // The top face runs from the back edge at z = 0, which is y = 0, to `length` towards the player.
    const length = rect.black ? BLACK_KEY_LENGTH : WHITE_KEY_LENGTH;
    return {
      pitch: rect.pitch,
      black: rect.black,
      left: (rect.x - layout.width / 2 - frame.left) / width,
      top: frame.top / height,
      width: rect.width / width,
      height: length / height,
    };
  });
}

/** The shown keys within a reach: the first and the last, and their span in key units from the left edge. */
export interface ReachSpan {
  first: number;
  last: number;
  x: number;
  width: number;
}

/** The keys of `layout` within `reach`, or undefined when none of them is. */
export function reachSpan(layout: KeyLayout, reach: KeyRange): ReachSpan | undefined {
  const inside = layout.keys.filter((key) => key.pitch >= reach.first && key.pitch <= reach.last);
  if (inside.length === 0) return undefined;
  const x = Math.min(...inside.map((key) => key.x));
  return { first: inside[0]!.pitch, last: inside.at(-1)!.pitch, x, width: Math.max(...inside.map((key) => key.x + key.width)) - x };
}

/** How a name is written when `nameOf` is absent: white keys only, the octave on C only, sharps, letters. */
const NAME_STYLE = { white: true, black: false, flats: false, octave: "onlyC", system: "letters" } as const;
/** How far a label floats above its key's top, in world units, so it never cuts into the key. */
const LIFT = 0.02;
/** The most of its key's width a name takes. */
const LABEL_FILL = 0.95;
/** The z of the centre of each row of finger rings, by key colour: white nearer the keys, black behind. */
const RING_Z = { white: -(FELT_ROOM + RING_GAP + RING_SIZE / 2), black: -(FELT_ROOM + 2 * RING_GAP + (3 * RING_SIZE) / 2) } as const;
/** The height the rings float at, above every part of the piano, so nothing hides them. */
const RING_Y = 2;
/** The finger digit's height, as a share of its ring. */
const DIGIT_SHARE = 0.6;
/** How much nearer the camera a digit sits than its ring, so it draws over it. */
const DIGIT_NUDGE = 0.05;
/** The token of a ring on an unmarked key. */
const RING_TOKEN = "--c-text-soft";
/**
 * The reach bar on the front rail's top: its thickness along z, its centre's z and height, and how far
 * it stops short of its outer keys' edges, in world units.
 */
const REACH_DEPTH = 0.22;
const REACH_Z = WHITE_KEY_LENGTH + RAIL_ROOM / 2;
const REACH_Y = -0.3;
const REACH_INSET = 0.08;
/** The reach bar's colour. The case is the same dark lacquer in both themes, so one light grey reads on both. */
const REACH_COLOR = 0xc9c4d6;
/** A frame longer than this, such as the first after a still spell, is treated as this long. */
const MAX_FRAME = 0.05;

/** A ring of white on a dark disc, which a sprite's colour tints. */
function ringTexture(): CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (context) {
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2 - 10, 0, Math.PI * 2);
    context.fillStyle = "rgba(0, 0, 0, 0.6)";
    context.fill();
    context.lineWidth = 14;
    context.strokeStyle = "#ffffff";
    context.stroke();
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

/** One pixel's canvas, which turns any CSS colour into `#rrggbb`. */
let swatch: CanvasRenderingContext2D | null | undefined;

/** The colour of the CSS token `token` where `probe` sits, as `#rrggbb`. */
function cssColor(probe: HTMLElement, token: string): string {
  probe.style.color = `var(${token})`;
  const value = getComputedStyle(probe).color;
  swatch ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!swatch) return value;
  swatch.clearRect(0, 0, 1, 1);
  swatch.fillStyle = value;
  swatch.fillRect(0, 0, 1, 1);
  const [r, g, b] = swatch.getImageData(0, 0, 1, 1).data;
  return `#${[r, g, b].map((part) => part!.toString(16).padStart(2, "0")).join("")}`;
}

/** Calls `apply` with a value now, and again on each change when it is a signal. Returns what stops it. */
function follow<T>(value: T | Signal<T> | undefined, fallback: T, apply: (value: T) => void): () => void {
  if (value === undefined) {
    apply(fallback);
    return () => {};
  }
  if (typeof value === "object" && value !== null && "subscribe" in value && "get" in value) {
    const signal = value as Signal<T>;
    apply(signal.get());
    return signal.subscribe(apply);
  }
  apply(value as T);
  return () => {};
}

const share = (part: number) => `${(part * 100).toFixed(4)}%`;

/** Places `node` at `place`, in shares of its parent. */
function placeAt(node: HTMLElement, place: Share): void {
  node.style.left = share(place.left);
  node.style.top = share(place.top);
  node.style.width = share(place.width);
  node.style.height = share(place.height);
}

/** A piano view of the full 88 keys, filling its parent's width, until `show` says otherwise. */
export function pianoKeys(): PianoKeys {
  const map = el("div", { class: "piano-keys__map", attrs: { "aria-hidden": "true" } });
  const probe = el("span", { class: "piano-keys__probe", attrs: { "aria-hidden": "true" } });
  const live = el("p", { class: "piano-keys__live", attrs: { "aria-live": "polite" } });
  const element = el("div", { class: "piano-keys", attrs: { role: "group", "data-interactive": "false" }, children: [map, probe, live] });

  let renderer: WebGLRenderer | undefined;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    renderer = undefined;
  }
  if (renderer) {
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.classList.add("piano-keys__canvas");
    renderer.domElement.setAttribute("aria-hidden", "true");
    element.prepend(renderer.domElement);
  } else {
    element.dataset.webgl = "off";
    element.prepend(localize(el("p", { class: "piano-keys__no-webgl" }), (messages) => messages.ui.pianoKeys.noWebgl));
  }

  const scene = new Scene();
  scene.add(...pianoLights());
  const piano = createPiano({ range: FULL_RANGE, flare: false, incomingTint: 1 });
  const labels = createLabelLayer();
  const rings = new Group();
  const ringMap = ringTexture();
  const ringPool: Sprite[] = [];
  const reachGeometry = new BoxGeometry(1, 0.04, REACH_DEPTH);
  const reachMaterial = new MeshBasicMaterial({ color: REACH_COLOR });
  const reachBar = new Mesh(reachGeometry, reachMaterial);
  reachBar.visible = false;
  scene.add(piano.group, rings, labels.group, reachBar);
  const rig = createCameraRig(renderer?.domElement ?? element, "flat");

  const input = defaults();
  const heldWhite = new Color(input.inputNoteColorWhite.slice(0, 7));
  const heldBlack = new Color(input.inputNoteColorBlack.slice(0, 7));
  const colors: Record<Mark, Color> = { next: new Color(), correct: new Color(), mistake: new Color() };
  const ringIdle = new Color();

  let options: PianoKeysOptions = { label: "" };
  let stops: (() => void)[] = [];
  let marks: ReadonlyMap<number, Mark> = new Map();
  let fingers: ReadonlyMap<number, number> = new Map();
  let outside: ReadonlySet<number> = new Set();
  let reach: KeyRange | undefined;
  /** How many pointers hold each key. */
  const byPointer = new Map<number, number>();
  /** The keys pressed on the piano now. */
  const pressedNow = new Set<number>();
  const spans = new Map<number, HTMLSpanElement>();
  /** The frame round the shown keys, whether it holds the finger band, and the box's width over its height. */
  let frame: Frame = { left: -1, right: 1, top: 1, bottom: -1 };
  let fingerBand = false;
  let aspect = 0;

  /** What the next frame must do first: read the colours, mark the keys, or place the labels. */
  let colorsStale = true;
  let marksStale = true;
  let labelsStale = true;
  let scheduled = 0;
  let last: number | undefined;
  let disposed = false;

  const invalidate = () => {
    if (scheduled === 0 && !disposed && renderer) scheduled = requestAnimationFrame(draw);
  };

  const readColors = () => {
    const read = (token: string) => cssColor(probe, token);
    const next = markColors(read);
    for (const mark of MARKS) colors[mark].set(next[mark]);
    ringIdle.set(read(RING_TOKEN));
  };

  /** Fits the flat camera to the frame and the box's shape, and the key map to the frame's place in the view. */
  const fit = () => {
    const halfWidth = (frame.right - frame.left) / 2;
    rig.setFrame({ halfWidth, keyHalfWidth: halfWidth, pianoFront: -frame.bottom, reverse: false, lift: 0, shift: 0 });
    if (aspect > 0) rig.setAspect(aspect);
    // The flat camera takes its place in `update`, which a pointer's ray needs before the next frame.
    rig.update(0, 0);
    rig.camera.updateMatrixWorld();
    placeAt(map, flatView(frame, aspect).inset);
  };

  /** Frames the piano's range, with the finger band when `fingerBand` holds, and lays the key map out for it. */
  const relayout = () => {
    const range = piano.layout.range;
    // A pointer's ray meets the keys where they are now, before the next frame draws them.
    piano.group.updateMatrixWorld(true);
    frame = frameOf(piano.layout, fingerBand);
    element.style.setProperty("--piano-keys-aspect", String((frame.right - frame.left) / (frame.top - frame.bottom)));
    element.dataset.first = String(range.first);
    element.dataset.last = String(range.last);
    fit();
    spans.clear();
    const nodes = keySpans(piano.layout, frame).map((span) => {
      const node = el("span", { class: "piano-keys__key", attrs: { "data-pitch": String(span.pitch) } });
      placeAt(node, span);
      spans.set(span.pitch, node);
      return node;
    });
    map.replaceChildren(...nodes);
    pressedNow.clear();
    marksStale = true;
    labelsStale = true;
  };

  /** Shows the keys of `range`, with the finger band when `band` holds. Lays out again only on a change. */
  const setRange = (range: KeyRange, band: boolean) => {
    const shown = layoutKeys(range).range;
    const now = piano.layout.range;
    const same = shown.first === now.first && shown.last === now.last;
    if (same && band === fingerBand) return;
    fingerBand = band;
    if (!same) piano.setRange(shown);
    relayout();
  };

  /** A ring sprite from the pool, made when the pool is short. */
  const ringAt = (index: number): Sprite => {
    let ring = ringPool[index];
    if (!ring) {
      ring = new Sprite(new SpriteMaterial({ map: ringMap, transparent: true, depthWrite: false }));
      ringPool.push(ring);
      rings.add(ring);
    }
    return ring;
  };

  /** Lays the names and the fingers over their keys. */
  const placeLabels = () => {
    const layout = piano.layout;
    const left = -layout.width / 2;
    const names = options.names ?? "none";
    labels.begin();
    for (const rect of layout.keys) {
      if (names === "none" || rect.black || (names === "c" && rect.pitch % 12 !== 0)) continue;
      const text = options.nameOf?.(rect.pitch) ?? keyNameText(rect.pitch, NAME_STYLE) ?? "";
      const z = WHITE_KEY_LENGTH - KEY_NAME_INSET.white;
      labels.push(text, left + rect.center, KEY_LABEL_HEIGHT / 2 + LIFT, z, KEY_LABEL_HEIGHT, rect.width * LABEL_FILL);
    }
    let used = 0;
    for (const [pitch, finger] of fingers) {
      const rect = layout.key(pitch);
      if (!rect) continue;
      const x = left + rect.center;
      const z = RING_Z[rect.black ? "black" : "white"];
      const ring = ringAt(used++);
      ring.position.set(x, RING_Y, z);
      ring.scale.set(RING_SIZE, RING_SIZE, 1);
      const mark = marks.get(pitch);
      ring.material.color.copy(mark === undefined ? ringIdle : colors[mark]);
      ring.visible = true;
      const digit = RING_SIZE * DIGIT_SHARE;
      labels.push(String(finger), x, RING_Y + DIGIT_NUDGE, z, digit, digit);
    }
    for (let i = used; i < ringPool.length; i++) ringPool[i]!.visible = false;
    labels.end();
  };

  const draw = (time: number) => {
    scheduled = 0;
    if (disposed || !renderer) return;
    if (colorsStale && element.isConnected) {
      colorsStale = false;
      readColors();
      marksStale = true;
      labelsStale = true;
    }
    if (marksStale) {
      marksStale = false;
      piano.clearIncoming();
      for (const [pitch, mark] of marks) piano.markIncoming(pitch, colors[mark], MARK_STRENGTH[mark]);
    }
    if (labelsStale) {
      labelsStale = false;
      placeLabels();
    }
    const seconds = last === undefined ? 1 / 60 : Math.min((time - last) / 1000, MAX_FRAME);
    const moving = piano.update(seconds);
    rig.update(seconds, time / 1000);
    if (aspect > 0) renderer.render(scene, rig.camera);
    // A key still moving draws the next frame too, and a still piano draws none.
    last = moving ? time : undefined;
    if (moving) invalidate();
  };

  /** Presses the keys held from outside or by a pointer, lets the rest go, and mirrors them on the key map. */
  const paintHeld = () => {
    const held = new Set([...outside, ...byPointer.keys()]);
    for (const pitch of [...pressedNow]) {
      if (held.has(pitch)) continue;
      piano.release(pitch);
      pressedNow.delete(pitch);
    }
    for (const pitch of held) {
      if (pressedNow.has(pitch)) continue;
      piano.press(pitch, isBlack(pitch) ? heldBlack : heldWhite);
      pressedNow.add(pitch);
    }
    for (const [pitch, span] of spans) span.toggleAttribute("data-held", held.has(pitch));
    invalidate();
  };

  const describe = () => {
    const nameOf = options.nameOf ?? ((pitch: number) => noteName(pitch));
    live.textContent = options.markNames ? describeMarks(marks, options.markNames, nameOf, fingers, options.fingerName) : "";
  };

  const placeReach = () => {
    const span = reach === undefined ? undefined : reachSpan(piano.layout, reach);
    reachBar.visible = span !== undefined;
    if (reach === undefined || span === undefined) {
      delete element.dataset.reachFirst;
      delete element.dataset.reachLast;
    } else {
      element.dataset.reachFirst = String(reach.first);
      element.dataset.reachLast = String(reach.last);
      reachBar.scale.x = Math.max(0.01, span.width - 2 * REACH_INSET);
      reachBar.position.set(span.x + span.width / 2 - piano.layout.width / 2, REACH_Y, REACH_Z);
    }
    invalidate();
  };

  const raycaster = new Raycaster();
  const ndc = new Vector2();
  const keyAt = (x: number, y: number): number | undefined => {
    const box = renderer?.domElement.getBoundingClientRect();
    if (!box || box.width === 0 || box.height === 0) return undefined;
    ndc.set(((x - box.left) / box.width) * 2 - 1, 1 - ((y - box.top) / box.height) * 2);
    raycaster.setFromCamera(ndc, rig.camera);
    return piano.keyAt(raycaster);
  };
  const stopPointer = renderer
    ? attachPointerPiano(
        { canvas: renderer.domElement, keyAt },
        {
          press(pitch) {
            byPointer.set(pitch, (byPointer.get(pitch) ?? 0) + 1);
            paintHeld();
            options.onPress?.(pitch);
          },
          release(pitch) {
            const count = (byPointer.get(pitch) ?? 1) - 1;
            if (count > 0) byPointer.set(pitch, count);
            else byPointer.delete(pitch);
            paintHeld();
            options.onRelease?.(pitch);
          },
          enabled: () => options.onPress !== undefined,
        },
      )
    : () => {};

  const resize = () => {
    const { clientWidth: width, clientHeight: height } = element;
    if (!renderer || width === 0 || height === 0) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    aspect = width / height;
    fit();
    invalidate();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(element);

  const onTheme = () => {
    colorsStale = true;
    invalidate();
  };
  const scheme = matchMedia("(prefers-color-scheme: dark)");
  scheme.addEventListener("change", onTheme);
  const themes = new MutationObserver(onTheme);
  themes.observe(document.documentElement, { attributes: true, attributeFilter: ["data-site-theme"] });
  renderer?.domElement.addEventListener("webglcontextrestored", invalidate);

  relayout();

  return {
    element,

    show(next) {
      for (const stop of stops) stop();
      stops = [];
      options = next;
      element.setAttribute("aria-label", next.label);
      element.dataset.interactive = String(next.onPress !== undefined);
      setRange(next.range ?? FULL_RANGE, next.fingers !== undefined);
      stops.push(
        follow(next.marks, new Map(), (value) => {
          marks = value;
          for (const [pitch, span] of spans) {
            const mark = value.get(pitch);
            if (mark === undefined) span.removeAttribute("data-mark");
            else span.setAttribute("data-mark", mark);
          }
          marksStale = true;
          labelsStale = true;
          describe();
          invalidate();
        }),
        follow(next.fingers, new Map(), (value) => {
          fingers = value;
          for (const [pitch, span] of spans) {
            const finger = value.get(pitch);
            if (finger === undefined) span.removeAttribute("data-finger");
            else span.setAttribute("data-finger", String(finger));
          }
          labelsStale = true;
          describe();
          invalidate();
        }),
        follow<ReadonlySet<number>>(next.pressed, new Set(), (value) => {
          outside = value;
          paintHeld();
        }),
        follow<KeyRange | undefined>(next.reach, undefined, (value) => {
          reach = value;
          placeReach();
        }),
      );
      labelsStale = true;
      invalidate();
    },

    dispose() {
      if (disposed) return;
      for (const stop of stops) stop();
      stops = [];
      stopPointer();
      disposed = true;
      cancelAnimationFrame(scheduled);
      observer.disconnect();
      scheme.removeEventListener("change", onTheme);
      themes.disconnect();
      renderer?.domElement.removeEventListener("webglcontextrestored", invalidate);
      rig.dispose();
      piano.dispose();
      labels.dispose();
      for (const ring of ringPool) ring.material.dispose();
      ringMap.dispose();
      reachGeometry.dispose();
      reachMaterial.dispose();
      renderer?.dispose();
      renderer?.forceContextLoss();
      element.remove();
    },
  };
}
