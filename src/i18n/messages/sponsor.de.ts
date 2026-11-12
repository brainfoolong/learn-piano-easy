/** The sponsor page at `sponsor/`, in German. It satisfies the English section's type, so it holds every text. */
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: typeof en = {
  lead: "Learn Piano Easy ist kostenlos und bleibt es auch. Wenn es ein bisschen Musik in deinen Tag gebracht hat, kannst du ihm beim Wachsen helfen.",
  action: "Auf GitHub unterstützen",
  note: "Jeder Betrag hilft, einmalig oder jeden Monat.",
  promises: ["Keine Werbung", "Kein Konto", "Läuft offline", "Open Source, MIT-Lizenz"],
  picture: "Ein großes Herz, um das zwei Noten schweben",
  who: {
    heading: "Wer dahintersteckt",
    text: [
      "Eine einzelne Person baut Learn Piano Easy in ihrer Freizeit, irgendwo zwischen Arbeit, Alltag und Tonleiterüben.",
      "Die Qualitätskontrolle übernimmt eine Katze, die ab und zu über die Tasten läuft.",
    ],
  },
  spend: {
    heading: "Wohin deine Unterstützung geht",
    items: [
      { title: "Zeit", text: "Abende für neue Lektionen, neue Lieder und weniger Fehler." },
      { title: "Die Domain", text: "Damit die Seite ihre Adresse behält und du sie immer wiederfindest." },
      { title: "Kaffee", text: "Daraus wird Code, im ruhigen Tempo von etwa 120 Schlägen pro Minute." },
    ],
  },
  help: {
    heading: "Andere Wege zu helfen",
    lead: "Geld ist ein Weg zu helfen. Das hier zählt genauso viel:",
    star: { text: "Gib dem Projekt einen Stern auf GitHub, damit andere Lernende es finden.", action: "Stern auf GitHub" },
    bug: { text: "Melde einen Fehler, wenn etwas schief klingt.", action: "Fehler melden" },
    friend: "Erzähl es jemandem, der schon immer Klavier lernen wollte.",
  },
  thanks: "Danke, dass du spielst. Für dich gibt es das alles.",
};
