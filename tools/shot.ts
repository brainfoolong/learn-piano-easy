/**
 * Shows a session the app in a real browser: builds it, drives Chromium through Playwright, saves
 * screenshots, and reports every error the page logged.
 *
 * Without `--base`, it makes a production build into its own folder under `.agent-tmp/shots/`, and
 * serves it on a free port, so sessions running side by side never collide. The build is deleted at the
 * end. The screenshots stay under `.agent-tmp/shots/` for the session to view, and the session deletes
 * them once it is done.
 *
 * The steps run in the order given, and each may repeat. With no `--shot` step, one is taken at the end.
 *
 *   bun tools/shot.ts [options] [steps]
 *   --name <stem>      the screenshots' file name, default `shot`
 *   --base <url>       a running server to open instead, such as `http://localhost:4173/`
 *   --path <path>      the page to open, relative to the app, default `./`
 *   --size <w>x<h>     the viewport, default 1280x800
 *   --mobile           a phone viewport with touch, instead of `--size`
 *   --locale <tag>     the browser's language, such as `en-US`, default the system's
 *   --out <dir>        the folder the screenshots go to, default `.agent-tmp/shots/`
 *   --webp             saves each screenshot as WebP, which the page's own canvas encodes
 *   --full             saves the whole page, not only the viewport
 *   --scheme <name>    switches the page to the `light` or `dark` colour scheme
 *   --wait <ms>        waits, so the scene can move
 *   --click <name>     clicks the button, switch or link with that accessible name, else that text
 *   --press <key>      presses a key, such as `Escape` or `Space`
 *   --eval <js>        runs an expression in the page and prints its result as JSON
 *   --shot [label]     saves a screenshot now, as `<stem>-<label>.png`, or numbered
 *
 * It exits 1 when the page threw or logged an error, so it doubles as a quick check. Chromium comes from
 * `bun run e2e:install`. Decision 0001 covers Playwright.
 */
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { chromium, devices, type Page } from "@playwright/test";
import { root } from "./build";

/** The quality of a WebP screenshot, from 0 to 1. */
const WEBP_QUALITY = 0.8;

type Step ={ kind: "wait" | "click" | "press" | "eval" | "scheme" | "shot"; value: string };

const shotsDir = join(root, ".agent-tmp", "shots");
const args = process.argv.slice(2);
const steps: Step[] = [];
let stem = "shot";
let base: string | undefined;
let path = "./";
let size = { width: 1280, height: 800 };
let mobile = false;
let locale: string | undefined;
let outDir = shotsDir;
let webp = false;
let full = false;

for (let i = 0; i < args.length; i++) {
  const flag = args[i];
  const value = () => {
    const v = args[++i];
    if (v === undefined) throw new Error(`${flag} needs a value.`);
    return v;
  };
  if (flag === "--name") stem = value();
  else if (flag === "--base") base = value();
  else if (flag === "--path") path = value();
  else if (flag === "--mobile") mobile = true;
  else if (flag === "--locale") locale = value();
  else if (flag === "--out") outDir = join(root, value());
  else if (flag === "--webp") webp = true;
  else if (flag === "--full") full = true;
  else if (flag === "--scheme") {
    const scheme = value();
    if (scheme !== "light" && scheme !== "dark") throw new Error("--scheme takes light or dark.");
    steps.push({ kind: "scheme", value: scheme });
  } else if (flag === "--size") {
    const [w, h] = value().split("x").map(Number);
    if (!w || !h) throw new Error("--size takes <width>x<height>, such as 1280x800.");
    size = { width: w, height: h };
  } else if (flag === "--shot") {
    const next = args[i + 1];
    steps.push({ kind: "shot", value: next !== undefined && !next.startsWith("--") ? value() : "" });
  } else if (flag === "--wait" || flag === "--click" || flag === "--press" || flag === "--eval") {
    steps.push({ kind: flag.slice(2) as Step["kind"], value: value() });
  } else throw new Error(`Unknown option ${flag}. The head comment of tools/shot.ts lists them.`);
}
if (!steps.some((s) => s.kind === "shot")) steps.push({ kind: "shot", value: "" });

/** Builds into a folder of this run's own and serves it on a free port. Gives the URL and a stop. */
async function serveBuild(): Promise<{ url: string; stop: () => Promise<void> }> {
  const outDir = join(shotsDir, `dist-${process.pid}`);
  const server = Bun.spawn(["bun", join(root, "tools", "dev.ts"), "--preview", "--port", "0", "--out", outDir, "--no-tls"], {
    cwd: root,
    stdout: "pipe",
    stderr: "pipe",
  });
  const stop = async () => {
    server.kill();
    await server.exited;
    await rm(outDir, { recursive: true, force: true });
  };
  let seen = "";
  const decoder = new TextDecoder();
  const reader = server.stdout.getReader();
  for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
    seen += decoder.decode(chunk.value);
    const local = /Local: (http:\/\/localhost:\d+\/)/.exec(seen);
    if (local === null) continue;
    if (!seen.includes("built ")) {
      const errors = await new Response(server.stderr).text().catch(() => "");
      await stop();
      throw new Error(`The build failed.\n${errors}`);
    }
    reader.releaseLock();
    return { url: local[1] as string, stop };
  }
  await stop();
  throw new Error(`The server ended before it served.\n${await new Response(server.stderr).text()}`);
}

async function runStep(page: Page, step: Step, shots: string[]): Promise<void> {
  if (step.kind === "wait") await page.waitForTimeout(Number(step.value));
  else if (step.kind === "press") await page.keyboard.press(step.value);
  else if (step.kind === "eval") console.log(`eval ${step.value} = ${JSON.stringify(await page.evaluate(step.value))}`);
  else if (step.kind === "scheme") await page.emulateMedia({ colorScheme: step.value as "light" | "dark" });
  else if (step.kind === "click") {
    const name = step.value;
    const byRole = page.getByRole("button", { name }).or(page.getByRole("switch", { name })).or(page.getByRole("link", { name }));
    const target = (await byRole.count()) > 0 ? byRole.first() : page.getByText(name, { exact: true }).first();
    await target.click({ timeout: 5_000 });
  } else {
    const label = step.value || String(shots.length + 1);
    const file = join(outDir, `${stem}-${label}.${webp ? "webp" : "png"}`);
    const png = await page.screenshot({ fullPage: full });
    await mkdir(outDir, { recursive: true });
    await writeFile(file, webp ? await toWebp(page, png) : png);
    shots.push(file);
  }
}

/** The WebP of the PNG `png`, which the page's canvas encodes, since Playwright saves no WebP. */
async function toWebp(page: Page, png: Buffer): Promise<Uint8Array> {
  const base64 = await page.evaluate(async ({ data, quality }) => {
    const image = new Image();
    image.src = `data:image/png;base64,${data}`;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.getContext("2d")!.drawImage(image, 0, 0);
    return canvas.toDataURL("image/webp", quality).split(",")[1]!;
  }, { data: png.toString("base64"), quality: WEBP_QUALITY });
  return Buffer.from(base64, "base64");
}

const served = base === undefined ? await serveBuild() : undefined;
const browser = await chromium.launch();
const problems: string[] = [];
const shots: string[] = [];
try {
  const context = await browser.newContext({ ...(mobile ? devices["Pixel 7"] : { viewport: size }), ...(locale === undefined ? {} : { locale }) });
  const page = await context.newPage();
  page.on("pageerror", (error) => problems.push(`page error: ${error.message}`));
  page.on("console", (message) => {
    // Chromium's GL driver messages come from the screenshot's own read-back, not from the app.
    if (message.text().includes("GL Driver Message")) return;
    if (message.type() === "error" || message.type() === "warning") problems.push(`console ${message.type()}: ${message.text()}`);
  });
  await page.goto(new URL(path, served?.url ?? base).href);
  for (const step of steps) await runStep(page, step, shots);
} finally {
  await browser.close();
  await served?.stop();
}

for (const file of shots) console.log(`shot ${relative(root, file).replaceAll("\\", "/")}`);
for (const problem of problems) console.log(problem);
console.log(problems.some((p) => !p.startsWith("console warning")) ? "the page reported errors" : "no page errors");
process.exit(problems.some((p) => !p.startsWith("console warning")) ? 1 : 0);
