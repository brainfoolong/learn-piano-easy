/**
 * The song catalog: `public/songs/catalog.json`, one row per song file under `public/songs/`. The tools
 * that write songs read and write it through this module.
 *
 * Decisions, and what each costs:
 * - The catalog's `piece` is the work a song belongs to, or `null` for a song that stands alone.
 * - The difficulty runs from 1 to 10 in half steps.
 * - Every row carries its `license` and its `credit`, so the library can show both without reading
 *   a license file.
 * - Each song's `low` and `high` are its lowest and highest note, read from its file by `songSpan`. The
 *   library then tells which songs fit a keyboard without parsing any file.
 * - Each song's `seconds` is its length to the end of its last note, read by `withSpan` too. The
 *   explorer then sorts by length and shows it on a card without fetching any file.
 *
 * `bun tools/catalog.ts` rewrites the spans and lengths of the catalog from the files in the tree. It
 * needs no network, and the app never runs it.
 */
import { join } from "node:path";

import { songSpan } from "../src/keyboard/song-fit";
import type { Rarity } from "../src/library/guide";
import type { Collection } from "../src/library/search";
import type { SkillId } from "../src/library/skills";
import { readMidi } from "../src/midi/smf-read";
import { songFromMidi, songLength } from "../src/midi/song";
import { root } from "./build";

/** One song of our catalog. `file` is relative to `public/songs/`. */
export interface CatalogSong {
  composer: string;
  piece: string | null;
  title: string;
  file: string;
  /** From 1, the easiest, to 10. */
  difficulty: number;
  /** The license of the song's file, such as `CC BY-SA 3.0 DE` or `Public Domain`. */
  license: string;
  /** Who the license asks to be credited, or who made the file. */
  credit: string;
  /** The song's lowest note, as a MIDI note number. */
  low: number;
  /** The song's highest note, as a MIDI note number. */
  high: number;
  /** The song's length in whole seconds, to the end of its last note. */
  seconds: number;
  /** The slug of the song of ours this row is a version of, or none for any other song. */
  song?: string;
  /** The rarity of the version, beside `song`. */
  rarity?: Rarity;
  /** The skills the version teaches, as its guide names them, beside `song`. */
  skills?: SkillId[];
  /** The catalog file of the song's original score, beside `song` when it has one. */
  mythic?: string;
  /** The collection the song belongs to, beside `song`. */
  collection?: Collection;
  /** The song's other titles, beside `song`. */
  aka?: string[];
}

/** A catalog song before its file is read, so before its span and its length are known. */
export type ListedSong = Omit<CatalogSong, "low" | "high" | "seconds">;

/** The folder of every song and of the catalog. */
export const songsDir = join(root, "public", "songs");

/** `song` with the span and the length of the MIDI file `bytes`, which must hold at least one note. */
export function withSpan(song: ListedSong, bytes: Uint8Array): CatalogSong {
  const read = songFromMidi(readMidi(bytes));
  const span = songSpan(read);
  if (!span) throw new Error(`${song.file} has no notes`);
  return { ...song, low: span.low, high: span.high, seconds: Math.round(songLength(read)) };
}

/** The catalog in the tree, or an empty list before one is written. */
export async function readCatalog(): Promise<CatalogSong[]> {
  const file = Bun.file(join(songsDir, "catalog.json"));
  return (await file.exists()) ? ((await file.json()) as CatalogSong[]) : [];
}

/** Writes `catalog` as the catalog in the tree. */
export async function writeCatalog(catalog: CatalogSong[]): Promise<void> {
  await Bun.write(join(songsDir, "catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`);
}

/** Rewrites the span and the length of every song in the catalog from its file in the tree. Returns the catalog. */
export async function respanCatalog(): Promise<CatalogSong[]> {
  const listed = (await Bun.file(join(songsDir, "catalog.json")).json()) as ListedSong[];
  const catalog: CatalogSong[] = [];
  for (const song of listed) {
    catalog.push(withSpan(song, new Uint8Array(await Bun.file(join(songsDir, song.file)).arrayBuffer())));
  }
  await writeCatalog(catalog);
  return catalog;
}

if (import.meta.main) {
  const catalog = await respanCatalog();
  console.log(`${catalog.length} songs in public/songs/catalog.json`);
}
