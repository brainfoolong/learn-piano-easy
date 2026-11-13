/**
 * The English catalog: every text the site shows, and the type every other locale's catalog satisfies.
 *
 * A message is a string, or a function when it holds a number or another text. A function that holds
 * a number builds it with the helpers of `src/i18n/format.ts`, so its digits and its plural follow the
 * locale. The type is `typeof en`, so a message missing from another catalog fails the type check.
 *
 * The player's texts sit under `player`, one file per section, such as `player-bar.en.ts`. Each
 * section's German twin is typed by it. Song guides and song titles are not here.
 */
import type { RouteId } from "../../site/routes";
import { formatNumber, plural } from "../format";
import { dataPage } from "./data.en";
import { learnBadges } from "./learn-badges.en";
import { learnLesson } from "./learn-lesson.en";
import { learnMap } from "./learn-map.en";
import { learnProfile } from "./learn-profile.en";
import { learnSetup } from "./learn-setup.en";
import { playerBar } from "./player-bar.en";
import { playerInput } from "./player-input.en";
import { playerLibrary } from "./player-library.en";
import { playerSettings } from "./player-settings.en";
import { playerShell } from "./player-shell.en";
import { playModes } from "./play-modes.en";
import { sponsorPage } from "./sponsor.en";

/** What a page tells the browser and a search engine before any script runs. */
export interface PageMeta {
  /** The page's own name. The landing page's is the site's name alone. */
  title: string;
  description: string;
}

const SITE_NAME = "Learn Piano Easy";

export const en = {
  /** The site's name, the last part of every page's title. */
  siteName: SITE_NAME,
  /** What a page shows when the browser runs no script. */
  noscript: `${SITE_NAME} needs JavaScript to run.`,
  pages: {
    home: {
      title: SITE_NAME,
      description:
        "Learn piano by playing. A guided course, a 3D piano and your MIDI keyboard. Free, open source and offline.",
    },
    play: {
      title: "Just Play Piano",
      description: "Open a MIDI file, watch its notes fly towards a 3D piano, and play along on your MIDI keyboard.",
    },
    modes: {
      title: "Play modes",
      description: "Ready-made ways to play: a game with points and sparks, or a song that waits for you with every note named.",
    },
    learn: {
      title: "Learn Piano",
      description: "A guided piano course, built like a game, one small step at a time.",
    },
    profile: {
      title: "Your progress",
      description: "Your level, your badges and how much you have played.",
    },
    about: {
      title: "About",
      description: "What Learn Piano Easy is, and the licenses of everything it ships.",
    },
    data: {
      title: "Your data",
      description: "Save everything you have in this browser to one file, and bring it back on any device.",
    },
    sponsor: {
      title: "Sponsor",
      description: "Learn Piano Easy is free and made by one person. Here is how you can help it grow.",
    },
    imprint: {
      title: "Legal notice",
      description: "Who runs Learn Piano Easy, with the address and the contact.",
    },
    privacy: {
      title: "Privacy policy",
      description: "What Learn Piano Easy keeps on your device, what it counts, and how to turn the counting off.",
    },
    design: {
      title: "Design system",
      description: "Every component of the site in every state.",
    },
    lesson: {
      title: "Lesson",
      description: "A short lesson of Learn Piano, one step at a time.",
    },
  } satisfies Record<RouteId, PageMeta>,
  /** A lesson page's own description, from its title, its world and its first step's text. */
  lessonPage: {
    description: (title: string, world: string, intro: string) => `${title}. A free piano lesson from “${world}”. ${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}, home`,
    nav: "Main",
    learn: "Learn Piano",
    play: "Just Play Piano",
    modes: "Play modes",
    menu: "Menu",
    language: "Language",
    theme: "Theme",
    themeSystem: "Like the system",
    themeLight: "Light",
    themeDark: "Dark",
  },
  /** The landing page, band by band. */
  landing: {
    hero: {
      eyebrow: "Free and open source",
      lead: "Watch the notes fall onto the keys, then play them yourself, one song at a time.",
      start: "Start learning",
      play: "Just play",
      /** What the site never asks of a visitor, as a short list under the actions. */
      proofs: ["No account", "Works offline", "No ads"],
      /** The mascot's picture, and what it says to the visitor. */
      mascot: "Our piano teacher, an ape with honey fur, plays an upright piano in a sunny room",
      greeting: "Hi, I'm your piano teacher. Shall we play?",
      /** The living piano under the hero's text. */
      demo: {
        eyebrow: "Try it here",
        heading: "The notes fall, and you play",
        text: "Every song looks like this. Each note falls onto its key, and you press the key as it lands.",
      },
      /** The picture of the player, before it starts. */
      piano: "The player, with the notes of Twinkle, Twinkle, Little Star falling onto its keys",
      hint: "Once it plays, press its keys to join in.",
      /** The play button, while the song is still and while it plays. */
      playSong: "Play it",
      stopSong: "Stop",
    },
    twoWays: {
      eyebrow: "Two ways to play",
      heading: "Learn step by step, or just play",
      lead: "Pick the part that fits your day. You can switch at any time.",
      learn: {
        tag: "Guided course",
        title: "Learn Piano",
        text: "A guided course of small steps. Each one teaches a skill, and a song puts it to use.",
        action: "Start learning",
        picture: "The course map, with its first lesson done and the next one open",
      },
      play: {
        tag: "Any song",
        title: "Just Play Piano",
        text: "Open any song, watch its notes fly towards a 3D piano, and play along.",
        action: "Just play",
        picture: "The 3D piano, with notes falling onto its keys",
      },
    },
    howItWorks: {
      eyebrow: "How learning works",
      heading: "Four steps, again and again",
      lead: "Every lesson follows the same short loop, so you always know what comes next.",
      steps: [
        { title: "Learn a skill", text: "A short lesson shows one new thing, such as a note, a rhythm or a hand position." },
        { title: "Practise it", text: "Play it on your own keyboard. The piano waits for you and marks each right note." },
        { title: "Play a real song", text: "Use the skill in a song from the library, at a level that fits you." },
        { title: "Earn badges", text: "Each lesson earns XP, and each world you finish earns a badge." },
      ],
    },
    rarities: {
      eyebrow: "One tune, four levels",
      heading: "Every song grows with you",
      lead: "Each song of ours comes in four versions. Switch between them and watch Ode to Joy grow.",
      /** The segmented control's accessible name. */
      control: "Version",
      piano: "A piano playing Ode to Joy",
      names: { common: "Beginner", rare: "Easy", epic: "Medium", legendary: "Hard" },
      taglines: {
        common: "Your first days. One hand position, slow notes and a bass that waits for you.",
        rare: "Your first weeks. Eighth notes, simple chords and a bass that moves.",
        epic: "Your first months. Broken chords, and a thumb that passes under.",
        legendary: "About a year in. Both hands busy, fast and independent.",
      },
    },
    devices: {
      eyebrow: "Play on what you have",
      heading: "No piano? Start anyway",
      lead: "Any of these plays the notes. A real keyboard feels best, and the others let you start today.",
      ways: [
        { title: "A MIDI keyboard", text: "Plug it in by USB and allow MIDI once. From then on, the site finds it by itself." },
        { title: "A touch screen", text: "Tap the keys on the screen, with as many fingers as you like." },
        { title: "Your computer keyboard", text: "The letter and number keys play two octaves, and you can move any note to another key." },
      ],
      /** The small piano's accessible name. */
      piano: "A small piano to try",
      /** The accessible name of the small piano's picture, a button that loads the piano. */
      start: "Load the small piano to play it",
      hint: "Touch a key to hear it.",
    },
    free: {
      eyebrow: "Free, and yours",
      heading: "Nothing to pay, nothing to sign",
      lead: "The site is a gift from someone who loves the piano. It stays free.",
      promises: [
        { title: "Free, with no account", text: "Open the site and play. There is no sign-up and nothing to buy." },
        { title: "Open source", text: "Every line of code is public under the MIT License. Read it, change it, share it." },
        { title: "Works offline", text: "Once loaded, the site runs without a network. Songs you have opened play offline too." },
        { title: "No ads, no profiles", text: "Nothing you play leaves your device. We only count page visits, without cookies, and sell nothing." },
      ],
    },
    questions: {
      eyebrow: "Questions",
      heading: "What people ask first",
      items: [
        {
          question: "Do I need a piano?",
          answer: "No. A MIDI keyboard is best, but a touch screen or your computer keyboard plays every note too.",
        },
        {
          question: "Which browsers work?",
          answer: "Any current browser plays. A MIDI keyboard needs Web MIDI, which Chrome, Edge and Firefox have and Safari lacks.",
        },
        {
          question: "Do I need an account?",
          answer: "No. There is nothing to sign up for, and your settings stay in this browser.",
        },
        {
          question: "Does it work offline?",
          answer: "Yes. Open the site once while online, and it runs offline from then on. A song plays offline once you have opened it.",
        },
        {
          question: "Can I play my own songs?",
          answer: "Yes. Open any MIDI or MusicXML file in Just Play Piano. It is read on your device and never uploaded.",
        },
        {
          question: "Which songs are in the library?",
          answer: "Our own arrangements of well-known tunes, each in four versions, a few pieces of our own, and classical pieces from open collections.",
        },
        {
          question: "Is it really free?",
          answer: "Yes. It is open source under the MIT License, with no ads and no paid tier.",
        },
      ],
    },
    lastCall: {
      heading: "Ready when you are",
      lead: "Pick a way in. You can switch at any time.",
    },
  },
  footer: {
    tagline: "Learn piano by playing. Free, open source and offline.",
    nav: "Site",
    /** The heading over the footer's links to the site's pages. */
    explore: "Explore",
    about: "About and licenses",
    /** The heading over the footer's links to the legal notice and the privacy policy. */
    legal: "Legal",
    language: "This page in",
    license: "Open source under the MIT License.",
  },
  counts: {
    badges: (n: number) => `${formatNumber("en", n)} ${plural("en", n, { one: "badge", other: "badges" })}`,
    minutesPlayed: (n: number) => `${formatNumber("en", n)} ${plural("en", n, { one: "minute", other: "minutes" })} played`,
    xp: (n: number) => `${formatNumber("en", n)} XP`,
  },
  /** A lesson of *Learn Piano*, at `learn/<world>/<lesson>/`. */
  lesson: learnLesson,
  /** The badges of *Learn Piano*: each one's name and what earns it. */
  badges: learnBadges,
  /** The map of *Learn Piano* at `learn/`, and the top bar's slot on its pages. */
  map: learnMap,
  /** The profile of *Learn Piano* at `learn/profile/`. */
  profile: learnProfile,
  /** The first-visit setup of *Learn Piano*, over the map. */
  setup: learnSetup,
  /** The Data page at `data/`, which saves and restores everything in this browser. */
  data: dataPage,
  /** The sponsor page at `sponsor/`, which the top bar's heart leads to. */
  sponsor: sponsorPage,
  /** The play modes at `modes/`, and the player's toast that applies one. */
  playModes,
  /** The player at `play/`, which reads them through `src/i18n/live.ts`. */
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  /** The parts that several pages share. */
  ui: {
    /** The 3D piano of a lesson, the setup and the gallery, from `src/render/piano-keys.ts`. */
    pianoKeys: {
      noWebgl: "This browser cannot draw the piano. Turn on hardware acceleration in its settings, or play on your MIDI or computer keyboard.",
    },
  },
};

/** A locale's catalog: the shape of the English one. */
export type Messages = typeof en;
