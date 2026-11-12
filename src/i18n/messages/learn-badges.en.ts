/** The badges of *Learn Piano* in English: each one's name and what earns it. */
import type { FixedBadgeId } from "../../learn/game/badges";

/** A badge's texts: its name, and the sentence that says what earns it. */
export interface BadgeText {
  name: string;
  description: string;
}

export const learnBadges = {
  /** What the mascot's picture shows on the full-screen moment of a new badge or level. */
  cheer: "Your piano teacher cheers for you",
  /** The badges every course has, by id. */
  fixed: {
    "first-note": { name: "First note", description: "Play your first note in a lesson." },
    "first-lesson": { name: "First lesson", description: "Finish your first lesson." },
    "first-three-stars": { name: "Three stars", description: "Finish a lesson with three stars." },
    "three-stars-ten": { name: "Star collector", description: "Earn three stars in ten lessons." },
    "first-daily-goal": { name: "Goal reached", description: "Reach your daily goal for the first time." },
    "streak-3": { name: "Three days in a row", description: "Reach your daily goal three days in a row." },
    "streak-7": { name: "A week in a row", description: "Reach your daily goal seven days in a row." },
    "streak-30": { name: "A month in a row", description: "Reach your daily goal thirty days in a row." },
    "streak-100": { name: "A hundred days", description: "Reach your daily goal a hundred days in a row." },
    "notes-1000": { name: "A thousand notes", description: "Play a thousand notes in lessons." },
    "notes-10000": { name: "Ten thousand notes", description: "Play ten thousand notes in lessons." },
    "rhythm-ace": { name: "Rhythm ace", description: "Pass a rhythm step on your first try." },
    "sight-reader": { name: "Sight reader", description: "Read ten notes in a row without a mistake." },
    "early-bird": { name: "Early bird", description: "Finish a lesson before 8 in the morning." },
    "night-owl": { name: "Night owl", description: "Finish a lesson after 10 at night." },
    comeback: { name: "Welcome back", description: "Come back for a lesson after a week away." },
    legendary: { name: "Hard song", description: "Play the Hard version of one of our songs to its end in Just Play Piano." },
  } satisfies Record<FixedBadgeId, BadgeText>,
  /** The badge of the world titled `world`: its name and its description, each a message of its own. */
  world: {
    name: (world: string) => `${world} mastered`,
    description: (world: string) => `Beat the boss of ${world}.`,
  },
};

/** The texts of the badge of the world titled `world`, from the badges' section `texts` of any locale. */
export function worldBadgeText(texts: typeof learnBadges, world: string): BadgeText {
  return { name: texts.world.name(world), description: texts.world.description(world) };
}
