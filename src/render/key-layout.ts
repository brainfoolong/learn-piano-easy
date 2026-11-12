/**
 * The keyboard layout: where each key of a visible range sits, in key units.
 *
 * One white key is one unit wide, and x runs from 0 at the left edge of the range's first key. The
 * scene scales these units, so this file is pure maths and is tested without a browser.
 *
 * A range always starts and ends on a white key, so every black key has both its white neighbours in
 * view. A black key sits over the gap between its two neighbours, nudged the way a real piano nudges
 * it: C# and F# lean left, D# and A# lean right, and G# stays centred.
 */

/** The piano's 88 keys run from MIDI note 21 (A0) to 108 (C8). */
export const FIRST_NOTE = 21;
export const LAST_NOTE = 108;

/** A black key's width, in white key widths. */
export const BLACK_KEY_WIDTH = 0.58;

/** How far each black key's centre leans from its gap, by pitch class, in white key widths. */
const BLACK_KEY_LEAN: Readonly<Record<number, number>> = { 1: -0.1, 3: 0.1, 6: -0.12, 8: 0, 10: 0.12 };

/** A fit range spans at least this many white keys, two octaves and their top C. */
export const MIN_FIT_WHITE_KEYS = 15;

/** The lowest and highest pitch in view, both inclusive. */
export interface KeyRange {
  first: number;
  last: number;
}

export const FULL_RANGE: KeyRange = { first: FIRST_NOTE, last: LAST_NOTE };

export interface KeyRect {
  pitch: number;
  black: boolean;
  /** The left edge. */
  x: number;
  width: number;
  /** The centre, `x + width / 2`. */
  center: number;
}

export interface KeyLayout {
  /** The range, widened to white keys at both ends. */
  range: KeyRange;
  whiteCount: number;
  /** The width of the whole range, equal to `whiteCount`. */
  width: number;
  /** Every key of the range, in pitch order. */
  keys: KeyRect[];
  /** The key of `pitch`, or undefined outside the range. */
  key(pitch: number): KeyRect | undefined;
}

export function isBlack(pitch: number): boolean {
  return pitch % 12 in BLACK_KEY_LEAN;
}

/** The layout of `range`, widened to a white key at each end and clamped to the 88 keys. */
export function layoutKeys(range: KeyRange = FULL_RANGE): KeyLayout {
  const first = Math.max(FIRST_NOTE, isBlack(range.first) ? range.first - 1 : range.first);
  const last = Math.min(LAST_NOTE, isBlack(range.last) ? range.last + 1 : range.last);
  if (first > last) throw new RangeError(`empty key range ${range.first}..${range.last}`);

  const keys: KeyRect[] = [];
  let whiteCount = 0;
  for (let pitch = first; pitch <= last; pitch++) {
    if (isBlack(pitch)) {
      // `whiteCount` is now the gap right of the white key below.
      const center = whiteCount + BLACK_KEY_LEAN[pitch % 12]!;
      keys.push({ pitch, black: true, x: center - BLACK_KEY_WIDTH / 2, width: BLACK_KEY_WIDTH, center });
    } else {
      keys.push({ pitch, black: false, x: whiteCount, width: 1, center: whiteCount + 0.5 });
      whiteCount++;
    }
  }

  return {
    range: { first, last },
    whiteCount,
    width: whiteCount,
    keys,
    key: (pitch) => keys[pitch - first],
  };
}

/**
 * The smallest range that holds every pitch of `notes` inside the 88 keys, widened to white keys and
 * to at least `MIN_FIT_WHITE_KEYS`. Without such notes it is the full range.
 */
export function fitRange(notes: readonly { pitch: number }[]): KeyRange {
  let low = Infinity;
  let high = -Infinity;
  for (const { pitch } of notes) {
    if (pitch < FIRST_NOTE || pitch > LAST_NOTE) continue;
    if (pitch < low) low = pitch;
    if (pitch > high) high = pitch;
  }
  if (low > high) return FULL_RANGE;

  let { first, last } = layoutKeys({ first: low, last: high }).range;
  // Widen one white key at a time, alternating below and above, until the range is wide enough.
  let whites = countWhite(first, last);
  let below = true;
  while (whites < MIN_FIT_WHITE_KEYS && (first > FIRST_NOTE || last < LAST_NOTE)) {
    if ((below && first > FIRST_NOTE) || last === LAST_NOTE) first = nextWhite(first, -1);
    else last = nextWhite(last, 1);
    whites++;
    below = !below;
  }
  return { first, last };
}

function nextWhite(pitch: number, step: 1 | -1): number {
  let next = pitch + step;
  while (isBlack(next)) next += step;
  return next;
}

function countWhite(first: number, last: number): number {
  let count = 0;
  for (let pitch = first; pitch <= last; pitch++) if (!isBlack(pitch)) count++;
  return count;
}
