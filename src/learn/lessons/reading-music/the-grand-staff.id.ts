/** *The grand staff* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheGrandStaffTexts } from "./the-grand-staff.en";

export const theGrandStaffId: Translation<TheGrandStaffTexts> = {
  title: "Paranada ganda",
  steps: {
    "climb-demo": {
      text: "Dengarkan. Piano naik dari C rendah, melewati C tengah, sampai ke C tinggi. Perjalanan itu melintasi kedua paranada yang sudah kamu kenal.",
    },
    "two-staves": {
      text: "Musik piano ditulis di dua paranada yang bersusun. Di sebelah kiri, keduanya disatukan oleh kurung kurawal. Bersama-sama, keduanya disebut paranada ganda. Paranada kunci G ada di atas, dan paranada kunci F di bawah.",
    },
    "which-hand-quiz": {
      text: "Tangan mana yang biasanya membaca paranada kunci G di atas?",
      answers: ["Tangan kanan", "Tangan kiri"],
    },
    "middle-c-between": {
      text: "C tengah terletak di garis bantu pendek di antara kedua paranada. Not ini milik keduanya. Not ini bisa ditulis di paranada atas atau bawah, dan tutsnya tetap sama.",
    },
    "middle-c-quiz": {
      text: "Di mana letak C tengah di paranada ganda?",
      answers: [
        "Di garis paling atas paranada kunci G",
        "Di garis bantu di antara kedua paranada",
        "Di garis paling bawah paranada kunci F",
      ],
    },
    "treble-names": {
      text: "Ini paranada kunci G. Sebutkan nama setiap not.",
    },
    "bass-names": {
      text: "Sekarang paranada kunci F. Sebutkan nama setiap not.",
    },
    "low-c-staff-quiz": {
      text: "Tangan kirimu memainkan C rendah. Di paranada mana kamu menemukannya?",
      answers: ["Di paranada kunci G", "Di paranada kunci F"],
    },
    "bass-play": {
      text: "Baca setiap not di paranada kunci F, lalu mainkan dengan tangan kirimu.",
    },
    "treble-play": {
      text: "Baca setiap not di paranada kunci G, lalu mainkan dengan tangan kananmu.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa membaca paranada ganda.",
      points: [
        "Paranada ganda menyatukan paranada kunci G dan paranada kunci F dengan kurung kurawal.",
        "Tangan kanan paling sering membaca paranada kunci G, dan tangan kiri paranada kunci F.",
        "C tengah terletak di garis bantu di antara keduanya, dan menjadi milik keduanya.",
      ],
    },
  },
};
