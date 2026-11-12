/**
 * The beginner path: the order in which the library leads a beginner from our first songs to Clementi
 * and Burgmüller.
 *
 * The path holds every version of every song of ours, and every song of the pieces `PATH_PIECES`
 * names, sorted by difficulty. Songs of the same difficulty keep the catalog's order, so a sonatina's
 * movements stay in order. The library panel shows the path as its first group, numbered step by step.
 *
 * Decisions, and what each costs:
 * - The path names pieces, not files. A song added to one of them joins the path at its difficulty,
 *   with no list to keep. A new work joins only once its piece is named here.
 * - Each version of a song of ours is a step of its own, so one tune returns along the path at each
 *   difficulty. The path grows by four steps per song, and the panel counts its songs, not its steps.
 * - The order is the difficulty alone. Our ratings rise in half steps, so the path climbs gently, but
 *   it never weighs which skill a piece teaches.
 * - The path is pure, so the panel only draws what it returns.
 */
import type { CatalogSong } from "./search";

/** The pieces of the path besides our songs: our modern pieces, then Clementi and Burgmüller. */
export const PATH_PIECES: readonly string[] = [
  "Modern pieces",
  "Sonatina in C major, Opus 36 No. 1",
  "25 Easy Studies, Opus 100",
];

/** The songs of `songs` on the beginner path, from the first step to the last. */
export function beginnerPath(songs: readonly CatalogSong[]): CatalogSong[] {
  const pieces = new Set(PATH_PIECES);
  // Array.prototype.sort is stable, so songs of one difficulty keep the catalog's order.
  const onPath = (song: CatalogSong) => song.song !== undefined || (song.piece !== null && pieces.has(song.piece));
  return songs.filter(onPath).sort((a, b) => a.difficulty - b.difficulty);
}
