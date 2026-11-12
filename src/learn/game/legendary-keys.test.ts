import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { songKey } from "../../input/history";
import { readMidi } from "../../midi/smf-read";
import { songFromMidi } from "../../midi/song";
import { expect, test } from "../../testing";
import { LEGENDARY_KEYS } from "./legendary-keys";

const ours = resolve(import.meta.dir, "..", "..", "..", "public", "songs", "ours");

test("every_legendary_version_has_its_song_key", async () => {
  const rows: string[] = [];
  for (const slug of readdirSync(ours).sort()) {
    const file = Bun.file(join(ours, slug, "legendary.mid"));
    if (!(await file.exists())) continue;
    const key = songKey(songFromMidi(readMidi(new Uint8Array(await file.arrayBuffer()))));
    rows.push(`  ["${slug}", "${key}"],`);
  }
  const written = [...LEGENDARY_KEYS].map(([slug, key]) => `  ["${slug}", "${key}"],`);
  expect(rows.length).toBeGreaterThan(0);
  // On a failure, the expected side is the list to paste into `legendary-keys.ts`.
  expect(written.join("\n")).toBe(rows.join("\n"));
});
