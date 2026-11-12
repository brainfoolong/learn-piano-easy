import type { Cycle } from "../audio/scheduler";
import type { Note, Song } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { SongClock } from "./clock";
import { songSpan, Transport, type TransportAudio, type TransportScene } from "./transport";

/** A one-track song of `notes`, each a start and an end in seconds, lasting `duration` seconds at 120 BPM. */
function song(notes: readonly (readonly [number, number])[], duration: number): Song {
  const tempoMap = new TempoMap({ kind: "ticks", ticksPerBeat: 480 }, [{ tick: 0, microsecondsPerBeat: 500_000 }], [
    { tick: 0, numerator: 4, denominator: 4 },
  ]);
  const made: Note[] = notes.map(([start, end], i) => ({
    track: 0,
    channel: 0,
    pitch: 60 + i,
    velocity: 80,
    start,
    end,
    startTick: tempoMap.secondsToTicks(start),
    endTick: tempoMap.secondsToTicks(end),
  }));
  const endTick = tempoMap.secondsToTicks(duration);
  return {
    tempoMap,
    tracks: [{ index: 0, name: "Piano", program: 0, percussion: false, channels: [0], notes: made, pedals: [] }],
    notes: made,
    keySignatures: [],
    markers: [],
    lyrics: [],
    endTick,
    duration,
    problems: [],
  };
}

/** A transport on an audio clock the test moves, with silent audio and a scene that keeps its cycle. */
function setup() {
  const audioClock = { currentTime: 10 };
  const clock = new SongClock(audioClock);
  const scheduler = { load() {}, start() {}, stop() {}, restart() {}, pump() {} };
  const audio: TransportAudio = {
    scheduler,
    metronome: { setCountIn() {} },
    song: { noteOn: async () => {}, noteOff() {} },
    resume: async () => {},
  };
  const shown: { cycle: Cycle | undefined } = { cycle: undefined };
  const scene: TransportScene = {
    setSong() {},
    setTimeSource() {},
    setCycle(cycle) {
      shown.cycle = cycle;
    },
  };
  return { audioClock, transport: new Transport(clock, audio, scene), shown };
}

test("every_song_starts_the_lead_in_before_its_first_note", () => {
  const { transport } = setup();
  transport.leadIn = 2;
  // A first note at once gains room below 0, and a long silence is cut to the same two seconds.
  transport.load(song([[0, 1]], 4));
  expect(transport.time).toBe(-2);
  transport.load(song([[6.5, 7]], 9));
  expect(transport.time).toBe(4.5);
  transport.load(song([[2, 3]], 4));
  expect(transport.time).toBe(0);
});

test("a_song_without_notes_starts_at_0", () => {
  expect(songSpan(song([], 3), 2)).toEqual({ start: 0, end: 3 });
});

test("a_seek_stops_at_the_start_and_play_from_the_end_returns_there", () => {
  const { transport } = setup();
  transport.leadIn = 1.5;
  transport.load(song([[5, 6]], 8));
  transport.seek(0);
  expect(transport.time).toBe(3.5);
  transport.seek(8);
  transport.play();
  expect(transport.time).toBe(3.5);
});

test("stop_pauses_where_a_loaded_song_rests", () => {
  const { audioClock, transport } = setup();
  transport.leadIn = 2;
  transport.load(song([[1, 2]], 4));
  transport.play();
  audioClock.currentTime += 2.5;
  expect(transport.time).toBeCloseTo(1.5, 9);
  transport.stop();
  expect(transport.playing).toBe(false);
  expect(transport.time).toBe(-1);
});

test("a_repeat_waits_the_lead_in_before_each_pass", () => {
  const { audioClock, transport, shown } = setup();
  transport.leadIn = 2;
  // The file has 5 s of silence before its first note and 3 s after its last.
  transport.load(song([[5, 6], [6, 8]], 11));
  transport.restartOnEnd = true;
  expect(shown.cycle).toEqual({ from: 3, to: 8 });

  transport.play();
  audioClock.currentTime += 5.5;
  // Past the last note's end it wraps to the start, two seconds before the first note again.
  expect(transport.time).toBeCloseTo(3.5, 9);
});

test("a_new_lead_in_moves_a_song_waiting_at_its_start", () => {
  const { transport, shown } = setup();
  transport.leadIn = 2;
  transport.load(song([[1, 2]], 3));
  transport.restartOnEnd = true;
  transport.leadIn = 0.5;
  expect(transport.time).toBe(0.5);
  expect(shown.cycle).toEqual({ from: 0.5, to: 2 });

  // A song moved away from its start stays where it is.
  transport.seek(1.5);
  transport.leadIn = 3;
  expect(transport.time).toBe(1.5);
  expect(transport.start).toBe(-2);
});
