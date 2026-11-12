/**
 * Learning the range: the learner presses their lowest key, then their highest, and the keyboard range
 * takes the two notes.
 *
 * Decisions, and what each costs:
 * - Either order works. The two notes go through `normalizeRange`, which puts them in order, so a
 *   learner who starts at the top still gets their keyboard.
 * - The two presses store the range through `storeRange`, so the result is always a valid range, even
 *   from two black keys or two keys close together.
 * - Learning listens to the input bus, so any device can teach the range. Only a note-on counts.
 * - Starting again while learning cancels, so the same button starts and stops it. The button sits in
 *   the range control and names the key to press next, in the live locale, which it follows.
 */
import { localize, onLocale, t } from "../i18n/live";
import { storeRange } from "../keyboard/range-control";
import { normalizeRange } from "../keyboard/range";
import type { KeyRange } from "../render/key-layout";
import type { SettingsStore } from "../settings/store";
import { button } from "../ui/dom";
import type { InputBus } from "./input-bus";

/** Takes two key presses and gives the range they span, made valid. */
export class RangeLearner {
  #first: number | undefined;

  /** The first key pressed, or undefined before it. */
  get first(): number | undefined {
    return this.#first;
  }

  /** Takes a press of `pitch`. The second press gives the range, and the learner starts over. */
  press(pitch: number): KeyRange | undefined {
    if (this.#first === undefined) {
      this.#first = pitch;
      return undefined;
    }
    const range = normalizeRange(this.#first, pitch);
    this.#first = undefined;
    return range;
  }
}

/** What a running learning session reports, so its button can say what to press. */
export type LearnStep = "lowest" | "highest" | "done" | "cancelled";

/** A learning session on the bus, which stores the range in the settings. */
export interface RangeLearning {
  /** Whether a session runs. */
  readonly active: boolean;
  /** Starts a session, or cancels the one running. */
  toggle(): void;
  /** Cancels the session running, if any. */
  cancel(): void;
}

/** The label of the learn button at `step`, in the live locale. */
function stepLabel(step: LearnStep): string {
  const words = t().player.input.learnRange;
  return step === "lowest" ? words.lowest : step === "highest" ? words.highest : words.start;
}

/** The range control's button that starts learning, and says which key to press while it runs. */
export function learnRangeButton(bus: InputBus, store: SettingsStore): { element: HTMLButtonElement; dispose(): void } {
  let shown: LearnStep = "done";
  const learning = createRangeLearning(bus, store, (step) => {
    shown = step;
    element.textContent = stepLabel(step);
    element.setAttribute("aria-pressed", String(learning.active));
  });
  const element = button(stepLabel(shown), () => learning.toggle(), { class: "outline" });
  localize(element, (m) => m.player.input.learnRange.title, "data-tip");
  localize(element, (m) => m.player.input.learnRange.title, "aria-label");
  element.setAttribute("aria-pressed", "false");
  const stopLocale = onLocale(() => (element.textContent = stepLabel(shown)));
  return {
    element,
    dispose: () => {
      learning.cancel();
      stopLocale();
    },
  };
}

/** Learns the range from the notes on `bus` into `store`, reporting each step to `onStep`. */
export function createRangeLearning(bus: InputBus, store: SettingsStore, onStep: (step: LearnStep) => void): RangeLearning {
  let stop: (() => void) | undefined;
  const end = (step: LearnStep) => {
    stop?.();
    stop = undefined;
    onStep(step);
  };
  const learning: RangeLearning = {
    get active() {
      return stop !== undefined;
    },
    toggle() {
      if (stop !== undefined) return end("cancelled");
      const learner = new RangeLearner();
      stop = bus.subscribe((event) => {
        if (event.type !== "noteOn") return;
        const range = learner.press(event.pitch);
        if (range === undefined) return onStep("highest");
        storeRange(store, range.first, range.last);
        end("done");
      });
      onStep("lowest");
    },
    cancel() {
      if (stop !== undefined) end("cancelled");
    },
  };
  return learning;
}
