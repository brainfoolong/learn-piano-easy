/**
 * The key: which major or minor key a song, or a stretch of it, is in, found from its notes or set by
 * the learner.
 *
 * Detection sums each pitch class's sounding time into a profile, and correlates it with the
 * Krumhansl-Kessler profile of each of the 24 keys. The key whose profile correlates best wins.
 *
 * Decisions, and what each costs:
 * - A note weighs its length in ticks, so a long note counts more than a passing one, and a tempo
 *   change does not shift the weights. A note with no length weighs nothing.
 * - Percussion tracks are left out, since their pitches name drums, not notes.
 * - The file's key signature is not read. Many files carry a default C major, and its minor flag is
 *   often wrong, so the notes are the better witness.
 * - A song has one key, and each section of `SECTION_MEASURES` measures has its own, so a modulation
 *   shows where it happens. A note across a section's edge weighs its part inside each.
 * - A tie between keys goes to the first in the order C major, C minor, C♯ major and so on. The order
 *   is fixed, so a song always gets the same key.
 * - The learner's override is one key for the whole song. It replaces the song's key and every
 *   section's, because a learner who names the key means all of it.
 *
 * Bounds: detection is one pass over the notes, then 24 correlations of 12 values per song or section.
 */

import { t } from "../i18n/live";
import type { Note, Song } from "../midi/song";
import { type Accidentals, type NameStyle, pitchClass, pitchClassName } from "./note-names";

export type Mode = "major" | "minor";

/** A key: its tonic's pitch class, from 0 for C to 11 for B, and its mode. */
export interface Key {
  tonic: number;
  mode: Mode;
}

/** A detected key, and how well the notes fit it: the correlation, from -1 to 1. */
export interface KeyEstimate {
  key: Key;
  fit: number;
}

/** One stretch of a song and its key, or undefined while it holds no notes. `endTick` is excluded. */
export interface KeySection {
  startTick: number;
  endTick: number;
  key: Key | undefined;
}

/** The measures in one section of key detection. */
export const SECTION_MEASURES = 8;

/** Krumhansl and Kessler's major profile, from the tonic up by semitones. */
const MAJOR_PROFILE = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
/** Krumhansl and Kessler's minor profile, from the tonic up by semitones. */
const MINOR_PROFILE = [6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];

/** The major tonics whose signature has flats: F, B♭, E♭, A♭, D♭ and G♭. */
const FLAT_MAJOR_TONICS = new Set([5, 10, 3, 8, 1, 6]);

/** The notes a profile reads: a pitch and a span in ticks. */
export type ProfileNote = Pick<Note, "pitch" | "startTick" | "endTick">;

/** The sounding ticks of each pitch class in `notes`, counting only the part from `from` to `to`. */
export function pitchClassProfile(notes: readonly ProfileNote[], from = -Infinity, to = Infinity): number[] {
  const profile = new Array<number>(12).fill(0);
  for (const note of notes) {
    const length = Math.min(note.endTick, to) - Math.max(note.startTick, from);
    if (length > 0) profile[pitchClass(note.pitch)]! += length;
  }
  return profile;
}

/** The key whose profile best fits `profile`, or undefined when the profile is empty or flat. */
export function keyOfProfile(profile: readonly number[]): KeyEstimate | undefined {
  let best: KeyEstimate | undefined;
  for (let tonic = 0; tonic < 12; tonic++) {
    for (const mode of ["major", "minor"] as const) {
      const reference = mode === "major" ? MAJOR_PROFILE : MINOR_PROFILE;
      const fit = correlation(profile, (pc) => reference[pitchClass(pc - tonic)]!);
      if (fit !== undefined && (best === undefined || fit > best.fit)) best = { key: { tonic, mode }, fit };
    }
  }
  return best;
}

/** The key of `notes`, or undefined when none of them has a length. */
export function detectKey(notes: readonly ProfileNote[]): KeyEstimate | undefined {
  return keyOfProfile(pitchClassProfile(notes));
}

/** The notes of `song` that key detection reads: every note off the percussion tracks. */
function pitchedNotes(song: Song): Note[] {
  const percussion = new Set(song.tracks.filter((track) => track.percussion).map((track) => track.index));
  return song.notes.filter((note) => !percussion.has(note.track));
}

/** The key of `song`: `override` when the learner set one, else the key its notes fit best. */
export function songKey(song: Song, override?: Key): Key | undefined {
  return override ?? detectKey(pitchedNotes(song))?.key;
}

/**
 * The sections of `song`, each `measures` measures long, with the key of each. With `override`, one
 * section spans the song and takes it.
 */
export function keySections(song: Song, override?: Key, measures = SECTION_MEASURES): KeySection[] {
  if (override) return [{ startTick: 0, endTick: song.endTick, key: override }];
  const notes = pitchedNotes(song);
  const sections: KeySection[] = [];
  for (let index = 0, startTick = 0; startTick < song.endTick; index++) {
    const endTick = Math.min(song.endTick, song.tempoMap.tickOfPosition((index + 1) * measures, 0));
    if (endTick <= startTick) break;
    sections.push({ startTick, endTick, key: keyOfProfile(pitchClassProfile(notes, startTick, endTick))?.key });
    startTick = endTick;
  }
  return sections;
}

/** The key that `sections` give at `tick`, or undefined outside them or in a section with no notes. */
export function keyAt(sections: readonly KeySection[], tick: number): Key | undefined {
  return sections.find((section) => tick >= section.startTick && tick < section.endTick)?.key;
}

/** How `key`'s signature spells its black keys: flats for F major and D minor, sharps for C and G. */
export function keyAccidentals(key: Key): Accidentals {
  const major = key.mode === "major" ? key.tonic : pitchClass(key.tonic + 3);
  return FLAT_MAJOR_TONICS.has(major) ? "flats" : "sharps";
}

/**
 * The name of `key` in the live locale, such as `B♭ major` or `Fa minor`, its tonic spelt as its
 * signature spells it. The catalog's `player.settings.key` puts the words around the tonic.
 */
export function keyName(key: Key, style: Pick<NameStyle, "system"> = {}): string {
  return t().player.settings.key(pitchClassName(key.tonic, { ...style, accidentals: keyAccidentals(key) }), key.mode);
}

/** `raw` read as a stored key, or undefined when it is not one. */
export function readKey(raw: unknown): Key | undefined {
  if (typeof raw !== "object" || raw === null) return undefined;
  const { tonic, mode } = raw as Record<string, unknown>;
  const valid = typeof tonic === "number" && Number.isInteger(tonic) && tonic >= 0 && tonic < 12 && (mode === "major" || mode === "minor");
  return valid ? { tonic, mode } : undefined;
}

/** Pearson's correlation of `values` with `reference(i)`, or undefined when either does not vary. */
function correlation(values: readonly number[], reference: (i: number) => number): number | undefined {
  let meanX = 0;
  let meanY = 0;
  for (let i = 0; i < 12; i++) {
    meanX += values[i]! / 12;
    meanY += reference(i) / 12;
  }
  let xy = 0;
  let xx = 0;
  let yy = 0;
  for (let i = 0; i < 12; i++) {
    const x = values[i]! - meanX;
    const y = reference(i) - meanY;
    xy += x * y;
    xx += x * x;
    yy += y * y;
  }
  return xx === 0 || yy === 0 ? undefined : xy / Math.sqrt(xx * yy);
}
