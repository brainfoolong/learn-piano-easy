/** *Eighth notes* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { EighthNotesTexts } from "./eighth-notes.en";

export const eighthNotesId: Translation<EighthNotesTexts> = {
  title: "Not seperdelapan",
  steps: {
    "eighth-demo": {
      text: "Perhatikan dan dengarkan. Pertama, C tengah berbunyi sekali pada setiap ketukan. Lalu C tengah berbunyi dua kali pada setiap ketukan.",
    },
    "what-an-eighth-note-is": {
      text: "Not cepat tadi adalah not seperdelapan. Satu not seperdelapan berbunyi setengah ketukan. Jadi dua not seperdelapan mengisi satu ketukan.",
    },
    "eighths-per-beat-quiz": {
      text: "Berapa not seperdelapan yang mengisi satu ketukan?",
      answers: ["Satu", "Dua", "Empat"],
    },
    "count-and": {
      text: "Untuk menghitung not seperdelapan, ucapkan “dan” di antara ketukan: “1 dan 2 dan 3 dan 4 dan”. Angkanya jatuh tepat pada ketukan, dan setiap “dan” jatuh tepat di tengah antara dua ketukan.",
    },
    "counting-demo": {
      text: "Hitung bersama: “1, 2, 3 dan, 4”. Dua not E yang cepat jatuh pada “3” dan pada “dan” sesudahnya.",
    },
    "eighth-taps": {
      text: "Ketukannya sekarang lambat, 60 per menit, dan kliknya datang dua kali lebih cepat. Setiap klik adalah satu not seperdelapan. Hitung “1 dan 2 dan” sambil menekan tuts apa saja pada setiap klik.",
    },
    "eighths-per-bar-quiz": {
      text: "Satu birama punya empat ketukan. Berapa not seperdelapan yang mengisinya?",
      answers: ["Empat", "Enam", "Delapan"],
    },
    "phrase-demo": {
      text: "Sekarang kedua tangan bermain. Tangan kiri menahan C rendah, sementara tangan kanan bergerak cepat naik ke G dengan not seperdelapan. Lalu tangan kanan turun lagi ke C.",
    },
    "eighth-phrase": {
      text: "Letakkan kedua tangan di posisi C. Tangan kananmu memainkan C D E F G G F E D C, mulai dari C tengah. Kelingking kirimu menekan C di bawah C tengah bersama C pertama, dan sekali lagi bersama G kedua.",
    },
    recap: {
      text: "Bagus sekali. Sekarang notmu bisa bergerak dua kali lebih cepat.",
      points: [
        "Not seperdelapan berbunyi setengah ketukan.",
        "Dua not seperdelapan mengisi satu ketukan.",
        "Kamu menghitung not seperdelapan sebagai “1 dan 2 dan”.",
      ],
    },
  },
};
