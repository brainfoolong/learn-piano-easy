/**
 * The scheduler: it plays a song through a sampler, queueing each note a little ahead on the audio clock.
 *
 * Every `intervalMs`, a timer wakes it, and it queues every event of the song that starts within the next
 * `aheadMs` of audio time. A late timer then never delays a note, since the note already waits on the
 * audio clock. The song becomes one list of note-on, note-off and pedal events in time order, and a
 * cursor walks it, so each event is queued exactly once.
 *
 * Song time maps to audio time through a `SongTimeline`, the transport's song clock. The scheduler keeps
 * no time of its own. It holds only the run time everything before is queued. Run time is song time
 * that keeps growing through each wrap of a cycle, so it never repeats between two seeks.
 *
 * Decisions, and what each costs:
 * - The sampler has one sustain pedal, so the pedal periods of every track and channel merge into one.
 *   Periods that overlap become one, and periods that only touch stay apart, so a re-pedal still clears.
 * - At one time, note-offs come first, then pedal-ups, then pedal-downs, then note-ons. A struck-again
 *   note then sounds anew. A note of no length comes last, so its own on comes before its off.
 * - Percussion tracks are not played, since the only sound set is a piano.
 * - `start` and `restart` queue from the timeline's song time now. A note that started before it is not
 *   played, and its off is skipped. When the merged pedal is down there, it goes down at once.
 * - `stop` and `restart` call `stopAll`, so queued notes never sound and sounding ones fade quickly.
 * - A speed change needs no call. Queued notes keep their times, and later ones follow the new speed.
 *   Notes queued before the change sound off by at most `aheadMs` times the change of speed.
 * - A `ScheduledPart`, such as the metronome, queues its own events in the same windows of song time.
 * - A window that crosses a cycle's end splits there, so the next pass's first notes are queued ahead
 *   like any others and the repeat has no gap. At the wrap, every note still sounding is released and
 *   the pedal lifts, then it goes down again when the merged pedal is down at the cycle's start.
 *
 * Gaps:
 * - A background tab throttles the timer to about one call a second, so a song stutters there.
 * - Each track plays at the volume `load` is handed, which scales each note's gain after its velocity.
 *   The transport leaves out muted tracks and the learner's own notes before the scheduler gets the song.
 */

import type { PedalPeriod, Song } from "../midi/song";

/** What the scheduler plays notes on. A `Sampler` is one. Every time is on the audio clock. */
export interface NotePlayer {
  /** Starts `note`, its loudness scaled by `gain` from 0 to 1. */
  noteOn(note: number, velocity: number, time: number, gain?: number): unknown;
  noteOff(note: number, time: number): void;
  pedal(down: boolean, time: number): void;
  stopAll(): void;
}

/** The audio clock, in seconds. An `AudioContext` is one. */
export interface Clock {
  readonly currentTime: number;
}

/** A stretch of song time that repeats: on reaching `to`, song time goes on from `from`. */
export interface Cycle {
  readonly from: number;
  readonly to: number;
}

/** The song time that run time `run` sounds under `cycle`. Before the first wrap the two are equal. */
export function wrapTime(run: number, cycle: Cycle | undefined): number {
  return run - lapOf(run, cycle) * cycleLength(cycle);
}

/** How many times run time `run` has wrapped round `cycle`: 0 before it first reaches the cycle's end. */
export function lapOf(run: number, cycle: Cycle | undefined): number {
  const length = cycleLength(cycle);
  if (cycle === undefined || length === 0 || run < cycle.to) return 0;
  return 1 + Math.floor((run - cycle.to) / length);
}

/** The length of `cycle` in seconds, or 0 without one or for one that is empty. */
function cycleLength(cycle: Cycle | undefined): number {
  return cycle === undefined ? 0 : Math.max(0, cycle.to - cycle.from);
}

/** The slowest and fastest a song timeline plays, as a multiple of its written tempo. */
export const MIN_SPEED = 0.1;
export const MAX_SPEED = 2;

/** Song time on the audio clock. The transport's `SongClock` is one. Every time is in seconds. */
export interface SongTimeline {
  /** The audio clock now. */
  readonly audioTime: number;
  /** The cycle song time wraps round, or undefined while it runs straight on. */
  readonly cycle: Cycle | undefined;
  /** The run time at `audioTime`: song time before wrapping, which grows through every wrap. */
  runTimeAt(audioTime: number): number;
  /** The audio time at which run time `run` sounds. */
  audioTimeOfRun(run: number): number;
}

/** Calls a function again and again. `every` returns what stops it. */
export interface Timer {
  every(ms: number, run: () => void): () => void;
}

/** The browser's `setInterval`, as a `Timer`. */
export const intervalTimer: Timer = {
  every(ms, run) {
    const id = setInterval(run, ms);
    return () => clearInterval(id);
  },
};

/** How far ahead the scheduler queues, and how often it wakes. Both are in milliseconds. */
export interface ScheduleOptions {
  readonly aheadMs: number;
  readonly intervalMs: number;
}

/** Something that queues its own events in the scheduler's windows, such as the metronome. */
export interface ScheduledPart {
  /** Takes the song the scheduler now plays. */
  load(song: Song): void;
  /** Queues what falls in `[from, to)` of song time, each at `at(songTime)` on the audio clock. */
  schedule(from: number, to: number, at: (songTime: number) => number): void;
  /** Silences what it has queued, as a pause or a seek needs. */
  stop(): void;
}

/** One event of the song, at `time` in song seconds. `rank` orders events at the same time. */
export type SongEvent =
  | { kind: "on"; time: number; rank: number; pitch: number; velocity: number; gain: number }
  | { kind: "off"; time: number; rank: number; pitch: number; start: number }
  | { kind: "pedal"; time: number; rank: number; down: boolean };

/** The ranks of events at one time, in the order they are queued. */
const RANK = { off: 0, pedalUp: 1, pedalDown: 2, on: 3, offOfEmptyNote: 4 } as const;

/** A time the merged pedal is down, in song seconds. */
export interface PedalSpan {
  start: number;
  end: number;
}

/** The pedal periods of every channel as one pedal. Overlapping periods merge, and empty ones drop. */
export function mergePedals(periods: readonly PedalPeriod[]): PedalSpan[] {
  const sorted = periods.filter((p) => p.end > p.start).sort((a, b) => a.start - b.start);
  const spans: PedalSpan[] = [];
  for (const period of sorted) {
    const last = spans[spans.length - 1];
    if (last !== undefined && period.start < last.end) last.end = Math.max(last.end, period.end);
    else spans.push({ start: period.start, end: period.end });
  }
  return spans;
}

/**
 * The events of `song`'s tracks that are not percussion, in the order they are queued. `volumeOf` gives
 * each track's volume from 0 to 1, by track index.
 */
export function songEvents(song: Song, volumeOf: (track: number) => number = () => 1): SongEvent[] {
  const events: SongEvent[] = [];
  const pitched = song.tracks.filter((track) => !track.percussion);
  for (const track of pitched) {
    const gain = volumeOf(track.index);
    for (const note of track.notes) {
      events.push({ kind: "on", time: note.start, rank: RANK.on, pitch: note.pitch, velocity: note.velocity, gain });
      const rank = note.end > note.start ? RANK.off : RANK.offOfEmptyNote;
      events.push({ kind: "off", time: note.end, rank, pitch: note.pitch, start: note.start });
    }
  }
  for (const span of mergePedals(pitched.flatMap((track) => track.pedals))) {
    events.push({ kind: "pedal", time: span.start, rank: RANK.pedalDown, down: true });
    events.push({ kind: "pedal", time: span.end, rank: RANK.pedalUp, down: false });
  }
  return events.sort((a, b) => a.time - b.time || a.rank - b.rank);
}

/** Plays a song on a `NotePlayer`, queueing ahead on a `SongTimeline`. */
export class Scheduler {
  readonly #player: NotePlayer;
  readonly #timeline: SongTimeline;
  readonly #timer: Timer;
  readonly #parts: ScheduledPart[] = [];
  #options: ScheduleOptions;
  #events: SongEvent[] = [];
  #pedals: PedalSpan[] = [];
  #cursor = 0;
  #running = false;
  /** The song time queueing began from, or the cycle's start after a wrap. A note that started before it is not played. */
  #from = 0;
  /** The run time everything before is queued. */
  #until = 0;
  /** How many times queueing has wrapped round the cycle since it last started. */
  #lap = 0;
  /** How many of each pitch's note-ons are queued without their note-off, so a wrap can release them. */
  readonly #sounding = new Map<number, number>();
  /** Whether the last pedal event queued put it down. */
  #pedalDown = false;
  #stopTimer: (() => void) | null = null;

  constructor(player: NotePlayer, timeline: SongTimeline, options: ScheduleOptions, timer: Timer = intervalTimer) {
    this.#player = player;
    this.#timeline = timeline;
    this.#options = options;
    this.#timer = timer;
  }

  /** Adds a part that queues its own events alongside the song's notes. */
  addPart(part: ScheduledPart): void {
    this.#parts.push(part);
  }

  /** Stops, and takes `song`, each track at the volume `volumeOf` gives it by track index. */
  load(song: Song, volumeOf?: (track: number) => number): void {
    this.stop();
    this.#events = songEvents(song, volumeOf);
    this.#pedals = mergePedals(song.tracks.filter((t) => !t.percussion).flatMap((t) => t.pedals));
    for (const part of this.#parts) part.load(song);
  }

  /** Whether it queues the song. */
  get running(): boolean {
    return this.#running;
  }

  /** Changes how far ahead it queues and how often it wakes. */
  configure(options: Partial<ScheduleOptions>): void {
    this.#options = { ...this.#options, ...options };
    if (this.#running) this.#startTimer();
  }

  /** Queues from the timeline's song time now. Start the timeline first. */
  start(): void {
    if (this.#running) return;
    this.#running = true;
    this.#startFrom(this.#timeline.runTimeAt(this.#timeline.audioTime));
    this.#startTimer();
  }

  /** Stops queueing and silences what is queued. */
  stop(): void {
    if (!this.#running) return;
    this.#running = false;
    this.#stopTimer?.();
    this.#stopTimer = null;
    this.#silence();
  }

  /** Silences what is queued and queues anew from the timeline's song time now, as after a seek. */
  restart(): void {
    if (!this.#running) return;
    this.#silence();
    this.#startFrom(this.#timeline.runTimeAt(this.#timeline.audioTime));
  }

  /** Queues what falls within the look-ahead, piece by piece across each wrap. The timer calls it, and so may a test. */
  pump(): void {
    if (!this.#running) return;
    const to = this.#timeline.runTimeAt(this.#timeline.audioTime + this.#options.aheadMs / 1000);
    while (this.#until < to) {
      const cycle = this.#timeline.cycle;
      const length = cycleLength(cycle);
      // Run time is song time plus this many seconds in the current pass.
      const offset = this.#lap * length;
      const lapEnd = cycle === undefined || length === 0 ? Infinity : cycle.to + offset;
      const pieceEnd = Math.min(to, lapEnd);
      const at = (songTime: number): number => this.#timeline.audioTimeOfRun(songTime + offset);
      const songTo = pieceEnd - offset;
      while (this.#cursor < this.#events.length && this.#events[this.#cursor]!.time < songTo) {
        this.#dispatch(this.#events[this.#cursor]!, at);
        this.#cursor++;
      }
      for (const part of this.#parts) part.schedule(this.#until - offset, songTo, at);
      this.#until = pieceEnd;
      if (pieceEnd === lapEnd && cycle !== undefined) this.#wrap(at(cycle.to), cycle.from);
    }
  }

  #startFrom(run: number): void {
    const now = this.#timeline.audioTime;
    const cycle = this.#timeline.cycle;
    const songTime = wrapTime(run, cycle);
    this.#lap = lapOf(run, cycle);
    this.#from = songTime;
    this.#until = run;
    this.#cursor = firstAtOrAfter(this.#events, songTime);
    this.#sounding.clear();
    this.#pedalDown = this.#pedalDownAt(songTime);
    if (this.#pedalDown) this.#player.pedal(true, now);
    this.pump();
  }

  /** Ends a pass at audio time `time` and goes on from song time `from`, as a cycle's end does. */
  #wrap(time: number, from: number): void {
    for (const [pitch, count] of this.#sounding) {
      for (let i = 0; i < count; i++) this.#player.noteOff(pitch, time);
    }
    this.#sounding.clear();
    if (this.#pedalDown) this.#player.pedal(false, time);
    this.#pedalDown = this.#pedalDownAt(from);
    if (this.#pedalDown) this.#player.pedal(true, time);
    this.#from = from;
    this.#lap++;
    this.#cursor = firstAtOrAfter(this.#events, from);
  }

  /** Whether the merged pedal is held down through song time `songTime`, rather than going down there. */
  #pedalDownAt(songTime: number): boolean {
    return this.#pedals.some((span) => span.start < songTime && songTime < span.end);
  }

  #dispatch(event: SongEvent, at: (songTime: number) => number): void {
    const time = at(event.time);
    if (event.kind === "on") {
      void this.#player.noteOn(event.pitch, event.velocity, time, event.gain);
      this.#sounding.set(event.pitch, (this.#sounding.get(event.pitch) ?? 0) + 1);
    } else if (event.kind === "pedal") {
      this.#player.pedal(event.down, time);
      this.#pedalDown = event.down;
    } else if (event.start >= this.#from) {
      this.#player.noteOff(event.pitch, time);
      const count = this.#sounding.get(event.pitch) ?? 0;
      if (count > 1) this.#sounding.set(event.pitch, count - 1);
      else this.#sounding.delete(event.pitch);
    }
  }

  #silence(): void {
    this.#player.stopAll();
    this.#sounding.clear();
    this.#pedalDown = false;
    for (const part of this.#parts) part.stop();
  }

  #startTimer(): void {
    this.#stopTimer?.();
    this.#stopTimer = this.#timer.every(this.#options.intervalMs, () => this.pump());
  }
}

/** The index of the first event at or after `time`, or the length when none is. `events` is in time order. */
function firstAtOrAfter(events: readonly SongEvent[], time: number): number {
  let low = 0;
  let high = events.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (events[mid]!.time < time) low = mid + 1;
    else high = mid;
  }
  return low;
}
