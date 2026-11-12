import { readdir, rm } from "node:fs/promises";
import { join } from "node:path";

import { afterAll, beforeAll, expect, test } from "../src/testing";
import { ON_DEMAND } from "../src/pwa/cache-groups";
import { build, root, runtimeDependencies, type BuildResult } from "./build";

const outDir = join(root, ".agent-tmp", `licenses-test-${process.pid}`);
let result: BuildResult;

beforeAll(async () => {
  result = await build({ outDir, dev: false });
}, 60_000);

afterAll(async () => {
  await rm(outDir, { recursive: true, force: true });
});

/** The asset folders: each folder directly under `public/songs/` and `public/sounds/`. */
async function assetFolders(): Promise<string[]> {
  const folders: string[] = [];
  for (const top of ON_DEMAND) {
    const dir = join(root, "public", top);
    const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const e of entries) if (e.isDirectory()) folders.push(`public/${top}/${e.name}`);
  }
  return folders;
}

test("every_asset_folder_has_a_license_file", async () => {
  const notices = await Bun.file(join(root, "THIRD-PARTY-NOTICES.md")).text();
  for (const folder of await assetFolders()) {
    expect({ folder, license: await Bun.file(join(root, folder, "LICENSE.md")).exists() }).toEqual({
      folder,
      license: true,
    });
    expect({ folder, named: notices.includes(`\`${folder}/\``) }).toEqual({ folder, named: true });
  }
});

test("every_runtime_dependency_is_in_the_notices", async () => {
  const notices = (await Bun.file(join(root, "THIRD-PARTY-NOTICES.md")).text()).toLowerCase();
  const deps = await runtimeDependencies();
  expect(deps).toContain("three");
  for (const dep of deps) {
    const name = dep === "three" ? "three.js" : dep;
    expect({ dep, named: notices.includes(name.toLowerCase()) }).toEqual({ dep, named: true });
  }
});

test("build_copies_every_license_text", async () => {
  expect(result.files).toContain("licenses/LICENSE.txt");
  expect(result.files).toContain("licenses/THIRD-PARTY-NOTICES.md");
  for (const dep of await runtimeDependencies()) {
    expect(result.files).toContain(`licenses/${dep.replace("/", "-")}-LICENSE.txt`);
  }
  const ours = await Bun.file(join(outDir, "licenses/LICENSE.txt")).text();
  expect(ours).toStartWith("MIT License");
});
