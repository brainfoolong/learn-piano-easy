/**
 * The end-to-end tests: Playwright drives the production build in Chromium, as a learner's browser would.
 *
 * Each run owns a folder `.agent-tmp/e2e/runs/<id>/` and a free port, so two runs at once never clear
 * each other's traces or share a server. The runner picks both once. Its workers inherit them through
 * `E2E_RUN` and `E2E_PORT`. A run deletes the folders of runs whose process has ended.
 *
 * The web server builds the app into the run's `dist/` and serves it with the service worker, like
 * `bun run preview`. It never reuses a running server, so every run tests the tree as it is.
 * A failed test keeps its trace under the run's `results/` until the next run starts.
 * Test files are `e2e/*.e2e.ts`, a name `bun test` never picks up. Decision 0001 says why Playwright.
 *
 * On Windows, Chromium draws WebGL on the GPU through Direct3D, and `WINDOWS_WORKERS` browsers run at
 * once. Elsewhere, such as in CI's image, it draws in software, and one browser runs at a time. Every
 * test may run on any worker, so a test never relies on another's state. Decision 0006 says why.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, rmSync } from "node:fs";
import { defineConfig, devices } from "@playwright/test";

const runs = ".agent-tmp/e2e/runs";

/** Whether the process `pid` still runs. */
function alive(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return (error as NodeJS.ErrnoException).code === "EPERM";
  }
}

/** A port no process listens on, which the OS hands out and frees again. */
function freePort(): number {
  const script =
    "const s=require('net').createServer().listen(0,()=>{console.log(s.address().port);s.close()})";
  return Number(execFileSync(process.execPath, ["-e", script], { encoding: "utf8" }).trim());
}

if (process.env.E2E_RUN === undefined) {
  process.env.E2E_RUN = String(process.pid);
  process.env.E2E_PORT = String(freePort());
  let entries: string[] = [];
  try {
    entries = readdirSync(runs);
  } catch {
    // No run has written a folder yet.
  }
  for (const entry of entries) {
    const pid = Number(entry);
    if (pid !== process.pid && !(Number.isInteger(pid) && alive(pid))) {
      rmSync(`${runs}/${entry}`, { recursive: true, force: true });
    }
  }
}

const run = `${runs}/${process.env.E2E_RUN}`;
const port = Number(process.env.E2E_PORT);

/** Whether Chromium draws WebGL on the GPU, which it does on Windows through Direct3D. */
const gpu = process.platform === "win32";

/** The browsers a Windows run drives at once. `--workers` on the command line overrides it. */
const WINDOWS_WORKERS = 4;

export default defineConfig({
  testDir: "e2e",
  testMatch: "**/*.e2e.ts",
  outputDir: `${run}/results`,
  // Software WebGL starves parallel browsers past the load timeout, so only the GPU runs several.
  workers: gpu ? WINDOWS_WORKERS : 1,
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  reporter: [["list"], ["./e2e/pass-reporter.ts"]],
  use: {
    baseURL: `http://localhost:${port}/`,
    trace: "retain-on-failure",
    launchOptions: gpu ? { args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist"] } : {},
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `bun tools/dev.ts --preview --port ${port} --out ${run}/dist --no-tls`,
    url: `http://localhost:${port}/`,
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
