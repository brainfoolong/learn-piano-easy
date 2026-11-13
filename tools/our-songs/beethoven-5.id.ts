/** The guide of *Symphony No. 5* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Simfoni Kelima Beethoven dibuka dengan empat not, tiga pendek dan satu panjang. " +
    "Edisi cetak pertamanya terbit pada April 1809. " +
    "Film Fantasia 2000 (1999) dibuka dengan simfoni ini.",
  funFact:
    "Beethoven mempersembahkan simfoni ini kepada dua pelindungnya, Pangeran Joseph Franz von Lobkowitz dan Graf Razumovsky.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 12 dengan tangan kanan saja. Tanganmu tetap di satu tempat.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not selama satu birama penuh.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Istirahat pada ketukan 1. Lalu mainkan E pada ketukan 2, 3, dan 4.",
        "Mainkan tiga not pendek dengan tegas, dan biarkan not panjang berbunyi selama satu birama penuh.",
        "Ibu jari tetap di B, dan setiap jari menjaga tutsnya sendiri.",
      ],
      tricky: {
        1: "Istirahat pada ketukan 1, lalu mainkan E tiga kali dengan jari 4. Biarkan jarimu lemas untuk setiap not baru.",
        7: "Jari 5 memainkan F tiga kali. Angkat sedikit di antara not-notnya, agar setiap not berbunyi.",
        9: "Jari 4 dan 5 berayun di antara E dan F. Jaga kedua jari tetap dekat dengan tuts.",
      },
    },
    rare: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja. Not-not pendeknya adalah not seperdelapan.",
        "Mainkan tangan kiri saja. Not bas yang panjang datang lebih dulu, lalu dua akor pendek.",
        "Gabungkan kedua tangan pada birama 5 sampai 8, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap motif dimulai dengan tanda istirahat pendek. Lalu tiga not cepat membawa ke not yang panjang.",
        "Setiap birama memainkan lagi motif pembuka: tiga not pendek dan satu not panjang.",
        "Akhiri dengan C dan E bersamaan. Jari 2 dan 4 menekan keduanya sebagai satu.",
      ],
      tricky: {
        1: "Tiga E cepat mengikuti tanda istirahat pendek. Mainkan dengan jari 4, ringan dan rata.",
        5: "Mainkan tiga E cepat dengan jari 4. Lalu jari 2 menahan C selama setengah birama.",
        13: "Setelah tiga E cepat, jari 2 dan 4 menekan C dan E bersamaan.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan oktaf 4 birama pertama saja. Biarkan tanganmu terbuka dari ibu jari sampai kelingking.",
        "Mainkan tangga nada di birama 12 dengan tangan kanan saja. Biarkan ibu jari menyusup ke B mol.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan oktafnya dengan keras dan tajam, lalu biarkan setiap not panjang berbunyi.",
        "Ganti pedal di awal setiap birama, saat akornya berganti.",
        "Biarkan ibu jari menyusup ke B mol, lalu naik dengan jari 2 sampai 5.",
      ],
      tricky: {
        5: "Mainkan E mol tiga kali dengan jari 3. Lalu buka tanganmu lebar untuk C dan G.",
        10: "Mulai dari C tinggi dengan jari 5, lalu berjalan turun ke A mol. Sesudah itu, ibu jari turun ke E mol.",
        12: "Setelah A mol, biarkan ibu jari menyusup ke B mol. Lalu jari 2 sampai 5 naik ke F.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan akor tangan kanan saja, dan biarkan jari atas menyanyikan melodinya.",
        "Mainkan rentetan not cepat di birama 12 dengan tangan kanan saja. Ibu jari menyusup dua kali.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Tekan keempat not setiap akor sebagai satu, dengan not teratas sedikit lebih keras.",
        "Tangan kiri naik dua oktaf di setiap birama. Jari 3 menyeberang di atas ibu jari.",
        "Biarkan ibu jari menyusup ke B mol, dan sekali lagi ke F. Lalu jari 5 mencapai C.",
      ],
      tricky: {
        3: "Tangan kiri melompat dari G rendah naik ke akornya. Pakai tanda istirahat pendek setelah setiap oktaf untuk melompat.",
        4: "Tangan kanan menahan akornya. Biarkan tangan kiri melompat di antara G rendah dan akor di atasnya.",
        19: "Mainkan F dalam oktaf tiga kali, dengan tangan terbuka. Tangan kiri melompat dari G rendah seperti sebelumnya.",
      },
    },
  },
};
