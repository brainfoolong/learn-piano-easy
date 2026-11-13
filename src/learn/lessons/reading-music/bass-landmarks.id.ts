/** *Bass landmarks* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { BassLandmarksTexts } from "./bass-landmarks.en";

export const bassLandmarksId: Translation<BassLandmarksTexts> = {
  title: "Not patokan kunci F",
  steps: {
    "landmarks-demo": {
      text: "Perhatikan dan dengarkan. Piano memainkan tiga not patokan kunci F: C rendah, F, dan C tengah. Not patokan adalah not yang langsung kamu kenali sekali lihat.",
    },
    "low-c": {
      text: "C rendah terletak di spasi kedua dari bawah paranada kunci F. Itulah C di bawah C tengah. Di posisi C, kelingking kirimu memainkannya.",
    },
    "play-low-c": {
      text: "Ini C rendah di spasi kedua. Mainkan not itu di piano.",
    },
    "middle-c-above": {
      text: "C tengah terletak di garis bantunya sendiri, tepat di atas paranada kunci F. Ini C tengah yang sama dengan yang kamu temui di bawah paranada kunci G.",
    },
    "middle-c-quiz": {
      text: "Di mana letak C tengah di kunci F?",
      answers: ["Di garis bantu tepat di bawah paranada", "Di garis bantu tepat di atas paranada", "Di garis tengah"],
    },
    "fourth-line-quiz": {
      text: "Not patokan mana yang terletak di garis keempat dari bawah?",
      answers: ["C rendah", "F", "C tengah"],
    },
    "count-from-a-landmark": {
      text: "Dari garis ke spasi berikutnya adalah satu geser, dan satu huruf. Untuk membaca sebuah not, mulai dari not patokan terdekat. Lalu hitung geser ke atas atau ke bawah.",
    },
    "count-quiz": {
      text: "Sebuah not terletak di garis tengah, satu geser di atas C rendah. Not apa itu?",
    },
    "play-bass-landmarks": {
      text: "Mainkan setiap not yang kamu lihat di paranada kunci F. Sebagian adalah not patokan, dan yang lain berjarak satu atau dua geser dari not patokan.",
    },
    "name-by-counting": {
      text: "Sebutkan nama setiap not. Tekan hurufnya. Hitung dari not patokan terdekat: C rendah, F, atau C tengah.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa menemukan jalan di paranada kunci F.",
      points: [
        "C rendah terletak di spasi kedua.",
        "F terletak di garis keempat, di antara dua titik kunci F.",
        "C tengah terletak di garis bantu tepat di atas paranada.",
        "Hitung dari not patokan terdekat untuk membaca not apa pun.",
      ],
    },
  },
};
