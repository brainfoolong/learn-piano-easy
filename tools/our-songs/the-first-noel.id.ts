/** The guide of *The First Noel* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The First Noel adalah lagu Natal Inggris, dan tak seorang pun tahu siapa yang menulis melodinya. " +
    "Lagu ini diduga berasal dari Cornwall, di ujung barat daya Inggris. " +
    "Davies Gilbert mencetaknya pada 1823, dan William Sandys mencetaknya pada 1833. " +
    "John Stainer menggubahnya untuk paduan suara pada 1871, dan versinyalah yang dinyanyikan sampai sekarang.",
  funFact: "Noel berasal dari kata Prancis Noël, dan kata itu berasal dari kata Latin untuk kelahiran.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan refrein, birama 17 sampai 24, dengan tangan kanan saja.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "C pertama itu panjang. Hitung sampai tiga, lalu biarkan D, E, dan F naik dengan rata.",
        "Birama 9 sampai 16 sama dengan 8 birama pertama, jadi tanganmu sudah mengenalnya.",
        "Perlambat sedikit pada E terakhir, dan biarkan berbunyi bersama C rendah.",
      ],
      tricky: {
        2: "Jari 5 menahan G panjang. Angkat tangan saat tanda istirahat pendek, lalu daratkan jari 3 di A.",
        10: "Gerakan yang sama seperti birama 2: angkat tangan setelah G panjang, lalu daratkan jari 3 di A.",
        18: "Jari 5 menahan G panjang. Angkat tangan, dan biarkan jari yang sama mendarat di C tinggi.",
      },
    },
    rare: {
      practice: [
        "Mainkan bas wals saja: not rendah, akor, akor.",
        "Mainkan tangan kanan saja mulai dari birama gantung, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Lagu dimulai pada ketukan terakhir. Hitung “satu, dua”, lalu mainkan E dan D.",
        "Pada bas wals, mainkan not rendah sedikit lebih keras daripada akor sesudahnya.",
        "Birama 22 sampai 24 mengulang birama 6 sampai 8, jadi tanganmu sudah mengenalnya.",
      ],
      tricky: {
        3: "Jari 5 menahan G panjang. Angkat tangan saat tanda istirahat pendek, lalu daratkan jari 3 di A.",
        11: "Gerakan yang sama seperti birama 3: angkat tangan setelah G panjang, lalu daratkan jari 3 di A.",
        19: "Jari 5 menahan G panjang. Angkat tangan, dan biarkan jari yang sama mendarat di C tinggi.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan tanjakan birama 2 dan 3 dengan tangan kanan saja, dan biarkan ibu jari menyusup di F.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan bersamaan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal pada ketukan ketiga, saat akor berganti dari C ke G.",
      ],
      tricky: {
        2: "Jari 1, 2, dan 3 memainkan C, D, dan E. Lalu ibu jari menyusup di bawah jari 3 ke F.",
        16: "Satu sekst, lalu dua terts. Jari 2 tetap di E untuk dua yang pertama, dan ibu jari turun ke D.",
        24: "Pasangan yang sama seperti birama 16: satu sekst, dua terts, dan ibu jari turun ke D.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu naik kembali ke akor.",
        "Mainkan oktaf tangan kanan saja pada bait pertama, dengan pergelangan tangan yang lemas.",
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodinya.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktafnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Setiap oktaf dimainkan ibu jari dan kelingking. Pertahankan posisi tangan itu.",
        "Mainkan not-not rendah setiap akor lebih lembut, agar not teratas membawa melodi.",
      ],
      tricky: {
        5: "Setelah G panjang, oktaf bergerak cepat ke A dan B. Gerakkan seluruh tangan, dengan pergelangan tangan yang lemas.",
        7: "Oktaf naik melalui G, A, dan B. Biarkan tangan meluncur naik di atas tuts tanpa terangkat tinggi.",
        10: "Bentangkan tangan untuk akor C yang penuh, lalu rapatkan menjadi oktaf untuk D, E, dan F.",
      },
    },
  },
};
