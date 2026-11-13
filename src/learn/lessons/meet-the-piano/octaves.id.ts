/** *Octaves* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { OctavesTexts } from "./octaves.en";

export const octavesId: Translation<OctavesTexts> = {
  title: "Oktaf",
  steps: {
    "three-cs": {
      text: "Dengarkan tiga tuts C, dari rendah ke tinggi. Perhatikan letak setiap tuts di piano.",
    },
    "same-letter": {
      text: "Hitung tuts putih naik dari C: C D E F G A B, lalu C lagi. Huruf yang sama muncul lagi di tuts putih kedelapan, termasuk tuts awalmu. Jarak itu disebut oktaf.",
    },
    "count-quiz": {
      text: "Ada berapa tuts putih dari satu C sampai C berikutnya, jika keduanya ikut dihitung?",
      answers: ["Lima", "Delapan", "Dua belas"],
    },
    "sound-alike": {
      text: "Dua nada yang berjarak satu oktaf berbunyi mirip, seolah-olah nadanya sama. Salah satunya lebih tinggi dari yang lain.",
    },
    "octave-listen": {
      text: "Setiap kali, kamu mendengar dua nada. Apakah nada kedua lebih tinggi, lebih rendah, atau sama dengan yang pertama?",
    },
    "e-above": {
      text: "E pertama di atas C tengah terletak dua tuts putih di kanan C tengah. Tekan E yang satu oktaf di atas E itu.",
    },
    "c-below": {
      text: "Sekarang ke arah sebaliknya. Tekan C yang satu oktaf di bawah C tengah.",
    },
    "octave-pair": {
      text: "Mainkan sendiri satu oktaf: E pertama di atas C tengah, lalu E yang satu oktaf lebih tinggi. Dengarkan betapa miripnya bunyi keduanya.",
    },
    "octave-quiz": {
      text: "Apa itu oktaf?",
      answers: [
        "Dua tuts yang bersebelahan",
        "Dua tuts hitam dalam satu kelompok",
        "Jarak dari satu huruf ke huruf yang sama, delapan tuts putih jika keduanya dihitung",
      ],
    },
    recap: {
      text: "Bagus sekali. Kamu tahu apa itu oktaf.",
      points: [
        "Huruf yang sama muncul lagi di tuts putih kedelapan, termasuk tuts pertama.",
        "Jarak itu adalah oktaf.",
        "Dua nada yang berjarak satu oktaf berbunyi mirip, dan salah satunya lebih tinggi.",
      ],
    },
  },
};
