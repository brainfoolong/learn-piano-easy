import { readMidi } from "../midi/smf-read";
import { songFromMidi } from "../midi/song";
import { writeMidi } from "../midi/smf-write";
import { expect, test } from "../testing";
import { InputBus } from "./input-bus";
import { Recorder } from "./recorder";

/** A bus on a clock the test moves, with a recorder listening to it. */
function rig() {
  let now = 1000;
  const bus = new InputBus(() => now);
  const recorder = new Recorder();
  bus.subscribe((event) => recorder.take(event));
  return { bus, recorder, at: (ms: number) => (now = ms) };
}

test("recording_writes_the_played_notes_in_order", () => {
  const { bus, recorder, at } = rig();
  bus.noteOn(48, 50, "keyboard"); // held before the take, so only its note-off comes in it
  recorder.start();
  at(2000);
  bus.noteOff(48, "keyboard");
  at(2500);
  bus.noteOn(60, 90, "midi");
  at(3000);
  bus.noteOn(64, 70, "pointer");
  at(3500);
  bus.noteOff(60, "midi");
  at(4000);
  const file = recorder.stop(4250);
  expect(recorder.recording).toBe(false);
  expect(file).toBeDefined();

  const song = songFromMidi(readMidi(writeMidi(file!)));
  const notes = song.notes.map((note) => [note.pitch, note.velocity, note.start, note.end - note.start]);
  // The file starts at the first note, and the key still held ends where the take stops.
  expect(notes).toEqual([
    [60, 90, 0, 1],
    [64, 70, 0.5, 1.25],
  ]);
});

test("a_take_without_notes_writes_no_file", () => {
  const { bus, recorder } = rig();
  expect(recorder.stop(0)).toBeUndefined();
  recorder.start();
  bus.pedal(true, "midi");
  expect(recorder.stop(2000)).toBeUndefined();
});

test("the_pedal_is_recorded_and_let_go_at_the_end", () => {
  const { bus, recorder, at } = rig();
  recorder.start();
  bus.pedal(true, "midi");
  at(1500);
  bus.noteOn(60, 64, "midi");
  const events = recorder.stop(2000)!.tracks[0]!.events;
  const pedals = events.flatMap((event) => (event.kind === "controller" ? [[event.tick, event.value]] : []));
  expect(pedals).toEqual([
    [0, 127],
    [960, 0],
  ]);
});
