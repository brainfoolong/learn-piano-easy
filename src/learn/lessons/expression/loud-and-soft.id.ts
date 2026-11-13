/** *Loud and soft* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { LoudAndSoftTexts } from "./loud-and-soft.en";

export const loudAndSoftId: Translation<LoudAndSoftTexts> = {
  title: "Keras dan lembut",
  steps: {
    "soft-and-loud-demo": {
      text: "Dengarkan C, D, E, F, dan G dimainkan dua kali. Pada putaran pertama bunyinya lembut, dan pada putaran kedua keras.",
    },
    "key-speed": {
      text: "Keras lembutnya bunyi not bergantung pada seberapa cepat tutsnya turun. Tuts yang ditekan pelan dan lambat berbunyi lembut. Tuts yang ditekan cepat berbunyi keras.",
    },
    "what-makes-loud": {
      text: "Apa yang membuat not berbunyi lebih keras?",
      answers: [
        "Menahan tuts lebih lama",
        "Menekan tuts yang lebih ke kiri",
        "Menekan tuts lebih cepat",
        "Menekan tuts hitam",
      ],
    },
    "play-softly": {
      text: "Mainkan C, D, E, F, dan G dengan lembut, mulai dari C tengah. Tekan setiap tuts dengan pelan dan lambat.",
    },
    "hear-softly": {
      text: "Dengarkan C, D, E, F, dan G dimainkan dengan lembut. Setiap tuts turun dengan pelan dan lambat.",
    },
    "how-softly-sounded": {
      text: "Bagaimana bunyi kelima not tadi?",
      answers: ["Lembut", "Keras", "Lembut, lalu keras", "Keras, lalu lembut"],
    },
    "play-loudly": {
      text: "Sekarang mainkan kelima not yang sama dengan keras. Tekan setiap tuts dengan cepat dan mantap, tetapi jangan pernah memukulnya terlalu kuat.",
    },
    "hear-loudly": {
      text: "Dengarkan C, D, E, F, dan G dimainkan dengan keras. Setiap tuts turun dengan cepat dan mantap.",
    },
    "how-loudly-sounded": {
      text: "Bagaimana bunyi kelima not tadi?",
      answers: ["Lembut", "Lembut, lalu keras", "Keras, lalu lembut", "Keras"],
    },
    "piano-and-forte": {
      text: "Partitur menunjukkan seberapa keras kamu bermain dengan huruf di bawah paranada. Tanda p berarti piano, bahasa Italia untuk lembut. Tanda f berarti forte, bahasa Italia untuk keras.",
    },
    "what-f-asks": {
      text: "Kamu melihat tanda f di bawah paranada. Apa yang diminta tanda itu?",
      answers: [
        "Mainkan dengan lembut",
        "Mainkan dengan keras",
        "Mainkan dengan cepat",
        "Mainkan dengan lambat",
      ],
    },
    "mezzo-marks": {
      text: "Ada dua tanda di antara keduanya. Tanda mp berarti mezzo-piano, agak lembut. Tanda mf berarti mezzo-forte, agak keras.",
    },
    "softest-to-loudest": {
      text: "Urutan mana yang bergerak dari tanda paling lembut ke paling keras?",    },
    "echo-demo": {
      text: "Dengarkan frasa bertanda f, lalu gemanya yang bertanda p. Notnya sama, dan hanya kerasnya yang berubah.",
    },
    "play-the-echo": {
      text: "Mainkan C, E, dan G dengan keras, lalu mainkan lagi dengan lembut sebagai gema. Langkah ini hanya memeriksa not, jadi biarkan telingamu menilai kerasnya.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa bermain keras dan lembut.",
      points: [
        "Seberapa cepat tuts turun menentukan seberapa keras bunyinya.",
        "Tanda p berarti lembut, dan f berarti keras.",
        "Tanda mp dan mf ada di antara keduanya.",
      ],
    },
  },
};
