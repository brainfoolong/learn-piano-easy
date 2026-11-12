import { rm } from "node:fs/promises";
import { join } from "node:path";
import { bundlePage, root } from "../../tools/build";
import { expect, test } from "../testing";
import { contrastRatio, parseHex, type Rgb } from "./layout-geometry";
import tokensCss from "./tokens.css" with { type: "text" };

/** Every custom property declared in the tokens' first `:root` rule, by name. */
function declarations(): Map<string, string> {
  const rootRule = /:root\s*\{([\s\S]*?)\n {2}\}/.exec(tokensCss);
  if (!rootRule) throw new Error("tokens.css has no :root rule.");
  const found = new Map<string, string>();
  for (const match of rootRule[1]!.matchAll(/(--[\w-]+):\s*([^;]+);/g)) found.set(match[1]!, match[2]!.trim());
  return found;
}

/** A colour token's value in each theme, following `var()` to the token it names. */
function colour(tokens: Map<string, string>, name: string): { light: Rgb; dark: Rgb } {
  const value = tokens.get(name);
  if (value === undefined) throw new Error(`The token ${name} is missing.`);
  const alias = /^var\((--[\w-]+)\)$/.exec(value);
  if (alias) return colour(tokens, alias[1]!);
  const pair = /^light-dark\((#[0-9a-f]{6}),\s*(#[0-9a-f]{6})\)$/i.exec(value);
  if (!pair) throw new Error(`The token ${name} is no light-dark() pair of hex colours: ${value}`);
  return { light: parseHex(pair[1]!), dark: parseHex(pair[2]!) };
}

test("every_text_colour_meets_its_contrast_in_both_themes", () => {
  const tokens = declarations();
  const surfaces = ["--c-bg", "--c-surface-1", "--c-surface-2", "--c-sunken"];
  // A hue that carries text on a surface, and whose `-ink` carries text on its fill.
  const hues = ["--c-accent", "--c-iris", "--c-orchid", "--c-success", "--c-danger", "--c-warning", "--c-info"];
  // Each text colour, what it sits on, and the ratio it needs: 4.5 for text, 3 for a focus ring.
  const pairs: [string, string, number][] = [
    ...surfaces.flatMap((s): [string, string, number][] => [
      ["--c-text", s, 4.5],
      ["--c-text-soft", s, 4.5],
      ["--c-brand-text", s, 4.5],
      ["--c-focus", s, 3],
      ...hues.map((hue): [string, string, number] => [hue, s, 4.5]),
    ]),
    ["--c-brand-ink", "--c-brand", 4.5],
    ...hues.map((hue): [string, string, number] => [`${hue}-ink`, hue, 4.5]),
  ];
  const failures: string[] = [];
  for (const [text, back, needed] of pairs) {
    for (const theme of ["light", "dark"] as const) {
      const ratio = contrastRatio(colour(tokens, text)[theme], colour(tokens, back)[theme]);
      if (ratio < needed) failures.push(`${text} on ${back} in ${theme}: ${ratio.toFixed(2)} < ${needed}`);
    }
  }
  expect(failures).toEqual([]);
});

test("every_space_token_is_on_the_grid", () => {
  const tokens = declarations();
  const steps = [...tokens].filter(([name]) => /^--s-\d+$/.test(name));
  expect(steps.map(([name]) => name)).toEqual(Array.from({ length: 12 }, (_, i) => `--s-${i + 1}`));
  const pixels = steps.map(([, value]) => Number(/^(\d+)px$/.exec(value)?.[1]));
  expect(pixels[0]).toBe(4);
  expect(pixels.at(-1)).toBe(128);
  for (let i = 1; i < pixels.length; i++) expect(pixels[i]!).toBeGreaterThan(pixels[i - 1]!);
  // Every distance token, the named ones too, is a whole multiple of 4 pixels.
  const offGrid = [...tokens]
    .filter(([name]) => name.startsWith("--s-"))
    .filter(([, value]) => !/^\d+px$/.test(value) || Number.parseInt(value, 10) % 4 !== 0);
  expect(offGrid).toEqual([]);
});

test("the_site_styles_bundle_into_one_stylesheet_with_their_layers", async () => {
  const outDir = join(root, ".agent-tmp", `tokens-test-${process.pid}`);
  try {
    const files = await bundlePage("src/ui/styles.ts", "site", outDir, false);
    expect(files).toContain("site.css");
    const css = await Bun.file(join(outDir, "site.css")).text();
    expect(css.startsWith("@layer reset,tokens,base,components,pages;")).toBe(true);
    expect(css).toContain("url(./fonts/plus-jakarta-sans/plus-jakarta-sans.woff2)");
    expect(css).toContain("--c-brand:");
  } finally {
    await rm(outDir, { recursive: true, force: true });
  }
});
