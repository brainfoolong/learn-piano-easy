import { join } from "node:path";

import { expect, test } from "../src/testing";
import { root } from "./build";
import { mutopiaLicense, readPieceData } from "./fetch-mutopia";
import { readCatalog } from "./catalog";

/** Our own license, public domain, CC0, and CC BY or CC BY-SA of any version and port. */
const allowed = /^(MIT|Public Domain|CC0 1\.0|CC BY(-SA)? \d\.\d( [A-Z]{2})?)$/;

test("every_catalog_song_has_an_allowed_license", async () => {
  const catalog = await readCatalog();
  expect(catalog.length).toBeGreaterThan(0);
  for (const song of catalog) {
    expect({ file: song.file, license: allowed.test(song.license), credit: (song.credit ?? "").trim() !== "" }).toEqual({
      file: song.file,
      license: true,
      credit: true,
    });
  }
});

test("every_song_folder_is_in_the_notices", async () => {
  const notices = await Bun.file(join(root, "THIRD-PARTY-NOTICES.md")).text();
  const catalog = await readCatalog();
  const folders = new Set(catalog.map((song) => song.file.split("/")[0]!));
  for (const folder of folders) {
    const licenseFile = Bun.file(join(root, "public", "songs", folder, "LICENSE.md"));
    expect({ folder, license: await licenseFile.exists(), named: notices.includes(`\`public/songs/${folder}/\``) }).toEqual({
      folder,
      license: true,
      named: true,
    });
  }
  const mutopia = await Bun.file(join(root, "public", "songs", "mutopia", "LICENSE.md")).text();
  for (const song of catalog.filter((s) => s.file.startsWith("mutopia/"))) {
    const row = `| \`${song.file.slice("mutopia/".length)}\` |`;
    expect({ file: song.file, listed: mutopia.includes(row) && mutopia.includes(song.credit) }).toEqual({ file: song.file, listed: true });
  }
});

test("mutopia_licenses_outside_the_allowed_set_are_refused", () => {
  expect(mutopiaLicense("Public Domain")).toBe("Public Domain");
  expect(mutopiaLicense("Creative Commons Attribution 3.0")).toBe("CC BY 3.0");
  expect(mutopiaLicense("Creative Commons Attribution-ShareAlike 4.0")).toBe("CC BY-SA 4.0");
  expect(() => mutopiaLicense("Creative Commons Attribution-NonCommercial 3.0")).toThrow("not allowed");
  expect(() => mutopiaLicense("Creative Commons Attribution-NoDerivs 3.0")).toThrow("not allowed");
  expect(() => mutopiaLicense("")).toThrow("not allowed");
  const rdf = "<mp:title>Menuet</mp:title><mp:licence>Public Domain</mp:licence><mp:midFile>a.mid</mp:midFile>";
  expect(readPieceData(rdf)).toEqual({ title: "Menuet", licence: "Public Domain", maintainer: "", midFile: "a.mid" });
  expect(() => readPieceData("<mp:midFile>a.mid</mp:midFile>")).toThrow("no license");
});
