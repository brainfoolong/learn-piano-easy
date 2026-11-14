import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { expect, test } from "../testing";
import { LANDING_SONGS } from "../landing/songs";
import { allPages } from "../site/routes";
import { CACHE_GROUPS, groupIndex, groupOf } from "./cache-groups";
const PUBLIC = join(import.meta.dir, "..", "..", "public");

async function publicFiles(): Promise<string[]> {
  const entries = await readdir(PUBLIC, { recursive: true, withFileTypes: true });
  return entries.filter((e) => e.isFile()).map((e) => relative(PUBLIC, join(e.parentPath, e.name)).split(sep).join("/"));
}

test("every_public_file_is_in_one_group", async () => {
  const files = await publicFiles();
  expect(files.length).toBeGreaterThan(200);
  const wrong = files
    .map((path) => ({ path, groups: CACHE_GROUPS.filter((g) => g.holds(path)).map((g) => g.id) }))
    // Only a search or social site fetches a social picture, so it joins no group.
    .filter(({ path, groups }) => groups.length !== (path.startsWith("images/social/") ? 0 : 1));
  expect(wrong).toEqual([]);
  expect(groupOf("index.html")).toBe("app");
  expect(groupOf("songs/catalog.json")).toBe("app");
  expect(groupOf("songs/ours/yankee-doodle/common.mid")).toBe("songs");
  for (const song of LANDING_SONGS) expect(groupOf(song)).toBe("app");
  expect(groupOf("sounds/salamander/acoustic_grand_piano-mp3.json")).toBe("sounds");
});

test("built_files_join_the_app_group_except_maps_the_worker_and_the_crawler_files", () => {
  expect(groupOf("app.js")).toBe("app");
  expect(groupOf("licenses/LICENSE.txt")).toBe("app");
  expect(groupOf("chunk-0a1b2c3d.js")).toBe("app");
  for (const page of allPages()) expect(groupOf(page.file)).toBe("app");
  expect(groupOf("app.js.map")).toBeUndefined();
  expect(groupOf("sw.js")).toBeUndefined();
  expect(groupOf("images/social/en.png")).toBeUndefined();
  expect(groupOf("robots.txt")).toBeUndefined();
  expect(groupOf("sitemap.xml")).toBeUndefined();
});

test("the_index_lists_each_group_with_its_hashes_and_sums_its_bytes", () => {
  const index = groupIndex("v1", [
    { path: "index.html", bytes: 2, hash: "h0" },
    { path: "app.js", bytes: 10, hash: "h1" },
    { path: "app.js.map", bytes: 99, hash: "h2" },
    { path: "songs/catalog.json", bytes: 5, hash: "h3" },
    { path: "songs/a.mid", bytes: 3, hash: "h4" },
    { path: "sounds/x/y.json", bytes: 7, hash: "h5" },
  ]);
  expect(index).toEqual({
    version: "v1",
    groups: {
      app: { files: ["./", "./index.html", "./app.js", "./songs/catalog.json"], hashes: ["h0", "h0", "h1", "h3"], bytes: 17 },
      songs: { files: ["./songs/a.mid"], hashes: ["h4"], bytes: 3 },
      sounds: { files: ["./sounds/x/y.json"], hashes: ["h5"], bytes: 7 },
    },
  });
});