/** *Slowing down* in French. */
import type { Translation } from "../../../i18n/translation";
import type { SlowingDownTexts } from "./slowing-down.en";

export const slowingDownFr: Translation<SlowingDownTexts> = {
  title: "Ralentir",
  steps: {
    "slowing-demo": {
      text: "Écoute cette phrase. Elle monte à une allure régulière. En redescendant, chaque note dure un peu plus longtemps.",
    },
    "what-ritardando-is": {
      text: "La musique a ralenti exprès. L’indication rit., abréviation de ritardando, te demande de ralentir peu à peu. On la trouve souvent à la fin d’un morceau.",
    },
    "rit-means": {
      text: "Tu vois rit. au-dessus de quelques mesures. Que fais-tu ?",
      answers: ["Ralentir peu à peu", "Jouer plus fort", "S’arrêter d’un coup", "Accélérer"],
    },
    "steady-tap": {
      text: "Un ralentissement n’a de sens qu’après une pulsation régulière. Tape la pulsation avec les clics, pile en même temps qu’eux.",
    },
    "play-the-ending": {
      text: "Joue la fin de la phrase : sol, fa, mi, ré et do, à partir du sol au-dessus du do central. Prends un peu plus de temps sur chaque note, et attarde-toi sur le dernier do.",
    },
    "what-a-fermata-is": {
      text: "Ce signe ressemble à un œil : une courbe avec un point dessous. C’est un point d’orgue, le signe qui suspend la musique. La note en dessous est tenue plus longtemps que ce qui est écrit.",
    },
    "fermata-demo": {
      text: "Écoute le point d’orgue au-dessus du sol. La pulsation s’arrête pendant que le sol sonne, puis la musique reprend.",
    },
    "fermata-means": {
      text: "Un point d’orgue est placé au-dessus d’une note. Que demande-t-il ?",
      answers: ["La jouer courte", "La jouer plus fort", "Ne pas la jouer", "La tenir plus longtemps que ce qui est écrit"],
    },
    "back-in-tempo": {
      text: "Après un rit., les mots a tempo ramènent la vitesse d’avant. En italien, ils veulent dire « au tempo ».",
    },
    "a-tempo-demo": {
      text: "Écoute. La phrase ralentit au milieu, puis a tempo ramène sa première vitesse.",
    },
    "a-tempo-means": {
      text: "Tu as ralenti pour un rit. Maintenant, tu vois a tempo. Que fais-tu ?",
      answers: ["Ralentir encore plus", "Revenir à la première vitesse", "Tenir la note suivante", "Jouer doux"],
    },
    "where-rit-goes": {
      text: "Où trouve-t-on rit. le plus souvent ?",
      answers: ["Sur la toute première note", "Dans chaque mesure", "Vers la fin d’un morceau", "Seulement à la main gauche"],
    },
    "ending-with-fermata": {
      text: "Joue mi, ré, do, ré, mi, mi à partir du mi au-dessus du do central, en ralentissant peu à peu. Termine sur un accord : à la main gauche, le do sous le do central et le sol au-dessus, et à la main droite, un mi de plus. Laisse l’accord sonner un peu plus longtemps, comme le demande un point d’orgue.",
    },
    "rall-means": {
      text: "Sur certaines partitions, on trouve plutôt rall., abréviation de rallentando. Quelle indication veut dire la même chose ?",
      answers: ["rit.", "a tempo", "Le point d’orgue", "mf"],
    },
    recap: {
      text: "Bravo. Tu sais changer le tempo exprès.",
      points: [
        "rit. et rall. font ralentir peu à peu, le plus souvent à la fin.",
        "Un point d’orgue fait tenir sa note plus longtemps que ce qui est écrit.",
        "a tempo ramène la première vitesse.",
      ],
    },
  },
};
