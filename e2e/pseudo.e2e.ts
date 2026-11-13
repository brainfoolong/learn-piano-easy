/**
 * The sweep in the pseudo-locale `en-XA`: every route's page shows only texts its catalogs hold, and
 * holds texts 40% longer than the English.
 *
 * `src/i18n/pseudo.ts` wraps each text of a catalog, a lesson or a guide in `⟦ ⟧`. A text without the
 * brackets was never read from one, so it is hard-coded. A text with no letter, such as a number or a
 * sign, passes as it is. So do a note's name, a locale's code, a count in thousands and a kept word. A song's title and a language's own name carry
 * their own `lang` or `translate="no"`, which the page's texts leave out.
 *
 * The longer texts run through the layout checks of `e2e/layout-check.ts` at every width, in English
 * and in the pseudo-locale. A flaw fails only where the longer text adds it, since each page's own test
 * holds its English. The theme changes no text's length, so one theme is enough. A page of *Learn Piano*
 * is measured once its bar slot has read the log and faded in, as its own tests measure it.
 */
import { expect, test, type Browser } from "@playwright/test";
import { PSEUDO_CLOSE, PSEUDO_OPEN } from "../src/i18n/pseudo";
import { COURSE } from "../src/learn/course";
import { ROUTES } from "../src/site/routes";
import { checkLayout, inPseudo, PAST_SETUP, seedStorage, settle, textsInPage, WIDTHS } from "./layout-check";

/** The words every locale keeps as they are. */
const KEPT = new Set(["MIDI", "XP"]);

/**
 * A name music or `Intl` writes the same way in every text: a note's or a chord's name, such as `C`,
 * `F♯4` or `Am7`, a solfège syllable, a chord's degree such as `IV`, and a weekday's single letter.
 */
const NOTE_NAME = /^(?:[A-H](?:[♯♭#b]|is|es)?(?:m|maj|min|dim|aug|sus)?\d*|Do|Re|Mi|Fa|Sol|La|Si|Ti|[IV]+|\p{Lu})$/u;

/** A locale's code, as the language switch shows it, such as `DE`. */
const LOCALE_CODE = /^[A-Z]{2}(?:-[A-Z]{2})?$/;

/** A count shortened to thousands, such as `10k` on a badge. */
const THOUSANDS = /^\d+k$/;

/** Whether `text` may show as it is on a page of the pseudo-locale. */
function passes(text: string): boolean {
  const trimmed = text.trim();
  if (trimmed === "" || trimmed.includes(PSEUDO_OPEN) || trimmed.includes(PSEUDO_CLOSE)) return true;
  if (!/\p{L}/u.test(trimmed) || LOCALE_CODE.test(trimmed)) return true;
  return trimmed
    .split(/[\s/–·,]+/)
    .every((word) => word === "" || !/\p{L}/u.test(word) || NOTE_NAME.test(word) || THOUSANDS.test(word) || KEPT.has(word));
}

/** The pages the sweep opens, each as its path in the default locale: every route, and a lesson. */
async function sweptPaths(): Promise<string[]> {
  const world = COURSE[0]!;
  const { lessons } = await world.load();
  return [...ROUTES.map((route) => route.path), `learn/${world.id}/${lessons[0]!.id}/`];
}

/** Every text on the page at `path` that holds no `⟦`, each named with its path. */
async function hardCoded(browser: Browser, baseURL: string, path: string, storage?: Record<string, string>): Promise<string[]> {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, locale: "en-XA" });
  try {
    if (storage !== undefined) await context.addInitScript(seedStorage, storage);
    const page = await context.newPage();
    await page.goto(inPseudo(new URL(path, baseURL).href));
    await page.waitForLoadState("networkidle");
    await settle(page);
    const texts = await page.evaluate(textsInPage);
    const title = await page.title();
    return [...new Set([title, ...texts].filter((text) => !passes(text)))].map((text) => `${path || "./"}: ${JSON.stringify(text)}`);
  } finally {
    await context.close();
  }
}

test("no_page_shows_a_hard_coded_text", async ({ browser, baseURL }) => {
  const paths = await sweptPaths();
  test.setTimeout(paths.length * 2 * 20_000);
  const found: string[] = [];
  for (const path of paths) {
    found.push(...(await hardCoded(browser, baseURL!, path)));
    // Past the first visit's setup, the course and the player show their own views.
    found.push(...(await hardCoded(browser, baseURL!, path, PAST_SETUP)));
  }
  expect([...new Set(found)]).toEqual([]);
});

/**
 * A flaw of the layout checks without its locale, its texts and its numbers, so the same flaw in English
 * and in the pseudo-locale reads the same.
 */
function shapeOf(flaw: string): string {
  return flaw
    .replace(/ (?:en|en-XA):/, ":")
    .replace(/"[^"]*"/g, '""')
    .replace(/\d+(?:\.\d+)?/g, "#");
}

test("every_page_holds_longer_text", async ({ browser, baseURL }) => {
  const paths = await sweptPaths();
  test.setTimeout(paths.length * WIDTHS.length * 2 * 20_000);
  const flaws: string[] = [];
  for (const path of paths) {
    // Each page's own test holds it to the layout checks in English. Here a flaw counts only where the
    // longer text adds it.
    // A page of *Learn Piano* fades its bar slot in once the slot's read ends, so it is measured after.
    const ready = path.startsWith("learn/") ? '.bar-slot[data-ready="true"]' : undefined;
    const options = { themes: ["light"] as const, locales: ["en", "en-XA"], reducedMotion: true, storage: PAST_SETUP, ...(ready === undefined ? {} : { ready }) };
    const found = await checkLayout(browser, new URL(path, baseURL).href, options);
    const english = new Set(found.filter((flaw) => !flaw.includes(" en-XA: ")).map(shapeOf));
    flaws.push(...found.filter((flaw) => flaw.includes(" en-XA: ") && !english.has(shapeOf(flaw))).map((flaw) => `${path || "./"} ${flaw}`));
  }
  expect(flaws).toEqual([]);
});
