/**
 * The songs the landing page plays, by their paths relative to the site's root.
 *
 * The hero loops the Beginner version of *Twinkle, Twinkle, Little Star*. The versions band, which
 * `src/landing/rarities.ts` builds, switches between the four versions of *Ode to Joy*. A version's id
 * names its file, and the learner reads its name: Beginner, Easy, Medium or Hard.
 *
 * The service worker precaches each song with the shell, as `src/pwa/cache-groups.ts` reads this list.
 * So the landing page plays offline from its first visit on.
 */
import type { KeyRange } from "../render/key-layout";

/** The hero's song: the Beginner version of *Twinkle, Twinkle, Little Star*, whose id is `common`. */
export const HERO_SONG = "songs/ours/twinkle-twinkle-little-star/common.mid";

/**
 * The hero's keys, from F2 to C5. It holds every note of the hero's song, and it is fixed so the hero
 * keeps its size while the song loads.
 */
export const HERO_RANGE: KeyRange = { first: 41, last: 72 };

/** The ids of the versions the versions band switches between, in the order its control lists them. */
export const SHOWCASE_RARITIES = ["common", "rare", "epic", "legendary"] as const;

/** The id of one of the versions the versions band shows. */
export type ShowcaseRarity = (typeof SHOWCASE_RARITIES)[number];

/** The versions band's songs: the four versions of *Ode to Joy*, by the version's id. */
export const SHOWCASE_SONGS: Readonly<Record<ShowcaseRarity, string>> = {
  common: "songs/ours/ode-to-joy/common.mid",
  rare: "songs/ours/ode-to-joy/rare.mid",
  epic: "songs/ours/ode-to-joy/epic.mid",
  legendary: "songs/ours/ode-to-joy/legendary.mid",
};

/**
 * The versions band's keys, from A1 to A5. It holds every note of the four versions, so the keyboard
 * keeps its size when the version changes.
 */
export const SHOWCASE_RANGE: KeyRange = { first: 33, last: 81 };

/** Every song file the landing page reads. */
export const LANDING_SONGS: readonly string[] = [HERO_SONG, ...Object.values(SHOWCASE_SONGS)];
