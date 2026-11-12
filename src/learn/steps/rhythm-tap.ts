/**
 * The `rhythm-tap` step: the learner taps any key on the beat of a metronome, after one bar of count-in.
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
 * - **A round passes when enough beats got a tap,** at the step's `pass` share. A round short of it is
 *   one mistake, and Start runs another. After `HINT_AFTER` of them a hint shows and the dots flash on
 *   the beat. A passed round sets `data-passed`, which hides Start in its place, so nothing moves.
 * - **The judge is `judgeTaps`,** a pure function the unit tests call.
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
import type { RhythmTapStep } from "../model";
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
 * goes to its nearest beat, and hits it when within `WINDOW` and the beat has no tap yet.
 */
export function judgeTaps(beats: readonly number[], taps: readonly number[]): TapJudgement {
  const hit = beats.map(() => false);
  const tapped = taps.map((tap) => {
    let nearest = -1;
    beats.forEach((beat, i) => {
      if (nearest < 0 || Math.abs(tap - beat) < Math.abs(tap - beats[nearest]!)) nearest = i;
    });
    if (nearest < 0 || hit[nearest] || Math.abs(tap - beats[nearest]!) > WINDOW) return false;
    hit[nearest] = true;
    return true;
  });
  return { beats: hit, taps: tapped };
}

type Phase = "idle" | "count-in" | "tapping" | "done";

/** The keys of the tap pad: the octave from middle C. */
const PAD = { first: 60, last: 72 };

export const rhythmTapStep: StepView<RhythmTapStep> = (element, step, host) => {
  const t = messagesOf(host.locale).lesson.rhythmTap;
  const total = COUNT_IN + step.taps;
  let mistakes = 0;
  let clicks: Clicks | undefined;
  /** Every beat's time on the audio clock, count-in first, once a round's clicks are queued. */
  let times: number[] = [];
  let taps: number[] = [];
  let listening = false;
  let frame = 0;
  let shown = -1;

  const status = el("p", { class: "lesson-rhythm__status", attrs: { "aria-live": "polite" } });
  const hint = el("p", { class: "lesson-step__hint", attrs: { "aria-live": "polite" } });
  const dots = Array.from({ length: total }, (_, i) =>
    el("li", { class: "lesson-rhythm__beat", attrs: { "data-kind": i < COUNT_IN ? "count-in" : "tap" } }),
  );
  const root = el("div", {
    class: "lesson-step lesson-rhythm",
    attrs: { "data-phase": "idle", "data-first-tap": String(COUNT_IN) },
  });
  const setPhase = (phase: Phase) => {
    root.dataset.phase = phase;
    status.textContent = phase === "count-in" ? t.listen : phase === "tapping" ? t.tap : "";
  };
  const tapBeats = () => times.slice(COUNT_IN);

  /** Marks each tap beat that got a tap, and each one whose window closed before `now` without one. */
  const showMarks = (judged: TapJudgement, now: number) => {
    tapBeats().forEach((beat, i) => {
      const dot = dots[COUNT_IN + i]!;
      if (judged.beats[i]) dot.dataset.mark = "correct";
      else if (now > beat + WINDOW) dot.dataset.mark = "mistake";
    });
  };

  const keys = listeningKeys(host, {
    label: t.piano,
    range: PAD,
    names: "c",
    markNames: t.marks,
    onNote: (pitch, event) => {
      if (!listening) return;
      const at = host.sound.toAudioTime(event.time);
      if (at === undefined || at < times[COUNT_IN]! - WINDOW) return;
      taps.push(at);
      const judged = judgeTaps(tapBeats(), taps);
      keys.marks.set(new Map([[pitch, judged.taps[taps.length - 1] ? ("correct" as const) : ("mistake" as const)]]));
      showMarks(judged, at);
    },
  });

  const finish = () => {
    listening = false;
    cancelAnimationFrame(frame);
    clicks?.stop();
    clicks = undefined;
    const judged = judgeTaps(tapBeats(), taps);
    showMarks(judged, Number.POSITIVE_INFINITY);
    setPhase("done");
    const hits = judged.beats.filter(Boolean).length;
    if (passesRound(hits, step.taps, step.pass)) {
      start.disabled = true;
      root.dataset.passed = "";
      hint.textContent = "";
      delete root.dataset.flash;
      host.pass({ mistakes, score: scoreOf(mistakes) });
      return;
    }
    mistakes += 1;
    if (showsHint(mistakes)) {
      hint.textContent = t.hint;
      root.dataset.flash = "";
    }
    start.disabled = false;
    host.tryAgain(t.short(hits, step.taps));
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
      showMarks(judgeTaps(tapBeats(), taps), now);
      if (now > times[total - 1]! + WINDOW) {
        finish();
        return;
      }
    }
    frame = requestAnimationFrame(tick);
  };

  const begin = () => {
    start.disabled = true;
    taps = [];
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
