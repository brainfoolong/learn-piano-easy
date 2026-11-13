/** *The treble clef* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheTrebleClefTexts } from "./the-treble-clef.en";

export const theTrebleClefId: Translation<TheTrebleClefTexts> = {
  title: "Kunci G",
  steps: {
    "a-clef-starts-the-staff": {
      text: "Setiap paranada diawali dengan sebuah kunci. Kunci memberi tahu nama not di setiap garis dan spasi. Tangan kananmu paling sering membaca kunci G.",
    },
    "the-g-line": {
      text: "Kunci G melingkari garis kedua dari bawah. Garis itu adalah G, karena itu kunci ini disebut kunci G. G ini adalah G pertama di atas C tengah.",
    },
    "g-line-quiz": {
      text: "Garis mana yang dilingkari kunci G?",
      answers: ["Garis paling bawah", "Garis kedua dari bawah", "Garis paling atas"],
    },
    "hear-g-demo": {
      text: "Dengarkan. Ini G di garis kedua, dimainkan dua kali.",
    },
    "play-g": {
      text: "Not ini terletak di garis G. Mainkan di piano.",
    },
    "g-neighbours": {
      text: "Dari G, kamu bisa menemukan tetangganya. Naik satu geser, di spasi atasnya, ada A. Turun satu geser, di spasi bawahnya, ada F.",
    },
    "neighbours-demo": {
      text: "Perhatikan dan dengarkan: G, naik satu geser ke A, kembali ke G, turun satu geser ke F, lalu kembali ke G.",
    },
    "space-above-g-quiz": {
      text: "Sebuah not terletak di spasi tepat di atas garis G. Not apa itu?",
    },
    "one-more-step": {
      text: "Teruskan geser demi geser melalui huruf-hurufnya. Di atas A ada B, di garis tengah. Di bawah F ada E, di garis paling bawah.",
    },
    "middle-line-quiz": {
      text: "Not apa yang terletak di garis tengah kunci G?",
    },
    "play-treble-notes": {
      text: "Mainkan setiap not yang kamu lihat. Cari garis G dulu, lalu hitung geser ke atas atau ke bawah.",
    },
    "name-treble-notes": {
      text: "Sekarang sebutkan nama setiap not. Mulai dari garis G, lalu geser naik atau turun sampai ke not itu.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah bisa membaca not pertamamu di kunci G.",
      points: [
        "Kunci G melingkari garis kedua, yaitu G.",
        "Satu geser naik atau turun membawamu ke garis atau spasi berikutnya, dan ke huruf berikutnya.",
        "Di sekitar G ada E, F, A, dan B.",
      ],
    },
  },
};
