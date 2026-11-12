/**
 * The way out of a step that needs touch or the pedal, on a MIDI keyboard that lacks it. The browser's
 * MIDI is faked with no device, so the lesson runs its full steps and no pedal ever arrives.
 */
import { expect, test } from "@playwright/test";
import { messagesOf } from "../src/i18n/locale";
import { inputHas, stepsToRun } from "../src/learn/lesson-run";
import { solutionOf } from "../src/learn/steps/solution";
import { courseLessons, lessonPath, onStep, playMove, stage, watchErrors } from "./lesson-walk";

test("a_midi_keyboard_without_a_pedal_swaps_the_pedal_step_for_its_quiz", async ({ page }) => {
  const t = messagesOf("en").lesson;
  const entry = (await courseLessons()).find(({ lesson }) => lesson.id === "the-sustain-pedal");
  if (entry === undefined) throw new Error("The course has no lesson the-sustain-pedal.");
  const steps = stepsToRun(entry.lesson.steps, inputHas(true));
  const at = steps.findIndex((step) => step.needs === "pedal");
  const demo = steps[at]?.instead?.[0];
  if (demo === undefined) throw new Error("The lesson has no pedal step with a replacement.");
  // A MIDI keyboard the browser already grants, with no device and so no pedal.
  await page.addInitScript(() => {
    const query = navigator.permissions.query.bind(navigator.permissions);
    navigator.permissions.query = (descriptor) => (descriptor.name === ("midi" as PermissionName) ? Promise.resolve({ state: "granted" } as PermissionStatus) : query(descriptor));
    Object.assign(navigator, { requestMIDIAccess: () => Promise.resolve({ inputs: new Map(), outputs: new Map(), onstatechange: null }) });
  });
  const errors = watchErrors(page);
  await page.goto(lessonPath(entry, "en"));
  await expect(page.locator(".lesson__progress")).toHaveAttribute("aria-valuemax", String(steps.length));
  for (const [index, step] of steps.slice(0, at).entries()) {
    await onStep(page, index);
    for (const move of solutionOf(step)) await playMove(page, move, "en");
    await page.locator(".lesson__band").getByRole("button", { name: t.band.continue }).click();
  }
  await onStep(page, at);
  await stage(page).getByRole("button", { name: t.lacks.pedal }).click();
  await expect(page.locator(".lesson__progress")).toHaveAttribute("aria-valuemax", String(steps.length + 1));
  await expect(stage(page)).toContainText(entry.lesson.texts.en.steps[demo.id]!.text);
  await expect(stage(page).getByRole("button", { name: t.lacks.pedal })).toHaveCount(0);
  expect(errors).toEqual([]);
});
