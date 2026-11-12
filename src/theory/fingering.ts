/**
 * Fingering: which finger of one hand plays each note, found by a search over every finger choice.
 *
 * A hand's notes are grouped into moments, the notes that start on one tick. Each moment takes a finger
 * for each pitch, rising with the pitch in the right hand and falling in the left. The search walks the
 * moments in order and keeps, for each choice at a moment, the cheapest way to reach it (Viterbi). The
 * cheapest last choice, traced back, is the fingering.
 *
 * Decisions, and what each costs:
 * - The cost follows Parncutt's rules for the right hand, simplified. Each pair of fingers has a relaxed,
 *   a comfortable and a practical span in semitones. A move between two notes costs 2 per semitone
 *   outside the relaxed span, 2 more outside the comfortable one and 10 more outside the practical one.
 *   A thumb pair stretching past its relaxed span costs 1 a semitone there, since the thumb opens wide.
 * - A thumb passing under a finger, or a finger over the thumb, costs `CROSSING` on top of its span.
 *   A crossing of two fingers without the thumb costs `CROSSING_WITHOUT_THUMB`, so the search never
 *   takes one while any other choice exists.
 * - One finger playing two different pitches in a row costs `SAME_FINGER` and the leap. A repeated
 *   pitch on the same finger costs nothing, and on another finger costs 1.
 * - Finger 4 costs 1 a note and finger 5 half that, as the weak fingers. A triad then takes 1, 3 and 5
 *   before 1, 2 and 4. The thumb on a black key costs 2, and the fifth finger on one costs 1.
 * - The left hand is the right hand mirrored. Its pitches are negated for every span, so one table
 *   serves both hands.
 * - A move between two moments costs the mean over every pair of their notes. A single melody is then
 *   costed exactly, and a chord change by its whole shape.
 * - Within a moment, each pair of neighbouring notes costs its span as a move would.
 * - A fixed finger, such as one set by hand, limits its moment to the choices that keep it. The output
 *   always shows the fixed finger, even when no choice agrees with the rest of its moment.
 * - A moment with more than five pitches fingers its five lowest in the right hand, its five highest in
 *   the left. The rest take no finger.
 *
 * - `handMove` and `momentCosts` read a fingering with the same costs, for `tools/song-meter.ts`. A
 *   shift is a move past the comfortable span, one finger on another key, or a crossing.
 *
 * Bounds: a moment has at most 10 choices, so the search costs at most 10 × 10 moves of 25 note pairs
 * per moment. The tables it keeps hold one entry per choice per moment.
 *
 * Gaps: a rest does not free the hand, so a long pause still costs its move. The `sheet-music` goal
 * prints fingering, and its feedback may tune the costs.
 */

/** A finger, the thumb being 1 and the little finger 5. */
export type Finger = 1 | 2 | 3 | 4 | 5;

/** The hand that plays a set of notes. */
export type Hand = "right" | "left";

/** What the search reads of a note: its key and when it starts. A song's `Note` is one. */
export interface FingerNote {
  readonly pitch: number;
  readonly startTick: number;
}

/** A crossing over or under the thumb, added to its span cost. */
const CROSSING = 1;
/** A crossing of two fingers without the thumb, which no hand plays. */
const CROSSING_WITHOUT_THUMB = 100;
/** One finger playing two different pitches in a row, added to the leap in semitones. */
const SAME_FINGER = 8;

/**
 * The spans of each pair of right-hand fingers, in semitones from the lower finger's note up to the
 * higher finger's: the practical, comfortable and relaxed minimum, then the relaxed, comfortable and
 * practical maximum. A negative span is a crossing.
 */
const SPANS: Readonly<Record<string, readonly [number, number, number, number, number, number]>> = {
  "1-2": [-5, -3, 1, 5, 8, 10],
  "1-3": [-4, -2, 3, 7, 10, 12],
  "1-4": [-3, -1, 5, 9, 12, 14],
  "1-5": [-1, 1, 7, 10, 13, 15],
  "2-3": [1, 1, 1, 2, 3, 5],
  "2-4": [1, 1, 3, 4, 5, 7],
  "2-5": [2, 2, 5, 6, 8, 10],
  "3-4": [1, 1, 1, 2, 2, 4],
  "3-5": [1, 1, 3, 4, 5, 7],
  "4-5": [1, 1, 1, 2, 3, 5],
};

const BLACK = new Set([1, 3, 6, 8, 10]);

function isBlack(pitch: number): boolean {
  return BLACK.has(((pitch % 12) + 12) % 12);
}

/** How far `value` lies outside `low` to `high`, or 0 inside. */
function outside(value: number, low: number, high: number): number {
  return value < low ? low - value : value > high ? value - high : 0;
}

/**
 * The cost of `from` then `to` on two different fingers, or of the two at once. Pitches are the hand's
 * own, negated in the left hand.
 */
function spanCost(fromFinger: Finger, fromPitch: number, toFinger: Finger, toPitch: number): number {
  const [low, high] = fromFinger < toFinger ? [fromFinger, toFinger] : [toFinger, fromFinger];
  const span = fromFinger < toFinger ? toPitch - fromPitch : fromPitch - toPitch;
  const [minPrac, minComf, minRel, maxRel, maxComf, maxPrac] = SPANS[`${low}-${high}`]!;
  const relaxed = low === 1 && span > maxRel ? 1 : 2;
  let cost = relaxed * outside(span, minRel, maxRel) + 2 * outside(span, minComf, maxComf) + 10 * outside(span, minPrac, maxPrac);
  if (span < 0) cost += low === 1 ? CROSSING : CROSSING_WITHOUT_THUMB;
  return cost;
}

/** The cost of playing `toPitch` with `toFinger` right after `fromPitch` with `fromFinger`. */
function moveCost(fromFinger: Finger, fromPitch: number, toFinger: Finger, toPitch: number): number {
  if (fromPitch === toPitch) return fromFinger === toFinger ? 0 : 1;
  if (fromFinger === toFinger) return SAME_FINGER + Math.abs(toPitch - fromPitch);
  return spanCost(fromFinger, fromPitch, toFinger, toPitch);
}

/** The cost of one finger on one key, whatever comes before or after. */
function noteCost(finger: Finger, pitch: number): number {
  let cost = finger === 4 ? 1 : finger === 5 ? 0.5 : 0;
  if (isBlack(pitch)) cost += finger === 1 ? 2 : finger === 5 ? 1 : 0;
  return cost;
}

/** One moment: its pitches in the hand's order, real and signed, and the note indices of each pitch. */
interface Moment {
  pitches: number[];
  signed: number[];
  notes: number[][];
}

/** One finger choice for a moment: a finger per pitch, and its own cost. */
interface Choice {
  fingers: Finger[];
  cost: number;
}

/** Every way to give `count` pitches rising fingers, each list in rising order. */
function risingFingers(count: number): Finger[][] {
  const out: Finger[][] = [];
  const walk = (from: number, taken: Finger[]) => {
    if (taken.length === count) {
      out.push([...taken]);
      return;
    }
    for (let finger = from; finger <= 5 - (count - taken.length - 1); finger++) walk(finger + 1, [...taken, finger as Finger]);
  };
  walk(1, []);
  return out;
}

const RISING: readonly Finger[][][] = [0, 1, 2, 3, 4, 5].map(risingFingers);

/** The moments of `notes`, which are in start order, for `hand`. */
function momentsOf(notes: readonly FingerNote[], hand: Hand): Moment[] {
  const sign = hand === "right" ? 1 : -1;
  const moments: Moment[] = [];
  let index = 0;
  while (index < notes.length) {
    const tick = notes[index]!.startTick;
    const byPitch = new Map<number, number[]>();
    for (; index < notes.length && notes[index]!.startTick === tick; index++) {
      const pitch = notes[index]!.pitch;
      const list = byPitch.get(pitch);
      if (list === undefined) byPitch.set(pitch, [index]);
      else list.push(index);
    }
    const pitches = [...byPitch.keys()].sort((a, b) => sign * (a - b)).slice(0, 5);
    moments.push({ pitches, signed: pitches.map((p) => sign * p), notes: pitches.map((p) => byPitch.get(p)!) });
  }
  return moments;
}

/** The choices of `moment` that keep every finger in `fixed`, by note index, or all of them when none does. */
function choicesOf(moment: Moment, fixed: ReadonlyMap<number, Finger>): Choice[] {
  const all = RISING[moment.pitches.length]!;
  const keeps = all.filter((fingers) =>
    moment.notes.every((indices, at) => indices.every((index) => (fixed.get(index) ?? fingers[at]) === fingers[at])),
  );
  return (keeps.length > 0 ? keeps : all).map((fingers) => ({ fingers, cost: choiceCost(moment, fingers) }));
}

/** The cost of `moment` played with `fingers`, one per pitch: each note's own cost and each neighbouring span. */
function choiceCost(moment: Moment, fingers: readonly Finger[]): number {
  let cost = 0;
  for (let at = 0; at < fingers.length; at++) {
    cost += noteCost(fingers[at]!, moment.pitches[at]!);
    if (at > 0) cost += spanCost(fingers[at - 1]!, moment.signed[at - 1]!, fingers[at]!, moment.signed[at]!);
  }
  return cost;
}

/** The cost of moving from `before` with `from` to `after` with `to`: the mean over every pair of notes. */
function changeCost(before: Moment, from: Choice, after: Moment, to: Choice): number {
  let sum = 0;
  for (let i = 0; i < from.fingers.length; i++) {
    for (let j = 0; j < to.fingers.length; j++) sum += moveCost(from.fingers[i]!, before.signed[i]!, to.fingers[j]!, after.signed[j]!);
  }
  return sum / (from.fingers.length * to.fingers.length);
}

/** What a move from one fingered note to the next does to the hand. */
export interface HandMove {
  /** The move's cost in the search. */
  cost: number;
  /** The hand leaves its place: one finger takes another key, the move passes the comfortable span, or it crosses. */
  shift: boolean;
  /** A finger passes over or under another. */
  crossing: boolean;
  /** The two fingers stretch past their practical span. */
  pastPractical: boolean;
}

/** The move of `hand` from `fromPitch` under `fromFinger` to `toPitch` under `toFinger`. */
export function handMove(hand: Hand, fromFinger: Finger, fromPitch: number, toFinger: Finger, toPitch: number): HandMove {
  const sign = hand === "right" ? 1 : -1;
  const [from, to] = [sign * fromPitch, sign * toPitch];
  const cost = moveCost(fromFinger, from, toFinger, to);
  if (from === to) return { cost, shift: false, crossing: false, pastPractical: false };
  if (fromFinger === toFinger) return { cost, shift: true, crossing: false, pastPractical: false };
  const [low, high] = fromFinger < toFinger ? [fromFinger, toFinger] : [toFinger, fromFinger];
  const span = fromFinger < toFinger ? to - from : from - to;
  const [minPrac, minComf, , , maxComf, maxPrac] = SPANS[`${low}-${high}`]!;
  const crossing = span < 0;
  return { cost, shift: crossing || outside(span, minComf, maxComf) > 0, crossing, pastPractical: outside(span, minPrac, maxPrac) > 0 };
}

/**
 * The cost of each moment of `notes`, played by `hand` with `fingers`, by note index: its own cost and
 * the move into it. The notes are in start order. A moment with a note that has no finger costs nothing.
 */
export function momentCosts(notes: readonly FingerNote[], hand: Hand, fingers: readonly (Finger | undefined)[]): { startTick: number; cost: number }[] {
  const moments = momentsOf(notes, hand);
  let before: { moment: Moment; choice: Choice } | undefined;
  return moments.map((moment) => {
    const startTick = notes[moment.notes[0]![0]!]!.startTick;
    const chosen = moment.notes.map((indices) => fingers[indices[0]!]);
    if (chosen.some((finger) => finger === undefined)) {
      before = undefined;
      return { startTick, cost: 0 };
    }
    const choice = { fingers: chosen as Finger[], cost: choiceCost(moment, chosen as Finger[]) };
    const cost = choice.cost + (before === undefined ? 0 : changeCost(before.moment, before.choice, moment, choice));
    before = { moment, choice };
    return { startTick, cost };
  });
}

/**
 * The finger of each of `notes`, played by `hand`, by index. The notes are in start order, as a song's
 * are. `fixed` holds fingers already chosen, by note index, which the result keeps. A note beyond the
 * five fingers of its moment takes undefined.
 */
export function fingerHand(notes: readonly FingerNote[], hand: Hand, fixed: ReadonlyMap<number, Finger> = new Map()): (Finger | undefined)[] {
  const moments = momentsOf(notes, hand);
  const choices = moments.map((moment) => choicesOf(moment, fixed));
  const totals: number[][] = [];
  const back: number[][] = [];
  choices.forEach((here, at) => {
    const previous = totals[at - 1];
    totals.push([]);
    back.push([]);
    here.forEach((choice, c) => {
      let best = 0;
      let bestCost = previous === undefined ? 0 : Infinity;
      if (previous !== undefined) {
        choices[at - 1]!.forEach((before, b) => {
          const cost = previous[b]! + changeCost(moments[at - 1]!, before, moments[at]!, choice);
          if (cost < bestCost) [best, bestCost] = [b, cost];
        });
      }
      totals[at]!.push(bestCost + choice.cost);
      back[at]!.push(best);
    });
  });

  const out: (Finger | undefined)[] = notes.map(() => undefined);
  const last = totals[totals.length - 1];
  if (last === undefined) return out;
  let pick = last.indexOf(Math.min(...last));
  for (let at = moments.length - 1; at >= 0; at--) {
    const { fingers } = choices[at]![pick]!;
    moments[at]!.notes.forEach((indices, p) => indices.forEach((index) => (out[index] = fixed.get(index) ?? fingers[p])));
    pick = back[at]![pick]!;
  }
  return out;
}
