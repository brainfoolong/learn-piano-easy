/**
 * The hand lab's phrases: short pieces with their finger numbers, each showing one motion of the plan.
 *
 * Every phrase fits the lab's piano, `LAB_RANGE`. A phrase is written as rows of notes, one beat apart,
 * and `BEAT` turns the beats into seconds at the lab's normal speed.
 */
import type { PhraseNote } from "../../src/render/hand/hand-plan";
import type { Finger, Hand } from "../../src/theory/fingering";

/** A beat at the lab's normal speed, in seconds: 120 beats a minute. */
const BEAT = 0.5;

/** One note in beats: its pitch, its finger, its start and its length. */
type Beat = [pitch: number, finger: Finger, at: number, beats: number];

function notes(hand: Hand, beats: readonly Beat[], velocity?: number): PhraseNote[] {
  return beats.map(([pitch, finger, at, length]) => ({
    pitch,
    finger,
    hand,
    at: at * BEAT,
    seconds: length * BEAT,
    ...(velocity === undefined ? {} : { velocity }),
  }));
}

/** A run of `pitches` with `fingers`, one a beat from `start`, each held `length` beats. */
function run(pitches: readonly number[], fingers: readonly Finger[], start = 0, length = 1): Beat[] {
  return pitches.map((pitch, i) => [pitch, fingers[i]!, start + i, length]);
}

/** The C major scale up and down an octave from `tonic`, with a hand's usual fingers. */
function scale(hand: Hand, tonic: number): PhraseNote[] {
  const up = [0, 2, 4, 5, 7, 9, 11, 12].map((step) => tonic + step);
  const pitches = [...up, ...up.slice(0, -1).reverse()];
  const fingers: Finger[] =
    hand === "right" ? [1, 2, 3, 1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 2, 1] : [5, 4, 3, 2, 1, 3, 2, 1, 2, 3, 1, 2, 3, 4, 5];
  return notes(hand, run(pitches, fingers));
}

/** Broken chords low, high, middle, high, as a left hand accompanies: C, F, C and G. */
function alberti(): PhraseNote[] {
  // Each bar's low, high and middle note, and the middle note's finger.
  const bars: [number, number, number, Finger][] = [
    [48, 55, 52, 3],
    [48, 57, 53, 2],
    [48, 55, 52, 3],
    [50, 59, 55, 2],
  ];
  return notes(
    "left",
    bars.flatMap(([low, high, middle, finger], bar) => run([low, high, middle, high], [5, 1, finger, 1], bar * 4)),
  );
}

/** Five notes up and down in the C position, legato, then the same staccato after a breath. */
function fives(): PhraseNote[] {
  const pitches = [60, 62, 64, 65, 67, 65, 64, 62, 60];
  const fingers: Finger[] = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  return notes("right", [...run(pitches, fingers, 0, 1), ...run(pitches, fingers, pitches.length + 2, 0.3)]);
}

/** The C, F and G chords in both hands, each struck and held, and C again. */
function chords(): PhraseNote[] {
  const right: [number, number, number][] = [
    [60, 64, 67],
    [65, 69, 72],
    [67, 71, 74],
    [60, 64, 67],
  ];
  const fingers: Finger[] = [1, 3, 5];
  return [
    ...notes("right", right.flatMap((chord, i) => chord.map((pitch, k): Beat => [pitch, fingers[k]!, i * 3, 2])), 96),
    ...notes("left", right.flatMap((chord, i) => chord.map((pitch, k): Beat => [pitch - 12, fingers[2 - k]!, i * 3, 2])), 96),
  ];
}

/** The lab's phrases by name, in the order its buttons show them. */
export const PHRASES: Readonly<Record<string, PhraseNote[]>> = {
  "right scale": scale("right", 60),
  "left scale": scale("left", 48),
  "both scales": [...scale("right", 60), ...scale("left", 48)],
  alberti: alberti(),
  fives: fives(),
  chords: chords(),
};
