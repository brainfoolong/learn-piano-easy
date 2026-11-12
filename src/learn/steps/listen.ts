/**
 * The `listen` step: the learner hears two notes and answers whether the second is higher, lower or
 * the same.
 *
 * - **One question per pair, in order.** Each question plays its pair as it shows, one beat each with
 *   a short gap. Play again replays it, and an answer never waits for the sound to end.
 * - **It runs in rounds, as `judge.ts` says.** A wrong answer is marked and counted, the band says try
 *   again, and the learner answers the same question again. After `HINT_AFTER` mistakes on one
 *   question, the right answer is highlighted.
 * - **A round passes at the step's share,** counting only first answers. A round with too few right
 *   starts over, and its mistakes keep counting.
 * - **Each answer is a button of `src/learn/steps/answer.ts`** and carries `data-answer`, `higher`,
 *   `lower` or `same`, which the e2e solution presses in every locale.
 * - **The judge is `compareNotes`,** a pure function the unit tests call.
 */
import { messagesOf } from "../../i18n/locale";
import { button } from "../../ui/components/button";
import { el } from "../../ui/dom";
import type { Playback } from "../lesson-sound";
import type { ListenStep, PhraseNote } from "../model";
import { answerButton } from "./answer";
import { passesRound, scoreOf, showsHint } from "./judge";
import type { StepView } from "./step";

/** How the second note of a pair compares with the first. */
export type Comparison = "higher" | "lower" | "same";

/** The answers, in the order their buttons show. */
export const COMPARISONS: readonly Comparison[] = ["higher", "lower", "same"];

/** The tempo a pair plays at, in beats per minute. */
const BPM = 72;

/** Whether `second` sounds higher, lower or the same as `first`. */
export function compareNotes(first: number, second: number): Comparison {
  return second > first ? "higher" : second < first ? "lower" : "same";
}

/** The phrase a pair plays: each note one beat, with a quarter beat of silence between them. */
export function pairPhrase([first, second]: readonly [number, number]): PhraseNote[] {
  return [
    { note: first, at: 0, beats: 1 },
    { note: second, at: 1.25, beats: 1 },
  ];
}

export const listenStep: StepView<ListenStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.listen;
  let index = 0;
  let right = 0;
  let mistakes = 0;
  let questionMistakes = 0;
  let passed = false;
  let playback: Playback | undefined;
  const counter = el("p", { class: "lesson-listen__counter", attrs: { "aria-live": "polite" } });
  const hint = el("p", { class: "lesson-quiz__hint", attrs: { "aria-live": "polite" } });
  const play = () => {
    const pair = step.pairs[index];
    if (pair === undefined) return;
    playback?.stop();
    playback = host.sound.play(pairPhrase(pair), BPM, () => {});
  };
  const buttons = COMPARISONS.map((answer) => answerButton({ text: t.answers[answer], answer, onPick: () => choose(answer) }));
  const show = () => {
    questionMistakes = 0;
    hint.textContent = "";
    counter.textContent = t.question(index + 1, step.pairs.length);
    for (const b of buttons) {
      delete b.dataset.mark;
      delete b.dataset.hint;
      b.removeAttribute("aria-disabled");
      b.disabled = false;
    }
    play();
  };
  const choose = (answer: Comparison) => {
    const pair = step.pairs[index];
    const chosen = buttons[COMPARISONS.indexOf(answer)];
    if (passed || pair === undefined || chosen === undefined || chosen.dataset.mark !== undefined) return;
    const expected = compareNotes(pair[0], pair[1]);
    if (answer !== expected) {
      mistakes += 1;
      questionMistakes += 1;
      chosen.dataset.mark = "mistake";
      chosen.setAttribute("aria-disabled", "true");
      host.tryAgain(t.wrong);
      if (showsHint(questionMistakes)) {
        buttons[COMPARISONS.indexOf(expected)]?.setAttribute("data-hint", "");
        hint.textContent = t.hint;
      }
      return;
    }
    if (questionMistakes === 0) right += 1;
    index += 1;
    if (index < step.pairs.length) {
      show();
      return;
    }
    if (passesRound(right, step.pairs.length, step.pass)) {
      passed = true;
      chosen.dataset.mark = "correct";
      for (const b of buttons) b.disabled = b !== chosen;
      hint.textContent = "";
      host.pass({ mistakes, score: scoreOf(mistakes) });
      return;
    }
    host.tryAgain(t.roundAgain(right, step.pairs.length));
    index = 0;
    right = 0;
    show();
  };
  const again = button({ label: t.playAgain, icon: "play", variant: "ghost", onClick: play });
  element.append(
    el("div", {
      class: "lesson-step lesson-listen",
      children: [
        el("p", { class: "lesson-step__text", text: host.texts.text }),
        el("div", { class: "lesson-listen__question", children: [counter, again] }),
        el("div", { class: "lesson-quiz__answers", attrs: { role: "group", "aria-label": t.group }, children: buttons }),
        hint,
      ],
    }),
  );
  show();
  return { dispose: () => playback?.stop() };
};
