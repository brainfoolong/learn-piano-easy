/** *Inversions* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { InversionsTexts } from "./inversions.en";

export const inversionsId: Translation<InversionsTexts> = {
  title: "Pembalikan",
  steps: {
    "inversions-demo": {
      text: "Dengarkan tiga akor. Setiap akor berisi not C, E, dan G. Hanya urutannya yang berubah.",
    },
    "same-three-notes": {
      text: "C-E-G dengan C di bawah adalah posisi dasar. Pembalikan memainkan tiga not yang sama dalam urutan lain. Akornya tetap C mayor.",
    },
    "root-position": {
      text: "Mainkan C mayor dalam posisi dasar: C, E, dan G dari C tengah, semuanya bersamaan. Pakai jari 1, 3, dan 5.",
    },
    "first-inversion": {
      text: "Sekarang pindahkan not terbawah naik satu oktaf. C-E-G menjadi E-G-C. Inilah pembalikan pertama.",
    },
    "play-first-inversion": {
      text: "Mainkan pembalikan pertama: E dan G di atas C tengah, dan C di atas keduanya. Tekan ketiganya bersamaan.",
    },
    "which-chord-is-e-g-c": {
      text: "E-G-C terdengar sedikit berbeda dari C-E-G. Akor apakah ini?",
      answers: ["Akor A minor", "Akor E minor", "Akor C mayor"],
    },
    "second-inversion": {
      text: "Pindahkan not terbawah naik sekali lagi. E-G-C menjadi G-C-E. Inilah pembalikan kedua.",
    },
    "play-second-inversion": {
      text: "Mainkan pembalikan kedua: G di atas C tengah, lalu C dan E berikutnya di atasnya. Tekan ketiganya bersamaan.",
    },
    "climb-the-inversions": {
      text: "Naiki deretan tuts dengan C mayor: posisi dasar, pembalikan pertama, pembalikan kedua, lalu posisi dasar satu oktaf lebih tinggi.",
    },
    "move-less": {
      text: "Dengan pembalikan, tanganmu tidak perlu banyak bergerak di antara akor. F mayor sebagai C-F-A dan G mayor sebagai B-D-G terletak tepat di samping C-E-G.",
    },
    "close-chords-demo": {
      text: "Dengarkan lagi C, F, G, dan C, kali ini dimainkan berdekatan. Setiap jari hanya bergeser satu atau dua tuts.",
    },
    "which-chord-is-c-f-a": {
      text: "C-F-A berisi F, A, dan C dalam urutan lain. Akor apakah ini?",
      answers: ["Akor C mayor", "Akor F mayor", "Akor A minor"],
    },
    "close-chords": {
      text: "Mainkan C-E-G, C-F-A, B-D-G, dan C-E-G, mulai dari C tengah. Biarkan tanganmu di satu tempat, dan gerakkan jari-jarimu saja.",
    },
    "close-chords-with-bass": {
      text: "Sekarang tambahkan nada akar dengan tangan kirimu di bawah setiap akor: C, F, G, dan C di bawah C tengah.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa memainkan satu akor dalam tiga posisi.",
      points: [
        "Pembalikan memainkan tiga not sebuah akor dalam urutan lain.",
        "Pindahkan not terbawah naik satu oktaf: C-E-G menjadi E-G-C, lalu G-C-E.",
        "Akornya tetap sama: E-G-C dan G-C-E tetap C mayor.",
        "Pembalikan membuat akor berdekatan, jadi tangan tidak perlu banyak bergerak.",
      ],
    },
  },
};
