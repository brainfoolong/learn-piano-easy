/** *Moving the hand* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { MovingTheHandTexts } from "./moving-the-hand.en";

export const movingTheHandId: Translation<MovingTheHandTexts> = {
  title: "Memindahkan tangan",
  steps: {
    "phrase-then-move": {
      text: "Perhatikan tangan kanan. Tangan kanan memainkan lima not di posisi C, pindah ke atas saat tanda istirahat, lalu memainkan alur yang sama lagi di tempat yang lebih tinggi.",
    },
    "new-position": {
      text: "Posisi lima jari juga bisa dimulai dari tuts lain. Di posisi G, ibu jari kananmu ada di G di atas C tengah. Jari-jarimu menutupi G A B C D.",
    },
    "new-thumb": {
      text: "Temukan tuts untuk ibu jari kananmu di posisi G: G tepat di atas C tengah.",
    },
    "little-finger-quiz": {
      text: "Tangan kananmu ada di posisi G. Tuts mana yang dimainkan kelingkingmu?",
      answers: ["D", "C", "G", "E"],
    },
    "middle-finger-quiz": {
      text: "Masih di posisi G. Tuts mana yang dimainkan jari tengahmu?",
      answers: ["E", "B", "A"],
    },
    "read-g-position": {
      text: "Inilah not-not posisi G pada paranada kunci G. Sebutkan nama setiap not.",
    },
    "c-position-phrase": {
      text: "Mulai di posisi C. Mainkan dari ibu jari naik sampai jari manis, lalu turun lagi ke C tengah.",
    },
    "g-position-phrase": {
      text: "Sekarang pindahkan tanganmu ke posisi G, dan mainkan alur yang sama. Ibu jari di G, naik sampai C, lalu turun lagi.",
    },
    "move-in-a-rest": {
      text: "Pindahkan tanganmu saat tanda istirahat atau di akhir not panjang. Angkat seluruh tangan, pertahankan posisi jarinya, lalu letakkan ibu jarimu di tuts baru.",
    },
    "move-and-play": {
      text: "Mainkan dua frasa tanpa berhenti dengan tangan kananmu. Mulai dari C tengah, lalu mainkan C D E F E D C. Lalu pindahkan ibu jarimu ke G di atas C tengah, dan mainkan G A B C B A G.",
    },
    recap: {
      text: "Bagus sekali. Sekarang tanganmu bisa berpindah tempat.",
      points: [
        "Di posisi G, ibu jari kananmu ada di G di atas C tengah.",
        "Lalu jari-jarimu memainkan G A B C D.",
        "Pindahkan seluruh tangan saat tanda istirahat atau not panjang, dan pertahankan posisi jarinya.",
      ],
    },
  },
};
