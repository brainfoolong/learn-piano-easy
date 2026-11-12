/**
 * The `song` step: the learner plays a version of ours in the player, guided by a practice step of its
 * guide, and comes back with a scored take.
 *
 * - **The player does the playing.** Play opens it in lesson mode through `host.playSong`, which applies
 *   the practice step and the step's view, and shows the lesson's banner. The step itself shows only its
 *   text and its goal.
 * - **It passes on a take at the step's accuracy,** whose accuracy is the step's score. A take below it
 *   never ends the hand-off, so the learner plays on in the player until one meets it.
 * - **Coming back without a take never punishes.** The step says the song waits, and Play opens it again.
 */
import { messagesOf } from "../../i18n/locale";
import { button } from "../../ui/components/button";
import { el } from "../../ui/dom";
import type { SongStep } from "../model";
import type { StepView } from "./step";

/** A share from 0 to 1 as a whole percent. */
const percent = (share: number) => Math.round(share * 100);

export const songStep: StepView<SongStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.song;
  let disposed = false;
  const status = el("p", { class: "lesson-song__status", attrs: { "aria-live": "polite" }, text: t.goal(percent(step.accuracy)) });
  const play = button({
    label: t.play,
    icon: "play",
    variant: "primary",
    size: "large",
    onClick: async () => {
      const take = await host.playSong({ file: step.file, practice: step.practice, accuracy: step.accuracy, goal: host.texts.text, ...(step.view === undefined ? {} : { view: step.view }) });
      if (disposed) return;
      if (take === undefined) {
        status.textContent = t.notYet(percent(step.accuracy));
        return;
      }
      status.textContent = t.played(percent(take.accuracy));
      play.classList.add("is-absent");
      host.pass({ mistakes: 0, score: take.accuracy });
    },
  });
  play.dataset.answer = "play";
  element.append(
    el("div", {
      class: "lesson-step lesson-song",
      children: [el("p", { class: "lesson-step__text", text: host.texts.text }), status, el("div", { class: "lesson-song__actions", children: [play] })],
    }),
  );
  return {
    dispose: () => {
      disposed = true;
    },
  };
};
