/**
 * Colour coding: a note's colour by its pitch or by its finger, in place of its track's colour, on the
 * notes, on the keys, or on both.
 *
 * Decisions, and what each costs:
 * - A finger's colour wins over a pitch's, and either wins over the track's. A learner who turns both on
 *   then sees the fingers, and the pitches show on the notes no hand plays.
 * - Each hand has its own five finger colours and a colour for a note it plays with no finger. A note no
 *   hand plays is never coloured by finger.
 * - The notes and the keys are switched apart, so the keys can show pitch colours under track-coloured
 *   notes, as a chart on the piano.
 * - A pitch's colour follows the pitch class of the note as written, never its folded key.
 *
 * Bounds: a coding holds 24 colours, read from the settings at each change of them.
 */
import type { Note } from "../midi/song";
import type { SettingId } from "../settings/schema";
import type { SettingsStore } from "../settings/store";
import { pitchClass } from "../theory/note-names";

/** The hand that plays a note and its finger, which may be missing. */
export interface Played {
  readonly hand: "right" | "left";
  readonly finger: number | undefined;
}

/** What colours notes and keys, and the colours, each as `0xrrggbb`. */
export interface ColorCoding {
  readonly pitchNotes: boolean;
  readonly pitchKeys: boolean;
  /** The colour of each pitch class, from C. */
  readonly pitch: readonly number[];
  readonly fingerNotes: boolean;
  readonly fingerKeys: boolean;
  /** Each hand's colour for no finger, then fingers 1 to 5. */
  readonly right: readonly number[];
  readonly left: readonly number[];
}

/** No coding: every note and key keeps its track's colour. */
export const NO_CODING: ColorCoding = {
  pitchNotes: false,
  pitchKeys: false,
  pitch: [],
  fingerNotes: false,
  fingerKeys: false,
  right: [],
  left: [],
};

const PITCH_IDS = [
  "colorCodeNote0",
  "colorCodeNote1",
  "colorCodeNote2",
  "colorCodeNote3",
  "colorCodeNote4",
  "colorCodeNote5",
  "colorCodeNote6",
  "colorCodeNote7",
  "colorCodeNote8",
  "colorCodeNote9",
  "colorCodeNote10",
  "colorCodeNote11",
] as const satisfies readonly SettingId[];
const RIGHT_IDS = [
  "colorCodeFingerDefaultRight",
  "colorCodeFinger1Right",
  "colorCodeFinger2Right",
  "colorCodeFinger3Right",
  "colorCodeFinger4Right",
  "colorCodeFinger5Right",
] as const satisfies readonly SettingId[];
const LEFT_IDS = [
  "colorCodeFingerDefaultLeft",
  "colorCodeFinger1Left",
  "colorCodeFinger2Left",
  "colorCodeFinger3Left",
  "colorCodeFinger4Left",
  "colorCodeFinger5Left",
] as const satisfies readonly SettingId[];

/** The coding the settings ask for. */
export function readColorCoding(settings: Pick<SettingsStore, "get">): ColorCoding {
  const rgb = (hex: string) => Number.parseInt(hex.slice(1, 7), 16);
  return {
    pitchNotes: settings.get("enableColorCodingNote"),
    pitchKeys: settings.get("enableColorCodingNotePiano"),
    pitch: PITCH_IDS.map((id) => rgb(settings.get(id))),
    fingerNotes: settings.get("enableColorCodingFinger"),
    fingerKeys: settings.get("enableColorCodingFingerPiano"),
    right: RIGHT_IDS.map((id) => rgb(settings.get(id))),
    left: LEFT_IDS.map((id) => rgb(settings.get(id))),
  };
}

/** Whether `coding` colours anything by finger, so the colours change with each finger set. */
export function codesFingers(coding: ColorCoding): boolean {
  return coding.fingerNotes || coding.fingerKeys;
}

/**
 * The colour `coding` gives `note` on the notes or on the keys, or undefined to keep its track's colour.
 * `played` is the hand and finger of the note, or undefined when no hand plays it.
 */
export function codedColor(coding: ColorCoding, on: "notes" | "keys", note: Note, played: Played | undefined): number | undefined {
  const byFinger = on === "notes" ? coding.fingerNotes : coding.fingerKeys;
  if (byFinger && played) {
    const colors = played.hand === "right" ? coding.right : coding.left;
    return colors[played.finger ?? 0];
  }
  const byPitch = on === "notes" ? coding.pitchNotes : coding.pitchKeys;
  return byPitch ? coding.pitch[pitchClass(note.pitch)] : undefined;
}
