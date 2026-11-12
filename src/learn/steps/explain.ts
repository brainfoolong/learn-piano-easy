/**
 * The `explain` step: one short idea beside its animated illustration. It passes as it mounts, so the
 * band's Continue shows at once and the learner reads at their own pace.
 */
import { el } from "../../ui/dom";
import { illustration } from "../illustration";
import type { ExplainStep } from "../model";
import { SCENES } from "../scenes";
import type { StepView } from "./step";

export const explainStep: StepView<ExplainStep> = (element, step, host) => {
  const scene = step.illustration === undefined ? undefined : SCENES[step.illustration];
  const drawing = scene === undefined ? undefined : illustration(scene());
  element.append(
    el("div", {
      class: "lesson-step lesson-explain",
      children: [drawing?.element, el("p", { class: "lesson-step__text", text: host.texts.text })],
    }),
  );
  host.pass({ mistakes: 0, score: 1 });
  return { dispose: () => drawing?.dispose() };
};
