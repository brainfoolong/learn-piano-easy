/**
 * Free play: the learner plays with the song set aside, and can record what they play as a MIDI file.
 *
 * While `playMode` is `freePlay`, a panel over the scene shows a Record button, the take's length and a
 * Save button. Record starts a take of the bus through the `Recorder`, and Stop ends it. Save hands the
 * last take's bytes to the shell, which downloads them as a `.mid` file.
 *
 * Decisions, and what each costs:
 * - Only free play records, so a song's own notes never mix into a recording.
 * - The last take stays until the next one starts, so it can be saved after a look at its length. A
 *   take is lost when the page closes unsaved.
 * - Leaving free play stops a running take and keeps it, so a mode change never drops a recording.
 * - The shell pauses the song and hides the control bar in this mode. This module draws only its panel.
 * - The panel lives as long as the player, so its texts follow the live locale of `src/i18n/live.ts`.
 */
import { localize, onLocale, t } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";
import type { MidiFile } from "../midi/smf-read";
import { writeMidi } from "../midi/smf-write";
import type { SettingsStore } from "../settings/store";
import { button, el } from "../ui/dom";
import type { InputBus } from "./input-bus";
import { Recorder } from "./recorder";
import "./mode-panel.css";

/** What free play needs of the shell. */
export interface FreePlayHost {
  /** Where the panel goes, over the scene. */
  readonly container: HTMLElement;
  /** Saves `bytes` as a file named `name` through the browser's download. */
  download(bytes: Uint8Array<ArrayBuffer>, name: string, type: string): void;
}

/** The file name a recording saves under. */
export const RECORDING_NAME = "learn-piano-easy-recording.mid";

/** `ms` as minutes and seconds, such as `1:05`. */
export function clockText(ms: number): string {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

/** Runs free play's panel and recorder while `playMode` is `freePlay`. Returns what stops it. */
export function attachFreePlay(bus: InputBus, settings: SettingsStore, host: FreePlayHost): () => void {
  const recorder = new Recorder();
  let file: MidiFile | undefined;
  let started = 0;
  let timer: ReturnType<typeof setInterval> | undefined;

  const line = el("span", { class: "mode-line" });
  const record = button("", () => (recorder.recording ? stop() : start()), { class: "primary" });
  const save = button("", () => {
    if (file !== undefined) host.download(writeMidi(file), RECORDING_NAME, "audio/midi");
  });
  localize(save, (m) => m.player.input.freePlay.save);
  localize(save, (m) => m.player.input.freePlay.saveTitle, "title");
  localize(save, (m) => m.player.input.freePlay.saveTitle, "aria-label");
  const heading = (m: Messages) => m.player.input.freePlay.heading;
  const panel = localize(
    el("div", {
      class: "mode-panel",
      attrs: { role: "group" },
      children: [localize(el("strong", { class: "mode-heading" }), heading), line, el("div", { class: "mode-buttons", children: [record, save] })],
    }),
    heading,
    "aria-label",
  );
  host.container.append(panel);

  const show = () => {
    const words = t().player.input.freePlay;
    record.textContent = recorder.recording ? words.stop : words.record;
    record.setAttribute("aria-label", recorder.recording ? words.stopRecording : words.record);
    record.title = record.getAttribute("aria-label") ?? "";
    save.disabled = recorder.recording || file === undefined;
    if (recorder.recording) line.textContent = words.recording(clockText(performance.now() - started));
    else if (file !== undefined) line.textContent = words.recorded(noteCount(file));
    else line.textContent = words.hint;
  };
  const start = () => {
    recorder.start();
    started = performance.now();
    timer = setInterval(show, 250);
    show();
  };
  const stop = () => {
    clearInterval(timer);
    timer = undefined;
    if (!recorder.recording) return;
    file = recorder.stop(performance.now()) ?? file;
    show();
  };
  const follow = () => {
    const on = settings.get("playMode") === "freePlay";
    panel.hidden = !on;
    if (!on) stop();
  };

  const stopBus = bus.subscribe((event) => recorder.take(event));
  const stopSettings = settings.subscribe((id) => {
    if (id === "playMode") follow();
  });
  const stopLocale = onLocale(show);
  show();
  follow();
  return () => {
    stop();
    stopBus();
    stopSettings();
    stopLocale();
    panel.remove();
  };
}

/** How many notes `file` holds. */
function noteCount(file: MidiFile): number {
  return file.tracks.reduce((sum, track) => sum + track.events.filter((event) => event.kind === "noteOn").length, 0);
}
