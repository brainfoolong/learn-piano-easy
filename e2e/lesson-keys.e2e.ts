/**
 * The computer keyboard in a lesson: it shifts by octaves to reach a step's notes, and the step's keys
 * mark its reach. The scale step plays above the default keys, so only the shift lets the keys play it.
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
  const bar = stage(page).locator(".keyboard__reach");
  await expect(bar).toHaveAttribute("data-first", String(reach.first + shift));
  await expect(bar).toHaveAttribute("data-last", String(reach.last + shift));
  await expect(bar).toBeVisible();

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
  const bar = stage(page).locator(".keyboard__reach");
  for (const notes of phrase.notes) {
    let left = pitchesOf(notes);
    while (left.length > 0) {
      const first = Number(await bar.getAttribute("data-first"));
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
