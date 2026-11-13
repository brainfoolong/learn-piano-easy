/**
 * The layout checks: opens a page at each width, theme and locale, measures it, and names every flaw.
 *
 * The checker only measures. It collects boxes, colours and layout shifts in the page into a
 * `PageMeasure`, and `judgePage` of `src/ui/layout-geometry.ts` names the flaws, so every rule has a
 * unit test there. [docs/site-design.md](../docs/site-design.md) § *The checks* lists what is judged.
 *
 * - **Each combination gets its own browser context:** a viewport of the width, the theme as the
 *   system's colour scheme, and the locale as the browser's language. The widths up to 768 pixels
 *   emulate a touch screen, which also turns on `(pointer: coarse)`. The context asks for reduced
 *   motion only when the option `reducedMotion` says so.
 * - **The layout shift counts from the first byte.** An init script sums every layout-shift entry with
 *   no recent input. The page is measured once its fonts are ready and two frames have drawn.
 *   `shiftDuring` measures the shift of an action that changes the view.
 * - **A text is each element with text of its own.** Its box is the range of its contents, and its clip
 *   is its nearest ancestor that hides overflow. A scrolling ancestor clips nothing, since a person can
 *   scroll to the text. Its background is the stack of background colours up to the first opaque one.
 * - **A visually hidden text is skipped.** Its `clip-path: inset(50%)` draws it nowhere, and only a
 *   screen reader reads it.
 * - **An interactive element nested in another one is skipped,** since the outer one is the target.
 * - **A tab panel is no target,** though its `tabindex` makes it a focus stop. Nobody taps a panel.
 * - **No English text shows in another locale.** `englishShown` collects each visible text and label,
 *   and `src/i18n/untranslated.ts` names each that its locale's catalog translates differently.
 *   A text marked as another language by `lang`, such as a language's own name, is skipped. So is one
 *   under `translate="no"`, such as a note's letter on a drawn key. So is a text the page's locale
 *   writes itself, such as the German note name "B" in a lesson's German texts.
 *
 * Every flaw is prefixed with its width, theme and locale, so a failing test says where to look.
 */
import type { Browser, Page } from "@playwright/test";
import { CATALOGS } from "../src/i18n/all-catalogs";
import { COMPLETE_LOCALES, DEFAULT_LOCALE, isLocale, isPseudoLocale, LOCALES as SHIPPED_LOCALES, PSEUDO_LOCALES, type PseudoLocale } from "../src/i18n/locale";
import { fold, translatedAway, untranslated } from "../src/i18n/untranslated";
import { SETTINGS_VERSION, STORAGE_KEY } from "../src/settings/store";
import { judgePage, type MeasuredText, type Named, type PageMeasure } from "../src/ui/layout-geometry";

/** The widths every page is checked at. */
export const WIDTHS = [360, 768, 1280, 1920] as const;

/** The themes, as the system's colour scheme. */
export const THEMES = ["light", "dark"] as const;

/**
 * The locales every width is checked in: the complete ones, English and German, and the pseudo-locales.
 * The texts of `en-XA` run 40% longer than the English, and `ar-XB` reads from right to left.
 */
export const LOCALES = [...SHIPPED_LOCALES.filter((locale) => COMPLETE_LOCALES.includes(locale)), ...PSEUDO_LOCALES];

/**
 * The shipped locales a translation pass keeps, such as Spanish. `e2e/locales.e2e.ts` checks their pages
 * at `PASSED_WIDTHS` only, since the pseudo-locale's longer texts cover every width.
 */
export const PASSED_LOCALES = SHIPPED_LOCALES.filter((locale) => !COMPLETE_LOCALES.includes(locale));

/** The widths a passed locale is checked at: a phone's and a desktop's. */
export const PASSED_WIDTHS = [360, 1280] as const;

/**
 * `url`, the absolute URL of a page of the default locale, in the pseudo-locale `locale`, `en-XA` when
 * absent. The end-to-end server serves the site from its root, so the locale's folder goes first.
 */
export function inPseudo(url: string, locale: PseudoLocale = "en-XA"): string {
  const at = new URL(url);
  at.pathname = `/${locale}${at.pathname}`;
  return at.href;
}

/** The widest viewport that emulates a touch screen. */
export const TOUCH_MAX_WIDTH = 768;

export interface LayoutCheckOptions {
  widths?: readonly number[];
  themes?: readonly ("light" | "dark")[];
  locales?: readonly string[];
  /** The viewport's height, 900 when absent. */
  height?: number;
  /**
   * Whether the browser asks for reduced motion. A page whose parts reveal as they scroll in shows
   * them all at once then, so every part is measured.
   */
  reducedMotion?: boolean;
  /** Entries put into `localStorage` before the page loads, such as stored settings. */
  storage?: Readonly<Record<string, string>>;
  /**
   * A selector that matches once a page that draws after a read has drawn. The page is measured once
   * it matches and every finite animation and transition has ended.
   */
  ready?: string;
}

/** Waits until `selector` matches in `page`, and then until every finite animation has ended. */
export async function drawn(page: Page, selector: string): Promise<void> {
  await page.waitForSelector(selector, { state: "attached" });
  await page.evaluate(async () => {
    const finite = document.getAnimations().filter((animation) => animation.effect?.getComputedTiming().endTime !== Infinity);
    await Promise.all(finite.map((animation) => animation.finished.catch(() => undefined)));
  });
}

/**
 * Puts each of `entries` that `localStorage` lacks into it, so a page's own later writes survive a
 * reload. It runs in the page, before the page's own code.
 */
export function seedStorage(entries: Readonly<Record<string, string>>): void {
  for (const [key, value] of Object.entries(entries)) if (localStorage.getItem(key) === null) localStorage.setItem(key, value);
}

/** The stored settings of a learner past the first-visit setup, whose modal dialog would cover the map. */
export const PAST_SETUP = { [STORAGE_KEY]: JSON.stringify({ version: SETTINGS_VERSION, values: { learnSetupDone: true } }) };

/** Starts `page` past the first-visit setup. */
export async function pastSetup(page: Page): Promise<void> {
  await page.addInitScript(seedStorage, PAST_SETUP);
}

/** Sums the page's layout shifts into `window.__layoutShift`, from before the first byte. */
export function recordShifts(): void {
  const scope = window as unknown as { __layoutShift: number };
  scope.__layoutShift = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
      if (!entry.hadRecentInput) scope.__layoutShift += entry.value;
    }
  }).observe({ type: "layout-shift", buffered: true });
}

/** Waits until the page's fonts are ready and two frames have drawn. */
export async function settle(page: Page): Promise<void> {
  await page.waitForLoadState("load");
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done)));
  });
}

/** The sum of the page's layout shifts so far. */
export async function shiftSoFar(page: Page): Promise<number> {
  return page.evaluate(() => (window as unknown as { __layoutShift?: number }).__layoutShift ?? 0);
}

/** How far the layout shifts while `action` changes the view, once the page settles again. */
export async function shiftDuring(page: Page, action: () => Promise<void>): Promise<number> {
  const before = await shiftSoFar(page);
  await action();
  await settle(page);
  return (await shiftSoFar(page)) - before;
}

/** Measures the page as it stands into everything `judgePage` reads, but its errors and shift. */
function measureInPage(): Omit<PageMeasure, "errors" | "shift" | "touch"> {
  const INTERACTIVE = [
    "a[href]",
    "button",
    "input:not([type=hidden])",
    "select",
    "textarea",
    "summary",
    "[role=button]",
    "[role=link]",
    "[role=switch]",
    "[role=tab]",
    "[role=checkbox]",
    "[role=radio]",
    "[role=slider]",
    "[tabindex]:not([tabindex='-1'], [role=tabpanel])",
  ].join(",");
  const boxOf = (r: DOMRect) => ({ x: r.x, y: r.y, width: r.width, height: r.height });
  const shown = (e: Element) => {
    const r = e.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== "hidden";
  };
  const nameOf = (e: Element) => {
    const label = e.getAttribute("aria-label") ?? e.textContent ?? "";
    const text = label.replace(/\s+/g, " ").trim();
    return `${e.tagName.toLowerCase()} "${text.length > 40 ? `${text.slice(0, 40)}…` : text}"`;
  };
  const opaque = (c: string) => /^rgb\(/.test(c) || /^color\(srgb [^/]*\)$/.test(c);

  const interactive: Named[] = [...document.querySelectorAll(INTERACTIVE)]
    .filter((e) => shown(e) && e.parentElement?.closest(INTERACTIVE) == null)
    .map((e) => ({
      name: nameOf(e),
      box: boxOf(e.getBoundingClientRect()),
      inline: getComputedStyle(e).display === "inline",
    }));

  const width = document.documentElement.clientWidth;
  const texts: MeasuredText[] = [];
  for (const e of document.body.querySelectorAll("*")) {
    const own = [...e.childNodes].some((n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim());
    if (!own || !shown(e) || getComputedStyle(e).clipPath === "inset(50%)") continue;
    const range = document.createRange();
    range.selectNodeContents(e);
    let clip = { x: 0, y: -1e6, width, height: 2e6 };
    let ellipsis = getComputedStyle(e).textOverflow === "ellipsis";
    for (let a: Element | null = e; a !== null && a !== document.documentElement; a = a.parentElement) {
      const style = getComputedStyle(a);
      const hides = [style.overflowX, style.overflowY].some((o) => o === "hidden" || o === "clip");
      if (!hides) continue;
      clip = boxOf(a.getBoundingClientRect());
      ellipsis ||= style.textOverflow === "ellipsis";
      break;
    }
    let opacity = 1;
    for (let a: Element | null = e; a !== null; a = a.parentElement) opacity *= Number(getComputedStyle(a).opacity);
    let backgrounds: string[] | null = [];
    for (let a: Element | null = e; a !== null; a = a.parentElement) {
      const style = getComputedStyle(a);
      if (style.backgroundImage !== "none") {
        backgrounds = null;
        break;
      }
      backgrounds.push(style.backgroundColor);
      if (opaque(style.backgroundColor)) break;
    }
    const style = getComputedStyle(e);
    texts.push({
      name: nameOf(e),
      box: boxOf(range.getBoundingClientRect()),
      clip,
      ellipsis,
      colour: style.color,
      opacity,
      backgrounds,
      fontSizePx: Number.parseFloat(style.fontSize),
      fontWeight: Number(style.fontWeight),
      disabled: e.closest(":disabled, [aria-disabled='true']") !== null,
    });
  }
  return { viewportWidth: width, scrollWidth: document.documentElement.scrollWidth, interactive, texts };
}

/**
 * Every text of the page's own language that a person can see or hear: each element's own text, and
 * each shown label. A text in another `lang`, or under `translate="no"`, is left out.
 */
export function textsInPage(): string[] {
  const out: string[] = [];
  const pageLang = document.documentElement.lang;
  for (const e of document.body.querySelectorAll("*")) {
    const r = e.getBoundingClientRect();
    if (r.width === 0 || r.height === 0 || getComputedStyle(e).visibility === "hidden") continue;
    if (e.closest("[translate='no']") !== null) continue;
    if ((e.closest("[lang]")?.getAttribute("lang") ?? pageLang) !== pageLang) continue;
    const own = [...e.childNodes].filter((n) => n.nodeType === Node.TEXT_NODE).map((n) => n.textContent ?? "");
    out.push(own.join(""));
    for (const name of ["aria-label", "placeholder", "data-tip"]) {
      const value = e.getAttribute(name);
      if (value !== null) out.push(value);
    }
  }
  return out;
}

/**
 * Every English text that shows on `page`, which is in `locale`, each as a flaw. An English page has
 * none, and a page of another locale fails on each text its own catalog translates differently.
 * `own` holds the texts the page's locale writes outside its catalog, such as a lesson's, which never count.
 */
export async function englishShown(page: Page, locale: string, own: readonly string[] = []): Promise<string[]> {
  if (locale === DEFAULT_LOCALE || !isLocale(locale) || !COMPLETE_LOCALES.includes(locale)) return [];
  const english = translatedAway(CATALOGS.en, CATALOGS[locale] ?? {});
  for (const text of own) english.delete(fold(text));
  return untranslated(await page.evaluate(textsInPage), english);
}

/** Measures the page in `page` as it stands. `errors` are those the page logged so far. */
export async function measure(page: Page, touch: boolean, errors: string[]): Promise<PageMeasure> {
  const measured = await page.evaluate(measureInPage);
  return { ...measured, touch, shift: await shiftSoFar(page), errors: [...errors] };
}

/**
 * Opens `url` at each width, theme and locale, and gives every flaw found, each prefixed with where.
 * `url` is absolute, since a context of its own has no base URL.
 */
export async function checkLayout(browser: Browser, url: string, options: LayoutCheckOptions = {}): Promise<string[]> {
  const flaws: string[] = [];
  for (const width of options.widths ?? WIDTHS) {
    for (const theme of options.themes ?? THEMES) {
      for (const locale of options.locales ?? LOCALES) {
        const touch = width <= TOUCH_MAX_WIDTH;
        const context = await browser.newContext({
          viewport: { width, height: options.height ?? 900 },
          colorScheme: theme,
          locale,
          hasTouch: touch,
          reducedMotion: options.reducedMotion ? "reduce" : "no-preference",
        });
        try {
          await context.addInitScript(recordShifts);
          if (options.storage !== undefined) await context.addInitScript(seedStorage, options.storage);
          const page = await context.newPage();
          const errors: string[] = [];
          page.on("pageerror", (error) => errors.push(error.message));
          page.on("console", (message) => {
            if (message.type() === "error") errors.push(message.text());
          });
          // A browser's language never moves a visit to a pseudo-locale, so its check opens its page.
          await page.goto(isPseudoLocale(locale) ? inPseudo(url, locale) : url);
          if (options.ready !== undefined) await drawn(page, options.ready);
          await settle(page);
          const where = `${width} ${theme} ${locale}`;
          const found = [...judgePage(await measure(page, touch, errors)), ...(await englishShown(page, locale))];
          flaws.push(...found.map((flaw) => `${where}: ${flaw}`));
        } finally {
          await context.close();
        }
      }
    }
  }
  return flaws;
}
