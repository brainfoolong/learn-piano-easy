/**
 * The lesson's sound: plays a step's phrase and the learner's keys on the site's one audio service.
 *
 * - **Nothing loads before the first sound.** `start` makes the audio service of `src/site/services.ts`,
 *   wakes its context and waits for the sound set. A browser holds a fresh page's audio until a
 *   gesture, so `start` waits for one there. Each call wakes the context again, so a first call
 *   outside a gesture never leaves the lesson silent.
 * - **A phrase plays on the audio clock.** Its notes are queued ahead on the song's sampler, and a frame
 *   loop reads the clock to report which notes sound, so a slow frame never moves the music. A playback
 *   reports its time on the same clock, so the piano view's hand presses each key as its note sounds.
 * - **The learner's notes play on the input sampler,** as the player plays them. The lesson view feeds
 *   `press` and `release` from the input bus, so every input sounds the same way.
 * - **A step's clicks are the engine's free metronome.** `clicks` turns it on and frees it from the
 *   song while it counts, and gives the learner's settings back once it stops. Its volume and its
 *   output stay the learner's, so a silenced metronome stays silent.
 * - **`toAudioTime` maps an input event's time to the audio clock as the learner hears it.** It reads
 *   `getOutputTimestamp`, so the speakers' latency is inside the mapping. A browser without it falls
 *   back to `currentTime`, which hears the clicks that much early.
 */
import { audioService, type AudioService } from "../site/services";
import type { SettingsStore } from "../settings/store";
import type { PhraseNote } from "./model";

/** The velocity of a phrase's note that names none, and of a pressed key, from 1 to 127. */
const VELOCITY = 88;
/** How far ahead of the clock a phrase starts, in seconds, so its first note is never late. */
const LEAD = 0.15;

/** A phrase that plays. */
export interface Playback {
  /** Resolves true once the phrase has played to its end, and false once it was stopped. */
  finished: Promise<boolean>;
  /** Resolves true once the phrase is queued and its clock runs, and false once it was stopped first. */
  started: Promise<boolean>;
  /** Seconds since the phrase's first beat on the audio clock, past its end too. Undefined before it starts and once stopped. */
  time(): number | undefined;
  /** Stops the phrase and silences it. */
  stop(): void;
}

/** A metronome that clicks a counted number of beats. */
export interface Clicks {
  /** Resolves with the first click's time on the audio clock, in seconds, or undefined when stopped first. */
  first: Promise<number | undefined>;
  /** Stops the clicks and silences the ones still queued. */
  stop(): void;
}

/** The sound of one lesson. */
export interface LessonSound {
  /** Starts the audio, once, and resolves once its sound set is ready. */
  start(): Promise<void>;
  /** Plays `notes` at `bpm`, and calls `onSounding` with the notes that sound each time they change. */
  play(notes: readonly PhraseNote[], bpm: number, onSounding: (pitches: ReadonlySet<number>) => void): Playback;
  /** Clicks `beats` beats at `bpm`, `beatsPerMeasure` to a measure, from a moment ahead of the clock. */
  clicks(bpm: number, beats: number, beatsPerMeasure: number): Clicks;
  /** The audio clock's time, in seconds, heard at `performanceMs` on `performance.now()`'s clock. Undefined before `start` resolves. */
  toAudioTime(performanceMs: number): number | undefined;
  /** Sounds `pitch` at `velocity`, from 1 to 127, until `release`. */
  press(pitch: number, velocity?: number): void;
  release(pitch: number): void;
}

/** A lesson's sound on the audio service of `settings`. */
export function lessonSound(settings: SettingsStore): LessonSound {
  let started: Promise<AudioService> | undefined;
  let ready: AudioService | undefined;
  const start = () => {
    const service = audioService(settings);
    // Every call wakes the context again. A first call outside a gesture is refused, and only a later
    // call inside one starts the context, which settles the first call's wait too.
    const resumed = service.engine.resume();
    return (started ??= (async () => {
      await resumed;
      await service.engine.ready;
      ready = service;
      return service;
    })());
  };
  return {
    start: () => start().then(() => undefined),
    clicks(bpm, beats, beatsPerMeasure) {
      let stopped = false;
      let timer: ReturnType<typeof setTimeout> | undefined;
      const stop = () => {
        if (stopped) return;
        stopped = true;
        clearTimeout(timer);
        void started?.then(({ engine }) => {
          engine.metronome.stopFree();
          engine.metronome.configure({ enabled: settings.get("enableMetronome"), synced: settings.get("synchedMetronome") });
        });
      };
      const first = start().then(({ engine }) => {
        if (stopped) return undefined;
        const beat = 60 / bpm;
        const t0 = engine.context.currentTime + LEAD;
        engine.metronome.configure({ enabled: true, synced: false });
        engine.metronome.startFree(bpm, beatsPerMeasure, t0);
        // Half a beat after the last click: it has sounded, and the next one is still ahead to silence.
        timer = setTimeout(stop, (t0 + (beats - 0.5) * beat - engine.context.currentTime) * 1000);
        return t0;
      });
      return { first, stop };
    },
    toAudioTime(performanceMs) {
      if (ready === undefined) return undefined;
      const context = ready.engine.context;
      const stamp: AudioTimestamp = typeof context.getOutputTimestamp === "function" ? context.getOutputTimestamp() : {};
      if (stamp.contextTime !== undefined && stamp.performanceTime !== undefined && stamp.performanceTime > 0) {
        return stamp.contextTime + (performanceMs - stamp.performanceTime) / 1000;
      }
      return context.currentTime + (performanceMs - performance.now()) / 1000;
    },
    play(notes, bpm, onSounding) {
      let stopped = false;
      let frame = 0;
      let settle: (played: boolean) => void = () => {};
      const finished = new Promise<boolean>((resolve) => (settle = resolve));
      let begin: (running: boolean) => void = () => {};
      const queued = new Promise<boolean>((resolve) => (begin = resolve));
      let clock: { context: BaseAudioContext; t0: number } | undefined;
      const beat = 60 / bpm;
      const end = Math.max(...notes.map((n) => n.at + n.beats));
      void start().then(({ engine }) => {
        if (stopped) return;
        const t0 = engine.context.currentTime + LEAD;
        clock = { context: engine.context, t0 };
        begin(true);
        for (const n of notes) {
          void engine.song.noteOn(n.note, n.velocity ?? VELOCITY, t0 + n.at * beat);
          engine.song.noteOff(n.note, t0 + (n.at + n.beats) * beat);
        }
        let last = "";
        const tick = () => {
          const at = (engine.context.currentTime - t0) / beat;
          const sounding = new Set(notes.filter((n) => at >= n.at && at < n.at + n.beats).map((n) => n.note));
          const key = [...sounding].join();
          if (key !== last) onSounding(sounding);
          last = key;
          if (at >= end) {
            settle(true);
            return;
          }
          frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      });
      return {
        finished,
        started: queued,
        time: () => (stopped || clock === undefined ? undefined : clock.context.currentTime - clock.t0),
        stop() {
          if (stopped) return;
          stopped = true;
          cancelAnimationFrame(frame);
          void started?.then(({ engine }) => engine.song.stopAll());
          onSounding(new Set());
          begin(false);
          settle(false);
        },
      };
    },
    press(pitch, velocity = VELOCITY) {
      void start().then(({ engine }) => engine.input.noteOn(pitch, velocity));
    },
    release(pitch) {
      void started?.then(({ engine }) => engine.input.noteOff(pitch));
    },
  };
}
