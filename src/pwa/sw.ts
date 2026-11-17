/**
 * The service worker: serves the app offline.
 *
 * - **The shell** is the core and the parts of `cache-groups.ts`, as `tools/build.ts` lists them, in
 *   one cache named by the build's version. The install fills the core, and every part the page marked
 *   in the parts cache. Of each it fills the language-neutral files and the subsets of the locales the
 *   page marked, English always among them. It copies each file whose bytes a shell cache already holds,
 *   and fetches only the rest. A part or a locale no page marked is never fetched here: the page fills it
 *   when the learner first opens it.
 * - **Every shell file is served cache-first,** the core's and the parts' alike, and from the network
 *   when the cache misses it. A navigation gets its route's page, so every route of the site reloads
 *   offline. A route whose page the cache misses, such as a lesson while learn is not saved or a page of a
 *   locale not saved, and an unknown path get the root page. The site reads the address, and shows the route or the landing page of the
 *   path's locale. A request for a byte range, as a video makes, gets that range of the cached file
 *   through `ranged.ts`.
 * - **Songs and sounds** are cached on first use into one content cache that outlives versions. After
 *   an update, the cache manager fetches again only the cached files whose bytes changed. It can also
 *   fill or empty either group at once.
 * - **A file no cache group holds passes to the network,** such as a source map, `robots.txt` or a
 *   social picture. A tab that opens one gets the file, never the root page.
 * - **A request with cache mode `reload` passes to the network.** The cache manager and `parts.ts` fetch
 *   that way, so they store a fresh copy rather than the cached one.
 * - **An update waits.** A new worker installs beside the old one, the page offers a reload, and the
 *   page's `skip-waiting` message activates it. Activation drops every older shell cache.
 * - **An install tells every page how far it has come,** as an `InstallProgress` message: the files and
 *   bytes done, and in total. A page that waits for the newest version shows it as a bar. A copied file
 *   counts as done at once. The message goes out at most every `PROGRESS_EVERY` milliseconds, and once
 *   at the end.
 *
 * Paths are resolved against the worker's scope, so the app works at a domain root or under a sub-path.
 */

/** The parts of the service worker scope this file uses. The DOM lib does not declare them. */
interface ExtendableEvent extends Event {
  waitUntil(promise: Promise<unknown>): void;
}
interface FetchEvent extends ExtendableEvent {
  readonly request: Request;
  respondWith(response: Promise<Response> | Response): void;
}
interface WorkerScope {
  readonly registration: { readonly scope: string };
  readonly clients: {
    claim(): Promise<void>;
    matchAll(options: { includeUncontrolled: boolean; type: "window" }): Promise<readonly { postMessage(message: unknown): void }[]>;
  };
  skipWaiting(): Promise<void>;
  addEventListener(type: "install" | "activate", listener: (event: ExtendableEvent) => void): void;
  addEventListener(type: "fetch", listener: (event: FetchEvent) => void): void;
  addEventListener(type: "message", listener: (event: MessageEvent) => void): void;
}

import { CONTENT_CACHE, groupOf, inShell, INSTALL_PROGRESS, markedIn, PARTS_CACHE, shellCacheName, type InstallProgress, type ShellGroupId } from "./cache-groups";
import { inParallel, isCurrent } from "./current";
import { ranged } from "./ranged";

/**
 * Each shell group's file URLs, relative to the scope, each with its content hash, its bytes and its
 * locale, `""` for a language-neutral file.
 */
declare const __SHELL__: Record<ShellGroupId, Record<string, [hash: string, bytes: number, locale: string]>>;
declare const __VERSION__: string;

/** The fewest milliseconds between two progress messages of an install. */
const PROGRESS_EVERY = 100;

/**
 * How many shell files the install checks or fetches at once. A first visit fetches the whole core, and
 * a host speaks HTTP/2, so many requests share one connection. The page has loaded by then.
 */
const PARALLEL = 24;

const worker = globalThis as unknown as WorkerScope;
const SHELL_CACHE = shellCacheName(__VERSION__);
const scope = new URL(worker.registration.scope);

/**
 * The files this install fills: the core's, and those of each part the page marked. Of each, it takes
 * the language-neutral files and those of the marked locales, English always among them.
 */
async function installFiles(): Promise<[string, [string, number, string]][]> {
  const marks = await caches.open(PARTS_CACHE);
  const { parts, locales } = markedIn((await marks.keys()).map((request) => request.url), scope.href);
  const groups: ShellGroupId[] = ["app", ...parts];
  const kept = new Set<string>(["", ...locales]);
  return groups.flatMap((group) => Object.entries(__SHELL__[group]).filter(([, [, , locale]]) => kept.has(locale)));
}

/** Posts `progress` to every page of the scope, controlled or not. */
async function tell(progress: InstallProgress): Promise<void> {
  for (const client of await worker.clients.matchAll({ includeUncontrolled: true, type: "window" })) client.postMessage(progress);
}

/**
 * Fills this version's shell cache. A file that a shell cache already holds with the same bytes is
 * copied, from an older version or from an install that was cut short. Only the other files are
 * fetched, each checked with the server. A host lets the browser keep a file for minutes, and a file
 * such as `app.js` keeps its name across versions, so an unchecked copy could be the old version's.
 * One failed fetch fails the install, and the next visit tries again.
 */
async function installShell(): Promise<void> {
  const cache = await caches.open(SHELL_CACHE);
  const older = (await caches.keys()).filter((name) => name.startsWith("shell-") && name !== SHELL_CACHE);
  const sources = [cache, ...(await Promise.all(older.map((name) => caches.open(name))))];
  const files = await installFiles();
  const progress: InstallProgress = { type: INSTALL_PROGRESS, files: 0, totalFiles: files.length, bytes: 0, totalBytes: 0 };
  for (const [, [, bytes]] of files) progress.totalBytes += bytes;
  let told = 0;
  const done = (bytes: number) => {
    progress.files++;
    progress.bytes += bytes;
    if (Date.now() - told < PROGRESS_EVERY) return;
    told = Date.now();
    void tell({ ...progress });
  };
  await inParallel(files, PARALLEL, async ([path, [hash, bytes]]) => {
    const url = new URL(path, scope).href;
    for (const [i, source] of sources.entries()) {
      const hit = await source.match(url);
      if (hit === undefined || !(await isCurrent(hit, hash))) continue;
      if (i > 0) await cache.put(url, hit);
      done(bytes);
      return;
    }
    const response = await fetch(new Request(url, { cache: "no-cache" }));
    if (!response.ok) throw new Error(`The shell file ${path} answered ${response.status}.`);
    await cache.put(url, response);
    done(bytes);
  });
  await tell({ ...progress });
}

worker.addEventListener("install", (event) => {
  event.waitUntil(installShell());
});

worker.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const name of await caches.keys()) {
        if (name.startsWith("shell-") && name !== SHELL_CACHE) await caches.delete(name);
      }
      await worker.clients.claim();
    })(),
  );
});

worker.addEventListener("message", (event) => {
  if (event.data === "skip-waiting") void worker.skipWaiting();
});

async function fromContent(request: Request): Promise<Response> {
  const cache = await caches.open(CONTENT_CACHE);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok) await cache.put(request, response.clone());
  return response;
}

/**
 * The root page with its `<base>` set to the scope's absolute URL, so it boots at any depth. The site
 * then reads the address, and shows the landing page of the address's locale.
 */
async function rootPage(cache: Cache): Promise<Response | undefined> {
  const page = await cache.match(new URL("./", scope).href);
  if (page === undefined) return undefined;
  const html = (await page.text()).replace(/<base href="[^"]*"/, `<base href="${scope.href}"`);
  return new Response(html, { headers: page.headers });
}

/**
 * A shell file, cache-first. A navigation, and any request for a folder's address such as `de/`, is
 * answered with the folder's `index.html`, such as `de/play/index.html`. Where the cache holds no page
 * for a navigation, the root page answers. Its `<base>` is rewritten, since the page's own `./` would
 * resolve from the folder of the address.
 */
async function fromShell(request: Request, navigate: boolean): Promise<Response> {
  const cache = await caches.open(SHELL_CACHE);
  const url = new URL(request.url);
  const folder = url.pathname.endsWith("/");
  if (!navigate && !folder) {
    const file = await cache.match(request);
    return file ? ranged(request, file) : fetch(request);
  }
  // The page is looked up by its exact URL, without the query. `ignoreSearch` would walk every entry
  // of the cache instead, which costs seconds when the browser has not touched the cache for hours.
  url.search = "";
  const page = folder ? new URL("index.html", url).href : url.href;
  const hit = (await cache.match(page)) ?? (navigate ? await rootPage(cache) : undefined);
  return hit ?? fetch(request);
}

worker.addEventListener("fetch", (event) => {
  const { request } = event;
  // The cache manager fetches fresh copies with cache mode `reload`, so those go to the network.
  if (request.method !== "GET" || request.cache === "reload") return;
  const url = new URL(request.url);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  const group = groupOf(decodeURIComponent(url.pathname.slice(scope.pathname.length)));
  // A file no group holds, such as `sitemap.xml`, is never cached and never a route, so the network
  // answers it. A tab that opens it then shows the file, not the root page.
  if (group === undefined) return;
  event.respondWith(inShell(group) ? fromShell(request, request.mode === "navigate") : fromContent(request));
});

export {};
