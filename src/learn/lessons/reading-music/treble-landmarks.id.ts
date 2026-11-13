/** *Treble landmarks* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TrebleLandmarksTexts } from "./treble-landmarks.en";

export const trebleLandmarksId: Translation<TrebleLandmarksTexts> = {
  title: "Not patokan kunci G",
  steps: {
    "landmarks-demo": {
      text: "Perhatikan dan dengarkan. Piano memainkan C tengah, lalu G, lalu C di atasnya. Ketiga not ini adalah not patokanmu.",
    },
    "three-landmarks": {
      text: "Not patokan adalah not yang langsung kamu kenali sekali lihat. C tengah terletak di garis bantunya, dan G di garis kedua. C tinggi terletak di spasi ketiga dari bawah.",
    },
    "high-c-quiz": {
      text: "Di mana letak C tinggi di paranada kunci G?",
      answers: ["Di garis kedua", "Di garis bantu di bawah paranada", "Di spasi ketiga dari bawah"],
    },
    "name-landmarks": {
      text: "Sebutkan nama setiap not patokan: C atau G.",
    },
    "count-from-a-landmark": {
      text: "Not lain hanya beberapa geser dari sebuah not patokan. Dari garis ke spasi berikutnya adalah satu geser, begitu juga dari spasi ke garis berikutnya. Setiap geser naik adalah huruf berikutnya.",
    },
    "count-quiz": {
      text: "Sebuah not terletak satu geser di atas G, di spasi di atas garis kedua. Not apa itu?",
    },
    "name-neighbours": {
      text: "Sebutkan nama setiap not. Cari not patokan terdekat, lalu hitung geser ke atas atau ke bawah.",
    },
    "read-treble-landmarks": {
      text: "Mainkan setiap not yang kamu lihat di paranada kunci G. Sebagian adalah not patokan, dan yang lain berjarak satu geser dari not patokan.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah punya tiga not patokan di kunci G.",
      points: [
        "C tengah terletak di garis bantu di bawah paranada.",
        "G terletak di garis kedua, dan C tinggi di spasi ketiga.",
        "Hitung geser dari not patokan terdekat untuk menemukan not apa pun.",
      ],
    },
  },
};
