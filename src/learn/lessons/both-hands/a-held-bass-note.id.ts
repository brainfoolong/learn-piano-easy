/** *A held bass note* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { AHeldBassNoteTexts } from "./a-held-bass-note.en";

export const aHeldBassNoteId: Translation<AHeldBassNoteTexts> = {
  title: "Not bas yang ditahan",
  steps: {
    "bass-under-tune": {
      text: "Dengarkan dan perhatikan. Tangan kirimu memainkan satu not panjang yang rendah, dan tangan kananmu memainkan melodi di atasnya.",
    },
    "hold-it": {
      text: "Not panjang yang rendah ini adalah not bas. Tangan kirimu memainkannya sebagai not penuh dan menahan tutsnya selama empat ketukan.",
    },
    "let-go-quiz": {
      text: "Tangan kirimu menahan not penuh di bawah empat not seperempat tangan kananmu. Kapan tangan kiri melepasnya?",
      answers: ["Setelah not seperempat keempat", "Setelah not seperempat pertama", "Langsung"],
    },
    "first-bar": {
      text: "Tekan C di bawah C tengah dengan tangan kirimu, dan C tengah dengan tangan kananmu. Tahan C rendah itu selama tangan kananmu memainkan D E F.",
    },
    "both-bars": {
      text: "Mainkan dua birama, dan tahan setiap not bas. Tekan C di bawah C tengah dengan tangan kirimu dan C tengah dengan tangan kananmu, lalu mainkan D E F. Berikutnya, tekan G di bawah C tengah dan G di atas C tengah dengan cara yang sama, lalu mainkan F E D.",
    },
    "half-bass": {
      text: "Not bas juga bisa berupa not setengah. Not ini berbunyi dua ketukan, jadi bas berganti dua kali dalam setiap birama.",
    },
    "half-note-bass": {
      text: "Dengarkan bas yang berupa not setengah. Setiap not bas berbunyi di bawah dua ketukan melodi.",
    },
    "half-bass-quiz": {
      text: "Tangan kirimu menahan not setengah. Berapa not seperempat yang dimainkan tangan kananmu di atasnya?",
      answers: ["Satu", "Dua", "Empat"],
    },
    "half-bass-tune": {
      text: "Giliranmu. Mainkan setiap not bas bersama not melodi di atasnya, lalu tahan selama not melodi berikutnya berbunyi.",
    },
    recap: {
      text: "Bagus sekali. Sekarang tangan kirimu menahan bas di bawah melodi.",
      points: [
        "Tangan kirimu bisa memainkan satu not bas panjang di bawah melodi yang bergerak.",
        "Tekan bas bersama not melodi, lalu tahan.",
        "Bas not penuh berbunyi empat ketukan, dan bas not setengah dua ketukan.",
      ],
    },
  },
};
