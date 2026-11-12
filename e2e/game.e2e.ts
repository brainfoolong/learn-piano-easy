/**
 * *Learn Piano* as a game in a real browser: the map opens lessons in order, a skip test opens its
 * world, a lesson's end counts its stars and XP, a new badge is celebrated once, the first-visit setup
 * runs once, and the map and the profile pass the layout checks.
 *
 * - **Every test but the setup's starts past the setup,** with `learnSetupDone` seeded in the stored
 *   settings, since the setup's modal dialog would cover the map.
 * - **Lessons are played by `walkLesson`** of `e2e/lesson-walk.ts`, on their steps' solutions, so each
 *   earns three stars.
 * - **A lesson's moments are closed one by one** by `endMoments`, which names each. A run that earns no
 *   moment waits the reward's delay and a margin, and then finds none.
 */
import { expect, test, type Page } from "@playwright/test";
import { messagesOf } from "../src/i18n/locale";
import { COURSE } from "../src/learn/course";
import { PRACTICE_XP, XP_PER_STAR } from "../src/learn/game/xp";
import { STORAGE_KEY } from "../src/settings/store";
import { checkLayout, PAST_SETUP, pastSetup, THEMES, LOCALES } from "./layout-check";
import { clickKey, lessonPath, walkLesson, watchErrors } from "./lesson-walk";

const t = messagesOf("en");

/** How long a run waits for a moment that should not come: the reward's delay of 1.2 s, and a margin. */
const NO_MOMENT_MS = 3000;

/**
 * How long a run waits for a moment that should come. The reward's delay is 1.2 s, but a loaded machine
 * running four workers can take several times as long, so the default 5 s is too short.
 */
const MOMENT_MS = 15_000;

/** The first world, with its lessons loaded. */
async function firstWorld() {
  const world = COURSE[0]!;
  return { world, lessons: await world.load() };
}

/** The map's nodes, once it has drawn. */
async function mapNodes(page: Page) {
  const nodes = page.locator(".map__node");
  await expect(nodes.first()).toBeVisible();
  return nodes;
}

/**
 * Closes each full-screen moment the lesson's end shows, once its XP has drawn, and returns each
 * moment's name. With `some` false, it waits for a moment that should not come before it looks.
 */
async function endMoments(page: Page, some: boolean): Promise<string[]> {
  await expect(page.locator(".lesson-end .xp-counter")).toBeVisible();
  const moment = page.locator("dialog.moment[open]");
  if (some) await expect(moment).toBeVisible({ timeout: MOMENT_MS });
  else await page.waitForTimeout(NO_MOMENT_MS);
  const names: string[] = [];
  while ((await moment.count()) > 0) {
    const name = await moment.locator(".moment__name").innerText();
    names.push(name);
    await moment.getByRole("button", { name: t.lesson.moment.continue }).click();
    // A closed moment leaves the page in the task that opens the next, so its removal is the sign to look again.
    await expect(page.locator("dialog.moment .moment__name").getByText(name, { exact: true })).toHaveCount(0);
  }
  return names;
}

test("the_map_opens_the_next_lesson_after_a_pass", async ({ page }) => {
  test.setTimeout(90_000);
  const errors = watchErrors(page);
  await pastSetup(page);
  const course = await Promise.all(COURSE.map(async (world) => ({ world, lessons: await world.load() })));
  // The map's nodes in order: each world's lessons, then its boss.
  const path = course.flatMap(({ world, lessons }) => [...lessons.lessons, ...(lessons.boss === undefined ? [] : [lessons.boss])].map((lesson) => ({ world, lesson })));
  const [{ lesson: first } = {}, { world, lesson: second } = {}] = path;
  if (first === undefined || second === undefined || world === undefined) throw new Error("The course needs two nodes.");

  await page.goto("./learn/");
  const nodes = await mapNodes(page);
  await expect(page.locator('.map__node[data-next="true"]')).toHaveAccessibleName(t.map.node.open(first.texts.en.title));
  await expect(nodes.nth(1)).toHaveAttribute("data-state", "locked");

  await page.locator(".map__continue").getByRole("link", { name: t.map.continue }).click();
  await expect(page.locator(".lesson__title")).toHaveText(first.texts.en.title);
  expect(await walkLesson(page, first, "en", false)).toBe(true);
  await endMoments(page, true);

  await page.getByRole("link", { name: t.lesson.backToCourse }).click();
  await expect(page).toHaveURL(/\/learn\/$/);
  await expect(nodes.first()).toHaveAccessibleName(t.map.node.done(first.texts.en.title, 3));
  const next = page.locator('.map__node[data-next="true"]');
  await expect(next).toHaveAccessibleName(t.map.node.open(second.texts.en.title));
  await page.locator(".map__continue").getByRole("link", { name: t.map.continue }).click();
  await expect(page).toHaveURL(new RegExp(`${world.id}/${second.id}/$`));
  await expect(page.locator(".lesson__title")).toHaveText(second.texts.en.title);
  expect(errors).toEqual([]);
});

test("a_skip_test_opens_a_world", async ({ page }) => {
  test.setTimeout(120_000);
  const errors = watchErrors(page);
  await pastSetup(page);
  const { world, lessons } = await firstWorld();
  const skipTest = lessons.skipTest;
  if (skipTest === undefined) throw new Error("The first world has no skip test.");

  // No world of the course has a locked node and a skip test before its first lesson, so the test is
  // opened by its address. Once one has, the map's own link opens it here.
  await page.goto("./learn/");
  await mapNodes(page);
  const band = page.locator(".map__world").first();
  const link = band.getByRole("link", { name: t.map.skipTest.action });
  if ((await link.count()) > 0) await link.click();
  else await page.goto(lessonPath({ world: world.id, lesson: skipTest }, "en"));
  await expect(page).toHaveURL(new RegExp(`${world.id}/${skipTest.id}/$`));
  expect(await walkLesson(page, skipTest, "en", false)).toBe(true);
  await expect(page.locator(".lesson-end__skip")).toHaveText(t.lesson.end.skipOpened(world.title.en));
  await endMoments(page, true);

  await page.getByRole("link", { name: t.lesson.backToCourse }).click();
  await mapNodes(page);
  await expect(band.locator('.map__node[data-state="locked"]')).toHaveCount(0);
  await expect(band.getByRole("link", { name: t.map.skipTest.action })).toHaveCount(0);
  const boss = band.locator('.map__node[data-boss="true"]');
  if (lessons.boss !== undefined) await expect(boss).toHaveAttribute("data-state", "open");
  expect(errors).toEqual([]);
});

test("a_finished_lesson_shows_its_stars_and_xp", async ({ page }) => {
  test.setTimeout(90_000);
  const errors = watchErrors(page);
  await pastSetup(page);
  const { world, lessons } = await firstWorld();
  const first = lessons.lessons[0]!;

  await page.goto(lessonPath({ world: world.id, lesson: first }, "en"));
  expect(await walkLesson(page, first, "en", false)).toBe(true);
  await expect(page.locator(".lesson-end__stars")).toHaveAttribute("aria-label", t.lesson.end.stars(3));
  await expect(page.locator(".lesson-end__status")).toHaveText(t.lesson.end.saved);
  await expect(page.locator(".lesson-end .xp-counter__live")).toHaveText(t.lesson.end.xp(String(3 * XP_PER_STAR)));
  await endMoments(page, true);

  // A replay adds no star, so it earns the practice XP.
  await page.getByRole("button", { name: t.lesson.end.again }).click();
  expect(await walkLesson(page, first, "en", false)).toBe(true);
  await expect(page.locator(".lesson-end .xp-counter__live")).toHaveText(t.lesson.end.xp(String(PRACTICE_XP)));
  expect(errors).toEqual([]);
});

test("a_new_badge_is_shown_once", async ({ page }) => {
  test.setTimeout(90_000);
  const errors = watchErrors(page);
  await pastSetup(page);
  const { world, lessons } = await firstWorld();
  const first = lessons.lessons[0]!;
  const badges = t.badges.fixed;

  await page.goto(lessonPath({ world: world.id, lesson: first }, "en"));
  expect(await walkLesson(page, first, "en", false)).toBe(true);
  const firstRun = await endMoments(page, true);
  expect(firstRun).toEqual(expect.arrayContaining([badges["first-note"].name, badges["first-lesson"].name, badges["first-three-stars"].name]));
  expect(new Set(firstRun).size).toBe(firstRun.length);

  await page.getByRole("button", { name: t.lesson.end.again }).click();
  expect(await walkLesson(page, first, "en", false)).toBe(true);
  const secondRun = await endMoments(page, false);
  expect(secondRun.filter((name) => firstRun.includes(name))).toEqual([]);

  // The profile shows each badge of the first run as earned.
  await page.goto("./learn/profile/");
  for (const name of firstRun.filter((name) => Object.values(badges).some((badge) => badge.name === name))) {
    await expect(page.locator('.profile__badge[data-earned="true"] .medal__caption').getByText(name, { exact: true })).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("the_first_visit_setup_runs_once", async ({ page }) => {
  const errors = watchErrors(page);
  const setup = t.setup;
  await page.goto("./learn/");
  const dialog = page.getByRole("dialog", { name: setup.title });
  await expect(dialog).toBeVisible();

  // The piano, with the key check.
  await dialog.getByRole("button", { name: new RegExp(`^${setup.device.screen.name}`) }).click();
  const next = dialog.getByRole("button", { name: setup.next, exact: true });
  await expect(next).toBeDisabled();
  await clickKey(page, dialog.locator('.setup__keys .piano-keys__key[data-pitch="60"]'));
  await expect(dialog.locator(".setup__status")).toHaveAttribute("data-heard", "true");
  await next.click();

  // The experience, then the daily goal.
  await dialog.getByRole("button", { name: setup.before.yes }).click();
  await expect(dialog.getByText(setup.before.skipTests)).toBeVisible();
  await dialog.getByRole("radio", { name: setup.goal.option(30, setup.goal.names["30"]) }).click();
  await dialog.getByRole("button", { name: setup.goal.start }).click();
  await expect(dialog).toBeHidden();

  // The goal is kept, and a reload shows the map with no setup.
  const stored = () => page.evaluate((key) => (JSON.parse(localStorage.getItem(key) ?? "{}") as { values?: Record<string, unknown> }).values ?? {}, STORAGE_KEY);
  await expect.poll(stored).toMatchObject({ learnDailyGoal: "30", learnSetupDone: true });
  await page.reload();
  await mapNodes(page);
  await page.waitForTimeout(1000);
  await expect(dialog).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("a_setup_left_while_it_loads_opens_on_the_next_visit_only", async ({ browser, baseURL }) => {
  // The service worker would answer the chunk before the route could hold it.
  const context = await browser.newContext({ baseURL: baseURL!, serviceWorkers: "block" });
  try {
    const page = await context.newPage();
    const errors = watchErrors(page);
    // The setup's chunk is held until the learner has left the map.
    let release = () => {};
    const released = new Promise<void>((resolve) => (release = resolve));
    let held = false;
    let served: Promise<void> = Promise.resolve();
    await page.route(/\/chunk-[^/]+\.js$/, async (route) => {
      const response = await route.fetch();
      const body = await response.text();
      if (!body.includes("setup__panel")) return route.fulfill({ response, body });
      held = true;
      served = released.then(() => route.fulfill({ response, body }));
      await served;
    });
    await page.goto("./");
    await page.locator(".landing-hero").getByRole("link", { name: t.landing.hero.start }).click();
    await expect(page).toHaveURL(/\/learn\/$/);
    await expect.poll(() => held).toBe(true);

    // Back on the landing page, the setup's code arrives and opens nothing over it.
    await page.goBack();
    await expect(page).not.toHaveURL(/\/learn\/$/);
    release();
    await served;
    await page.waitForTimeout(500);
    const dialog = page.getByRole("dialog", { name: t.setup.title });
    await expect(dialog).toHaveCount(0);

    // The map opens the setup on its next show.
    await page.goForward();
    await expect(dialog).toBeVisible();
    expect(errors).toEqual([]);
  } finally {
    await context.close();
  }
});

test("the_map_and_the_profile_pass_the_layout_checks", async ({ browser, baseURL }) => {
  test.setTimeout(240_000);
  const flaws: string[] = [];
  const pages = [
    ["learn/", ".map__body:not([aria-busy])"],
    ["learn/profile/", ".profile__body:not([aria-busy])"],
  ] as const;
  for (const [path, body] of pages) {
    for (const [width, height] of [
      [390, 844],
      [1280, 800],
    ] as const) {
      const ready = `body:has(${body}):has(.bar-slot[data-ready="true"])`;
      const found = await checkLayout(browser, new URL(path, baseURL).href, { widths: [width], height, themes: THEMES, locales: LOCALES, reducedMotion: true, storage: PAST_SETUP, ready });
      flaws.push(...found.map((flaw) => `${path} ${flaw}`));
    }
  }
  expect(flaws).toEqual([]);
});
