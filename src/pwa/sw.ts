/**
 * The service worker: serves the app offline.
 *
 * - **The shell** is the app cache group of `cache-groups.ts`, as `tools/build.ts` lists it. It is
 *   precached on install into a cache named by the build's version, and served cache-first. A
 *   navigation gets its route's page, so every route of the site reloads offline. An unknown path
 *   gets the root page, which shows the landing page of the path's locale. A request for a byte range,
 *   as a video makes, gets that range of the cached file through `ranged.ts`.
 * - **Songs and sounds** are cached on first use into one content cache that outlives versions, so an
 *   update never downloads them again. The cache manager can also fill or empty either group at once.
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
import { ranged } from "./ranged";

declare const __SHELL__: string[];
declare const __VERSION__: string;

const worker = globalThis as unknown as WorkerScope;
const SHELL_CACHE = shellCacheName(__VERSION__);
const scope = new URL(worker.registration.scope);

worker.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(__SHELL__.map((path) => new URL(path, scope).href))),
  );
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
  if (group !== undefined && group !== "app") {
    event.respondWith(fromContent(request));
    return;
  }
  event.respondWith(fromShell(request, request.mode === "navigate"));
});

export {};
