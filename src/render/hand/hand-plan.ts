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
 * - **A stretch keeps the anchor.** The thumb and the little finger each reach `STRETCH` white keys
 *   outwards past their home, as the little finger reaches A from the C position.
 * - **A crossing is read from the fingering.** The thumb playing a key up to `CROSS_SPAN` beyond the
 *   note before is a thumb-under. It travels low and back under the palm, and the hand turns a little
 *   towards it. Any other finger playing up to `CROSS_SPAN` back past the thumb's note is a finger-over,
 *   which arcs high over the thumb. A crossing starts its travel earlier than a plain press.
 * - **A chord's notes share their time,** so their fingers strike together. A chord that set the anchor
 *   never moves it again, so a finger the anchor cannot reach stretches to its key.
 * - **Touch is read from the phrase.** A note shorter than half the time to the next one is staccato,
 *   and the wrist rises `STACCATO_LIFT` in the silence after it. A silence of `PHRASE_GAP` or more ends
 *   a phrase, and the wrist rises `BREATH_LIFT`. Free fingers rise with the wrist. Legato needs nothing
 *   more, since each finger lifts as its note ends.
 * - **A louder note strikes faster from higher.** `strikeHeight` and `strikeSeconds` both follow the
 *   velocity, and the default velocity strikes from `HOVER`.
 * - **The two hands keep one white key free between their thumbs' home keys.** Closer thumbs push both
 *   anchors apart by halves, so a press never moves, only the wrists and the free fingers. Hands that
 *   cross are pushed less the further they cross, which keeps the motion free of jumps.
 *
 * Bounds: `poseAt` looks at each finger's notes and the wrist's rises by binary search, so a frame's
 * cost grows with the log of the phrase's length.
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
/** How far the thumb and the little finger reach outwards past their home, in white keys. */
const STRETCH = 1;
/** How far past the note before a crossing finger may play, in white keys. A wider gap is a leap. */
const CROSS_SPAN = 2;
/** How far a thumb passing under drops below its hover, and how far back towards the palm it tucks. */
export const UNDER = { drop: 0.2, tuck: 0.8 } as const;
/** How high a finger crossing over the thumb rises above its hover. */
export const OVER_LIFT = 1;
/** How far the hand turns towards a thumb passing under it, in radians. */
const CROSS_TURN = 0.15;
/** How long a finger takes to go over its key before it strikes, and a crossing finger to travel. */
const PREPARE = 0.2;
const CROSS_PREPARE = 0.35;
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
/** How much higher than `HOVER` a full velocity strikes from, and how much lower a silent one. */
const LOUD_RISE = 0.25;
/** How high the wrist rises between staccato notes, and across a phrase end. */
export const STACCATO_LIFT = 0.4;
export const BREATH_LIFT = 0.25;
/** The shortest silence that ends a phrase, in seconds: a beat at 120 beats a minute. */
export const PHRASE_GAP = 0.5;
/** How far apart the two thumbs' home keys stay, in white keys, so one key lies free between them. */
const SPACING = 2;

/** The time a press's down-stroke takes at `velocity`. */
export function strikeSeconds(velocity = DEFAULT_VELOCITY): number {
  return STRIKE_SLOW - STRIKE_GAIN * Math.min(1, Math.max(0, velocity / 127));
}

/** How high over its key a finger starts its down-stroke at `velocity`: `HOVER` at the default velocity. */
export function strikeHeight(velocity = DEFAULT_VELOCITY): number {
  return HOVER + (LOUD_RISE * (Math.min(127, Math.max(0, velocity)) - DEFAULT_VELOCITY)) / 127;
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
  /** How high over the key the down-stroke starts. */
  height: number;
  /** The crossing the finger travels on its way over its key, if any. */
  cross: "under" | "over" | undefined;
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

/** A rise of the wrist between two notes, peaking halfway. */
interface Lift {
  from: number;
  to: number;
  height: number;
}

/** Plans every hand of `phrase` on the keys of `layout`. */
export function planHands(phrase: readonly PhraseNote[], layout: KeyLayout): HandPlan {
  const plans = (["right", "left"] as const)
    .map((hand) => ({ hand, notes: phrase.filter((n) => n.hand === hand).sort((a, b) => a.at - b.at) }))
    .filter((p) => p.notes.length > 0)
    .map((p) => planHand(p.hand, p.notes, layout));
  const right = plans.find((p) => p.hand === "right");
  const left = plans.find((p) => p.hand === "left");
  return {
    end: Math.max(0, ...plans.map((p) => p.end)),
    poseAt(seconds) {
      // Two thumbs closer than `SPACING` push both hands apart by halves. Hands that cross fade the push
      // out, so the anchors never jump.
      let push = 0;
      if (right && left) {
        const gap = right.anchorAt(seconds) - left.anchorAt(seconds);
        push = Math.max(0, SPACING - Math.abs(gap));
      }
      const pose: Pose = {};
      if (right) pose.right = right.poseAt(seconds, push / 2);
      if (left) pose.left = left.poseAt(seconds, -push / 2);
      return pose;
    },
  };
}

interface OneHand {
  hand: Hand;
  end: number;
  /** The white index under the thumb at `seconds`, before any push from the other hand. */
  anchorAt(seconds: number): number;
  /** The pose at `seconds`, with the anchor shifted `shift` white keys up the piano. */
  poseAt(seconds: number, shift: number): HandPose;
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

  /** Whether digit `d` reaches a key `offset` white keys past its home, counted the hand's way. */
  const reaches = (d: number, offset: number) =>
    Math.abs(offset) <= REACH || (d === 4 && offset > 0 && offset <= STRETCH) || (d === 0 && offset < 0 && offset >= -STRETCH);

  const anchors: Anchor[] = [];
  /** The time of the note that set the last anchor, which a chord on that time never moves again. */
  let anchoredAt = -Infinity;
  const presses: Press[][] = DIGITS.map(() => []);
  /** Every press, in the order of its note. */
  const all: Press[] = [];
  /** The last press, and the last one struck before the note at hand, which a chord's notes share. */
  let last: Press | undefined;
  let earlier: Press | undefined;
  for (const note of notes) {
    if (last && last.note.at < note.at) earlier = last;
    const d = note.finger - 1;
    const digit = DIGITS[d]!;
    const at = position(note.pitch);
    // How far past the note before this one lies, counted the hand's way, and the crossing that makes.
    const past = earlier ? side * (at - position(earlier.note.pitch)) : 0;
    const cross =
      d === 0 && earlier && earlier.digit !== "thumb" && past > 0 && past <= CROSS_SPAN
        ? "under"
        : d > 0 && earlier?.digit === "thumb" && past < 0 && past >= -CROSS_SPAN
          ? "over"
          : undefined;
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
      start: Math.max(down - (cross ? CROSS_PREPARE : PREPARE), before?.up ?? -Infinity),
      down,
      up: note.at + note.seconds,
      free: note.at + note.seconds + LIFT,
      gone: note.at + note.seconds + LIFT + RETURN,
      contact,
      dip: dipAt(contact.z, layout.key(note.pitch)!.black),
      height: strikeHeight(note.velocity),
      cross,
    };
    all.push(press);
    presses[d]!.push(press);

    const current = anchors.at(-1);
    if (!current) {
      anchors.push({ at: Math.round(at) - side * d, leave: -Infinity, arrive: -Infinity });
      anchoredAt = note.at;
    } else if (anchoredAt < note.at && !reaches(d, side * (at - home(current.at, d)))) {
      // The move waits for the note before to sound, and for its release where time allows.
      const leave = Math.max(earlier!.note.at, current.arrive, Math.min(earlier!.up, note.at - MOVE_MIN));
      anchors.push({ at: Math.round(at) - side * d, leave, arrive: note.at });
      anchoredAt = note.at;
    }
    last = press;
  }

  // The wrist rises in the silence after a staccato note or a phrase's end. Notes that share a time are
  // one group, and the rise waits until every key struck so far has released.
  const lifts: Lift[] = [];
  let released = -Infinity;
  let ended = -Infinity;
  for (let i = 0; i < all.length; ) {
    const at = all[i]!.note.at;
    let j = i;
    let longest = 0;
    for (; j < all.length && all[j]!.note.at === at; j++) {
      released = Math.max(released, all[j]!.up);
      ended = Math.max(ended, at + all[j]!.note.seconds);
      longest = Math.max(longest, all[j]!.note.seconds);
    }
    const next = all[j];
    if (next) {
      let to = Infinity;
      for (let k = j; k < all.length && all[k]!.note.at === next.note.at; k++) to = Math.min(to, all[k]!.down);
      const staccato = longest < (next.note.at - at) / 2 ? STACCATO_LIFT : 0;
      const breath = next.note.at - ended >= PHRASE_GAP ? BREATH_LIFT : 0;
      const height = Math.max(staccato, breath);
      if (height > 0 && to > released) lifts.push({ from: released, to, height });
    }
    i = j;
  }
  const liftAt = (t: number): number => {
    const l = lifts[lastIndex(lifts, (w) => w.from <= t)];
    return l && t < l.to ? l.height * Math.sin((Math.PI * (t - l.from)) / (l.to - l.from)) : 0;
  };

  const anchorAt = (t: number): number => {
    const i = lastIndex(anchors, (a) => a.leave <= t);
    const next = anchors[i]!;
    if (i === 0 || t >= next.arrive) return next.at;
    const prev = anchors[i - 1]!;
    return prev.at + (next.at - prev.at) * ease((t - next.leave) / (next.arrive - next.leave));
  };

  const middle = WHITE_KEY_LENGTH - INSET.middle;
  /** The hand's turn at `t`: its roll, and a turn towards a thumb passing under that peaks halfway. */
  const turnAt = (t: number): Quaternion => {
    const thumbs = presses[0]!;
    const p = thumbs[lastIndex(thumbs, (q) => q.start <= t)];
    const u = p?.cross === "under" && t < p.note.at ? (t - p.start) / (p.note.at - p.start) : 0;
    return new Quaternion().setFromEuler(new Euler(0, -side * CROSS_TURN * Math.sin(Math.PI * u), -side * REST.roll, "YXZ"));
  };

  return {
    hand,
    end: Math.max(...all.map((p) => p.gone)),
    anchorAt,
    poseAt(t, shift) {
      const anchor = anchorAt(t) + shift;
      const lift = liftAt(t);
      const hover = (d: number) => new Vector3(home(anchor, d) + 0.5 - half, CONTACT + HOVER + lift, WHITE_KEY_LENGTH - INSET[DIGITS[d]!]);
      const digits = {} as Record<Digit, Vector3 | undefined>;
      const down: number[] = [];
      DIGITS.forEach((digit, d) => {
        const list = presses[d]!;
        const i = lastIndex(list, (p) => p.start <= t);
        digits[digit] = i < 0 ? hover(d) : pressPoint(list, i, t, lift, () => hover(d));
        const held = i < 0 ? undefined : list[i]!;
        if (held && held.note.at <= t && t < held.up) down.push(held.note.pitch);
      });
      return {
        hand,
        wrist: new Vector3(home(anchor, 2) + 0.5 - half, REST.lift + lift, middle + REST.back),
        turn: turnAt(t),
        digits,
        down: down.sort((a, b) => a - b),
      };
    },
  };
}

/**
 * Where the pad of `list[i]`'s finger is at `t`, from its press's start until it is back home. `lift` is
 * the wrist's rise at `t`, which a finger off its key shares. A finger coming over its key sheds the rise
 * by its down-stroke, so the stroke starts from the same point whatever the wrist does.
 */
function pressPoint(list: readonly Press[], i: number, t: number, lift: number, home: () => Vector3): Vector3 {
  const p = list[i]!;
  if (t < p.down) {
    // The finger comes over its key from wherever it was, low under the palm or high over the thumb if it crosses.
    const from = i > 0 ? pressPoint(list, i - 1, t, lift, home) : home();
    const u = ease((t - p.start) / (p.down - p.start));
    const bow = Math.sin(Math.PI * u);
    const point = from.lerp(p.contact.clone().setY(p.contact.y + p.height), u);
    if (p.cross === "under") return point.set(point.x, point.y - UNDER.drop * bow, point.z + UNDER.tuck * bow);
    if (p.cross === "over") return point.setY(point.y + OVER_LIFT * bow);
    return point;
  }
  if (t < p.note.at) {
    // The down-stroke speeds up into the key.
    const u = (t - p.down) / (p.note.at - p.down);
    return p.contact.clone().setY(p.contact.y + p.height * (1 - u * u));
  }
  if (t < p.up) return p.contact.clone().setY(p.contact.y - p.dip * ease((t - p.note.at) / DIP));
  const rise = p.height + lift;
  if (t < p.free) return p.contact.clone().setY(p.contact.y - p.dip + (rise + p.dip) * ease((t - p.up) / (p.free - p.up)));
  return p.contact.clone().setY(p.contact.y + rise).lerp(home(), ease((t - p.free) / (p.gone - p.free)));
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
