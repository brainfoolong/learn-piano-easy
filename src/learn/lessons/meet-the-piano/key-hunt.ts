/**
 * *The key hunt*, the boss of *Meet the piano*: ten keys to find, each against a clock.
 *
 * Its learner cannot play a song yet, so the boss checks what the world taught: the groups of black
 * keys, the letters of the white keys, middle C and octaves. Each `find-key` step has `SECONDS`, and a
 * key found in time keeps the stars. A key the clock beats counts one mistake and is marked, so the
 * hunt never stops a learner.
 */
import type { FindKeyStep, Lesson } from "../../model";
import { keyHuntEn } from "./key-hunt.en";

/** The seconds each key of the hunt gives the learner. */
const SECONDS = 8;

/** A timed `find-key` step. */
function hunt(id: string, key: number, anyOctave: boolean): FindKeyStep {
  return { id, kind: "find-key", key, anyOctave, seconds: SECONDS };
}

export const keyHunt: Lesson = {
  id: "key-hunt",
  steps: [
    { id: "ready", kind: "explain", illustration: "black-key-groups" },
    hunt("any-c", 60, true),
    hunt("middle-c", 60, false),
    hunt("any-f", 65, true),
    hunt("any-g", 67, true),
    hunt("any-d", 62, true),
    hunt("any-b", 71, true),
    hunt("three-middle", 68, true),
    hunt("any-e", 64, true),
    hunt("any-a", 69, true),
    hunt("high-c", 72, false),
    { id: "recap", kind: "recap" },
  ],
  texts: { en: keyHuntEn },
};
