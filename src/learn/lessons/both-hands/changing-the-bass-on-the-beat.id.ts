/** *Changing the bass on the beat* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { ChangingTheBassOnTheBeatTexts } from "./changing-the-bass-on-the-beat.en";

export const changingTheBassOnTheBeatId: Translation<ChangingTheBassOnTheBeatTexts> = {
  title: "Mengganti bas tepat pada ketukan",
  steps: {
    "bass-changes": {
      text: "Dengarkan tangan kiri. Tangan kiri menahan kuint selama satu birama penuh, lalu pindah ke kuint baru. Tangan kanan tidak pernah berhenti.",
    },
    "beat-one": {
      text: "Bas berganti pada ketukan 1, yaitu ketukan pertama birama baru. Bas masuk bersamaan dengan not tangan kanan pada ketukan itu.",
    },
    "when-it-changes": {
      text: "Pada ketukan berapa tangan kiri pindah ke kuint barunya?",
      answers: ["Pada ketukan 1 birama baru", "Pada ketukan 4, sedikit lebih awal", "Kapan saja tangan kanan beristirahat"],
    },
    "count-the-bars": {
      text: "Ketuk setiap ketukan selama dua birama, sambil menghitung: satu, dua, tiga, empat. Rasakan bahwa setiap birama dimulai pada ketukan 1.",
    },
    "land-on-one": {
      text: "Tahan kuint yang lama sampai akhir ketukan 4. Lalu lepaskan, dan mainkan kuint baru tepat pada ketukan 1.",
    },
    "c-to-g": {
      text: "Tangan kirimu saja. Mainkan kuint pada C di bawah C tengah, turun ke kuint pada G di bawahnya, lalu kembali ke C.",
    },
    "change-under-tune": {
      text: "Sekarang kedua tangan. Kuintnya ada pada C, lalu pada G di bawahnya, lalu pada C lagi. Setiap birama dimulai dengan kuint baru dan not melodi bersamaan.",
    },
    "four-basses": {
      text: "Dengarkan empat birama, masing-masing dengan kuintnya sendiri: C, F, G, dan C lagi. Setiap pergantian jatuh pada ketukan 1.",
    },
    "four-bars": {
      text: "Giliranmu. Mainkan empat birama itu dengan kuint pada C, lalu pada F dan G di bawahnya, lalu pada C lagi. Ganti kuint bersamaan dengan not pertama setiap birama.",
    },
    recap: {
      text: "Bagus sekali. Sekarang tangan kirimu mengganti bas tepat pada ketukan.",
      points: [
        "Bas berganti pada ketukan 1 birama baru.",
        "Kuint baru masuk bersamaan dengan not tangan kanan.",
        "Tahan kuint yang lama sampai birama selesai, lalu pindah.",
      ],
    },
  },
};
