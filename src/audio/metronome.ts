/**
 * The metronome: a short synthesised click on each beat, louder in pitch on the first beat of a measure.
 *
 * It runs in one of two ways:
 * - **In time with the song.** It is a `ScheduledPart` of the scheduler, so it clicks on the beats of
 *   the song's tempo map, in the same windows as the notes. It follows tempo changes, speed and seeks.
 * - **Free.** `startFree` clicks at a steady tempo from a time on the audio clock until `stopFree`,
 *   whatever the song does. It queues ahead on its own timer, the same way the scheduler does.
 *
 * The `synced` option picks which of the two may sound. Both keep counting while silent, so switching
 * keeps each in its own time.
 *
 * Decisions, and what each costs:
 * - A click is a sine burst of `CLICK_LENGTH` seconds through its own gain, so it needs no sample file.
 * - A pause or a seek silences the clicks still queued, and lets the one sounding finish.
 * - A loop's count-in clicks through `setCountIn` even while the metronome is off. A song beat on a
 *   count-in beat clicks once.
 * - A click may also go to the MIDI output `midiOut` returns, as a note-on and a note-off timed ahead
 *   on the MIDI clock. The drum kit plays on channel 10, where the note picks the drum. Every other
 *   sound plays on channel 16, after one program change whenever the sound or the port changes.
 * - `metronomeVolume` sets the speakers' clicks. A MIDI click has a fixed velocity, louder on the
 *   first beat, and the device's own volume sets how loud it sounds. A volume of 0 silences both.
 *
 * Gaps: a pause or a seek cannot take back the MIDI clicks already sent, so up to the look-ahead of
 * them still sound.
 */

import type { Song } from "../midi/song";
import type { Beat } from "../midi/tempo-map";
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

interface FreeRun {
  readonly start: number;
  readonly secondsPerBeat: number;
  readonly beatsPerMeasure: number;
  /** The index of the next beat to queue. */
  next: number;
  stopTimer: () => void;
}

/** Clicks on beats into `output`. */
export class Metronome implements ScheduledPart {
  readonly #ctx: MetronomeContext;
  readonly #output: NodeLike;
  readonly #timer: Timer;
  #options: MetronomeOptions;
  #beats: Beat[] = [];
  #clicks: Click[] = [];
  #free: FreeRun | null = null;
  /** The song times of a loop's count-in beats, the first accented. */
  #countIn: readonly number[] = [];
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
    if (this.#free !== null && options.intervalMs !== undefined) {
      this.#free.stopTimer();
      this.#free.stopTimer = this.#startFreeTimer();
    }
  }

  load(song: Song): void {
    this.#beats = song.tempoMap.beatsUntil(song.endTick);
  }

  /** Clicks on `beats`, song times in order, whether the metronome is on or not. An empty list stops it. */
  setCountIn(beats: readonly number[]): void {
    this.#countIn = beats;
  }

  schedule(from: number, to: number, at: (songTime: number) => number): void {
    const counting = (this.#options.speakers || this.#options.midi) && this.#options.volume > 0;
    const counted = (seconds: number) => this.#countIn.some((beat) => Math.abs(beat - seconds) < 1e-3);
    this.#countIn.forEach((seconds, i) => {
      if (counting && seconds >= from && seconds < to) this.#click(at(seconds), i === 0);
    });
    const sounds = this.#sounds(true);
    for (let i = firstBeatAtOrAfter(this.#beats, from); i < this.#beats.length; i++) {
      const beat = this.#beats[i]!;
      if (beat.seconds >= to) break;
      if (sounds && !counted(beat.seconds)) this.#click(at(beat.seconds), beat.beat === 0);
    }
  }

  stop(): void {
    const now = this.#ctx.currentTime;
    for (const click of this.#clicks) {
      if (click.time > now) this.#forget(click);
    }
  }

  /** Clicks `bpm` beats a minute, `beatsPerMeasure` to a measure, from `time` or now, until `stopFree`. */
  startFree(bpm: number, beatsPerMeasure: number, time = this.#ctx.currentTime): void {
    this.stopFree();
    this.#free = { start: time, secondsPerBeat: 60 / bpm, beatsPerMeasure, next: 0, stopTimer: this.#startFreeTimer() };
    this.#pumpFree();
  }

  /** Stops the free clicks, and silences the ones still queued. */
  stopFree(): void {
    if (this.#free === null) return;
    this.#free.stopTimer();
    this.#free = null;
    this.stop();
  }

  #startFreeTimer(): () => void {
    return this.#timer.every(this.#options.intervalMs, () => this.#pumpFree());
  }

  #pumpFree(): void {
    const free = this.#free;
    if (free === null) return;
    const until = this.#ctx.currentTime + this.#options.aheadMs / 1000;
    const sounds = this.#sounds(false);
    for (;;) {
      const time = free.start + free.next * free.secondsPerBeat;
      if (time >= until) break;
      if (sounds) this.#click(time, free.next % free.beatsPerMeasure === 0);
      free.next++;
    }
  }

  /** Whether the metronome in time with the song, or the free one, may sound now. */
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
