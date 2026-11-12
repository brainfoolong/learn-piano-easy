import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LOCALES } from "../i18n/locale";
import { readGuide } from "../library/guide";
import type { CatalogSong } from "../library/search";
import { expect, test } from "../testing";
import { COURSE } from "./course";
import { allSteps, type Lesson, lessonProblems, STEP_KINDS, type SongStep } from "./model";

const SONGS = join(import.meta.dir, "../../public/songs");
const CATALOG = JSON.parse(readFileSync(join(SONGS, "catalog.json"), "utf8")) as CatalogSong[];

/** A lesson with one step of every kind, valid in every locale. */
function sampleLesson(): Lesson {
  const step = (text: string) => ({ text });
  return {
    id: "sample",
    steps: [
      { id: "idea", kind: "explain", illustration: "black-key-groups" },
      {
        id: "hear",
        kind: "demo",
        bpm: 90,
        notes: [
          { note: 60, at: 0, beats: 1 },
          { note: 62, at: 1, beats: 1 },
        ],
      },
      { id: "find", kind: "find-key", key: 60, anyOctave: true },
      { id: "phrase", kind: "play-notes", notes: [60, 62, 64] },
      { id: "beat", kind: "rhythm-tap", bpm: 80, taps: 8, pass: 0.75 },
      { id: "read", kind: "read-note", clef: "treble", answer: "name", notes: [60, 67], pass: 0.5 },
      {
        id: "loud",
        kind: "play-notes",
        notes: [60],
        needs: "touch",
        instead: [
          { id: "loud-demo", kind: "demo", bpm: 60, notes: [{ note: 60, at: 0, beats: 1 }] },
          { id: "loud-quiz", kind: "quiz", right: 0 },
        ],
      },
      { id: "ear", kind: "listen", pairs: [[60, 67]], pass: 1 },
      { id: "ask", kind: "quiz", right: 1 },
      { id: "tune", kind: "song", file: "ours/mary-had-a-little-lamb/common.mid", practice: 0, accuracy: 0.8 },
      { id: "sum", kind: "recap" },
    ],
    texts: Object.fromEntries(
      LOCALES.map((locale) => [
        locale,
        {
          title: `Sample ${locale}`,
          steps: {
            idea: step("One idea."),
            hear: step("Listen."),
            find: step("Find C."),
            phrase: step("Play C D E."),
            beat: step("Tap the beat."),
            read: step("Name the note."),
            loud: step("Play loud."),
            "loud-demo": step("Hear a loud note."),
            "loud-quiz": { text: "Was it loud?", answers: ["Yes", "No"] },
            ear: step("Higher or lower?"),
            ask: { text: "Which is C?", answers: ["D", "C", "E"] },
            tune: step("Play the tune."),
            sum: { text: "You learned:", points: ["Where C is", "How to tap a beat"] },
          },
        },
      ]),
    ) as unknown as Lesson["texts"],
  };
}

/** Every lesson of the course: each world's lessons, its boss and its skip test. */
async function courseLessons(): Promise<Lesson[]> {
  const worlds = await Promise.all(COURSE.map((world) => world.load()));
  return worlds.flatMap((world) => [...world.lessons, ...(world.boss ? [world.boss] : []), ...(world.skipTest ? [world.skipTest] : [])]);
}

/** The problems of `step` against the catalog: its file is a version of ours, and its practice step exists. */
function songProblems(step: SongStep): string[] {
  const row = CATALOG.find((song) => song.file === step.file);
  if (row?.song === undefined || row.rarity === undefined) return [`step ${step.id} names ${step.file}, which is no version of ours`];
  const guide = readGuide(JSON.parse(readFileSync(join(SONGS, "ours", row.song, "guide.json"), "utf8")));
  if (guide === undefined) return [`step ${step.id} names ${row.song}, whose guide does not read`];
  if (guide.versions[row.rarity].practice[step.practice] === undefined) return [`step ${step.id} names practice step ${step.practice}, which ${step.file} lacks`];
  return [];
}

test("every_lesson_of_the_course_is_valid", async () => {
  const sample = sampleLesson();
  expect(new Set(allSteps(sample.steps).map((step) => step.kind))).toEqual(new Set(STEP_KINDS));
  expect(lessonProblems(sample, LOCALES)).toEqual([]);

  const broken: Lesson = {
    ...sample,
    id: "Broken Lesson",
    steps: [
      { id: "find", kind: "find-key", key: 12, anyOctave: false },
      { id: "find", kind: "rhythm-tap", bpm: 500, taps: 0, pass: 2 },
      { id: "loud", kind: "play-notes", notes: [60], needs: "pedal" },
    ],
  };
  expect(lessonProblems(broken, LOCALES)).toEqual(
    expect.arrayContaining([
      "the id Broken Lesson is not kebab-case",
      "step id find is used twice",
      "step find has a key off the piano",
      "step find has a tempo of 500",
      "step find asks for 0 taps",
      "step find passes at 2",
      "step loud needs pedal and names nothing to replace it",
    ]),
  );

  for (const lesson of await courseLessons()) expect([lesson.id, ...lessonProblems(lesson, LOCALES)]).toEqual([lesson.id]);
});

test("every_lesson_has_its_texts_in_every_locale", async () => {
  const sample = sampleLesson();
  const [first, second] = LOCALES;
  const { sum: _, ...withoutRecap } = sample.texts[second!].steps;
  const missing: Lesson = { ...sample, texts: { ...sample.texts, [second!]: { ...sample.texts[second!], steps: withoutRecap } } };
  expect(lessonProblems(missing, LOCALES)).toEqual([`${second} step sum has no texts`]);
  const { [second!]: __, ...onlyFirst } = sample.texts;
  expect(lessonProblems({ ...sample, texts: onlyFirst as Lesson["texts"] }, LOCALES)).toEqual([`it has no ${second} texts`]);
  expect(lessonProblems(sample, [first!])).toEqual([]);

  for (const lesson of await courseLessons()) {
    for (const locale of LOCALES) expect(Object.keys(lesson.texts[locale]?.steps ?? {}).sort()).toEqual(allSteps(lesson.steps).map((step) => step.id).sort());
  }
});

test("every_song_step_names_a_version_of_ours", async () => {
  const songOf = (lesson: Lesson) => allSteps(lesson.steps).filter((step): step is SongStep => step.kind === "song");
  const [tune] = songOf(sampleLesson());
  expect(songProblems(tune!)).toEqual([]);
  expect(songProblems({ ...tune!, file: "ours/no-such-song/common.mid" })).toEqual(["step tune names ours/no-such-song/common.mid, which is no version of ours"]);
  expect(songProblems({ ...tune!, practice: 99 })).toEqual([`step tune names practice step 99, which ${tune!.file} lacks`]);

  for (const lesson of await courseLessons()) for (const step of songOf(lesson)) expect([lesson.id, ...songProblems(step)]).toEqual([lesson.id]);
});
