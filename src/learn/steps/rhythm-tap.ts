/**
 * The `rhythm-tap` step: the learner taps any key on the beat of a metronome, after one bar of count-in.
 * A step with `notes` asks for a phrase's keys in time instead, and judges its rests.
 *
 * - **Start begins a round.** The metronome clicks `COUNT_IN` beats and then the step's `taps` beats, at
 *   its tempo. Taps during the count-in are ignored, so a learner may tap along while listening.
 * - **Rhythm is judged on the audio clock, never on `Date.now()`.** A tap's time is its input event's
 *   time, mapped to the clock as the learner hears it. A slow frame never judges a tap late.
 * - **The frame loop only shows.** Each frame it reads the clock, lights the current beat's dot and marks
 *   the beats whose window has closed. The judge decides, and the loop draws what it decided.
 * - **A tap hits the beat nearest to it, when it lands within `WINDOW` of it.** Each beat takes one tap.
 *   A second tap on a hit beat, or one far from every beat, is an extra. An extra marks its key a
 *   mistake but never fails a round, so the share counts beats, not taps.
 * - **A phrase's note is hit the same way, by a press of its own key.** A press of another key is an
 *   extra. Each tap beat's dot carries its kind: a note's start, a beat inside a held note, or a rest.
 * - **A phrase's rest must stay silent.** A press that hits no note and starts inside a rest breaks it.
 *   So does a key pressed before the rest and still down at its middle. A broken rest fails the round.
 * - **A round passes when enough beats or notes were hit,** at the step's `pass` share, and no rest
 *   broke. A round short of it is one mistake, and Start runs another. After `HINT_AFTER` of them a hint
 *   shows and the dots flash on the beat. A passed round sets `data-passed`, which hides Start in its
 *   place, so nothing moves.
 * - **The judges are `judgeTaps` and `judgePhrase`,** pure functions the unit tests call.
 *
 * The root carries `data-phase`, `data-beat` and `data-first-tap`, which the e2e test taps by.
 *
 * Above 200 beats a minute, beats sit closer than two windows. The nearest beat then takes the tap, so
 * the window there is half a beat.
 */
import { messagesOf } from "../../i18n/locale";
import { button } from "../../ui/components/button";
import { el } from "../../ui/dom";
import type { Clicks } from "../lesson-sound";
import type { PhraseNote, RhythmTapStep } from "../model";
import { demoRange } from "./demo";
import { passesRound, scoreOf, showsHint } from "./judge";
import { listeningKeys } from "./keys";
import type { StepView } from "./step";

/** The beats of the count-in: one bar of four. */
export const COUNT_IN = 4;

/** How far from its beat a tap may land and still hit it, in seconds. */
export const WINDOW = 0.15;

/** Which beats got a tap, and which taps hit a beat. */
export interface TapJudgement {
  /** One entry per beat: whether a tap hit it. */
  beats: boolean[];
  /** One entry per tap: whether it hit a beat. A tap that did not is an extra. */
  taps: boolean[];
}

/** The times of `count` beats at `bpm`, from `first`, in seconds. */
export function beatTimes(first: number, bpm: number, count: number): number[] {
  return Array.from({ length: count }, (_, i) => first + (i * 60) / bpm);
}

/**
 * Judges `taps` against `beats`, both in seconds on one clock, the taps in the order they came. Each tap
 * goes to its nearest beat, and hits it when within `WINDOW`, the beat has no tap yet, and `fits` holds.
 */
function assignTaps(beats: readonly number[], taps: readonly number[], fits: (beat: number, tap: number) => boolean): TapJudgement {
  const hit = beats.map(() => false);
  const tapped = taps.map((tap, t) => {
    let nearest = -1;
    beats.forEach((beat, i) => {
      if (nearest < 0 || Math.abs(tap - beat) < Math.abs(tap - beats[nearest]!)) nearest = i;
    });
    if (nearest < 0 || hit[nearest] || Math.abs(tap - beats[nearest]!) > WINDOW || !fits(nearest, t)) return false;
    hit[nearest] = true;
    return true;
  });
  return { beats: hit, taps: tapped };
}

/** Judges `taps` against `beats`, both in seconds on one clock, the taps in the order they came. Any key fits any beat. */
export function judgeTaps(beats: readonly number[], taps: readonly number[]): TapJudgement {
  return assignTaps(beats, taps, () => true);
}

/** One press of a phrase's round: its key, when it went down, and when it came up, absent while held. All in seconds. */
export interface Press {
  pitch: number;
  at: number;
  end?: number;
}

/** A rest of a phrase, from the round's start or a note's end to the next note's start, in beats. */
export interface Rest {
  from: number;
  to: number;
}

/** The rests of `notes`, a phrase in order, in beats from the round's first tap beat. */
export function restsOf(notes: readonly PhraseNote[]): Rest[] {
  const rests: Rest[] = [];
  let end = 0;
  for (const note of notes) {
    if (note.at > end) rests.push({ from: end, to: note.at });
    end = note.at + note.beats;
  }
  return rests;
}

/** Which notes of a phrase were hit, which presses hit one, and which rests broke. */
export interface PhraseJudgement {
  /** One entry per note: whether a press of its key hit it. */
  notes: boolean[];
  /** One entry per press: whether it hit a note. A press that did not is an extra. */
  presses: boolean[];
  /** One entry per rest of `restsOf`: whether a key sounded in it. */
  broken: boolean[];
}

/**
 * Judges `presses` against `notes`, a phrase whose beat 0 sounds at `first` at `bpm`, in seconds on one
 * clock. A press with no `end` is still down at `now`. A note is hit as `judgeTaps` hits a beat, by its
 * own key. A rest breaks when a press that hits no note starts inside it, or when a key pressed before
 * it is still down at its middle.
 */
export function judgePhrase(first: number, bpm: number, notes: readonly PhraseNote[], presses: readonly Press[], now = Number.POSITIVE_INFINITY): PhraseJudgement {
  const time = (beat: number) => first + (beat * 60) / bpm;
  const hits = assignTaps(
    notes.map((note) => time(note.at)),
    presses.map((press) => press.at),
    (note, press) => notes[note]!.note === presses[press]!.pitch,
  );
  const broken = restsOf(notes).map((rest) => {
    const from = time(rest.from);
    const to = time(rest.to);
    const middle = (from + to) / 2;
    return presses.some((press, i) => (!hits.taps[i] && press.at >= from && press.at < to) || (press.at < from && (press.end ?? now) > middle));
  });
  return { notes: hits.beats, presses: hits.taps, broken };
}

type Phase = "idle" | "count-in" | "tapping" | "done";

/** What a round decided so far: a mark per tap beat, the beats or notes hit, and whether a rest broke. */
interface RoundState {
  marks: ("correct" | "mistake" | undefined)[];
  hits: number;
  /** Whether the latest press hit a beat or a note. */
  lastHit: boolean;
  broken: boolean;
}

/** The keys of the tap pad: the octave from middle C. */
const PAD = { first: 60, last: 72 };

export const rhythmTapStep: StepView<RhythmTapStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.rhythmTap;
  const phrase = step.notes;
  const rests = phrase === undefined ? [] : restsOf(phrase);
  const asked = phrase?.length ?? step.taps;
  const total = COUNT_IN + step.taps;
  let mistakes = 0;
  let clicks: Clicks | undefined;
  /** Every beat's time on the audio clock, count-in first, once a round's clicks are queued. */
  let times: number[] = [];
  let presses: Press[] = [];
  let listening = false;
  let frame = 0;
  let shown = -1;

  /** The kind of tap beat `beat`: a note's start, a beat inside a held note, or a rest. Without a phrase, every beat is a tap. */
  const kindOf = (beat: number) => (phrase === undefined || phrase.some((note) => note.at === beat) ? "tap" : rests.some((rest) => rest.from <= beat && beat < rest.to) ? "rest" : "hold");

  const status = el("p", { class: "lesson-rhythm__status", attrs: { "aria-live": "polite" } });
  const hint = el("p", { class: "lesson-step__hint", attrs: { "aria-live": "polite" } });
  const dots = Array.from({ length: total }, (_, i) => el("li", { class: "lesson-rhythm__beat", attrs: { "data-kind": i < COUNT_IN ? "count-in" : kindOf(i - COUNT_IN) } }));
  const root = el("div", {
    class: "lesson-step lesson-rhythm",
    attrs: { "data-phase": "idle", "data-first-tap": String(COUNT_IN) },
  });
  const setPhase = (phase: Phase) => {
    root.dataset.phase = phase;
    status.textContent = phase === "count-in" ? t.listen : phase === "tapping" ? (phrase === undefined ? t.tap : t.play) : "";
  };

  /** What the round decided by audio time `now`. A mark shows once its beat is hit, or its window closed. */
  const judgeAt = (now: number): RoundState => {
    const marks: RoundState["marks"] = Array.from({ length: step.taps }, () => undefined);
    const closed = (beat: number) => now > times[COUNT_IN + beat]! + WINDOW;
    if (phrase === undefined) {
      const judged = judgeTaps(
        times.slice(COUNT_IN),
        presses.map((press) => press.at),
      );
      judged.beats.forEach((hit, beat) => (marks[beat] = hit ? "correct" : closed(beat) ? "mistake" : undefined));
      return { marks, hits: judged.beats.filter(Boolean).length, lastHit: judged.taps[judged.taps.length - 1] ?? false, broken: false };
    }
    const judged = judgePhrase(times[COUNT_IN]!, step.bpm, phrase, presses, now);
    phrase.forEach((note, i) => (marks[note.at] = judged.notes[i] ? "correct" : closed(note.at) ? "mistake" : undefined));
    rests.forEach((rest, i) => {
      if (judged.broken[i]) marks[Math.floor(rest.from)] = "mistake";
    });
    return { marks, hits: judged.notes.filter(Boolean).length, lastHit: judged.presses[judged.presses.length - 1] ?? false, broken: judged.broken.some(Boolean) };
  };

  const showMarks = (state: RoundState) => {
    state.marks.forEach((mark, beat) => {
      if (mark !== undefined) dots[COUNT_IN + beat]!.dataset.mark = mark;
    });
  };

  const pitches = phrase?.map((note) => note.note);
  const keys = listeningKeys(host, {
    label: phrase === undefined ? t.piano : t.phrasePiano,
    range: pitches === undefined ? PAD : demoRange(pitches),
    names: "c",
    markNames: t.marks,
    ...(pitches === undefined ? {} : { notes: pitches }),
    onNote: (pitch, event) => {
      if (!listening) return;
      const at = host.sound.toAudioTime(event.time);
      if (at === undefined || at < times[COUNT_IN]! - WINDOW) return;
      presses.push({ pitch, at });
      const state = judgeAt(at);
      keys.marks.set(new Map([[pitch, state.lastHit ? ("correct" as const) : ("mistake" as const)]]));
      showMarks(state);
    },
    onNoteOff: (pitch, event) => {
      if (!listening) return;
      const held = presses.findLast((press) => press.pitch === pitch && press.end === undefined);
      if (held !== undefined) held.end = host.sound.toAudioTime(event.time) ?? held.at;
    },
  });

  const finish = () => {
    listening = false;
    cancelAnimationFrame(frame);
    clicks?.stop();
    clicks = undefined;
    const state = judgeAt(Number.POSITIVE_INFINITY);
    showMarks(state);
    setPhase("done");
    if (passesRound(state.hits, asked, step.pass) && !state.broken) {
      start.disabled = true;
      root.dataset.passed = "";
      hint.textContent = "";
      delete root.dataset.flash;
      host.pass({ mistakes, score: scoreOf(mistakes) });
      return;
    }
    mistakes += 1;
    if (showsHint(mistakes)) {
      hint.textContent = phrase === undefined ? t.hint : t.phraseHint;
      root.dataset.flash = "";
    }
    start.disabled = false;
    host.tryAgain(state.broken ? t.restSounded : phrase === undefined ? t.short(state.hits, asked) : t.shortNotes(state.hits, asked));
  };

  const tick = () => {
    const now = host.sound.toAudioTime(performance.now());
    if (now !== undefined) {
      const beat = Math.min(total - 1, Math.floor(((now - times[0]!) * step.bpm) / 60));
      if (beat >= 0 && beat !== shown) {
        dots[shown]?.removeAttribute("data-now");
        dots[beat]!.dataset.now = "";
        root.dataset.beat = String(beat);
        shown = beat;
      }
      if (root.dataset.phase === "count-in" && now >= times[COUNT_IN]! - WINDOW) setPhase("tapping");
      showMarks(judgeAt(now));
      if (now > times[total - 1]! + WINDOW) {
        finish();
        return;
      }
    }
    frame = requestAnimationFrame(tick);
  };

  const begin = () => {
    start.disabled = true;
    presses = [];
    times = [];
    shown = -1;
    for (const dot of dots) {
      dot.removeAttribute("data-mark");
      dot.removeAttribute("data-now");
    }
    root.removeAttribute("data-beat");
    keys.marks.set(new Map());
    setPhase("idle");
    const own = host.sound.clicks(step.bpm, total, COUNT_IN);
    clicks = own;
    void own.first.then((first) => {
      if (first === undefined || clicks !== own) return;
      times = beatTimes(first, step.bpm, total);
      listening = true;
      setPhase("count-in");
      frame = requestAnimationFrame(tick);
    });
  };
  const start = button({ label: t.start, variant: "primary", icon: "play", onClick: begin });

  root.append(
    el("p", { class: "lesson-step__text", text: host.texts.text }),
    el("div", { class: "lesson-rhythm__actions", children: [start, status] }),
    el("ol", { class: "lesson-rhythm__beats", attrs: { "aria-hidden": "true" }, children: dots }),
    el("div", { class: "lesson-step__keys", children: [keys.element] }),
    hint,
  );
  element.append(root);
  return {
    dispose() {
      listening = false;
      cancelAnimationFrame(frame);
      clicks?.stop();
      clicks = undefined;
      keys.dispose();
    },
  };
};
