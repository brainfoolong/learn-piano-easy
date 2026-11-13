/**
 * The `demo` step: the piano plays a phrase, and each key lights while its note sounds.
 *
 * - **It plays as it mounts,** since the learner's Continue just woke the audio. On a page opened
 *   straight at a lesson, the browser holds the sound until a gesture, and Play starts it.
 * - **It passes when the phrase ends, or on Skip.** Skip then leaves, and Play again stays.
 * - **The keys are the lesson's 3D piano view,** from the C at or below the lowest note, an octave and a
 *   third wide at least. They only show, so a touch plays nothing. The lit keys are the view's `next`
 *   mark, which its live text names.
 * - **A demo whose notes name their fingers shows the mascot's hand** playing them on the view, to the
 *   phrase's audio clock. The demo waits up to `HAND_WAIT` for the model before it plays. A hand that
 *   loads later joins the phrase where it is. A demo without fingers shows no hand and no toggles.
 * - **Slow plays the phrase at half its bpm,** sound and hand together, and plays it again. **Side view**
 *   turns the camera to the thumb's side. Both are toggles, and each stays as the learner left it for
 *   the rest of the lesson. They are kept per lesson sound, since a lesson has exactly one.
 * - **The step carries `data-bpm`,** the tempo it plays at, which is the test seam of Slow.
 */
import { messagesOf } from "../../i18n/locale";
import type { PhraseNote as HandNote } from "../../render/hand/hand-plan";
import type { KeyRange } from "../../render/key-layout";
import { button } from "../../ui/components/button";
import { chip } from "../../ui/components/chip";
import { el } from "../../ui/dom";
import type { Mark } from "../../ui/mark";
import { signal } from "../../ui/signal";
import type { LessonSound, Playback } from "../lesson-sound";
import type { DemoStep, PhraseNote } from "../model";
import type { StepView } from "./step";

/** The longest the demo waits for the hand's model before it plays, in milliseconds. */
const HAND_WAIT = 2000;

/** What a lesson's demos keep from step to step. */
interface DemoChoices {
  slow: boolean;
  side: boolean;
}

const choicesOf = new WeakMap<LessonSound, DemoChoices>();

/** The keys a phrase of `notes` shows on. */
export function demoRange(notes: readonly number[]): KeyRange {
  const first = Math.floor(Math.min(...notes) / 12) * 12;
  return { first, last: Math.max(first + 16, Math.max(...notes) + 2) };
}

/** `notes` as the hand plays them at `bpm`, in seconds, or undefined when they name no fingers. */
export function handNotes(notes: readonly PhraseNote[], bpm: number): HandNote[] | undefined {
  if (notes.length === 0 || notes.some((n) => n.finger === undefined)) return undefined;
  const beat = 60 / bpm;
  return notes.map((n) => ({
    pitch: n.note,
    at: n.at * beat,
    seconds: n.beats * beat,
    finger: n.finger!,
    hand: n.hand ?? "right",
    ...(n.velocity === undefined ? {} : { velocity: n.velocity }),
  }));
}

export const demoStep: StepView<DemoStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.demo;
  const marks = signal<ReadonlyMap<number, Mark>>(new Map());
  const piano = host.piano;
  const choices = choicesOf.get(host.sound) ?? { slow: false, side: false };
  choicesOf.set(host.sound, choices);
  const bpm = () => (choices.slow ? step.bpm / 2 : step.bpm);
  let hand = handNotes(step.notes, bpm());
  let playback: Playback | undefined;
  /** Counts the plays asked for, so a play still waiting for the hand gives way to a later one. */
  let plays = 0;
  let passed = false;
  let disposed = false;

  const showKeys = () => {
    const own = playback;
    piano.show({
      label: t.piano,
      range: demoRange(step.notes.map((n) => n.note)),
      names: "c",
      marks,
      markNames: { next: t.playing, correct: t.playing, mistake: t.playing },
      ...(hand === undefined
        ? {}
        : { hands: { notes: hand, clock: () => own?.time(), started: own?.started ?? Promise.resolve(false), angle: choices.side ? "side" : "player" } }),
    });
  };

  const pass = () => {
    if (passed) return;
    passed = true;
    skip.remove();
    host.pass({ mistakes: 0, score: 1 });
  };
  const play = async () => {
    playback?.stop();
    playback = undefined;
    const token = ++plays;
    if (hand !== undefined) {
      // The wait may outlast the learner's gesture, so the audio wakes inside it first.
      void host.sound.start();
      showKeys();
      await Promise.race([piano.handReady(), new Promise((resolve) => setTimeout(resolve, HAND_WAIT))]);
      if (token !== plays || disposed) return;
    }
    const own = host.sound.play(step.notes, bpm(), (sounding) => marks.set(new Map([...sounding].map((pitch) => [pitch, "next" as const]))));
    playback = own;
    if (hand !== undefined) showKeys();
    void own.finished.then((played) => {
      if (played) pass();
    });
  };
  const again = button({ label: t.playAgain, icon: "play", onClick: () => void play() });
  const skip = button({
    label: t.skip,
    variant: "ghost",
    onClick: () => {
      plays++;
      playback?.stop();
      pass();
    },
  });
  const body = el("div", {
    class: "lesson-step lesson-demo",
    attrs: { "data-bpm": String(bpm()) },
    children: [el("p", { class: "lesson-step__text", text: host.texts.text }), el("div", { class: "lesson-demo__keys", children: [piano.element] })],
  });
  const toggles =
    hand === undefined
      ? []
      : [
          chip({
            label: t.slow,
            variant: "selected",
            selected: choices.slow,
            onToggle: (on) => {
              choices.slow = on;
              hand = handNotes(step.notes, bpm());
              body.dataset.bpm = String(bpm());
              void play();
            },
          }),
          chip({
            label: t.side,
            variant: "selected",
            selected: choices.side,
            onToggle: (on) => {
              choices.side = on;
              showKeys();
            },
          }),
        ];
  body.append(el("div", { class: "lesson-demo__actions", children: [again, ...toggles, skip] }));
  element.append(body);
  showKeys();
  void play();
  return {
    dispose: () => {
      disposed = true;
      playback?.stop();
    },
  };
};
