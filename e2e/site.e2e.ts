/**
 * The site's shell in a real browser: the top bar, the language switch, the history, what the landing
 * page loads, every route offline, each page's headings and landmarks, and the layout checks of the bar
 * and the footer.
 *
 * Every page is reached from the site's root, as a learner's link would. The top bar's controls are
 * found inside `.site-bar-host`, since the player draws a bar of its own on `play/`. Every page starts
 * past the first-visit setup of *Learn Piano*, whose modal dialog would cover the bar.
 */
import { expect, test, type Page } from "@playwright/test";
import { allPages, pageAt, pageTitle } from "../src/site/routes";
import { checkLayout, LOCALES, pastSetup, THEMES, WIDTHS } from "./layout-check";

test.beforeEach(({ page }) => pastSetup(page));

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

test("the_top_bar_reaches_learn_and_play", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("./");
  const nav = bar(page).getByRole("navigation", { name: "Main" });

  await nav.getByRole("link", { name: "Learn Piano" }).click();
  await expect(page).toHaveURL(/\/learn\/$/);
  await expect(heading(page)).toHaveText("Learn Piano");
  await expect(nav.getByRole("link", { name: "Learn Piano" })).toHaveAttribute("aria-current", "page");

  await nav.getByRole("link", { name: "Just Play Piano" }).click();
  await expect(page).toHaveURL(/\/play\/$/);
  await expect(page.locator(".stage canvas")).toBeVisible();
  await expect(page).toHaveTitle(pageTitle(pageAt("play/")!));

  await bar(page).getByRole("link", { name: "Learn Piano Easy" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(heading(page)).toHaveText("Learn Piano Easy");
  expect(errors).toEqual([]);
});

test("the_top_bar_links_to_the_data_page_at_every_width", async ({ page }) => {
  // A desktop shows the switches in the bar, and a phone moves them into the menu. The link stays.
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("./");
    const link = bar(page).getByRole("link", { name: "Your data" });
    await expect(link).toBeVisible();
    await expect(link).not.toHaveAttribute("aria-current");

    await link.click();
    await expect(page).toHaveURL(/\/data\/$/);
    await expect(heading(page)).toHaveText("Your data");
    await expect(bar(page).getByRole("link", { name: "Your data" })).toHaveAttribute("aria-current", "page");
  }
});

test("the_language_switch_keeps_the_page", async ({ page }) => {
  await page.goto("./learn/");
  await bar(page).getByRole("combobox", { name: "Language" }).selectOption("de");
  await expect(page).toHaveURL(/\/de\/learn\/$/);
  await expect(heading(page)).toHaveText("Klavier lernen");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");

  // The stored choice wins on a page of the default locale.
  await page.goto("./about/");
  await expect(page).toHaveURL(/\/de\/about\/$/);

  await bar(page).getByRole("combobox", { name: "Sprache" }).selectOption("en");
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page).not.toHaveURL(/\/de\//);
  await expect(heading(page)).toHaveText("About");
});

test("the_top_bar_hides_in_fullscreen", async ({ page }) => {
  await page.goto("./");
  await expect(bar(page)).toBeVisible();
  // Fullscreen needs a gesture, so a click on the heading asks for it.
  await page.evaluate(() =>
    document.addEventListener("click", () => void document.documentElement.requestFullscreen(), { once: true }),
  );
  await heading(page).click();
  await expect(bar(page)).toBeHidden();
  await page.evaluate(() => document.exitFullscreen());
  await expect(bar(page)).toBeVisible();
});

test("back_and_forward_restore_the_page_and_its_scroll", async ({ page }) => {
  // The gallery is the site's longest page.
  await page.goto("./design/");
  await expect(heading(page)).toBeVisible();
  await page.waitForFunction(() => document.documentElement.scrollHeight > innerHeight + 600);
  await page.evaluate(() => scrollTo(0, 600));
  await page.waitForFunction(() => scrollY === 600);

  await bar(page).getByRole("link", { name: "Learn Piano", exact: true }).click();
  await expect(heading(page)).toHaveText("Learn Piano");
  expect(await page.evaluate(() => scrollY)).toBe(0);

  await page.goBack();
  await expect(page).toHaveURL(/\/design\/$/);
  await page.waitForFunction(() => scrollY === 600);

  await page.goForward();
  await expect(page).toHaveURL(/\/learn\/$/);
  await expect(heading(page)).toHaveText("Learn Piano");
});

test("the_landing_page_loads_no_player_code", async ({ page }) => {
  const scripts: string[] = [];
  page.on("request", (request) => {
    if (request.resourceType() === "script") scripts.push(new URL(request.url()).pathname.split("/").pop()!);
  });
  await page.goto("./");
  await page.waitForLoadState("networkidle");
  const landing = [...scripts];
  expect(landing).toContain("app.js");
  expect(landing.filter((name) => name !== "app.js")).toEqual([expect.stringMatching(/^chunk-\w+\.js$/)]);

  // A landing box's player is a chunk the page asks for only on the click.
  await page.locator(".landing-hero .player-box").click();
  await expect(page.locator(".landing-hero .player-box canvas")).toBeAttached();
  const embed = scripts.slice(landing.length).filter((name) => name.startsWith("chunk-") && !landing.includes(name));
  expect(embed.length).toBeGreaterThan(0);

  // The play page's own code is a chunk the landing page never asked for either.
  await bar(page).getByRole("link", { name: "Just Play Piano" }).click();
  await expect(page.locator(".stage canvas")).toBeVisible();
  const player = scripts.slice(landing.length).filter((name) => name.startsWith("chunk-") && !landing.includes(name));
  expect(player.length).toBeGreaterThan(0);
});

test("every_route_reloads_offline", async ({ page, context }) => {
  test.setTimeout(120_000);
  await page.goto("./");
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await context.setOffline(true);
  const errors = watchErrors(page);
  for (const site of allPages()) {
    await page.goto(`./${site.path}`);
    await expect(page).toHaveTitle(pageTitle(site));
    await expect(page.locator("html")).toHaveAttribute("lang", site.locale);
    await expect(heading(page)).toBeAttached();
  }
  // An unknown path shows the landing page of its locale.
  await page.goto("./de/nowhere/");
  await expect(page).toHaveTitle(pageTitle(pageAt("de/")!));
  await expect(heading(page)).toHaveText(pageTitle(pageAt("de/")!));
  expect(errors).toEqual([]);
});

/**
 * What a search engine's crawler and a screen reader find wrong in the page's structure, read from the
 * rendered DOM. A visible part counts, so a closed dialog and a hidden view are left out. The player's
 * bar has no links, so a `nav` is asked for only where `withNav` holds.
 */
async function structureFlaws(page: Page, withNav: boolean): Promise<string[]> {
  return page.evaluate((withNav) => {
    const flaws: string[] = [];
    const shown = (node: Element) => node.checkVisibility();
    const describe = (node: Element) => `${node.tagName.toLowerCase()}.${node.className || "-"}`;
    const headings = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")].filter(shown);
    const ones = headings.filter((h) => h.tagName === "H1").length;
    if (ones !== 1) flaws.push(`${ones} h1`);
    let level = 0;
    for (const h of headings) {
      const next = Number(h.tagName[1]);
      if (next > level + 1) flaws.push(`h${next} after h${level}: ${h.textContent?.trim().slice(0, 40)}`);
      level = next;
    }
    const mains = [...document.querySelectorAll("main, [role=main]")].filter(shown).length;
    if (mains !== 1) flaws.push(`${mains} main`);
    if (withNav && [...document.querySelectorAll("nav, [role=navigation]")].filter(shown).length === 0) flaws.push("no nav");
    for (const node of document.querySelectorAll("[role=link]")) if (shown(node)) flaws.push(`role=link on ${describe(node)}`);
    for (const node of document.querySelectorAll("a:not([href])")) if (shown(node)) flaws.push(`a without href: ${describe(node)}`);
    for (const node of document.querySelectorAll("img:not([alt])")) flaws.push(`img without alt: ${node.getAttribute("src")}`);
    const nameOf = (node: HTMLElement) => {
      const byIds = node.getAttribute("aria-labelledby")?.split(" ").map((id) => document.getElementById(id)?.textContent ?? "");
      const alts = [...node.querySelectorAll("img[alt]")].map((img) => img.getAttribute("alt"));
      return [node.getAttribute("aria-label"), ...(byIds ?? []), node.textContent, ...alts, node.title].join(" ").trim();
    };
    for (const node of document.querySelectorAll<HTMLElement>("a[href], button")) {
      if (shown(node) && nameOf(node) === "") flaws.push(`no name: ${describe(node)}`);
    }
    return flaws;
  }, withNav);
}

test("every_page_has_one_h1_a_main_a_nav_and_crawlable_links", async ({ page }) => {
  test.setTimeout(120_000);
  const errors = watchErrors(page);
  const lessons = ["learn/meet-the-piano/find-c/", "de/learn/meet-the-piano/find-c/"].map((path) => pageAt(path)!);
  const flaws: Record<string, string[]> = {};
  for (const site of [...allPages().filter((p) => !p.route.hidden), ...lessons]) {
    await page.goto(`./${site.path}`);
    await expect(heading(page)).toBeAttached();
    await page.waitForLoadState("networkidle");
    const found = await structureFlaws(page, site.route.id !== "play");
    if (found.length > 0) flaws[site.path] = found;
  }
  expect(flaws).toEqual({});
  expect(errors).toEqual([]);
});

test("the_top_bar_and_the_footer_pass_the_layout_checks", async ({ browser, baseURL }) => {
  // Each width, theme and locale opens the page in a context of its own. The browser's language moves
  // the landing page to German, so both locales are checked. With reduced motion no part of the page
  // enters, so none is measured halfway through its entrance.
  test.setTimeout(WIDTHS.length * THEMES.length * LOCALES.length * 20_000);
  const flaws = await checkLayout(browser, new URL("./", baseURL).href, { reducedMotion: true });
  expect(flaws).toEqual([]);
});
