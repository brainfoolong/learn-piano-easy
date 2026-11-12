/**
 * Learn Piano's lessons pass the layout checks at each step, in a real browser.
 *
 * - **The checks walk `sampleLessons` of `e2e/lesson-walk.ts`,** the fewest lessons that hold every
 *   step kind and role, through `walkLesson`. They measure each step and the end screen.
 * - **Each lesson is measured in two `VIEWS`:** a phone in dark German, and a desktop in light English.
 *   German's longer words stress the narrow page, and each theme is drawn once. Decision 0010 says why.
 * - **A song step is measured, and the walk ends there,** since playing a song adds minutes and no
 *   layout.
 * - **Each sampled lesson is a test,** grouped under one name, so the workers share them. This file is
 *   its own check, apart from `e2e/learn.e2e.ts`.
 */
import { expect, test, type Browser } from "@playwright/test";
import { judgePage } from "../src/ui/layout-geometry";
import { drawn, englishShown, type LOCALES, measure, recordShifts, type THEMES, TOUCH_MAX_WIDTH } from "./layout-check";
import { lessonPath, sampleLessons, walkLesson, type CourseLesson } from "./lesson-walk";

/** The time the checks may spend on one lesson in one view, in ms. */
const LAYOUT_MS = 60_000;

/** A page the layout checks walk a lesson in: its width, theme and locale. */
interface View {
  width: number;
  theme: (typeof THEMES)[number];
  locale: (typeof LOCALES)[number];
}

/** The views each lesson is measured in: a phone in dark German, and a desktop in light English. */
const VIEWS: readonly View[] = [
  { width: 390, theme: "dark", locale: "de" },
  { width: 1280, theme: "light", locale: "en" },
];

/** A lesson in one view. */
interface LayoutCase extends View {
  entry: CourseLesson;
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

const SAMPLE = await sampleLessons();

test.describe("each_step_kind_passes_the_layout_checks", () => {
  for (const entry of SAMPLE) {
    test(`${entry.world}/${entry.lesson.id}`, async ({ browser, baseURL }) => {
      test.setTimeout(VIEWS.length * LAYOUT_MS);
      const flaws = await Promise.all(VIEWS.map((view) => lessonFlaws(browser, baseURL!, { entry, ...view })));
      expect(flaws.flat().sort()).toEqual([]);
    });
  }
});
