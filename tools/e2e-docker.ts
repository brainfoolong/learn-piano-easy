/**
 * Runs the end-to-end tests inside Playwright's Docker image, the same environment CI uses.
 *
 * The image's tag is the pinned `@playwright/test` version, so its Chromium is the one the tests expect.
 * The repository is mounted at `/work`, and Playwright Test runs on the image's Node. Bun, at the version
 * `engines.bun` pins, serves the build. It is installed once into a named volume and reused after.
 *
 * `bun tools/e2e-docker.ts [playwright test arguments]`, such as `-g offline`. Docker must be running.
 */
import { root } from "./build";

/** The pinned versions the image and the Bun install follow. */
export async function pinnedVersions(): Promise<{ playwright: string; bun: string }> {
  const pkg = (await Bun.file(`${root}/package.json`).json()) as {
    devDependencies: Record<string, string>;
    engines: { bun: string };
  };
  const playwright = pkg.devDependencies["@playwright/test"];
  if (playwright === undefined) throw new Error("package.json pins no @playwright/test.");
  return { playwright, bun: pkg.engines.bun };
}

/** The image a Playwright version runs in. CI's e2e job names the same tag. */
export function playwrightImage(version: string): string {
  return `mcr.microsoft.com/playwright:v${version}-noble`;
}

if (import.meta.main) {
  const { playwright, bun } = await pinnedVersions();
  const quoted = process.argv.slice(2).map((a) => `'${a.replaceAll("'", `'\\''`)}'`);
  const script = [
    `test "$(/opt/bun/bin/bun --version 2>/dev/null)" = "${bun}" || npm install --global --silent --prefix /opt/bun bun@${bun}`,
    `export PATH=/opt/bun/bin:$PATH`,
    `node node_modules/@playwright/test/cli.js test ${quoted.join(" ")}`,
  ].join(" && ");
  const run = Bun.spawn(
    [
      "docker", "run", "--rm", "--init", "--ipc=host",
      "-v", `${root.replaceAll("\\", "/")}:/work`,
      "-v", "learn-piano-easy-bun:/opt/bun",
      "-w", "/work",
      playwrightImage(playwright),
      "sh", "-c", script,
    ],
    { stdio: ["inherit", "inherit", "inherit"] },
  );
  process.exit(await run.exited);
}
