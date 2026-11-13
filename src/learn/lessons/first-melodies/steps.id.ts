/** *Steps* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { StepsTexts } from "./steps.en";

export const stepsId: Translation<StepsTexts> = {
  title: "Geser",
  steps: {
    "steps-demo": {
      text: "Perhatikan melodi kecil ini. Setiap not pindah ke tuts tepat di sebelah not sebelumnya.",
    },
    "what-a-step-is": {
      text: "Pindah ke tuts putih tepat berikutnya disebut geser. Geser bisa naik atau turun. Di posisi C, jari sebelahnya yang memainkannya.",
    },
    "which-is-a-step": {
      text: "Perpindahan mana yang termasuk geser?",
      answers: ["C ke D", "C ke E", "C ke G"],
    },
    "hear-steps": {
      text: "Geser naik terdengar sedikit lebih tinggi, dan geser turun sedikit lebih rendah. Dengarkan dua not. Apakah not kedua lebih tinggi, lebih rendah, atau sama?",
    },
    "step-up": {
      text: "Letakkan tangan kananmu di posisi C. Geser naik dari ibu jari sampai kelingkingmu.",
    },
    "step-down": {
      text: "Sekarang geser turun lagi, dari kelingking sampai ibu jarimu.",
    },
    "next-finger-quiz": {
      text: "Jari 3 ada di E. Jari mana yang memainkan geser naik dari sana?",
      answers: ["Jari 2", "Jari 4", "Jari 5"],
    },
    "step-up-and-down": {
      text: "Geser naik sampai paling atas, lalu turun lagi sampai paling bawah. Ikuti tuts yang ditandai.",
    },
    "stepping-tune": {
      text: "Letakkan tangan kananmu di posisi C. Melodi ini hanya terdiri dari geser: C D E D E F E D C.",
    },
    recap: {
      text: "Bagus sekali. Kamu bisa memainkan melodi yang terdiri dari geser.",
      points: [
        "Geser pindah ke tuts putih tepat berikutnya.",
        "Geser bisa naik atau turun.",
        "Di posisi C, jari sebelahnya memainkan geser.",
      ],
    },
  },
};
