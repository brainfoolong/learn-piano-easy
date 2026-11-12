/**
 * The game's counting rules: what a note earns or costs on each difficulty, and how a combo multiplies.
 *
 * Decisions, and what each costs:
 * - Easy fits a learner of a few hours, normal a learner of some months, and hard a learner of about a
 *   year. Even hard's perfect window is 40 ms either side, wider than a rhythm game's tightest, since a
 *   keyboard, its cable and the sound card each add a little delay.
 * - A harder level pays more for the same note and fines more for the same slip. Easy fines a slip at
 *   half the base, so a beginner's score still climbs. Hard fines it at twice the base, which is as
 *   much as half a perfect note earns there.
 * - All windows are real seconds, so a learner at half speed is held to the same timing in real time.
 * - A note too short to hold with care is judged on its start alone. The shortest held note shrinks
 *   from 0.6 s on easy to 0.3 s on hard.
 * - A release is clean within a tolerance of whichever is larger: a fixed time, or a share of the note.
 *   A long note then forgives a longer slip than a short one, as a player's ear does.
 * - A note held long enough earns hold points every moment it is held, so the popup counts up.
 * - Each hit adds one to the combo. Every ten in a row add one to the multiplier, up to four. A wrong
 *   note or a miss ends the combo on every level. A release too early or too late ends it on normal
 *   and hard only.
 * - With wait mode, a note the song waited for past the good window is late. It earns nothing, ends
 *   the combo, and is fined less than a miss, since the learner did find the key.
 */

export type Difficulty = "easy" | "normal" | "hard";

export const DIFFICULTIES: readonly Difficulty[] = ["easy", "normal", "hard"];

/** One difficulty's windows, in real seconds, and its points. */
export interface Rules {
  /** The start windows, either side of a note's start: the widest is the furthest a hit may be. */
  readonly perfect: number;
  readonly great: number;
  readonly good: number;
  /** The shortest note, in real seconds, whose hold is judged. */
  readonly holdMin: number;
  /** A clean release's tolerance either side of a note's end: the larger of a time and a share. */
  readonly releaseTime: number;
  readonly releaseShare: number;
  /** What every gain is multiplied by, and what every fine is multiplied by. */
  readonly gain: number;
  readonly fine: number;
  /** Whether a release too early or too late ends the combo. */
  readonly holdBreaksCombo: boolean;
}

export const RULES: Readonly<Record<Difficulty, Rules>> = {
  easy: { perfect: 0.09, great: 0.16, good: 0.25, holdMin: 0.6, releaseTime: 0.25, releaseShare: 0.4, gain: 1, fine: 0.5, holdBreaksCombo: false },
  normal: { perfect: 0.06, great: 0.11, good: 0.18, holdMin: 0.4, releaseTime: 0.18, releaseShare: 0.3, gain: 1.5, fine: 1, holdBreaksCombo: true },
  hard: { perfect: 0.04, great: 0.08, good: 0.13, holdMin: 0.3, releaseTime: 0.12, releaseShare: 0.2, gain: 2, fine: 2, holdBreaksCombo: true },
};

/** The base points, before a level's gain or fine and the combo's multiplier. */
export const POINTS = {
  perfect: 100,
  great: 70,
  good: 40,
  /** Per real second a note is held while it sounds. */
  holdPerSecond: 40,
  /** A release inside the tolerance. */
  release: 25,
} as const;

/** The base fines, before a level's fine. */
export const FINES = {
  wrong: 50,
  miss: 30,
  short: 25,
  long: 20,
  /** A note played after wait mode stood still for it past the good window. */
  late: 20,
} as const;

/** How many hits in a row add one to the multiplier, and the highest multiplier. */
export const COMBO_STEP = 10;
export const MAX_MULTIPLIER = 4;

/** The multiplier a combo of `combo` hits gives. */
export function multiplierOf(combo: number): number {
  return Math.min(MAX_MULTIPLIER, 1 + Math.floor(combo / COMBO_STEP));
}
