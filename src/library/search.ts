/**
 * The catalog's search: the shape of a catalog song, the filter and the orders the song explorer
 * offers, the parts of a text a query matched, and the grouping of the songs by collection and composer.
 *
 * Every function here is pure, so the panel only draws what they return.
 *
 * Decisions, and what each costs:
 * - A query matches when every word of it is found in the song's composer, piece, title, other
 *   titles or collection. Case and accents are ignored, so `albeniz` finds Albéniz and `stille nacht`
 *   finds Silent Night. Each song's text is folded once per search, which costs a pass over a few
 *   hundred short strings per key the learner types.
 * - A song in a collection is grouped under its collection, never under its composer, so it shows
 *   once. The collections come first, in the order of `COLLECTIONS`, then the composers.
 * - The difficulty filter keeps a song whose difficulty lies inside its range, both ends included.
 * - "Fits my keyboard" keeps a song whose lowest and highest note both lie inside the learner's range.
 *   A song without `low` and `high`, such as an upload, is kept, because its fit is not known yet.
 * - `songEntries` makes one entry of the versions of a song of ours, and of the original score they
 *   name. The explorer shows an entry as one card, so the original leaves its composer's own pieces.
 * - The groups keep the catalog's order, so a composer's pieces read as the catalog lists them.
 * - A collection's name and a version's name come from the live locale, so the search finds a
 *   collection by the name the learner reads.
 * - A caller may hand the filter more text per song, such as the names of its tags. A query then finds
 *   a song by a tag too, at the cost of folding that text on each search.
 * - `highlightRanges` folds a text one character at a time, so each range points into the text as
 *   written. A character that folds to nothing, or to two letters, keeps its own place.
 * - `sortSongs` is stable and falls back to the given order. A song whose length or last play is not
 *   known sorts after every song whose is.
 *
 * The song explorer draws cards and never groups, so `groupSongs` serves the check of our songs alone.
 */
import { collator } from "../i18n/format";
import { liveLocale, t } from "../i18n/live";
import type { KeyRange } from "../render/key-layout";
import { RARITIES, type Rarity, rarityName } from "./guide";

/** One song of `public/songs/catalog.json`. */
export interface CatalogSong {
  composer: string;
  /** The piece a movement belongs to, or null for a song that stands alone. */
  piece: string | null;
  title: string;
  /** The MIDI file's path, from `songs/`. */
  file: string;
  /** From 1, the easiest, to 10. */
  difficulty: number;
  license: string;
  /** Who the license asks to be credited, or who made the file. */
  credit: string;
  /** The song's lowest note, as a MIDI note number. */
  low?: number;
  /** The song's highest note, as a MIDI note number. */
  high?: number;
  /** The song's length in whole seconds, to the end of its last note. A song without it is measured. */
  seconds?: number;
  /** The skills the version teaches, beside `song`. A version without them takes them from its guide. */
  skills?: string[];
  /** The slug of the song of ours this row is a version of, or none for any other song. */
  song?: string;
  /** The id of the version, beside `song`. */
  rarity?: Rarity;
  /** The catalog file of the song's original score, its last step, beside `song` when it has one. */
  mythic?: string;
  /** The collection the song belongs to, such as `christmas`, beside `song`. */
  collection?: Collection;
  /** The song's other titles, such as `Stille Nacht` for Silent Night, beside `song`. */
  aka?: string[];
}

/** A collection of songs the library groups apart from their composers. */
export type Collection = "christmas" | "film" | "sea";

/** Every collection, in the order the library shows them. */
export const COLLECTIONS: readonly Collection[] = ["christmas", "film", "sea"];

/** The name the learner reads for `collection`, in the live locale. */
export function collectionName(collection: Collection): string {
  return t().player.library.collections[collection];
}

/** The lowest and the highest difficulty a song may have. */
export const MIN_DIFFICULTY = 1;
export const MAX_DIFFICULTY = 10;

/** What the learner filters the catalog by. */
export interface SongFilter {
  /** Words that must each appear in the composer, the piece or the title. */
  query: string;
  /** The easiest difficulty kept. */
  minDifficulty: number;
  /** The hardest difficulty kept. */
  maxDifficulty: number;
  /** The learner's keyboard, when only the songs that fit it are kept. */
  fits?: KeyRange;
  /** More text the query may match for a song, such as the names of its tags. */
  text?: (song: CatalogSong) => string;
}

/** A filter that keeps every song. */
export const NO_FILTER: SongFilter = { query: "", minDifficulty: MIN_DIFFICULTY, maxDifficulty: MAX_DIFFICULTY };

/** One piece of a composer, or the songs that stand alone when `piece` is null. */
export interface PieceGroup {
  piece: string | null;
  songs: CatalogSong[];
}

/** One collection's or one composer's songs, piece by piece. */
export interface SongGroup {
  /** The collection's name or the composer. */
  name: string;
  /** The collection, when the group is one. */
  collection?: Collection;
  pieces: PieceGroup[];
}

/** `text` in lower case with its accents taken off, so `Prélude` becomes `prelude`. */
export function foldText(text: string): string {
  return text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

/** The words of `query`, folded, which a song must each hold to match. */
export function queryWords(query: string): string[] {
  return foldText(query).split(/\s+/).filter((word) => word !== "");
}

/** The songs of `songs` that pass `filter`, in their order. */
export function filterSongs(songs: readonly CatalogSong[], filter: SongFilter): CatalogSong[] {
  const words = queryWords(filter.query);
  return songs.filter((song) => {
    if (song.difficulty < filter.minDifficulty || song.difficulty > filter.maxDifficulty) return false;
    if (filter.fits && !fitsRange(song, filter.fits)) return false;
    if (words.length === 0) return true;
    const collection = song.collection === undefined ? "" : collectionName(song.collection);
    const more = filter.text?.(song) ?? "";
    const text = foldText([song.composer, song.piece ?? "", song.title, ...(song.aka ?? []), collection, more].join(" "));
    return words.every((word) => text.includes(word));
  });
}

/**
 * The parts of `text` that hold a word of `words`, as `[start, end)` pairs in order, merged where they
 * touch. `words` are folded already, as `queryWords` returns them.
 */
export function highlightRanges(text: string, words: readonly string[]): [number, number][] {
  let folded = "";
  /** For each character of `folded`, the index in `text` of the character it came from. */
  const origin: number[] = [];
  for (let i = 0; i < text.length; i++) {
    for (const letter of foldText(text[i]!)) {
      folded += letter;
      origin.push(i);
    }
  }
  const found: [number, number][] = [];
  for (const word of words) {
    if (word === "") continue;
    for (let at = folded.indexOf(word); at !== -1; at = folded.indexOf(word, at + word.length)) {
      found.push([origin[at]!, origin[at + word.length - 1]! + 1]);
    }
  }
  found.sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [];
  for (const range of found) {
    const last = merged[merged.length - 1];
    if (last !== undefined && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
    else merged.push(range);
  }
  return merged;
}

/** The orders the explorer sorts by. `suggested` keeps the catalog's order. */
export const SORTS = ["suggested", "title", "difficulty", "length", "recent"] as const;

/** An order of `SORTS`. */
export type Sort = (typeof SORTS)[number];

/** What a sort reads beside the song: its length in seconds, and when it was last played, in ms. */
export interface SortFacts {
  length(song: CatalogSong): number | undefined;
  played(song: CatalogSong): number | undefined;
}

/** `songs` in the order `sort` names: by title, from easy to hard, from short to long, or last played first. */
export function sortSongs(songs: readonly CatalogSong[], sort: Sort, facts: SortFacts): CatalogSong[] {
  if (sort === "suggested") return [...songs];
  const rank = (song: CatalogSong) => (song.rarity === undefined ? RARITIES.length : RARITIES.indexOf(song.rarity));
  const byText = collator(liveLocale());
  const name = (song: CatalogSong) => foldText(song.rarity === undefined ? song.title : (song.piece ?? song.title));
  /** Compares two values that may be unknown: a known one first, then by `order`. */
  const known = (a: number | undefined, b: number | undefined, order: 1 | -1) =>
    a === undefined || b === undefined ? Number(a === undefined) - Number(b === undefined) : (a - b) * order;
  const compare: Record<Exclude<Sort, "suggested">, (a: CatalogSong, b: CatalogSong) => number> = {
    title: (a, b) => byText.compare(name(a), name(b)) || rank(a) - rank(b),
    difficulty: (a, b) => a.difficulty - b.difficulty,
    length: (a, b) => known(facts.length(a), facts.length(b), 1),
    recent: (a, b) => known(facts.played(a), facts.played(b), -1),
  };
  // Array.prototype.sort is stable, so songs that compare equal keep the order they came in.
  return [...songs].sort(compare[sort]);
}

/** The title the learner reads for `song`: a version of ours names its song and its difficulty. */
export function songTitle(song: CatalogSong): string {
  return song.rarity === undefined ? song.title : `${song.piece ?? song.title}, ${rarityName(song.rarity)}`;
}

/** One song as the explorer shows it: its versions from the easiest, with its original score last. */
export interface SongEntry {
  /** The slug of a song of ours, or the file of any other song. */
  key: string;
  versions: CatalogSong[];
}

/**
 * `songs` as one entry per song, in the order each song first appears. The versions of a song of ours
 * make one entry, from the easiest. The original score they name joins it as its last version.
 */
export function songEntries(songs: readonly CatalogSong[]): SongEntry[] {
  /** The slug of the song of ours each original score belongs to, by the score's file. */
  const owners = new Map<string, string>();
  for (const song of songs) if (song.song !== undefined && song.mythic !== undefined) owners.set(song.mythic, song.song);
  const entries = new Map<string, SongEntry>();
  const originals: CatalogSong[] = [];
  for (const song of songs) {
    if (song.song === undefined && owners.has(song.file)) originals.push(song);
    else {
      const key = song.song ?? song.file;
      const entry = entries.get(key) ?? { key, versions: [] };
      entries.set(key, entry);
      entry.versions.push(song);
    }
  }
  const rank = (song: CatalogSong) => (song.rarity === undefined ? RARITIES.length : RARITIES.indexOf(song.rarity));
  for (const entry of entries.values()) entry.versions.sort((a, b) => rank(a) - rank(b));
  for (const original of originals) entries.get(owners.get(original.file)!)!.versions.push(original);
  return [...entries.values()];
}

/** Whether every note of `song` lies inside `range`. A song of unknown span fits. */
export function fitsRange(song: CatalogSong, range: KeyRange): boolean {
  if (song.low === undefined || song.high === undefined) return true;
  return song.low >= range.first && song.high <= range.last;
}

/**
 * `songs` grouped by collection, then by composer, and each group by piece. The collections come first
 * in the order of `COLLECTIONS`, and the composers and pieces in the order each first appears.
 */
export function groupSongs(songs: readonly CatalogSong[]): SongGroup[] {
  const collections = new Map<Collection, Map<string | null, CatalogSong[]>>(COLLECTIONS.map((id) => [id, new Map()]));
  const composers = new Map<string, Map<string | null, CatalogSong[]>>();
  for (const song of songs) {
    let pieces = song.collection === undefined ? composers.get(song.composer) : collections.get(song.collection);
    if (pieces === undefined) composers.set(song.composer, (pieces = new Map()));
    let list = pieces.get(song.piece);
    if (list === undefined) pieces.set(song.piece, (list = []));
    list.push(song);
  }
  const piecesOf = (pieces: Map<string | null, CatalogSong[]>) => [...pieces].map(([piece, list]) => ({ piece, songs: list }));
  return [
    ...[...collections]
      .filter(([, pieces]) => pieces.size > 0)
      .map(([collection, pieces]) => ({ name: collectionName(collection), collection, pieces: piecesOf(pieces) })),
    ...[...composers].map(([name, pieces]) => ({ name, pieces: piecesOf(pieces) })),
  ];
}
