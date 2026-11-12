/** The gallery's section of the tabs and the segmented control, each with two, three and five options. */
import { segmented, tabs, type SegmentedOptions, type TabsOptions } from "../components/tabs";
import { el } from "../dom";
import { signal } from "../signal";
import { group, section, specimen, type Locale } from "./parts";

const MESSAGES = {
  en: {
    heading: "Tabs and segmented control",
    tabs: "Tabs",
    segmented: "Segmented control",
    modeName: "Practice mode",
    practise: "Practise",
    listen: "Listen",
    practiseText: "Play along, and the song waits for each right note.",
    listenText: "Lean back and hear the whole song once before you play it.",
    viewName: "Main views",
    play: "Play",
    songs: "Songs",
    settings: "Settings",
    playText: "Pick up where you stopped last time.",
    songsText: "Twelve songs wait for you, from easy to hard.",
    settingsText: "Choose your keyboard and the sound of the piano.",
    profileName: "Your profile",
    overview: "Overview",
    lessons: "Lessons",
    achievements: "Achievements",
    statistics: "Statistics",
    overviewText: "You practised four days in a row.",
    lessonsText: "Lesson 5 is next: chords for the left hand.",
    achievementsText: "You earned three of twenty badges.",
    statisticsText: "You hit nine of ten notes on time this week.",
    handName: "Hand",
    leftHand: "Left hand",
    rightHand: "Right hand",
    speedName: "Speed",
    slow: "Slow",
    normal: "Normal",
    fast: "Fast",
    levelName: "Difficulty",
    veryEasy: "Very easy",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    expert: "Expert",
  },
  de: {
    heading: "Tabs und Segmentschalter",
    tabs: "Tabs",
    segmented: "Segmentschalter",
    modeName: "Übungsmodus",
    practise: "Üben",
    listen: "Anhören",
    practiseText: "Spiele mit, und das Lied wartet auf jede richtige Note.",
    listenText: "Lehn dich zurück und hör das ganze Lied einmal, bevor du es spielst.",
    viewName: "Hauptansichten",
    play: "Spielen",
    songs: "Lieder",
    settings: "Einstellungen",
    playText: "Mach dort weiter, wo du zuletzt aufgehört hast.",
    songsText: "Zwölf Lieder warten auf dich, von leicht bis schwer.",
    settingsText: "Wähle deine Tastatur und den Klang des Klaviers.",
    profileName: "Dein Profil",
    overview: "Übersicht",
    lessons: "Lektionen",
    achievements: "Erfolge",
    statistics: "Statistiken",
    overviewText: "Du hast vier Tage hintereinander geübt.",
    lessonsText: "Als Nächstes kommt Lektion 5: Akkorde für die linke Hand.",
    achievementsText: "Du hast drei von zwanzig Abzeichen verdient.",
    statisticsText: "Diese Woche hast du neun von zehn Noten pünktlich getroffen.",
    handName: "Hand",
    leftHand: "Linke Hand",
    rightHand: "Rechte Hand",
    speedName: "Tempo",
    slow: "Langsam",
    normal: "Normal",
    fast: "Schnell",
    levelName: "Schwierigkeit",
    veryEasy: "Sehr leicht",
    easy: "Leicht",
    medium: "Mittel",
    hard: "Schwer",
    expert: "Experte",
  },
} satisfies Record<Locale, Record<string, string>>;

/** A component in a box of a set width, since it fills its parent and a specimen sizes to its content. */
function framed(node: HTMLElement, wide = false): HTMLElement {
  const width = wide ? "calc(var(--s-12) * 5)" : "calc(var(--s-12) * 4)";
  return el("div", { attrs: { style: `width: ${width}; max-width: 100%` }, children: [node] });
}

const text = (content: string) => el("p", { text: content });

/** The section of the tabs and the segmented control in the gallery. */
export function tabsSection(locale: Locale): HTMLElement {
  const t = MESSAGES[locale];
  const tabSets: [string, TabsOptions, boolean?][] = [
    [
      "two-tabs",
      {
        label: t.modeName,
        tabs: [
          { value: "practise", label: t.practise, panel: text(t.practiseText) },
          { value: "listen", label: t.listen, panel: text(t.listenText) },
        ],
      },
    ],
    [
      "three-tabs-icons",
      {
        label: t.viewName,
        value: "songs",
        tabs: [
          { value: "play", label: t.play, icon: "play", panel: text(t.playText) },
          { value: "songs", label: t.songs, icon: "piano", panel: text(t.songsText) },
          { value: "settings", label: t.settings, icon: "settings", panel: text(t.settingsText) },
        ],
      },
    ],
    [
      "five-tabs",
      {
        label: t.profileName,
        value: "achievements",
        tabs: [
          { value: "overview", label: t.overview, panel: text(t.overviewText) },
          { value: "lessons", label: t.lessons, panel: text(t.lessonsText) },
          { value: "songs", label: t.songs, panel: text(t.songsText) },
          { value: "achievements", label: t.achievements, panel: text(t.achievementsText) },
          { value: "statistics", label: t.statistics, panel: text(t.statisticsText) },
        ],
      },
      true,
    ],
  ];
  const segmentSets: [string, SegmentedOptions, boolean?][] = [
    [
      "two-segments",
      {
        label: t.handName,
        value: "right",
        segments: [
          { value: "left", label: t.leftHand },
          { value: "right", label: t.rightHand },
        ],
      },
    ],
    [
      "three-segments",
      {
        label: t.speedName,
        value: signal("normal"),
        segments: [
          { value: "slow", label: t.slow },
          { value: "normal", label: t.normal },
          { value: "fast", label: t.fast },
        ],
      },
    ],
    [
      "five-segments",
      {
        label: t.levelName,
        value: "medium",
        segments: [
          { value: "very-easy", label: t.veryEasy },
          { value: "easy", label: t.easy },
          { value: "medium", label: t.medium },
          { value: "hard", label: t.hard },
          { value: "expert", label: t.expert },
        ],
      },
      true,
    ],
  ];
  return section("tabs", t.heading, [
    group(
      t.tabs,
      tabSets.map(([state, options, wide]) => specimen(state, framed(tabs(options), wide))),
    ),
    group(
      t.segmented,
      segmentSets.map(([state, options, wide]) => specimen(state, framed(segmented(options), wide))),
    ),
  ]);
}
