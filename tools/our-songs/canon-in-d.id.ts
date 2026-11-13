/** The guide of *Canon in D* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Pachelbel menulis kanon ini sekitar tahun 1700, untuk tiga biola dengan iringan bas. " +
    "Bas memainkan delapan not yang sama berulang-ulang, sementara setiap biola masuk dengan melodi yang sama. " +
    "Karya ini terlupakan sampai Gustav Beckmann pertama kali mencetaknya pada tahun 1919. " +
    "Film Ordinary People membuatnya terkenal pada tahun 1980.",
  funFact:
    "Kanon ini hampir tidak dikenal sampai akhir tahun 1960-an. " +
    "Kini, karya ini termasuk yang paling sering dimainkan di pesta pernikahan.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Sekarang tangan kiri saja. Delapan not yang sama kembali tiga kali.",
        "Gabungkan kedua tangan pada 4 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Melodi berjalan turun satu tuts demi satu tuts, dari jari 5 sampai ibu jari.",
        "Setiap not bas berlangsung dua ketukan. Biarkan not itu berbunyi di bawah melodi.",
        "Sekarang melodi bergerak dalam not seperempat, dua kali lebih cepat dari sebelumnya. Hitung empat di setiap birama.",
      ],
      tricky: {
        5: "Jari 5 kembali ke C di puncak, dan melodi berjalan turun lagi.",
        7: "Pindahkan tangan satu tuts lebih rendah: jari 2 pindah dari G ke F, dan ibu jari memainkan E.",
        8: "Jari 3 memainkan F dan jari 2 memainkan D, agar ibu jari siap untuk C.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja sepanjang melodi yang menurun, pelan-pelan.",
        "Mainkan tangan kiri saja: satu not rendah dengan jari 5, lalu satu not lebih tinggi dengan ibu jari.",
        "Mainkan terts di birama 13 dan 14 saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Bas memainkan delapan not yang sama sepanjang karya ini. Mainkan dengan lembut dan rata.",
        "Sekarang melodi bergerak di setiap ketukan, sementara bas tetap berjalan dengan teratur.",
        "Dalam kanon, setiap biola memainkan melodi yang sama pada waktu yang berbeda. Di sini dua biola berbunyi bersamaan, berjarak satu terts.",
      ],
      tricky: {
        6: "Jari 4 pindah dari C kres turun ke B, dan tangan bergeser satu tuts lebih rendah.",
        8: "Jari 3 memainkan G dan jari 2 memainkan E, agar ibu jari siap untuk D.",
        12: "Akhiri birama dengan ibu jari di G. Lalu jari 5 menjangkau naik ke F kres.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan sekst tangan kanan saja. Jaga tangan dalam satu posisi, dan gerakkan sebagai satu kesatuan.",
        "Mainkan rentetan not cepat di birama 13 sampai 16 saja, pelan-pelan, dengan penjarian yang tertulis.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar not panjang melodi bernyanyi di atasnya.",
        "Ibu jari dan jari 4 memainkan setiap sekst. Melodinya adalah not teratas.",
        "Lepaskan pedal untuk rentetan not cepat, agar setiap not tetap jernih.",
      ],
      tricky: {
        6: "Geser sekst turun satu tuts demi satu tuts. Ibu jari dan jari 4 menjaga posisinya.",
        16: "Jari 3 dan 2 menyeberangi ibu jari saat rentetan not turun. Jaga pergelangan tangan tetap diam.",
        17: "Dari E terakhir, buka tangan ke D, F kres, dan D tinggi dalam satu gerakan.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas oktaf saja: tahan setiap oktaf, lalu angkat tangan untuk oktaf berikutnya.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan not seperenambelas tangan kiri saja sampai mengalir.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Di tangan kiri, jaga ibu jari dan kelingking berjarak satu oktaf, dan gerakkan tangan dalam satu posisi.",
        "Mainkan not teratas setiap akor sedikit lebih keras dari not lainnya.",
        "Mainkan not seperenambelas tangan kiri dengan lembut, ringan, dan rata, di bawah melodi.",
      ],
      tricky: {
        2: "Ibu jari tetap di F kres untuk kedua akor. Gerakkan jari 3 dan 5 saja.",
        5: "Tangan kiri melompat naik ke oktaf D, sementara ibu jari kanan bergeser dari E ke F kres.",
        9: "Di sini tangan kiri mulai memainkan not seperenambelas. Mulai pelan-pelan, dan biarkan melodi berjalan di atasnya.",
      },
    },
  },
};
