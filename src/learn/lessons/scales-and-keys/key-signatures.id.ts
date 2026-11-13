/** *Key signatures* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { KeySignaturesTexts } from "./key-signatures.en";

export const keySignaturesId: Translation<KeySignaturesTexts> = {
  title: "Tanda mula",
  steps: {
    "signs-at-the-start": {
      text: "Dalam G mayor, setiap F dimainkan sebagai F kres. Partitur tidak menandai setiap F. Partitur menaruh kres sekali saja, di awal setiap baris.",
    },
    "every-octave": {
      text: "Tanda ini disebut tanda mula. Kres di garis F berarti setiap F adalah F kres, tinggi atau rendah. Mol di garis B berarti setiap B adalah B mol.",
    },
    "one-sharp": {
      text: "Tanda mula menunjukkan satu kres, di garis F. Musik ini dalam nada dasar apa?",
      answers: ["G mayor", "F mayor", "C mayor"],
    },
    "one-flat": {
      text: "Tanda mula menunjukkan satu mol, di garis B. Musik ini dalam nada dasar apa?",
      answers: ["C mayor", "F mayor", "G mayor"],
    },
    "no-signs": {
      text: "Tanda mula tidak menunjukkan kres maupun mol. Musik ini dalam nada dasar apa?",
      answers: ["F mayor", "G mayor", "C mayor"],
    },
    "letter-stays": {
      text: "Sebut setiap not dengan hurufnya. Tanda mula mengubah tuts yang kamu tekan, tetapi not tetap memakai hurufnya.",
    },
    "f-in-g-major": {
      text: "Tanda mula punya satu kres. Paranada menunjukkan F. Tuts mana yang kamu mainkan?",
      answers: ["F kres, tuts hitam", "F, tuts putih"],
    },
    "phrase-in-g": {
      text: "Ini frasa dalam G mayor. Ibu jari kananmu mulai di D kedua di atas C tengah. Dengarkan F kres di bagian paling atas.",
    },
    "play-in-g": {
      text: "Giliranmu. Tanda mula punya satu kres, jadi setiap F adalah F kres.",
    },
    "b-in-f-major": {
      text: "Tanda mula punya satu mol. Paranada menunjukkan B. Tuts mana yang kamu mainkan?",
      answers: ["B, tuts putih", "B mol, tuts hitam"],
    },
    "play-in-f": {
      text: "Sekarang frasa dalam F mayor. Letakkan ibu jari kananmu di F di atas C tengah. Tanda mula punya satu mol, jadi setiap B adalah B mol.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa membaca tanda mula. Berikutnya ada lagu dalam C mayor, tanpa kres atau mol.",
      points: [
        "Tanda mula berdiri di awal setiap baris.",
        "Kres atau molnya berlaku untuk setiap not dengan huruf itu, di setiap oktaf.",
        "Satu kres di F berarti G mayor, dan satu mol di B berarti F mayor.",
        "Tanpa kres dan tanpa mol berarti C mayor.",
      ],
    },
  },
};
