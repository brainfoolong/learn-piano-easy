/**
 * The landing page's versions band: one tune in four versions. A segmented control switches
 * *Ode to Joy* between Beginner, Easy, Medium and Hard, so the visitor sees the same tune grow.
 *
 * - **A version's id** is its `rarity`, which names its file, its picture and its colour. The visitor
 *   never reads it. They read the version's name, which is its difficulty.
 * - **The piano** is a landing box of `src/landing/player-box.ts`, whose keys are fixed at
 *   `SHOWCASE_RANGE`, so a switch never changes its size. Until a click it shows a picture of the real
 *   player playing the chosen version, and the click starts that version in the real player.
 * - **A switch** shows that version's picture before the click. After it, the running player plays that
 *   version from its start, in the same canvas.
 * - **The version's colour** follows the panel's `data-rarity`. The stylesheet draws the tagline's dot
 *   in it, and the player's notes take it too. Each time the player loads a version, the band reads
 *   the panel's `--rarity-right` and `--rarity-left` as the colours of the two hands' track looks.
 * - **The tagline** under the piano says what the version asks of the learner. It is a live region, so
 *   a screen reader reads it on a switch.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import type { TrackLook } from "../render/scene";
import type { SettingsStore } from "../settings/store";
import { section } from "../ui/components/section";
import { segmented } from "../ui/components/tabs";
import { el } from "../ui/dom";
import { playerBox } from "./player-box";
import { SHOWCASE_RANGE, SHOWCASE_RARITIES, SHOWCASE_SONGS, type ShowcaseRarity } from "./songs";

/** The pictures' stem of the version `rarity`, such as `rarity-epic` for `rarity-epic-light.webp`. */
const pictureOf = (rarity: ShowcaseRarity) => `rarity-${rarity}`;

/**
 * The colour of the custom property `property` at `element`, as `#rrggbbff`. A probe inside the element
 * lets the browser resolve the property, and a canvas turns the resolved colour into hex.
 */
function colorOf(element: HTMLElement, property: string): string {
  const probe = el("span", { attrs: { style: `display: none; color: var(${property})` } });
  element.append(probe);
  const color = getComputedStyle(probe).color;
  probe.remove();
  const canvas = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (canvas === null) return "#000000ff";
  canvas.fillStyle = color;
  canvas.fillRect(0, 0, 1, 1);
  const [r, g, b] = canvas.getImageData(0, 0, 1, 1).data;
  return `#${[r, g, b].map((part) => part!.toString(16).padStart(2, "0")).join("")}ff`;
}

/** The versions band in `locale`, whose player is made with the site's `settings`. */
export function rarities(locale: Locale, settings: SettingsStore): HTMLElement {
  const t = messagesOf(locale).landing.rarities;
  const play = messagesOf(locale).landing.hero;

  let shown: ShowcaseRarity = "common";
  const tracks = (): TrackLook[] => [
    { visible: true, color: colorOf(piano, "--rarity-right") },
    { visible: true, color: colorOf(piano, "--rarity-left") },
  ];
  const box = playerBox({
    picture: pictureOf(shown),
    alt: t.piano,
    song: SHOWCASE_SONGS[shown],
    range: SHOWCASE_RANGE,
    tracks,
    site: settings,
    play: play.playSong,
    stop: play.stopSong,
  });

  const tagline = el("p", { class: "landing-rarities__tagline", attrs: { "aria-live": "polite" }, text: t.taglines[shown] });
  const piano = el("div", {
    class: "landing-rarities__piano",
    attrs: { "data-rarity": shown },
    children: [box.element, el("div", { class: "landing-rarities__controls", children: [box.button, tagline] })],
  });

  const control = segmented({
    label: t.control,
    segments: SHOWCASE_RARITIES.map((rarity) => ({ value: rarity, label: t.names[rarity] })),
    value: shown,
    onChange(value) {
      shown = value as ShowcaseRarity;
      tagline.textContent = t.taglines[shown];
      piano.dataset.rarity = shown;
      box.change({ picture: pictureOf(shown), song: SHOWCASE_SONGS[shown] });
    },
  });

  return section({
    eyebrow: t.eyebrow,
    heading: t.heading,
    lead: t.lead,
    body: [el("div", { class: "landing-rarities", children: [control, piano] })],
  });
}
