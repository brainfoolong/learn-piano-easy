/**
 * The step kinds' views, by kind: the one table the lesson view mounts a step from. Its type asks for
 * every kind, so a new kind without a view fails the type check.
 */
import type { Step, StepKind } from "../model";
import { demoStep } from "./demo";
import { explainStep } from "./explain";
import { findKeyStep } from "./find-key";
import { listenStep } from "./listen";
import { playNotesStep } from "./play-notes";
import { quizStep } from "./quiz";
import { readNoteStep } from "./read-note";
import { rhythmTapStep } from "./rhythm-tap";
import { recapStep } from "./recap";
import { songStep } from "./song";
import type { StepView } from "./step";

/** Each kind's view. */
export const STEP_VIEWS: { [K in StepKind]: StepView<Extract<Step, { kind: K }>> } = {
  explain: explainStep,
  demo: demoStep,
  "find-key": findKeyStep,
  "play-notes": playNotesStep,
  "rhythm-tap": rhythmTapStep,
  "read-note": readNoteStep,
  listen: listenStep,
  quiz: quizStep,
  song: songStep,
  recap: recapStep,
};

/** The view of `step`'s kind. */
export function viewOf(step: Step): StepView<Step> {
  return STEP_VIEWS[step.kind] as StepView<Step>;
}
