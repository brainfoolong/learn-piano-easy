import { join, resolve } from "node:path";

import { expect, test } from "../testing";
import { beginnerPath } from "./beginner-path";
import { songTitle, type CatalogSong } from "./search";

const catalogFile = join(resolve(import.meta.dir, "..", ".."), "public", "songs", "catalog.json");

test("the_beginner_path_climbs_from_our_songs_to_clementi_and_burgmuller", async () => {
  const catalog = (await Bun.file(catalogFile).json()) as CatalogSong[];
  const path = beginnerPath(catalog);
  const composers = new Set(path.map((song) => song.composer));
  expect(composers).toContain("Friedrich Burgmüller");
  expect(composers).toContain("Muzio Clementi");
  expect(composers).toContain("learn-piano-easy");
  // Every version of every song of ours is a step.
  const ours = catalog.filter((song) => song.song !== undefined);
  expect(ours.length).toBeGreaterThan(0);
  expect(ours.every((song) => path.includes(song))).toBe(true);
  expect(songTitle(path[0]!)).toBe("Canon in D, Beginner");
  expect(path.every((song, i) => i === 0 || path[i - 1]!.difficulty <= song.difficulty)).toBe(true);
  // A sonatina's movements keep their order on the path.
  const clementi = path.filter((song) => song.composer === "Muzio Clementi").map((song) => song.title);
  expect(clementi).toEqual(["1. Allegro", "2. Andante", "3. Vivace"]);
});
