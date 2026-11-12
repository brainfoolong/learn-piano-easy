/**
 * The tempo map: converts a song's ticks to seconds and back, and gives a time's measure and beat.
 *
 * Decisions, and what each costs:
 * - It merges the tempo and time-signature events of every track by tick. Format 2 files, whose tracks
 *   are separate sequences, are read the same way, as their tracks playing together.
 * - When two events of the same kind share a tick, the one read last wins. Tracks are read in order.
 * - Before the first tempo event the tempo is 120 beats per minute, and before the first time signature
 *   the signature is 4/4, as the Standard MIDI File spec says.
 * - SMPTE time division converts ticks to seconds directly and ignores tempo events. Its measures and
 *   beats count a quarter note as half a second, because such a file has no beat of its own.
 * - A time signature in the middle of a measure starts a new measure at its tick. The cut-short measure
 *   before it still counts as one measure.
 * - Measures and beats count from 0. `beat` carries the fraction of a beat, and a beat is the note value
 *   of the signature's denominator, so 6/8 has 6 beats of an eighth note.
 * - A time before tick 0 extends the first tempo and signature backwards, so a lead-in has a position.
 * - A tempo of 0 and a signature with 0 beats are ignored, since neither can be played.
 *
 * Bounds: every lookup is a binary search over the tempo or signature changes. `beatsUntil` returns one
 * entry per beat up to the tick it is given.
 */

import type { MidiFile, TimeDivision } from "./smf-read";

/** The tempo when a file has no tempo event at tick 0: 120 beats per minute. */
export const DEFAULT_MICROSECONDS_PER_BEAT = 500_000;

/** A tempo change as a file states it. */
export interface TempoChange {
  tick: number;
  microsecondsPerBeat: number;
}

/** A time-signature change as a file states it. `denominator` is the note value, such as 8 for 6/8. */
export interface SignatureChange {
  tick: number;
  numerator: number;
  denominator: number;
}

/** What a tempo map is built from: the file's time division and its tempo and signature changes. */
export interface TempoMapInputs {
  division: TimeDivision;
  tempos: readonly TempoChange[];
  signatures: readonly SignatureChange[];
}

/** A stretch of constant tempo, from its `tick` and `seconds` to the next one. */
interface TempoSegment {
  tick: number;
  seconds: number;
  secondsPerTick: number;
  microsecondsPerBeat: number;
}

/** A time signature in force from `tick`, where measure `measure` starts. */
export interface TimeSignature extends SignatureChange {
  measure: number;
  ticksPerBeat: number;
  ticksPerMeasure: number;
}

/** A place in the music. `measure` is a whole number, and `beat` holds the fraction of a beat. */
export interface MusicalPosition {
  measure: number;
  beat: number;
}

/** One beat of the grid. `beat` is its whole-number place in its measure, 0 being the downbeat. */
export interface Beat {
  tick: number;
  seconds: number;
  measure: number;
  beat: number;
}

export class TempoMap {
  /** The ticks in a quarter note. */
  readonly ticksPerQuarter: number;
  /** The time signatures in tick order. The first starts at tick 0. */
  readonly signatures: readonly TimeSignature[];
  /** What the map was built from. A worker posts these, since a posted class instance loses its methods. */
  readonly inputs: TempoMapInputs;
  private readonly segments: TempoSegment[];

  /** The tempo map of `file`, from the tempo and time-signature events of all its tracks. */
  static fromMidi(file: MidiFile): TempoMap {
    const tempos: TempoChange[] = [];
    const signatures: SignatureChange[] = [];
    for (const track of file.tracks) {
      for (const event of track.events) {
        if (event.kind !== "meta") continue;
        if (event.meta === "tempo") {
          tempos.push({ tick: event.tick, microsecondsPerBeat: event.microsecondsPerBeat });
        } else if (event.meta === "timeSignature") {
          signatures.push({ tick: event.tick, numerator: event.numerator, denominator: event.denominator });
        }
      }
    }
    return new TempoMap(file.division, tempos, signatures);
  }

  /** The tempo map built from `inputs`, such as the `inputs` of a map a worker posted. */
  static fromInputs(inputs: TempoMapInputs): TempoMap {
    return new TempoMap(inputs.division, inputs.tempos, inputs.signatures);
  }

  constructor(division: TimeDivision, tempos: readonly TempoChange[], signatures: readonly SignatureChange[]) {
    this.inputs = { division, tempos, signatures };
    if (division.kind === "smpte") {
      const ticksPerSecond = division.framesPerSecond * division.ticksPerFrame;
      this.ticksPerQuarter = ticksPerSecond / 2;
      this.segments = [
        { tick: 0, seconds: 0, secondsPerTick: 1 / ticksPerSecond, microsecondsPerBeat: DEFAULT_MICROSECONDS_PER_BEAT },
      ];
    } else {
      this.ticksPerQuarter = division.ticksPerBeat;
      this.segments = buildSegments(division.ticksPerBeat, tempos);
    }
    this.signatures = buildSignatures(this.ticksPerQuarter, signatures);
  }

  /** The seconds from the song's start to `tick`. */
  ticksToSeconds(tick: number): number {
    const segment = this.segments[lastAtOrBefore(this.segments, (s) => s.tick, tick)]!;
    return segment.seconds + (tick - segment.tick) * segment.secondsPerTick;
  }

  /** The tick at `seconds` from the song's start. It has a fraction when `seconds` falls between ticks. */
  secondsToTicks(seconds: number): number {
    const segment = this.segments[lastAtOrBefore(this.segments, (s) => s.seconds, seconds)]!;
    return segment.tick + (seconds - segment.seconds) / segment.secondsPerTick;
  }

  /** The tempo in force at `tick`, in microseconds per quarter note. */
  microsecondsPerBeatAt(tick: number): number {
    return this.segments[lastAtOrBefore(this.segments, (s) => s.tick, tick)]!.microsecondsPerBeat;
  }

  /** The time signature in force at `tick`. */
  signatureAt(tick: number): TimeSignature {
    return this.signatures[lastAtOrBefore(this.signatures, (s) => s.tick, tick)]!;
  }

  /** The measure and beat of `tick`. */
  positionAtTick(tick: number): MusicalPosition {
    const signature = this.signatureAt(tick);
    const offset = tick - signature.tick;
    const measures = Math.floor(offset / signature.ticksPerMeasure);
    const beat = (offset - measures * signature.ticksPerMeasure) / signature.ticksPerBeat;
    return { measure: signature.measure + measures, beat };
  }

  /** The measure and beat at `seconds`. */
  positionAt(seconds: number): MusicalPosition {
    return this.positionAtTick(this.secondsToTicks(seconds));
  }

  /** The tick of beat `beat` of measure `measure`. A beat past its measure's end runs on into the next. */
  tickOfPosition(measure: number, beat: number): number {
    const signature = this.signatures[lastAtOrBefore(this.signatures, (s) => s.measure, measure)]!;
    return signature.tick + (measure - signature.measure) * signature.ticksPerMeasure + beat * signature.ticksPerBeat;
  }

  /** The seconds of beat `beat` of measure `measure`. */
  secondsOfPosition(measure: number, beat: number): number {
    return this.ticksToSeconds(this.tickOfPosition(measure, beat));
  }

  /** Every beat from tick 0 to `endTick`, both included, in order. */
  beatsUntil(endTick: number): Beat[] {
    const beats: Beat[] = [];
    for (let i = 0; i < this.signatures.length; i++) {
      const signature = this.signatures[i]!;
      const next = this.signatures[i + 1];
      for (let k = 0; ; k++) {
        const tick = signature.tick + k * signature.ticksPerBeat;
        if (tick > endTick || (next !== undefined && tick >= next.tick)) break;
        const measure = signature.measure + Math.floor(k / signature.numerator);
        beats.push({ tick, seconds: this.ticksToSeconds(tick), measure, beat: k % signature.numerator });
      }
      if (next === undefined || next.tick > endTick) break;
    }
    return beats;
  }
}

/** The tempo segments from `tempos`, starting at tick 0 with the default tempo unless one is there. */
function buildSegments(ticksPerQuarter: number, tempos: readonly TempoChange[]): TempoSegment[] {
  const sorted = sortedByTick(tempos.filter((t) => t.microsecondsPerBeat > 0));
  const segment = (tick: number, seconds: number, microsecondsPerBeat: number): TempoSegment => ({
    tick,
    seconds,
    secondsPerTick: microsecondsPerBeat / 1_000_000 / ticksPerQuarter,
    microsecondsPerBeat,
  });
  const segments = [segment(0, 0, DEFAULT_MICROSECONDS_PER_BEAT)];
  for (const tempo of sorted) {
    const last = segments[segments.length - 1]!;
    const tick = Math.max(0, tempo.tick);
    if (tick === last.tick) {
      segments[segments.length - 1] = segment(last.tick, last.seconds, tempo.microsecondsPerBeat);
    } else {
      segments.push(segment(tick, last.seconds + (tick - last.tick) * last.secondsPerTick, tempo.microsecondsPerBeat));
    }
  }
  return segments;
}

/** The time signatures from `changes`, starting at tick 0 with 4/4 unless one is there. */
function buildSignatures(ticksPerQuarter: number, changes: readonly SignatureChange[]): TimeSignature[] {
  const sorted = sortedByTick(changes.filter((c) => c.numerator > 0 && c.denominator > 0));
  const signature = (tick: number, numerator: number, denominator: number, measure: number): TimeSignature => {
    const ticksPerBeat = (ticksPerQuarter * 4) / denominator;
    return { tick, numerator, denominator, measure, ticksPerBeat, ticksPerMeasure: ticksPerBeat * numerator };
  };
  const signatures = [signature(0, 4, 4, 0)];
  for (const change of sorted) {
    const last = signatures[signatures.length - 1]!;
    const tick = Math.max(0, change.tick);
    if (tick === last.tick) {
      signatures[signatures.length - 1] = signature(last.tick, change.numerator, change.denominator, last.measure);
    } else {
      // A cut-short measure counts as a whole one. The tolerance absorbs rounding in fractional ticks.
      const measures = Math.ceil((tick - last.tick) / last.ticksPerMeasure - 1e-9);
      signatures.push(signature(tick, change.numerator, change.denominator, last.measure + measures));
    }
  }
  return signatures;
}

/** `items` in tick order. The sort is stable, so items at the same tick keep their order. */
function sortedByTick<T extends { tick: number }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => a.tick - b.tick);
}

/** The index of the last item whose key is at most `value`, or 0 when none is. `items` is sorted by key. */
function lastAtOrBefore<T>(items: readonly T[], key: (item: T) => number, value: number): number {
  let low = 0;
  let high = items.length - 1;
  while (low < high) {
    const mid = (low + high + 1) >> 1;
    if (key(items[mid]!) <= value) low = mid;
    else high = mid - 1;
  }
  return low;
}
