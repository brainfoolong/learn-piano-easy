/** The guide of *Night on Bald Mountain* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky menyelesaikan gambaran musiknya tentang pertemuan para penyihir di Gunung Gundul pada malam Santo Yohanes, 23 Juni 1867. " +
    "Pada 1886, lima tahun setelah ia wafat, Rimsky-Korsakov menerbitkan aransemennya sendiri. " +
    "Film Fantasia (1940) karya Walt Disney membuatnya terkenal, lewat aransemen Leopold Stokowski yang berdasar pada versi Rimsky-Korsakov.",
  funFact: "Bersama Sadko karya Rimsky-Korsakov, yang juga dari 1867, karya ini termasuk puisi simfonis pertama yang ditulis komponis Rusia.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Tangan mulai satu tuts lebih rendah, di G.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not selama satu birama penuh.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan melodi dengan keras dan berat, seperti alat musik tiup logam yang berseru di malam hari.",
        "Pakai tanda istirahat yang panjang untuk memindahkan tangan kanan naik ke G.",
        "Selama A berbunyi, bersiaplah memindahkan tangan turun. Lalu jari 3 mendarat di F.",
      ],
      tricky: {
        5: "Tangan sudah pindah naik. Jari 2 memainkan A, dan jari 3 memainkan B mol.",
        13: "Pindahkan tangan kanan turun, agar ibu jari berada di D. Jari 3 mulai di F.",
        23: "Pindahkan tangan kanan turun saat tanda istirahat. Jari 3 memainkan F, dan ibu jari berakhir di D.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Tangan kiri berbunyi pada ketukan 1, 3, dan 4 di setiap birama.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan melodi dengan keras dan berat, seperti alat musik tiup logam yang berseru di malam hari.",
        "Hitung empat ketukan di setiap birama. Bas berbunyi pada ketukan 1, 3, dan 4.",
        "Tangan kiri tidak pernah berpindah. Setiap jari tetap di tutsnya sendiri.",
      ],
      tricky: {
        5: "Tangan sudah pindah naik saat tanda istirahat. Jari 2 memainkan A, dan jari 3 memainkan B mol.",
        15: "Pindahkan tangan kanan turun, agar jari 2 memainkan E. Lalu jari 4 memainkan G.",
        31: "Pindahkan tangan kanan turun, agar ibu jari mendarat di D di akhir birama.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Di bawah melodi, tangan kiri melompat di antara dua not yang berjarak satu oktaf.",
        "Mainkan rentetan not cepat di birama 4 dengan tangan kanan saja. Susupkan ibu jari ke G.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Lepaskan pedal selama melodi berbunyi, agar setiap oktaf di bas tetap tegas.",
        "Dalam rentetan not cepat, susupkan ibu jari ke G, lalu naiklah dengan jari 2 sampai 5.",
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
      ],
      tricky: {
        4: "Susupkan ibu jari ke G, lalu biarkan jari 2, 3, 4, dan 5 naik ke D.",
        17: "Melodi melompat naik satu oktaf. Pakai tanda istirahat sebelumnya untuk memindahkan tangan.",
        25: "Turunkan tangan satu oktaf saat tanda istirahat. Jari 3 dan 5 memainkan terts pertama.",
      },
    },
    legendary: {
      practice: [
        "Mainkan rentetan not cepat di birama 4 dan 5 dengan tangan kanan saja, pelan sekali.",
        "Mainkan tangan kiri saja: oktafnya dulu, lalu dua not yang lebih cepat.",
        "Mainkan oktaf tangan kanan saja. Biarkan tangan terbuka, dengan ibu jari dan kelingking siap.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Rentetan not cepat ini berputar naik dan turun seperti angin. Mainkan dengan ringan dan rata.",
        "Biarkan kelingking menyanyikan not teratas setiap oktaf sedikit lebih keras.",
        "Mainkan akor terakhir dengan keras, dan tahan sampai bunyinya menghilang.",
      ],
      tricky: {
        13: "Tangan kiri melompat dari D rendah naik ke A dan F. Pakai tanda istirahat pendek untuk melompat turun kembali.",
        14: "Tangan kiri terbuka lebar, dari G rendah naik ke B mol. Jaga pergelangan tetap lemas.",
        17: "Oktaf dimulai. Buka tangan, dengan ibu jari di A dan kelingking di A di atasnya.",
      },
    },
  },
};
