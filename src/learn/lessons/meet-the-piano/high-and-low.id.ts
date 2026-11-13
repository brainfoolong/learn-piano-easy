/** *High and low* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { HighAndLowTexts } from "./high-and-low.en";

export const highAndLowId: Translation<HighAndLowTexts> = {
  title: "Tinggi dan rendah",
  steps: {
    "low-to-high": {
      text: "Dengarkan dan perhatikan. Piano memainkan tuts dari sisi kiri ke sisi kanan.",
    },
    "left-is-low": {
      text: "Kamu dengar bunyinya naik? Tuts di kiri berbunyi lebih rendah, dan tuts di kanan berbunyi lebih tinggi.",
    },
    "wide-listen": {
      text: "Kamu mendengar dua nada. Apakah nada kedua lebih tinggi, lebih rendah, atau sama dengan yang pertama?",
    },
    "climb-up": {
      text: "Sekarang kamu yang naik. Mainkan tuts yang ditandai dari kiri ke kanan, dan dengarkan bunyinya naik.",
    },
    "climb-down": {
      text: "Lalu turun lagi. Mainkan tuts yang ditandai dari kanan ke kiri, dan dengarkan bunyinya turun.",
    },
    "low-then-high": {
      text: "Lompatan besar: mainkan ketiga tuts yang ditandai, dari rendah ke tinggi.",
    },
    "which-way": {
      text: "Kamu memindahkan tanganmu ke kanan di atas tuts. Apa yang terjadi pada bunyinya?",
      answers: ["Makin rendah", "Makin tinggi", "Tetap sama"],
    },
    "close-listen": {
      text: "Dengarkan baik-baik: kedua nada itu berdekatan, atau nadanya sama. Apakah nada kedua lebih tinggi, lebih rendah, atau sama?",
    },
    recap: {
      text: "Bagus sekali. Kamu bisa mendengar dan memainkan nada tinggi dan rendah.",
      points: ["Tuts di kiri berbunyi lebih rendah.", "Tuts di kanan berbunyi lebih tinggi.", "Dua nada juga bisa berbunyi sama."],
    },
  },
};
