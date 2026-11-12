/**
 * The `read-note` step: the staff shows one note, and the learner names it or plays it.
 *
 * - **Each note is one question, in the step's order.** The staff shows that note alone, as a whole
 *   note in the step's clef, with no key signature.
 * - **The learner names the note** with one of seven letter buttons of `src/learn/steps/answer.ts`,
 *   each carrying its letter in `data-answer`. Or the learner **plays it** on keys around every note.
 *   The computer keyboard then shifts to reach the step's notes, and its reach is marked under the keys.
 * - **A wrong answer never fails.** It is marked, the band says try again, and the learner answers the
 *   same question again. After `HINT_AFTER` mistakes on one question, the right answer is marked.
 * - **The step runs in rounds,** as `judge.ts` says. A question counts right only on its first answer,
 *   and a round with too few right starts over from the first note.
 * - **A right answer moves on at once.** The count line announces the next note, and a played key stays
 *   marked right until the next press.
 * - **The judges are `namesNote` and `playsNote`,** pure functions the unit tests call.
 */
import { messagesOf } from "../../i18n/locale";
import type { KeyRange } from "../../render/key-layout";
import type { Clef, Sheet, SheetChord } from "../../sheet/quantize";
import { pitchClassName } from "../../theory/note-names";
import type { Mark } from "../../ui/components/keyboard";
import { staff } from "../../ui/components/staff";
import { el } from "../../ui/dom";
import { signal } from "../../ui/signal";
import type { ReadNoteStep } from "../model";
import { answerButton } from "./answer";
import { passesRound, scoreOf, showsHint } from "./judge";
import { listeningKeys } from "./keys";
import type { StepView } from "./step";

/** The seven letters a note is named by, from C, in English. The catalog's `letters` show each in the locale. */
export const NOTE_LETTERS: readonly string[] = [0, 2, 4, 5, 7, 9, 11].map((pc) => pitchClassName(pc, { system: "letters", locale: "en" }));

/** Ticks per quarter note of the one-note sheet. */
const TPQ = 480;

/** Whether naming `note` as `letter` is right. A black key has no letter of its own, so no letter names it. */
export function namesNote(note: number, letter: string): boolean {
  return pitchClassName(note, { system: "letters", locale: "en" }) === letter;
}

/** Whether playing `pitch` answers `note`: only the same key, in the same octave. */
export function playsNote(note: number, pitch: number): boolean {
  return pitch === note;
}

/** The keys of a step asking `notes`: from a C to a C, two octaves at least, five keys or more beyond each note. */
export function readNoteRange(notes: readonly number[]): KeyRange {
  const first = Math.max(21, 12 * Math.floor((Math.min(...notes) - 5) / 12));
  const last = Math.min(108, Math.max(first + 24, 12 * Math.ceil((Math.max(...notes) + 5) / 12)));
  return { first, last };
}

/** A sheet of one bar holding `note` alone, as a whole note in `clef`. */
function noteSheet(note: number, clef: Clef): Sheet {
  const ticks = 4 * TPQ;
  const chord: SheetChord = { kind: "chord", tick: 0, ticks, value: { base: 1, dotted: false, triplet: false }, pitches: [note], tied: false };
  return {
    ticksPerQuarter: TPQ,
    measures: [{ index: 0, tick: 0, ticks, numerator: 4, denominator: 4 }],
    staves: [{ track: 0, clef, measures: [[[chord]]] }],
  };
}

/** How the learner answers: the buttons or the keys, and how each marks an answer. */
interface Answers {
  element: HTMLElement;
  /** Marks answer `value`, a letter or a pitch, with `mark`. `next` is the hint. */
  mark(value: string | number, mark: Mark): void;
  /** Clears the marks of the question that ended. */
  clear(): void;
  dispose(): void;
}

export const readNoteStep: StepView<ReadNoteStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.readNote;
  const naming = step.answer === "name";
  let question = 0;
  let right = 0;
  let mistakes = 0;
  let missed = 0;
  let passed = false;
  const note = () => step.notes[question]!;
  const staffMarks = signal<ReadonlyMap<number, Mark>>(new Map());
  const holder = el("div", { class: "lesson-read-note__staff" });
  const count = el("p", { class: "lesson-read-note__count", attrs: { "aria-live": "polite" } });
  const hint = el("p", { class: "lesson-step__hint", attrs: { "aria-live": "polite" } });

  const show = () => {
    missed = 0;
    hint.textContent = "";
    count.textContent = t.count(question + 1, step.notes.length);
    staffMarks.set(new Map());
    holder.replaceChildren(staff({ label: t.staff[step.clef], sheet: noteSheet(note(), step.clef), marks: staffMarks }));
    answers.clear();
  };

  const next = () => {
    question += 1;
    if (question < step.notes.length) return show();
    if (passesRound(right, step.notes.length, step.pass)) {
      passed = true;
      staffMarks.set(new Map([[0, "correct"]]));
      host.pass({ mistakes, score: scoreOf(mistakes) });
      return;
    }
    question = 0;
    right = 0;
    show();
    host.tryAgain(t.again);
  };

  const judge = (value: string | number, ok: boolean) => {
    if (passed) return;
    if (ok) {
      if (missed === 0) right += 1;
      answers.mark(value, "correct");
      next();
      return;
    }
    mistakes += 1;
    missed += 1;
    answers.mark(value, "mistake");
    if (showsHint(missed)) {
      hint.textContent = naming ? t.hintName : t.hintKey;
      answers.mark(naming ? pitchClassName(note(), { system: "letters", locale: "en" }) : note(), "next");
    }
    host.tryAgain(naming ? t.wrongName : t.wrongKey);
  };

  const nameButtons = (): Answers => {
    const buttons: HTMLButtonElement[] = NOTE_LETTERS.map((letter) =>
      answerButton({
        text: t.letters[letter as keyof typeof t.letters],
        answer: letter,
        class: "lesson-read-note__answer",
        onPick: () => {
          const button = buttons.find((b) => b.dataset.answer === letter);
          if (button?.dataset.mark === "mistake") return;
          judge(letter, namesNote(note(), letter));
        },
      }),
    );
    return {
      element: el("div", { class: "lesson-read-note__answers", attrs: { role: "group", "aria-label": t.answers }, children: buttons }),
      mark(value, mark) {
        const button = buttons.find((b) => b.dataset.answer === value);
        if (button === undefined) return;
        if (mark === "next") button.setAttribute("data-hint", "");
        else button.dataset.mark = mark;
        if (mark === "mistake") button.setAttribute("aria-disabled", "true");
      },
      clear() {
        for (const button of buttons) {
          delete button.dataset.mark;
          button.removeAttribute("data-hint");
          button.removeAttribute("aria-disabled");
        }
      },
      dispose() {},
    };
  };

  const playKeys = (): Answers => {
    const keys = listeningKeys(host, {
      label: t.piano,
      range: readNoteRange(step.notes),
      names: "c",
      markNames: t.marks,
      notes: step.notes,
      onNote: (pitch) => judge(pitch, playsNote(note(), pitch)),
    });
    // A press keeps only the hint's mark, and a new question keeps only the last right key's.
    const keep = (kept: Mark) => [...keys.marks.get()].filter(([, mark]) => mark === kept);
    return {
      element: el("div", { class: "lesson-step__keys", children: [keys.element] }),
      mark: (value, mark) => keys.marks.set(new Map([...keep("next"), [Number(value), mark]])),
      clear: () => keys.marks.set(new Map(keep("correct"))),
      dispose: () => keys.dispose(),
    };
  };

  const answers = naming ? nameButtons() : playKeys();
  show();
  element.append(
    el("div", {
      class: "lesson-step lesson-read-note",
      children: [el("p", { class: "lesson-step__text", text: host.texts.text }), holder, count, answers.element, hint],
    }),
  );
  return { dispose: () => answers.dispose() };
};
