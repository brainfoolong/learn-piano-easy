/** The guide of *Can-can* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach menulis Galop infernal untuk pesta liar para dewa yang menutup operetanya, Orpheus in the Underworld, yang pertama kali dipentaskan pada tahun 1858. " +
    "Pada tahun 1890-an, kabaret Paris Moulin Rouge dan Folies Bergère memakainya untuk mengiringi tarian can-can. " +
    "Film Moulin Rouge! (2001) memakainya dalam musiknya.",
  funFact:
    "Not utama melodinya sama dengan not utama dua lagu yang jauh lebih lambat di babak yang sama. " +
    "Namun, bunyinya sama sekali tidak mirip.",
  versions: {
    common: {
      practice: [
        "Mainkan 7 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 8 sampai 16 dengan tangan kanan saja. Tangan tetap di tempat yang sama.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama setengah atau satu birama penuh.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan G pertama selama empat ketukan. Para penari menunggu musik dimulai.",
        "Jari 5 memainkan dua D pertama. Lalu jari 4 memainkan D, agar jari 5 bisa menjangkau E.",
        "Mainkan not seperempat dengan pendek dan memantul, seperti penari yang menendangkan kaki.",
      ],
      tricky: {
        4: "Ganti jari 5 dengan jari 4 pada D. Lalu jari 5 menjangkau E, dan jari 2 turun ke B.",
        5: "Jari 3 meninggalkan C, dan jari 2 memainkan A dua kali. Tahan setiap A selama dua ketukan.",
        10: "Jari 5 memainkan D, lalu jari 3 turun ke B. Ibu jari tetap di atas G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not bas datang tepat pada ketukan, lalu satu akor dua not menjawabnya.",
        "Mainkan tangan kanan saja pada 7 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh, seperti di gedung dansa pada tengah malam.",
      ],
      tips: [
        "Tangan kiri bermain di setiap ketukan: satu not rendah, lalu satu akor. Hitung “satu, dua”.",
        "Akor dua not memakai jari 1 dan 2, jari 2 dan 4, atau jari 3 dan 5.",
        "Mainkan tangan kiri dengan ringan dan pendek, agar melodi bisa menari di atasnya.",
      ],
      tricky: {
        4: "Ganti jari 5 dengan jari 4 pada D. Lalu jari 5 menjangkau E, dan jari 2 turun ke B.",
        11: "Setelah pasangan not G dan B, jari 4 memainkan C dan jari 2 memainkan A. Tangan kiri memainkan D, lalu A dan C.",
        15: "Tangan kanan memainkan C, A, B, dan C. Tangan kiri memainkan D, lalu A dan C bersamaan.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan tangga nada di birama 8 saja. Ibu jari menyusup di bawah jari 3 ke C.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap akor baru. Di birama 4, pedal berganti di tengah birama.",
        "Tangga nada naik dari G dengan jari 1, 2, dan 3. Lalu ibu jari menyusup ke C.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari atas memimpin.",
      ],
      tricky: {
        11: "Ibu jari mendarat di C, dan jari 3 menyeberanginya turun ke A.",
        18: "Angkat sekst sedikit lebih awal. Lalu jari 2 mendarat di A, dan jari 4 menjangkau C.",
        23: "Mainkan sekst dengan pendek. Lalu ibu jari memainkan D, dan jari 3 memainkan F kres.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan oktaf tangan kanan saja. Jaga jari 1 dan 5 tetap kokoh, dan biarkan pergelangan memantul.",
        "Mainkan arpeggio tangan kiri saja. Jari 3 menyeberangi ibu jari.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf untuk melompat ke oktaf berikutnya.",
        "Tangga nada berjalan sepanjang dua oktaf. Ibu jari menyusup di setiap C dan setiap G.",
        "Biarkan arpeggio mengalir lembut di bawah rentetan not cepat, dan ganti pedal di setiap birama.",
      ],
      tricky: {
        17: "Rentangkan tangan di atas G, B, D, dan G. Lalu, pada tanda istirahat, tangan melompat naik satu oktaf ke A.",
        21: "Mainkan A, D, dan A dengan jari 1, 2, dan 5. Melompatlah kembali dari C tinggi pada tanda istirahat sebelumnya.",
        23: "Setelah akor, rentetan not naik dari D. Ibu jari menyusup di G.",
      },
    },
  },
};
