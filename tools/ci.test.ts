import { readdir } from "node:fs/promises";
import { join } from "node:path";

import { expect, test } from "../src/testing";
import { root } from "./build";
import { pinnedVersions, playwrightImage } from "./e2e-docker";

const workflows = join(root, ".github", "workflows");

test("ci_playwright_image_matches_the_pinned_version", async () => {
  const { playwright } = await pinnedVersions();
  const ci = await Bun.file(join(workflows, "ci.yml")).text();
  const images = [...ci.matchAll(/mcr\.microsoft\.com\/playwright:\S+/g)].map((m) => m[0]);
  expect(images).toEqual([playwrightImage(playwright)]);
});

test("every_workflow_installs_the_pinned_bun", async () => {
  const { bun } = await pinnedVersions();
  const found: string[] = [];
  for (const name of await readdir(workflows)) {
    const text = await Bun.file(join(workflows, name)).text();
    for (const m of text.matchAll(/bun-version:\s*(\S+)|\bbun@(\d[\w.-]*)/g)) found.push(`${name} ${m[1] ?? m[2]}`);
  }
  expect(found.length).toBeGreaterThan(0);
  expect(found.filter((f) => !f.endsWith(` ${bun}`))).toEqual([]);
});
