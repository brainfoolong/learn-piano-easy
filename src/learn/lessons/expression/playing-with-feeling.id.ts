/** *Playing with feeling* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { PlayingWithFeelingTexts } from "./playing-with-feeling.en";

export const playingWithFeelingId: Translation<PlayingWithFeelingTexts> = {
  title: "Bermain dengan perasaan",
  steps: {
    "all-the-marks": {
      text: "Sekarang kamu tahu tanda-tanda di dunia ini, seperti p dan f, tanda crescendo dan diminuendo, tanda legato, titik staccato, dan rit. Bersama-sama, tanda-tanda itu memberitahumu bagaimana sebuah karya seharusnya terasa.",
    },
    "read-the-marks": {
      text: "Sebuah melodi dimulai dengan p. Tanda legato menghubungkan empat not pertamanya, dan ada rit. di atas birama terakhirnya. Bagaimana kamu memainkannya?",
      answers: [
        "Keras dan pendek, makin cepat",
        "Keras dan mulus, tempo tetap",
        "Lembut dan pendek, tempo tetap",
        "Lembut dan mulus, makin lambat di akhir",
      ],
    },
    "flat-demo": {
      text: "Dengarkan melodi pendek yang setiap notnya sama keras dan sama panjang. Melodinya benar, tetapi tidak bercerita apa pun.",
    },
    "shaped-demo": {
      text: "Sekarang not yang sama, sekali lagi. Dengarkan betapa berbedanya rasanya kali ini.",
    },
    "what-changed": {
      text: "Notnya sama. Apa yang membuat putaran kedua terdengar hidup?",
      answers: [
        "Memakai not yang lain",
        "Lebih cepat dari awal sampai akhir",
        "Makin keras, lalu makin lembut, dan makin lambat di akhir",
        "Not terakhirnya dilewati",
      ],
    },
    "bright-demo": {
      text: "Dengarkan melodi dalam C mayor, dimainkan dengan keras dan agak pendek.",
    },
    "sad-demo": {
      text: "Sekarang kembarannya dalam A minor, dimainkan dengan lembut, lambat, dan mulus.",
    },
    "major-and-minor": {
      text: "Nada dasar mewarnai suasana. C mayor sering terdengar cerah dan gembira, dan A minor sering terdengar sedih. Kamu memilih sentuhan dan kecepatan yang cocok dengannya.",
    },
    "which-sounds-sad": {
      text: "Kamu ingin sebuah melodi terdengar sedih dan lembut. Mana yang paling cocok?",
      answers: [
        "C mayor, keras dan pendek",
        "A minor, lembut dan mulus",
        "C mayor, cepat dengan staccato",
        "A minor, keras dan tajam",
      ],
    },
    "play-bright": {
      text: "Mainkan melodi yang cerah: C tengah, E, G, C berikutnya, lalu turun lagi. Mainkan dengan mantap dan agak pendek.",
    },
    "play-sad": {
      text: "Mainkan melodi yang sedih: A di bawah C tengah, C, E, A di atasnya, lalu turun lagi. Mainkan dengan lembut dan sambungkan notnya.",
    },
    "elise-demo": {
      text: "Beginilah awal tantangan akhir, Für Elise. Karya ini dalam A minor, dimainkan dengan lembut di atas akor terurai di tangan kiri.",
    },
    "play-softly": {
      text: "Dengan tangan kananmu, mainkan not pertamanya dengan lembut: E, D kres, E, D kres, E, B, D, C, dan A. Mulai dari E kedua di atas C tengah, dan tekan setiap tuts dengan pelan.",
    },
    "hear-loud-and-soft": {
      text: "Dengarkan not pertama Für Elise dua kali. Pada putaran pertama bunyinya keras, dan pada putaran kedua lembut.",
    },
    "which-fits-elise": {
      text: "Für Elise bertanda p. Putaran mana yang cocok?",
      answers: [
        "Putaran kedua, yang lembut",
        "Putaran pertama, yang keras",
        "Keduanya, karena sama saja",
        "Tidak ada yang cocok",
      ],
    },
    "elise-left-demo": {
      text: "Dengarkan tangan kiri di tantangan akhir, dengan jari 5, 2, dan 1. Tangan kiri mengurai A minor sebagai A, E, dan A, lalu E mayor sebagai E, B, dan G kres. Posisi E mayor lebih lebar dari satu oktaf, jadi biarkan tanganmu bergeser naik sambil bermain.",
    },
    "elise-left-hand": {
      text: "Giliranmu. Mainkan A, E, dan A dari A kedua di bawah C tengah, lalu E, B, dan G kres dari E kedua di bawah C tengah. Akhiri dengan A, E, dan A lagi.",
    },
    "elise-octave-demo": {
      text: "Di birama 9, tangan kanan di tantangan akhir merentang satu oktaf. Ibu jari memainkan E di atas C tengah, dan jari 5 memainkan E satu oktaf lebih tinggi. Lalu melodinya berlanjut seperti awalnya.",
    },
    "elise-octave": {
      text: "Giliranmu. Rentangkan tanganmu selebar satu oktaf: ibu jari di E di atas C tengah, dan jari 5 di E berikutnya di atasnya. Mainkan frasa itu dengan lembut.",
    },
    "how-to-play-the-boss": {
      text: "Für Elise dalam A minor dan dimulai dengan p. Bagaimana kamu akan memainkannya?",
      answers: [
        "Keras dan cerah",
        "Cepat dan pendek",
        "Lembut dan halus, seperti lagu yang tenang",
        "Setiap not sama rata dan keras",
      ],
    },
    recap: {
      text: "Bagus sekali. Kamu sudah menyelesaikan pelajaran terakhir tahun pertama, dan Für Elise sudah menunggu.",
      points: [
        "Tanda dalam sebuah karya memberitahumu seberapa keras, seberapa mulus, dan seberapa cepat kamu bermain.",
        "Not yang sama terdengar hidup saat makin keras, surut, dan makin lambat.",
        "Nada dasar mayor sering terdengar cerah, dan nada dasar minor sering terdengar sedih.",
        "Kamu memilih sentuhan yang cocok dengan perasaan karya itu.",
      ],
    },
  },
};
