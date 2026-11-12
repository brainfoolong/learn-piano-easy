/**
 * The keys of a lesson: the 3D piano view a step shows, and the computer keyboard that plays it.
 *
 * The lesson's steps share one view, which a step without keys does not show, and a touch on a key plays
 * the step. The computer keyboard shifts by octaves to reach a step's notes, and the view marks its
 * reach. The scale step plays above the default keys, so only the shift lets the keys play it.
 */
import { expect, test } from "@playwright/test";
import { messagesOf } from "../src/i18n/locale";
import { DEFAULT_KEYS, keyReach, octaveShift } from "../src/input/keyboard";
import { inputHas, stepsToRun } from "../src/learn/lesson-run";
import { pitchesOf } from "../src/learn/model";
import { solutionOf } from "../src/learn/steps/solution";
import { courseLessons, lessonPath, onStep, playMove, stage, watchErrors } from "./lesson-walk";

test("the_computer_keyboard_shifts_an_octave_to_play_a_scale_above_its_keys", async ({ page }) => {
  const t = messagesOf("en").lesson;
  const entry = (await courseLessons()).find(({ world, lesson }) => world === "scales-and-keys" && lesson.id === "g-major");
  if (entry === undefined) throw new Error("The course has no lesson scales-and-keys/g-major.");
  const steps = stepsToRun(entry.lesson.steps, inputHas(false));
  const at = steps.findIndex((step) => step.id === "g-scale-up");
  const scale = steps[at];
  if (scale?.kind !== "play-notes") throw new Error("The lesson has no play-notes step g-scale-up.");
  const notes = scale.notes.flatMap(pitchesOf);
  const reach = keyReach("")!;
  const shift = octaveShift(notes, reach);
  // The scale lies above the default keys, so the step proves a shift.
  expect(notes.some((pitch) => pitch > reach.last)).toBe(true);
  expect(shift).toBe(12);

  const errors = watchErrors(page);
  await page.goto(lessonPath(entry, "en"));
  for (const [index, step] of steps.slice(0, at).entries()) {
    await onStep(page, index);
    for (const move of solutionOf(step)) await playMove(page, move, "en");
    await page.locator(".lesson__band").getByRole("button", { name: t.band.continue }).click();
  }
  await onStep(page, at);
  const piano = stage(page).locator(".piano-keys");
  await expect(piano).toBeVisible();
  await expect(piano).toHaveAttribute("data-reach-first", String(reach.first + shift));
  await expect(piano).toHaveAttribute("data-reach-last", String(reach.last + shift));

  const band = page.locator(".lesson__band");
  for (const pitch of notes) await page.keyboard.press(DEFAULT_KEYS.get(pitch - shift)!);
  await expect(band.getByRole("button", { name: t.band.continue })).toBeVisible();
  expect(errors).toEqual([]);
});

test("a_chord_too_wide_for_the_computer_keys_is_played_a_key_at_a_time", async ({ page }) => {
  const t = messagesOf("en").lesson;
  const entry = (await courseLessons()).find(({ world, lesson }) => world === "both-hands" && lesson.id === "changing-the-bass-on-the-beat");
  if (entry === undefined) throw new Error("The course has no lesson both-hands/changing-the-bass-on-the-beat.");
  const steps = stepsToRun(entry.lesson.steps, inputHas(false));
  const at = steps.findIndex((step) => step.id === "change-under-tune");
  const phrase = steps[at];
  if (phrase?.kind !== "play-notes") throw new Error("The lesson has no play-notes step change-under-tune.");
  const reach = keyReach("")!;
  // A chord of the G bass and the tune's D spans more than any one octave shift of the keys reaches.
  expect(phrase.notes.some((notes) => [-24, -12, 0, 12].every((shift) => pitchesOf(notes).some((pitch) => pitch < reach.first + shift || pitch > reach.last + shift)))).toBe(true);

  const errors = watchErrors(page);
  await page.goto(lessonPath(entry, "en"));
  for (const [index, step] of steps.slice(0, at).entries()) {
    await onStep(page, index);
    for (const move of solutionOf(step)) await playMove(page, move, "en");
    await page.locator(".lesson__band").getByRole("button", { name: t.band.continue }).click();
  }
  await onStep(page, at);
  const piano = stage(page).locator(".piano-keys");
  for (const notes of phrase.notes) {
    let left = pitchesOf(notes);
    while (left.length > 0) {
      const first = Number(await piano.getAttribute("data-reach-first"));
      const shift = first - reach.first;
      const pitch = left.find((p) => p >= first && p <= reach.last + shift);
      if (pitch === undefined) throw new Error(`No key of ${left.join("+")} is in reach at shift ${shift}.`);
      await page.keyboard.press(DEFAULT_KEYS.get(pitch - shift)!);
      left = left.filter((p) => p !== pitch);
    }
  }
  await expect(page.locator(".lesson__band").getByRole("button", { name: t.band.continue })).toBeVisible();
  expect(errors).toEqual([]);
});

/** The lesson *Find C*, which opens on a demo, explains, then asks for keys, and its steps without MIDI. */
async function findC() {
  const entry = (await courseLessons()).find(({ world, lesson }) => world === "meet-the-piano" && lesson.id === "find-c");
  if (entry === undefined) throw new Error("The course has no lesson meet-the-piano/find-c.");
  return { entry, steps: stepsToRun(entry.lesson.steps, inputHas(false)) };
}

test("a_step_shows_the_3d_piano", async ({ page }) => {
  const t = messagesOf("en").lesson;
  const { entry, steps } = await findC();
  const kinds = steps.map((step) => step.kind);
  expect(kinds.slice(0, 3)).toEqual(["demo", "explain", "find-key"]);
  const errors = watchErrors(page);
  await page.goto(lessonPath(entry, "en"));
  const piano = stage(page).locator(".piano-keys");
  const next = page.locator(".lesson__band").getByRole("button", { name: t.band.continue });

  // The demo shows its notes on the 3D piano, which only shows.
  await onStep(page, 0);
  await expect(piano).toHaveCount(1);
  await expect(piano.locator(".piano-keys__canvas")).toBeVisible();
  await expect(piano).not.toHaveAttribute("data-webgl", "off");
  await expect(piano).toHaveAttribute("data-interactive", "false");
  await expect(piano).toHaveAttribute("data-first", "48");
  await piano.evaluate((element) => Object.assign(window, { lessonPiano: element }));
  for (const move of solutionOf(steps[0]!)) await playMove(page, move, "en");
  await next.click();

  // A step without keys shows no piano.
  await onStep(page, 1);
  await expect(piano).toHaveCount(0);
  await next.click();

  // A step that listens shows its keys on the same view, which takes a touch.
  await onStep(page, 2);
  await expect(piano).toHaveCount(1);
  expect(await piano.evaluate((element) => element === (window as { lessonPiano?: Element }).lessonPiano)).toBe(true);
  await expect(piano).toHaveAttribute("data-interactive", "true");
  await expect(piano).toHaveAttribute("data-first", "41");
  await expect(piano).toHaveAttribute("data-last", "79");
  const keys = piano.locator(".piano-keys__key");
  await expect(keys).toHaveCount(79 - 41 + 1);
  // Each key's span lies on the canvas, so a test or a screen reader finds the key it names.
  const canvas = (await piano.locator(".piano-keys__canvas").boundingBox())!;
  const boxes = await keys.evaluateAll((spans) => spans.map((span) => span.getBoundingClientRect().toJSON() as DOMRect));
  for (const box of boxes) {
    expect(box.width).toBeGreaterThan(0);
    expect(box.height).toBeGreaterThan(0);
    expect(box.left).toBeGreaterThanOrEqual(canvas.x - 1);
    expect(box.right).toBeLessThanOrEqual(canvas.x + canvas.width + 1);
    expect(box.top).toBeGreaterThanOrEqual(canvas.y - 1);
    expect(box.bottom).toBeLessThanOrEqual(canvas.y + canvas.height + 1);
  }
  expect(errors).toEqual([]);
});

test.describe(() => {
  test.use({ hasTouch: true });

  test("a_touch_on_a_3d_key_plays_the_step", async ({ page }) => {
    const t = messagesOf("en").lesson;
    const { entry, steps } = await findC();
    const at = steps.findIndex((step) => step.id === "find-middle-c");
    const errors = watchErrors(page);
    await page.goto(lessonPath(entry, "en"));
    const band = page.locator(".lesson__band");
    for (const [index, step] of steps.slice(0, at).entries()) {
      await onStep(page, index);
      for (const move of solutionOf(step)) await playMove(page, move, "en");
      await band.getByRole("button", { name: t.band.continue }).click();
    }
    await onStep(page, at);
    const tap = async (pitch: number) => {
      const key = stage(page).locator(`.piano-keys__key[data-pitch="${pitch}"]`);
      await key.scrollIntoViewIfNeeded();
      const box = (await key.boundingBox())!;
      await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
      return key;
    };

    // A touch on the wrong key is marked a mistake, and the step keeps listening.
    const wrong = await tap(62);
    await expect(wrong).toHaveAttribute("data-mark", "mistake");
    await expect(page.getByText(t.findKey.wrong, { exact: true })).toBeVisible();

    // A touch on middle C passes the step.
    const right = await tap(60);
    await expect(right).toHaveAttribute("data-mark", "correct");
    await expect(band.getByRole("button", { name: t.band.continue })).toBeVisible();
    expect(errors).toEqual([]);
  });
});
