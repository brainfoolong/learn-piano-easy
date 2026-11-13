/** *Open fifths* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { OpenFifthsTexts } from "./open-fifths.en";

export const openFifthsId: Translation<OpenFifthsTexts> = {
  title: "Kuint kosong",
  steps: {
    "fifth-sound": {
      text: "Dengarkan tangan kirimu memainkan dua tuts sekaligus. Bunyi ini disebut kuint kosong. Bunyinya terbuka, kuat, dan tenang.",
    },
    "little-finger-and-thumb": {
      text: "Letakkan tangan kirimu di posisi C. Tekan C dengan kelingking dan G dengan ibu jari, keduanya bersamaan. Itulah kuint.",
    },
    "count-the-fifth": {
      text: "Hitung tuts putih dari C naik sampai G, termasuk C dan G. Ada berapa tuts?",
      answers: ["Lima", "Tiga", "Delapan"],
    },
    "first-fifth": {
      text: "Giliranmu. Mainkan kuint C dan G tiga kali. Tekan kedua tuts bersamaan setiap kali.",
    },
    "move-the-fifth": {
      text: "Kuint adalah posisi yang bisa kamu pindahkan. Jaga jarak kelingking dan ibu jarimu tetap sama sambil menggeser seluruh tangan.",
    },
    "fifth-from-g": {
      text: "Kelingking kirimu ada di G. Tuts mana yang dimainkan ibu jarimu untuk membentuk kuint?",
      answers: ["D", "C", "E"],
    },
    "three-fifths": {
      text: "Dengan tangan kirimu, mainkan kuint dari C di bawah C tengah naik ke G. Lalu mainkan kuint pada G di bawah C itu, lalu pada F di bawahnya, dan kembali ke C. Pertahankan posisi yang sama setiap kali.",
    },
    "fifth-under-tune": {
      text: "Sekarang tangan kananmu memainkan melodi di atas kuint. Tangan kirimu menekan kuint bersama not pertama, lalu menahannya.",
    },
    "fifth-and-tune": {
      text: "Giliranmu. Mainkan kuint C dan G bersamaan dengan E di tangan kananmu, lalu D dan C. Mainkan kuint bersama E lagi, lalu dua E lagi.",
    },
    recap: {
      text: "Bagus sekali. Sekarang tangan kirimu memainkan kuint.",
      points: [
        "Kuint merentang lima tuts putih, termasuk kedua ujungnya, dan kedua tutsnya kamu mainkan bersamaan.",
        "Kelingking kirimu memainkan tuts yang rendah, dan ibu jarimu yang tinggi.",
        "Posisinya berpindah: C dan G, G dan D, F dan C.",
        "Kuint di bawah melodi terdengar terbuka dan kuat.",
      ],
    },
  },
};
