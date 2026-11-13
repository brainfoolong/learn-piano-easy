/** The guide of *The Sailor's Hornpipe* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe adalah melodi tarian yang riang dan sangat lekat dengan Angkatan Laut Kerajaan Inggris. " +
    "Kumpulan lagu dari masa awal mencetaknya dengan judul The College Hornpipe.",
  funFact: "Kartun Popeye buatan Max Fleischer dibuka dengan hornpipe ini, jadi banyak orang mengenalnya sebagai lagu Popeye.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 5 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 9 dengan tangan kanan saja. Melodi melompat dari A tinggi turun ke A rendah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi sepanjang birama, dan tidak pernah berpindah.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan jari 5 di G tinggi dan jari 4 di F kres. Lalu ibu jari menjangkau turun ke G rendah.",
        "Lepaskan G tinggi sedikit lebih awal. Di jeda singkat itu, rentangkan ibu jari turun satu oktaf.",
        "Hitung empat ketukan yang mantap di setiap birama. Hornpipe itu tarian, jadi jaga agar iramanya tetap memantul.",
      ],
      tricky: {
        4: "Ibu jari menyusup ke B setelah C. Lalu jari 2 dan 4 naik ke D dan G.",
        6: "Lepaskan A tinggi lebih awal. Lalu ibu jari turun satu oktaf ke A rendah.",
        8: "Ibu jari memainkan F kres, dan jari 2 memainkan A. Lalu jari 4 menjangkau naik ke D.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu akor dua not atau not kedua.",
        "Mainkan tangan kanan saja pada 9 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 10 sampai 16, tempat not seperdelapan dan akor dua not muncul.",
        "Gabungkan kedua tangan pada seluruh lagu, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Jari 5 memainkan G tinggi, dan ibu jari turun ke G rendah. Buka tanganmu selebar satu oktaf.",
        "Dua not seperdelapan mengisi satu ketukan. Hitung keduanya “1-dan”, dan mainkan dengan rata.",
        "Akhiri dengan B dan G bersamaan. Ibu jari dan jari 5 menekan keduanya sekaligus.",
      ],
      tricky: {
        4: "Ibu jari menyusup ke B setelah C. Lalu jari 2 dan 4 naik ke D dan G.",
        12: "Jari 3, 2, dan 3 memainkan D, B, dan D dengan cepat. Lalu jari 5 menjangkau naik ke G.",
        15: "Jari 2, 3, 4, dan 5 naik dari D ke A. Lalu jari 4 turun kembali ke F kres.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurainya mengalir dengan sendirinya.",
        "Mainkan tangan kanan saja pada birama 10 sampai 16, dan biarkan ibu jari menyusup saat naik.",
        "Mainkan 9 birama pertama dengan kedua tangan, dan ganti pedal di setiap akor baru.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal saat bas pindah ke akor baru. Lepaskan pedal, lalu injak lagi tepat setelah not bas.",
        "Susupkan ibu jari ke C setelah B. Lalu jari 2 mengambil D.",
        "Biarkan rentetan not cepat bernyanyi lembut di atas akor terurai, seperti biola di pesta dansa.",
      ],
      tricky: {
        10: "Jari 5, 3, 2, dan 1 berjalan turun di akor G. Lalu jari-jari itu naik kembali lewat jalan yang sama.",
        14: "Ibu jari melompat turun ke B. Lalu jari 2, 3, dan 5 naik di akor G sampai B tinggi.",
        17: "Mainkan akor terakhir dengan kedua tangan sekaligus. Biarkan pedal menahannya sampai akhir.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf tepat pada ketukan, lalu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek setelah setiap oktaf dan akor untuk melompat ke yang berikutnya.",
        "Biarkan arpeggio mengalun lembut di bawah rentetan not cepat tangan kanan.",
        "Setiap akor dilepas sedikit lebih awal. Pakai jeda itu untuk memindahkan seluruh tangan ke akor berikutnya.",
      ],
      tricky: {
        17: "Bentangkan tangan di atas G, B, D, dan G. Lalu turunkan satu oktaf ke B, D, dan G.",
        18: "Tangan naik dari akor G rendah sampai D di atas. Lalu jari 1 dan 4 mengambil G dan C.",
        19: "Tiga akor naik ke G tinggi. Biarkan pergelangan tangan tetap lemas, dan pimpin dengan jari 5.",
      },
    },
  },
};
