/** *The key hunt* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntId: Translation<KeyHuntTexts> = {
  title: "Berburu tuts",
  steps: {
    ready: {
      text: "Saatnya berburu tuts! Kamu punya delapan detik untuk setiap tuts. Temukan jalanmu lewat kelompok tuts hitam.",
    },
    "any-c": { text: "Temukan C mana saja." },
    "middle-c": { text: "Sekarang temukan C tengah, yaitu C di tengah piano." },
    "any-f": { text: "Temukan F mana saja." },
    "any-g": { text: "Temukan G mana saja." },
    "any-d": { text: "Temukan D mana saja." },
    "any-b": { text: "Temukan B mana saja." },
    "three-middle": { text: "Temukan tuts hitam tengah dari kelompok tiga." },
    "any-e": { text: "Temukan E mana saja." },
    "any-a": { text: "Temukan A mana saja." },
    "high-c": { text: "Yang terakhir! Temukan C yang satu oktaf di atas C tengah." },
    recap: {
      text: "Kamu sudah menyelesaikan perburuan tuts. Sekarang kamu tahu jalan di piano.",
      points: [
        "Tuts hitam memandumu, dalam kelompok dua dan tiga.",
        "Tuts putih diberi nama dengan tujuh huruf, dari C sampai B.",
        "Huruf yang sama muncul lagi satu oktaf lebih tinggi.",
      ],
    },
  },
};
