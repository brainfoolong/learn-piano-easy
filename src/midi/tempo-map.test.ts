import { expect, test } from "../testing";
import { readMidi } from "./smf-read";
import { TempoMap } from "./tempo-map";

const TICKS = { kind: "ticks", ticksPerBeat: 480 } as const;

/** The bytes of a format-1 file of 480 ticks per beat, with one track per body. */
function smf(...trackBodies: number[][]): Uint8Array {
  const out = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, 0, trackBodies.length, 0x01, 0xe0];
  for (const body of trackBodies) {
    const n = body.length;
    out.push(0x4d, 0x54, 0x72, 0x6b, (n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff, ...body);
  }
  return new Uint8Array(out);
}

test("ticks_to_seconds_across_tempo_changes", () => {
  // 120 bpm until tick 960, then 240 bpm until tick 1920, then 60 bpm. The tempos sit in two tracks.
  const file = readMidi(
    smf(
      [0x00, 0xff, 0x51, 0x03, 0x07, 0xa1, 0x20, 0x8f, 0x00, 0xff, 0x51, 0x03, 0x0f, 0x42, 0x40, 0x00, 0xff, 0x2f, 0x00],
      [0x87, 0x40, 0xff, 0x51, 0x03, 0x03, 0xd0, 0x90, 0x00, 0xff, 0x2f, 0x00],
    ),
  );
  const map = TempoMap.fromMidi(file);
  const cases: [number, number][] = [
    [0, 0],
    [480, 0.5],
    [960, 1],
    [1440, 1.25],
    [1920, 1.5],
    [2400, 2.5],
  ];
  for (const [tick, seconds] of cases) {
    expect(map.ticksToSeconds(tick)).toBeCloseTo(seconds, 9);
    expect(map.secondsToTicks(seconds)).toBeCloseTo(tick, 6);
  }
  expect(map.secondsToTicks(map.ticksToSeconds(1234.5))).toBeCloseTo(1234.5, 6);
  expect(map.microsecondsPerBeatAt(1000)).toBe(250_000);
  expect(map.ticksToSeconds(-480)).toBeCloseTo(-0.5, 9);

  // No tempo event: 120 bpm. A tempo of 0 is ignored.
  const plain = new TempoMap(TICKS, [{ tick: 0, microsecondsPerBeat: 0 }], []);
  expect(plain.ticksToSeconds(960)).toBeCloseTo(1, 9);

  // Two tempos at one tick: the one read last wins.
  const twice = new TempoMap(TICKS, [{ tick: 0, microsecondsPerBeat: 1_000_000 }, { tick: 0, microsecondsPerBeat: 250_000 }], []);
  expect(twice.ticksToSeconds(480)).toBeCloseTo(0.25, 9);

  // SMPTE: 25 frames of 40 ticks is 1000 ticks a second, whatever the tempo events say.
  const smpte = new TempoMap({ kind: "smpte", framesPerSecond: 25, ticksPerFrame: 40 }, [{ tick: 0, microsecondsPerBeat: 1_000_000 }], []);
  expect(smpte.ticksToSeconds(2500)).toBeCloseTo(2.5, 9);
  expect(smpte.secondsToTicks(0.75)).toBeCloseTo(750, 6);
  expect(smpte.positionAt(2.5)).toEqual({ measure: 1, beat: 1 });
});

test("measure_and_beat_of_a_time_across_signature_changes", () => {
  // 4/4 for two measures, then 3/4, then 6/8 from the middle of measure 3, which starts measure 4 there.
  const map = new TempoMap(
    TICKS,
    [],
    [
      { tick: 3840, numerator: 3, denominator: 4 },
      { tick: 5760, numerator: 6, denominator: 8 },
    ],
  );
  expect(map.signatures.map((s) => [s.tick, s.numerator, s.denominator, s.measure])).toEqual([
    [0, 4, 4, 0],
    [3840, 3, 4, 2],
    [5760, 6, 8, 4],
  ]);
  const cases: [number, number, number][] = [
    [0, 0, 0],
    [2400, 1, 1],
    [3840, 2, 0],
    [5520, 3, 0.5],
    [5760, 4, 0],
    [7920, 5, 3],
  ];
  for (const [tick, measure, beat] of cases) {
    expect(map.positionAtTick(tick)).toEqual({ measure, beat });
    expect(map.tickOfPosition(measure, beat)).toBeCloseTo(tick, 9);
  }
  // At 120 bpm a tick is 1/960 of a second.
  expect(map.positionAt(2.5)).toEqual({ measure: 1, beat: 1 });
  expect(map.secondsOfPosition(5, 3)).toBeCloseTo(7920 / 960, 9);
  expect(map.positionAtTick(-480)).toEqual({ measure: -1, beat: 3 });

  const beats = map.beatsUntil(5760);
  expect(beats.length).toBe(13);
  expect(beats[8]).toEqual({ tick: 3840, seconds: 4, measure: 2, beat: 0 });
  expect(beats[11]).toMatchObject({ tick: 5280, measure: 3, beat: 0 });
  expect(beats[12]).toMatchObject({ tick: 5760, measure: 4, beat: 0 });
});
