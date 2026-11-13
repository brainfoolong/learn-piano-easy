/** *Three-four time* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { ThreeFourTimeTexts } from "./three-four-time.en";

export const threeFourTimeId: Translation<ThreeFourTimeTexts> = {
  title: "Birama 3/4",
  steps: {
    "waltz-demo": {
      text: "Perhatikan dan dengarkan. Sebuah not rendah berbunyi pada ketukan pertama, dan not yang lebih tinggi pada dua ketukan berikutnya. Pola ini berulang.",
    },
    "beats-in-threes": {
      text: "Sebagian musik mengelompokkan ketukannya per tiga. Kamu menghitung “1, 2, 3, 1, 2, 3”, dan ketukan 1 yang paling kuat. Inilah birama 3/4, birama untuk wals.",
    },
    "beats-in-a-bar-quiz": {
      text: "Berapa ketukan dalam satu birama 3/4?",
      answers: ["Dua", "Tiga", "Empat"],
    },
    "which-is-a-waltz-quiz": {
      text: "Wals memakai birama 3/4. Bagaimana kamu menghitungnya?",
      answers: ["1, 2, 3, 1, 2, 3", "1, 2, 3, 4, 1, 2, 3, 4"],
    },
    "tap-in-threes": {
      text: "Tekan Mulai, lalu dengarkan dulu empat klik. Setelah itu, ketuk tuts mana saja pada setiap klik, dan hitung “1, 2, 3” dengan suara keras. Ucapkan setiap 1 sedikit lebih keras.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa menghitung per tiga ketukan.",
      points: [
        "Sebagian musik mengelompokkan ketukannya per tiga.",
        "Satu birama 3/4 punya tiga ketukan, dihitung “1, 2, 3”.",
        "Ketukan 1 yang paling kuat, seperti dalam wals.",
      ],
    },
  },
};
