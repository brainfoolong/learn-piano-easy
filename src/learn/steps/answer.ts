/**
 * The answer button of a step that asks for a choice: the `quiz`, `listen` and `read-note` steps.
 *
 * Each answer is a large button with a mark before its text. The mark is an empty ring until the answer
 * is judged. Then it shows a check or a cross, so a right and a wrong answer differ by shape as well as
 * by colour.
 *
 * - **The step owns the answer's state.** It sets `data-mark` to `correct` or `mistake`, and
 *   `data-hint` on the right answer once the learner is stuck. The styles in
 *   `src/learn/lesson-view.css` pick the mark's glyph from them.
 * - **Both glyphs are in the button from the start,** so a judged answer changes no element and its
 *   size never moves. The mark is hidden from a screen reader, which hears the band instead.
 */
import { el } from "../../ui/dom";
import { icon } from "../../ui/icons/icons";

/** What an answer button is made from. */
export interface AnswerOptions {
  /** The answer's text. */
  text: string;
  /** The value `data-answer` carries, for a step whose solution presses an answer by it. */
  answer?: string;
  /** A class beside `lesson-quiz__answer`, for a step that lays its answers out its own way. */
  class?: string;
  onPick: () => void;
}

/** An answer button of `options`. */
export function answerButton(options: AnswerOptions): HTMLButtonElement {
  return el("button", {
    class: options.class === undefined ? "lesson-quiz__answer" : `lesson-quiz__answer ${options.class}`,
    attrs: { type: "button", ...(options.answer === undefined ? {} : { "data-answer": options.answer }) },
    children: [
      el("span", {
        class: "lesson-quiz__mark",
        attrs: { "aria-hidden": "true" },
        children: [el("span", { class: "lesson-quiz__tick", children: [icon("check")] }), el("span", { class: "lesson-quiz__cross", children: [icon("x")] })],
      }),
      el("span", { class: "lesson-quiz__label", text: options.text }),
    ],
    on: { click: options.onPick },
  });
}
