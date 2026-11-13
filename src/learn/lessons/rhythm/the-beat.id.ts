/** *The beat* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheBeatTexts } from "./the-beat.en";

export const theBeatId: Translation<TheBeatTexts> = {
  title: "Denyut ketukan",
  steps: {
    "beat-demo": {
      text: "Perhatikan dan dengarkan. Sebuah not rendah berbunyi berulang kali di bawah melodi, selalu dengan kecepatan yang sama.",
    },
    "what-the-beat-is": {
      text: "Musik punya denyut ketukan yang tetap, seperti detak jantungmu atau langkahmu saat berjalan. Not rendah tadi memainkan ketukan itu. Kamu bisa mengangguk atau mengetuk mengikutinya.",
    },
    "tap-the-beat": {
      text: "Tekan Mulai, lalu dengarkan dulu empat klik. Setelah itu, ketuk tuts mana saja sekali pada setiap klik.",
    },
    "steady-beat-quiz": {
      text: "Sebuah lagu diputar dari awal sampai akhir. Apa yang terjadi pada ketukannya?",
      answers: ["Kadang lebih cepat, kadang lebih lambat", "Tetap stabil"],
    },
    "tap-a-longer-beat": {
      text: "Sekarang putaran yang lebih panjang, sedikit lebih cepat. Terus ketuk mengikuti klik, sekali pada setiap klik.",
    },
    recap: {
      text: "Bagus sekali. Kamu bisa merasakan ketukan dan mengetuk mengikutinya.",
      points: [
        "Musik punya denyut ketukan yang tetap.",
        "Ketukan itu seperti detak jantung atau langkah kaki.",
        "Kamu mengetuk sekali pada setiap ketukan.",
      ],
    },
  },
};
