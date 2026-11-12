/** The player's settings from the notes to the offline files, in German. It has the English file's type, so it holds every setting. */
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: typeof en = {
  // Notes
  showHitKeys: {
    label: "Klingende Noten leuchten",
    help: "Eine Note leuchtet in ihrer eigenen Farbe, solange sie klingt.",
  },
  noteWidth: {
    label: "Notenbreite (% der Taste)",
    help: "Wie breit jede fallende Note ist, gemessen an ihrer Taste.",
  },
  roundedNotes: {
    label: "Abgerundete Noten",
    help: "Gibt den fallenden Noten runde Ecken.",
  },
  noteBorderRadius: {
    label: "Eckenradius (%)",
    help: "Wie rund die Ecken einer Note sind.",
  },
  minNoteHeight: {
    label: "Kürzeste Notenlänge",
    help: "In Tastenbreiten, damit auch eine sehr kurze Note sichtbar bleibt.",
  },
  strokeNotes: {
    label: "Leuchtender Rand",
    help: "Ein Lichtrand in der eigenen Farbe jeder Note.",
  },
  strokeNotesWidth: {
    label: "Stärke des Rands",
    help: "Wie hell der Lichtrand um jede Note ist.",
  },
  noteEndedShrink: {
    label: "Gespielte Noten schrumpfen in ihre Taste",
    help: "Eine Note sinkt beim Klingen in ihre Taste. Ist das aus, läuft sie an den Tasten vorbei weiter.",
  },
  playedNoteFalloffSpeed: {
    label: "Wie weit gespielte Noten an den Tasten vorbeilaufen",
    help: "In Tastenbreiten, wenn gespielte Noten nicht schrumpfen.",
  },
  showSustainedNotes: {
    label: "Zeigen, wie lange das Pedal eine Note hält",
    help: "Ein dünner Schweif läuft von jeder Note weiter, die das Pedal hält.",
  },
  sustainedNotesOpacity: {
    label: "Helligkeit des Pedalschweifs (%)",
    help: "Wie deutlich die Pedalschweife hinter den Noten zu sehen sind.",
  },

  // Lanes
  bgCol1: {
    label: "Farbe der Bahnen",
    help: "Die Farbe der Bahnen über den weißen Tasten.",
  },
  bgCol5: {
    label: "Farbe der Bahnen schwarzer Tasten",
    help: "Die Farbe der Bahnen über den schwarzen Tasten.",
  },
  bgCol3: {
    label: "Farbe der Oktavtrennlinie",
    help: "Die Farbe der Linie zwischen jedem H und dem nächsten C.",
  },
  drawMeasureLines: {
    label: "Taktstriche",
    help: "Eine Linie quer über die Bahnen am Anfang jedes Takts.",
  },
  measureLineThickness: {
    label: "Dicke der Taktstriche",
    help: "Wie dick die Linie an jedem Takt ist.",
  },
  measureLineColor: {
    label: "Farbe der Taktstriche",
    help: "Die Farbe der Linie an jedem Takt.",
  },
  enableDrawBeatLines: {
    label: "Schlaglinien",
    help: "Eine schwächere Linie quer über die Bahnen auf jedem Schlag.",
  },
  beatLineThickness: {
    label: "Dicke der Schlaglinien",
    help: "Wie dick die Linie auf jedem Schlag ist.",
  },
  beatLineColor: {
    label: "Farbe der Schlaglinien",
    help: "Die Farbe der Linie auf jedem Schlag.",
  },
  enableDrawMeasureNumbers: {
    label: "Taktnummern",
    help: "Die Nummer jedes Takts, neben seiner Linie.",
  },
  measureNumbersColor: {
    label: "Farbe der Taktnummern",
    help: "Die Farbe der Taktnummern.",
  },
  highlightInputLanes: {
    label: "Bahnen der gehaltenen Tasten beleuchten",
    help: "Die Bahn über einer Taste wird heller, solange du die Taste hältst.",
  },
  inputLaneOpacity: {
    label: "Stärke des Bahnlichts",
    help: "Wie hell eine Bahn wird, solange du ihre Taste hältst.",
  },
  showMarkersSong: {
    label: "Marker",
    help: "Eine Linie mit Text, wo das Lied einen Teil benennt, etwa eine Strophe.",
  },
  showSustainPeriods: {
    label: "Pedalphasen",
    help: "Ein Band quer über die Bahnen, solange das Lied das Haltepedal hält.",
  },
  showSustainOnOffs: {
    label: "Pedal treten und lösen",
    help: "Eine Linie mit „Ped.“, wo das Pedal getreten wird, und „✱“, wo es sich löst.",
  },
  showSustainChannels: {
    label: "Pedalkanäle",
    help: "Nennt den MIDI-Kanal jeder Pedalphase.",
  },

  // Particles
  showParticles: {
    label: "Partikel",
    help: "Effekte steigen von jeder klingenden Taste auf. Sie fordern die Grafikkarte, darum sind sie anfangs aus.",
  },
  particlesFlames: {
    label: "Flammen",
    help: "Jede Taste brennt mit ihrer Note in deren Farbe. Sie fordern die Grafikkarte am meisten.",
  },
  particlesSparks: {
    label: "Funken",
    help: "Kleine helle Funken fliegen von jeder Taste auf.",
  },
  particlesEmbers: {
    label: "Glut",
    help: "Kleine Glutstücke schweben langsam von jeder Taste auf.",
  },
  particlesStars: {
    label: "Sterne",
    help: "Kleine drehende Sterne und Punkte steigen von jeder Taste auf und fallen zurück.",
  },
  particlesCustom: {
    label: "Eigene Partikel",
    help: "Partikel aus den Einstellungen darunter.",
  },
  particlesTexture: {
    label: "Form",
    help: "Das Bild, das jeder deiner eigenen Partikel zeigt.",
    options: { circle: "Leuchten", spark: "Funke", smoke: "Rauch", star: "Stern", ring: "Ring" },
  },
  particlesBlending: {
    label: "Überblendung",
    help: "Licht addieren hellt auf, was dahinter liegt, wie Feuer. Abdecken verbirgt es, wie Rauch.",
    options: { additive: "Licht addieren", normal: "Abdecken" },
  },
  particleOverrideColor: {
    label: "Eigene Farbe",
    help: "Ist das aus, nimmt jeder Partikel die Farbe seiner Taste an.",
  },
  particleColor: {
    label: "Farbe",
    help: "Die Farbe deiner Partikel, wenn sie eine eigene Farbe haben.",
  },
  particlesOpacity: {
    label: "Deckkraft",
    help: "Wie dicht jeder Partikel wirkt. Kleinere Werte lassen mehr durchscheinen.",
  },
  particleSize: {
    label: "Größe",
    help: "In Tastenbreiten.",
  },
  particleAmount: {
    label: "Menge",
    help: "Partikel pro Taste und Bild, bei 60 Bildern pro Sekunde.",
  },
  particleLife: {
    label: "Lebensdauer (s)",
    help: "Wie lange jeder Partikel bleibt, bevor er verschwindet.",
  },
  particleSpeed: {
    label: "Bewegungsgeschwindigkeit",
    help: "Macht jede Bewegung der Partikel schneller oder langsamer.",
  },
  particleFadeOut: {
    label: "Ausblenden",
    help: "Der Anteil seiner Lebensdauer, über den ein Partikel am Ende verblasst.",
  },
  particlesShrink: {
    label: "Schrumpfen",
    help: "Der Anteil seiner Größe, den ein Partikel verliert. Unter 0 wächst er.",
  },
  particleSpeedX: {
    label: "Seitliche Geschwindigkeit",
    help: "Die höchste seitliche Geschwindigkeit, in Tastenbreiten pro Sekunde.",
  },
  particleSpeedY: {
    label: "Steiggeschwindigkeit",
    help: "Die höchste Steiggeschwindigkeit, in Tastenbreiten pro Sekunde.",
  },
  particlesFriction: {
    label: "Bremsung",
    help: "Wie schnell die Partikel im Flug langsamer werden.",
  },
  particleRising: {
    label: "Schwerkraft",
    help: "Über 0 fallen die Partikel zurück, unter 0 steigen sie schneller.",
  },
  particlesRotation: {
    label: "Winkel (°)",
    help: "Wie weit jeder Partikel am Start gedreht ist.",
  },
  particlesRotationRandom: {
    label: "Zufälliger Winkel (°)",
    help: "Jeder Partikel startet um einen zufälligen Betrag bis zu diesem Winkel gedreht.",
  },
  particlesRotationSpeed: {
    label: "Drehung (° pro Sekunde)",
    help: "Wie schnell sich jeder Partikel im Flug dreht.",
  },
  particleNoiseResX: {
    label: "Feinheit des seitlichen Wanderns",
    help: "Höhere Werte lassen die Partikel benachbarter Tasten unterschiedlicher seitlich wandern.",
  },
  particleNoiseStrengthX: {
    label: "Seitliches Wandern",
    help: "Wie weit die Partikel zufällig zur Seite treiben.",
  },
  particleNoiseResY: {
    label: "Feinheit des Wanderns beim Steigen",
    help: "Höhere Werte lassen das Wandern beim Steigen von Taste zu Taste stärker abweichen.",
  },
  particleNoiseStrengthY: {
    label: "Wandern beim Steigen",
    help: "Wie weit die Partikel beim Steigen zufällig nach oben und unten abweichen.",
  },
  particleNoiseStrengthSize: {
    label: "Größenschwankung",
    help: "Wie stark jeder Partikel zufällig wächst und schrumpft.",
  },
  turbulenceXAmplitude: {
    label: "Seitliches Schwingen",
    help: "Wie weit die Partikel hin und her schwingen.",
  },
  turbulenceXFrequency: {
    label: "Frequenz des seitlichen Schwingens",
    help: "Schwingungen pro Sekunde.",
  },
  turbulenceYAmplitude: {
    label: "Schwingen beim Steigen",
    help: "Wie weit die Partikel beim Steigen auf und ab schwingen.",
  },
  turbulenceYFrequency: {
    label: "Frequenz des Schwingens beim Steigen",
    help: "Schwingungen pro Sekunde.",
  },
  particleYOffset: {
    label: "Starthöhe",
    help: "In Tastenbreiten über der Taste.",
  },
  particleDistributionX: {
    label: "Start quer über die Taste",
    help: "Wo quer über seiner Taste jeder Partikel startet.",
    options: { across: "Irgendwo darüber verteilt", centre: "In ihrer Mitte" },
  },
  particleDistributionXSpread: {
    label: "Startbreite (%)",
    help: "Der Anteil der Tastenbreite, über den die Partikel starten.",
  },
  particleDistributionY: {
    label: "Start entlang der Taste",
    help: "Wo entlang seiner Taste jeder Partikel startet.",
    options: { hitLine: "An der Anschlaglinie", key: "Irgendwo auf ihrer Oberseite" },
  },
  particleDistributionZ: {
    label: "Ebene",
    help: "Ob die Tasten die Partikel verdecken oder die Partikel das Klavier.",
    options: { behind: "Von den Tasten verdeckt", front: "Vor dem Klavier" },
  },

  // Labels
  pitchNotationSystem: {
    label: "Notennamen",
    help: "Wie die Namen auf den Noten und Tasten geschrieben werden. Do ist immer C.",
    options: { letters: "Buchstaben: C D E", solfege: "Solmisation: Do Re Mi" },
  },
  noteLabel: {
    label: "Beschriftung der Noten",
    help: "Die Texte auf jeder Note: wähl beliebig viele oder keinen. Klick auf eine Note und drück 1 bis 5, um ihren Finger festzulegen.",
    options: { name: "Notenname", keyBinding: "Computertaste", fingering: "Finger" },
  },
  noteLabelColor: {
    label: "Farbe der Notenbeschriftung",
    help: "Die Farbe des Texts auf jeder Note.",
  },
  showKeyNamesOnPianoWhite: {
    label: "Namen auf den weißen Tasten",
    help: "Jede weiße Taste zeigt ihren Notennamen.",
  },
  showKeyNamesOnPianoBlack: {
    label: "Namen auf den schwarzen Tasten",
    help: "Jede schwarze Taste zeigt ihren Notennamen.",
  },
  showPianoKeyNameFlats: {
    label: "Schwarze Tasten mit ♭ benennen",
    help: "D♭ statt C♯, nur auf den Tasten. Die Noten folgen der Tonart des Lieds.",
  },
  octaveLabel: {
    label: "Oktave in den Tastennamen",
    help: "Ergänzt die Namen auf den Tasten um die Oktavnummer, etwa C4.",
    options: { none: "Keine", all: "Auf jeder Taste", onlyC: "Nur auf C" },
  },
  showKeyBindingsOnPiano: {
    label: "Computertasten auf dem Klavier",
    help: "Jede Taste zeigt die Computertaste, die sie spielt.",
  },
  showChords: {
    label: "Akkordnamen",
    help: "Benennt jeden Akkord, den die Noten bilden, mit den Tönen, die das Pedal hält.",
  },
  chordLabelStyle: {
    label: "Stil der Akkordnamen",
    help: "Wie jeder Akkordname gezeichnet wird.",
    options: { bar: "Balken über den Tasten des Akkords", ribbon: "Band quer über die Bahnen" },
  },
  chordLabelPlacement: {
    label: "Platz der Akkordnamen",
    help: "Oben ist das ferne Ende des Akkords, weg vom Klavier.",
    options: {
      above: "Über dem Akkord",
      top: "An seinem oberen Ende",
      middle: "In seiner Mitte",
      bottom: "An seinem unteren Ende",
      below: "Unter dem Akkord",
    },
  },
  showChordRomanNumerals: {
    label: "Römische Ziffern",
    help: "Die Stufe jedes Akkords in der Tonart des Lieds, etwa V7.",
  },
  chordBlocks: {
    label: "Notenblöcke",
    help: "Ein Block über jeder Note eines benannten Akkords sagt, was die Note ist.",
    options: { none: "Keine", tone: "Akkordton", degree: "Tonleiterstufe" },
  },
  chordToneNotation: {
    label: "Schreibweise der Notenblöcke",
    help: "Ob die Notenblöcke kurze Zeichen oder ganze Wörter zeigen.",
    options: { simple: "Einfach: R ♭3 5", full: "Ausführlich: Grundton ♭3. 5." },
  },
  chordMarkRoot: {
    label: "Grundton markieren",
    help: "Der Grundton jedes Akkords trägt einen goldenen Block.",
  },

  // Lyrics
  lyricsEnabled: {
    label: "Liedtext",
    help: "Zeigt den Text eines Lieds, wenn es einen hat, Zeile für Zeile.",
  },
  lyricsBackground: {
    label: "Hintergrundfarbe",
    help: "Die Farbe des Streifens hinter dem Liedtext.",
  },
  lyricsFontColor: {
    label: "Textfarbe",
    help: "Die Farbe der Wörter, die noch kommen.",
  },
  lyricsFontColorPlayed: {
    label: "Farbe des gesungenen Texts",
    help: "Die Farbe der Wörter, die schon gesungen sind.",
  },
  lyricsFontColorActive: {
    label: "Farbe der aktuellen Silbe",
    help: "Die Silbe, die gerade gesungen wird, hebt sich in dieser Farbe ab.",
  },
  lyricsFontSize: {
    label: "Textgröße (px)",
    help: "Wie groß der Liedtext geschrieben wird.",
  },
  lyricsY: {
    label: "Höhe (% von oben)",
    help: "Wo die Mitte der Liedtextzeile in der Szene steht. 0 ist der obere Rand.",
  },
  lyricsCursorEnabled: {
    label: "Cursor",
    help: "Ein Punkt über der Silbe, die gerade gesungen wird.",
  },
  lyricsBouncingCursor: {
    label: "Hüpfender Cursor",
    help: "Der Punkt hüpft von jeder Silbe zur nächsten.",
  },

  // Coding
  enableColorCodingNote: {
    label: "Noten nach Tonhöhe färben",
    help: "Jede der 12 Tonhöhen bekommt ihre eigene Farbe.",
  },
  enableColorCodingNotePiano: {
    label: "Tasten nach Tonhöhe färben",
    help: "Jede Taste leuchtet beim Klingen in der Farbe ihrer Tonhöhe.",
  },
  colorCodeNote0: { label: "C", help: "Die Farbe jedes C." },
  colorCodeNote1: { label: "C♯ oder D♭", help: "Die Farbe jedes C♯ oder D♭." },
  colorCodeNote2: { label: "D", help: "Die Farbe jedes D." },
  colorCodeNote3: { label: "D♯ oder E♭", help: "Die Farbe jedes D♯ oder E♭." },
  colorCodeNote4: { label: "E", help: "Die Farbe jedes E." },
  colorCodeNote5: { label: "F", help: "Die Farbe jedes F." },
  colorCodeNote6: { label: "F♯ oder G♭", help: "Die Farbe jedes F♯ oder G♭." },
  colorCodeNote7: { label: "G", help: "Die Farbe jedes G." },
  colorCodeNote8: { label: "G♯ oder A♭", help: "Die Farbe jedes G♯ oder A♭." },
  colorCodeNote9: { label: "A", help: "Die Farbe jedes A." },
  colorCodeNote10: { label: "A♯ oder B", help: "Die Farbe jedes A♯ oder B." },
  colorCodeNote11: { label: "H", help: "Die Farbe jedes H." },
  enableColorCodingFinger: {
    label: "Noten nach Finger färben",
    help: "Eine Note, die keine Hand spielt, behält ihre andere Farbe.",
  },
  enableColorCodingFingerPiano: {
    label: "Tasten nach Finger färben",
    help: "Jede Taste leuchtet in der Farbe des Fingers, der sie spielt.",
  },
  colorCodeFinger1Right: { label: "Rechte Hand, Finger 1", help: "Die Farbe der Noten, die der rechte Daumen spielt." },
  colorCodeFinger2Right: { label: "Rechte Hand, Finger 2", help: "Die Farbe der Noten, die der rechte Zeigefinger spielt." },
  colorCodeFinger3Right: { label: "Rechte Hand, Finger 3", help: "Die Farbe der Noten, die der rechte Mittelfinger spielt." },
  colorCodeFinger4Right: { label: "Rechte Hand, Finger 4", help: "Die Farbe der Noten, die der rechte Ringfinger spielt." },
  colorCodeFinger5Right: { label: "Rechte Hand, Finger 5", help: "Die Farbe der Noten, die der rechte kleine Finger spielt." },
  colorCodeFingerDefaultRight: {
    label: "Rechte Hand, ohne Finger",
    help: "Die Farbe der Noten der rechten Hand ohne festgelegten Finger.",
  },
  colorCodeFinger1Left: { label: "Linke Hand, Finger 1", help: "Die Farbe der Noten, die der linke Daumen spielt." },
  colorCodeFinger2Left: { label: "Linke Hand, Finger 2", help: "Die Farbe der Noten, die der linke Zeigefinger spielt." },
  colorCodeFinger3Left: { label: "Linke Hand, Finger 3", help: "Die Farbe der Noten, die der linke Mittelfinger spielt." },
  colorCodeFinger4Left: { label: "Linke Hand, Finger 4", help: "Die Farbe der Noten, die der linke Ringfinger spielt." },
  colorCodeFinger5Left: { label: "Linke Hand, Finger 5", help: "Die Farbe der Noten, die der linke kleine Finger spielt." },
  colorCodeFingerDefaultLeft: {
    label: "Linke Hand, ohne Finger",
    help: "Die Farbe der Noten der linken Hand ohne festgelegten Finger.",
  },

  // Sheet
  enableSheet: {
    label: "Notenblatt anzeigen",
    help: "Das Lied als Notenblatt, oben über der Szene.",
  },
  enableFullSheet: {
    label: "Nur das Notenblatt",
    help: "Das Notenblatt füllt den Bildschirm statt der Szene.",
  },
  sheetMeasureScroll: {
    label: "Notenblatt mit dem Lied scrollen",
    help: "Ist das aus, stehen die Takte in Zeilen, und die aktuelle Zeile bleibt im Blick.",
  },
  sheetMeasureNumbers: {
    label: "Taktnummern",
    help: "Wo das Notenblatt die Nummer jedes Takts zeigt.",
    options: { off: "Keine", lineStart: "Am Anfang jeder Zeile", every: "An jedem Takt" },
  },
  enableGrandStaff: {
    label: "Zwei Systeme mit einer Klammer verbinden",
    help: "Die geschweifte Klammer eines Klaviersystems, am Anfang jeder Zeile.",
  },
  sheetAutoClef: {
    label: "Jeden Schlüssel nach den Noten wählen",
    help: "Ist das aus, hat das erste System einen Violinschlüssel und die übrigen einen Bassschlüssel.",
  },
  overrideTimeSignature: {
    label: "Taktart",
    help: "Die Taktart, in der das Notenblatt geschrieben ist. Wähl eine, wenn die des Lieds falsch ist.",
    options: {
      auto: "Aus dem Lied",
      "2/4": "2/4",
      "3/4": "3/4",
      "4/4": "4/4",
      "5/4": "5/4",
      "2/2": "2/2",
      "6/8": "6/8",
      "9/8": "9/8",
      "12/8": "12/8",
    },
  },
  sheetMinNoteDenom: {
    label: "Kürzester Notenwert",
    help: "Der kürzeste Notenwert, den das Notenblatt schreibt. Triolen davon passen trotzdem.",
    options: { "4": "Viertel", "8": "Achtel", "16": "Sechzehntel", "32": "Zweiunddreißigstel", "64": "Vierundsechzigstel" },
  },
  hideRestsBelow: {
    label: "Pausen ausblenden, die kürzer sind als",
    help: "Lässt kurze Pausen weg, damit das Notenblatt leichter zu lesen ist.",
    options: { none: "Keine ausblenden", "4": "Eine Viertel", "8": "Eine Achtel", "16": "Eine Sechzehntel", "32": "Eine Zweiunddreißigstel" },
  },
  renderSheetCursor: {
    label: "Cursor",
    help: "Eine Linie markiert die Stelle im Lied.",
  },
  sheetColorActiveNotes: {
    label: "Klingende Noten färben",
    help: "Noten auf dem Notenblatt wechseln die Farbe, solange sie klingen.",
  },
  sheetColorByTrack: {
    label: "Klingende Noten in der Farbe ihrer Spur",
    help: "Ist das aus, nehmen sie die Farbe darunter an.",
  },
  sheetActiveNotesColor: {
    label: "Farbe klingender Noten",
    help: "Die Farbe einer Note auf dem Notenblatt, solange sie klingt.",
  },
  sheetHighlightActiveNotes: {
    label: "Leuchten hinter klingenden Noten",
    help: "Ein weiches Licht erscheint hinter jeder Note auf dem Notenblatt, solange sie klingt.",
  },
  sheetActiveHighlightColor: {
    label: "Farbe des Leuchtens",
    help: "Die Farbe des Lichts hinter klingenden Noten.",
  },
  sheetActiveGrowEffect: {
    label: "Klingende Noten wachsen",
    help: "Eine Note auf dem Notenblatt wird größer, solange sie klingt.",
  },
  sheetRenderInputNotes: {
    label: "Deine gespielten Noten zeichnen",
    help: "Jede Taste, die du hältst, erscheint als Note am Cursor.",
  },
  sheetShowHoverInfo: {
    label: "Noten unter dem Mauszeiger benennen",
    help: "Zeig auf eine Note oder einen Akkord auf dem Notenblatt, um die Namen der Töne zu sehen.",
  },
  sheetBgColor: {
    label: "Papierfarbe",
    help: "Die Farbe hinter dem Notenblatt. Auf dunklem Papier wird die Tinte hell.",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "Noten als PDF speichern",
    help: "Öffnet einen Dialog, der die fallenden Noten des geöffneten Lieds als Seiten speichert, deren Länge du wählst.",
  },
  exportPdfBackground: {
    label: "Hintergrundfarben verwenden",
    help: "Die Seiten übernehmen die Farben der Bahnen und Tasten. Ist das aus, wird auf weißes Papier gedruckt.",
  },

  // Offline
  offlineCache: {
    label: "Offline-Dateien verwalten",
    help: "Zeigt die Größe der App, der Lieder und der Klavierklänge und speichert oder entfernt jedes davon.",
  },
  autoCacheSongs: {
    label: "Lieder gespeichert halten",
    help: "Speichert jetzt jedes Beispiellied und nach jedem Update erneut.",
  },
  autoCacheSounds: {
    label: "Klavierklänge gespeichert halten",
    help: "Speichert jetzt jedes Klangset und nach jedem Update erneut.",
  },
};
