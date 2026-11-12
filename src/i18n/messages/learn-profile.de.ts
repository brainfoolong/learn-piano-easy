/** The profile of *Learn Piano* in German. It satisfies the English section's type, so it holds every text. */
import { formatNumber, plural } from "../format";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("de", value);
const days = (value: number) => `${n(value)} ${plural("de", value, { one: "Tag", other: "Tage" })}`;

export const learnProfile: typeof en = {
  loading: "Dein Fortschritt lädt…",
  level: {
    heading: "Level",
    name: (level) => `Level ${n(level)}`,
    total: (xp) => `${n(xp)} XP insgesamt`,
    toNext: (level) => `Bis Level ${n(level)}`,
  },
  streak: {
    heading: "Serie",
    current: (count) => days(count),
    currentLabel: "in Folge",
    best: (count) => `Beste: ${days(count)}`,
    today: (xp, goal) => (xp >= goal ? `Heute: ${n(xp)} XP, das Ziel von ${n(goal)} ist erreicht` : `Heute: ${n(xp)} von ${n(goal)} XP`),
  },
  calendar: {
    heading: "Die letzten acht Wochen",
    label: (met, played) =>
      `In den letzten acht Wochen ${plural("de", met, { one: "hat", other: "haben" })} ${days(met)} das Ziel erreicht, und an ${n(played)} ${plural("de", played, { one: "Tag", other: "Tagen" })} gab es eine Lektion.`,
    met: "Ziel erreicht",
    played: "Gespielt",
    none: "Keine Lektion",
  },
  stats: {
    heading: "Statistik",
    lessons: "Lektionen geschafft",
    threeStars: "Lektionen mit drei Sternen",
    days: "Tage gespielt",
    badges: "Abzeichen verdient",
  },
  badges: {
    heading: "Abzeichen",
    lead: (earned, all) => `${n(earned)} von ${n(all)} verdient`,
    earned: (name) => `${name}, verdient`,
    locked: (name) => `${name}, noch nicht verdient`,
  },
  choices: {
    heading: "Deine Einstellungen",
    goal: "Tagesziel",
    goalHelp: "Die XP, die ein Tag braucht, damit deine Serie weiterläuft.",
    sounds: "Belohnungsklänge",
    soundsHelp: "Klänge für einen bestandenen Schritt, einen Stern, ein neues Level und ein Abzeichen. Das Klavier klingt immer.",
  },
  data: {
    heading: "Deine Daten",
    lead: "Dein Fortschritt bleibt in diesem Browser. Die Seite „Deine Daten“ sichert ihn mit allem anderen in einer Datei und stellt ihn wieder her.",
    open: "Sichern oder wiederherstellen",
    reset: "Fortschritt zurücksetzen",
    failed: "Dein Browser hat das Speichern verweigert. Nichts hat sich geändert.",
    resetDone: "Dein Fortschritt ist zurückgesetzt. Die Sicherungsdatei enthält alles, was er hatte.",
    close: "Schließen",
    cancel: "Fortschritt behalten",
    ask: {
      title: "Den ganzen Fortschritt zurücksetzen?",
      text: "Das entfernt jede Lektion, jeden Stern, alle XP und alle Abzeichen aus diesem Browser. Deine Einstellungen bleiben.",
      next: "Weiter",
    },
    askAgain: {
      title: "Bist du sicher?",
      text: "Zuerst wird eine Sicherungsdatei gespeichert, damit du später alles wiederherstellen kannst. Dann beginnt dein Fortschritt neu.",
      confirm: "Fortschritt zurücksetzen",
    },
  },
};
