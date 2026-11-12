/**
 * Learn Piano's lessons pass the layout checks at each step, in a real browser.
 *
 * - **The checks run at a phone's and a desktop's width,** in both themes and both locales, on each step
 *   and on the end screen. Every lesson is walked through `walkLesson` of `e2e/lesson-walk.ts`.
 * - **A song step is measured, and the walk ends there,** since playing a song in every combination
 *   would add minutes and no layout.
 * - **Each world at each width and locale is a test,** grouped under one name, so the workers share the
 *   course evenly. A rhythm world's tap rounds play in real time, so one test per world would take the
 *   longest by far. This file is its own check, apart from `e2e/learn.e2e.ts`.
 * - **A world's pages run `LANES` at once,** each in its own context.
 */
import { expect, test, type Browser } from "@playwright/test";
import { COURSE } from "../src/learn/course";
import { judgePage } from "../src/ui/layout-geometry";
import { drawn, englishShown, LOCALES, measure, recordShifts, THEMES, TOUCH_MAX_WIDTH } from "./layout-check";
import { courseLessons, inLanes, LANES, lessonPath, walkLesson, type CourseLesson } from "./lesson-walk";

/** The widths of the layout checks: a phone's and a desktop's. */
const LAYOUT_WIDTHS = [390, 1280] as const;

/** The time the checks may spend on each lesson, in ms, so the timeout grows with the course. */
const LAYOUT_MS = 60_000;

/** One page the layout checks walk a lesson in: its width, theme and locale. */
interface LayoutCase {
  entry: CourseLesson;
  width: (typeof LAYOUT_WIDTHS)[number];
  theme: (typeof THEMES)[number];
  locale: (typeof LOCALES)[number];
}

/** Every string inside `value`, however deeply its objects and lists nest. */
function stringsOf(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (typeof value !== "object" || value === null) return [];
  return Object.values(value).flatMap(stringsOf);
}

/** Every layout flaw of the lesson of a case at each step, in the case's width, theme and locale. */
async function lessonFlaws(browser: Browser, baseURL: string, { entry, width, theme, locale }: LayoutCase): Promise<string[]> {
  const flaws: string[] = [];
  const own = stringsOf(entry.lesson.texts[locale]);
  const touch = width <= TOUCH_MAX_WIDTH;
  const context = await browser.newContext({
    viewport: { width, height: touch ? 844 : 800 },
    colorScheme: theme,
    locale,
    hasTouch: touch,
    reducedMotion: "reduce",
  });
  try {
    await context.addInitScript(recordShifts);
    const page = await context.newPage();
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(new URL(lessonPath(entry, locale), baseURL).href);
    await page.evaluate(() => document.fonts.ready);
    // The top bar's slot fades in once the standing is read, so it is measured once shown.
    await drawn(page, '.bar-slot[data-ready="true"]');
    await walkLesson(page, entry.lesson, locale, false, async (where) => {
      const found = [...judgePage(await measure(page, touch, errors)), ...(await englishShown(page, locale, own))];
      flaws.push(...found.map((flaw) => `${entry.world}/${entry.lesson.id} ${where}, ${width} ${theme} ${locale}: ${flaw}`));
    });
  } finally {
    await context.close();
  }
  return flaws;
}

test.describe("every_lesson_passes_the_layout_checks", () => {
  for (const { id } of COURSE) {
    for (const width of LAYOUT_WIDTHS) {
      for (const locale of LOCALES) {
        test(`${id} ${width} ${locale}`, async ({ browser, baseURL }) => {
          const lessons = (await courseLessons()).filter(({ world }) => world === id);
          expect(lessons.length).toBeGreaterThan(0);
          test.setTimeout(lessons.length * LAYOUT_MS);
          const cases = lessons.flatMap((entry) => THEMES.map((theme): LayoutCase => ({ entry, width, theme, locale })));
          const flaws: string[] = [];
          await inLanes(cases, LANES, async (c) => {
            flaws.push(...(await lessonFlaws(browser, baseURL!, c)));
          });
          expect(flaws.sort()).toEqual([]);
        });
      }
    }
  }
});
