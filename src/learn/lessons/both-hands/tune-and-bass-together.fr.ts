/** *Tune and bass together* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TuneAndBassTogetherTexts } from "./tune-and-bass-together.en";

export const tuneAndBassTogetherFr: Translation<TuneAndBassTogetherTexts> = {
  title: "Mélodie et basse ensemble",
  steps: {
    "whole-tune": {
      text: "Écoute une courte mélodie de quatre mesures. La main droite joue la mélodie, et la main gauche ajoute une note grave dans chaque mesure.",
    },
    "two-layers": {
      text: "La mélodie avance à chaque temps. La basse n’entre que sur le premier temps, et elle sonne sous la mélodie pendant toute la mesure.",
    },
    "tune-alone": {
      text: "D’abord la mélodie seule, en position de do. Joue do ré mi fa, sol fa mi ré, ré mi fa ré, et termine sur le do central.",
    },
    "bass-beat-quiz": {
      text: "Sur quel temps de chaque mesure la note de basse entre-t-elle ?",
      answers: ["Sur le 1er temps", "Sur le 3e temps", "Sur chaque temps"],
    },
    "bass-demo": {
      text: "Maintenant, écoute la basse seule. Chaque note dure toute une mesure : do, puis deux fois sol, puis de nouveau do.",
    },
    "bass-alone": {
      text: "Joue la basse de la main gauche, en position de do. L’auriculaire joue do, et le pouce joue sol.",
    },
    "press-together": {
      text: "Sur le premier temps, les deux mains jouent leurs touches au même moment. Ensuite, la main gauche tient sa note pendant que la main droite continue.",
    },
    "first-half": {
      text: "Joue les deux premières mesures à deux mains. Joue la basse et la première note de la mélodie ensemble.",
    },
    "held-bass-quiz": {
      text: "Dans la mesure 2, la main droite joue sol fa mi ré. Que fait la main gauche pendant ce temps ?",
      answers: ["Elle joue sol fa mi ré une octave plus bas", "Elle tient son sol", "Elle quitte les touches et se repose"],
    },
    "whole-tune-together": {
      text: "Maintenant, toute la mélodie à deux mains. Ne te presse pas sur chaque premier temps, là où les deux mains jouent.",
    },
    recap: {
      text: "Bravo. Tu as joué une mélodie avec sa basse.",
      points: [
        "Apprends d’abord la mélodie seule, puis la basse seule, puis joue-les ensemble.",
        "La basse entre sur le premier temps, en même temps que la note de la mélodie.",
        "La main gauche tient la basse pendant que la main droite continue.",
      ],
    },
  },
};
