/**
 * The judging rules every step shares, as pure functions the unit tests call without a browser.
 *
 * - **A hint shows after `HINT_AFTER` mistakes** on one step. It shows the right answer gently, so a
 *   learner who is stuck always gets through.
 * - **A step's score falls with its mistakes:** one with none scores 1, and each mistake lowers it.
 * - **A step of several questions runs in rounds.** A wrong answer is marked, and the learner answers
 *   the same question again. A question counts right only on its first answer. A round with too few
 *   right starts over, so a step passes only once enough answers are right.
 */

/** The mistakes on one step after which its hint shows. */
export const HINT_AFTER = 2;

/** Whether a step with `mistakes` shows its hint. */
export function showsHint(mistakes: number): boolean {
  return mistakes >= HINT_AFTER;
}

/** The score, from 0 to 1, of a step passed with `mistakes`. */
export function scoreOf(mistakes: number): number {
  return 1 / (1 + mistakes);
}

/** Whether a round of `asked` questions, `right` of them right on the first answer, passes at share `pass`. */
export function passesRound(right: number, asked: number, pass: number): boolean {
  return asked > 0 && right / asked >= pass - 1e-9;
}

/** Whether a quiz's pick at `picked` is its right answer at `right`. */
export function judgeChoice(right: number, picked: number): boolean {
  return picked === right;
}
