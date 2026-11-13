/**
 * Our songs: writes each song of `tools/our-songs/` as four MIDI files and a guide in
 * `public/songs/ours/<slug>/`, the folder's `LICENSE.md`, and four rows per song in
 * `public/songs/catalog.json`. [docs/our-songs.md](../docs/our-songs.md) holds the rules a song follows.
 *
 * A song module exports an `OurSong`: its source, its tune with the hook, its four versions in the
 * notation of `tools/song-notation.ts`, and the text of its guide. The writer measures every version with
 * `tools/song-meter.ts` and refuses the whole run on any problem `songProblems` names.
 *
 * A guide's text is English beside each field, and German in the song's `de` block, which
 * `tools/our-songs/silent-night.ts` shows. A translator adds that block and changes no other line:
 * - `de.about` and `de.funFact` translate `about` and `funFact`.
 * - `de.versions.<id>.practice` and `de.versions.<id>.tips` hold one text per step and per tip, in the
 *   English order.
 * - `de.versions.<id>.tricky` holds one text per tricky bar, under the same bar numbers as `tricky`.
 * - The writer refuses a block whose counts or bars differ from the English.
 * - The test `every_guide_is_complete` checks each German text has words, and each German sentence
 *   keeps to 25. A German `about` takes 2 to 4 sentences. The test's last check lists every song
 *   without a block.
 * - A sentence ends at `.`, `!` or `?`. The abbreviations `z. B.`, `d. h.`, `u. a.` and `St.` end none, nor
 *   a day or century before its noun, as in `24. Dezember`. Every other abbreviation is written out.
 *
 * The writer stores each text as `{ "en": …, "de": … }`, and leaves `de` out where the module has none.
 *
 * Decisions, and what each costs:
 * - The guide's fingers, start position and tricky bars come from the versions and the meter, so the
 *   module writes only what a person must: the fingers in the notation and the text.
 * - A version's tricky spots are the bars the meter names, and the module writes one tip per bar. A
 *   change to a version that moves its tricky bars then fails until the tips follow.
 * - The start position of a hand maps each finger to the first key it plays, until a finger takes a
 *   second key. That is where the opening position ends.
 * - The German sits in one block apart from the English, so a translator touches no note and no English
 *   line. Its steps and tips match the English by position, so a step moved in one list moves in both.
 * - A version's catalog difficulty is the meter's `catalogDifficulty`, never set by hand.
 * - A song's collection and other titles go on each of its rows, so the library groups and finds every
 *   version alike.
 * - A version's row names its skills, the same as its guide does, so the library tags it without
 *   reading the guide.
 * - The rows replace every catalog row under `ours/` and follow the modern pieces, so the other song
 *   tools keep them in place. The rest of the catalog keeps its order.
 * - The tunes are public domain, and the arrangements are ours under the MIT License.
 *
 * `bun tools/make-our-songs.ts`. It needs no network, and the app never runs it. `tools/check-our-song.ts`
 * checks one module alone and writes nothing.
 */
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

import { readMidi } from "../src/midi/smf-read";
import { writeMidi } from "../src/midi/smf-write";
import { songFromMidi } from "../src/midi/song";
import { RARITIES, RARITY_NAMES, type Guide, type GuideText, type PracticeStep, type Rarity, type Tip, type VersionGuide } from "../src/library/guide";
import type { Collection } from "../src/library/search";
import type { SkillId } from "../src/library/skills";
import type { Finger, Hand } from "../src/theory/fingering";
import type { Key } from "../src/theory/key";
import { readCatalog, songsDir, withSpan, writeCatalog, type CatalogSong } from "./catalog";
import { originalsFolder } from "./make-original-songs";
import {
  barCount,
  breaksOf,
  catalogDifficulty,
  earns,
  fingerProblems,
  matchTune,
  measure,
  meterOfNotation,
  trickySpots,
  tuneOf,
  type MeterSong,
} from "./song-meter";
import { fingerKey, parseSong, twoHandMidi, writtenFingers, type HandNote, type TwoHandSong } from "./song-notation";
import { canonInD } from "./our-songs/canon-in-d";
import { alleJahreWieder } from "./our-songs/alle-jahre-wieder";
import { alsoSprachZarathustra } from "./our-songs/also-sprach-zarathustra";
import { angelsWeHaveHeardOnHigh } from "./our-songs/angels-we-have-heard-on-high";
import { awayInAManger } from "./our-songs/away-in-a-manger";
import { carolOfTheBells } from "./our-songs/carol-of-the-bells";
import { clairDeLune } from "./our-songs/clair-de-lune";
import { moonlightSonata } from "./our-songs/moonlight-sonata";
import { beethoven7Allegretto } from "./our-songs/beethoven-7-allegretto";
import { gymnopedie1 } from "./our-songs/gymnopedie-1";
import { hungarianDance5 } from "./our-songs/hungarian-dance-5";
import { eineKleineNachtmusik } from "./our-songs/eine-kleine-nachtmusik";
import { lacrimosa } from "./our-songs/lacrimosa";
import { mozart21Andante } from "./our-songs/mozart-21-andante";
import { airOnTheGString } from "./our-songs/air-on-the-g-string";
import { toccataInDMinor } from "./our-songs/toccata-in-d-minor";
import { handelSarabande } from "./our-songs/handel-sarabande";
import { williamTell } from "./our-songs/william-tell";
import { swanLake } from "./our-songs/swan-lake";
import { nightOnBaldMountain } from "./our-songs/night-on-bald-mountain";
import { theSorcerersApprentice } from "./our-songs/the-sorcerers-apprentice";
import { aveMaria } from "./our-songs/ave-maria";
import { bolero } from "./our-songs/bolero";
import { funeralMarch } from "./our-songs/funeral-march";
import { beethoven5 } from "./our-songs/beethoven-5";
import { chopinNocturneCSharpMinor } from "./our-songs/chopin-nocturne-c-sharp-minor";
import { morningMood } from "./our-songs/morning-mood";
import { weddingMarch } from "./our-songs/wedding-march";
import { canCan } from "./our-songs/can-can";
import { vltava } from "./our-songs/vltava";
import { aquarium } from "./our-songs/aquarium";
import { mahlerAdagietto } from "./our-songs/mahler-adagietto";
import { drunkenSailor } from "./our-songs/drunken-sailor";
import { blowTheManDown } from "./our-songs/blow-the-man-down";
import { sailorsHornpipe } from "./our-songs/sailors-hornpipe";
import { spanishLadies } from "./our-songs/spanish-ladies";
import { haulAwayJoe } from "./our-songs/haul-away-joe";
import { deckTheHalls } from "./our-songs/deck-the-halls";
import { diesIrae } from "./our-songs/dies-irae";
import { dingDongMerrilyOnHigh } from "./our-songs/ding-dong-merrily-on-high";
import { esIstEinRosEntsprungen } from "./our-songs/es-ist-ein-ros-entsprungen";
import { furElise } from "./our-songs/fur-elise";
import { godRestYeMerryGentlemen } from "./our-songs/god-rest-ye-merry-gentlemen";
import { goodKingWenceslas } from "./our-songs/good-king-wenceslas";
import { habanera } from "./our-songs/habanera";
import { hallOfTheMountainKing } from "./our-songs/hall-of-the-mountain-king";
import { happyBirthday } from "./our-songs/happy-birthday";
import { harkTheHeraldAngelsSing } from "./our-songs/hark-the-herald-angels-sing";
import { ihrKinderleinKommet } from "./our-songs/ihr-kinderlein-kommet";
import { itCameUponTheMidnightClear } from "./our-songs/it-came-upon-the-midnight-clear";
import { jingleBells } from "./our-songs/jingle-bells";
import { jollyOldSaintNicholas } from "./our-songs/jolly-old-saint-nicholas";
import { joyToTheWorld } from "./our-songs/joy-to-the-world";
import { klingGloeckchen } from "./our-songs/kling-gloeckchen";
import { kommetIhrHirten } from "./our-songs/kommet-ihr-hirten";
import { leiseRieseltDerSchnee } from "./our-songs/leise-rieselt-der-schnee";
import { maryHadALittleLamb } from "./our-songs/mary-had-a-little-lamb";
import { morgenKinder } from "./our-songs/morgen-kinder";
import { oChristmasTree } from "./our-songs/o-christmas-tree";
import { oComeAllYeFaithful } from "./our-songs/o-come-all-ye-faithful";
import { oDuFroehliche } from "./our-songs/o-du-froehliche";
import { oHolyNight } from "./our-songs/o-holy-night";
import { oLittleTownOfBethlehem } from "./our-songs/o-little-town-of-bethlehem";
import { odeToJoy } from "./our-songs/ode-to-joy";
import { oldMacDonaldHadAFarm } from "./our-songs/old-macdonald-had-a-farm";
import { rowRowRowYourBoat } from "./our-songs/row-row-row-your-boat";
import { silentNight } from "./our-songs/silent-night";
import { theBlueDanube } from "./our-songs/the-blue-danube";
import { theEntertainer } from "./our-songs/the-entertainer";
import { theFirstNoel } from "./our-songs/the-first-noel";
import { suesserDieGlocken } from "./our-songs/suesser-die-glocken";
import { theTwelveDaysOfChristmas } from "./our-songs/the-twelve-days-of-christmas";
import { tochterZion } from "./our-songs/tochter-zion";
import { twinkleTwinkleLittleStar } from "./our-songs/twinkle-twinkle-little-star";
import { upOnTheHousetop } from "./our-songs/up-on-the-housetop";
import { weThreeKings } from "./our-songs/we-three-kings";
import { yankeeDoodle } from "./our-songs/yankee-doodle";

/** The folder of our songs, relative to `public/songs/`. */
export const oursFolder = "ours";

/** The license of every version of ours. */
export const oursLicense = "MIT";

/** Who every version of ours is credited to. */
export const oursCredit = "Arranged by the learn-piano-easy authors";

/** Where a song's tune comes from, and why it is public domain or ours. */
export interface OurSource {
  /** The composer, `Traditional`, or `learn-piano-easy` for a tune of our own. */
  composer: string;
  /** The year the composer died, or null for a traditional tune or one of our own. */
  died: number | null;
  /** The year the tune was first published. */
  published: number;
  /** The public domain edition the tune was checked against, or a note that the tune is ours. */
  edition: string;
  /** True for a tune of our own, which is MIT as every version of ours is and needs no public domain years. */
  own?: true;
}

/** A song's tune in one line of the notation, its key and its hook. */
export interface OurTune {
  text: string;
  numerator: number;
  denominator: number;
  steps?: number;
  key: Key;
  /** The hook's first and last bar, from 1. */
  hookBars: [number, number];
}

/** A practice step or tip as a module writes it: its text in English alone. */
export type Written<T extends { text: GuideText }> = Omit<T, "text"> & { text: string };

/** One version of a song: its notes in the notation and the text of its guide. */
export interface OurVersion {
  /** The version's key, which its file names, so the meter and the sheet read it without guessing. */
  key: Key;
  bpm: number;
  numerator: number;
  denominator: number;
  steps?: number;
  right: string;
  left: string;
  pedal?: string;
  /** The bars, from 1, where the hands clash on purpose. */
  markedClashBars?: number[];
  skills: SkillId[];
  practice: Written<PracticeStep>[];
  tips: Written<Tip>[];
  /** A tip for each bar the meter names as a tricky spot, by bar. */
  tricky: Record<number, string>;
}

/** The German text of one version's guide, in the shape of its English text. */
export interface OurVersionGerman {
  /** One text per practice step, in the order of `practice`. */
  practice: string[];
  /** One text per tip, in the order of `tips`. */
  tips: string[];
  /** One text per tricky bar, by the same bars as `tricky`. */
  tricky: Record<number, string>;
}

/** The German text of a song's guide. */
export interface OurGerman {
  about: string;
  funFact: string;
  versions: Record<Rarity, OurVersionGerman>;
}

/** A song of ours, as its module exports it. */
export interface OurSong {
  /** The folder's name and the catalog rows' `song`. */
  slug: string;
  title: string;
  source: OurSource;
  about: string;
  funFact: string;
  /** The catalog file of the original score, rated above Legendary, or null. */
  mythic: string | null;
  /** The collection the library groups the song in, such as `christmas`, or none. */
  collection?: Collection;
  /** The song's other titles, which the library's search matches, such as `Stille Nacht`. */
  aka?: string[];
  tune: OurTune;
  versions: Record<Rarity, OurVersion>;
  /** The guide's German text. A song without it still builds, and the guide's test names it as missing. */
  de?: OurGerman;
}

/** Every song of ours, in the catalog's order. */
export const ourSongs: readonly OurSong[] = [
  maryHadALittleLamb,
  twinkleTwinkleLittleStar,
  oldMacDonaldHadAFarm,
  rowRowRowYourBoat,
  yankeeDoodle,
  odeToJoy,
  happyBirthday,
  jingleBells,
  canonInD,
  hallOfTheMountainKing,
  furElise,
  theEntertainer,
  silentNight,
  oChristmasTree,
  itCameUponTheMidnightClear,
  deckTheHalls,
  joyToTheWorld,
  harkTheHeraldAngelsSing,
  oComeAllYeFaithful,
  theFirstNoel,
  godRestYeMerryGentlemen,
  awayInAManger,
  carolOfTheBells,
  dingDongMerrilyOnHigh,
  weThreeKings,
  oHolyNight,
  angelsWeHaveHeardOnHigh,
  goodKingWenceslas,
  theTwelveDaysOfChristmas,
  upOnTheHousetop,
  jollyOldSaintNicholas,
  oLittleTownOfBethlehem,
  leiseRieseltDerSchnee,
  alleJahreWieder,
  klingGloeckchen,
  oDuFroehliche,
  ihrKinderleinKommet,
  morgenKinder,
  kommetIhrHirten,
  suesserDieGlocken,
  esIstEinRosEntsprungen,
  tochterZion,
  alsoSprachZarathustra,
  theBlueDanube,
  habanera,
  diesIrae,
  clairDeLune,
  moonlightSonata,
  beethoven7Allegretto,
  gymnopedie1,
  hungarianDance5,
  eineKleineNachtmusik,
  lacrimosa,
  mozart21Andante,
  airOnTheGString,
  toccataInDMinor,
  handelSarabande,
  williamTell,
  swanLake,
  nightOnBaldMountain,
  theSorcerersApprentice,
  aveMaria,
  bolero,
  funeralMarch,
  beethoven5,
  chopinNocturneCSharpMinor,
  morningMood,
  weddingMarch,
  canCan,
  vltava,
  aquarium,
  mahlerAdagietto,
  drunkenSailor,
  blowTheManDown,
  sailorsHornpipe,
  spanishLadies,
  haulAwayJoe,
];

/** The version `rarity` of `song` as a song of the notation. */
export function versionNotation(song: OurSong, rarity: Rarity): TwoHandSong {
  const { markedClashBars: _clashes, skills: _skills, practice: _practice, tips: _tips, tricky: _tricky, ...notes } = song.versions[rarity];
  return { title: `${song.title}, ${RARITY_NAMES[rarity]}`, file: `${rarity}.mid`, difficulty: 0, ...notes };
}

/** The MIDI file of the version `rarity` of `song`. */
export function versionBytes(song: OurSong, rarity: Rarity): Uint8Array {
  return writeMidi(twoHandMidi(versionNotation(song, rarity)));
}

/** The meter's view of the version `rarity` of `song`. */
export function versionMeter(song: OurSong, rarity: Rarity): MeterSong {
  return meterOfNotation(versionNotation(song, rarity), song.versions[rarity].markedClashBars ?? []);
}

/** The catalog file of the version `rarity` of `song`, from `songs/`. */
function versionFile(song: OurSong, rarity: Rarity): string {
  return `${oursFolder}/${song.slug}/${rarity}.mid`;
}

/**
 * Whether a tune published in `published` by a composer who died in `died` is free in the US and the EU
 * in `year`. A tune of our own is always free to ship.
 */
export function isPublicDomain(source: OurSource, year: number): boolean {
  if (source.own === true) return true;
  return source.published + 95 < year && (source.died === null || source.died + 70 < year);
}

/** What the version `rarity` of `song` breaks: its rarity, its tune, its fingers, or a bar its guide names. */
export function versionProblems(song: OurSong, rarity: Rarity): string[] {
  const where = `${song.title}, ${RARITY_NAMES[rarity]}`;
  const meter = versionMeter(song, rarity);
  const measures = measure(meter);
  const problems: string[] = [];
  if (!earns(measures, rarity)) {
    const breaks = breaksOf(measures, rarity);
    const below = RARITIES[RARITIES.indexOf(rarity) - 1];
    if (breaks.length > 0) problems.push(`breaks ${breaks.map((b) => `${b.name} (${+b.value.toFixed(2)} past ${b.limit})`).join(", ")}`);
    else problems.push(`fits ${below}, so it does not earn ${rarity}`);
  }
  const { tune } = song;
  problems.push(...matchTune(meter, tuneOf(tune.text, tune, tune.key, tune.hookBars), rarity).problems);
  problems.push(...fingerProblems(meter));
  const bars = barCount(meter);
  const version = song.versions[rarity];
  const named = [
    ...version.tips.map((tip) => [tip.fromBar, tip.toBar]),
    ...version.practice.flatMap((step) => (step.loop === null ? [] : [step.loop])),
    ...Object.keys(version.tricky).map((bar) => [Number(bar), Number(bar)]),
  ];
  for (const [from, to] of named) if (to! > bars || from! < 1) problems.push(`bars ${from} to ${to} lie outside its ${bars} bars`);
  const spots = trickySpots(meter).map((spot) => spot.bar).sort((a, b) => a - b);
  const written = Object.keys(version.tricky).map(Number).sort((a, b) => a - b);
  if (spots.join() !== written.join()) problems.push(`its tricky spots are bars ${spots.join(", ")}, and the tips name bars ${written.join(", ")}`);
  const german = song.de?.versions[rarity];
  if (german !== undefined) {
    if (german.practice.length !== version.practice.length) problems.push(`it has ${version.practice.length} practice steps, and ${german.practice.length} in German`);
    if (german.tips.length !== version.tips.length) problems.push(`it has ${version.tips.length} tips, and ${german.tips.length} in German`);
    const germanBars = Object.keys(german.tricky).map(Number).sort((a, b) => a - b);
    if (germanBars.join() !== written.join()) problems.push(`its tricky tips name bars ${written.join(", ")}, and in German bars ${germanBars.join(", ")}`);
  }
  return problems.map((problem) => `${where}: ${problem}`);
}

/** What `song` breaks in `year`: its source, or any of its versions. */
export function songProblems(song: OurSong, year = new Date().getFullYear()): string[] {
  const problems = isPublicDomain(song.source, year) ? [] : [`${song.title}: its tune is not public domain in ${year}`];
  return [...problems, ...RARITIES.flatMap((rarity) => versionProblems(song, rarity))];
}

/** The key under each finger of `notes` at their start, until a finger takes a second key. */
function startOf(notes: readonly HandNote[]): (number | null)[] {
  const keys: (number | null)[] = [null, null, null, null, null];
  for (const note of notes) {
    for (let at = 0; at < note.pitches.length; at++) {
      const finger = note.fingers[at];
      if (finger === undefined) continue;
      const held = keys[finger - 1];
      if (held !== null && held !== note.pitches[at]) return keys;
      keys[finger - 1] = note.pitches[at]!;
    }
  }
  return keys;
}

/** The text `en` with its German `de`, which is left out when the module has none. */
function bilingual(en: string, de: string | undefined): GuideText {
  return de === undefined ? { en } : { en, de };
}

/** The guide of the version `rarity` of `song`. */
function versionGuide(song: OurSong, rarity: Rarity): VersionGuide {
  const notation = versionNotation(song, rarity);
  const written = writtenFingers(notation);
  const file = songFromMidi(readMidi(versionBytes(song, rarity)));
  const fingersOf = (track: number, hand: Hand): Finger[] =>
    (file.tracks[track]?.notes ?? []).map((note) => {
      const finger = written[hand].get(fingerKey(note.startTick, note.pitch));
      if (finger === undefined) throw new Error(`${notation.title}: the ${hand} hand's note at tick ${note.startTick} has no finger`);
      return finger;
    });
  const parsed = parseSong(notation);
  const version = song.versions[rarity];
  const german = song.de?.versions[rarity];
  return {
    file: versionFile(song, rarity),
    skills: version.skills,
    fingers: { right: fingersOf(0, "right"), left: fingersOf(1, "left") },
    start: { right: startOf(parsed.right), left: startOf(parsed.left) },
    practice: version.practice.map((step, at) => ({ ...step, text: bilingual(step.text, german?.practice[at]) })),
    tips: version.tips.map((tip, at) => ({ ...tip, text: bilingual(tip.text, german?.tips[at]) })),
    tricky: trickySpots(versionMeter(song, rarity)).map(({ bar }) => ({ bar, text: bilingual(version.tricky[bar]!, german?.tricky[bar]) })),
  };
}

/** The guide of `song`. */
export function guideOf(song: OurSong): Guide {
  return {
    song: song.slug,
    title: song.title,
    composer: song.source.composer,
    about: bilingual(song.about, song.de?.about),
    funFact: bilingual(song.funFact, song.de?.funFact),
    mythic: song.mythic,
    versions: Object.fromEntries(RARITIES.map((rarity) => [rarity, versionGuide(song, rarity)])) as Record<Rarity, VersionGuide>,
  };
}

/** `guide` as the text of its file: two-space JSON with each list of numbers on one line. */
export function guideText(guide: Guide): string {
  const text = JSON.stringify(guide, null, 2).replace(/\[\s*((?:-?\d+|null)(?:,\s*(?:-?\d+|null))*)\s*\]/g, (_, items: string) => `[${items.split(/,\s*/).join(", ")}]`);
  return `${text}\n`;
}

/** The four catalog rows of `song`. */
export function rowsOf(song: OurSong): CatalogSong[] {
  return RARITIES.map((rarity) => {
    const row = {
      composer: song.source.composer,
      piece: song.title,
      title: RARITY_NAMES[rarity],
      file: versionFile(song, rarity),
      difficulty: catalogDifficulty(measure(versionMeter(song, rarity)), rarity),
      license: oursLicense,
      credit: oursCredit,
    };
    const ours: CatalogSong = { ...withSpan(row, versionBytes(song, rarity)), song: song.slug, rarity, skills: [...song.versions[rarity].skills] };
    if (song.mythic !== null) ours.mythic = song.mythic;
    if (song.collection !== undefined) ours.collection = song.collection;
    if (song.aka !== undefined) ours.aka = song.aka;
    return ours;
  });
}

/** The text of the folder's `LICENSE.md` for `songs`. */
export function licenseText(songs: readonly OurSong[]): string {
  const rows = songs.flatMap((song) => [
    ...RARITIES.map((rarity) => `| \`${song.slug}/${rarity}.mid\` | ${song.title}, ${RARITY_NAMES[rarity]} | ${song.source.composer} | MIT |`),
    `| \`${song.slug}/guide.json\` | ${song.title}, the guide | | MIT |`,
  ]);
  return `# Our songs

The files in this folder are our own arrangements of tunes in the public domain, and the guides to them.
They are under the MIT License, the same as the app: see \`LICENSE\` at the repository root.

\`tools/make-our-songs.ts\` writes them from \`tools/our-songs/\`, so a change goes there, never into a file here.

| File | Title | Tune by | License |
|---|---|---|---|
${rows.join("\n")}
`;
}

/** Writes every song of ours, its guide, the folder's license and the catalog rows. Returns the rows. */
export async function makeOurSongs(songs: readonly OurSong[] = ourSongs): Promise<CatalogSong[]> {
  const problems = songs.flatMap((song) => songProblems(song));
  if (problems.length > 0) throw new Error(`The meter refuses:\n${problems.join("\n")}`);
  const rows: CatalogSong[] = [];
  for (const song of songs) {
    const dir = join(songsDir, oursFolder, song.slug);
    await mkdir(dir, { recursive: true });
    for (const rarity of RARITIES) await Bun.write(join(dir, `${rarity}.mid`), versionBytes(song, rarity));
    await Bun.write(join(dir, "guide.json"), guideText(guideOf(song)));
    rows.push(...rowsOf(song));
  }
  await Bun.write(join(songsDir, oursFolder, "LICENSE.md"), licenseText(songs));
  const others = (await readCatalog()).filter((row) => !row.file.startsWith(`${oursFolder}/`));
  const first = (row: CatalogSong) => row.file.startsWith(`${originalsFolder}/`);
  await writeCatalog([...others.filter(first), ...rows, ...others.filter((row) => !first(row))]);
  return rows;
}

if (import.meta.main) {
  const rows = await makeOurSongs();
  console.log(`${rows.length} versions in public/songs/${oursFolder}/`);
}
