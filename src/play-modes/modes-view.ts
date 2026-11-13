/**
 * The page of the play modes at `modes/`: a heading, then the modes of `src/play-modes/modes.ts` in
 * their groups, each group a heading over a grid of cards.
 *
 * A card is one target, a link to the player. A plain click hands its mode to the mode inbox before the
 * router shows the player, which then applies the mode. A click with a modifier opens the player in a
 * new tab without the mode, as any link would.
 *
 * - **Each card shows its mode at a glance:** a small stage over seven keys, in the mode's hue, then its
 *   name, its sentence, what it sets, its song and a face that says Start.
 * - **The stage is drawn, not pictured.** It is plain elements under `modes-view.css`, so it follows
 *   the site's theme and costs no file. Assistive technology skips it, since the text says it all.
 * - **Each mode's stage is its own,** as `STAGES` describes it: the game's notes trail sparks, the
 *   loop's notes sit in a dashed loop, and reading the music shows a staff.
 * - **A stage keeps its top corners clear,** where the mode's tag and tile sit. A note in the three
 *   lanes under the tag, or in the last lane under the tile, starts a quarter of the way down.
 * - **The parts enter in order** as the page first shows: the heading, then each group's cards.
 */
import "./modes-view.css";
import { messagesOf, type Locale } from "../i18n/locale";
import { hrefOf } from "../site/site-bar";
import type { View } from "../site/views";
import { card } from "../ui/components/card";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import { modeInbox, PLAY_MODE_GROUPS, PLAY_MODES, type PlayMode, type PlayModeGroup, type PlayModeId } from "./modes";

/**
 * A note on a stage: its key from 0 (C) to 6 (B), and its top and its length in percent of the lanes.
 * It may carry a short text, take a finger's colour, or be faded as a note the app plays.
 */
interface StageNote {
  key: number;
  top: number;
  length: number;
  text?: string;
  finger?: 1 | 2 | 3 | 4 | 5;
  faded?: boolean;
}

/** A note head on a stage's staff: across in percent, and up in half the gap between two lines. */
interface StaffHead {
  across: number;
  step: number;
}

/** What a stage shows. */
interface StageLook {
  notes: readonly StageNote[];
  /** The keys drawn pressed. */
  pressed: readonly number[];
  /** Whether the keys carry their names. */
  keyNames?: boolean;
  /** Whether sparks fly over the pressed keys. */
  sparks?: boolean;
  /** Whether beat lines cross the lanes. */
  beats?: boolean;
  /** A loop over part of the lanes, in percent. */
  loop?: { top: number; length: number };
  /** A staff over the lanes, with its note heads. */
  staff?: readonly StaffHead[];
}

/** Every mode's stage. */
const STAGES: Record<PlayModeId, StageLook> = {
  game: {
    notes: [
      { key: 0, top: 28, length: 22 },
      { key: 4, top: 6, length: 16 },
      { key: 2, top: 30, length: 14 },
      { key: 5, top: 38, length: 12 },
      { key: 3, top: 56, length: 12 },
    ],
    pressed: [3],
    sparks: true,
  },
  challenge: {
    notes: [
      { key: 3, top: 4, length: 8 },
      { key: 4, top: 16, length: 8 },
      { key: 5, top: 6, length: 8 },
      { key: 2, top: 26, length: 8 },
      { key: 0, top: 32, length: 8 },
      { key: 6, top: 30, length: 8 },
      { key: 3, top: 40, length: 8 },
      { key: 1, top: 46, length: 8 },
      { key: 5, top: 50, length: 8 },
      { key: 2, top: 60, length: 10 },
    ],
    pressed: [4],
    sparks: true,
  },
  concert: {
    notes: [
      { key: 4, top: 6, length: 14 },
      { key: 1, top: 30, length: 16 },
      { key: 3, top: 30, length: 16 },
      { key: 5, top: 30, length: 16 },
      { key: 0, top: 56, length: 14 },
      { key: 2, top: 56, length: 14 },
      { key: 4, top: 56, length: 14 },
    ],
    pressed: [0, 2, 4],
    sparks: true,
  },
  playAlong: {
    notes: [
      { key: 4, top: 8, length: 18, text: "5" },
      { key: 2, top: 32, length: 14, text: "3" },
      { key: 1, top: 50, length: 10, text: "2" },
      { key: 0, top: 63, length: 9, text: "1" },
    ],
    pressed: [0],
    keyNames: true,
  },
  oneHand: {
    notes: [
      { key: 0, top: 30, length: 34, faded: true },
      { key: 2, top: 44, length: 26, faded: true },
      { key: 4, top: 8, length: 14, text: "1" },
      { key: 5, top: 28, length: 12, text: "2" },
      { key: 6, top: 44, length: 12, text: "3" },
      { key: 5, top: 62, length: 10, text: "2" },
    ],
    pressed: [4],
    keyNames: true,
  },
  readMusic: {
    notes: [{ key: 2, top: 62, length: 10 }],
    pressed: [2],
    staff: [
      { across: 10, step: 4 },
      { across: 22, step: 3 },
      { across: 34, step: 2 },
      { across: 46, step: 3 },
      { across: 58, step: 4 },
      { across: 70, step: 4 },
      { across: 82, step: 4 },
    ],
  },
  slowSteady: {
    notes: [
      { key: 2, top: 38, length: 7, text: "3" },
      { key: 1, top: 48, length: 7, text: "2" },
      { key: 2, top: 58, length: 7, text: "3" },
      { key: 1, top: 68, length: 7, text: "2" },
    ],
    pressed: [1],
    loop: { top: 34, length: 44 },
  },
  rhythm: {
    notes: [
      { key: 5, top: 10, length: 8 },
      { key: 4, top: 26, length: 8 },
      { key: 2, top: 42, length: 8 },
      { key: 0, top: 58, length: 8 },
    ],
    pressed: [0],
    beats: true,
  },
  colourByFinger: {
    notes: [
      { key: 4, top: 4, length: 10, finger: 5 },
      { key: 3, top: 18, length: 10, finger: 4 },
      { key: 2, top: 32, length: 10, finger: 3 },
      { key: 1, top: 46, length: 10, finger: 2 },
      { key: 0, top: 60, length: 10, finger: 1 },
    ],
    pressed: [0],
  },
  noteTrainer: {
    notes: [{ key: 3, top: 26, length: 24, text: "?" }],
    pressed: [3],
  },
  freeJam: {
    notes: [
      { key: 0, top: 36, length: 30, faded: true },
      { key: 2, top: 46, length: 20, faded: true },
      { key: 4, top: 30, length: 36, faded: true },
      { key: 5, top: 50, length: 16, faded: true },
    ],
    pressed: [0, 2, 4, 5],
    sparks: true,
  },
  chordExplorer: {
    notes: [
      { key: 4, top: 6, length: 12, text: "V" },
      { key: 3, top: 32, length: 12, text: "IV" },
      { key: 5, top: 32, length: 12 },
      { key: 0, top: 58, length: 12, text: "I" },
      { key: 2, top: 58, length: 12 },
      { key: 4, top: 58, length: 12 },
    ],
    pressed: [0, 2, 4],
  },
};

/** A stage's note. */
function stageNote(note: StageNote): HTMLElement {
  const node = el("span", {
    class: "play-mode__note",
    attrs: { style: `--key: ${note.key}; --top: ${note.top}%; --length: ${note.length}%` },
    text: note.text ?? "",
  });
  if (note.finger !== undefined) node.dataset.finger = String(note.finger);
  if (note.faded) node.dataset.faded = "";
  return node;
}

/** A card's stage: the mode's notes over seven keys, in the mode's hue. */
function stage(mode: PlayMode, keyNames: readonly string[]): HTMLElement {
  const look = STAGES[mode.id];
  const lanes = el("div", { class: "play-mode__lanes", children: look.notes.map(stageNote) });
  if (look.beats) lanes.dataset.beats = "";
  if (look.loop !== undefined) {
    lanes.append(
      el("span", {
        class: "play-mode__loop",
        attrs: { style: `--top: ${look.loop.top}%; --length: ${look.loop.length}%` },
        children: [icon("repeat")],
      }),
    );
  }
  if (look.staff !== undefined) {
    const heads = look.staff.map((head) => el("span", { class: "play-mode__head", attrs: { style: `--across: ${head.across}%; --step: ${head.step}` } }));
    lanes.append(el("span", { class: "play-mode__staff", children: heads }));
  }
  const keys = keyNames.map((name, index) =>
    el("span", {
      class: "play-mode__key",
      attrs: look.pressed.includes(index) ? { "data-pressed": "" } : {},
      text: look.keyNames ? name : "",
    }),
  );
  const sparks = look.sparks ? [1, 2, 3].map(() => el("span", { class: "play-mode__spark", children: [icon("sparkles")] })) : [];
  return el("div", {
    class: "play-mode__stage",
    // The preview is a piano and its lanes, so it never mirrors.
    attrs: { "aria-hidden": "true", dir: "ltr" },
    children: [lanes, ...sparks, el("div", { class: "play-mode__keys", children: keys }), el("span", { class: "play-mode__badge", children: [icon(mode.icon)] })],
  });
}

/** The card of `mode` in `locale`, which hands the mode over and leads to the player. */
function modeCard(mode: PlayMode, locale: Locale): HTMLElement {
  const t = messagesOf(locale).playModes;
  const texts = t.modes[mode.id];
  const media = el("div", {
    class: "play-mode__media",
    children: [stage(mode, t.keyNames), el("span", { class: "play-mode__tag", text: texts.tag })],
  });
  const traits = el("ul", {
    class: "play-mode__traits",
    attrs: { "aria-label": t.traits },
    children: texts.traits.map((trait) => el("li", { class: "play-mode__trait", children: [icon("check"), el("span", { text: trait })] })),
  });
  const song = "song" in texts ? t.song(texts.song) : t.noSong;
  const node = card({
    title: texts.name,
    titleLevel: 3,
    text: texts.text,
    media,
    href: hrefOf("play", locale),
    body: [
      traits,
      el("p", { class: "play-mode__song", children: [icon("music"), el("span", { text: song })] }),
      el("span", { class: "play-mode__start", attrs: { "aria-hidden": "true" }, children: [el("span", { text: t.start }), icon("arrow-right")] }),
    ],
  });
  node.classList.add("play-mode");
  node.dataset.hue = mode.hue;
  node.dataset.mode = mode.id;
  node.querySelector(".card__action")!.addEventListener("click", (event) => {
    const click = event as MouseEvent;
    if (click.button !== 0 || click.metaKey || click.ctrlKey || click.shiftKey || click.altKey) return;
    modeInbox.give(mode);
  });
  return node;
}

/** The group `group` in `locale`: its heading and lead over its cards. `first` is the entrance order of its first card. */
function modeGroup(group: PlayModeGroup, locale: Locale, first: number): HTMLElement {
  const t = messagesOf(locale).playModes.groups[group];
  const id = `play-modes-${group}`;
  const modes = PLAY_MODES.filter((mode) => mode.group === group);
  return el("section", {
    class: "play-modes__group",
    attrs: { "aria-labelledby": id },
    children: [
      el("header", {
        class: "play-modes__group-head",
        attrs: { style: `--order: ${first}` },
        children: [el("h2", { class: "play-modes__group-title", attrs: { id }, text: t.heading }), el("p", { class: "play-modes__group-lead", text: t.lead })],
      }),
      el("ul", {
        class: "play-modes__grid",
        children: modes.map((mode, index) =>
          el("li", { class: "play-modes__item", attrs: { style: `--order: ${first + 1 + index}` }, children: [modeCard(mode, locale)] }),
        ),
      }),
    ],
  });
}

/** The page of the play modes in `locale`. */
export function modesView(locale: Locale): View {
  const messages = messagesOf(locale);
  const t = messages.playModes;
  let order = 0;
  const groups = PLAY_MODE_GROUPS.map((group) => {
    const section = modeGroup(group, locale, order);
    order += 1 + PLAY_MODES.filter((mode) => mode.group === group).length;
    return section;
  });
  const element = el("div", {
    class: "site-page play-modes",
    children: [
      el("header", {
        class: "play-modes__hero",
        children: [
          el("p", { class: "play-modes__eyebrow", text: t.eyebrow }),
          el("h1", { class: "play-modes__title", text: messages.pages.modes.title }),
          el("p", { class: "play-modes__lead", text: t.lead }),
        ],
      }),
      ...groups,
      el("p", { class: "play-modes__note", children: [icon("info"), el("span", { text: t.note })] }),
    ],
  });
  return { element };
}
