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
 * `bun tools/dev.ts [--port <n>] [--preview] [--out <dir>]`. The port defaults to 4173, and port 0 takes
 * any free one. The `Local:` line names the port served. The folder
 * built and served defaults to `dist/`. The end-to-end tests serve their own folder, so they never race
 * a dev server over `dist/`.
 */
import { watch } from "node:fs";
import { join, normalize, resolve } from "node:path";
import { build, root } from "./build";

const args = process.argv.slice(2);
const portAt = args.indexOf("--port");
const port = Number(portAt >= 0 ? args[portAt + 1] : 4173);
const preview = args.includes("--preview");
const outAt = args.indexOf("--out");
const outDir = resolve(root, outAt >= 0 ? (args[outAt + 1] ?? "dist") : "dist");

/** The open live-reload streams, each told once per finished rebuild. */
const listeners = new Set<ReadableStreamDefaultController<string>>();

async function rebuild(): Promise<void> {
  const started = performance.now();
  try {
    const result = await build({ outDir, dev: !preview });
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

const server = Bun.serve({
  port,
  async fetch(request) {
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
  },
});

console.log(`Local: http://localhost:${server.port}/${preview ? " (preview of the production build)" : ""}`);
