/**
 * The song fit: how a song's notes land on the learner's keyboard, and which notes the app plays for them.
 *
 * A note in range is played on its own key. A note outside it is left to the app, which plays it and
 * never requires it. With folding on, such a note moves by octaves onto the nearest keys in range, where
 * it is drawn, pressed and required like any other.
 *
 * Decisions, and what each costs:
 * - The fit is a pure function of the pitch, the range and the fold switch. The renderer, the input and
 *   the audio then never disagree about a note, and a change of range costs one pass over the notes.
 * - A folded note can land on a key another note already sounds on. Both stay, so no note of the song
 *   is lost.
 * - A song's span skips its percussion tracks, whose notes name drums and not keys.
 */
import type { Note, Song } from "../midi/song";
import type { KeyRange } from "../render/key-layout";
import { foldIntoRange, inRange } from "./range";

/** A note the learner plays, with the key they play it on. */
export interface FittedNote {
  note: Note;
  key: number;
}

/** A song's notes split between the learner and the app. */
export interface SongFit {
  /** The notes the learner plays, in the song's order, each with its key in range. */
  learner: FittedNote[];
  /** The notes the app plays alone, in the song's order. */
  app: Note[];
}

/** The lowest and the highest note of a song, as MIDI note numbers. */
export interface NoteSpan {
  low: number;
  high: number;
}

/** The key the learner plays `pitch` on, or undefined when the app plays it. */
export function fitPitch(pitch: number, range: KeyRange, fold: boolean): number | undefined {
  if (inRange(pitch, range)) return pitch;
  return fold ? foldIntoRange(pitch, range) : undefined;
}

/** `notes` split between the learner, on `range`, and the app. */
export function fitSong(notes: readonly Note[], range: KeyRange, fold: boolean): SongFit {
  const fit: SongFit = { learner: [], app: [] };
  for (const note of notes) {
    const key = fitPitch(note.pitch, range, fold);
    if (key === undefined) fit.app.push(note);
    else fit.learner.push({ note, key });
  }
  return fit;
}

/** The span of `song`'s notes off its percussion tracks, or undefined when it has none. */
export function songSpan(song: Song): NoteSpan | undefined {
  let low = Infinity;
  let high = -Infinity;
  for (const track of song.tracks) {
    if (track.percussion) continue;
    for (const { pitch } of track.notes) {
      low = Math.min(low, pitch);
      high = Math.max(high, pitch);
    }
  }
  return low <= high ? { low, high } : undefined;
}
