/** *Loud and soft* in French. */
import type { Translation } from "../../../i18n/translation";
import type { LoudAndSoftTexts } from "./loud-and-soft.en";

export const loudAndSoftFr: Translation<LoudAndSoftTexts> = {
  title: "Fort et doux",
  steps: {
    "soft-and-loud-demo": {
      text: "Écoute do, ré, mi, fa et sol joués deux fois. La première fois, le son est doux. La deuxième fois, il est fort.",
    },
    "key-speed": {
      text: "La force d’une note dépend de la vitesse à laquelle sa touche s’enfonce. Une touche enfoncée lentement et en douceur sonne doux. Une touche enfoncée vite sonne fort.",
    },
    "what-makes-loud": {
      text: "Qu’est-ce qui fait sonner une note plus fort ?",
      answers: ["Tenir la touche plus longtemps", "Enfoncer une touche plus à gauche", "Enfoncer la touche plus vite", "Enfoncer une touche noire"],
    },
    "play-softly": {
      text: "Joue do, ré, mi, fa et sol avec un son doux, en partant du do central. Enfonce chaque touche lentement et en douceur.",
    },
    "hear-softly": {
      text: "Écoute do, ré, mi, fa et sol joués avec un son doux. Chaque touche s’est enfoncée lentement et en douceur.",
    },
    "how-softly-sounded": {
      text: "Comment ces cinq notes ont-elles sonné ?",
      answers: ["Doux", "Fort", "Doux, puis fort", "Fort, puis doux"],
    },
    "play-loudly": {
      text: "Maintenant, joue les mêmes cinq notes avec un son fort. Enfonce chaque touche vite et franchement, mais ne la frappe jamais brutalement.",
    },
    "hear-loudly": {
      text: "Écoute do, ré, mi, fa et sol joués avec un son fort. Chaque touche s’est enfoncée vite et franchement.",
    },
    "how-loudly-sounded": {
      text: "Comment ces cinq notes ont-elles sonné ?",
      answers: ["Doux", "Doux, puis fort", "Fort, puis doux", "Fort"],
    },
    "piano-and-forte": {
      text: "Sur la partition, des lettres sous la portée indiquent la force du jeu. L’indication p veut dire piano, « doux » en italien. L’indication f veut dire forte, « fort » en italien.",
    },
    "what-f-asks": {
      text: "Tu vois l’indication f sous la portée. Que te demande-t-elle ?",
      answers: ["Jouer doux", "Jouer fort", "Jouer vite", "Jouer lentement"],
    },
    "mezzo-marks": {
      text: "Deux indications se placent entre les deux. L’indication mp veut dire mezzo-piano, un peu doux, et mf veut dire mezzo-forte, un peu fort.",
    },
    "softest-to-loudest": {
      text: "Quel ordre va de l’indication la plus douce à la plus forte ?",
      answers: ["f, mf, mp, p", "mp, p, mf, f", "p, mp, mf, f", "p, f, mp, mf"],
    },
    "echo-demo": {
      text: "Écoute une phrase marquée f, puis son écho marqué p. Les notes sont les mêmes, et seule la force change.",
    },
    "play-the-echo": {
      text: "Joue do, mi et sol avec un son fort, puis rejoue-les avec un son doux, comme un écho. Cette étape vérifie les notes, alors laisse ton oreille juger la force.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer fort et doux.",
      points: [
        "La vitesse à laquelle une touche s’enfonce règle la force du son.",
        "L’indication p veut dire doux, et f veut dire fort.",
        "Les indications mp et mf se placent entre les deux.",
      ],
    },
  },
};
