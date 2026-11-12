/**
 * The cache groups: which files of the build the learner caches together, and the caches that hold them.
 *
 * - **app** is the shell: the page, the code, the styles, the icons, the licenses, the song catalog and
 *   the landing page's songs. The service worker precaches it on install, into a cache named by the
 *   build's version.
 * - **songs** is every other file under `songs/`. The worker caches each on first use.
 * - **sounds** is every file under `sounds/`, cached the same way.
 *
 * Songs and sounds share one content cache that outlives versions, so an update never downloads them
 * again unless the learner asks. Source maps, the worker script and the social pictures belong to no
 * group: only a developer loads a map, the browser keeps the worker itself, and only a search or social
 * site fetches a social picture.
 *
 * The build writes `cache-groups.json` into the shell. It names the version and lists each group's files
 * and bytes, so the cache manager reads sizes without a network call.
 */
import { LANDING_SONGS } from "../landing/songs";

/** A cache group's id. The id of an on-demand group is also its folder. */
export type GroupId = "app" | "songs" | "sounds";

/**
 * A cache group. Its label and description are the catalog's `player.shell.cache.groups`, which the
 * cache manager reads, so the service worker that imports this file carries no texts.
 */
export interface CacheGroup {
  id: GroupId;
  /** Whether a path, relative to the app's root with `/` separators, belongs to this group. */
  holds(path: string): boolean;
}

/** The groups the worker caches on first use, never up front. Each is a top-level folder of `public/`. */
export const ON_DEMAND: readonly GroupId[] = ["songs", "sounds"];

/** The files the build writes beside the groups' files, which no group caches. */
const UNGROUPED = ["sw.js"];

/**
 * The files of an on-demand folder that the shell precaches: the song catalog, and the songs the landing
 * page plays, so it plays offline from the first visit on.
 */
const IN_SHELL: ReadonlySet<string> = new Set(["songs/catalog.json", ...LANDING_SONGS]);

/** The file the build writes with each group's files and bytes. */
export const GROUP_INDEX = "cache-groups.json";

function topFolder(path: string): string {
  return path.split("/")[0] ?? "";
}

/** The folder of the social pictures, which only a search or social site fetches. */
const SOCIAL_FOLDER = "images/social/";

function grouped(path: string): boolean {
  return !path.endsWith(".map") && !UNGROUPED.includes(path) && !path.startsWith(SOCIAL_FOLDER);
}

/** The three groups, in the order the cache manager shows them. */
export const CACHE_GROUPS: readonly CacheGroup[] = [
  {
    id: "app",
    holds: (path) => grouped(path) && (IN_SHELL.has(path) || !ON_DEMAND.includes(topFolder(path) as GroupId)),
  },
  {
    id: "songs",
    holds: (path) => grouped(path) && topFolder(path) === "songs" && !IN_SHELL.has(path),
  },
  {
    id: "sounds",
    holds: (path) => grouped(path) && topFolder(path) === "sounds",
  },
];

/** The group that holds `path`, or `undefined` for a file no group caches. */
export function groupOf(path: string): GroupId | undefined {
  return CACHE_GROUPS.find((group) => group.holds(path))?.id;
}

/** The name of the cache that holds the shell of `version`. */
export function shellCacheName(version: string): string {
  return `shell-${version}`;
}

/** The cache that holds songs and sounds across versions. */
export const CONTENT_CACHE = "content";

/** The cache that holds a group's files. */
export function cacheNameOf(group: GroupId, version: string): string {
  return group === "app" ? shellCacheName(version) : CONTENT_CACHE;
}

/** What `cache-groups.json` holds. */
export interface GroupIndex {
  /** The build's version, which names its shell cache. */
  version: string;
  /** Each group's file URLs, relative to the app's root as `./path`, and their bytes in total. */
  groups: Record<GroupId, { files: string[]; bytes: number }>;
}

/** The index of `files`, each with its size in bytes, for `version`. The app group also holds `./`. */
export function groupIndex(version: string, files: readonly { path: string; bytes: number }[]): GroupIndex {
  const groups: GroupIndex["groups"] = { app: { files: ["./"], bytes: 0 }, songs: { files: [], bytes: 0 }, sounds: { files: [], bytes: 0 } };
  for (const { path, bytes } of files) {
    const id = groupOf(path);
    if (id === undefined) continue;
    groups[id].files.push(`./${path}`);
    groups[id].bytes += bytes;
  }
  return { version, groups };
}
