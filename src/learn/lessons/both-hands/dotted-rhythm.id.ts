/** *The dotted rhythm* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { DottedRhythmTexts } from "./dotted-rhythm.en";

export const dottedRhythmId: Translation<DottedRhythmTexts> = {
  title: "Ritme bertitik",
  steps: {
    "even-and-dotted-demo": {
      text: "Dengarkan E dan D dalam dua ritme. Pertama, not seperempat yang rata: E E D D. Lalu E panjang diikuti D cepat, dan D panjang menutupnya.",
    },
    "what-a-dot-does": {
      text: "Not panjang tadi punya titik di belakangnya. Titik menambahkan setengah dari panjang not itu sendiri. Jadi not bertitik berbunyi satu setengah kali panjangnya.",
    },
    "dotted-half-demo": {
      text: "Not setengah berbunyi dua ketukan, dan titiknya menambahkan satu ketukan lagi. Hitung “1, 2, 3” untuk setiap not setengah bertitik ini.",
    },
    "dotted-half-quiz": {
      text: "Not setengah bertitik berbunyi berapa ketukan?",
      answers: ["Dua ketukan", "Tiga ketukan", "Empat ketukan"],
    },
    "dotted-quarter": {
      text: "Not seperempat berbunyi satu ketukan, dan titiknya menambahkan setengah ketukan. Not seperempat bertitik dimulai pada “1” dan berbunyi sampai “2 dan”. Not seperdelapan pada “2 dan” mengisi sisanya.",
    },
    "dotted-quarter-quiz": {
      text: "Not seperempat bertitik berbunyi berapa ketukan?",
      answers: ["Satu ketukan", "Satu setengah ketukan", "Dua ketukan"],
    },
    "partner-quiz": {
      text: "Not seperempat bertitik dan satu not lagi bersama-sama mengisi dua ketukan. Not apa itu?",
      answers: ["Not seperempat", "Not seperdelapan", "Not setengah"],
    },
    "ode-demo": {
      text: "Ini awal lagu Ode to Joy. Birama terakhirnya punya ritme bertitik: E panjang, D cepat, lalu D panjang.",
    },
    "ode-phrase": {
      text: "Letakkan ibu jari kananmu di C tengah, lalu mainkan melodinya. Tahan E terakhir sedikit lebih lama, lalu mainkan D sesudahnya dengan cepat.",
    },
    "fourth-demo": {
      text: "Dengarkan tangan kiri di tantangan akhir. Tangan kiri berganti antara C dengan G, kuint yang sudah kamu kenal, dan D dengan G. D dengan G adalah kuart: rentangnya empat tuts putih, termasuk kedua ujungnya.",
    },
    "fifth-and-fourth": {
      text: "Giliranmu. Letakkan jari 5 di C di bawah C tengah, dan ibu jarimu di G. Mainkan C dan G bersamaan, lalu D dan G dengan jari 4 di D, lalu ulangi keduanya.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa memainkan ritme sebuah melodi terkenal.",
      points: [
        "Titik menambahkan setengah dari panjang sebuah not.",
        "Not setengah bertitik berbunyi tiga ketukan.",
        "Not seperempat bertitik berbunyi satu setengah ketukan.",
        "Not seperdelapan sering mengikuti not seperempat bertitik.",
      ],
    },
  },
};
