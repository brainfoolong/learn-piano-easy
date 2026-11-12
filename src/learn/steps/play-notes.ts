/**
 * The `play-notes` step: the learner plays a short phrase, one note or chord at a time, on any input.
 *
 * - **The phrase waits for each entry.** The next note, or each key of the next chord, is marked as
 *   the one to play, and the keys already played are marked right. The keys are the demo's, with each C
 *   named.
 * - **A chord passes once each of its keys is pressed,** in any order. Two hands then play together on
 *   every input, a mouse included, and how long a key is held is never judged.
 * - **A wrong key never fails.** It is marked a mistake until the next press, the band says try again,
 *   and the phrase waits on the same entry, keeping a chord's keys already pressed. After `HINT_AFTER`
 *   mistakes the hint names what to play next.
 * - **A step may judge touch or the pedal per entry,** and runs only on a MIDI keyboard, as
 *   `src/learn/lesson-run.ts` chooses. A right key played too loud, too soft, or with the pedal wrong is
 *   a mistake like a wrong key. The band names what to change, and the key is not counted as played.
 * - **The computer keyboard shifts to reach the phrase,** and its reach is marked under the keys. A
 *   phrase wider than the keys aims them at the keys of the next entry not yet pressed. They move only
 *   when those are out of reach, so a chord too wide for them is played a key at a time.
 * - **The last entry passes the step,** with the mistakes counted on the way. Later input does nothing.
 * - **The judges are `playNote` and `expressionMiss`,** pure functions the unit tests call.
 */
import { messagesOf } from "../../i18n/locale";
import { noteName } from "../../theory/note-names";
import type { Mark } from "../../ui/components/keyboard";
import { el } from "../../ui/dom";
import { LOUD_FROM, type PlayEntry, type PlayNotesStep, pitchesOf } from "../model";
import { demoRange } from "./demo";
import { scoreOf, showsHint } from "./judge";
import { listeningKeys } from "./keys";
import type { StepView } from "./step";

/** What one press decides: whether it was right, the position after it, and the next chord's keys pressed so far. */
export interface NoteJudgement {
  right: boolean;
  /** The index of the next entry to play, `notes.length` once the phrase is done. */
  at: number;
  /** The keys of the entry at `at` already pressed, empty when it is a note or untouched. */
  pressed: number[];
}

/**
 * Judges pressing `pitch` when `notes[at]` is the next entry and `pressed` holds its keys already
 * pressed. A key of the entry is right, and the entry passes once each of its keys is pressed. A press
 * past the end is never right.
 */
export function playNote(notes: readonly PlayEntry[], at: number, pitch: number, pressed: readonly number[] = []): NoteJudgement {
  const entry = notes[at];
  if (entry === undefined) return { right: false, at, pressed: [...pressed] };
  const keys = pitchesOf(entry);
  if (!keys.includes(pitch)) return { right: false, at, pressed: [...pressed] };
  const now = pressed.includes(pitch) ? [...pressed] : [...pressed, pitch];
  return keys.every((key) => now.includes(key)) ? { right: true, at: at + 1, pressed: [] } : { right: true, at, pressed: now };
}

/** What a right key's press got wrong in its expression. */
export type ExpressionMiss = "too-loud" | "too-soft" | "pedal-up" | "pedal-down";

/**
 * What a press of a right key of entry `at`, played at `velocity` with the pedal `pedalDown`, got wrong
 * against `step`'s touch and pedal, or undefined when it fits. A step without either never misses.
 */
export function expressionMiss(step: Pick<PlayNotesStep, "touch" | "pedal">, at: number, velocity: number, pedalDown: boolean): ExpressionMiss | undefined {
  const touch = step.touch?.[at];
  if (touch === "soft" && velocity >= LOUD_FROM) return "too-loud";
  if (touch === "loud" && velocity < LOUD_FROM) return "too-soft";
  const pedal = step.pedal?.[at];
  if (pedal === true && !pedalDown) return "pedal-up";
  if (pedal === false && pedalDown) return "pedal-down";
  return undefined;
}

/** The marks of a phrase at `at` with `pressed` of its next chord: the played keys right, the keys to play next, and a `mistake` key. */
function marksAt(notes: readonly PlayEntry[], at: number, pressed: readonly number[], mistake?: number): Map<number, Mark> {
  const marks = new Map<number, Mark>();
  for (const pitch of notes.slice(0, at).flatMap(pitchesOf)) marks.set(pitch, "correct");
  const next = notes[at];
  if (next !== undefined) for (const pitch of pitchesOf(next)) marks.set(pitch, pressed.includes(pitch) ? "correct" : "next");
  if (mistake !== undefined) marks.set(mistake, "mistake");
  return marks;
}

export const playNotesStep: StepView<PlayNotesStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.playNotes;
  let at = 0;
  let pressed: number[] = [];
  let mistakes = 0;
  const hint = el("p", { class: "lesson-step__hint", attrs: { "aria-live": "polite" } });
  const keys = listeningKeys(host, {
    label: t.piano,
    range: demoRange(step.notes.flatMap(pitchesOf)),
    names: "c",
    markNames: t.marks,
    notes: step.notes.flatMap(pitchesOf),
    onNote: (pitch, event) => {
      if (at >= step.notes.length) return;
      const entry = step.notes[at]!;
      const miss = pitchesOf(entry).includes(pitch) ? expressionMiss(step, at, event.velocity, host.input.pedalDown) : undefined;
      if (miss !== undefined) {
        mistakes += 1;
        keys.marks.set(marksAt(step.notes, at, pressed, pitch));
        host.tryAgain(t.expression[miss]);
        return;
      }
      const judged = playNote(step.notes, at, pitch, pressed);
      at = judged.at;
      pressed = judged.pressed;
      if (judged.right) {
        keys.marks.set(marksAt(step.notes, at, pressed));
        hint.textContent = "";
        if (at === step.notes.length) host.pass({ mistakes, score: scoreOf(mistakes) });
        else host.aimKeys(pitchesOf(step.notes[at]!).filter((key) => !pressed.includes(key)));
        return;
      }
      mistakes += 1;
      keys.marks.set(marksAt(step.notes, at, pressed, pitch));
      if (showsHint(mistakes)) {
        const next = step.notes[at]!;
        hint.textContent = typeof next === "number" ? t.hint(noteName(next)) : t.hintChord(...next.map((note) => noteName(note)));
      }
      host.tryAgain(t.wrong);
    },
  });
  keys.marks.set(marksAt(step.notes, at, pressed));
  host.aimKeys(pitchesOf(step.notes[0]!));
  element.append(
    el("div", {
      class: "lesson-step lesson-play-notes",
      children: [el("p", { class: "lesson-step__text", text: host.texts.text }), el("div", { class: "lesson-step__keys", children: [keys.element] }), hint],
    }),
  );
  return { dispose: () => keys.dispose() };
};
