/**
 * The timeline: a bar across the control bar that shows where the song stands, and seeks where it is
 * dragged or clicked.
 *
 * The labels show the time as `m:ss`, or as `measure.beat` when `progressBarMeasures` is on, counting
 * both from 1. `showMilliseconds` adds the milliseconds to a time. `progressBarMeasureLines` draws a line
 * at each measure, and `showMarkersTimeline` draws each MIDI marker with its text as a tooltip.
 *
 * Decisions, and what each costs:
 * - Each move of a drag seeks, so the picture follows the pointer. While playing, each seek also
 *   silences and requeues the sound.
 * - The bar is a slider to assistive tools and the keyboard. The arrow keys seek by `KEY_STEP` seconds,
 *   and Home and End jump to the ends. Its name follows the live locale.
 * - `update` runs every frame, and writes to the page only what changed.
 * - The measure lines, the markers and the loop's band are rebuilt only when `refresh` runs. The bar
 *   calls it when the song or the loop changes, and the timeline when its own settings change.
 * - With `playNotesOnScrollEnabled`, a drag scrubs, so the notes it crosses sound. A click only seeks.
 * - The song runs from left to right on every page, so the timeline carries `dir="ltr"` and never
 *   mirrors. Its keys keep their physical way too, so the right arrow seeks forward.
 */
import type { Song } from "../midi/song";
import type { TempoMap } from "../midi/tempo-map";
import { localize } from "../i18n/live";
import type { SettingsStore } from "../settings/store";
import { el } from "../ui/dom";
import type { Transport } from "./transport";

/** How far an arrow key seeks, in seconds. */
export const KEY_STEP = 5;

/** `seconds` as `m:ss`, or `m:ss.mmm` with `milliseconds`. A time below 0 shows as 0. */
export function formatClock(seconds: number, milliseconds: boolean): string {
  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  const whole = Math.floor(rest);
  const clock = `${minutes}:${String(whole).padStart(2, "0")}`;
  if (!milliseconds) return clock;
  return `${clock}.${String(Math.floor((rest - whole) * 1000)).padStart(3, "0")}`;
}

/** The measure and beat at `seconds` as `measure.beat`, both counted from 1. */
export function formatPosition(tempoMap: TempoMap, seconds: number): string {
  const { measure, beat } = tempoMap.positionAt(Math.max(0, seconds));
  return `${measure + 1}.${Math.floor(beat + 1e-9) + 1}`;
}

/** The seconds each measure of `song` starts at, the first at 0. */
export function measureStarts(song: Song): number[] {
  return song.tempoMap
    .beatsUntil(song.endTick)
    .filter((beat) => beat.beat === 0 && beat.tick < song.endTick)
    .map((beat) => beat.seconds);
}

export interface Timeline {
  readonly element: HTMLElement;
  /** Shows the transport's song time. Call it every frame. */
  update(): void;
  /** Redraws the measure lines, markers and loop band. Call it when a song loads or the loop changes. */
  refresh(): void;
  dispose(): void;
}

/** A timeline that shows and seeks `transport`'s song, styled by `settings`. */
export function createTimeline(transport: Transport, settings: SettingsStore): Timeline {
  const now = el("span", { class: "timeline-time" });
  const total = el("span", { class: "timeline-time" });
  const fill = el("div", { class: "timeline-fill" });
  const marks = el("div", { class: "timeline-marks" });
  const track = el("div", {
    class: "timeline-track",
    attrs: { role: "slider", tabindex: "0", "aria-valuemin": "0" },
    children: [fill, marks],
  });
  localize(track, (m) => m.player.bar.timeline.position, "aria-label");
  const element = el("div", { class: "timeline", attrs: { dir: "ltr" }, children: [now, track, total] });

  const duration = () => transport.song?.duration ?? 0;
  const label = (seconds: number) => {
    const song = transport.song;
    if (song !== undefined && settings.get("progressBarMeasures")) return formatPosition(song.tempoMap, seconds);
    return formatClock(seconds, settings.get("showMilliseconds"));
  };

  let shownTime = Number.NaN;
  let shownLabel = "";
  let shownValue = "";
  const update = () => {
    const time = transport.time;
    if (time === shownTime) return;
    shownTime = time;
    const share = duration() > 0 ? Math.min(1, Math.max(0, time / duration())) : 0;
    fill.style.width = `${share * 100}%`;
    // The value moves apart from the label, which shows every time before 0 as the same 0:00.
    const value = String(Math.round(time));
    if (value !== shownValue) {
      shownValue = value;
      track.setAttribute("aria-valuenow", value);
    }
    const text = label(time);
    if (text === shownLabel) return;
    shownLabel = text;
    now.textContent = text;
    track.setAttribute("aria-valuetext", text);
  };

  const refresh = () => {
    const song = transport.song;
    const end = duration();
    total.textContent = song === undefined ? "" : label(end);
    track.setAttribute("aria-valuemax", String(Math.round(end)));
    marks.replaceChildren();
    if (song !== undefined && end > 0) {
      const at = (seconds: number) => `${(seconds / end) * 100}%`;
      const loop = transport.loopRange;
      if (loop !== undefined) {
        const width = `${((loop.end - loop.start) / end) * 100}%`;
        marks.append(el("div", { class: "timeline-loop", attrs: { style: `left: ${at(loop.start)}; width: ${width}` } }));
      }
      if (settings.get("progressBarMeasureLines")) {
        for (const start of measureStarts(song).slice(1)) {
          marks.append(el("div", { class: "timeline-measure", attrs: { style: `left: ${at(start)}` } }));
        }
      }
      if (settings.get("showMarkersTimeline")) {
        for (const marker of song.markers) {
          marks.append(el("div", { class: "timeline-marker", attrs: { style: `left: ${at(marker.seconds)}`, "data-tip": marker.text } }));
        }
      }
    }
    shownTime = Number.NaN;
    shownLabel = "";
    shownValue = "";
    update();
  };

  const seekTo = (clientX: number, dragging: boolean) => {
    const box = track.getBoundingClientRect();
    if (box.width === 0) return;
    const seconds = ((clientX - box.left) / box.width) * duration();
    if (dragging && settings.get("playNotesOnScrollEnabled")) transport.scrub(seconds);
    else transport.seek(seconds);
  };
  track.addEventListener("pointerdown", (event) => {
    track.setPointerCapture(event.pointerId);
    seekTo(event.clientX, false);
  });
  track.addEventListener("pointermove", (event) => {
    if (track.hasPointerCapture(event.pointerId)) seekTo(event.clientX, true);
  });
  track.addEventListener("keydown", (event) => {
    const moves: Record<string, number> = {
      ArrowLeft: transport.time - KEY_STEP,
      ArrowDown: transport.time - KEY_STEP,
      ArrowRight: transport.time + KEY_STEP,
      ArrowUp: transport.time + KEY_STEP,
      Home: transport.start,
      End: duration(),
    };
    const target = moves[event.key];
    if (target === undefined) return;
    event.preventDefault();
    transport.seek(target);
  });

  const LOOKS = new Set(["progressBarMeasures", "showMilliseconds", "progressBarMeasureLines", "showMarkersTimeline"]);
  const unsubscribe = settings.subscribe((id) => {
    if (LOOKS.has(id)) refresh();
  });

  refresh();
  return { element, update, refresh, dispose: unsubscribe };
}
