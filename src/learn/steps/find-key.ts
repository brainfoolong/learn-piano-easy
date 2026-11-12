/**
 * The `find-key` step: the learner presses the key the step's text names, on any input.
 *
 * - **The keys are the step's own two octaves,** from the C an octave below the asked key's C. They
 *   carry no names, since finding the key is the skill.
 * - **A wrong key never fails.** It is marked a mistake until the next press, and the band says try
 *   again. After `HINT_AFTER` mistakes the asked key is marked as the one to play.
 * - **The right key passes,** with `anyOctave` letting the same note in any octave count.
 * - **A timed step counts down its `seconds`** with a bar and a number. When they run out, the time
 *   counts one mistake and the asked key is marked, but the step keeps listening, since a step never
 *   fails. A boss's key hunt is made of such steps, so its stars reward speed.
 * - **The judge is `findsKey`,** a pure function the unit tests call.
 *
 * This module is the template of every step that listens: its keys come from `listeningKeys`, its
 * judge is pure, and it reports through `host`.
 */
import { messagesOf } from "../../i18n/locale";
import type { KeyRange } from "../../render/key-layout";
import { el } from "../../ui/dom";
import type { FindKeyStep } from "../model";
import { scoreOf, showsHint } from "./judge";
import { listeningKeys } from "./keys";
import type { StepView } from "./step";

/** The step's texts of the lesson catalog. */
type FindKeyMessages = ReturnType<typeof messagesOf>["lesson"]["findKey"];

/** Whether pressing `pitch` passes `step`. */
export function findsKey(step: Pick<FindKeyStep, "key" | "anyOctave">, pitch: number): boolean {
  return step.anyOctave ? (pitch - step.key) % 12 === 0 : pitch === step.key;
}

/** The keys a find-key step for `key` shows: two octaves and a third, from the C an octave below. */
export function findKeyRange(key: number): KeyRange {
  const first = Math.floor(key / 12) * 12 - 12;
  return { first, last: first + 28 };
}

export const findKeyStep: StepView<FindKeyStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.findKey;
  let mistakes = 0;
  let passed = false;
  const hint = el("p", { class: "lesson-step__hint", attrs: { "aria-live": "polite" } });
  const timer = step.seconds === undefined ? undefined : countdown(step.seconds, t, () => {
    if (passed) return;
    mistakes += 1;
    hint.textContent = t.hint;
    keys.marks.set(new Map([[step.key, "next" as const]]));
    host.tryAgain(t.timeUp);
  });
  const keys = listeningKeys(host, {
    label: t.piano,
    range: findKeyRange(step.key),
    markNames: t.marks,
    onNote: (pitch) => {
      if (passed) return;
      if (findsKey(step, pitch)) {
        passed = true;
        timer?.stop();
        keys.marks.set(new Map([[pitch, "correct"]]));
        hint.textContent = "";
        host.pass({ mistakes, score: scoreOf(mistakes) });
        return;
      }
      mistakes += 1;
      const marks = new Map([[pitch, "mistake" as const]]);
      if (showsHint(mistakes)) {
        hint.textContent = t.hint;
        keys.marks.set(new Map([[step.key, "next" as const], ...marks]));
      } else keys.marks.set(marks);
      host.tryAgain(t.wrong);
    },
  });
  element.append(
    el("div", {
      class: "lesson-step lesson-find-key",
      children: [el("p", { class: "lesson-step__text", text: host.texts.text }), ...(timer === undefined ? [] : [timer.element]), el("div", { class: "lesson-step__keys", children: [keys.element] }), hint],
    }),
  );
  return {
    dispose: () => {
      timer?.stop();
      keys.dispose();
    },
  };
};

/** A countdown of `seconds`: a shrinking bar and the seconds left, which calls `onEnd` once they run out. */
function countdown(seconds: number, t: FindKeyMessages, onEnd: () => void): { element: HTMLElement; stop: () => void } {
  const left = el("span", { class: "lesson-timer__left", text: t.secondsLeft(seconds) });
  const bar = el("span", { class: "lesson-timer__bar" });
  bar.style.animationDuration = `${seconds}s`;
  const element = el("div", { class: "lesson-timer", attrs: { role: "timer" }, children: [el("span", { class: "lesson-timer__track", children: [bar] }), left] });
  const end = performance.now() + seconds * 1000;
  const tick = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((end - performance.now()) / 1000));
    left.textContent = t.secondsLeft(remaining);
    if (remaining > 0) return;
    stop();
    element.dataset.done = "true";
    onEnd();
  }, 250);
  const stop = () => {
    clearInterval(tick);
    bar.style.animationPlayState = "paused";
  };
  return { element, stop };
}
