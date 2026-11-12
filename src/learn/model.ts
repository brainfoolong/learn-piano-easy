/**
 * The lesson model of *Learn Piano*: the course, its worlds, their lessons, each step kind and its
 * options, and `lessonProblems`, which checks a lesson against the rules of `docs/curriculum.md`.
 *
 * Decisions, and what each costs:
 * - A lesson is data. Its structure is `<lesson>.ts`, and its texts are `<lesson>.en.ts` and
 *   `<lesson>.de.ts` beside it. The English file's object is the texts' type, so a German file that
 *   misses a text fails the type check. More files than one JSON, and a missing text never ships.
 * - A step's texts sit under its id in `LessonTexts.steps`. Every step has a `text`. A `quiz` adds its
 *   `answers`, and a `recap` adds its `points`. The structure then holds no prose, and a translator
 *   edits text files only.
 * - A note is a MIDI note number, as everywhere else in the app.
 * - A step that checks touch strength or the pedal names the `demo` and the `quiz` that replace it on
 *   an input without them. The two live inline, under `instead`, so they can never go missing.
 * - A `play-notes` step judges touch or the pedal per entry, never both, since a step names one need.
 *   Touch has two levels split at `LOUD_FROM`, so a crescendo is taught as soft notes, then loud ones.
 * - A world's lessons load as one chunk, through `World.load`. The map loads every world's chunk to
 *   draw its nodes, and a page outside *Learn Piano* loads none.
 * - A world's skip test is built by `src/learn/skip-test.ts` from the steps its `skipPicks` name, or
 *   from its lessons' last checks when it names none, unless the world writes its own.
 * - A `play-notes` entry may be a chord, which passes once each of its notes is pressed, in any order.
 *   Two hands then play together, while how long a key is held is never judged.
 * - A phrase whose rests are judged is a `rhythm-tap` step with `notes`, never a timed `play-notes`.
 *   It reuses the count-in, the metronome and the rounds of `rhythm-tap`, and `play-notes` keeps waiting.
 *   Its notes start on whole beats, so a beat's dot marks each one, and the e2e walk presses on a beat.
 * - A lesson names the skills of `src/library/skills.ts` it teaches, the same ids our songs' guides use.
 * - `lessonProblems` returns every problem as a sentence, never only the first. A lesson author then
 *   fixes a lesson in one pass, and the course's test prints them all.
 *
 * Bounds it keeps: a lesson has 1 to `MAX_STEPS` steps, a quiz 2 to 4 answers, and a recap 2 to 4 points.
 *
 * Gaps:
 * - A world's boss is optional until `learn-first-steps` ships the first ones.
 * - Whether a song step's file is a version of ours is checked against the catalog by
 *   `src/learn/model.test.ts`, since this module never reads the catalog.
 */
import type { Locale } from "../i18n/locale";
import type { SkillId } from "../library/skills";
import { SCENES } from "./scenes";

/** The kinds of step, in the order of the curriculum's table. */
export const STEP_KINDS = ["explain", "demo", "find-key", "play-notes", "rhythm-tap", "read-note", "listen", "quiz", "song", "recap"] as const;

/** A kind of step. */
export type StepKind = (typeof STEP_KINDS)[number];

/** The most steps a lesson has. A lesson takes three to six minutes. */
export const MAX_STEPS = 24;

/** The lowest and the highest note of an 88-key piano. */
export const LOWEST_NOTE = 21;
export const HIGHEST_NOTE = 108;

/** What a step needs from the input beyond notes: touch strength or the pedal. */
export type InputNeed = "touch" | "pedal";

/** One note of a phrase a step plays to the learner. */
export interface PhraseNote {
  /** The MIDI note. */
  note: number;
  /** When it starts, in beats from the phrase's start. */
  at: number;
  /** How long it sounds, in beats. */
  beats: number;
  /** How hard it is played, from 1 to 127, so a demo can play soft and loud. Absent, it plays at the lesson's usual strength. */
  velocity?: number;
}

/** What every step has. */
interface StepBase {
  /** Unique in its lesson. The texts name the step by it. */
  id: string;
  /** What the step needs beyond notes. Without it on the input, `instead` runs in its place. */
  needs?: InputNeed;
  /** The steps that replace this one on an input without `needs`: a `demo`, then a `quiz`. */
  instead?: [DemoStep, QuizStep];
}

/** Reads one short idea beside an animated illustration. */
export interface ExplainStep extends StepBase {
  kind: "explain";
  /** The illustration's scene, a name of `SCENES` in `src/learn/scenes.ts`, or none for text alone. */
  illustration?: string;
}

/** Watches and hears the piano play a phrase. */
export interface DemoStep extends StepBase {
  kind: "demo";
  bpm: number;
  notes: PhraseNote[];
}

/** Presses the key the step names. */
export interface FindKeyStep extends StepBase {
  kind: "find-key";
  /** The MIDI note to press. */
  key: number;
  /** Whether the same note in any octave passes. */
  anyOctave: boolean;
  /** The seconds the learner has, for a timed hunt. When they run out, they count one mistake and mark the key. */
  seconds?: number;
}

/** One entry of a phrase the learner plays: a MIDI note, or the notes of a chord played together. */
export type PlayEntry = number | number[];

/** The MIDI notes of `entry`, one for a note and every one for a chord. */
export function pitchesOf(entry: PlayEntry): number[] {
  return typeof entry === "number" ? [entry] : entry;
}

/** How hard a note is played: `soft` below `LOUD_FROM`, `loud` from it. */
export type Touch = "soft" | "loud";

/** The MIDI velocity from which a played note counts as loud, the middle of 1 to 127. */
export const LOUD_FROM = 64;

/** Plays a short phrase, which waits for each note or chord. */
export interface PlayNotesStep extends StepBase {
  kind: "play-notes";
  /** The entries, in the order they are played. A chord passes once each of its notes is pressed. */
  notes: PlayEntry[];
  /** How hard each entry is played, one per entry. A step with it needs `touch`. */
  touch?: Touch[];
  /** Whether the sustain pedal is down as each entry is played, one per entry. A step with it needs `pedal`. */
  pedal?: boolean[];
}

/** Taps any key on the beat with a metronome, or plays a phrase's keys in time with it. */
export interface RhythmTapStep extends StepBase {
  kind: "rhythm-tap";
  bpm: number;
  /** The beats of a round, after one bar of count-in. Without `notes`, the learner taps each of them. */
  taps: number;
  /**
   * The phrase the learner plays in time, in place of a tap on every beat. Each note starts on a whole
   * beat, after the last one ends, and ends by `taps`. A gap between notes is a rest, judged as silence.
   */
  notes?: PhraseNote[];
  /** The share of beats, or of the phrase's notes, that must be hit inside the window, from 0 to 1. */
  pass: number;
}

/** Names a note shown on the staff, or plays it. */
export interface ReadNoteStep extends StepBase {
  kind: "read-note";
  clef: "treble" | "bass";
  /** How the learner answers: by the note's name, or by playing it. */
  answer: "name" | "play";
  /** The MIDI notes asked, one question each. */
  notes: number[];
  /** The share of right answers that passes, from 0 to 1. */
  pass: number;
}

/** Hears two sounds and answers: higher, lower or the same. */
export interface ListenStep extends StepBase {
  kind: "listen";
  /** The pairs of MIDI notes asked, the first played first. */
  pairs: [number, number][];
  /** The share of right answers that passes, from 0 to 1. */
  pass: number;
}

/** Picks one of two to four answers. */
export interface QuizStep extends StepBase {
  kind: "quiz";
  /** The index of the right answer in the texts' `answers`. */
  right: number;
}

/** Plays a song of ours in the player, guided by its practice step. */
export interface SongStep extends StepBase {
  kind: "song";
  /** The version's catalog file, from `songs/`, such as `ours/<slug>/common.mid`. */
  file: string;
  /** The index of the practice step of the version's guide that the player applies. */
  practice: number;
  /** The accuracy a scored take must reach, from 0 to 1. */
  accuracy: number;
  /** How the player shows the song, when the step asks a view of its own. */
  view?: SongView;
}

/** A view a song step asks of the player. `sheet` shows the sheet music and hides the falling notes, so the learner reads. */
export type SongView = "sheet";

/** Reads what the lesson taught. */
export interface RecapStep extends StepBase {
  kind: "recap";
}

/** One step of a lesson. */
export type Step = ExplainStep | DemoStep | FindKeyStep | PlayNotesStep | RhythmTapStep | ReadNoteStep | ListenStep | QuizStep | SongStep | RecapStep;

/** The texts of one step in one locale. */
export interface StepTexts {
  text: string;
  /** A `quiz`'s answers, two to four. */
  answers?: string[];
  /** A `recap`'s points, two to four. */
  points?: string[];
}

/** The texts of one lesson in one locale. */
export interface LessonTexts {
  /** The lesson's title, which names its one idea. */
  title: string;
  /** Each step's texts, by its id, the replacing steps of `instead` included. */
  steps: Record<string, StepTexts>;
}

/** One lesson: its structure, and its texts in every locale. */
export interface Lesson {
  /** Unique in its world, kebab-case. */
  id: string;
  /** The skills of our songs' guides that the lesson teaches, so the library can name the lesson for each. */
  skills?: SkillId[];
  steps: Step[];
  texts: Record<Locale, LessonTexts>;
}

/** A world's lessons, which load as one chunk. */
export interface WorldLessons {
  lessons: Lesson[];
  /** The world's last challenge, a song of ours or a timed key hunt. */
  boss?: Lesson;
  /** A short set of the world's checking steps, which opens the world once passed. */
  skipTest?: Lesson;
  /** The checking steps the world's author picks for its skip test, each a lesson and a step id of it. */
  skipPicks?: SkipPick[];
}

/** One step of a skip test: a lesson of the world, and the id of one of its checking steps. */
export interface SkipPick {
  lesson: Lesson;
  step: string;
}

/** The accents a world can take, each a token `--c-world-<accent>` of `src/ui/tokens.css`. */
export const WORLD_ACCENTS = ["violet", "sky", "teal", "lime", "amber", "coral", "rose", "indigo"] as const;

/** A world's accent on the map and in its lessons. */
export type WorldAccent = (typeof WORLD_ACCENTS)[number];

/** One world of the course. */
export interface World {
  /** Unique in the course, kebab-case. Its lessons live in `src/learn/lessons/<id>/`. */
  id: string;
  title: Record<Locale, string>;
  accent: WorldAccent;
  /** The world's lessons, loaded on demand. */
  load: () => Promise<WorldLessons>;
}

/** The kinds of step that check the learner. A skip test is made of them. */
export const CHECKING_KINDS: ReadonlySet<StepKind> = new Set(["find-key", "play-notes", "rhythm-tap", "read-note", "listen", "quiz"]);

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** The pitch classes of the black keys. A `read-note` asked by name shows white keys only, named by a letter. */
const BLACK_CLASSES: ReadonlySet<number> = new Set([1, 3, 6, 8, 10]);

/** Whether `value` is a MIDI note on an 88-key piano. */
function isPianoNote(value: number): boolean {
  return Number.isInteger(value) && value >= LOWEST_NOTE && value <= HIGHEST_NOTE;
}

/** Whether `value` is a share from 0 to 1, above 0. */
function isShare(value: number): boolean {
  return Number.isFinite(value) && value > 0 && value <= 1;
}

/** Whether `value` is a tempo a learner can follow. */
function isTempo(value: number): boolean {
  return Number.isFinite(value) && value >= 30 && value <= 240;
}

/** Every step of `steps`, each followed by its replacing steps. */
export function allSteps(steps: readonly Step[]): Step[] {
  return steps.flatMap((step) => [step, ...(step.instead ?? [])]);
}

/** The problems of `step`'s own options, as sentences. */
function optionProblems(step: Step): string[] {
  const at = `step ${step.id}`;
  const problems: string[] = [];
  const notes = (list: readonly number[], what: string) => {
    if (list.length === 0) problems.push(`${at} has no ${what}`);
    if (!list.every(isPianoNote)) problems.push(`${at} has a ${what} off the piano`);
  };
  switch (step.kind) {
    case "explain":
      if (step.illustration !== undefined && !Object.hasOwn(SCENES, step.illustration)) problems.push(`${at} names the scene ${step.illustration}, which does not exist`);
      break;
    case "recap":
    case "quiz":
      break;
    case "demo":
      if (!isTempo(step.bpm)) problems.push(`${at} has a tempo of ${step.bpm}`);
      notes(
        step.notes.map((n) => n.note),
        "note",
      );
      if (!step.notes.every((n) => n.at >= 0 && n.beats > 0)) problems.push(`${at} has a note with no length or before the start`);
      if (!step.notes.every((n) => n.velocity === undefined || (Number.isInteger(n.velocity) && n.velocity >= 1 && n.velocity <= 127))) problems.push(`${at} has a velocity outside 1 to 127`);
      break;
    case "find-key":
      notes([step.key], "key");
      if (step.seconds !== undefined && !(Number.isFinite(step.seconds) && step.seconds >= 2 && step.seconds <= 60)) problems.push(`${at} gives ${step.seconds} seconds`);
      break;
    case "play-notes":
      notes(step.notes.flatMap(pitchesOf), "note");
      for (const entry of step.notes) {
        if (typeof entry !== "number" && (entry.length < 2 || new Set(entry).size !== entry.length)) problems.push(`${at} has a chord of fewer than two different notes`);
      }
      if (step.touch !== undefined && step.touch.length !== step.notes.length) problems.push(`${at} names ${step.touch.length} touches for ${step.notes.length} entries`);
      if (step.pedal !== undefined && step.pedal.length !== step.notes.length) problems.push(`${at} names ${step.pedal.length} pedal states for ${step.notes.length} entries`);
      if (step.touch !== undefined && step.needs !== "touch") problems.push(`${at} judges touch, so it needs touch`);
      if (step.pedal !== undefined && step.needs !== "pedal") problems.push(`${at} judges the pedal, so it needs the pedal`);
      break;
    case "rhythm-tap":
      if (!isTempo(step.bpm)) problems.push(`${at} has a tempo of ${step.bpm}`);
      if (!Number.isInteger(step.taps) || step.taps < 1) problems.push(`${at} asks for ${step.taps} taps`);
      if (!isShare(step.pass)) problems.push(`${at} passes at ${step.pass}`);
      if (step.notes !== undefined) {
        notes(
          step.notes.map((n) => n.note),
          "note",
        );
        let end = 0;
        for (const n of step.notes) {
          if (!Number.isInteger(n.at) || n.at < end || !(n.beats > 0) || n.at + n.beats > step.taps) problems.push(`${at} has a note off a whole beat, over another or past its taps`);
          end = n.at + n.beats;
        }
      }
      break;
    case "read-note":
      notes(step.notes, "note");
      if (step.answer === "name" && step.notes.some((note) => BLACK_CLASSES.has(((note % 12) + 12) % 12))) problems.push(`${at} asks a black key by name`);
      if (!isShare(step.pass)) problems.push(`${at} passes at ${step.pass}`);
      break;
    case "listen":
      notes(step.pairs.flat(), "note");
      if (step.pairs.length === 0) problems.push(`${at} asks nothing`);
      if (!isShare(step.pass)) problems.push(`${at} passes at ${step.pass}`);
      break;
    case "song":
      if (!/^ours\/[a-z0-9-]+\/[a-z]+\.mid$/.test(step.file)) problems.push(`${at} names ${step.file}, which is no version of ours`);
      if (!Number.isInteger(step.practice) || step.practice < 0) problems.push(`${at} names practice step ${step.practice}`);
      if (!isShare(step.accuracy)) problems.push(`${at} asks for an accuracy of ${step.accuracy}`);
      break;
  }
  return problems;
}

/** The problems of `texts`, one locale's texts of `steps`, as sentences that start with `locale`. */
function textProblems(steps: readonly Step[], texts: LessonTexts, locale: string): string[] {
  const problems: string[] = [];
  if (texts.title.trim() === "") problems.push(`${locale} has no title`);
  const ids = new Set(steps.map((step) => step.id));
  for (const id of Object.keys(texts.steps)) if (!ids.has(id)) problems.push(`${locale} has texts for step ${id}, which the lesson lacks`);
  for (const step of steps) {
    const own = texts.steps[step.id];
    const at = `${locale} step ${step.id}`;
    if (own === undefined) {
      problems.push(`${at} has no texts`);
      continue;
    }
    if (own.text.trim() === "") problems.push(`${at} has no text`);
    const answers = own.answers ?? [];
    if (step.kind === "quiz") {
      if (answers.length < 2 || answers.length > 4) problems.push(`${at} has ${answers.length} answers`);
      if (!Number.isInteger(step.right) || step.right < 0 || step.right >= answers.length) problems.push(`${at} names answer ${step.right} as right`);
    } else if (own.answers !== undefined) problems.push(`${at} has answers, which only a quiz uses`);
    const points = own.points ?? [];
    if (step.kind === "recap") {
      if (points.length < 2 || points.length > 4) problems.push(`${at} has ${points.length} points`);
    } else if (own.points !== undefined) problems.push(`${at} has points, which only a recap uses`);
    if ([...answers, ...points].some((line) => line.trim() === "")) problems.push(`${at} has an empty line`);
  }
  return problems;
}

/** Every problem of `lesson` against the curriculum's rules, as sentences. An empty list is a valid lesson. */
export function lessonProblems(lesson: Lesson, locales: readonly Locale[]): string[] {
  const problems: string[] = [];
  if (!KEBAB.test(lesson.id)) problems.push(`the id ${lesson.id} is not kebab-case`);
  if (lesson.steps.length === 0 || lesson.steps.length > MAX_STEPS) problems.push(`it has ${lesson.steps.length} steps`);
  const steps = allSteps(lesson.steps);
  const seen = new Set<string>();
  for (const step of steps) {
    if (!KEBAB.test(step.id)) problems.push(`step id ${step.id} is not kebab-case`);
    if (seen.has(step.id)) problems.push(`step id ${step.id} is used twice`);
    seen.add(step.id);
    problems.push(...optionProblems(step));
  }
  for (const step of lesson.steps) {
    const replaced = step.instead !== undefined;
    if (step.needs !== undefined && !replaced) problems.push(`step ${step.id} needs ${step.needs} and names nothing to replace it`);
    if (step.needs === undefined && replaced) problems.push(`step ${step.id} names steps to replace it, but needs nothing`);
    for (const inner of step.instead ?? []) {
      if (inner.needs !== undefined || inner.instead !== undefined) problems.push(`step ${inner.id} replaces a step, so it cannot need anything itself`);
    }
  }
  for (const locale of locales) {
    const texts = lesson.texts[locale];
    if (texts === undefined) problems.push(`it has no ${locale} texts`);
    else problems.push(...textProblems(steps, texts, locale));
  }
  return problems;
}
