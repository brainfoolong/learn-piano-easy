/**
 * The skip test of a world: a short set of its lessons' checking steps, which opens the whole world once
 * passed, so a learner who can already play is never locked out.
 *
 * - **Its steps are the world's `skipPicks`,** one checking step from each of five lessons, chosen by
 *   the world's author. A world that names none gets the last `STEPS_PER_LESSON` checking steps of each
 *   lesson, in the course's order, since a lesson's last checks use all it taught. A step that needs
 *   touch or the pedal is left out, so the test runs the same on every input.
 * - **Its id is `skip-test`,** so its page is `learn/<world>/skip-test/`, and its event names it.
 * - **Its texts are each step's own,** under the step's new id, and its title names the world. It is
 *   built with English texts, and `translateSkipTest` adds a locale's once its lessons hold theirs.
 * - **It passes at `SKIP_TEST_STARS` stars,** as `src/learn/game/unlock.ts` reads the log. A test that
 *   let every step be retried until it passed would test nothing.
 *
 * Decisions, and what each costs:
 * - **The test is built, never written,** so every world has one the day its lessons exist, and it
 *   follows each change to them. A world may still write its own in `WorldLessons.skipTest`, which wins.
 * - **A step's id becomes `<lesson>-<step>`,** unique across the world. A past event of a skip test
 *   then names its step even after a lesson is reordered.
 *
 * Bounds it keeps: a test has at most `MAX_STEPS` steps, so a world of more than twelve lessons keeps
 * the steps of its last twelve.
 */
import { DEFAULT_LOCALE, type Locale, messagesOf } from "../i18n/locale";
import { CHECKING_KINDS, type Lesson, type LessonTexts, MAX_STEPS, type SkipPick, type Step, textsOf, type World, type WorldLessons } from "./model";

/** The id of every built skip test. */
export const SKIP_TEST_ID = "skip-test";
/** The checking steps each lesson gives its world's skip test. */
export const STEPS_PER_LESSON = 2;
/** The stars a skip test must earn to open its world. */
export const SKIP_TEST_STARS = 2;

/** Whether `step` can stand in a skip test: it checks, and runs on every input. */
function testable(step: Step): boolean {
  return CHECKING_KINDS.has(step.kind) && step.needs === undefined;
}

/**
 * The steps of `lessons` a skip test asks, each with its lesson: those `picks` name, or the lessons'
 * last checks when `picks` is undefined. A pick of a missing or untestable step throws.
 */
function pickedSteps(world: World, lessons: readonly Lesson[], picks?: readonly SkipPick[]): { lesson: Lesson; step: Step }[] {
  const picked =
    picks === undefined
      ? lessons.flatMap((lesson) =>
          lesson.steps
            .filter(testable)
            .slice(-STEPS_PER_LESSON)
            .map((step) => ({ lesson, step })),
        )
      : picks.map(({ lesson, step: id }) => {
          const step = lesson.steps.find((s) => s.id === id);
          if (step === undefined || !testable(step)) throw new Error(`The skip test of ${world.id} picks ${lesson.id}/${id}, which is no checking step.`);
          return { lesson, step };
        });
  return picked.slice(-MAX_STEPS);
}

/** The texts in `locale` of the skip test of `picked`: its title names `world`, and each step keeps its own texts. */
function skipTestTexts(world: World, picked: readonly { lesson: Lesson; step: Step }[], locale: Locale): LessonTexts {
  return {
    title: messagesOf(locale).map.skipTest.title(world.title[locale]),
    steps: Object.fromEntries(picked.map(({ lesson, step }) => [`${lesson.id}-${step.id}`, textsOf(lesson, locale).steps[step.id] ?? { text: "" }])),
  };
}

/**
 * The skip test titled for `world`, of the steps `picks` name, or of `lessons`' last checks when
 * `picks` is undefined. Its texts are English. Undefined when no step is left.
 */
export function skipTestOf(world: World, lessons: readonly Lesson[], picks?: readonly SkipPick[]): Lesson | undefined {
  const picked = pickedSteps(world, lessons, picks);
  if (picked.length === 0) return undefined;
  const steps: Step[] = picked.map(({ lesson, step }) => ({ ...step, id: `${lesson.id}-${step.id}` }));
  return { id: SKIP_TEST_ID, steps, texts: { en: skipTestTexts(world, picked, DEFAULT_LOCALE) } };
}

/** `lessons` of `world`, with the skip test built from them when the world writes none. */
export function withSkipTest(world: World, lessons: WorldLessons): WorldLessons {
  if (lessons.skipTest !== undefined) return lessons;
  const skipTest = skipTestOf(world, lessons.lessons, lessons.skipPicks);
  return skipTest === undefined ? lessons : { ...lessons, skipTest };
}

/** Gives the built skip test of `built` its texts in `locale`, once its lessons hold theirs. A written one is left as it is. */
export function translateSkipTest(world: World, written: WorldLessons, built: WorldLessons, locale: Locale): void {
  if (written.skipTest !== undefined || built.skipTest === undefined) return;
  built.skipTest.texts[locale] = skipTestTexts(world, pickedSteps(world, built.lessons, built.skipPicks), locale);
}
