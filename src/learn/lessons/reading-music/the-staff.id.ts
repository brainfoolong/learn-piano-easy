/** *The staff* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheStaffTexts } from "./the-staff.en";

export const theStaffId: Translation<TheStaffTexts> = {
  title: "Paranada",
  steps: {
    "five-lines": {
      text: "Musik ditulis di paranada. Paranada terdiri dari lima garis yang bersusun. Kamu menghitungnya dari bawah ke atas, jadi garis paling bawah adalah garis pertama.",
    },
    "lines-quiz": {
      text: "Paranada punya berapa garis?",
      answers: ["Empat", "Lima", "Enam"],
    },
    "four-spaces": {
      text: "Di antara kelima garis itu ada empat spasi. Spasi juga kamu hitung dari bawah ke atas.",
    },
    "spaces-quiz": {
      text: "Ada berapa spasi di antara garis paranada?",
      answers: ["Tiga", "Empat", "Lima"],
    },
    "line-or-space": {
      text: "Not terletak di garis atau di spasi. Di garis, garisnya melintang tepat di tengah not. Di spasi, not mengisi celah di antara dua garis.",
    },
    "line-or-space-quiz": {
      text: "Sebuah garis melintang tepat di tengah not. Di mana letak not itu?",
      answers: ["Di garis", "Di spasi"],
    },
    "higher-is-higher": {
      text: "Makin tinggi letak not di paranada, makin tinggi bunyinya. Naik satu geser, dari garis ke spasi berikutnya, berarti tuts putih berikutnya di sebelah kanan.",
    },
    "climb-demo": {
      text: "Perhatikan dan dengarkan. Piano naik dari garis paling bawah ke garis paling atas, satu garis atau satu spasi setiap kali. Setiap nada berbunyi sedikit lebih tinggi.",
    },
    "higher-or-lower-listen": {
      text: "Kamu mendengar dua nada. Apakah nada kedua lebih tinggi, lebih rendah, atau sama dengan yang pertama? Nada yang lebih tinggi akan terletak lebih tinggi di paranada.",
    },
    "top-or-bottom-quiz": {
      text: "Satu not terletak di garis paling atas, dan satu lagi di garis paling bawah. Mana yang berbunyi lebih tinggi?",
      answers: ["Not di garis paling bawah", "Not di garis paling atas", "Bunyinya sama"],
    },
    "first-line-quiz": {
      text: "Garis mana yang menjadi garis pertama paranada?",
      answers: ["Garis paling bawah", "Garis tengah", "Garis paling atas"],
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu sudah mengenal paranada.",
      points: [
        "Paranada punya lima garis dan empat spasi, dihitung dari bawah.",
        "Not terletak di garis atau di spasi.",
        "Makin tinggi not di paranada, makin tinggi bunyinya.",
      ],
    },
  },
};
