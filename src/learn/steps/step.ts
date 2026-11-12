/**
 * The step kind's interface: what every module of `src/learn/steps/` gives the lesson view, and what
 * the lesson view hands each step.
 *
 * A step kind mounts into a host element the lesson view owns. It reads the learner through the input
 * bus, plays sound through the lesson's sound, and reports to the view through `StepHost`. The view
 * owns the feedback band and the Continue button, so every step ends the same way.
 *
 * Decisions, and what each costs:
 * - **A step passes once, and the learner moves on.** `pass` shows Continue in the band, and the press
 *   records the result. A step that explains passes as it mounts, so its Continue shows at once.
 * - **A mistake never fails a step.** `tryAgain` says so in the band, and the step keeps listening. The
 *   mistakes it counted travel in its result, and the stars come from them.
 * - **A step that asks for keys says which notes,** through `reachKeys`. The view then shifts the
 *   computer keyboard by octaves to reach them, and every step starts unshifted.
 * - **A step's view only shows what its judge decided.** A step's judge is a pure function, which its
 *   unit tests call without a browser.
 * - **A step's solution is in `src/learn/steps/solution.ts`,** pure, never in the step's view module.
 *   The e2e test imports it in Node, where a view module's stylesheet cannot load.
 */
import type { Locale } from "../../i18n/locale";
import type { InputBus } from "../../input/input-bus";
import type { KeyRange } from "../../render/key-layout";
import type { Signal } from "../../ui/signal";
import type { LessonSound } from "../lesson-sound";
import type { Step, StepTexts } from "../model";
import type { SongRequest, SongTake } from "../song-handoff";

/** What a passed step reports. */
export interface StepResult {
  /** The mistakes on the way, 0 for a step that asks nothing. */
  mistakes: number;
  /** How well it went, from 0 to 1. */
  score: number;
}

/** What the lesson view hands a step. */
export interface StepHost {
  locale: Locale;
  /** The step's texts in `locale`. */
  texts: StepTexts;
  /** The learner's notes, from every input. */
  input: InputBus;
  /** The lesson's sound, which plays a phrase or a key. */
  sound: LessonSound;
  /**
   * Shifts the computer keyboard by whole octaves so it reaches the most of `notes`, until the next step
   * mounts. Returns the keys it reaches, undefined while a MIDI keyboard is on.
   */
  reachKeys(notes: readonly number[]): Signal<KeyRange | undefined>;
  /** Aims the computer keyboard at `notes`, the next of a phrase, shifting it only when they are out of its reach. */
  aimKeys(notes: readonly number[]): void;
  /** Says the last answer was wrong, with `message`, and keeps the step open. */
  tryAgain(message: string): void;
  /** Passes the step with `result`. The band shows Continue. Later calls do nothing. */
  pass(result: StepResult): void;
  /**
   * Opens the player in lesson mode on `request`, and comes back to the lesson once it ends. Resolves
   * the scored take that met the request's accuracy, or undefined when the learner came back without one.
   */
  playSong(request: SongRequest): Promise<SongTake | undefined>;
}

/** A mounted step, which the lesson view removes when the learner moves on. */
export interface MountedStep {
  /** Stops the step's sound, timers and listeners. */
  dispose(): void;
}

/** A step kind's view: it mounts a step of its kind into `element`. */
export type StepView<S extends Step> = (element: HTMLElement, step: S, host: StepHost) => MountedStep;
