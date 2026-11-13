/** *Black key groups* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { BlackKeyGroupsTexts } from "./black-key-groups.en";

export const blackKeyGroupsId: Translation<BlackKeyGroupsTexts> = {
  title: "Kelompok tuts hitam",
  steps: {
    "see-the-groups": {
      text: "Lihat tuts hitam. Tuts hitam berkelompok: mula-mula kelompok dua, lalu kelompok tiga. Pola ini berulang di sepanjang piano.",
    },
    "smaller-group-quiz": {
      text: "Berapa tuts hitam di kelompok yang lebih kecil?",
      answers: ["Satu", "Dua", "Tiga", "Empat"],
    },
    "two-left": {
      text: "Cari kelompok dua tuts hitam. Tekan tuts kirinya.",
    },
    "two-right": {
      text: "Sekarang tekan tuts kanan dari kelompok dua tuts hitam.",
    },
    "group-of-three": {
      text: "Di samping setiap kelompok dua ada kelompok tiga tuts hitam. Kelompok ini sedikit lebih lebar, jadi kamu cepat menemukannya.",
    },
    "three-left": {
      text: "Cari kelompok tiga tuts hitam. Tekan tuts kirinya.",
    },
    "three-middle": {
      text: "Sekarang tekan tuts tengah dari kelompok tiga tuts hitam.",
    },
    "all-five": {
      text: "Mainkan setiap tuts hitam dari kelompok dua, lalu dari kelompok tiga di sampingnya, dari kiri ke kanan.",
    },
    "find-your-way": {
      text: "Semua tuts putih tampak sama. Apa yang membantumu menemukan jalan di piano?",
      answers: ["Warna tuts putih", "Kelompok dua dan tiga tuts hitam", "Ukuran setiap tuts"],
    },
    "three-right": {
      text: "Yang terakhir: tekan tuts kanan dari kelompok tiga tuts hitam.",
    },
    recap: {
      text: "Bagus sekali. Kamu bisa menemukan jalan lewat tuts hitam.",
      points: [
        "Tuts hitam berkelompok dua dan tiga.",
        "Kedua kelompok itu bergantian di sepanjang piano.",
        "Kelompok itu menunjukkan di mana kamu berada di deretan tuts.",
      ],
    },
  },
};
