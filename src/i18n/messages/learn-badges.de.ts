/** The badges of *Learn Piano* in German. It satisfies the English section's type, so it holds every badge. */
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: typeof en = {
  cheer: "Dein Klavierlehrer jubelt dir zu",
  fixed: {
    "first-note": { name: "Erster Ton", description: "Spiel deinen ersten Ton in einer Lektion." },
    "first-lesson": { name: "Erste Lektion", description: "Schließ deine erste Lektion ab." },
    "first-three-stars": { name: "Drei Sterne", description: "Schließ eine Lektion mit drei Sternen ab." },
    "three-stars-ten": { name: "Sternensammler", description: "Hol dir in zehn Lektionen drei Sterne." },
    "first-daily-goal": { name: "Ziel erreicht", description: "Erreichezum ersten Mal dein Tagesziel." },
    "streak-3": { name: "Drei Tage am Stück", description: "Erreichedein Tagesziel drei Tage hintereinander." },
    "streak-7": { name: "Eine Woche am Stück", description: "Erreichedein Tagesziel sieben Tage hintereinander." },
    "streak-30": { name: "Ein Monat am Stück", description: "Erreichedein Tagesziel dreißig Tage hintereinander." },
    "streak-100": { name: "Hundert Tage", description: "Erreichedein Tagesziel hundert Tage hintereinander." },
    "notes-1000": { name: "Tausend Töne", description: "Spiel tausend Töne in Lektionen." },
    "notes-10000": { name: "Zehntausend Töne", description: "Spiel zehntausend Töne in Lektionen." },
    "rhythm-ace": { name: "Rhythmus-Ass", description: "Bestehe einen Rhythmus-Schritt beim ersten Versuch." },
    "sight-reader": { name: "Notenleser", description: "Lies zehn Noten hintereinander ohne Fehler." },
    "early-bird": { name: "Frühaufsteher", description: "Schließ eine Lektion vor 8 Uhr morgens ab." },
    "night-owl": { name: "Nachteule", description: "Schließ eine Lektion um 22 Uhr oder später ab." },
    comeback: { name: "Willkommen zurück", description: "Komm nach einer Woche Pause für eine Lektion zurück." },
    legendary: { name: "Schweres Lied", description: "Spiel die Fassung \"Schwer\" eines unserer Lieder in \"Einfach Klavier spielen\" bis zum Ende." },
  },
  world: {
    name: (world) => `${world} gemeistert`,
    description: (world) => `Besiege den Boss von "${world}".`,
  },
};
