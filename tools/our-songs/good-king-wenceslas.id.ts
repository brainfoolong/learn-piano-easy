/** The guide of *Good King Wenceslas* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Melodinya adalah Tempus adest floridum, lagu musim semi dari abad ke-13. " +
    "Lagu ini pertama kali diterbitkan pada tahun 1582 dalam Piae Cantiones, sebuah buku lagu dari Finlandia. " +
    "Pada tahun 1853, penulis himne Inggris John Mason Neale menulis lirik baru untuknya, bersama editor musiknya, Thomas Helmore. " +
    "Lagu Natal ini bercerita tentang seorang raja Bohemia yang menembus cuaca musim dingin untuk memberi sedekah kepada seorang petani miskin.",
  funFact: "Semasa hidupnya, Wenceslas hanyalah seorang adipati. Legenda di kemudian hari mengenangnya sebagai raja.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 8 sampai 11, naik ke G tinggi lalu turun lagi ke A.",
        "Sekarang tangan kiri saja. Tangan kiri hanya berganti posisi pada ketukan 1 dan 3.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari mulai di G, dan jari 4 memainkan C yang diulang.",
        "Mainkan C kedua dengan ibu jari. Lalu kelingking meraih ke atas sampai G tinggi.",
        "Angkat tangan setelah C, lalu daratkan jari 2 di A.",
      ],
      tricky: {
        1: "Jari 4 memainkan C tiga kali, lalu jari 5 memainkan D. Ibu jari menunggu di atas G.",
        5: "Not yang sama dengan birama 1. Mainkan ketiga C dengan rata, dan D dengan ringan.",
        11: "Setelah tangan diangkat, jari 2 mendarat di A dan ibu jari memainkan G. Lalu jari 2 dan 3 naik ke A dan B.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja pada 8 birama pertama, dan tekan not setiap akor bersamaan.",
        "Mainkan tangan kiri saja mulai birama 9: satu not rendah, lalu akornya, satu di setiap ketukan.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan setiap akor dengan lembut selama dua ketukan, agar melodi berbunyi di atasnya.",
        "Mainkan C kedua dengan ibu jari. Lalu kelingking meraih ke atas sampai G tinggi.",
        "Mainkan not rendah sedikit lebih keras daripada akor sesudahnya.",
      ],
      tricky: {
        1: "Jari 4 memainkan C tiga kali, lalu jari 5 memainkan D. Tangan kiri memainkan akor C dua kali.",
        5: "Not yang sama dengan birama 1. Mainkan ketiga C dengan rata, dan D dengan ringan.",
        11: "Setelah tangan diangkat, jari 2 mendarat di A. Tangan kiri memainkan F, lalu C, lalu G, lalu akornya.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai tangan kiri saja, pada bait kedua.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Setelah C terakhir, tangan kanan melompat naik satu oktaf, dan tangan kiri turun ke C rendah.",
        "Ganti pedal setiap setengah birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        18: "Tangan kanan mulai lagi satu oktaf lebih tinggi, dan tangan kiri turun ke C rendah.",
        28: "Tangan kiri beristirahat setelah akor F, lalu melompat turun ke G rendah.",
        33: "Melodi melompat naik dari C ke F, sementara tangan kiri beristirahat lalu turun ke F rendah.",
      },
    },
    legendary: {
      practice: [
        "Mainkan oktaf tangan kanan saja, dengan ibu jari dan jari 5 dalam satu posisi.",
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu kembali naik ke akor.",
        "Mainkan akor tangan kanan saja, pada bait kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Dalam bas stride, lihat oktaf rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Jaga ibu jari dan jari 5 tetap terbentang selebar satu oktaf, dan biarkan pergelangan tangan membawa rentetan not cepat itu turun.",
        "Lepaskan setiap akor sedikit lebih awal untuk memindahkan tangan. Pedal menahan bunyinya.",
      ],
      tricky: {
        3: "Oktafnya bergeser ke A, G, A, dan B, sementara tangan kiri melompat dari F rendah ke akornya, lalu ke G.",
        7: "Sama seperti birama 3. Mainkan oktafnya dengan rata, dan biarkan pergelangan tangan lemas.",
        11: "Geser yang sama sekali lagi, setelah rentetan not cepat yang turun. Mainkan bas stride dengan ringan di bawah oktafnya.",
      },
    },
  },
};
