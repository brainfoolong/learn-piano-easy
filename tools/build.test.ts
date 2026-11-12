import { rm } from "node:fs/promises";
import { join } from "node:path";

import { LANDING_SONGS } from "../src/landing/songs";
import { afterAll, beforeAll, expect, test } from "../src/testing";
import { allPages, pageOf, pageTitle, ROUTES, socialImageOf } from "../src/site/routes";
import { build, renderPage, root, type BuildResult } from "./build";

const outDir = join(root, ".agent-tmp", `build-test-${process.pid}`);
let result: BuildResult;

beforeAll(async () => {
  result = await build({ outDir, dev: false });
}, 60_000);

afterAll(async () => {
  await rm(outDir, { recursive: true, force: true });
});

test("build_writes_page_bundle_and_worker", async () => {
  for (const file of ["index.html", "app.js", "parse-worker.js", "sw.js", "manifest.webmanifest", "app.css"]) {
    expect(result.files).toContain(file);
  }
  const worker = await Bun.file(join(outDir, "sw.js")).text();
  expect(worker).toContain(result.version);
  expect(worker).toContain("./app.js");
  expect(worker).toContain("./parse-worker.js");
  expect(result.shell).not.toContain("app.js.map");
  const assets = result.shell.filter((f) => f.startsWith("songs/") || f.startsWith("sounds/"));
  // The shell holds the song list and the landing page's songs, and no other song or sound.
  expect(assets).toEqual(["songs/catalog.json", ...LANDING_SONGS].sort());
});

test("build_writes_a_page_per_route_and_locale", async () => {
  for (const page of allPages()) {
    expect(result.files).toContain(page.file);
    expect(result.shell).toContain(page.file);
    const html = await Bun.file(join(outDir, page.file)).text();
    expect(html).toContain(`<html lang="${page.locale}">`);
    expect(html).toContain(`<title>${pageTitle(page)}</title>`);
    // The base climbs to the site's root, and every asset resolves from there.
    expect(html).toContain(`<base href="${page.base}" />`);
    expect(html).toContain(`src="./app.js"`);
    expect(html).not.toContain("{{");
    // A local build names no domain.
    expect(html).not.toMatch(/https?:\/\//);
  }
  const template = await Bun.file(join(root, "public/index.html")).text();
  const profile = pageOf(ROUTES.find((r) => r.id === "profile")!, "de");
  const hosted = renderPage(template, profile, "https://example.org/piano");
  expect(hosted).toContain(`<link rel="canonical" href="https://example.org/piano/de/learn/profile/" />`);
  expect(hosted).toContain(`<link rel="alternate" hreflang="en" href="https://example.org/piano/learn/profile/" />`);
  expect(hosted).toContain(`<link rel="alternate" hreflang="x-default" href="https://example.org/piano/learn/profile/" />`);
  // A social site reads only an absolute picture, of the page's own locale.
  expect(hosted).toContain(`<meta property="og:image" content="https://example.org/piano/images/social/de.png" />`);
  expect(hosted).toContain(`<meta name="twitter:card" content="summary_large_image" />`);
  expect(await Bun.file(join(outDir, socialImageOf("de"))).exists()).toBe(true);
  const gallery = renderPage(template, pageOf(ROUTES.find((r) => r.id === "design")!, "en"), "https://example.org/");
  expect(gallery).toContain(`<meta name="robots" content="noindex" />`);
  expect(gallery).not.toContain("canonical");
});

/**
 * The most the landing page may load before its pictures, in bytes over the wire. Its HTML, styles and
 * scripts count gzipped, as a server sends them, and its fonts count as they are, already compressed.
 * The pictures load lazily, so they are left out.
 */
const LANDING_BUDGET_BYTES = 200_000;

/** The scripts that `entry` imports before it runs, itself first, by their paths in the build. */
async function staticScripts(entry: string): Promise<string[]> {
  const seen = new Set<string>();
  const visit = async (file: string) => {
    if (seen.has(file)) return;
    seen.add(file);
    const code = await Bun.file(join(outDir, file)).text();
    // A static import is `from"./x.js"` or `import"./x.js"`. A dynamic `import("./x.js")` loads later.
    for (const match of code.matchAll(/(?:\bfrom|\bimport)\s*["']\.\/([\w.-]+\.js)["']/g)) await visit(match[1]!);
  };
  await visit(entry);
  return [...seen];
}

test("the_landing_page_stays_within_its_byte_budget", async () => {
  const gzipped = async (file: string) => Bun.gzipSync(new Uint8Array(await Bun.file(join(outDir, file)).arrayBuffer())).length;
  const css = await Bun.file(join(outDir, "app.css")).text();
  const fonts = [...new Set([...css.matchAll(/url\(\s*["']?\.\/(fonts\/[^"')]+)/g)].map((m) => m[1]!))];
  const scripts = await staticScripts("app.js");
  for (const page of allPages().filter((p) => p.route.id === "home")) {
    const parts: Record<string, number> = { [page.file]: await gzipped(page.file), "app.css": await gzipped("app.css") };
    for (const script of scripts) parts[script] = await gzipped(script);
    for (const font of fonts) parts[font] = Bun.file(join(outDir, font)).size;
    const total = Object.values(parts).reduce((sum, bytes) => sum + bytes, 0);
    expect({ page: page.file, total, within: total <= LANDING_BUDGET_BYTES, parts }).toMatchObject({ within: true });
  }
});

/**
 * The most a click on a landing piano may add to the landing page's scripts, gzipped. It holds the
 * embed's chunk and every script it imports that the landing page has not loaded already.
 */
const LANDING_PLAYER_BUDGET_BYTES = 200_000;

/** The script in `entry`'s graph, static or dynamic, whose source map holds `source` alone. */
async function chunkOf(entry: string, source: string): Promise<string | undefined> {
  const seen = new Set<string>();
  const queue = [entry];
  for (let file = queue.shift(); file !== undefined; file = queue.shift()) {
    if (seen.has(file)) continue;
    seen.add(file);
    const map = (await Bun.file(join(outDir, `${file}.map`)).json()) as { sources: string[] };
    if (map.sources.length === 1 && map.sources[0]!.endsWith(source)) return file;
    const code = await Bun.file(join(outDir, file)).text();
    for (const match of code.matchAll(/(?:\bfrom|\bimport)\s*\(?\s*["']\.\/([\w.-]+\.js)["']/g)) queue.push(match[1]!);
  }
  return undefined;
}

test("the_landing_player_stays_within_its_byte_budget", async () => {
  const embed = await chunkOf("app.js", "src/app/embed.ts");
  expect(embed).toBeDefined();
  const loaded = new Set(await staticScripts("app.js"));
  const parts: Record<string, number> = {};
  for (const script of await staticScripts(embed!)) {
    if (loaded.has(script)) continue;
    parts[script] = Bun.gzipSync(new Uint8Array(await Bun.file(join(outDir, script)).arrayBuffer())).length;
  }
  const total = Object.values(parts).reduce((sum, bytes) => sum + bytes, 0);
  expect({ total, within: total <= LANDING_PLAYER_BUDGET_BYTES, parts }).toMatchObject({ within: true });
});

test("build_uses_only_relative_urls", async () => {
  const rootAbsolute = /(?:src|href)\s*=\s*["']\/(?!\/)|url\(\s*["']?\/(?!\/)/;
  for (const file of result.files.filter((f) => /\.(html|css)$/.test(f))) {
    expect({ file, rootAbsolute: rootAbsolute.test(await Bun.file(join(outDir, file)).text()) }).toEqual({
      file,
      rootAbsolute: false,
    });
  }
  const manifest = (await Bun.file(join(outDir, "manifest.webmanifest")).json()) as Record<string, unknown>;
  for (const key of ["id", "start_url", "scope"]) expect(String(manifest[key])).toStartWith("./");
  const icons = manifest.icons as { src: string }[];
  for (const icon of icons) expect(icon.src).toStartWith("./");
});
