/** *Phrases* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { PhrasesTexts } from "./phrases.en";

export const phrasesId: Translation<PhrasesTexts> = {
  title: "Frasa",
  steps: {
    "phrase-demo": {
      text: "Dengarkan dua melodi pendek, satu setelah yang lain. Yang pertama seperti bertanya, dan yang kedua menjawabnya. Dengarkan tarikan napas kecil di antara keduanya.",
    },
    "musical-sentences": {
      text: "Musik berbicara dalam kalimat, sama seperti kamu. Kalimat musik disebut frasa. Panjangnya sering empat birama.",
    },
    "what-is-a-phrase": {
      text: "Apa itu frasa?",
      answers: [
        "Satu not yang keras",
        "Kalimat musik, sering empat birama panjangnya",
        "Akor yang dimainkan terurai",
        "Tanda yang berarti main cepat",
      ],
    },
    "the-long-slur": {
      text: "Tanda legato yang pendek menghubungkan beberapa not secara legato. Tanda legato yang panjang di atas beberapa birama menandai satu frasa utuh. Mainkan notnya sebagai satu alur yang mulus.",
    },
    "slur-shows": {
      text: "Sebuah tanda legato panjang membentang di atas empat birama. Apa yang ditunjukkannya?",
      answers: [
        "Satu frasa, dimainkan sebagai satu alur yang mulus",
        "Empat not yang keras",
        "Angkat tangan setelah setiap not",
        "Injak pedal terus",
      ],
    },
    "play-question": {
      text: "Mainkan frasa pertama dengan tangan kananmu di posisi C: C-D-E-F, G, E, F-E-D-E, dan akhiri pada D. Mainkan dengan mulus.",
    },
    breathe: {
      text: "Di akhir frasa, angkat tanganmu sedikit, seperti penyanyi menarik napas. Lalu mulailah frasa berikutnya.",
    },
    "question-and-answer": {
      text: "Mainkan frasa pertama, lalu angkat tanganmu setelah D terakhirnya. Sesudah itu, mainkan frasa kedua: C-D-E-F, G, E, F-E-D-D, dan akhiri pada C.",
    },
    "open-and-home": {
      text: "Frasa pertama berakhir pada D, jadi bunyinya terbuka, seperti pertanyaan. Frasa kedua berakhir pada C, not tempat C mayor beristirahat, seperti jawaban.",
    },
    "which-ends-answer": {
      text: "Dalam C mayor, not terakhir mana yang membuat frasa terdengar selesai, seperti jawaban?",
      answers: ["D", "F", "B", "C"],
    },
    "rise-and-fall-demo": {
      text: "Dengarkan satu frasa. Frasa ini mulai dengan lembut, makin keras sampai G, lalu surut lagi menjelang akhirnya.",
    },
    "where-loudest": {
      text: "Di mana frasa sering paling keras?",
      answers: [
        "Pada not pertamanya",
        "Pada not terakhirnya",
        "Di dekat tengahnya atau pada not tertingginya",
        "Tidak ada, kerasnya tetap sama",
      ],
    },
    "shape-both-phrases": {
      text: "Mainkan dua frasa dengan tangan kananmu, mulai dari C tengah, dan tarik napas di antara keduanya. Pertama mainkan C D E F G, E F E D, E D, lalu C D E F G, E F E D, D C. Hanya not yang diperiksa, jadi biarkan telingamu membuat setiap frasa makin keras menuju G dan makin lembut menuju akhirnya.",
    },
    "when-to-breathe": {
      text: "Kapan kamu mengangkat tangan untuk menarik napas?",
      answers: [
        "Setelah setiap not",
        "Di antara dua frasa",
        "Di tengah frasa",
        "Tidak pernah",
      ],
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa memainkan musik dalam frasa.",
      points: [
        "Frasa adalah kalimat musik, sering empat birama panjangnya.",
        "Tanda legato yang panjang menunjukkan satu frasa. Mainkan sebagai satu alur yang mulus.",
        "Angkat tanganmu untuk menarik napas di antara dua frasa.",
        "Frasa sering bertanya atau menjawab, dan makin keras, lalu makin lembut.",
      ],
    },
  },
};
