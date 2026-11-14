/** *Staccato* in French. */
import type { Translation } from "../../../i18n/translation";
import type { StaccatoTexts } from "./staccato.en";

export const staccatoFr: Translation<StaccatoTexts> = {
  title: "Le staccato",
  steps: {
    "staccato-demo": {
      text: "Écoute la montée de do à sol, puis la descente. Chaque note est courte, suivie d’un petit silence.",
    },
    "short-and-detached": {
      text: "Jouer court et détaché s’appelle staccato. Chaque note est séparée des autres, comme des gouttes de pluie qui tapent sur une vitre.",
    },
    "what-staccato-means": {
      text: "Que veut dire staccato ?",
      answers: ["Court et détaché", "Fluide et lié", "Lent et doux", "De plus en plus fort"],
    },
    "the-dot": {
      text: "Un petit point au-dessus ou au-dessous d’une tête de note demande un staccato. Le point d’une note pointée se place à côté de la tête et rend la note plus longue.",
    },
    "where-the-dot-sits": {
      text: "Où se place le point de staccato ?",
      answers: ["À côté de la tête de note, à droite", "À la fin de la mesure", "Au-dessus ou au-dessous de la tête de note", "En haut de la hampe"],
    },
    bounce: {
      text: "Pour le staccato, rebondis sur la touche comme une balle sur le sol. Joue léger, avec le poignet, et laisse la touche remonter aussitôt.",
    },
    "both-hands-bounce": {
      text: "Joue do, mi, sol, mi, do à deux mains ensemble, la main droite à partir du do central et la main gauche une octave plus bas. Rebondis sur chaque note.",
    },
    "contrast-demo": {
      text: "Écoute deux fois les mêmes cinq notes. Une fois, elles sont legato, l’autre fois staccato.",
    },
    "which-came-first": {
      text: "Comment les deux phrases ont-elles sonné ?",
      answers: ["Toutes les deux courtes", "D’abord liée, puis courte", "D’abord courte, puis liée", "Toutes les deux liées"],
    },
    "mixing-both": {
      text: "Souvent, la musique mélange les deux. Une liaison relie certaines notes, et des points en rendent d’autres courtes.",
    },
    "mixed-phrase": {
      text: "Joue do, ré, mi, fa et sol legato sous une liaison, en partant du do central. Puis joue encore trois sol courts, en rebondissant.",
    },
    "dot-above-quiz": {
      text: "Une note a un petit point au-dessus. Comment la joues-tu ?",
      answers: ["Liée à la note suivante", "Deux fois plus longue", "Tenue avec la pédale", "Courte, en rebondissant sur la touche"],
    },
    "bounced-chords": {
      text: "Joue des accords en rebondissant, à la main droite, à partir du do central : do majeur deux fois, puis fa majeur en do-fa-la, sol majeur en si-ré-sol et de nouveau do majeur.",
    },
    "which-lets-go-early": {
      text: "Dans quel cas le doigt quitte-t-il la touche bien avant la note suivante ?",
      answers: ["Le staccato", "Le legato", "Sous une liaison", "Sur une ronde"],
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer court et détaché.",
      points: [
        "Staccato veut dire court et détaché.",
        "Un point au-dessus ou au-dessous de la tête de note l’indique.",
        "Rebondis légèrement sur la touche, avec le poignet.",
        "Le legato relie les notes, et le staccato les sépare.",
      ],
    },
  },
};
