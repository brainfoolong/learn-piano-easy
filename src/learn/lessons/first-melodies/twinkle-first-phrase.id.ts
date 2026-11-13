/** *Twinkle's first phrase* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhraseId: Translation<TwinkleFirstPhraseTexts> = {
  title: "Frasa pertama Twinkle",
  steps: {
    "phrase-demo": {
      text: "Dengarkan frasa pertama Twinkle Twinkle Little Star. Satu not di dalamnya ada di luar posisi C.",
    },
    "one-key-past": {
      text: "Not itu adalah A, tuts putih tepat setelah G. Tanganmu tetap di posisi C. Kelingkingmu meregang satu tuts ke kanan untuk memainkan A.",
    },
    "find-a": {
      text: "Letakkan tangan kananmu di posisi C. Regangkan kelingkingmu melewati G, lalu tekan A.",
    },
    "leap-quiz": {
      text: "Melodi ini mulai di C, lalu melompat jauh ke atas. Ke not mana melodi itu melompat?",
    },
    "climb-up": {
      text: "Mainkan bagian pertama: C dua kali, G dua kali, A dua kali, lalu G. Ibu jarimu memainkan kedua C, dan kelingkingmu memainkan sisanya, meregang ke A lalu kembali.",
    },
    "walk-down": {
      text: "Sekarang bagian kedua turun dengan geser: F, E, D, dan C, masing-masing dua kali. Jarimu: 4, 3, 2, dan 1.",
    },
    "whole-phrase": {
      text: "Gabungkan kedua bagian. Mainkan seluruh frasa tanpa berhenti.",
    },
    recap: {
      text: "Bagus sekali. Untuk pertama kalinya, kamu menjangkau lebih jauh dari kelima jarimu.",
      points: [
        "Melodi bisa meninggalkan posisi C untuk satu not.",
        "Kelingkingmu meregang dari G ke A.",
        "Melodi bisa melompat, seperti dari C naik ke G.",
      ],
    },
  },
};
