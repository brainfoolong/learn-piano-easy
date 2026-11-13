/** The guide of *We Three Kings* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Pendeta Amerika John Henry Hopkins Jr. menulis lagu Natal ini pada 1857, untuk pertunjukan Natal di seminari tempat ia mengajar. " +
    "Lagu ini bercerita tentang orang-orang Majus dan persembahan mereka, dan diterbitkan pada 1863 dengan judul Three Kings of Orient. " +
    "Baitnya bernada dasar minor, dan refreinnya beralih ke mayor.",
  funFact: "Hopkins merancang lagu ini agar tiga pria masing-masing menyanyikan satu bait sendirian, satu untuk setiap raja.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 2 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, tempat melodi naik ke G lalu berjalan turun ke A.",
        "Sekarang tangan kiri saja. Tangan kiri hanya mengganti posisinya pada ketukan 1 dan 4.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap birama berisi dua kelompok tiga ketukan. Hitung “1-2-3” dua kali.",
        "Pada C kedua, ganti dari jari 3 ke ibu jari. Dengan begitu tanganmu siap naik ke G.",
        "Setelah C yang panjang, seluruh tangan bergeser satu tuts ke bawah, jadi jari 2 memainkan B.",
      ],
      tricky: {
        1: "Jari 5 memainkan E, jari 4 memainkan D, jari 3 memainkan C, lalu ibu jari meraih ke bawah ke A.",
        3: "Not-notnya sama seperti birama 1. Mainkan not panjang dengan penuh dan not pendek dengan ringan.",
        7: "Tahan C yang panjang dengan jari 2, lalu geser tanganmu ke bawah agar jari 2 memainkan B.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja pada 8 birama pertama, dan tekan ketiga not setiap akor bersamaan.",
        "Mainkan bas wals pada refrein saja: not rendah, akor, akor.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Baitnya bernada dasar minor. Mainkan dengan lembut dan rata, dan tahan setiap akor sepanjang birama.",
        "Tahan C dengan jari 2, lalu geser tanganmu satu tuts ke bawah agar jari 2 memainkan B.",
        "Refrein beralih ke mayor. Biarkan bunyinya lebih cerah, dan mainkan bas wals dengan ringan.",
      ],
      tricky: {
        1: "Jari 5 memainkan E, jari 4 memainkan D, jari 3 memainkan C, lalu ibu jari meraih ke bawah ke A.",
        5: "Not-notnya sama seperti birama 1, setelah tanda istirahat. Daratkan jari 5 di E sebelum mulai.",
        14: "Tahan C dengan jari 2, lalu geser tanganmu ke bawah agar jari 2 memainkan B. Tangan kiri berganti ke akor E.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Gabungkan kedua tangan pada bait, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Angkat tanganmu setelah D yang pendek, lalu daratkan ibu jari di E di bawahnya untuk refrein.",
        "Ibu jari dan jari 5 menahan sekst, dan tangan bergeser sebagai satu kesatuan dari tuts ke tuts.",
      ],
      tricky: {
        17: "Angkat tanganmu setelah D, lalu daratkan ibu jari di E dan jari 5 di C.",
        27: "Geser sekst naik ke A dan F, lalu turun kembali ke G dan E. Biarkan pergelangan tanganmu lemas.",
        28: "Sekst bergeser dari F dan D naik ke G dan E. Jari 5 memainkan melodinya.",
      },
    },
    legendary: {
      practice: [
        "Mainkan oktaf tangan kanan saja, dengan ibu jari dan jari 5 dalam satu posisi.",
        "Mainkan bas stride saja: lompat ke bawah untuk oktafnya, lalu kembali ke atas untuk akornya.",
        "Mainkan arpeggio tangan kiri saja pada birama 9 sampai 16.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada oktaf, perhatikan jari 5 yang memainkan melodi. Ibu jari mengikutinya dengan rabaan.",
        "Di setiap arpeggio, jari 3 menyeberang di atas ibu jari saat naik.",
        "Pada akor, mainkan jari yang di atas sedikit lebih keras, agar melodinya bernyanyi.",
      ],
      tricky: {
        3: "Oktaf bergeser dari B ke C lalu kembali, sementara tangan kiri melompat di antara E rendah dan akornya.",
        7: "Sama seperti birama 3. Mainkan oktaf dengan rata, dan jaga tanganmu tetap ringan.",
        9: "Tangan kiri memulai arpeggio pertamanya, naik dua oktaf dari C lalu kembali, di bawah C yang berulang.",
      },
    },
  },
};
