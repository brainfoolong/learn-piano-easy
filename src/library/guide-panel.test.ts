import { beats, type Take } from "../input/history";
import { expect, test } from "../testing";
import type { Rarity } from "./guide";
import { levelUpOf } from "./guide-panel";
import type { CatalogSong } from "./search";

/** A catalog row at `file`, a version of `song` at `rarity` when both are given. */
function row(file: string, song?: string, rarity?: Rarity, mythic?: string): CatalogSong {
  return {
    composer: "c",
    piece: null,
    title: file,
    file,
    difficulty: 1,
    license: "MIT",
    credit: "c",
    ...(song === undefined ? {} : { song }),
    ...(rarity === undefined ? {} : { rarity }),
    ...(mythic === undefined ? {} : { mythic }),
  };
}

test("the_step_after_a_version_is_the_next_version_then_the_original", () => {
  const original = row("originals/elise.mid");
  const versions = (["common", "rare", "epic", "legendary"] as const).map((rarity) => row(`ours/elise/${rarity}.mid`, "elise", rarity, original.file));
  const plain = row("ours/joy/legendary.mid", "joy", "legendary");
  const catalog = [...versions, original, plain];

  expect(levelUpOf(catalog, versions[0]!)).toEqual({ row: versions[1]!, name: "Easy" });
  expect(levelUpOf(catalog, versions[3]!)).toEqual({ row: original, name: "Original" });
  expect(levelUpOf(catalog, plain)).toBeUndefined();
  expect(levelUpOf(catalog, original)).toBeUndefined();
});

test("a_take_beats_its_song_with_both_hands_at_full_speed_and_ninety_percent", () => {
  const take: Take = { song: "s", date: 0, speed: 1, hands: "both", hits: 9, perfect: 0, misses: 1, mistakes: 0 };
  expect(beats(take)).toBe(true);
  expect(beats({ ...take, hands: "right" })).toBe(false);
  expect(beats({ ...take, speed: 0.95 })).toBe(false);
  expect(beats({ ...take, hits: 8, misses: 2 })).toBe(false);
});
