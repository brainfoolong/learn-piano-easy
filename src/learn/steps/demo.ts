/**
 * The `demo` step: the piano plays a phrase, and each key lights while its note sounds.
 *
 * - **It plays as it mounts,** since the learner's Continue just woke the audio. On a page opened
 *   straight at a lesson, the browser holds the sound until a gesture, and Play starts it.
 * - **It passes when the phrase ends, or on Skip.** Skip then leaves, and Play again stays.
 * - **The keys are the lesson's 3D piano view,** from the C at or below the lowest note, an octave and a
 *   third wide at least. They only show, so a touch plays nothing. The lit keys are the view's `next`
 *   mark, which its live text names.
 */
import { messagesOf } from "../../i18n/locale";
import type { KeyRange } from "../../render/key-layout";
import { button } from "../../ui/components/button";
import { el } from "../../ui/dom";
import type { Mark } from "../../ui/mark";
import { signal } from "../../ui/signal";
import type { Playback } from "../lesson-sound";
import type { DemoStep } from "../model";
import type { StepView } from "./step";

/** The keys a phrase of `notes` shows on. */
export function demoRange(notes: readonly number[]): KeyRange {
  const first = Math.floor(Math.min(...notes) / 12) * 12;
  return { first, last: Math.max(first + 16, Math.max(...notes) + 2) };
}

export const demoStep: StepView<DemoStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.demo;
  const marks = signal<ReadonlyMap<number, Mark>>(new Map());
  const piano = host.piano;
  piano.show({
    label: t.piano,
    range: demoRange(step.notes.map((n) => n.note)),
    names: "c",
    marks,
    markNames: { next: t.playing, correct: t.playing, mistake: t.playing },
  });
  let playback: Playback | undefined;
  let passed = false;
  const pass = () => {
    if (passed) return;
    passed = true;
    skip.remove();
    host.pass({ mistakes: 0, score: 1 });
  };
  const play = () => {
    playback?.stop();
    const own = host.sound.play(step.notes, step.bpm, (sounding) => marks.set(new Map([...sounding].map((pitch) => [pitch, "next" as const]))));
    playback = own;
    void own.finished.then((played) => {
      if (played) pass();
    });
  };
  const again = button({ label: t.playAgain, icon: "play", onClick: play });
  const skip = button({
    label: t.skip,
    variant: "ghost",
    onClick: () => {
      playback?.stop();
      pass();
    },
  });
  element.append(
    el("div", {
      class: "lesson-step lesson-demo",
      children: [
        el("p", { class: "lesson-step__text", text: host.texts.text }),
        el("div", { class: "lesson-demo__keys", children: [piano.element] }),
        el("div", { class: "lesson-demo__actions", children: [again, skip] }),
      ],
    }),
  );
  play();
  return { dispose: () => playback?.stop() };
};
