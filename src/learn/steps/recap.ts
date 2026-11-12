/**
 * The `recap` step: what the lesson taught, as two to four points with a check each. It passes as it
 * mounts, so the band's Continue shows at once.
 */
import { messagesOf } from "../../i18n/locale";
import { el } from "../../ui/dom";
import { icon } from "../../ui/icons/icons";
import type { RecapStep } from "../model";
import type { StepView } from "./step";

export const recapStep: StepView<RecapStep> = (element, _step, host) => {
  const t = messagesOf(host.locale).lesson.recap;
  const points = (host.texts.points ?? []).map((point) =>
    el("li", {
      class: "lesson-recap__point",
      children: [el("span", { class: "lesson-recap__check", attrs: { "aria-hidden": "true" }, children: [icon("circle-check")] }), point],
    }),
  );
  element.append(
    el("div", {
      class: "lesson-step lesson-recap",
      children: [
        el("h2", { class: "lesson-recap__heading", text: t.heading }),
        el("p", { class: "lesson-step__text", text: host.texts.text }),
        el("ul", { class: "lesson-recap__points", children: points }),
      ],
    }),
  );
  host.pass({ mistakes: 0, score: 1 });
  return { dispose: () => {} };
};
