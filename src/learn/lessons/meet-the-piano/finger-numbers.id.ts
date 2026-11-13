/** *Finger numbers* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { FingerNumbersTexts } from "./finger-numbers.en";

export const fingerNumbersId: Translation<FingerNumbersTexts> = {
  title: "Nomor jari",
  steps: {
    "right-hand-numbers": {
      text: "Setiap jari punya nomor. Di tangan kananmu, ibu jari adalah 1 dan kelingking adalah 5. Jari di antaranya adalah 2, 3, dan 4.",
    },
    "finger-three-quiz": {
      text: "Jari mana yang nomor 3?",
      answers: ["Ibu jarimu", "Jari tengahmu", "Kelingkingmu"],
    },
    "left-hand-numbers": {
      text: "Tangan kirimu dihitung dengan cara yang sama: ibu jari adalah 1 dan kelingking adalah 5. Kedua ibu jari adalah 1, jadi nomornya saling bercermin.",
    },
    "left-thumb-quiz": {
      text: "Ibu jari kirimu nomor berapa?",
    },
    "five-fingers-demo": {
      text: "Perhatikan lima tuts berurutan, satu untuk setiap jari tangan kananmu. Ibu jarimu memainkan tuts pertama, lalu jari 2, 3, 4, dan 5.",
    },
    "right-hand-five": {
      text: "Sekarang kamu yang memainkannya. Letakkan ibu jari kananmu di C tengah, dan satu jari di setiap tuts putih di kanannya. Mainkan dengan jari 1, 2, 3, 4, dan 5.",
    },
    "finger-pattern": {
      text: "Biarkan tanganmu di tempatnya. Mainkan jari 1, 3, 5, 3, 1.",
    },
    "left-hand-five": {
      text: "Sekarang tangan kirimu. Letakkan kelingkingmu, jari 5, di C yang ditandai. Mainkan sampai ke ibu jari: 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Bagus sekali. Sekarang jarimu punya nomor.",
      points: [
        "Ibu jarimu adalah 1 dan kelingkingmu adalah 5.",
        "Kedua tangan dihitung dengan cara yang sama, mulai dari ibu jari.",
        "Nomor dalam pelajaran menunjukkan jari mana yang bermain.",
      ],
    },
  },
};
