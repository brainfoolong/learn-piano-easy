/**
 * The landing page's band of what you play on: a MIDI keyboard, a touch screen or the computer
 * keyboard, each on a surface with an icon on a tile. A small keyboard beside them plays when touched.
 *
 * - **The small keyboard** spans `DEVICES_RANGE`, one octave and a third from middle C. Its keys sound
 *   through `src/landing/touch-sound.ts`, so it is silent until a key is pressed.
 * - **The ways** stand one above another, each a row of its tile and its words. From 1024 pixels the
 *   small keyboard stands beside them, and below them under that.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import type { KeyRange } from "../render/key-layout";
import type { SettingsStore } from "../settings/store";
import { keyboard } from "../ui/components/keyboard";
import { section } from "../ui/components/section";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";
import { touchSound } from "./touch-sound";

/** The small keyboard's keys, from C4 to E5. */
const DEVICES_RANGE: KeyRange = { first: 60, last: 76 };

/** Each way's icon, in the order of the catalog's ways. */
const WAY_ICONS: readonly IconName[] = ["keyboard-music", "pointer", "keyboard"];

/** The band of what you play on in `locale`, whose keyboard plays on the audio of `settings`. */
export function devices(locale: Locale, settings: SettingsStore): HTMLElement {
  const t = messagesOf(locale).landing.devices;
  const ways = t.ways.map((way, index) =>
    el("li", {
      class: "landing-devices__way",
      children: [
        el("span", { class: "landing-tile", attrs: { "aria-hidden": "true" }, children: [icon(WAY_ICONS[index] ?? "piano")] }),
        el("div", {
          class: "landing-devices__words",
          children: [el("h3", { class: "landing-devices__title", text: way.title }), el("p", { class: "landing-devices__text", text: way.text })],
        }),
      ],
    }),
  );
  const sound = touchSound(settings);
  const keys = keyboard({ label: t.piano, range: DEVICES_RANGE, names: "c", onPress: sound.press, onRelease: sound.release });
  return section({
    eyebrow: t.eyebrow,
    heading: t.heading,
    lead: t.lead,
    tone: "band",
    body: [
      el("div", {
        class: "landing-devices__layout",
        children: [
          el("ul", { class: "landing-devices", children: ways }),
          el("div", {
            class: "landing-devices__piano",
            children: [keys, el("p", { class: "landing-devices__hint", children: [icon("pointer"), el("span", { text: t.hint })] })],
          }),
        ],
      }),
    ],
  });
}
