/** The profile of *Learn Piano* at `learn/profile/`, in English. */
import { formatNumber, plural } from "../format";

const n = (value: number) => formatNumber("en", value);
const days = (value: number) => `${n(value)} ${plural("en", value, { one: "day", other: "days" })}`;

export const learnProfile = {
  loading: "Loading your progress…",
  /** The level card. */
  level: {
    heading: "Level",
    name: (level: number) => `Level ${n(level)}`,
    total: (xp: number) => `${n(xp)} XP in all`,
    toNext: (level: number) => `To level ${n(level)}`,
  },
  /** The streak card. */
  streak: {
    heading: "Streak",
    current: (count: number) => days(count),
    currentLabel: "in a row now",
    best: (count: number) => `Best: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `Today: ${n(xp)} XP, and the goal of ${n(goal)} is met` : `Today: ${n(xp)} of ${n(goal)} XP`,
  },
  /** The calendar of the last weeks. */
  calendar: {
    heading: "The last eight weeks",
    label: (met: number, played: number) => `In the last eight weeks, ${days(met)} reached the goal and ${days(played)} had a lesson.`,
    met: "Goal reached",
    played: "Played",
    none: "No lesson",
  },
  /** The stats. */
  stats: {
    heading: "Stats",
    lessons: "Lessons finished",
    threeStars: "Lessons with three stars",
    days: "Days played",
    badges: "Badges earned",
  },
  /** The badges. */
  badges: {
    heading: "Badges",
    lead: (earned: number, all: number) => `${n(earned)} of ${n(all)} earned`,
    earned: (name: string) => `${name}, earned`,
    locked: (name: string) => `${name}, not earned yet`,
  },
  /** The learner's own choices. */
  choices: {
    heading: "Your settings",
    goal: "Daily goal",
    goalHelp: "The XP a day needs to keep your streak going.",
    sounds: "Reward sounds",
    soundsHelp: "Chimes for a passed step, a star, a new level and a badge. The piano always sounds.",
  },
  /** The link to the Data page, and the reset. */
  data: {
    heading: "Your data",
    lead: "Your progress stays in this browser. The Data page saves it with everything else to one file, and restores it.",
    open: "Back up or restore",
    reset: "Reset all progress",
    failed: "Your browser refused to save. Nothing changed.",
    resetDone: "Your progress is reset. The backup file holds everything it had.",
    close: "Close",
    cancel: "Keep my progress",
    ask: {
      title: "Reset all progress?",
      text: "This removes every lesson, star, XP point and badge from this browser. Your settings stay.",
      next: "Continue",
    },
    askAgain: {
      title: "Are you sure?",
      text: "A backup file is saved first, so you can restore everything later. Then your progress starts over.",
      confirm: "Reset my progress",
    },
  },
};
