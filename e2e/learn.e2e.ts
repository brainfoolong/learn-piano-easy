/**
 * Learn Piano's lessons in a real browser: a lesson of each step kind runs to its end on its steps'
 * solutions, hands its song to the player and back, and asks before the learner leaves it. A timed key
 * whose clock runs out marks the key, on Playwright's clock. A song step that reads the sheet shows it
 * in the player, and its way back restores the learner's sheet settings. Its hidden falling notes live
 * in the scene's canvas, which this test cannot read. `e2e/learn-layout.e2e.ts` holds the layout checks.
 *
 * - **The walk plays `sampleLessons` of `e2e/lesson-walk.ts`,** the fewest lessons that hold every step
 *   kind and role. `src/learn/model.test.ts` proves every lesson valid without a browser.
 * - **Each sampled lesson is a test,** grouped under one name, so the workers share them.
 */
import { expect, test, type Page } from "@playwright/test";
import { messagesOf } from "../src/i18n/locale";
import { inputHas, stepsToRun } from "../src/learn/lesson-run";
import { solutionOf } from "../src/learn/steps/solution";
import { STORAGE_KEY } from "../src/settings/store";
import { bindSongKeys, courseLessons, hasSong, lessonPath, onStep, playMove, playSong, sampleLessons, songPlan, stage, walkLesson, watchErrors, type CourseLesson } from "./lesson-walk";

/**
 * The time the walk of one lesson may take, in ms. A rhythm lesson's tap rounds play in real time. A
 * lesson with a song gets `SONG_WALK_MS`, since CI draws the player's scene in software.
 */
const WALK_MS = 45_000;
const SONG_WALK_MS = 120_000;

/** Walks `entry` in English in `page` and checks its end screen: three stars, and saved. */
async function walkToEnd(page: Page, entry: CourseLesson): Promise<void> {
  const t = messagesOf("en").lesson;
  await page.goto(lessonPath(entry, "en"));
  await expect(page.locator(".lesson__title")).toHaveText(entry.lesson.texts.en.title);
  expect(await walkLesson(page, entry.lesson, "en", true, async () => {})).toBe(true);
  await expect(page.locator(".lesson-end__stars")).toHaveAttribute("aria-label", t.end.stars(3));
  await expect(page.locator(".lesson-end__status")).toHaveText(t.end.saved);
}

const SAMPLE = await sampleLessons();

test.describe("each_step_kind_runs_to_its_end_with_its_solution", () => {
  for (const entry of SAMPLE) {
    test(`${entry.world}/${entry.lesson.id}`, async ({ page }) => {
      test.setTimeout(hasSong(entry.lesson) ? SONG_WALK_MS : WALK_MS);
      const errors = watchErrors(page);
      if (hasSong(entry.lesson)) await bindSongKeys(page);
      await walkToEnd(page, entry);
      expect(errors).toEqual([]);
    });
  }
});

test("a_song_step_opens_the_player_and_returns_its_result", async ({ page }) => {
  test.setTimeout(120_000);
  const errors = watchErrors(page);
  const t = messagesOf("en").lesson;
  const entry = (await courseLessons()).find(({ lesson }) => lesson.steps.some((step) => step.kind === "song"));
  if (entry === undefined) throw new Error("The course has no lesson with a song step.");
  const steps = stepsToRun(entry.lesson.steps, inputHas(false));
  const index = steps.findIndex((step) => step.kind === "song");
  const song = steps[index]!;
  if (song.kind !== "song") throw new Error("unreachable");
  const percent = Math.round(song.accuracy * 100);

  await page.goto(lessonPath(entry, "en"));
  for (const [i, step] of steps.slice(0, index).entries()) {
    await onStep(page, i);
    for (const move of solutionOf(step)) await playMove(page, move, "en");
    await page.locator(".lesson__band").getByRole("button", { name: t.band.continue }).click();
  }
  await onStep(page, index);

  // The banner's way back returns without a take, and the step waits for the song.
  await stage(page).locator('[data-answer="play"]').click();
  await expect(page).toHaveURL(/\/play\/$/);
  const banner = page.locator(".lesson-banner");
  await expect(banner).toBeVisible();
  await expect(banner).toContainText(entry.lesson.texts.en.steps[song.id]!.text);
  await banner.getByRole("button").click();
  await onStep(page, index);
  await expect(stage(page)).toContainText(t.song.notYet(percent));

  // A take at the step's accuracy comes back as the step's result.
  await stage(page).locator('[data-answer="play"]').click();
  await playSong(page, songPlan(song.file, song.practice));
  await onStep(page, index);
  await expect(stage(page).locator(".lesson-song__status")).toContainText(/\d+%/);
  await expect(page.locator(".lesson__band").getByRole("button", { name: t.band.continue })).toBeVisible();
  expect(errors).toEqual([]);
});

test("a_song_step_that_reads_the_sheet_shows_it_and_gives_it_back", async ({ page }) => {
  test.setTimeout(60_000);
  const errors = watchErrors(page);
  const t = messagesOf("en").lesson;
  const entry = (await courseLessons()).find(({ lesson }) => lesson.steps.some((step) => step.kind === "song" && step.view === "sheet"));
  if (entry === undefined) throw new Error("The course has no song step that reads the sheet.");
  const steps = stepsToRun(entry.lesson.steps, inputHas(false));
  const index = steps.findIndex((step) => step.kind === "song" && step.view === "sheet");
  const stored = () => page.evaluate((key) => (JSON.parse(localStorage.getItem(key) ?? "{}") as { values?: Record<string, unknown> }).values ?? {}, STORAGE_KEY);

  await page.goto(lessonPath(entry, "en"));
  const before = await stored();
  for (const [i, step] of steps.slice(0, index).entries()) {
    await onStep(page, i);
    for (const move of solutionOf(step)) await playMove(page, move, "en");
    await page.locator(".lesson__band").getByRole("button", { name: t.band.continue }).click();
  }
  await onStep(page, index);

  // The player shows the song's sheet music while the step's request is open.
  await stage(page).locator('[data-answer="play"]').click();
  await expect(page).toHaveURL(/\/play\/$/);
  const sheet = page.getByRole("region", { name: "Sheet music" });
  await expect(sheet).toBeVisible();
  await expect(sheet.locator("g.chord").first()).toBeAttached({ timeout: 20_000 });

  // The way back returns to the step, and the learner's own sheet settings come back.
  await page.locator(".lesson-banner").getByRole("button").click();
  await onStep(page, index);
  const after = await stored();
  expect([after.enableSheet, after.sheetMinNoteDenom]).toEqual([before.enableSheet, before.sheetMinNoteDenom]);
  await page.goto("./play/");
  await expect(page.locator(".lesson-banner")).toBeHidden();
  await expect(sheet).toBeHidden();
  expect(errors).toEqual([]);
});

test("a_timed_key_runs_out_and_marks_the_key", async ({ page }) => {
  const t = messagesOf("en").lesson;
  const entry = (await courseLessons()).find(({ lesson }) => lesson.steps.some((step) => step.kind === "find-key" && step.seconds !== undefined));
  if (entry === undefined) throw new Error("The course has no timed find-key step.");
  const index = entry.lesson.steps.findIndex((step) => step.kind === "find-key" && step.seconds !== undefined);
  const step = entry.lesson.steps[index]!;
  if (step.kind !== "find-key" || step.seconds === undefined) throw new Error("The timed step is no find-key step.");
  await page.clock.install();
  await page.goto(lessonPath(entry, "en"));
  for (let at = 0; at < index; at += 1) {
    await onStep(page, at);
    await page.getByRole("button", { name: t.band.continue }).click();
  }
  await onStep(page, index);
  const timer = page.locator(".lesson-timer");
  await expect(timer).toHaveText(t.findKey.secondsLeft(step.seconds));
  await page.clock.runFor(step.seconds * 1000 + 500);
  await expect(timer).toHaveAttribute("data-done", "true");
  await expect(page.getByText(t.findKey.timeUp, { exact: true })).toBeVisible();
  await expect(page.getByText(t.findKey.hint, { exact: true })).toBeVisible();
});

test("every_find_key_step_shows_middle_c_in_the_middle_so_the_c_left_of_it_passes", async ({ page }) => {
  const t = messagesOf("en").lesson;
  const entry = (await courseLessons()).find(({ lesson }) => lesson.id === "find-c");
  if (entry === undefined) throw new Error("The course has no lesson find-c.");
  const steps = stepsToRun(entry.lesson.steps, inputHas(false));
  const low = steps.findIndex((step) => step.id === "find-low-c");
  // F2 to G5: the keys of every find-key step. The step's module loads a stylesheet, so Node cannot import its constant.
  const range = [41, 79];
  const shown = () => stage(page).locator(".keyboard__key").evaluateAll((keys) => keys.map((key) => Number(key.getAttribute("data-pitch"))));
  const errors = watchErrors(page);
  await page.goto(lessonPath(entry, "en"));
  for (const [index, step] of steps.slice(0, low).entries()) {
    await onStep(page, index);
    if (step.kind === "find-key") {
      const pitches = await shown();
      expect([Math.min(...pitches), Math.max(...pitches)]).toEqual(range);
    }
    for (const move of solutionOf(step)) await playMove(page, move, "en");
    await page.locator(".lesson__band").getByRole("button", { name: t.band.continue }).click();
  }
  await onStep(page, low);
  const pitches = await shown();
  expect([Math.min(...pitches), Math.max(...pitches)]).toEqual(range);
  expect(pitches.filter((pitch) => pitch % 12 === 0).sort((a, b) => a - b)).toEqual([48, 60, 72]);
  await playMove(page, { do: "play", notes: [60] }, "en");
  await expect(page.getByText(t.findKey.wrong, { exact: true })).toBeVisible();
  await playMove(page, { do: "play", notes: [48] }, "en");
  await expect(page.locator(".lesson__band").getByRole("button", { name: t.band.continue })).toBeVisible();
  expect(errors).toEqual([]);
});

test("leaving_a_lesson_asks_first", async ({ page }) => {
  const t = messagesOf("en").lesson;
  const [entry] = await courseLessons();
  await page.goto(lessonPath(entry!, "en"));
  await onStep(page, 0);
  const own = page.url();

  // Staying keeps the lesson where it was.
  await page.getByRole("button", { name: t.leave }).click();
  const asked = page.getByRole("dialog", { name: t.leaveDialog.title });
  await expect(asked).toBeVisible();
  await asked.getByRole("button", { name: t.leaveDialog.stay }).click();
  await expect(asked).toBeHidden();
  expect(page.url()).toBe(own);
  await onStep(page, 0);

  // A link of the top bar asks too, and leaving goes where it points.
  await page.locator(".site-bar-host").getByRole("link", { name: "Just Play Piano" }).click();
  await expect(asked).toBeVisible();
  await asked.getByRole("button", { name: t.leaveDialog.leave, exact: true }).click();
  await expect(page).toHaveURL(/\/play\/$/);
});
