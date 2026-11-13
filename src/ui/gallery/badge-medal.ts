/** The gallery's section of the badge medal: locked, earned and new, each at every size. */
import { badgeMedal, type BadgeMedalSize, type BadgeMedalState } from "../components/badge-medal";
import type { IconName } from "../icons/icons";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    medal: "Badge medal",
    locked: "Locked",
    earned: "Earned",
    fresh: "New",
    firstSong: "First song",
    firstSongLocked: "First song, not earned yet",
    perfect: "Perfect hands",
    perfectEarned: "Perfect hands, earned",
    streak: "Week streak",
    streakNew: "Week streak, newly earned",
  },
  de: {
    medal: "Abzeichen",
    locked: "Gesperrt",
    earned: "Verdient",
    fresh: "Neu",
    firstSong: "Erstes Lied",
    firstSongLocked: "Erstes Lied, noch nicht verdient",
    perfect: "Fehlerfreie Hände",
    perfectEarned: "Fehlerfreie Hände, verdient",
    streak: "Wochenserie",
    streakNew: "Wochenserie, neu verdient",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

const SIZES: BadgeMedalSize[] = ["small", "medium", "large"];

/** The badge medal's section in the gallery. */
export function badgeMedalSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  /** One state's group: a medal at every size, with a caption from the medium size up. */
  const sizes = (state: BadgeMedalState, heading: string, glyph: IconName, name: string, label: string) =>
    group(
      heading,
      SIZES.map((size) =>
        specimen(
          `${state}-${size}`,
          badgeMedal({
            label,
            icon: glyph,
            state,
            size,
            newLabel: t.fresh,
            ...(size === "small" ? {} : { caption: name }),
          }),
        ),
      ),
    );
  return section("badge-medal", t.medal, [
    sizes("locked", t.locked, "piano", t.firstSong, t.firstSongLocked),
    sizes("earned", t.earned, "star", t.perfect, t.perfectEarned),
    sizes("new", t.fresh, "trophy", t.streak, t.streakNew),
  ]);
}
