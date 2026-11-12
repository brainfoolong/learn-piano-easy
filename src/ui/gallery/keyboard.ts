/**
 * The gallery's section of the keyboard: three ranges, names, marks with fingers, held keys, one to
 * play, the 3D piano view in each of those states, and the real player embedded in a box.
 *
 * Each 3D view holds a WebGL context of its own, and a page holds about 16. So the section shows one
 * view per state, each state's options folded into as few views as show it, and the embed adds one
 * more context on its first click.
 */
import type { EmbeddedPlayer } from "../../app/embed";
import { HERO_RANGE, HERO_SONG } from "../../landing/songs";
import type { KeyRange } from "../../render/key-layout";
import { pianoKeys, type PianoKeysOptions } from "../../render/piano-keys";
import type { SettingsStore } from "../../settings/store";
import { button } from "../components/button";
import { keyboard, type KeyboardOptions } from "../components/keyboard";
import { el } from "../dom";
import type { Mark } from "../mark";
import { signal } from "../signal";
import { group, section, specimen, type Locale } from "./parts";
import { noteName } from "../../theory/note-names";

const MESSAGES = {
  en: {
    keyboard: "Keyboard",
    ranges: "Ranges",
    names: "Names",
    marks: "Marks and fingers",
    presses: "Presses",
    label: "Piano keyboard",
    next: "Play next",
    correct: "Right",
    mistake: "Wrong",
    finger: "finger",
    pressAKey: "Press a key, or several at once.",
    youPlay: "You play:",
    piano: "3D piano",
    embed: "Embedded player",
    start: "Play",
    stop: "Stop",
  },
  de: {
    keyboard: "Klaviatur",
    ranges: "Umfang",
    names: "Namen",
    marks: "Markierungen und Finger",
    presses: "Anschläge",
    label: "Klaviertastatur",
    next: "Als Nächstes",
    correct: "Richtig",
    mistake: "Falsch",
    finger: "Finger",
    pressAKey: "Drücke eine Taste oder mehrere zugleich.",
    youPlay: "Du spielst:",
    piano: "3D-Klavier",
    embed: "Eingebetteter Player",
    start: "Abspielen",
    stop: "Stopp",
  },
} satisfies Record<Locale, Record<string, string>>;

/** A keyboard in a box of a set width, since a keyboard fills its parent and a specimen sizes to its content. */
function sized(child: HTMLElement, width: string): HTMLElement {
  return el("div", { attrs: { style: `width: ${width}; max-width: 100%` }, children: [child] });
}

/** The keyboard section in the gallery, whose embedded player sounds on the services of the site's `settings`. */
export function keyboardSection(locale: Locale, settings: SettingsStore): HTMLElement {
  const t = MESSAGES[locale];
  const base: KeyboardOptions = {
    label: t.label,
    markNames: { next: t.next, correct: t.correct, mistake: t.mistake },
    fingerName: (finger) => `${t.finger} ${finger}`,
  };
  const octave = { first: 60, last: 72 };
  const twoOctaves = { first: 48, last: 72 };
  const one = "calc(var(--s-12) * 3)";
  const wide = "calc(var(--s-12) * 6)";
  const full = "calc(var(--s-12) * 9)";

  const marks = new Map<number, Mark>([
    [60, "correct"],
    [64, "correct"],
    [66, "mistake"],
    [67, "next"],
  ]);
  const fingers = new Map([
    [60, 1],
    [64, 3],
    [67, 5],
  ]);

  // The keys a pointer holds, named under the keyboard.
  const held = new Set<number>();
  const played = el("p", { attrs: { style: "color: var(--c-text-soft); font-size: var(--t-sm)" }, text: t.pressAKey });
  const show = () => {
    const names = [...held].sort((a, b) => a - b).map((pitch) => noteName(pitch));
    played.textContent = names.length === 0 ? t.pressAKey : `${t.youPlay} ${names.join(", ")}`;
  };
  const playable = keyboard({
    ...base,
    range: twoOctaves,
    names: "c",
    onPress: (pitch) => {
      held.add(pitch);
      show();
    },
    onRelease: (pitch) => {
      held.delete(pitch);
      show();
    },
  });

  return section("keyboard", t.keyboard, [
    group(t.ranges, [
      specimen("range-octave", sized(keyboard({ ...base, range: octave }), one)),
      specimen("range-two-octaves", sized(keyboard({ ...base, range: twoOctaves }), wide)),
      specimen("range-full", sized(keyboard({ ...base }), full)),
    ]),
    group(t.names, [
      specimen("names-c", sized(keyboard({ ...base, range: twoOctaves, names: "c" }), wide)),
      specimen("names-white", sized(keyboard({ ...base, range: octave, names: "white" }), one)),
    ]),
    group(t.marks, [
      specimen("marks", sized(keyboard({ ...base, range: octave, marks }), one)),
      specimen("marks-fingers", sized(keyboard({ ...base, range: octave, marks, fingers, names: "white" }), one)),
    ]),
    group(t.presses, [
      specimen("pressed", sized(keyboard({ ...base, range: octave, pressed: signal<ReadonlySet<number>>(new Set([60, 64, 67, 70])) }), one)),
      specimen(
        "playable",
        sized(el("div", { attrs: { style: "display: grid; gap: var(--s-2)" }, children: [playable, played] }), wide),
      ),
    ]),
    group(t.piano, pianoSpecimens(t, base, marks, fingers)),
    group(t.embed, [specimen("embed", embedSpecimen(settings, t.start, t.stop))]),
  ]);
}

/** The 3D piano view in each state: marks, fingers, names, the reach, held keys, and one to play. */
function pianoSpecimens(
  t: (typeof MESSAGES)[Locale],
  base: KeyboardOptions,
  marks: ReadonlyMap<number, Mark>,
  fingers: ReadonlyMap<number, number>,
): HTMLElement[] {
  const octave: KeyRange = { first: 60, last: 72 };
  const twoOctaves: KeyRange = { first: 48, last: 72 };
  const one = "calc(var(--s-12) * 3)";
  const wide = "calc(var(--s-12) * 6)";
  const view = (state: string, options: PianoKeysOptions, width: string, after?: HTMLElement) => {
    const piano = pianoKeys();
    piano.show({ ...base, ...options });
    const children = after ? [piano.element, after] : [piano.element];
    return specimen(state, sized(el("div", { attrs: { style: "display: grid; gap: var(--s-2)" }, children }), width));
  };

  // The keys a pointer holds, named under the view.
  const held = new Set<number>();
  const played = el("p", { attrs: { style: "color: var(--c-text-soft); font-size: var(--t-sm)" }, text: t.pressAKey });
  const show = () => {
    const names = [...held].sort((a, b) => a - b).map((pitch) => noteName(pitch));
    played.textContent = names.length === 0 ? t.pressAKey : `${t.youPlay} ${names.join(", ")}`;
  };

  return [
    view("piano-marks", { label: base.label, range: octave, marks }, one),
    view("piano-fingers", { label: base.label, range: octave, marks, fingers, names: "white" }, one),
    view("piano-names", { label: base.label, range: twoOctaves, names: "c" }, wide),
    view("piano-reach", { label: base.label, range: twoOctaves, reach: signal<KeyRange | undefined>({ first: 60, last: 72 }) }, wide),
    view("piano-pressed", { label: base.label, range: octave, pressed: signal<ReadonlySet<number>>(new Set([60, 64, 67, 70])) }, one),
    view(
      "piano-playable",
      {
        label: base.label,
        range: twoOctaves,
        names: "c",
        onPress(pitch) {
          held.add(pitch);
          show();
        },
        onRelease(pitch) {
          held.delete(pitch);
          show();
        },
      },
      wide,
      played,
    ),
  ];
}

/**
 * The real player in a box, playing the hero's song. A first press of its button loads the embed's
 * chunk and plays, and each next press stops or plays again. The player keeps running until the page
 * goes, since the gallery holds at most this one.
 */
function embedSpecimen(settings: SettingsStore, start: string, stop: string): HTMLElement {
  const box = el("div", {
    attrs: { "data-embed": "", style: "width: 100%; aspect-ratio: 16 / 9; background: var(--c-surface-2); border-radius: var(--r-md)" },
  });
  let player: Promise<EmbeddedPlayer> | undefined;
  let playing = false;
  const toggle = button({
    label: start,
    variant: "primary",
    onClick() {
      playing = !playing;
      toggle.querySelector(".btn__label")!.textContent = playing ? stop : start;
      player ??= import("../../app/embed").then(({ embedPlayer }) =>
        embedPlayer(box, { song: HERO_SONG, range: HERO_RANGE, loop: true, site: settings }),
      );
      // The page holds the click's activation by then, so the sound may still wake.
      const now = playing;
      void player.then((embed) => (now ? embed.play() : embed.stop()));
    },
  });
  return sized(el("div", { attrs: { style: "display: grid; gap: var(--s-2); justify-items: start" }, children: [box, toggle] }), "calc(var(--s-12) * 9)");
}
