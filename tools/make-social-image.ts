/**
 * The social pictures: the picture a search or social site shows beside a link to the landing page,
 * one per locale, written into `public/` where `socialImageOf` of `src/site/routes.ts` names it.
 *
 * Each picture is an SVG drawn here: the site's name and the hero's lead sentence, beside a small
 * keyboard with notes falling onto it. Chromium draws it at `SOCIAL_IMAGE_SIZE`, and Playwright saves
 * it as PNG.
 *
 * - **The colours and the font are the site's own.** The page around the SVG loads `src/ui/tokens.css`
 *   in the dark theme and the site's font, and the SVG fills with tokens. A change of a token shows in
 *   the next run.
 * - **The text is each locale's catalog,** so a change of the copy needs a new run.
 * - **The text wraps in a `foreignObject`,** since an SVG `text` never wraps.
 *
 *   bun tools/make-social-image.ts
 *
 * It needs Chromium from `bun run e2e:install` and no network. The app never runs it.
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { chromium } from "@playwright/test";
import { LOCALES, messagesOf, type Locale } from "../src/i18n/locale";
import { SOCIAL_IMAGE_SIZE, socialImageOf } from "../src/site/routes";
import { root } from "./build";


/** The white keys drawn, from C, and the octave pattern of where a black key follows a white one. */
const WHITE_KEYS = 14;
const BLACK_AFTER = [true, true, false, true, true, true, false];

/** The falling notes, as a white key's index, the hand, and the note's top and length in pixels. */
const NOTES: readonly { key: number; hand: "left" | "right"; top: number; length: number }[] = [
  { key: 0, hand: "left", top: 300, length: 96 },
  { key: 4, hand: "left", top: 210, length: 140 },
  { key: 7, hand: "right", top: 330, length: 66 },
  { key: 9, hand: "right", top: 220, length: 90 },
  { key: 8, hand: "right", top: 120, length: 78 },
  { key: 11, hand: "right", top: 270, length: 126 },
  { key: 12, hand: "right", top: 90, length: 110 },
];

/** The SVG of the picture in `locale`, filled with the site's tokens. */
function socialSvg(locale: Locale): string {
  const t = messagesOf(locale);
  const { width, height } = SOCIAL_IMAGE_SIZE;
  const keyWidth = 36;
  const keysX = width - 80 - WHITE_KEYS * keyWidth;
  const keysY = 430;
  const keysHeight = 140;
  const white = Array.from({ length: WHITE_KEYS }, (_, i) =>
    `<rect x="${keysX + i * keyWidth + 1}" y="${keysY}" width="${keyWidth - 2}" height="${keysHeight}" rx="5" fill="var(--c-surface-2)" stroke="var(--c-line)"/>`,
  );
  const black = Array.from({ length: WHITE_KEYS - 1 }, (_, i) => i)
    .filter((i) => BLACK_AFTER[i % 7])
    .map((i) => `<rect x="${keysX + (i + 1) * keyWidth - 11}" y="${keysY}" width="22" height="88" rx="4" fill="var(--c-bg)"/>`);
  const notes = NOTES.map(({ key, hand, top, length }) => {
    const fill = hand === "left" ? "var(--c-success)" : "var(--c-brand)";
    return `<rect x="${keysX + key * keyWidth + 5}" y="${top - length + 60}" width="${keyWidth - 10}" height="${length}" rx="8" fill="${fill}"/>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="glow" cx="0.78" cy="0.2" r="0.75">
      <stop offset="0" stop-color="var(--c-brand)" stop-opacity="0.38"/>
      <stop offset="1" stop-color="var(--c-brand)" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="var(--c-bg)"/>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  ${notes.join("\n  ")}
  <rect x="${keysX - 12}" y="${keysY - 12}" width="${WHITE_KEYS * keyWidth + 24}" height="${keysHeight + 24}" rx="16" fill="var(--c-surface-1)"/>
  ${white.join("\n  ")}
  ${black.join("\n  ")}
  <foreignObject x="80" y="150" width="${keysX - 140}" height="360">
    <div xmlns="http://www.w3.org/1999/xhtml" class="text">
      <p class="name">${t.siteName}</p>
      <p class="lead">${t.landing.hero.lead}</p>
    </div>
  </foreignObject>
</svg>`;
}

/** The page that draws the SVG of `locale` in the site's tokens and font. */
async function socialPage(locale: Locale): Promise<string> {
  const tokens = await Bun.file(join(root, "src/ui/tokens.css")).text();
  const font = await Bun.file(join(root, "public/fonts/plus-jakarta-sans/plus-jakarta-sans.woff2")).bytes();
  return `<!doctype html>
<html lang="${locale}" data-site-theme="dark">
<head>
<style>
@font-face { font-family: "Plus Jakarta Sans"; src: url(data:font/woff2;base64,${Buffer.from(font).toString("base64")}); font-weight: 200 800; }
${tokens}
html, body { margin: 0; }
svg { display: block; }
.text { font-family: var(--font-sans); color: var(--c-text); }
.name { margin: 0 0 24px; font-size: 72px; font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; }
.lead { margin: 0; font-size: 32px; font-weight: 500; line-height: 1.3; color: var(--c-text-soft); }
</style>
</head>
<body>${socialSvg(locale)}</body>
</html>`;
}

if (import.meta.main) {
  await mkdir(join(root, "public", dirname(socialImageOf("en"))), { recursive: true });
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: SOCIAL_IMAGE_SIZE });
    for (const locale of LOCALES) {
      await page.setContent(await socialPage(locale));
      await page.evaluate(() => document.fonts.ready);
      const file = join(root, "public", socialImageOf(locale));
      await page.screenshot({ path: file, clip: { x: 0, y: 0, ...SOCIAL_IMAGE_SIZE } });
      console.log(`wrote ${socialImageOf(locale)}`);
    }
  } finally {
    await browser.close();
  }
}
