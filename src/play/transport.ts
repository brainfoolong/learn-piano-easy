/**
 * The transport: plays, pauses, seeks and speeds a song, keeping the sound and the picture on one clock.
 *
 * It drives the `SongClock` of the site's audio service. The audio scheduler queues notes by that clock, and the scene reads its song
 * time from it every frame, so neither keeps a timer of its own. Each command moves the clock first,
 * then tells the scheduler, so the scheduler always queues from the clock's new song time.
 *
 * Decisions, and what each costs:
 * - A speed change tells only the clock. The scheduler follows on its next window, and notes it queued
 *   before sound off by at most its look-ahead times the change.
 * - A seek lands within the song, from 0 to its duration. While playing, it silences what is queued.
 * - Play wakes a suspended audio context. Until the context runs, its clock stands still, so the song
 *   time and the picture wait with it.
 * - Speed stays within `MIN_SPEED` and `MAX_SPEED`, and a speed outside is clamped.
 * - Transpose hands a transposed copy of the song to the scheduler and the scene, so neither knows of
 *   it. A change costs one copy of the note list, and silences and requeues what is queued.
 * - A loop that starts each pass at once, and a song that restarts at its end, repeat seamlessly. The
 *   clock wraps song time round a cycle at the exact audio time of the end, and the scheduler queues
 *   the next pass ahead as it queues any notes. A loop's cycle starts at its count-in, so a count-in of
 *   0 beats joins its passes with no gap. The song's cycle is its span, from its start to its last
 *   note's end, so each pass waits exactly `leadIn` before its first note.
 * - A song starts `leadIn` seconds before its first note, from `songSpan`. Silence the file holds there
 *   is cut, and a song whose first note starts at once gains room below 0. Every song then gives the
 *   learner the same time before its first note. Load, stop, play from the end and the lowest seek
 *   all go to that start. Load and stop go to a loop's count-in instead while a loop is on.
 * - `tick` runs once a frame. It tells the listeners and the trainer of each wrap, up to a frame
 *   late, which moves no sound. A loop that pauses after each pass, and a song that stops at its end,
 *   still end there in `tick`, up to a frame late.
 * - A loop that mutes hands the scheduler a copy of the song with only the loop's notes. The scene
 *   still shows every note. A pass starts at the count-in, which may lie below 0.
 * - The loop trainer starts the speed at its own when the loop or the trainer turns on, and raises it
 *   after every pass. A pass counts as clean until the input modes can judge it.
 * - The render offset moves only the time the scene reads, so the sound keeps its timing.
 * - A scrub plays the notes between the old and the new song time, at most `SCRUB_NOTES` of them.
 * - The `learner` picks the learner's notes from the shown song on every show, and `required` keeps
 *   them. With `learnerPlays`, the scheduler leaves them out, so only the learner sounds them.
 * - The `mix` mutes tracks and sets their volume, for the scheduler and a scrub alone. A muted track
 *   still shows, and its notes stay the learner's when their hand is.
 * - `holdAt` stops song time at a song time ahead, through the clock's hold. Releasing it queues at
 *   once, so the notes there sound without waiting for the scheduler's timer.
 * - Every seek tells its listeners the song time it left. A wrap tells them too, with the cycle's end,
 *   though nothing seeks. A mode then tells a finished pass from a jump by where the song left.
 *
 * Gaps: a background tab runs no frames, so there a loop that pauses and a song that stops play on past
 * their end. A seamless repeat keeps its time there, but its listeners hear of its passes late.
 */
import type { AudioEngine } from "../audio/engine";
import type { Metronome } from "../audio/metronome";
import { MAX_SPEED, MIN_SPEED, type Cycle, type NotePlayer, type Scheduler } from "../audio/scheduler";
import type { Note, Song } from "../midi/song";
import type { PianoScene } from "../render/scene";
import { SongClock } from "./clock";
import { loopRange, trainerSpeed, type LoopRange, type LoopSpec } from "./loop";
/** The most semitones the song moves up or down. */
export const MAX_TRANSPOSE = 12;
/** The most notes one scrub plays, so a long jump sounds no cluster. */
export const SCRUB_NOTES = 8;
/** The seconds a song plays before its first note until the shell sets `leadIn` from the settings. */
export const DEFAULT_LEAD_IN = 2;
/** How long a scrubbed note sounds, in seconds. */
export const SCRUB_LENGTH = 0.25;

/** The span a song plays: from its start, before its first note, to its last note's end. */
export interface SongSpan {
  readonly start: number;
  readonly end: number;
}

/**
 * The span of `song` with `leadIn` seconds before its first note, whatever silence its file holds there.
 * It ends as its last note ends. A song without notes spans from 0 to its duration.
 */
export function songSpan(song: Song, leadIn: number): SongSpan {
  const first = song.notes[0];
  if (first === undefined) return { start: 0, end: song.duration };
  let end = first.end;
  for (const note of song.notes) end = Math.max(end, note.end);
  return { start: first.start - leadIn, end };
}

/** `song` with only the notes of its pitched tracks that start from `start` to before `end`. */
export function songWithin(song: Song, start: number, end: number): Song {
  const inside = (note: Note) => note.start >= start && note.start < end;
  const tracks = song.tracks.map((track) => (track.percussion ? track : { ...track, notes: track.notes.filter(inside) }));
  return { ...song, tracks, notes: song.notes.filter(inside) };
}

/** `song` without `left`, the notes kept by identity, as the scheduler plays it while the learner plays them. */
export function songWithout(song: Song, left: ReadonlySet<Note>): Song {
  if (left.size === 0) return song;
  const kept = (note: Note) => !left.has(note);
  const tracks = song.tracks.map((track) => ({ ...track, notes: track.notes.filter(kept) }));
  return { ...song, tracks, notes: song.notes.filter(kept) };
}

/**
 * `song` with every note of its pitched tracks `semitones` higher, or `song` itself at 0. A note pushed
 * past MIDI's range of 0 to 127 is left out. Percussion keeps its pitches, since each names a drum.
 */
export function transposeSong(song: Song, semitones: number): Song {
  if (semitones === 0) return song;
  const moved = new Map<Note, Note>();
  const tracks = song.tracks.map((track) => {
    if (track.percussion) return track;
    const notes: Note[] = [];
    for (const note of track.notes) {
      const pitch = note.pitch + semitones;
      if (pitch < 0 || pitch > 127) continue;
      const copy = { ...note, pitch };
      moved.set(note, copy);
      notes.push(copy);
    }
    return { ...track, notes };
  });
  const percussion = new Set(song.tracks.filter((track) => track.percussion).map((track) => track.index));
  const notes = song.notes.flatMap((note) => (percussion.has(note.track) ? [note] : (moved.get(note) ?? [])));
  notes.sort((a, b) => a.start - b.start || a.pitch - b.pitch);
  return { ...song, tracks, notes };
}

/** How one track sounds: muted, and its volume from 0 to 1. */
export interface TrackMix {
  readonly muted: boolean;
  readonly volume: number;
}

/**
 * `song` without the notes and pedals of the tracks `mix` mutes, by track index, so a muted track's
 * pedal never holds another's notes. Returns `song` itself when no track is muted.
 */
export function songWithoutMuted(song: Song, mix: readonly TrackMix[]): Song {
  if (!mix.some((track) => track.muted)) return song;
  const muted = (track: number) => mix[track]?.muted === true;
  const tracks = song.tracks.map((track) => (muted(track.index) ? { ...track, notes: [], pedals: [] } : track));
  return { ...song, tracks, notes: song.notes.filter((note) => !muted(note.track)) };
}

/** What the transport needs of the audio engine. An `AudioEngine` is one. */
export interface TransportAudio {
  readonly scheduler: Pick<Scheduler, "load" | "start" | "stop" | "restart" | "pump">;
  readonly metronome: Pick<Metronome, "setCountIn">;
  /** Plays the song's notes, here those a scrub crosses. */
  readonly song: Pick<NotePlayer, "noteOn" | "noteOff">;
  resume(): Promise<void>;
}

/** What the transport needs of the scene. A `PianoScene` is one. */
export type TransportScene = Pick<PianoScene, "setSong" | "setTimeSource" | "setCycle">;

/** Plays one song through the audio and the scene, on one `SongClock`. */
export class Transport {
  readonly #clock: SongClock;
  readonly #audio: TransportAudio;
  readonly #scene: TransportScene;
  #song: Song | undefined;
  /** The song as it shows, transposed. */
  #shown: Song | undefined;
  #transpose = 0;
  #loop: LoopSpec | undefined;
  #range: LoopRange | undefined;
  #renderOffset = 0;
  #learner: ((shown: Song) => readonly Note[]) | undefined;
  #required: readonly Note[] = [];
  #learnerPlays = false;
  #mix: readonly TrackMix[] = [];
  readonly #showListeners = new Set<() => void>();
  readonly #seekListeners = new Set<(from: number) => void>();
  #restartOnEnd = false;
  #leadIn = DEFAULT_LEAD_IN;
  /** The clock's count of wraps that `tick` last told of. */
  #passes = 0;

  constructor(clock: SongClock, audio: TransportAudio, scene: TransportScene) {
    this.#clock = clock;
    this.#audio = audio;
    this.#scene = scene;
  }

  /** The song loaded, or undefined before one is. */
  get song(): Song | undefined {
    return this.#song;
  }

  /** The song time that sounds now, in seconds. */
  get time(): number {
    return this.#clock.songTime;
  }

  /** Whether the song plays. */
  get playing(): boolean {
    return this.#clock.playing;
  }

  /** How many times as fast as written the song plays. */
  get speed(): number {
    return this.#clock.speed;
  }

  /** Plays `speed` times as fast as written, clamped to `MIN_SPEED` and `MAX_SPEED`. */
  set speed(speed: number) {
    this.#clock.speed = Math.min(MAX_SPEED, Math.max(MIN_SPEED, speed));
  }

  /** How many semitones up the song sounds and shows, or down when negative. */
  get transpose(): number {
    return this.#transpose;
  }

  /** Moves the song `semitones` up, rounded and clamped to `MAX_TRANSPOSE` either way, and plays on. */
  set transpose(semitones: number) {
    const next = Math.min(MAX_TRANSPOSE, Math.max(-MAX_TRANSPOSE, Math.round(semitones)));
    if (next === this.#transpose) return;
    this.#transpose = next;
    if (this.#song !== undefined) this.#show(this.#song);
  }

  /** Whether the song starts again from 0 at its end, seamlessly, rather than stopping there. */
  get restartOnEnd(): boolean {
    return this.#restartOnEnd;
  }

  set restartOnEnd(restart: boolean) {
    if (restart === this.#restartOnEnd) return;
    this.#restartOnEnd = restart;
    if (this.#shown === undefined || !this.#setCycle(this.#shown)) return;
    this.#audio.scheduler.restart();
  }

  /** The seconds every song plays before its first note, at its start and before each repeat. */
  get leadIn(): number {
    return this.#leadIn;
  }

  /**
   * Plays `seconds` before the first note, at least 0. A paused song waiting at its old start moves to
   * the new one, and a repeat takes the new span at once.
   */
  set leadIn(seconds: number) {
    const next = Math.max(0, seconds);
    if (next === this.#leadIn) return;
    const atStart = this.#song !== undefined && !this.#clock.playing && this.#range === undefined && this.#clock.songTime === this.start;
    this.#leadIn = next;
    if (this.#shown === undefined) return;
    if (atStart) this.#seekTo(this.start);
    if (this.#setCycle(this.#shown)) this.#audio.scheduler.restart();
  }

  /** The song time the loaded song starts at: `leadIn` before its first note, or 0 before a song is loaded. */
  get start(): number {
    return this.#song === undefined ? 0 : songSpan(this.#song, this.#leadIn).start;
  }

  /** The loop as set, or undefined while there is none. */
  get loop(): LoopSpec | undefined {
    return this.#loop;
  }

  /**
   * Loops as `spec` says, or plays the whole song when it is undefined. A loop that turns on or moves
   * starts a pass at its count-in. A trainer that turns on sets the speed to its start.
   */
  set loop(spec: LoopSpec | undefined) {
    const trainer = spec?.trainerFrom;
    if (trainer !== undefined && (this.#loop === undefined || this.#loop.trainerFrom !== trainer)) this.speed = trainer;
    this.#loop = spec;
    if (this.#song === undefined) return;
    const before = this.#range;
    this.#show(this.#song);
    const after = this.#range;
    if (after === undefined) return;
    if (before === undefined || before.countIn !== after.countIn || before.end !== after.end) this.#seekTo(after.countIn);
  }

  /** The song times of the loop in the loaded song, or undefined without a loop. */
  get loopRange(): LoopRange | undefined {
    return this.#range;
  }

  /** How many milliseconds the picture runs behind the sound, or ahead of it when negative. */
  get renderOffset(): number {
    return this.#renderOffset * 1000;
  }

  set renderOffset(ms: number) {
    this.#renderOffset = ms / 1000;
  }

  /** The song as it shows and sounds, transposed, or undefined before one is loaded. */
  get shown(): Song | undefined {
    return this.#shown;
  }

  /** Picks the learner's notes from the shown song, or none when undefined. Setting it shows the song anew. */
  set learner(pick: ((shown: Song) => readonly Note[]) | undefined) {
    this.#learner = pick;
    if (this.#song !== undefined) this.#show(this.#song);
  }

  /** The learner's notes of the shown song, in start order. */
  get required(): readonly Note[] {
    return this.#required;
  }

  /** Whether the learner plays their notes, so the app leaves them out. */
  get learnerPlays(): boolean {
    return this.#learnerPlays;
  }

  set learnerPlays(plays: boolean) {
    if (plays === this.#learnerPlays) return;
    this.#learnerPlays = plays;
    if (this.#song !== undefined) this.#show(this.#song);
  }

  /** How each track sounds, by track index. A track the list lacks plays at full volume. Setting it shows the song anew. */
  set mix(mix: readonly TrackMix[]) {
    this.#mix = mix;
    if (this.#song !== undefined) this.#show(this.#song);
  }

  /** Hears every show of the song: a load, a transpose, a loop or a new pick of the learner's notes. */
  onShow(listener: () => void): () => void {
    this.#showListeners.add(listener);
    return () => this.#showListeners.delete(listener);
  }

  /** The song time that song time stops at while playing, or undefined while it runs freely. */
  get heldAt(): number | undefined {
    return this.#clock.hold;
  }

  /** How far song time would have run past its hold by now, in song seconds, or 0 while it is not held. */
  get waited(): number {
    return this.#clock.overrun;
  }

  /** Stops song time at `seconds` ahead, or lets it run on with undefined. A seek clears it. */
  holdAt(seconds: number | undefined): void {
    if (seconds === this.#clock.hold) return;
    this.#clock.hold = seconds;
    if (this.#clock.playing) this.#audio.scheduler.pump();
  }

  /** Stops, and shows `song` from its start, or from the loop's count-in, ready to play. */
  load(song: Song): void {
    this.pause();
    this.#song = song;
    this.#clock.seek(this.start);
    this.#show(song);
    if (this.#range !== undefined) this.#seekTo(this.#range.countIn);
  }

  /**
   * Hands `song`, transposed, to the scene, and to the scheduler without the notes a loop mutes. It keeps
   * the song time and plays on.
   */
  #show(song: Song): void {
    const shown = transposeSong(song, this.#transpose);
    this.#shown = shown;
    this.#range = this.#loop === undefined ? undefined : loopRange(shown, this.#loop);
    const range = this.#range;
    const muted = range !== undefined && this.#loop?.mute === true;
    this.#required = this.#learner?.(shown) ?? [];
    const looped = muted ? songWithin(shown, range.start, range.end) : shown;
    const played = this.#learnerPlays ? songWithout(looped, new Set(this.#required)) : looped;
    this.#setCycle(shown);
    this.#audio.scheduler.load(songWithoutMuted(played, this.#mix), (track) => this.#mix[track]?.volume ?? 1);
    this.#audio.metronome.setCountIn(range, this.#loop?.clicks === true);
    this.#scene.setSong(shown);
    this.#scene.setTimeSource(() => this.#clock.songTimeAt(this.#clock.audioTime - this.#renderOffset));
    if (this.#clock.playing) this.#audio.scheduler.start();
    for (const listener of [...this.#showListeners]) listener();
  }

  /**
   * Gives the clock and the scene the cycle `shown` repeats in: an `auto` loop's, or the whole song's
   * with `restartOnEnd`. Returns whether the cycle changed, which starts the clock's run time again.
   */
  #setCycle(shown: Song): boolean {
    const range = this.#range;
    let cycle: Cycle | undefined;
    if (range !== undefined) cycle = this.#loop?.auto === true ? { from: range.countIn, to: range.end } : undefined;
    else if (this.#restartOnEnd) {
      const span = songSpan(this.#song ?? shown, this.#leadIn);
      if (span.end > span.start) cycle = { from: span.start, to: span.end };
    }
    this.#scene.setCycle(cycle);
    const old = this.#clock.cycle;
    if (old?.from === cycle?.from && old?.to === cycle?.to) return false;
    this.#clock.cycle = cycle;
    this.#passes = this.#clock.passes;
    return true;
  }

  /**
   * Tells of each pass that ended, and ends the song or a pausing loop once the song time reaches its
   * end. Call it every frame. A seamless repeat has already wrapped on the clock, so here a pass only
   * raises the trainer's speed and tells the listeners. A loop that is not `auto` pauses at its count-in.
   * The song stops at its end without `restartOnEnd`.
   */
  tick(): void {
    const song = this.#song;
    if (song === undefined || !this.#clock.playing) return;
    const cycle = this.#clock.cycle;
    if (cycle !== undefined) {
      const passes = this.#clock.passes;
      if (passes === this.#passes) return;
      this.#passes = passes;
      if (this.#range !== undefined && this.#loop?.trainerFrom !== undefined) this.speed = trainerSpeed(this.speed, true);
      for (const listener of [...this.#seekListeners]) listener(cycle.to);
      return;
    }
    const time = this.#clock.songTime;
    const range = this.#range;
    if (range !== undefined) {
      if (time < range.end) return;
      if (this.#loop?.trainerFrom !== undefined) this.speed = trainerSpeed(this.speed, true);
      this.pause();
      this.#seekTo(range.countIn);
      return;
    }
    if (time < song.duration) return;
    this.pause();
    this.#seekTo(song.duration);
  }

  /** Plays from the current song time, or from the start at the song's end. It does nothing before a song is loaded. */
  play(): void {
    if (this.#song === undefined || this.#clock.playing) return;
    if (this.#range === undefined && this.#clock.songTime >= this.#song.duration) this.#seekTo(this.start);
    void this.#audio.resume();
    this.#clock.play();
    this.#audio.scheduler.start();
  }

  /** Stops at the current song time. */
  pause(): void {
    if (!this.#clock.playing) return;
    this.#clock.pause();
    this.#audio.scheduler.stop();
  }

  /** Stops, and returns to where `load` leaves the song: its start, or the loop's count-in. */
  stop(): void {
    this.pause();
    if (this.#song !== undefined) this.#seekTo(this.#range?.countIn ?? this.start);
  }

  /** Plays when paused, and pauses when playing. */
  toggle(): void {
    if (this.#clock.playing) this.pause();
    else this.play();
  }

  /** Moves to `seconds` of song time, from the start to the song's end, and plays on from there when playing. */
  seek(seconds: number): void {
    if (this.#song === undefined) return;
    this.#seekTo(Math.min(this.#song.duration, Math.max(this.start, seconds)));
  }

  /** Seeks as `seek` does, and plays the notes that start between the old and the new song time. */
  scrub(seconds: number): void {
    const shown = this.#shown;
    if (shown === undefined) return;
    const from = this.#clock.songTime;
    this.seek(seconds);
    const to = this.#clock.songTime;
    const low = Math.min(from, to);
    const high = Math.max(from, to);
    const crossed = shown.tracks
      .filter((track) => !track.percussion && this.#mix[track.index]?.muted !== true)
      .flatMap((track) => track.notes.filter((note) => note.start >= low && note.start < high))
      .slice(0, SCRUB_NOTES);
    if (crossed.length === 0) return;
    void this.#audio.resume();
    const now = this.#clock.audioTime;
    for (const note of crossed) {
      void this.#audio.song.noteOn(note.pitch, note.velocity, now, this.#mix[note.track]?.volume ?? 1);
      this.#audio.song.noteOff(note.pitch, now + SCRUB_LENGTH);
    }
  }

  /** Hears every seek, a pass's wrap and the song's end among them, with the song time it left. */
  onSeek(listener: (from: number) => void): () => void {
    this.#seekListeners.add(listener);
    return () => this.#seekListeners.delete(listener);
  }

  /** Moves to `seconds` of song time, unclamped, and plays on from there when playing. */
  #seekTo(seconds: number): void {
    const from = this.#clock.songTime;
    this.#clock.seek(seconds);
    this.#passes = this.#clock.passes;
    this.#audio.scheduler.restart();
    for (const listener of [...this.#seekListeners]) listener(from);
  }
}

/** A transport on the song clock and the engine of `audio`, playing into `scene`. */
export function createTransport(audio: { clock: SongClock; engine: AudioEngine }, scene: TransportScene): Transport {
  return new Transport(audio.clock, audio.engine, scene);
}
