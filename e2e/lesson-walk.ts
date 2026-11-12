/**
 * Walks a lesson of *Learn Piano* in a real browser, on its steps' solutions. `e2e/learn.e2e.ts` and
 * `e2e/game.e2e.ts` both drive lessons through it.
 *
 * - **Every lesson is played through `solutionOf`** of `src/learn/steps/solution.ts`, so a lesson
 *   written later is played here with no new code. The steps are those `stepsToRun` picks without a
 *   MIDI keyboard, since this browser has none.
 * - **A `play` move clicks an on-screen key near its bottom edge,** where no black key covers a white one.
 * - **A `tap-beats` move taps inside the page,** on each change of the step's `data-beat`, so a tap
 *   never waits on a round trip to the test.
 * - **A `play-song` move plays the practice step's notes in its loop on the computer keys.** Where wait
 *   mode holds the song at each note, each press comes a margin after the song reaches it. Where the
 *   song plays on, the page presses each note on the audio clock the song follows, since a round trip
 *   to the test is slower than the hit window. `bindSongKeys` gives a song's notes outside the default
 *   keys a computer key each, and `playSong` presses the keys the page has bound.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, type Locator, type Page } from "@playwright/test";
import { messagesOf, type Locale } from "../src/i18n/locale";
import { DEFAULT_KEYS, keysOf } from "../src/input/keyboard";
import { momentsOf, requiredNotes, type Hands } from "../src/input/wait-mode";
import { COURSE } from "../src/learn/course";
import { inputHas, stepsToRun } from "../src/learn/lesson-run";
import type { Lesson } from "../src/learn/model";
import { solutionOf, type SolutionMove } from "../src/learn/steps/solution";
import type { CatalogSong } from "../src/library/search";
import { readMidi } from "../src/midi/smf-read";
import { songFromMidi } from "../src/midi/song";
import { DEFAULT_LEAD_IN, songSpan } from "../src/play/transport";
import { SETTINGS_VERSION, STORAGE_KEY } from "../src/settings/store";
import { lessonRoute, pageOf } from "../src/site/routes";

const SONGS = join(import.meta.dirname, "../public/songs");

/** How long after the song reaches a note the test plays it, in ms. */
const PRESS_MARGIN_MS = 400;

/** One lesson of the course, with its world and its role there. */
export interface CourseLesson {
  world: string;
  lesson: Lesson;
  role: "lesson" | "boss" | "skip-test";
}

/** Every lesson of the course: each world's lessons, its boss and its skip test. */
export async function courseLessons(): Promise<CourseLesson[]> {
  const all: CourseLesson[] = [];
  for (const world of COURSE) {
    const { lessons, boss, skipTest } = await world.load();
    for (const lesson of lessons) all.push({ world: world.id, lesson, role: "lesson" });
    if (boss !== undefined) all.push({ world: world.id, lesson: boss, role: "boss" });
    if (skipTest !== undefined) all.push({ world: world.id, lesson: skipTest, role: "skip-test" });
  }
  return all;
}

/**
 * The fewest lessons that hold every step kind and every role of the course, in course order. The
 * browser walks prove that each kind of step works. `src/learn/model.test.ts` proves every lesson valid.
 */
export async function sampleLessons(): Promise<CourseLesson[]> {
  const all = await courseLessons();
  const traits = (entry: CourseLesson) => new Set([`role:${entry.role}`, ...entry.lesson.steps.map((step) => step.kind)]);
  const missing = new Set(all.flatMap((entry) => [...traits(entry)]));
  const picked: CourseLesson[] = [];
  while (missing.size > 0) {
    let best = all[0]!;
    let gain = 0;
    for (const entry of all) {
      const adds = [...traits(entry)].filter((trait) => missing.has(trait)).length;
      if (adds > gain) [best, gain] = [entry, adds];
    }
    for (const trait of traits(best)) missing.delete(trait);
    picked.push(best);
  }
  return all.filter((entry) => picked.includes(entry));
}

/** Whether `lesson` has a song step, which opens the player and its WebGL scene. */
export const hasSong = (lesson: Lesson) => lesson.steps.some((step) => step.kind === "song");

/** The address of `lesson` in `locale`, relative to the site's root. */
export const lessonPath = ({ world, lesson }: Pick<CourseLesson, "world" | "lesson">, locale: Locale) => `./${pageOf(lessonRoute(world, lesson.id), locale).path}`;

/** Collects every uncaught error the page reports from now on. */
export function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

/** The step the lesson shows. */
export const stage = (page: Page) => page.locator(".lesson__stage");

/** Waits until the lesson shows its step `index`, counted from 0. */
export async function onStep(page: Page, index: number): Promise<void> {
  await expect(page.locator(".lesson__progress")).toHaveAttribute("aria-valuenow", String(index + 1));
}

/**
 * Clicks the centre of `key`, a span of the 3D piano view's key map, which plays its key. The span takes
 * no pointer, so the mouse clicks the canvas under it.
 */
export async function clickKey(page: Page, key: Locator): Promise<void> {
  await key.scrollIntoViewIfNeeded();
  const box = await key.boundingBox();
  if (box === null) throw new Error("The piano shows no such key.");
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
}

/** Presses the on-screen key of `pitch` on the step's piano. */
async function pressKey(page: Page, pitch: number): Promise<void> {
  await clickKey(page, stage(page).locator(`.piano-keys__key[data-pitch="${pitch}"]`));
}

/**
 * How long a rhythm round may run once its count-in begins, in ms, before `tapBeats` fails with the
 * step's phase and beat. The course's longest round lasts 15 s, and a hang would otherwise run out a
 * check's whole time.
 */
const ROUND_LIMIT_MS = 45_000;

/**
 * How long a round may wait for its first click, in ms. The first sound of a page loads the sound set,
 * which takes far longer while several browsers run at once.
 */
const START_LIMIT_MS = 120_000;

/** Taps a computer key inside the page on each beat of the shown `rhythm-tap` step, until it ends. */
async function tapBeats(page: Page, start: string): Promise<void> {
  await stage(page).getByRole("button", { name: start }).click();
  await page.evaluate(
    ({ startLimit, roundLimit }) =>
      new Promise<void>((resolve, reject) => {
        const root = document.querySelector<HTMLElement>(".lesson__stage [data-first-tap]");
        if (root === null) return resolve();
        // A round that ended before the observer was set never changes the root again.
        if (root.dataset.phase === "done") return resolve();
        const first = Number(root.dataset.firstTap);
        let tapped = -1;
        let started = root.dataset.phase !== "idle";
        const fail = () => {
          observer.disconnect();
          const what = started ? "never ended" : "never started";
          reject(new Error(`The rhythm round ${what}: phase ${root.dataset.phase}, beat ${root.dataset.beat ?? "none"}.`));
        };
        // The round's own limit counts from its count-in, so a slow first load of the sound set is apart.
        let timer = setTimeout(fail, started ? roundLimit : startLimit);
        const observer = new MutationObserver(() => {
          if (!started && root.dataset.phase !== "idle") {
            started = true;
            clearTimeout(timer);
            timer = setTimeout(fail, roundLimit);
          }
          const beat = root.dataset.beat === undefined ? -1 : Number(root.dataset.beat);
          if (beat >= first && beat !== tapped) {
            tapped = beat;
            for (const type of ["keydown", "keyup"]) window.dispatchEvent(new KeyboardEvent(type, { code: "KeyQ", key: "q" }));
          }
          if (root.dataset.phase === "done" || (started && root.dataset.phase === "idle")) {
            clearTimeout(timer);
            observer.disconnect();
            resolve();
          }
        });
        observer.observe(root, { attributes: true });
      }),
    { startLimit: START_LIMIT_MS, roundLimit: ROUND_LIMIT_MS },
  );
}

/**
 * What the player plays for a song step: its learner's moments in the loop, its speed, whether it
 * waits for each note, and the song time it starts from with the default lead-in.
 */
export interface SongPlan {
  moments: { start: number; pitches: readonly number[] }[];
  speed: number;
  wait: boolean;
  start: number;
}

/** The plan of the practice step `practice` of the version at catalog file `file`. */
export function songPlan(file: string, practice: number): SongPlan {
  const catalog = JSON.parse(readFileSync(join(SONGS, "catalog.json"), "utf8")) as CatalogSong[];
  const row = catalog.find((song) => song.file === file);
  if (row?.song === undefined || row.rarity === undefined) throw new Error(`${file} is no version of ours.`);
  const guide = JSON.parse(readFileSync(join(SONGS, "ours", row.song, "guide.json"), "utf8")) as {
    versions: Record<string, { practice: { hands: Hands; speed: number; loop: [number, number] | null; wait: boolean }[] }>;
  };
  const step = guide.versions[row.rarity]?.practice[practice];
  if (step === undefined) throw new Error(`${file} has no practice step ${practice}.`);
  const song = songFromMidi(readMidi(new Uint8Array(readFileSync(join(SONGS, file)))));
  const part = { hands: step.hands, range: { first: 21, last: 108 }, fold: false };
  const bars = song.tempoMap
    .beatsUntil(song.endTick)
    .filter((beat) => beat.beat === 0 && beat.tick < song.endTick)
    .map((beat) => beat.seconds);
  const from = step.loop === null ? 0 : (bars[step.loop[0] - 1] ?? 0);
  const to = step.loop === null ? Infinity : (bars[step.loop[1]] ?? Infinity);
  const moments = momentsOf(requiredNotes(song, part), part).filter((moment) => moment.start >= from - 1e-6 && moment.start < to - 1e-6);
  return { moments, speed: step.speed, wait: step.wait, start: songSpan(song, DEFAULT_LEAD_IN).start };
}

/**
 * Plays `plan`'s moments inside the page on the audio clock, for a step that plays on. Home moves the
 * song to `plan.start`, since an earlier lesson's loop can leave it before its own lead-in. A getter
 * around `currentTime` takes the audio time the Play click anchors the song clock at. Each moment's
 * keys then go down once the audio clock reaches its time.
 */
async function playOnTime(page: Page, plan: SongPlan, keys: string[][]): Promise<void> {
  const play = page.getByRole("button", { name: "Play", exact: true });
  await play.evaluate((button) => {
    const take: { armed: boolean; context?: BaseAudioContext; anchor?: number } = { armed: false };
    (window as unknown as { songTake: typeof take }).songTake = take;
    const own = Object.getOwnPropertyDescriptor(BaseAudioContext.prototype, "currentTime")!;
    Object.defineProperty(BaseAudioContext.prototype, "currentTime", {
      configurable: true,
      get(this: BaseAudioContext) {
        const value = own.get!.call(this) as number;
        if (take.armed && take.anchor === undefined) Object.assign(take, { context: this, anchor: value });
        return value;
      },
    });
    window.addEventListener("click", (event) => (take.armed ||= button.contains(event.target as Node)), { capture: true });
  });
  await page.mouse.move(1, 1);
  await page.keyboard.press("Home");
  await play.click();
  await page.evaluate(
    async ({ moments, speed, start, keys }) => {
      const take = (window as unknown as { songTake: { context?: BaseAudioContext; anchor?: number } }).songTake;
      const tick = () => new Promise((resolve) => setTimeout(resolve, 2));
      while (take.anchor === undefined) await tick();
      for (const [i, moment] of moments.entries()) {
        while (take.context!.currentTime < take.anchor + (moment.start - start) / speed) await tick();
        for (const type of ["keydown", "keyup"]) for (const code of keys[i]!) window.dispatchEvent(new KeyboardEvent(type, { code }));
      }
    },
    { moments: plan.moments, speed: plan.speed, start: plan.start, keys },
  );
}

/**
 * Computer keys that neither a default note key nor a default hotkey binds, in the order
 * `songKeyBindings` hands them out. The page's key events are not cancelable, so a hotkey on the same
 * key would run too and toggle, say, the loop mid-take.
 */
const SPARE_CODES = ["KeyA", "KeyK", "KeyO", "KeyP", "Digit1", "Digit4", "Digit8", "Digit9", "Semicolon", "Quote", "Backslash", "Comma", "Period", "Slash", "Backquote"];

/**
 * The `keyBindings` setting that gives a spare computer key to each note of the course's song steps
 * outside the default keys, which span C3 to C5. A boss's left hand reaches below them.
 */
export async function songKeyBindings(): Promise<string> {
  const outside = new Set<number>();
  for (const { lesson } of await courseLessons()) {
    for (const step of lesson.steps) {
      if (step.kind !== "song") continue;
      for (const moment of songPlan(step.file, step.practice).moments) for (const pitch of moment.pitches) if (!DEFAULT_KEYS.has(pitch)) outside.add(pitch);
    }
  }
  const pitches = [...outside].sort((a, b) => a - b);
  if (pitches.length > SPARE_CODES.length) throw new Error(`The songs need ${pitches.length} spare keys, and ${SPARE_CODES.length} are named.`);
  return JSON.stringify(Object.fromEntries(pitches.map((pitch, i) => [pitch, SPARE_CODES[i]])));
}

/** Binds the keys of `songKeyBindings` in `page` from its next load on, kept with its other settings. */
export async function bindSongKeys(page: Page): Promise<void> {
  await page.addInitScript(
    ({ key, version, bindings }) => {
      const stored = (JSON.parse(localStorage.getItem(key) ?? "null") as { values?: Record<string, unknown> } | null) ?? { version, values: {} };
      localStorage.setItem(key, JSON.stringify({ ...stored, values: { ...stored.values, keyBindings: bindings } }));
    },
    { key: STORAGE_KEY, version: SETTINGS_VERSION, bindings: await songKeyBindings() },
  );
}

/** Plays the song step's version in the player on `plan`, until the lesson shows again. */
export async function playSong(page: Page, plan: SongPlan): Promise<void> {
  await expect(page).toHaveURL(/\/play\/$/);
  await expect(page.locator(".lesson-banner__practice")).not.toBeEmpty({ timeout: 20_000 });
  const bindings = await page.evaluate((key) => (JSON.parse(localStorage.getItem(key) ?? "{}") as { values?: { keyBindings?: string } }).values?.keyBindings ?? "", STORAGE_KEY);
  const bound = keysOf(bindings);
  const keys = plan.moments.map((moment) =>
    moment.pitches.map((pitch) => {
      const code = bound.get(pitch);
      if (code === undefined) throw new Error(`No computer key plays note ${pitch}.`);
      return code;
    }),
  );
  if (!plan.wait) {
    await playOnTime(page, plan, keys);
    await expect(page).not.toHaveURL(/\/play\/$/, { timeout: 30_000 });
    return;
  }
  await page.mouse.move(1, 1);
  await page.getByRole("button", { name: "Play", exact: true }).click();
  await expect(page.getByRole("slider", { name: "Song position" })).toHaveAttribute("aria-valuenow", /^\d+$/, { timeout: 20_000 });
  let at = plan.moments[0]?.start ?? 0;
  await page.waitForTimeout((Math.max(0, at) / plan.speed) * 1000 + PRESS_MARGIN_MS * 2);
  for (const [i, moment] of plan.moments.entries()) {
    await page.waitForTimeout(((moment.start - at) / plan.speed) * 1000 + (i === 0 ? 0 : PRESS_MARGIN_MS));
    at = moment.start;
    for (const code of keys[i]!) await page.keyboard.down(code);
    for (const code of keys[i]!) await page.keyboard.up(code);
  }
  await expect(page).not.toHaveURL(/\/play\/$/, { timeout: 30_000 });
}

/** Plays one move of a step's solution in the lesson shown in `locale`. */
export async function playMove(page: Page, move: SolutionMove, locale: Locale): Promise<void> {
  const t = messagesOf(locale).lesson;
  switch (move.do) {
    case "skip":
      return stage(page).getByRole("button", { name: t.demo.skip }).click();
    case "choose":
      return stage(page).locator(".lesson-quiz__answer").nth(move.answer).click();
    case "play":
      for (const note of move.notes) await pressKey(page, note);
      return;
    case "answer":
      for (const answer of move.answers) await stage(page).locator(`[data-answer="${answer}"]`).click();
      return;
    case "tap-beats":
      return tapBeats(page, t.rhythmTap.start);
    case "play-song":
      throw new Error("A song move is played by `walkLesson`, which knows its practice step.");
  }
}

/**
 * Walks `lesson`, open in `page` in `locale`, through its solutions. `seen` hears each step before it is
 * solved, and the end screen. Without `songs`, the walk ends at the first song step, once it is seen.
 * Resolves whether the lesson reached its end.
 */
export async function walkLesson(page: Page, lesson: Lesson, locale: Locale, songs: boolean, seen: (where: string) => Promise<void> = async () => {}): Promise<boolean> {
  const t = messagesOf(locale).lesson;
  const steps = stepsToRun(lesson.steps, inputHas(false));
  for (const [index, step] of steps.entries()) {
    await onStep(page, index);
    await seen(`step ${step.id}`);
    if (step.kind === "song") {
      if (!songs) return false;
      await stage(page).locator('[data-answer="play"]').click();
      await playSong(page, songPlan(step.file, step.practice));
      await onStep(page, index);
    } else for (const move of solutionOf(step)) await playMove(page, move, locale);
    const next = page.locator(".lesson__band").getByRole("button", { name: t.band.continue });
    await expect(next).toBeVisible({ timeout: 15_000 });
    await next.click();
  }
  await expect(page.getByRole("heading", { name: t.end.heading })).toBeVisible();
  await seen("the end screen");
  return true;
}
