/** The map of *Learn Piano* in German. It satisfies the English section's type, so it holds every text. */
import { formatNumber, plural } from "../format";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: typeof en = {
  lead: "Geh den Weg Lektion für Lektion. Jede Welt endet mit einem Boss.",
  loading: "Der Kurs lädt …",
  continue: "Weiter",
  nextUp: "Als Nächstes",
  world: (n) => `Welt ${formatNumber("de", n)}`,
  progress: (done, all) => `${formatNumber("de", done)} von ${formatNumber("de", all)} ${plural("de", all, { one: "Lektion", other: "Lektionen" })}`,
  locked: "Besiege den Boss der Welt davor, um diese zu öffnen.",
  beaten: "Geschafft",
  node: {
    locked: (name) => `${name}, gesperrt`,
    open: (name) => `${name}, offen`,
    done: (name, stars) => `${name}, ${formatNumber("de", stars)} von 3 Sternen`,
  },
  medal: (world, earned) => `Abzeichen ${world}, ${earned ? "verdient" : "noch nicht verdient"}`,
  skipTest: {
    title: (world) => `Einstufungstest: ${world}`,
    text: "Kannst du das schon? Bestehe den Einstufungstest, und jede Lektion hier ist offen.",
    action: "Einstufungstest machen",
  },
  bar: {
    label: "Dein Fortschritt",
    streak: (days) => `${formatNumber("de", days)} ${plural("de", days, { one: "Tag", other: "Tage" })} in Folge`,
    level: (level) => `Level ${formatNumber("de", level)}`,
    today: "Heute",
    todayGoal: (xp, goal) => `Heute: ${formatNumber("de", xp)} von ${formatNumber("de", goal)} XP`,
    days: (days) => `${formatNumber("de", days)} ${plural("de", days, { one: "Tag", other: "Tage" })}`,
  },
};
