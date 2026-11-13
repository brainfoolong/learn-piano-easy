/** *The waltz bass* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheWaltzBassTexts } from "./the-waltz-bass.en";

export const theWaltzBassId: Translation<TheWaltzBassTexts> = {
  title: "Bas wals",
  steps: {
    "waltz-demo": {
      text: "Dengarkan tangan kiri saja. Bunyinya berayun per tiga, seperti tarian. Inilah bas wals.",
    },
    "three-beats": {
      text: "Wals memakai birama 3/4. Setiap birama punya tiga ketukan: “satu, dua, tiga”. Ketukan 1 adalah ketukan yang kuat.",
    },
    "oom-pah-pah": {
      text: "Pada ketukan 1, tangan kiri memainkan nada akar akor, di nada rendah. Pada ketukan 2 dan 3, tangan kiri memainkan dua not atas bersamaan. Bunyinya seperti “dum-ta-ta”.",
    },
    "root-on-one": {
      text: "Dalam bas wals, pada ketukan berapa nada akar yang rendah berbunyi?",
      answers: ["Ketukan 2", "Ketukan 1", "Ketukan 3"],
    },
    "c-waltz": {
      text: "Giliranmu, pada C. Jari 5 memainkan C di bawah C tengah, lalu jari 3 dan 1 memainkan E dan G bersamaan, dua kali. Mainkan dua birama.",
    },
    "g-and-f-shapes": {
      text: "Pola yang sama berlaku untuk setiap akor. Untuk G, mainkan G rendah, lalu B dan D. Untuk F, mainkan F rendah, lalu A dan C.",
    },
    "g-waltz": {
      text: "Geser tanganmu turun ke G terdekat di bawah C yang ada di bawah C tengah. Jari 5 memainkan G, lalu jari 3 dan 1 memainkan B dan D bersamaan, dua kali.",
    },
    "f-beats-two-and-three": {
      text: "Dalam birama pada F, apa yang dimainkan tangan kiri pada ketukan 2 dan 3?",
      answers: ["F saja", "F, A, dan C satu per satu", "A dan C bersamaan"],
    },
    "f-waltz": {
      text: "Sekarang pindah ke F, satu tuts putih di bawah G itu. Jari 5 memainkan F, lalu jari 3 dan 1 memainkan A dan C bersamaan, dua kali.",
    },
    "chord-walk": {
      text: "Mainkan masing-masing satu birama C, F, G, dan C. Pindahkan tanganmu pada ketukan 1, dan terus hitung sampai tiga.",
    },
    "waltz-tune-demo": {
      text: "Ini melodi pendek di atas bas wals. Tangan kanan memainkan not panjang, sementara tangan kiri terus memainkan “dum-ta-ta”.",
    },
    "waltz-tune": {
      text: "Letakkan ibu jari kananmu di C tengah. Tekan setiap not melodi bersamaan dengan tuts tangan kiri di bawahnya, dan terus mainkan bas wals di antaranya.",
    },
    recap: {
      text: "Bagus sekali. Sekarang tangan kirimu bisa memainkan bas wals.",
      points: [
        "Wals memakai birama 3/4, dengan tiga ketukan per birama.",
        "Tangan kiri memainkan nada akar di nada rendah pada ketukan 1.",
        "Pada ketukan 2 dan 3, tangan kiri memainkan not atas bersamaan.",
        "Polanya ikut berpindah bersama akornya: C, F, dan G.",
      ],
    },
  },
};
