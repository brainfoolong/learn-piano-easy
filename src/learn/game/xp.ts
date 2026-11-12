/**
 * The game's numbers: a lesson's stars, the XP the log earns, and the level that XP reaches.
 *
 * - **Stars:** three at 95% accuracy or more, two at 80%, and one for any pass. Accuracy is the mean
 *   score of a run's checking steps, as `starsOf` in `src/learn/lesson-run.ts` computes it.
 * - **XP:** 10 for each star a lesson earns the first time, doubled for a boss. A replay that adds no
 *   star earns 2, so practice always counts.
 * - **Levels:** level *n* needs 50 × *n* × (*n* + 1) / 2 XP in total, so each level needs 50 XP more
 *   than the last. A learner with no XP is at level 0.
 *
 * Decisions, and what each costs:
 * - **The XP is computed from the event log on each read,** and no total is stored. A change to a rule
 *   here applies to past progress too, and nothing can drift. The cost is one pass over the log.
 * - **A lesson event's stars are the run's facts,** written by the run when it ends. A change to the
 *   star thresholds applies to new runs only, since the log keeps no run's accuracy apart from its steps.
 * - **The log names a lesson, never whether it is a boss.** The caller passes the boss lessons' keys,
 *   so a course change that makes a boss is read the same way for every past event.
 */
import type { ProgressEvent } from "../progress/event";

/** The accuracy, from 0 to 1, that earns three stars. */
export const THREE_STARS_AT = 0.95;
/** The accuracy, from 0 to 1, that earns two stars. */
export const TWO_STARS_AT = 0.8;
/** The XP of each star a lesson earns the first time. */
export const XP_PER_STAR = 10;
/** How many times a boss's star is worth a lesson's. */
export const BOSS_FACTOR = 2;
/** The XP of a replay that adds no star. */
export const PRACTICE_XP = 2;
/** The XP the first level needs, and how much more each next level needs. */
export const LEVEL_STEP = 50;

/** The stars a passed run earns at `accuracy`, from 0 to 1. */
export function starsFor(accuracy: number): 1 | 2 | 3 {
  // A small tolerance keeps a mean such as 19/20 from falling under its threshold by rounding.
  if (accuracy >= THREE_STARS_AT - 1e-9) return 3;
  return accuracy >= TWO_STARS_AT - 1e-9 ? 2 : 1;
}

/** The XP one finished lesson earned. */
export interface XpGain {
  /** When the lesson finished, in ms since the epoch. */
  at: number;
  /** `<world>/<lesson>`. */
  lesson: string;
  xp: number;
  /** The lesson's best stars after this run. */
  stars: number;
  /** How many stars this run added to the lesson's best. */
  newStars: number;
}

/** Everything the log earned: each lesson's best stars, each gain in order, and the total XP. */
export interface XpTally {
  /** The best stars of each finished lesson, by `<world>/<lesson>`. */
  stars: ReadonlyMap<string, number>;
  /** One gain per finished lesson, oldest first. */
  gains: readonly XpGain[];
  total: number;
}

/** The stars and XP that `events`, oldest first, earned. `bosses` holds the keys of the boss lessons. */
export function tallyXp(events: readonly ProgressEvent[], bosses: ReadonlySet<string> = new Set()): XpTally {
  const stars = new Map<string, number>();
  const gains: XpGain[] = [];
  let total = 0;
  for (const event of events) {
    if (event.kind !== "lesson") continue;
    const before = stars.get(event.lesson) ?? 0;
    const added = Math.max(0, event.stars - before);
    const xp = added > 0 ? added * XP_PER_STAR * (bosses.has(event.lesson) ? BOSS_FACTOR : 1) : PRACTICE_XP;
    const best = before + added;
    stars.set(event.lesson, best);
    gains.push({ at: event.at, lesson: event.lesson, xp, stars: best, newStars: added });
    total += xp;
  }
  return { stars, gains, total };
}

/** The total XP that reaching level `level` needs. */
export function xpForLevel(level: number): number {
  return (LEVEL_STEP * level * (level + 1)) / 2;
}

/** Where `xp` stands: its level, the XP past that level, and the XP the next level needs from it. */
export interface LevelProgress {
  level: number;
  /** The XP earned past the start of `level`. */
  into: number;
  /** The XP from the start of `level` to the start of the next. */
  span: number;
}

/** The level that `xp` in total reaches, and how far it is into it. */
export function levelOf(xp: number): LevelProgress {
  let level = 0;
  while (xpForLevel(level + 1) <= xp) level += 1;
  const start = xpForLevel(level);
  return { level, into: xp - start, span: xpForLevel(level + 1) - start };
}
