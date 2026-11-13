/**
 * No stylesheet under `src/` names a physical side, unless its declaration says why with `/* ltr: … *\/`.
 *
 * A right-to-left page mirrors every side its CSS names logically, such as `inset-inline-start`. A
 * declaration that names `left` or `right` stays put, so it would break that page. The music never
 * mirrors, and a centred box is the same either way, so those carry the marker with their reason.
 *
 * - **A declaration is physical** when its property names a horizontal side, such as `margin-left`. It
 *   also is when its value names `left` or `right` as a word, such as `text-align: right` or
 *   `env(safe-area-inset-left)`, or when it turns a gradient by `90deg` or `270deg`. So is a four-value
 *   `inset` whose right and left differ, and a `translateX` or `translate` that moves along the line.
 * - **A custom property's name is no side.** `var(--rarity-left)` names a value, so names starting with
 *   `--` are dropped before the value is read.
 * - **A move scaled by `var(--inline-sign)` follows the reading way,** which `src/ui/base.css` sets.
 * - **A `translate` by `-50%` centres a box, and is no side.** It pairs with a `left: 50%`, which
 *   carries its own marker.
 * - **The marker may sit on any line of its declaration,** up to the end of the line that closes it.
 */
import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { expect, test } from "../src/testing";

const root = join(import.meta.dir, "..");

/** A property that names a horizontal side. */
const SIDE_PROPERTY =
  /^(?:left|right|(?:margin|padding|border|scroll-margin|scroll-padding)-(?:left|right)(?:-[a-z]+)?|border-(?:top|bottom)-(?:left|right)-radius)$/;

/** A value that names a horizontal side as a word. */
const SIDE_WORD = /(?<![\w-])(?:left|right)(?![\w])|safe-area-inset-(?:left|right)/;

/** A gradient turned along the line. */
const SIDEWAYS_GRADIENT = /gradient\(\s*-?(?:90|270)deg/;

/** A move along the line: a `translateX`, or a `translate` whose first length is neither 0 nor -50%. */
const SIDEWAYS_MOVE = /translateX\(\s*(?!0\s*\))|translate(?:3d)?\(\s*(?!0[\s,)]|0px|-50%)[^,)]+[,)]/;

/** The marker that lets a declaration stay physical, with its reason. */
const MARKER = /\/\*\s*ltr:\s*\S/;

/** Whether the declaration `property: value` names a physical side. */
export function isPhysical(property: string, value: string): boolean {
  const name = property.toLowerCase();
  if (!name.startsWith("--") && SIDE_PROPERTY.test(name)) return true;
  const plain = value.replace(/--[\w-]+/g, "");
  if (SIDE_WORD.test(plain) || SIDEWAYS_GRADIENT.test(plain)) return true;
  if (SIDEWAYS_MOVE.test(plain) && !value.includes("var(--inline-sign)")) return true;
  if (name === "inset") {
    const parts = words(plain);
    return parts.length === 4 && parts[1] !== parts[3];
  }
  return false;
}

/** The space-separated words of `value`, a bracketed group such as `calc(1px + 2px)` counting as one. */
function words(value: string): string[] {
  const found: string[] = [];
  let depth = 0;
  let word = "";
  for (const char of value.trim()) {
    if (char === "(") depth++;
    if (char === ")") depth--;
    if (depth === 0 && /\s/.test(char)) {
      if (word !== "") found.push(word);
      word = "";
    } else word += char;
  }
  if (word !== "") found.push(word);
  return found;
}

/** Each physical declaration of `css` without its marker, as `line: text`. */
export function unmarkedSides(css: string): string[] {
  // Comments become spaces of the same length, so every offset still points into `css`.
  const bare = css.replace(/\/\*[\s\S]*?\*\//g, (comment) => comment.replace(/[^\n]/g, " "));
  const lines = css.split("\n");
  const found: string[] = [];
  for (const match of bare.matchAll(/([-\w]+)\s*:\s*([^;{}]*)(?:;|(?=\}))/g)) {
    if (!isPhysical(match[1]!, match[2]!)) continue;
    const first = css.slice(0, match.index).split("\n").length - 1;
    const last = first + match[0].split("\n").length - 1;
    if (lines.slice(first, last + 1).some((line) => MARKER.test(line))) continue;
    found.push(`${first + 1}: ${match[0].replace(/\s+/g, " ").trim()}`);
  }
  return found;
}

test("no_stylesheet_uses_a_physical_side", async () => {
  // The checker itself first, on declarations it must and must not name.
  expect(unmarkedSides("a { margin-inline-start: 0; text-align: start; inset: 0 auto auto 0; }")).toEqual(["1: inset: 0 auto auto 0;"]);
  expect(unmarkedSides("a { left: 0; /* ltr: the staff never mirrors */ }")).toEqual([]);
  expect(unmarkedSides("a {\n  padding-right: 1px;\n  color: var(--rarity-left);\n  transform: translate(-50%, -50%);\n}")).toEqual([
    "2: padding-right: 1px;",
  ]);
  expect(unmarkedSides("a { background: linear-gradient(\n 90deg, red, blue); }")).toHaveLength(1);
  expect(unmarkedSides("a:hover { transform: translateX(0); inset-inline: max(1px, env(safe-area-inset-left)); }")).toHaveLength(1);

  const dir = join(root, "src");
  const files = (await readdir(dir, { recursive: true })).filter((file) => file.endsWith(".css"));
  const flaws: string[] = [];
  for (const file of files) {
    const path = relative(root, join(dir, file)).split(sep).join("/");
    flaws.push(...unmarkedSides(await Bun.file(join(dir, file)).text()).map((flaw) => `${path}:${flaw}`));
  }
  expect(flaws).toEqual([]);
});
