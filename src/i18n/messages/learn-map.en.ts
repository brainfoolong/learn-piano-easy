/** The map of *Learn Piano* at `learn/`, and the top bar's slot on its pages, in English. */
import { formatNumber, plural } from "../format";

export const learnMap = {
  lead: "Walk the path one lesson at a time. Each world ends with a boss.",
  loading: "Loading the course…",
  /** The *Continue* button, and the line above the title of the lesson it opens. */
  continue: "Continue",
  nextUp: "Next up",
  /** A world's band: its number, and how many of its lessons are done, its boss included. */
  world: (n: number) => `World ${formatNumber("en", n)}`,
  progress: (done: number, all: number) => `${formatNumber("en", done)} of ${formatNumber("en", all)} ${plural("en", all, { one: "lesson", other: "lessons" })}`,
  locked: "Beat the boss of the world before to open this one.",
  beaten: "Beaten",
  /** A node's accessible name and its caption. */
  node: {
    locked: (name: string) => `${name}, locked`,
    open: (name: string) => `${name}, open`,
    done: (name: string, stars: number) => `${name}, ${formatNumber("en", stars)} of 3 stars`,
  },
  /** The world's medal beside its title. */
  medal: (world: string, earned: boolean) => `${world} badge, ${earned ? "earned" : "not earned yet"}`,
  skipTest: {
    title: (world: string) => `Skip test: ${world}`,
    text: "Know this already? Pass the skip test to open every lesson here.",
    action: "Take the skip test",
  },
  /** The top bar's slot on the pages of *Learn Piano*. */
  bar: {
    label: "Your progress",
    streak: (days: number) => `${formatNumber("en", days)}-day streak`,
    level: (level: number) => `Level ${formatNumber("en", level)}`,
    today: "Today",
    todayGoal: (xp: number, goal: number) => `Today: ${formatNumber("en", xp)} of ${formatNumber("en", goal)} XP`,
    days: (days: number) => `${formatNumber("en", days)} ${plural("en", days, { one: "day", other: "days" })}`,
  },
};
