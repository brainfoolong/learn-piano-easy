/** *Sharps* in French. */
import type { Translation } from "../../../i18n/translation";
import type { SharpsTexts } from "./sharps.en";

export const sharpsFr: Translation<SharpsTexts> = {
  title: "Les dièses",
  steps: {
    "raised-by-a-half-step": {
      text: "Écoute : do, puis la touche noire juste à sa droite. Puis fa, et la touche noire juste à droite de fa.",
    },
    "the-sharp-sign": {
      text: "Ce signe ♯ est un dièse. Il hausse une note d’un demi-ton, jusqu’à la touche juste à sa droite. Do dièse est donc la touche noire à droite de do.",
    },
    "find-c-sharp": {
      text: "Trouve do dièse. Pars de n’importe quel do et monte d’un demi-ton.",
    },
    "find-f-sharp": {
      text: "Maintenant, trouve fa dièse. C’est la première touche noire du groupe de trois.",
    },
    "where-is-g-sharp": {
      text: "Où se trouve sol dièse ?",
      answers: ["La touche noire juste à gauche de sol", "La touche noire juste à droite de sol", "La touche blanche du la"],
    },
    "e-sharp": {
      text: "Il n’y a pas de touche noire à droite de mi. Un demi-ton au-dessus de mi, on arrive sur fa. Mi dièse est donc fa, et si dièse est do.",
    },
    "e-sharp-is": {
      text: "Quelle touche joues-tu pour mi dièse ?",
      answers: ["Fa", "Mi", "Fa dièse"],
    },
    "sharp-on-the-staff": {
      text: "Sur la portée, le ♯ se place juste à gauche de la note, sur la même ligne ou dans le même interligne. Tu lis la note, puis tu montes d’un demi-ton.",
    },
    "play-sharps": {
      text: "Lis chaque note avec son dièse et joue-la. Trouve d’abord la touche blanche, puis monte d’un demi-ton.",
    },
    "through-f-sharp": {
      text: "Pose le pouce droit sur le ré au-dessus du do central et le doigt 3 sur fa dièse. Joue ré, mi, fa dièse et sol, puis redescends jusqu’à ré.",
    },
    recap: {
      text: "Bravo. Tu sais lire et jouer les dièses.",
      points: [
        "Un dièse ♯ hausse une note d’un demi-ton, jusqu’à la touche juste à sa droite.",
        "La plupart des dièses sont des touches noires, comme do dièse et fa dièse.",
        "Mi dièse est fa, et si dièse est do, car aucune touche noire ne les sépare.",
        "Sur la portée, le ♯ se place juste à gauche de sa note.",
      ],
    },
  },
};
