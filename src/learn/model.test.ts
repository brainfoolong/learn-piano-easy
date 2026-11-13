import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LOCALES } from "../i18n/locale";
import { readGuide } from "../library/guide";
import type { CatalogSong } from "../library/search";
import { expect, test } from "../testing";
import { COURSE, loadCourseTexts } from "./course";
import type { Finger } from "../theory/fingering";
import { allSteps, type DemoStep, type Lesson, lessonProblems, mergeTexts, STEP_KINDS, type SongStep } from "./model";

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

/** Every lesson of the course with its texts in every locale: each world's lessons, its boss and its skip test. */
async function courseLessons(): Promise<Lesson[]> {
  for (const locale of LOCALES) await loadCourseTexts(locale);
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

/** `sampleLesson` with its demo's two notes replaced by `notes`. */
function withDemoNotes(notes: DemoStep["notes"]): Lesson {
  const sample = sampleLesson();
  return { ...sample, steps: sample.steps.map((step) => (step.id === "hear" && step.kind === "demo" ? { ...step, notes } : step)) };
}

test("a_demo_names_a_finger_for_every_note_or_none", () => {
  expect(lessonProblems(withDemoNotes([{ note: 60, at: 0, beats: 1, finger: 1 }, { note: 62, at: 1, beats: 1, finger: 2, hand: "right" }]), LOCALES)).toEqual([]);
  expect(lessonProblems(withDemoNotes([{ note: 48, at: 0, beats: 1, finger: 5, hand: "left" }, { note: 55, at: 1, beats: 1, finger: 1, hand: "left" }]), LOCALES)).toEqual([]);
  expect(lessonProblems(withDemoNotes([{ note: 60, at: 0, beats: 1, finger: 1 }, { note: 62, at: 1, beats: 1 }]), LOCALES)).toEqual(["step hear names fingers for 1 of 2 notes"]);
  expect(lessonProblems(withDemoNotes([{ note: 60, at: 0, beats: 1, hand: "left" }, { note: 62, at: 1, beats: 1 }]), LOCALES)).toEqual(["step hear names a hand but no fingers"]);
});

test("a_demo_finger_is_one_to_five", () => {
  const off = (finger: number) => withDemoNotes([{ note: 60, at: 0, beats: 1, finger: 1 }, { note: 62, at: 1, beats: 1, finger: finger as Finger }]);
  for (const finger of [1, 5]) expect(lessonProblems(off(finger), LOCALES)).toEqual([]);
  for (const finger of [0, 6, 2.5]) expect(lessonProblems(off(finger), LOCALES)).toEqual(["step hear has a finger outside 1 to 5"]);
});

test("every_lesson_has_its_texts_in_every_locale", async () => {
  const sample = sampleLesson();
  const [first, second] = LOCALES;
  const secondTexts = sample.texts[second!]!;
  const { sum: _, ...withoutRecap } = secondTexts.steps;
  const missing: Lesson = { ...sample, texts: { ...sample.texts, [second!]: { ...secondTexts, steps: withoutRecap } } };
  expect(lessonProblems(missing, LOCALES)).toEqual([`${second} step sum has no texts`]);
  const { [second!]: __, ...onlyFirst } = sample.texts;
  expect(lessonProblems({ ...sample, texts: onlyFirst as Lesson["texts"] }, LOCALES)).toEqual([`it has no ${second} texts`]);
  expect(lessonProblems(sample, [first!])).toEqual([]);

  for (const lesson of await courseLessons()) {
    for (const locale of LOCALES) expect(Object.keys(lesson.texts[locale]?.steps ?? {}).sort()).toEqual(allSteps(lesson.steps).map((step) => step.id).sort());
  }
});

test("a_missing_lesson_text_shows_in_english", () => {
  const english = sampleLesson().texts.en;
  const merged = mergeTexts(english, {
    title: "Ejemplo",
    steps: { idea: { text: "Una idea." }, ask: { answers: ["Re", "Do"] }, sum: { text: "Aprendiste:", points: ["Dónde está Do", "Cómo marcar el pulso"] }, gone: { text: "Sin paso." } },
  } as Parameters<typeof mergeTexts>[1]);
  expect(merged.title).toBe("Ejemplo");
  expect(merged.steps.idea).toEqual({ text: "Una idea." });
  // A step the translation lacks, and a step's text it lacks, show the English.
  expect(merged.steps.find).toEqual(english.steps.find);
  expect(merged.steps.ask!.text).toBe(english.steps.ask!.text);
  // A list of another length shows the English list, since the quiz names its right answer by index.
  expect(merged.steps.ask!.answers).toEqual(english.steps.ask!.answers);
  expect(merged.steps.sum!.points).toEqual(["Dónde está Do", "Cómo marcar el pulso"]);
  // A step the lesson lacks is dropped.
  expect(Object.keys(merged.steps).sort()).toEqual(Object.keys(english.steps).sort());
  expect(lessonProblems({ ...sampleLesson(), texts: { en: english, de: merged } }, LOCALES)).toEqual([]);
});

test("every_song_step_names_a_version_of_ours", async () => {
  const songOf = (lesson: Lesson) => allSteps(lesson.steps).filter((step): step is SongStep => step.kind === "song");
  const [tune] = songOf(sampleLesson());
  expect(songProblems(tune!)).toEqual([]);
  expect(songProblems({ ...tune!, file: "ours/no-such-song/common.mid" })).toEqual(["step tune names ours/no-such-song/common.mid, which is no version of ours"]);
  expect(songProblems({ ...tune!, practice: 99 })).toEqual([`step tune names practice step 99, which ${tune!.file} lacks`]);

  for (const lesson of await courseLessons()) for (const step of songOf(lesson)) expect([lesson.id, ...songProblems(step)]).toEqual([lesson.id]);
});
