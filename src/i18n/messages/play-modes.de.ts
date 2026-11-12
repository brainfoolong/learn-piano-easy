/** The play modes at `modes/`, and the player's toast that applies one, in German. It satisfies the English section's type. */
import type { playModes as en } from "./play-modes.en";

export const playModes: typeof en = {
  eyebrow: "Auf die Plätze, fertig, los",
  lead: "Wähl einen Modus, und der Player richtet sich selbst ein: mit dem passenden Lied, der passenden Hilfe und dem passenden Look. Dann spielst du los.",
  note: "Ein Modus ändert ein paar Einstellungen des Players. Sobald er startet, machst du ihn mit einem Klick rückgängig, und jede Einstellung kannst du später ändern.",
  traits: "Was er einstellt",
  song: (title: string) => `Lied: ${title}`,
  noSong: "Kein Lied nötig",
  start: "Starten",
  keyNames: ["C", "D", "E", "F", "G", "A", "H"],
  groups: {
    fun: {
      heading: "Zum Spaß spielen",
      lead: "Punkte, Funken und eine Show. Such dir eins aus, und lass dich vom Klavier unterhalten.",
    },
    learn: {
      heading: "Ein Lied lernen",
      lead: "Jeder Modus hilft dir auf seine Art, ein Lied zu lernen, von einer Hand nach der anderen bis zum Notenlesen.",
    },
    skills: {
      heading: "Eine Fähigkeit üben",
      lead: "Finde Noten schnell, spiel frei, oder hör, wie Akkorde funktionieren. Manche brauchen gar kein Lied.",
    },
  },
  modes: {
    game: {
      tag: "Zum Spaß",
      name: "Spielmodus",
      text: "Jede Note, die du triffst, bringt Punkte, und das Klavier funkelt zurück. Jag eine Combo und schlag deinen Rekord.",
      traits: ["Punkte und Combos auf Leicht", "Funken, Lichtblitze und ein leuchtendes Klavier", "Ein kurzes, eingängiges Lied"],
      song: "In the Hall of the Mountain King, Einsteiger",
    },
    challenge: {
      tag: "Für Profis",
      name: "Herausforderung",
      text: "Der Spielmodus auf seiner schwersten Stufe, ohne Namen und ohne Hinweise. Nur ein sauberer Lauf bringt die Bestwertung.",
      traits: ["Punkte und Combos auf Schwer", "Keine Namen und keine Tastenhinweise", "Eine schwerere Fassung des Lieds"],
      song: "In the Hall of the Mountain King, Mittel",
    },
    concert: {
      tag: "Zurücklehnen",
      name: "Konzert",
      text: "Das Klavier spielt dir ein Lied vor, mit Flammen, Sternen und einer bewegten Kamera. Genieß die Show, oder spiel mit, wenn du dich traust.",
      traits: ["Eine Kamera wie im Kino", "Flammen, Sterne und Funken", "Ein leuchtendes Klavier und eine Lichtwelle"],
      song: "Carol of the Bells, Schwer",
    },
    playAlong: {
      tag: "Schritt für Schritt",
      name: "Mitspielen",
      text: "Das Lied wartet bei jeder Note auf dich. Jede Note zeigt ihren Namen und ihren Finger, und jede Taste ihren Namen.",
      traits: ["Die Noten warten auf dich", "Notennamen und Finger auf den Noten", "Namen auf den weißen und den schwarzen Tasten"],
      song: "Ode to Joy, Einsteiger",
    },
    oneHand: {
      tag: "Klein anfangen",
      name: "Eine Hand nach der anderen",
      text: "Lern zuerst die rechte Hand, während die App die linke spielt. Das Lied wartet auf jede deiner Noten.",
      traits: ["Nur deine rechte Hand spielt", "Die App spielt die linke Hand", "Die Hand wechselst du in den Einstellungen unter \"Deine Hände\""],
      song: "Jingle Bells, Einsteiger",
    },
    readMusic: {
      tag: "Notenblatt",
      name: "Noten lesen",
      text: "Das Notenblatt steht über dem Klavier, und das Lied wartet auf dich. Die Noten tragen keine Namen, also liest du sie vom Notensystem.",
      traits: ["Notenblatt über dem Klavier", "Die Noten warten auf dich", "Ein sanftes Licht hinter jeder klingenden Note"],
      song: "Mary Had a Little Lamb, Einsteiger",
    },
    slowSteady: {
      tag: "Üben",
      name: "Langsam und sicher",
      text: "Die ersten vier Takte laufen in einer Schleife, zuerst mit halbem Tempo. Jeder Durchgang wird etwas schneller, bis du im vollen Tempo spielst.",
      traits: ["Die ersten vier Takte als Schleife", "Erst halbes Tempo, dann immer schneller", "Ein Einzähler vor jedem Durchgang"],
      song: "Für Elise, Leicht",
    },
    rhythm: {
      tag: "Rhythmus",
      name: "Im Takt",
      text: "Ein Metronom tickt, und jede Note wird nach ihrem Timing bewertet. Keine Namen und kein Warten, nur der Takt.",
      traits: ["Ein Metronom auf jedem Schlag", "Jede Note nach ihrem Timing bewertet", "Das Lied wartet nie"],
      song: "Twinkle Twinkle Little Star, Leicht",
    },
    colourByFinger: {
      tag: "Finger",
      name: "Farben nach Fingern",
      text: "Jeder Finger hat seine eigene Farbe, auf den Noten und auf den Tasten. Das Lied wartet, bis du den richtigen findest.",
      traits: ["Noten nach Fingern gefärbt", "Tasten leuchten in der Farbe des Fingers", "Die Noten warten auf dich"],
      song: "Twinkle Twinkle Little Star, Einsteiger",
    },
    noteTrainer: {
      tag: "Noten",
      name: "Notentrainer",
      text: "Die App nennt eine Note, und du findest sie auf den Tasten. Am Ende siehst du, welche Noten du verwechselt hast.",
      traits: ["Noten von C-Dur, ab dem mittleren C", "Zehn Noten pro Runde", "Eine Liste der Verwechslungen am Ende"],
    },
    freeJam: {
      tag: "Nur du",
      name: "Freies Spiel",
      text: "Kein Lied und keine Regeln. Spiel, was du willst, und das Klavier antwortet mit Funken und Licht. Nimm es auf und behalte es als MIDI-Datei.",
      traits: ["Freies Spiel, ohne Lied", "Funken, Sterne und ein leuchtendes Klavier", "Nimm auf und speichere, was du spielst"],
    },
    chordExplorer: {
      tag: "Harmonie",
      name: "Akkord-Entdecker",
      text: "Jeder Akkord des Lieds wird beim Spielen benannt, mit seiner Stufe in der Tonart. Blöcke über den Noten zeigen den Platz jeder Note in der Tonleiter.",
      traits: ["Akkordnamen, während das Lied spielt", "Eine römische Stufe für jeden Akkord", "Tonleiterstufen, mit markiertem Grundton"],
      song: "Canon in D, Leicht",
    },
  },
  toast: {
    started: (name: string) => `${name} ist an.`,
    undo: "Rückgängig",
    undone: "Deine eigenen Einstellungen sind zurück.",
  },
};
