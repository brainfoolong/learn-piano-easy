/**
 * A lesson's run, without a view: the steps it runs on the learner's input, and the stars it earns.
 *
 * Decisions, and what each costs:
 * - **The steps are chosen once, at the start.** A step that needs touch or the pedal runs its
 *   `instead` steps on an input without them. A MIDI keyboard connecting halfway through then changes
 *   nothing, and the step bar grows only when the learner swaps a step out.
 * - **Only a MIDI keyboard reports touch and the pedal,** as `docs/curriculum.md` says. One that lacks
 *   either, such as one with no pedal plugged in, gets the step's `instead` once the learner says so,
 *   through `withoutNeed`. A guess from the input could be wrong, and the learner always knows.
 * - **The stars follow the accuracy of the steps that check:** the mean of their scores, read by
 *   `starsFor` in `src/learn/game/xp.ts`. A step that only shows never costs a star. A finished lesson
 *   always earns a star, since a step never fails.
 */
import { starsFor } from "./game/xp";
import { CHECKING_KINDS, type InputNeed, type Step } from "./model";
import type { StepResult } from "./steps/step";

/** The steps of `steps` the learner runs, each replaced by its `instead` where `has` lacks its need. */
export function stepsToRun(steps: readonly Step[], has: (need: InputNeed) => boolean): Step[] {
  return steps.flatMap((step) => (step.needs === undefined || has(step.needs) ? [step] : (step.instead ?? [])));
}

/**
 * `steps` with the step at `index` replaced by its `instead` steps, for a MIDI keyboard that lacks the
 * step's need after all, such as one with no pedal. A step without them stays as it is.
 */
export function withoutNeed(steps: readonly Step[], index: number): Step[] {
  const step = steps[index];
  if (step?.instead === undefined) return [...steps];
  return [...steps.slice(0, index), ...step.instead, ...steps.slice(index + 1)];
}

/** What an input has beyond notes: a MIDI keyboard has touch and the pedal, and the others have neither. */
export function inputHas(midi: boolean): (need: InputNeed) => boolean {
  return () => midi;
}

/** The accuracy, from 0 to 1, of `results` over the checking steps of `steps`. A lesson that checks nothing is 1. */
export function accuracyOf(steps: readonly Step[], results: readonly StepResult[]): number {
  let checking = 0;
  let sum = 0;
  steps.forEach((step, index) => {
    if (!CHECKING_KINDS.has(step.kind)) return;
    checking += 1;
    sum += results[index]?.score ?? 1;
  });
  return checking === 0 ? 1 : sum / checking;
}

/** The stars, from 1 to 3, that `results` earn, one result per step of `steps`. */
export function starsOf(steps: readonly Step[], results: readonly StepResult[]): 1 | 2 | 3 {
  return starsFor(accuracyOf(steps, results));
}

/** The name of a lesson in the progress log: `<world>/<lesson>`. */
export function lessonKey(world: string, lesson: string): string {
  return `${world}/${lesson}`;
}
