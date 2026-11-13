/** *The C major scale* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheCMajorScaleTexts } from "./the-c-major-scale.en";

export const theCMajorScaleId: Translation<TheCMajorScaleTexts> = {
  title: "Tangga nada C mayor",
  steps: {
    "scale-demo": {
      text: "Dengarkan delapan not naik dari C tengah ke C berikutnya. Semua tutsnya putih.",
    },
    "what-a-scale-is": {
      text: "Tangga nada adalah deretan not yang naik setingkat demi setingkat. Tangga nada C mayor mulai di C dan berakhir di C berikutnya.",
    },
    "scale-pattern": {
      text: "Jarak antarnotnya mengikuti pola: satu, satu, setengah, satu, satu, satu, setengah. Setengah nadanya ada di E ke F dan B ke C.",
    },
    "first-half-step": {
      text: "Di mana setengah nada pertama tangga nada C mayor?",
      answers: ["Dari C ke D", "Dari G ke A", "Dari E ke F"],
    },
    "first-three": {
      text: "Letakkan ibu jari kananmu di C tengah. Mainkan C, D, dan E dengan jari 1, 2, dan 3.",
    },
    "thumb-under": {
      text: "Tanganmu hanya punya lima jari untuk delapan not. Setelah E, susupkan ibu jarimu ke bawah tangan, lalu mainkan F dengannya.",
    },
    "which-finger-on-f": {
      text: "Kamu memainkan C, D, dan E dengan jari 1, 2, dan 3. Jari mana yang memainkan F?",
      answers: ["Jari 4", "Jari 1, ibu jari", "Jari 5"],
    },
    "tuck-to-f": {
      text: "Mainkan lagi C, D, dan E. Lalu susupkan ibu jarimu dan mainkan F. Jaga pergelangan tanganmu tetap tenang dan rata.",
    },
    "last-five": {
      text: "Ibu jarimu sekarang di F. Mainkan F, G, A, B, dan C dengan jari 1, 2, 3, 4, dan 5.",
    },
    "scale-up": {
      text: "Mainkan tangga nada C mayor naik dengan tangan kananmu, dari C tengah ke C berikutnya. Jari 1, 2, 3, lalu ibu jari menyusup, lalu 1, 2, 3, 4, 5.",
    },
    "scale-down": {
      text: "Sekarang turun lagi dengan jari 5, 4, 3, 2, 1. Setelah F, jari 3 menyeberang di atas ibu jarimu ke E.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah memainkan tangga nada pertamamu.",
      points: [
        "Tangga nada C mayor adalah delapan tuts putih dari C ke C.",
        "Polanya satu, satu, setengah, satu, satu, satu, setengah.",
        "Saat naik, ibu jarimu menyusup ke F.",
        "Saat turun, jari 3 menyeberang di atas ibu jarimu ke E.",
      ],
    },
  },
};
