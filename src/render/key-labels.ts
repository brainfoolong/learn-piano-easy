/**
 * Key labels: the texts drawn over the piano's keys, which are each key's name and its computer key.
 *
 * Decisions, and what each costs:
 * - A key's name is spelt by `showPianoKeyNameFlats`, never by the song's key. The piano stays the same
 *   from song to song, so a learner reads its names the same way every time.
 * - White and black keys are switched apart, and the octave shows on every key, on C only or never.
 * - The texts are worked out here as plain data, so they are tested without a canvas. The scene and
 *   the piano view of `src/render/piano-keys.ts` draw them on sprites from `src/render/labels.ts`,
 *   at the same height and inset, whenever the range or an option changes, never per frame.
 *
 * Bounds: one name and one computer key at most per key of the range.
 */
import { keysOf } from "../input/keyboard";
import { keyLabel } from "../play/hotkeys";
import { noteName, type NamingSystem, pitchClass } from "../theory/note-names";
import { isBlack } from "./key-layout";

/** A key label's height, in world units. */
export const KEY_LABEL_HEIGHT = 0.5;
/** How far from its key's front end a key's name sits, in world units. */
export const KEY_NAME_INSET = { white: 0.7, black: 0.55 } as const;

/** Where a key's name shows its octave. */
export type OctaveLabel = "none" | "all" | "onlyC";

/** Which texts the keys carry, and how a name is written. */
export interface KeyLabelOptions {
  readonly white: boolean;
  readonly black: boolean;
  readonly flats: boolean;
  readonly octave: OctaveLabel;
  readonly system: NamingSystem;
  /** Whether each key shows the computer key that plays it. */
  readonly bindings: boolean;
  /** The `keyBindings` setting's text. */
  readonly keyBindings: string;
}

/** The texts of one key: its name and its computer key, each when shown. */
export interface KeyTexts {
  readonly name: string | undefined;
  readonly binding: string | undefined;
}

/** The name `pitch`'s key shows under `options`, or undefined when its colour of key shows none. */
export function keyNameText(pitch: number, options: Omit<KeyLabelOptions, "bindings" | "keyBindings">): string | undefined {
  if (!(isBlack(pitch) ? options.black : options.white)) return undefined;
  const octave = options.octave === "all" || (options.octave === "onlyC" && pitchClass(pitch) === 0);
  return noteName(pitch, { system: options.system, accidentals: options.flats ? "flats" : "sharps", octave });
}

/** The texts of every key in `pitches` under `options`, by pitch, leaving out keys that show nothing. */
export function keyTexts(pitches: Iterable<number>, options: KeyLabelOptions): Map<number, KeyTexts> {
  const codes = options.bindings ? keysOf(options.keyBindings) : undefined;
  const texts = new Map<number, KeyTexts>();
  for (const pitch of pitches) {
    const name = keyNameText(pitch, options);
    const code = codes?.get(pitch);
    const binding = code === undefined ? undefined : keyLabel(code);
    if (name !== undefined || binding !== undefined) texts.set(pitch, { name, binding });
  }
  return texts;
}
