/**
 * The PDF export dialog: the learner picks how much of the song a page shows, sees the page count, and
 * saves the open song's falling notes as a PDF.
 *
 * Decisions, and what each costs:
 * - The page length starts at the scene's `noteToHeightConst`, so a page shows what one screen shows.
 *   It lives in the dialog only, because a stored second length would duplicate that setting.
 * - The background switch is the `exportPdfBackground` setting, so the choice survives a reload.
 * - The dialog is built on each open, so its texts are the live locale's at that moment.
 * - The file is built when Save is pressed, on the main thread. A long song takes a moment, but the
 *   writer is plain string work with no worker to keep.
 */
import { t } from "../i18n/live";
import type { Song } from "../midi/song";
import type { SettingsStore } from "../settings/store";
import { button, el } from "../ui/dom";
import { sliderControl, toggleControl } from "../ui/controls";
import { notesPdf, pageCount, type PdfTrack } from "./pdf";
import "../settings/panel.css";
import "./pdf-dialog.css";

/** What the dialog exports: the open song, its title and each track's look. */
export interface PdfSource {
  song: Song | undefined;
  title: string;
  tracks: readonly PdfTrack[];
}

/** The range of the page length, in seconds. */
const PAGE_SECONDS = { min: 1, max: 60, step: 0.5 };

/** `title` as a file name: letters, digits, spaces, dashes and underscores, ending in `.pdf`. */
export function pdfFileName(title: string): string {
  const safe = title.replace(/[^\p{L}\p{N} _-]+/gu, " ").replace(/\s+/g, " ").trim();
  return `${safe === "" ? "song" : safe}.pdf`;
}

/** The dialog's body. `save` receives the file's bytes and its name. */
export function createPdfDialog(settings: SettingsStore, source: PdfSource, save: (bytes: Uint8Array<ArrayBuffer>, name: string) => void): HTMLElement {
  const words = t().player.input.pdf;
  const song = source.song;
  if (song === undefined) return el("p", { text: words.noSong });

  const start = Math.min(PAGE_SECONDS.max, Math.max(PAGE_SECONDS.min, settings.get("noteToHeightConst")));
  let seconds = Math.round(start / PAGE_SECONDS.step) * PAGE_SECONDS.step;
  const count = el("p", { class: "pdf-page-count", attrs: { role: "status" } });
  const showCount = () => {
    count.textContent = words.pages(pageCount(song.duration, seconds), seconds);
  };
  const length = sliderControl(words.secondsPerPage, seconds, PAGE_SECONDS, (value) => {
    seconds = Math.min(PAGE_SECONDS.max, Math.max(PAGE_SECONDS.min, value));
    length.set(seconds);
    showCount();
  });
  const background = toggleControl(words.background, settings.get("exportPdfBackground"), (value) => {
    background.set(settings.set("exportPdfBackground", value));
  });
  showCount();

  const saveFile = () => {
    const bytes = notesPdf(song, {
      title: source.title,
      secondsPerPage: seconds,
      background: settings.get("exportPdfBackground"),
      tracks: source.tracks,
      colors: {
        lane: settings.get("bgCol1"),
        blackLane: settings.get("bgCol5"),
        divider: settings.get("bgCol3"),
        whiteKey: settings.get("pianoWhiteKeyColor"),
        blackKey: settings.get("pianoBlackKeyColor"),
      },
    });
    save(bytes, pdfFileName(source.title));
  };

  const row = (label: string, control: HTMLElement) =>
    el("label", { class: "setting-row", children: [el("span", { class: "setting-label", text: label }), control] });
  return el("div", {
    class: "pdf-dialog",
    children: [
      el("p", { text: words.intro(source.title) }),
      el("div", { class: "pdf-options", children: [row(words.secondsPerPage, length.element), row(words.background, background.element)] }),
      count,
      button(words.save, saveFile, { class: "primary" }),
    ],
  });
}
