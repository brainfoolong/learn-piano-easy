import { expect, test } from "../testing";
import type { Song } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { ACCENT_VELOCITY, BEAT_VELOCITY, Metronome, MIDI_CLICK_MS, type MetronomeContext, type MetronomeOptions } from "./metronome";

/** A context whose clock stands at `currentTime`. With the speakers off, the metronome makes no node. */
const ctx = { currentTime: 1 } as MetronomeContext;
const never = { every: () => () => {} };
const options: MetronomeOptions = {
  enabled: true,
  volume: 0.1,
  synced: true,
  speakers: false,
  midi: true,
  midiNote: 76,
  midiSound: "woodblock",
  aheadMs: 100,
  intervalMs: 25,
};

/** A metronome whose MIDI clock reads 5000 ms while the audio clock reads 1 s, with `beats` song times. */
function metronome(sent: [number[], number | undefined][]) {
  const port = { send: (data: number[], at?: number) => void sent.push([data, at]) };
  const m = new Metronome(ctx, {} as never, options, never, () => 5000);
  m.midiOut = () => port;
  return m;
}

test("a_midi_click_goes_out_timed_on_the_midi_clock", () => {
  const sent: [number[], number | undefined][] = [];
  const m = metronome(sent);
  // A count-in of two beats, the first accented, sounding at 1.5 s and 2 s on the audio clock.
  m.setCountIn({ beats: [0.5, 1], start: 1.5 });
  m.schedule(0, 2, (songTime) => songTime + 1);
  expect(sent).toEqual([
    [[0xcf, 115], undefined],
    [[0x9f, 76, ACCENT_VELOCITY], 5500],
    [[0x8f, 76, 0], 5500 + MIDI_CLICK_MS],
    [[0x9f, 76, BEAT_VELOCITY], 6000],
    [[0x8f, 76, 0], 6000 + MIDI_CLICK_MS],
  ]);

  // The drum kit plays on channel 10 and needs no program change.
  sent.length = 0;
  m.configure({ midiSound: "drums" });
  m.schedule(0, 1, (songTime) => songTime + 1);
  expect(sent.map(([data]) => data[0])).toEqual([0x99, 0x89]);
});

test("the_unsynced_metronome_keeps_a_steady_beat_from_the_play_position", () => {
  const sent: [number[], number | undefined][] = [];
  const port = { send: (data: number[], time?: number) => void sent.push([data, time]) };
  // An audio clock the test moves, and a timer the test fires. The MIDI clock reads 4000 ms at audio time 0.
  const clock = { currentTime: 1 };
  const runs = new Set<() => void>();
  const timer = {
    every: (_ms: number, run: () => void) => {
      runs.add(run);
      return () => void runs.delete(run);
    },
  };
  const tick = (time: number) => {
    clock.currentTime = time;
    for (const run of runs) run();
  };
  const m = new Metronome(clock as MetronomeContext, {} as never, { ...options, synced: false }, timer, () => 4000 + clock.currentTime * 1000);
  m.midiOut = () => port;
  // 3/4 at 120 bpm, slowing to 60 bpm at 1 s. The song plays at half speed, starting at audio time 1 s.
  const tempoMap = new TempoMap(
    { kind: "ticks", ticksPerBeat: 480 },
    [
      { tick: 0, microsecondsPerBeat: 500_000 },
      { tick: 960, microsecondsPerBeat: 1_000_000 },
    ],
    [{ tick: 0, numerator: 3, denominator: 4 }],
  );
  m.load({ tempoMap, endTick: 4800 } as Song);
  const at = (songTime: number) => 1 + songTime * 2;
  /** The note-ons sent since the last call, as [MIDI time, accented]. */
  const clicks = () => {
    const ons = sent.filter(([data]) => data[0] === 0x9f).map(([data, time]) => [time, data[2] === ACCENT_VELOCITY]);
    sent.length = 0;
    return ons;
  };

  // Playback starts half way through beat 0. The first click falls on beat 1, at song time 0.5 s,
  // which sounds at audio time 2 s. It is beyond the look-ahead, so nothing is queued yet.
  m.schedule(0.25, 0.3, at);
  expect(clicks()).toEqual([]);

  // The beat clicks on its own timer, with no further window. It stays 0.5 s on the audio clock,
  // whatever the speed and the tempo change at audio time 3 s, and beat 0 of each measure is accented.
  tick(1.95);
  expect(clicks()).toEqual([[6000, false]]);
  tick(3.45);
  expect(clicks()).toEqual([
    [6500, false],
    [7000, true],
    [7500, false],
  ]);

  // A pause ends the beat.
  m.stop();
  tick(5);
  expect(clicks()).toEqual([]);

  // Playing again from song time 3 s, on beat 1 of measure 1, starts a beat at 60 bpm there.
  clock.currentTime = 6.95;
  m.schedule(3, 3.05, at);
  expect(clicks()).toEqual([[11000, false]]);
  tick(8.95);
  expect(clicks()).toEqual([
    [12000, false],
    [13000, true],
  ]);

  // With the metronome off, the beat counts on in silence, so it comes back in its own time.
  m.configure({ enabled: false });
  tick(10.95);
  expect(clicks()).toEqual([]);
  m.configure({ enabled: true });
  tick(11.95);
  expect(clicks()).toEqual([[16000, true]]);
});

test("the_steady_beat_rests_through_a_loop_count_in_and_starts_on_the_pass_first_beat", () => {
  const sent: [number[], number | undefined][] = [];
  const port = { send: (data: number[], time?: number) => void sent.push([data, time]) };
  // An audio clock the test moves, and a timer the test fires. The MIDI clock reads 4000 ms at audio time 0.
  const clock = { currentTime: 10 };
  const runs = new Set<() => void>();
  const timer = {
    every: (_ms: number, run: () => void) => {
      runs.add(run);
      return () => void runs.delete(run);
    },
  };
  const tick = (time: number) => {
    clock.currentTime = time;
    for (const run of runs) run();
  };
  const m = new Metronome(clock as MetronomeContext, {} as never, { ...options, synced: false }, timer, () => 4000 + clock.currentTime * 1000);
  m.midiOut = () => port;
  // 4/4 at 120 bpm. The loop is measure 2, from 2 s to 4 s, after a count-in of two beats at 1 s and 1.5 s.
  const tempoMap = new TempoMap({ kind: "ticks", ticksPerBeat: 480 }, [{ tick: 0, microsecondsPerBeat: 500_000 }], [{ tick: 0, numerator: 4, denominator: 4 }]);
  m.load({ tempoMap, endTick: 8 * 1920 } as Song);
  m.setCountIn({ beats: [1, 1.5], start: 2 });
  // Each pass repeats from song time 1 s to 4 s. The first starts at audio time 10 s, the second at 13 s.
  const pass = (n: number) => (songTime: number) => 9 + songTime + 3 * n;
  const clicks = () => {
    const ons = sent.filter(([data]) => data[0] === 0x9f).map(([data, time]) => [time, data[2] === ACCENT_VELOCITY]);
    sent.length = 0;
    return ons;
  };

  // Playback starts at the count-in. Only the count-in clicks there, its first beat accented.
  m.schedule(1, 2, pass(0));
  expect(clicks()).toEqual([
    [14000, true],
    [14500, false],
  ]);
  tick(10.55);
  expect(clicks()).toEqual([]);
  // The steady beat starts on the pass's first beat, a downbeat.
  tick(10.95);
  expect(clicks()).toEqual([[15000, true]]);
  tick(12.45);
  expect(clicks()).toEqual([
    [15500, false],
    [16000, false],
    [16500, false],
  ]);

  // The loop wraps at audio time 13 s. The window that reaches the next count-in ends the steady beat,
  // so only the count-in clicks there, and the beat starts again on the second pass's first beat.
  m.schedule(2, 4, pass(0));
  clock.currentTime = 12.95;
  m.schedule(1, 2, pass(1));
  expect(clicks()).toEqual([
    [17000, true],
    [17500, false],
  ]);
  tick(13.55);
  expect(clicks()).toEqual([]);
  tick(13.95);
  expect(clicks()).toEqual([[18000, true]]);
});
