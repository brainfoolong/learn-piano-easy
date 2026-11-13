/** *Tune and bass together* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TuneAndBassTogetherTexts } from "./tune-and-bass-together.en";

export const tuneAndBassTogetherId: Translation<TuneAndBassTogetherTexts> = {
  title: "Melodi dan bas bersamaan",
  steps: {
    "whole-tune": {
      text: "Dengarkan melodi pendek sepanjang empat birama. Tangan kananmu memainkan melodi, dan tangan kirimu menambahkan satu not rendah di setiap birama.",
    },
    "two-layers": {
      text: "Melodi bergerak pada setiap ketukan. Bas hanya masuk pada ketukan 1, lalu berbunyi di bawah melodi sepanjang birama.",
    },
    "tune-alone": {
      text: "Pertama melodinya saja, di posisi C. Mainkan C D E F, G F E D, D E F D, lalu akhiri di C tengah.",
    },
    "bass-beat-quiz": {
      text: "Pada ketukan berapa not bas masuk di setiap birama?",
      answers: ["Pada ketukan 1", "Pada ketukan 3", "Pada setiap ketukan"],
    },
    "bass-demo": {
      text: "Sekarang dengarkan basnya saja. Setiap not berbunyi satu birama penuh: C, lalu G dua kali, lalu C lagi.",
    },
    "bass-alone": {
      text: "Mainkan bas dengan tangan kirimu di posisi C. Kelingkingmu memainkan C, dan ibu jarimu memainkan G.",
    },
    "press-together": {
      text: "Pada ketukan 1, kedua tangan menekan tutsnya pada saat yang sama. Lalu tangan kirimu menahan notnya, sementara tangan kananmu terus bermain.",
    },
    "first-half": {
      text: "Mainkan dua birama pertama dengan kedua tangan. Tekan bas dan not pertama melodi bersamaan.",
    },
    "held-bass-quiz": {
      text: "Di birama kedua, tangan kananmu memainkan G F E D. Apa yang dilakukan tangan kirimu sementara itu?",
      answers: ["Memainkan G F E D satu oktaf lebih rendah", "Menahan G-nya", "Terangkat dan beristirahat"],
    },
    "whole-tune-together": {
      text: "Sekarang seluruh melodi dengan kedua tangan. Pelan-pelan saja di setiap ketukan 1, saat kedua tangan bermain.",
    },
    recap: {
      text: "Bagus sekali. Kamu memainkan melodi bersama basnya.",
      points: [
        "Pelajari melodinya saja dulu, lalu basnya saja, lalu gabungkan keduanya.",
        "Bas masuk pada ketukan 1, bersamaan dengan not melodi.",
        "Tangan kirimu menahan bas, sementara tangan kananmu terus bermain.",
      ],
    },
  },
};
