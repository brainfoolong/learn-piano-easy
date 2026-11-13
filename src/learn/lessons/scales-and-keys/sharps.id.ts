/** *Sharps* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { SharpsTexts } from "./sharps.en";

export const sharpsId: Translation<SharpsTexts> = {
  title: "Kres",
  steps: {
    "raised-by-a-half-step": {
      text: "Dengarkan: C, lalu tuts hitam tepat di kanannya. Lalu F, dan tuts hitam tepat di kanan F.",
    },
    "the-sharp-sign": {
      text: "Tanda ♯ ini adalah kres. Kres menaikkan not setengah nada, ke tuts tepat di kanannya. Jadi C kres, ditulis C♯, adalah tuts hitam di kanan C.",
    },
    "find-c-sharp": {
      text: "Temukan C kres. Mulai dari C mana pun, lalu naik setengah nada.",
    },
    "find-f-sharp": {
      text: "Sekarang temukan F kres. Itu tuts hitam pertama dari kelompok tiga.",
    },
    "where-is-g-sharp": {
      text: "Di mana G kres?",
      answers: ["Tuts hitam tepat di kiri G", "Tuts hitam tepat di kanan G", "Tuts putih A"],
    },
    "e-sharp": {
      text: "Tidak ada tuts hitam di kanan E. Setengah nada di atas E jatuh di F. Jadi E kres adalah F, dan B kres adalah C.",
    },
    "e-sharp-is": {
      text: "Tuts mana yang kamu tekan untuk E kres?",
    },
    "sharp-on-the-staff": {
      text: "Di paranada, tanda ♯ berdiri tepat di kiri not, pada garis atau spasi yang sama. Baca notnya, lalu naik setengah nada.",
    },
    "play-sharps": {
      text: "Baca setiap not bersama kresnya, lalu mainkan. Temukan dulu tuts putihnya, lalu naik setengah nada.",
    },
    "through-f-sharp": {
      text: "Letakkan ibu jari kananmu di D di atas C tengah, dan jari tengahmu di F kres. Mainkan D, E, F kres, dan G, lalu turun lagi ke D.",
    },
    recap: {
      text: "Bagus sekali. Kamu bisa membaca dan memainkan kres.",
      points: [
        "Kres ♯ menaikkan not setengah nada, ke tuts tepat di kanannya.",
        "Kebanyakan kres adalah tuts hitam, seperti C kres dan F kres.",
        "E kres adalah F, dan B kres adalah C, karena tidak ada tuts hitam di antaranya.",
        "Di paranada, tanda ♯ berdiri tepat di kiri notnya.",
      ],
    },
  },
};
