/** *Broken chords* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { BrokenChordsTexts } from "./broken-chords.en";

export const brokenChordsId: Translation<BrokenChordsTexts> = {
  title: "Akor terurai",
  steps: {
    "broken-demo": {
      text: "Dengarkan C mayor yang dimainkan not demi not. Bunyinya naik, lalu turun lagi. Kamu tetap mendengar akornya.",
    },
    "one-after-another": {
      text: "Akor terurai memainkan not-not sebuah akor satu per satu, bukan bersamaan. Notnya sama, jadi akornya juga sama.",
    },
    "chord-together": {
      text: "Pertama, mainkan C mayor bersamaan: C, E, dan G dari C tengah, dengan jari 1, 3, dan 5.",
    },
    "broken-up": {
      text: "Sekarang uraikan akornya. Biarkan tanganmu di tempatnya, lalu mainkan C, kemudian E, kemudian G.",
    },
    "which-chord-broken": {
      text: "Kamu memainkan C, E, dan G satu per satu. Akor apa yang kamu mainkan?",
      answers: ["Akor F mayor", "Akor C mayor", "Akor A minor", "Akor G mayor"],
    },
    "up-and-down": {
      text: "Akor terurai sering naik, lalu turun lagi: C, E, G, E. Jika dimainkan berulang-ulang, bunyinya mengayun seperti ombak.",
    },
    "broken-up-and-down": {
      text: "Mainkan C, E, G, E dua kali, dan akhiri di C. Biarkan tanganmu diam, sementara jari-jarimu mengayun.",
    },
    "three-chords-broken": {
      text: "Uraikan tiga akor dengan tangan kananmu, mulai dari C tengah: C-E-G-E, F-A-C-A, dan G-B-D-B. Akhiri dengan C, E, dan G. Pindahkan tanganmu untuk setiap akor.",
    },
    "which-is-broken": {
      text: "Mana yang akor C mayor terurai?",
      answers: ["C-D-E-F", "C-D-C-D", "E-F-G-A", "C-E-G-E"],
    },
    "left-hand-broken": {
      text: "Tangan kiri sering memainkan akor terurai di bawah melodi. Dengan begitu akornya terus berbunyi, sementara tangan kanan bernyanyi.",
    },
    "left-hand-demo": {
      text: "Dengarkan melodi pendek. Tangan kiri menguraikan C mayor, lalu G mayor, lalu C mayor lagi.",
    },
    "left-hand-alone": {
      text: "Mainkan tangan kiri saja, mulai dari C di bawah C tengah: C-E-G-E, lalu G-B-D-B dari G terdekat di bawahnya, lalu C-E-G-E.",
    },
    "tune-over-broken-chords": {
      text: "Sekarang tambahkan melodi dengan tangan kananmu, di posisi C. Setiap not melodi dimulai bersamaan dengan satu not tangan kiri.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa menguraikan akor dengan kedua tangan.",
      points: [
        "Akor terurai memainkan not-notnya satu per satu.",
        "Notnya sama, jadi akornya terdengar sama.",
        "Pola yang umum naik, lalu turun lagi: C, E, G, E.",
        "Tangan kiri sering menguraikan akor di bawah melodi.",
      ],
    },
  },
};
