/** *Reading steps and skips* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { ReadingStepsAndSkipsTexts } from "./reading-steps-and-skips.en";

export const readingStepsAndSkipsId: Translation<ReadingStepsAndSkipsTexts> = {
  title: "Membaca geser dan loncatan kecil",
  steps: {
    "moves-demo": {
      text: "Dengarkan. Mula-mula not naik dengan geser, lalu dengan loncatan kecil. Di paranada, setiap gerakan terlihat berbeda.",
    },
    "step-on-the-staff": {
      text: "Geser di paranada berpindah dari garis ke spasi berikutnya, atau dari spasi ke garis berikutnya. Di tuts, geser berpindah ke tuts putih berikutnya.",
    },
    "step-from-line-quiz": {
      text: "Sebuah not terletak di garis. Di mana not yang satu geser di atasnya?",
      answers: ["Di spasi tepat di atasnya", "Di garis berikutnya di atas", "Dua garis di atasnya"],
    },
    "skip-on-the-staff": {
      text: "Loncatan kecil di paranada berpindah dari garis ke garis berikutnya, atau dari spasi ke spasi berikutnya. Di tuts, loncatan kecil melewati satu tuts putih.",
    },
    "step-or-skip-quiz": {
      text: "Sebuah not berpindah dari garis ke garis berikutnya di atasnya. Itu geser atau loncatan kecil?",
      answers: ["Geser", "Loncatan kecil"],
    },
    "space-to-line-quiz": {
      text: "Sebuah not berpindah dari spasi ke garis tepat di atasnya. Itu geser atau loncatan kecil?",
      answers: ["Geser", "Loncatan kecil"],
    },
    "read-by-moves": {
      text: "Kamu tidak perlu menyebut nama setiap not. Sebutkan nama not pertama, lalu baca setiap gerakan: naik atau turun, geser atau loncatan kecil.",
    },
    "skip-from-e-quiz": {
      text: "Sebuah not E terletak di garis paling bawah paranada kunci G. Not berikutnya terletak di garis berikutnya di atasnya. Not apa itu?",
    },
    "first-note": {
      text: "Lagu berikutnya dimulai dengan not ini. Sebutkan namanya.",
    },
    "hand-on-d": {
      text: "Perhatikan tangan kanan berpindah naik dari posisi C. Ibu jari berada di D, dan jari 2 sampai 5 menutupi E, G, A, dan B. F dilewati, jadi jari 2 dan 3 membuka sedikit lebih lebar.",
    },
    "d-position": {
      text: "Giliranmu. Letakkan ibu jari kananmu di D, lalu mainkan D E G A B dengan jari 1 sampai 5. Setelah itu, turun kembali ke D.",
    },
    "song-notes": {
      text: "Lagu berikutnya memakai kelima not ini. Baca setiap not, lalu mainkan dengan tangan kananmu.",
    },
    "song-opening": {
      text: "Ini awal lagu berikutnya. Biarkan tangan kananmu di D, E, G, A, dan B, lalu ikuti tuts yang ditandai.",
    },
    "opening-move-quiz": {
      text: "Dalam melodi itu, E turun ke D. E terletak di garis paling bawah. Di mana D?",
      answers: ["Di spasi tepat di bawahnya", "Di garis di bawahnya", "Di garis yang sama"],
    },
    "dotted-demo": {
      text: "Dengarkan dua birama lagu ini. Titik membuat not lebih panjang setengahnya lagi: not setengah bertitik berlangsung tiga ketukan. D, sebuah not seperempat bertitik, berlangsung satu setengah ketukan, dan tanda istirahat seperdelapan mengisi setengah ketukan terakhir.",
    },
    "dotted-half-quiz": {
      text: "Not setengah berlangsung dua ketukan. Berapa ketukan not setengah bertitik?",
      answers: ["Dua ketukan", "Tiga ketukan", "Empat ketukan"],
    },
    "dotted-tap": {
      text: "Giliranmu, setelah satu birama hitungan awal. Mainkan E, E, dan D tepat pada klik, lalu lepaskan D setelah satu setengah ketukan. Tahan G selama tiga ketukan, lalu mainkan D.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa membaca melodi dari gerakannya.",
      points: [
        "Geser berpindah dari garis ke spasi berikutnya, atau dari spasi ke garis berikutnya.",
        "Loncatan kecil berpindah dari garis ke garis, atau dari spasi ke spasi.",
        "Sebutkan nama not pertama, lalu baca setiap gerakan: arahnya dan besarnya.",
        "Titik membuat not lebih panjang setengahnya lagi.",
      ],
    },
  },
};
