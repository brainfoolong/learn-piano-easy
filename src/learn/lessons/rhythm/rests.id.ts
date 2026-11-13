/** *Rests* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { RestsTexts } from "./rests.en";

export const restsId: Translation<RestsTexts> = {
  title: "Tanda istirahat",
  steps: {
    "rests-demo": {
      text: "Perhatikan dan dengarkan. Pada beberapa ketukan, piano diam, tetapi ketukannya terus berjalan.",
    },
    "what-a-rest-is": {
      text: "Tanda istirahat adalah saat hening dalam musik. Kamu tidak memainkan apa pun, tetapi tetap menghitungnya. Tanda istirahat seperempat berlangsung satu ketukan, sama seperti not seperempat.",
    },
    "quarter-rest-quiz": {
      text: "Kamu memainkan C, C, tanda istirahat seperempat, lalu C. Berapa ketukan hening di situ?",
      answers: ["Satu ketukan", "Dua ketukan", "Tidak ada sama sekali"],
    },
    "half-rest": {
      text: "Tanda istirahat setengah berlangsung dua ketukan, sama seperti not setengah. Kamu diam dan menghitung dua ketukan sebelum bermain lagi.",
    },
    "half-rest-quiz": {
      text: "Berapa ketukan hening dalam tanda istirahat setengah?",
      answers: ["Satu ketukan", "Dua ketukan", "Empat ketukan"],
    },
    "fill-a-bar-quiz": {
      text: "Kamu memainkan not seperempat, lalu tanda istirahat seperempat, lalu not setengah. Berapa ketukan semuanya?",
      answers: ["Dua ketukan", "Tiga ketukan", "Empat ketukan"],
    },
    "phrase-with-rests": {
      text: "Perhatikan dan dengarkan. Piano memainkan C D E, diam satu ketukan, lalu memainkan E D. Piano diam dua ketukan dan berakhir di C.",
    },
    "play-with-rests": {
      text: "Giliranmu, setelah satu birama hitungan awal. Mainkan C D E tepat pada klik, lalu angkat jarimu selama satu ketukan hening. Mainkan E D, diam selama dua ketukan, dan akhiri di C.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu sudah kenal tanda istirahat pertamamu.",
      points: [
        "Tanda istirahat adalah saat hening yang tetap dihitung.",
        "Tanda istirahat seperempat berlangsung satu ketukan.",
        "Tanda istirahat setengah berlangsung dua ketukan.",
      ],
    },
  },
};
