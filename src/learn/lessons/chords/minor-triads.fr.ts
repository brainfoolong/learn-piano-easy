/** *Minor triads* in French. */
import type { Translation } from "../../../i18n/translation";
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsFr: Translation<MinorTriadsTexts> = {
  title: "Les accords parfaits mineurs",
  steps: {
    "major-then-minor": {
      text: "Écoute deux accords sur do. Le premier est do majeur et sonne clair. Le second est do mineur et sonne plus sombre.",
    },
    "thirds-swap": {
      text: "Dans un accord parfait majeur, la tierce du bas est une tierce majeure : quatre demi-tons. Celle du haut est une tierce mineure. Un accord parfait mineur les inverse, et la tierce mineure vient en premier.",
    },
    "minor-third-size": {
      text: "Une tierce majeure fait quatre demi-tons. Combien de demi-tons fait une tierce mineure ?",
      answers: ["Quatre", "Trois", "Deux"],
    },
    "lower-the-middle": {
      text: "Un seul geste suffit donc pour rendre mineur un accord majeur. Baisse sa note du milieu d’un demi-ton. Do, mi et sol deviennent do, mi bémol et sol.",
    },
    "find-e-flat": {
      text: "Trouve mi bémol sur le clavier. C’est la touche noire juste à gauche de mi.",
    },
    "c-major-to-minor": {
      text: "À toi. Joue do majeur avec les doigts 1, 3 et 5 depuis le do central. Puis glisse le doigt 3 vers mi bémol pour do mineur, et joue les deux accords deux fois.",
    },
    "hear-the-middle-drop": {
      text: "Entre majeur et mineur, seule la note du milieu bouge d’un demi-ton. Le deuxième son est-il plus aigu, plus grave ou pareil ?",
    },
    "white-key-minors": {
      text: "Trois accords parfaits mineurs n’utilisent que des touches blanches. La mineur, c’est la-do-mi. Ré mineur, c’est ré-fa-la, et mi mineur, mi-sol-si.",
    },
    "a-minor": {
      text: "Pose le pouce droit sur le la sous le do central. Joue la mineur deux fois : la, do et mi ensemble.",
    },
    "d-and-e-minor": {
      text: "Maintenant, déplace la main. Joue ré mineur depuis le ré au-dessus du do central, puis mi mineur une touche blanche plus haut, puis de nouveau ré mineur.",
    },
    "g-major-to-minor": {
      text: "Sol majeur, c’est sol, si et ré. Quelle note baisses-tu pour jouer sol mineur ?",
      answers: ["Si", "Sol", "Ré"],
    },
    "major-minor-pairs": {
      text: "Joue ré majeur avec fa dièse, puis ré mineur avec fa. Ensuite, joue sol majeur avec si, et sol mineur avec si bémol.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer des accords parfaits majeurs et mineurs.",
      points: [
        "Un accord parfait mineur empile une tierce mineure, puis une tierce majeure.",
        "Baisse la note du milieu d’un accord majeur pour le rendre mineur.",
        "Le majeur sonne clair, et le mineur plus sombre.",
        "La mineur, ré mineur et mi mineur n’utilisent que des touches blanches.",
      ],
    },
  },
};
