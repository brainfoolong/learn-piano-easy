/** *Finger over the thumb* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { FingerOverTheThumbTexts } from "./finger-over-the-thumb.en";

export const fingerOverTheThumbId: Translation<FingerOverTheThumbTexts> = {
  title: "Jari menyeberang",
  steps: {
    "down-demo": {
      text: "Dengarkan tangga nada C mayor turun, dari C tinggi ke C tengah. Tangan tidak pernah berhenti, dan notnya mengalir dengan mulus.",
    },
    "finger-over": {
      text: "Saat turun, mainkan C, B, A, G, dan F dengan jari 5, 4, 3, 2, dan 1. Lalu jari 3 menyeberang di atas ibu jarimu ke E. Jari 2 dan 1 memainkan D dan C.",
    },
    "which-finger-crosses": {
      text: "Saat turun, ibu jarimu sudah memainkan F. Jari mana yang menyeberang di atasnya ke E?",
      answers: ["Jari 2", "Jari 3", "Jari 5"],
    },
    "top-five-down": {
      text: "Letakkan kelingkingmu di C di atas C tengah. Mainkan turun sampai F, satu jari untuk setiap tuts.",
    },
    "cross-onto-e": {
      text: "Mulai di F dengan ibu jarimu. Seberangkan jari 3 di atas ibu jari ke E, lalu mainkan D dan C.",
    },
    "right-hand-down": {
      text: "Sekarang mainkan seluruh tangga nada turun, dari C tinggi ke C tengah. Biarkan tanganmu tetap lemas saat jari 3 menyeberang.",
    },
    "left-hand-up": {
      text: "Tangan kirimu melakukan hal yang sama saat naik. Mainkan C, D, E, F, dan G dengan jari 5, 4, 3, 2, dan 1. Lalu jari 3 menyeberang di atas ibu jari ke A.",
    },
    "left-hand-demo": {
      text: "Perhatikan tangan kiri memainkan C mayor naik, dari C di bawah C tengah sampai C tengah.",
    },
    "left-cross-key": {
      text: "Ibu jari kirimu ada di G. Jari 3 menyeberang di atasnya. Di tuts mana jari itu mendarat?",
    },
    "left-scale-up": {
      text: "Giliranmu. Mainkan tangga nada naik dengan tangan kirimu, dari C di bawah C tengah sampai C tengah.",
    },
    "scale-up-and-down": {
      text: "Mainkan tangga nada C mayor dengan tangan kananmu, dari C tengah naik ke C berikutnya, lalu turun lagi. Naik dengan ibu jari menyusup, dan turun dengan jari 3 menyeberang di atas ibu jari.",
    },
    recap: {
      text: "Bagus sekali. Sekarang jarimu bisa menyeberang ke dua arah.",
      points: [
        "Saat turun, tangan kananmu memainkan 5, 4, 3, 2, 1, lalu jari 3 menyeberang di atas ibu jari.",
        "Saat naik, tangan kirimu melakukan hal yang sama, dengan jari 3 menyeberang ke A.",
        "Di tangan kanan, ibu jari menyusup saat naik, dan jari 3 menyeberang saat turun.",
      ],
    },
  },
};
