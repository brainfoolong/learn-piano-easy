/** *Welcome to the piano* in French. */
import type { Translation } from "../../../i18n/translation";
import type { WelcomeTexts } from "./welcome.en";

export const welcomeFr: Translation<WelcomeTexts> = {
  title: "Bienvenue au piano",
  steps: {
    hello: {
      text: "Bienvenue ! Ici, tu apprends le piano petit à petit. Chaque leçon présente une seule idée, et tu l’essaies tout de suite.",
    },
    "sound-check": {
      text: "D’abord, on vérifie le son. Le piano joue quatre notes. Si tu n’entends rien, monte le volume et appuie sur Réécouter.",
    },
    "ways-to-play": {
      text: "Tu peux jouer chaque leçon sur les touches à l’écran, sur le clavier de l’ordinateur ou sur un clavier MIDI. Pour un clavier MIDI, branche-le, puis appuie une fois sur Connecter les appareils MIDI dans les paramètres du lecteur.",
    },
    "ways-quiz": {
      text: "Sur quoi peux-tu jouer une leçon ?",
      answers: [
        "Seulement sur un clavier MIDI",
        "Seulement sur les touches à l’écran",
        "Sur les trois : l’écran, le clavier de l’ordinateur ou un clavier MIDI",
      ],
    },
    "first-key": {
      text: "Ta première note ! Joue la touche indiquée.",
    },
    "three-keys": {
      text: "Maintenant, trois touches à la suite. Joue chaque touche indiquée, de gauche à droite.",
    },
    recap: {
      text: "Bravo. Tu as joué tes premières notes.",
      points: [
        "Le test du son montre que tu entends bien le piano.",
        "Tu peux jouer à l’écran, sur le clavier de l’ordinateur ou sur un clavier MIDI.",
        "La touche indiquée est toujours la prochaine à jouer.",
      ],
    },
  },
};
