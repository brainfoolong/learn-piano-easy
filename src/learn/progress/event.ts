/**
 * One event of the learner's progress log: a finished step or a finished lesson, and the check that
 * reads one back.
 *
 * Decisions, and what each costs:
 * - An event is a fact that never changes. XP, stars and streaks are computed from the log, so a bug in
 *   a total is fixed by a new build, and no stored record is ever rewritten to fix it.
 * - An event carries `v`, the format version it was written in, so `src/learn/progress/migrate.ts`
 *   knows which migrations it still needs.
 * - An id is 128 random bits from `crypto.getRandomValues`, in hex. `crypto.randomUUID` exists only in a
 *   secure context, and the site also runs from plain `http:` and `file:`.
 * - A lesson is named `<world>/<lesson>`, by the ids of `src/learn/model.ts`, so an event stays true
 *   when a world's lessons are reordered.
 */

/** A finished step. */
export interface StepEvent {
  v: number;
  id: string;
  /** When it finished, in ms since the epoch. */
  at: number;
  kind: "step";
  /** `<world>/<lesson>`. */
  lesson: string;
  /** The step's id in its lesson. */
  step: string;
  mistakes: number;
  /** How well it went, from 0 to 1. */
  score: number;
}

/** A finished lesson. */
export interface LessonEvent {
  v: number;
  id: string;
  /** When it finished, in ms since the epoch. */
  at: number;
  kind: "lesson";
  /** `<world>/<lesson>`. */
  lesson: string;
  /** From 0 to 3. */
  stars: number;
}

/** One event of the log. */
export type ProgressEvent = StepEvent | LessonEvent;

/** An event before the store gives it its version, id and time. */
export type NewEvent = Omit<StepEvent, "v" | "id" | "at"> | Omit<LessonEvent, "v" | "id" | "at">;

/** A fresh event id: 32 hex digits. */
export function newEventId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** Whether `value` is a plain object. */
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Whether `value` is a string with text in it. */
function isText(value: unknown): value is string {
  return typeof value === "string" && value !== "";
}

/** Whether `value` is a number from `low` to `high`. */
function isBetween(value: unknown, low: number, high: number): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= low && value <= high;
}

/** `raw` as an event of format `version`, or undefined when any field is missing or wrong. */
export function readEvent(raw: unknown, version: number): ProgressEvent | undefined {
  if (!isRecord(raw) || raw.v !== version || !isText(raw.id) || !isBetween(raw.at, 0, Number.MAX_SAFE_INTEGER) || !isText(raw.lesson)) return undefined;
  const base = { v: version, id: raw.id, at: raw.at, lesson: raw.lesson };
  if (raw.kind === "step") {
    if (!isText(raw.step) || !Number.isInteger(raw.mistakes) || !isBetween(raw.mistakes, 0, Number.MAX_SAFE_INTEGER) || !isBetween(raw.score, 0, 1)) return undefined;
    return { ...base, kind: "step", step: raw.step, mistakes: raw.mistakes, score: raw.score };
  }
  if (raw.kind === "lesson") {
    if (!Number.isInteger(raw.stars) || !isBetween(raw.stars, 0, 3)) return undefined;
    return { ...base, kind: "lesson", stars: raw.stars };
  }
  return undefined;
}
