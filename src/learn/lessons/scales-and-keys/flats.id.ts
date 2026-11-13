/** *Flats* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { FlatsTexts } from "./flats.en";

export const flatsId: Translation<FlatsTexts> = {
  title: "Mol",
  steps: {
    "flat-sound": {
      text: "Dengarkan B, lalu tuts hitam tepat di kirinya. Lalu dengarkan E, dan tuts hitam tepat di kiri E.",
    },
    "what-a-flat-is": {
      text: "Tanda ini adalah mol: ♭. Mol menurunkan not setengah nada. Kamu memainkan tuts tepat berikutnya di sebelah kirinya.",
    },
    "find-b-flat": {
      text: "Temukan B mol, ditulis B♭. Mulai dari B, lalu pindah satu tuts ke kiri.",
    },
    "find-e-flat": {
      text: "Sekarang temukan E mol, ditulis E♭. Itu tuts hitam tepat di kiri E.",
    },
    "which-is-e-flat": {
      text: "Tuts mana yang E mol?",
      answers: ["Tuts putih D", "Tuts hitam di kanan E", "Tuts hitam di kiri E"],
    },
    "hear-flats": {
      text: "Not mol terdengar sedikit lebih rendah. Dengarkan dua not. Apakah not kedua lebih tinggi, lebih rendah, atau sama?",
    },
    "two-names": {
      text: "C kres menaikkan C ke tuts hitam di kanannya. D mol menurunkan D ke tuts hitam di kirinya. Itu tuts yang sama, jadi tuts itu punya dua nama.",
    },
    "other-name-quiz": {
      text: "C kres dan satu not mol adalah tuts hitam yang sama. Not mol yang mana?",
    },
    "half-steps-down": {
      text: "Giliranmu. Mainkan B, B mol, dan A, lalu E, E mol, dan D. Setiap not setengah nada di bawah not sebelumnya.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah tahu apa itu mol.",
      points: [
        "Mol ♭ menurunkan not setengah nada.",
        "B mol adalah tuts hitam di kiri B, dan E mol tuts hitam di kiri E.",
        "Satu tuts hitam bisa punya dua nama: C kres juga D mol.",
      ],
    },
  },
};
