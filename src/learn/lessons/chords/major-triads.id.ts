/** *Major triads* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { MajorTriadsTexts } from "./major-triads.en";

export const majorTriadsId: Translation<MajorTriadsTexts> = {
  title: "Trisuara mayor",
  steps: {
    "major-demo": {
      text: "Dengarkan empat trisuara: C, F, G, lalu C lagi. Masing-masing terdengar cerah dan riang. Itulah trisuara mayor.",
    },
    "count-the-steps": {
      text: "Hitung setengah nada dalam C, E, dan G. Setiap tuts dihitung, tuts hitam juga. Dari E naik ke G ada tiga kali setengah nada.",
    },
    "half-steps-c-to-e": {
      text: "Sekarang hitung dari C naik ke E. Berapa kali setengah nada jaraknya?",
      answers: ["Dua", "Tiga", "Empat"],
    },
    "major-recipe": {
      text: "Itulah resep trisuara mayor. Mulailah dari nada akarnya, tuts yang memberi nama trisuara itu. Naik empat kali setengah nada, lalu tiga kali lagi.",
    },
    "right-hand-fingers": {
      text: "Tangan kananmu memainkan trisuara dengan jari 1, 3, dan 5. Ibu jari memainkan nada akar.",
    },
    "c-major-triad": {
      text: "Letakkan ibu jari kananmu di C tengah. Mainkan C, E, dan G satu per satu, lalu ketiganya bersamaan.",
    },
    "f-major-triad": {
      text: "Geser ibu jarimu naik ke F. Empat kali setengah nada di atasnya adalah A, dan tiga kali lagi adalah C. Mainkan satu per satu, lalu bersamaan.",
    },
    "g-major-triad": {
      text: "Sekarang geser ibu jarimu ke G. Resepnya menghasilkan G, B, dan D. Mainkan satu per satu, lalu bersamaan.",
    },
    "four-up-from-d": {
      text: "Mulailah dari D, lalu hitung naik empat kali setengah nada. Kamu sampai di tuts mana?",
      answers: ["F kres", "F", "G"],
    },
    "find-f-sharp": {
      text: "Jadi, D mayor butuh satu tuts hitam. Temukan F kres, tuts hitam tepat di kanan F.",
    },
    "d-major-triad": {
      text: "Letakkan ibu jari kananmu di D di atas C tengah, dengan jari 3 di F kres. Mainkan D, F kres, dan A satu per satu, lalu bersamaan.",
    },
    "left-hand-fingers": {
      text: "Tangan kirimu memainkan trisuara dengan jari 5, 3, dan 1. Jari 5 memainkan nada akar, dan ibu jari memainkan tuts teratas.",
    },
    "left-c-major": {
      text: "Letakkan jari 5 kirimu di C di bawah C tengah. Mainkan C, E, dan G satu per satu, lalu bersamaan.",
    },
    "chord-walk-demo": {
      text: "Ini C, F, G, dan C mayor berturut-turut. Tangan mempertahankan posisinya dan berpindah sebagai satu kesatuan.",
    },
    "chord-walk": {
      text: "Giliranmu. Mainkan keempat trisuara itu dengan tangan kananmu. Pertahankan posisinya, dan geser dari nada akar ke nada akar.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa membangun trisuara mayor di tuts mana pun.",
      points: [
        "Trisuara mayor dimulai dari nada akarnya.",
        "Tuts tengahnya empat kali setengah nada lebih tinggi, dan tuts teratasnya tiga kali setengah nada lagi di atasnya.",
        "C, F, dan G mayor hanya memakai tuts putih, dan D mayor butuh F kres.",
        "Tangan kanan memainkan 1, 3, dan 5, dan tangan kiri memainkan 5, 3, dan 1.",
      ],
    },
  },
};
