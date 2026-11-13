/** *Mary's first phrase* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseId: Translation<MaryFirstPhraseTexts> = {
  title: "Frasa pertama Mary",
  steps: {
    "phrase-demo": {
      text: "Dengarkan paruh pertama Mary Had a Little Lamb. Isinya geser, not berulang, dan satu loncatan kecil, yang sudah kamu kenal.",
    },
    "first-note-quiz": {
      text: "Melodi ini mulai dari not apa?",
    },
    "the-fingers": {
      text: "Biarkan tangan kananmu di posisi C, dengan ibu jari di C tengah. Melodi ini memakai empat jari: 1 di C, 2 di D, 3 di E, dan 5 di G.",
    },
    "g-finger-quiz": {
      text: "Jari mana yang memainkan G?",
      answers: ["Jari 2", "Jari 3", "Jari 5"],
    },
    "bars-one-two": {
      text: "Mainkan awalnya: E, D, C, D, lalu E tiga kali. Jarimu: 3, 2, 1, 2, lalu 3, 3, 3.",
    },
    "bars-three-four": {
      text: "Sekarang bagian berikutnya: D tiga kali, lalu E, lalu G dua kali. Jarimu: 2, 2, 2, lalu 3, 5, 5.",
    },
    "whole-phrase": {
      text: "Sekarang mainkan seluruh frasa tanpa berhenti: E D C D E E E, D D D, E G G.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah memainkan paruh pertama sebuah lagu sungguhan.",
      points: [
        "Geser, not berulang, dan satu loncatan kecil membentuk melodi ini.",
        "Melodi dipelajari sepotong demi sepotong, lalu digabungkan.",
        "Nomor jari memberi tahu tanganmu ke mana harus bergerak.",
      ],
    },
  },
};
