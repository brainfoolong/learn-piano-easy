/** The French catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.fr";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.fr";
import { learnLesson } from "./learn-lesson.fr";
import { learnMap } from "./learn-map.fr";
import { learnProfile } from "./learn-profile.fr";
import { learnSetup } from "./learn-setup.fr";
import { playerBar } from "./player-bar.fr";
import { playerInput } from "./player-input.fr";
import { playerLibrary } from "./player-library.fr";
import { playerSettings } from "./player-settings.fr";
import { playerShell } from "./player-shell.fr";
import { playModes } from "./play-modes.fr";
import { sponsorPage } from "./sponsor.fr";

const SITE_NAME = en.siteName;

export const fr: Translation<Messages> = {
  noscript: `${SITE_NAME} a besoin de JavaScript pour fonctionner.`,
  pages: {
    home: {
      description:
        "Apprends le piano en jouant. Un cours guidé, un piano 3D et ton clavier MIDI. Gratuit, open source et utilisable hors ligne.",
    },
    play: {
      title: "Jouer librement",
      description: "Ouvre un fichier MIDI, regarde ses notes voler vers un piano 3D et joue en même temps sur ton clavier MIDI.",
    },
    modes: {
      title: "Modes de jeu",
      description:
        "Des façons de jouer toutes prêtes : un jeu avec des points et des étincelles, ou un morceau qui t’attend et nomme chaque note.",
    },
    learn: {
      title: "Apprendre le piano",
      description: "Un cours de piano guidé, conçu comme un jeu, à petits pas.",
    },
    profile: {
      title: "Ta progression",
      description: "Ton niveau, tes badges et le temps que tu as passé à jouer.",
    },
    about: {
      title: "À propos",
      description: "Ce qu’est Learn Piano Easy, et les licences de tout ce qu’il contient.",
    },
    data: {
      title: "Tes données",
      description: "Sauvegarde tout ce que contient ce navigateur dans un seul fichier, et récupère-le sur n’importe quel appareil.",
    },
    sponsor: {
      title: "Soutenir",
      description: "Learn Piano Easy est gratuit et créé par une seule personne. Voici comment tu peux l’aider à grandir.",
    },
    imprint: {
      title: "Mentions légales",
      description: "Qui gère Learn Piano Easy, avec l’adresse et le contact.",
    },
    privacy: {
      title: "Politique de confidentialité",
      description: "Ce que Learn Piano Easy garde sur ton appareil, ce qu’il compte, et comment désactiver ce comptage.",
    },
    design: {
      title: "Système de design",
      description: "Chaque composant du site dans chaque état.",
    },
    lesson: {
      title: "Leçon",
      description: "Une courte leçon du cours « Apprendre le piano », étape par étape.",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) =>
      `${title}. Une leçon de piano gratuite du monde « ${world} ». ${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}, accueil`,
    nav: "Navigation principale",
    learn: "Apprendre le piano",
    play: "Jouer librement",
    modes: "Modes de jeu",
    menu: "Menu",
    language: "Langue",
    theme: "Thème",
    themeSystem: "Comme le système",
    themeLight: "Clair",
    themeDark: "Sombre",
  },
  landing: {
    hero: {
      eyebrow: "Gratuit et open source",
      lead: "Regarde les notes tomber sur les touches, puis joue-les toi-même, un morceau après l’autre.",
      start: "Commencer le cours",
      play: "Jouer librement",
      proofs: ["Sans inscription", "Fonctionne hors ligne", "Sans publicité"],
      mascot: "Un singe au pelage couleur miel, qui t’apprend le piano, joue sur un piano droit dans une pièce ensoleillée",
      greeting: "Salut ! Je vais t’apprendre le piano. On commence ?",
      demo: {
        eyebrow: "Essaie ici",
        heading: "Les notes tombent, et tu joues",
        text: "Chaque morceau ressemble à ça. Chaque note tombe sur sa touche, et tu joues la touche au moment où la note arrive.",
      },
      piano: "Le lecteur, avec les notes de « Ah ! vous dirai-je, maman » qui tombent sur ses touches",
      hint: "Une fois la lecture lancée, joue ses touches pour suivre le morceau.",
      playSong: "Lire",
      stopSong: "Arrêter",
    },
    twoWays: {
      eyebrow: "Deux façons de jouer",
      heading: "Apprends pas à pas, ou joue librement",
      lead: "Choisis ce qui te convient aujourd’hui. Tu peux changer à tout moment.",
      learn: {
        tag: "Cours guidé",
        title: "Apprendre le piano",
        text: "Un cours guidé, fait de petites étapes. Chacune enseigne une technique, et un morceau la met en pratique.",
        action: "Commencer le cours",
        picture: "La carte du cours, avec la première leçon terminée et la suivante ouverte",
      },
      play: {
        tag: "Tous les morceaux",
        title: "Jouer librement",
        text: "Ouvre n’importe quel morceau, regarde ses notes voler vers un piano 3D, et joue en même temps.",
        action: "Jouer librement",
        picture: "Le piano 3D, avec des notes qui tombent sur ses touches",
      },
    },
    howItWorks: {
      eyebrow: "Comment on apprend",
      heading: "Quatre étapes, encore et encore",
      lead: "Chaque leçon suit la même petite boucle. Tu sais donc toujours ce qui vient ensuite.",
      steps: [
        {
          title: "Apprendre une technique",
          text: "Une courte leçon montre une seule nouveauté, comme une note, un rythme ou une position de la main.",
        },
        { title: "S’exercer", text: "Entraîne-toi sur ton propre clavier. Le piano t’attend et marque chaque note juste." },
        { title: "Jouer un vrai morceau", text: "Utilise la technique dans un morceau de la bibliothèque, à un niveau qui te convient." },
        { title: "Gagner des badges", text: "Chaque leçon rapporte des XP, et chaque monde terminé rapporte un badge." },
      ],
    },
    rarities: {
      eyebrow: "Une mélodie, quatre niveaux",
      heading: "Chaque morceau grandit avec toi",
      lead: "Chacun de nos morceaux existe en quatre versions. Passe de l’une à l’autre et regarde grandir l’« Hymne à la joie ».",
      control: "Version",
      piano: "Un piano qui joue l’« Hymne à la joie »",
      names: { common: "Débutant", rare: "Facile", epic: "Moyen", legendary: "Difficile" },
      taglines: {
        common: "Tes premiers jours. Une seule position de la main, des notes lentes et une basse qui t’attend.",
        rare: "Tes premières semaines. Des croches, des accords simples et une basse qui bouge.",
        epic: "Tes premiers mois. Des accords brisés, et le passage du pouce.",
        legendary: "Après environ un an. Les deux mains occupées, rapides et indépendantes.",
      },
    },
    devices: {
      eyebrow: "Joue sur ce que tu as",
      heading: "Pas de piano ? Commence quand même",
      lead: "Chacun de ces moyens joue les notes. Un vrai clavier est le plus agréable, et les autres te permettent de commencer dès aujourd’hui.",
      ways: [
        { title: "Un clavier MIDI", text: "Branche-le en USB et autorise MIDI une fois. Ensuite, le site le trouve tout seul." },
        { title: "Un écran tactile", text: "Appuie sur les touches à l’écran, avec autant de doigts que tu veux." },
        {
          title: "Le clavier de ton ordinateur",
          text: "Les touches des lettres et des chiffres jouent deux octaves, et tu peux déplacer n’importe quelle note sur une autre touche.",
        },
      ],
      piano: "Un petit piano pour essayer",
      start: "Charger le petit piano pour en jouer",
      hint: "Joue une touche pour l’entendre.",
    },
    free: {
      eyebrow: "Gratuit, et à toi",
      heading: "Rien à payer, rien à signer",
      lead: "Ce site est un cadeau de quelqu’un qui aime le piano. Il reste gratuit.",
      promises: [
        { title: "Gratuit, sans inscription", text: "Ouvre le site et joue. Pas d’inscription, et rien à acheter." },
        {
          title: "Open source",
          text: "Chaque ligne de code est publique, sous licence MIT. Lis le code, modifie-le, partage-le.",
        },
        {
          title: "Fonctionne hors ligne",
          text: "Une fois chargé, le site fonctionne sans réseau. Les morceaux que tu as déjà ouverts se lisent aussi hors ligne.",
        },
        {
          title: "Ni publicité, ni profil",
          text: "Rien de ce que tu joues ne quitte ton appareil. Nous comptons seulement les visites de pages, sans cookies, et ne vendons rien.",
        },
      ],
    },
    questions: {
      eyebrow: "Questions",
      heading: "Ce qu’on demande en premier",
      items: [
        {
          question: "Faut-il un piano ?",
          answer: "Non. Un clavier MIDI est l’idéal, mais un écran tactile ou le clavier de ton ordinateur jouent aussi toutes les notes.",
        },
        {
          question: "Quels navigateurs sont compatibles ?",
          answer:
            "Tout navigateur récent permet de jouer. Un clavier MIDI a besoin de Web MIDI, que Chrome, Edge et Firefox prennent en charge, mais pas Safari.",
        },
        {
          question: "Faut-il un compte ?",
          answer: "Non. Il n’y a aucune inscription, et tes paramètres restent dans ce navigateur.",
        },
        {
          question: "Le site fonctionne-t-il hors ligne ?",
          answer:
            "Oui. Ouvre le site une fois en ligne, et il fonctionne ensuite hors ligne. Un morceau se lit hors ligne dès que tu l’as ouvert une fois.",
        },
        {
          question: "Puis-je jouer mes propres morceaux ?",
          answer:
            "Oui. Ouvre n’importe quel fichier MIDI ou MusicXML dans « Jouer librement ». Il est lu sur ton appareil et n’est jamais envoyé en ligne.",
        },
        {
          question: "Quels morceaux contient la bibliothèque ?",
          answer:
            "Nos propres arrangements d’airs connus, chacun en quatre versions, quelques morceaux de notre création et des morceaux classiques issus de collections libres.",
        },
        {
          question: "Est-ce vraiment gratuit ?",
          answer: "Oui. C’est open source sous licence MIT, sans publicité et sans version payante.",
        },
      ],
    },
    lastCall: {
      heading: "Quand tu veux",
      lead: "Choisis par où commencer. Tu peux changer à tout moment.",
    },
  },
  footer: {
    tagline: "Apprends le piano en jouant. Gratuit, open source et utilisable hors ligne.",
    nav: "Site",
    explore: "Explorer",
    about: "À propos et licences",
    legal: "Informations légales",
    language: "Cette page en",
    license: "Open source sous licence MIT.",
  },
  counts: {
    badges: (n: number) =>
      `${formatNumber("fr", n)} ${plural("fr", n, { one: "badge", many: "de badges", other: "badges" })}`,
    minutesPlayed: (n: number) =>
      `${formatNumber("fr", n)} ${plural("fr", n, { one: "minute", many: "de minutes", other: "minutes" })} de jeu`,
    xp: (n: number) => `${formatNumber("fr", n)} XP`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl:
        "Ce navigateur ne peut pas afficher le piano. Active l’accélération matérielle dans ses paramètres, ou joue sur ton clavier MIDI ou le clavier de l’ordinateur.",
    },
  },
};
