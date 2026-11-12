/** The badges of *Learn Piano* in German. It satisfies the English section's type, so it holds every badge. */
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: typeof en = {
  cheer: "Dein Klavierlehrer jubelt dir zu",
  fixed: {
    "first-note": { name: "Erster Ton", description: "Spiele deinen ersten Ton in einer Lektion." },
    "first-lesson": { name: "Erste Lektion", description: "Schließe deine erste Lektion ab." },
    "first-three-stars": { name: "Drei Sterne", description: "Schließe eine Lektion mit drei Sternen ab." },
    "three-stars-ten": { name: "Sternensammler", description: "Hol dir in zehn Lektionen drei Sterne." },
    "first-daily-goal": { name: "Ziel erreicht", description: "Erreiche zum ersten Mal dein Tagesziel." },
    "streak-3": { name: "Drei Tage am Stück", description: "Erreiche dein Tagesziel drei Tage hintereinander." },
    "streak-7": { name: "Eine Woche am Stück", description: "Erreiche dein Tagesziel sieben Tage hintereinander." },
    "streak-30": { name: "Ein Monat am Stück", description: "Erreiche dein Tagesziel dreißig Tage hintereinander." },
    "streak-100": { name: "Hundert Tage", description: "Erreiche dein Tagesziel hundert Tage hintereinander." },
    "notes-1000": { name: "Tausend Töne", description: "Spiele tausend Töne in Lektionen." },
    "notes-10000": { name: "Zehntausend Töne", description: "Spiele zehntausend Töne in Lektionen." },
    "rhythm-ace": { name: "Rhythmus-Ass", description: "Bestehe einen Rhythmus-Schritt beim ersten Versuch." },
    "sight-reader": { name: "Notenleser", description: "Lies zehn Noten hintereinander ohne Fehler." },
    "early-bird": { name: "Frühaufsteher", description: "Schließe eine Lektion vor 8 Uhr morgens ab." },
    "night-owl": { name: "Nachteule", description: "Schließe eine Lektion nach 22 Uhr ab." },
    comeback: { name: "Willkommen zurück", description: "Komm nach einer Woche Pause für eine Lektion zurück." },
    legendary: { name: "Schweres Lied", description: "Spiele die Fassung „Schwer“ eines unserer Lieder in Einfach Klavier spielen bis zum Ende." },
  },
  world: {
    name: (world) => `${world} gemeistert`,
    description: (world) => `Besiege den Boss von „${world}“.`,
  },
};
