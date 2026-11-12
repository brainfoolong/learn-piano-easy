import { LOCALES } from "../i18n/locale";
import { expect, test } from "../testing";
import { loadCourse } from "./course";
import { allSteps, lessonProblems, pitchesOf } from "./model";
import { keyReach, octaveShift } from "../input/keyboard";

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

test("every_key_a_lesson_asks_for_is_in_reach_of_the_default_computer_keys", async () => {
  const reach = keyReach("")!;
  const fits = (pitch: number, shift: number) => pitch >= reach.first + shift && pitch <= reach.last + shift;
  const stuck: string[] = [];
  for (const { world, lessons } of await loadCourse()) {
    for (const lesson of [...lessons.lessons, lessons.boss!, lessons.skipTest!]) {
      for (const step of allSteps(lesson.steps)) {
        const entries =
          step.kind === "play-notes" ? step.notes.map(pitchesOf)
          : step.kind === "find-key" && !step.anyOctave ? [[step.key]]
          : step.kind === "read-note" && step.answer === "play" ? step.notes.map((note) => [note])
          : step.kind === "rhythm-tap" && step.notes !== undefined ? step.notes.map((note) => [note.note])
          : [];
        // The step shifts the keys for all its notes, and a phrase re-aims them at the keys of each entry not yet pressed.
        let shift = octaveShift(entries.flat(), reach);
        for (const entry of entries) {
          let left = entry;
          while (left.length > 0) {
            if (step.kind === "play-notes") shift = octaveShift(left, reach, shift);
            const key = left.find((pitch) => fits(pitch, shift));
            if (key === undefined) {
              stuck.push(`${world.id}/${lesson.id}/${step.id}: ${left.join("+")}`);
              break;
            }
            left = left.filter((pitch) => pitch !== key);
          }
        }
      }
    }
  }
  expect(stuck).toEqual([]);
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
