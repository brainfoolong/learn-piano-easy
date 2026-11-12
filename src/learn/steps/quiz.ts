/**
 * The `quiz` step: a question and two to four answers, each a button of `src/learn/steps/answer.ts`.
 *
 * - **A wrong pick never fails.** Its button is marked and disabled, the band says try again, and the
 *   learner picks another. After `HINT_AFTER` wrong picks, the right answer is highlighted.
 * - **The right pick passes,** marks its button, and disables the rest.
 * - **The answers are a group** named by the catalog, and each button's state is `aria-disabled` with
 *   a mark, so a screen reader hears which were tried.
 */
import { messagesOf } from "../../i18n/locale";
import { el } from "../../ui/dom";
import type { QuizStep } from "../model";
import { answerButton } from "./answer";
import { judgeChoice, scoreOf, showsHint } from "./judge";
import type { StepView } from "./step";

export const quizStep: StepView<QuizStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.quiz;
  let mistakes = 0;
  let passed = false;
  const hint = el("p", { class: "lesson-quiz__hint", attrs: { "aria-live": "polite" } });
  const buttons = (host.texts.answers ?? []).map((answer, index) => answerButton({ text: answer, onPick: () => pick(index) }));
  const pick = (index: number) => {
    const chosen = buttons[index];
    if (passed || chosen === undefined || chosen.dataset.mark !== undefined) return;
    if (judgeChoice(step.right, index)) {
      passed = true;
      chosen.dataset.mark = "correct";
      for (const button of buttons) button.disabled = button !== chosen;
      host.pass({ mistakes, score: scoreOf(mistakes) });
      return;
    }
    mistakes += 1;
    chosen.dataset.mark = "mistake";
    chosen.setAttribute("aria-disabled", "true");
    host.tryAgain(t.wrong);
    if (showsHint(mistakes)) {
      buttons[step.right]?.setAttribute("data-hint", "");
      hint.textContent = t.hint;
    }
  };
  element.append(
    el("div", {
      class: "lesson-step lesson-quiz",
      children: [
        el("p", { class: "lesson-step__text", text: host.texts.text }),
        el("div", { class: "lesson-quiz__answers", attrs: { role: "group", "aria-label": t.answers }, children: buttons }),
        hint,
      ],
    }),
  );
  return { dispose: () => {} };
};
