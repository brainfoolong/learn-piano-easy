/**
 * The tags of a song: what the song explorer filters by, derived from the catalog as the app runs.
 *
 * A tag is a kind and an id, written as one key such as `collection:christmas`. No song file names a
 * tag. Each comes from what the catalog row already holds, from the song's guide, or from what the
 * learner did with the song.
 *
 * Decisions, and what each costs:
 * - The kinds are fixed in `TAG_KINDS`, in the order the explorer shows them. A new kind is one entry
 *   here, its name in each catalog and its hue in `library-panel.css`.
 * - Tags of one kind widen the result and kinds narrow it. A song passes when it carries one chosen tag
 *   of every kind that has a chosen tag, so "Christmas" and "Easy" together keep the easy carols.
 * - The level is a band of the catalog's difficulty, and the only form of it the learner reads. The
 *   number stays inside the app, where it sorts the songs and fills a card's meter.
 * - The first four levels are the bands of the four versions of a song of ours, so a version's name
 *   is its level. The bands above them are wider, since the app teaches a learner's first year.
 * - A composer the catalog spells in two ways is one tag, through `COMPOSER_ALIASES`. A spelling this
 *   table does not know stays a composer of its own.
 * - The style comes from the composer through `COMPOSER_STYLES`, since the catalog names no era. A
 *   composer the table does not know carries no style, which costs that song one way to be found.
 * - The tags of kind `yours` change as the learner plays, so the caller answers them as it filters.
 *   `songTags` returns every other tag, which holds for as long as the catalog and the skills do.
 */
import { t } from "../i18n/live";
import { type CatalogSong, collectionName, COLLECTIONS } from "./search";
import { skillName } from "./skills";

/** The kinds of tag, in the order the explorer shows them. */
export const TAG_KINDS = ["level", "yours", "collection", "style", "skill", "composer"] as const;

/** A kind of tag. */
export type TagKind = (typeof TAG_KINDS)[number];

/** A tag as one key: its kind, a colon and its id. */
export type TagKey = `${TagKind}:${string}`;

/** The level bands, from the easiest. */
export const LEVELS = ["beginner", "easy", "medium", "hard", "advanced", "expert"] as const;

/** A level band. */
export type Level = (typeof LEVELS)[number];

/** The catalog difficulty each level after the first starts at, in the order of `LEVELS`. */
const LEVEL_STARTS = [2, 3, 4, 5, 7] as const;

/** The styles a composer may stand for. */
export const STYLES = ["baroque", "classical", "romantic", "impressionist", "ragtime", "folk", "contemporary"] as const;

/** A style of `STYLES`. */
export type Style = (typeof STYLES)[number];

/** The sets a song may belong to beside the catalog's collections: the beginner path and our own arrangements. */
export const SETS = ["path", "ours"] as const;

/** What the learner did with a song: starred it, played it, or added it as a file. */
export const YOURS = ["favourite", "played", "upload"] as const;

/** The spellings of a composer the catalog uses beside the one the explorer shows. */
const COMPOSER_ALIASES: Readonly<Record<string, string>> = { "Ludwig v. Beethoven": "Ludwig van Beethoven" };

/** The style each composer stands for. */
const COMPOSER_STYLES: Readonly<Record<string, Style>> = {
  "Johann S. Bach": "baroque",
  "George Frideric Handel": "baroque",
  "Johann Pachelbel": "baroque",
  "Wolfgang A. Mozart": "classical",
  "Joseph Haydn": "classical",
  "Muzio Clementi": "classical",
  "Ludwig van Beethoven": "classical",
  "Carl Czerny": "classical",
  "Franz Schubert": "romantic",
  "Frédéric Chopin": "romantic",
  "Robert Schumann": "romantic",
  "Franz Liszt": "romantic",
  "Johannes Brahms": "romantic",
  "Felix Mendelssohn": "romantic",
  "Pjotr I. Tschaikowski": "romantic",
  "Edvard Grieg": "romantic",
  "Friedrich Burgmüller": "romantic",
  "Isaac Albéniz": "romantic",
  "Claude Debussy": "impressionist",
  "Erik Satie": "impressionist",
  "Scott Joplin": "ragtime",
  Traditional: "folk",
  "learn-piano-easy": "contemporary",
};

/** The key of the tag `id` of `kind`. */
export function tagKey(kind: TagKind, id: string): TagKey {
  return `${kind}:${id}`;
}

/** The kind of the tag `key`. */
export function tagKind(key: TagKey): TagKind {
  return key.slice(0, key.indexOf(":")) as TagKind;
}

/** The id of the tag `key`, without its kind. */
export function tagId(key: TagKey): string {
  return key.slice(key.indexOf(":") + 1);
}

/** The level band of the catalog difficulty `difficulty`: below 2, below 3, below 4, below 5, below 7, or above. */
export function levelOf(difficulty: number): Level {
  return LEVELS[LEVEL_STARTS.filter((start) => difficulty >= start).length]!;
}

/** The composer the explorer shows for the catalog's `name`, so two spellings read as one. */
export function composerOf(name: string): string {
  return COMPOSER_ALIASES[name] ?? name;
}

/** The style the composer `name` stands for, or undefined for one the table does not know. */
export function styleOf(name: string): Style | undefined {
  return COMPOSER_STYLES[composerOf(name)];
}

/** What `songTags` reads beside the song's own row. */
export interface TagContext {
  /** The files on the beginner path. */
  path: ReadonlySet<string>;
  /** The skills the version at `file` teaches, once its guide is known. */
  skills(file: string): readonly string[] | undefined;
}

/** The tags `song` carries whatever the learner did, in the order of `TAG_KINDS`. */
export function songTags(song: CatalogSong, context: TagContext): TagKey[] {
  const tags: TagKey[] = [tagKey("level", levelOf(song.difficulty))];
  if (song.collection !== undefined) tags.push(tagKey("collection", song.collection));
  if (context.path.has(song.file)) tags.push(tagKey("collection", "path"));
  if (song.song !== undefined) tags.push(tagKey("collection", "ours"));
  const style = styleOf(song.composer);
  if (style !== undefined) tags.push(tagKey("style", style));
  for (const skill of context.skills(song.file) ?? []) tags.push(tagKey("skill", skill));
  tags.push(tagKey("composer", composerOf(song.composer)));
  return tags;
}

/** The name the learner reads for the tag `key`, in the live locale. */
export function tagName(key: TagKey): string {
  const id = tagId(key);
  const names = t().player.library.panel;
  switch (tagKind(key)) {
    case "level":
      return names.levels[id as Level];
    case "yours":
      return names.yours[id as (typeof YOURS)[number]];
    case "collection":
      return (COLLECTIONS as readonly string[]).includes(id) ? collectionName(id as (typeof COLLECTIONS)[number]) : names.sets[id as (typeof SETS)[number]];
    case "style":
      return names.styles[id as Style];
    case "skill":
      return skillName(id);
    case "composer":
      return id;
  }
}

/**
 * Whether a song passes the chosen tags `chosen`. `has` says whether the song carries a tag. The song
 * passes when it carries one chosen tag of every kind that has a chosen tag.
 */
export function matchesTags(has: (key: TagKey) => boolean, chosen: readonly TagKey[]): boolean {
  const kinds = new Map<TagKind, boolean>();
  for (const key of chosen) {
    const kind = tagKind(key);
    kinds.set(kind, (kinds.get(kind) ?? false) || has(key));
  }
  return [...kinds.values()].every(Boolean);
}
