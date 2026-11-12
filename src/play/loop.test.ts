import type { Note, Song } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { SongClock } from "./clock";
import { loopRange, trainerSpeed, type LoopSpec } from "./loop";
import { Transport } from "./transport";

/** 4/4 at 120 BPM, so a beat lasts 0.5 s and a measure 2 s. */
const tempoMap = new TempoMap({ kind: "ticks", ticksPerBeat: 480 }, [{ tick: 0, microsecondsPerBeat: 500_000 }], [{ tick: 0, numerator: 4, denominator: 4 }]);

/** A song of 8 measures, 16 s, with one note at the start of each measure. */
function song(): Song {
  const notes: Note[] = Array.from({ length: 8 }, (_, i) => ({
    track: 0,
    channel: 0,
    pitch: 60 + i,
    velocity: 80,
    startTick: i * 1920,
    endTick: i * 1920 + 960,
    start: i * 2,
    end: i * 2 + 1,
  }));
  const endTick = 8 * 1920;
  return {
    tempoMap,
    tracks: [{ index: 0, name: "", program: 0, percussion: false, channels: [0], notes, pedals: [] }],
    notes,
    keySignatures: [],
    markers: [],
    lyrics: [],
    endTick,
    duration: tempoMap.ticksToSeconds(endTick),
    problems: [],
  };
}

/** Measures 3 and 4, from 4 s to 8 s, after a count-in of 4 beats. */
const LOOP: LoopSpec = { first: 3, last: 4, countInBeats: 4, clicks: true, auto: true, mute: true, trainerFrom: undefined };

/** A transport on an audio clock the test moves, with fakes that record what it is told. */
function setup() {
  const audio = { currentTime: 100 };
  const clock = new SongClock(audio);
  const told = { loaded: [] as Song[], restarts: 0, countIn: [] as readonly number[] };
  const fakes = {
    scheduler: { load: (s: Song) => told.loaded.push(s), start() {}, stop() {}, restart: () => told.restarts++, pump() {} },
    metronome: { setCountIn: (beats: readonly number[]) => (told.countIn = beats) },
    song: { noteOn() {}, noteOff() {} },
    resume: () => Promise.resolve(),
  };
  const scene = { setSong() {}, setTimeSource() {}, setCycle() {} };
  return { audio, told, transport: new Transport(clock, fakes, scene) };
}

test("loop_restarts_at_its_start_measure_after_the_count_in", () => {
  const range = loopRange(song(), LOOP);
  expect(range).toEqual({ countIn: 2, start: 4, end: 8, beats: [2, 2.5, 3, 3.5] });

  const { audio, told, transport } = setup();
  transport.load(song());
  transport.loop = LOOP;
  // The song time moves into the loop's count-in, and the count-in clicks on its four beats.
  expect(transport.time).toBe(2);
  expect(told.countIn).toEqual([2, 2.5, 3, 3.5]);
  // The scheduler plays only the notes of measures 3 and 4.
  expect(told.loaded.at(-1)?.notes.map((n) => n.start)).toEqual([4, 6]);

  transport.play();
  audio.currentTime += 5.99;
  transport.tick();
  expect(transport.time).toBeCloseTo(7.99, 9);
  // The clock wraps at the loop's end to the count-in, keeping the 0.01 s past it, and nothing seeks.
  audio.currentTime += 0.02;
  const restarts = told.restarts;
  const left: number[] = [];
  transport.onSeek((from) => left.push(from));
  expect(transport.time).toBeCloseTo(2.01, 9);
  transport.tick();
  expect(transport.playing).toBe(true);
  expect(told.restarts).toBe(restarts);
  // The listeners hear of the pass once, as a jump from the loop's end.
  transport.tick();
  expect(left).toEqual([8]);
  // After the count-in's four beats, the pass starts at the loop's first measure.
  audio.currentTime += 2;
  expect(transport.time).toBeCloseTo(4.01, 9);

  // Without auto restart, the song pauses at the count-in after a pass.
  transport.loop = { ...LOOP, auto: false };
  audio.currentTime += 4;
  transport.tick();
  expect(transport.playing).toBe(false);
  expect(transport.time).toBe(2);

  // A loop that starts at measure 1 counts in below 0.
  expect(loopRange(song(), { ...LOOP, first: 1, last: 1 })?.countIn).toBe(-2);
});

test("trainer_raises_speed_after_a_clean_pass", () => {
  expect(trainerSpeed(0.5, true)).toBe(0.55);
  expect(trainerSpeed(0.5, false)).toBe(0.5);
  expect(trainerSpeed(0.98, true)).toBe(1);
  expect(trainerSpeed(1, true)).toBe(1);
  expect(trainerSpeed(1.5, true)).toBe(1.5);

  const { audio, transport } = setup();
  transport.load(song());
  transport.loop = { ...LOOP, trainerFrom: 0.5 };
  expect(transport.speed).toBe(0.5);
  transport.play();
  const speeds: number[] = [];
  for (let pass = 0; pass < 12; pass++) {
    // A pass from the count-in at 2 s to the end at 8 s lasts 6 s of song time.
    audio.currentTime += 6 / transport.speed + 0.001;
    transport.tick();
    // Each pass wraps once, and the song time runs on a hair past the count-in.
    expect(transport.time).toBeCloseTo(2, 1);
    speeds.push(Math.round(transport.speed * 100));
  }
  expect(speeds).toEqual([55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 100, 100]);
  // The same trainer setting again leaves the speed where the passes took it.
  transport.loop = { ...LOOP, trainerFrom: 0.5 };
  expect(transport.speed).toBe(1);
});
