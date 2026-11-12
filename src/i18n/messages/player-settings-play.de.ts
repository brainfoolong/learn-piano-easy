/** The player's settings from the site's own to the piano's, in German. It has the English file's type, so it holds every setting. */
import type { playerSettingsPlay as en } from "./player-settings-play.en";

export const playerSettingsPlay: typeof en = {
  // Site
  siteTheme: {
    label: "Farbschema der Website",
    help: "Die Farben der Seiten dieser Website. Das Farbschema der Szene setzt die Farben des Klaviers und seiner Bahnen.",
    options: { system: "Wie das System", light: "Hell", dark: "Dunkel" },
  },
  language: {
    label: "Sprache",
    help: "Mit \"Wie der Browser\" öffnet sich die Website in der Sprache des Browsers, wenn es sie gibt.",
    options: { auto: "Wie der Browser", en: "English", de: "Deutsch" },
  },
  learnSounds: {
    label: "Belohnungsklänge",
    help: "Die Klänge von Klavier lernen für einen bestandenen Schritt, einen Stern, ein neues Level und ein Abzeichen. Das Klavier klingt immer.",
  },
  learnDailyGoal: {
    label: "Tagesziel",
    help: "Die XP, die ein Tag von Klavier lernen braucht, damit deine Serie weiterläuft.",
    options: { "10": "10 XP", "20": "20 XP", "30": "30 XP", "50": "50 XP" },
  },
  learnSetupDone: {
    label: "Erster Besuch erledigt",
    help: "Klavier lernen zeigt beim ersten Besuch eine kurze Einrichtung, bis sie erledigt ist.",
  },
  expertControls: {
    label: "Expertenwerkzeuge",
    help: "Der Knopf Experte in der Steuerleiste zeigt Tempo, Transponieren, die Takte der Schleife, Anpassen und das seitliche Verschieben der Ansicht.",
  },
  // General
  theme: {
    label: "Farbschema der Szene",
    help: "Setzt die Farben des Klaviers und seiner Bahnen. Das Farbschema der Website oben in der Leiste setzt den Rest des Players.",
    options: { dark: "Dunkel", light: "Hell" },
  },
  yourData: {
    label: "Daten sichern oder wiederherstellen",
    help: "Öffnet die Seite, die deine Einstellungen, deinen Fortschritt, deine Lieder und Ergebnisse in einer Datei sichert und wiederherstellt.",
  },
  startWithLastSong: {
    label: "Beim Start das letzte Lied öffnen",
    help: "Öffnet das zuletzt gespielte Lied, sobald du den Player öffnest.",
  },
  saveIndexedDb: {
    label: "Deine Dateien in diesem Browser behalten",
    help: "Lieder, die du von deinem Computer öffnest, bleiben in deiner Bibliothek, auch wenn die Seite neu lädt.",
  },
  disableHotkeys: {
    label: "Tastenkürzel ausschalten",
    help: "Die Computertasten spielen, spulen und wiederholen das Lied nicht mehr.",
  },
  hotKeyBindings: {
    label: "Tastenkürzel",
    help: "Die Tasten, die das Lied abspielen, spulen, wiederholen und zoomen.",
  },
  leadIn: {
    label: "Zeit vor dem ersten Ton (s)",
    help: "Jedes Lied beginnt so lange vor seinem ersten Ton. Startet es am Ende neu, wartet es noch einmal so lange.",
  },
  restartSongOnEnd: {
    label: "Lied am Ende neu starten",
    help: "Nach dem letzten Ton spielt das Lied wieder von vorn.",
  },
  playNotesOnScrollEnabled: {
    label: "Töne beim Ziehen der Zeitleiste spielen",
    help: "Du hörst jeden Ton, über den du beim Ziehen durch das Lied kommst.",
  },
  fitZoomOnNewSong: {
    label: "Zoom an jedes neue Lied anpassen",
    help: "Ein neu geöffnetes Lied passt ganz in die Bahnen vor dem Klavier.",
  },
  transposeOffset: {
    label: "Transponieren (Halbtöne)",
    help: "Verschiebt alle Töne des Lieds nach oben oder unten.",
  },
  reverseNoteDirection: {
    label: "Richtung der Noten umkehren",
    help: "Die Noten bewegen sich vom Klavier weg statt darauf zu.",
  },
  renderOffset: {
    label: "Bildversatz (ms)",
    help: "Verzögert das Bild gegenüber dem Ton. Unter 0 kommt das Bild früher.",
  },
  showBPM: {
    label: "Tempo in BPM anzeigen",
    help: "Zeigt die aktuellen Schläge pro Minute des Lieds über der Szene, neben den Bildern pro Sekunde.",
  },
  showFps: {
    label: "Bilder pro Sekunde anzeigen",
    help: "Zeigt, wie viele Bilder pro Sekunde die Szene zeichnet. Eine kleine Zahl heißt, dass das Bild ruckelt.",
  },
  showNoteDebugInfo: {
    label: "Details einer Note beim Darüberfahren anzeigen",
    help: "Zeigst du auf eine Note, siehst du ihre Tonhöhe, Zeit, Länge und Anschlagstärke.",
  },
  showMilliseconds: {
    label: "Millisekunden auf der Zeitleiste anzeigen",
    help: "Die Zeit auf der Zeitleiste zeigt auch Tausendstelsekunden.",
  },
  progressBarMeasures: {
    label: "Zeitleiste in Takten anzeigen",
    help: "Die Zeitleiste zählt Takte statt Minuten und Sekunden.",
  },
  progressBarMeasureLines: {
    label: "Taktstriche auf der Zeitleiste anzeigen",
    help: "Zeichnet eine dünne Linie auf die Zeitleiste, wo jeder Takt beginnt.",
  },
  showMarkersTimeline: {
    label: "Marker auf der Zeitleiste anzeigen",
    help: "Zeigt die Marker des Lieds, etwa Strophe oder Refrain, auf der Zeitleiste.",
  },
  // Loop
  enableLoop: {
    label: "Eine Stelle in Schleife spielen",
    help: "Wiederholt die Takte unten immer wieder, damit du sie üben kannst.",
  },
  loopStart: {
    label: "Erster Takt der Schleife",
    help: "Die Schleife beginnt am Anfang dieses Takts.",
  },
  loopEnd: {
    label: "Letzter Takt der Schleife",
    help: "Die Schleife endet am Ende dieses Takts.",
  },
  loopDelay: {
    label: "Einzählen (Schläge)",
    help: "Die Schläge vor jedem Durchgang der Schleife.",
  },
  enableLoopBeats: {
    label: "Klick beim Einzählen",
    help: "Du hörst einen Klick auf jedem Schlag beim Einzählen.",
  },
  autoLoop: {
    label: "Jeden Durchgang sofort starten",
    help: "Ist das aus, hält das Lied nach jedem Durchgang beim Einzählen an.",
  },
  muteLoop: {
    label: "Lied außerhalb der Schleife stumm schalten",
    help: "Nur die Töne der wiederholten Takte klingen.",
  },
  loopTrainer: {
    label: "Schleifentrainer",
    help: "Beginnt langsam und wird nach jedem Durchgang 5 % schneller, bis 100 %.",
  },
  loopTrainerSpeed: {
    label: "Starttempo des Schleifentrainers (%)",
    help: "Das Tempo des ersten Durchgangs im Schleifentrainer.",
  },
  // Audio
  volumeMain: {
    label: "Lautstärke",
    help: "Die Lautstärke von allem, was die App spielt.",
  },
  masterGain: {
    label: "Lautstärke des Lieds",
    help: "Wie laut die Töne des Lieds klingen.",
  },
  inputGain: {
    label: "Lautstärke deines Spiels",
    help: "Wie laut die Töne klingen, die du auf deinem Keyboard spielst.",
  },
  velocityStrength: {
    label: "Wirkung der Anschlagstärke",
    help: "Wie stark die Anschlagstärke eines Tons seine Lautstärke ändert.",
  },
  sustainEnabled: {
    label: "Haltepedal",
    help: "Töne klingen weiter, solange das Lied oder du das Pedal gedrückt hältst.",
  },
  enableReverb: {
    label: "Hall",
    help: "Gibt dem Klang das Echo eines Raums.",
  },
  reverbImpulseResponse: {
    label: "Hallraum",
    help: "Der Raum, nach dem der Hall klingt. Ein größerer Raum hallt länger.",
    options: { room: "Zimmer", hall: "Konzertsaal", church: "Kirche" },
  },
  detune: {
    label: "Verstimmung (Cent)",
    help: "Stimmt alle Töne etwas höher oder tiefer. 100 Cent sind ein Halbton.",
  },
  adsrAttack: {
    label: "Anschwellen (s)",
    help: "Wie lange ein Ton bis zur vollen Lautstärke braucht.",
  },
  adsrDecay: {
    label: "Abfallen (s)",
    help: "Wie lange ein Ton braucht, um auf seinen Haltepegel zu fallen.",
  },
  adsrSustain: {
    label: "Haltepegel (%)",
    help: "Die Lautstärke, die ein gehaltener Ton behält.",
  },
  adsrReleaseKey: {
    label: "Ausklingen nach der Taste (s)",
    help: "Wie lange ein Ton ausklingt, wenn du seine Taste loslässt.",
  },
  adsrReleasePedal: {
    label: "Ausklingen nach dem Pedal (s)",
    help: "Wie lange ein gehaltener Ton ausklingt, wenn das Pedal losgelassen wird.",
  },
  enableMetronome: {
    label: "Metronom",
    help: "Klickt auf jedem Schlag des Lieds.",
  },
  metronomeMidiOutput: {
    label: "Ausgabe des Metronoms",
    help: "Wo das Metronom klingt.",
    options: { both: "Lautsprecher und MIDI-Gerät", midi: "MIDI-Gerät", speakers: "Lautsprecher" },
  },
  metronomeNoteNumber: {
    label: "Ton des Metronoms auf dem MIDI-Gerät",
    help: "Der Ton, den das Metronom auf jedem Schlag an dein MIDI-Gerät schickt.",
  },
  metronomeInstrument: {
    label: "Klang des Metronoms auf dem MIDI-Gerät",
    help: "Beim Schlagzeug wählt der Ton die Trommel.",
    options: { woodblock: "Holzblock", drums: "Schlagzeug", piano: "Klavier" },
  },
  metronomeVolume: {
    label: "Lautstärke des Metronoms",
    help: "Wie laut das Metronom klickt.",
  },
  synchedMetronome: {
    label: "Metronom im Takt des Lieds halten",
    help: "An: Das Metronom klickt auf den Schlägen des Lieds und folgt seinen Tempowechseln und der Geschwindigkeit. Aus: Es hält einen gleichmäßigen Schlag im Tempo des Lieds dort, wo die Wiedergabe startet. Spätere Tempo- und Geschwindigkeitswechsel ändern diesen Schlag nicht. Er startet und stoppt mit der Wiedergabe. Klickt das Einzählen einer Schleife, setzt er dabei aus und startet auf dem ersten Schlag der Schleife neu.",
  },
  enableEqualizer: {
    label: "Equalizer",
    help: "Macht die tiefen, mittleren und hohen Klänge lauter oder leiser.",
  },
  equalizerGain0: {
    label: "Tiefen, 60 Hz (dB)",
    help: "Hebt oder senkt die tiefsten Klänge.",
  },
  equalizerGain1: {
    label: "Untere Mitten, 250 Hz (dB)",
    help: "Hebt oder senkt die warme untere Mitte des Klangs.",
  },
  equalizerGain2: {
    label: "Mitten, 1 kHz (dB)",
    help: "Hebt oder senkt die Mitte des Klangs.",
  },
  equalizerGain3: {
    label: "Obere Mitten, 4 kHz (dB)",
    help: "Hebt oder senkt die helle obere Mitte des Klangs.",
  },
  equalizerGain4: {
    label: "Höhen, 12 kHz (dB)",
    help: "Hebt oder senkt die höchsten Klänge.",
  },
  scheduleAheadMs: {
    label: "Audio-Vorlauf (ms)",
    help: "Wie weit im Voraus Töne eingeplant werden. Mehr ist stabiler, weniger reagiert schneller.",
  },
  scheduleIntervalMs: {
    label: "Audio-Planungsintervall (ms)",
    help: "Wie oft die nächsten Töne eingeplant werden.",
  },
  // Backing track
  bgTrackFile: {
    label: "Audiodatei wählen",
    help: "Eine Aufnahme zum Mitspielen, etwa eine Begleitband. Sie bleibt, bis die Seite neu lädt.",
  },
  bgTrackEnable: {
    label: "Hintergrundspur abspielen",
    help: "Die gewählte Aufnahme spielt zusammen mit dem Lied.",
  },
  bgTrackVolume: {
    label: "Lautstärke (%)",
    help: "Wie laut die Hintergrundspur klingt.",
  },
  bgTrackSpeed: {
    label: "Tempo (%)",
    help: "Wie schnell die Spur gegenüber dem Lied läuft. So passt eine Aufnahme in einem anderen Tempo.",
  },
  bgTrackOffset: {
    label: "Versatz (Sekunden)",
    help: "Die Sekunde des Lieds, bei der der Anfang der Spur erklingt. Unter 0 wird der Anfang der Spur übersprungen.",
  },
  bgTrackLoop: {
    label: "Hintergrundspur wiederholen",
    help: "Die Spur beginnt am Ende wieder von vorn.",
  },
  // View
  cameraPreset: {
    label: "Kamera",
    help: "Zieh die Szene, um dich umzusehen, außer in der flachen Ansicht. Ein Doppelklick bringt dich zu dieser Kamera zurück. Die flache Ansicht passt zu einem Keyboard direkt unter dem Bildschirm.",
    options: {
      classic: "Klassisch, von oben",
      player: "Vom Klavierhocker",
      cinematic: "Filmisch, langsam bewegt",
      flat: "Flach, die Tasten füllen die Bildschirmbreite",
    },
  },
  resetCamera: {
    label: "Zurück zur Kamera",
    help: "Bringt die Kamera zurück, nachdem du die Szene gezogen hast.",
  },
  glowMode: {
    label: "Leuchten",
    help: "Automatisch schaltet das Leuchten auf einem Gerät im Energiesparmodus aus, oder wenn das Bild ruckelt.",
    options: { auto: "Automatisch", on: "An", off: "Aus" },
  },
  glowStrength: {
    label: "Stärke des Leuchtens",
    help: "Wie hell die Noten und Tasten leuchten.",
  },
  zoomByMeasures: {
    label: "Nach Takten zoomen",
    help: "Die Bahnen zeigen eine Anzahl Takte statt einer Anzahl Sekunden.",
  },
  noteToHeightConst: {
    label: "Sekunden im Voraus",
    help: "Wie viele Sekunden kommender Noten die Bahnen zeigen. Weniger Sekunden machen die Noten länger und schneller.",
  },
  measuresShownOnScreen: {
    label: "Takte im Voraus",
    help: "Wie viele Takte kommender Noten die Bahnen zeigen, wenn du nach Takten zoomst.",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "Erste Taste",
    help: "Die tiefste Taste deines Keyboards, etwa C2 oder 36.",
  },
  keyboardLastNote: {
    label: "Letzte Taste",
    help: "Die höchste Taste deines Keyboards, etwa C7 oder 96.",
  },
  foldOutsideNotes: {
    label: "Töne außerhalb deiner Tasten in den Bereich holen",
    help: "Töne, die deinem Keyboard fehlen, rücken um Oktaven auf deine Tasten. Dort spielst du sie.",
  },
  // Input
  playMode: {
    label: "Modus",
    help: "Freies Spiel legt das Lied beiseite, damit du spielen und aufnehmen kannst. Töne üben fragt dich Töne zum Finden ab.",
    options: { player: "Ein Lied spielen", freePlay: "Freies Spiel und Aufnahme", pitchPractice: "Töne üben" },
  },
  pitchPracticeKey: {
    label: "Tonart beim Töne üben",
    help: "Töne üben fragt nur die Töne dieser Tonart ab.",
    options: {
      chromatic: "Alle Tasten, schwarz und weiß",
      C: "C-Dur",
      G: "G-Dur",
      D: "D-Dur",
      A: "A-Dur",
      E: "E-Dur",
      B: "H-Dur",
      Gb: "G♭-Dur",
      Db: "D♭-Dur",
      Ab: "A♭-Dur",
      Eb: "E♭-Dur",
      Bb: "B-Dur",
      F: "F-Dur",
    },
  },
  pitchPracticeFirstNote: {
    label: "Tiefster Ton beim Töne üben",
    help: "Der tiefste Ton, den Töne üben abfragt, innerhalb deines Keyboards.",
  },
  pitchPracticeLastNote: {
    label: "Höchster Ton beim Töne üben",
    help: "Der höchste Ton, den Töne üben abfragt, innerhalb deines Keyboards.",
  },
  pitchPracticeCount: {
    label: "Töne pro Runde beim Töne üben",
    help: "Wie viele Töne Töne üben abfragt, bevor es dein Ergebnis zeigt.",
  },
  saveMidiDevices: {
    label: "Gewählte MIDI-Geräte merken",
    help: "Der Player verbindet sich beim nächsten Öffnen mit demselben MIDI-Eingang und -Ausgang.",
  },
  keyBindings: {
    label: "Tasten der Computertastatur",
    help: "Die Computertasten, die Töne spielen. Y bis M spielen C3 bis H3, und Q bis I spielen C4 bis C5.",
  },
  waitForNotes: {
    label: "Auf deine Töne warten",
    help: "Das Lied hält bei jedem deiner Töne an, bis du alle seine Tasten hältst. Im Spielmodus zählt ein Ton, auf den es lange wartet, als zu spät.",
  },
  playHands: {
    label: "Deine Hände",
    help: "Die Hände, für die dein Spiel gewertet wird. Ist \"Auf deine Töne warten\" an, spielt die App die Hand, die du auslässt.",
    options: { both: "Beide Hände", right: "Rechte Hand", left: "Linke Hand" },
  },
  playalongSilentNotes: {
    label: "Zu spielende Tasten auf deinem MIDI-Keyboard leuchten lassen",
    help: "Schickt jeden nächsten Ton sehr leise an den MIDI-Ausgang. So zeigt ihn ein Keyboard mit Tastenbeleuchtung.",
  },
  playalongSilentNotesChannel: {
    label: "MIDI-Kanal der Tastenbeleuchtung",
    help: "Der MIDI-Kanal, auf dem dein Keyboard für seine Tastenbeleuchtung hört.",
  },
  enableScoreMode: {
    label: "Jeden Ton bewerten",
    help: "Bewertet jeden gespielten Ton gegen das Lied und merkt sich deine Genauigkeit pro Lied.",
  },
  scoreHitWindow: {
    label: "Trefferfenster (ms)",
    help: "Ein Ton, der so nah an seiner Zeit liegt, ob früh oder spät, ist ein Treffer.",
  },
  scorePerfectWindow: {
    label: "Perfekt-Fenster (ms)",
    help: "Ein Treffer so nah an seiner Zeit ist perfekt.",
  },
  enableGameMode: {
    label: "Spielmodus",
    help: "Gibt Punkte für genaue Treffer und gehaltene Töne, zieht für jeden Fehler ab und vervielfacht eine Serie von Treffern.",
  },
  gameDifficulty: {
    label: "Schwierigkeit",
    help: "Wie genau das Timing sein muss und wie viel ein Ton bringt und ein Fehler kostet.",
    options: { easy: "Leicht: ein paar Stunden Spielpraxis", normal: "Normal: einige Monate", hard: "Schwer: etwa ein Jahr" },
  },
  // Piano
  clickablePiano: {
    label: "Klavier per Klick oder Berührung spielen",
    help: "Die Tasten auf dem Bildschirm klingen, wenn du sie anklickst oder antippst.",
  },
  highlightActivePianoKeys: {
    label: "Gedrückte Tasten färben",
    help: "Färbt die Tasten, die du hältst, in den Farben unten.",
  },
  inputNoteColorWhite: {
    label: "Farbe deiner weißen Tasten",
    help: "Die Farbe einer weißen Taste, die du hältst.",
  },
  inputNoteColorBlack: {
    label: "Farbe deiner schwarzen Tasten",
    help: "Die Farbe einer schwarzen Taste, die du hältst.",
  },
  pianoWhiteKeyColor: {
    label: "Farbe der weißen Tasten",
    help: "Die Farbe der weißen Tasten des Klaviers.",
  },
  pianoBlackKeyColor: {
    label: "Farbe der schwarzen Tasten",
    help: "Die Farbe der schwarzen Tasten des Klaviers.",
  },
  pianoVelvetColor: {
    label: "Filzfarbe",
    help: "Der Filzstreifen hinter den Tasten.",
  },
  pianoBackgroundColor: {
    label: "Hintergrundfarbe",
    help: "Die Farbe hinter dem Klavier und den Bahnen.",
  },
  pianoPosition: {
    label: "Höhe des Klaviers auf dem Bildschirm (%)",
    help: "Schiebt das Klavier auf dem Bildschirm nach oben oder unten.",
  },
  whiteKeyHeight: {
    label: "Länge der weißen Tasten (%)",
    help: "Wie lang die weißen Tasten gezeichnet werden.",
  },
  enableKeyFlare: {
    label: "Lichtschein auf gedrückten Tasten",
    help: "Über jeder klingenden Taste leuchtet ein heller Schein.",
  },
  pianoLineEnabled: {
    label: "Wellenlinie über den Tasten",
    help: "Eine Linie, die sich über jeder klingenden Taste kräuselt.",
  },
  pianoLineSpeed: {
    label: "Wellengeschwindigkeit",
    help: "Wie schnell sich die Wellen der Linie bewegen.",
  },
  pianoLineResolution: {
    label: "Wellen pro Oktave",
    help: "Wie viele Wellen über eine Oktave passen. Mehr Wellen wirken feiner.",
  },
  pianoLineAmplitude: {
    label: "Wellenhöhe",
    help: "In Tastenbreiten, über einer Taste, die mit voller Stärke klingt.",
  },
  pianoLineColor: {
    label: "Farbe der Wellenlinie",
    help: "Die Farbe der Wellenlinie.",
  },
  pianoLineOpacity: {
    label: "Deckkraft der Wellenlinie",
    help: "Wie kräftig die Wellenlinie erscheint. Weniger ist blasser.",
  },
  pianoLineYOffset: {
    label: "Höhe der Wellenlinie",
    help: "In Tastenbreiten über den Tasten.",
  },
};
