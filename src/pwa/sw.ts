/**
 * The service worker: serves the app offline.
 *
 * - **The shell** is the app cache group of `cache-groups.ts`, as `tools/build.ts` lists it. It is
 *   precached on install into a cache named by the build's version, and served cache-first. The
 *   install copies each file whose bytes it already holds, and fetches only the rest. A navigation gets its route's page, so every route of the site reloads offline. An
 *   unknown path gets the root page, which shows the landing page of the path's locale. A request for
 *   a byte range, as a video makes, gets that range of the cached file through `ranged.ts`.
 * - **Songs and sounds** are cached on first use into one content cache that outlives versions. After
 *   an update, the cache manager fetches again only the cached files whose bytes changed. It can also
 *   fill or empty either group at once.
 * - **A file no cache group holds passes to the network,** such as a source map, `robots.txt` or a
 *   social picture. A tab that opens one gets the file, never the root page.
 * - **A request with cache mode `reload` passes to the network.** The cache manager fetches that way, so
 *   it stores a fresh copy rather than the cached one.
 * - **An update waits.** A new worker installs beside the old one, the page offers a reload, and the
 *   page's `skip-waiting` message activates it. Activation drops every older shell cache.
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
  readonly clients: { claim(): Promise<void> };
  skipWaiting(): Promise<void>;
  addEventListener(type: "install" | "activate", listener: (event: ExtendableEvent) => void): void;
  addEventListener(type: "fetch", listener: (event: FetchEvent) => void): void;
  addEventListener(type: "message", listener: (event: MessageEvent) => void): void;
}

import { CONTENT_CACHE, groupOf, shellCacheName } from "./cache-groups";
import { inParallel, isCurrent } from "./current";
import { ranged } from "./ranged";

/** The shell's file URLs, relative to the scope, each with its content hash. */
declare const __SHELL__: Record<string, string>;
declare const __VERSION__: string;

/**
 * How many shell files the install checks or fetches at once. A first visit fetches the whole shell, and
 * a host speaks HTTP/2, so many requests share one connection. The page has loaded by then.
 */
const PARALLEL = 24;

const worker = globalThis as unknown as WorkerScope;
const SHELL_CACHE = shellCacheName(__VERSION__);
const scope = new URL(worker.registration.scope);

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
  await inParallel(Object.entries(__SHELL__), PARALLEL, async ([path, hash]) => {
    const url = new URL(path, scope).href;
    for (const [i, source] of sources.entries()) {
      const hit = await source.match(url);
      if (hit === undefined || !(await isCurrent(hit, hash))) continue;
      if (i > 0) await cache.put(url, hit);
      return;
    }
    const response = await fetch(new Request(url, { cache: "no-cache" }));
    if (!response.ok) throw new Error(`The shell file ${path} answered ${response.status}.`);
    await cache.put(url, response);
  });
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
 * A shell file, cache-first. A navigation is answered with its route's page, its folder's
 * `index.html`, such as `de/play/index.html`. Where the shell holds no page, the root page answers.
 * Its `<base>` is rewritten, since the page's own `./` would resolve from the unknown folder.
 */
async function fromShell(request: Request, navigate: boolean): Promise<Response> {
  const cache = await caches.open(SHELL_CACHE);
  if (!navigate) {
    const file = await cache.match(request);
    return file ? ranged(request, file) : fetch(request);
  }
  const url = new URL(request.url);
  const page = url.pathname.endsWith("/") ? new URL("index.html", url).href : request.url;
  const hit = (await cache.match(page, { ignoreSearch: true })) ?? (await rootPage(cache));
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
  if (group !== "app") {
    event.respondWith(fromContent(request));
    return;
  }
  event.respondWith(fromShell(request, request.mode === "navigate"));
});

export {};
