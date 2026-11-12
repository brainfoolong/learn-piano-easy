import type { Note, Song } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { expect, test } from "../testing";
import { SongClock } from "../play/clock";
import { Scheduler, type NotePlayer, type Timer } from "./scheduler";

/** A song of one piano track holding `notes`, each given as pitch, start and end in seconds. */
function song(...notes: [number, number, number][]): Song {
  const tempoMap = new TempoMap({ kind: "ticks", ticksPerBeat: 480 }, [], []);
  const full: Note[] = notes.map(([pitch, start, end]) => ({
    track: 0,
    channel: 0,
    pitch,
    velocity: 100,
    startTick: start * 960,
    endTick: end * 960,
    start,
    end,
  }));
  const track = { index: 0, name: "", program: 0, percussion: false, channels: [0], notes: full, pedals: [] };
  const endTick = Math.max(0, ...full.map((n) => n.endTick));
  return {
    tempoMap,
    tracks: [track],
    notes: full,
    keySignatures: [],
    markers: [],
    lyrics: [],
    endTick,
    duration: tempoMap.ticksToSeconds(endTick),
    problems: [],
  };
}

/** A scheduler on a clock the test moves, whose player records each call as text. */
function setup(speed = 1) {
  const clock = { currentTime: 10 };
  const calls: string[] = [];
  const player: NotePlayer = {
    noteOn: (note, _velocity, time) => calls.push(`on ${note} @${time.toFixed(3)}`),
    noteOff: (note, time) => void calls.push(`off ${note} @${time.toFixed(3)}`),
    pedal: (down, time) => void calls.push(`pedal ${down} @${time.toFixed(3)}`),
    stopAll: () => void calls.push("stopAll"),
  };
  const timer: Timer = { every: () => () => {} };
  const songClock = new SongClock(clock);
  songClock.speed = speed;
  const scheduler = new Scheduler(player, songClock, { aheadMs: 100, intervalMs: 25 }, timer);
  const play = () => {
    songClock.play();
    scheduler.start();
  };
  return { clock, calls, songClock, scheduler, play };
}

test("each_note_is_scheduled_once_across_windows", () => {
  const { clock, calls, scheduler, play } = setup();
  scheduler.load(song([60, 0, 0.15], [62, 0.1, 0.1], [64, 0.25, 0.3]));
  play();
  for (let t = 10; t <= 10.5; t += 0.025) {
    clock.currentTime = t;
    scheduler.pump();
    scheduler.pump();
  }
  expect(calls).toEqual([
    "on 60 @10.000",
    "on 62 @10.100",
    "off 62 @10.100",
    "off 60 @10.150",
    "on 64 @10.250",
    "off 64 @10.300",
  ]);
});

test("a_seek_schedules_no_past_notes", () => {
  const { clock, calls, songClock, scheduler, play } = setup();
  scheduler.load(song([60, 0, 2], [62, 0.5, 1.5], [64, 1, 1.05]));
  play();
  calls.length = 0;
  songClock.seek(1);
  scheduler.restart();
  clock.currentTime = 10.2;
  scheduler.pump();
  expect(calls).toEqual(["stopAll", "on 64 @10.000", "off 64 @10.050"]);
  expect(songClock.songTime).toBeCloseTo(1.2);
});

test("a_cycle_queues_the_next_pass_before_its_end", () => {
  const { clock, calls, songClock, scheduler, play } = setup();
  scheduler.load(song([60, 0, 0.5], [62, 0.8, 1.5]));
  songClock.cycle = { from: 0, to: 1 };
  play();
  for (let t = 10; t <= 10.95; t += 0.025) {
    clock.currentTime = t;
    scheduler.pump();
  }
  // The note held over the end stops there, and the next pass starts at that same audio time.
  expect(calls).toEqual(["on 60 @10.000", "off 60 @10.500", "on 62 @10.800", "off 62 @11.000", "on 60 @11.000"]);
  clock.currentTime = 11.2;
  expect(songClock.songTime).toBeCloseTo(0.2, 9);
  expect(songClock.passes).toBe(1);
});

test("speed_scales_the_note_times", () => {
  const { clock, calls, songClock, scheduler, play } = setup(0.5);
  scheduler.load(song([60, 0, 0.1], [62, 0.2, 0.3]));
  play();
  for (let t = 10; t <= 11; t += 0.025) {
    clock.currentTime = t;
    scheduler.pump();
  }
  expect(calls).toEqual(["on 60 @10.000", "off 60 @10.200", "on 62 @10.400", "off 62 @10.600"]);
  clock.currentTime = 11;
  expect(songClock.songTime).toBeCloseTo(0.5);
});
