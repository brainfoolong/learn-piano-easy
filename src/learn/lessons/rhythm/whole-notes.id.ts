/** *Whole notes* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { WholeNotesTexts } from "./whole-notes.en";

export const wholeNotesId: Translation<WholeNotesTexts> = {
  title: "Not penuh",
  steps: {
    "halves-then-whole-demo": {
      text: "Perhatikan dan dengarkan. Mula-mula ada dua not setengah. Lalu satu not berbunyi sepanjang keduanya digabung.",
    },
    "what-a-whole-note-is": {
      text: "Not penuh berlangsung empat ketukan. Kamu memainkannya pada ketukan pertama dan menahannya selama tiga ketukan berikutnya. Hitung “1-2-3-4” pada setiap not penuh.",
    },
    "whole-beats-quiz": {
      text: "Not penuh berlangsung berapa ketukan?",
      answers: ["Dua ketukan", "Tiga ketukan", "Empat ketukan"],
    },
    "four-beats-three-ways-demo": {
      text: "Dengarkan empat ketukan yang diisi dengan tiga cara. Pertama satu not penuh, lalu dua not setengah, lalu empat not seperempat. Setiap kelompok sama lamanya.",
    },
    "same-as-whole-quiz": {
      text: "Apa yang sama lamanya dengan satu not penuh?",
      answers: ["Satu not setengah", "Dua not setengah", "Dua not seperempat"],
    },
    "quarters-in-whole-quiz": {
      text: "Berapa not seperempat yang sama lamanya dengan satu not penuh?",
      answers: ["Dua", "Empat", "Delapan"],
    },
    "play-and-hold": {
      text: "Letakkan tangan kananmu di posisi C. Mainkan C, E, dan G, dan tahan setiap tuts selagi kamu menghitung “1-2-3-4”. Langkah ini menunggu setiap not, jadi tidak perlu terburu-buru.",
    },
    "count-to-four": {
      text: "Ketuk tuts mana saja pada setiap klik. Hitung “1-2-3-4” dua kali sambil mengetuk. Setiap “1-2-3-4” sama panjang dengan satu not penuh.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu sudah kenal not penuh.",
      points: [
        "Not penuh berlangsung empat ketukan.",
        "Kamu memainkannya, lalu menahannya selama tiga ketukan lagi.",
        "Satu not penuh sama lamanya dengan dua not setengah atau empat not seperempat.",
      ],
    },
  },
};
