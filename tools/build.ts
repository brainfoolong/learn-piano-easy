/**
 * The build: turns `src/` and `public/` into the static app in `dist/`.
 *
 * It bundles the site of `src/main.ts` through `bundlePage` into `app.js` and `app.css`, whose
 * stylesheet joins the CSS its script imports. It bundles the MIDI parse worker into `parse-worker.js`,
 * copies `public/` as it is, and copies every license text into `licenses/`.
 *
 * It then writes one page for every route in every locale of `src/site/routes.ts`, each from the
 * template `public/index.html` through `renderPage`. Every page boots the same bundle. Its `<base>` is
 * the path back to the site's root, so its own links stay `./`. Last, it writes the index of the cache groups, and
 * bundles the service worker `src/pwa/sw.ts` into `sw.js` with the list of shell files and the version
 * written in.
 *
 * `src/pwa/cache-groups.ts` owns which file joins which group. The shell is the app group, and the
 * worker precaches it. The version hashes the shell's contents and every grouped file's path and size.
 * It names the worker's cache, so a change to a shell file, or a song or sound added, removed or resized,
 * makes the next visit fetch the new shell once. The index, `cache-groups.json`, joins the shell but not
 * the hash, because it holds the version. Its byte counts leave out the index itself.
 *
 * `bun tools/build.ts [--dev] [--out <dir>] [--site-url <url>]`. `--dev` skips minifying and turns on
 * live reload. `--site-url` names where the site is hosted, and only then does a page carry canonical,
 * `hreflang`, `og:url` and `og:image` links, so a local build names no domain. A social site reads
 * only an absolute `og:image`, so a local build carries none.
 */
import { createHash } from "node:crypto";
import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { GROUP_INDEX, groupIndex, groupOf } from "../src/pwa/cache-groups";
import { DEFAULT_LOCALE, LOCALES, messagesOf } from "../src/i18n/locale";
import { allPages, lessonPages, pageOf, pageTitle, SOCIAL_IMAGE_SIZE, socialImageOf, type Page } from "../src/site/routes";

/** The repository root, from which every path of the build is resolved. */
export const root = resolve(import.meta.dir, "..");

export interface BuildOptions {
  /** The folder the app is written to. It is emptied first. */
  outDir: string;
  /** A development build: not minified, with live reload. */
  dev: boolean;
  /** Where the site is hosted, such as `https://example.org/piano/`. Without it, no page names a domain. */
  siteUrl?: string | undefined;
}

export interface BuildResult {
  /** Every file written, relative to `outDir`, with `/` separators. */
  files: string[];
  /** The shell files the service worker precaches. */
  shell: string[];
  /** The content hash of the shell, which names the worker's cache. */
  version: string;
}

/** Every file under `dir`, relative to it, with `/` separators. */
export async function listFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  return entries
    .filter((e) => e.isFile())
    .map((e) => relative(dir, join(e.parentPath, e.name)).split(sep).join("/"))
    .sort();
}

/** Throws with every log line of a failed `Bun.build`. */
function check(result: Awaited<ReturnType<typeof Bun.build>>, what: string): void {
  if (result.success) return;
  const lines = result.logs.map((l) => String(l)).join("\n");
  throw new Error(`The ${what} bundle failed to build:\n${lines}`);
}

/**
 * The URLs a page's stylesheet leaves as they are. They point at files `public/` ships, which the
 * bundler cannot resolve from the CSS's source folder.
 */
export const PAGE_EXTERNAL = ["./fonts/*"];

/**
 * Bundles a page of the site from its entry script into `<name>.js`, with `<name>.css` beside it.
 *
 * Bun's bundler joins every CSS file the script imports into that one stylesheet, in import order, and
 * keeps the cascade layers. Code splitting is on, so each `import()` of the script becomes a
 * `chunk-<hash>.js` that loads on its first call. The player is one, so a page without it loads no
 * three.js and no audio. Returns the paths it wrote, relative to `outDir`.
 */
export async function bundlePage(entry: string, name: string, outDir: string, dev: boolean): Promise<string[]> {
  const result = await Bun.build({
    entrypoints: [join(root, entry)],
    outdir: outDir,
    naming: { entry: `${name}.[ext]`, chunk: "chunk-[hash].[ext]", asset: "asset-[hash].[ext]" },
    target: "browser",
    splitting: true,
    minify: !dev,
    sourcemap: "linked",
    define: { __DEV__: JSON.stringify(dev) },
    external: PAGE_EXTERNAL,
  });
  check(result, name);
  return result.outputs.map((o) => relative(outDir, o.path).split(sep).join("/")).sort();
}

/** `text` safe inside an HTML attribute or element. */
function escapeHtml(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

/** The head lines a page adds to the template's: search engines' hints. */
function headLines(page: Page, siteUrl: string | undefined): string[] {
  const lines: string[] = [];
  if (page.route.hidden) lines.push(`<meta name="robots" content="noindex" />`);
  if (siteUrl !== undefined && !page.route.hidden) {
    const site = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
    lines.push(`<link rel="canonical" href="${escapeHtml(site + page.path)}" />`);
    lines.push(`<meta property="og:url" content="${escapeHtml(site + page.path)}" />`);
    for (const locale of LOCALES) {
      lines.push(`<link rel="alternate" hreflang="${locale}" href="${escapeHtml(site + pageOf(page.route, locale).path)}" />`);
    }
    lines.push(`<link rel="alternate" hreflang="x-default" href="${escapeHtml(site + pageOf(page.route, DEFAULT_LOCALE).path)}" />`);
    // The social picture's text is the site's name and the hero's lead, so they are its alt text too.
    const messages = messagesOf(page.locale);
    lines.push(`<meta property="og:image" content="${escapeHtml(site + socialImageOf(page.locale))}" />`);
    lines.push(`<meta property="og:image:width" content="${SOCIAL_IMAGE_SIZE.width}" />`);
    lines.push(`<meta property="og:image:height" content="${SOCIAL_IMAGE_SIZE.height}" />`);
    lines.push(`<meta property="og:image:alt" content="${escapeHtml(`${messages.siteName}: ${messages.landing.hero.lead}`)}" />`);
    lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
  }
  return lines;
}

/** The HTML of `page`, from the page template with its placeholders filled. */
export function renderPage(template: string, page: Page, siteUrl?: string): string {
  const messages = messagesOf(page.locale);
  const { description } = messages.pages[page.route.id];
  const values: Record<string, string> = {
    lang: page.locale,
    title: escapeHtml(pageTitle(page)),
    description: escapeHtml(description),
    base: page.base,
    head: headLines(page, siteUrl)
      .map((line) => `\n    ${line}`)
      .join(""),
    noscript: escapeHtml(messages.noscript),
  };
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = values[key];
    if (value === undefined) throw new Error(`The page template names an unknown placeholder {{${key}}}.`);
    return value;
  });
}

/** Writes every route's page in every locale into `outDir` from the template `public/index.html`. */
async function writePages(outDir: string, siteUrl: string | undefined): Promise<void> {
  const template = await Bun.file(join(root, "public/index.html")).text();
  for (const page of [...allPages(), ...(await lessonPages())]) {
    const file = join(outDir, page.file);
    await mkdir(dirname(file), { recursive: true });
    await Bun.write(file, renderPage(template, page, siteUrl));
  }
}

/** Copies our license, the notices, each runtime dependency's license and the icons' into `licenses/`. */
async function copyLicenses(outDir: string): Promise<void> {
  const dir = join(outDir, "licenses");
  await mkdir(dir, { recursive: true });
  await cp(join(root, "LICENSE"), join(dir, "LICENSE.txt"));
  await cp(join(root, "THIRD-PARTY-NOTICES.md"), join(dir, "THIRD-PARTY-NOTICES.md"));
  await cp(join(root, "src/ui/icons/LICENSE.md"), join(dir, "lucide-LICENSE.md"));
  for (const dep of await runtimeDependencies()) {
    const text = join(root, "node_modules", dep, "LICENSE");
    if (!(await Bun.file(text).exists())) throw new Error(`The dependency ${dep} has no LICENSE file to copy.`);
    await cp(text, join(dir, `${dep.replace("/", "-")}-LICENSE.txt`));
  }
}

/** The names of the packages the app ships, from `package.json`'s `dependencies`. */
export async function runtimeDependencies(): Promise<string[]> {
  const pkg = (await Bun.file(join(root, "package.json")).json()) as { dependencies?: Record<string, string> };
  return Object.keys(pkg.dependencies ?? {}).sort();
}

export async function build(options: BuildOptions): Promise<BuildResult> {
  const { outDir, dev } = options;
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const define = { __DEV__: JSON.stringify(dev) };
  // The stylesheet sits at the app's root, because its font URLs are relative to `fonts/`.
  await bundlePage("src/main.ts", "app", outDir, dev);

  const parser = await Bun.build({
    entrypoints: [join(root, "src/midi/parse-worker.ts")],
    outdir: outDir,
    naming: { entry: "parse-worker.[ext]" },
    target: "browser",
    minify: !dev,
    sourcemap: "linked",
    define,
  });
  check(parser, "parse worker");

  await cp(join(root, "public"), outDir, { recursive: true });
  await writePages(outDir, options.siteUrl);
  await copyLicenses(outDir);

  const files = await Promise.all((await listFiles(outDir)).map(async (path) => ({ path, bytes: Bun.file(join(outDir, path)).size })));
  const hash = createHash("sha256");
  for (const { path, bytes } of files) {
    const group = groupOf(path);
    if (group === undefined) continue;
    hash.update(`${path}\0${bytes}\0`);
    if (group === "app") hash.update(new Uint8Array(await Bun.file(join(outDir, path)).arrayBuffer()));
  }
  const version = hash.digest("hex").slice(0, 16);
  await Bun.write(join(outDir, GROUP_INDEX), JSON.stringify(groupIndex(version, files)));
  const shell = [...files.filter((f) => groupOf(f.path) === "app").map((f) => f.path), GROUP_INDEX].sort();

  const worker = await Bun.build({
    entrypoints: [join(root, "src/pwa/sw.ts")],
    outdir: outDir,
    naming: { entry: "sw.[ext]" },
    target: "browser",
    minify: !dev,
    define: {
      ...define,
      __SHELL__: JSON.stringify(["./", ...shell.map((f) => `./${f}`)]),
      __VERSION__: JSON.stringify(version),
    },
  });
  check(worker, "service worker");

  return { files: await listFiles(outDir), shell, version };
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  const outAt = args.indexOf("--out");
  const outDir = resolve(root, outAt >= 0 ? (args[outAt + 1] ?? "dist") : "dist");
  const started = performance.now();
  const siteAt = args.indexOf("--site-url");
  const siteUrl = siteAt >= 0 ? args[siteAt + 1] : undefined;
  const result = await build({ outDir, dev: args.includes("--dev"), siteUrl });
  const ms = Math.round(performance.now() - started);
  console.log(`built ${result.files.length} files into ${relative(root, outDir)} in ${ms} ms, shell ${result.version}`);
}
