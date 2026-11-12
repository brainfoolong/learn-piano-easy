/**
 * Scored mode: each note the learner plays is judged against the song, and each take sums into a score.
 *
 * The judge holds the learner's notes of one take, each on the key `keyOf` gives. A note-on on a key
 * whose note starts within the hit window is a hit, and within the perfect window a perfect hit. Each
 * note takes one hit at most. A note-on that hits no note is a mistake, whether its pitch or its time
 * is wrong. A note whose window has passed unplayed is a miss.
 *
 * Decisions, and what each costs:
 * - The windows are real milliseconds, so at half speed a window spans half the song time. A
 *   learner's timing is steady in real time, whatever the speed.
 * - A note-on takes the unplayed note on its key nearest in time, so a key struck late for one note
 *   never steals the next note's hit.
 * - A take starts at a load, a seek, or a change of the learner's notes or of the mode. It ends at the
 *   song's end or a loop's end, and then its score goes into the history. A seek anywhere else drops
 *   the take, so a jump never counts the notes it skips as misses.
 * - A take records the speed and hands it started with. The loop trainer raises the speed before the
 *   next pass starts, so each pass records its own speed.
 * - The host hears each saved take, and whether it played the whole song without a loop or wait mode.
 *   Only such a take can beat a song, since wait mode makes every note perfect.
 * - A paused song judges nothing, and a key outside the learner's range is never judged.
 * - With wait mode on, the clock holds at each note, so a note played there is perfect. Only mistakes
 *   and notes struck early count against the learner.
 * - The score shows in a small panel over the scene. It keeps a finished take's result until the next
 *   take judges a note. Its History button lists the song's takes. Its texts follow the live locale
 *   of `src/i18n/live.ts`, and a change of it writes the shown score again.
 * - An event's time is on `performance.now()`. The judge takes the song time now, less the time since
 *   the event at the speed now.
 * - The core, `Judge`, is pure, so its tests need no browser. A note-on scans the notes from the first
 *   unjudged one to the end of its window.
 *
 * Gaps: song time is the audio clock's, which runs ahead of the speakers by the output latency, so a
 * learner who plays to the sound is judged late by that much.
 */
import { localize, onLocale, t } from "../i18n/live";
import type { Note, Song } from "../midi/song";
import type { Transport } from "../play/transport";
import type { SettingsStore } from "../settings/store";
import { button, el } from "../ui/dom";
import { accuracy, historyTable, songKey, type HistoryStore, type Score, type Take } from "./history";
import type { InputBus } from "./input-bus";
import { keyOf, learnerPart, type Hands, type LearnerPart } from "./wait-mode";
import "./mode-panel.css";
import "./scoring.css";

/** What one note-on, or one note left unplayed, earns. */
export type Judgement = "perfect" | "hit" | "mistake" | "miss";

/** The hit and perfect windows, either side of a note's start, in seconds of real time. */
export interface Windows {
  readonly hit: number;
  readonly perfect: number;
}

/** Song times closer than this are one time, in seconds. */
const EPSILON = 1e-6;

/** A note of the take, on its key. */
interface Target {
  readonly key: number;
  readonly start: number;
  judged: boolean;
}

/** Judges the learner's note-ons against the notes of one take. */
export class Judge {
  #targets: Target[] = [];
  /** The index of the first target that may be unjudged. */
  #first = 0;
  #score = { hits: 0, perfect: 0, misses: 0, mistakes: 0 };
  windows: Windows;

  constructor(windows: Windows = { hit: 0.15, perfect: 0.05 }) {
    this.windows = windows;
  }

  /** The take's score so far. */
  get score(): Score {
    return { ...this.#score };
  }

  /**
   * Starts a take of `notes`, the learner's in start order, from song time `from`. A note that starts
   * before `from` is not judged. Two notes on one key and tick are one note.
   */
  start(notes: readonly Note[], part: LearnerPart, from: number): void {
    const seen = new Set<string>();
    this.#targets = [];
    for (const note of notes) {
      if (note.start < from - EPSILON) continue;
      const key = keyOf(note, part);
      if (key === undefined) continue;
      const id = `${key}:${note.startTick}`;
      if (seen.has(id)) continue;
      seen.add(id);
      this.#targets.push({ key, start: note.start, judged: false });
    }
    this.#first = 0;
    this.#score = { hits: 0, perfect: 0, misses: 0, mistakes: 0 };
  }

  /** Judges a note-on of `key` at song time `time`, played at `speed` times the written tempo. */
  press(key: number, time: number, speed: number): Judgement {
    const reach = this.windows.hit * speed + EPSILON;
    let best: Target | undefined;
    let gap = Infinity;
    for (let i = this.#first; i < this.#targets.length; i++) {
      const target = this.#targets[i]!;
      if (target.start > time + reach) break;
      if (target.judged || target.key !== key) continue;
      const distance = Math.abs(target.start - time);
      if (distance <= reach && distance < gap) {
        best = target;
        gap = distance;
      }
    }
    if (best === undefined) {
      this.#score.mistakes++;
      return "mistake";
    }
    best.judged = true;
    this.#score.hits++;
    if (gap > Math.min(this.windows.perfect, this.windows.hit) * speed + EPSILON) return "hit";
    this.#score.perfect++;
    return "perfect";
  }

  /** Counts every note whose window has passed by song time `time` as a miss. Returns how many it counted. */
  pass(time: number, speed: number): number {
    const reach = this.windows.hit * speed + EPSILON;
    let missed = 0;
    while (this.#first < this.#targets.length) {
      const target = this.#targets[this.#first]!;
      if (!target.judged) {
        if (time - target.start <= reach) break;
        target.judged = true;
        missed++;
      }
      this.#first++;
    }
    this.#score.misses += missed;
    return missed;
  }

  /** Ends the take at song time `end`. Every unjudged note that starts before it is a miss. Returns how many. */
  finish(end: number): number {
    let missed = 0;
    for (const target of this.#targets) {
      if (target.judged || target.start >= end - EPSILON) continue;
      target.judged = true;
      missed++;
    }
    this.#first = this.#targets.length;
    this.#score.misses += missed;
    return missed;
  }
}

/** The score panel over the scene. */
interface ScorePanel {
  readonly element: HTMLElement;
  /** Shows `score`, and `last` as the latest judgement. */
  show(score: Score, last: Judgement | undefined): void;
  /** Shows a line under the score, such as whether the take was saved. */
  say(text: string): void;
  /** Stops following the live locale. */
  dispose(): void;
}

function createScorePanel(onHistory: () => void): ScorePanel {
  const percent = el("strong", { class: "score-accuracy", text: "–" });
  const last = el("span", { class: "score-last" });
  const counts = el("span", { class: "score-counts" });
  const line = el("span", { class: "score-line" });
  const history = localize(button("", onHistory, { class: "outline" }), (m) => m.player.input.scoring.history);
  localize(history, (m) => m.player.input.scoring.historyTitle, "data-tip");
  localize(history, (m) => m.player.input.scoring.historyTitle, "aria-label");
  const element = localize(
    el("div", {
      class: "score-panel",
      attrs: { role: "group" },
      children: [el("div", { class: "score-top", children: [percent, last] }), counts, line, history],
    }),
    (m) => m.player.input.scoring.heading,
    "aria-label",
  );
  // The score and judgement shown, which a change of the locale writes again in its words.
  let shownScore: Score = { hits: 0, perfect: 0, misses: 0, mistakes: 0 };
  let shownJudgement: Judgement | undefined;
  const write = () => {
    const words = t().player.input;
    const share = accuracy(shownScore);
    percent.textContent = share === undefined ? "–" : words.percent(Math.round(share * 100));
    counts.textContent = words.scoring.counts(shownScore.hits, shownScore.perfect, shownScore.misses, shownScore.mistakes);
    last.textContent = shownJudgement === undefined ? "" : words.scoring.judgements[shownJudgement];
  };
  const stopLocale = onLocale(write);
  const panel: ScorePanel = {
    element,
    show(score, judgement) {
      shownScore = score;
      shownJudgement = judgement;
      write();
      last.dataset.judgement = judgement ?? "";
      // Each judgement turns the beat, which names the tag's pop anew in `scoring.css`.
      if (judgement !== undefined) last.dataset.beat = last.dataset.beat === "a" ? "b" : "a";
      line.textContent = "";
    },
    say(text) {
      line.textContent = text;
    },
    dispose: () => void stopLocale(),
  };
  panel.show(shownScore, undefined);
  return panel;
}

/** What scored mode needs of the shell. */
export interface ScoringHost {
  /** Where the score panel goes, over the scene. */
  readonly container: HTMLElement;
  readonly history: HistoryStore;
  openDialog(title: string, body: Node): void;
  /** Hears each take once it is saved. `plain` says it played the whole song, without a loop or wait mode. */
  saved?(take: Take, plain: boolean): void;
}

/**
 * Judges the learner's notes on `bus` against `transport.required` while `enableScoreMode` is on, shows
 * the score, and saves each finished take to the history. Returns what stops it.
 */
export function attachScoring(transport: Transport, bus: InputBus, settings: SettingsStore, host: ScoringHost): () => void {
  const judge = new Judge();
  let take: { song: Song; speed: number; hands: Hands; part: LearnerPart } | undefined;
  const panel = createScorePanel(() => {
    const song = transport.song;
    if (song === undefined) return;
    const words = t().player.input.scoring;
    host.history.list(songKey(song)).then(
      (takes) => host.openDialog(words.historyTitle, historyTable(takes)),
      () => host.openDialog(words.historyTitle, el("p", { text: words.readError })),
    );
  });
  host.container.append(panel.element);

  const readWindows = () => {
    judge.windows = { hit: settings.get("scoreHitWindow") / 1000, perfect: settings.get("scorePerfectWindow") / 1000 };
  };
  const begin = () => {
    const on = settings.get("enableScoreMode");
    panel.element.hidden = !on;
    const song = transport.song;
    if (!on || song === undefined) {
      take = undefined;
      return;
    }
    const part = learnerPart(settings);
    judge.start(transport.required, part, transport.time);
    take = { song, speed: transport.speed, hands: part.hands, part };
  };
  const end = () => transport.loopRange?.end ?? transport.song?.duration ?? Infinity;
  const save = (current: NonNullable<typeof take>) => {
    judge.finish(end());
    const score = judge.score;
    if (score.hits + score.misses + score.mistakes === 0) return;
    panel.show(score, undefined);
    const plain = transport.loopRange === undefined && !settings.get("waitForNotes");
    const kept: Take = { song: songKey(current.song), date: Date.now(), speed: current.speed, hands: current.hands, ...score };
    host.history.add(kept).then(
      () => {
        panel.say(t().player.input.scoring.saved);
        host.saved?.(kept, plain);
      },
      () => panel.say(t().player.input.scoring.saveError),
    );
  };

  const stopSeek = transport.onSeek((from) => {
    if (take !== undefined && from >= end() - EPSILON) save(take);
    begin();
  });
  const stopShow = transport.onShow(begin);
  const stopSettings = settings.subscribe((id) => {
    if (id === "enableScoreMode") begin();
    else if (id === "scoreHitWindow" || id === "scorePerfectWindow") readWindows();
  });
  const stopBus = bus.subscribe((event) => {
    if (event.type !== "noteOn" || take === undefined || !transport.playing) return;
    if (event.pitch < take.part.range.first || event.pitch > take.part.range.last) return;
    const speed = transport.speed;
    const time = transport.time - ((performance.now() - event.time) / 1000) * speed;
    judge.pass(time, speed);
    const judgement = judge.press(event.pitch, time, speed);
    panel.show(judge.score, judgement);
  });
  let frame = requestAnimationFrame(function each() {
    if (take !== undefined && transport.playing && judge.pass(transport.time, transport.speed) > 0) panel.show(judge.score, "miss");
    frame = requestAnimationFrame(each);
  });
  readWindows();
  begin();
  return () => {
    cancelAnimationFrame(frame);
    stopSeek();
    stopShow();
    stopSettings();
    stopBus();
    panel.dispose();
    panel.element.remove();
  };
}
