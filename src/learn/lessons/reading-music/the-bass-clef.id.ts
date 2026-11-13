/** *The bass clef* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheBassClefTexts } from "./the-bass-clef.en";

export const theBassClefId: Translation<TheBassClefTexts> = {
  title: "Kunci F",
  steps: {
    "low-notes-demo": {
      text: "Perhatikan dan dengarkan. Piano memainkan C, D, E, F, dan G di bawah C tengah. Inilah tuts posisi C tangan kirimu.",
    },
    "what-the-bass-clef-is": {
      text: "Kunci G dipakai untuk menulis not tinggi, terutama untuk tangan kananmu. Kunci F dipakai untuk menulis not rendah, terutama untuk tangan kirimu. Bentuknya seperti lengkungan dengan dua titik di sampingnya.",
    },
    "low-notes-clef-quiz": {
      text: "Kunci mana yang dipakai untuk menulis not rendah?",
      answers: ["Kunci G", "Kunci F"],
    },
    "the-f-line": {
      text: "Dua titik kunci F terletak di atas dan di bawah garis keempat dari bawah. Garis itu adalah F, yaitu F di bawah C tengah. Karena itu kunci ini disebut kunci F.",
    },
    "f-line-quiz": {
      text: "Dua titik kunci F mengapit garis yang mana?",
      answers: ["Garis kedua dari bawah", "Garis keempat dari bawah", "Garis tengah"],
    },
    "play-bass-f": {
      text: "Ini F di garis keempat. Mainkan not itu di piano. Di posisi C tangan kirimu, jari 2 berada di atasnya.",
    },
    "neighbours-of-f": {
      text: "Spasi tepat di atas F adalah G. Spasi tepat di bawah F adalah E. Satu geser lagi ke bawah, di garis tengah, ada D.",
    },
    "name-bass-notes": {
      text: "Sebutkan nama setiap not di kunci F. Tekan hurufnya. Mulai dari F di garis keempat, lalu hitung ke atas atau ke bawah.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah bisa membaca not pertamamu di kunci F.",
      points: [
        "Kunci F dipakai untuk menulis not rendah, terutama untuk tangan kiri.",
        "Dua titiknya mengapit garis keempat, yaitu F.",
        "Dari F, hitung ke atas atau ke bawah untuk menemukan tetangganya.",
      ],
    },
  },
};
