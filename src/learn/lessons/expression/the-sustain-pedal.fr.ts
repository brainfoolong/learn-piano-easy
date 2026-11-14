/** *The sustain pedal* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheSustainPedalTexts } from "./the-sustain-pedal.en";

export const theSustainPedalFr: Translation<TheSustainPedalTexts> = {
  title: "La pédale forte",
  steps: {
    "pedal-demo": {
      text: "Écoute do, mi, sol et do joués deux fois. La première fois, chaque note s’arrête quand sa touche remonte. La deuxième fois, elles continuent toutes de sonner ensemble.",
    },
    "what-the-pedal-does": {
      text: "La pédale de droite est la pédale forte. Tant qu’elle est enfoncée, chaque note continue de sonner après que tu as lâché sa touche.",
    },
    "pedal-keeps": {
      text: "Que fait la pédale de droite ?",
      answers: ["Elle rend chaque note plus forte", "Elle rend les notes plus courtes", "Elle fait durer les notes après que tu as lâché les touches", "Elle monte les touches d’une octave"],
    },
    "foot-on-pedal": {
      text: "Utilise le pied droit. Garde le talon au sol et appuie sur la pédale avec l’avant du pied. Relève-la de la même façon, en douceur.",
    },
    "which-foot": {
      text: "Comment le pied se place-t-il sur la pédale forte ?",
      answers: ["Pied gauche, talon en l’air", "Pied droit, orteils hors de la pédale", "Pied gauche, talon au sol", "Pied droit, talon au sol"],
    },
    "pedal-down-c": {
      text: "Appuie sur la pédale de droite et garde-la enfoncée. À la main gauche, joue le do sous le do central, puis mi, puis sol. Relâche chaque touche.",
    },
    "hear-pedal-hold": {
      text: "Écoute do, mi et sol joués l’un après l’autre avec la pédale enfoncée. Chaque note continue de sonner pendant que la suivante commence.",
    },
    "what-pedal-did": {
      text: "Dans la démonstration, chaque note continuait de sonner après le début de la suivante. Qu’est-ce qui les faisait durer ?",
      answers: ["La pédale forte", "Enfoncer les touches plus fort", "Jouer les notes plus vite", "La main droite"],
    },
    "pedal-marks": {
      text: "Sous la portée, Ped. veut dire « appuie sur la pédale », et une étoile veut dire « relève-la ». Certaines partitions dessinent plutôt un crochet, de l’appui jusqu’au relâchement.",
    },
    "star-means": {
      text: "Sous la portée, tu vois une étoile. Que dit-elle à ton pied ?",
      answers: ["Appuyer sur la pédale", "Relever la pédale", "Appuyer deux fois sur la pédale", "Garder la pédale enfoncée jusqu’à la fin"],
    },
    "chords-without-pedal": {
      text: "Apprends d’abord quatre accords brisés à la main gauche, sans la pédale. Commence sur le do sous le do central : do-mi-sol, puis do-fa-la, puis si-ré-sol, puis de nouveau do-mi-sol.",
    },
    "chords-blur": {
      text: "Si la pédale reste enfoncée d’un accord au suivant, les deux accords sonnent ensemble et se brouillent. Alors change de pédale à chaque nouvel accord.",
    },
    "change-the-pedal": {
      text: "Joue les mêmes accords. Avant chaque accord, relève la pédale et joue sa première note. Puis appuie sur la pédale et joue ses deux autres notes.",
    },
    "hear-pedal-change": {
      text: "Écoute les quatre accords avec un changement de pédale sur chacun. Chaque accord continue de sonner, puis s’arrête net quand le suivant commence.",
    },
    "why-change": {
      text: "Pourquoi changes-tu de pédale à chaque nouvel accord ?",
      answers: ["Pour jouer plus fort", "Pour reposer le pied", "Pour que les accords ne se brouillent pas", "Pour que les notes sonnent plus court"],
    },
    recap: {
      text: "Bravo. Maintenant, ton pied droit joue aussi.",
      points: [
        "La pédale de droite fait durer les notes après que tu as lâché les touches.",
        "Appuie dessus avec le pied droit, talon au sol.",
        "Ped. veut dire « appuie sur la pédale », et une étoile veut dire « relève-la ».",
        "Change de pédale à chaque nouvel accord pour que les accords ne se brouillent pas.",
      ],
    },
  },
};
