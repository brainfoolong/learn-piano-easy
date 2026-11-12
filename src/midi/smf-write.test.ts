import { expect, test } from "../testing";
import { readMidi } from "./smf-read";
import { writeMidi } from "./smf-write";

/** The bytes of a format-1 file whose header holds `division`, with one track per body. */
function smf(division: [number, number], ...trackBodies: number[][]): Uint8Array {
  const out = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, 0, trackBodies.length, ...division];
  for (const body of trackBodies) {
    const n = body.length;
    out.push(0x4d, 0x54, 0x72, 0x6b, (n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff, ...body);
  }
  return new Uint8Array(out);
}

const END = [0x00, 0xff, 0x2f, 0x00];

test("write_then_read_gives_the_same_events", () => {
  const original = readMidi(
    smf(
      [0x01, 0xe0],
      [
        0x00, 0xff, 0x03, 0x05, ...[0x50, 0x69, 0x61, 0x6e, 0x6f], // track name "Piano"
        0x00, 0xff, 0x51, 0x03, 0x07, 0xa1, 0x20, // tempo
        0x00, 0xff, 0x58, 0x04, 0x06, 0x03, 0x18, 0x08, // time signature 6/8
        0x00, 0xff, 0x59, 0x02, 0xfd, 0x01, // key signature
        0x00, 0xff, 0x06, 0x01, 0xe9, // marker in Latin-1
        0x00, 0xff, 0x60, 0x01, 0x09, // an unknown meta type
        0x00, 0xff, 0x51, 0x02, 0x01, 0x02, // a tempo too short to decode
        0x00, 0xf0, 0x05, 0x7e, 0x7f, 0x09, 0x01, 0xf7, // sysex
        0x00, 0xf7, 0x02, 0xf3, 0x01, // escape
        ...END,
      ],
      [
        0x00, 0xc0, 0x05, // program
        0x00, 0x90, 60, 100, // note-on
        0x00, 64, 90, // running status
        0x81, 0x80, 0x00, 60, 0, // a 3-byte delta, note-on with velocity 0
        0x00, 0x80, 64, 40, // note-off
        0x00, 0xa1, 60, 10, // poly aftertouch
        0x00, 0xb1, 64, 127, // sustain down
        0x00, 0xd1, 33, // channel aftertouch
        0x00, 0xe1, 0x00, 0x00, // pitch bend at its lowest
        0x00, 0x7f, 0x7f, // running status: pitch bend at its highest
        0x00, 0xef, 0x00, 0x40, // pitch bend at the centre, channel 16
      ], // no end-of-track: the writer adds one
    ),
  );
  expect(original.problems).toEqual([]);

  const written = writeMidi(original);
  const back = readMidi(written);
  expect(back.problems).toEqual([]);
  expect(back.format).toBe(1);
  expect(back.division).toEqual(original.division);
  expect(back.tracks[0]!.events).toEqual(original.tracks[0]!.events);
  expect(back.tracks[1]!.events).toEqual([
    ...original.tracks[1]!.events,
    { tick: 16384, delta: 0, kind: "meta", type: 0x2f, data: new Uint8Array(0), meta: "endOfTrack" },
  ]);

  // Writing what was read back gives the same bytes, so the output relies on no running status.
  expect(writeMidi(back)).toEqual(written);

  // An SMPTE division of 29.97 frames per second and 40 ticks per frame survives too.
  const smpte = readMidi(smf([0xe3, 0x28], END));
  expect(smpte.division).toEqual({ kind: "smpte", framesPerSecond: 29.97, ticksPerFrame: 40 });
  expect(readMidi(writeMidi(smpte))).toEqual(smpte);
});

test("refuses_a_value_that_does_not_fit_its_field", () => {
  const file = readMidi(smf([0x01, 0xe0], [0x00, 0x90, 60, 100, ...END]));
  const event = file.tracks[0]!.events[0]!;
  if (event.kind !== "noteOn") throw new Error("the first event is not a note-on");
  event.velocity = 128;
  expect(() => writeMidi(file)).toThrow(RangeError);
});
