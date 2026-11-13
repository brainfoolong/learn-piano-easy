/** The guide of *Alle Jahre wieder* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Alle Jahre wieder dalam bahasa Jerman berarti “Setiap tahun lagi”. Lagu ini salah satu lagu Natal Jerman yang paling terkenal. " +
    "Wilhelm Hey menulis tiga baitnya pada 1837, dan isinya bercerita tentang Kanak-kanak Yesus yang turun ke bumi setiap tahun. " +
    "Friedrich Silcher menulis melodinya dan menerbitkannya pada 1842, dalam sebuah kumpulan dua belas lagu untuk anak-anak.",
  funFact:
    "Kata-kata yang sama juga dinyanyikan dengan melodi karya Christian Heinrich Rinck. Kini melodi itu lebih sering membawakan puisi lain, Abend wird es wieder.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Di sana melodinya naik sampai C tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi dan menggantinya paling banyak sekali per birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "G pertama panjang dan A pendek, seperti sedikit terangkat sebelum G kembali.",
        "Setelah D yang panjang, angkat tanganmu dan letakkan ibu jari di C tengah.",
        "Selagi C tinggi berbunyi, geser kelingking turun ke B.",
      ],
      tricky: {
        3: "Ibu jari mengambil C tengah, lalu jari 2, 3, dan 4 berjalan naik ke F dan bergeser kembali ke E.",
        6: "Kelingking memainkan C tinggi, lalu bergeser turun ke B. Jari 4 dan 3 mengambil A dan G.",
        14: "Geseran yang sama dengan birama 6: tahan C tinggi, lalu pindahkan kelingking turun ke B.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan bas bait kedua saja: not rendah, not tinggi, satu not pada setiap ketukan.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Untuk akor F, ibu jari menjangkau naik dari G ke A, lalu kembali untuk akor berikutnya.",
        "Di bait kedua, mainkan not rendah sedikit lebih keras daripada not tinggi.",
        "D dan E cepat, lalu F mendarat di tengah birama bersama akornya.",
      ],
      tricky: {
        3: "Ibu jari kanan pindah turun ke C tengah, sementara tangan kiri melepas E untuk akor kedua.",
        6: "Di sini kedua tangan bergerak. Ibu jari kiri menjangkau naik ke A, dan kelingking kanan bergeser turun ke B.",
        14: "Di atas F dan C yang rendah, kelingking kanan menahan C tinggi, lalu bergeser turun ke B.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan jaga kedua not setiap pasangan not tetap bersamaan.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap pasangan not, jadi biarkan jari atas yang memimpin.",
        "Ganti pedal di tengah birama, tempat akornya berganti.",
      ],
      tricky: {
        6: "Bas Alberti berganti dari F ke G7 di tengah birama. Ganti pedal bersamanya.",
        9: "Tangan kanan melompat satu oktaf ke atas dan memainkan pasangan not. Temukan pasangan pertama sebelum birama dimulai.",
        14: "A dan C, lalu G dan B, lalu F dan A: pasangan not itu bergeser turun, sementara kelingking memimpin.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun untuk oktafnya, lalu kembali naik untuk akornya.",
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodinya.",
        "Mainkan arpeggio bait kedua dengan tangan kiri saja.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Dalam bas stride, lihat oktafnya dan biarkan tanganmu menemukan akornya dengan rabaan.",
        "Di bagian tinggi, oktafnya harus berdenting seperti lonceng. Biarkan pergelangan tanganmu lemas.",
        "Di setiap arpeggio, jari 3 menyeberang di atas ibu jari saat naik.",
      ],
      tricky: {
        10: "Setelah arpeggio C, tangan kiri turun ke G rendah dalam tanda istirahat yang pendek.",
        12: "Tangan kanan menahan oktafnya, jadi perhatikan tangan kiri selama dua arpeggio G.",
        14: "Oktafnya melompat naik ke C tinggi, sementara tangan kiri berlari naik menyusuri akor F, lalu akor G7.",
      },
    },
  },
};
