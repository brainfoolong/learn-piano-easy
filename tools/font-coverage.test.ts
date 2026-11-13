/**
 * The site's one font, Plus Jakarta Sans, must draw every Latin locale whole. A letter it lacks would
 * draw in the fallback face, and a word would then mix two faces.
 *
 * - **The font's characters are read from its `cmap`,** inside the WOFF2 file the site ships. The file
 *   is one Brotli stream after its table directory, and the `cmap` is never transformed.
 * - **A locale's alphabet is its letters beyond a to z and its quotation marks,** as `ALPHABETS` lists.
 * - **Every letter, mark and punctuation sign the locale's texts use is checked too,** in the catalogs,
 *   the lessons and the guides. A symbol such as ♯ or an emoji is left to the system's fonts.
 * - **The other scripts take the system's fonts** through `src/ui/tokens.css`, so they are not checked.
 *   A Latin locale's text in another script, such as the endonym `简体中文` in its language list, is a
 *   whole word of that script, so it draws in one face and is skipped too.
 */
import { brotliDecompressSync } from "node:zlib";
import { join } from "node:path";

import { LOCALE_TABLE, type LanguageCode } from "../src/i18n/locale-table";
import { expect, test } from "../src/testing";
import { loadUnits, type Leaf } from "./i18n";

const FONT = join(import.meta.dir, "..", "public/fonts/plus-jakarta-sans/plus-jakarta-sans.woff2");

/** Each Latin locale's letters beyond a to z, both cases, and the quotation and question marks it writes. */
const ALPHABETS: Partial<Record<LanguageCode, string>> = {
  en: "“”‘’—…",
  de: "äöüÄÖÜß„“‚‘–…",
  es: "áéíóúüñÁÉÍÓÚÜÑ¿¡«»“”–…",
  pt: "áâãàçéêíóôõúüÁÂÃÀÇÉÊÍÓÔÕÚÜ“”–…",
  id: "“”‘’–…",
  fr: "àâæçéèêëîïôœùûüÿÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ«»’–…",
};

/** A letter, mark or punctuation sign of the Latin script, or one every script shares. */
const OWN_SCRIPT = /(?=[\p{Script=Latin}\p{Script=Common}\p{Script=Inherited}])[\p{L}\p{M}\p{P}]/gu;

/** A variable-length number of a WOFF2 table directory, and the offset after it. */
function base128(bytes: Uint8Array, at: number): [number, number] {
  let value = 0;
  for (let i = 0; i < 5; i++) {
    const byte = bytes[at + i]!;
    value = value * 128 + (byte & 0x7f);
    if ((byte & 0x80) === 0) return [value, at + i + 1];
  }
  throw new Error("A WOFF2 number runs past five bytes.");
}

/** The bytes of the `cmap` table of the WOFF2 file `file`. */
function cmapOf(file: Uint8Array): DataView {
  const view = new DataView(file.buffer, file.byteOffset, file.byteLength);
  if (view.getUint32(0) !== 0x774f4632) throw new Error("The font is no WOFF2 file.");
  const tables = view.getUint16(12);
  const compressed = view.getUint32(20);
  let at = 48;
  let offset = 0;
  let cmap: [number, number] | undefined;
  for (let i = 0; i < tables; i++) {
    const flags = file[at++]!;
    const known = flags & 0x3f;
    if (known === 63) at += 4;
    const version = flags >> 6;
    let length: number;
    [length, at] = base128(file, at);
    // glyf and loca are transformed at version 0, and every other table at any version but 0.
    const transformed = known === 10 || known === 11 ? version === 0 : version !== 0;
    if (transformed) [length, at] = base128(file, at);
    if (known === 0) cmap = [offset, length];
    offset += length;
  }
  if (cmap === undefined) throw new Error("The font has no cmap table.");
  const stream = brotliDecompressSync(file.subarray(at, at + compressed));
  return new DataView(stream.buffer, stream.byteOffset + cmap[0], cmap[1]);
}

/** Every code point the `cmap` maps to a glyph, from its Unicode subtable of format 12 or 4. */
function charactersOf(cmap: DataView): Set<number> {
  const out = new Set<number>();
  const records = cmap.getUint16(2);
  const subtables = Array.from({ length: records }, (_, i) => ({
    platform: cmap.getUint16(4 + i * 8),
    encoding: cmap.getUint16(6 + i * 8),
    offset: cmap.getUint32(8 + i * 8),
  }));
  const full = subtables.find((s) => s.platform === 3 && s.encoding === 10) ?? subtables.find((s) => s.platform === 0 && cmap.getUint16(s.offset) === 12);
  if (full !== undefined && cmap.getUint16(full.offset) === 12) {
    const groups = cmap.getUint32(full.offset + 12);
    for (let g = 0; g < groups; g++) {
      const at = full.offset + 16 + g * 12;
      for (let c = cmap.getUint32(at); c <= cmap.getUint32(at + 4); c++) out.add(c);
    }
    return out;
  }
  const basic = subtables.find((s) => s.platform === 3 && s.encoding === 1) ?? subtables.find((s) => s.platform === 0);
  if (basic === undefined || cmap.getUint16(basic.offset) !== 4) throw new Error("The font has no Unicode cmap of format 4 or 12.");
  const base = basic.offset;
  const segments = cmap.getUint16(base + 6) / 2;
  const ends = base + 14;
  const starts = ends + segments * 2 + 2;
  const deltas = starts + segments * 2;
  const ranges = deltas + segments * 2;
  for (let s = 0; s < segments; s++) {
    const start = cmap.getUint16(starts + s * 2);
    const end = cmap.getUint16(ends + s * 2);
    const delta = cmap.getUint16(deltas + s * 2);
    const range = cmap.getUint16(ranges + s * 2);
    for (let c = start; c <= end && c !== 0xffff; c++) {
      const glyph = range === 0 ? (c + delta) & 0xffff : cmap.getUint16(ranges + s * 2 + range + (c - start) * 2);
      if (glyph !== 0) out.add(c);
    }
  }
  return out;
}

/** The texts of a leaf: a string, each item of a list, or a message's source. */
function textsOfLeaf(leaf: Leaf): string[] {
  if (typeof leaf === "string") return [leaf];
  if (typeof leaf === "function") return [leaf.toString()];
  return [...leaf];
}

test("the_latin_font_covers_every_latin_locale", async () => {
  const font = charactersOf(cmapOf(new Uint8Array(await Bun.file(FONT).arrayBuffer())));
  const units = await loadUnits();
  const latin = LOCALE_TABLE.filter((row) => row.alphabet === "latin");
  const codes: string[] = latin.map((row) => row.code);
  expect(codes.sort()).toEqual(Object.keys(ALPHABETS).sort());
  const lacking: string[] = [];
  for (const row of latin) {
    const used = new Set<string>(ALPHABETS[row.code]);
    for (const text of units.flatMap((unit) => unit.texts)) {
      const leaf = row.code === "en" ? text.english : text.own[row.code];
      if (leaf === undefined) continue;
      for (const each of textsOfLeaf(leaf)) for (const char of each.match(OWN_SCRIPT) ?? []) used.add(char);
    }
    const missing = [...used].filter((char) => !font.has(char.codePointAt(0)!));
    if (missing.length > 0) lacking.push(`${row.code}: ${missing.join(" ")}`);
  }
  expect(lacking).toEqual([]);
});
