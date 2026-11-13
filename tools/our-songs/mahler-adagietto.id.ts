/** The guide of *Adagietto* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Adagietto adalah bagian keempat yang lambat dari Simfoni Kelima karya Mahler, yang pertama kali dimainkan di Köln pada tahun 1904. " +
    "Film Death in Venice karya Luchino Visconti dari tahun 1971 membuatnya terkenal jauh di luar gedung konser.",
  funFact: "Sejak film itu, karya ini menjadi musik Mahler yang paling terkenal.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Birama 5 punya sebuah B, dan birama 6 dan 7 punya F kres.",
        "Sekarang tangan kiri saja. Tangan kiri menahan setiap not selama setengah atau satu birama penuh.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung istirahat selama lima not seperempat. Lalu C, D, dan E mengantar masuk ke melodi dengan lembut.",
        "Mainkan F kedua dengan ibu jari. Lalu jari 4 dan 3 meraih B mol dan A.",
        "Musik ini lambat dan lembut. Biarkan setiap not panjang bernyanyi, dan jangan pernah terburu-buru.",
      ],
      tricky: {
        4: "Mainkan C pertama dengan jari 5, lalu ulangi dengan jari 4. Lalu jari 5 memainkan D.",
        5: "B adalah tuts putih, dan B mol sesudahnya tuts hitam. Jari 3 dan 2 memainkannya.",
        11: "Jari 4, 3, dan 2 turun dari B mol ke G. Lalu ibu jari memainkan E.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Not rendah datang tepat pada ketukan, dan sebuah akor menjawabnya.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri bermain di setiap ketukan: not rendah, lalu akor. Hitung “satu, dua”.",
        "Mainkan tangan kiri dengan sangat lembut, agar melodi melayang di atasnya.",
        "Jari 3 dan 5 menekan B mol dan D bersamaan. Biarkan D bernyanyi sedikit lebih jelas.",
      ],
      tricky: {
        5: "B adalah tuts putih, dan B mol sesudahnya tuts hitam. Awalnya tangan kiri hanya memainkan G dan D.",
        7: "Ibu jari memainkan F kres lebih dulu, dan F di akhir. Di tengah birama, tangan kiri pindah dari B mol ke C.",
        14: "Jari 4 memainkan B mol dua kali di birama ini. Di tengah birama, tangan kiri pindah dari F ke G.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Mainkan bas Alberti dengan lembut dan rata, seperti harpa di bawah biola.",
        "Melodinya adalah not atas setiap pasangan not, jadi biarkan jari atas memimpin.",
      ],
      tricky: {
        18: "Ibu jari turun dari C ke A untuk sekst. Lalu ibu jari naik ke F untuk not-not tunggal.",
        23: "Rentangkan tangan dari D ke B mol untuk sekst. Lalu jari 4, 3, dan 2 turun ke F.",
        24: "Ibu jari turun dari E ke B mol, sementara jari 3 dan 5 memainkan E dan G.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf tepat pada ketukan, lalu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan akor tangan kanan saja, dan biarkan jari atas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke posisi berikutnya.",
        "Biarkan arpeggio mengalir lembut di bawah melodi, dan ganti pedal di setiap akor baru.",
        "Mainkan not atas setiap akor sedikit lebih keras daripada not lainnya.",
      ],
      tricky: {
        14: "Tangan kiri naik dua oktaf dari B mol, lalu dari G. Setiap kali, jari 3 menyeberang di atas ibu jari.",
        16: "Tangan kanan menahan F sepanjang birama, sementara tangan kiri naik dua kali dari F.",
        17: "Setelah F, ibu jari melompat naik ke C. Lalu jari 2 dan 3 naik ke D dan E.",
      },
    },
  },
};
