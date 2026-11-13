/**
 * The locales a translation pass keeps, in a real browser: each reads in its own language, and its pages
 * pass the layout checks.
 *
 * - **Spanish reads in Spanish** from the language switch to a lesson's step and the player's controls.
 * - **A passed locale's pages run the layout checks at a phone's and a desktop's width,** in both themes.
 *   A flaw counts only where the locale's text adds it, since each page's own test holds its English.
 *   The pseudo-locale's longer texts already cover every width.
 */
import { expect, test, type Page } from "@playwright/test";
import { COURSE } from "../src/learn/course";
import { ROUTES } from "../src/site/routes";
import { checkLayout, PASSED_LOCALES, PASSED_WIDTHS, PAST_SETUP, pastSetup, THEMES } from "./layout-check";

/** Collects every uncaught error the page reports from now on. */
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

/** The site's top bar. */
const bar = (page: Page) => page.locator(".site-bar-host");

/** The heading of the view on screen. */
const heading = (page: Page) => page.locator("main > :not([hidden]) h1");

test("the_spanish_site_reads_in_spanish", async ({ page }) => {
  test.setTimeout(60_000);
  await pastSetup(page);
  const errors = watchErrors(page);

  await page.goto("./learn/");
  const choice = bar(page).getByRole("combobox", { name: "Language" });
  await expect(choice.locator('option[value="es"]')).toHaveText("Español");
  await choice.selectOption("es");
  await expect(page).toHaveURL(/\/es\/learn\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(heading(page)).toHaveText("Aprende piano");
  await expect(page.locator("main")).toContainText("Conoce el piano");

  await page.goto("./es/learn/meet-the-piano/find-c/");
  await expect(page.locator(".lesson__title")).toHaveText("Encuentra el do");
  await expect(page.locator("main")).toContainText("Todas tienen el mismo nombre: do.");

  await page.goto("./es/play/");
  await expect(page.getByRole("button", { name: "Reproducir", exact: true })).toBeVisible();
  await expect(bar(page).getByRole("link", { name: "Piano libre" })).toHaveAttribute("aria-current", "page");
  expect(errors).toEqual([]);
});

/** The pages each passed locale opens, as paths in the default locale: every shown route, and a lesson. */
async function checkedPaths(): Promise<string[]> {
  const world = COURSE[0]!;
  const { lessons } = await world.load();
  return [...ROUTES.filter((route) => !route.hidden).map((route) => route.path), `learn/${world.id}/${lessons[0]!.id}/`];
}

/** A flaw without its locale, its texts and its numbers, so the same flaw in two locales reads the same. */
function shapeOf(flaw: string): string {
  return flaw
    .replace(/ [a-z]{2}(?:-[A-Z]{2})?:/, ":")
    .replace(/"[^"]*"/g, '""')
    .replace(/\d+(?:\.\d+)?/g, "#");
}

for (const locale of PASSED_LOCALES) {
  test(`every_page_passes_the_layout_checks_in_${locale}`, async ({ browser, baseURL }) => {
    const paths = await checkedPaths();
    test.setTimeout(paths.length * PASSED_WIDTHS.length * THEMES.length * 2 * 20_000);
    const flaws: string[] = [];
    for (const path of paths) {
      // A page of *Learn Piano* fades its bar slot in once the slot's read ends, so it is measured after.
      const ready = path.startsWith("learn/") ? '.bar-slot[data-ready="true"]' : undefined;
      const options = { widths: PASSED_WIDTHS, locales: ["en", locale], reducedMotion: true, storage: PAST_SETUP, ...(ready === undefined ? {} : { ready }) };
      const found = await checkLayout(browser, new URL(path, baseURL).href, options);
      const english = new Set(found.filter((flaw) => flaw.includes(" en: ")).map(shapeOf));
      flaws.push(...found.filter((flaw) => flaw.includes(` ${locale}: `) && !english.has(shapeOf(flaw))).map((flaw) => `${path || "./"} ${flaw}`));
    }
    expect(flaws).toEqual([]);
  });
}
