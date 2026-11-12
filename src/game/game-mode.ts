/**
 * Game mode: the learner's playing earns points live, judged by the referee of `src/game/referee.ts`,
 * and the screen of `src/game/game-hud.ts` shows each judgement over its key.
 *
 * Decisions, and what each costs:
 * - A take starts and ends as scored mode's does in `src/input/scoring.ts`. It starts at a load, a
 *   seek, or a change of the learner's notes or of the mode. It ends at the song's end or a loop's end.
 * - A seek anywhere else drops the take, so a jump never counts the notes it skips as misses.
 * - A change of difficulty restarts the take, so one take is judged on one level throughout.
 * - Game mode runs beside scored mode, and neither knows of the other. Each judges the same notes by
 *   its own windows, and only scored mode keeps a history.
 * - A press is judged only while the song plays. A release is judged whenever a take runs, so a key
 *   let go during a pause ends its hold there, rather than earning hold points after the song resumes.
 * - The pedal is followed whether the mode is on or not, so a take that starts with it down knows so.
 * - An event's time is on `performance.now()`. The referee takes the song time now, less the time since
 *   the event at the speed now.
 * - While wait mode holds the song, a press also tells the referee how far the song would have run on.
 *   Waiting for a note then costs as a late note, so wait mode helps without scoring every note perfect.
 * - The result card says when wait mode was on. Turning it on or off shows the song anew, which starts
 *   a new take, so one take is played with it or without it throughout.
 * - A finished take's card stays until the next take judges a note.
 */
import type { InputBus } from "../input/input-bus";
import { learnerPart, type LearnerPart } from "../input/wait-mode";
import type { Transport } from "../play/transport";
import type { PianoScene } from "../render/scene";
import type { SettingsStore } from "../settings/store";
import { createGameHud } from "./game-hud";
import { type GameEvent, Referee } from "./referee";
import { type Difficulty, RULES } from "./rules";

/** Song times closer than this are one time, in seconds. */
const EPSILON = 1e-6;

/** The name each difficulty shows as. */
const LEVEL_NAMES: Record<Difficulty, string> = { easy: "Easy", normal: "Normal", hard: "Hard" };

/**
 * Judges the learner's notes on `bus` against `transport.required` while `enableGameMode` is on, and shows
 * the game over `container`, placing each judgement by `scene`. Returns what stops it.
 */
export function attachGameMode(
  transport: Transport,
  bus: InputBus,
  settings: SettingsStore,
  scene: Pick<PianoScene, "keyPoint">,
  container: HTMLElement,
): () => void {
  const referee = new Referee(RULES[settings.get("gameDifficulty")]);
  const hud = createGameHud(container, scene);
  let part: LearnerPart | undefined;
  /** Whether the take has judged nothing yet, so its first judgement clears the last take's display. */
  let fresh = true;

  const report = (events: readonly GameEvent[]) => {
    if (events.length === 0) return;
    if (fresh) {
      fresh = false;
      hud.newTake();
    }
    hud.show(events, referee.score);
  };
  const begin = () => {
    const on = settings.get("enableGameMode");
    const difficulty = settings.get("gameDifficulty");
    referee.rules = RULES[difficulty];
    hud.setLevel(LEVEL_NAMES[difficulty]);
    hud.endHolds();
    hud.setHidden(!on);
    if (!on || transport.song === undefined) {
      part = undefined;
      return;
    }
    part = learnerPart(settings);
    referee.start(transport.required, part, transport.time);
    fresh = true;
  };
  const end = () => transport.loopRange?.end ?? transport.song?.duration ?? Infinity;
  const finish = () => {
    report(referee.finish(end()));
    hud.endHolds();
    const score = referee.score;
    if (score.perfect + score.great + score.good + score.wrong + score.miss + score.late > 0) hud.summary(score, settings.get("waitForNotes"));
  };

  const stopSeek = transport.onSeek((from) => {
    if (part !== undefined && from >= end() - EPSILON) finish();
    begin();
  });
  const stopShow = transport.onShow(begin);
  const stopSettings = settings.subscribe((id) => {
    if (id === "enableGameMode" || id === "gameDifficulty") begin();
  });
  const stopBus = bus.subscribe((event) => {
    if (event.type === "pedal") {
      referee.pedal(event.down);
      return;
    }
    if (part === undefined || (event.type === "noteOn" && !transport.playing)) return;
    if (event.pitch < part.range.first || event.pitch > part.range.last) return;
    const speed = transport.speed;
    const now = transport.time;
    const ago = ((performance.now() - event.time) / 1000) * speed;
    if (event.type === "noteOff") {
      report(referee.release(event.pitch, now - ago, speed));
      return;
    }
    const reached = now + transport.waited - ago;
    const time = Math.min(now, reached);
    report(referee.press(event.pitch, time, speed, reached - time));
  });
  let frame = requestAnimationFrame(function each(now) {
    if (part !== undefined && transport.playing) report(referee.tick(transport.time, transport.speed));
    hud.frame(now);
    frame = requestAnimationFrame(each);
  });
  begin();
  return () => {
    cancelAnimationFrame(frame);
    stopSeek();
    stopShow();
    stopSettings();
    stopBus();
    hud.dispose();
  };
}
