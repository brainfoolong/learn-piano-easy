/**
 * The gallery's section of the form controls: each control off and on or with values, and a disabled
 * action.
 *
 * A control carries its name only as `aria-label`, so each specimen shows the same words beside it as a
 * visible label. This section imports `controls.css`, which `src/ui/controls.ts` leaves to its pages.
 */
import "../controls.css";
import { actionControl, selectControl, sliderControl, textControl, toggleControl, type Control } from "../controls";
import { el } from "../dom";
import { group, section, specimen, textFor, type Locale, type CompleteLocale } from "./parts";

const MESSAGES = {
  en: {
    controls: "Form controls",
    toggle: "Toggle",
    slider: "Slider",
    select: "Select",
    text: "Text field",
    action: "Action",
    metronome: "Metronome",
    noteNames: "Show note names",
    volume: "Volume",
    speed: "Speed in percent",
    hand: "Hand to practise",
    bothHands: "Both hands",
    leftHand: "Left hand",
    rightHand: "Right hand",
    playerName: "Player name",
    nickname: "Your nickname",
    exampleName: "Alice",
    resetView: "Reset the view",
    exportRecording: "Export the recording",
  },
  de: {
    controls: "Formularelemente",
    toggle: "Schalter",
    slider: "Schieberegler",
    select: "Auswahl",
    text: "Textfeld",
    action: "Aktion",
    metronome: "Metronom",
    noteNames: "Notennamen anzeigen",
    volume: "Lautstärke",
    speed: "Tempo in Prozent",
    hand: "Zu übende Hand",
    bothHands: "Beide Hände",
    leftHand: "Linke Hand",
    rightHand: "Rechte Hand",
    playerName: "Spielername",
    nickname: "Dein Spitzname",
    exampleName: "Alice",
    resetView: "Ansicht zurücksetzen",
    exportRecording: "Aufnahme exportieren",
  },
} satisfies Record<CompleteLocale, Record<string, string>>;

/** A control with its name as a visible label before it, wrapping under it where the row is narrow. */
function labelled(name: string, control: Control<unknown>): HTMLElement {
  return el("div", { class: "gallery__labelled", children: [el("span", { text: name }), control.element] });
}

/** A slider whose number field follows each drag, as the settings panel's owner would set it. */
function slider(name: string, value: number, range: { min: number; max: number; step: number }): Control<number> {
  const control: Control<number> = sliderControl(name, value, range, (next) => control.set(next));
  return control;
}

/** The form controls' section in the gallery. */
export function controlsSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const ignore = () => {};
  return section("controls", t.controls, [
    group(t.toggle, [
      specimen("toggle-off", labelled(t.metronome, toggleControl(t.metronome, false, ignore))),
      specimen("toggle-on", labelled(t.noteNames, toggleControl(t.noteNames, true, ignore))),
    ]),
    group(t.slider, [
      specimen("slider-low", labelled(t.volume, slider(t.volume, 20, { min: 0, max: 100, step: 5 }))),
      specimen("slider-high", labelled(t.speed, slider(t.speed, 150, { min: 25, max: 200, step: 5 }))),
    ]),
    group(t.select, [
      specimen(
        "select",
        labelled(
          t.hand,
          selectControl(
            t.hand,
            "both",
            [
              ["both", t.bothHands],
              ["left", t.leftHand],
              ["right", t.rightHand],
            ],
            ignore,
          ),
        ),
      ),
    ]),
    group(t.text, [
      specimen("text-empty", labelled(t.nickname, textControl(t.nickname, "", 24, ignore))),
      specimen("text-filled", labelled(t.playerName, textControl(t.playerName, t.exampleName, 24, ignore))),
    ]),
    group(t.action, [
      specimen("action", actionControl(t.resetView, ignore).element),
      specimen("action-disabled", actionControl(t.exportRecording, undefined).element),
    ]),
  ]);
}
