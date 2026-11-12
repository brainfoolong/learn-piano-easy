import { expect, test } from "../testing";
import { type CatalogSong, filterSongs, groupSongs, highlightRanges, NO_FILTER, queryWords, songEntries, songTitle, sortSongs } from "./search";

function song(composer: string, title: string, difficulty: number, low = 48, high = 72, piece: string | null = null): CatalogSong {
  return { composer, piece, title, file: `${title}.mid`, difficulty, license: "MIT", credit: "Us", low, high };
}

const SONGS: CatalogSong[] = [
  song("Isaac Albéniz", "Prélude Andantino", 9, 41, 105, "Opus 165 'España'"),
  song("Isaac Albéniz", "Tango Andantino", 7, 33, 86, "Opus 165 'España'"),
  song("Frédéric Chopin", "Nocturne", 6, 36, 96),
  song("Traditional", "Mary had a little lamb", 1, 55, 67),
];

const titles = (songs: CatalogSong[]) => songs.map((s) => s.title);

test("search_ignores_accents_and_case", () => {
  expect(titles(filterSongs(SONGS, { ...NO_FILTER, query: "ALBENIZ prelude" }))).toEqual(["Prélude Andantino"]);
  expect(titles(filterSongs(SONGS, { ...NO_FILTER, query: "espana" }))).toEqual(["Prélude Andantino", "Tango Andantino"]);
  expect(titles(filterSongs(SONGS, { ...NO_FILTER, query: "  frédéric  " }))).toEqual(["Nocturne"]);
  expect(filterSongs(SONGS, { ...NO_FILTER, query: "bach" })).toEqual([]);
});

test("a_query_finds_a_song_by_the_text_the_caller_adds", () => {
  const text = (entry: CatalogSong) => (entry.composer === "Frédéric Chopin" ? "Romantic" : "");
  expect(titles(filterSongs(SONGS, { ...NO_FILTER, query: "romantic", text }))).toEqual(["Nocturne"]);
  expect(filterSongs(SONGS, { ...NO_FILTER, query: "romantic" })).toEqual([]);
});

test("a_highlight_points_into_the_text_as_written", () => {
  const cut = (text: string, query: string) => highlightRanges(text, queryWords(query)).map(([start, end]) => text.slice(start, end));
  expect(cut("Prélude Andantino", "PRELUDE tino")).toEqual(["Prélude", "tino"]);
  expect(cut("Isaac Albéniz", "albeniz")).toEqual(["Albéniz"]);
  // Two words that touch or overlap merge into one part.
  expect(cut("Andantino", "andan dantino")).toEqual(["Andantino"]);
  expect(cut("Nocturne", "bach")).toEqual([]);
  expect(cut("Nocturne", "")).toEqual([]);
});

test("songs_sort_by_title_difficulty_length_and_last_play", () => {
  const facts = {
    length: (entry: CatalogSong) => ({ Nocturne: 200, "Tango Andantino": 90 })[entry.title],
    played: (entry: CatalogSong) => ({ "Mary had a little lamb": 5, "Prélude Andantino": 9 })[entry.title],
  };
  expect(sortSongs(SONGS, "suggested", facts)).toEqual(SONGS);
  expect(titles(sortSongs(SONGS, "title", facts))).toEqual(["Mary had a little lamb", "Nocturne", "Prélude Andantino", "Tango Andantino"]);
  expect(titles(sortSongs(SONGS, "difficulty", facts))).toEqual(["Mary had a little lamb", "Nocturne", "Tango Andantino", "Prélude Andantino"]);
  // A song whose length or last play is not known comes after the known ones, in the order given.
  expect(titles(sortSongs(SONGS, "length", facts))).toEqual(["Tango Andantino", "Nocturne", "Prélude Andantino", "Mary had a little lamb"]);
  expect(titles(sortSongs(SONGS, "recent", facts))).toEqual(["Prélude Andantino", "Mary had a little lamb", "Tango Andantino", "Nocturne"]);
});

test("difficulty_filter_keeps_only_its_range", () => {
  expect(titles(filterSongs(SONGS, { ...NO_FILTER, minDifficulty: 6, maxDifficulty: 7 }))).toEqual(["Tango Andantino", "Nocturne"]);
  expect(titles(filterSongs(SONGS, { ...NO_FILTER, maxDifficulty: 1 }))).toEqual(["Mary had a little lamb"]);
});

test("fits_my_keyboard_keeps_only_songs_inside_the_range", () => {
  const sixtyOne = { first: 36, last: 96 };
  expect(titles(filterSongs(SONGS, { ...NO_FILTER, fits: sixtyOne }))).toEqual(["Nocturne", "Mary had a little lamb"]);
  // A song of unknown span, such as an upload, is kept.
  const { low: _low, high: _high, ...unknown } = song("Me", "Upload", 3);
  expect(titles(filterSongs([unknown], { ...NO_FILTER, fits: { first: 60, last: 72 } }))).toEqual(["Upload"]);
});

test("the_versions_of_a_song_and_its_original_score_are_one_entry", () => {
  const original = song("Ludwig v. Beethoven", "Ode to Joy, the score", 5);
  const version = (rarity: "common" | "rare"): CatalogSong => ({
    ...song("Ludwig van Beethoven", rarity === "common" ? "Beginner" : "Easy", 1, 48, 72, "Ode to Joy"),
    file: `ours/ode-to-joy/${rarity}.mid`,
    song: "ode-to-joy",
    rarity,
    mythic: original.file,
  });
  // The catalog lists the original first and the harder version before the easier one.
  const entries = songEntries([original, ...SONGS, version("rare"), version("common")]);
  expect(entries.map((entry) => entry.key)).toEqual([...SONGS.map((s) => s.file), "ode-to-joy"]);
  expect(entries[4]!.versions.map(songTitle)).toEqual(["Ode to Joy, Beginner", "Ode to Joy, Easy", "Ode to Joy, the score"]);
  expect(entries[0]!.versions).toEqual([SONGS[0]!]);
  expect(songTitle(SONGS[0]!)).toBe("Prélude Andantino");
});

test("songs_group_by_composer_then_piece_in_catalog_order", () => {
  const groups = groupSongs(SONGS);
  expect(groups.map((g) => g.name)).toEqual(["Isaac Albéniz", "Frédéric Chopin", "Traditional"]);
  expect(groups[0]?.pieces.map((p) => [p.piece, p.songs.length])).toEqual([["Opus 165 'España'", 2]]);
});

test("a_collection_groups_its_songs_first_and_alone", () => {
  const carol: CatalogSong = { ...song("Franz Xaver Gruber", "Common", 1, 60, 72, "Silent Night"), song: "silent-night", rarity: "common", collection: "christmas", aka: ["Stille Nacht"] };
  const groups = groupSongs([...SONGS, carol]);
  expect(groups.map((g) => [g.name, g.collection])).toEqual([
    ["Christmas", "christmas"],
    ["Isaac Albéniz", undefined],
    ["Frédéric Chopin", undefined],
    ["Traditional", undefined],
  ]);
  // The collection's name and the song's other titles find it.
  expect(filterSongs([...SONGS, carol], { ...NO_FILTER, query: "christmas" })).toEqual([carol]);
  expect(filterSongs([...SONGS, carol], { ...NO_FILTER, query: "stille" })).toEqual([carol]);
});
