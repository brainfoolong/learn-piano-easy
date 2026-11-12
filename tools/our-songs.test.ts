import { join } from "node:path";

import { RARITIES, readGuide, type Guide } from "../src/library/guide";
import { filterSongs, groupSongs, NO_FILTER } from "../src/library/search";
import { readMidi } from "../src/midi/smf-read";
import { songFromMidi, songLength } from "../src/midi/song";
import { expect, test } from "../src/testing";
import { readCatalog, songsDir } from "./catalog";
import { guideOf, guideText, isPublicDomain, licenseText, ourSongs, oursFolder, rowsOf, songProblems, versionBytes, versionMeter } from "./make-our-songs";
import { trickySpots } from "./song-meter";

/** The catalog difficulty each rarity's versions take, from its lowest to its highest. */
const BANDS = { common: [1, 1.5], rare: [2, 2.5], epic: [3, 3.5], legendary: [4, 4.5] } as const;

/** The sentences of `text`, where neither `St.` nor a name's initial, as in `William J.`, ends one. */
function sentences(text: string): string[] {
  return text.split(/(?<!\b[A-Z][a-z]+ [A-Z]\.|\bSt\.)(?<=[.!?])\s+/).filter((sentence) => sentence.trim() !== "");
}

/** The guide of `slug` as the tree holds it. */
async function storedGuide(slug: string): Promise<unknown> {
  return Bun.file(join(songsDir, oursFolder, slug, "guide.json")).json();
}

test("every_song_of_ours_earns_its_rarities", () => {
  expect(ourSongs.length).toBeGreaterThan(0);
  for (const song of ourSongs) {
    expect({ song: song.slug, problems: songProblems(song) }).toEqual({ song: song.slug, problems: [] });
    for (const row of rowsOf(song)) {
      const [low, high] = BANDS[row.rarity!];
      expect({ file: row.file, inBand: row.difficulty >= low && row.difficulty <= high }).toEqual({ file: row.file, inBand: true });
    }
  }
  // A tune is free only once both its publication and its composer's death lie far enough back.
  const source = { composer: "Someone", died: 1900, published: 1890, edition: "First edition" };
  expect(isPublicDomain(source, 2026)).toBe(true);
  expect(isPublicDomain({ ...source, published: 1931 }, 2026)).toBe(false);
  expect(isPublicDomain({ ...source, died: 1956 }, 2026)).toBe(false);
  expect(isPublicDomain({ ...source, died: null }, 2026)).toBe(true);
}, 60_000);

/** The slugs of every Christmas song of ours that is or will be written, by the goal `christmas-songs`. */
const CHRISTMAS = new Set([
  "jingle-bells",
  "silent-night",
  "o-christmas-tree",
  "it-came-upon-the-midnight-clear",
  "deck-the-halls",
  "joy-to-the-world",
  "hark-the-herald-angels-sing",
  "o-come-all-ye-faithful",
  "the-first-noel",
  "god-rest-ye-merry-gentlemen",
  "away-in-a-manger",
  "carol-of-the-bells",
  "ding-dong-merrily-on-high",
  "we-three-kings",
  "o-holy-night",
  "angels-we-have-heard-on-high",
  "good-king-wenceslas",
  "the-twelve-days-of-christmas",
  "up-on-the-housetop",
  "jolly-old-saint-nicholas",
  "o-little-town-of-bethlehem",
  "leise-rieselt-der-schnee",
  "alle-jahre-wieder",
  "kling-gloeckchen",
  "o-du-froehliche",
  "ihr-kinderlein-kommet",
  "morgen-kinder",
  "kommet-ihr-hirten",
  "suesser-die-glocken",
  "es-ist-ein-ros-entsprungen",
  "tochter-zion",
]);

test("every_catalog_song_names_its_length_and_our_versions_their_skills", async () => {
  const catalog = await readCatalog();
  expect(catalog.length).toBeGreaterThan(0);
  const guides = new Map<string, Guide>();
  for (const row of catalog) {
    // The length is the file's own, to the end of its last note, in whole seconds.
    const bytes = new Uint8Array(await Bun.file(join(songsDir, row.file)).arrayBuffer());
    const seconds = Math.round(songLength(songFromMidi(readMidi(bytes))));
    expect({ file: row.file, seconds: row.seconds }).toEqual({ file: row.file, seconds });
    expect({ file: row.file, positive: seconds > 0 }).toEqual({ file: row.file, positive: true });
    if (row.song === undefined) {
      expect({ file: row.file, skills: row.skills }).toEqual({ file: row.file, skills: undefined });
      continue;
    }
    // A version of ours names the skills its guide names, in the guide's order.
    if (!guides.has(row.song)) guides.set(row.song, readGuide(await storedGuide(row.song))!);
    const version = guides.get(row.song)!.versions[row.rarity!];
    expect({ file: row.file, skills: row.skills }).toEqual({ file: row.file, skills: version.skills });
  }
}, 60_000);

test("every_christmas_song_is_in_the_collection", async () => {
  expect(ourSongs.some((song) => song.slug === "jingle-bells")).toBe(true);
  for (const song of ourSongs) {
    expect({ song: song.slug, christmas: song.collection === "christmas" }).toEqual({ song: song.slug, christmas: CHRISTMAS.has(song.slug) });
  }
  // The catalog in the tree carries the collection on every version, and the library groups them first.
  const catalog = await readCatalog();
  for (const row of catalog.filter((row) => row.song !== undefined)) {
    expect({ file: row.file, christmas: row.collection === "christmas" }).toEqual({ file: row.file, christmas: CHRISTMAS.has(row.song!) });
  }
  const first = groupSongs(catalog)[0]!;
  expect(first.name).toBe("Christmas");
  expect(first.pieces[0]!.songs[0]!.song).toBe("jingle-bells");
});

test("a_song_is_found_by_another_title", async () => {
  const catalog = await readCatalog();
  const named = ourSongs.filter((song) => (song.aka ?? []).length > 0);
  expect(named.some((song) => song.slug === "jingle-bells")).toBe(true);
  for (const song of named) {
    for (const title of song.aka!) {
      const found = filterSongs(catalog, { ...NO_FILTER, query: title }).filter((row) => row.song === song.slug);
      expect({ title, versions: found.length }).toEqual({ title, versions: RARITIES.length });
    }
  }
});

test("every_guide_is_complete", async () => {
  for (const song of ourSongs) {
    const guide = readGuide(await storedGuide(song.slug)) as Guide;
    expect({ song: song.slug, read: guide !== undefined }).toEqual({ song: song.slug, read: true });
    expect(sentences(guide.about).length).toBeGreaterThanOrEqual(2);
    expect(sentences(guide.about).length).toBeLessThanOrEqual(4);
    const texts = [guide.about, guide.funFact];
    for (const rarity of RARITIES) {
      const version = guide.versions[rarity];
      const where = `${song.slug}, ${rarity}`;
      // A finger for every note of each hand's track, in file order.
      const file = songFromMidi(readMidi(versionBytes(song, rarity)));
      expect({ where, right: version.fingers.right.length, left: version.fingers.left.length }).toEqual({
        where,
        right: file.tracks[0]!.notes.length,
        left: file.tracks[1]!.notes.length,
      });
      // Each hand's start position names the keys of its first notes.
      for (const hand of ["right", "left"] as const) {
        expect({ where, hand, starts: version.start[hand].some((key) => key !== null) }).toEqual({ where, hand, starts: true });
      }
      expect({ where, tips: version.tips.length > 0 }).toEqual({ where, tips: true });
      const spots = trickySpots(versionMeter(song, rarity)).map((spot) => spot.bar);
      expect({ where, tricky: version.tricky.map((spot) => spot.bar) }).toEqual({ where, tricky: spots });
      texts.push(...version.practice.map((step) => step.text), ...version.tips.map((tip) => tip.text), ...version.tricky.map((spot) => spot.text));
    }
    // A learner reads every sentence, so each keeps to the prose rules' 25 words.
    for (const sentence of texts.flatMap(sentences)) {
      expect({ sentence, short: sentence.split(/\s+/).length <= 25 }).toEqual({ sentence, short: true });
    }
  }
  // A malformed guide is dropped whole.
  const good = guideOf(ourSongs[0]!);
  expect(readGuide(JSON.parse(JSON.stringify(good)))).toEqual(good);
  const unknownSkill = { ...good, versions: { ...good.versions, rare: { ...good.versions.rare, skills: ["juggling"] } } };
  expect(readGuide(unknownSkill)).toBeUndefined();
  const noPlan = { ...good, versions: { ...good.versions, epic: { ...good.versions.epic, practice: [] } } };
  expect(readGuide(noPlan)).toBeUndefined();
  expect(readGuide({ ...good, about: "" })).toBeUndefined();
});

test("the_files_match_their_source", async () => {
  const catalog = await readCatalog();
  for (const song of ourSongs) {
    const dir = join(songsDir, oursFolder, song.slug);
    for (const rarity of RARITIES) {
      const stored = new Uint8Array(await Bun.file(join(dir, `${rarity}.mid`)).arrayBuffer());
      expect({ file: `${song.slug}/${rarity}.mid`, same: Buffer.from(stored).equals(Buffer.from(versionBytes(song, rarity))) }).toEqual({
        file: `${song.slug}/${rarity}.mid`,
        same: true,
      });
    }
    expect(await Bun.file(join(dir, "guide.json")).text()).toBe(guideText(guideOf(song)));
  }
  expect(await Bun.file(join(songsDir, oursFolder, "LICENSE.md")).text()).toBe(licenseText(ourSongs));
  const ours = catalog.filter((row) => row.file.startsWith(`${oursFolder}/`));
  expect(ours).toEqual(ourSongs.flatMap(rowsOf));
}, 60_000);
