/**
 * The hand's plan: a phrase of notes, each with its finger, turned into the pose of each hand at any time.
 *
 * Decisions, and what each costs:
 * - **The plan is a pure function of time.** `poseAt(seconds)` reads only the phrase, so playing,
 *   seeking and slowing down give the same pose for the same time. A pose is built afresh on each call,
 *   which costs a few small allocations per frame.
 * - **A hand's position is its anchor,** the white key under its thumb, with each finger over one of
 *   the next four white keys. A right hand counts them upwards and a left hand downwards. A note whose
 *   finger cannot reach its key from the anchor moves it. The move starts once the old anchor's last
 *   note sounds, as late as its release allows, and lands as the new note strikes.
 * - **The wrist sits behind the middle finger's key,** in line with its knuckle, as the model's is.
 *   Its height, distance and roll are the hand lab's measured values, where every joint stays natural.
 * - **Fingertips land on an arc,** as on a real hand, each at its own inset from a white key's front. A
 *   black key is played `BLACK_INSET` in from its front, whichever finger plays it.
 * - **A press takes its finger over its key, strikes, follows the key's dip, holds and lifts.** The
 *   strike is shorter for a louder note. A finger never leaves a key it holds for its next note.
 * - **A free finger hovers `HOVER` over the key it would play from the current anchor.**
 *
 * Bounds: `poseAt` looks at each finger's notes by binary search, so a frame's cost grows with the log
 * of the phrase's length.
 *
 * Gaps: crossings, stretches and chords belong to `hand-motion` stage 2, and touch and the two hands'
 * spacing to its stage 3.
 */
import { Euler, Quaternion, Vector3 } from "three";

import type { Finger, Hand } from "../../theory/fingering";
import type { KeyLayout } from "../key-layout";
import { BLACK_KEY_LENGTH, BLACK_KEY_TOP, PRESS_DEPTH, WHITE_KEY_LENGTH } from "../piano-geometry";
import { DIGITS, type Digit } from "./hand-rig";

/** One note of a phrase. Times are in seconds, and `velocity` runs from 0 to 127. */
export interface PhraseNote {
  pitch: number;
  at: number;
  seconds: number;
  finger: Finger;
  hand: Hand;
  velocity?: number;
}

/** One hand at one moment. */
export interface HandPose {
  hand: Hand;
  /** The wrist's point in world space. */
  wrist: Vector3;
  /** The hand's turn from its rest. */
  turn: Quaternion;
  /** Where each digit's pad goes, or undefined to let it relax. */
  digits: Record<Digit, Vector3 | undefined>;
  /** The pitches the hand holds down. */
  down: number[];
}

/** Both hands at one moment. A hand without notes in the phrase is absent. */
export type Pose = Partial<Record<Hand, HandPose>>;

export interface HandPlan {
  /** The pose at `seconds` from the phrase's start. */
  poseAt(seconds: number): Pose;
  /** When the last note has ended and its finger has returned. */
  readonly end: number;
}

/** How far in from a white key's front edge each digit plays, on the arc a real hand makes. */
export const INSET: Readonly<Record<Digit, number>> = { thumb: 0.8, index: 1.3, middle: 1.5, ring: 1.35, little: 0.95 };
/** How far in from a black key's front edge any digit plays. */
export const BLACK_INSET = 0.6;
/** The resting hand: the wrist's height over the keys, its distance behind the middle finger's pad, and its roll towards the little finger. */
export const REST = { lift: 2.6, back: 5.0, roll: 0.12 } as const;
/** How far above its key a free finger hovers. */
export const HOVER = 0.35;
/** How far above a key's top the pad touches it, so the skin never sinks into the key. */
export const CONTACT = 0.02;
/** How far a key's position may lie from a finger's home, in white keys, for the finger to reach it. */
const REACH = 0.75;
/** How long a finger takes to go over its key before it strikes. */
const PREPARE = 0.2;
/** The strike's time at velocity 0 and how much a full velocity takes off it. */
const STRIKE_SLOW = 0.12;
const STRIKE_GAIN = 0.07;
/** How long the pad takes to follow the key down. */
const DIP = 0.03;
/** How long a released finger takes to lift to its hover. */
const LIFT = 0.08;
/** How long a lifted finger takes to go back over its home key. */
const RETURN = 0.2;
/** The shortest time a move of the hand is given, when the old note's release allows. */
const MOVE_MIN = 0.15;
const DEFAULT_VELOCITY = 80;

/** The time a press's down-stroke takes at `velocity`. */
export function strikeSeconds(velocity = DEFAULT_VELOCITY): number {
  return STRIKE_SLOW - STRIKE_GAIN * Math.min(1, Math.max(0, velocity / 127));
}

/** The point on `pitch`'s key that `digit`'s pad meets, in world space, with the piano centred on x = 0. */
export function contactPoint(layout: KeyLayout, pitch: number, digit: Digit): Vector3 {
  const key = layout.key(pitch);
  if (!key) throw new RangeError(`pitch ${pitch} is outside the piano's keys`);
  const x = key.center - layout.width / 2;
  return key.black
    ? new Vector3(x, BLACK_KEY_TOP + CONTACT, BLACK_KEY_LENGTH - BLACK_INSET)
    : new Vector3(x, CONTACT, WHITE_KEY_LENGTH - INSET[digit]);
}

/** How far a pressed key has dipped at `z`, its distance from the back edge it tilts about. */
function dipAt(z: number, black: boolean): number {
  return (z * PRESS_DEPTH) / (black ? BLACK_KEY_LENGTH : WHITE_KEY_LENGTH);
}

/** Eases `u` in and out, clamped to 0..1. */
function ease(u: number): number {
  const v = Math.min(1, Math.max(0, u));
  return v * v * (3 - 2 * v);
}

/** A note with the times of its press. */
interface Press {
  note: PhraseNote;
  digit: Digit;
  /** The finger starts over its key. */
  start: number;
  /** The down-stroke starts. */
  down: number;
  /** The key releases. */
  up: number;
  /** The finger hovers over the key again. */
  free: number;
  /** The finger is back over its home key. */
  gone: number;
  /** The pad on its key, untouched by the dip. */
  contact: Vector3;
  /** How far the key dips at the pad. */
  dip: number;
}

/** An anchor and the move that lands on it. */
interface Anchor {
  /** The white index of the key under the thumb. */
  at: number;
  /** The move from the anchor before starts. */
  leave: number;
  /** The move lands. */
  arrive: number;
}

/** Plans every hand of `phrase` on the keys of `layout`. */
export function planHands(phrase: readonly PhraseNote[], layout: KeyLayout): HandPlan {
  const plans = (["right", "left"] as const)
    .map((hand) => ({ hand, notes: phrase.filter((n) => n.hand === hand).sort((a, b) => a.at - b.at) }))
    .filter((p) => p.notes.length > 0)
    .map((p) => planHand(p.hand, p.notes, layout));
  return {
    end: Math.max(0, ...plans.map((p) => p.end)),
    poseAt(seconds) {
      const pose: Pose = {};
      for (const plan of plans) pose[plan.hand] = plan.poseAt(seconds);
      return pose;
    },
  };
}

interface OneHand {
  hand: Hand;
  end: number;
  poseAt(seconds: number): HandPose;
}

function planHand(hand: Hand, notes: readonly PhraseNote[], layout: KeyLayout): OneHand {
  const side = hand === "right" ? 1 : -1;
  const half = layout.width / 2;
  /** A key's position in white keys: a white key's index, or between its neighbours for a black key. */
  const position = (pitch: number) => {
    const key = layout.key(pitch);
    if (!key) throw new RangeError(`pitch ${pitch} is outside the piano's keys`);
    return key.center - 0.5;
  };
  const home = (anchor: number, digit: number) => anchor + side * digit;

  const anchors: Anchor[] = [];
  const presses: Press[][] = DIGITS.map(() => []);
  let last: Press | undefined;
  for (const note of notes) {
    const d = note.finger - 1;
    const digit = DIGITS[d]!;
    const contact = contactPoint(layout, note.pitch, digit);
    const strike = strikeSeconds(note.velocity);
    const before = presses[d]!.at(-1);
    // A finger still holding a key releases it as its next press begins.
    if (before && before.up > note.at - strike) {
      before.up = Math.max(before.note.at, note.at - strike);
      before.free = before.up + LIFT;
      before.gone = before.free + RETURN;
    }
    const down = Math.max(note.at - strike, before?.up ?? -Infinity);
    const press: Press = {
      note,
      digit,
      start: Math.max(down - PREPARE, before?.up ?? -Infinity),
      down,
      up: note.at + note.seconds,
      free: note.at + note.seconds + LIFT,
      gone: note.at + note.seconds + LIFT + RETURN,
      contact,
      dip: dipAt(contact.z, layout.key(note.pitch)!.black),
    };
    presses[d]!.push(press);

    const at = position(note.pitch);
    const current = anchors.at(-1);
    if (!current) anchors.push({ at: Math.round(at) - side * d, leave: -Infinity, arrive: -Infinity });
    else if (Math.abs(at - home(current.at, d)) > REACH) {
      // The move waits for the note before to sound, and for its release where time allows.
      const leave = Math.max(last!.note.at, current.arrive, Math.min(last!.up, note.at - MOVE_MIN));
      anchors.push({ at: Math.round(at) - side * d, leave, arrive: note.at });
    }
    last = press;
  }

  const anchorAt = (t: number): number => {
    const i = lastIndex(anchors, (a) => a.leave <= t);
    const next = anchors[i]!;
    if (i === 0 || t >= next.arrive) return next.at;
    const prev = anchors[i - 1]!;
    return prev.at + (next.at - prev.at) * ease((t - next.leave) / (next.arrive - next.leave));
  };

  const middle = WHITE_KEY_LENGTH - INSET.middle;
  const turn = new Quaternion().setFromEuler(new Euler(0, 0, -side * REST.roll));

  return {
    hand,
    end: Math.max(...presses.flat().map((p) => p.gone)),
    poseAt(t) {
      const anchor = anchorAt(t);
      const hover = (d: number) => new Vector3(home(anchor, d) + 0.5 - half, CONTACT + HOVER, WHITE_KEY_LENGTH - INSET[DIGITS[d]!]);
      const digits = {} as Record<Digit, Vector3 | undefined>;
      const down: number[] = [];
      DIGITS.forEach((digit, d) => {
        const list = presses[d]!;
        const i = lastIndex(list, (p) => p.start <= t);
        digits[digit] = i < 0 ? hover(d) : pressPoint(list, i, t, () => hover(d));
        const held = i < 0 ? undefined : list[i]!;
        if (held && held.note.at <= t && t < held.up) down.push(held.note.pitch);
      });
      return {
        hand,
        wrist: new Vector3(home(anchor, 2) + 0.5 - half, REST.lift, middle + REST.back),
        turn: turn.clone(),
        digits,
        down: down.sort((a, b) => a - b),
      };
    },
  };
}

/** Where the pad of `list[i]`'s finger is at `t`, from its press's start until it is back home. */
function pressPoint(list: readonly Press[], i: number, t: number, home: () => Vector3): Vector3 {
  const p = list[i]!;
  const over = p.contact.clone().setY(p.contact.y + HOVER);
  if (t < p.down) {
    // The finger comes over its key from wherever it was.
    const from = i > 0 ? pressPoint(list, i - 1, t, home) : home();
    return from.lerp(over, ease((t - p.start) / (p.down - p.start)));
  }
  if (t < p.note.at) {
    // The down-stroke speeds up into the key.
    const u = (t - p.down) / (p.note.at - p.down);
    return p.contact.clone().setY(p.contact.y + HOVER * (1 - u * u));
  }
  if (t < p.up) return p.contact.clone().setY(p.contact.y - p.dip * ease((t - p.note.at) / DIP));
  if (t < p.free) return p.contact.clone().setY(p.contact.y - p.dip + (HOVER + p.dip) * ease((t - p.up) / (p.free - p.up)));
  return over.lerp(home(), ease((t - p.free) / (p.gone - p.free)));
}

/** The index of the last item of `list` that `before` accepts, where it accepts a leading run, or -1. */
function lastIndex<T>(list: readonly T[], before: (item: T) => boolean): number {
  let low = 0;
  let high = list.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (before(list[mid]!)) low = mid + 1;
    else high = mid;
  }
  return low - 1;
}
