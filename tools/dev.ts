/**
 * The dev server: builds the app, serves `dist/`, and rebuilds on every change under `src/` or `public/`.
 *
 * A development build carries live reload. The page listens on `/__reload` as an event stream, and each
 * finished rebuild tells it to reload. A failed rebuild prints its errors and keeps the last good build.
 * Changes are gathered for a short moment, so a save of many files rebuilds once.
 *
 * It serves each route's page as its folder's `index.html`, and moves a folder named without its slash
 * to the folder.
 *
 * `--preview` serves a production build without watching, so the app runs locally exactly as it does
 * when hosted, service worker included.
 *
 * The dev server also writes the pages of the pseudo-locales under `en-XA/` and `ar-XB/`. A preview writes them only
 * with `--pseudo`, as the end-to-end tests ask.
 *
 * `bun tools/dev.ts [--port <n>] [--preview] [--pseudo] [--out <dir>] [--no-tls]`. The port defaults to 4173, and
 * port 0 takes any free one. The `Local:` line names the port served. The folder
 * built and served defaults to `dist/`. The end-to-end tests serve their own folder, so they never race
 * a dev server over `dist/`.
 *
 * The server also serves HTTPS when `DEV_TLS_CERT` and `DEV_TLS_KEY` name a certificate and its key.
 * Browsers allow Web MIDI and service workers only over HTTPS or on `localhost`, so another device needs
 * HTTPS to play along. HTTPS listens 1000 above the HTTP port, and the `Network:` line names its URL with
 * the host in `DEV_TLS_HOST`. These variables belong in `.env.local`, which Bun loads and git ignores. A
 * certificate that cannot be read leaves the server on HTTP alone. The end-to-end tests and
 * `tools/shot.ts` pass `--no-tls`.
 */
import { watch } from "node:fs";
import { hostname } from "node:os";
import { join, normalize, resolve } from "node:path";
import { build, root } from "./build";

const args = process.argv.slice(2);
const portAt = args.indexOf("--port");
const port = Number(portAt >= 0 ? args[portAt + 1] : 4173);
const preview = args.includes("--preview");
/** The dev server always writes the pseudo-locale's pages, and a preview only when `--pseudo` asks. */
const pseudo = !preview || args.includes("--pseudo");
const outAt = args.indexOf("--out");
const outDir = resolve(root, outAt >= 0 ? (args[outAt + 1] ?? "dist") : "dist");

/** The certificate and key HTTPS serves, or undefined when HTTPS is off or they cannot be read. */
async function readTls(): Promise<{ cert: string; key: string } | undefined> {
  const certPath = process.env.DEV_TLS_CERT;
  const keyPath = process.env.DEV_TLS_KEY;
  if (args.includes("--no-tls") || !certPath || !keyPath) return undefined;
  try {
    return { cert: await Bun.file(certPath).text(), key: await Bun.file(keyPath).text() };
  } catch (error) {
    console.warn(`HTTPS is off, because the certificate could not be read: ${String(error)}`);
    return undefined;
  }
}

/** The open live-reload streams, each told once per finished rebuild. */
const listeners = new Set<ReadableStreamDefaultController<string>>();

async function rebuild(): Promise<void> {
  const started = performance.now();
  try {
    const result = await build({ outDir, dev: !preview, pseudo });
    console.log(`built ${result.files.length} files in ${Math.round(performance.now() - started)} ms`);
    for (const l of listeners) l.enqueue("data: reload\n\n");
  } catch (error) {
    console.error(String(error));
  }
}

await rebuild();

if (!preview) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let running = Promise.resolve();
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      running = running.then(rebuild);
    }, 80);
  };
  for (const dir of ["src", "public"]) watch(join(root, dir), { recursive: true }, schedule);
}

/** Answers one request on HTTP and on HTTPS alike: the live-reload stream, a built file, or a redirect. */
async function serveFile(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname === "/__reload") {
    let self: ReadableStreamDefaultController<string> | undefined;
    const stream = new ReadableStream<string>({
      start(controller) {
        self = controller;
        listeners.add(controller);
      },
      cancel() {
        if (self) listeners.delete(self);
      },
    });
    return new Response(stream, { headers: { "content-type": "text/event-stream", "cache-control": "no-cache" } });
  }
  const path = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, "");
  let file = Bun.file(join(outDir, path));
  if (!path || path.endsWith("/") || path.endsWith("\\")) file = Bun.file(join(outDir, path, "index.html"));
  if (!join(outDir, path).startsWith(outDir)) return new Response("Not found", { status: 404 });
  if (await file.exists()) return new Response(file, { headers: { "cache-control": "no-cache" } });
  // A route's folder named without its slash moves to it, as a static host does.
  if (path && (await Bun.file(join(outDir, path, "index.html")).exists())) {
    return new Response(null, { status: 301, headers: { location: `${url.pathname}/${url.search}` } });
  }
  return new Response("Not found", { status: 404 });
}

const server = Bun.serve({ port, fetch: serveFile });
console.log(`Local: http://localhost:${server.port}/${preview ? " (preview of the production build)" : ""}`);

const tls = await readTls();
if (tls) {
  try {
    const secure = Bun.serve({ port: (server.port ?? port) + 1000, tls, fetch: serveFile });
    console.log(`Network: https://${process.env.DEV_TLS_HOST || hostname()}:${secure.port}/`);
  } catch (error) {
    console.warn(`HTTPS is off, because its port could not be opened: ${String(error)}`);
  }
}
