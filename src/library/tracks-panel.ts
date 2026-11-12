/**
 * The tracks panel: one row per track of the open song, to show or hide it, mute it, give it a hand,
 * a colour and a volume, and to draw it in the sheet music or not. Above the rows, the song's key: the one found in its notes, or one the
 * learner picks, which names the notes and the chords.
 *
 * The shell shows it in a dialog. Below the rows, one button makes the song's tracks the defaults for
 * new songs, and another forgets the song's own changes.
 *
 * Decisions, and what each costs:
 * - Only tracks with notes get a row. A file's tempo and name tracks carry none, so they would only be
 *   noise. Each row names its track by its name event, or by its number without one.
 * - A drum track gets a row but no sound, because the only sound set is a piano. Its row says so.
 * - The rows are built anew only when another song loads. Any other change updates each control in
 *   place, so a colour picker stays open while its colour drags across the scene.
 * - The panel writes nothing itself. Every control calls `TrackState.set` or `TrackState.setKey`, which
 *   store the change and tell the scene, the transport and wait mode.
 * - The key is detected once per song, when its rows are built, to name the found key in its choice.
 * - The rows read the live locale's catalog as they are built, and a change of locale builds them
 *   again. The two buttons below them follow the locale through `localize`.
 */
import { localize, onLocale, type Pick as TextPick, t } from "../i18n/live";
import type { TrackHand } from "../input/wait-mode";
import type { Song } from "../midi/song";
import { type Key, keyName, readKey, songKey } from "../theory/key";
import { colorPicker } from "../ui/color-picker";
import { type Control, selectControl, sliderControl, toggleControl } from "../ui/controls";
import { button, el } from "../ui/dom";
import type { TrackSetting, TrackState } from "./track-settings";
import "./guide-panel.css";
import "./tracks-panel.css";

/** The hand choices, in the order the drop-down lists them. */
const HANDS: readonly TrackHand[] = ["right", "left", "split", "none"];

/** The hand choices, each with its label in the live locale. */
function handChoices(): (readonly [TrackHand, string])[] {
  const labels = t().player.library.tracks.hands;
  return HANDS.map((hand) => [hand, labels[hand]] as const);
}

/** The key choice that hands the key back to detection. */
const FOUND = "found";

/** The choice of `key`: its tonic and mode, such as `10-major`, or `FOUND` without one. */
function keyValue(key: Key | undefined): string {
  return key === undefined ? FOUND : `${key.tonic}-${key.mode}`;
}

/** The key a choice stands for, or undefined for `FOUND`. */
function keyOfValue(value: string): Key | undefined {
  const [tonic, mode] = value.split("-");
  return readKey({ tonic: Number(tonic), mode });
}

/** The key choices: the key `found` in the notes first, then the 12 major and the 12 minor keys. */
function keyChoices(found: Key | undefined): (readonly [string, string])[] {
  const keys = (["major", "minor"] as const).flatMap((mode) => Array.from({ length: 12 }, (_, tonic): Key => ({ tonic, mode })));
  const m = t().player.library.tracks;
  return [[FOUND, found ? m.fromNotesKey(keyName(found)) : m.fromNotes], ...keys.map((key) => [keyValue(key), keyName(key)] as const)];
}

/** `target` with its text from `text` and its title and accessible name from `title`, in the live locale. */
function localButton(target: HTMLButtonElement, text: TextPick, title: TextPick): HTMLButtonElement {
  localize(target, text);
  localize(target, title, "title");
  return localize(target, title, "aria-label");
}

export interface TracksPanel {
  readonly element: HTMLElement;
  dispose(): void;
}

/** The controls of one track's row. */
interface Row {
  visible: Control<boolean>;
  muted: Control<boolean>;
  hand: Control<TrackHand>;
  color: Control<string>;
  volume: Control<number>;
  sheet: Control<boolean>;
}

/** A tracks panel over `state`. */
export function createTracksPanel(state: TrackState): TracksPanel {
  const list = el("div", { class: "tracks-list" });
  const keyField = el("div", { class: "tracks-key" });
  let keyControl: Control<string> | undefined;
  const element = el("div", {
    class: "tracks-panel",
    children: [
      keyField,
      list,
      el("div", {
        class: "tracks-actions",
        children: [
          localButton(
            button("", () => state.makeDefaults()),
            (m) => m.player.library.tracks.useForNew.label,
            (m) => m.player.library.tracks.useForNew.title,
          ),
          localButton(
            button("", () => state.reset()),
            (m) => m.player.library.tracks.reset.label,
            (m) => m.player.library.tracks.reset.title,
          ),
        ],
      }),
    ],
  });
  let rows = new Map<number, Row>();
  let shownSong: Song | undefined;

  const build = (song: Song | undefined) => {
    shownSong = song;
    rows = new Map();
    const m = t().player.library.tracks;
    const found = song && songKey(song);
    keyControl = selectControl(m.keyControl, keyValue(state.key), keyChoices(found), (value) => state.setKey(keyOfValue(value)));
    keyField.replaceChildren(el("label", { class: "tracks-field", children: [el("span", { text: m.key }), keyControl.element] }));
    const tracks = song?.tracks.filter((track) => track.notes.length > 0) ?? [];
    if (tracks.length === 0) return list.replaceChildren(el("p", { class: "library-hint", text: m.empty }));
    const hands = handChoices();
    list.replaceChildren(
      ...tracks.map((track) => {
        const setting = state.tracks[track.index];
        if (setting === undefined) return el("div");
        const name = track.name.trim() || m.track(track.index + 1);
        const set = (change: Partial<TrackSetting>) => state.set(track.index, change);
        const row: Row = {
          visible: toggleControl(m.show(name), setting.visible, (visible) => set({ visible })),
          muted: toggleControl(m.mute(name), setting.muted, (muted) => set({ muted })),
          hand: selectControl(m.hand(name), setting.hand, hands, (hand) => set({ hand })),
          color: colorPicker(m.colour(name), setting.color, (color) => set({ color })),
          volume: sliderControl(m.volume(name), Math.round(setting.volume * 100), { min: 0, max: 100, step: 1 }, (percent) =>
            set({ volume: Math.min(Math.max(percent, 0), 100) / 100 }),
          ),
          sheet: toggleControl(m.sheet(name), setting.sheet, (sheet) => set({ sheet })),
        };
        rows.set(track.index, row);
        const notes = `${m.notes(track.notes.length)}${track.percussion ? m.drums : ""}`;
        const field = (label: string, control: Control<unknown>) =>
          el("label", { class: "tracks-field", children: [el("span", { text: label }), control.element] });
        return el("section", {
          class: "tracks-row",
          attrs: { "aria-label": name },
          children: [
            el("div", { class: "tracks-head", children: [row.color.element, el("h3", { text: name }), el("span", { class: "library-difficulty", text: notes })] }),
            el("div", {
              class: "tracks-controls",
              children: [
                field(m.fields.show, row.visible),
                field(m.fields.mute, row.muted),
                field(m.fields.hand, row.hand),
                field(m.fields.volume, row.volume),
                field(m.fields.sheet, row.sheet),
              ],
            }),
          ],
        });
      }),
    );
  };

  const update = () => {
    if (state.song !== shownSong) return build(state.song);
    keyControl?.set(keyValue(state.key));
    for (const [index, row] of rows) {
      const setting = state.tracks[index];
      if (setting === undefined) continue;
      row.visible.set(setting.visible);
      row.muted.set(setting.muted);
      row.hand.set(setting.hand);
      row.color.set(setting.color);
      row.volume.set(Math.round(setting.volume * 100));
      row.sheet.set(setting.sheet);
    }
  };

  const unsubscribe = state.subscribe(update);
  const stopLocale = onLocale(() => build(state.song));
  build(state.song);
  return {
    element,
    dispose() {
      unsubscribe();
      stopLocale();
    },
  };
}
