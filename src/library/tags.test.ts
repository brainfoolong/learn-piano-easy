import { expect, test } from "../testing";
import type { CatalogSong } from "./search";
import { RARITIES, RARITY_LEVELS } from "./guide";
import { composerOf, levelOf, matchesTags, songTags, styleOf, type TagContext, type TagKey, tagName } from "./tags";

const CONTEXT: TagContext = {
  path: new Set(["ours/silent-night/rare.mid"]),
  skills: (file) => (file === "ours/silent-night/rare.mid" ? ["waltz-bass", "pedal"] : undefined),
};

function song(composer: string, file: string, difficulty: number, more: Partial<CatalogSong> = {}): CatalogSong {
  return { composer, piece: null, title: file, file, difficulty, license: "MIT", credit: "Us", ...more };
}

test("a_level_is_a_band_of_the_difficulty", () => {
  expect([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6.5, 7, 10].map(levelOf)).toEqual([
    "beginner",
    "beginner",
    "easy",
    "easy",
    "medium",
    "medium",
    "hard",
    "hard",
    "advanced",
    "advanced",
    "expert",
    "expert",
  ]);
});

test("a_version_is_named_by_the_level_its_difficulty_lies_in", () => {
  // The catalog difficulty the meter gives each version starts at these, as docs/our-songs.md lists them.
  const starts = { common: 1, rare: 2, epic: 3, legendary: 4 };
  for (const rarity of RARITIES) {
    expect(levelOf(starts[rarity])).toBe(RARITY_LEVELS[rarity]);
    expect(levelOf(starts[rarity] + 0.5)).toBe(RARITY_LEVELS[rarity]);
  }
});

test("two_spellings_of_a_composer_are_one_tag_with_one_style", () => {
  expect(composerOf("Ludwig v. Beethoven")).toBe("Ludwig van Beethoven");
  expect(styleOf("Ludwig v. Beethoven")).toBe("classical");
  expect(styleOf("Ludwig van Beethoven")).toBe("classical");
  expect(styleOf("A composer nobody listed")).toBeUndefined();
});

test("a_song_carries_the_tags_its_row_and_its_guide_give", () => {
  const carol = song("Franz Xaver Gruber", "ours/silent-night/rare.mid", 2.5, { song: "silent-night", rarity: "rare", collection: "christmas" });
  expect(songTags(carol, CONTEXT)).toEqual([
    "level:easy",
    "collection:christmas",
    "collection:path",
    "collection:ours",
    "skill:waltz-bass",
    "skill:pedal",
    "composer:Franz Xaver Gruber",
  ]);
  const original = song("Ludwig v. Beethoven", "piano-midi/elise.mid", 5);
  expect(songTags(original, CONTEXT)).toEqual(["level:advanced", "style:classical", "composer:Ludwig van Beethoven"]);
});

test("a_tag_reads_by_its_name", () => {
  const names = (["level:advanced", "level:easy", "yours:favourite", "collection:christmas", "collection:path", "style:ragtime", "skill:waltz-bass", "composer:Erik Satie"] as TagKey[]).map(tagName);
  expect(names).toEqual(["Advanced", "Easy", "Favourites", "Christmas", "Beginner path", "Ragtime", "Waltz bass", "Erik Satie"]);
});

test("tags_of_one_kind_widen_and_kinds_narrow", () => {
  const carried = new Set<TagKey>(["level:easy", "collection:christmas"]);
  const has = (key: TagKey) => carried.has(key);
  expect(matchesTags(has, [])).toBe(true);
  expect(matchesTags(has, ["level:easy", "level:medium"])).toBe(true);
  expect(matchesTags(has, ["level:easy", "collection:christmas"])).toBe(true);
  expect(matchesTags(has, ["level:medium", "collection:christmas"])).toBe(false);
  expect(matchesTags(has, ["style:baroque"])).toBe(false);
});
