import { expect, test } from "../testing";
import { MidiReadError, readMidi } from "./smf-read";

/** The bytes of a file with a format-1 header of 480 ticks per beat, and one track per body. */
function smf(...trackBodies: number[][]): Uint8Array {
  const out = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, 0, trackBodies.length, 0x01, 0xe0];
  for (const body of trackBodies) {
    const n = body.length;
    out.push(0x4d, 0x54, 0x72, 0x6b, (n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff, ...body);
  }
  return new Uint8Array(out);
}

const END = [0x00, 0xff, 0x2f, 0x00];

test("reads_running_status", () => {
  const file = readMidi(
    smf([
      0x00, 0x90, 60, 100, // note-on C4
      0x00, 64, 90, // running status: note-on E4
      0x83, 0x60, 60, 0, // 480 ticks later, note-on velocity 0 ends C4
      0x00, 0xff, 0x01, 0x01, 0x41, // a text meta event between two running-status events
      0x00, 64, 0, // running status survives the meta event
      0x10, 0xe1, 0x00, 0x40, // pitch bend at the centre, channel 2
      0x00, 0x7f, 0x7f, // running status of the pitch bend: its highest value
      ...END,
    ]),
  );
  expect(file.problems).toEqual([]);
  const events = file.tracks[0]!.events.map((event) => {
    const { data: _, ...rest } = event as { data?: unknown };
    return rest;
  });
  expect(events).toEqual([
    { tick: 0, delta: 0, kind: "noteOn", channel: 0, note: 60, velocity: 100 },
    { tick: 0, delta: 0, kind: "noteOn", channel: 0, note: 64, velocity: 90 },
    { tick: 480, delta: 480, kind: "noteOn", channel: 0, note: 60, velocity: 0 },
    { tick: 480, delta: 0, kind: "meta", type: 1, meta: "text", text: "A" },
    { tick: 480, delta: 0, kind: "noteOn", channel: 0, note: 64, velocity: 0 },
    { tick: 496, delta: 16, kind: "pitchBend", channel: 1, value: 0 },
    { tick: 496, delta: 0, kind: "pitchBend", channel: 1, value: 8191 },
    { tick: 496, delta: 0, kind: "meta", type: 0x2f, meta: "endOfTrack" },
  ]);
});

test("reads_meta_and_sysex_events", () => {
  const file = readMidi(
    smf(
      [
        0x00, 0xff, 0x03, 0x05, ...[0x50, 0x69, 0x61, 0x6e, 0x6f], // track name "Piano"
        0x00, 0xff, 0x51, 0x03, 0x07, 0xa1, 0x20, // tempo 500000 us per beat
        0x00, 0xff, 0x58, 0x04, 0x06, 0x03, 0x18, 0x08, // time signature 6/8
        0x00, 0xff, 0x59, 0x02, 0xfd, 0x01, // key signature: 3 flats, minor
        0x00, 0xff, 0x05, 0x02, 0xc3, 0xa9, // lyric "é" in UTF-8
        0x00, 0xff, 0x06, 0x01, 0xe9, // marker "é" in Latin-1
        0x00, 0xff, 0x54, 0x05, 0x61, 0x02, 0x03, 0x04, 0x05, // SMPTE offset, hours byte holding the rate
        0x00, 0xff, 0x7f, 0x02, 0x01, 0x02, // sequencer-specific
        0x00, 0xff, 0x60, 0x01, 0x09, // an unknown meta type
        0x00, 0xf0, 0x05, 0x7e, 0x7f, 0x09, 0x01, 0xf7, // sysex: General MIDI on
        0x00, 0xf7, 0x02, 0xf3, 0x01, // escape: raw bytes
        ...END,
      ],
      [0x00, 0xb0, 64, 127, 0x00, 0xc0, 5, 0x00, 0xd0, 30, 0x00, 0xa0, 60, 20, 0x00, 0x80, 60, 40, ...END],
    ),
  );
  expect(file.format).toBe(1);
  expect(file.division).toEqual({ kind: "ticks", ticksPerBeat: 480 });
  expect(file.problems).toEqual([]);
  const [first, second] = file.tracks;
  expect(first!.events).toMatchObject([
    { meta: "trackName", text: "Piano" },
    { meta: "tempo", microsecondsPerBeat: 500000 },
    { meta: "timeSignature", numerator: 6, denominator: 8, clocksPerClick: 24, thirtySecondsPerBeat: 8 },
    { meta: "keySignature", sharps: -3, minor: true },
    { meta: "lyric", text: "é" },
    { meta: "marker", text: "é" },
    { meta: "smpteOffset", hours: 1, minutes: 2, seconds: 3, frames: 4, subframes: 5 },
    { meta: "sequencerSpecific", type: 0x7f, data: new Uint8Array([1, 2]) },
    { meta: "unknown", type: 0x60, data: new Uint8Array([9]) },
    { kind: "sysex", data: new Uint8Array([0x7e, 0x7f, 0x09, 0x01, 0xf7]) },
    { kind: "escape", data: new Uint8Array([0xf3, 0x01]) },
    { meta: "endOfTrack" },
  ]);
  expect(second!.events).toMatchObject([
    { kind: "controller", channel: 0, controller: 64, value: 127 },
    { kind: "program", channel: 0, program: 5 },
    { kind: "channelAftertouch", channel: 0, pressure: 30 },
    { kind: "polyAftertouch", channel: 0, note: 60, pressure: 20 },
    { kind: "noteOff", channel: 0, note: 60, velocity: 40 },
    { meta: "endOfTrack" },
  ]);
});

test("reads_smpte_time_division_and_skips_unknown_chunks", () => {
  const bytes = smf([0x00, 0x90, 60, 1, ...END]);
  bytes[12] = 0xe7; // -25 frames per second
  bytes[13] = 40;
  const withAlien = new Uint8Array([...bytes.slice(0, 14), 0x58, 0x58, 0x58, 0x58, 0, 0, 0, 2, 1, 2, ...bytes.slice(14)]);
  const file = readMidi(withAlien);
  expect(file.division).toEqual({ kind: "smpte", framesPerSecond: 25, ticksPerFrame: 40 });
  expect(file.tracks.length).toBe(1);
  expect(file.problems).toEqual([]);
});

test("rejects_a_truncated_track_without_hanging", () => {
  const whole = smf([0x00, 0x90, 60, 100, 0x83, 0x60, 0x80, 60, 0, 0x00, 0xff, 0x01, 0x10, 0x41, 0x42, ...END]);
  const started = performance.now();
  for (let cut = 14; cut < whole.length; cut++) {
    const file = readMidi(whole.slice(0, cut));
    expect(file.tracks.length).toBeLessThanOrEqual(1);
    for (const problem of file.problems) expect(problem.message).toContain(`at byte ${problem.offset}`);
  }
  // Cut inside the second event: the first event survives, and the break names its offset.
  const cutAt = 14 + 8 + 6;
  const cut = readMidi(whole.slice(0, cutAt));
  expect(cut.tracks[0]!.events).toMatchObject([{ kind: "noteOn", note: 60, velocity: 100 }]);
  expect(cut.problems[0]!.offset).toBeGreaterThanOrEqual(14);
  expect(cut.problems[0]!.offset).toBeLessThanOrEqual(cutAt);
  // A text event longer than its track ends the track without reading past the chunk.
  const cutText = readMidi(whole);
  expect(cutText.problems.length).toBe(1);
  expect(cutText.tracks[0]!.events.length).toBe(2);

  expect(() => readMidi(new Uint8Array([0x4d, 0x54, 0x68]))).toThrow(MidiReadError);
  expect(() => readMidi(new Uint8Array([0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1]))).toThrow(/at byte 10/);
  expect(() => readMidi(smf([0x00, 60, 100]))).not.toThrow();
  expect(readMidi(smf([0x00, 60, 100])).problems[0]!.message).toContain("before any status byte");
  expect(() => readMidi(smf([0xff, 0xff, 0xff, 0xff, 0x7f]))).not.toThrow();
  expect(performance.now() - started).toBeLessThan(1000);
});
