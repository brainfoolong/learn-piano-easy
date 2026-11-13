/**
 * The gallery's section of the dialog: buttons that open real dialogs, and previews of the open panel.
 *
 * The previews sit in flow, so the page's layout checks see the panel without a modal covering the page.
 */
import { button } from "../components/button";
import { dialog, dialogPreview, type Dialog } from "../components/dialog";
import { el } from "../dom";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    dialog: "Dialog and sheet",
    open: "Open a dialog",
    preview: "The open panel",
    withActions: "Delete your progress",
    longBody: "About this song",
    close: "Close the dialog",
    deleteTitle: "Delete your progress?",
    deleteText: "Your practice history and your badges are removed from this device. You cannot undo this.",
    cancel: "Keep my progress",
    confirm: "Delete progress",
    songTitle: "About Für Elise",
    songParagraphs: [
      "Ludwig van Beethoven wrote this piece around 1810. It became famous only long after his death.",
      "The right hand plays the well-known melody, which swings between two notes a half step apart.",
      "The left hand answers with broken chords. Practise each hand alone before you play both together.",
      "Take the first part slowly. Keep your wrist loose, and let each note ring until the next one starts.",
      "The middle part is brighter and faster. Count out loud through its runs until your hands know them.",
      "When the melody returns, play it softer than at the start. The song ends as quietly as it began.",
    ].join("\n"),
    noteTitle: "Your keyboard is connected",
    noteText: "Play any key to start the lesson.",
  },
  de: {
    dialog: "Dialog und Sheet",
    open: "Dialog öffnen",
    preview: "Das offene Fenster",
    withActions: "Fortschritt löschen",
    longBody: "Über dieses Lied",
    close: "Dialog schließen",
    deleteTitle: "Deinen Fortschritt löschen?",
    deleteText:
      "Dein Übungsverlauf und deine Abzeichen werden von diesem Gerät entfernt. Das lässt sich nicht rückgängig machen.",
    cancel: "Fortschritt behalten",
    confirm: "Fortschritt löschen",
    songTitle: "Über „Für Elise“",
    songParagraphs: [
      "Ludwig van Beethoven schrieb dieses Stück um 1810. Berühmt wurde es erst lange nach seinem Tod.",
      "Die rechte Hand spielt die bekannte Melodie, die zwischen zwei Tönen im Halbtonabstand pendelt.",
      "Die linke Hand antwortet mit gebrochenen Akkorden. Übe jede Hand allein, bevor du beide zusammen spielst.",
      "Spiele den ersten Teil langsam. Halte dein Handgelenk locker und lass jeden Ton klingen, bis der nächste beginnt.",
      "Der Mittelteil ist heller und schneller. Zähle seine Läufe laut mit, bis deine Hände sie kennen.",
      "Wenn die Melodie zurückkehrt, spiele sie leiser als am Anfang. Das Lied endet so leise, wie es begann.",
    ].join("\n"),
    noteTitle: "Deine Tastatur ist verbunden",
    noteText: "Drücke eine beliebige Taste, um die Lektion zu starten.",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

/** A body of paragraphs, one for each line of `text`. */
function paragraphs(text: string): HTMLElement {
  return el("div", { children: text.split("\n").map((line) => el("p", { text: line })) });
}

/** The two actions of the delete dialog. `done` closes the dialog they sit in. */
function deleteActions(t: (typeof MESSAGES)["en"], done: () => void): HTMLElement[] {
  return [
    button({ label: t.cancel, variant: "secondary", onClick: done }),
    button({ label: t.confirm, variant: "danger", onClick: done }),
  ];
}

/** A preview in a box of the dialog's width, since a specimen sizes to its content. */
function framed(panel: HTMLElement): HTMLElement {
  return el("div", { attrs: { style: "width: calc(var(--s-12) * 4.5); max-width: 100%" }, children: [panel] });
}

/** The dialog's section in the gallery. */
export function dialogSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);

  const withActions: Dialog = dialog({
    title: t.deleteTitle,
    body: paragraphs(t.deleteText),
    actions: deleteActions(t, () => withActions.close()),
    closeLabel: t.close,
  });
  const long = dialog({ title: t.songTitle, body: paragraphs(t.songParagraphs), closeLabel: t.close });

  return section("dialog", t.dialog, [
    group(t.open, [
      specimen("closed-actions", button({ label: t.withActions, variant: "danger", onClick: () => withActions.open() })),
      specimen("closed-long", button({ label: t.longBody, onClick: () => long.open() })),
    ]),
    group(t.preview, [
      specimen(
        "open-preview",
        framed(
          dialogPreview({
            title: t.deleteTitle,
            body: paragraphs(t.deleteText),
            actions: deleteActions(t, () => {}),
            closeLabel: t.close,
            titleLevel: 4,
          }),
        ),
      ),
      specimen(
        "open-preview-plain",
        framed(dialogPreview({ title: t.noteTitle, body: paragraphs(t.noteText), closeLabel: t.close, titleLevel: 4 })),
      ),
    ]),
  ]);
}
