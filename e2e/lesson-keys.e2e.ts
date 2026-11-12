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
