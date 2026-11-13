/** *Hands take turns* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { HandsTakeTurnsTexts } from "./hands-take-turns.en";

export const handsTakeTurnsId: Translation<HandsTakeTurnsTexts> = {
  title: "Tangan bergantian",
  steps: {
    "call-and-answer": {
      text: "Dengarkan tanya-jawab ini. Tangan kanan memainkan tiga not, lalu tangan kiri memainkannya lagi, satu oktaf lebih rendah.",
    },
    "both-positions": {
      text: "Letakkan kedua tangan di posisi C sekaligus. Ibu jari kananmu berada di C tengah, dan kelingking kirimu berada di C satu oktaf di bawahnya.",
    },
    "low-hand-quiz": {
      text: "Kedua tangan ada di posisi C. Tangan mana yang memainkan not rendah?",
      answers: ["Tangan kirimu", "Tangan kananmu", "Kedua tangan bersamaan"],
    },
    "echo-listen": {
      text: "Dengarkan dua not setiap kali. Apakah not kedua lebih tinggi, lebih rendah, atau sama?",
    },
    "first-turn": {
      text: "Giliranmu. Mainkan C D E dengan tangan kananmu, lalu C D E dengan tangan kirimu.",
    },
    "second-turn": {
      text: "Sekarang mulai dari kelingking kananmu dan turun sampai E. Tangan kirimu menjawab, dari ibu jarinya turun sampai E.",
    },
    "one-waits": {
      text: "Saat satu tangan bermain, tangan lainnya diam di tutsnya dan menunggu. Tangan itu tetap di tempatnya, jadi siap saat gilirannya tiba.",
    },
    "long-phrase": {
      text: "Biarkan kedua tanganmu di posisi C. Melodi yang lebih panjang ini punya empat giliran: tangan kanan, tangan kiri, kanan, lalu kiri. Ikuti tuts yang ditandai dari tangan ke tangan.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kedua tanganmu berbagi satu melodi.",
      points: [
        "Kedua tangan bisa berada di posisi C sekaligus, berjarak satu oktaf.",
        "Tangan kirimu memainkan not rendah, dan tangan kananmu not tinggi.",
        "Satu tangan bermain, sementara tangan lainnya menunggu gilirannya di tempat.",
      ],
    },
  },
};
