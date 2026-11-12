/**
 * Each step's solution: the moves that pass it, which the e2e test plays to run every lesson.
 *
 * A solution never names a text, so it holds for every locale. The test maps each move to a press of
 * a button or a key, and presses Continue once the moves are done. A step kind that hears the learner
 * adds its moves here when it lands.
 */
import { pitchClassName } from "../../theory/note-names";
import { pitchesOf, type Step } from "../model";

/** One move of a solution. */
export type SolutionMove =
  /** Presses the step's Skip button. */
  | { do: "skip" }
  /** Picks the answer at `answer`, an index of the texts' `answers`. */
  | { do: "choose"; answer: number }
  /** Presses and lets go of each of `notes` in turn, on the step's on-screen keyboard. */
  | { do: "play"; notes: number[] }
  /** Presses, in turn, the step's button whose `data-answer` is each of `answers`. */
  | { do: "answer"; answers: string[] }
  /**
   * Presses the step's Start button, then presses a key of its keyboard each time its `data-beat`
   * reaches a new value at or above its `data-first-tap`, until its `data-phase` is `done`.
   */
  | { do: "tap-beats" }
  /**
   * Presses the step's button whose `data-answer` is `play`, which opens the player on `file`. Then
   * plays the version's notes in time until a scored take reaches `accuracy` and the lesson shows again.
   */
  | { do: "play-song"; file: string; accuracy: number };

/** The moves that pass `step`, before its Continue. */
export function solutionOf(step: Step): SolutionMove[] {
  switch (step.kind) {
    case "explain":
    case "recap":
      return [];
    case "demo":
      return [{ do: "skip" }];
    case "quiz":
      return [{ do: "choose", answer: step.right }];
    case "find-key":
      return [{ do: "play", notes: [step.key] }];
    case "play-notes":
      return [{ do: "play", notes: step.notes.flatMap(pitchesOf) }];
    case "read-note":
      return step.answer === "play"
        ? [{ do: "play", notes: step.notes }]
        : [{ do: "answer", answers: step.notes.map((note) => pitchClassName(note, { system: "letters", locale: "en" })) }];
    case "listen":
      return [{ do: "answer", answers: step.pairs.map(([first, second]) => (second > first ? "higher" : second < first ? "lower" : "same")) }];
    case "rhythm-tap":
      return [{ do: "tap-beats" }];
    case "song":
      return [{ do: "play-song", file: step.file, accuracy: step.accuracy }];
  }
}
