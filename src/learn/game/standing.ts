/**
 * The learner's standing, read once for a view: the course with its lessons, the map, the XP, the level,
 * the streak and the badges, all computed from the progress log.
 *
 * The map of `src/learn/map-view.ts` and the top bar's slot of `src/learn/game/bar-slot.ts` both read
 * it on each show. Each read opens the store again, since a lesson writes through a store of its own,
 * and a held one would miss its events. The lesson's end passes its own store instead, and reads the
 * standing before and after its save, so a browser without IndexedDB still sees the run it just saved.
 *
 * The caller passes the daily goal, which `dailyGoalOf` reads from the setting `learnDailyGoal`. The
 * first visit and the profile set it.
 *
 * The `legendary` badge, which the learner reads as "Hard song", is for the Hard version of our songs.
 * It reads the take history of `src/input/history.ts`, through the keys of `legendary-keys.ts`. The
 * player saves a take only at the end of a song or of its loop, so every take there was played to an
 * end. The history keeps no record of a loop, so a looped section of a Hard version earns the badge
 * too.
 */
import { type HistoryStore, openHistory } from "../../input/history";
import type { SettingsStore } from "../../settings/store";
import { bossesOf, loadCourse, type LoadedWorld } from "../course";
import type { ProgressEvent } from "../progress/event";
import { openProgress, type ProgressStore } from "../progress/store";
import { type EarnedBadge, earnedBadges, type StepFact, stepFacts } from "./badges";
import { LEGENDARY_KEYS } from "./legendary-keys";
import { DAILY_GOALS, DEFAULT_DAILY_GOAL, type Streak, streakOf } from "./streak";
import { courseMap, type CourseMap } from "./unlock";
import { type LevelProgress, levelOf, tallyXp, type XpTally } from "./xp";

/** Everything a view of *Learn Piano* shows of the learner's progress. */
export interface Standing {
  course: LoadedWorld[];
  /** The progress log, oldest first. */
  events: readonly ProgressEvent[];
  map: CourseMap;
  tally: XpTally;
  level: LevelProgress;
  streak: Streak;
  /** The daily goal in XP. */
  goal: number;
  /** Every badge earned, oldest first. */
  badges: EarnedBadge[];
}

/** The daily goal in XP that `settings` holds, or `DEFAULT_DAILY_GOAL` for a value no goal has. */
export function dailyGoalOf(settings: SettingsStore): number {
  const goal = Number(settings.get("learnDailyGoal"));
  return (DAILY_GOALS as readonly number[]).includes(goal) ? goal : DEFAULT_DAILY_GOAL;
}

/** When each take of a Hard version of our songs in `history` ended, in ms since the epoch. */
async function legendaryTakes(history: HistoryStore): Promise<number[]> {
  const lists = await Promise.all([...LEGENDARY_KEYS.values()].map((key) => history.list(key).catch(() => [])));
  return lists.flat().map((take) => take.date);
}

/**
 * The learner's standing against the daily goal `goal`, as the log of `store`, or of the browser's own
 * store, holds it now. The `legendary` badge reads the takes of `history`, or of the browser's own.
 */
export async function readStanding(goal: number, now = Date.now(), store?: ProgressStore, history?: HistoryStore): Promise<Standing> {
  const [course, opened, legendary] = await Promise.all([
    loadCourse(),
    store ?? openProgress(),
    legendaryTakes(history ?? openHistory()),
  ]);
  // A copy, since the store's own list grows with each record, and a standing holds one moment.
  const events = [...opened.events()];
  const bosses = bossesOf(course);
  const tally = tallyXp(events, new Set(bosses.keys()));
  const steps = new Map<string, StepFact>(course.flatMap(({ world, lessons }) => [...stepFacts(world.id, lessons)]));
  return {
    course,
    events,
    map: courseMap(course, events),
    tally,
    level: levelOf(tally.total),
    streak: streakOf(tally.gains, goal, now),
    goal,
    badges: earnedBadges({ events, steps, bosses, goal, legendaryTakes: legendary }),
  };
}
