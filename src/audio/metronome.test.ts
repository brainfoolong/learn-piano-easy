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
  m.setCountIn({ beats: [0.5, 1], start: 1.5 }, true);
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

/**
 * The steady beat in a looped song, played by a model of the scheduler. The song is 4/4 at 120 bpm. The
 * loop is measure 2, from 2 s to 4 s, after a count-in of two beats at 1 s and 1.5 s. Each pass repeats
 * song time 1 s to 4 s, the first from audio time 10 s, so pass n starts at 10 + 3n s. The MIDI clock
 * reads 4000 ms at audio time 0, and the count-in clicks when `countInClicks` is true.
 */
function loopedSteadyBeat(countInClicks: boolean) {
  const sent: [number[], number | undefined][] = [];
  const port = { send: (data: number[], time?: number) => void sent.push([data, time]) };
  const clock = { currentTime: 10 };
  const runs = new Set<() => void>();
  const timer = {
    every: (_ms: number, run: () => void) => {
      runs.add(run);
      return () => void runs.delete(run);
    },
  };
  const m = new Metronome(clock as MetronomeContext, {} as never, { ...options, synced: false }, timer, () => 4000 + clock.currentTime * 1000);
  m.midiOut = () => port;
  const tempoMap = new TempoMap({ kind: "ticks", ticksPerBeat: 480 }, [{ tick: 0, microsecondsPerBeat: 500_000 }], [{ tick: 0, numerator: 4, denominator: 4 }]);
  m.load({ tempoMap, endTick: 8 * 1920 } as Song);
  m.setCountIn({ beats: [1, 1.5], start: 2 }, countInClicks);
  // The run time the scheduler has queued to. Run time is song time plus 3 s for each pass before.
  let until = 1;
  let step = 0;
  return {
    /**
     * Plays to audio time `end`, waking every 25 ms. The metronome's timer wakes before the scheduler's,
     * so the steady beat queues ahead before the window that may reach a count-in.
     */
    play(end: number) {
      for (let time = 10.01 + step * 0.025; time <= end; time = 10.01 + ++step * 0.025) {
        clock.currentTime = time;
        for (const run of runs) run();
        const to = time + 0.1 - 9;
        while (until < to) {
          const offset = 3 * Math.floor((until - 1) / 3);
          const pieceEnd = Math.min(to, 4 + offset);
          m.schedule(until - offset, pieceEnd - offset, (songTime) => 9 + songTime + offset);
          until = pieceEnd;
        }
      }
    },
    /** The MIDI note-ons sent since the last call, as [MIDI time in whole milliseconds, accented]. */
    clicks() {
      const ons = sent.filter(([data]) => data[0] === 0x9f).map(([data, time]) => [Math.round(time!), data[2] === ACCENT_VELOCITY]);
      sent.length = 0;
      return ons;
    },
  };
}

test("the_steady_beat_rests_through_a_loop_count_in_and_starts_on_the_pass_first_beat", () => {
  const loop = loopedSteadyBeat(true);
  // Only the count-in clicks before each pass, its first beat accented. The steady beat starts on
  // each pass's first beat, a downbeat.
  loop.play(13.95);
  expect(loop.clicks()).toEqual([
    [14000, true],
    [14500, false],
    [15000, true],
    [15500, false],
    [16000, false],
    [16500, false],
    [17000, true],
    [17500, false],
    [18000, true],
  ]);
});

test("the_steady_beat_rests_through_a_count_in_that_does_not_click", () => {
  const loop = loopedSteadyBeat(false);
  // Nothing clicks from 13 s to 14 s on the audio clock, the second pass's count-in.
  loop.play(13.95);
  expect(loop.clicks()).toEqual([
    [15000, true],
    [15500, false],
    [16000, false],
    [16500, false],
    [18000, true],
  ]);
});

test("no_midi_click_of_the_steady_beat_falls_in_a_count_in", () => {
  const loop = loopedSteadyBeat(true);
  // Each count-in spans 1 s from a pass's start, 14000 ms on the MIDI clock and every 3000 ms after.
  // Only its own two clicks sound there, through four passes.
  loop.play(19.95);
  const inCountIns = loop.clicks().filter(([time]) => ((time as number) - 14000) % 3000 < 1000);
  expect(inCountIns).toEqual([
    [14000, true],
    [14500, false],
    [17000, true],
    [17500, false],
    [20000, true],
    [20500, false],
    [23000, true],
    [23500, false],
  ]);
});
