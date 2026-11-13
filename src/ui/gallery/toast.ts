/** The gallery's section of the toast: every variant, with a title, with a dismiss button and a trophy. */import { toast, type ToastOptions } from "../components/toast";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    toast: "Toast",
    variants: "Variants",
    withMore: "With a title and a dismiss button",
    saved: "Your progress is saved.",
    songOpened: "The song is ready to play.",
    newSong: "A new song is in your library.",
    noKeyboard: "No MIDI keyboard is connected. Plug one in to play along.",
    badFile: "This file is not a MIDI file. Pick another one.",
    streak: "You played seven days in a row.",
    streakTitle: "Week streak",
    lessonDone: "Lesson finished",
    lessonDoneMessage: "You played every note of the first lesson.",
    badgeTitle: "Badge earned",
    badgeMessage: "Perfect hands: a song without a single mistake.",
    dismiss: "Dismiss the message",
  },
  de: {
    toast: "Hinweis",
    variants: "Varianten",
    withMore: "Mit Titel und Schließen-Schaltfläche",
    saved: "Dein Fortschritt ist gespeichert.",
    songOpened: "Das Lied ist bereit zum Spielen.",
    newSong: "Ein neues Lied ist in deiner Bibliothek.",
    noKeyboard: "Kein MIDI-Keyboard ist verbunden. Schließe eines an, um mitzuspielen.",
    badFile: "Diese Datei ist keine MIDI-Datei. Wähle eine andere.",
    streak: "Du hast sieben Tage hintereinander gespielt.",
    streakTitle: "Eine Woche am Stück",
    lessonDone: "Lektion abgeschlossen",
    lessonDoneMessage: "Du hast jede Note der ersten Lektion gespielt.",
    badgeTitle: "Abzeichen verdient",
    badgeMessage: "Perfekte Hände: ein Lied ganz ohne Fehler.",
    dismiss: "Hinweis schließen",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

const toasts = (entries: [string, ToastOptions][]) => entries.map(([state, options]) => specimen(state, toast(options)));

/** The toast's section in the gallery. Its toasts sit in flow, never in the fixed stack. */
export function toastSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  return section("toast", t.toast, [
    group(
      t.variants,
      toasts([
        ["info", { message: t.newSong, variant: "info" }],
        ["success", { message: t.saved, variant: "success" }],
        ["warning", { message: t.noKeyboard, variant: "warning" }],
        ["error", { message: t.badFile, variant: "error" }],
        ["reward", { message: t.streak, variant: "reward" }],
      ]),
    ),
    group(
      t.withMore,
      toasts([
        ["with-title", { title: t.streakTitle, message: t.streak, variant: "reward" }],
        ["dismissible", { message: t.songOpened, variant: "info", dismissLabel: t.dismiss }],
        ["success-dismissible", { title: t.lessonDone, message: t.lessonDoneMessage, variant: "success", dismissLabel: t.dismiss }],
        ["reward-trophy", { title: t.badgeTitle, message: t.badgeMessage, variant: "reward", icon: "trophy", dismissLabel: t.dismiss }],
      ]),
    ),
  ]);
}
