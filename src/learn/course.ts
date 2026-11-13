/**
 * The course of *Learn Piano*: its worlds, in the order the learner meets them on the map.
 *
 * Decisions, and what each costs:
 * - A world joins the course by one entry here, and its lessons stay in their own chunk until a page
 *   of *Learn Piano* loads it. A page outside the course then costs only the worlds' titles.
 * - Every world's `load` adds the skip test of `src/learn/skip-test.ts`, so the map, a lesson's page
 *   and the build all see the same one.
 * - A world loads its lessons once, and each locale's texts once, so a lesson's texts gain a locale in
 *   place. A page awaits `loadTexts` of its locale before it reads a lesson's texts.
 * - The pseudo-locale's lesson texts derive from the English through `pseudoTree`, so they need no chunk.
 */
import { isPseudoLocale, loadLocale, type Locale } from "../i18n/locale";
import { pseudoTree } from "../i18n/pseudo";
import { lessonKey } from "./lesson-run";
import { type Lesson, mergeTexts, type World, type WorldLessons } from "./model";
import { translateSkipTest, withSkipTest } from "./skip-test";

/**
 * A world whose `load` adds the built skip test to the lessons `lessons` loads, once. Its `loadTexts`
 * fills each lesson's texts of a locale from the world's chunk of that locale, merged with the English.
 */
function world(spec: Omit<World, "load" | "loadTexts">, lessons: () => Promise<WorldLessons>): World {
  let loading: Promise<WorldLessons> | undefined;
  const made: World = {
    ...spec,
    load: () => {
      loading ??= lessons().then(
        (written) => withSkipTest(made, written),
        (error: unknown) => {
          loading = undefined;
          throw error;
        },
      );
      return loading;
    },
    loadTexts: async (locale: Locale) => {
      const [written, built] = await Promise.all([lessons(), made.load(), loadLocale(locale)]);
      const own = [...built.lessons, built.boss, written.skipTest].filter((lesson): lesson is Lesson => lesson !== undefined);
      if (own.every((lesson) => lesson.texts[locale] !== undefined)) return;
      const translation = (await built.translations?.[locale]?.()) ?? {};
      for (const lesson of own) {
        lesson.texts[locale] = isPseudoLocale(locale) ? pseudoTree(lesson.texts.en, locale) : mergeTexts(lesson.texts.en, translation[lesson.id] ?? {});
      }
      translateSkipTest(made, written, built, locale);
    },
  };
  return made;
}

/** Loads every world's lessons and their texts in `locale`. */
export async function loadCourseTexts(locale: Locale): Promise<void> {
  await Promise.all(COURSE.map((world) => world.loadTexts(locale)));
}

/** Every world of the course, in order. */
export const COURSE: readonly World[] = [
  world({ id: "meet-the-piano", title: { en: "Meet the piano", de: "Das Klavier kennenlernen", es: "Conoce el piano", zh: "认识钢琴", hi: "पियानो से पहचान" }, accent: "violet" }, async () => (await import("./lessons/meet-the-piano/index")).meetThePiano),
  world({ id: "first-melodies", title: { en: "First melodies", de: "Erste Melodien", es: "Primeras melodías", zh: "初识旋律", hi: "पहली धुनें" }, accent: "teal" }, async () => (await import("./lessons/first-melodies/index")).firstMelodies),
  world({ id: "rhythm", title: { en: "Rhythm", de: "Rhythmus", es: "Ritmo", zh: "节奏", hi: "लय" }, accent: "amber" }, async () => (await import("./lessons/rhythm/index")).rhythm),
  world({ id: "reading-music", title: { en: "Reading music", de: "Noten lesen", es: "Leer partituras", zh: "识谱", hi: "नोट पढ़ना" }, accent: "sky" }, async () => (await import("./lessons/reading-music/index")).readingMusic),
  world({ id: "both-hands", title: { en: "Both hands", de: "Beide Hände", es: "Las dos manos", zh: "双手合奏", hi: "दोनों हाथ" }, accent: "coral" }, async () => (await import("./lessons/both-hands/index")).bothHands),
  world({ id: "scales-and-keys", title: { en: "Scales and keys", de: "Tonleitern und Tonarten", es: "Escalas y tonalidades", zh: "音阶与调", hi: "स्केल" }, accent: "lime" }, async () => (await import("./lessons/scales-and-keys/index")).scalesAndKeys),
  world({ id: "chords", title: { en: "Chords", de: "Akkorde", es: "Acordes", zh: "和弦", hi: "कॉर्ड" }, accent: "rose" }, async () => (await import("./lessons/chords/index")).chords),
  world({ id: "expression", title: { en: "Expression", de: "Ausdruck", es: "Expresión", zh: "音乐表现", hi: "भाव से बजाना" }, accent: "indigo" }, async () => (await import("./lessons/expression/index")).expression),
];

/**
 * The world `world` and its lesson `lesson`, a boss or a skip test included, with its texts in `locale`
 * loaded. Undefined when either is missing.
 */
export async function findLesson(world: string, lesson: string, locale: Locale): Promise<{ world: World; lesson: Lesson } | undefined> {
  const found = COURSE.find((w) => w.id === world);
  if (found === undefined) return undefined;
  await found.loadTexts(locale);
  const { lessons, boss, skipTest } = await found.load();
  const match = [...lessons, boss, skipTest].find((l) => l?.id === lesson);
  return match === undefined ? undefined : { world: found, lesson: match };
}

/** One world with its lessons loaded. */
export interface LoadedWorld {
  world: World;
  lessons: WorldLessons;
}

/** Every world of the course with its lessons, in order. */
export function loadCourse(): Promise<LoadedWorld[]> {
  return Promise.all(COURSE.map(async (world) => ({ world, lessons: await world.load() })));
}

/** The world of each boss lesson of `course`, by its `<world>/<lesson>` key. */
export function bossesOf(course: readonly LoadedWorld[]): Map<string, string> {
  return new Map(course.flatMap(({ world, lessons }) => (lessons.boss === undefined ? [] : [[lessonKey(world.id, lessons.boss.id), world.id] as const])));
}
