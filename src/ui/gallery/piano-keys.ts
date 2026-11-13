/**
 * The gallery's section of the piano view of `src/render/piano-keys.ts`: its ranges, names, marks with
 * fingers, the reach, held keys and one to play, and the real player embedded in a box.
 *
 * Each view holds a WebGL context of its own, and a page holds about 16. So the section shows one
 * view per state, each state's options folded into as few views as show it, and the embed adds one
 * more context on its first click.
 */
import type { EmbeddedPlayer } from "../../app/embed";
import { HERO_RANGE, HERO_SONG } from "../../landing/songs";
import type { KeyRange } from "../../render/key-layout";
import { pianoKeys, type PianoKeysOptions } from "../../render/piano-keys";
import type { SettingsStore } from "../../settings/store";
import { noteName } from "../../theory/note-names";
import { button } from "../components/button";
import { el } from "../dom";
import type { Mark } from "../mark";
import { signal } from "../signal";
import { group, section, specimen, textFor, type Locale, type CompleteLocale } from "./parts";

const MESSAGES = {
  en: {
    keyboard: "Keyboard",
    ranges: "Ranges",
    marks: "Marks and fingers",
    names: "Names and the reach",
    presses: "Presses",
    label: "Piano keyboard",
    next: "Play next",
    correct: "Right",
    mistake: "Wrong",
    finger: "finger",
    pressAKey: "Press a key, or several at once.",
    youPlay: "You play:",
    embed: "Embedded player",
    start: "Play",
    stop: "Stop",
  },
  de: {
    keyboard: "Klaviatur",
    ranges: "Umfang",
    marks: "Markierungen und Finger",
    names: "Namen und Reichweite",
    presses: "Anschläge",
    label: "Klaviertastatur",
    next: "Als Nächstes",
    correct: "Richtig",
    mistake: "Falsch",
    finger: "Finger",
    pressAKey: "Drücke eine Taste oder mehrere zugleich.",
    youPlay: "Du spielst:",
    embed: "Eingebetteter Player",
    start: "Abspielen",
    stop: "Stopp",
  },
} satisfies Record<CompleteLocale, Record<string, string>>;

/** A view in a box of a set width, since a view fills its parent and a specimen sizes to its content. */
function sized(child: HTMLElement, width: string): HTMLElement {
  return el("div", { attrs: { style: `width: ${width}; max-width: 100%` }, children: [child] });
}

/** The piano view's section in the gallery, whose embedded player sounds on the services of the site's `settings`. */
export function pianoKeysSection(locale: Locale, settings: SettingsStore): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const base: PianoKeysOptions = {
    label: t.label,
    markNames: { next: t.next, correct: t.correct, mistake: t.mistake },
    fingerName: (finger) => `${t.finger} ${finger}`,
  };
  const octave: KeyRange = { first: 60, last: 72 };
  const twoOctaves: KeyRange = { first: 48, last: 72 };
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

  const view = (state: string, options: Omit<PianoKeysOptions, "label">, width: string, after?: HTMLElement) => {
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

  return section("piano-keys", t.keyboard, [
    group(t.ranges, [view("range-full", {}, full)]),
    group(t.marks, [view("marks", { range: octave, marks }, one), view("marks-fingers", { range: octave, marks, fingers, names: "white" }, one)]),
    group(t.names, [
      view("names-c", { range: twoOctaves, names: "c" }, wide),
      view("reach", { range: twoOctaves, reach: signal<KeyRange | undefined>({ first: 60, last: 72 }) }, wide),
    ]),
    group(t.presses, [
      view("pressed", { range: octave, pressed: signal<ReadonlySet<number>>(new Set([60, 64, 67, 70])) }, one),
      view(
        "playable",
        {
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
    ]),
    group(t.embed, [specimen("embed", embedSpecimen(settings, t.start, t.stop))]),
  ]);
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
