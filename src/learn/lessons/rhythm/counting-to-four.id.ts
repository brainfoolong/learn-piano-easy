/** *Counting to four* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourId: Translation<CountingToFourTexts> = {
  title: "Menghitung sampai empat",
  steps: {
    "bars-demo": {
      text: "Perhatikan dan dengarkan. C rendah membuka setiap kelompok empat ketukan, dan G berbunyi pada tiga ketukan lainnya.",
    },
    "what-a-bar-is": {
      text: "Ketukan dikelompokkan dalam birama, dan garis birama menutup setiap birama. Di sini setiap birama punya empat ketukan, dihitung “1, 2, 3, 4”. Inilah birama 4/4, dan ketukan 1 yang paling kuat.",
    },
    "beats-in-a-bar-quiz": {
      text: "Berapa ketukan dalam satu birama 4/4?",
      answers: ["Tiga ketukan", "Empat ketukan", "Delapan ketukan"],
    },
    "strongest-beat-quiz": {
      text: "Ketukan mana dalam satu birama yang terasa paling kuat?",
      answers: ["Ketukan 1", "Ketukan 2", "Ketukan 4"],
    },
    "count-aloud-tap": {
      text: "Tekan Mulai, lalu ketuk tuts mana saja pada setiap klik. Hitung dengan suara keras sambil mengetuk: “1, 2, 3, 4”. Ucapkan ketukan 1 sedikit lebih keras.",
    },
    "fill-a-bar-quiz": {
      text: "Mana yang mengisi satu birama 4/4?",
      answers: ["Dua not setengah", "Tiga not seperempat", "Satu not penuh dan satu not seperempat"],
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa menghitung birama empat ketukan.",
      points: [
        "Ketukan dikelompokkan dalam birama, dan garis birama menutup setiap birama.",
        "Dalam birama 4/4, kamu menghitung “1, 2, 3, 4”.",
        "Ketukan 1 adalah ketukan terkuat dalam satu birama.",
      ],
    },
  },
};
