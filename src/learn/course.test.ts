import { LOCALES } from "../i18n/locale";
import { expect, test } from "../testing";
import { loadCourse } from "./course";
import { lessonProblems } from "./model";

test("every_world_has_six_to_ten_lessons_a_boss_and_a_skip_test", async () => {
  for (const { world, lessons } of await loadCourse()) {
    expect({ world: world.id, count: lessons.lessons.length >= 6 && lessons.lessons.length <= 10 }).toEqual({ world: world.id, count: true });
    expect(lessons.boss).toBeDefined();
    expect(lessons.skipTest).toBeDefined();
    for (const lesson of [...lessons.lessons, lessons.boss!, lessons.skipTest!]) {
      expect({ lesson: `${world.id}/${lesson.id}`, problems: lessonProblems(lesson, LOCALES) }).toEqual({ lesson: `${world.id}/${lesson.id}`, problems: [] });
    }
  }
});

test("the_eight_worlds_are_in_order", async () => {
  const course = await loadCourse();
  expect(course.map(({ world }) => world.id)).toEqual([
    "meet-the-piano",
    "first-melodies",
    "rhythm",
    "reading-music",
    "both-hands",
    "scales-and-keys",
    "chords",
    "expression",
  ]);
  expect(course.find(({ world }) => world.id === "expression")?.lessons.lessons.map((lesson) => lesson.id)).toEqual([
    "loud-and-soft",
    "crescendo-and-diminuendo",
    "legato",
    "staccato",
    "phrases",
    "the-sustain-pedal",
    "slowing-down",
    "playing-with-feeling",
  ]);
  expect(course.find(({ world }) => world.id === "expression")?.lessons.boss?.id).toBe("fur-elise");
});

test("the_first_four_worlds_are_in_order", async () => {
  const course = await loadCourse();
  expect(course.slice(0, 4).map(({ world }) => world.id)).toEqual(["meet-the-piano", "first-melodies", "rhythm", "reading-music"]);
  expect(course.find(({ world }) => world.id === "reading-music")?.lessons.lessons.map((lesson) => lesson.id)).toEqual([
    "the-staff",
    "the-treble-clef",
    "middle-c",
    "treble-landmarks",
    "the-bass-clef",
    "bass-landmarks",
    "the-grand-staff",
    "reading-steps-and-skips",
  ]);
});
