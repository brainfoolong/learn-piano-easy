/** *Skips* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { SkipsTexts } from "./skips.en";

export const skipsId: Translation<SkipsTexts> = {
  title: "Loncatan kecil",
  steps: {
    "skip-demo": {
      text: "Perhatikan dan dengarkan. Setiap not meloncati satu tuts putih, naik lalu turun lagi.",
    },
    "what-a-skip-is": {
      text: "Loncatan kecil meloncati satu tuts putih. Dari C ke E, kamu melewatkan D. Ibu jarimu memainkan C, jari 3 memainkan E, dan jari 2 beristirahat.",
    },
    "skip-from-c-quiz": {
      text: "Ibu jarimu ada di C. Tuts mana yang berjarak satu loncatan kecil?",
    },
    "skips-up": {
      text: "Letakkan tangan kananmu di posisi C. Mainkan loncatan kecil naik: jari 1 dan 3, lalu 2 dan 4, lalu 3 dan 5.",
    },
    "skips-down": {
      text: "Sekarang loncatan kecil yang sama turun lagi. Mulai dengan jari 5, lalu ikuti tuts yang ditandai.",
    },
    "step-or-skip-quiz": {
      text: "Jari 4 memainkan F, lalu jari 5 memainkan G. Itu geser atau loncatan kecil?",
      answers: ["Geser", "Loncatan kecil"],
    },
    "mixed-phrase": {
      text: "Letakkan tangan kananmu di posisi C. Melodi ini mencampur geser dan satu loncatan kecil: C D E, loncatan kecil naik ke G, lalu F E D C.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa memainkan loncatan kecil.",
      points: [
        "Loncatan kecil meloncati satu tuts putih.",
        "Di posisi C, loncatan kecil melewatkan satu jari.",
        "Melodi bisa mencampur geser dan loncatan kecil.",
      ],
    },
  },
};
