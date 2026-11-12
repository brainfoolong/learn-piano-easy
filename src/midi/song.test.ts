import { expect, test } from "../testing";
import { songFromMidi } from "./song";
import { readMidi } from "./smf-read";

/** The bytes of a format-1 file of 480 ticks per beat, with one track per body. */
function smf(...trackBodies: number[][]): Uint8Array {
  const out = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, 0, trackBodies.length, 0x01, 0xe0];
  for (const body of trackBodies) {
    const n = body.length;
    out.push(0x4d, 0x54, 0x72, 0x6b, (n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff, ...body);
  }
  return new Uint8Array(out);
}

test("pairs_notes_first_in_first_out_and_ends_open_ones_at_the_track_end", () => {
  const song = songFromMidi(
    readMidi(
      smf(
        [
          0x00, 0xff, 0x03, 0x02, 0x52, 0x48, // track name "RH"
          0x00, 0xff, 0x59, 0x02, 0x01, 0x00, // G major
          0x00, 0xc0, 0x05, // program 5
          0x00, 0x90, 60, 100, // C4 on
          0x00, 0xb0, 64, 127, // pedal down
          0x83, 0x60, 0x90, 60, 80, // 480: C4 on again while the first is open
          0x83, 0x60, 0x90, 60, 0, // 960: velocity 0 ends the first C4
          0x00, 0x80, 61, 0, // a note-off with no open note
          0x00, 0xb0, 64, 0, // pedal up
          0x00, 0xff, 0x06, 0x01, 0x41, // marker "A"
          0x00, 0xb0, 64, 100, // pedal down, left down
          0x83, 0x60, 0xff, 0x2f, 0x00, // 1440: the end, the second C4 still open
        ],
        [0x00, 0x99, 36, 90, 0x81, 0x70, 0x89, 36, 0, 0x00, 0xff, 0x05, 0x02, 0x6c, 0x61, 0x00, 0xff, 0x2f, 0x00],
      ),
    ),
  );
  const [right, drums] = song.tracks;
  expect(right!.name).toBe("RH");
  expect(right!.program).toBe(5);
  expect(right!.percussion).toBe(false);
  expect(right!.notes.map((n) => [n.pitch, n.velocity, n.startTick, n.endTick])).toEqual([
    [60, 100, 0, 960],
    [60, 80, 480, 1440],
  ]);
  expect(right!.notes[0]!.end).toBeCloseTo(1, 9);
  expect(right!.pedals.map((p) => [p.startTick, p.endTick])).toEqual([
    [0, 960],
    [960, 1440],
  ]);
  expect(drums!.percussion).toBe(true);
  expect(drums!.channels).toEqual([9]);
  expect(song.notes.map((n) => [n.track, n.pitch])).toEqual([
    [1, 36],
    [0, 60],
    [0, 60],
  ]);
  expect(song.keySignatures).toEqual([{ tick: 0, seconds: 0, sharps: 1, minor: false }]);
  expect(song.markers).toEqual([{ track: 0, tick: 960, seconds: 1, text: "A" }]);
  expect(song.lyrics).toEqual([{ track: 1, tick: 240, seconds: 0.25, text: "la" }]);
  expect(song.endTick).toBe(1440);
  expect(song.duration).toBeCloseTo(1.5, 9);
});
