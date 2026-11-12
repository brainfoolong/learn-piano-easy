/**
 * The referee: judges the learner's presses and releases against one take's notes, and keeps the score.
 *
 * It applies the rules of `src/game/rules.ts`. A press takes the unplayed note on its key nearest in
 * time, as the scored mode's judge does, so a late strike never steals the next note.
 *
 * Decisions, and what each costs:
 * - Every judgement is an event, handed back to the caller, so the screen can show each one where it
 *   happened. A frame's `tick` hands back the misses, the hold points and the holds that ran too long.
 * - A note held too long is judged the moment it passes its tolerance, not at the release, so the
 *   learner sees it while still holding.
 * - While wait mode holds the song at a note, the referee judges a press by the time the song would
 *   have reached. A press past the good window is late, and a late note earns no hold points.
 * - A release while the sustain pedal is down is clean, because the pedal holds the sound.
 * - The total never drops below zero, so a rough start does not leave a debt to climb out of.
 * - The referee is pure and takes every time as an argument, so its tests need no browser.
 *
 * Bounds: one entry per note of the take, and one hold per key.
 */
import type { Note } from "../midi/song";
import { keyOf, type LearnerPart } from "../input/wait-mode";
import { FINES, multiplierOf, POINTS, type Rules } from "./rules";

export type GameEventKind = "perfect" | "great" | "good" | "hold" | "release" | "wrong" | "miss" | "short" | "long" | "late";

/** One judgement: the key it is on, the points it moved the score by, and the combo after it. */
export interface GameEvent {
  readonly kind: GameEventKind;
  readonly key: number;
  readonly points: number;
  readonly combo: number;
  readonly multiplier: number;
}

/** A take's score so far. */
export interface GameScore {
  readonly points: number;
  readonly combo: number;
  readonly bestCombo: number;
  readonly perfect: number;
  readonly great: number;
  readonly good: number;
  readonly wrong: number;
  readonly miss: number;
  readonly short: number;
  readonly long: number;
  readonly late: number;
}

const EMPTY: GameScore = { points: 0, combo: 0, bestCombo: 0, perfect: 0, great: 0, good: 0, wrong: 0, miss: 0, short: 0, long: 0, late: 0 };

/** Song times closer than this are one time, in seconds. */
const EPSILON = 1e-6;

interface Target {
  readonly key: number;
  readonly start: number;
  readonly end: number;
  played: boolean;
}

/** A note being held: its target and the song time its hold points are counted to. */
interface Hold {
  readonly target: Target;
  counted: number;
}

export class Referee {
  #targets: Target[] = [];
  #first = 0;
  #holds = new Map<number, Hold>();
  #score: { -readonly [K in keyof GameScore]: GameScore[K] } = { ...EMPTY };
  #pedal = false;
  rules: Rules;

  constructor(rules: Rules) {
    this.rules = rules;
  }

  get score(): GameScore {
    return { ...this.#score };
  }

  /** Starts a take of `notes`, the learner's in start order, from song time `from`. Two notes on one key and tick are one. */
  start(notes: readonly Note[], part: LearnerPart, from: number): void {
    const seen = new Set<string>();
    this.#targets = [];
    for (const note of notes) {
      if (note.start < from - EPSILON) continue;
      const key = keyOf(note, part);
      if (key === undefined) continue;
      const id = `${key}:${note.startTick}`;
      if (seen.has(id)) continue;
      seen.add(id);
      this.#targets.push({ key, start: note.start, end: note.end, played: false });
    }
    this.#first = 0;
    this.#holds.clear();
    this.#score = { ...EMPTY };
  }

  /** Sets whether the sustain pedal is down. */
  pedal(down: boolean): void {
    this.#pedal = down;
  }

  /**
   * Judges a press of `key` at song time `time`, played at `speed` times the written tempo. `waited` is
   * how far song time would have run on while wait mode held it, in song seconds.
   */
  press(key: number, time: number, speed: number, waited = 0): GameEvent[] {
    const events = this.tick(time, speed);
    const reach = this.rules.good * speed + EPSILON;
    let best: Target | undefined;
    let gap = Infinity;
    for (let i = this.#first; i < this.#targets.length; i++) {
      const target = this.#targets[i]!;
      if (target.start > time + reach) break;
      if (target.played || target.key !== key) continue;
      const distance = Math.abs(target.start - time);
      if (distance <= reach && distance < gap) {
        best = target;
        gap = distance;
      }
    }
    if (best === undefined) {
      events.push(this.#fine("wrong", key, FINES.wrong, true));
      return events;
    }
    best.played = true;
    const real = Math.abs(best.start - (time + waited)) / speed;
    if (real > this.rules.good + EPSILON) {
      this.#score.late++;
      events.push(this.#fine("late", key, FINES.late, true));
      return events;
    }
    const kind = real <= this.rules.perfect + EPSILON ? "perfect" : real <= this.rules.great + EPSILON ? "great" : "good";
    this.#score[kind]++;
    this.#score.combo++;
    this.#score.bestCombo = Math.max(this.#score.bestCombo, this.#score.combo);
    events.push(this.#gain(kind, key, POINTS[kind]));
    if ((best.end - best.start) / speed >= this.rules.holdMin - EPSILON) {
      this.#holds.set(key, { target: best, counted: Math.max(time, best.start) });
    }
    return events;
  }

  /** Judges a release of `key` at song time `time`. */
  release(key: number, time: number, speed: number): GameEvent[] {
    const events = this.tick(time, speed);
    const hold = this.#holds.get(key);
    if (hold === undefined) return events;
    this.#holds.delete(key);
    const early = (hold.target.end - time) / speed;
    if (early > this.#tolerance(hold.target, speed) && !this.#pedal) {
      this.#score.short++;
      events.push(this.#fine("short", key, FINES.short, this.rules.holdBreaksCombo));
    } else events.push(this.#gain("release", key, POINTS.release));
    return events;
  }

  /** Counts the misses, the hold points and the holds that ran too long by song time `time`. */
  tick(time: number, speed: number): GameEvent[] {
    const events: GameEvent[] = [];
    const reach = this.rules.good * speed + EPSILON;
    while (this.#first < this.#targets.length) {
      const target = this.#targets[this.#first]!;
      if (!target.played) {
        if (time - target.start <= reach) break;
        target.played = true;
        this.#score.miss++;
        events.push(this.#fine("miss", target.key, FINES.miss, true));
      }
      this.#first++;
    }
    for (const [key, hold] of this.#holds) {
      const to = Math.min(time, hold.target.end);
      if (to > hold.counted) {
        events.push(this.#gain("hold", key, (POINTS.holdPerSecond * (to - hold.counted)) / speed));
        hold.counted = to;
      }
      if ((time - hold.target.end) / speed > this.#tolerance(hold.target, speed)) {
        this.#holds.delete(key);
        this.#score.long++;
        events.push(this.#fine("long", key, FINES.long, this.rules.holdBreaksCombo));
      }
    }
    return events;
  }

  /** Ends the take at song time `end`. Every unplayed note before it is a miss. */
  finish(end: number): GameEvent[] {
    const events: GameEvent[] = [];
    for (const target of this.#targets) {
      if (target.played || target.start >= end - EPSILON) continue;
      target.played = true;
      this.#score.miss++;
      events.push(this.#fine("miss", target.key, FINES.miss, true));
    }
    this.#first = this.#targets.length;
    this.#holds.clear();
    return events;
  }

  /** A clean release's tolerance for `target`, in real seconds. */
  #tolerance(target: Target, speed: number): number {
    return Math.max(this.rules.releaseTime, (this.rules.releaseShare * (target.end - target.start)) / speed);
  }

  #gain(kind: GameEventKind, key: number, base: number): GameEvent {
    const multiplier = multiplierOf(this.#score.combo);
    const points = base * this.rules.gain * multiplier;
    this.#score.points += points;
    return { kind, key, points, combo: this.#score.combo, multiplier };
  }

  #fine(kind: GameEventKind, key: number, base: number, breaks: boolean): GameEvent {
    if (kind === "wrong") this.#score.wrong++;
    if (breaks) this.#score.combo = 0;
    const points = -base * this.rules.fine;
    this.#score.points = Math.max(0, this.#score.points + points);
    return { kind, key, points, combo: this.#score.combo, multiplier: multiplierOf(this.#score.combo) };
  }
}
