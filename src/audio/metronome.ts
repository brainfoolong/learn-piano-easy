/**
 * The metronome: a short synthesised click on each beat, louder in pitch on the first beat of a measure.
 *
 * It runs in one of three ways:
 * - **In time with the song.** It is a `ScheduledPart` of the scheduler, so it clicks on the beats of
 *   the song's tempo map, in the same windows as the notes. It follows tempo changes, speed and seeks.
 * - **The player's steady beat.** The first scheduler window it may sound in starts it. It takes the
 *   song's tempo and time signature at that play position, and its first click lands on the song's
 *   next beat. From there it clicks on its own timer, so tempo changes, speed changes and a wait mode's
 *   hold leave it alone. A pause, a seek or a new song ends it, through `stop` and `load`. A loop's
 *   count-in ends it too, whether it clicks or not, and it starts again on the first beat of the pass.
 * - **Free.** `startFree` clicks at a steady tempo from a time on the audio clock until `stopFree`,
 *   whatever the song does.
 *
 * The steady beat and the free clicks queue ahead on their own timers, the same way the scheduler
 * does. The `synced` option picks which may sound: the song's beats when true, the steady beat and the
 * free clicks when false. A steady or free run keeps counting while silent, so switching keeps it in
 * its own time.
 *
 * Decisions, and what each costs:
 * - A click is a sine burst of `CLICK_LENGTH` seconds through its own gain, so it needs no sample file.
 * - A pause or a seek silences the clicks still queued, and lets the one sounding finish.
 * - `setCountIn` hands over a loop's count-in and whether it clicks. A count-in that clicks does so even
 *   while the metronome is off. A song beat on a count-in beat clicks once.
 * - The steady beat rests through a count-in, whether it clicks or not, so the pass starts on a fresh
 *   beat. The scheduler window that reaches the count-in's first beat ends it, as a seek does. Each pass
 *   then starts it anew at the tempo where the pass starts.
 * - While a loop has a count-in, the steady beat sends a MIDI click only once a scheduler window reaches
 *   it. It then knows of a coming count-in before it sends, and no MIDI click of it sounds there. The
 *   cost is that a wait mode's hold, which stops the windows, stops these MIDI clicks too. A click
 *   whose time passed while it waited is dropped, since it would sound late.
 * - A click may also go to the MIDI output `midiOut` returns, as a note-on and a note-off timed ahead
 *   on the MIDI clock. The drum kit plays on channel 10, where the note picks the drum. Every other
 *   sound plays on channel 16, after one program change whenever the sound or the port changes.
 * - `metronomeVolume` sets the speakers' clicks. A MIDI click has a fixed velocity, louder on the
 *   first beat, and the device's own volume sets how loud it sounds. A volume of 0 silences both.
 *
 * Gaps:
 * - A pause or a seek cannot take back the MIDI clicks already sent, so up to the look-ahead of them
 *   still sound.
 * - A speed-up after a window moves a coming count-in earlier on the audio clock. A MIDI click of the
 *   steady beat sent within that window may then still sound in the count-in.
 */

import type { Song } from "../midi/song";
import type { Beat, TempoMap } from "../midi/tempo-map";
import type { GainLike, NodeLike, ParamLike } from "./sampler";
import { intervalTimer, type Clock, type ScheduledPart, type Timer } from "./scheduler";

/** How long a click sounds, in seconds. */
export const CLICK_LENGTH = 0.05;

/** The rise of a click to its full volume, in seconds. It keeps the click from popping. */
const CLICK_RISE = 0.002;

/** The pitch, in hertz, of the first beat of a measure, and of every other beat. */
export const ACCENT_HZ = 1760;
export const BEAT_HZ = 1320;

/** The velocity of a MIDI click on the first beat of a measure, and on every other beat. */
export const ACCENT_VELOCITY = 110;
export const BEAT_VELOCITY = 80;

/** How long a MIDI click's note lasts, in milliseconds. */
export const MIDI_CLICK_MS = 100;

/** The sounds a MIDI click can have. */
export type MidiClickSound = "woodblock" | "drums" | "piano";

/** The General MIDI program, counted from 0, of each sound off the drum channel. */
const PROGRAMS: Readonly<Record<MidiClickSound, number | undefined>> = { woodblock: 115, drums: undefined, piano: 0 };

/** The drum channel, and the channel every other click sound plays on, counted from 0. */
const DRUM_CHANNEL = 9;
const CLICK_CHANNEL = 15;

/** A MIDI output, such as a `MIDIOutput`. `timestamp` is on `performance.now()`'s clock. */
export interface MidiOut {
  send(data: number[], timestamp?: number): void;
}

/** An oscillator, such as an `OscillatorNode`. */
export interface OscillatorLike extends NodeLike {
  readonly frequency: ParamLike;
  onended: ((this: never, event: never) => unknown) | null;
  start(when: number): void;
  stop(when: number): void;
}

/** What the metronome needs of an audio context. An `AudioContext` is one. */
export interface MetronomeContext extends Clock {
  createGain(): GainLike;
  createOscillator(): OscillatorLike;
}

/** How the metronome plays: the values of the settings it reads. */
export interface MetronomeOptions {
  readonly enabled: boolean;
  /** From 0 to 1. */
  readonly volume: number;
  /** It clicks on the song's beats when true, and at its free tempo when false. */
  readonly synced: boolean;
  /** It may sound on the speakers. */
  readonly speakers: boolean;
  /** It may sound on the MIDI output. */
  readonly midi: boolean;
  /** The MIDI note a click plays, from 0 to 127. */
  readonly midiNote: number;
  readonly midiSound: MidiClickSound;
  /** How far ahead the free metronome queues, and how often it wakes, in milliseconds. */
  readonly aheadMs: number;
  readonly intervalMs: number;
}

interface Click {
  readonly time: number;
  readonly osc: OscillatorLike;
  readonly gain: GainLike;
}

/** A steady beat: its first click on the audio clock, its pace, and where its first click falls in a measure. */
interface SteadyBeat {
  readonly start: number;
  readonly secondsPerBeat: number;
  readonly beatsPerMeasure: number;
  /** The place of the first click in its measure, 0 being the downbeat. */
  readonly firstBeat: number;
}

/** A steady beat that clicks on its own timer: the free clicks or the player's steady beat. */
interface Run extends SteadyBeat {
  /** The index of the next beat to queue, counted from the first click. */
  next: number;
  /** The index of the next beat to send to the MIDI output, which may trail `next`. */
  midiNext: number;
  /** Whether its MIDI clicks wait for the scheduler's windows while a loop has a count-in: the steady beat's do. */
  readonly gated: boolean;
  stopTimer: () => void;
}

/** A loop's count-in: the song times of its beats, the first accented, and the song time its pass starts. */
export interface CountIn {
  readonly beats: readonly number[];
  readonly start: number;
}

/** Clicks on beats into `output`. */
export class Metronome implements ScheduledPart {
  readonly #ctx: MetronomeContext;
  readonly #output: NodeLike;
  readonly #timer: Timer;
  #options: MetronomeOptions;
  #beats: Beat[] = [];
  #tempoMap: TempoMap | undefined;
  #clicks: Click[] = [];
  #free: Run | null = null;
  #steady: Run | null = null;
  /** The loop's count-in, or undefined for none, and whether it clicks. */
  #countIn: CountIn | undefined;
  #countInClicks = false;
  /** The audio time the scheduler's latest window reaches. */
  #window = -Infinity;
  readonly #now: () => number;
  /** The port and program of the last program change sent. */
  #programmed: { port: MidiOut; program: number } | undefined;
  /** Returns the MIDI output a click may go to, or undefined for none. */
  midiOut: (() => MidiOut | undefined) | undefined;

  /** `now` reads the MIDI clock, `performance.now()` by default, in milliseconds. */
  constructor(ctx: MetronomeContext, output: NodeLike, options: MetronomeOptions, timer: Timer = intervalTimer, now: () => number = () => performance.now()) {
    this.#ctx = ctx;
    this.#output = output;
    this.#options = options;
    this.#timer = timer;
    this.#now = now;
  }

  /** Changes how the next clicks play. */
  configure(options: Partial<MetronomeOptions>): void {
    this.#options = { ...this.#options, ...options };
    if (options.intervalMs === undefined) return;
    for (const run of [this.#free, this.#steady]) {
      if (run === null) continue;
      run.stopTimer();
      run.stopTimer = this.#startTimer(run);
    }
  }

  load(song: Song): void {
    this.#beats = song.tempoMap.beatsUntil(song.endTick);
    this.#tempoMap = song.tempoMap;
    this.#steady = this.#end(this.#steady);
  }

  /**
   * Takes the loop's count-in, or undefined for none. The steady beat rests through it. When `clicks`
   * is true, it clicks on its beats, whether the metronome is on or not.
   */
  setCountIn(countIn: CountIn | undefined, clicks: boolean): void {
    this.#countIn = countIn;
    this.#countInClicks = clicks;
  }

  schedule(from: number, to: number, at: (songTime: number) => number): void {
    const beats = this.#countInClicks ? (this.#countIn?.beats ?? []) : [];
    const counting = (this.#options.speakers || this.#options.midi) && this.#options.volume > 0;
    const counted = (seconds: number) => beats.some((beat) => Math.abs(beat - seconds) < 1e-3);
    this.#window = at(to);
    this.#keepSteady(from, to, at);
    if (this.#steady !== null) this.#pump(this.#steady);
    beats.forEach((seconds, i) => {
      if (counting && seconds >= from && seconds < to) this.#click(at(seconds), i === 0);
    });
    const sounds = this.#sounds(true);
    for (let i = firstBeatAtOrAfter(this.#beats, from); i < this.#beats.length; i++) {
      const beat = this.#beats[i]!;
      if (beat.seconds >= to) break;
      if (sounds && !counted(beat.seconds)) this.#click(at(beat.seconds), beat.beat === 0);
    }
  }

  /**
   * Starts the player's steady beat in the first window it may sound in, and keeps it out of a count-in.
   * A window that reaches the count-in's first beat ends the beat there, as a seek does. A window that
   * overlaps the count-in starts the beat on the pass's first beat.
   */
  #keepSteady(from: number, to: number, at: (songTime: number) => number): void {
    const countIn = this.#countIn;
    const first = countIn?.beats[0];
    let start = from;
    let begin = this.#steady === null && this.#sounds(false);
    if (countIn !== undefined && first !== undefined && first < to && from < countIn.start) {
      start = countIn.start;
      if (this.#steady !== null && from <= first + 1e-6) {
        // The beat's clicks before the count-in still sound. Its timer may have queued speaker clicks
        // past the count-in's first beat, and those are silenced. Its MIDI clicks waited for the
        // windows, so none of them lies past that beat.
        const end = at(first) - 1e-3;
        this.#pump(this.#steady, end);
        this.#steady = this.#end(this.#steady);
        this.#silence(end);
        begin = true;
      }
    }
    if (begin && this.#tempoMap !== undefined) this.#steady = this.#start(steadyBeatFrom(this.#tempoMap, start, at), true);
  }

  /** Ends the player's steady beat, and silences every click still queued, as a pause or a seek needs. */
  stop(): void {
    this.#steady = this.#end(this.#steady);
    this.#silence();
  }

  /** Clicks `bpm` beats a minute, `beatsPerMeasure` to a measure, from `time` or now, until `stopFree`. */
  startFree(bpm: number, beatsPerMeasure: number, time = this.#ctx.currentTime): void {
    this.stopFree();
    this.#free = this.#start({ start: time, secondsPerBeat: 60 / bpm, beatsPerMeasure, firstBeat: 0 }, false);
  }

  /** Stops the free clicks, and silences every click still queued. */
  stopFree(): void {
    if (this.#free === null) return;
    this.#free = this.#end(this.#free);
    this.#silence();
  }

  /** Starts `beat` clicking on its own timer, and queues its first clicks at once. `gated` is as `Run` says. */
  #start(beat: SteadyBeat, gated: boolean): Run {
    const run: Run = { ...beat, next: 0, midiNext: 0, gated, stopTimer: () => {} };
    run.stopTimer = this.#startTimer(run);
    this.#pump(run);
    return run;
  }

  /** Stops `run`'s timer. Returns null, the value of a run that is not there. */
  #end(run: Run | null): null {
    run?.stopTimer();
    return null;
  }

  #startTimer(run: Run): () => void {
    return this.#timer.every(this.#options.intervalMs, () => this.#pump(run));
  }

  /**
   * Queues `run`'s clicks up to the look-ahead, and before audio time `end`. It counts on while it may
   * not sound. A gated run's MIDI clicks also wait, while a loop has a count-in, until the scheduler's
   * window reaches them. One whose time passed while it waited is dropped, since it would sound late.
   */
  #pump(run: Run, end = Infinity): void {
    const now = this.#ctx.currentTime;
    const until = Math.min(end, now + this.#options.aheadMs / 1000);
    const sounds = this.#sounds(false);
    const time = (beat: number) => run.start + beat * run.secondsPerBeat;
    const accent = (beat: number) => (run.firstBeat + beat) % run.beatsPerMeasure === 0;
    for (; time(run.next) < until; run.next++) {
      if (sounds && this.#options.speakers) this.#beep(time(run.next), accent(run.next));
    }
    const gated = run.gated && (this.#countIn?.beats.length ?? 0) > 0;
    const midiUntil = gated ? Math.min(until, this.#window) : until;
    for (; time(run.midiNext) < midiUntil; run.midiNext++) {
      if (sounds && this.#options.midi && (!gated || time(run.midiNext) >= now)) this.#sendMidi(time(run.midiNext), accent(run.midiNext));
    }
  }

  /** Silences the clicks queued after audio time `after` and after now, and lets the one sounding finish. */
  #silence(after = this.#ctx.currentTime): void {
    const from = Math.max(after, this.#ctx.currentTime);
    for (const click of this.#clicks) {
      if (click.time > from) this.#forget(click);
    }
  }

  /** Whether the clicks in time with the song, or the steady and free runs, may sound now. */
  #sounds(synced: boolean): boolean {
    const o = this.#options;
    return o.enabled && (o.speakers || o.midi) && o.volume > 0 && o.synced === synced;
  }

  #click(time: number, accent: boolean): void {
    if (this.#options.midi) this.#sendMidi(time, accent);
    if (this.#options.speakers) this.#beep(time, accent);
  }

  /** Sends a click at `time` on the audio clock to the MIDI output, when there is one. */
  #sendMidi(time: number, accent: boolean): void {
    const port = this.midiOut?.();
    if (port === undefined) return;
    const { midiSound, midiNote } = this.#options;
    const program = PROGRAMS[midiSound];
    const channel = program === undefined ? DRUM_CHANNEL : CLICK_CHANNEL;
    const at = this.#now() + (time - this.#ctx.currentTime) * 1000;
    try {
      if (program !== undefined && (this.#programmed?.port !== port || this.#programmed.program !== program)) {
        port.send([0xc0 | channel, program]);
        this.#programmed = { port, program };
      }
      port.send([0x90 | channel, midiNote, accent ? ACCENT_VELOCITY : BEAT_VELOCITY], at);
      port.send([0x80 | channel, midiNote, 0], at + MIDI_CLICK_MS);
    } catch {
      // A port that has just gone away takes the click with it.
    }
  }

  #beep(time: number, accent: boolean): void {
    const osc = this.#ctx.createOscillator();
    const gain = this.#ctx.createGain();
    osc.frequency.value = accent ? ACCENT_HZ : BEAT_HZ;
    osc.connect(gain);
    gain.connect(this.#output);
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(this.#options.volume, time + CLICK_RISE);
    gain.gain.linearRampToValueAtTime(0, time + CLICK_LENGTH);
    const click: Click = { time, osc, gain };
    osc.onended = () => this.#forget(click);
    this.#clicks.push(click);
    osc.start(time);
    osc.stop(time + CLICK_LENGTH);
  }

  #forget(click: Click): void {
    click.osc.disconnect();
    click.gain.disconnect();
    this.#clicks = this.#clicks.filter((c) => c !== click);
  }
}

/**
 * The steady beat that starts at song time `from` of `map`, with `at` mapping song time to the audio
 * clock. It takes the tempo and time signature there, and its first click falls on the next beat.
 */
function steadyBeatFrom(map: TempoMap, from: number, at: (songTime: number) => number): SteadyBeat {
  const tick = map.secondsToTicks(from);
  const signature = map.signatureAt(tick);
  const position = map.positionAtTick(tick);
  // A position a hair past a beat counts as on it, so float error never skips the beat it stands on.
  const beat = Math.ceil(position.beat - 1e-6);
  const first = map.ticksToSeconds(map.tickOfPosition(position.measure, beat));
  return {
    start: at(first),
    secondsPerBeat: (map.microsecondsPerBeatAt(tick) / 1e6) * (signature.ticksPerBeat / map.ticksPerQuarter),
    beatsPerMeasure: signature.numerator,
    firstBeat: beat % signature.numerator,
  };
}

/** The index of the first beat at or after `seconds`, or the length when none is. */
function firstBeatAtOrAfter(beats: readonly Beat[], seconds: number): number {
  let low = 0;
  let high = beats.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (beats[mid]!.seconds < seconds) low = mid + 1;
    else high = mid;
  }
  return low;
}
