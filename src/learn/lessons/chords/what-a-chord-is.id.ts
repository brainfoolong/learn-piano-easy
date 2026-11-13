/** *What a chord is* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { WhatAChordIsTexts } from "./what-a-chord-is.en";

export const whatAChordIsId: Translation<WhatAChordIsTexts> = {
  title: "Apa itu akor",
  steps: {
    "chord-demo": {
      text: "Dengarkan C, E, dan G, satu per satu. Lalu dengarkan ketiganya sekaligus. Ketiganya melebur menjadi satu bunyi yang penuh.",
    },
    "several-keys": {
      text: "Tuts yang ditekan bersamaan membentuk akor. Kamu sudah pernah memainkan satu: kuint kosong di tangan kirimu. Sekarang kamu akan menyusun akor lainnya.",
    },
    "a-third": {
      text: "Tekan C dan E bersamaan. Jarak keduanya satu terts, jadi ada satu tuts putih di antaranya. Jari 1 dan 3 memainkannya.",
    },
    "thirds-up": {
      text: "Giliranmu. Letakkan ibu jari kananmu di C tengah, lalu mainkan C dan E bersamaan. Kemudian geser tanganmu naik ke D dan F, lalu ke E dan G.",
    },
    "skipped-key": {
      text: "Lihat sebuah terts di tuts putih. Berapa tuts putih yang ada di antara kedua tutsnya?",
      answers: ["Tidak ada", "Satu", "Dua"],
    },
    "thirds-and-fifths": {
      text: "Kuint merentang lima tuts putih, seperti C dan G. Ibu jari dan jari 5 memainkannya. Terts terdengar manis, dan kuint terdengar kosong.",
    },
    "third-then-fifth": {
      text: "Biarkan ibu jarimu di C. Mainkan terts C dan E, lalu kuint C dan G. Mainkan keduanya dua kali.",
    },
    "stack-thirds": {
      text: "Sekarang tumpuk terts di atas terts. C dan E adalah satu terts, lalu E dan G adalah terts berikutnya. Bersama-sama, C, E, dan G membentuk trisuara.",
    },
    "triad-demo": {
      text: "Dengarkan dulu terts C dan E. Lalu G bergabung di atasnya, dan trisuara itu terdengar penuh.",
    },
    "first-triad": {
      text: "Mainkan C, E, dan G bersamaan dengan jari 1, 3, dan 5. Tekan ketiganya sekaligus, dan mainkan trisuara itu dua kali.",
    },
    "which-is-a-triad": {
      text: "Trisuara menumpuk dua terts. Tiga tuts mana yang membentuk trisuara yang dimulai dari D?",
      answers: ["D, E, dan F", "D, G, dan A", "D, F, dan A"],
    },
    "triads-up": {
      text: "Pertahankan posisi tangan kananmu. Mainkan C-E-G dari C tengah, lalu naik ke D-F-A dan E-G-B, semuanya di tuts putih. Akhiri dengan C-E-G.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah memainkan akor-akor pertamamu.",
      points: [
        "Akor adalah beberapa tuts yang ditekan bersamaan.",
        "Terts melewati satu tuts putih, dan jari 1 dan 3 memainkannya.",
        "Dua terts yang ditumpuk membentuk trisuara, seperti C, E, dan G.",
        "Jari 1, 3, dan 5 memainkan trisuara di tangan kanan.",
      ],
    },
  },
};
