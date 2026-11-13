/** *Find C* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { FindCTexts } from "./find-c.en";

export const findCId: Translation<FindCTexts> = {
  title: "Temukan C",
  steps: {
    "hear-cs": {
      text: "Dengarkan dan perhatikan. Piano memainkan empat tuts dari rendah ke tinggi. Semuanya punya nama yang sama: C.",
    },
    "c-rule": {
      text: "Cari kelompok dua tuts hitam. Tuts putih tepat di kirinya adalah C. Setiap kelompok dua punya C di sampingnya.",
    },
    "find-any-c": {
      text: "Temukan C di mana saja di piano. Cari dua tuts hitam, lalu tekan tuts putih di sebelah kirinya.",
    },
    "middle-c": {
      text: "C di dekat bagian tengah piano punya nama sendiri: C tengah. Banyak lagu dimulai dari C ini, jadi kamu akan sering bertemu C tengah.",
    },
    "find-middle-c": {
      text: "Sekarang tekan C tengah, yaitu C yang paling dekat dengan bagian tengah piano.",
    },
    "find-high-c": {
      text: "Temukan C berikutnya di kanan C tengah. Bunyinya lebih tinggi.",
    },
    "find-low-c": {
      text: "Sekarang temukan C tepat di kiri C tengah. Bunyinya lebih rendah.",
    },
    "cs-low-to-high": {
      text: "Mainkan empat C dari rendah ke tinggi, mulai dari C tepat di bawah C tengah. Setiap kali, cari kelompok dua tuts hitam berikutnya di sebelah kanan.",
    },
    "c-quiz": {
      text: "Di mana letak C?",
      answers: [
        "Tepat di kanan kelompok dua tuts hitam",
        "Tepat di kiri kelompok dua tuts hitam",
        "Tepat di kiri kelompok tiga tuts hitam",
      ],
    },
    recap: {
      text: "Bagus sekali. Kamu bisa menemukan C di mana saja di piano.",
      points: [
        "C adalah tuts putih tepat di kiri setiap kelompok dua tuts hitam.",
        "Piano punya C di setiap bagiannya, dari rendah ke tinggi.",
        "C di dekat bagian tengah disebut C tengah.",
      ],
    },
  },
};
