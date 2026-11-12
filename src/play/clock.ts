/**
 * The song clock: the one map from song time to audio time, which the scheduler and the scene read.
 *
 * Run time maps to audio time through an anchor. The run time `anchorRun` sounds at the audio time
 * `anchorAudio`, and run time goes `speed` times as fast as audio time from there. While paused, run
 * time stays at `anchorRun`. Song time is run time wrapped round the cycle, when one is set, so a
 * loop or a repeated song goes on from its start at the exact audio time its end sounds.
 *
 * Decisions, and what each costs:
 * - Every change re-anchors at the audio time now. Play, pause, seek and a speed change then keep song
 *   time exact, and no error builds up however often they come.
 * - Run time is continuous through a pause, a speed change and a hold, and starts again only at a
 *   seek or a new cycle. The scheduler counts on that to queue each event exactly once.
 * - `passes` counts every wrap since the clock was made, across seeks, so the transport can tell
 *   that a pass ended even when it looks a frame later.
 * - The audio clock is the only time source. A suspended audio context holds song time still, so the
 *   picture never runs ahead of a sound that cannot play yet.
 * - The clock checks only that a speed is above 0. The transport keeps it within the learner's range.
 * - A hold stops song time at a song time ahead, as wait mode needs. Song time reaches it and stays
 *   there while the clock plays, so a reader of the clock, such as the scheduler, never runs past it.
 *   Setting a hold re-anchors, so the hold lies in the pass that plays, even just after a wrap.
 *   A new hold, or none, runs on from the old one with no jump. A seek clears the hold, and a hold
 *   below the paused song time is ignored. So is a hold at or past the cycle's end, since the wrap
 *   comes first.
 * - `overrun` says how long song time has stood at its hold, as song time it would have run. Game mode
 *   judges a note by it, so waiting is late. A pause starts the count again, as resuming before a note does.
 */
import { type Clock, type Cycle, lapOf, type SongTimeline, wrapTime } from "../audio/scheduler";

/** Song time on the audio clock, with play, pause, seek, speed and a cycle. Every time is in seconds. */
export class SongClock implements SongTimeline {
  readonly #audio: Clock;
  #playing = false;
  #speed = 1;
  #anchorRun = 0;
  #anchorAudio = 0;
  #hold: number | undefined;
  #cycle: Cycle | undefined;
  /** The wraps made before the current run time started. */
  #lapsBefore = 0;

  constructor(audio: Clock) {
    this.#audio = audio;
  }

  /** The audio clock now. */
  get audioTime(): number {
    return this.#audio.currentTime;
  }

  /** Whether song time runs. */
  get playing(): boolean {
    return this.#playing;
  }

  /** The song time that sounds now. */
  get songTime(): number {
    return this.songTimeAt(this.#audio.currentTime);
  }

  /** The song time that sounds at `audioTime`. While paused, it is the paused song time. */
  songTimeAt(audioTime: number): number {
    return wrapTime(this.runTimeAt(audioTime), this.#cycle);
  }

  /** The run time at `audioTime`: song time before wrapping, which grows through every wrap. */
  runTimeAt(audioTime: number): number {
    if (!this.#playing) return this.#anchorRun;
    const run = this.#anchorRun + (audioTime - this.#anchorAudio) * this.#speed;
    const hold = this.#holdRun();
    return hold !== undefined && hold >= this.#anchorRun ? Math.min(run, hold) : run;
  }

  /** The audio time at which run time `run` sounds, as the song plays on from now. */
  audioTimeOfRun(run: number): number {
    return this.#anchorAudio + (run - this.#anchorRun) / this.#speed;
  }

  /** The audio time at which `songTime` sounds in the pass the clock was last anchored in. */
  audioTimeOf(songTime: number): number {
    return this.audioTimeOfRun(songTime + (this.#anchorRun - wrapTime(this.#anchorRun, this.#cycle)));
  }

  /** How many times song time has wrapped round a cycle since the clock was made. */
  get passes(): number {
    return this.#lapsBefore + lapOf(this.runTimeAt(this.#audio.currentTime), this.#cycle);
  }

  /** The cycle song time wraps round, or undefined while it runs straight on. */
  get cycle(): Cycle | undefined {
    return this.#cycle;
  }

  /**
   * Wraps song time round `cycle` from now on, or lets it run straight on with undefined. Song time
   * stays, unless it lies at or past the new cycle's end, where it wraps into the cycle at once.
   */
  set cycle(cycle: Cycle | undefined) {
    const songTime = this.songTime;
    this.#restartRun(wrapTime(songTime, cycle));
    this.#cycle = cycle;
  }

  /** The song time that song time stops at while playing, or undefined while it runs freely. */
  get hold(): number | undefined {
    return this.#hold;
  }

  /**
   * Stops song time at `songTime` from now, or lets it run with undefined. It runs on from the old hold.
   * It anchors in the pass that plays now, so a hold set after a wrap stops song time in that pass.
   */
  set hold(songTime: number | undefined) {
    if (this.#playing) this.#reanchor();
    this.#hold = songTime;
  }

  /**
   * The audio time from which song time stands at its hold, as the song plays on from now. It is
   * undefined while paused, and while no hold lies ahead or under song time.
   */
  get heldFrom(): number | undefined {
    if (!this.#playing) return undefined;
    const hold = this.#holdRun();
    return hold === undefined || hold < this.#anchorRun ? undefined : this.audioTimeOfRun(hold);
  }

  /**
   * How far song time would have run past the hold by now, in song seconds. It is 0 while paused, and
   * while song time has not reached the hold.
   */
  get overrun(): number {
    if (!this.#playing) return 0;
    const hold = this.#holdRun();
    if (hold === undefined || hold < this.#anchorRun) return 0;
    const run = this.#anchorRun + (this.#audio.currentTime - this.#anchorAudio) * this.#speed;
    return Math.max(0, run - hold);
  }

  /** How many times as fast as written the song plays. */
  get speed(): number {
    return this.#speed;
  }

  /** Plays `speed` times as fast as written from now on, keeping the current song time. */
  set speed(speed: number) {
    if (!(speed > 0 && Number.isFinite(speed))) throw new RangeError(`A speed must be above 0, not ${speed}.`);
    this.#reanchor();
    this.#speed = speed;
  }

  /** Runs song time on from where it stands. */
  play(): void {
    if (this.#playing) return;
    this.#anchorAudio = this.#audio.currentTime;
    this.#playing = true;
  }

  /** Holds song time where it stands. */
  pause(): void {
    if (!this.#playing) return;
    this.#anchorRun = this.runTimeAt(this.#audio.currentTime);
    this.#playing = false;
  }

  /** Moves song time to `songTime`, clears the hold, and runs on from there when playing. */
  seek(songTime: number): void {
    this.#hold = undefined;
    this.#restartRun(songTime);
  }

  /** The hold as a run time in the anchor's pass, or undefined when there is none or the wrap comes first. */
  #holdRun(): number | undefined {
    const hold = this.#hold;
    if (hold === undefined) return undefined;
    if (this.#cycle !== undefined && this.#cycle.to > this.#cycle.from && hold >= this.#cycle.to) return undefined;
    return hold + (this.#anchorRun - wrapTime(this.#anchorRun, this.#cycle));
  }

  /** Anchors at the audio time now, keeping run time continuous. */
  #reanchor(): void {
    this.#anchorRun = this.runTimeAt(this.#audio.currentTime);
    this.#anchorAudio = this.#audio.currentTime;
  }

  /** Starts run time again at `songTime` from now, counting the wraps made so far. */
  #restartRun(songTime: number): void {
    this.#lapsBefore += lapOf(this.runTimeAt(this.#audio.currentTime), this.#cycle);
    this.#anchorRun = songTime;
    this.#anchorAudio = this.#audio.currentTime;
  }
}
