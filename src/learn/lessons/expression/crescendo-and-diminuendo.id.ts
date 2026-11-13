/** *Crescendo and diminuendo* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { CrescendoAndDiminuendoTexts } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendoId: Translation<CrescendoAndDiminuendoTexts> = {
  title: "Crescendo dan diminuendo",
  steps: {
    "crescendo-demo": {
      text: "Dengarkan C, D, E, F, dan G. Setiap not berbunyi sedikit lebih keras daripada not sebelumnya.",
    },
    "getting-louder": {
      text: "Bunyi yang makin keras sedikit demi sedikit disebut crescendo. Partitur menandainya dengan cresc., atau dengan tanda crescendo <. Tanda itu makin lebar seiring bunyinya makin keras.",
    },
    "what-cresc-asks": {
      text: "Kamu melihat cresc. di bawah paranada. Apa yang diminta tanda itu?",
      answers: [
        "Makin lembut sedikit demi sedikit",
        "Makin keras sedikit demi sedikit",
        "Bermain lebih cepat",
        "Memainkan not lebih tinggi",
      ],
    },
    "play-crescendo": {
      text: "Mainkan C, D, E, F, dan G sebagai crescendo, mulai dari C tengah. Tekan C, D, dan E dengan pelan dan lambat, lalu F dan G dengan cepat dan mantap.",
    },
    "hear-crescendo": {
      text: "Dengarkan C, D, E, F, dan G dimainkan sebagai crescendo. Setiap tuts turun sedikit lebih cepat daripada tuts sebelumnya.",
    },
    "how-crescendo-changed": {
      text: "Bagaimana bunyinya berubah dari not pertama sampai not terakhir?",
      answers: ["Tetap lembut", "Makin lembut", "Tetap keras", "Makin keras"],
    },
    "diminuendo-demo": {
      text: "Sekarang dengarkan G, F, E, D, dan C. Setiap not berbunyi sedikit lebih lembut daripada not sebelumnya.",
    },
    "getting-softer": {
      text: "Bunyi yang makin lembut sedikit demi sedikit disebut diminuendo, dengan tanda dim. Nama lainnya decrescendo, dengan tanda decresc. Tanda diminuendo > meminta hal yang sama.",
    },
    "which-hairpin-softer": {
      text: "Tanda mana yang memintamu makin lembut sedikit demi sedikit?",
      answers: ["Tanda > yang menyempit", "Tanda < yang melebar", "Tanda f", "Tanda mf"],
    },
    "play-diminuendo": {
      text: "Mainkan G, F, E, D, dan C sebagai diminuendo, mulai dari G di atas C tengah. Tekan G, F, dan E dengan cepat dan mantap, lalu D dan C dengan pelan dan lambat.",
    },
    "hear-diminuendo": {
      text: "Dengarkan G, F, E, D, dan C dimainkan sebagai diminuendo. Setiap tuts turun sedikit lebih lambat daripada tuts sebelumnya.",
    },
    "how-diminuendo-changed": {
      text: "Bagaimana bunyinya berubah dari not pertama sampai not terakhir?",
      answers: ["Makin keras", "Tetap keras", "Makin lembut", "Tetap lembut"],
    },
    "swell-and-fade": {
      text: "Frasa sering makin keras saat naik dan makin lembut saat turun. Bunyinya mengembang dan surut seperti ombak.",
    },
    "play-swell": {
      text: "Mainkan dari C tengah naik ke G, lalu turun lagi ke C. Mainkan makin keras saat naik dan makin lembut saat turun. Langkah ini hanya memeriksa not, jadi biarkan telingamu menilai kerasnya.",
    },
    "how-it-ends": {
      text: "Sebuah frasa dimulai dengan p, dan ada tanda crescendo < di bawahnya. Bagaimana frasa itu seharusnya berakhir?",
      answers: [
        "Lebih lembut daripada p",
        "Sama lembutnya dengan awalnya",
        "Lebih cepat daripada awalnya",
        "Lebih keras daripada awalnya",
      ],
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa membuat musik makin keras dan makin lembut.",
      points: [
        "Crescendo makin keras, dengan tanda cresc. atau tanda crescendo <.",
        "Diminuendo makin lembut, dengan tanda dim., decresc., atau tanda diminuendo >.",
        "Frasa sering mengembang saat naik dan surut saat turun.",
      ],
    },
  },
};
