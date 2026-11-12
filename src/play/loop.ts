/**
 * The loop and the loop trainer, as pure functions over a song's tempo map and song time.
 *
 * A loop is a range of whole measures. Before each pass a count-in of some beats runs, so each pass
 * starts that many beats before the loop's first measure. The transport asks `loopRange` for the song
 * times of a loop. Its passes repeat from the count-in to the end, seamlessly when they start at once.
 *
 * Decisions, and what each costs:
 * - The learner names the first and the last measure, both counted from 1 and both played, as the
 *   timeline counts them. Two measures in the wrong order are swapped.
 * - The count-in runs at the beat and the tempo in force at the loop's start. It counts in the loop's
 *   own pulse even across a tempo change, and before measure 1 the song time runs below 0.
 * - A loop past the song's end ends with the song. A loop that starts at or past the end is no loop.
 * - The trainer raises the speed by `TRAINER_STEP` after each clean pass, up to 100 %. A speed already
 *   above 100 % stays where the learner set it.
 */
import type { Song } from "../midi/song";
import type { SettingsStore } from "../settings/store";

/** How much the trainer adds to the speed after each clean pass. */
export const TRAINER_STEP = 0.05;

/** A loop as the learner sets it. */
export interface LoopSpec {
  /** The first measure played, counted from 1. */
  readonly first: number;
  /** The last measure played, counted from 1. */
  readonly last: number;
  /** How many beats the count-in lasts. */
  readonly countInBeats: number;
  /** Whether the count-in clicks on its beats. */
  readonly clicks: boolean;
  /** Whether the loop plays on into its next pass, or pauses at its count-in. */
  readonly auto: boolean;
  /** Whether the song's notes outside the loop are silent. */
  readonly mute: boolean;
  /** The speed the trainer starts at, or undefined when the trainer is off. */
  readonly trainerFrom: number | undefined;
}

/** A loop's song times, in seconds. */
export interface LoopRange {
  /** Where each pass starts, the count-in's first beat. It lies below 0 before measure 1. */
  readonly countIn: number;
  /** Where the first measure starts. */
  readonly start: number;
  /** Where the last measure ends, or the song's end when that comes first. */
  readonly end: number;
  /** The song time of each count-in beat, in order. The first is the accented one. */
  readonly beats: readonly number[];
}

/** The song times of `spec` in `song`, or undefined when the loop starts at or past the song's end. */
export function loopRange(song: Song, spec: LoopSpec): LoopRange | undefined {
  const map = song.tempoMap;
  const first = Math.max(1, Math.round(Math.min(spec.first, spec.last)));
  const last = Math.max(1, Math.round(Math.max(spec.first, spec.last)));
  const startTick = map.tickOfPosition(first - 1, 0);
  const start = map.ticksToSeconds(startTick);
  const end = Math.min(song.duration, map.secondsOfPosition(last, 0));
  if (start >= end) return undefined;
  const secondsPerBeat = (map.signatureAt(startTick).ticksPerBeat * map.microsecondsPerBeatAt(startTick)) / 1e6 / map.ticksPerQuarter;
  const count = Math.max(0, Math.round(spec.countInBeats));
  const countIn = start - count * secondsPerBeat;
  const beats = Array.from({ length: count }, (_, i) => countIn + i * secondsPerBeat);
  return { countIn, start, end, beats };
}

/** The speed after a pass at `speed`: one `TRAINER_STEP` more after a clean pass, up to 100 %. */
export function trainerSpeed(speed: number, clean: boolean): number {
  if (!clean || speed >= 1) return speed;
  return Math.min(1, Math.round((speed + TRAINER_STEP) / TRAINER_STEP) * TRAINER_STEP);
}

/** The loop the settings set, or undefined while the loop is off. */
export function loopSpec(settings: SettingsStore): LoopSpec | undefined {
  if (!settings.get("enableLoop")) return undefined;
  return {
    first: settings.get("loopStart"),
    last: settings.get("loopEnd"),
    countInBeats: settings.get("loopDelay"),
    clicks: settings.get("enableLoopBeats"),
    auto: settings.get("autoLoop"),
    mute: settings.get("muteLoop"),
    trainerFrom: settings.get("loopTrainer") ? settings.get("loopTrainerSpeed") / 100 : undefined,
  };
}

/** The settings `loopSpec` reads. */
export const LOOP_SETTINGS: ReadonlySet<string> = new Set([
  "enableLoop",
  "loopStart",
  "loopEnd",
  "loopDelay",
  "enableLoopBeats",
  "autoLoop",
  "muteLoop",
  "loopTrainer",
  "loopTrainerSpeed",
]);
