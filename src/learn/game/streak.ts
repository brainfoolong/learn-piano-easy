/**
 * The daily goal and the streak: the days whose XP met the goal, counted by the device's local calendar.
 *
 * - **The daily goal** is 10, 20, 30 or 50 XP, chosen at the first visit, and 20 until then.
 * - **The streak** is the run of days in a row that met the goal, ending today or yesterday. Today
 *   keeps yesterday's streak alive until it ends, so a learner who has not played yet today loses
 *   nothing. A day missed ends it, and the best streak is kept. No streak can be bought or frozen.
 *
 * Decisions, and what each costs:
 * - **Everything is computed from the XP gains of `tallyXp`** in `src/learn/game/xp.ts`. No count is
 *   stored, so the streak can never drift from the log.
 * - **A day is a date of the local calendar,** read at the time each lesson finished. A trip across
 *   time zones can then join or split two days, which is what the learner's own clock shows.
 * - **The goal set now is applied to every past day.** The log keeps no record of the goal, so a raised
 *   goal can shorten a past streak. The cost buys a log that holds only lessons and steps.
 */
import type { XpGain } from "./xp";

/** The daily goals a learner can choose, in XP. */
export const DAILY_GOALS = [10, 20, 30, 50] as const;
/** A daily goal a learner can choose. */
export type DailyGoal = (typeof DAILY_GOALS)[number];
/** The daily goal until the learner chooses one. */
export const DEFAULT_DAILY_GOAL: DailyGoal = 20;

/** The local calendar date of `at`, in ms since the epoch, as `YYYY-MM-DD`. */
export function dayOf(at: number): string {
  const date = new Date(at);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/** The local calendar date `offset` days from the day `day`, as `YYYY-MM-DD`. */
export function addDays(day: string, offset: number): string {
  const [year, month, date] = day.split("-").map(Number) as [number, number, number];
  // Noon keeps a day that a clock change shortens or lengthens on its own date.
  return dayOf(new Date(year, month - 1, date + offset, 12).getTime());
}

/** The XP of each local day, by `YYYY-MM-DD`. */
export function xpByDay(gains: readonly XpGain[]): Map<string, number> {
  const days = new Map<string, number>();
  for (const gain of gains) days.set(dayOf(gain.at), (days.get(dayOf(gain.at)) ?? 0) + gain.xp);
  return days;
}

/** The learner's streak, as of one moment. */
export interface Streak {
  /** The days in a row that met the goal, ending today or yesterday. */
  current: number;
  /** The longest such run the log holds. */
  best: number;
  /** Whether today met the goal. */
  today: boolean;
  /** The XP earned today. */
  todayXp: number;
  /** Every day that met the goal, oldest first. */
  metDays: readonly string[];
}

/** The streak of `gains` against the daily goal `goal`, as of `now` in ms since the epoch. */
export function streakOf(gains: readonly XpGain[], goal: number, now: number): Streak {
  const days = xpByDay(gains);
  const metDays = [...days].filter(([, xp]) => xp >= goal).map(([day]) => day).sort();
  const met = new Set(metDays);
  let best = 0;
  let run = 0;
  let previous: string | undefined;
  for (const day of metDays) {
    run = previous !== undefined && addDays(previous, 1) === day ? run + 1 : 1;
    best = Math.max(best, run);
    previous = day;
  }
  const today = dayOf(now);
  let current = 0;
  for (let day = met.has(today) ? today : addDays(today, -1); met.has(day); day = addDays(day, -1)) current += 1;
  return { current, best, today: met.has(today), todayXp: days.get(today) ?? 0, metDays };
}
