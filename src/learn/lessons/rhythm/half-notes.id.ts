/** *Half notes* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesId: Translation<HalfNotesTexts> = {
  title: "Not setengah",
  steps: {
    "quarters-then-halves-demo": {
      text: "Perhatikan dan dengarkan. Mula-mula ada empat not pendek, satu pada setiap ketukan. Lalu setiap not berbunyi dua kali lebih panjang.",
    },
    "what-a-half-note-is": {
      text: "Not setengah berlangsung dua ketukan. Kamu memainkannya pada ketukan pertama dan terus menahannya selama ketukan kedua. Hitung “1-2” pada setiap not setengah.",
    },
    "half-beats-quiz": {
      text: "Not setengah berlangsung berapa ketukan?",
      answers: ["Satu ketukan", "Dua ketukan", "Empat ketukan"],
    },
    "play-and-hold": {
      text: "Letakkan tangan kananmu di posisi C. Mainkan C, D, E, D, C, dan tahan setiap tuts selagi kamu menghitung “1-2”. Langkah ini menunggu setiap not, jadi tidak perlu terburu-buru.",
    },
    "count-one-two": {
      text: "Ketuk tuts mana saja pada setiap klik. Hitung “1-2, 1-2” sambil mengetuk. Setiap “1-2” sama panjang dengan satu not setengah.",
    },
    "which-is-longer-quiz": {
      text: "Not mana yang lebih panjang?",
      answers: ["Not seperempat", "Not setengah"],
    },
    "halves-in-four-quiz": {
      text: "Berapa not setengah yang mengisi empat ketukan?",
      answers: ["Satu", "Dua", "Empat"],
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu sudah kenal not setengah.",
      points: [
        "Not setengah berlangsung dua ketukan.",
        "Kamu memainkannya, lalu menahannya selama ketukan berikutnya.",
        "Dua not setengah mengisi empat ketukan.",
      ],
    },
  },
};
