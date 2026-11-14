/** *Eighth notes* in French. */
import type { Translation } from "../../../i18n/translation";
import type { EighthNotesTexts } from "./eighth-notes.en";

export const eighthNotesFr: Translation<EighthNotesTexts> = {
  title: "Les croches",
  steps: {
    "eighth-demo": {
      text: "Regarde et écoute. D’abord, le do central sonne une fois par temps. Puis il sonne deux fois par temps.",
    },
    "what-an-eighth-note-is": {
      text: "Les notes rapides étaient des croches. Une croche dure un demi-temps. Donc deux croches remplissent un temps.",
    },
    "eighths-per-beat-quiz": {
      text: "Combien de croches remplissent un temps ?",
      answers: ["Une", "Deux", "Quatre"],
    },
    "count-and": {
      text: "Pour compter les croches, dis « et » entre les temps : « 1 et 2 et 3 et 4 et ». Les chiffres tombent sur les temps, et chaque « et » tombe au milieu, entre deux temps.",
    },
    "counting-demo": {
      text: "Compte avec la musique : « 1, 2, 3 et, 4 ». Les deux mi rapides tombent sur « 3 » et sur son « et ».",
    },
    "eighth-taps": {
      text: "La pulsation est lente maintenant, à 60 pulsations par minute, et les clics vont deux fois plus vite. Chaque clic est une croche. Compte « 1 et 2 et » et appuie sur une touche au choix à chaque clic.",
    },
    "eighths-per-bar-quiz": {
      text: "Une mesure a quatre temps. Combien de croches la remplissent ?",
      answers: ["Quatre croches", "Six croches", "Huit croches"],
    },
    "phrase-demo": {
      text: "Maintenant, les deux mains jouent. La main gauche tient un do grave, pendant que la main droite monte jusqu’au sol en croches. Puis elle redescend jusqu’au do.",
    },
    "eighth-phrase": {
      text: "Pose les deux mains en position de do. La main droite joue do ré mi fa sol sol fa mi ré do, en partant du do central. L’auriculaire gauche joue le do sous le do central avec le premier do, et de nouveau avec le second sol.",
    },
    recap: {
      text: "Bravo. Tes notes peuvent maintenant aller deux fois plus vite.",
      points: ["Une croche dure un demi-temps.", "Deux croches remplissent un temps.", "On compte les croches « 1 et 2 et »."],
    },
  },
};
