/** *G major* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { GMajorTexts } from "./g-major.en";

export const gMajorId: Translation<GMajorTexts> = {
  title: "G mayor",
  steps: {
    "g-scale-demo": {
      text: "Dengarkan tangga nada yang mulai di G. Bunyinya sama cerahnya dengan C mayor. Satu tuts yang dilewatinya berwarna hitam.",
    },
    "pattern-from-g": {
      text: "Mulai pola tangga nada di G: satu, satu, setengah, satu, satu. Hasilnya G, A, B, C, D, dan E. Sejauh ini semua tutsnya putih.",
    },
    "whole-step-above-e": {
      text: "Dari E, pola meminta satu nada. Tuts mana yang satu nada di atas E?",
    },
    "one-sharp": {
      text: "Jadi tangga nada G mayor memakai F kres, bukan F. Dari F kres, setengah nada membawamu ke G paling atas. G mayor punya satu kres: F kres.",
    },
    "find-f-sharp": {
      text: "Temukan F kres di papan tuts. Itu tuts hitam tepat di kanan F.",
    },
    "same-fingering": {
      text: "Tangan kananmu memainkan G mayor seperti C mayor. Jari 1, 2, dan 3 memainkan G, A, dan B. Ibu jari menyusup ke C, lalu 1, 2, 3, 4, 5 memainkan C, D, E, F kres, dan G.",
    },
    "g-scale-up": {
      text: "Giliranmu. Letakkan ibu jari kananmu di G di atas C tengah, lalu mainkan tangga nada G mayor naik sampai G berikutnya. Jari 4 memainkan F kres.",
    },
    "g-scale-down": {
      text: "Sekarang mainkan turun, dari G paling atas kembali ke G tempat kamu mulai. Jari 3 menyeberang di atas ibu jari ke B.",
    },
    "hear-f-and-f-sharp": {
      text: "F kres hanya setengah nada di atas F, jadi dengarkan baik-baik. Apakah tuts kedua lebih tinggi, lebih rendah, atau sama?",
    },
    "g-tune-demo": {
      text: "Ini melodi pendek dalam G mayor. Tangan kirimu menahan kuint G dan D, dan tangan kananmu memainkan F kres.",
    },
    "g-tune": {
      text: "Letakkan ibu jari kananmu di D di atas C tengah, sehingga jari 3 berada di F kres. Tangan kirimu memainkan kuint rendah: G di bawah C yang ada di bawah C tengah, dan D di atasnya. Mainkan kuint itu bersama G pertama, dan sekali lagi bersama G kedua.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah memainkan tangga nada keduamu.",
      points: [
        "Pola tangga nada mayor bisa mulai di tuts mana pun.",
        "Jika mulai di G, pola itu butuh F kres agar setengah nada tetap tepat di bawah not paling atas.",
        "G mayor punya satu kres: F kres.",
        "Penjariannya sama dengan C mayor.",
      ],
    },
  },
};
