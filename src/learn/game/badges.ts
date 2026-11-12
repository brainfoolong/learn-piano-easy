/**
 * The badges: each one's condition over the progress log and the player's take history, and the moment
 * the learner earned it.
 *
 * There are seventeen fixed badges, and one more per world for beating its boss. Each badge is earned
 * once, at the first moment its condition holds, and is never taken back.
 *
 * - **Firsts:** `first-note`, the first step passed that asks for a played note. `first-lesson`, the
 *   first finished lesson. `first-three-stars`, the first lesson with three stars.
 * - **Stars:** `three-stars-ten`, ten lessons with three stars.
 * - **The daily goal:** `first-daily-goal`, the first day that met it. `streak-3`, `streak-7`,
 *   `streak-30` and `streak-100`, a streak of that many days, as `src/learn/game/streak.ts` counts it.
 * - **Worlds:** `world-<world>`, a finished run of that world's boss.
 * - **Notes:** `notes-1000` and `notes-10000`, the notes a passed step asked for, summed over the log.
 *   A `find-key` asks for one, a `play-notes` for its notes, a `read-note` answered by playing for its
 *   notes, and a `rhythm-tap` for its taps, or for its phrase's notes.
 * - **Skill:** `rhythm-ace`, a `rhythm-tap` passed in its first round. `sight-reader`, ten notes read
 *   in a row by `read-note` steps passed without a mistake. A mistake starts the count over.
 * - **Habits:** `early-bird`, a lesson finished before 8 in the morning, and `night-owl`, one finished
 *   at 10 at night or later, by the local clock. `comeback`, a lesson seven calendar days or more after
 *   the one before it.
 * - **Just Play Piano:** `legendary`, a finished take of the Hard version of one of our songs. The
 *   version's id is `legendary`, and the learner reads the badge as "Hard song".
 *
 * Decisions, and what each costs:
 * - **Every badge is computed on each read,** from the log and the takes, as the XP is. No badge is
 *   stored, so a fixed rule applies to past progress too. The cost is one pass over the log.
 * - **The log names a lesson and a step, never what the step asked.** The caller passes `StepFacts`,
 *   built by `stepFacts` from the course, and the bosses' keys. A course change is then read the same
 *   way for every past event.
 * - **`rhythm-ace` counts a step passed in its first round.** The log keeps a step's failed rounds,
 *   never its taps, so a step whose pass share is under 1 can earn it with a tap outside its window.
 * - **A step replaced by its `instead` steps is logged under its own id,** so its notes count as asked.
 *   Such steps check touch or the pedal, and they are rare.
 * - **A `song` step adds no notes,** since its song's notes are not in the course data.
 *
 * `readStanding` of `src/learn/game/standing.ts` is the caller. It passes the course, the daily goal
 * and the dates of the takes of Hard versions, which it reads from the take history.
 */
import { pitchesOf, type StepKind, type WorldLessons } from "../model";
import type { ProgressEvent } from "../progress/event";
import { addDays, dayOf } from "./streak";
import { tallyXp } from "./xp";

/** The art a badge shows, by its motif in `src/learn/game/badge-art.ts`. */
export type BadgeMotif =
  | "note"
  | "lesson"
  | "star"
  | "stars"
  | "goal"
  | "flame"
  | "world"
  | "notes"
  | "metronome"
  | "staff"
  | "sunrise"
  | "moon"
  | "comeback"
  | "crown";

/** The badges every course has, in the order the profile lists them. */
export const FIXED_BADGES = [
  "first-note",
  "first-lesson",
  "first-three-stars",
  "three-stars-ten",
  "first-daily-goal",
  "streak-3",
  "streak-7",
  "streak-30",
  "streak-100",
  "notes-1000",
  "notes-10000",
  "rhythm-ace",
  "sight-reader",
  "early-bird",
  "night-owl",
  "comeback",
  "legendary",
] as const;

/** A badge every course has. */
export type FixedBadgeId = (typeof FIXED_BADGES)[number];

/** One badge: its id, its motif, the short number its art shows, and its world for a world badge. */
export interface Badge {
  /** A fixed id, or `world-<world>`. */
  id: string;
  motif: BadgeMotif;
  /** A count the art shows on the motif, such as `7` for `streak-7`. */
  tier?: string;
  /** The world whose boss earns it. */
  world?: string;
}

/** The lessons with three stars that earn `three-stars-ten`. */
export const THREE_STAR_LESSONS = 10;
/** The streaks, in days, that earn a badge. */
export const STREAK_BADGES = [3, 7, 30, 100] as const;
/** The notes played that earn a badge. */
export const NOTE_BADGES = [1000, 10000] as const;
/** The notes read in a row without a mistake that earn `sight-reader`. */
export const SIGHT_READ_RUN = 10;
/** A lesson finished before this hour, by the local clock, earns `early-bird`. */
export const EARLY_BEFORE = 8;
/** A lesson finished at this hour or later, by the local clock, earns `night-owl`. */
export const NIGHT_FROM = 22;
/** The calendar days since the last lesson after which a lesson earns `comeback`. */
export const COMEBACK_DAYS = 7;

const FIXED_ART: Record<FixedBadgeId, Omit<Badge, "id">> = {
  "first-note": { motif: "note" },
  "first-lesson": { motif: "lesson" },
  "first-three-stars": { motif: "star" },
  "three-stars-ten": { motif: "stars", tier: String(THREE_STAR_LESSONS) },
  "first-daily-goal": { motif: "goal" },
  "streak-3": { motif: "flame", tier: "3" },
  "streak-7": { motif: "flame", tier: "7" },
  "streak-30": { motif: "flame", tier: "30" },
  "streak-100": { motif: "flame", tier: "100" },
  "notes-1000": { motif: "notes", tier: "1k" },
  "notes-10000": { motif: "notes", tier: "10k" },
  "rhythm-ace": { motif: "metronome" },
  "sight-reader": { motif: "staff" },
  "early-bird": { motif: "sunrise" },
  "night-owl": { motif: "moon" },
  comeback: { motif: "comeback" },
  legendary: { motif: "crown" },
};

/** The id of the badge for beating the boss of `world`. */
export function worldBadgeId(world: string): string {
  return `world-${world}`;
}

/** Every badge of a course with the worlds `worlds`, in order: the fixed ones, then one per world. */
export function badgesOf(worlds: readonly string[]): Badge[] {
  return [
    ...FIXED_BADGES.map((id) => ({ id, ...FIXED_ART[id] })),
    ...worlds.map((world) => ({ id: worldBadgeId(world), motif: "world" as const, world })),
  ];
}

/** What a step asked, as the badges read it. */
export interface StepFact {
  kind: StepKind;
  /** The notes the step asked the learner to play. */
  notes: number;
  /** The notes a `read-note` step asked the learner to read, and 0 for every other kind. */
  read: number;
}

/** What each step asked, by `<world>/<lesson>/<step>`. */
export type StepFacts = ReadonlyMap<string, StepFact>;

/** The facts of every step of `world`'s lessons, its boss and skip test included, by `<world>/<lesson>/<step>`. */
export function stepFacts(world: string, lessons: WorldLessons): Map<string, StepFact> {
  const facts = new Map<string, StepFact>();
  for (const lesson of [...lessons.lessons, lessons.boss, lessons.skipTest]) {
    if (lesson === undefined) continue;
    for (const step of lesson.steps) {
      const notes =
        step.kind === "find-key" ? 1
        : step.kind === "play-notes" ? step.notes.flatMap(pitchesOf).length
        : step.kind === "read-note" && step.answer === "play" ? step.notes.length
        : step.kind === "rhythm-tap" ? (step.notes?.length ?? step.taps)
        : 0;
      const read = step.kind === "read-note" ? step.notes.length : 0;
      facts.set(`${world}/${lesson.id}/${step.id}`, { kind: step.kind, notes, read });
    }
  }
  return facts;
}

/** Everything the badges read. */
export interface BadgeFacts {
  /** The progress log, oldest first. */
  events: readonly ProgressEvent[];
  /** What each step asked, from `stepFacts`. */
  steps: StepFacts;
  /** The world of each boss lesson, by its `<world>/<lesson>` key. */
  bosses: ReadonlyMap<string, string>;
  /** The daily goal in XP. */
  goal: number;
  /** When each finished take of a Hard version of our songs ended, in ms since the epoch. */
  legendaryTakes: readonly number[];
}

/** One badge earned, and when, in ms since the epoch. */
export interface EarnedBadge {
  id: string;
  at: number;
}

/** Every badge `facts` earned, each once at the first moment its condition held, oldest first. */
export function earnedBadges(facts: BadgeFacts): EarnedBadge[] {
  const earned = new Map<string, number>();
  const earn = (id: string, at: number) => {
    if (!earned.has(id)) earned.set(id, at);
  };
  const gains = tallyXp(facts.events, new Set(facts.bosses.keys())).gains;
  let gainIndex = 0;
  const bestStars = new Map<string, number>();
  let threeStarLessons = 0;
  const dayXp = new Map<string, number>();
  let lastMetDay: string | undefined;
  let streak = 0;
  let notes = 0;
  let readRun = 0;
  let lastLessonDay: string | undefined;

  for (const event of facts.events) {
    if (event.kind === "step") {
      const step = facts.steps.get(`${event.lesson}/${event.step}`);
      if (step === undefined) continue;
      if (step.notes > 0) earn("first-note", event.at);
      notes += step.notes;
      for (const count of NOTE_BADGES) if (notes >= count) earn(`notes-${count}`, event.at);
      if (step.kind === "rhythm-tap" && event.mistakes === 0) earn("rhythm-ace", event.at);
      if (step.kind === "read-note") {
        readRun = event.mistakes === 0 ? readRun + step.read : 0;
        if (readRun >= SIGHT_READ_RUN) earn("sight-reader", event.at);
      }
      continue;
    }

    earn("first-lesson", event.at);
    const world = facts.bosses.get(event.lesson);
    if (world !== undefined) earn(worldBadgeId(world), event.at);
    if (event.stars >= 3) {
      earn("first-three-stars", event.at);
      if ((bestStars.get(event.lesson) ?? 0) < 3) threeStarLessons += 1;
      if (threeStarLessons >= THREE_STAR_LESSONS) earn("three-stars-ten", event.at);
    }
    bestStars.set(event.lesson, Math.max(bestStars.get(event.lesson) ?? 0, event.stars));

    const day = dayOf(event.at);
    const hour = new Date(event.at).getHours();
    if (hour < EARLY_BEFORE) earn("early-bird", event.at);
    if (hour >= NIGHT_FROM) earn("night-owl", event.at);
    if (lastLessonDay !== undefined && addDays(lastLessonDay, COMEBACK_DAYS) <= day) earn("comeback", event.at);
    lastLessonDay = day;

    // A day meets the goal at the gain that first lifts its XP to it, as `streakOf` counts it.
    const gain = gains[gainIndex++]!;
    const before = dayXp.get(day) ?? 0;
    dayXp.set(day, before + gain.xp);
    if (before < facts.goal && before + gain.xp >= facts.goal) {
      streak = lastMetDay !== undefined && addDays(lastMetDay, 1) === day ? streak + 1 : 1;
      lastMetDay = day;
      earn("first-daily-goal", event.at);
      for (const days of STREAK_BADGES) if (streak >= days) earn(`streak-${days}`, event.at);
    }
  }

  const firstLegendary = facts.legendaryTakes.reduce((first, at) => Math.min(first, at), Number.POSITIVE_INFINITY);
  if (Number.isFinite(firstLegendary)) earn("legendary", firstLegendary);
  return [...earned].map(([id, at]) => ({ id, at })).sort((a, b) => a.at - b.at);
}
