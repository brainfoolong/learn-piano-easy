/**
 * A song read without being opened: its opening for the ear, and its length for the card.
 *
 * `createPreviewer` plays the first `PREVIEW_SECONDS` of a song on the song's sampler. It never touches
 * the transport, the open song or a setting. `createMeasurer` reads the lengths of songs in a queue.
 *
 * Decisions, and what each costs:
 * - A preview pauses the transport first. The preview and the open song share one sampler, and two
 *   songs at once would help no one. The transport keeps its place.
 * - The preview has a scheduler and a clock of its own, so the song clock never moves. It reuses
 *   `Scheduler`, which merges the pedals and orders the events, at the cost of one more timer.
 * - The opening starts at the first note, so a file that begins with silence still sounds at once.
 *   Every note of the excerpt ends with it, so the preview fades as a pianist lifting the hands.
 * - A file parses on the main thread. A song file is small, and the worker would copy every note back.
 * - One preview plays at a time. A second one stops the first, and a toggle of the same song stops it.
 * - A song that cannot be read, such as one not cached while offline, calls `failed` and plays nothing.
 * - The sound set loads on the first preview, as on the first play. The preview waits for it.
 * - The measurer reads `MEASURE_AT_ONCE` files at a time, so a screen of cards never floods the network.
 *
 * Gaps: a transport started while a preview plays shares its sampler, and the preview's end cuts its
 * sounding notes once.
 */
import type { AudioEngine } from "../audio/engine";
import { Scheduler, type SongTimeline } from "../audio/scheduler";
import { readSongFile } from "../midi/parse";
import { type Song, songFromMidi, songLength } from "../midi/song";

/** How much of a song a preview plays, in seconds. */
export const PREVIEW_SECONDS = 20;

/** How long after the excerpt's end its last notes may ring, in seconds. */
const TAIL_SECONDS = 1.2;

/** How long before the first note the preview is queued, in seconds, so the first note is never late. */
const LEAD_SECONDS = 0.08;

/** How many files the measurer reads at once. */
const MEASURE_AT_ONCE = 3;

/** The song of a MIDI or MusicXML file's `bytes`. */
export async function readSong(bytes: Uint8Array): Promise<Song> {
  return songFromMidi(await readSongFile(bytes));
}

/** The opening of a song: a song of its own that starts at 0, and its length in seconds. */
export interface Excerpt {
  song: Song;
  seconds: number;
}

/**
 * The first `seconds` of `song` from its first pitched note on. A note or a pedal that runs past the
 * end is cut there. The excerpt keeps the song's ticks, which nothing that plays it reads.
 */
export function excerpt(song: Song, seconds = PREVIEW_SECONDS): Excerpt {
  const pitched = song.tracks.filter((track) => !track.percussion);
  const from = pitched.reduce((first, track) => Math.min(first, track.notes[0]?.start ?? Infinity), Infinity);
  if (from === Infinity) return { song: { ...song, tracks: [], notes: [] }, seconds: 0 };
  const to = from + seconds;
  const cut = <T extends { start: number; end: number }>(span: T): T => ({ ...span, start: Math.max(span.start, from) - from, end: Math.min(span.end, to) - from });
  const tracks = pitched.map((track) => ({
    ...track,
    notes: track.notes.filter((note) => note.start < to).map(cut),
    pedals: track.pedals.filter((pedal) => pedal.start < to && pedal.end > from).map(cut),
  }));
  const notes = tracks.flatMap((track) => track.notes).sort((a, b) => a.start - b.start || a.pitch - b.pitch);
  return { song: { ...song, tracks, notes }, seconds: notes.reduce((end, note) => Math.max(end, note.end), 0) };
}

/** What a preview does now: it reads the song `id`, or plays it since `startedAt` for `ms`. */
export type PreviewState =
  | { id: string; phase: "loading" }
  | { id: string; phase: "playing"; /** On the clock of `performance.now()`. */ startedAt: number; ms: number };

/** What the previewer needs from the app. */
export interface PreviewHost {
  engine: Pick<AudioEngine, "context" | "song" | "resume" | "ready">;
  /** Pauses the transport, so the open song falls silent and keeps its place. */
  pause(): void;
  /** Called when the song `id` could not be read or played. */
  failed(id: string): void;
  /** Called with the length of the song `id`, which the preview read on its way. */
  measured(id: string, seconds: number): void;
  /** Called on every change of the state. */
  changed(state: PreviewState | undefined): void;
}

export interface Previewer {
  /** What plays now, or undefined. */
  readonly state: PreviewState | undefined;
  /** Previews the song `id`, whose file `read` gives, or stops it when it is the one that previews. */
  toggle(id: string, read: () => Promise<Uint8Array>): Promise<void>;
  /** Stops the preview, if one plays or loads. */
  stop(): void;
}

/** A previewer that plays through `host`. */
export function createPreviewer(host: PreviewHost): Previewer {
  const { engine } = host;
  let state: PreviewState | undefined;
  /** The audio time at which the excerpt's start sounds. */
  let origin = 0;
  /** Counts the previews, so a slow read never starts a preview the learner already left. */
  let latest = 0;
  let endTimer: ReturnType<typeof setTimeout> | undefined;
  let scheduler: Scheduler | undefined;
  const timeline: SongTimeline = {
    get audioTime() {
      return engine.context.currentTime;
    },
    cycle: undefined,
    runTimeAt: (audioTime) => audioTime - origin,
    audioTimeOfRun: (run) => origin + run,
  };

  const set = (next: PreviewState | undefined) => {
    state = next;
    host.changed(next);
  };

  const stop = () => {
    latest++;
    if (endTimer !== undefined) clearTimeout(endTimer);
    endTimer = undefined;
    scheduler?.stop();
    if (state !== undefined) set(undefined);
  };

  return {
    get state() {
      return state;
    },
    stop,
    async toggle(id, read) {
      const same = state?.id === id;
      stop();
      if (same) return;
      const ticket = latest;
      set({ id, phase: "loading" });
      try {
        host.pause();
        // `resume` sets `ready` before it first waits, so the sound set is awaited from the first preview on.
        const resumed = engine.resume();
        const [bytes] = await Promise.all([read(), resumed, engine.ready]);
        const song = await readSong(bytes);
        host.measured(id, songLength(song));
        if (ticket !== latest) return;
        const opening = excerpt(song);
        if (opening.seconds === 0) throw new Error("The song has no notes.");
        scheduler ??= new Scheduler(engine.song, timeline, { aheadMs: 300, intervalMs: 60 });
        scheduler.load(opening.song);
        origin = engine.context.currentTime + LEAD_SECONDS;
        scheduler.start();
        set({ id, phase: "playing", startedAt: performance.now(), ms: opening.seconds * 1000 });
        endTimer = setTimeout(stop, (opening.seconds + TAIL_SECONDS) * 1000);
      } catch {
        if (ticket !== latest) return;
        stop();
        host.failed(id);
      }
    },
  };
}

export interface Measurer {
  /** Asks for the length of the song `id`, whose file `read` gives. A song asked twice is read once. */
  want(id: string, read: () => Promise<Uint8Array>): void;
  /** How many songs still wait or are being read. */
  readonly waiting: number;
}

/**
 * A queue that reads song files and calls `measured` with each length, then `idle` once it runs dry.
 * A file that cannot be read is skipped, and may be asked for again.
 */
export function createMeasurer(measured: (id: string, seconds: number) => void, idle: () => void): Measurer {
  const queue: { id: string; read: () => Promise<Uint8Array> }[] = [];
  const asked = new Set<string>();
  let running = 0;

  const next = () => {
    const job = queue.shift();
    if (job === undefined) {
      if (running === 0) idle();
      return;
    }
    running++;
    void job
      .read()
      .then(readSong)
      .then(
        (song) => measured(job.id, songLength(song)),
        () => asked.delete(job.id),
      )
      .finally(() => {
        running--;
        next();
      });
  };

  return {
    get waiting() {
      return queue.length + running;
    },
    want(id, read) {
      if (asked.has(id)) return;
      asked.add(id);
      queue.push({ id, read });
      if (running < MEASURE_AT_ONCE) next();
    },
  };
}
