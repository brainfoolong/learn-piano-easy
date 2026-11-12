/**
 * Pitch practice: a quiz that names a note, which the learner finds and plays on their keyboard.
 *
 * While `playMode` is `pitchPractice`, a panel over the scene names the note to play, and a Hear it
 * button sounds it. The notes come from the chosen key, between the chosen lowest and highest notes,
 * within the learner's keyboard. A round asks `pitchPracticeCount` notes. At its end, a dialog lists
 * each note asked, how often, and the wrong keys played for it.
 *
 * Decisions, and what each costs:
 * - A wrong key counts a mistake against the asked note, and the question stays until the right key
 *   is played. The learner always ends on the right key, and the dialog shows what they confused.
 * - A note is never asked twice in a row while the pool holds two or more. Otherwise the draw is
 *   uniform, so a round can leave a note out.
 * - The scene shows no hint of the asked key, so the quiz tests the learner, not the screen.
 * - Names use flats in the flat keys and sharps elsewhere, as the key signature spells them, through
 *   `noteName` and `keyAccidentals` in `src/theory/`. The chromatic pool uses sharps.
 * - A change of the mode, the key, the notes or the count starts a new round.
 * - The panel lives as long as the player, so its texts follow the live locale of `src/i18n/live.ts`.
 *   The results dialog is built when the round ends, in the locale of that moment.
 * - The core, `Quiz`, is pure and takes its random source, so its tests need no browser.
 */
import { localize, onLocale, t, type Pick as Choose } from "../i18n/live";
import { normalizeRange } from "../keyboard/range";
import type { SettingsStore } from "../settings/store";
import { keyAccidentals } from "../theory/key";
import { noteName } from "../theory/note-names";
import { button, el } from "../ui/dom";
import type { InputBus } from "./input-bus";
import "./history.css";
import "./mode-panel.css";

/** A key pitch practice can ask from: one of the major keys, or every key of the keyboard. */
export type PracticeKey = "chromatic" | "C" | "G" | "D" | "A" | "E" | "B" | "Gb" | "Db" | "Ab" | "Eb" | "Bb" | "F";

/** The pitch class of each major key's tonic. */
const TONIC: Record<Exclude<PracticeKey, "chromatic">, number> = {
  C: 0, G: 7, D: 2, A: 9, E: 4, B: 11, Gb: 6, Db: 1, Ab: 8, Eb: 3, Bb: 10, F: 5,
};
/** The steps of a major scale above its tonic, in semitones. */
const MAJOR = [0, 2, 4, 5, 7, 9, 11];

/** The pitches of `key` from `first` to `last`, both included, from low to high. */
export function keyPitches(key: PracticeKey, first: number, last: number): number[] {
  const pitches: number[] = [];
  for (let pitch = first; pitch <= last; pitch++) {
    if (key === "chromatic" || MAJOR.includes((pitch - TONIC[key] + 12) % 12)) pitches.push(pitch);
  }
  return pitches;
}

/** The name of `pitch` as `key` spells it, such as `B♭3` in F major. */
export function spellPitch(pitch: number, key: PracticeKey): string {
  return noteName(pitch, { accidentals: key === "chromatic" ? "sharps" : keyAccidentals({ tonic: TONIC[key], mode: "major" }) });
}

/** One note a round asked: how often, and the wrong keys played while it was asked, in order. */
export interface AskedNote {
  readonly pitch: number;
  readonly asked: number;
  readonly wrong: readonly number[];
}

/** A round of pitch practice: a fixed list of notes, each asked until the right key is played. */
export class Quiz {
  readonly #questions: number[] = [];
  #index = 0;
  #firstTry = 0;
  /** Whether a wrong key was played for the note asked now. */
  #missed = false;
  readonly #asked = new Map<number, { asked: number; wrong: number[] }>();

  /** A round of `count` notes drawn from `pool`. `random` gives numbers from 0 up to 1. */
  constructor(pool: readonly number[], count: number, random: () => number = Math.random) {
    if (pool.length === 0) return;
    for (let i = 0; i < count; i++) {
      const previous = this.#questions[i - 1];
      const choices = pool.length > 1 ? pool.filter((pitch) => pitch !== previous) : pool;
      this.#questions.push(choices[Math.min(choices.length - 1, Math.floor(random() * choices.length))]!);
    }
    this.#note(this.#questions[0]!).asked++;
  }

  /** The note asked now, or nothing once the round is done. */
  get current(): number | undefined {
    return this.#questions[this.#index];
  }

  /** How many notes the round asks. */
  get count(): number {
    return this.#questions.length;
  }

  /** How many notes were answered right, so the one asked now is this plus one. */
  get answered(): number {
    return this.#index;
  }

  /** How many notes were found with no wrong key before them. */
  get firstTry(): number {
    return this.#firstTry;
  }

  get done(): boolean {
    return this.#index >= this.#questions.length;
  }

  /** The learner played `pitch`. The quiz moves on when it is the note asked, and returns whether it was. */
  answer(pitch: number): boolean {
    const current = this.current;
    if (current === undefined) return false;
    if (pitch !== current) {
      this.#note(current).wrong.push(pitch);
      this.#missed = true;
      return false;
    }
    if (!this.#missed) this.#firstTry++;
    this.#missed = false;
    this.#index++;
    const next = this.current;
    if (next !== undefined) this.#note(next).asked++;
    return true;
  }

  /** Each note asked so far, the most mistaken first, then from low to high. */
  results(): AskedNote[] {
    return [...this.#asked]
      .map(([pitch, { asked, wrong }]) => ({ pitch, asked, wrong }))
      .sort((a, b) => b.wrong.length - a.wrong.length || a.pitch - b.pitch);
  }

  #note(pitch: number): { asked: number; wrong: number[] } {
    let entry = this.#asked.get(pitch);
    if (entry === undefined) {
      entry = { asked: 0, wrong: [] };
      this.#asked.set(pitch, entry);
    }
    return entry;
  }
}

/** The notes pitch practice asks under `settings`: the key's, within both the chosen notes and the keyboard. */
export function practicePool(settings: Pick<SettingsStore, "get">): number[] {
  const keyboard = normalizeRange(settings.get("keyboardFirstNote"), settings.get("keyboardLastNote"));
  const first = Math.min(settings.get("pitchPracticeFirstNote"), settings.get("pitchPracticeLastNote"));
  const last = Math.max(settings.get("pitchPracticeFirstNote"), settings.get("pitchPracticeLastNote"));
  return keyPitches(settings.get("pitchPracticeKey"), Math.max(first, keyboard.first), Math.min(last, keyboard.last));
}

/** The results dialog's body: one row per note asked, with its wrong keys. */
export function resultsTable(quiz: Quiz, key: PracticeKey): HTMLElement {
  const words = t().player.input.pitchPractice;
  const results = quiz.results();
  const mistakes = results.reduce((sum, note) => sum + note.wrong.length, 0);
  const row = (cells: string[], tag: "th" | "td") => el("tr", { children: cells.map((text) => el(tag, { text })) });
  const columns = words.columns;
  return el("div", {
    children: [
      el("p", { text: words.mistakes(mistakes, quiz.count) }),
      el("table", {
        class: "history-table",
        children: [
          el("thead", { children: [row([columns.note, columns.asked, columns.mistakes, columns.playedInstead], "th")] }),
          el("tbody", {
            children: results.map((note) =>
              row([spellPitch(note.pitch, key), String(note.asked), String(note.wrong.length), note.wrong.map((pitch) => spellPitch(pitch, key)).join(", ") || "–"], "td"),
            ),
          }),
        ],
      }),
      el("p", { text: words.firstTry(quiz.firstTry, quiz.count) }),
    ],
  });
}

/** What pitch practice needs of the shell. */
export interface PitchPracticeHost {
  /** Where the panel goes, over the scene. */
  readonly container: HTMLElement;
  openDialog(title: string, body: Node): void;
  /** Sounds `pitch` once, on the learner's sound. */
  sound(pitch: number): void;
}

/** The settings whose change starts a new round. */
const ROUND_SETTINGS = new Set(["pitchPracticeKey", "pitchPracticeFirstNote", "pitchPracticeLastNote", "pitchPracticeCount", "keyboardFirstNote", "keyboardLastNote"]);

/** Runs pitch practice's panel and quiz while `playMode` is `pitchPractice`. Returns what stops it. */
export function attachPitchPractice(bus: InputBus, settings: SettingsStore, host: PitchPracticeHost): () => void {
  let quiz = new Quiz([], 0);
  let key: PracticeKey = "C";

  const prompt = el("strong", { class: "pitch-prompt" });
  const progress = el("span", { class: "mode-line" });
  const feedback = el("span", { class: "mode-line", attrs: { "aria-live": "polite" } });
  /** A button whose label and tooltip follow the live locale. */
  const labelled = (label: Choose, title: Choose, run: () => void) => {
    const node = localize(button("", run), label);
    localize(node, title, "data-tip");
    return localize(node, title, "aria-label");
  };
  const panel = localize(
    el("div", {
      class: "mode-panel",
      attrs: { role: "group" },
      children: [
        prompt,
        progress,
        feedback,
        el("div", {
          class: "mode-buttons",
          children: [
            labelled((m) => m.player.input.pitchPractice.hear, (m) => m.player.input.pitchPractice.hearTitle, () => {
              if (quiz.current !== undefined) host.sound(quiz.current);
            }),
            labelled((m) => m.player.input.pitchPractice.again, (m) => m.player.input.pitchPractice.againTitle, () => begin()),
          ],
        }),
      ],
    }),
    (m) => m.player.input.pitchPractice.heading,
    "aria-label",
  );
  host.container.append(panel);

  const show = () => {
    const words = t().player.input.pitchPractice;
    const current = quiz.current;
    if (quiz.count === 0) {
      prompt.textContent = words.empty;
      progress.textContent = words.emptyHint;
    } else if (current === undefined) {
      prompt.textContent = words.done;
      progress.textContent = words.found(quiz.count, quiz.count);
    } else {
      prompt.textContent = words.play(spellPitch(current, key));
      progress.textContent = words.progress(quiz.answered + 1, quiz.count);
    }
  };
  const begin = () => {
    const on = settings.get("playMode") === "pitchPractice";
    panel.hidden = !on;
    if (!on) return;
    key = settings.get("pitchPracticeKey");
    quiz = new Quiz(practicePool(settings), settings.get("pitchPracticeCount"));
    feedback.textContent = "";
    show();
  };

  const stopBus = bus.subscribe((event) => {
    if (event.type !== "noteOn" || panel.hidden || quiz.done) return;
    const asked = quiz.current!;
    const words = t().player.input.pitchPractice;
    if (!quiz.answer(event.pitch)) {
      feedback.textContent = words.wrong(spellPitch(event.pitch, key));
      return;
    }
    feedback.textContent = words.right(spellPitch(asked, key));
    show();
    if (quiz.done) host.openDialog(words.results, resultsTable(quiz, key));
  });
  const stopSettings = settings.subscribe((id) => {
    if (id === "playMode" || ROUND_SETTINGS.has(id)) begin();
  });
  // The feedback line is left as it is, since the next key rewrites it.
  const stopLocale = onLocale(show);
  begin();
  return () => {
    stopBus();
    stopSettings();
    stopLocale();
    panel.remove();
  };
}
