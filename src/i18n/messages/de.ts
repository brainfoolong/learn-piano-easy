/** The German catalog. It satisfies the English catalog's type, so it holds every message. */
import { formatNumber, plural } from "../format";
import { dataPage } from "./data.de";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.de";
import { learnLesson } from "./learn-lesson.de";
import { learnMap } from "./learn-map.de";
import { learnProfile } from "./learn-profile.de";
import { learnSetup } from "./learn-setup.de";
import { playerBar } from "./player-bar.de";
import { playerInput } from "./player-input.de";
import { playerLibrary } from "./player-library.de";
import { playerSettings } from "./player-settings.de";
import { playerShell } from "./player-shell.de";
import { playModes } from "./play-modes.de";
import { sponsorPage } from "./sponsor.de";

const SITE_NAME = en.siteName;

export const de: Messages = {
  languageName: "Deutsch",
  siteName: SITE_NAME,
  noscript: `${SITE_NAME} braucht JavaScript.`,
  pages: {
    home: {
      title: SITE_NAME,
      description:
        "Lerne Klavier, indem du spielst. Ein geführter Kurs, ein 3D-Klavier und dein MIDI-Keyboard. Kostenlos, Open Source und offline.",
    },
    play: {
      title: "Einfach Klavier spielen",
      description:
        "Öffne eine MIDI-Datei, sieh ihre Noten auf ein 3D-Klavier zufliegen und spiel auf deinem MIDI-Keyboard mit.",
    },
    modes: {
      title: "Spielmodi",
      description: "Fertige Arten zu spielen: ein Spiel mit Punkten und Funken, oder ein Lied, das auf dich wartet und jede Note benennt.",
    },
    learn: {
      title: "Klavier lernen",
      description: "Ein geführter Klavierkurs, aufgebaut wie ein Spiel, in kleinen Schritten.",
    },
    profile: {
      title: "Dein Fortschritt",
      description: "Dein Level, deine Abzeichen und wie viel du gespielt hast.",
    },
    about: {
      title: "Über die App",
      description: "Was Learn Piano Easy ist, und die Lizenzen von allem, was es mitbringt.",
    },
    data: {
      title: "Deine Daten",
      description: "Speichere alles, was du in diesem Browser hast, in einer Datei, und hol es auf jedem Gerät zurück.",
    },
    sponsor: {
      title: "Unterstützen",
      description: "Learn Piano Easy ist kostenlos und wird von einer Person gemacht. So kannst du helfen, dass es wächst.",
    },
    imprint: {
      title: "Impressum",
      description: "Wer Learn Piano Easy betreibt, mit Adresse und Kontakt.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      description: "Was Learn Piano Easy auf deinem Gerät behält, was es zählt, und wie du das Zählen abschaltest.",
    },
    design: {
      title: "Designsystem",
      description: "Jede Komponente der Seite in jedem Zustand.",
    },
    lesson: {
      title: "Lektion",
      description: "Eine kurze Lektion von Klavier lernen, Schritt für Schritt.",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) => `${title}. Eine kostenlose Klavierlektion aus „${world}“. ${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}, Startseite`,
    nav: "Hauptnavigation",
    learn: "Klavier lernen",
    play: "Einfach Klavier spielen",
    modes: "Spielmodi",
    menu: "Menü",
    language: "Sprache",
    theme: "Farbschema",
    themeSystem: "Wie das System",
    themeLight: "Hell",
    themeDark: "Dunkel",
  },
  landing: {
    hero: {
      eyebrow: "Kostenlos und Open Source",
      lead: "Sieh zu, wie die Noten auf die Tasten fallen, und spiel sie dann selbst, Lied für Lied.",
      start: "Jetzt lernen",
      play: "Einfach spielen",
      proofs: ["Kein Konto", "Läuft offline", "Keine Werbung"],
      mascot: "Unser Klavierlehrer, ein Affe mit honigfarbenem Fell, spielt in einem sonnigen Zimmer Klavier",
      greeting: "Hallo, ich bin dein Klavierlehrer. Wollen wir spielen?",
      demo: {
        eyebrow: "Probier es hier aus",
        heading: "Die Noten fallen, und du spielst",
        text: "So sieht jedes Lied aus. Jede Note fällt auf ihre Taste, und du drückst die Taste, wenn sie ankommt.",
      },
      piano: "Ein Klavier, auf dessen Tasten die Noten von „Funkel, funkel, kleiner Stern“ fallen",
      hint: "Sobald es spielt, drück seine Tasten und spiel mit.",
      playSong: "Abspielen",
      stopSong: "Stopp",
    },
    twoWays: {
      eyebrow: "Zwei Wege zu spielen",
      heading: "Schritt für Schritt lernen oder einfach spielen",
      lead: "Nimm, was zu deinem Tag passt. Du kannst jederzeit wechseln.",
      learn: {
        tag: "Geführter Kurs",
        title: "Klavier lernen",
        text: "Ein geführter Kurs in kleinen Schritten. Jeder bringt dir etwas Neues bei, und ein Lied setzt es ein.",
        action: "Jetzt lernen",
        picture: "Die Kurskarte, mit der ersten Lektion geschafft und der nächsten offen",
      },
      play: {
        tag: "Jedes Lied",
        title: "Einfach Klavier spielen",
        text: "Öffne ein beliebiges Lied, sieh seine Noten auf ein 3D-Klavier zufliegen und spiel mit.",
        action: "Einfach spielen",
        picture: "Das 3D-Klavier, auf dessen Tasten Noten fallen",
      },
    },
    howItWorks: {
      eyebrow: "So lernst du",
      heading: "Vier Schritte, immer wieder",
      lead: "Jede Lektion folgt derselben kurzen Runde. So weißt du immer, was als Nächstes kommt.",
      steps: [
        { title: "Etwas Neues lernen", text: "Eine kurze Lektion zeigt dir eine neue Sache, etwa eine Note, einen Rhythmus oder eine Handhaltung." },
        { title: "Üben", text: "Spiel es auf deinem eigenen Keyboard. Das Klavier wartet auf dich und markiert jede richtige Note." },
        { title: "Ein echtes Lied spielen", text: "Setz das Gelernte in einem Lied aus der Bibliothek ein, auf einer Stufe, die zu dir passt." },
        { title: "Abzeichen sammeln", text: "Jede Lektion bringt XP, und jede Welt, die du abschließt, ein Abzeichen." },
      ],
    },
    rarities: {
      eyebrow: "Ein Lied, vier Stufen",
      heading: "Jedes Lied wächst mit dir",
      lead: "Jedes unserer Lieder gibt es in vier Fassungen. Wechsle zwischen ihnen und sieh, wie die Ode an die Freude wächst.",
      control: "Fassung",
      piano: "Ein Klavier spielt die Ode an die Freude",
      names: { common: "Einsteiger", rare: "Leicht", epic: "Mittel", legendary: "Schwer" },
      taglines: {
        common: "Deine ersten Tage. Eine Handposition, langsame Noten und ein Bass, der auf dich wartet.",
        rare: "Deine ersten Wochen. Achtelnoten, einfache Akkorde und ein Bass, der sich bewegt.",
        epic: "Deine ersten Monate. Gebrochene Akkorde und ein Daumen, der untersetzt.",
        legendary: "Etwa ein Jahr dabei. Beide Hände beschäftigt, schnell und unabhängig.",
      },
    },
    devices: {
      eyebrow: "Spiel auf dem, was du hast",
      heading: "Kein Klavier? Fang trotzdem an",
      lead: "Mit jedem davon spielst du die Noten. Ein echtes Keyboard fühlt sich am besten an, mit den anderen fängst du heute schon an.",
      ways: [
        { title: "Ein MIDI-Keyboard", text: "Steck es per USB an und erlaube MIDI einmal. Danach findet die Seite es von selbst." },
        { title: "Ein Touchscreen", text: "Tippe die Tasten auf dem Bildschirm an, mit so vielen Fingern, wie du magst." },
        { title: "Deine Computertastatur", text: "Die Buchstaben- und Zifferntasten spielen zwei Oktaven, und du kannst jede Note auf eine andere Taste legen." },
      ],
      piano: "Ein kleines Klavier zum Ausprobieren",
      hint: "Tippe eine Taste an, um sie zu hören.",
    },
    free: {
      eyebrow: "Kostenlos und deins",
      heading: "Nichts zu zahlen, nichts zu unterschreiben",
      lead: "Die Seite ist ein Geschenk von jemandem, der das Klavier liebt. Sie bleibt kostenlos.",
      promises: [
        { title: "Kostenlos, ohne Konto", text: "Öffne die Seite und spiel los. Es gibt keine Anmeldung und nichts zu kaufen." },
        { title: "Open Source", text: "Jede Zeile Code ist öffentlich, unter der MIT-Lizenz. Lies sie, ändere sie, teile sie." },
        { title: "Läuft offline", text: "Einmal geladen, läuft die Seite ohne Netz. Lieder, die du schon geöffnet hast, spielen auch offline." },
        { title: "Keine Werbung, keine Profile", text: "Nichts, was du spielst, verlässt dein Gerät. Wir zählen nur Seitenaufrufe, ohne Cookies, und verkaufen nichts." },
      ],
    },
    questions: {
      eyebrow: "Fragen",
      heading: "Was man zuerst wissen will",
      items: [
        {
          question: "Brauche ich ein Klavier?",
          answer: "Nein. Ein MIDI-Keyboard ist am besten, aber auch ein Touchscreen oder deine Computertastatur spielt jede Note.",
        },
        {
          question: "Welche Browser funktionieren?",
          answer: "Jeder aktuelle Browser spielt. Ein MIDI-Keyboard braucht Web MIDI. Chrome, Edge und Firefox haben es, Safari nicht.",
        },
        {
          question: "Brauche ich ein Konto?",
          answer: "Nein. Du meldest dich nirgends an, und deine Einstellungen bleiben in diesem Browser.",
        },
        {
          question: "Funktioniert es offline?",
          answer: "Ja. Öffne die Seite einmal mit Netz, danach läuft sie offline. Ein Lied spielt offline, sobald du es einmal geöffnet hast.",
        },
        {
          question: "Kann ich eigene Lieder spielen?",
          answer: "Ja. Öffne eine beliebige MIDI- oder MusicXML-Datei in „Einfach Klavier spielen“. Sie wird auf deinem Gerät gelesen und nie hochgeladen.",
        },
        {
          question: "Welche Lieder hat die Bibliothek?",
          answer: "Unsere eigenen Arrangements bekannter Melodien, jedes in vier Fassungen, ein paar eigene Stücke und klassische Stücke aus freien Sammlungen.",
        },
        {
          question: "Ist es wirklich kostenlos?",
          answer: "Ja. Es ist Open Source unter der MIT-Lizenz, ohne Werbung und ohne Bezahlstufe.",
        },
      ],
    },
    lastCall: {
      heading: "Bereit, wenn du es bist",
      lead: "Such dir einen Weg aus. Du kannst jederzeit wechseln.",
    },
  },
  footer: {
    tagline: "Lerne Klavier, indem du spielst. Kostenlos, Open Source und offline.",
    nav: "Seite",
    explore: "Entdecken",
    about: "Über die App und Lizenzen",
    legal: "Rechtliches",
    language: "Diese Seite auf",
    license: "Open Source unter der MIT-Lizenz.",
  },
  counts: {
    badges: (n) => `${formatNumber("de", n)} Abzeichen`,
    minutesPlayed: (n) => `${formatNumber("de", n)} ${plural("de", n, { one: "Minute", other: "Minuten" })} gespielt`,
    xp: (n) => `${formatNumber("de", n)} XP`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  setup: learnSetup,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl:
        "Dieser Browser kann das Klavier nicht zeichnen. Schalte in seinen Einstellungen die Hardwarebeschleunigung ein, oder spiele auf deinem MIDI-Keyboard oder der Computertastatur.",
    },
  },
};
