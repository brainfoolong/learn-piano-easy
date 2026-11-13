/** *Sitting at the piano* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { SittingAtThePianoTexts } from "./sitting-at-the-piano.en";

export const sittingAtThePianoId: Translation<SittingAtThePianoTexts> = {
  title: "Duduk di depan piano",
  steps: {
    "face-middle-c": {
      text: "Permainan yang baik dimulai dari cara duduk. Duduk di tengah piano, dengan C tengah tepat di depanmu. Dengan begitu, kedua tangan mudah menjangkau tutsnya.",
    },
    "find-middle-c": {
      text: "Tekan C tengah, yaitu tuts yang ada di depanmu.",
    },
    "bench-and-feet": {
      text: "Duduk di separuh depan bangku, jangan sampai ke belakang. Jaga punggungmu tegak dan rileks. Letakkan kedua telapak kaki rata di lantai.",
    },
    "bench-quiz": {
      text: "Di bagian mana dari bangku kamu duduk?",
      answers: [
        "Di separuh depan, dengan kedua telapak kaki rata di lantai",
        "Jauh di belakang, sambil bersandar",
        "Di tepi paling ujung, dengan kaki tidak menyentuh lantai",
      ],
    },
    forearms: {
      text: "Lengan bawahmu sebaiknya sejajar dengan tuts, tidak miring ke atas ataupun ke bawah. Naikkan atau turunkan bangku sampai sejajar. Biarkan bahumu santai.",
    },
    "forearms-quiz": {
      text: "Kapan tinggi bangku sudah pas untukmu?",
      answers: [
        "Saat sikumu jauh di bawah tuts",
        "Saat lengan bawahmu sejajar dengan tuts",
        "Saat tanganmu menggantung ke tuts dari atas",
      ],
    },
    "curved-fingers": {
      text: "Lengkungkan jarimu dengan lembut, seolah kamu memegang bola kecil. Tekan tuts dengan ujung jari, bukan dengan jari yang datar. Tanganmu tetap rileks sepanjang waktu.",
    },
    "fingers-quiz": {
      text: "Bagaimana posisi jarimu di atas tuts?",
      answers: ["Datar dan terentang", "Kaku dan saling menempel erat", "Rileks dan melengkung, bermain dengan ujung jari"],
    },
    "relaxed-play": {
      text: "Bayangkan ada bola kecil di tanganmu, lalu mainkan tuts yang ditandai dengan ujung jari. Tetap santai, dari bahu sampai ke jari.",
    },
    "posture-quiz": {
      text: "Mana cara duduk yang baik di depan piano?",
      answers: [
        "Di ujung belakang bangku, dengan jari datar",
        "Menghadap C tengah di bagian depan bangku, lengan bawah sejajar, jari melengkung",
        "Duduk rendah, dengan lengan terangkat untuk menjangkau tuts",
      ],
    },
    recap: {
      text: "Bagus sekali. Kamu tahu cara duduk di depan piano.",
      points: [
        "Duduk menghadap C tengah, di separuh depan bangku, dengan telapak kaki rata.",
        "Lengan bawahmu sejajar dengan tuts.",
        "Jarimu tetap rileks dan melengkung, dan kamu bermain dengan ujungnya.",
      ],
    },
  },
};
