import type { Note, Song } from "../midi/song";
import { songWithout } from "../play/transport";
import { expect, test } from "../testing";
import { InputBus } from "./input-bus";
import { autoHands, momentsOf, requiredNotes, WaitMode, type LearnerPart } from "./wait-mode";

/** A 61-key keyboard, C2 to C7. */
const range = { first: 36, last: 96 };

function note(track: number, pitch: number, beat: number): Note {
  return { track, channel: track, pitch, velocity: 80, startTick: beat * 480, endTick: beat * 480 + 240, start: beat, end: beat + 0.5 };
}

/** A song of one pitched track per entry of `tracks`. */
function song(...tracks: Note[][]): Song {
  const songTracks = tracks.map((notes, index) => ({ index, name: "", program: 0, percussion: false, channels: [index], notes, pedals: [] }));
  const notes = songTracks.flatMap((track) => track.notes).sort((a, b) => a.start - b.start || a.pitch - b.pitch);
  return { tempoMap: undefined as never, tracks: songTracks, notes, keySignatures: [], markers: [], lyrics: [], endTick: 4 * 480, duration: 4, problems: [] };
}

/** A song clock that runs only when a test moves `raw`, and stops at its hold as `SongClock` does. */
class FakeClock {
  raw = 0;
  hold: number | undefined;
  playing = true;
  get heldAt(): number | undefined {
    return this.hold;
  }
  get time(): number {
    return this.hold === undefined ? this.raw : Math.min(this.raw, this.hold);
  }
  holdAt(seconds: number | undefined): void {
    if (this.hold !== undefined) this.raw = this.time;
    this.hold = seconds;
  }
}

function waiting(notes: Song, part: LearnerPart) {
  const bus = new InputBus(() => 0);
  const clock = new FakeClock();
  const wait = new WaitMode(bus, clock);
  wait.setMoments(momentsOf(requiredNotes(notes, part), part));
  return { bus, clock, wait };
}

test("song_waits_until_every_chord_note_is_held", () => {
  // The left hand plays C3 under the right hand's C major chord, then the right hand plays D4.
  const left = [note(0, 48, 1)];
  const right = [note(1, 60, 1), note(1, 64, 1), note(1, 67, 1), note(1, 62, 2), note(1, 60, 3)];
  const { bus, clock } = waiting(song(left, right), { hands: "right", range, fold: false });
  expect(clock.hold).toBe(1);

  clock.raw = 1.5;
  expect(clock.time).toBe(1);
  bus.noteOn(60, 80, "midi");
  bus.noteOn(64, 80, "midi");
  expect(clock.hold).toBe(1);

  // A key let go before the chord is complete no longer counts.
  bus.noteOff(60, "midi");
  bus.noteOn(67, 80, "midi");
  expect(clock.hold).toBe(1);
  bus.noteOn(60, 80, "keyboard");
  expect(clock.hold).toBe(2);

  clock.raw = 2.5;
  bus.noteOn(62, 80, "midi");
  expect(clock.hold).toBe(3);

  // Middle C, still held from the chord, must be struck anew.
  clock.raw = 3.5;
  bus.noteOn(60, 80, "midi");
  expect(clock.hold).toBe(3);
  bus.noteOff(60, "midi");
  bus.noteOff(60, "keyboard");
  bus.noteOn(60, 80, "midi");
  expect(clock.hold).toBeUndefined();
});

test("a_hand_left_out_is_played_by_the_app", () => {
  // The left hand's track comes first, as in the demo song, and the higher track is still the right hand.
  const left = [note(0, 48, 1), note(0, 43, 2)];
  const right = [note(1, 72, 1), note(1, 76, 2)];
  const both = song(left, right);
  expect(autoHands(both)).toEqual(["left", "right"]);

  const learner = requiredNotes(both, { hands: "right", range, fold: false });
  expect(learner).toEqual(right);
  expect(songWithout(both, new Set(learner)).notes).toEqual(left);
  const other = requiredNotes(both, { hands: "left", range, fold: false });
  expect(songWithout(both, new Set(other)).notes).toEqual(right);

  // One pitched track splits at middle C.
  const single = song([note(0, 48, 1), note(0, 60, 1)]);
  expect(requiredNotes(single, { hands: "left", range, fold: false }).map((n) => n.pitch)).toEqual([48]);

  // With the left hand left out, its notes neither stop the song nor need a key.
  const { bus, clock, wait } = waiting(both, { hands: "right", range, fold: false });
  clock.raw = 1.2;
  bus.noteOn(72, 80, "midi");
  expect(clock.hold).toBe(2);

  // Turning wait mode off lets the song run on.
  wait.setMoments([]);
  expect(clock.hold).toBeUndefined();
});

test("notes_outside_the_range_need_not_be_played", () => {
  // C8 lies above a 61-key keyboard, so only middle C stops the song.
  const notes = song([note(0, 60, 1), note(0, 108, 1)]);
  const part: LearnerPart = { hands: "both", range, fold: false };
  expect(momentsOf(requiredNotes(notes, part), part)).toEqual([{ start: 1, pitches: [60] }]);
  const { bus, clock } = waiting(notes, part);
  clock.raw = 1;
  bus.noteOn(60, 80, "midi");
  expect(clock.hold).toBeUndefined();

  // With folding on, C8 is played on C7, the key the scene shows it on.
  const folded: LearnerPart = { hands: "both", range, fold: true };
  expect(momentsOf(requiredNotes(notes, folded), folded)).toEqual([{ start: 1, pitches: [60, 96] }]);
});
