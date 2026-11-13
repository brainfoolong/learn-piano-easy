/** *Half and whole steps* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsId: Translation<HalfAndWholeStepsTexts> = {
  title: "Setengah nada dan satu nada",
  steps: {
    "key-by-key": {
      text: "Dengarkan piano naik dari C ke E. Piano memainkan setiap tuts yang dilewati, tuts hitam juga.",
    },
    "half-step": {
      text: "Setiap perpindahan tadi adalah setengah nada. Setengah nada pindah ke tuts tepat berikutnya, hitam atau putih, tanpa tuts di antaranya.",
    },
    "half-step-from-c": {
      text: "Giliranmu. Mainkan C tengah, lalu tuts hitam tepat di kanannya. Mainkan pasangan itu dua kali. Setiap perpindahan adalah setengah nada.",
    },
    "no-black-key-between": {
      text: "Lihat E dan F. Tidak ada tuts hitam di antara keduanya. Jadi E ke F adalah setengah nada, begitu juga B ke C.",
    },
    "white-half-step": {
      text: "Dua tuts putih mana yang berjarak setengah nada?",
      answers: ["C dan D", "E dan F", "F dan G"],
    },
    "e-f-and-b-c": {
      text: "Mainkan E dan F di atas C tengah. Lalu mainkan B dan C tepat di atas B. Keduanya setengah nada di antara dua tuts putih.",
    },
    "whole-step": {
      text: "Dua setengah nada menjadi satu nada. Satu nada melewati satu tuts. C ke D adalah satu nada, karena ada tuts hitam di antaranya.",
    },
    "whole-and-half": {
      text: "Dengarkan: C ke D adalah satu nada, dan D ke E juga satu nada. Lalu E ke F hanya setengah nada.",
    },
    "whole-steps-from-c": {
      text: "Giliranmu. Mainkan C tengah, D, dan E. Setiap perpindahan adalah satu nada, melewati satu tuts hitam.",
    },
    "f-to-g": {
      text: "Dari F naik ke G, apakah itu setengah nada atau satu nada?",
      answers: ["Satu nada", "Setengah nada"],
    },
    "whole-step-above-e": {
      text: "Tekan tuts yang satu nada di atas E. Hitung dua kali setengah nada ke atas, dan hati-hati: yang pertama sudah jatuh di F.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa mengukur jarak antara dua tuts.",
      points: [
        "Setengah nada pindah ke tuts tepat berikutnya, hitam atau putih.",
        "E ke F dan B ke C adalah setengah nada di antara tuts putih.",
        "Satu nada sama dengan dua kali setengah nada, dengan satu tuts di antaranya.",
      ],
    },
  },
};
