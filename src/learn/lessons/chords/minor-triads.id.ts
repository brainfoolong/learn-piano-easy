/** *Minor triads* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsId: Translation<MinorTriadsTexts> = {
  title: "Trisuara minor",
  steps: {
    "major-then-minor": {
      text: "Dengarkan dua akor pada C. Yang pertama C mayor dan terdengar cerah. Yang kedua C minor dan terdengar lebih gelap.",
    },
    "thirds-swap": {
      text: "Dalam trisuara mayor, terts bawahnya adalah terts mayor: empat kali setengah nada. Terts atasnya adalah terts minor. Trisuara minor menukar keduanya, jadi terts minor datang lebih dulu.",
    },
    "minor-third-size": {
      text: "Terts mayor adalah empat kali setengah nada. Berapa kali setengah nada dalam terts minor?",
      answers: ["Empat", "Tiga", "Dua"],
    },
    "lower-the-middle": {
      text: "Jadi, kamu mengubah trisuara mayor menjadi minor dengan satu gerakan. Turunkan not tengahnya setengah nada. C, E, dan G menjadi C, E mol, dan G.",
    },
    "find-e-flat": {
      text: "Temukan E mol di deretan tuts. E mol adalah tuts hitam tepat di kiri E.",
    },
    "c-major-to-minor": {
      text: "Giliranmu. Mainkan C mayor dengan jari 1, 3, dan 5 dari C tengah. Lalu geser jari 3 turun ke E mol untuk C minor, dan mainkan keduanya dua kali.",
    },
    "hear-the-middle-drop": {
      text: "Antara mayor dan minor, hanya not tengah yang bergeser setengah nada. Apakah tuts kedua lebih tinggi, lebih rendah, atau sama?",
    },
    "white-key-minors": {
      text: "Tiga trisuara minor hanya memakai tuts putih. A minor adalah A-C-E, D minor adalah D-F-A, dan E minor adalah E-G-B.",
    },
    "a-minor": {
      text: "Letakkan ibu jari kananmu di A di bawah C tengah. Mainkan A minor dua kali: A, C, dan E bersamaan.",
    },
    "d-and-e-minor": {
      text: "Sekarang geser tanganmu. Mainkan D minor dari D di atas C tengah, lalu E minor satu tuts putih lebih tinggi, lalu D minor lagi.",
    },
    "g-major-to-minor": {
      text: "G mayor adalah G, B, dan D. Not mana yang kamu turunkan untuk memainkan G minor?",
    },
    "major-minor-pairs": {
      text: "Mainkan D mayor dengan F kres, lalu D minor dengan F. Kemudian mainkan G mayor dengan B, dan G minor dengan B mol.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa memainkan trisuara mayor dan minor.",
      points: [
        "Trisuara minor menumpuk terts minor, lalu terts mayor.",
        "Turunkan not tengah trisuara mayor untuk membuatnya minor.",
        "Mayor terdengar cerah, dan minor terdengar lebih gelap.",
        "A, D, dan E minor hanya memakai tuts putih.",
      ],
    },
  },
};
