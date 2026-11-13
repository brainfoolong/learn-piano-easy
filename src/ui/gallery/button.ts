/** The gallery's section of the button: every variant, size, icon placement and state. */
import { button, type ButtonOptions } from "../components/button";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    button: "Button",
    variants: "Variants",
    sizes: "Sizes",
    withIcon: "With an icon",
    states: "States",
    continueLearning: "Continue learning",
    showSettings: "Show settings",
    skipLesson: "Skip this lesson",
    deleteProgress: "Delete progress",
    small: "Small",
    medium: "Medium",
    large: "Large",
    playSong: "Play the song",
    nextLesson: "Next lesson",
    saving: "Saving your progress",
    locked: "Unlocks at level 3",
  },
  de: {
    button: "Schaltfläche",
    variants: "Varianten",
    sizes: "Größen",
    withIcon: "Mit Symbol",
    states: "Zustände",
    continueLearning: "Weiter lernen",
    showSettings: "Einstellungen anzeigen",
    skipLesson: "Diese Lektion überspringen",
    deleteProgress: "Fortschritt löschen",
    small: "Klein",
    medium: "Mittel",
    large: "Groß",
    playSong: "Lied abspielen",
    nextLesson: "Nächste Lektion",
    saving: "Dein Fortschritt wird gespeichert",
    locked: "Ab Stufe 3 freigeschaltet",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

const buttons = (entries: [string, ButtonOptions][]) => entries.map(([state, options]) => specimen(state, button(options)));

/** The button's section in the gallery. */
export function buttonSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  return section("button", t.button, [
    group(
      t.variants,
      buttons([
        ["primary", { label: t.continueLearning, variant: "primary" }],
        ["secondary", { label: t.showSettings, variant: "secondary" }],
        ["ghost", { label: t.skipLesson, variant: "ghost" }],
        ["danger", { label: t.deleteProgress, variant: "danger" }],
      ]),
    ),
    group(
      t.sizes,
      buttons([
        ["small", { label: t.small, variant: "primary", size: "small" }],
        ["medium", { label: t.medium, variant: "primary", size: "medium" }],
        ["large", { label: t.large, variant: "primary", size: "large" }],
      ]),
    ),
    group(
      t.withIcon,
      buttons([
        ["icon-start", { label: t.playSong, variant: "primary", icon: "play" }],
        ["icon-end", { label: t.nextLesson, variant: "secondary", icon: "arrow-right", iconAt: "end" }],
        ["icon-small", { label: t.showSettings, variant: "ghost", size: "small", icon: "settings" }],
      ]),
    ),
    group(
      t.states,
      buttons([
        ["busy", { label: t.saving, variant: "primary", busy: true }],
        ["disabled", { label: t.locked, variant: "primary", icon: "lock", disabled: true }],
        ["disabled-secondary", { label: t.locked, variant: "secondary", disabled: true }],
      ]),
    ),
  ]);
}
